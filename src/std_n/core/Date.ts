import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';

export class Date extends GCObject {
  static readonly _type = 'core::Date' as const;

  constructor(
    type: AbiType,
    public localizedEpochS: bigint | number,
    public epochUs: bigint | number,
    public timeZone: number,
  ) {
    super(type);
  }

  static load(r: AbiReader, type: AbiType): Date {
    const localizedEpochS = r.read_i64_number();
    const epochUs = r.read_i64_number();
    const timeZone = r.read_i32();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new type.factory!(type, localizedEpochS, epochUs, timeZone) as Date;
  }

  static fromJSON(o: unknown): Date {
    Object.setPrototypeOf(o, Date.prototype);
    return o as Date;
  }

  override save(w: AbiWriter) {
    w.write_u8(PrimitiveType.object);
    w.write_u32(this.type.offset);
    w.write_i64_number(this.localizedEpochS);
    w.write_i64_number(this.epochUs);
    w.write_i32(this.timeZone);
  }

  override toJSON() {
    return {
      _type: this.type.name,
      iso: '<todo>',
      timeZone: this.timeZone,
    };
  }
}
