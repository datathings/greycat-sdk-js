import type { AbiReader, AbiWriter, AbiType, util } from '../../index.js';
import { GCObject } from '../../GCObject.js';

export class GaussianProfile extends GCObject {
  static readonly _type = 'util::GaussianProfile' as const;

  constructor(type: AbiType, public size: number, public data: Uint8Array) {
    super(type);
  }

  override saveContent(w: AbiWriter): void {
    w.write_u32(this.size);
    w.write_u32(this.data.byteLength);
    w.write_all(this.data);
  }

  static load(r: AbiReader, type: AbiType): util.GaussianProfile {
    const size = r.read_u32();
    const bin_len = r.read_u32();
    const data = r.take(bin_len);
    return new type.factory(type, size, data) as util.GaussianProfile;
  }
}
