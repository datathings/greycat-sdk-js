import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';

export class geo extends GCObject {
  static readonly _type = 'core.geo' as const;

  constructor(type: AbiType, public value: bigint, public lat: number, public lng: number) {
    super(type);
  }

  static load(r: AbiReader): geo {
    const value = r.read_u64();
    const [lat, lng] = geoDecode(value);
    return new geo(r.abi.types[r.abi.core_geo_offset], value, lat, lng);
  }

  static fromJSON(o: unknown): geo {
    Object.setPrototypeOf(o, geo.prototype);
    return o as geo;
  }

  override save(w: AbiWriter) {
    w.write_u8(PrimitiveType.geo);
    w.write_u64(this.value);
  }

  override toJSON() {
    return {
      _type: this.type.name,
      lat: this.lat,
      lng: this.lng,
    };
  }
}

const LAT_MIN = -85.05112878;
const LAT_MAX = 85.05112878;
const LAT_EPS = 0.00000001;
const LNG_MIN = -180;
const LNG_MAX = 180;
const STEP_MAX = 32n;

// prettier-ignore
function interleave64(xlo: number, ylo: number): bigint {
  let x = BigInt(xlo);
  let y = BigInt(ylo);

  x = (x | (x << 16n)) & 0x0000ffff0000ffffn;
  x = (x | (x <<  8n)) & 0x00ff00ff00ff00ffn;
  x = (x | (x <<  4n)) & 0x0f0f0f0f0f0f0f0fn;
  x = (x | (x <<  2n)) & 0x3333333333333333n;
  x = (x | (x <<  1n)) & 0x5555555555555555n;

  y = (y | (y << 16n)) & 0x0000ffff0000ffffn;
  y = (y | (y <<  8n)) & 0x00ff00ff00ff00ffn;
  y = (y | (y <<  4n)) & 0x0f0f0f0f0f0f0f0fn;
  y = (y | (y <<  2n)) & 0x3333333333333333n;
  y = (y | (y <<  1n)) & 0x5555555555555555n;

  return x | (y << 1n);
}

// prettier-ignore
function deinterleave64(geo: bigint): readonly [number, number] {
  let x = geo;
  let y = geo >> 1n;

  x = (x | (x >>  0n)) & 0x5555555555555555n;
  x = (x | (x >>  1n)) & 0x3333333333333333n;
  x = (x | (x >>  2n)) & 0x0f0f0f0f0f0f0f0fn;
  x = (x | (x >>  4n)) & 0x00ff00ff00ff00ffn;
  x = (x | (x >>  8n)) & 0x0000ffff0000ffffn;
  x = (x | (x >> 16n)) & 0x00000000ffffffffn;

  y = (y | (y >>  0n)) & 0x5555555555555555n;
  y = (y | (y >>  1n)) & 0x3333333333333333n;
  y = (y | (y >>  2n)) & 0x0f0f0f0f0f0f0f0fn;
  y = (y | (y >>  4n)) & 0x00ff00ff00ff00ffn;
  y = (y | (y >>  8n)) & 0x0000ffff0000ffffn;
  y = (y | (y >> 16n)) & 0x00000000ffffffffn;

  return [Number(x), Number(y)];
}

/**
 * Encodes `lat`, `lng` to a `bigint` using Morton z-curve.
 */
export function geoEncode(lat: number, lng: number) {
  if (lat < LAT_MIN) {
    lat = LAT_MIN;
  }
  if (lat >= LAT_MAX) {
    lat = LAT_MAX - LAT_EPS;
  }
  if (lng < LNG_MIN) {
    lng = LNG_MIN;
  }
  if (lng >= LNG_MAX) {
    lng = LNG_MAX - LAT_EPS;
  }

  // Math.fround(): f64 => f32

  let lat_offset: number /*f64*/ = (lat - LAT_MIN) / (LAT_MAX - LAT_MIN);
  let lng_offset: number /*f64*/ = (lng - LNG_MIN) / (LNG_MAX - LNG_MIN);
  // TODO convert f64 => f32
  // lat_offset = Math.fround(lat_offset)
  // lng_offset = Math.fround(lng_offset)
  lat_offset *= Number(1n << STEP_MAX);
  lng_offset *= Number(1n << STEP_MAX);

  const ilato: number /*u32*/ = /*cast f64 to u32*/ Math.floor(lat_offset);
  const ilono: number /*u32*/ = /*cast f64 to u32*/ Math.floor(lng_offset);

  return interleave64(ilato, ilono);
}

/**
 * Decodes a `bigint` to a `lat`, `lng` using Morton z-curve.
 */
export function geoDecode(geo: bigint): readonly [number, number] {
  const [ilato, ilono] = deinterleave64(geo);

  const lat = LAT_MIN + ((ilato + 0.5) / Number(1n << STEP_MAX)) * (LAT_MAX - LAT_MIN);
  const lng = LNG_MIN + ((ilono + 0.5) / Number(1n << STEP_MAX)) * (LNG_MAX - LNG_MIN);

  return [lat, lng] as const;
}
