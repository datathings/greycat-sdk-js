import { addon, Keys } from '.';
import { GArray } from './GArray';
import { GObject } from './GObject';
import { GMap } from './GMap';
import { GFunction } from './GFunction';
import { GRef } from './GRef';
import { GString } from './GString';

const C_INT_MAX = 2147483647;

/** a DataView of 64bytes used to convert big numbers we create it once and for all here and re-use it everywhere */
const view = new DataView(new ArrayBuffer(64));

function isGType(value: any): value is GObject | GMap | GArray | GFunction | GRef {
  return (
    value instanceof GObject ||
    value instanceof GMap ||
    value instanceof GArray ||
    value instanceof GFunction ||
    value instanceof GRef
  );
}

/**
 * Delegates `set` implementation to the client
 */
export interface ISetValueHandler {
  isInt32(value: number): void;
  isDouble(value: number): void;
  isBoolean(value: boolean): void;
  /**
   * 64 bits number split in two
   * @param high 32bits high
   * @param low 32bits low
   */
  isLong(high: number, low: number): void;
  isNull(): void;
  isUndefined(): void;
  isObject(obj_ptr: number): void;
  isNotHandled(value: any): void;
}

/**
 * Delegates `get` implementation to the client
 */
export interface IGetValueHandler {
  /** @returns must return the Greycat Key value (hashed) of the element */
  getValueType(): number;
  /** @returns must return the actual int32 value */
  getInt32(): number;
  /** @returns must return the actual uint value */
  getUint(): number;
  /** @returns must return the actual double value */
  getDouble(): number;
  /** @returns must return the actual C bool value (0 = false, 1 = true) */
  getBool(): number;
  /**
   * @returns must return the actual 'low' value (32bits) of the 64bits long,
   * the calling code will get the 'high' value for you and create the bigint if necessary
   */
  getLong(): number;
  /**
   * @returns must return the actual 'low' value (32bits) of the 64bits long,
   * the calling code will get the 'high' value for you and create the bigint if necessary
   */
  getULong(): number;
  /** @returns must return the actual float value */
  getFloat(): number;
  /**
   * @returns must return the gobject_t* pointer value
   * the calling code will create the appropriate wrapper instance for you based on the type
   */
  getObject(): number;
}

/**
 * Will call your `handler: ISetValueHandler` based on the infered type of the given `value`
 *
 * @param value any javascript value
 * @param graph_ptr ggraph_t pointer
 * @param handler client-specific implementation of "how" you set the value in greycat
 */
export function js_to_greycat(value: any, graph_ptr: number, handler: ISetValueHandler) {
  switch (typeof value) {
    case 'number': {
      if (value.toString().indexOf('.') !== -1) {
        // number is a floating point
        handler.isDouble(value);
        return;
      }
      if (value >= -C_INT_MAX && value <= C_INT_MAX) {
        // less than i32
        handler.isInt32(value);
        return;
      }
      // more than i32
      // convert to bigInt and transfert high/low bits in order to recreate int64 in C
      view.setBigInt64(0, BigInt(value));
      handler.isLong(view.getInt32(0), view.getInt32(4));
      return;
    }

    case 'bigint': {
      view.setBigInt64(0, BigInt(value));
      handler.isLong(view.getInt32(0), view.getInt32(4));
      return;
    }

    case 'boolean': {
      handler.isBoolean(value);
      return;
    }

    case 'string': {
      handler.isObject(createGString(graph_ptr, value).ptr);
      return;
    }

    case 'undefined': {
      handler.isUndefined();
      return;
    }

    case 'function': {
      handler.isObject(createGFunction(graph_ptr, value).ptr);
      return;
    }

    case 'object': {
      if (value === null) {
        handler.isNull();
        return;
      }
      if (isGType(value)) {
        if (value instanceof GObject || value instanceof GArray) {
          handler.isObject(value.$$_ptr);
        } else {
          handler.isObject(value.ptr);
        }
        return;
      }
      if (value instanceof Array) {
        handler.isObject(createGArray(graph_ptr, value).$$_ptr);
        return;
      }
      if (value instanceof Map) {
        handler.isObject(createGMap(graph_ptr, value).ptr);
        return;
      }
      if (value instanceof String) {
        handler.isObject(createGString(graph_ptr, value.toString()).ptr);
        return;
      }
      handler.isObject(createGObject(graph_ptr, value).$$_ptr);
      return;
    }

    default:
      break;
  }

  // if we make it this far, then we can't convert it for greycat
  handler.isNotHandled(value);
}

export function greycat_to_js(handler: IGetValueHandler) {
  const type = handler.getValueType();
  switch (type) {
    case Keys.g_null     : return null;
    case Keys.g_bool     : return handler.getBool() === 1;
    case Keys.g_i32      : return handler.getInt32();
    case Keys.g_u32     : return handler.getUint();
    case Keys.g_i64     : return getLong(handler.getLong());
    case Keys.g_u64    : return getLong(handler.getULong());
    case Keys.g_f64   : return handler.getDouble();
    case Keys.g_Map      : return new GMap(handler.getObject());
    case Keys.g_Array    : return new GArray(handler.getObject());
    case Keys.g_Function : return new GFunction(handler.getObject());
    case Keys.g_String   : return new GString(handler.getObject()).value;
    case Keys.g_Ref: return new GRef(handler.getObject());
    // TODO improve this as the fallback type is always GObject and that might lead to issues
    default              :
    case Keys.g_Object   : return new GObject(handler.getObject());
  }
}

