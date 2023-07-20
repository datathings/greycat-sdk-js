import { GCObject } from './GCObject.js';
import { GCEnum } from './index.js';
import { Reader } from './io.js';
import { IFactory, ILoader, Library, PrimitiveType, Value } from './types.js';

export class Abi {
  static readonly protocol_version = 1;

  readonly magic: number;
  readonly version: number;
  readonly crc: bigint;

  /** Maps all the ABI symbols to their respective offset in `this.symbols` */
  readonly id_by_symbol: Map<string, number>;
  readonly type_by_fqn: Map<string, AbiType>;
  readonly fn_by_fqn: Map<string, AbiFunction>;
  readonly libs_by_name: Map<string, Library>;

  readonly loaders: Map<string, ILoader>;
  readonly factories: Map<string, IFactory>;

  readonly symbols: string[] = [];
  readonly types: AbiType[] = [];
  readonly functions: AbiFunction[] = [];

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
  readonly core_cubic_offset: number = 0;
  readonly core_tu2d_offset: number = 0;
  readonly core_tu3d_offset: number = 0;
  readonly core_tu4d_offset: number = 0;
  readonly core_tu5d_offset: number = 0;
  readonly core_tu6d_offset: number = 0;
  readonly core_tu10d_offset: number = 0;
  readonly core_tuf2d_offset: number = 0;
  readonly core_tuf3d_offset: number = 0;
  readonly core_tuf4d_offset: number = 0;
  readonly core_function_offset: number = 0;

