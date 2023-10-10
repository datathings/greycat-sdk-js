import type { AbiReader, AbiWriter, AbiType, core } from '../../index.js';
import { GCObject, PrimitiveType } from '../../index.js';

export class nodeList extends GCObject {
  static readonly _type = 'core::nodeList' as const;

  constructor(type: AbiType, public value: bigint) {
    super(type);
  }

  static load(r: AbiReader, ty: AbiType): core.nodeList {
    const value = r.read_vu64_bigint();
    return new ty.factory(ty, value) as core.nodeList;
  }

  override saveHeader(w: AbiWriter): void {
    w.write_u8(PrimitiveType.node_list);
  }

  override saveContent(w: AbiWriter) {
    w.write_vu64(this.value);
  }

  /**
   * Hexedecimal representation of the nodeList's reference
   */
  get ref(): string {
    return this.value.toString(16);
  }

  override toString() {
    return `nodeList:${this.ref}`;
  }

  override toJSON() {
    return {
      _type: this.$type.name,
      ref: this.ref,
    };
  }
}
