import type { AbiReader, AbiWriter, AbiType, std } from '../../exports.js';
import { PrimitiveType, PrimitiveTypeName, Value, GreyCat, GCObject, $ } from '../../exports.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class Table<_ extends Value = any> extends GCObject {
  static readonly _type = 'core::Table' as const;

  constructor(type: AbiType, public cols: Array<Value[]>, public meta: NativeTableColumnMeta[]) {
    super(type);
  }

  static create(
    cols: Array<Value[]>,
    meta: NativeTableColumnMeta[],
    g: GreyCat = $.default,
  ): std.core.Table {
    const ty = g.abi.types[g.abi.core_table_offset];
    return new ty.factory(ty, cols, meta) as std.core.Table;
  }

  static fromRows(rows: Array<Value[]>, g: GreyCat = $.default): std.core.Table {
    const ty = g.abi.types[g.abi.core_table_offset];

    let nbColumns = 0;
    if (rows.length > 0) {
      for (let i = 0; i < rows.length; i++) {
        const len = rows[i].length;
        if (nbColumns < len) {
          nbColumns = len;
        }
      }
    }
    const cols: Array<Value[]> = Array.from({ length: nbColumns }, () => new Array(rows.length));
    const meta: NativeTableColumnMeta[] = Array.from(
      { length: nbColumns },
      () => new NativeTableColumnMeta(),
    );

    for (let c = 0; c < cols.length; c++) {
      for (let r = 0; r < rows.length; r++) {
        const value = rows[r][c];
        cols[c][r] = value;
        switch (typeof value) {
          case 'bigint':
          case 'number': {
            // min
            if (meta[c].min === null) {
              meta[c].min = value;
            } else if (typeof meta[c].min === 'number' || typeof meta[c].min === 'bigint') {
              if ((meta[c].min as number | bigint) > value) {
                meta[c].min = value;
              }
            } else {
              meta[c].min = undefined;
            }
            // max
            if (meta[c].max === null) {
              meta[c].max = value;
            } else if (typeof meta[c].max === 'number' || typeof meta[c].max === 'bigint') {
              if ((meta[c].max as number | bigint) < value) {
                meta[c].max = value;
              }
            } else {
              meta[c].max = undefined;
            }
            // // avg
            // if (meta[c].avg === null) {
            //   meta[c].avg = value;
            // } else if (typeof meta[c].avg === 'number' || typeof meta[c].avg === 'bigint') {
            //   if ((meta[c].avg as number | bigint) < value) {
            //     meta[c].avg = value;
            //   }
            // } else {
            //   meta[c].avg = undefined;
            // }
            break;
          }
          default: {
            break;
          }
        }
      }
    }

    return new ty.factory(ty, cols, meta) as std.core.Table;
  }

  static load(r: AbiReader, type: AbiType): Table {
    const cols_len = r.read_vu32();
    const rows = r.read_vu32();
    const meta: NativeTableColumnMeta[] = new Array(cols_len);
    for (let i = 0; i < meta.length; i++) {
      meta[i] = NativeTableColumnMeta.load(r);
    }

    const cols = new Array(cols_len);
    for (let col = 0; col < cols.length; col++) {
      const values: Value[] = new Array(rows);
      cols[col] = values;
      switch (meta[col].col_type) {
        case PrimitiveType.null:
          for (let row = 0; row < rows; row++) {
            values[row] = null;
          }
          break;
        case PrimitiveType.int:
          for (let row = 0; row < rows; row++) {
            const value = r.read_vi64();
            if (meta[col].min === null || (meta[col].min as number | bigint) > value) {
              meta[col].min = value;
            }
            if (meta[col].max === null || (meta[col].max as number | bigint) < value) {
              meta[col].max = value;
            }
            values[row] = value;
          }
          break;
        case PrimitiveType.time: {
          const type = r.abi.types[r.abi.core_time_offset];
          for (let row = 0; row < rows; row++) {
            const value = type.loader(r, type) as std.core.time;
            if (meta[col].min === null || (meta[col].min as std.core.time).value > value.value) {
              meta[col].min = value;
            }
            if (meta[col].max === null || (meta[col].max as std.core.time).value < value.value) {
              meta[col].max = value;
            }
            values[row] = value;
          }
          break;
        }
        case PrimitiveType.duration: {
          const type = r.abi.types[r.abi.core_duration_offset];
          for (let row = 0; row < rows; row++) {
            const value = type.loader(r, type) as std.core.duration;
            if (meta[col].min === null || (meta[col].min as std.core.duration).value > value.value) {
              meta[col].min = value;
            }
            if (meta[col].max === null || (meta[col].max as std.core.duration).value < value.value) {
              meta[col].max = value;
            }
            values[row] = value;
          }
          break;
        }
        case PrimitiveType.enum: {
          const type = r.abi.types[meta[col].type];
          if (type.enum_values === null) {
            throw new Error(
              `no values registered for ${type.name}, std.core.Table cannot deserialize properly`,
            );
          }
          for (let row = 0; row < rows; row++) {
            const enum_field = r.read_vu32();
            values[row] = type.enum_values[enum_field];
          }
          break;
        }
        case PrimitiveType.float: {
          // const compsz = r.read_u32();
          // r.take(compsz);
          // // TODO decompress
          // throw new Error('core.Table float decompression is not handled yet');
          for (let row = 0; row < rows; row++) {
            const value = r.read_f64();
            if (meta[col].min === null || (meta[col].min as number) > value) {
              meta[col].min = value;
            }
            if (meta[col].max === null || (meta[col].max as number) < value) {
              meta[col].max = value;
            }
            values[row] = value;
          }
          break;
        }
        case PrimitiveType.object: {
          const type = r.abi.types[meta[col].type];
          for (let row = 0; row < rows; row++) {
            values[row] = type.loader(r, type);
          }
          break;
        }
        default:
          // gc_undefined
          for (let row = 0; row < rows; row++) {
            values[row] = r.deserialize();
          }
          break;
      }
    }

    return new type.factory(type, cols, meta) as Table;
  }

  override saveContent(w: AbiWriter) {
    const nbRows = this.cols[0]?.length ?? 0;

    w.write_vu32(this.cols.length);
    w.write_vu32(nbRows);

    for (let i = 0; i < this.meta.length; i++) {
      this.meta[i].saveContent(w);
    }

    for (let col = 0; col < this.cols.length; col++) {
      const sbi_type = this.meta[col].col_type;
      switch (sbi_type) {
        case PrimitiveType.null:
          break;
        case PrimitiveType.int:
          for (let row = 0; row < nbRows; row++) {
            w.write_vi64(BigInt(this.cols[col][row] as number | bigint));
          }
          break;
        case PrimitiveType.time:
        case PrimitiveType.duration:
        case PrimitiveType.enum:
          for (let row = 0; row < nbRows; row++) {
            (this.cols[col][row] as GCObject).saveContent(w);
          }
          break;
        case PrimitiveType.float: {
          // w.write_u32(0);
          // // TODO compress
          // throw new Error('core.Table float compression is not handled yet');
          for (let row = 0; row < nbRows; row++) {
            w.write_f64(this.cols[col][row] as number);
          }
          break;
        }
        case PrimitiveType.object: {
          for (let row = 0; row < nbRows; row++) {
            w.serializeRaw(this.cols[col][row]);
          }
          break;
        }
        default:
          // gc_undefined
          for (let row = 0; row < nbRows; row++) {
            w.serialize(this.cols[col][row]);
          }
          break;
      }
    }
  }

  override toJSON() {
    return {
      _type: Table._type,
      cols: this.cols,
      meta: this.meta,
    };
  }
}