  constructor(buffer: ArrayBuffer, readonly libraries: Library[]) {
    this.id_by_symbol = new Map();
    this.type_by_fqn = new Map();
    this.loaders = new Map();
    this.factories = new Map();
    this.libs_by_name = new Map();
    this.fn_by_fqn = new Map();

    for (let i = 0; i < libraries.length; i++) {
      const lib = libraries[i];
      lib.configure(this.loaders, this.factories);
      this.libs_by_name.set(lib.name, lib);
    }

    const cursor = new Reader(buffer);

    const major = cursor.read_u16();

    if (major !== Abi.protocol_version) {
      throw new Error(`ABI protocol version mismatch (expected=${Abi.protocol_version}, actual=${major})`);
    }

    this.magic = cursor.read_u16();
    this.version = cursor.read_u32();
    this.crc = cursor.read_u64();

    /* const symbols_size = */ cursor.read_u64();
    const nb_symbols = cursor.read_u32();
    this.symbols = new Array(nb_symbols + 1);
    this.symbols[0] = ''; // symbol zero is a special symbol for "not found"

    for (let i = 1; i < this.symbols.length; i++) {
      const len = cursor.read_u32();
      const symbol = cursor.read_string(len);
      this.symbols[i] = symbol;
      this.id_by_symbol.set(symbol, i);
    }

    /* const types_size = */ cursor.read_u64();
    const nb_types = cursor.read_u32();
    /* const nb_attrs = */ cursor.read_u32();

    this.types = new Array(nb_types);

    for (let i = 0; i < this.types.length; i++) {
      const module = cursor.read_u32();
      const name = cursor.read_u32();
      const lib_name = cursor.read_u32();
      const attributes_len = cursor.read_u32();
      /* const attributes_offset =  */ cursor.read_u32(); // unused
      /* const mapped_prog_type_offset =  */ cursor.read_u32(); // unused
      const mapped_abi_type_offset = cursor.read_u32();
      const masked_abi_type_offset = cursor.read_u32();
      const nullable_nb_bytes = cursor.read_u32();
      const is_native = cursor.read_u8() > 0;
      const is_abstract = cursor.read_u8() > 0;
      const is_enum = cursor.read_u8() > 0;
      const is_masked = cursor.read_u8() > 0;

      const attrs: AbiAttribute[] = new Array(attributes_len);
      for (let i = 0; i < attributes_len; i++) {
        const name = cursor.read_u32();
        const abi_type = cursor.read_u32();
        const prog_type_offset = cursor.read_u32();
        const mapped_any_offset = cursor.read_u32();
        const mapped_att_offset = cursor.read_u32();
        const sbi_type = cursor.read_u8();
        const nullable = cursor.read_u8() > 0;
        const mapped = cursor.read_u8() > 0;

        attrs[i] = new AbiAttribute(
          this.symbols[name],
          abi_type,
          prog_type_offset,
          mapped_any_offset,
          mapped_att_offset,
          sbi_type as PrimitiveType,
          nullable,
          mapped,
        );
      }

      const fqn = `${this.symbols[module]}::${this.symbols[name]}`;
      const type = new AbiType(
        i,
        this.symbols[lib_name],
        fqn,
        mapped_abi_type_offset,
        masked_abi_type_offset,
        nullable_nb_bytes,
        is_native,
        is_abstract,
        is_enum,
        is_masked,
        attrs,
        this.loaders.get(fqn),
        this.factories.get(fqn),
        this,
      );
      if (type.mapped_type_off == i) {
        this.type_by_fqn.set(type.name, type);
      }

      this.types[i] = type;

      if (this.symbols[module] === 'core') {
        // prettier-ignore
        switch (this.symbols[name]) {
          case 'String':    this.core_string_offset     = i; break;
          case 'Array':     this.core_array_offset      = i; break;
          case 'Map':       this.core_map_offset        = i; break;
          case 'geo':       this.core_geo_offset        = i; break;
          case 'duration':  this.core_duration_offset   = i; break;
          case 'time':      this.core_time_offset       = i; break;
          case 'node':      this.core_node_offset       = i; break;
          case 'nodeTime':  this.core_node_time_offset  = i; break;
          case 'nodeList':  this.core_node_list_offset  = i; break;
          case 'nodeGeo':   this.core_node_geo_offset   = i; break;
          case 'nodeIndex': this.core_node_index_offset = i; break;
          case 'cubic':     this.core_cubic_offset      = i; break;
          case 'tu2d':      this.core_tu2d_offset       = i; break;
          case 'tu3d':      this.core_tu3d_offset       = i; break;
          case 'tu4d':      this.core_tu4d_offset       = i; break;
          case 'tu5d':      this.core_tu5d_offset       = i; break;
          case 'tu6d':      this.core_tu6d_offset       = i; break;
          case 'tu10d':     this.core_tu10d_offset      = i; break;
          case 'tuf2d':     this.core_tuf2d_offset      = i; break;
          case 'tuf3d':     this.core_tuf3d_offset      = i; break;
          case 'tuf4d':     this.core_tuf4d_offset      = i; break;
          case 'function':  this.core_function_offset   = i; break;
          default:
            // noop
            break;
        }
      }
    }

    /* const functions_size = */ cursor.read_u64();
    const functions_len = cursor.read_u32();
    this.functions = new Array(functions_len);
    for (let i = 0; i < functions_len; i++) {
      const module = cursor.read_u32();
      const type = cursor.read_u32();
      const name = cursor.read_u32();
      const lib = cursor.read_u32();
      const arity = cursor.read_u32(); // FIXME u8 is enough here
      const params = new Array(arity);
      for (let p = 0; p < arity; p++) {
        const nullable = cursor.read_u8() === 1;
        const param_type = cursor.read_u32();
        const param_symbol = cursor.read_u32();
        params[i] = new AbiParam(this.symbols[param_symbol], this.types[param_type], nullable);
      }
      const return_type = cursor.read_u32();
      const return_nullable = cursor.read_u8() === 1;
      const is_task = cursor.read_u8() === 1;

      const fqn =
        type === 0
          ? `${this.symbols[module]}::${this.symbols[name]}`
          : `${this.symbols[module]}::${this.symbols[type]}::${this.symbols[name]}`;
      this.functions[i] = new AbiFunction(
        lib,
        module,
        type,
        name,
        fqn,
        params,
        this.types[return_type],
        return_nullable,
        is_task,
      );
      this.fn_by_fqn.set(fqn, this.functions[i]);
    }

    for (let i = 0; i < libraries.length; i++) {
      libraries[i].init(this);
    }
  }

  create(name: string, attributes: Value[]) {
    const t = this.type_by_fqn.get(name);
    if (t == undefined) {
      return null;
    }
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new t.factory!(t, ...attributes);
  }

  createGeo(lat: number, lng: number) {
    const t = this.types[this.core_geo_offset];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new t.factory!(t, lat, lng);
  }

  createTime(value: bigint) {
    const t = this.types[this.core_time_offset];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new t.factory!(t, value);
  }

  createDuration(value: bigint) {
    const t = this.types[this.core_duration_offset];
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new t.factory!(t, value);
  }
}

export class AbiType {
  static readonly error_loader: ILoader = (_, type) => {
    throw new Error(`no registered loader for '${type.name}'`);
  };
  static readonly enum_loader: ILoader = (r, type) => {
    const programType = type.abi.types[type.mapped_type_off];
    const valueOffset = r.read_u32();
    const abiTypeAtt = type.attrs[valueOffset];
    // this is an enum, so we know `enum_values` is gonna be initialized
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return programType.enum_values![abiTypeAtt.mapped_att_offset];
  };
  static readonly object_loader: ILoader = (r, type) => {
    const programType = type.abi.types[type.mapped_type_off];
    const attrs = new Array(programType.attrs.length);
    for (let i = 0; i < attrs.length; i++) {
      const att = type.attrs[i];
      const value = r.deserialize();
      if (att.mapped) {
        attrs[att.mapped_att_offset] = value;
      }
    }
    if (programType.factory == null) {
      return new GCObject(programType, attrs);
    }
    return new programType.factory(programType, attrs);
  };

