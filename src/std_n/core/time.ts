import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';
import { GreyCat } from '../../greycat.js';
import type { core } from '../../std/index.js';

export class time extends GCObject {
  static readonly _type = 'core::time' as const;

  constructor(type: AbiType, public value: bigint | number) {
    super(type);
  }

  static create(value: bigint | number, g: GreyCat = globalThis.greycat.default): time {
    const ty = g.abi.types[g.abi.core_time_offset];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new ty.factory!(ty, value) as core.time;
  }

  static fromDate(date: Date, g: GreyCat = globalThis.greycat.default): core.time {
    const ty = g.abi.types[g.abi.core_time_offset];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new ty.factory!(ty, date.getTime() * 1000) as core.time;
  }

  static load(r: AbiReader, ty: AbiType): core.time {
    const value = r.read_vi64();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new ty.factory!(ty, value) as core.time;
  }

  override saveHeader(w: AbiWriter): void {
    w.write_u8(PrimitiveType.time);
  }

  override saveContent(w: AbiWriter) {
    w.write_vi64(BigInt(this.value));
  }

  /**
   * Epoch in seconds
   */
  get epoch(): number {
    if (typeof this.value === 'bigint') {
      return Math.round(Number(this.value / 1_000_000n));
    }
    return Math.round(this.value / 1_000_000);
  }

  /**
  * Epoch in milliseconds
  */
  get epochMs(): number {
    if (typeof this.value === 'bigint') {
      return Math.round(Number(this.value / 1_000n));
    }
    return Math.round(this.value / 1_000);
  }

  get us(): number {
    if (typeof this.value === 'bigint') {
      return Number(this.value % 1_000_000n);
    }
    return this.value % 1_000_000;
  }

  toDate(): Date {
    return new Date(this.epochMs);
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

  format(tz: core.TimeZone, options: Intl.DateTimeFormatOptions = {}): string {
    // this is for Node.js compat (no `navigator` in Node.js)
    const locales = globalThis.navigator ? globalThis.navigator.language : undefined;
    options.timeZone = tz.value as string;
    return new Intl.DateTimeFormat(locales, options).format(this.epochMs);
  }

  override toJSON() {
    return {
      _type: this.$type.name,
      epoch: this.epochMs,
      us: this.us,
    };
  }
}
