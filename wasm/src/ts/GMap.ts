import { IMap, hash } from './common';
import { addon } from '.';
import { js_to_slot } from './types';
import { GString } from './GString';

let iterators = 0;

export class GMap implements IMap {

  constructor(readonly ptr: number) {}

  get(key: string | number): any {
    const graph_ptr = addon._map__graph(this.ptr);
    const key_slot = js_to_slot(key, graph_ptr);
    if (!key_slot) {
      throw new Error(`Unhandled key type '${typeof key}'`);
    }
    // const slot_n_type = addon._slotntype__create();
    // addon._map__get(this.ptr, key_slot.ptr, key_slot.type, slot_n_type);
    // const vslot = addon._slotntype__value(slot_n_type);
    // const tslot = addon._slotntype__value(slot_n_type);
    // return slot_to_js(vslot, tslot);
  }

  set(key: string | number, value: any): void {
    const graph_ptr = addon._map__graph(this.ptr);
    const key_slot = js_to_slot(key, graph_ptr);
    if (!key_slot) {
      throw new Error(`Unhandled key type '${typeof key}'`);
    }
    const value_slot = js_to_slot(value, graph_ptr);
    if (!value_slot) {
      throw new Error(`Unhandled value type '${typeof key}'`);
    }
    addon._map__set(this.ptr, key_slot.ptr, key_slot.type, value_slot.ptr, value_slot.type);
  }

  put(key: string | number, value: any): void {
    const graph_ptr = addon._map__graph(this.ptr);
    const key_slot = js_to_slot(key, graph_ptr);
    if (!key_slot) {
      throw new Error(`Unhandled key type '${typeof key}'`);
    }
    const value_slot = js_to_slot(value, graph_ptr);
    if (!value_slot) {
      throw new Error(`Unhandled value type '${typeof key}'`);
    }
    addon._map__put(this.ptr, key_slot.ptr, key_slot.type, value_slot.ptr, value_slot.type);
  }

  remove(key: string | number): boolean {
    const graph_ptr = addon._map__graph(this.ptr);
    const key_slot = js_to_slot(key, graph_ptr);
    if (!key_slot) {
      throw new Error(`Unhandled key type '${typeof key}'`);
    }
    return addon._map__remove(this.ptr, key_slot.ptr, key_slot.type);
  }

  size(): number {
    return addon._map__size(this.ptr);
  }

  foreach(_it: (key: string | number, value: any) => void): void {
    const iterator_ptr = hash(`iterator_${iterators++}`);
    addon.__pointers[iterator_ptr] = it;
    addon._map__foreach(this.ptr, iterator_ptr);
  }

  unmark() {
    addon._gobject__un_mark(this.ptr);
  }

  toJSON() {
    return JSON.parse(this.toString());
  }

  toString() {
    const str = new GString(addon._object__to_json(this.ptr));
    const json = str.value;
    str.unmark();
    return json;
  }
}
