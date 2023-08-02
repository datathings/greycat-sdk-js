import { core } from '../std/index.js';

export const GEO_LAT_MIN = -85.05112878;
export const GEO_LAT_MAX = 85.05112878;
export const GEO_LNG_MIN = -180;
export const GEO_LNG_MAX = 180;
export const GEO_STEP_MAX = 32;

/**
 * @param a a `core::geo`
 * @param b a `core::geo`
 * @returns `true` if they are deeply equals; `false` otherwise
 */
export function geoEquals(a: core.geo, b: core.geo): boolean {
  return a.value === b.value;
}
