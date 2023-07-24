import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';
import { interleave64_2df, deinterleave64_2df } from '../morton.js';

export class tf2d extends GCObject {
  static readonly _type = 'core::tf2d' as const;

  constructor(type: AbiType, public x0: number, public x1: number) {
    super(type);
  }

  static load(r: AbiReader, ty: AbiType): tf2d {
    const [x0, x1] = deinterleave64_2df(r.read_u64());
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new ty.factory!(ty, x0, x1) as tf2d;
  }

  static fromJSON(o: unknown): tf2d {
    Object.setPrototypeOf(o, tf2d.prototype);
    return o as tf2d;
  }

  override save(w: AbiWriter) {
    w.write_u8(PrimitiveType.tu2d);
    w.write_u64(interleave64_2df(this.x0, this.x1));
  }

  override toJSON() {
    return {
      _type: this.type.name,
      x0: this.x0,
      x1: this.x1,
    };
  }
}
