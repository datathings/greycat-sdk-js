import type { AbiReader, AbiWriter, AbiType, util } from '../../internal.js';
import { GCObject } from '../../internal.js';

export class Iban extends GCObject {
  static readonly _type = 'util::Iban' as const;

  constructor(type: AbiType, public infoOff: number, public data: Uint8Array) {
    super(type);
  }

  override saveContent(w: AbiWriter): void {
    w.write_vu32(this.infoOff);
    w.write_vu32(this.data.length);
    w.write_all(this.data);
  }

  static load(r: AbiReader, type: AbiType): util.Iban {
    const infoOff = r.read_vu32();
    const len = r.read_vu32();
    const data = r.take(len);
    return new type.factory(type, infoOff, data) as util.Iban;
  }
}
