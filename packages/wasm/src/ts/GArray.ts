import { IArray } from './common';
import { addon } from '.';
import { js_to_greycat, ISetValueHandler, greycat_to_js, IGetValueHandler } from './types';
import { GString } from './GString';

export class GArray<T = any> implements IArray<T> {
  [index: number]: T | undefined;
  [prop: string]: any;

  constructor(ptr: number) {
    Object.defineProperty(this, '$$_ptr', { enumerable: false, value: ptr });
    return new Proxy(this, {
      get(target, prop) {
        const name = prop.toString();
        const offset = parseInt(name, 10);
        if (isNaN(offset)) {
          if (name === '$$_ptr') {
            return ptr;
          }
          if (typeof target[name] === 'function') {
            return target[name].bind(target);
          } else {
            return target[name];
          }
        }
        // access by offset
        return greycat_to_js(array_get_handler(ptr, offset));
      },

      set(target, prop, value) {
        const name = prop.toString();
        const offset = parseInt(name, 10);
        if (isNaN(offset)) {
          target[name] = value;
        } else {
          js_to_greycat(value, addon._array__graph(ptr), array_set_handler(ptr, offset));
        }
        return true;
      },
    });
  }

  resize(newSize: number): void {
    addon._garray__resize(this.$$_ptr, newSize);
  }

  add(elem: T) {
    js_to_greycat(elem, addon._array__graph(this.$$_ptr), array_add_handler(this.$$_ptr));
  }

  size(): number {
    return addon._garray__size(this.$$_ptr);
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

  unmark() {
    addon._gobject__un_mark(this.$$_ptr);
    delete addon.__pointers[this.$$_ptr];
  }
}

function array_set_handler(ptr: number, offset: number): ISetValueHandler {
  return {
    isInt32: (value) => {
      addon._garray__set_int(ptr, offset, value);
    },
    isDouble: (value) => {
      addon._garray__set_double(ptr, offset, value);
    },
    isBoolean: (value) => {
      addon._garray__set_bool(ptr, offset, value);
    },
    isLong: (high, low) => {
      addon._array__set_long(ptr, offset, high, low);
    },
    isNull: () => {
      addon._garray__set_null(ptr, offset);
    },
    isObject: (obj_ptr) => {
      addon._garray__set_object(ptr, offset, obj_ptr);
    },
    isUndefined: () => {
      // noop
    },
    isNotHandled: (value: any) => {
      console.error(`GArray can't set value '${value}' of type '${typeof value}'`);
    },
  };
}

function array_get_handler(ptr: number, offset: number): IGetValueHandler {
  return {
    getValueType() {
      return addon._array__offset_type(ptr, offset);
    },
    getInt32() {
      return addon._garray__get_int(ptr, offset);
    },
    getUint() {
      return addon._garray__get_uint(ptr, offset);
    },
    getDouble() {
      return addon._garray__get_double(ptr, offset);
    },
    getBool() {
      return addon._garray__get_bool(ptr, offset);
    },
    getLong() {
      return addon._garray__get_long(ptr, offset);
    },
    getULong() {
      return addon._garray__get_ulong(ptr, offset);
    },
    getFloat() {
      return addon._garray__get_float(ptr, offset);
    },
    getObject() {
      return addon._garray__get_object(ptr, offset);
    },
  };
}

function array_add_handler(ptr: number): ISetValueHandler {
  return {
    isInt32: (value) => {
      addon._garray__add_int(ptr, value);
    },
    isDouble: (value) => {
      addon._garray__add_double(ptr, value);
    },
    isBoolean: (value) => {
      addon._garray__add_bool(ptr, value);
    },
    isLong: (high, low) => {
      addon._array__add_long(ptr, high, low);
    },
    isNull: () => {
      addon._garray__add_null(ptr);
    },
    isObject: (obj_ptr) => {
      addon._garray__add_object(ptr, obj_ptr);
    },
    isUndefined: () => {
      // noop
    },
    isNotHandled: (value: any) => {
      console.error(`GArray can't add value '${value}' of type '${typeof value}'`);
    },
  };
}