import type { AbiType, AbiReader, AbiWriter, GreyCat, std } from '../../exports.js';
import { GCObject, PrimitiveType, $ } from '../../exports.js';

export class field extends GCObject {
  static readonly _type = 'core::field' as const;

  constructor(type: AbiType) {
    super(type);
  }

  static create(g: GreyCat = $.default): std.core.field {
    const ty = g.abi.types[g.abi.core_field_offset];
    return new ty.factory(ty) as std.core.field;
  }

  static load(_r: AbiReader, ty: AbiType): std.core.field {
    // TODO
    return new ty.factory(ty) as std.core.field;
  }

  override saveHeader(w: AbiWriter): void {
    w.write_u8(PrimitiveType.field);
  }

  override saveContent() {
    // TODO
  }

  override toString() {
    return `null`;
  }

  override toJSON() {
    return null;
  }
}
