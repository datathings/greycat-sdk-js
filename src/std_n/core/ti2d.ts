import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';
import { deinterleave64_2di, interleave64_2di } from '../morton.js';
import { GreyCat } from '../../greycat.js';

export class ti2d extends GCObject {
  static readonly _type = 'core::ti2d' as const;

  constructor(type: AbiType, public x0: number, public x1: number) {
    super(type);
  }


  static create(x0: number, x1: number, g: GreyCat = globalThis.greycat.default): ti2d {
    const ty = g.abi.types[g.abi.core_ti2d_offset];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new ty.factory!(ty, x0, x1) as ti2d;
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

  override saveHeader(w: AbiWriter): void {
    w.write_u8(PrimitiveType.tu2d);
  }

  override saveContent(w: AbiWriter) {
    w.write_u64(interleave64_2di(this.x0, this.x1));
  }

  override toJSON() {
    return {
      _type: this.$type.name,
      x0: this.x0,
      x1: this.x1,
    };
  }
}
