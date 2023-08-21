import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';
import { GreyCat } from '../../greycat.js';

export class duration extends GCObject {
  static readonly _type = 'core::duration' as const;

  constructor(type: AbiType, public value: bigint | number) {
    super(type);
  }

  static create(g: GreyCat, value: bigint | number): duration {
    const ty = g.abi.types[g.abi.core_duration_offset];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new ty.factory!(ty, value) as duration;
  }

  static load(r: AbiReader, ty: AbiType): duration {
    const value = r.read_vi64();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new ty.factory!(ty, value) as duration;
  }

  static fromJSON(o: unknown): duration {
    Object.setPrototypeOf(o, duration.prototype);
    return o as duration;
  }

  override saveHeader(w: AbiWriter): void {
    w.write_u8(PrimitiveType.duration);
  }

  override saveContent(w: AbiWriter) {
    w.write_vi64(BigInt(this.value));
  }

  get s(): number {
    if (typeof this.value === 'bigint') {
      return Math.round(Number(this.value / 1_000_000n));
    }
    return Math.round(this.value / 1_000_000);
  }

  get us(): number {
    if (typeof this.value === 'bigint') {
      return Number(this.value % 1_000_000n);
    }
    return this.value % 1_000_000;
  }

  equals(other: duration): boolean {
    return BigInt(this.value) === BigInt(other.value);
  }

  override toJSON() {
    return {
      _type: this.$type.name,
      s: this.s,
      us: this.us,
    };
  }
}
