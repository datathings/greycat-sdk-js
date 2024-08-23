import type { AbiReader, AbiWriter, AbiType, std } from '../../exports.js';
import { Value, GreyCat, GCObject, $ } from '../../exports.js';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class Table<_ extends Value = any> extends GCObject {
  static readonly _type = 'core::Table' as const;

  constructor(type: AbiType, public cols: Array<Value[]>) {
    super(type);
  }

  static create(cols: Array<Value[]>, g: GreyCat = $.default): std.core.Table {
    const ty = g.abi.types[g.abi.core_table_offset];
    return new ty.factory(ty, cols) as std.core.Table;
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

    // swap from row-based to column-based
    for (let c = 0; c < cols.length; c++) {
      for (let r = 0; r < rows.length; r++) {
        cols[c][r] = rows[r][c];
      }
    }

    return new ty.factory(ty, cols) as std.core.Table;
  }

  static load(r: AbiReader, ty: AbiType): Table {
    const nb_rows = r.read_vu32();
    const nb_cols = r.read_vu32();
    const cols = new Array(nb_cols);
    for (let col = 0; col < nb_cols; col++) {
      cols[col] = r.read_array(nb_rows);
    }
    return new ty.factory(ty, cols) as std.core.Table;
  }

  override saveContent(w: AbiWriter): void {
    const nb_rows = this.cols[0]?.length ?? 0;
    const nb_cols = this.cols.length;
    w.write_vu32(nb_rows);
    w.write_vu32(nb_cols);
    for (let col = 0; col < nb_cols; col++) {
      w.write_array(this.cols[col]);
    }
  }

  iter_by_row(): RowIterator {
    return new RowIterator(this);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [Symbol.iterator](): Iterator<Array<any>> {
    let index = 0;
    const cols = this.cols;

    return {
      next() {
        if (index < cols.length) {
          return { value: cols[index++], done: false };
        }
        return { value: undefined, done: true };
      },
    };
  }

  override toJSON() {
    return {
      _type: Table._type,
      cols: this.cols,
    };
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export class RowIterator implements Iterable<Array<any>> {
  constructor(readonly table: Table) {}

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [Symbol.iterator](): Iterator<Array<any>> {
    let index = 0;
    const cols = this.table.cols;

    return {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      next(): IteratorResult<Array<any>> {
        const nb_rows = cols[0]?.length ?? 0;
        const nb_cols = cols.length;

        if (index < nb_rows) {
          const row = new Array(nb_cols);
          for (let col = 0; col < nb_cols; col++) {
            row[col] = cols[col][index];
          }
          index += 1;
          return { value: row, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  }
}
