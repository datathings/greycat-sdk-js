// AUTO-GENERATED FILE PLEASE DO NOT MODIFY MANUALLY
/* eslint-disable */
// @ts-nocheck

import type { Abi, AbiType, GreyCat } from '../../index.js';
import { GCObject, GCEnum, std_n } from '../../index.js';
import * as std from './index.js';

// module: util.gcl
export class Iban extends std_n.util.Iban {
  static override readonly _type = 'util::Iban';

  public static create(abi: Abi): Iban {
    return new Iban(abi.libs_by_name.get(std.name)!.mapped[81]);
  }
}

export class TimeWindow extends std_n.util.TimeWindow {
  static override readonly _type = 'util::TimeWindow';

  public static create(abi: Abi): TimeWindow {
    return new TimeWindow(abi.libs_by_name.get(std.name)!.mapped[82]);
  }
}

export class ProgressTracker extends std_n.util.ProgressTracker {
  static override readonly _type = 'util::ProgressTracker';

  public static create(abi: Abi): ProgressTracker {
    return new ProgressTracker(abi.libs_by_name.get(std.name)!.mapped[83]);
  }
}

export class GaussianProfile extends std_n.util.GaussianProfile {
  static override readonly _type = 'util::GaussianProfile';

  public static create(abi: Abi): GaussianProfile {
    return new GaussianProfile(abi.libs_by_name.get(std.name)!.mapped[84]);
  }
}

export class HistogramF64 extends std_n.util.HistogramF64 {
  static override readonly _type = 'util::HistogramF64';

  public static create(abi: Abi): HistogramF64 {
    return new HistogramF64(abi.libs_by_name.get(std.name)!.mapped[85]);
  }
}

export class NdEncoding extends GCObject {
  static readonly _type = 'util::NdEncoding';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  create(abi: Abi): NdEncoding {
    return new NdEncoding(abi.libs_by_name.get(std.name)!.mapped[86]);
  }
}

export class HistogramBucket extends GCEnum {
  static readonly _type = 'util::HistogramBucket';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public static from(abi: Abi): std.util.HistogramBucket {
    const t = abi.libs_by_name.get(std.name)!.mapped[87];
    return t.enum_values![t.generated_offsets[0]] as std.util.HistogramBucket;
  }
  public static to(abi: Abi): std.util.HistogramBucket {
    const t = abi.libs_by_name.get(std.name)!.mapped[87];
    return t.enum_values![t.generated_offsets[1]] as std.util.HistogramBucket;
  }
  public static count(abi: Abi): std.util.HistogramBucket {
    const t = abi.libs_by_name.get(std.name)!.mapped[87];
    return t.enum_values![t.generated_offsets[2]] as std.util.HistogramBucket;
  }
  public static percentage(abi: Abi): std.util.HistogramBucket {
    const t = abi.libs_by_name.get(std.name)!.mapped[87];
    return t.enum_values![t.generated_offsets[3]] as std.util.HistogramBucket;
  }
  create(abi: Abi): HistogramBucket {
    return new HistogramBucket(abi.libs_by_name.get(std.name)!.mapped[87]);
  }
}

export class HistogramI64 extends std_n.util.HistogramI64 {
  static override readonly _type = 'util::HistogramI64';

  public static create(abi: Abi): HistogramI64 {
    return new HistogramI64(abi.libs_by_name.get(std.name)!.mapped[88]);
  }
}

export class Assert extends GCObject {
  static readonly _type = 'util::Assert';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  create(abi: Abi): Assert {
    return new Assert(abi.libs_by_name.get(std.name)!.mapped[89]);
  }
}