/**
 * Converts a javascript value to a gslot_t* pointer
 *
 * @param value a javascript value
 * @param graph_ptr a ggraph_t* pointer
 * @returns `ptr` gslot_t*, `type` g_key, or `undefined` if type is unknown
 */
export function js_to_slot(value: any, graph_ptr: number): { ptr: number, type: number } | undefined {
  let slot = 0;
  let type = 0;
  js_to_greycat(value, graph_ptr, {
    isInt32: (v) => {
      slot = addon._gslot__from_int(v);
      type = Keys.g_i32;
    },
    isDouble: (v) => {
      slot = addon._gslot__from_double(v);
      type = Keys.g_f64;
    },
    isBoolean: (v) => {
      slot = addon._gslot__from_bool(v ? 1 : 0);
      type = Keys.g_bool;
    },
    isLong: (high, low) => {
      slot = addon._gslot__from_long(high, low);
      type = Keys.g_i64;
    },
    isNull: () => {
      slot = addon._gslot__from_null();
      type = Keys.g_null;
    },
    isObject: (obj_ptr) => {
      const obj_type = addon._object__type_key(obj_ptr);
      if (obj_type === Keys.g_Map) {
        slot = addon._gslot__from_object(obj_ptr);
        type = Keys.g_Map;
      } else if (obj_type === Keys.g_Array) {
        slot = addon._gslot__from_object(obj_ptr);
        type = Keys.g_Array;
      } else if (obj_type === Keys.g_Function) {
        slot = addon._gslot__from_object(obj_ptr);
        type = Keys.g_Function;
      } else if (obj_type === Keys.g_Object) {
        slot = addon._gslot__from_object(obj_ptr);
        type = Keys.g_Object;
      } else if (obj_type === Keys.g_String) {
        slot = addon._gslot__from_object(obj_ptr);
        type = Keys.g_String;
      } else if (obj_type === Keys.g_Ref) {
        slot = addon._gslot__from_reference(obj_ptr);
        type = Keys.g_Ref;
      }
    },
    isUndefined: () => {
      // noop
    },
    isNotHandled: (v: any) => {
      console.error(`js_to_slot can't set value '${v}' of type '${typeof v}': not handled yet`);
    },
  });
  if (slot !== 0) {
    return { ptr: slot, type };
  }
  return;
}

export function slot_to_js(slot_ptr: number, key: number) {
  return greycat_to_js({
    getValueType() {
      return key;
    },
    getBool() {
      return addon._gslot__get_bool(slot_ptr);
    },
    getDouble() {
      return addon._gslot__get_double(slot_ptr);
    },
    getFloat() {
      return addon._gslot__get_float(slot_ptr);
    },
    getInt32() {
      return addon._gslot__get_int(slot_ptr);
    },
    getLong() {
      return addon._gslot__get_long(slot_ptr);
    },
    getObject() {
      return addon._gslot__get_object(slot_ptr);
    },
    getULong() {
      return addon._gslot__get_ulong(slot_ptr);
    },
    getUint() {
      return addon._gslot__get_uint(slot_ptr);
    },
  });
}

export function createGString(graph_ptr: number, value: string) {
  const g_str = addon._ggraph__create_string(graph_ptr);
  const str = new GString(g_str);
  str.value = value;
  return str;
}

export function createGArray(graph_ptr: number, value: any[]) {
  const g_arr = addon._ggraph__create_array(graph_ptr);
  const arr = new GArray(g_arr);
  arr.resize(value.length);
  value.forEach((elem, i) => {
    // because 'arr' is a Proxy, assigning value here will also
    // add the value in its greycat C counterpart
    arr[i] = elem;
  });
  return arr;
}

export function createGObject(graph_ptr: number, value: { [k: string]: any }) {
  const g_obj = addon._ggraph__create_open_object(graph_ptr);
  const obj = new GObject(g_obj);
  Object.keys(value).forEach((propName) => {
    // because 'obj' is a Proxy, assigning value here will also
    // add the value in its greycat C counterpart
    obj[propName] = value[propName];
  });
  return obj;
}

export function createGMap(graph_ptr: number, value: Map<any, any>) {
  const g_map = addon._ggraph__create_map(graph_ptr);
  const map = new GMap(g_map);
  value.forEach((mvalue, mkey) => map.set(mkey, mvalue));
  return map;
}

export function createGFunction(graph_ptr: number, value: (...args: any[]) => any) {
  const g_func = addon._ggraph__create_function(graph_ptr);
  const func = new GFunction(g_func);
  func.then(value);
  return func;
}

export function getLong(low: number) {
  view.setInt32(0, addon.getTempRet0()); // high: automatically set by Emscripten when int64
  view.setInt32(4, low);
  const bigInt = view.getBigInt64(0);
  if (bigInt >= -Number.MAX_SAFE_INTEGER && bigInt <= Number.MAX_SAFE_INTEGER) {
    return parseInt(bigInt.toString(), 10);
  } else {
    return bigInt;
  }
}
