import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType, Value } from '../../types.js';
import { GCObject } from '../../GCObject.js';

export class Table extends GCObject {
  static readonly _type = 'core::Table' as const;

  constructor(
    type: AbiType,
    public cols: number,
    public rows: number,
    public meta: TableColumnMeta[] | null,
    public data: Value[],
  ) {
    super(type);
  }

  static load(r: AbiReader, type: AbiType): Table {
    const cols = r.read_u32();
    const rows = r.read_u32();
    const use_meta = r.read_bool();

    let meta: TableColumnMeta[] | null = null;
    if (use_meta) {
      meta = new Array(cols);
      for (let i = 0; i < meta.length; i++) {
        const col_type = r.read_u32() as PrimitiveType;
        const type = r.read_u32();
        const size = r.read_u32();
        const sum = r.read_f64();
        const sumsq = r.read_f64();
        const min = r.read_i64();
        const max = r.read_i64();
        const index = r.read_bool();
        /** core.TimeZone field offset */
        const tz = r.read_u32();
        // convert native to std.core.TableColumnMeta
        meta[i] = new TableColumnMeta(col_type, type, size, sum, sumsq, min, max, index, tz);
      }
    }

    const capacity = rows * cols;
    const data = new Array(capacity);
    for (let i = 0; i < capacity; i++) {
      data[i] = r.deserialize();
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new type.factory!(type, cols, rows, meta, data) as Table;
  }

  override saveContent(w: AbiWriter) {
    w.write_u32(this.cols);
    w.write_u32(this.rows);
    if (this.meta) {
      w.write_bool(true);
      for (let i = 0; i < this.meta.length; i++) {
        const m = this.meta[i];
        w.write_u32(m.col_type);
        w.write_u32(m.type);
        w.write_u32(m.size);
        w.write_f64(m.sum);
        w.write_f64(m.sumsq);
        w.write_i64(m.min);
        w.write_i64(m.max);
        w.write_bool(m.index);
        w.write_u32(m.tz);
      }
    } else {
      w.write_bool(false);
    }
    for (let i = 0; i < this.data.length; i++) {
      w.serialize(this.data[i]);
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
      rows: this.rows,
      data: this.data,
      meta: this.meta,
    };
  }
}

class TableColumnMeta {
  constructor(
    public col_type: PrimitiveType,
    public type: number,
    public size: number,
    public sum: number,
    public sumsq: number,
    public min: bigint,
    public max: bigint,
    public index: boolean,
    public tz: number,
  ) {}
}

// function fromNativeTableColumnMeta(
//   abi: Abi,
//   col_type: Type,
//   type: number,
//   size: number,
//   sum: number,
//   sumsq: number,
//   min: bigint,
//   max: bigint,
//   index: boolean,
//   tz: std.core.TimeZone,
// ): std.core.TableColumnMeta {
//   let fqn: string | null = null;
//   if (col_type === Type.object || col_type === Type.enum) {
//     if (type != 0) {
//       fqn = abi.typeFqn(col_type);
//     }
//   } else if (col_type !== Type.undef && col_type !== Type.null) {
//     fqn = abi.typeFqn(col_type);
//   }

//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const res: { avg: any; std: any; min: any; max: any } = {
//     avg: null,
//     std: null,
//     min: null,
//     max: null,
//   };
//   switch (col_type) {
//     case Type.int:
//     case Type.float: {
//       const { favg, fstd } = floatCompute(size, sum, sumsq, min, max);
//       res.avg = favg;
//       res.std = fstd;
//       break;
//     }
//     case Type.time: {
//       const { favg, fstd } = floatCompute(size, sum, sumsq, min, max);
//       res.avg = time.fromNative(BigInt(Math.round(favg)));
//       res.std = time.fromNative(BigInt(Math.round(fstd)));
//       break;
//     }
//     case Type.duration: {
//       const { favg, fstd } = floatCompute(size, sum, sumsq, min, max);
//       res.avg = duration.fromNative(BigInt(Math.round(favg)));
//       res.std = duration.fromNative(BigInt(Math.round(fstd)));
//       break;
//     }
//     case Type.object:
//       if (abi.idToFqn.get(type) === 'core.Date') {
//         const { favg, fstd } = floatCompute(size, sum, sumsq, min, max);
//         res.min = Date.fromTime(min, tz);
//         res.max = Date.fromTime(max, tz);
//         res.avg = Date.fromTime(BigInt(Math.round(favg)), tz);
//         res.std = duration.fromNative(BigInt(Math.round(fstd)));
//       }
//       break;
//     default:
//       break;
//   }
//   return new std.core.TableColumnMeta(fqn, size, index, res.min, res.max, res.avg, res.std);
// }

// function floatCompute(
//   size: number,
//   sum: number,
//   sumsq: number,
//   min: bigint,
//   max: bigint,
// ): { favg: number; fstd: number } {
//   let favg = 0.0;
//   let fstd = 0.0;
//   if (size > 0) {
//     favg = sum / size;
//     if (size > 1 && max != min) {
//       const sf = (sum * sum) / size;
//       if (sumsq > sf) {
//         fstd = Math.sqrt(sumsq - sf / (size - 1));
//       }
//     }
//   }
//   favg += 0.5;
//   fstd += 0.5;
//   return { favg, fstd };
// }

// function toNativeTableColumnMeta(meta: std.core.TableColumnMeta) {
//   s.w.write_u32(this.col_type);
//   s.w.write_u32(this.type);
//   s.w.write_u32(this.size);
//   s.w.write_f64(this.sum);
//   s.w.write_f64(this.sumsq);
//   s.w.write_u64(this.min);
//   s.w.write_u64(this.max);
//   s.w.write_u8(this.index ? 1 : 0);
//   s.w.write_u32(this.tz);
// }
