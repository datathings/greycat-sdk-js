import type { AbiReader, AbiWriter, AbiType, util } from '../../index.js';
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

  static load(r: AbiReader, type: AbiType): util.Buffer {
    const len = r.read_vu32();
    const data = r.take(len);
    return new type.factory(type, data) as util.Buffer;
  }
}
