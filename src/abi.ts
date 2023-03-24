import { Reader } from './io.js';
import { GCEnum } from './GCEnum.js';
import { GCObject } from './GCObject.js';
import { IDeserialize, Library, IObjCtor, PrimitiveType } from './types.js';

export class Abi {
  /** Maps all the ABI symbols to their respective offset in `this.symbols` */
  readonly symbol_to_id: Map<string, number>;
  /** Maps fqn to AbiType */
  readonly fqn_to_type: Map<string, AbiType>;
  readonly loaders: Map<string, IDeserialize>;
  readonly libs_by_name: Map<string, Library>;
  readonly factories: Map<string, IObjCtor>;
  readonly symbols: string[] = [];
  readonly types: AbiType[] = [];
  readonly core_string_offset: number = 0;
  readonly core_duration_offset: number = 0;
  readonly core_time_offset: number = 0;
  readonly core_geo_offset: number = 0;
  readonly core_node_list_offset: number = 0;
  readonly core_node_index_offset: number = 0;
  readonly core_node_time_offset: number = 0;
  readonly core_node_offset: number = 0;
  readonly core_node_geo_offset: number = 0;
  readonly core_array_offset: number = 0;
  readonly core_map_offset: number = 0;

  constructor(buffer: Uint8Array, readonly libraries: Library[]) {
    this.symbol_to_id = new Map();
    this.fqn_to_type = new Map();
    this.loaders = new Map();
    this.factories = new Map();
    this.libs_by_name = new Map();

    for (let i = 0; i < libraries.length; i++) {
      const lib = libraries[i];
      lib.configure(this.loaders, this.factories);
      this.libs_by_name.set(lib.name, lib);
    }

    const cursor = new Reader(buffer);
    const symbols_len = cursor.read_u32();
    this.symbols = new Array(symbols_len);
    this.symbols[0] = ''; // symbol zero is a special symbol for "not found"

    for (let i = 0; i < symbols_len; i++) {
      const len = cursor.read_u32();
      const symbol = cursor.read_string(len);
      this.symbols[i + 1] = symbol;
      this.symbol_to_id.set(symbol, i + 1);
    }
    const types_len = cursor.read_u32();
    this.types = new Array(types_len);
    for (let i = 0; i < types_len; i++) {
      const module = cursor.read_u32();
      const name = cursor.read_u32();
      const attributes_len = cursor.read_u32();
      /* const attributes_offset =  */ cursor.read_u32(); // unused
      /* const mapped_prog_type_offset =  */ cursor.read_u32(); // unused
      const mapped_abi_type_offset = cursor.read_u32();
      const masked_abi_type_offset = cursor.read_u32();
      const is_native = cursor.read_u8() > 0;
      const is_enum = cursor.read_u8() > 0;
      const is_masked = cursor.read_u8() > 0;

      const attrs: AbiAttribute[] = new Array(attributes_len);
      for (let i = 0; i < attributes_len; i++) {
        const name = cursor.read_u32();
        const type_mod = cursor.read_u32();
        const type_name = cursor.read_u32();
        const prog_type_offset = cursor.read_u32();
        const mapped_any_offset = cursor.read_u32();
        const mapped_att_offset = cursor.read_u32();
        const sbi_type = cursor.read_u8();
        const nullable = cursor.read_u8() > 0;
        const mapped = cursor.read_u8() > 0;

        attrs[i] = new AbiAttribute(
          this.symbols[name],
          this.symbols[type_mod],
          this.symbols[type_name],
          prog_type_offset,
          mapped_any_offset,
          mapped_att_offset,
          sbi_type as PrimitiveType,
          nullable,
          mapped,
        );
      }

      const fqn = `${this.symbols[module]}.${this.symbols[name]}`;
      const type = new AbiType(
        i,
        fqn,
        mapped_abi_type_offset,
        masked_abi_type_offset,
        is_native,
        is_enum,
        is_masked,
        attrs,
        this.loaders.get(fqn),
        this.factories.get(fqn),
        this,
      );
      if (type.mapped_type_off == i) {
        this.fqn_to_type.set(type.name, type);
      }

      this.types[i] = type;

      if (this.symbols[module] === 'core') {
        if (this.symbols[name] === 'String') {
          this.core_string_offset = i;
        }
        if (this.symbols[name] === 'Array') {
          this.core_array_offset = i;
        }
        if (this.symbols[name] === 'Map') {
          this.core_map_offset = i;
        }
        if (this.symbols[name] === 'geo') {
          this.core_geo_offset = i;
        }
        if (this.symbols[name] === 'duration') {
          this.core_duration_offset = i;
        }
        if (this.symbols[name] === 'time') {
          this.core_time_offset = i;
        }
        if (this.symbols[name] === 'node') {
          this.core_node_offset = i;
        }
        if (this.symbols[name] === 'nodeTime') {
          this.core_node_time_offset = i;
        }
        if (this.symbols[name] === 'nodeList') {
          this.core_node_list_offset = i;
        }
        if (this.symbols[name] === 'nodeGeo') {
          this.core_node_geo_offset = i;
        }
        if (this.symbols[name] === 'nodeIndex') {
          this.core_node_index_offset = i;
        }
      }
    }

    for (let i = 0; i < libraries.length; i++) {
      libraries[i].init(this);
    }
  }
}

