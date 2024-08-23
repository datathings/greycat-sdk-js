import type { AbiType, AbiReader, AbiWriter, Value, GreyCat } from '../../exports.js';
import { $, GCObject } from '../../exports.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class Array<_ extends Value = any> extends GCObject {
  static readonly _type = 'core::Array' as const;

  constructor(type: AbiType, public arr: Value[]) {
    super(type);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static create<T extends Value = any>(
    value: globalThis.Array<T>,
    g: GreyCat = $.default,
  ): Array<T> {
    const ty = g.abi.types[g.abi.core_array_offset];
    return new ty.factory(ty, value) as Array<T>;
  }

  override saveContent(w: AbiWriter): void {
    w.write_vu32(this.arr.length);
    w.write_array(this.arr);
  }

  static load(r: AbiReader): globalThis.Array<Value> {
    const len = r.read_vu32();
    return r.read_array(len);
  }

  override toJSON() {
    return this.arr;
  }
}
