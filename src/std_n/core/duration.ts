import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';
import type { core, GreyCat, AbiType, AbiWriter, AbiReader } from '../../index.js';

export class duration extends GCObject {
  static readonly _type = 'core::duration' as const;

  constructor(type: AbiType, public value: bigint | number) {
    super(type);
  }

  static create(value: bigint | number, g: GreyCat = globalThis.greycat.default): core.duration {
    const ty = g.abi.types[g.abi.core_duration_offset];
    return new ty.factory(ty, value) as duration;
  }

  static from_ms(value: number, g: GreyCat = globalThis.greycat.default): core.duration {
    const ty = g.abi.types[g.abi.core_duration_offset];
    return new ty.factory(ty, value * 1_000) as core.duration;
  }

  static from_secs(value: number, g: GreyCat = globalThis.greycat.default): core.duration {
    const ty = g.abi.types[g.abi.core_duration_offset];
    return new ty.factory(ty, value * 1_000_000) as core.duration;
  }

  static from_mins(value: number, g: GreyCat = globalThis.greycat.default): core.duration {
    const ty = g.abi.types[g.abi.core_duration_offset];
    return new ty.factory(ty, value * 60_000_000) as core.duration;
  }

  static from_hours(value: number, g: GreyCat = globalThis.greycat.default): core.duration {
    const ty = g.abi.types[g.abi.core_duration_offset];
    return new ty.factory(ty, value * 3_600_000_000) as core.duration;
  }

  static from_days(value: number, g: GreyCat = globalThis.greycat.default): core.duration {
    const ty = g.abi.types[g.abi.core_duration_offset];
    return new ty.factory(ty, value * 86_400_000_000) as core.duration;
  }

  static from_weeks(value: number, g: GreyCat = globalThis.greycat.default): core.duration {
    const ty = g.abi.types[g.abi.core_duration_offset];
    return new ty.factory(ty, value * 604_800_000_000) as core.duration;
  }

  static from_months(value: number, g: GreyCat = globalThis.greycat.default): core.duration {
    const ty = g.abi.types[g.abi.core_duration_offset];
    return new ty.factory(ty, value * 2_630_016_000_000) as core.duration;
  }

  static from_years(value: number, g: GreyCat = globalThis.greycat.default): core.duration {
    const ty = g.abi.types[g.abi.core_duration_offset];
    return new ty.factory(ty, value * 31_536_000_000_000) as core.duration;
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
    return Number(this.value) / 2_630_016_000_000;
  }

  /**
   * Returns the duration in years
   */
  get year(): number {
    return Number(this.value) / 31_536_000_000_000;
  }

  equals(other: duration): boolean {
    return BigInt(this.value) === BigInt(other.value);
  }

  override toString(): string {
    const us = typeof this.value === 'bigint' ? this.value : BigInt(this.value);

    const year = 31_536_000_000_000n;
    const month = 2_630_016_000_000n;
    const day = 86_400_000_000n;
    const hour = 3_600_000_000n;
    const minute = 60_000_000n;
    const second = 1_000_000n;
    const millisecond = 1_000n;

    let result = "";
    let remainder = us;

    if (remainder >= year) {
      const cnt = remainder / year;
      if (cnt > 1) {
        result += `${cnt} years`;
      } else {
        result += `${cnt} year`;
      }
      remainder %= year;
    }
    if (remainder >= month) {
      if (result.length) {
        result += ' ';
      }
      const cnt = remainder / month;
      if (cnt > 1) {
        result += `${cnt} months`;
      } else {
        result += `${cnt} month`;
      }
      remainder %= month;
    }
    if (remainder >= day) {
      if (result.length) {
        result += ' ';
      }
      const cnt = remainder / day;
      if (cnt > 1) {
        result += `${cnt} days`;
      } else {
        result += `${cnt} day`;
      }
      remainder %= day;
    }
    if (remainder >= hour) {
      if (result.length) {
        result += ' ';
      }
      const cnt = remainder / hour;
      if (cnt > 1) {
        result += `${cnt} hours`;
      } else {
        result += `${cnt} hour`;
      }
      remainder %= hour;
    }
    if (remainder >= minute) {
      if (result.length) {
        result += ' ';
      }
      const cnt = remainder / minute;
      if (cnt > 1) {
        result += `${cnt} mins`;
      } else {
        result += `${cnt} min`;
      }
      remainder %= minute;
    }
    if (remainder >= second) {
      if (result.length) {
        result += ' ';
      }
      result += `${remainder / second} s`;
      remainder %= second;
    }
    if (remainder >= millisecond) {
      if (result.length) {
        result += ' ';
      }
      result += `${remainder / millisecond} ms`;
      remainder %= millisecond;
    }
    if (remainder > 0) {
      result += `${remainder} μs`;
    }

    return result.trim();
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
      s: Math.round(this.s),
      us,
    };
  }
}
