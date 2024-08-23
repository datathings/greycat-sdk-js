import { GCEnum, GCObject, std } from '../exports.js';

const NUM = '0123456789';
const LOWER_ALPHA = 'abcdefghijklmnopqrstuvwxyz';
const UPPER_ALPHA = LOWER_ALPHA.toUpperCase();
const CHARS = NUM + LOWER_ALPHA + UPPER_ALPHA;
const HUMAN_SIZE = ' KMGTPEZY';
const GREYCAT_NUMBER_TYPES = ['core::float', 'core::int'];

const hexLEtoBEbuf = new Uint8Array(8);
const hexLEtoBEdv = new DataView(hexLEtoBEbuf.buffer);

/**
 * Converts little-endian hexedecimal to there big-endian `BigInt`
 */
export function hexLEtoBE(hex: string): bigint {
  const le = BigInt(hex.startsWith('0x') ? hex : `0x${hex}`);
  hexLEtoBEdv.setBigUint64(0, le, true);
  const be = hexLEtoBEdv.getBigUint64(0, false);
  return be;
}

/**
 * Converts big-endian hexedecimal to there little-endian `BigInt`
 */
export function hexBEtoLE(hex: string): bigint {
  const be = BigInt(hex.startsWith('0x') ? hex : `0x${hex}`);
  hexLEtoBEdv.setBigUint64(0, be, false);
  const le = hexLEtoBEdv.getBigUint64(0, true);
  return le;
}

export function isGreycatNumber(type: string): boolean {
  return GREYCAT_NUMBER_TYPES.includes(type);
}

/**
 * Considered scalar:
 *  - string
 *  - number
 *  - bigint
 *  - boolean
 *  - null
 *  - undefined
 *
 * @param val
 * @returns
 */
