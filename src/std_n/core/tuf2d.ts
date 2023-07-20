import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';

export class tuf2d extends GCObject {
  static readonly _type = 'core::tuf2d' as const;

  constructor(type: AbiType, public value: bigint) {
    super(type);
  }

  static load(r: AbiReader, ty: AbiType): tuf2d {
    const value = r.read_u64();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new ty.factory!(ty, value) as tuf2d;
  }

  static fromJSON(o: unknown): tuf2d {
    Object.setPrototypeOf(o, tuf2d.prototype);
    return o as tuf2d;
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
