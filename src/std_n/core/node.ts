import type { AbiType, AbiReader, AbiWriter, GreyCat, std } from '../../exports.js';
import { GCObject, PrimitiveType, $ } from '../../exports.js';

export class node extends GCObject {
  static readonly _type = 'core::node' as const;

  constructor(type: AbiType, public value: bigint) {
    super(type);
  }

  static create(value: bigint, g: GreyCat = $.default): std.core.node {
    const ty = g.abi.types[g.abi.core_node_offset];
    return new ty.factory(ty, value) as std.core.node;
  }

  static fromRef(ref: string, g: GreyCat = $.default): std.core.node {
    return node.create(BigInt(`0x${ref}`), g);
  }

  static load(r: AbiReader, ty: AbiType): std.core.node {
    const value = r.read_vu64_bigint();
    return new ty.factory(ty, value) as std.core.node;
  }

  override saveHeader(w: AbiWriter): void {
    w.write_u8(PrimitiveType.node);
  }

  override saveContent(w: AbiWriter) {
    w.write_vu64(this.value);
  }

  /**
   * Hexedecimal representation of the node's reference
   */
  get ref(): string {
    return this.value.toString(16);
  }

  override toString() {
    return `node:${this.ref}`;
  }

  override toJSON() {
    return {
      _type: this.$type.name,
      ref: this.ref,
    };
  }
}
