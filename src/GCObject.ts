import { AbiType } from './abi.js';
import { AbiWriter } from './io.js';
import { PrimitiveType, Value } from './types.js';

/**
 * A dynamic GreyCat type instance, used when no matching class found in the factory
 */
export class GCObject {
  constructor(readonly type: AbiType, readonly attributes: Value[] | null = null) {}

  getByName(name: string): Value | undefined {
    const offset = this.type.attrs_by_name.get(name);
    if (!offset) {
      return undefined;
    }
    // we actually want this to throw if the attributes array is not initialized
    // so lets quiet down TypeScript here, and non-null-assert the array access
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.attributes![offset];
  }

  setByName(name: string, value: Value): void {
    const offset = this.type.attrs_by_name.get(name);
    if (offset === undefined) {
      return;
    }
    // we actually want this to throw if the attributes array is not initialized
    // so lets quiet down TypeScript here, and non-null-assert the array access
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    this.attributes![offset] = value;
  }

  get(offset: number): Value | undefined {
    // we actually want this to throw if the attributes array is not initialized
    // so lets quiet down TypeScript here, and non-null-assert the array access
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.attributes![offset];
  }

  set(offsetOrName: number | string, value: Value): void {
    if (!this.attributes) {
      return;
    }

    if (typeof offsetOrName === 'string') {
      const off = this.type.attrs_by_name.get(offsetOrName);
      if (off === undefined) {
        return;
      }
      this.attributes[off] = value;
      return;
    }

    this.attributes[offsetOrName] = value;
  }

  save(w: AbiWriter): void {
    w.write_u8(PrimitiveType.object);
    w.write_u32(this.type.offset);
    if (this.attributes) {
      for (let i = 0; i < this.attributes.length; i++) {
        w.serialize(this.attributes[i]);
      }
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toJSON(): any {
    if (!this.attributes) {
      return { _type: this.type.name };
    }

    const json: Record<string, Value> = { _type: this.type.name };
    for (let i = 0; i < this.attributes.length; i++) {
      if (typeof this.attributes[i] === 'bigint') {
        if ((this.attributes[i] as bigint) > Number.MAX_SAFE_INTEGER) {
          json[this.type.attrs[i].name] = `${this.attributes[i] as bigint}`;
        } else {
          json[this.type.attrs[i].name] = Number(this.attributes[i]);
        }
      } else {
        json[this.type.attrs[i].name] = this.attributes[i];
      }
    }
    return json;
  }
}
