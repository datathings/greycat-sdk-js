// AUTO-GENERATED FILE PLEASE DO NOT MODIFY MANUALLY
/* eslint-disable */
// @ts-nocheck

import * as $sdk from '@greycat/sdk';
import * as $std from '../index.js';
import * as std_n from '../../std_n/index.js';

// module: util.gcl
export class Gaussian extends std_n.util.Gaussian {}

export class Quantizer extends std_n.util.Quantizer {}

export class ByteArray extends std_n.util.ByteArray {}

export class GaussianProfile extends std_n.util.GaussianProfile {}

export class BoxPlotF64 extends $sdk.GCObject {
  static readonly _type = 'util::BoxPlotF64';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
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
 static create($g: $sdk.GreyCat, min: any, max: any, whiskerLow: any, whiskerHigh: any, percentile1: any, percentile5: any, percentile25: any, percentile50: any, percentile75: any, percentile95: any, percentile99: any, countOutliersLow: bigint | number, countOutliersHigh: bigint | number, percentageOutliersLow: number, percentageOutliersHigh: number, sum: number, avg: number, std: number, size: bigint | number): BoxPlotF64 {
    return new BoxPlotF64($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[90], min, max, whiskerLow, whiskerHigh, percentile1, percentile5, percentile25, percentile50, percentile75, percentile95, percentile99, countOutliersLow, countOutliersHigh, percentageOutliersLow, percentageOutliersHigh, sum, avg, std, size);
  }
}

export class HistogramI64 extends std_n.util.HistogramI64 {}

export class Random extends $sdk.GCObject {
  static readonly _type = 'util::Random';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
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
 static create($g: $sdk.GreyCat, seed: bigint | number, v: number): Random {
    return new Random($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[92], seed, v);
  }
}

export class NdEncoding extends $sdk.GCObject {
  static readonly _type = 'util::NdEncoding';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

 static create($g: $sdk.GreyCat): NdEncoding {
    return new NdEncoding($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[93]);
  }
}

export class HistogramBucket extends $sdk.GCEnum {
  static readonly _type = 'util::HistogramBucket';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes[0], attributes[1], attributes[2]);
  }

  public static from($g: $sdk.GreyCat): $std.util.HistogramBucket {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[94];
    return t.enum_values![t.generated_offsets[0]] as $std.util.HistogramBucket;
  }
  public static to($g: $sdk.GreyCat): $std.util.HistogramBucket {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[94];
    return t.enum_values![t.generated_offsets[1]] as $std.util.HistogramBucket;
  }
  public static count($g: $sdk.GreyCat): $std.util.HistogramBucket {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[94];
    return t.enum_values![t.generated_offsets[2]] as $std.util.HistogramBucket;
  }
  public static percentage($g: $sdk.GreyCat): $std.util.HistogramBucket {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[94];
    return t.enum_values![t.generated_offsets[3]] as $std.util.HistogramBucket;
  }
 static create($g: $sdk.GreyCat): HistogramBucket {
    return new HistogramBucket($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[94]);
  }
}

export class Iban extends std_n.util.Iban {}

export class HistogramF64 extends std_n.util.HistogramF64 {}

export class Crypto extends $sdk.GCObject {
  static readonly _type = 'util::Crypto';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

 static create($g: $sdk.GreyCat): Crypto {
    return new Crypto($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[97]);
  }
}

export class TimeWindow extends std_n.util.TimeWindow {}

export class SlidingWindow extends std_n.util.SlidingWindow {}

export class Histogram<T = any> extends $sdk.GCObject {
  static readonly _type = 'util::Histogram';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

 static create($g: $sdk.GreyCat): Histogram {
    return new Histogram($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[100]);
  }
}

export class BoxPlotI64 extends $sdk.GCObject {
  static readonly _type = 'util::BoxPlotI64';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
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
 static create($g: $sdk.GreyCat, min: any, max: any, whiskerLow: any, whiskerHigh: any, percentile1: any, percentile5: any, percentile25: any, percentile50: any, percentile75: any, percentile95: any, percentile99: any, countOutliersLow: bigint | number, countOutliersHigh: bigint | number, percentageOutliersLow: number, percentageOutliersHigh: number, sum: number, avg: number, std: number, size: bigint | number): BoxPlotI64 {
    return new BoxPlotI64($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[101], min, max, whiskerLow, whiskerHigh, percentile1, percentile5, percentile25, percentile50, percentile75, percentile95, percentile99, countOutliersLow, countOutliersHigh, percentageOutliersLow, percentageOutliersHigh, sum, avg, std, size);
  }
}

export class BoxPlot<T = any> extends $sdk.GCObject {
  static readonly _type = 'util::BoxPlot';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
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
 static create($g: $sdk.GreyCat, min: any, max: any, whiskerLow: any, whiskerHigh: any, percentile1: any, percentile5: any, percentile25: any, percentile50: any, percentile75: any, percentile95: any, percentile99: any, countOutliersLow: bigint | number, countOutliersHigh: bigint | number, percentageOutliersLow: number, percentageOutliersHigh: number, sum: number, avg: number, std: number, size: bigint | number): BoxPlot {
    return new BoxPlot($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[102], min, max, whiskerLow, whiskerHigh, percentile1, percentile5, percentile25, percentile50, percentile75, percentile95, percentile99, countOutliersLow, countOutliersHigh, percentageOutliersLow, percentageOutliersHigh, sum, avg, std, size);
  }
}

export class Buffer extends std_n.util.Buffer {}

export class Assert extends $sdk.GCObject {
  static readonly _type = 'util::Assert';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

 static create($g: $sdk.GreyCat): Assert {
    return new Assert($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[104]);
  }
}

export class Queue extends std_n.util.Queue {}

export class ProgressTracker extends std_n.util.ProgressTracker {}

export async function resolveAll($g: $sdk.GreyCat, nodes: Array<$sdk.std.core.node>, $signal?: AbortSignal): Promise<Array<any>> {
  return $g.call('util::resolveAll', [nodes], $signal);
}