export function isScalar(
  val: unknown,
): val is string | number | boolean | bigint | null | undefined {
  const type = typeof val;
  switch (type) {
    default: {
      return true;
    }
    case 'function':
    case 'object':
      return val === null;
  }
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

  if (value instanceof GCObject) {
    return value.$type.name;
  }

  if (typeof value === 'object') {
    if ('_type' in value && typeof value._type === 'string') {
      return value._type;
    }
    return `Object { ${Object.keys(value).length} }`;
  }

  if (value instanceof Array) {
    return `Array [ ${value.length} ]`;
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

/**
 * Ellipsis a string after `max` character.
 * @param s
 * @param max
 * @returns
 */
function toStrTiny(s: string, max = 100) {
  if (s.length > max) {
    return `${s.slice(0, max)}...`;
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
  /** optional Date formatter used for: `core.time`, `core.Date` and `Date` */
  dateFmt?: Intl.DateTimeFormat;
  /** optional number formatter used for: `number` */
  numFmt?: Intl.NumberFormat;
  /**
   * pretty-print content if possible
   */
  pretty?: boolean;
  /** optional boolean to surround strings with doublequotes, defaults to `false` */
  quotedString?: boolean;
}

/**
 * Best-effort to stringify the given value.
 */
export function stringify(props: StringifyProps): string {
  const { text, value, dateFmt, numFmt, name, tiny, pretty = false } = props;
  if (text) {
    return text;
  }
  if (value instanceof std.core.time) {
    return dateFmt ? value.format(dateFmt) : value.toString();
  } else if (value instanceof std.core.duration) {
    return value.toString();
  } else if (typeof value === 'string') {
    if (tiny) {
      return props.quotedString ? `"${toStrTiny(value)}"` : toStrTiny(value);
    }
    return props.quotedString ? `"${value}"` : value;
  } else if (typeof value === 'number') {
    return numFmt ? numFmt.format(value) : `${value}`;
  } else if (isScalar(value)) {
    return String(value);
  } else if (value instanceof Date) {
    return dateFmt ? dateFmt.format(value) : value.toISOString();
  } else if (value instanceof std.core.Date) {
    return value.toString();
  } else if (value instanceof std.core.Tuple) {
    const tmp = props.value;
    const tmpQuotedString = props.quotedString;
    props.value = value.x;
    props.quotedString = true;
    const x = stringify(props);
    props.value = value.y;
    const y = stringify(props);
    props.value = tmp;
    props.quotedString = tmpQuotedString;
    return `(${x}, ${y})`;
  } else if (isNode(value)) {
    if (name) {
      const type = Object.getPrototypeOf(value).constructor._type.split('::')[1];
      return `${type}/${encodeURIComponent(name)}`;
    }
    return value.toString();
  } else if (value instanceof std.core.geo) {
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
  } else if (value instanceof GCEnum) {
    if (value.value) {
      const tmp = props.value;
      const tmpQuotedString = props.quotedString;
      props.value = value.value;
      props.quotedString = true;
      const en_value = stringify(props);
      props.value = tmp;
      props.quotedString = tmpQuotedString;
      if (value.$type.name.startsWith('core::')) {
        return `${value.$type.name.slice(6)}::${value.key}(${en_value})`;
      } else {
        return `${value.$type.name}::${value.key}(${en_value})`;
      }
    }
    if (value.$type.name.startsWith('core::')) {
      return `${value.$type.name.slice(6)}::${value.key}`;
    } else {
      return `${value.$type.name}::${value.key}`;
    }
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
    return JSON.stringify(value, bigintsAsString, pretty ? '  ' : undefined);
  }
  return String(value);
}

/**
 * Stringifies `bigint`, the rest is left unchanged
 */
function bigintsAsString(_key: string, value: unknown): unknown {
  if (typeof value === 'bigint') {
    return `${value}`;
  }
  return value;
}

export function isNode(
  value: unknown,
): value is
  | std.core.node
  | std.core.nodeTime
  | std.core.nodeList
  | std.core.nodeIndex
  | std.core.nodeGeo {
  return (
    value instanceof std.core.node ||
    value instanceof std.core.nodeTime ||
    value instanceof std.core.nodeList ||
    value instanceof std.core.nodeIndex ||
    value instanceof std.core.nodeGeo
  );
}

// /**
//  * @param abi
//  * @param value
//  * @returns the slot type of the value and the properly casted value based on its type
//  */
// export function valueType(abi: Abi, value: unknown): PrimitiveType {
//   switch (typeof value) {
//     case 'bigint': {
//       return PrimitiveType.int;
//     }
//     case 'boolean': {
//       return PrimitiveType.bool;
//     }
//     case 'function': {
//       return PrimitiveType.error;
//     }
//     case 'number': {
//       if (Number.isInteger(value)) {
//         return PrimitiveType.int;
//       }
//       return PrimitiveType.float;
//     }
//     case 'object': {
//       if (value === null) {
//         return PrimitiveType.null;
//       } else if (value instanceof GCEnum) {
//         return PrimitiveType.enum;
//       } else if (value instanceof GCObject) {
//         if (value.$type.offset === abi.core_char_offset) {
//           // core.char is always converted to string
//           throw new Error('unreachable');
//         }
//         if (value.$type.offset === abi.core_node_offset) {
//           return PrimitiveType.node;
//         }
//         if (value.$type.offset === abi.core_node_time_offset) {
//           return PrimitiveType.node_time;
//         }
//         if (value.$type.offset === abi.core_node_index_offset) {
//           return PrimitiveType.node_index;
//         }
//         if (value.$type.offset === abi.core_node_list_offset) {
//           return PrimitiveType.node_list;
//         }
//         if (value.$type.offset === abi.core_node_geo_offset) {
//           return PrimitiveType.node_geo;
//         }
//         if (value.$type.offset === abi.core_geo_offset) {
//           return PrimitiveType.geo;
//         }
//         if (value.$type.offset === abi.core_time_offset) {
//           return PrimitiveType.time;
//         }
//         if (value.$type.offset === abi.core_duration_offset) {
//           return PrimitiveType.duration;
//         }
//         if (value.$type.offset === abi.core_cubic_offset) {
//           return PrimitiveType.cubic;
//         }
//         if (value.$type.offset === abi.core_t2_offset) {
//           return PrimitiveType.t2;
//         }
//         if (value.$type.offset === abi.core_t3_offset) {
//           return PrimitiveType.t3;
//         }
//         if (value.$type.offset === abi.core_t4_offset) {
//           return PrimitiveType.t4;
//         }
//         if (value.$type.offset === abi.core_str_offset) {
//           return PrimitiveType.str;
//         }
//         if (value.$type.offset === abi.core_t2f_offset) {
//           return PrimitiveType.t2f;
//         }
//         if (value.$type.offset === abi.core_t3f_offset) {
//           return PrimitiveType.t3f;
//         }
//         if (value.$type.offset === abi.core_t4f_offset) {
//           return PrimitiveType.t4f;
//         }
//         if (value.$type.offset === abi.core_function_offset) {
//           return PrimitiveType.function;
//         }
//         if (value.$type.offset === abi.core_type_offset) {
//           return PrimitiveType.type;
//         }
//         if (value.$type.offset === abi.core_field_offset) {
//           return PrimitiveType.field;
//         }
//         return PrimitiveType.object;
//       } else if (Array.isArray(value)) {
//         return PrimitiveType.object;
//       } else if (value instanceof Map) {
//         return PrimitiveType.object;
//       } else if ('_type' in value && typeof value._type === 'string') {
//         return PrimitiveType.object;
//       }
//       // TODO we could potentially try to infer the abi type based on duck-typing
//       return {
//         slot_type: PrimitiveType.object,
//         value: core.Map.create(new Map(Object.entries(value))),
//       };
//     }
//     case 'string': {
//       if (abi.off_by_symbol.get(value) === undefined) {
//         return PrimitiveType.object;
//       }
//       return PrimitiveType.stringlit;
//     }
//     case 'symbol': {
//       return valueType(abi, value.toString());
//     }
//     case 'undefined': {
//       return PrimitiveType.null;
//     }
//   }
// }
