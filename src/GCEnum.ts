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
    super(type);
    Object.defineProperty(this, 'offset', { value: offset, enumerable: false });
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
