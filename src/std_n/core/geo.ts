import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';
import { deinterleave64_2d, interleave64_2d } from '../morton.js';
import { GreyCat } from '../../greycat.js';

export class geo extends GCObject {
  static readonly _type = 'core::geo' as const;

  constructor(type: AbiType, public value: bigint) {
    super(type);
  }

  static create(g: GreyCat, value: bigint): geo {
    return new geo(g.abi.types[g.abi.core_geo_offset], value);
  }

  /**
   * Morton encode's a `lat`, `lng` tuple into a `bigint` which is a valid GreyCat `geo` value
   */
  static encode(lat: number, lng: number): bigint {
    return geoEncode(lat, lng);
  }

  /**
   * Morton decode's a valid GreyCat `geo` value (`bigint`) into a `lat`, `lng` tuple
   */
  static decode(value: bigint): readonly [number, number] {
    return geoDecode(value);
  }

  static load(r: AbiReader, ty: AbiType): geo {
    const value = r.read_u64();
    const [lat, lng] = geoDecode(value);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new ty.factory!(ty, value, lat, lng) as geo;
  }

  static fromJSON(o: unknown): geo {
    Object.setPrototypeOf(o, geo.prototype);
    return o as geo;
  }

  get lat(): number {
    const [lat] = geoDecode(this.value);
    return lat;
  }

  get lng(): number {
    const [, lng] = geoDecode(this.value);
    return lng;
  }

  get latlng(): readonly [number, number] {
    return geoDecode(this.value);
  }

  override saveHeader(w: AbiWriter): void {
    w.write_u8(PrimitiveType.geo);
  }

  override saveContent(w: AbiWriter) {
    w.write_u64(this.value);
  }

  override toJSON() {
    const [lat, lng] = geoDecode(this.value);
    return {
      _type: this.$type.name,
      lat,
      lng,
    };
  }
}

const LAT_MIN = -85.05112878;
const LAT_MAX = 85.05112878;
const LAT_EPS = 0.00000001;
const LNG_MIN = -180;
const LNG_MAX = 180;
const STEP_MAX = 32n;

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

  return interleave64_2d(ilato, ilono);
}

/**
 * Decodes a `bigint` to a `lat`, `lng` using Morton z-curve.
 */
export function geoDecode(geo: bigint): readonly [number, number] {
  const [ilato, ilono] = deinterleave64_2d(geo);

  const lat = LAT_MIN + ((ilato + 0.5) / Number(1n << STEP_MAX)) * (LAT_MAX - LAT_MIN);
  const lng = LNG_MIN + ((ilono + 0.5) / Number(1n << STEP_MAX)) * (LNG_MAX - LNG_MIN);

  return [lat, lng] as const;
}
