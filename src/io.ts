import { Abi, PrimitiveType, Value, GCEnum, GCObject, std_n, AbiFunction, IPrimitiveLoader } from './index.js';

const deserialize_error: IPrimitiveLoader = () => {
  throw new Error(`invalid primitive type`);
};

function assert_buffer_has_enough_bytes(expr: boolean) {
  if (!expr) {
    throw new Error('ReadBuffer overflow, not enough bytes');
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
    this._buf = new Uint8Array(buf, 0, buf.byteLength);
    // see https://v8.dev/blog/dataview if you don't trust me on using DataView rather than manual LE reads on _buf
    this._view = new DataView(buf);
    this.txt = new TextDecoder('utf-8');
  }

  get is_empty(): boolean {
    return this._curr === this._buf.byteLength;
  }

  read_varint32(): number {
    assert_buffer_has_enough_bytes(this._curr + 1 <= this._buf.byteLength);
    const header = this._buf[this._curr];
    const nbytes = varint_32_len(header);
    const bytes = new Uint8Array(nbytes);
    bytes.set(this._buf.slice(this._curr, this._curr + nbytes), 0);
    this._curr += nbytes;
    return varint_32_unpack(bytes);
  }

  read_varint64(): bigint | number {
    assert_buffer_has_enough_bytes(this._curr + 1 <= this._buf.byteLength);
    const header = this._buf[this._curr];
    const nbytes = varint_64_len(header);
    const bytes = new Uint8Array(nbytes);
    bytes.set(this._buf.slice(this._curr, this._curr + nbytes), 0);
    this._curr += nbytes;
    const v = sign_of(varint_64_unpack(bytes));
    return v >= Number.MIN_SAFE_INTEGER && v <= Number.MAX_SAFE_INTEGER ? Number(v) : v;
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

  /**
   * Decodes UTF-8 strings
   */
  read_string(len: number): string {
    const bytes = this.take(len);
    return this.txt.decode(bytes);
  }

  take(n: number): ArrayBuffer {
    assert_buffer_has_enough_bytes(this._curr + n <= this._buf.byteLength);
    const v = this._buf.slice(this._curr, this._curr + n);
    this._curr += n;
    return v;
  }
}

/**
 * Little-endian cursor over an array of bytes
 */
export class AbiReader extends Reader {
  /**
   * Deserializes an ABI value to a JavaScript `Value`
   */
  readonly deserializers: Record<PrimitiveType, IPrimitiveLoader> = {
    [PrimitiveType.null]: this.read_null.bind(this),
    [PrimitiveType.bool]: this.read_bool.bind(this),
    [PrimitiveType.char]: this.read_char.bind(this),
    [PrimitiveType.int]: this.read_varint64.bind(this),
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
      const ty = r.abi.types[r.abi.core_tu2d_offset];
      return ty.loader(r, ty);
    },
    [PrimitiveType.tu3d]: (r) => {
      const ty = r.abi.types[r.abi.core_tu3d_offset];
      return ty.loader(r, ty);
    },
    [PrimitiveType.tu4d]: (r) => {
      const ty = r.abi.types[r.abi.core_tu4d_offset];
      return ty.loader(r, ty);
    },
    [PrimitiveType.tu5d]: (r) => {
      const ty = r.abi.types[r.abi.core_tu5d_offset];
      return ty.loader(r, ty);
    },
    [PrimitiveType.tu6d]: (r) => {
      const ty = r.abi.types[r.abi.core_tu6d_offset];
      return ty.loader(r, ty);
    },
    [PrimitiveType.tu10d]: (r) => {
      const ty = r.abi.types[r.abi.core_tu10d_offset];
      return ty.loader(r, ty);
    },
    [PrimitiveType.tuf2d]: (r) => {
      const ty = r.abi.types[r.abi.core_tuf2d_offset];
      return ty.loader(r, ty);
    },
    [PrimitiveType.tuf3d]: (r) => {
      const ty = r.abi.types[r.abi.core_tuf3d_offset];
      return ty.loader(r, ty);
    },
    [PrimitiveType.tuf4d]: (r) => {
      const ty = r.abi.types[r.abi.core_tuf4d_offset];
      return ty.loader(r, ty);
    },
    [PrimitiveType.enum]: this.read_enum.bind(this),
    [PrimitiveType.object]: this.read_object.bind(this),
    [PrimitiveType.block_ref]: deserialize_error,
    [PrimitiveType.function]: (r) => {
      const ty = r.abi.types[r.abi.core_function_offset];
      // TODO function type does not exist, shall we use AbiFunction or a specific Function type that only contains the resolved u32 of the function?
      return ty.loader(r, ty);
    },
    [PrimitiveType.undefined]: () => undefined,
    [PrimitiveType.stringlit]: this.read_stringlit.bind(this),
  };

  constructor(readonly abi: Abi, buf: ArrayBuffer) {
    super(buf);
  }

  /**
   * Reads `major(u16)`, `magic(u16)` and `version(u32)` prior to calling `deserialize()`
   * @returns {Value}
   */
  deserializeWithHeaders(): Value {
    this.headers();
    return this.deserialize();
  }

  headers(): void {
    const major = this.read_u16();
    if (major !== Abi.protocol_version) {
      throw new Error(`major version mismatch (expected=${Abi.protocol_version}, actual=${major})`);
    }
    const magic = this.read_u16();
    if (magic !== this.abi.magic) {
      throw new Error(`magic number mismatch (expected=${this.abi.magic}, actual=${magic})`);
    }
    const version = this.read_u32();
    if (version !== this.abi.version) {
      throw new Error(`version number mismatch (expected=${this.abi.version}, actual=${version})`);
    }
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
    let id = this.read_varint32();
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
    const id = this.read_varint32();
    const type = this.abi.types[id];
    if (type === undefined) {
      throw new Error(`unknown type id '${id}'`);
    }
    return type.loader(this, type);
  }

  read_enum(): GCEnum {
    const id = this.read_varint32();
    const off = this.read_varint32();
    const type = this.abi.types[id];
    const attr = type.attrs[off];
    // We want this line to actually fail at runtime if the value cannot be found
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new GCEnum(type, off, attr.name, type.enum_values![attr.mapped_att_offset]);
  }

  read_function(): AbiFunction {
    const module = this.read_varint32();
    const type = this.read_varint32();
    const name = this.read_varint32();
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

  constructor(capacity = 2048) {
    this._buf = new Uint8Array(capacity);
    // see https://v8.dev/blog/dataview
    this._view = new DataView(this._buf.buffer);
    this.txt = new TextEncoder();
  }

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
    if (this._curr + n < this._buf.length) {
      return;
    }
    const newBuffer = new Uint8Array(this._buf.length * 2);
    newBuffer.set(this._buf, 0);
    this._buf = newBuffer;
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

  write_u32(v: number) {
    this._reserve(4);
    this._view.setUint32(this._curr, v, true);
    this._curr += 4;
  }

  write_i32(v: number) {
    this._reserve(4);
    this._view.setInt32(this._curr, v, true);
    this._curr += 4;
  }

  write_varint32(v: number) {
    if (v < 0x80) {
      this._buf[this._curr] = v & 0x7f;
      this._curr += 1;
      return;
    }

    if (v < 1 << 14) {
      this._reserve(2);
      this._buf[this._curr] = v & 0x3f;
      this._buf[this._curr] |= 0x80;
      this._buf[this._curr + 1] = (v >> 6) & 0xff;
      this._curr += 2;
      return;
    }

    if (v < 1 << 21) {
      this._reserve(3);
      this._buf[this._curr] = v & 0x1f;
      this._buf[this._curr] |= 0xc0;
      this._buf[this._curr + 1] = (v >> 5) & 0xff;
      this._buf[this._curr + 2] = (v >> 13) & 0xff;
      this._curr += 3;
      return;
    }

    if (v < 1 << 28) {
      this._reserve(4);
      this._buf[this._curr] = v & 0xf;
      this._buf[this._curr] |= 0xe0;
      this._buf[this._curr + 1] = (v >> 4) & 0xff;
      this._buf[this._curr + 2] = (v >> 12) & 0xff;
      this._buf[this._curr + 3] = (v >> 20) & 0xff;
      this._curr += 4;
      return;
    }

    this._reserve(5);
    this._buf[this._curr] = v & 0x7;
    this._buf[this._curr] |= 0xf0;
    this._buf[this._curr + 1] = (v >> 3) & 0xff;
    this._buf[this._curr + 2] = (v >> 11) & 0xff;
    this._buf[this._curr + 3] = (v >> 19) & 0xff;
    this._buf[this._curr + 4] = (v >> 27) & 0xff;
    this._curr += 5;
  }

  write_varint64(v: bigint) {
    if (v < 0x80) {
      this._buf[this._curr] = Number(v & 0x7fn);
      this._curr += 1;
      return;
    }

    if (v < 1 << 14) {
      this._reserve(2);
      this._buf[this._curr] = Number(v & 0x3fn);
      this._buf[this._curr] |= 0x80;
      this._buf[this._curr + 1] = Number(v >> 6n) & 0xff;
      this._curr += 2;
      return;
    }

    if (v < 1 << 21) {
      this._reserve(3);
      this._buf[this._curr] = Number(v & 0x1fn);
      this._buf[this._curr] |= 0xc0;
      this._buf[this._curr + 1] = Number(v >> 5n) & 0xff;
      this._buf[this._curr + 2] = Number(v >> 13n) & 0xff;
      this._curr += 3;
      return;
    }

    if (v < 1 << 28) {
      this._reserve(4);
      this._buf[this._curr] = Number(v & 0xfn);
      this._buf[this._curr] |= 0xe0;
      this._buf[this._curr + 1] = Number(v >> 4n) & 0xff;
      this._buf[this._curr + 2] = Number(v >> 12n) & 0xff;
      this._buf[this._curr + 3] = Number(v >> 20n) & 0xff;
      this._curr += 4;
      return;
    }

    if (v < 1n << 35n) {
      this._reserve(5);
      this._buf[this._curr] = Number(v & 0x7n);
      this._buf[this._curr] |= 0xf0;
      this._buf[this._curr + 1] = Number(v >> 3n) & 0xff;
      this._buf[this._curr + 2] = Number(v >> 11n) & 0xff;
      this._buf[this._curr + 3] = Number(v >> 19n) & 0xff;
      this._buf[this._curr + 4] = Number(v >> 27n) & 0xff;
      this._curr += 5;
      return;
    }

    if (v < 1n << 42n) {
      this._reserve(6);
      this._buf[this._curr] = Number(v & 0x3n);
      this._buf[this._curr] |= 0xf8;
      this._buf[this._curr + 1] = Number(v >> 2n) & 0xff;
      this._buf[this._curr + 2] = Number(v >> 10n) & 0xff;
      this._buf[this._curr + 3] = Number(v >> 18n) & 0xff;
      this._buf[this._curr + 4] = Number(v >> 26n) & 0xff;
      this._buf[this._curr + 5] = Number(v >> 34n) & 0xff;
      return 6;
    }
    if (v < 1n << 49n) {
      this._reserve(7);
      this._buf[this._curr] = Number(v & 0x1n);
      this._buf[this._curr] |= 0xfc;
      this._buf[this._curr + 1] = Number(v >> 1n) & 0xff;
      this._buf[this._curr + 2] = Number(v >> 9n) & 0xff;
      this._buf[this._curr + 3] = Number(v >> 17n) & 0xff;
      this._buf[this._curr + 4] = Number(v >> 25n) & 0xff;
      this._buf[this._curr + 5] = Number(v >> 33n) & 0xff;
      this._buf[this._curr + 6] = Number(v >> 41n) & 0xff;
      this._curr += 7;
      return;
    }

    if (v < 1n << 56n) {
      this._reserve(8);
      this._buf[this._curr] = 0xfe;
      this._buf[this._curr + 1] = Number(v >> 0n) & 0xff;
      this._buf[this._curr + 2] = Number(v >> 8n) & 0xff;
      this._buf[this._curr + 3] = Number(v >> 16n) & 0xff;
      this._buf[this._curr + 4] = Number(v >> 24n) & 0xff;
      this._buf[this._curr + 5] = Number(v >> 32n) & 0xff;
      this._buf[this._curr + 6] = Number(v >> 40n) & 0xff;
      this._buf[this._curr + 7] = Number(v >> 48n) & 0xff;
      this._curr += 8;
      return;
    }

    this._reserve(9);
    this._buf[this._curr] = 0xff;
    this._buf[this._curr + 1] = Number(v >> 0n) & 0xff;
    this._buf[this._curr + 2] = Number(v >> 8n) & 0xff;
    this._buf[this._curr + 5] = Number(v >> 32n) & 0xff;
    this._buf[this._curr + 3] = Number(v >> 16n) & 0xff;
    this._buf[this._curr + 4] = Number(v >> 24n) & 0xff;
    this._buf[this._curr + 6] = Number(v >> 40n) & 0xff;
    this._buf[this._curr + 7] = Number(v >> 48n) & 0xff;
    this._buf[this._curr + 8] = Number(v >> 56n) & 0xff;
    this._curr += 9;
    return;
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
   * This method writes the string's length before the actual UTF-8 bytes.
   */
  write_string(v: string) {
    const bytes = this.txt.encode(v);
    this._reserve(bytes.length + 4); // +4 for the u32 length
    this.write_u32(bytes.byteLength);
    this.write_all(bytes);
  }
}

/**
 * A growable Uint8Array to write little-endian values
 */
export class AbiWriter extends Writer {
  constructor(readonly abi: Abi, capacity = 2048) {
    super(capacity);
  }

  serialize(value: Value): void {
    // Typescript does not understand that 'value' as param must be of the right type
    // in regard to the method because we used typeof value;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (this[typeof value] as any)(value);
  }

  /**
   * Serializes a `number` as either an `int` or a `float` based on its value
   */
  number(value: number): void {
    // checks if value is a float or not
    if (value % 1 === 0) {
      this.write_u8(PrimitiveType.int);
      this.write_i64(BigInt(value));
    } else {
      this.write_u8(PrimitiveType.float);
      this.write_f64(value);
    }
  }

  /**
   * Serializes a `boolean`
   */
  boolean(value: boolean): void {
    this.write_u8(PrimitiveType.bool);
    this.write_bool(value);
  }

  /**
   * Serializes `undefined`
   */
  undefined(): void {
    this.write_u8(PrimitiveType.undefined);
  }

  /**
   * Serializes a `string` either as a `stringlit` or an `object` (string)
   * based on whether or not the value is already present in the ABI symbols
   */
  string(value: string): void {
    let off = this.abi.off_by_symbol.get(value);
    if (off === undefined) {
      this.write_u8(PrimitiveType.object);
      this.write_varint32(this.abi.core_string_offset);
      this.write_string(value);
    } else {
      this.write_u8(PrimitiveType.stringlit);
      off <<= 1;
      off |= 1;
      this.write_varint32(off);
    }
  }

  /**
   * Serializes a `bigint` as `int`
   */
  bigint(value: bigint): void {
    this.write_u8(PrimitiveType.int);
    this.write_i64(value);
  }

  /**
   * Serializes an `object` to either `null`, `object` (string), `object` (array), `object` (map)
   * or using the `GCObject.save()` method based on the value.
   */
  object(value: object): void {
    if (value === null) {
      this.write_u8(PrimitiveType.null);
    } else if (value instanceof String) {
      this.string(value.valueOf());
    } else if (value instanceof Symbol) {
      this.symbol(value.valueOf());
    } else if (value instanceof Array) {
      new std_n.core.Array(this.abi.types[this.abi.core_array_offset], value).save(this);
    } else if (value instanceof Map) {
      new std_n.core.Map(this.abi.types[this.abi.core_map_offset], value).save(this);
    } else if (value instanceof GCObject) {
      value.save(this);
    } else {
      throw new Error(`unhandled type '${value.constructor.name}' for serialization`);
    }
  }

  /**
   * This always throws
   */
  function(): void {
    throw new Error('Javascript function are not serializable');
  }

  symbol(value: symbol): void {
    if (value.description) {
      this.string(value.description);
      return;
    }
    this.write_u8(PrimitiveType.null);
  }
}

function varint_32_len(header: number) {
  if ((header & 0x80) === 0) {
    return 1;
  }
  if ((header & 0x40) === 0) {
    return 2;
  }
  if ((header & 0x20) === 0) {
    return 3;
  }
  if ((header & 0x10) === 0) {
    return 4;
  }
  return 5;
}

function varint_64_len(header: number) {
  if ((header & 0x80) === 0) {
    return 1;
  }
  if ((header & 0x40) === 0) {
    return 2;
  }
  if ((header & 0x20) === 0) {
    return 3;
  }
  if ((header & 0x10) === 0) {
    return 4;
  }
  if ((header & 0x08) === 0) {
    return 5;
  }
  if ((header & 0x04) === 0) {
    return 6;
  }
  if ((header & 0x02) === 0) {
    return 7;
  }
  if ((header & 0x01) === 0) {
    return 8;
  }
  return 9;
}

function varint_32_unpack(bytes: Uint8Array): number {
  const n = bytes.byteLength;
  switch (n) {
    case 1:
      return bytes[0] & 0x7f;
    case 2:
      // prettier-ignore
      return (
        (bytes[0] & 0x3f) |
        (bytes[1] << 6)
      );
    case 3:
      // prettier-ignore
      return (
        (bytes[0] & 0x1f) |
        (bytes[1] <<  5)  |
        (bytes[2] << 13)
      );
    case 4:
      // prettier-ignore
      return (
        (bytes[0] & 0xf) |
        (bytes[1] <<  4) |
        (bytes[2] << 12) |
        (bytes[3] << 20)
      );
    case 5:
      // prettier-ignore
      return Number(
        (BigInt(bytes[0]) & 0x7n) |
        (BigInt(bytes[1]) <<  3n) |
        (BigInt(bytes[2]) << 11n) |
        (BigInt(bytes[3]) << 19n) |
        (BigInt(bytes[4]) << 27n)
      );
    default:
      throw new Error(`unexpected varint32 length of ${n} bytes`);
  }
}

function varint_64_unpack(bytes: Uint8Array): bigint | number {
  const n = bytes.byteLength;
  switch (n) {
    case 1:
      return bytes[0] & 0x7f;
    case 2:
      // prettier-ignore
      return (
        (bytes[0] & 0x3f) |
        (bytes[1] << 6)
      );
    case 3:
      // prettier-ignore
      return (
        (bytes[0] & 0x1f) |
        (bytes[1] <<  5)  |
        (bytes[2] << 13)
      );
    case 4:
      // prettier-ignore
      return (
        (bytes[0] & 0xf) |
        (bytes[1] <<  4) |
        (bytes[2] << 12) |
        (bytes[3] << 20)
      );
    case 5:
      // prettier-ignore
      return (
        (BigInt(bytes[0]) & 0x7n) |
        (BigInt(bytes[1]) <<  3n) |
        (BigInt(bytes[2]) << 11n) |
        (BigInt(bytes[3]) << 19n) |
        (BigInt(bytes[4]) << 27n)
      );
    case 6:
      // prettier-ignore
      return (
        (BigInt(bytes[0]) & 0x3n) |
        (BigInt(bytes[1]) <<  2n) |
        (BigInt(bytes[2]) << 10n) |
        (BigInt(bytes[3]) << 18n) |
        (BigInt(bytes[4]) << 26n) |
        (BigInt(bytes[5]) << 34n)
      );
    case 7:
      // prettier-ignore
      return (
        (BigInt(bytes[0]) & 0x1n) |
        (BigInt(bytes[1]) <<  1n) |
        (BigInt(bytes[2]) <<  9n) |
        (BigInt(bytes[3]) << 17n) |
        (BigInt(bytes[4]) << 25n) |
        (BigInt(bytes[5]) << 33n) |
        (BigInt(bytes[6]) << 41n)
      );
    case 8:
      // prettier-ignore
      return (
        BigInt(bytes[1])          |
        (BigInt(bytes[2]) <<  8n) |
        (BigInt(bytes[3]) << 16n) |
        (BigInt(bytes[4]) << 24n) |
        (BigInt(bytes[5]) << 32n) |
        (BigInt(bytes[6]) << 40n) |
        (BigInt(bytes[7]) << 48n)
      );
    case 9:
      // prettier-ignore
      return (
        BigInt(bytes[1])          |
        (BigInt(bytes[2]) <<  8n) |
        (BigInt(bytes[3]) << 16n) |
        (BigInt(bytes[4]) << 24n) |
        (BigInt(bytes[5]) << 32n) |
        (BigInt(bytes[6]) << 40n) |
        (BigInt(bytes[7]) << 48n) |
        (BigInt(bytes[8]) << 56n)
      );
    default:
      throw new Error(`unexpected varint64 length of ${n} bytes`);
  }
}

function sign_of(n: bigint | number): bigint | number {
  if (typeof n === 'bigint') {
    return (n >> 1n) ^ -(n & 1n);
  }
  return (n >>> 1) ^ -(n & 1);
}
