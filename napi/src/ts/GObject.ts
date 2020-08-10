import { IObject, hash } from './common';
import { addon } from './addon';

/**
 * A Greycat Object instance  
 *
 * *GObject is a Proxy that binds `get` and `set` to their native C equivalent*
 */
export class GObject<T = any> implements IObject<T> {
  [index: number]: T | undefined;
  [prop: string]: any;

  constructor() {
    const proxy: GObject<T> = new Proxy(this, {
      get: (target, prop) => {
        const name = prop.toString();
        const offset = parseInt(name, 10);
        if (isNaN(offset)) {
          if (name === 'toJSON' || name === 'toString') {
            if (typeof target[name] === 'function') {
              return target[name].bind(proxy);
            } else {
              return target[name];
            }
          }
          return addon.object__get_key(proxy, hash(name));
        } else {
          return addon.object__get_element(proxy, offset);
        }
      },
      set: (_, prop, value) => {
        const name = prop.toString();
        const offset = parseInt(name, 10);
        if (isNaN(offset)) {
          addon.object__set_key(proxy, name, value);
        } else {
          throw new Error('Writing object properties by offset is not implemented yet');
        }
        return true;
      },
    });

    return proxy;
  }

  toJSON(): any {
    return JSON.parse(this.toString());
  }

  toString() {
    return addon.object__to_json(this);
  }
}
