import { GCObject, AbiType } from './index.js';
import { AbiWriter } from './io.js';
import { PrimitiveType, Value } from './types.js';

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
    super(type, [offset, key, value]);
  }

  override save(w: AbiWriter): void {
    w.write_u8(PrimitiveType.enum);
    w.write_vu32(this.type.offset);
    w.write_vu32(this.offset);
  }

  override toJSON() {
    return {
      _type: this.type.name,
      field: this.key,
    };
  }
}
