import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';

export class tuf3d extends GCObject {
  static readonly _type = 'core::tuf3d' as const;

  constructor(type: AbiType, public value: bigint) {
    super(type);
  }

  static load(r: AbiReader, ty: AbiType): tuf3d {
    const value = r.read_u64();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new ty.factory!(ty, value) as tuf3d;
  }

  static fromJSON(o: unknown): tuf3d {
    Object.setPrototypeOf(o, tuf3d.prototype);
    return o as tuf3d;
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
