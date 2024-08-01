import type { AbiType, AbiReader, AbiWriter, GreyCat } from '../../exports.js';
import { GCObject, PrimitiveType, morton, $ } from '../../exports.js';

export class ti2d extends GCObject {
  static readonly _type = 'core::ti2d' as const;

  constructor(type: AbiType, public x0: number, public x1: number) {
    super(type);
  }

  static create(x0: number, x1: number, g: GreyCat = $.default): ti2d {
    const ty = g.abi.types[g.abi.core_ti2d_offset];
    return new ty.factory(ty, x0, x1) as ti2d;
  }

  static load(r: AbiReader, ty: AbiType): ti2d {
    const value = r.read_u64();
    const [x0, x1] = morton.deinterleave64_2di(value);
    return new ty.factory(ty, x0, x1) as ti2d;
  }

  override saveHeader(w: AbiWriter): void {
    w.write_u8(PrimitiveType.tu2d);
  }

  override saveContent(w: AbiWriter) {
    w.write_u64(morton.interleave64_2di(this.x0, this.x1));
  }

  override toJSON() {
    return {
      _type: this.$type.name,
      x0: this.x0,
      x1: this.x1,
    };
  }
}