export class BoxPlot<T> extends GCObject {
  static readonly _type = 'util::BoxPlot';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_min(): any {
    return super.get(super.type.generated_offsets[0]);
  }
  public set_min(v: any) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_max(): any {
    return super.get(super.type.generated_offsets[1]);
  }
  public set_max(v: any) {
    super.set(super.type.generated_offsets[1], v);
  }
  public get_whiskerLow(): any {
    return super.get(super.type.generated_offsets[2]);
  }
  public set_whiskerLow(v: any) {
    super.set(super.type.generated_offsets[2], v);
  }
  public get_whiskerHigh(): any {
    return super.get(super.type.generated_offsets[3]);
  }
  public set_whiskerHigh(v: any) {
    super.set(super.type.generated_offsets[3], v);
  }
  public get_percentile1(): any {
    return super.get(super.type.generated_offsets[4]);
  }
  public set_percentile1(v: any) {
    super.set(super.type.generated_offsets[4], v);
  }
  public get_percentile5(): any {
    return super.get(super.type.generated_offsets[5]);
  }
  public set_percentile5(v: any) {
    super.set(super.type.generated_offsets[5], v);
  }
  public get_percentile25(): any {
    return super.get(super.type.generated_offsets[6]);
  }
  public set_percentile25(v: any) {
    super.set(super.type.generated_offsets[6], v);
  }
  public get_percentile50(): any {
    return super.get(super.type.generated_offsets[7]);
  }
  public set_percentile50(v: any) {
    super.set(super.type.generated_offsets[7], v);
  }
  public get_percentile75(): any {
    return super.get(super.type.generated_offsets[8]);
  }
  public set_percentile75(v: any) {
    super.set(super.type.generated_offsets[8], v);
  }
  public get_percentile95(): any {
    return super.get(super.type.generated_offsets[9]);
  }
  public set_percentile95(v: any) {
    super.set(super.type.generated_offsets[9], v);
  }
  public get_percentile99(): any {
    return super.get(super.type.generated_offsets[10]);
  }
  public set_percentile99(v: any) {
    super.set(super.type.generated_offsets[10], v);
  }
  public get_countOutliersLow(): bigint | number {
    return super.get(super.type.generated_offsets[11]) as bigint | number;
  }
  public set_countOutliersLow(v: bigint | number) {
    super.set(super.type.generated_offsets[11], v);
  }
  public get_countOutliersHigh(): bigint | number {
    return super.get(super.type.generated_offsets[12]) as bigint | number;
  }
  public set_countOutliersHigh(v: bigint | number) {
    super.set(super.type.generated_offsets[12], v);
  }
  public get_percentageOutliersLow(): number {
    return super.get(super.type.generated_offsets[13]) as number;
  }
  public set_percentageOutliersLow(v: number) {
    super.set(super.type.generated_offsets[13], v);
  }
  public get_percentageOutliersHigh(): number {
    return super.get(super.type.generated_offsets[14]) as number;
  }
  public set_percentageOutliersHigh(v: number) {
    super.set(super.type.generated_offsets[14], v);
  }
  public get_sum(): number {
    return super.get(super.type.generated_offsets[15]) as number;
  }
  public set_sum(v: number) {
    super.set(super.type.generated_offsets[15], v);
  }
  public get_avg(): number {
    return super.get(super.type.generated_offsets[16]) as number;
  }
  public set_avg(v: number) {
    super.set(super.type.generated_offsets[16], v);
  }
  public get_std(): number {
    return super.get(super.type.generated_offsets[17]) as number;
  }
  public set_std(v: number) {
    super.set(super.type.generated_offsets[17], v);
  }
  public get_size(): bigint | number {
    return super.get(super.type.generated_offsets[18]) as bigint | number;
  }
  public set_size(v: bigint | number) {
    super.set(super.type.generated_offsets[18], v);
  }
  create(abi: Abi, min: any, max: any, whiskerLow: any, whiskerHigh: any, percentile1: any, percentile5: any, percentile25: any, percentile50: any, percentile75: any, percentile95: any, percentile99: any, countOutliersLow: bigint | number, countOutliersHigh: bigint | number, percentageOutliersLow: number, percentageOutliersHigh: number, sum: number, avg: number, std: number, size: bigint | number): BoxPlot {
    return new BoxPlot(abi.libs_by_name.get(std.name)!.mapped[90], min, max, whiskerLow, whiskerHigh, percentile1, percentile5, percentile25, percentile50, percentile75, percentile95, percentile99, countOutliersLow, countOutliersHigh, percentageOutliersLow, percentageOutliersHigh, sum, avg, std, size);
  }
}

