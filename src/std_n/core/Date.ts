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
    // safety: if core.TimeZone does not exist, we have bigger problems
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

  get iso(): string {
    const c = gc_gmtime_r_safe(this.localizedEpochS);
    c.tm_us_offset = Number(this.epochUs % 1000000n);
    let iso = `${c.tm_year + 1900}`;
    iso += '-';
    const month = c.tm_mon + 1;
    if (month < 10) {
      iso += '0';
    }
    iso += month;
    iso += '-';
    if (c.tm_mday < 10) {
      iso += '0';
    }
    iso += c.tm_mday;
    iso += 'T';
    if (c.tm_hour < 10) {
      iso += '0';
    }
    iso += c.tm_hour;
    iso += ':';
    if (c.tm_min < 10) {
      iso += '0';
    }
    iso += c.tm_min;
    iso += ':';
    if (c.tm_sec < 10) {
      iso += '0';
    }
    iso += c.tm_sec;

    const epoch_s = (this.epochUs - BigInt(c.tm_us_offset)) / 1000000n;
    const utc_offset = Number(this.localizedEpochS - epoch_s);
    const abs_utc_offset = Math.abs(utc_offset)
    const hours_offset = abs_utc_offset / 3600;
    const minutes_offset = (abs_utc_offset % 3600) / 60;
    if (c.tm_us_offset == 0 && hours_offset == 0 && minutes_offset == 0) {
      iso += 'Z';
    } else {
      iso += '.';
      iso += c.tm_us_offset.toString().padStart(6, '0');
      iso += utc_offset < 0 ? '-' : '+';
      if (hours_offset < 10) {
        iso += '0';
      }
      iso += hours_offset;
      iso += ':';
      if (minutes_offset < 10) {
        iso += '0';
      }
      iso += minutes_offset;
    }
    return iso;
  }

  format(
    formatOrOptions: Intl.DateTimeFormat | Intl.DateTimeFormatOptions = Date.FORMAT_OPTIONS,
    locales = globalThis.navigator ? globalThis.navigator.language : Date.LOCALE,
  ): string {
    if (formatOrOptions instanceof Intl.DateTimeFormat) {
      return formatOrOptions.format(Number(this.epochUs / 1_000n));
    }
    return new Intl.DateTimeFormat(locales, {
      timeZone: this.timeZone.value as string,
      timeZoneName: 'longOffset',
      ...formatOrOptions,
    }).format(Number(this.epochUs / 1_000n));
  }

  override toString(): string {
    return this.format();
  }

  override toJSON() {
    return {
      _type: Date._type,
      iso: this.iso,
      timeZone: this.timeZone,
    };
  }
}

const EPOCH_ADJUSTMENT_DAYS = 719468n;
const ADJUSTED_EPOCH_YEAR = 0n;
const ADJUSTED_EPOCH_WDAY = 3n;
const DAYS_PER_ERA = 146097n;
const DAYS_PER_CENTURY = 36524n;
const DAYS_PER_4_YEARS = 3n * 365n + 366n;
const DAYS_PER_YEAR = 365n;
const DAYS_IN_JANUARY = 31n;
const DAYS_IN_FEBRUARY = 28n;
const YEARS_PER_ERA = 400n;
const SECSPERMIN = 60n;
const MINSPERHOUR = 60n;
const HOURSPERDAY = 24n;
const SECSPERHOUR = SECSPERMIN * MINSPERHOUR;
const SECSPERDAY = SECSPERHOUR * HOURSPERDAY;
const DAYSPERWEEK = 7n;
const YEAR_BASE = 1900n;

function isLeapYear(y: bigint) {
  return y % 4n === 0n && (y % 100n !== 0n || (y + 1900n) % 400n === 0n);
}

interface gc_tm_t {
  /** Seconds. `[0-60]` (1 leap second) */
  tm_sec: number;
  /** Minutes. `[0-59]` */
  tm_min: number;
  /** Hours. `[0-23]` */
  tm_hour: number;
  /** Day.  `[1-31]` */
  tm_mday: number;
  /** Month. `[0-11]` */
  tm_mon: number;
  /** Year minus `1900`  */
  tm_year: number;
  /** Day of week. `[0-6]` */
  tm_wday: number;
  /** Days in year. `[0-365]` */
  tm_yday: number;
  tm_us_offset: number;
}

function gc_gmtime_r_safe(timestamp: bigint): gc_tm_t {
  const res = {
    tm_hour: 0n,
    tm_mday: 0n,
    tm_min: 0n,
    tm_mon: 0n,
    tm_sec: 0n,
    tm_wday: 0n,
    tm_yday: 0n,
    tm_year: 0n,
    tm_us_offset: 0n,
  };

  let days = timestamp / SECSPERDAY + EPOCH_ADJUSTMENT_DAYS;
  let rem = timestamp % SECSPERDAY;

  if (rem < 0) {
    rem += SECSPERDAY;
    days--;
  }

  res.tm_hour = rem / SECSPERHOUR;
  rem %= SECSPERHOUR;
  res.tm_min = rem / SECSPERMIN;
  res.tm_sec = rem % SECSPERMIN;

  const weekday = (ADJUSTED_EPOCH_WDAY + days) % DAYSPERWEEK;
  res.tm_wday = weekday < 0 ? weekday + DAYSPERWEEK : weekday;

  const era = (days >= 0 ? days : days - (DAYS_PER_ERA - 1n)) / DAYS_PER_ERA;
  const eraday = days - era * DAYS_PER_ERA;
  const erayear = (eraday - eraday / (DAYS_PER_4_YEARS - 1n) + eraday / DAYS_PER_CENTURY - eraday / (DAYS_PER_ERA - 1n)) / 365n;
  const yearday = eraday - (DAYS_PER_YEAR * erayear + erayear / 4n - erayear / 100n);
  let month = (5n * yearday + 2n) / 153n;
  const day = yearday - ((153n * month + 2n) / 5n) + 1n;

  month += month < 10n ? 2n : -10n;
  const year = ADJUSTED_EPOCH_YEAR + erayear + era * YEARS_PER_ERA + (month <= 1n ? 1n : 0n);

  res.tm_yday = yearday >= DAYS_PER_YEAR - DAYS_IN_JANUARY - DAYS_IN_FEBRUARY
    ? yearday - (DAYS_PER_YEAR - DAYS_IN_JANUARY - DAYS_IN_FEBRUARY)
    : yearday + DAYS_IN_JANUARY + DAYS_IN_FEBRUARY + (isLeapYear(erayear) ? 1n : 0n);
  res.tm_year = year - YEAR_BASE;
  res.tm_mon = month;
  res.tm_mday = day;

  return {
    tm_hour: Number(res.tm_hour),
    tm_mday: Number(res.tm_mday),
    tm_min: Number(res.tm_min),
    tm_mon: Number(res.tm_mon),
    tm_sec: Number(res.tm_sec),
    tm_us_offset: Number(res.tm_us_offset),
    tm_wday: Number(res.tm_wday),
    tm_yday: Number(res.tm_yday),
    tm_year: Number(res.tm_year),
  };
}