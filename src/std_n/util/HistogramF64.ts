import { AbiType } from '../../abi.js';
import { AbiReader, AbiWriter } from '../../io.js';
import { GCObject } from '../../GCObject.js';

export class HistogramF64 extends GCObject {
  static readonly _type = 'util::HistogramF64' as const;

  constructor(
    type: AbiType,
    public real_min: number,
    public real_max: number,
    public min: number,
    public max: number,
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

  override saveContent(w: AbiWriter): void {
    w.write_f64(this.real_min);
    w.write_f64(this.real_max);
    w.write_f64(this.min);
    w.write_f64(this.max);
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

  static load(r: AbiReader, type: AbiType): HistogramF64 {
    const real_min = r.read_f64();
    const real_max = r.read_f64();
    const min = r.read_f64();
    const max = r.read_f64();
    const size = r.read_i64();
    const null_count = r.read_i64();
    const max_range = r.read_i64();
    const sum = r.read_f64();
    const sumsq = r.read_f64();
    const unit_magnitude = r.read_i32();
    const significant_figures = r.read_i32();
    const sub_bucket_half_count_magnitude = r.read_i32();
    const sub_bucket_half_count = r.read_i32();
    const sub_bucket_mask = r.read_i64();
    const sub_bucket_count = r.read_i32();
    const bucket_count = r.read_i32();
    const min_value = r.read_i64();
    const max_value = r.read_i64();
    const normalizing_index_offset = r.read_i32();
    const counts_len = r.read_i32();
    const total_count = r.read_i64();

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return new type.factory!(
      type,
      real_min,
      real_max,
      min,
      max,
      size,
      null_count,
      max_range,
      sum,
      sumsq,
      unit_magnitude,
      significant_figures,
      sub_bucket_half_count_magnitude,
      sub_bucket_half_count,
      sub_bucket_mask,
      sub_bucket_count,
      bucket_count,
      min_value,
      max_value,
      normalizing_index_offset,
      counts_len,
      total_count,
    ) as HistogramF64;
  }
}
