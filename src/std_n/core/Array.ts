import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType, Value } from '../../types.js';
import { GCObject } from '../../GCObject.js';

export class Array extends GCObject {
  static readonly _type = 'core::Array' as const;

  constructor(type: AbiType, public arr: Value[]) {
    super(type);
  }

  override save(w: AbiWriter): void {
    w.write_u8(PrimitiveType.object);
    w.write_vu32(w.abi.core_array_offset);
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
