import { GCObject, gc_object__is_not_null } from './GCObject.js';
import { GCEnum } from './GCEnum.js';
import { Reader } from './io.js';
import { IFactory, ILoader, Library, PrimitiveType, Value } from './types.js';
import { stdlib, std } from './exports.js';

export class Abi {
  static readonly protocol_version = 1;

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
  readonly core_ti2d_offset: number = 0;
  readonly core_ti3d_offset: number = 0;
  readonly core_ti4d_offset: number = 0;
  readonly core_ti5d_offset: number = 0;
  readonly core_ti6d_offset: number = 0;
  readonly core_ti10d_offset: number = 0;
  readonly core_tf2d_offset: number = 0;
  readonly core_tf3d_offset: number = 0;
  readonly core_tf4d_offset: number = 0;
  readonly core_function_offset: number = 0;
  readonly core_timezone_offset: number = 0;
  readonly core_date_offset: number = 0;
  readonly core_table_offset: number = 0;
  readonly core_tensortype_offset: number = 0;
  readonly core_float_offset: number = 0;
  readonly core_char_offset: number = 0;

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
      const std = cloneLibrary(stdlib);
      std.configure(this.loaders, this.factories);
      this.libs_by_name.set(std.name, std);
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

      const attrs: AbiAttribute[] = new Array(attributes_len);
      for (let i = 0; i < attributes_len; i++) {
        const name = cursor.read_vu32();
        const abi_type = cursor.read_vu32();
        const prog_type_offset = cursor.read_vu32();
        const mapped_any_offset = cursor.read_vu32();
        const mapped_att_offset = cursor.read_vu32();
        const sbi_type = cursor.read_u8();
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
          case 'ti2d':
            this.core_ti2d_offset = i;
            break;
          case 'ti3d':
            this.core_ti3d_offset = i;
            break;
          case 'ti4d':
            this.core_ti4d_offset = i;
            break;
          case 'ti5d':
            this.core_ti5d_offset = i;
            break;
          case 'ti6d':
            this.core_ti6d_offset = i;
            break;
          case 'ti10d':
            this.core_ti10d_offset = i;
            break;
          case 'tf2d':
            this.core_tf2d_offset = i;
            break;
          case 'tf3d':
            this.core_tf3d_offset = i;
            break;
          case 'tf4d':
            this.core_tf4d_offset = i;
            break;
          case 'function':
            this.core_function_offset = i;
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
          case 'char':
            this.core_char_offset = i;
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
      const arity = cursor.read_vu32(); // FIXME u8 is enough here
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
    throw new Error(`invalid function fqn '${fqn}' (expecting '<module>::<name>' or '<module>::<type>::<name>')`);
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
    const t = this.types[this.core_geo_offset];
    return new t.factory(t, lat, lng) as std.core.geo;
  }

  createTime(value: bigint) {
    const t = this.types[this.core_time_offset];
    return new t.factory(t, value) as std.core.time;
  }

  createDuration(value: bigint) {
    const t = this.types[this.core_duration_offset];
    return new t.factory(t, value) as std.core.duration;
  }

  createTu2d(x0: bigint | number, x1: bigint | number) {
    const t = this.types[this.core_ti2d_offset];
    return new t.factory(t, x0, x1) as std.core.ti2d;
  }

  createTu3d(x0: bigint | number, x1: bigint | number, x2: bigint | number) {
    const t = this.types[this.core_ti3d_offset];
    return new t.factory(t, x0, x1, x2) as std.core.ti3d;
  }

  createTu4d(x0: bigint | number, x1: bigint | number, x2: bigint | number, x3: bigint | number) {
    const t = this.types[this.core_ti4d_offset];
    return new t.factory(t, x0, x1, x2, x3) as std.core.ti4d;
  }

