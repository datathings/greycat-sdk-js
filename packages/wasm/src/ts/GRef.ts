import { IRef, addon } from '.';
import { GString } from './GString';

export class GRef implements IRef {

  constructor(readonly ptr: number) {}

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