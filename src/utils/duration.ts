import { GreyCat } from '../greycat.js';
import { core } from '../std/index.js';

/**
 * Based on the current duration value, returns an approximation of the better human "processable" value
 * and the unit for it.
 * @param duration
 * @returns
 */
export function decomposeDuration(g: GreyCat, duration: core.duration): [number | bigint, core.DurationUnit] {
  if (duration.s === 0) {
    if (duration.us >= 10e5) {
      return [duration.s, core.DurationUnit.seconds(g)];
    }
    if (duration.us >= 10e2) {
      return [duration.ms, core.DurationUnit.milliseconds(g)];
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

