import { GCObject } from '../../GCObject.js';
import type { core, AbiType, AbiReader, AbiWriter } from '../../index.js';

export interface Date {
  /**
   * Formats the Date using the given format
   *
   * @param format the format to use
   */
  format(format: Intl.DateTimeFormat): string;

  /**
   * Formats the Date using the given `options` and `locales` by creating a new `Intl.DateTimeFormat` for it.
   *
   * @param options options to use for formatting, default `timeZone` from the `core.Date` and default `timeZoneName` set to `'longOffset'`
   * @param locales locale language to use, defaults to `fr-FR`
   */
  format(options: Intl.DateTimeFormatOptions, locales?: string): string;
}

export class Date extends GCObject {
  private static readonly LOCALE = 'fr-FR';
  private static readonly FORMAT_OPTIONS: Intl.DateTimeFormatOptions = {
    year: '2-digit',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'longOffset',
  };
  static readonly _type = 'core::Date' as const;

  constructor(
    type: AbiType,
    public localizedEpochS: bigint,
    public epochUs: bigint,
    public timeZone: core.TimeZone,
  ) {
    super(type);
  }

  static load(r: AbiReader, type: AbiType): Date {
    const localizedEpochS = r.read_vi64_bigint();
    const epochUs = r.read_vi64_bigint();
    const tzFieldOff = r.read_vu32();
    const tzType = r.abi.types[r.abi.core_timezone_offset];
    // safety: if core.TimeZone does not exist, you have bigger problems
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const tz = tzType.enum_values![tzFieldOff];
    return new type.factory(type, localizedEpochS, epochUs, tz) as core.Date;
  }

  override saveContent(w: AbiWriter) {
    w.write_vi64(BigInt(this.localizedEpochS));
    w.write_vi64(BigInt(this.epochUs));
    w.write_vu32(this.timeZone.offset);
  }

  /**
   * Returns a JavaScript Date
   */
  toDate(): globalThis.Date {
    return new globalThis.Date(Number(this.epochUs / 1_000n));
  }

  // TODO use the actual C code used by GreyCat internally (requires Wasm)
  // see date.c: gc_core_Date__load (l.161)
  // see time.c: gc_gmtime_r_safe ()
  get iso(): string {
    const locales = globalThis.navigator ? globalThis.navigator.language : Date.LOCALE;
    return new Intl.DateTimeFormat(locales, {
      timeZone: this.timeZone.value as string,
      timeZoneName: 'longOffset',
    }).format(this.toDate());
  }

  format(
    formatOrOptions: Intl.DateTimeFormat | Intl.DateTimeFormatOptions = Date.FORMAT_OPTIONS,
    locales = globalThis.navigator ? globalThis.navigator.language : Date.LOCALE,
  ): string {
    if (formatOrOptions instanceof Intl.DateTimeFormat) {
      return formatOrOptions.format(this.toDate());
    }
    return new Intl.DateTimeFormat(locales, {
      timeZone: this.timeZone.value as string,
      timeZoneName: 'longOffset',
      ...formatOrOptions,
    }).format(this.toDate());
  }

  override toString(): string {
    return this.format();
  }

  override toJSON() {
    return {
      _type: Date._type,
      iso: this.toString(),
      timeZone: this.timeZone,
    };
  }
}
