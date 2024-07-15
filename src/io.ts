import {
  Abi,
  AbiFunction,
  AbiPrecision,
  F64_DIVIDERS,
  Value,
  PrimitiveType,
  type IPrimitiveLoader,
  GCEnum,
  GCObject,
  std_n,
} from './internal.js';

const deserialize_error: IPrimitiveLoader = () => {
  throw new Error(`invalid primitive type`);
};

function assert_buffer_has_enough_bytes(expr: boolean) {
  if (!expr) {
    throw new Error(`buffer overflow, not enough bytes`);
  }
}

/**
 * Little-endian cursor over an array of bytes
 */
export class Reader {
  protected readonly _buf: Uint8Array;
  protected _curr = 0;
  protected _view: DataView;
  readonly txt: TextDecoder;

  constructor(buf: ArrayBuffer) {
    this._buf = new Uint8Array(buf);
    // see https://v8.dev/blog/dataview if you don't trust me on using DataView rather than manual LE reads on _buf
    this._view = new DataView(buf);
    this.txt = new TextDecoder('utf-8');
  }

  get is_empty(): boolean {
    return this._curr >= this._buf.byteLength;
  }

  read_vu32(): number {
    assert_buffer_has_enough_bytes(this._curr + 1 <= this._buf.byteLength);
    let header = this._buf[this._curr];
    let value = header & 0x7f;
    if (!(header & 0x80)) {
      this._curr += 1;
      return value;
    }
    header = this._buf[this._curr + 1];
    value |= (header & 0x7f) << 7;
    if (!(header & 0x80)) {
      this._curr += 2;
      return value;
    }
    header = this._buf[this._curr + 2];
    value |= (header & 0x7f) << 14;
    if (!(header & 0x80)) {
      this._curr += 3;
      return value;
    }
    header = this._buf[this._curr + 3];
    value |= (header & 0x7f) << 21;
    if (!(header & 0x80)) {
      this._curr += 4;
      return value;
    }
    header = this._buf[this._curr + 4];
    value |= header << 28;
    this._curr += 5;
    return value;
  }

  read_vi64(): bigint | number {
    let v = this._read_varint_u64();
    // unsigned -> signed
    v = (v >> 1n) ^ -(v & 1n);
    // lets try to keep it simple if the value is within JavaScript's number range
    return v >= Number.MIN_SAFE_INTEGER && v <= Number.MAX_SAFE_INTEGER ? Number(v) : v;
  }

  read_vi64_bigint(): bigint {
    const v = this._read_varint_u64();
    // unsigned -> signed
    return (v >> 1n) ^ -(v & 1n);
  }

  read_vu64(): bigint | number {
    const v = this._read_varint_u64();
    // lets try to keep it simple if the value is within JavaScript's number range
    return v >= Number.MIN_SAFE_INTEGER && v <= Number.MAX_SAFE_INTEGER ? Number(v) : v;
  }

  read_vu64_bigint(): bigint {
    return this._read_varint_u64();
  }

  read_u8(): number {
    assert_buffer_has_enough_bytes(this._curr + 1 <= this._buf.byteLength);
    const v = this._view.getUint8(this._curr);
    this._curr += 1;
    return v;
  }

  read_i8(): number {
    assert_buffer_has_enough_bytes(this._curr + 1 <= this._buf.byteLength);
    const v = this._view.getInt8(this._curr);
    this._curr += 1;
    return v;
  }

  decompress(byteLength: number) {
    const buffer = new ArrayBuffer(byteLength);
    const values = new BigUint64Array(buffer);

    const bit = { pos: 0 };
    let previous_decoding = 0n;
    let lz = 0;
    let tz = 0;
    let significant_bits = 0;
    let xor = 0n;

    for (let i = 0; i < values.length; i++) {
      let num_i = this._read_bit(bit);
      if (num_i === 1) {
        num_i = this._read_bit(bit);
        if (num_i === 1) {
          lz = this._read_6bits_i32(bit);
          significant_bits = this._read_6bits_i32(bit) + 1;
          tz = 64 - significant_bits - lz;
        }
        const num_u64 = this._read_xbit_u64(bit, significant_bits) << BigInt(tz);
        xor = previous_decoding ^ num_u64;
        values[i] = xor;
        previous_decoding = xor;
      } else {
        values[i] = previous_decoding;
      }
    }

    return buffer;
  }

