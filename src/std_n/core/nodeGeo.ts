import type { core, AbiType, AbiReader, AbiWriter } from '../../index.js';
import { GCObject, PrimitiveType } from '../../index.js';

export class nodeGeo extends GCObject {
  static readonly _type = 'core::nodeGeo' as const;

  constructor(type: AbiType, public value: bigint) {
    super(type);
  }

  static load(r: AbiReader, ty: AbiType): core.nodeGeo {
    const value = r.read_vu64_bigint();
    return new ty.factory(ty, value) as core.nodeGeo;
  }

  static fromJSON(o: unknown): nodeGeo {
    Object.setPrototypeOf(o, nodeGeo.prototype);
    return o as nodeGeo;
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
    return this.value.toString(16).padStart(16, '0');
  }

  override toJSON() {
    return {
      _type: this.$type.name,
      ref: this.ref,
    };
  }
}