export class Quantizer extends std_n.util.Quantizer {
  static override readonly _type = 'util::Quantizer';

  public static create(abi: Abi): Quantizer {
    return new Quantizer(abi.libs_by_name.get(std.name)!.mapped[91]);
  }
}

export class Gaussian extends std_n.util.Gaussian {
  static override readonly _type = 'util::Gaussian';

  public static create(abi: Abi): Gaussian {
    return new Gaussian(abi.libs_by_name.get(std.name)!.mapped[92]);
  }
}

export class Histogram<T> extends GCObject {
  static readonly _type = 'util::Histogram';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  create(abi: Abi): Histogram {
    return new Histogram(abi.libs_by_name.get(std.name)!.mapped[93]);
  }
}

export class Queue<T> extends std_n.util.Queue {
  static override readonly _type = 'util::Queue';

  public static create(abi: Abi): Queue {
    return new Queue(abi.libs_by_name.get(std.name)!.mapped[94]);
  }
}

export class BoxPlotI64 extends GCObject {
  static readonly _type = 'util::BoxPlotI64';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_min(): any {
    return super.get(super.type.generated_offsets[0]);
  }
  public set_min(v: any) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_max(): any {
    return super.get(super.type.generated_offsets[1]);
  }
  public set_max(v: any) {
    super.set(super.type.generated_offsets[1], v);
  }
  public get_whiskerLow(): any {
    return super.get(super.type.generated_offsets[2]);
  }
  public set_whiskerLow(v: any) {
    super.set(super.type.generated_offsets[2], v);
  }
  public get_whiskerHigh(): any {
    return super.get(super.type.generated_offsets[3]);
  }
  public set_whiskerHigh(v: any) {
    super.set(super.type.generated_offsets[3], v);
  }
  public get_percentile1(): any {
    return super.get(super.type.generated_offsets[4]);
  }
  public set_percentile1(v: any) {
    super.set(super.type.generated_offsets[4], v);
  }
  public get_percentile5(): any {
    return super.get(super.type.generated_offsets[5]);
  }
  public set_percentile5(v: any) {
    super.set(super.type.generated_offsets[5], v);
  }
  public get_percentile25(): any {
    return super.get(super.type.generated_offsets[6]);
  }
  public set_percentile25(v: any) {
    super.set(super.type.generated_offsets[6], v);
  }
  public get_percentile50(): any {
    return super.get(super.type.generated_offsets[7]);
  }
  public set_percentile50(v: any) {
    super.set(super.type.generated_offsets[7], v);
  }
  public get_percentile75(): any {
    return super.get(super.type.generated_offsets[8]);
  }
  public set_percentile75(v: any) {
    super.set(super.type.generated_offsets[8], v);
  }
  public get_percentile95(): any {
    return super.get(super.type.generated_offsets[9]);
  }
  public set_percentile95(v: any) {
    super.set(super.type.generated_offsets[9], v);
  }
  public get_percentile99(): any {
    return super.get(super.type.generated_offsets[10]);
  }
  public set_percentile99(v: any) {
    super.set(super.type.generated_offsets[10], v);
  }
  public get_countOutliersLow(): bigint | number {
    return super.get(super.type.generated_offsets[11]) as bigint | number;
  }
  public set_countOutliersLow(v: bigint | number) {
    super.set(super.type.generated_offsets[11], v);
  }
  public get_countOutliersHigh(): bigint | number {
    return super.get(super.type.generated_offsets[12]) as bigint | number;
  }
  public set_countOutliersHigh(v: bigint | number) {
    super.set(super.type.generated_offsets[12], v);
  }
  public get_percentageOutliersLow(): number {
    return super.get(super.type.generated_offsets[13]) as number;
  }
  public set_percentageOutliersLow(v: number) {
    super.set(super.type.generated_offsets[13], v);
  }
  public get_percentageOutliersHigh(): number {
    return super.get(super.type.generated_offsets[14]) as number;
  }
  public set_percentageOutliersHigh(v: number) {
    super.set(super.type.generated_offsets[14], v);
  }
  public get_sum(): number {
    return super.get(super.type.generated_offsets[15]) as number;
  }
  public set_sum(v: number) {
    super.set(super.type.generated_offsets[15], v);
  }
  public get_avg(): number {
    return super.get(super.type.generated_offsets[16]) as number;
  }
  public set_avg(v: number) {
    super.set(super.type.generated_offsets[16], v);
  }
  public get_std(): number {
    return super.get(super.type.generated_offsets[17]) as number;
  }
  public set_std(v: number) {
    super.set(super.type.generated_offsets[17], v);
  }
  public get_size(): bigint | number {
    return super.get(super.type.generated_offsets[18]) as bigint | number;
  }
  public set_size(v: bigint | number) {
    super.set(super.type.generated_offsets[18], v);
  }
  create(abi: Abi, min: any, max: any, whiskerLow: any, whiskerHigh: any, percentile1: any, percentile5: any, percentile25: any, percentile50: any, percentile75: any, percentile95: any, percentile99: any, countOutliersLow: bigint | number, countOutliersHigh: bigint | number, percentageOutliersLow: number, percentageOutliersHigh: number, sum: number, avg: number, std: number, size: bigint | number): BoxPlotI64 {
    return new BoxPlotI64(abi.libs_by_name.get(std.name)!.mapped[95], min, max, whiskerLow, whiskerHigh, percentile1, percentile5, percentile25, percentile50, percentile75, percentile95, percentile99, countOutliersLow, countOutliersHigh, percentageOutliersLow, percentageOutliersHigh, sum, avg, std, size);
  }
}

