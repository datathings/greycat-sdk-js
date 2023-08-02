import { core } from '@greycat/sdk';
import { durationToStr } from './duration.js';
import slugify from './slugify.js';

const NUM = '0123456789';
const LOWER_ALPHA = 'abcdefghijklmnopqrstuvwxyz';
const UPPER_ALPHA = LOWER_ALPHA.toUpperCase();
const CHARS = NUM + LOWER_ALPHA + UPPER_ALPHA;
const HUMAN_SIZE = ' KMGTPEZY';
const GREYCAT_NUMBER_TYPES = ['core.float', 'core.int'];

export function isGreycatNumber(type: string): boolean {
  return GREYCAT_NUMBER_TYPES.includes(type);
}

export function isScalar(
  val: unknown,
): val is string | number | boolean | bigint | null | undefined {
  return (
    typeof val === 'boolean' ||
    typeof val === 'bigint' ||
    typeof val === 'number' ||
    typeof val === 'string' ||
    typeof val === 'undefined' ||
    val == null
  );
}

export function generateId(length = 5): string {
  let id = '';
  for (let i = 0; i < length; i++) {
    id += CHARS[randomInt(CHARS.length)];
  }
  return id;
}

/**
 * @param max maximum value (not included)
 * @returns an integer between `0` and `max` (not included)
 */
export function randomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

export function extractType(value: unknown): string {
  if (value === null || value === undefined) {
    return 'null';
  }

  if (typeof value === 'object') {
    if ('toJSON' in value && typeof value.toJSON === 'function') {
      const json = value.toJSON();
      if (json._type) {
        return json._type;
      }
    } else if ('_type' in value && typeof value._type === 'string') {
      return value._type;
    }
  }

  if (value instanceof Array) {
    return `Array(${value.length})`;
  }

  return typeof value;
}

/**
 * Returns a human readable size from a number of bytes
 * @param bytes
 * @param fractionDigits — Number of digits after the decimal point. Must be in the range 0 - 20, inclusive.
 */
export function humanSize(bytes: number, fractionDigits = 2): string {
  const magnitude = Math.min((Math.log(bytes) / Math.log(1024)) | 0, HUMAN_SIZE.length - 1);
  const result = bytes / Math.pow(1024, magnitude);
  const suffix = HUMAN_SIZE[magnitude].trim() + 'B';
  return result.toFixed(fractionDigits) + suffix;
}

export function extension(uri: string): string | undefined {
  const lastDot = uri.lastIndexOf('.');
  if (lastDot === -1) {
    return;
  }
  return uri.slice(lastDot + 1);
}

export function capitalize(txt: string): string {
  if (txt.length > 0) {
    return txt[0].toLocaleUpperCase() + txt.slice(1);
  }
  return txt;
}

function toStrTiny(s: string) {
  if (s.length > 100) {
    return `${s.slice(0, 100)}...`;
  }
  return s;
}

export interface StringifyProps {
  value: unknown;
  /**
   * use `name` to override node's ref with the given value
   */
  name?: string;
  /**
   * use `text` to completely override the type-check and display the given text
   */
  text?: string;
  tiny?: boolean;
  /** @deprecated string values are now always displayed as-is without doublequotes */
  raw?: boolean;
  dateFmt: Intl.DateTimeFormat;
  numFmt: Intl.NumberFormat;
  /**
   * pretty-print content if possible
   */
  pretty?: boolean;
}

/**
 * Best-effort to stringify the given value.
 */
export function stringify(props: StringifyProps): string {
  const { text, value, dateFmt, numFmt, name, tiny, pretty = false } = props;
  if (text) {
    return text;
  }
  if (value instanceof core.time) {
    const ms = typeof value.value === 'bigint' ? Number(value.value / 1_000n) : value.value / 1_000;
    const date = new Date(ms);
    if (isNaN(+date)) {
      // this Date is not "representable" as per the ECMA specs: https://tc39.es/ecma402/#sec-datetime-format-functions
      return `${ms}`;
    }
    return dateFmt.format(date);
  } else if (value instanceof core.duration) {
    return durationToStr(value);
  } else if (value instanceof Date) {
    return dateFmt.format(value);
  } else if (value instanceof core.Date) {
    return dateFmt.format(value.toDate());
  } else if (value instanceof core.Tuple) {
    props.value = value.get_x();
    const x = stringify(props);
    props.value = value.get_y();
    const y = stringify(props);
    return `(${x}, ${y})`;
  } else if (isNode(value)) {
    let type: string = Object.getPrototypeOf(value).constructor._type;
    type = type.slice(type.lastIndexOf('.') + 1);
    if (name) {
      return `gc://${type}/${slugify(name)}`;
    } else {
      return `gc://${type}/${value.ref}`;
    }
  } else if (typeof value === 'string') {
    if (tiny) {
      return toStrTiny(value);
    }
    return value;
  } else if (typeof value === 'number') {
    return numFmt.format(value);
  } else if (isScalar(value)) {
    return String(value);
  } else if (value instanceof core.geo) {
    if (tiny) {
      return `${value.lat.toFixed(2)}, ${value.lng.toFixed(2)}`;
    } else {
      return `${value.lat}, ${value.lng}`;
    }
  } else if (Array.isArray(value)) {
    if (tiny) {
      return `Array(${value.length})`;
    }
    return JSON.stringify(value);
  } else if (typeof value === 'object') {
    if (value) {
      if (tiny) {
        const type: string | undefined = Object.getPrototypeOf(value).constructor._type;
        if (type) {
          if (name) {
            return `gc://${type}/${name}`;
          }
          return `gc://${type}`;
        }
        return `Object(${Object.keys(value).length})`;
      }
      // eslint-disable-next-line no-prototype-builtins
      if (value.hasOwnProperty('toString')) {
        return value.toString();
      }
    }
    return JSON.stringify(value, null, pretty ? '  ' : undefined);
  }
  return String(value);
}

export function isNode(
  value: unknown,
): value is
  | core.node
  | core.nodeTime
  | core.nodeList
  | core.nodeIndex
  | core.nodeGeo {
  return (
    value instanceof core.node ||
    value instanceof core.nodeTime ||
    value instanceof core.nodeList ||
    value instanceof core.nodeIndex ||
    value instanceof core.nodeGeo
  );
}

