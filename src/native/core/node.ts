import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';

export class node extends GCObject {
  static readonly _type = 'core.node' as const;

  constructor(type: AbiType, public value: bigint) {
    super(type);
  }

  static load(r: AbiReader): node {
    const value = r.read_u64();
    return new node(r.abi.types[r.abi.core_node_offset], value);
  }

  static fromJSON(o: unknown): node {
    Object.setPrototypeOf(o, node.prototype);
    return o as node;
  }

  override save(w: AbiWriter) {
    w.write_u8(PrimitiveType.node);
    w.write_u64(this.value);
  }

  /**
   * Hexedecimal representation of the node's reference
   */
  get ref(): string {
    return this.value.toString(16).padStart(16, '0');
  }

  override toJSON() {
    return {
      _type: this.type.name,
      ref: this.ref,
    };
  }
}
