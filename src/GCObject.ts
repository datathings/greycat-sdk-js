import type { AbiType, AbiWriter, Value } from './index.js';
import { PrimitiveType } from './types.js';

/**
 * A dynamic GreyCat type instance, used when no matching class found in the factory
 */
export class GCObject {
  readonly $attrs?: Value[];

  constructor(readonly $type: AbiType, ...attributes: Value[]) {
    Object.defineProperty(this, '$attrs', { value: attributes, enumerable: false });
    Object.defineProperties(this, $type.properties);
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
      for (let offset = 0; offset < this.$type.attrs.length; offset++) {
        att = this.$type.attrs[offset];
        if (att.nullable) {
          let nullish = true;
          if (this.$attrs) {
            nullish = this.$attrs[offset] === null || this.$attrs[offset] === undefined;
          }
          if (nullish) {
            gc_object__set_null(nullable_bitset, nullable_offset);
          } else {
            gc_object__set_not_null(nullable_bitset, nullable_offset);
          }
          nullable_offset++;
        }
      }
      w.write_all(nullable_bitset);
    }

    // write object values
    if (this.$attrs) {
      for (let i = 0; i < this.$attrs.length; i++) {
        const att = this.$type.attrs[i];
        const value = this.$attrs[i];
        if (att.nullable && (value === null || value === undefined)) {
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
          case PrimitiveType.object:
            if (Array.isArray(value)) {
              w.write_vu32(value.length);
              for (let i = 0; i < value.length; i++) {
                w.serialize(value[i]);
              }
            } else if (value instanceof Map) {
              w.write_vu32(value.size);
              value.forEach((value, key) => {
                w.serialize(key);
                w.serialize(value);
              });
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

          default:
            (value as GCObject).saveContent(w);
            break;
        }
      }
    }
  }

  save(w: AbiWriter): void & NoOverride {
    this.saveHeader(w);
    this.saveContent(w);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  toJSON(): any {
    if (!this.$attrs) {
      return { _type: this.$type.name };
    }

    const json: Record<string, Value> = { _type: this.$type.name };
    for (let i = 0; i < this.$attrs.length; i++) {
      json[this.$type.attrs[i].name] = this.$attrs[i];
    }
    return json;
  }

  toString(): string {
    return JSON.stringify(this);
  }
}

// typescript trickery to prevent subclasses from overriding a method
declare const _: unique symbol;
type NoOverride = { [_]: typeof _ };

// The following:
//  - gc_object_bitset_block_size
//  - gc_object__set_not_null
//  - gc_object__set_null
//  - gc_object__is_not_null
// are translated from the C defined macros at in greycat/core machine.h
const gc_object_bitset_block_size = 8; // Number of bits in each element of the bitset (8 bits for Uint8Array)

export function gc_object__set_not_null(bitset: Uint8Array, offset: number): void {
  // Find the index of the Uint8Array element containing the bit we want to set to 1
  const bitsetIndex: number = offset >> 3; // Equivalent to integer division by 8

  // Find the position of the bit within the Uint8Array element
  const bitPosition: number = offset & (gc_object_bitset_block_size - 1); // Equivalent to offset % 8

  // Set the bit at the specified position to 1 using bitwise OR with 1 at that position
  bitset[bitsetIndex] |= 1 << bitPosition;
}

export function gc_object__set_null(bitset: Uint8Array, offset: number): void {
  // Find the index of the Uint8Array element containing the bit we want to set to 0
  const bitsetIndex: number = offset >> 3; // Equivalent to integer division by 8

  // Find the position of the bit within the Uint8Array element
  const bitPosition: number = offset & (gc_object_bitset_block_size - 1); // Equivalent to offset % 8

  // Clear the bit at the specified position to 0 using bitwise AND with the complement of 1 at that position
  bitset[bitsetIndex] &= ~(1 << bitPosition);
}

export function gc_object__is_not_null(bitset: Uint8Array, offset: number): boolean {
  // Find the index of the Uint8Array element containing the bit we want to check
  const bitsetIndex: number = offset >> 3; // Equivalent to integer division by 8

  // Find the position of the bit within the Uint8Array element
  const bitPosition: number = offset & (gc_object_bitset_block_size - 1); // Equivalent to offset % 8

  // Check if the bit is set (equal to 1)
  const isBitSet: boolean = (bitset[bitsetIndex] >> bitPosition) & 1 ? true : false;

  return isBitSet;
}
