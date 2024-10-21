import type { IFactory, ILoader, Library, Value } from './exports.js';
import { std, PrimitiveType, Reader, GCEnum, GCObject, std_n } from './exports.js';

export class Abi {
  static readonly protocol_version = 2;

  readonly magic: number;
  readonly version: number;
  readonly crc: bigint;

  /** Maps all the ABI symbols to their respective offset in `this.symbols` */
  readonly off_by_symbol: Map<string, number>;
  /** not the full fqn `<module>::<name>` only */
  readonly type_by_fqn: Map<string, AbiType>;
  /** not the full fqn `<module>::<name>` only */
  readonly fn_by_fqn: Map<string, AbiFunction>;
  readonly libs_by_name: Map<string, Library>;

  readonly loaders: Map<string, ILoader>;
  readonly factories: Map<string, IFactory>;

  readonly symbols: string[] = [];
  readonly types: AbiType[] = [];
  readonly functions: AbiFunction[] = [];

  readonly core_int_offset: number = 0;
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
  readonly core_t2_offset: number = 0;
  readonly core_t3_offset: number = 0;
  readonly core_t4_offset: number = 0;
  readonly core_str_offset: number = 0;
  readonly core_t2f_offset: number = 0;
  readonly core_t3f_offset: number = 0;
  readonly core_t4f_offset: number = 0;
  readonly core_function_offset: number = 0;
  readonly core_type_offset: number = 0;
  readonly core_timezone_offset: number = 0;
  readonly core_date_offset: number = 0;
  readonly core_table_offset: number = 0;
  readonly core_tensortype_offset: number = 0;
  readonly core_float_offset: number = 0;
  readonly core_char_offset: number = 0;
  readonly core_field_offset: number = 0;

