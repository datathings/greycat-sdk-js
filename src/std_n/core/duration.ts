import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';
import type { core, GreyCat, AbiType, AbiWriter, AbiReader } from '../../index.js';

export class duration extends GCObject {
  static readonly _type = 'core::duration' as const;
  static readonly YEAR = 31_536_000_000_000n as const;
  static readonly MONTH = 2_630_016_000_000n as const;
  static readonly WEEK = 604_800_000_000n as const;
  static readonly DAY = 86_400_000_000n as const;
  static readonly HOUR = 3_600_000_000n as const;
  static readonly MINUTE = 60_000_000n as const;
  static readonly SECOND = 1_000_000n as const;
  static readonly MILLISECOND = 1_000n as const;

  constructor(type: AbiType, public value: bigint | number) {
    super(type);
  }

  static create(value: bigint | number, g: GreyCat = globalThis.greycat.default): core.duration {
    const ty = g.abi.types[g.abi.core_duration_offset];
    return new ty.factory(ty, value) as duration;
  }

  static from_ms(value: number, g: GreyCat = globalThis.greycat.default): core.duration {
    const ty = g.abi.types[g.abi.core_duration_offset];
    return new ty.factory(ty, value * Number(duration.MILLISECOND)) as core.duration;
  }

  static from_secs(value: number, g: GreyCat = globalThis.greycat.default): core.duration {
    const ty = g.abi.types[g.abi.core_duration_offset];
    return new ty.factory(ty, value * Number(duration.SECOND)) as core.duration;
  }

  static from_mins(value: number, g: GreyCat = globalThis.greycat.default): core.duration {
    const ty = g.abi.types[g.abi.core_duration_offset];
    return new ty.factory(ty, value * Number(duration.MINUTE)) as core.duration;
  }

  static from_hours(value: number, g: GreyCat = globalThis.greycat.default): core.duration {
    const ty = g.abi.types[g.abi.core_duration_offset];
    return new ty.factory(ty, value * Number(duration.HOUR)) as core.duration;
  }

  static from_days(value: number, g: GreyCat = globalThis.greycat.default): core.duration {
    const ty = g.abi.types[g.abi.core_duration_offset];
    return new ty.factory(ty, value * Number(duration.DAY)) as core.duration;
  }

  static from_weeks(value: number, g: GreyCat = globalThis.greycat.default): core.duration {
    const ty = g.abi.types[g.abi.core_duration_offset];
    return new ty.factory(ty, value * Number(duration.WEEK)) as core.duration;
  }

  static from_months(value: number, g: GreyCat = globalThis.greycat.default): core.duration {
    const ty = g.abi.types[g.abi.core_duration_offset];
    return new ty.factory(ty, value * Number(duration.MONTH)) as core.duration;
  }

  static from_years(value: number, g: GreyCat = globalThis.greycat.default): core.duration {
    const ty = g.abi.types[g.abi.core_duration_offset];
    return new ty.factory(ty, value * Number(duration.YEAR)) as core.duration;
  }

  /**
   * Creates a `core.duration` from a number `value` and a `core.DurationUnit`.
   * 
   * eg. `core.duration.from_unit(42, core.DurationUnit.seconds())` => `42s`
   */
  static from_unit(value: number, unit: core.DurationUnit, g: GreyCat = globalThis.greycat.default): core.duration {
    switch (unit.key) {
      case 'microseconds': return duration.create(value, g);
      case 'milliseconds': return duration.from_ms(value, g);
      case 'seconds': return duration.from_secs(value, g);
      case 'minutes': return duration.from_mins(value, g);
      case 'hours': return duration.from_hours(value, g);
      case 'days': return duration.from_days(value, g);
      case 'weeks': return duration.from_weeks(value, g);
      case 'months': return duration.from_months(value, g);
      case 'years': return duration.from_years(value, g);
    }
  }

  static load(r: AbiReader, ty: AbiType): core.duration {
    const value = r.read_vi64();
    return new ty.factory(ty, value) as core.duration;
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
    return Number(this.value) / Number(duration.MILLISECOND);
  }

  /**
   * Returns the duration in seconds
   */
  get s(): number {
    return Number(this.value) / Number(duration.SECOND);
  }

  /**
   * Returns the duration in minutes
   */
  get min(): number {
    return Number(this.value) / Number(duration.MINUTE);
  }

  /**
   * Returns the duration in hours
   */
  get hour(): number {
    return Number(this.value) / Number(duration.HOUR);
  }

  /**
   * Returns the duration in days
   */
  get day(): number {
    return Number(this.value) / Number(duration.DAY);
  }

  /**
   * Returns the duration in weeks
   */
  get week(): number {
    return Number(this.value) / Number(duration.WEEK);
  }

  /**
   * Returns the duration in months
   */
  get month(): number {
    return Number(this.value) / Number(duration.MONTH)
  }

  /**
   * Returns the duration in years
   */
  get year(): number {
    return Number(this.value) / Number(duration.YEAR);
  }

  equals(other: duration): boolean {
    return BigInt(this.value) === BigInt(other.value);
  }

  override toString(separator = ' '): string {
    const us = typeof this.value === 'bigint' ? this.value : BigInt(this.value);

    if (us === 0n) {
      return `0us`;
    }

    const day = duration.DAY;
    const hour = duration.HOUR;
    const minute = duration.MINUTE;
    const second = duration.SECOND;
    const millisecond = duration.MILLISECOND;

    let result = '';
    let remainder = us;

    if (remainder >= day) {
      if (result.length) {
        result += separator;
      }
      result += `${remainder / day}day`;
      remainder %= day;
    }
    if (remainder >= hour) {
      if (result.length) {
        result += separator;
      }
      result += `${remainder / hour}hour`;
      remainder %= hour;
    }
    if (remainder >= minute) {
      if (result.length) {
        result += separator;
      }
      result += `${remainder / minute}min`;
      remainder %= minute;
    }
    if (remainder >= second) {
      if (result.length) {
        result += separator;
      }
      result += `${remainder / second}s`;
      remainder %= second;
    }
    if (remainder >= millisecond) {
      if (result.length) {
        result += separator;
      }
      result += `${remainder / millisecond}ms`;
      remainder %= millisecond;
    }
    if (remainder > 0) {
      if (result.length) {
        result += separator;
      }
      result += `${remainder}us`;
    }

    return result;
  }

  override toJSON() {
    let us: number;
    if (typeof this.value === 'bigint') {
      us = Number(this.value % duration.SECOND);
    } else {
      us = this.value % Number(duration.SECOND);
    }

    return {
      _type: this.$type.name,
      s: Math.round(this.s),
      us,
    };
  }

  override valueOf() {
    return this.value;
  }

  [Symbol.toPrimitive](_hint: string) {
    return this.value;
  }
}
