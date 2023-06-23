import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType, Value } from '../../types.js';
import { GCObject } from '../../GCObject.js';

export class Error extends GCObject {
  static readonly _type = 'core::Error' as const;

  constructor(
    type: AbiType,
    public code: number,
    public msg: string,
    public value: Value,
    public frames: ErrorFrame[],
  ) {
    super(type);
  }

  static load(r: AbiReader, type: AbiType): Error {
    const code = r.read_u32();
    const frames_len = r.read_u32();
    const msg_len = r.read_u32();
    const frames: ErrorFrame[] = new Array(frames_len);
    for (let i = 0; i < frames_len; i++) {
      frames[i] = ErrorFrame.load(r);
    }
    const msg = r.read_string(msg_len);
    const value = r.deserialize();

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new type.factory!(type, code, msg, value, frames) as Error;
  }

  static fromJSON(o: unknown): Error {
    Object.setPrototypeOf(o, Error.prototype);
    return o as Error;
  }

  override save(w: AbiWriter) {
    w.write_u8(PrimitiveType.object);
    w.write_u32(this.type.offset);
    w.write_u32(this.code);
    w.write_u32(this.frames.length);
    const msg_bytes = w.txt.encode(this.msg);
    w.write_u32(msg_bytes.length);
    for (let i = 0; i < this.frames.length; i++) {
      this.frames[i].save(w);
    }
    w.write_all(msg_bytes);
    w.serialize(this.value);
  }

  override toJSON() {
    return {
      _type: this.type.name,
      code: this.code,
      msg: this.msg,
      value: this.value,
      stack: this.frames.map((f) => ({
        module: this.type.abi.symbols[f.module],
        type: f.type === 0 ? undefined : this.type.abi.symbols[f.type],
        fn: this.type.abi.symbols[f.fn],
        line: f.line,
        column: f.column,
      })),
    };
  }
}

class ErrorFrame {
  constructor(
    public module: number,
    public type: number,
    public fn: number,
    public line: number,
    public column: number,
  ) {}

  static load(r: AbiReader): ErrorFrame {
    const mod_symbol = r.read_u32();
    const type_symbol = r.read_u32();
    const fn_symbol = r.read_u32();
    const line = r.read_u32();
    const column = r.read_u32();

    return new ErrorFrame(mod_symbol, type_symbol, fn_symbol, line, column);
  }

  save(w: AbiWriter) {
    w.write_u32(this.module);
    w.write_u32(this.type);
    w.write_u32(this.fn);
    w.write_u32(this.line);
    w.write_u32(this.column);
  }
}