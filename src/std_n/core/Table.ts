import type { AbiReader, AbiWriter, AbiType, std } from '../../exports.js';
import { Value, GreyCat, GCObject, $ } from '../../exports.js';

export class Table<T = unknown[]> extends GCObject {
  static readonly _type = 'core::Table' as const;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(type: AbiType, public cols: any[][]) {
    super(type);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static create<T = any>(cols: any[][], g: GreyCat = $.default): std.core.Table<T> {
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

  static fromObjects<T extends { [K in keyof T]: T[K] }>(
    rows: Record<string, Value>[],
    g: GreyCat = $.default,
  ): std.core.Table<T> {
    if (rows.length === 0) {
      const ty = g.abi.types[g.abi.core_table_offset];
      return new ty.factory(ty, []) as std.core.Table<T>;
    }
    const nbRows = rows.length;
    const fields = Object.keys(rows[0]);
    const nbCols = fields.length;

    const cols: Array<unknown[]> = Array.from({ length: nbCols }, () => new Array(nbRows));

    // swap from row-based to column-based
    for (let c = 0; c < nbCols; c++) {
      for (let r = 0; r < nbRows; r++) {
        cols[c][r] = rows[r][fields[c]];
      }
    }

    const ty = g.abi.types[g.abi.core_table_offset];
    return new ty.factory(ty, cols) as std.core.Table<T>;
  }

  static load<T extends Value = unknown>(r: AbiReader, ty: AbiType): std.core.Table<T> {
    const nb_rows = r.read_vu32();
    const nb_cols = r.read_vu32();
    const cols = new Array(nb_cols);
    for (let col = 0; col < nb_cols; col++) {
      cols[col] = r.read_array(nb_rows);
    }
    const factory = r.abi.types[r.abi.core_table_offset].factory;
    return new factory(ty, cols) as std.core.Table<T>;
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

  get_row(index: number): T | undefined {
    const nb_rows = this.cols[0]?.length ?? 0;
    if (index >= nb_rows) {
      return undefined;
    }
    if (this.$type.generic_abi_type == 0) {
      const row = new Array(this.cols.length);
      for (let col = 0; col < this.cols.length; col++) {
        row[col] = this.cols[col][index];
      }
      return row as T;
    }
    const elem_type = this.$type.abi.types[this.$type.g1_abi_type_desc >> 1];
    const nullable = (this.$type.g1_abi_type_desc & 0b00000001) === 1;
    const fields = new Array(this.cols.length);
    let all_null = true;
    for (let col = 0; col < this.cols.length; col++) {
      fields[col] = this.cols[col][index];
      if (fields[col] !== null) {
        all_null = false;
      }
    }
    if (nullable && all_null) {
      return null as T;
    }
    const value = new elem_type.factory(elem_type, ...fields) as T;
    return value;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  iter_by_column(): Iterator<Array<any>> {
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

  [Symbol.iterator](): Iterator<T> {
    if (this.$type.generic_abi_type == 0) {
      return new TableArrayIterator(0, this as Table<unknown[]>) as Iterator<T>;
    }
    return new TableObjectIterator(0, this);
  }

  override toJSON() {
    return {
      _type: Table._type,
      cols: this.cols,
    };
  }
}

export class TableObjectIterator<T> implements Iterator<T> {
  private readonly _nb_rows: number;
  private readonly _elem_type: AbiType;
  private readonly _nullable: boolean;

  constructor(private _index = 0, readonly table: Table<T>) {
    this._nb_rows = table.cols[0]?.length ?? 0;
    this._elem_type = table.$type.abi.types[table.$type.g1_abi_type_desc >> 1];
    this._nullable = (table.$type.g1_abi_type_desc & 0b00000001) === 1;
  }

  next(): IteratorResult<T> {
    if (this._index >= this._nb_rows) {
      return { value: undefined, done: true };
    }

    const nb_cols = this.table.cols.length;
    const fields = new Array(nb_cols);
    let all_null = true;
    for (let col = 0; col < nb_cols; col++) {
      fields[col] = this.table.cols[col][this._index];
      if (fields[col] !== null) {
        all_null = false;
      }
    }
    this._index += 1;
    let value: T;
    if (this._nullable && all_null) {
      value = null as T;
    } else {
      value = new this._elem_type.factory(this._elem_type, ...fields) as T;
    }
    return { value, done: false };
  }
}

export class TableArrayIterator implements Iterator<unknown[]> {
  private readonly _nb_rows: number;

  constructor(private _index = 0, readonly table: Table<unknown[]>) {
    this._nb_rows = table.cols[0]?.length ?? 0;
  }

  next(): IteratorResult<unknown[]> {
    if (this._index >= this._nb_rows) {
      return { value: undefined, done: true };
    }

    const nb_cols = this.table.cols.length;
    const row = new Array(nb_cols);
    for (let col = 0; col < nb_cols; col++) {
      row[col] = this.table.cols[col][this._index];
    }
    this._index += 1;
    return { value: row, done: false };
  }
}
