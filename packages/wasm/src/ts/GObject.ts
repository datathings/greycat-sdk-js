import { IObject, hash } from './common';
import { addon } from '.';
import { ISetValueHandler, js_to_greycat, greycat_to_js, IGetValueHandler } from './types';
import { GString } from './GString';

export class GObject<T = any> implements IObject<T> {
  [index: number]: T | undefined;
  [prop: string]: any;

  constructor(ptr: number) {
    Object.defineProperty(this, '$$_ptr', { enumerable: false, writable: false, configurable: false, value: ptr });
    return new Proxy(this, {
      get(target, prop) {
        const name = prop.toString();
        if (name === '$$_ptr') {
          return ptr;
        }
        if (name === 'toJSON' || name === 'toString') {
          if (typeof target[name] === 'function') {
            return target[name].bind(target);
          } else {
            return target[name];
          }
        }
        return greycat_to_js(object_get_handler(ptr, hash(name)));
      },

      set(_, prop, value) {
        const name = prop.toString();
        const offset = parseInt(name, 10);
        if (isNaN(offset)) {
          const graph_ptr = addon._object__graph(ptr);
          js_to_greycat(value, graph_ptr, object_set_handler(ptr, graph_ptr, name));
          return true;
        }
        throw new Error('GObject cannot set value using number offset');
      },
    });
  }

  toJSON() {
    return JSON.parse(this.toString());
  }

  toString() {
    const str = new GString(addon._object__to_json(this.$$_ptr));
    const json = str.value;
    str.unmark();
    return json;
  }
}

function object_get_handler(ptr: number, key: number): IGetValueHandler {
  return {
    getValueType() {
      return addon._object__key_type(ptr, key);
    },
    getInt32() {
      return addon._gobject__get_int(ptr, key);
    },
    getUint() {
      return addon._gobject__get_uint(ptr, key);
    },
    getDouble() {
      return addon._gobject__get_double(ptr, key);
    },
    getBool() {
      return addon._gobject__get_bool(ptr, key);
    },
    getLong() {
      return addon._gobject__get_long(ptr, key);
    },
    getULong() {
      return addon._gobject__get_ulong(ptr, key);
    },
    getFloat() {
      return addon._gobject__get_float(ptr, key);
    },
    getObject() {
      return addon._gobject__get_object(ptr, key);
    },
  };
}

function object_set_handler(ptr: number, graph_ptr: number, name: string): ISetValueHandler {
  const key = hash(name);
  if (addon._ggraph__is_meta(graph_ptr, key) === 0) {
    const name_ptr = addon.allocateUTF8(name);
    addon._ggraph__declare_meta(graph_ptr, key, name_ptr);
    addon._free(name_ptr);
  }

  return {
    isInt32: (value) => {
      addon._gobject__set_int(ptr, key, value);
    },
    isDouble: (value) => {
      addon._gobject__set_double(ptr, key, value);
    },
    isBoolean: (value) => {
      addon._gobject__set_bool(ptr, key, value);
    },
    isLong: (high, low) => {
      addon._object__set_long(ptr, key, high, low);
    },
    isNull: () => {
      addon._gobject__set_null(ptr, key);
    },
    isObject: (obj_ptr) => {
      addon._gobject__set_object(ptr, key, obj_ptr);
    },
    isUndefined: () => {
      // noop
    },
    isNotHandled: (value: any) => {
      console.error(`GObject can't set value '${value}' of type '${typeof value}'`);
    },
  };
}
