import { AbiType, AbiWriter, PrimitiveType, Value, std_n } from './index.js';

/**
 * A dynamic GreyCat type instance, used when no matching class found in the factory
 */
export class GCObject {
  constructor(readonly $type: AbiType, readonly $values: Value[] | null = null) {}

  getByName(name: string): Value | undefined {
    const offset = this.$type.attrs_by_name.get(name);
    if (!offset) {
      return undefined;
    }
    // we actually want this to throw if the attributes array is not initialized
    // so lets quiet down TypeScript here, and non-null-assert the array access
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return this.$values![offset];
  }

  setByName(name: string, value: Value): void {
    const offset = this.$type.attrs_by_name.get(name);
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
      const off = this.$type.attrs_by_name.get(offsetOrName);
      if (off === undefined) {
        return;
      }
      this.$values[off] = value;
      return;
    }

    this.$values[offsetOrName] = value;
  }

  saveHeader(w: AbiWriter): void {
    w.write_u8(PrimitiveType.object);
    w.write_vu32(this.$type.offset);
  }

  saveContent(w: AbiWriter): void {
    if (this.$type.nullable_nb_bytes > 0) {
      // nullable bitset
      const nullable_bitset = new Uint8Array(this.$type.nullable_nb_bytes);
      let nullable_offset = 0;
      let att;
      for (let offset = 0; offset < this.$type.nullable_nb_bytes; offset++) {
        att = this.$type.attrs[offset];
        if (att.nullable) {
          nullable_bitset[nullable_offset >> 3] |= (this.$values?.[offset] === null ? 0 : 1) << (nullable_offset & 7);
          nullable_offset++;
        }
      }
      w.write_all(nullable_bitset);
    }

    // write object values
    if (this.$values) {
      for (let i = 0; i < this.$values.length; i++) {
        const att = this.$type.attrs[i];
        const value = this.$values[i];
        if (att.nullable && value === null) {
          // skip nullable field that is actually 'null'
          continue;
        }

        switch (att.sbi_type) {
          case PrimitiveType.bool:
            w.write_bool(value as boolean);
            break;
          case PrimitiveType.char:
            w.write_i8((value as string).charCodeAt(0));
            break;
          case PrimitiveType.int:
            w.write_vi64(typeof value === 'bigint' ? value : BigInt(value as number));
            break;
          case PrimitiveType.float:
            w.write_f64(value as number);
            break;
          case PrimitiveType.node:
          case PrimitiveType.node_time:
          case PrimitiveType.node_index:
          case PrimitiveType.node_list:
          case PrimitiveType.node_geo:
          case PrimitiveType.geo:
          case PrimitiveType.time:
          case PrimitiveType.duration:
          case PrimitiveType.tu2d:
          case PrimitiveType.tu3d:
          case PrimitiveType.tu4d:
          case PrimitiveType.tu5d:
          case PrimitiveType.tu6d:
          case PrimitiveType.tu10d:
          case PrimitiveType.tuf2d:
          case PrimitiveType.tuf3d:
          case PrimitiveType.tuf4d:
          case PrimitiveType.enum:
            (value as GCObject).saveContent(w);
            break;
          case PrimitiveType.object:
            if (Array.isArray(value)) {
              new std_n.core.Array(w.abi.types[att.abi_type], value).saveContent(w);
            } else if (typeof value === 'string') {
              w.raw_string(value);
            } else {
              const object = value as GCObject;
              if (att.abi_type !== object.$type.offset) {
                w.write_vu32(object.$type.offset);
              }
              object.saveContent(w);
            }
            break;
          case PrimitiveType.undefined:
            // when the type is undefined, we need the header to be written
            w.serialize(value);
            break;

          case PrimitiveType.null:
            // noop
            break;
        }
        // TODO serialize translate type.c gc_object__save l.1083
        w.serialize(this.$values[i]);
      }
    }
  }

  save(w: AbiWriter): void & NoOverride {
    this.saveHeader(w);
    this.saveContent(w);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toJSON(): any {
    if (!this.$values) {
      return { _type: this.$type.name };
    }

    const json: Record<string, Value> = { _type: this.$type.name };
    for (let i = 0; i < this.$values.length; i++) {
      json[this.$type.attrs[i].name] = this.$values[i];
    }
    return json;
  }
}

// typescript trickery to prevent subclasses from overriding a method
declare const _: unique symbol;
type NoOverride = { [_]: typeof _ };
