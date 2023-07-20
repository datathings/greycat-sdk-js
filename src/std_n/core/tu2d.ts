import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';

export class tu2d extends GCObject {
  static readonly _type = 'core::tu2d' as const;

  constructor(type: AbiType, public value: bigint) {
    super(type);
  }

  static load(r: AbiReader, ty: AbiType): tu2d {
    const value = r.read_u64();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new ty.factory!(ty, value) as tu2d;
  }

  static fromJSON(o: unknown): tu2d {
    Object.setPrototypeOf(o, tu2d.prototype);
    return o as tu2d;
  }

  override save(w: AbiWriter) {
    w.write_u8(PrimitiveType.tu2d);
    w.write_u64(this.value);
  }

  override toJSON() {
    return {
      _type: this.type.name,
      value: `${this.value}`,
    };
  }
}
