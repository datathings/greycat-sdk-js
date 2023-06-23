import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';

export class time extends GCObject {
  static readonly _type = 'core::time' as const;

  constructor(type: AbiType, public value: bigint) {
    super(type);
  }

  static load(r: AbiReader, ty: AbiType): time {
    const value = r.read_i64();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new ty.factory!(ty, value) as time;
  }

  static fromJSON(o: unknown): time {
    Object.setPrototypeOf(o, time.prototype);
    return o as time;
  }

  override save(w: AbiWriter) {
    w.write_u8(PrimitiveType.time);
    w.write_i64(this.value);
  }

  get epoch(): number {
    return Number(this.value / 1_000_000n);
  }

  get us(): number {
    return Number(this.value % 1_000_000n);
  }

  override toJSON() {
    return {
      _type: this.type.name,
      epoch: this.epoch,
      us: this.us,
    };
  }
}
