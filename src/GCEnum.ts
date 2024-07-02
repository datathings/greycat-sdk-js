import type { AbiWriter, AbiType, Value } from './index.js';
import { GCObject } from './GCObject.js';
import { PrimitiveType } from './types.js';

export class GCEnum extends GCObject {
  constructor(
    type: AbiType,
    /** offset of the field */
    public offset: number,
    /** name of the field */
    public key: string,
    /** optional value of the field */
    public value: Value,
  ) {
    super(type);
  }

  override saveHeader(w: AbiWriter): void {
    w.write_u8(PrimitiveType.enum);
    w.write_vu32(this.$type.offset);
  }

  override saveContent(w: AbiWriter): void {
    w.write_vu32(this.offset);
  }

  override toString(): string {
    return `${this.$type.name}::${this.key}`;
  }

  override toJSON() {
    return {
      _type: this.$type.name,
      field: this.key,
    };
  }
}
