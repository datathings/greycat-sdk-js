import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';
import type { GreyCat } from '../../greycat.js';

const MICROS_IN_A_YEAR = (86_400_000_000 * 365);
const MICROS_IN_A_MONTH = (86_400_000_000 * 30.44);

export class duration extends GCObject {
  static readonly _type = 'core::duration' as const;

  constructor(type: AbiType, public value: bigint | number) {
    super(type);
  }

  static create(value: bigint | number, g: GreyCat = globalThis.greycat.default): duration {
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

  /**
   * Returns the duration in microseconds
   */
  get us(): number | bigint {
    return this.value;
  }

  /**
   * Returns the duration in milliseconds
   */
  get ms(): number {
    return Number(this.value) / 1_000;
  }

  /**
   * Returns the duration in seconds
   */
  get s(): number {
    return Number(this.value) / 1_000_000;
  }

  /**
   * Returns the duration in minutes
   */
  get min(): number {
    return Number(this.value) / 60_000_000;
  }

  /**
   * Returns the duration in hours
   */
  get hour(): number {
    return Number(this.value) / 3_600_000_000;
  }

  /**
   * Returns the duration in days
   */
  get day(): number {
    return Number(this.value) / 86_400_000_000;
  }

  /**
   * Returns the duration in weeks
   */
  get week(): number {
    return Number(this.value) / 604_800_000_000;
  }

  /**
   * Returns the duration in months
   */
  get month(): number {
    return Number(this.value) / MICROS_IN_A_MONTH;
  }

  /**
   * Returns the duration in years
   */
  get year(): number {
    return Number(this.value) / MICROS_IN_A_YEAR;
  }

  equals(other: duration): boolean {
    return BigInt(this.value) === BigInt(other.value);
  }

  override toJSON() {
    let us: number;
    if (typeof this.value === 'bigint') {
      us = Number(this.value % 1_000_000n);
    } else {
      us = this.value % 1_000_000;
    }

    return {
      _type: this.$type.name,
      s: this.s,
      us,
    };
  }
}