  read_u16(): number {
    assert_buffer_has_enough_bytes(this._curr + 2 <= this._buf.byteLength);
    const v = this._view.getUint16(this._curr, true);
    this._curr += 2;
    return v;
  }

  read_u32(): number {
    this._view.byteOffset;
    assert_buffer_has_enough_bytes(this._curr + 4 <= this._buf.byteLength);
    const v = this._view.getUint32(this._curr, true);
    this._curr += 4;
    return v;
  }

  read_i32(): number {
    assert_buffer_has_enough_bytes(this._curr + 4 <= this._buf.byteLength);
    const v = this._view.getInt32(this._curr, true);
    this._curr += 4;
    return v;
  }

  read_u64(): bigint {
    assert_buffer_has_enough_bytes(this._curr + 8 <= this._buf.byteLength);
    const v = this._view.getBigUint64(this._curr, true);
    this._curr += 8;
    return v;
  }

  read_u64_number(): bigint | number {
    assert_buffer_has_enough_bytes(this._curr + 8 <= this._buf.byteLength);
    const v = this._view.getBigUint64(this._curr, true);
    this._curr += 8;
    return v >= Number.MIN_SAFE_INTEGER && v <= Number.MAX_SAFE_INTEGER ? Number(v) : v;
  }

  read_i64(): bigint {
    assert_buffer_has_enough_bytes(this._curr + 8 <= this._buf.byteLength);
    const v = this._view.getBigInt64(this._curr, true);
    this._curr += 8;
    return v;
  }

  read_i64_number(): bigint | number {
    assert_buffer_has_enough_bytes(this._curr + 8 <= this._buf.byteLength);
    const v = this._view.getBigInt64(this._curr, true);
    this._curr += 8;
    return v >= Number.MIN_SAFE_INTEGER && v <= Number.MAX_SAFE_INTEGER ? Number(v) : v;
  }

  read_f32(): number {
    assert_buffer_has_enough_bytes(this._curr + 4 <= this._buf.byteLength);
    const v = this._view.getFloat32(this._curr, true);
    this._curr += 4;
    return v;
  }

  read_f64(): number {
    assert_buffer_has_enough_bytes(this._curr + 8 <= this._buf.byteLength);
    const v = this._view.getFloat64(this._curr, true);
    this._curr += 8;
    return v;
  }

  read_pf64(precision: AbiPrecision): number {
    if (precision === AbiPrecision.p_0) {
      return this.read_f64();
    }
    return Number(this.read_vu64_bigint()) / F64_DIVIDERS[precision];
  }

  /**
   * Decodes UTF-8 strings
   */
  read_string(len: number): string {
    const bytes = this.take(len);
    return this.txt.decode(bytes);
  }

  take(n: number): Uint8Array {
    assert_buffer_has_enough_bytes(this._curr + n <= this._buf.byteLength);
    const v = this._buf.slice(this._curr, this._curr + n);
    this._curr += n;
    return v;
  }

