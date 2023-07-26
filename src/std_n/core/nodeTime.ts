import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';

export class nodeTime extends GCObject {
  static readonly _type = 'core::nodeTime' as const;

  constructor(type: AbiType, public value: bigint) {
    super(type);
  }

  static load(r: AbiReader, ty: AbiType): nodeTime {
    const value = r.read_u64();
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new ty.factory!(ty, value) as nodeTime;
  }

  static fromJSON(o: unknown): nodeTime {
    Object.setPrototypeOf(o, nodeTime.prototype);
    return o as nodeTime;
  }

  override saveHeader(w: AbiWriter): void {
    w.write_u8(PrimitiveType.node_time);
  }

  override saveContent(w: AbiWriter) {
    w.write_u64(this.value);
  }

  /**
   * Hexedecimal representation of the nodeTime's reference
   */
  get ref(): string {
    return this.value.toString(16).padStart(16, '0');
  }

  override toJSON() {
    return {
      _type: this.$type.name,
      ref: this.ref,
    };
  }
}