  constructor(buffer: ArrayBuffer, libraries: Library[] = []) {
    this.off_by_symbol = new Map();
    this.type_by_fqn = new Map();
    this.loaders = new Map();
    this.factories = new Map();
    this.libs_by_name = new Map();
    this.fn_by_fqn = new Map();

    const hasStd = libraries.find((lib) => lib.name === 'std');
    // always load 'stdlib'
    if (!hasStd) {
      const stdlib = cloneLibrary(std.stdlib);
      stdlib.configure(this.loaders, this.factories);
      this.libs_by_name.set(stdlib.name, stdlib);
    }

    for (let i = 0; i < libraries.length; i++) {
      const lib = cloneLibrary(libraries[i]);
      lib.configure(this.loaders, this.factories);
      this.libs_by_name.set(lib.name, lib);
    }

    const cursor = new Reader(buffer);

    const major = cursor.read_u16();

    if (major !== Abi.protocol_version) {
      throw new Error(
        `ABI protocol version mismatch (expected=${Abi.protocol_version}, actual=${major})`,
      );
    }

    this.magic = cursor.read_u16();
    this.version = cursor.read_u32();
    this.crc = cursor.read_u64();

    /* const symbols_size = */ cursor.read_u64();
    const nb_symbols = cursor.read_u32();
    this.symbols = new Array(nb_symbols + 1);
    this.symbols[0] = ''; // symbol zero is a special symbol for "not found"

    for (let i = 1; i < this.symbols.length; i++) {
      const len = cursor.read_vu32();
      const symbol = cursor.read_string(len);
      this.symbols[i] = symbol;
      this.off_by_symbol.set(symbol, i);
    }

    /* const types_size = */ cursor.read_u64(); // unused
    const nb_types = cursor.read_u32();
    /* const nb_attrs = */ cursor.read_u32(); // unused

    this.types = new Array(nb_types);

    for (let i = 0; i < this.types.length; i++) {
      const module = cursor.read_vu32();
      const name = cursor.read_vu32();
      const lib_name = cursor.read_vu32();
      const generic_abi_type = cursor.read_vu32();
      const g1_abi_type_desc = cursor.read_vu32();
      const g2_abi_type_desc = cursor.read_vu32();
      const attributes_len = cursor.read_vu32();
      /* const attributes_offset =  */ cursor.read_vu32(); // unused
      /* const mapped_prog_type_offset =  */ cursor.read_vu32(); // unused
      const mapped_abi_type_offset = cursor.read_vu32();
      const masked_abi_type_offset = cursor.read_vu32();
      const nullable_nb_bytes = cursor.read_vu32();
      const flags = cursor.read_u8();
      const is_native = (flags & 1) !== 0;
      const is_abstract = (flags & (1 << 1)) !== 0;
      const is_enum = (flags & (1 << 2)) !== 0;
      const is_masked = (flags & (1 << 3)) !== 0;
      const is_ambiguous = (flags & (1 << 4)) !== 0;

      const attrs: AbiAttribute[] = new Array(attributes_len);
      for (let i = 0; i < attributes_len; i++) {
        const name = cursor.read_vu32();
        const abi_type = cursor.read_vu32();
        const prog_type_offset = cursor.read_vu32();
        const mapped_any_offset = cursor.read_vu32();
        const mapped_att_offset = cursor.read_vu32();
        const sbi_type = cursor.read_u8();
        const precision = cursor.read_u8() as AbiPrecision;
        const flags = cursor.read_u8();
        const nullable = (flags & 1) !== 0;
        const mapped = (flags & (1 << 1)) !== 0;

        attrs[i] = new AbiAttribute(
          this.symbols[name],
          abi_type,
          prog_type_offset,
          mapped_any_offset,
          mapped_att_offset,
          sbi_type as PrimitiveType,
          nullable,
          mapped,
          precision,
        );
      }

      const key = `${this.symbols[module]}::${this.symbols[name]}`;
      const type = new AbiType(
        i,
        lib_name,
        module,
        name,
        generic_abi_type,
        g1_abi_type_desc,
        g2_abi_type_desc,
        mapped_abi_type_offset,
        masked_abi_type_offset,
        nullable_nb_bytes,
        is_native,
        is_abstract,
        is_enum,
        is_masked,
        is_ambiguous,
        attrs,
        this.loaders.get(key),
        this.factories.get(key),
        this,
      );
      if (type.mapped_type_off == i) {
        this.type_by_fqn.set(type.name, type);
      }

      this.types[i] = type;

      if (this.symbols[module] === 'core') {
        switch (this.symbols[name]) {
          case 'String':
            this.core_string_offset = i;
            break;
          case 'Array':
            this.core_array_offset = i;
            break;
          case 'Map':
            this.core_map_offset = i;
            break;
          case 'geo':
            this.core_geo_offset = i;
            break;
          case 'duration':
            this.core_duration_offset = i;
            break;
          case 'time':
            this.core_time_offset = i;
            break;
          case 'node':
            this.core_node_offset = i;
            break;
          case 'nodeTime':
            this.core_node_time_offset = i;
            break;
          case 'nodeList':
            this.core_node_list_offset = i;
            break;
          case 'nodeGeo':
            this.core_node_geo_offset = i;
            break;
          case 'nodeIndex':
            this.core_node_index_offset = i;
            break;
          case 'cubic':
            this.core_cubic_offset = i;
            break;
          case 't2':
            this.core_t2_offset = i;
            break;
          case 't3':
            this.core_t3_offset = i;
            break;
          case 't4':
            this.core_t4_offset = i;
            break;
          case 'str':
            this.core_str_offset = i;
            break;
          case 't2f':
            this.core_t2f_offset = i;
            break;
          case 't3f':
            this.core_t3f_offset = i;
            break;
          case 't4f':
            this.core_t4f_offset = i;
            break;
          case 'function':
            this.core_function_offset = i;
            break;
          case 'type':
            this.core_type_offset = i;
            break;
          case 'TimeZone':
            this.core_timezone_offset = i;
            break;
          case 'Date':
            this.core_date_offset = i;
            break;
          case 'Table':
            this.core_table_offset = i;
            break;
          case 'TensorType':
            this.core_tensortype_offset = i;
            break;
          case 'float':
            this.core_float_offset = i;
            break;
          case 'int':
            this.core_int_offset = i;
            break;
          case 'char':
            this.core_char_offset = i;
            break;
          case 'field':
            this.core_field_offset = i;
            break;
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
      const module = cursor.read_vu32();
      const type = cursor.read_vu32();
      const name = cursor.read_vu32();
      const lib = cursor.read_vu32();
      const arity = cursor.read_vu32();
      const params = new Array(arity);
      for (let p = 0; p < arity; p++) {
        const nullable = cursor.read_u8() === 1;
        const param_type = cursor.read_vu32();
        const param_symbol = cursor.read_vu32();
        params[p] = new AbiParam(this.symbols[param_symbol], this.types[param_type], nullable);
      }
      const return_type = cursor.read_vu32();
      const flags = cursor.read_u8();
      const return_nullable = (flags & 1) !== 0;
      const is_task = (flags & (1 << 1)) !== 0;

      const fqn =
        type === 0
          ? `${this.symbols[module]}::${this.symbols[name]}`
          : `${this.symbols[module]}::${this.symbols[type]}::${this.symbols[name]}`;
      this.functions[i] = new AbiFunction(
        lib === 0 ? 'project' : this.symbols[lib],
        this.symbols[module],
        type === 0 ? undefined : this.symbols[type],
        this.symbols[name],
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

    // link monomorphized types to there known native generic type
    for (let i = 0; i < nb_types; i++) {
      const type = this.types[i];
      switch (type.generic_abi_type) {
        case this.core_array_offset: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (type as any).loader = std_n.core.Array.load;
          break;
        }
        case this.core_table_offset: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (type as any).loader = std_n.core.Table.load;
          break;
        }
        case this.core_map_offset: {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          (type as any).loader = std_n.core.Map.load;
          break;
        }
        default:
          // noop
          break;
      }
    }

    // initialize every library
    this.libs_by_name.forEach((lib) => lib.init(this));

    for (let i = 0; i < this.types.length; i++) {
      Object.freeze(this.types[i]);
    }
  }

  create<T = GCObject>(name: string, attributes: Value[]): T | undefined {
    const ty = this.type_by_fqn.get(name);
    if (ty === undefined) {
      throw new Error(`unknown type '${name}'`);
    }
    return new ty.factory(ty, ...attributes) as T;
  }

  createFunctionByFqn(fqn: string) {
    const split = fqn.split('::');
    if (split.length === 2) {
      return this.createFunction(split[0], undefined, split[1]);
    } else if (split.length === 3) {
      return this.createFunction(split[0], split[1], split[2]);
    }
    throw new Error(
      `invalid function fqn '${fqn}' (expecting '<module>::<name>' or '<module>::<type>::<name>')`,
    );
  }

  createFunction(mod: string, type: string | undefined, name: string) {
    const modOff = this.off_by_symbol.get(mod) ?? 0;
    const typeOff = type ? this.off_by_symbol.get(type) : 0;
    const nameOff = this.off_by_symbol.get(name) ?? 0;
    const ty = this.types[this.core_function_offset];
    return new ty.factory(ty, modOff, typeOff, nameOff) as std.core.function_;
  }

  createNode(value: bigint) {
    const ty = this.types[this.core_node_offset];
    return new ty.factory(ty, value) as std.core.node;
  }

  createNodeList(value: bigint) {
    const ty = this.types[this.core_node_list_offset];
    return new ty.factory(ty, value) as std.core.nodeList;
  }

  createNodeIndex(value: bigint) {
    const ty = this.types[this.core_node_index_offset];
    return new ty.factory(ty, value) as std.core.nodeIndex;
  }

  createNodeGeo(value: bigint) {
    const ty = this.types[this.core_node_geo_offset];
    return new ty.factory(ty, value) as std.core.nodeGeo;
  }

  createNodeTime(value: bigint) {
    const ty = this.types[this.core_node_time_offset];
    return new ty.factory(ty, value) as std.core.nodeTime;
  }

  createGeo(lat: number, lng: number) {
    const value = std_n.core.geoEncode(lat, lng);
    const t = this.types[this.core_geo_offset];
    return new t.factory(t, value) as std.core.geo;
  }

  createTime(value: bigint) {
    const t = this.types[this.core_time_offset];
    return new t.factory(t, value) as std.core.time;
  }

  createDuration(value: bigint) {
    const t = this.types[this.core_duration_offset];
    return new t.factory(t, value) as std.core.duration;
  }

  createT2(x0: bigint | number, x1: bigint | number) {
    const t = this.types[this.core_t2_offset];
    return new t.factory(t, x0, x1) as std.core.t2;
  }

  createT3(x0: bigint | number, x1: bigint | number, x2: bigint | number) {
    const t = this.types[this.core_t3_offset];
    return new t.factory(t, x0, x1, x2) as std.core.t3;
  }

  createT4(x0: bigint | number, x1: bigint | number, x2: bigint | number, x3: bigint | number) {
    const t = this.types[this.core_t4_offset];
    return new t.factory(t, x0, x1, x2, x3) as std.core.t4;
  }

  createStr(value: bigint) {
    const t = this.types[this.core_str_offset];
    return new t.factory(t, value) as std.core.str;
  }

  createT2f(x0: number, x1: number) {
    const t = this.types[this.core_t2f_offset];
    return new t.factory(t, x0, x1) as std.core.t2f;
  }

  createT3f(x0: number, x1: number, x2: number) {
    const t = this.types[this.core_t3f_offset];
    return new t.factory(t, x0, x1, x2) as std.core.t3f;
  }

  createT4f(x0: number, x1: number, x2: number, x3: number) {
    const t = this.types[this.core_t4f_offset];
    return new t.factory(t, x0, x1, x2, x3) as std.core.t4f;
  }

  root(): AbiType {
    const root = this.type_by_fqn.get('::$$$root');
    if (!root) {
      throw new Error(`Abi ::$$$root type should be defined`);
    }
    return root;
  }
}

export class AbiType {
  static readonly error_loader: ILoader = (_, type) => {
    throw new Error(`no registered loader for native type '${type.name}'`);
  };
  static readonly enum_loader: ILoader = (r, type) => {
    const programType = type.abi.types[type.mapped_type_off];
    const valueOffset = r.read_vu32();
    const abiTypeAtt = type.attrs[valueOffset];
    // this is an enum, so we know `enum_values` is gonna be initialized
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return programType.static_values![abiTypeAtt.name];
  };
  static readonly object_loader: ILoader = (r, type) => {
    const programType = type.abi.types[type.mapped_type_off];
    const attrs = new Array(programType.attrs.length);
    // initialize every elements to null
    for (let i = 0; i < attrs.length; i++) {
      attrs[i] = null;
    }
    const previous_nullable = r.take(type.nullable_nb_bytes);
    let nullable_offset = -1;
    for (let attOffset = 0; attOffset < type.attrs.length; attOffset++) {
      const att = type.attrs[attOffset];
      let value: Value;
      if (att.nullable) {
        nullable_offset++;
        if (!gc_object__is_not_null(previous_nullable, nullable_offset)) {
          continue;
        }
      }
      let loadType = att.sbi_type;
      if (loadType === PrimitiveType.undefined) {
        loadType = r.read_u8() as PrimitiveType;
      }

      const attType = r.abi.types[att.abi_type];
      switch (loadType) {
        case PrimitiveType.enum: {
          if (att.sbi_type === PrimitiveType.undefined) {
            // full read
            const enum_id = r.read_vu32();
            const enum_type = r.abi.types[enum_id];
            value = this.enum_loader(r, enum_type);
          } else {
            value = this.enum_loader(r, attType);
          }
          break;
        }
        case PrimitiveType.object: {
          let attObjectType = attType;
          if (attType.is_ambiguous || att.sbi_type === PrimitiveType.undefined) {
            attObjectType = r.abi.types[r.read_vu32()];
          }
          value = attObjectType.loader(r, attObjectType);
          break;
        }
        case PrimitiveType.float: {
          value = r.read_pf64(att.precision);
          break;
        }
        default: {
          value = r.deserializers[loadType](r);
          break;
        }
      }
      if (att.mapped) {
        attrs[att.mapped_att_offset] = value;
      }
    }
    return new programType.factory(programType, ...attrs);
  };

  // can either be GCEnum in case of enum or Value in case of GCObject
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static_values: Record<string, any> = {};
  readonly enum_values: GCEnum[] | null = null;
  readonly loader: ILoader;
  readonly factory: IFactory;
  readonly properties: Record<PropertyKey, PropertyDescriptor & ThisType<{ $attrs: Value[] }>> = {};

  constructor(
    /**
     * Offset of this type in `Abi.types[]`
     */
    readonly offset: number,
    readonly lib: number,
    readonly module: number,
    readonly symbol: number,
    readonly generic_abi_type: number,
    readonly g1_abi_type_desc: number,
    readonly g2_abi_type_desc: number,
    readonly mapped_type_off: number,
    readonly masked_type_off: number,
    readonly nullable_nb_bytes: number,
    readonly is_native: boolean,
    readonly is_abstract: boolean,
    readonly is_enum: boolean,
    readonly is_masked: boolean,
    readonly is_ambiguous: boolean,
    readonly attrs: AbiAttribute[],
    loader: ILoader | undefined,
    factory: IFactory | undefined,
    readonly abi: Abi,
  ) {
    this.properties['$type'] = { value: this, enumerable: false };

    if (is_enum) {
      this.factory = factory ?? GCEnum;

      if (offset === mapped_type_off) {
        // initialize all enum fields
        this.enum_values = new Array(attrs.length);
        for (let offset = 0; offset < attrs.length; offset++) {
          const en = new this.factory(this, offset, attrs[offset].name, null) as GCEnum;
          this.static_values[attrs[offset].name] = en;
          this.enum_values[offset] = en;
        }
      }
    } else {
      for (let i = 0; i < this.attrs.length; i++) {
        const attr = this.attrs[i];
        this.properties[attr.name] = {
          enumerable: true,
          get() {
            return this.$attrs[i];
          },
          set(v) {
            this.$attrs[i] = v;
          },
        };
      }
      this.factory = factory ?? GCObject;
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
   *
   * NB:
   *
   * This should be named "defineEnumFieldValues(...)"
   */
  resolveGeneratedOffsetWithValues(...values: unknown[]) {
    for (let i = 0; i < values.length; i += 2) {
      for (let a = 0; a < this.attrs.length; a++) {
        const attr = this.attrs[a];
        const name = values[i] as string;
        if (attr.name === name) {
          // here 'this.static_values[name]' is an instance of GCEnum
          // so we want to define its field value
          this.static_values[name].value = values[i + 1] as Value;
        }
      }
    }
  }

  /**
   * Fully-qualified-name (eg. `'core::Array<core::int>'`)
   */
  get name(): string {
    // const lib = this.abi.symbols[this.lib];
    const mod = this.abi.symbols[this.module];
    const name = this.abi.symbols[this.symbol];
    return `${mod}::${name}`;
  }

  toJSON() {
    return {
      ...this,
      lib: this.abi.symbols[this.lib],
      module: this.abi.symbols[this.module],
      symbol: this.abi.symbols[this.symbol],
    };
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
    readonly precision: AbiPrecision,
  ) {}
}

export enum AbiPrecision {
  p_0 = 0,
  p_10 = 1,
  p_100 = 2,
  p_1_000 = 3,
  p_10_000 = 4,
  p_100_000 = 5,
  p_1_000_000 = 6,
  p_10_000_000 = 7,
  p_100_000_000 = 8,
  p_1_000_000_000 = 9,
  p_10_000_000_000 = 10,
}

export const F64_DIVIDERS = [
  1.0, 10.0, 100.0, 1000.0, 10000.0, 100000.0, 1000000.0, 10000000.0, 100000000.0, 1000000000.0,
  10000000000.0,
] as const;

export class AbiFunction {
  constructor(
    readonly lib: string,
    readonly module: string,
    readonly type: string | undefined,
    readonly name: string,
    readonly module_id: number,
    readonly type_id: number,
    readonly name_id: number,
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

/**
 * When loading multiple instances of GreyCat the mapped type array cannot
 * be shared between all instances, therefore we always clone the struct
 * so that each Library in each Abi instance gets its own array of mapped type
 */
function cloneLibrary(lib: Library): Library {
  return {
    name: lib.name,
    mapped: new Array(lib.mapped.length),
    configure: lib.configure,
    init: lib.init,
  };
}

function gc_object__is_not_null(bitset: Uint8Array, offset: number): boolean {
  // Find the index of the Uint8Array element containing the bit we want to check
  const bitsetIndex: number = offset >> 3; // Equivalent to integer division by 8

  // Find the position of the bit within the Uint8Array element
  const bitPosition: number = offset & 7; // Equivalent to offset % 8

  // Check if the bit is set (equal to 1)
  const isBitSet: boolean = (bitset[bitsetIndex] >> bitPosition) & 1 ? true : false;

  return isBitSet;
}
