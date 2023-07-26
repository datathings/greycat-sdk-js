import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';

export class Iban extends GCObject {
  static readonly _type = 'util::Iban' as const;

  constructor(type: AbiType, public infoOff: number, public data: Uint8Array) {
    super(type);
  }

  override save(w: AbiWriter): void {
    w.write_u8(PrimitiveType.object);
    w.write_vu32(this.type.offset);
    w.write_vu32(this.infoOff);
    w.write_vu32(this.data.length);
    w.write_all(this.data);
  }

  static load(r: AbiReader, type: AbiType): Iban {
    const infoOff = r.read_vu32();
    const len = r.read_vu32();
    const data = r.take(len);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new type.factory!(type, infoOff, data) as Iban;
  }
}
