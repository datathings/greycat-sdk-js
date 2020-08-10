import { IArray } from './common';
import { addon } from './addon';

/**
 * A Greycat Array instance  
 *
 * *GArray is a Proxy that binds `get` and `set` to their native C equivalent*
 */
export class GArray<T = any> implements IArray<T> {
  [index: number]: T | undefined;
  [prop: string]: any;

  constructor() {
    const proxy: GArray<T> = new Proxy(this, {
      get: (target, prop) => {
        const name = prop.toString();
        const offset = parseInt(name, 10);
        if (isNaN(offset)) {
          if (typeof target[name] === 'function') {
            return target[name].bind(proxy);
          } else {
            return target[name];
          }
        }
        // access by offset
        return addon.array__get_element(proxy, offset);
      },
      set: (target, prop, value) => {
        const name = prop.toString();
        const offset = parseInt(name, 10);
        if (isNaN(offset)) {
          target[name] = value;
        } else {
          addon.array__set_element(proxy, offset, value);
        }
        return true;
      },
    });

    return proxy;
  }

  add(elem: T) {
    addon.array__add_element(this, elem);
  }

  resize(newSize: number) {
    addon.array__resize(this, newSize);
  }

  size(): number {
    return addon.array__size(this);
  }

  unmark() {
    addon.object__un_mark(this);
  }

  toJSON(): any {
    return JSON.parse(this.toString());
  }

  toString() {
    return addon.object__to_json(this);
  }
}