  private _read_varint_u64(): bigint {
    assert_buffer_has_enough_bytes(this._curr + 1 <= this._buf.byteLength);
    let header = BigInt(this._buf[this._curr]);

    let unpacked = header & 0x7fn;
    if (!(header & 0x80n)) {
      this._curr += 1;
      return unpacked;
    }
    header = BigInt(this._buf[this._curr + 1]);
    unpacked |= (header & 0x7fn) << 7n;
    if (!(header & 0x80n)) {
      this._curr += 2;
      return unpacked;
    }
    header = BigInt(this._buf[this._curr + 2]);
    unpacked |= (header & 0x7fn) << 14n;
    if (!(header & 0x80n)) {
      this._curr += 3;
      return unpacked;
    }
    header = BigInt(this._buf[this._curr + 3]);
    unpacked |= (header & 0x7fn) << 21n;
    if (!(header & 0x80n)) {
      this._curr += 4;
      return unpacked;
    }
    header = BigInt(this._buf[this._curr + 4]);
    unpacked |= (header & 0x7fn) << 28n;
    if (!(header & 0x80n)) {
      this._curr += 5;
      return unpacked;
    }
    header = BigInt(this._buf[this._curr + 5]);
    unpacked |= (header & 0x7fn) << 35n;
    if (!(header & 0x80n)) {
      this._curr += 6;
      return unpacked;
    }
    header = BigInt(this._buf[this._curr + 6]);
    unpacked |= (header & 0x7fn) << 42n;
    if (!(header & 0x80n)) {
      this._curr += 7;
      return unpacked;
    }
    header = BigInt(this._buf[this._curr + 7]);
    unpacked |= (header & 0x7fn) << 49n;
    if (!(header & 0x80n)) {
      this._curr += 8;
      return unpacked;
    }
    header = BigInt(this._buf[this._curr + 8]);
    unpacked |= header << 56n;
    this._curr += 9;
    return unpacked;
  }

  private _read_bit(bit: { pos: number }): number {
    const b = this._buf[this._curr];
    const v = (b >> bit.pos++) & 1;
    if (bit.pos === 8) {
      bit.pos = 0;
      this._curr += 1;
    }
    return v;
  }

  private _read_6bits_i32(bit: { pos: number }): number {
    let num_i32 = 0;
    for (let i = 0; i < 6; i++) {
      const b = this._buf[this._curr];
      const v = (b >> bit.pos++) & 1;
      if (bit.pos === 8) {
        bit.pos = 0;
        this._curr++;
      }
      num_i32 = (num_i32 << 1) | v;
    }
    return num_i32;
  }

  private _read_xbit_u64(bit: { pos: number }, x: number): bigint {
    let num_u64 = 0n;
    for (let i = 0; i < x; i++) {
      const b = this._buf[this._curr];
      const v = (b >> bit.pos++) & 1;
      if (bit.pos === 8) {
        bit.pos = 0;
        this._curr++;
      }
      num_u64 = (num_u64 << 1n) | BigInt(v);
    }
    return num_u64;
  }
}

/**
 * Little-endian cursor over an array of bytes
 */
