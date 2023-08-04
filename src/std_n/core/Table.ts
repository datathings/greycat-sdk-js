import { Abi, AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType, PrimitiveTypeName, Value } from '../../types.js';
import { GCObject } from '../../GCObject.js';

export class Table extends GCObject {
  static readonly _type = 'core::Table' as const;

  constructor(type: AbiType, public cols: Array<Value[]>, public meta: NativeTableColumnMeta[]) {
    super(type);
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
          break;
        case PrimitiveType.int:
          for (let row = 0; row < rows; row++) {
            values[row] = r.read_vi64();
          }
          break;
        case PrimitiveType.time: {
          const type = r.abi.types[r.abi.core_time_offset];
          for (let row = 0; row < rows; row++) {
            values[row] = type.loader(r, type);
          }
          break;
        }
        case PrimitiveType.duration: {
          const type = r.abi.types[r.abi.core_duration_offset];
          for (let row = 0; row < rows; row++) {
            values[row] = type.loader(r, type);
          }
          break;
        }
        case PrimitiveType.enum: {
          const type = r.abi.types[meta[col].type];
          if (type.enum_values === null) {
            throw new Error(`no values registered for ${type.name}, core.Table cannot deserialize properly`);
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
            values[row] = r.read_f64();
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

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new type.factory!(type, cols, meta) as Table;
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
        default:
          // gc_undefined, gc_object
          for (let row = 0; row < nbRows; row++) {
            w.serialize(this.cols[col][row]);
          }
          break;
      }
    }
  }

  static fromJSON(o: unknown) {
    Object.setPrototypeOf(o, Table.prototype);
    return o;
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
  constructor(readonly abi: Abi, public col_type: PrimitiveType, public type: number, public index: boolean) { }

  static load(r: AbiReader): NativeTableColumnMeta {
    const col_type = r.read_u8() as PrimitiveType;
    const index = r.read_bool();
    let type = 0;
    if (col_type == PrimitiveType.object || col_type == PrimitiveType.enum) {
      type = r.read_vu32();
    }

    return new NativeTableColumnMeta(r.abi, col_type, type, index);
  }

  saveContent(w: AbiWriter) {
    w.write_u8(this.col_type);
    w.write_bool(this.index);
    if (this.col_type == PrimitiveType.object || this.col_type == PrimitiveType.enum) {
      w.write_vu32(this.type);
    }
  }

  get typeName(): string | undefined {
    if (this.type === 0) {
      // primitive type
      return `core::${PrimitiveTypeName[this.col_type]}`;
    } else {
      // object type
      return this.abi.types[this.type].name;
    }
  }

  toJSON() {
    return {
      _type: 'core::NativeTableColumnMeta',
      typeName: this.typeName,
      index: this.index,
    }
  }
}
