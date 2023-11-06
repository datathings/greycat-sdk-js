import type { AbiReader, AbiWriter, AbiType } from '../../index.js';
import { GCObject, PrimitiveType } from '../../index.js';
import type { GreyCat } from '../../greycat.js';
import type { core } from '../../std/index.js';

export class function_ extends GCObject {
  static readonly _type = 'core::function' as const;

  constructor(
    type: AbiType,
    public mod_off: number,
    public ty_off: number,
    public name_off: number,
  ) {
    super(type);
  }

  static create(
    mod: string,
    type: string | undefined,
    name: string,
    g: GreyCat = globalThis.greycat.default,
  ): core.function_ {
    const ty = g.abi.types[g.abi.core_function_offset];
    return new ty.factory(
      ty,
      g.abi.off_by_symbol.get(mod) ?? 0,
      type ? g.abi.off_by_symbol.get(type) ?? 0 : 0,
      g.abi.off_by_symbol.get(name) ?? 0,
    ) as core.function_;
  }

  static load(r: AbiReader, ty: AbiType): core.function_ {
    const mod_off = r.read_vu32();
    const ty_off = r.read_vu32();
    const name_off = r.read_vu32();
    return new ty.factory(ty, mod_off, ty_off, name_off) as core.function_;
  }

  override saveHeader(w: AbiWriter): void {
    w.write_u8(PrimitiveType.function);
  }

  override saveContent(w: AbiWriter) {
    w.write_vu32(this.mod_off);
    w.write_vu32(this.ty_off);
    w.write_vu32(this.name_off);
  }

  /**
   * Hexedecimal representation of the node's reference
   */
  get fqn(): string {
    if (this.ty_off === 0) {
      return `${this.$type.abi.symbols[this.mod_off]}::${this.$type.abi.symbols[this.name_off]}`;
    }
    return `${this.$type.abi.symbols[this.mod_off]}::${this.$type.abi.symbols[this.ty_off]}::${
      this.$type.abi.symbols[this.name_off]
    }`;
  }

  override toString() {
    return this.fqn;
  }

  override toJSON() {
    return {
      _type: this.$type.name,
      fqn: this.fqn,
    };
  }
}