export class AbiReader extends Reader implements Iterable<unknown> {
  /**
   * Deserializes an ABI value to a JavaScript `Value`
   */
  readonly deserializers: Record<PrimitiveType, IPrimitiveLoader> = {
    [PrimitiveType.null]: this.read_null.bind(this),
    [PrimitiveType.bool]: this.read_bool.bind(this),
    [PrimitiveType.char]: this.read_char.bind(this),
    [PrimitiveType.int]: this.read_vi64.bind(this),
    [PrimitiveType.float]: this.read_f64.bind(this),
    [PrimitiveType.node]: (r) => {
      const ty = r.abi.types[r.abi.core_node_offset];
      return ty.loader(r, ty);
    },
    [PrimitiveType.node_time]: (r) => {
      const ty = r.abi.types[r.abi.core_node_time_offset];
      return ty.loader(r, ty);
    },
    [PrimitiveType.node_index]: (r) => {
      const ty = r.abi.types[r.abi.core_node_index_offset];
      return ty.loader(r, ty);
    },
    [PrimitiveType.node_list]: (r) => {
      const ty = r.abi.types[r.abi.core_node_list_offset];
      return ty.loader(r, ty);
    },
    [PrimitiveType.node_geo]: (r) => {
      const ty = r.abi.types[r.abi.core_node_geo_offset];
      return ty.loader(r, ty);
    },
    [PrimitiveType.geo]: (r) => {
      const ty = r.abi.types[r.abi.core_geo_offset];
      return ty.loader(r, ty);
    },
    [PrimitiveType.time]: (r) => {
      const ty = r.abi.types[r.abi.core_time_offset];
      return ty.loader(r, ty);
    },
    [PrimitiveType.duration]: (r) => {
      const ty = r.abi.types[r.abi.core_duration_offset];
      return ty.loader(r, ty);
    },
    [PrimitiveType.cubic]: (r) => {
      const ty = r.abi.types[r.abi.core_cubic_offset];
      return ty.loader(r, ty);
    },
    [PrimitiveType.tu2d]: (r) => {
      const ty = r.abi.types[r.abi.core_ti2d_offset];
      return ty.loader(r, ty);
    },
    [PrimitiveType.tu3d]: (r) => {
      const ty = r.abi.types[r.abi.core_ti3d_offset];
      return ty.loader(r, ty);
    },
    [PrimitiveType.tu4d]: (r) => {
      const ty = r.abi.types[r.abi.core_ti4d_offset];
      return ty.loader(r, ty);
    },
    [PrimitiveType.tu5d]: (r) => {
      const ty = r.abi.types[r.abi.core_ti5d_offset];
      return ty.loader(r, ty);
    },
    [PrimitiveType.tu6d]: (r) => {
      const ty = r.abi.types[r.abi.core_ti6d_offset];
      return ty.loader(r, ty);
    },
    [PrimitiveType.tu10d]: (r) => {
      const ty = r.abi.types[r.abi.core_ti10d_offset];
      return ty.loader(r, ty);
    },
    [PrimitiveType.tuf2d]: (r) => {
      const ty = r.abi.types[r.abi.core_tf2d_offset];
      return ty.loader(r, ty);
    },
    [PrimitiveType.tuf3d]: (r) => {
      const ty = r.abi.types[r.abi.core_tf3d_offset];
      return ty.loader(r, ty);
    },
    [PrimitiveType.tuf4d]: (r) => {
      const ty = r.abi.types[r.abi.core_tf4d_offset];
      return ty.loader(r, ty);
    },
    [PrimitiveType.enum]: this.read_enum.bind(this),
    [PrimitiveType.object]: this.read_object.bind(this),
    [PrimitiveType.block_ref]: deserialize_error,
    [PrimitiveType.function]: (r) => {
      const ty = r.abi.types[r.abi.core_function_offset];
      return ty.loader(r, ty);
    },
    [PrimitiveType.type]: (r) => {
      const ty = r.abi.types[r.abi.core_type_offset];
      return ty.loader(r, ty);
    },
    [PrimitiveType.undefined]: () => undefined,
    [PrimitiveType.stringlit]: this.read_stringlit.bind(this),
  };

  constructor(readonly abi: Abi, buf: ArrayBuffer) {
    super(buf);
  }

  *[Symbol.iterator](): Iterator<unknown> {
    while (!this.is_empty) {
      yield this.deserialize();
    }
  }

  /**
   * Reads `major(u16)`, `magic(u16)` and `version(u32)` prior to calling `deserialize()`
   * @returns {Value}
   */
  deserializeWithHeaders(): Value {
    this.headers();
    return this.deserialize();
  }

  headers(): [number, number, number] {
    const protocol = this.read_u16();
    if (protocol !== Abi.protocol_version) {
      throw new Error(
        `major version mismatch (expected=${Abi.protocol_version}, actual=${protocol})`,
      );
    }
    const magic = this.read_u16();
    const version = this.read_u32();

    return [protocol, magic, version];
  }

  /**
   * Reads a type byte and deserializes based on the corresponding `PrimitiveType`
   * @returns {Value}
   */
  deserialize(): Value {
    const id = this.read_u8();
    const deserializer = this.deserializers[id as PrimitiveType];
    if (!deserializer) {
      throw new Error(`unknown primitive type <${id}>`);
    }
    return deserializer(this);
  }

  read_null(): null {
    return null;
  }

  read_stringlit(): string {
    let id = this.read_vu32();
    id >>= 1;
    return this.abi.symbols[id];
  }

