import { core } from '../index.js';

export function timeFormat(time: core.time, tz: core.TimeZone, options: Intl.DateTimeFormatOptions = {}): string {
  return time.format(tz, options);
}