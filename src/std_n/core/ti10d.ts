import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';
import { deinterleave64_10di, interleave64_10di } from '../morton.js';
import { GreyCat } from '../../greycat.js';

export class ti10d extends GCObject {
  static readonly _type = 'core::ti10d' as const;

  constructor(
    type: AbiType,
    public x0: number,
    public x1: number,
    public x2: number,
    public x3: number,
    public x4: number,
    public x5: number,
    public x6: number,
    public x7: number,
    public x8: number,
    public x9: number,
  ) {
    super(type);
  }

  static create(
    x0: number,
    x1: number,
    x2: number,
    x3: number,
    x4: number,
    x5: number,
    x6: number,
    x7: number,
    x8: number,
    x9: number,
    g: GreyCat = globalThis.greycat.default,
  ): ti10d {
    const ty = g.abi.types[g.abi.core_ti10d_offset];
    return new ty.factory(ty, x0, x1, x2, x3, x4, x5, x6, x7, x8, x9) as ti10d;
  }

  static load(r: AbiReader, ty: AbiType): ti10d {
    const [x0, x1, x2, x3, x4, x5, x6, x7, x8, x9] = deinterleave64_10di(r.read_u64());
    return new ty.factory(ty, x0, x1, x2, x3, x4, x5, x6, x7, x8, x9) as ti10d;
  }

  override saveHeader(w: AbiWriter): void {
    w.write_u8(PrimitiveType.tu10d);
  }

  override saveContent(w: AbiWriter) {
    w.write_u64(
      interleave64_10di(
        this.x0,
        this.x1,
        this.x2,
        this.x3,
        this.x4,
        this.x5,
        this.x6,
        this.x7,
        this.x8,
        this.x9,
      ),
    );
  }

  override toJSON() {
    return {
      _type: this.$type.name,
      x0: this.x0,
      x1: this.x1,
      x2: this.x2,
      x3: this.x3,
      x4: this.x4,
      x5: this.x5,
      x6: this.x6,
      x7: this.x7,
      x8: this.x8,
      x9: this.x9,
    };
  }
}
