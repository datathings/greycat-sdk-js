import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';
import { deinterleave64_2di, interleave64_2di } from '../morton.js';

export class ti2d extends GCObject {
  static readonly _type = 'core::ti2d' as const;

  constructor(type: AbiType, public x0: number, public x1: number) {
    super(type);
  }

  static load(r: AbiReader, ty: AbiType): ti2d {
    const value = r.read_u64();
    const [x0, x1] = deinterleave64_2di(value);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new ty.factory!(ty, x0, x1) as ti2d;
  }

  static fromJSON(o: unknown): ti2d {
    Object.setPrototypeOf(o, ti2d.prototype);
    return o as ti2d;
  }

  override save(w: AbiWriter) {
    w.write_u8(PrimitiveType.tu2d);
    w.write_u64(interleave64_2di(this.x0, this.x1));
  }

  override toJSON() {
    return {
      _type: this.type.name,
      x0: this.x0,
      x1: this.x1,
    };
  }
}
