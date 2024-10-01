import type { AbiType, AbiReader, AbiWriter, GreyCat, std } from '../../exports.js';
import { GCObject, PrimitiveType, $ } from '../../exports.js';

export class nodeIndex<K = unknown, V = unknown> extends GCObject {
  static readonly _type = 'core::nodeIndex' as const;

  constructor(type: AbiType, public value: bigint) {
    super(type);
  }

  static create(value: bigint, g: GreyCat = $.default): std.core.nodeIndex {
    const ty = g.abi.types[g.abi.core_node_index_offset];
    return new ty.factory(ty, value) as std.core.nodeIndex;
  }

  static fromRef(ref: string, g: GreyCat = $.default): std.core.nodeIndex {
    return nodeIndex.create(BigInt(`0x${ref}`), g);
  }

  static load(r: AbiReader, ty: AbiType): std.core.nodeIndex {
    const value = r.read_vu64_bigint();
    return new ty.factory(ty, value) as std.core.nodeIndex;
  }

  sample(
    from: K | null,
    maxRows: number | bigint,
    mode: std.core.SamplingMode,
    g: GreyCat = $.default,
    signal?: AbortSignal,
  ): Promise<std.core.Table<[K, V]>> {
    return g.call('core::nodeIndex::sample', [[this], from, maxRows, mode], signal);
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
