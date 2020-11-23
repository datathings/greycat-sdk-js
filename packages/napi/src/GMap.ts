import { IMap } from '@greycat/common';
import { addon } from './addon';

export class GMap implements IMap {

  get(key: string | number): any {
    return addon.map__get(this, key);
  }

  // mget(name: string | number, it: (value: any) => void): void {
  //   addon.map__mget(this, name, it);
  // }

  set(key: string | number, value: any): void {
    addon.map__set(this, key, value);
  }

  put(key: string | number, value: any): void {
    addon.map__put(this, key, value);
  }

  remove(key: string | number): boolean {
    return addon.map__remove(this, key);
  }

  size(): number {
    return addon.map__size(this);
  }

  foreach(it: (key: string | number, value: any) => void): void {
    addon.map__foreach(this, it);
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
