import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';
import { interleave64_3di, deinterleave64_3di } from '../morton.js';

export class ti3d extends GCObject {
  static readonly _type = 'core::ti3d' as const;

  constructor(type: AbiType, public x0: number, public x1: number, public x2: number) {
    super(type);
  }

  static load(r: AbiReader, ty: AbiType): ti3d {
    const [x0, x1, x2] = deinterleave64_3di(r.read_u64());
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new ty.factory!(ty, x0, x1, x2) as ti3d;
  }

  static fromJSON(o: unknown): ti3d {
    Object.setPrototypeOf(o, ti3d.prototype);
    return o as ti3d;
  }

  override save(w: AbiWriter) {
    w.write_u8(PrimitiveType.tu2d);
    w.write_u64(interleave64_3di(this.x0, this.x1, this.x2));
  }

  override toJSON() {
    return {
      _type: this.type.name,
      x0: this.x0,
      x1: this.x1,
      x2: this.x2,
    };
  }
}
