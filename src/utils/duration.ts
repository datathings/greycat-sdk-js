import { GreyCat } from '../greycat.js';
import { core } from '../std/index.js';

/**
 * @param a a `core::duration`
 * @param b a `core::duration`
 * @returns `true` if they are deeply equals; `false` otherwise
 */
export function durationEquals(a: core.duration, b: core.duration): boolean {
  return a.s === b.s && a.us === b.us;
}

/**
 * @param d
 * @returns a string representation of the duration (readable & approximated)
 */
export function durationToStr(d: core.duration): string {
  const us = BigInt(d.value);
  if (us < 1_000n) {
    return `${us} μs`;
  }
  if (us < 1_000_000n) {
    return `${us / 1_000n} ms`;
  }
  if (us < 60_000_000n) {
    return `${us / 1_000_000n} s`;
  }
  if (us < 3_600_000_000n) {
    return `${us / 60_000_000n} min`;
  }
  if (us < 86_400_000_000n) {
    return `${us / 3_600_000_000n} hour`;
  }
  if (us < 604_800_000_000n) {
    return `${us / 86_400_000_000n} day`;
  }
  if (us < 2_628_000_000_000n) {
    return `${us / 604_800_000_000n} week`;
  }
  if (us < 31_536_000_000_000n) {
    return `${us / 2_628_000_000_000n} month`;
  }
  return `${us / 31_536_000_000_000n} year`;
}

/**
 * Based on the current duration value, returns an approximation of the better human "processable" value
 * and the unit for it.
 * @param duration
 * @returns
 */
export function decomposeDuration(g: GreyCat, duration: core.duration): [number, core.DurationUnit] {
  if (duration.s === 0) {
    if (duration.us >= 10e5) {
      return [duration.us / 10e5, core.DurationUnit.seconds(g)];
    }
    if (duration.us >= 10e2) {
      return [duration.us / 10e2, core.DurationUnit.milliseconds(g)];
    }
    return [duration.us, core.DurationUnit.microseconds(g)];
  }
  if (duration.s >= 31_540_000) {
    // average number of seconds in a year
    return [duration.s / 31_540_000, core.DurationUnit.years(g)];
  }
  if (duration.s >= 2_628_000) {
    // average number of seconds in a month
    return [duration.s / 2_628_000, core.DurationUnit.months(g)];
  }
  if (duration.s >= 604_800) {
    // number of seconds in a week
    return [duration.s / 604_800, core.DurationUnit.weeks(g)];
  }
  if (duration.s >= 86_400) {
    // number of seconds in a day
    return [duration.s / 86_400, core.DurationUnit.days(g)];
  }
  if (duration.s >= 3_600) {
    // number of seconds in an hour
    return [duration.s / 3_600, core.DurationUnit.hours(g)];
  }
  if (duration.s >= 60) {
    // number of seconds in a minute
    return [duration.s / 60, core.DurationUnit.minutes(g)];
  }
  return [duration.s, core.DurationUnit.seconds(g)];
}

/**
 * *Note that for weeks, months and years, this is an approximation*
 * 
 * @param value a number value (can be a floating point value)
 * @param unit a `core.DurationUnit`
 * @returns conversion of the `value` in a specific unit (`core.DurationUnit`) into a `core.duration`
 */
export function toDuration(g: GreyCat, value: number, unit: core.DurationUnit): core.duration {
  switch (unit.key) {
    default:
    case 'microseconds':
      return g.createDuration(BigInt(value)) as core.duration;
    case 'milliseconds':
      return g.createDuration(BigInt(value) * 1_000n) as core.duration;
    case 'seconds':
      return g.createDuration(BigInt(value) * 1_000_000n) as core.duration;
    case 'minutes':
      return g.createDuration(BigInt(value) * 60_000_000n) as core.duration;
    case 'hours':
      return g.createDuration(BigInt(value) * 3_600_000_000n) as core.duration;
    case 'days':
      return g.createDuration(BigInt(value) * 86_400_000_000n) as core.duration;
    case 'weeks':
      return g.createDuration(BigInt(value) * 604_800_000_000n) as core.duration;
    case 'months':
      return g.createDuration(BigInt(value) * 2_628_000_000_000n) as core.duration;
    case 'years':
      return g.createDuration(BigInt(value) * 31_536_000_000_000n) as core.duration;
  }
}

/**
 * @param d a `core.duration`
 * @param unit a `core.TimeUnit`
 * @returns the corresponding value of the duration in the specified unit
 */
export function durationIn(d: core.duration, unit: core.DurationUnit): bigint {
  switch (unit.key) {
    default:
    case 'microseconds':
      return BigInt(d.value);
    case 'milliseconds':
      return BigInt(d.value) / 1_000n
    case 'seconds':
      return BigInt(d.value) / 1_000_000n
    case 'minutes':
      return BigInt(d.value) / 60_000_000n
    case 'hours':
      return BigInt(d.value) / 3_600_000_000n
    case 'days':
      return BigInt(d.value) / 86_400_000_000n
    case 'weeks':
      return BigInt(d.value) / 604_800_000_000n
    case 'months':
      return BigInt(d.value) / 2_628_000_000_000n
    case 'years':
      return BigInt(d.value) / 31_536_000_000_000n
  }
}

