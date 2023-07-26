import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { GCObject } from '../../GCObject.js';
import { PrimitiveType } from '../../types.js';

export class ByteArray extends GCObject {
  static readonly _type = 'util::ByteArray' as const;

  constructor(type: AbiType, public data: Uint8Array) {
    super(type);
  }

  override save(w: AbiWriter): void {
    w.write_u8(PrimitiveType.object);
    w.write_u32(this.type.offset);
    w.write_vu32(this.data.byteLength);
    w.write_all(this.data);
  }

  static load(r: AbiReader, type: AbiType): ByteArray {
    const len = r.read_vu32();
    const data = r.take(len);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new type.factory!(type, data) as ByteArray;
  }
}
