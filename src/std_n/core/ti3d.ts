import type { AbiType, AbiReader, AbiWriter, GreyCat } from '../../exports.js';
import { GCObject, PrimitiveType, morton, $ } from '../../exports.js';

export class ti3d extends GCObject {
  static readonly _type = 'core::ti3d' as const;

  constructor(type: AbiType, public x0: number, public x1: number, public x2: number) {
    super(type);
  }

  static create(x0: number, x1: number, x2: number, g: GreyCat = $.default): ti3d {
    const ty = g.abi.types[g.abi.core_ti3d_offset];
    return new ty.factory(ty, x0, x1, x2) as ti3d;
  }

  static load(r: AbiReader, ty: AbiType): ti3d {
    const [x0, x1, x2] = morton.deinterleave64_3di(r.read_u64());
    return new ty.factory(ty, x0, x1, x2) as ti3d;
  }

  override saveHeader(w: AbiWriter): void {
    w.write_u8(PrimitiveType.tu3d);
  }

  override saveContent(w: AbiWriter) {
    w.write_u64(morton.interleave64_3di(this.x0, this.x1, this.x2));
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
