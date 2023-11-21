import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';
import { interleave64_3df, deinterleave64_3df } from '../morton.js';
import { GreyCat } from '../../greycat.js';

export class tf3d extends GCObject {
  static readonly _type = 'core::tf3d' as const;

  constructor(type: AbiType, public x0: number, public x1: number, public x2: number) {
    super(type);
  }

  static create(x0: number, x1: number, x2: number, g: GreyCat = globalThis.greycat.default): tf3d {
    const ty = g.abi.types[g.abi.core_tf3d_offset];
    return new ty.factory(ty, x0, x1, x2) as tf3d;
  }

  static load(r: AbiReader, ty: AbiType): tf3d {
    const [x0, x1, x2] = deinterleave64_3df(r.read_u64());
    return new ty.factory(ty, x0, x1, x2) as tf3d;
  }

  override saveHeader(w: AbiWriter): void {
    w.write_u8(PrimitiveType.tuf3d);
  }

  override saveContent(w: AbiWriter) {
    w.write_u64(interleave64_3df(this.x0, this.x1, this.x2));
  }

  override toJSON() {
    return {
      _type: this.$type.name,
      x0: this.x0,
      x1: this.x1,
      x2: this.x2,
    };
  }
}
