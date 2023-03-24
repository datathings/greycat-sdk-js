import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { PrimitiveType } from '../../types.js';
import { GCObject } from '../../GCObject.js';

export class HistogramI64 extends GCObject {
  static readonly _type = 'util.HistogramI64' as const;

  constructor(
    type: AbiType,
    public real_min: bigint,
    public real_max: bigint,
    public min: bigint,
    public max: bigint,
    public size: bigint,
    public null_count: bigint,
    public max_range: bigint,
    public sum: number,
    public sumsq: number,
    public unit_magnitude: number,
    public significant_figures: number,
    public sub_bucket_half_count_magnitude: number,
    public sub_bucket_half_count: number,
    public sub_bucket_mask: bigint,
    public sub_bucket_count: number,
    public bucket_count: number,
    public min_value: bigint,
    public max_value: bigint,
    public normalizing_index_offset: number,
    public counts_len: number,
    public total_count: bigint,
  ) {
    super(type);
  }

  override save(w: AbiWriter): void {
    w.write_u8(PrimitiveType.object);
    w.write_u32(this.type.offset);

    w.write_i64(this.real_min);
    w.write_i64(this.real_max);
    w.write_i64(this.min);
    w.write_i64(this.max);
    w.write_i64(this.size);
    w.write_i64(this.null_count);
    w.write_i64(this.max_range);
    w.write_f64(this.sum);
    w.write_f64(this.sumsq);
    w.write_i32(this.unit_magnitude);
    w.write_i32(this.significant_figures);
    w.write_i32(this.sub_bucket_half_count_magnitude);
    w.write_i32(this.sub_bucket_half_count);
    w.write_i64(this.sub_bucket_mask);
    w.write_i32(this.sub_bucket_count);
    w.write_i32(this.bucket_count);
    w.write_i64(this.min_value);
    w.write_i64(this.max_value);
    w.write_i32(this.normalizing_index_offset);
    w.write_i32(this.counts_len);
    w.write_i64(this.total_count);
  }

  static load(r: AbiReader, type: AbiType): HistogramI64 {
    return new HistogramI64(
      type,
      r.read_i64(),
      r.read_i64(),
      r.read_i64(),
      r.read_i64(),
      r.read_i64(),
      r.read_i64(),
      r.read_i64(),
      r.read_f64(),
      r.read_f64(),
      r.read_i32(),
      r.read_i32(),
      r.read_i32(),
      r.read_i32(),
      r.read_i64(),
      r.read_i32(),
      r.read_i32(),
      r.read_i64(),
      r.read_i64(),
      r.read_i32(),
      r.read_i32(),
      r.read_i64(),
    );
  }
}
