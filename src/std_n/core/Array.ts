import type { AbiType, AbiReader, AbiWriter, Value } from '../../exports.js';
import { GCObject } from '../../exports.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class Array<_ extends Value = any> extends GCObject {
  static readonly _type = 'core::Array' as const;

  constructor(type: AbiType, public arr: Value[]) {
    super(type);
  }

  override saveContent(w: AbiWriter): void {
    w.write_vu32(this.arr.length);
    for (let i = 0; i < this.arr.length; i++) {
      w.serialize(this.arr[i]);
    }
  }

  static load(r: AbiReader): globalThis.Array<Value> {
    const len = r.read_vu32();
    const arr = new globalThis.Array(len);
    for (let i = 0; i < len; i++) {
      arr[i] = r.deserialize();
    }
    return arr;
  }

  override toJSON() {
    return this.arr;
  }
}
