import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';

export class time extends GCObject {
  static readonly _type = 'core::time' as const;

  constructor(type: AbiType, public value: bigint | number) {
    super(type);
  }

  static load(r: AbiReader, ty: AbiType): time {
    const value = r.read_vi64();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new ty.factory!(ty, value) as time;
  }

  static fromJSON(o: unknown): time {
    Object.setPrototypeOf(o, time.prototype);
    return o as time;
  }

  override save(w: AbiWriter) {
    w.write_u8(PrimitiveType.time);
    w.write_vi64(BigInt(this.value));
  }

  get epoch(): number {
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

  override toJSON() {
    return {
      _type: this.type.name,
      epoch: this.epoch,
      us: this.us,
    };
  }
}
