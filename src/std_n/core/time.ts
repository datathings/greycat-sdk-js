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

  override saveHeader(w: AbiWriter): void {
    w.write_u8(PrimitiveType.time);
  }

  override saveContent(w: AbiWriter) {
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

  equals(other: time): boolean {
    return BigInt(this.value) === BigInt(other.value);
  }

  /**
   * Gives order between this time and another
   *
   * @param other 
   * @returns - `-1` if `this < other`
   * - `0` if `this == other`
   * - `1` if `this > other`
   */
  ord(other: time): -1 | 0 | 1 {
    const a = BigInt(this.value);
    const b = BigInt(other.value);
    if (a < b) {
      return -1;
    } else if (a === b) {
      return 0;
    }
    return 1;
  }

  // sub(other: time): duration {
  //   return new duration(this.$type.abi.types[this.$type.abi.core_duration_offset], BigInt(this.value) - BigInt(other.value));
  // }

  // addDuration(other: duration): time {
  //   return new time(this.$type.abi.types[this.$type.abi.core_time_offset], BigInt(this.value) + BigInt(other.value));
  // }

  // subDuration(other: duration): time {
  //   return new time(this.$type.abi.types[this.$type.abi.core_time_offset], BigInt(this.value) - BigInt(other.value));
  // }

  override toJSON() {
    return {
      _type: this.$type.name,
      epoch: this.epoch,
      us: this.us,
    };
  }
}