export class Random extends GCObject {
  static readonly _type = 'util::Random';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_seed(): bigint | number {
    return super.get(super.type.generated_offsets[0]) as bigint | number;
  }
  public set_seed(v: bigint | number) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_v(): number {
    return super.get(super.type.generated_offsets[1]) as number;
  }
  public set_v(v: number) {
    super.set(super.type.generated_offsets[1], v);
  }
  create(abi: Abi, seed: bigint | number, v: number): Random {
    return new Random(abi.libs_by_name.get(std.name)!.mapped[96], seed, v);
  }
}

export class ByteArray extends std_n.util.ByteArray {
  static override readonly _type = 'util::ByteArray';

  public static create(abi: Abi): ByteArray {
    return new ByteArray(abi.libs_by_name.get(std.name)!.mapped[97]);
  }
}

export class BoxPlotF64 extends GCObject {
  static readonly _type = 'util::BoxPlotF64';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_min(): any {
    return super.get(super.type.generated_offsets[0]);
  }
  public set_min(v: any) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_max(): any {
    return super.get(super.type.generated_offsets[1]);
  }
  public set_max(v: any) {
    super.set(super.type.generated_offsets[1], v);
  }
  public get_whiskerLow(): any {
    return super.get(super.type.generated_offsets[2]);
  }
  public set_whiskerLow(v: any) {
    super.set(super.type.generated_offsets[2], v);
  }
  public get_whiskerHigh(): any {
    return super.get(super.type.generated_offsets[3]);
  }
  public set_whiskerHigh(v: any) {
    super.set(super.type.generated_offsets[3], v);
  }
  public get_percentile1(): any {
    return super.get(super.type.generated_offsets[4]);
  }
  public set_percentile1(v: any) {
    super.set(super.type.generated_offsets[4], v);
  }
  public get_percentile5(): any {
    return super.get(super.type.generated_offsets[5]);
  }
  public set_percentile5(v: any) {
    super.set(super.type.generated_offsets[5], v);
  }
  public get_percentile25(): any {
    return super.get(super.type.generated_offsets[6]);
  }
  public set_percentile25(v: any) {
    super.set(super.type.generated_offsets[6], v);
  }
  public get_percentile50(): any {
    return super.get(super.type.generated_offsets[7]);
  }
  public set_percentile50(v: any) {
    super.set(super.type.generated_offsets[7], v);
  }
  public get_percentile75(): any {
    return super.get(super.type.generated_offsets[8]);
  }
  public set_percentile75(v: any) {
    super.set(super.type.generated_offsets[8], v);
  }
  public get_percentile95(): any {
    return super.get(super.type.generated_offsets[9]);
  }
  public set_percentile95(v: any) {
    super.set(super.type.generated_offsets[9], v);
  }
  public get_percentile99(): any {
    return super.get(super.type.generated_offsets[10]);
  }
  public set_percentile99(v: any) {
    super.set(super.type.generated_offsets[10], v);
  }
  public get_countOutliersLow(): bigint | number {
    return super.get(super.type.generated_offsets[11]) as bigint | number;
  }
  public set_countOutliersLow(v: bigint | number) {
    super.set(super.type.generated_offsets[11], v);
  }
  public get_countOutliersHigh(): bigint | number {
    return super.get(super.type.generated_offsets[12]) as bigint | number;
  }
  public set_countOutliersHigh(v: bigint | number) {
    super.set(super.type.generated_offsets[12], v);
  }
  public get_percentageOutliersLow(): number {
    return super.get(super.type.generated_offsets[13]) as number;
  }
  public set_percentageOutliersLow(v: number) {
    super.set(super.type.generated_offsets[13], v);
  }
  public get_percentageOutliersHigh(): number {
    return super.get(super.type.generated_offsets[14]) as number;
  }
  public set_percentageOutliersHigh(v: number) {
    super.set(super.type.generated_offsets[14], v);
  }
  public get_sum(): number {
    return super.get(super.type.generated_offsets[15]) as number;
  }
  public set_sum(v: number) {
    super.set(super.type.generated_offsets[15], v);
  }
  public get_avg(): number {
    return super.get(super.type.generated_offsets[16]) as number;
  }
  public set_avg(v: number) {
    super.set(super.type.generated_offsets[16], v);
  }
  public get_std(): number {
    return super.get(super.type.generated_offsets[17]) as number;
  }
  public set_std(v: number) {
    super.set(super.type.generated_offsets[17], v);
  }
  public get_size(): bigint | number {
    return super.get(super.type.generated_offsets[18]) as bigint | number;
  }
  public set_size(v: bigint | number) {
    super.set(super.type.generated_offsets[18], v);
  }
  create(abi: Abi, min: any, max: any, whiskerLow: any, whiskerHigh: any, percentile1: any, percentile5: any, percentile25: any, percentile50: any, percentile75: any, percentile95: any, percentile99: any, countOutliersLow: bigint | number, countOutliersHigh: bigint | number, percentageOutliersLow: number, percentageOutliersHigh: number, sum: number, avg: number, std: number, size: bigint | number): BoxPlotF64 {
    return new BoxPlotF64(abi.libs_by_name.get(std.name)!.mapped[98], min, max, whiskerLow, whiskerHigh, percentile1, percentile5, percentile25, percentile50, percentile75, percentile95, percentile99, countOutliersLow, countOutliersHigh, percentageOutliersLow, percentageOutliersHigh, sum, avg, std, size);
  }
}

export class Crypto extends GCObject {
  static readonly _type = 'util::Crypto';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  create(abi: Abi): Crypto {
    return new Crypto(abi.libs_by_name.get(std.name)!.mapped[99]);
  }
}

export class Buffer extends std_n.util.Buffer {
  static override readonly _type = 'util::Buffer';

  public static create(abi: Abi): Buffer {
    return new Buffer(abi.libs_by_name.get(std.name)!.mapped[100]);
  }
}

export class SlidingWindow extends std_n.util.SlidingWindow {
  static override readonly _type = 'util::SlidingWindow';

  public static create(abi: Abi): SlidingWindow {
    return new SlidingWindow(abi.libs_by_name.get(std.name)!.mapped[101]);
  }
}

export async function resolveAll(greycat: GreyCat, nodes: Array<std.core.node>, signal?: AbortSignal): Promise<Array<any>> {
  return greycat.call('util::resolveAll', [nodes], signal);
}