export class NativeTableColumnMeta {
  min: Value = null;
  max: Value = null;
  constructor(
    public col_type: PrimitiveType = PrimitiveType.undefined,
    public type = 0,
    public typeName: string | undefined = undefined,
    public index = false,
    public header: string | null = null,
  ) { }

  static load(r: AbiReader): NativeTableColumnMeta {
    const col_type = r.read_u8() as PrimitiveType;
    const index = r.read_bool();
    let type = 0;
    if (col_type == PrimitiveType.object || col_type == PrimitiveType.enum) {
      type = r.read_vu32();
    }
    const header_len = r.read_vu32();
    let header: string | null = null;
    if (header_len > 0) {
      header = r.read_string(header_len);
    }

    let typeName: string | undefined;
    if (type === 0) {
      // primitive type
      typeName = `core::${PrimitiveTypeName[col_type]}`;
    } else {
      // object type
      typeName = r.abi.types[type].name;
    }
    return new NativeTableColumnMeta(col_type, type, typeName, index, header);
  }

  saveContent(w: AbiWriter) {
    w.write_u8(this.col_type);
    w.write_bool(this.index);
    if (this.col_type == PrimitiveType.object || this.col_type == PrimitiveType.enum) {
      w.write_vu32(this.type);
    }
    if (this.header === null) {
      w.write_vu32(0);
    } else {
      w.write_vu32(this.header.length);
      w.write_all(w.txt.encode(this.header));
    }
  }

  toJSON() {
    return {
      _type: 'core::NativeTableColumnMeta',
      typeName: this.typeName,
      header: this.header,
      index: this.index,
      min: this.min,
      max: this.max,
    };
  }
}
