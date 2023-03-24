import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';

export class Buffer extends GCObject {
  static readonly _type = 'util.Buffer' as const;

  constructor(type: AbiType, public data: Uint8Array) {
    super(type);
  }

  override save(w: AbiWriter): void {
    w.write_u8(PrimitiveType.object);
    w.write_u32(this.type.offset);
    w.write_u32(this.data.length);
    w.write_all(this.data);
  }

  static load(r: AbiReader, type: AbiType): Buffer {
    const len = r.read_u32();
    const data = r.take(len);
    return new Buffer(type, data);
  }
}
