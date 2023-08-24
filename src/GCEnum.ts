import type { AbiWriter, AbiType, Value } from './index.js';
import { GCObject } from './GCObject.js';
import { PrimitiveType } from './types.js';

export class GCEnum extends GCObject {
  constructor(
    type: AbiType,
    /** the field offset of the current instance */
    public offset: number,
    /** the field name of the current instance */
    public key: string,
    /** the field value of the current instance */
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

  override toJSON() {
    return {
      _type: this.$type.name,
      field: this.key,
    };
  }
}
