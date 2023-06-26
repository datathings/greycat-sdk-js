import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';

export class duration extends GCObject {
  static readonly _type = 'core::duration' as const;

  constructor(type: AbiType, public value: bigint) {
    super(type);
  }

  static load(r: AbiReader, ty: AbiType): duration {
    const value = r.read_i64();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new ty.factory!(ty, value) as duration;
  }

  static fromJSON(o: unknown): duration {
    Object.setPrototypeOf(o, duration.prototype);
    return o as duration;
  }

  override save(w: AbiWriter) {
    w.write_u8(PrimitiveType.duration);
    w.write_i64(this.value);
  }

  get s(): number {
    return Number(this.value / 1_000_000n);
  }

  get us(): number {
    return Number(this.value % 1_000_000n);
  }

  override toJSON() {
    return {
      _type: this.type.name,
      s: this.s,
      us: this.us,
    };
  }
}
