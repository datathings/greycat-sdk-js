import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';
import { interleave64_4df, deinterleave64_4df } from '../morton.js';
import { GreyCat } from '../../greycat.js';

export class tf4d extends GCObject {
  static readonly _type = 'core::tf4d' as const;

  constructor(type: AbiType, public x0: number, public x1: number, public x2: number, public x3: number) {
    super(type);
  }

  static create(g: GreyCat, x0: number, x1: number, x2: number, x3: number): tf4d {
    const ty = g.abi.types[g.abi.core_tf4d_offset];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new ty.factory!(ty, x0, x1, x2, x3) as tf4d;
  }

  static load(r: AbiReader, ty: AbiType): tf4d {
    const [x0, x1, x2, x3] = deinterleave64_4df(r.read_u64());
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new ty.factory!(ty, x0, x1, x2, x3) as tf4d;
  }

  static fromJSON(o: unknown): tf4d {
    Object.setPrototypeOf(o, tf4d.prototype);
    return o as tf4d;
  }

  override saveHeader(w: AbiWriter): void {
    w.write_u8(PrimitiveType.tuf4d);
  }
  override saveContent(w: AbiWriter) {
    w.write_u64(interleave64_4df(this.x0, this.x1, this.x2, this.x3));
  }

  override toJSON() {
    return {
      _type: this.$type.name,
      x0: this.x0,
      x1: this.x1,
      x2: this.x2,
      x3: this.x3,
    };
  }
}
