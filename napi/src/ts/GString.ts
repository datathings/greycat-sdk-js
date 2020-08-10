import { IString } from './common';
import { addon } from './addon';

export class GString implements IString {

  prepare(needed: number): void {
    addon.string__prepare(this, needed);
  }

  reset() {
    addon.string__reset(this);
  }

  close() {
    addon.string__close(this);
  }

  size(): number {
    return addon.string__size(this);
  }

  unmark() {
    addon.object__un_mark(this);
  }

  get value(): string {
    return addon.string__value(this);
  }
}
