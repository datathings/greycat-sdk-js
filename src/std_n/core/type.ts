import type { AbiType, AbiReader, AbiWriter, GreyCat, core } from '../../internal.js';
import { GCObject, PrimitiveType } from '../../internal.js';

export class type extends GCObject {
  static readonly _type = 'core::type' as const;

  constructor(type: AbiType) {
    super(type);
  }

  static create(g: GreyCat = globalThis.greycat.default): core.type {
    const ty = g.abi.types[g.abi.core_float_offset];
    return new ty.factory(ty) as core.type;
  }

  static load(_r: AbiReader, ty: AbiType): core.type {
    return new ty.factory(ty) as core.type;
  }

  override saveHeader(w: AbiWriter): void {
    w.write_u8(PrimitiveType.type);
  }

  override saveContent() {
    // noop
  }

  override toString() {
    return `null`;
  }

  override toJSON() {
    return null;
  }
}
