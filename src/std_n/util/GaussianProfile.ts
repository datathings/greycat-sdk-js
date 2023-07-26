import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';

export class GaussianProfile extends GCObject {
  static readonly _type = 'util::GaussianProfile' as const;

  constructor(type: AbiType, public size: number, public data: Uint8Array) {
    super(type);
  }

  override save(w: AbiWriter): void {
    w.write_u8(PrimitiveType.object);
    w.write_vu32(this.type.offset);
    w.write_u32(this.size);
    w.write_u32(this.data.byteLength);
    w.write_all(this.data);
  }

  static load(r: AbiReader, type: AbiType): GaussianProfile {
    const size = r.read_u32();
    const bin_len = r.read_u32();
    const data = r.take(bin_len);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new type.factory!(type, size, data) as GaussianProfile;
  }
}
