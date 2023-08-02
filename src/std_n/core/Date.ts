import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { GCObject } from '../../GCObject.js';
import { core } from '../../std/index.js';

// date.c: gc_core_Date__load (l.161)
// time.c: gc_gmtime_r_safe ()

export class Date extends GCObject {
  static readonly _type = 'core::Date' as const;

  constructor(
    type: AbiType,
    public localizedEpochS: bigint | number,
    public epochUs: bigint | number,
    public timeZone: core.TimeZone,
  ) {
    super(type);
  }

  static load(r: AbiReader, type: AbiType): Date {
    const localizedEpochS = r.read_vi64();
    const epochUs = r.read_vi64();
    const tzFieldOff = r.read_vu32();
    const tzType = r.abi.types[r.abi.core_timezone_offset];
    // safety: if core.TimeZone does not exist, you have bigger problems
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const tz = tzType.enum_values![tzFieldOff];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new type.factory!(type, localizedEpochS, epochUs, tz) as Date;
  }

  static fromJSON(o: unknown): Date {
    Object.setPrototypeOf(o, Date.prototype);
    return o as Date;
  }

  override saveContent(w: AbiWriter) {
    w.write_vi64(BigInt(this.localizedEpochS));
    w.write_vi64(BigInt(this.epochUs));
    w.write_vu32(this.timeZone.offset);
  }

  /**
   * Returns a JavaScript Date
   */
  toDate(): globalThis.Date {
    const timestamp = typeof this.epochUs === 'bigint' ? Number(this.epochUs / 1_000n) : Math.round(this.epochUs / 1000);
    return new globalThis.Date(timestamp);
  }

  override toJSON() {
    return {
      _type: this.$type.name,
      iso: '<todo>',
      timeZone: this.timeZone,
    };
  }
}