  read_bool(): boolean {
    return this.read_u8() != 0;
  }

  read_char(): string {
    return String.fromCharCode(this.read_u8());
  }

  read_object(): Value {
    const id = this.read_vu32();
    const type = this.abi.types[id];
    if (type === undefined) {
      throw new Error(`unknown type id '${id}'`);
    }
    return type.loader(this, type);
  }

  read_enum(): GCEnum {
    const id = this.read_vu32();
    const off = this.read_vu32();
    const type = this.abi.types[id];
    if (type === undefined) {
      throw new Error(`unknown enum id '${id}'`);
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    if (type.enum_values!.length > off) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      return type.enum_values![off];
    }
    throw new Error(`no value registered for enum '${id}' at field offset '${off}'`);
  }

  read_function(): AbiFunction {
    const module = this.read_vu32();
    const type = this.read_vu32();
    const name = this.read_vu32();
    const fqn =
      type === 0
        ? `${this.abi.symbols[module]}::${this.abi.symbols[name]}`
        : `${this.abi.symbols[module]}::${this.abi.symbols[type]}::${this.abi.symbols[name]}`;
    const fn = this.abi.fn_by_fqn.get(fqn);
    if (fn === undefined) {
      throw new Error(`unknown function '${fqn}'`);
    }
    return fn;
  }
}

/**
 * A growable Uint8Array to write little-endian values
 */
export class Writer {
  protected _buf: Uint8Array;
  protected _curr = 0;
  protected _view: DataView;
  readonly txt: TextEncoder;

  constructor(capacityOrBuffer: number | ArrayBuffer = 2048) {
    this._buf =
      typeof capacityOrBuffer === 'number'
        ? new Uint8Array(capacityOrBuffer)
        : new Uint8Array(capacityOrBuffer);
    // see https://v8.dev/blog/dataview
    this._view = new DataView(this._buf.buffer);
    this.txt = new TextEncoder();
  }

  /**
   * Returns a slice of the current writer buffer from `0` to `this._curr`
   */
  get buffer(): Uint8Array {
    return this._buf.slice(0, this._curr);
  }

  /**
   * Fills the buffer with zeroes and reset the cursor to `0`.
   *
   * This means that the already allocated space is kept.
   */
  clear() {
    this._buf.fill(0);
    this._curr = 0;
  }

  /**
   * Doubles the internal buffer length if unable to fit `n`, otherwise does nothing.
   * @param n number of bytes
   */
  private _reserve(n: number): void {
    if (this._buf.length >= this._curr + n) {
      return;
    }
    let newLen = this._buf.length * 2;
    if (newLen <= n) {
      newLen = closestUpperPowerOf2(n + this._buf.length);
    }
    const newBuf = new Uint8Array(newLen);
    newBuf.set(this._buf, 0);
    this._buf = newBuf;
    this._view = new DataView(this._buf.buffer);
  }

  write_u8(v: number) {
    this._reserve(1);
    this._view.setUint8(this._curr, v);
    this._curr += 1;
  }

  write_i8(v: number) {
    this._reserve(1);
    this._view.setInt8(this._curr, v);
    this._curr += 1;
  }

  write_u16(v: number) {
    this._reserve(2);
    this._view.setUint16(this._curr, v, true);
    this._curr += 2;
  }

  write_u32(v: number) {
    this._reserve(4);
    this._view.setUint32(this._curr, v, true);
    this._curr += 4;
  }

  /**
   * Reserves a `u32` slot to be updated later on
   */
  write_u32_slot(): { update: (v: number) => void } {
    this._reserve(4);
    const off = this._curr;
    this._curr += 4;
    return {
      update: (v) => {
        this._view.setUint32(off, v, true);
      },
    };
  }

  write_i32(v: number) {
    this._reserve(4);
    this._view.setInt32(this._curr, v, true);
    this._curr += 4;
  }

