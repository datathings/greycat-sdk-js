import { GCObject } from '../../GCObject.js';
import type { core, AbiType, AbiReader, AbiWriter } from '../../index.js';

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
    return new type.factory(type, localizedEpochS, epochUs, tz) as core.Date;
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
    const timestamp = typeof this.epochUs === 'bigint' ? Math.round(Number(this.epochUs / 1_000n)) : Math.round(this.epochUs / 1000);
    return new globalThis.Date(timestamp);
  }

  // TODO use the actual C code used by GreyCat internally rather than forcing UTC ISO8601-ish
  // see date.c: gc_core_Date__load (l.161)
  // see time.c: gc_gmtime_r_safe ()
  /**
   * Returns an ISO8601 in UTC of the Date epoch in milliseconds.
   *
   * *This is not strictly equivalent to what GreyCat does when stringifying a Date*
   */
  get iso(): string {
    // this is for Node.js compat (no `navigator` in Node.js)
    const locales = globalThis.navigator ? globalThis.navigator.language : undefined;
    return new Intl.DateTimeFormat(locales, { timeZone: this.timeZone.value as string }).format(this.toDate());
  }

  override toString(): string {
    return this.iso;
  }

  override toJSON() {
    let timestamp: number;
    if (typeof this.epochUs === 'bigint') {
      timestamp = Math.round(Number(this.epochUs / 1000n));
    } else {
      timestamp = Math.round(this.epochUs / 1000);
    }

    return {
      _type: Date._type,
      iso: new globalThis.Date(timestamp).toISOString(),
      timeZone: this.timeZone,
    };
  }
}