  // prettier-ignore
  createTu5d(
    x0: bigint | number,
    x1: bigint | number,
    x2: bigint | number,
    x3: bigint | number,
    x4: bigint | number,
  ) {
    const t = this.types[this.core_ti5d_offset];
    return new t.factory(t, x0, x1, x2, x3, x4) as std.core.ti5d;
  }

  createTu6d(
    x0: bigint | number,
    x1: bigint | number,
    x2: bigint | number,
    x3: bigint | number,
    x4: bigint | number,
    x5: bigint | number,
  ) {
    const t = this.types[this.core_ti6d_offset];
    return new t.factory(t, x0, x1, x2, x3, x4, x5) as std.core.ti6d;
  }

  createTu10d(
    x0: bigint | number,
    x1: bigint | number,
    x2: bigint | number,
    x3: bigint | number,
    x4: bigint | number,
    x5: bigint | number,
    x6: bigint | number,
    x7: bigint | number,
    x8: bigint | number,
    x9: bigint | number,
  ) {
    const t = this.types[this.core_ti10d_offset];
    return new t.factory(t, x0, x1, x2, x3, x4, x5, x6, x7, x8, x9) as std.core.ti10d;
  }

  createTuf2d(x0: number, x1: number) {
    const t = this.types[this.core_tf2d_offset];
    return new t.factory(t, x0, x1) as std.core.tf2d;
  }

  createTuf3d(x0: number, x1: number, x2: number) {
    const t = this.types[this.core_tf3d_offset];
    return new t.factory(t, x0, x1, x2) as std.core.tf3d;
  }

  createTuf4d(x0: number, x1: number, x2: number, x3: number) {
    const t = this.types[this.core_tf4d_offset];
    return new t.factory(t, x0, x1, x2, x3) as std.core.tf4d;
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
    const previous_nullable = r.take(programType.nullable_nb_bytes);
    let nullable_offset = -1;
    for (let attOffset = 0; attOffset < programType.attrs.length; attOffset++) {
      const att = programType.attrs[attOffset];
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

      const attType = programType.abi.types[att.abi_type];
      switch (loadType) {
        case PrimitiveType.enum: {
          if (att.sbi_type === PrimitiveType.undefined) {
            // full read
            const enum_id = r.read_vu32();
            const enum_type = programType.abi.types[enum_id];
            value = this.enum_loader(r, enum_type);
          } else {
            value = this.enum_loader(r, attType);
          }
          break;
        }
        case PrimitiveType.object: {
          let attObjectType = attType;
          if (attType.is_abstract || att.sbi_type === PrimitiveType.undefined) {
            attObjectType = programType.abi.types[r.read_vu32()];
          }
          value = attObjectType.loader(r, attObjectType);
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
  readonly static_values: Record<string, any> = {};
  readonly enum_values: GCEnum[] | null = null;
  readonly loader: ILoader;
  readonly factory: IFactory;
  readonly properties: Record<PropertyKey, PropertyDescriptor & ThisType<{ $attrs: Value[] }>> = {};

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
    this.properties['$type'] = { value: this, enumerable: false };

    if (is_enum) {
      this.factory = factory ?? GCEnum;

      if (offset === mapped_type_off) {
        // initialize all enum fields
        this.enum_values = new Array(attrs.length);
        for (let offset = 0; offset < attrs.length; offset++) {
          const en = new this.factory(
            this,
            offset,
            attrs[offset].name,
            null,
          ) as GCEnum;
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
          }
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
   */
  resolveGeneratedOffsetWithValues(...values: unknown[]) {
    for (let i = 0; i < values.length; i += 2) {
      for (let a = 0; a < this.attrs.length; a++) {
        const attr = this.attrs[a];
        if (attr.name === values[i] as string) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          this.static_values![attr.name].value = values[i + 1] as Value;
        }
      }
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
  ) { }
}

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
  ) { }
}

export class AbiParam {
  constructor(readonly name: string, readonly type: AbiType, readonly nullable: boolean) { }
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
    init: lib.init
  };
}