  write_vu32(v: number) {
    this._reserve(5); // maximum byte length of a varint 32

    this._buf[this._curr] = v & 0x7f;
    if (v < 0x80) {
      this._curr++;
      return;
    }

    this._buf[this._curr++] |= 0x80;
    v >>= 7;
    this._buf[this._curr] = v & 0x7f;
    if (v < 0x80) {
      this._curr++;
      return;
    }

    this._buf[this._curr++] |= 0x80;
    v >>= 7;
    this._buf[this._curr] = v & 0x7f;
    if (v < 0x80) {
      this._curr++;
      return;
    }

    this._buf[this._curr++] |= 0x80;
    v >>= 7;
    this._buf[this._curr] = v & 0x7f;
    if (v < 0x80) {
      this._curr++;
      return;
    }

    this._buf[this._curr++] |= 0x80;
    v >>= 7;
    this._buf[this._curr] = v;
    this._curr++;
  }

  write_vi64(v: bigint) {
    // zig-zag conversion to unsigned
    this.write_vu64((v << 1n) ^ (v >> 63n));
  }

  write_vu64(x: bigint) {
    this._reserve(9); // maximum byte length of a varint64
    this._buf[this._curr] = Number(x & 0x7fn);
    if (x < 0x80) {
      this._curr++;
      return;
    }

    this._buf[this._curr++] |= 0x80;
    x >>= 7n;
    this._buf[this._curr] = Number(x & 0x7fn);
    if (x < 0x80) {
      this._curr++;
      return;
    }

    this._buf[this._curr++] |= 0x80;
    x >>= 7n;
    this._buf[this._curr] = Number(x & 0x7fn);
    if (x < 0x80) {
      this._curr++;
      return;
    }

    this._buf[this._curr++] |= 0x80;
    x >>= 7n;
    this._buf[this._curr] = Number(x & 0x7fn);
    if (x < 0x80) {
      this._curr++;
      return;
    }

    this._buf[this._curr++] |= 0x80;
    x >>= 7n;
    this._buf[this._curr] = Number(x & 0x7fn);
    if (x < 0x80) {
      this._curr++;
      return;
    }

    this._buf[this._curr++] |= 0x80;
    x >>= 7n;
    this._buf[this._curr] = Number(x & 0x7fn);
    if (x < 0x80) {
      this._curr++;
      return;
    }

    this._buf[this._curr++] |= 0x80;
    x >>= 7n;
    this._buf[this._curr] = Number(x & 0x7fn);
    if (x < 0x80) {
      this._curr++;
      return;
    }

    this._buf[this._curr++] |= 0x80;
    x >>= 7n;
    this._buf[this._curr] = Number(x & 0x7fn);
    if (x < 0x80) {
      this._curr++;
      return;
    }

    this._buf[this._curr++] |= 0x80;
    x >>= 7n;
    this._buf[this._curr] = Number(x);
    this._curr++;
  }

  write_u64(v: bigint) {
    this._reserve(8);
    this._view.setBigUint64(this._curr, v, true);
    this._curr += 8;
  }

  write_u64_number(v: bigint | number) {
    this._reserve(8);
    this._view.setBigUint64(this._curr, typeof v === 'bigint' ? v : BigInt(v), true);
    this._curr += 8;
  }

  write_i64(v: bigint) {
    this._reserve(8);
    this._view.setBigInt64(this._curr, v, true);
    this._curr += 8;
  }

  write_i64_number(v: bigint | number) {
    this._reserve(8);
    this._view.setBigInt64(this._curr, typeof v === 'bigint' ? v : BigInt(v), true);
    this._curr += 8;
  }

  write_f32(v: number) {
    this._reserve(4);
    this._view.setFloat32(this._curr, v, true);
    this._curr += 4;
  }

  write_f64(v: number) {
    this._reserve(8);
    this._view.setFloat64(this._curr, v, true);
    this._curr += 8;
  }