export class AbiType {
  static readonly error_loader: IDeserialize = (_, type) => {
    throw new Error(`no registered loader for native type '${type.name}'`);
  };
  static readonly enum_loader: IDeserialize = (r, type) => {
    const programType = type.abi.types[type.mapped_type_off];
    const valueOffset = r.read_u32();
    const abiTypeAtt = type.attrs[valueOffset];
    // this is an enum, so we know `enum_values` is gonna be initialized
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return programType.enum_values![abiTypeAtt.mapped_att_offset];
  };
  static readonly object_loader: IDeserialize = (r, type) => {
    const programType = type.abi.types[type.mapped_type_off];
    const attrs = new Array(programType.attrs.length);
    for (let i = 0; i < attrs.length; i++) {
      const att = type.attrs[i];
      const value = r.deserialize();
      if (att.mapped) {
        attrs[att.mapped_att_offset] = value;
      }
    }
    if (programType.ctor == null) {
      return new GCObject(programType, attrs);
    }
    return new programType.ctor(programType, attrs);
  };

  readonly attrs_by_name: Map<string, number>;
  readonly enum_values: GCEnum[] | null;
  readonly load: IDeserialize;
  readonly ctor: IObjCtor | null;

  constructor(
    /**
     * Offset of this type in `Abi.types[]`
     */
    readonly offset: number,
    /** fully qualified name */
    readonly name: string,
    readonly mapped_type_off: number,
    readonly masked_type_off: number,
    readonly is_native: boolean,
    readonly is_enum: boolean,
    readonly is_masked: boolean,
    readonly attrs: AbiAttribute[],
    load: IDeserialize | undefined,
    ctor: IObjCtor | undefined,
    readonly abi: Abi,
  ) {
    this.attrs_by_name = new Map();
    this.enum_values = null;
    this.ctor = ctor ?? null;

    for (let i = 0; i < attrs.length; i++) {
      this.attrs_by_name.set(attrs[i].name, i);
    }
    if (offset === mapped_type_off) {
      // this is a program type, so lets initialize all needed fields
      // in case this is an enum, create all the values
      if (is_enum) {
        this.enum_values = new Array(attrs.length);
        for (let i = 0; i < attrs.length; i++) {
          if (ctor == null) {
            this.enum_values[i] = new GCEnum(this, i, attrs[i].name, null);
          } else {
            this.enum_values[i] = new ctor(this, i, attrs[i].name, null) as GCEnum;
          }
        }
      }
    }
    if (load != null) {
      this.load = load;
    } else if (this.is_native) {
      this.load = AbiType.error_loader;
    } else if (this.is_enum) {
      this.load = AbiType.enum_loader;
    } else {
      this.load = AbiType.object_loader;
    }
  }
}

export class AbiAttribute {
  constructor(
    /** attribute name */
    readonly name: string,
    /** module name */
    readonly mod: string,
    /** type name */
    readonly type: string,
    readonly prog_type_offset: number,
    readonly mapped_any_offset: number,
    readonly mapped_att_offset: number,
    readonly sbi_type: PrimitiveType,
    readonly nullable: boolean,
    readonly mapped: boolean,
  ) {}
}
