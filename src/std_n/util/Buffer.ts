import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { GCObject } from '../../GCObject.js';

export class Buffer extends GCObject {
  static readonly _type = 'util::Buffer' as const;

  constructor(type: AbiType, public data: Uint8Array) {
    super(type);
  }

  override saveContent(w: AbiWriter): void {
    w.write_vu32(this.data.length);
    w.write_all(this.data);
  }

  static load(r: AbiReader, type: AbiType): Buffer {
    const len = r.read_vu32();
    const data = r.take(len);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new type.factory!(type, data) as Buffer;
  }
}