  write_pf64(v: number, precision: AbiPrecision) {
    if (precision === AbiPrecision.p_0) {
      this.write_f64(v);
    } else {
      const x = v * F64_DIVIDERS[precision];
      this.write_vu64(BigInt(x | 0));
    }
  }

  write_bool(v: boolean) {
    this._reserve(1);
    this._view.setUint8(this._curr, v ? 1 : 0);
    this._curr += 1;
  }

  /**
   * Writes the given bytes to the underlying buffer.
   *
   * *This method does not write any length header.*
   * @param bytes
   */
  write_all(bytes: Uint8Array) {
    this._reserve(bytes.length);
    this._buf.set(bytes, this._curr);
    this._curr += bytes.length;
  }

  /**
   * Encodes the given string as UTF-8.
   *
   * This method writes the string's length as a vu32 before the actual UTF-8 bytes.
   */
  write_string(v: string) {
    const bytes = this.txt.encode(v);
    this.write_vu32(bytes.byteLength << 1);
    this.write_all(bytes);
  }
}

/**
 * A growable Uint8Array to write little-endian values
 */
export class AbiWriter extends Writer {
  constructor(readonly abi: Abi, capacityOrBuffer: number | ArrayBuffer = 2048) {
    super(capacityOrBuffer);
  }

  /**
   * Writes ABI headers into the buffer
   */
  headers(): void {
    this.write_u16(Abi.protocol_version);
    this.write_u16(this.abi.magic);
    this.write_u32(this.abi.version);
  }

  serialize(value: Value): void {
    // Typescript does not understand that 'value' as param must be of the right type
    // in regard to the method because we used typeof value;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (this[typeof value] as any)(value);
  }

  /**
   * Serializes the given value without type header
   * @param value
   */
  serializeRaw(value: Value): void {
    // Typescript does not understand that 'value' as param must be of the right type
    // in regard to the method because we used typeof value;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (this[`raw_${typeof value}`] as any)(value);
  }

  /**
   * Serializes a `number` as either an `int` or a `float` based on its value
   */
  number(value: number): void {
    // checks if value is a float or not
    if (value % 1 === 0) {
      this.write_u8(PrimitiveType.int);
      this.write_vi64(BigInt(value));
    } else {
      this.write_u8(PrimitiveType.float);
      this.write_f64(value);
    }
  }

  raw_number(value: number): void {
    if (value % 1 === 0) {
      this.write_vi64(BigInt(value));
    } else {
      this.write_f64(value);
    }
  }

  float(value: number): void {
    this.write_u8(PrimitiveType.float);
    this.write_f64(value);
  }

  /**
   * Serializes a `boolean`
   */
  boolean(value: boolean): void {
    this.write_u8(PrimitiveType.bool);
    this.write_bool(value);
  }

  raw_boolean(value: boolean): void {
    this.write_bool(value);
  }

  /**
   * Serializes `undefined`
   */
  undefined(): void {
    throw new Error(`Javascript 'undefined' is not serializable`);
  }

  raw_undefined(): void {
    throw new Error(`Javascript 'undefined' is not serializable`);
  }

  null(): void {
    this.write_u8(PrimitiveType.null);
  }

  char(c: string): void {
    this.write_u8(PrimitiveType.char);
    this.raw_char(c);
  }

  raw_char(c: string): void {
    if (c.length > 1) {
      throw new Error(`a 'char' is one ASCII character, got '${c}'`);
    }
    const code = c.charCodeAt(0);
    if (!isASCIICharCode(code)) {
      throw new Error(`invalid char code '${code}'`);
    }
    this.write_i8(code);
  }

  /**
   * Serializes a `string` either as a `stringlit` or an `object` (string)
   * based on whether or not the value is already present in the ABI symbols
   */
  string(value: string): void {
    const off = this.abi.off_by_symbol.get(value);
    if (off === undefined) {
      this.write_u8(PrimitiveType.object);
      this.write_vu32(this.abi.core_string_offset);
      this.write_string(value);
      return;
    }

    this.write_u8(PrimitiveType.stringlit);
    this.write_vu32((off << 1) | 1);
  }

