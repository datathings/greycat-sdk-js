import type { core, AbiType, AbiReader, AbiWriter } from '../../index.js';
import { GCObject, PrimitiveType } from '../../index.js';

export class nodeIndex extends GCObject {
  static readonly _type = 'core::nodeIndex' as const;

  constructor(type: AbiType, public value: bigint) {
    super(type);
  }

  static load(r: AbiReader, ty: AbiType): core.nodeIndex {
    const value = r.read_vu64_bigint();
    return new ty.factory(ty, value) as core.nodeIndex;
  }

  override saveHeader(w: AbiWriter): void {
    w.write_u8(PrimitiveType.node_index);
  }

  override saveContent(w: AbiWriter) {
    w.write_vu64(this.value);
  }

  /**
   * Hexedecimal representation of the nodeIndex's reference
   */
  get ref(): string {
    return this.value.toString(16);
  }

  override toString() {
    return `nodeIndex:${this.ref}`;
  }

  override toJSON() {
    return {
      _type: this.$type.name,
      ref: this.ref,
    };
  }
}
