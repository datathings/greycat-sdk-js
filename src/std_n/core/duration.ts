import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';

export class duration extends GCObject {
  static readonly _type = 'core::duration' as const;

  constructor(type: AbiType, public value: bigint | number) {
    super(type);
  }

  static load(r: AbiReader, ty: AbiType): duration {
    const value = r.read_i64_number();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new ty.factory!(ty, value) as duration;
  }

  static fromJSON(o: unknown): duration {
    Object.setPrototypeOf(o, duration.prototype);
    return o as duration;
  }

  override save(w: AbiWriter) {
    w.write_u8(PrimitiveType.duration);
    w.write_i64_number(this.value);
  }

  get s(): number {
    if (typeof this.value === 'bigint') {
      return Number(this.value / 1_000_000n);
    }
    return this.value / 1_000_000;
  }

  get us(): number {
    if (typeof this.value === 'bigint') {
      return Number(this.value % 1_000_000n);
    }
    return this.value % 1_000_000;
  }

  override toJSON() {
    return {
      _type: this.type.name,
      s: this.s,
      us: this.us,
    };
  }
}
