import { addon, IString } from '.';

export class GString implements IString {

  constructor(readonly ptr: number) {}

  get value(): string {
    return addon.UTF8ToString(addon._gstring__get(this.ptr), addon._gstring__size(this.ptr));
  }

  set value(value: string) {
    this.reset();
    const str_ptr = addon.allocateUTF8(value);
    addon._gstring__add_raw_string(this.ptr, str_ptr);
    this.close();
    addon._free(str_ptr);
  }

  prepare(needed: number): void {
    addon._gstring__prepare(this.ptr, needed);
  }

  reset(): void {
    addon._gstring__reset(this.ptr);
  }

  close(): void {
    addon._gstring__close(this.ptr);
  }

  size(): number {
    return addon._gstring__size(this.ptr);
  }

  unmark() {
    addon._gobject__un_mark(this.ptr);
  }

  toJSON() {
    return this.toString();
  }

  toString() {
    return this.value;
  }
}