import type { AbiType, AbiReader, AbiWriter, GreyCat } from '../../internal.js';
import { GCObject, PrimitiveType, morton } from '../../internal.js';

export class tf2d extends GCObject {
  static readonly _type = 'core::tf2d' as const;

  constructor(type: AbiType, public x0: number, public x1: number) {
    super(type);
  }

  static create(x0: number, x1: number, g: GreyCat = globalThis.greycat.default): tf2d {
    const ty = g.abi.types[g.abi.core_tf2d_offset];
    return new ty.factory(ty, x0, x1) as tf2d;
  }

  static load(r: AbiReader, ty: AbiType): tf2d {
    const [x0, x1] = morton.deinterleave64_2df(r.read_u64());
    return new ty.factory(ty, x0, x1) as tf2d;
  }

  override saveHeader(w: AbiWriter): void {
    w.write_u8(PrimitiveType.tuf2d);
  }

  override saveContent(w: AbiWriter) {
    w.write_u64(morton.interleave64_2df(this.x0, this.x1));
  }

  override toJSON() {
    return {
      _type: this.$type.name,
      x0: this.x0,
      x1: this.x1,
    };
  }
}
