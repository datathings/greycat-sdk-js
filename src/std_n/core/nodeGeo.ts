import type { AbiType, AbiReader, AbiWriter, GreyCat, core } from '../../internal.js';
import { GCObject, PrimitiveType } from '../../internal.js';

export class nodeGeo extends GCObject {
  static readonly _type = 'core::nodeGeo' as const;

  constructor(type: AbiType, public value: bigint) {
    super(type);
  }

  static create(value: bigint, g: GreyCat = globalThis.greycat.default): core.nodeGeo {
    const ty = g.abi.types[g.abi.core_node_geo_offset];
    return new ty.factory(ty, value) as core.nodeGeo;
  }

  static fromRef(ref: string, g: GreyCat = globalThis.greycat.default): core.nodeGeo {
    return nodeGeo.create(BigInt(`0x${ref}`), g);
  }

  static load(r: AbiReader, ty: AbiType): core.nodeGeo {
    const value = r.read_vu64_bigint();
    return new ty.factory(ty, value) as core.nodeGeo;
  }

  override saveHeader(w: AbiWriter): void {
    w.write_u8(PrimitiveType.node_geo);
  }

  override saveContent(w: AbiWriter) {
    w.write_vu64(this.value);
  }

  /**
   * Hexedecimal representation of the nodeGeo's reference
   */
  get ref(): string {
    return this.value.toString(16);
  }

  override toString(): string {
    return `nodeGeo:${this.ref}`;
  }

  override toJSON() {
    return {
      _type: this.$type.name,
      ref: this.ref,
    };
  }
}
