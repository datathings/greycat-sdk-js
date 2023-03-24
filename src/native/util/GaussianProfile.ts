import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';

export class GaussianProfile extends GCObject {
  static readonly _type = 'util.GaussianProfile' as const;

  constructor(type: AbiType, public size: number, public data: Uint8Array) {
    super(type);
  }

  override save(w: AbiWriter): void {
    w.write_i8(PrimitiveType.object);
    w.write_i32(this.type.offset);
    w.write_i32(this.size);
    w.write_i32(this.data.length);
    w.write_all(this.data);
  }

  static load(r: AbiReader, type: AbiType): GaussianProfile {
    const size = r.read_i32();
    const data = r.take(size);
    return new GaussianProfile(type, size, data);
  }
}
