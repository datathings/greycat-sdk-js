import type { AbiReader, AbiWriter, AbiType, GreyCat, std } from '../../exports.js';
import { GCObject, PrimitiveType, $ } from '../../exports.js';

export class nodeList extends GCObject {
  static readonly _type = 'core::nodeList' as const;

  constructor(type: AbiType, public value: bigint) {
    super(type);
  }

  static create(value: bigint, g: GreyCat = $.default): std.core.nodeList {
    const ty = g.abi.types[g.abi.core_node_list_offset];
    return new ty.factory(ty, value) as std.core.nodeList;
  }

  static fromRef(ref: string, g: GreyCat = $.default): std.core.nodeList {
    return nodeList.create(BigInt(`0x${ref}`), g);
  }

  static load(r: AbiReader, ty: AbiType): std.core.nodeList {
    const value = r.read_vu64_bigint();
    return new ty.factory(ty, value) as std.core.nodeList;
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
