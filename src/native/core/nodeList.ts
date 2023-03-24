import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';

export class nodeList extends GCObject {
  static readonly _type = 'core.nodeList' as const;

  constructor(type: AbiType, public value: bigint) {
    super(type);
  }

  static load(r: AbiReader): nodeList {
    const value = r.read_u64();
    return new nodeList(r.abi.types[r.abi.core_node_list_offset], value);
  }

  static fromJSON(o: unknown): nodeList {
    Object.setPrototypeOf(o, nodeList.prototype);
    return o as nodeList;
  }

  override save(w: AbiWriter) {
    w.write_u8(PrimitiveType.node_index);
    w.write_u64(this.value);
  }

  /**
   * Hexedecimal representation of the nodeList's reference
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
