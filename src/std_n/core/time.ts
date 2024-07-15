import type { AbiType, AbiReader, AbiWriter, GreyCat, core } from '../../internal.js';
import { GCObject, PrimitiveType } from '../../internal.js';

export interface time {
  sub(duration: core.duration): core.time;
  sub(time: core.time): core.duration;

  /**
   * Formats the time using the given format
   *
   * @param format the format to use
   */
  format(format: Intl.DateTimeFormat): string;

  /**
   * Formats the time using the given `options` and `locales` by creating a new `Intl.DateTimeFormat` for it.
   *
   * @param options options to use for formatting, default `timeZoneName` set to `'longOffset'`
   * @param locales locale language to use, defaults to `fr-FR`
   */
  format(options: Intl.DateTimeFormatOptions, locales?: string): string;
}

export class time extends GCObject {
  private static readonly LOCALE = 'fr-FR';
  private static readonly FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZone: 'UTC',
    timeZoneName: 'longOffset',
  };
  static readonly _type = 'core::time' as const;

  constructor(type: AbiType, public value: bigint | number) {
    super(type);
  }

  static create(value: bigint | number, g: GreyCat = globalThis.greycat.default): time {
    const ty = g.abi.types[g.abi.core_time_offset];
    return new ty.factory(ty, value) as core.time;
  }

  static fromDate(date: Date, g: GreyCat = globalThis.greycat.default): core.time {
    return time.fromMs(date.getTime(), g);
  }

  static fromMs(epochMs: number, g: GreyCat = globalThis.greycat.default): core.time {
    const ty = g.abi.types[g.abi.core_time_offset];
    return new ty.factory(ty, epochMs * 1000) as core.time;
  }

  static load(r: AbiReader, ty: AbiType): core.time {
    const value = r.read_vi64();
    return new ty.factory(ty, value) as core.time;
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

  add(duration: core.duration, g = greycat.default): core.time {
    const sum = BigInt(this.value) + BigInt(duration.value);
    const boxedSum =
      sum >= Number.MIN_SAFE_INTEGER && sum <= Number.MAX_SAFE_INTEGER ? Number(sum) : sum;
    const ty = g.abi.types[g.abi.core_time_offset];
    return new ty.factory(ty, boxedSum) as core.time;
  }

  sub(duration: core.duration | core.time, g = greycat.default): core.time | core.duration {
    const sub = BigInt(this.value) - BigInt(duration.value);
    const boxedSub =
      sub >= Number.MIN_SAFE_INTEGER && sub <= Number.MAX_SAFE_INTEGER ? Number(sub) : sub;
    if (duration.$type.offset === g.abi.core_duration_offset) {
      const ty = g.abi.types[g.abi.core_time_offset];
      return new ty.factory(ty, boxedSub) as core.time;
    }
    const ty = g.abi.types[g.abi.core_duration_offset];
    return new ty.factory(ty, boxedSub) as core.duration;
  }

  format(
    formatOrOptions: Intl.DateTimeFormat | Intl.DateTimeFormatOptions = time.FORMAT_OPTIONS,
    locales = globalThis.navigator ? globalThis.navigator.language : time.LOCALE,
  ): string {
    const date = new Date(this.epochMs);
    if (isNaN(date.getTime())) {
      return `${this.value}_time`;
    }

    if (formatOrOptions instanceof Intl.DateTimeFormat) {
      return formatOrOptions.format(date);
    }

    return new Intl.DateTimeFormat(locales, {
      timeZoneName: 'longOffset',
      ...formatOrOptions,
    }).format(date);
  }

  override toString(): string {
    const date = new Date(this.epochMs);
    if (isNaN(date.getTime())) {
      return `${this.value}_time`;
    }
    return date.toISOString();
  }

  override toJSON() {
    return this.toString();
  }

  override valueOf() {
    return this.value;
  }

  [Symbol.toPrimitive](_hint: string) {
    return this.value;
  }
}
