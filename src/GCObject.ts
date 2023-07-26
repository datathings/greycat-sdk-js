import { AbiType } from './index.js';
import { AbiWriter } from './io.js';
import { PrimitiveType, Value } from './types.js';

/**
 * A dynamic GreyCat type instance, used when no matching class found in the factory
 */
export class GCObject {
  constructor(readonly type: AbiType, readonly $values: Value[] | null = null) {}

  getByName(name: string): Value | undefined {
    const offset = this.type.attrs_by_name.get(name);
    if (!offset) {
      return undefined;
    }
    // we actually want this to throw if the attributes array is not initialized
    // so lets quiet down TypeScript here, and non-null-assert the array access
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.$values![offset];
  }

  setByName(name: string, value: Value): void {
    const offset = this.type.attrs_by_name.get(name);
    if (offset === undefined) {
      return;
    }
    // we actually want this to throw if the attributes array is not initialized
    // so lets quiet down TypeScript here, and non-null-assert the array access
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.$values![offset] = value;
  }

  get(offset: number): Value | undefined {
    // we actually want this to throw if the attributes array is not initialized
    // so lets quiet down TypeScript here, and non-null-assert the array access
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.$values![offset];
  }

  set(offsetOrName: number | string, value: Value): void {
    if (!this.$values) {
      return;
    }

    if (typeof offsetOrName === 'string') {
      const off = this.type.attrs_by_name.get(offsetOrName);
      if (off === undefined) {
        return;
      }
      this.$values[off] = value;
      return;
    }

    this.$values[offsetOrName] = value;
  }

  save(w: AbiWriter): void {
    w.write_u8(PrimitiveType.object);
    w.write_vu32(this.type.offset);
    if (this.$values) {
      for (let i = 0; i < this.$values.length; i++) {
        w.serialize(this.$values[i]);
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toJSON(): any {
    if (!this.$values) {
      return { _type: this.type.name };
    }

    const json: Record<string, Value> = { _type: this.type.name };
    for (let i = 0; i < this.$values.length; i++) {
      json[this.type.attrs[i].name] = this.$values[i];
    }
    return json;
  }
}