  raw_string(value: string): void {
    const off = this.abi.off_by_symbol.get(value);
    if (off === undefined) {
      this.write_string(value);
      return;
    }

    this.write_vu32((off << 1) | 1);
  }

  /**
   * Serializes a `bigint` as `int`
   */
  bigint(value: bigint): void {
    this.write_u8(PrimitiveType.int);
    this.write_vi64(value);
  }

  raw_bigint(value: bigint): void {
    this.write_vi64(value);
  }

  /**
   * Serializes an `object` to either `null`, `object` (string), `object` (array), `object` (map)
   * or using the `GCObject.save()` method based on the value.
   */
  object(value: object): void {
    if (value instanceof GCObject) {
      value.save(this);
    } else if (value instanceof String) {
      this.string(value.valueOf());
    } else if (value instanceof Symbol) {
      this.symbol(value.valueOf());
    } else if (value instanceof Array) {
      new std_n.core.Array(this.abi.types[this.abi.core_array_offset], value).save(this);
    } else if (value instanceof Map) {
      new std_n.core.Map(this.abi.types[this.abi.core_map_offset], value).save(this);
    } else if (value === null) {
      this.write_u8(PrimitiveType.null);
    } else {
      throw new Error(`type '${value.constructor.name}' cannot be serialized`);
    }
  }

  /**
   * Serializes an `object` just like `object()` does but without the header
   * @param value
   */
  raw_object(value: object): void {
    if (value instanceof GCObject) {
      value.saveContent(this);
    } else if (value instanceof String) {
      this.raw_string(value.valueOf());
    } else if (value instanceof Symbol) {
      this.raw_symbol(value.valueOf());
    } else if (value instanceof Array) {
      new std_n.core.Array(this.abi.types[this.abi.core_array_offset], value).saveContent(this);
    } else if (value instanceof Map) {
      new std_n.core.Map(this.abi.types[this.abi.core_map_offset], value).saveContent(this);
    } else if (value === null) {
      // noop, 'null' are skipped when serializing without type header
    } else {
      throw new Error(`type '${value.constructor.name}' cannot be serialized`);
    }
  }

  /**
   * This always throws
   */
  function(): void {
    throw new Error('Javascript functions are not serializable');
  }

  raw_function(): void {
    throw new Error('Javascript functions are not serializable');
  }

  symbol(value: symbol): void {
    if (value.description) {
      this.string(value.description);
      return;
    }
    throw new Error('Javascript symbol without descriptions are not serializable');
  }

  raw_symbol(value: symbol): void {
    if (value.description) {
      this.raw_string(value.description);
      return;
    }
    throw new Error('Javascript symbol without descriptions are not serializable');
  }
}

function closestUpperPowerOf2(value: number) {
  if (value < 1) {
    return 1;
  }

  // subtract 1 from the number to get the closest power of 2 lower than the number
  let closestPower = value - 1;
  // then perform a bitwise OR operation to set all bits to the right of the highest set bit
  closestPower |= closestPower >>> 1;
  closestPower |= closestPower >>> 2;
  closestPower |= closestPower >>> 4;
  closestPower |= closestPower >>> 8;
  closestPower |= closestPower >>> 16;
  closestPower++;

  return closestPower;
}

function isASCIICharCode(code: number): boolean {
  return code >= 0 && code <= 127;
}

// /**
//  * Counts leading zeroes
//  * @param v
//  * @returns
//  */
// function clz64(v: bigint): number {
//   if (v === 0n) {
//     return 64;
//   }
//   return Math.clz32(Number(v >> 32n)) + Math.clz32(Number(v & 0xffffffffn));
// }

// /**
//  * Counts trailing zeroes
//  * @param v
//  */
// function ctz64(v: bigint): number {
//   if (v === 0n) {
//     return 64;
//   }
//   let tz = 0;
//   while ((v & 1n) === 0n) {
//     tz++;
//     v >>= 1n;
//   }
//   return tz;
// }