  readonly attrs_by_name: Map<string, number>;
  readonly enum_values: GCEnum[] | null;
  static_values: Value[];
  readonly loader: ILoader;
  readonly factory: IFactory | null;
  generated_offsets: number[] = [];

  constructor(
    /**
     * Offset of this type in `Abi.types[]`
     */
    readonly offset: number,
    readonly lib_name: string,
    /** fully qualified name */
    readonly name: string,
    readonly mapped_type_off: number,
    readonly masked_type_off: number,
    readonly nullable_nb_bytes: number,
    readonly is_native: boolean,
    readonly is_abstract: boolean,
    readonly is_enum: boolean,
    readonly is_masked: boolean,
    readonly attrs: AbiAttribute[],
    loader: ILoader | undefined,
    factory: IFactory | undefined,
    readonly abi: Abi,
  ) {
    this.attrs_by_name = new Map();
    this.enum_values = null;
    this.static_values = [];
    this.factory = factory ?? null;

    for (let i = 0; i < attrs.length; i++) {
      this.attrs_by_name.set(attrs[i].name, i);
    }
    if (offset === mapped_type_off) {
      // this is a program type, so lets initialize all needed fields
      // in case this is an enum, create all the values
      if (is_enum) {
        this.enum_values = new Array(attrs.length);
        for (let offset = 0; offset < attrs.length; offset++) {
          if (factory == null) {
            this.enum_values[offset] = new GCEnum(this, offset, attrs[offset].name, null);
          } else {
            this.enum_values[offset] = new factory(this, offset, attrs[offset].name, null) as GCEnum;
          }
        }
      }
    }
    if (loader != null) {
      this.loader = loader;
    } else if (this.is_native) {
      this.loader = AbiType.error_loader;
    } else if (this.is_enum) {
      this.loader = AbiType.enum_loader;
    } else {
      this.loader = AbiType.object_loader;
    }
  }

  resolveGeneratedOffsets(...attributeNames: string[]) {
    this.generated_offsets = new Array(attributeNames.length);
    for (let i = 0; i < attributeNames.length; i++) {
      const resolved = this.attrs_by_name.get(attributeNames[i]);
      if (resolved == undefined) {
        throw new Error('unmapped generated attribute, please re-generate');
      }
      this.generated_offsets[i] = resolved;
    }
  }

  /**
   * `values` must be a list of enum field name followed by the value (or null if none), repeated as many time as there are fields in the enum
   *
   * ```gcl
   * enum TrafficLight {
   *    Green(0);
   *    Yellow(1);
   *    Red(2);
   * }
   * ```
   * Should have `resolveGeneratedOffsetWithValues()` called as:
   * ```ts
   * .resolveGeneratedOffsetWithValues('Green', 0, 'Yellow', 1, 'Red', 2)
   * ```
   */
  resolveGeneratedOffsetWithValues(...values: unknown[]) {
    this.generated_offsets = new Array(values.length / 2);
    for (let i = 0; i < values.length; i += 2) {
      const resolved = this.attrs_by_name.get(values[i] as string);
      if (resolved == undefined) {
        throw new Error('unmapped generated enum field, please re-generate');
      }
      this.generated_offsets[i / 2] = resolved;
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      this.enum_values![resolved].value = values[i + 1] as Value;
    }
  }
}

export class AbiAttribute {
  constructor(
    /** attribute name */
    readonly name: string,
    readonly abi_type: number,
    readonly prog_type_offset: number,
    readonly mapped_any_offset: number,
    readonly mapped_att_offset: number,
    readonly sbi_type: PrimitiveType,
    readonly nullable: boolean,
    readonly mapped: boolean,
  ) {}
}

export class AbiFunction {
  constructor(
    readonly lib: number,
    readonly module: number,
    readonly type: number,
    readonly name: number,
    readonly fqn: string,
    readonly params: AbiParam[],
    readonly return_type: AbiType,
    readonly return_type_nullable: boolean,
    readonly is_task: boolean,
  ) {}
}

export class AbiParam {
  constructor(readonly name: string, readonly type: AbiType, readonly nullable: boolean) {}
}
