import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';

export class String extends GCObject {
  static readonly _type = 'core::String' as const;

  constructor(type: AbiType, public value: string) {
    super(type);
  }

  override save(w: AbiWriter): void {
    w.write_u8(PrimitiveType.object);
    w.write_u32(w.abi.core_string_offset);
    w.write_string(this.value);
  }

  static load(r: AbiReader): string {
    const len = r.read_u32();
    return r.read_string(len);
  }
}
