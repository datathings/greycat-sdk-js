import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';
import { deinterleave64_5di, interleave64_5di } from '../morton.js';
import { GreyCat } from '../../greycat.js';

export class ti5d extends GCObject {
  static readonly _type = 'core::ti5d' as const;

  constructor(
    type: AbiType,
    public x0: number,
    public x1: number,
    public x2: number,
    public x3: number,
    public x4: number,
  ) {
    super(type);
  }

  static create(x0: number, x1: number, x2: number, x3: number, x4: number, g: GreyCat = globalThis.greycat.default): ti5d {
    const ty = g.abi.types[g.abi.core_ti5d_offset];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new ty.factory!(ty, x0, x1, x2, x3, x4) as ti5d;
  }

  static load(r: AbiReader, ty: AbiType): ti5d {
    const [x0, x1, x2, x3, x4] = deinterleave64_5di(r.read_u64());
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new ty.factory!(ty, x0, x1, x2, x3, x4) as ti5d;
  }

  static fromJSON(o: unknown): ti5d {
    Object.setPrototypeOf(o, ti5d.prototype);
    return o as ti5d;
  }

  override saveHeader(w: AbiWriter): void {
    w.write_u8(PrimitiveType.tu5d);
  }

  override saveContent(w: AbiWriter) {
    w.write_u64(interleave64_5di(this.x0, this.x1, this.x2, this.x3, this.x4));
  }

  override toJSON() {
    return {
      _type: this.$type.name,
      x0: this.x0,
      x1: this.x1,
      x2: this.x2,
      x3: this.x3,
      x4: this.x4,
    };
  }
}
