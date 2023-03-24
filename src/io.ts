import { Abi } from './abi.js';
import { IDeserialize, PrimitiveType, Value } from './types.js';
import * as core from './native/core/index.js';
import { GCEnum } from './GCEnum.js';
import { GCObject } from './GCObject.js';

const deserialize_error: IDeserialize = () => {
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
  protected _curr = 0;
  protected _view: DataView;
  readonly txt: TextDecoder;

  constructor(protected readonly _buf: Uint8Array) {
    // see https://v8.dev/blog/dataview if you don't trust me on using DataView rather than manual LE reads on _buf
    this._view = new DataView(this._buf.buffer);
    this.txt = new TextDecoder('utf-8');
  }

  get is_empty(): boolean {
    return this._curr === this._buf.length;
  }

  read_u8(): number {
    assert_buffer_has_enough_bytes(this._curr + 1 <= this._buf.length);
    const v = this._view.getUint8(this._curr);
    this._curr += 1;
    return v;
  }

  read_i8(): number {
    assert_buffer_has_enough_bytes(this._curr + 1 <= this._buf.length);
    const v = this._view.getInt8(this._curr);
    this._curr += 1;
    return v;
  }

  read_u32(): number {
    this._view.byteOffset;
    assert_buffer_has_enough_bytes(this._curr + 4 <= this._buf.length);
    const v = this._view.getUint32(this._curr, true);
    this._curr += 4;
    return v;
  }

  read_i32(): number {
    assert_buffer_has_enough_bytes(this._curr + 4 <= this._buf.length);
    const v = this._view.getInt32(this._curr, true);
    this._curr += 4;
    return v;
  }

  read_u64(): bigint {
    assert_buffer_has_enough_bytes(this._curr + 8 <= this._buf.length);
    const v = this._view.getBigUint64(this._curr, true);
    this._curr += 8;
    return v;
  }

  read_i64(): bigint {
    assert_buffer_has_enough_bytes(this._curr + 8 <= this._buf.length);
    const v = this._view.getBigInt64(this._curr, true);
    this._curr += 8;
    return v;
  }

  read_f32(): number {
    assert_buffer_has_enough_bytes(this._curr + 4 <= this._buf.length);
    const v = this._view.getFloat32(this._curr, true);
    this._curr += 4;
    return v;
  }

  read_f64(): number {
    assert_buffer_has_enough_bytes(this._curr + 8 <= this._buf.length);
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

  take(n: number): Uint8Array {
    assert_buffer_has_enough_bytes(this._curr + n <= this._buf.length);
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
  readonly deserializers: Record<number, IDeserialize> = {
    [PrimitiveType.null]: () => null,
    [PrimitiveType.bool]: this.read_bool.bind(this),
    [PrimitiveType.char]: this.read_char.bind(this),
    [PrimitiveType.int]: this.read_i64.bind(this),
    [PrimitiveType.float]: this.read_f64.bind(this),
    [PrimitiveType.node]: core.node.load,
    [PrimitiveType.node_time]: core.nodeTime.load,
    [PrimitiveType.node_index]: core.nodeIndex.load,
    [PrimitiveType.node_list]: core.nodeList.load,
    [PrimitiveType.node_geo]: core.nodeGeo.load,
    [PrimitiveType.geo]: core.nodeGeo.load,
    [PrimitiveType.time]: core.time.load,
    [PrimitiveType.duration]: core.duration.load,
    [PrimitiveType.enum]: this.read_enum.bind(this),
    [PrimitiveType.object]: this.read_object.bind(this),
    [PrimitiveType.block]: deserialize_error,
    [PrimitiveType.block_ref]: deserialize_error,
    [PrimitiveType.function_ref]: deserialize_error,
    [PrimitiveType.undefined]: () => undefined,
    [PrimitiveType.stringlit]: this.read_stringlit.bind(this),
  };

  constructor(readonly abi: Abi, buf: Uint8Array) {
    super(buf);
  }

  deserialize(): Value {
    const id = this.read_u8();
    const deserializer = this.deserializers[id];
    const type = this.abi.types[id];
    if (!deserializer || !type) {
      throw new Error(`unknown type #${id}`);
    }
    return deserializer(this, type);
  }

  read_stringlit(): string {
    const id = this.read_u32();
    return this.abi.symbols[id];
  }

  read_bool(): boolean {
    return this.read_u8() > 0;
  }

  read_char(): string {
    return String.fromCharCode(this.read_u8());
  }

  read_object(): Value {
    const id = this.read_u32();
    const type = this.abi.types[id];
    if (!type.load) {
      throw new Error(`unable to load type '${type.name}' (not registered)`);
    }
    return type.load(this, type);
  }

  read_enum(): GCEnum {
    const id = this.read_u32();
    const off = this.read_u32();
    const type = this.abi.types[id];
    const attr = type.attrs[off];
    // We want this line to actually fail at runtime if the value cannot be found
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new GCEnum(type, off, attr.name, type.enum_values![attr.mapped_att_offset]);
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
    // see https://v8.dev/blog/dataview if you don't trust me on using DataView rather than manual LE writes to _buf
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

  write_u64(v: bigint) {
    this._reserve(8);
    this._view.setBigUint64(this._curr, v, true);
    this._curr += 8;
  }

  write_i64(v: bigint) {
    this._reserve(8);
    this._view.setBigInt64(this._curr, v, true);
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  readonly serializers: Record<string, (v: any) => void>;

  constructor(readonly abi: Abi, capacity = 2048) {
    super(capacity);

    const number_serializer = (value: number) => {
      // checks if value is a float or not
      if (value % 1 === 0) {
        this.write_u8(PrimitiveType.int);
        this.write_i64(BigInt(value));
      } else {
        this.write_u8(PrimitiveType.float);
        this.write_f64(value);
      }
    };
    const string_serializer = (value: string) => {
      const off = this.abi.symbol_to_id.get(value);
      if (off === undefined) {
        this.write_u8(PrimitiveType.object);
        this.write_u32(this.abi.core_string_offset);
        this.write_string(value);
      } else {
        this.write_u8(PrimitiveType.stringlit);
        this.write_u32(off);
      }
    };
    this.serializers = {
      bigint: (v: bigint) => {
        this.write_u8(PrimitiveType.int);
        this.write_i64(v);
      },
      boolean: (v: boolean) => {
        this.write_u8(PrimitiveType.bool);
        this.write_bool(v);
      },
      undefined: () => {
        this.write_u8(PrimitiveType.undefined);
      },
      number: number_serializer,
      string: string_serializer,
      object: (value: object) => {
        if (value === null) {
          this.write_u8(PrimitiveType.null);
        } else if (value instanceof String || value instanceof Symbol) {
          string_serializer(value.toString());
        } else if (value instanceof Array) {
          new core.Array(this.abi.types[this.abi.core_array_offset], value);
        } else if (value instanceof Map) {
          new core.Map(this.abi.types[this.abi.core_map_offset], value);
        } else if (value instanceof GCObject) {
          value.save(this);
        } else {
          throw new Error(`unhandled type '${value.constructor.name}' for serialization`);
        }
      },
      function: () => {
        throw new Error(`unhandled type 'function' for serialization`);
      },
      symbol: (s: symbol) => {
        if (s.description) {
          string_serializer(s.description);
        } else {
          throw new Error(`unable to serialize type 'Symbol' without description field`);
        }
      },
    } as const;
  }

  serialize(value: Value): void {
    this.serializers[typeof value](value);
  }
}
