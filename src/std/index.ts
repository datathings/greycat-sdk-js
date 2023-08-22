// AUTO-GENERATED FILE PLEASE DO NOT MODIFY MANUALLY
/* eslint-disable */
// @ts-nocheck

import * as $sdk from '@greycat/sdk';
import * as std_n from '../std_n/index.js';

export namespace core {
export class TableColumnMeta extends $sdk.GCObject {
  static readonly _type = 'core::TableColumnMeta';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get type(): string | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set type(v: string | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get size(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set size(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get index(): boolean {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set index(v: boolean) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get min(): any | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set min(v: any | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get max(): any | null {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set max(v: any | null) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get avg(): any | null {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set avg(v: any | null) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public get std(): any | null {
    return this.$attrs[this.$type.generated_offsets[6]];
  }
  public set std(v: any | null) {
    this.$attrs[this.$type.generated_offsets[6]] = v;
  }
  static create($g: $sdk.GreyCat, type: string | null, size: bigint | number, index: boolean, min: any | null, max: any | null, avg: any | null, std: any | null): TableColumnMeta {
    return new TableColumnMeta($g.abi.libs_by_name.get(stdlib.name)!.mapped[0], type, size, index, min, max, avg, std);
  }
}

export class SamplingMode extends $sdk.GCEnum {
  static readonly _type = 'core::SamplingMode';

  public static fixed($g: $sdk.GreyCat): core.SamplingMode {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[1];
    return t.enum_values![t.generated_offsets[0]] as core.SamplingMode;
  }
  public static fixed_reg($g: $sdk.GreyCat): core.SamplingMode {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[1];
    return t.enum_values![t.generated_offsets[1]] as core.SamplingMode;
  }
  public static adaptative($g: $sdk.GreyCat): core.SamplingMode {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[1];
    return t.enum_values![t.generated_offsets[2]] as core.SamplingMode;
  }
  public static dense($g: $sdk.GreyCat): core.SamplingMode {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[1];
    return t.enum_values![t.generated_offsets[3]] as core.SamplingMode;
  }
}

export class nodeList extends std_n.core.nodeList {}

export class Table extends std_n.core.Table {}

export class DatePart extends $sdk.GCEnum {
  static readonly _type = 'core::DatePart';

  public static years($g: $sdk.GreyCat): core.DatePart {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[4];
    return t.enum_values![t.generated_offsets[0]] as core.DatePart;
  }
  public static months($g: $sdk.GreyCat): core.DatePart {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[4];
    return t.enum_values![t.generated_offsets[1]] as core.DatePart;
  }
  public static days($g: $sdk.GreyCat): core.DatePart {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[4];
    return t.enum_values![t.generated_offsets[2]] as core.DatePart;
  }
  public static hours($g: $sdk.GreyCat): core.DatePart {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[4];
    return t.enum_values![t.generated_offsets[3]] as core.DatePart;
  }
  public static minutes($g: $sdk.GreyCat): core.DatePart {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[4];
    return t.enum_values![t.generated_offsets[4]] as core.DatePart;
  }
  public static seconds($g: $sdk.GreyCat): core.DatePart {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[4];
    return t.enum_values![t.generated_offsets[5]] as core.DatePart;
  }
  public static microseconds($g: $sdk.GreyCat): core.DatePart {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[4];
    return t.enum_values![t.generated_offsets[6]] as core.DatePart;
  }
}

export class GeoCircle extends $sdk.GCObject {
  static readonly _type = 'core::GeoCircle';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get center(): $sdk.std.core.geo {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set center(v: $sdk.std.core.geo) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get radius(): number {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set radius(v: number) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, center: $sdk.std.core.geo, radius: number): GeoCircle {
    return new GeoCircle($g.abi.libs_by_name.get(stdlib.name)!.mapped[5], center, radius);
  }
}

export class nodeIndexBucket extends std_n.core.nodeIndexBucket {}

export class time extends std_n.core.time {}

export class nodeTime extends std_n.core.nodeTime {}

export class NodeTimeInfo extends $sdk.GCObject {
  static readonly _type = 'core::NodeTimeInfo';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get size(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set size(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get from(): $sdk.std.core.time | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set from(v: $sdk.std.core.time | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get to(): $sdk.std.core.time | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set to(v: $sdk.std.core.time | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  static create($g: $sdk.GreyCat, size: bigint | number, from: $sdk.std.core.time | null, to: $sdk.std.core.time | null): NodeTimeInfo {
    return new NodeTimeInfo($g.abi.libs_by_name.get(stdlib.name)!.mapped[9], size, from, to);
  }
}

export class ErrorCode extends $sdk.GCEnum {
  static readonly _type = 'core::ErrorCode';

  public static none($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[10];
    return t.enum_values![t.generated_offsets[0]] as core.ErrorCode;
  }
  public static too_deep_workspace($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[10];
    return t.enum_values![t.generated_offsets[1]] as core.ErrorCode;
  }
  public static too_deep_iterator($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[10];
    return t.enum_values![t.generated_offsets[2]] as core.ErrorCode;
  }
  public static wrong_operand($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[10];
    return t.enum_values![t.generated_offsets[3]] as core.ErrorCode;
  }
  public static wrong_params($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[10];
    return t.enum_values![t.generated_offsets[4]] as core.ErrorCode;
  }
  public static wrong_param_type($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[10];
    return t.enum_values![t.generated_offsets[5]] as core.ErrorCode;
  }
  public static wrong_numeric($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[10];
    return t.enum_values![t.generated_offsets[6]] as core.ErrorCode;
  }
  public static wrong_state($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[10];
    return t.enum_values![t.generated_offsets[7]] as core.ErrorCode;
  }
  public static wrong_null($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[10];
    return t.enum_values![t.generated_offsets[8]] as core.ErrorCode;
  }
  public static unresolved_ref($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[10];
    return t.enum_values![t.generated_offsets[9]] as core.ErrorCode;
  }
  public static assign_error($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[10];
    return t.enum_values![t.generated_offsets[10]] as core.ErrorCode;
  }
  public static interrupted($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[10];
    return t.enum_values![t.generated_offsets[11]] as core.ErrorCode;
  }
  public static throw_($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[10];
    return t.enum_values![t.generated_offsets[12]] as core.ErrorCode;
  }
  public static wrong_type($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[10];
    return t.enum_values![t.generated_offsets[13]] as core.ErrorCode;
  }
  public static wrong_dimension($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[10];
    return t.enum_values![t.generated_offsets[14]] as core.ErrorCode;
  }
  public static unsupported_operation($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[10];
    return t.enum_values![t.generated_offsets[15]] as core.ErrorCode;
  }
  public static unsupported_type($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[10];
    return t.enum_values![t.generated_offsets[16]] as core.ErrorCode;
  }
  public static dimensions_mismatch($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[10];
    return t.enum_values![t.generated_offsets[17]] as core.ErrorCode;
  }
  public static timeout($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[10];
    return t.enum_values![t.generated_offsets[18]] as core.ErrorCode;
  }
  public static forbidden($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[10];
    return t.enum_values![t.generated_offsets[19]] as core.ErrorCode;
  }
  public static runtime_error($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[10];
    return t.enum_values![t.generated_offsets[20]] as core.ErrorCode;
  }
}

export class Error extends std_n.core.Error {}

export class Map extends std_n.core.Map {}

export class geo extends std_n.core.geo {}

export class ti2d extends std_n.core.ti2d {}

export class tf3d extends std_n.core.tf3d {}

export class TensorType extends $sdk.GCEnum {
  static readonly _type = 'core::TensorType';

  public static i32($g: $sdk.GreyCat): core.TensorType {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[16];
    return t.enum_values![t.generated_offsets[0]] as core.TensorType;
  }
  public static i64($g: $sdk.GreyCat): core.TensorType {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[16];
    return t.enum_values![t.generated_offsets[1]] as core.TensorType;
  }
  public static f32($g: $sdk.GreyCat): core.TensorType {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[16];
    return t.enum_values![t.generated_offsets[2]] as core.TensorType;
  }
  public static f64($g: $sdk.GreyCat): core.TensorType {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[16];
    return t.enum_values![t.generated_offsets[3]] as core.TensorType;
  }
  public static c64($g: $sdk.GreyCat): core.TensorType {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[16];
    return t.enum_values![t.generated_offsets[4]] as core.TensorType;
  }
  public static c128($g: $sdk.GreyCat): core.TensorType {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[16];
    return t.enum_values![t.generated_offsets[5]] as core.TensorType;
  }
}

export class GeoPoly extends $sdk.GCObject {
  static readonly _type = 'core::GeoPoly';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get points(): Array<$sdk.std.core.geo> {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set points(v: Array<$sdk.std.core.geo>) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  static create($g: $sdk.GreyCat, points: Array<$sdk.std.core.geo>): GeoPoly {
    return new GeoPoly($g.abi.libs_by_name.get(stdlib.name)!.mapped[17], points);
  }
}

export class DurationUnit extends $sdk.GCEnum {
  static readonly _type = 'core::DurationUnit';

  public static microseconds($g: $sdk.GreyCat): core.DurationUnit {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[18];
    return t.enum_values![t.generated_offsets[0]] as core.DurationUnit;
  }
  public static milliseconds($g: $sdk.GreyCat): core.DurationUnit {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[18];
    return t.enum_values![t.generated_offsets[1]] as core.DurationUnit;
  }
  public static seconds($g: $sdk.GreyCat): core.DurationUnit {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[18];
    return t.enum_values![t.generated_offsets[2]] as core.DurationUnit;
  }
  public static minutes($g: $sdk.GreyCat): core.DurationUnit {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[18];
    return t.enum_values![t.generated_offsets[3]] as core.DurationUnit;
  }
  public static hours($g: $sdk.GreyCat): core.DurationUnit {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[18];
    return t.enum_values![t.generated_offsets[4]] as core.DurationUnit;
  }
  public static days($g: $sdk.GreyCat): core.DurationUnit {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[18];
    return t.enum_values![t.generated_offsets[5]] as core.DurationUnit;
  }
  public static weeks($g: $sdk.GreyCat): core.DurationUnit {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[18];
    return t.enum_values![t.generated_offsets[6]] as core.DurationUnit;
  }
  public static months($g: $sdk.GreyCat): core.DurationUnit {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[18];
    return t.enum_values![t.generated_offsets[7]] as core.DurationUnit;
  }
  public static years($g: $sdk.GreyCat): core.DurationUnit {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[18];
    return t.enum_values![t.generated_offsets[8]] as core.DurationUnit;
  }
}

export class duration extends std_n.core.duration {}

export class node extends std_n.core.node {}

export class Date extends std_n.core.Date {}

export class tf4d extends std_n.core.tf4d {}

export class Tensor extends std_n.core.Tensor {}

export class ti6d extends std_n.core.ti6d {}

export class ti4d extends std_n.core.ti4d {}

export class ti10d extends std_n.core.ti10d {}

export class TimeZone extends $sdk.GCEnum {
  static readonly _type = 'core::TimeZone';

  public static Africa_Accra($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[0]] as core.TimeZone;
  }
  public static Africa_Bamako($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[1]] as core.TimeZone;
  }
  public static Africa_Banjul($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[2]] as core.TimeZone;
  }
  public static Africa_Conakry($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[3]] as core.TimeZone;
  }
  public static Africa_Dakar($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[4]] as core.TimeZone;
  }
  public static Africa_Freetown($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[5]] as core.TimeZone;
  }
  public static Africa_Lome($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[6]] as core.TimeZone;
  }
  public static Africa_Nouakchott($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[7]] as core.TimeZone;
  }
  public static Africa_Ouagadougou($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[8]] as core.TimeZone;
  }
  public static Africa_Timbuktu($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[9]] as core.TimeZone;
  }
  public static Atlantic_Reykjavik($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[10]] as core.TimeZone;
  }
  public static Atlantic_St_Helena($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[11]] as core.TimeZone;
  }
  public static Iceland($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[12]] as core.TimeZone;
  }
  public static Egypt($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[13]] as core.TimeZone;
  }
  public static Africa_Maseru($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[14]] as core.TimeZone;
  }
  public static Africa_Mbabane($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[15]] as core.TimeZone;
  }
  public static Africa_Bangui($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[16]] as core.TimeZone;
  }
  public static Africa_Brazzaville($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[17]] as core.TimeZone;
  }
  public static Africa_Douala($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[18]] as core.TimeZone;
  }
  public static Africa_Kinshasa($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[19]] as core.TimeZone;
  }
  public static Africa_Libreville($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[20]] as core.TimeZone;
  }
  public static Africa_Luanda($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[21]] as core.TimeZone;
  }
  public static Africa_Malabo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[22]] as core.TimeZone;
  }
  public static Africa_Niamey($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[23]] as core.TimeZone;
  }
  public static Africa_Porto_Novo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[24]] as core.TimeZone;
  }
  public static Africa_Blantyre($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[25]] as core.TimeZone;
  }
  public static Africa_Bujumbura($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[26]] as core.TimeZone;
  }
  public static Africa_Gaborone($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[27]] as core.TimeZone;
  }
  public static Africa_Harare($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[28]] as core.TimeZone;
  }
  public static Africa_Kigali($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[29]] as core.TimeZone;
  }
  public static Africa_Lubumbashi($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[30]] as core.TimeZone;
  }
  public static Africa_Lusaka($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[31]] as core.TimeZone;
  }
  public static Africa_Addis_Ababa($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[32]] as core.TimeZone;
  }
  public static Africa_Asmara($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[33]] as core.TimeZone;
  }
  public static Africa_Asmera($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[34]] as core.TimeZone;
  }
  public static Africa_Dar_es_Salaam($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[35]] as core.TimeZone;
  }
  public static Africa_Djibouti($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[36]] as core.TimeZone;
  }
  public static Africa_Kampala($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[37]] as core.TimeZone;
  }
  public static Africa_Mogadishu($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[38]] as core.TimeZone;
  }
  public static Indian_Antananarivo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[39]] as core.TimeZone;
  }
  public static Indian_Comoro($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[40]] as core.TimeZone;
  }
  public static Indian_Mayotte($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[41]] as core.TimeZone;
  }
  public static Libya($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[42]] as core.TimeZone;
  }
  public static America_Atka($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[43]] as core.TimeZone;
  }
  public static US_Aleutian($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[44]] as core.TimeZone;
  }
  public static US_Alaska($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[45]] as core.TimeZone;
  }
  public static America_Buenos_Aires($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[46]] as core.TimeZone;
  }
  public static America_Argentina_ComodRivadavia($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[47]] as core.TimeZone;
  }
  public static America_Catamarca($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[48]] as core.TimeZone;
  }
  public static America_Cordoba($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[49]] as core.TimeZone;
  }
  public static America_Rosario($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[50]] as core.TimeZone;
  }
  public static America_Jujuy($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[51]] as core.TimeZone;
  }
  public static America_Mendoza($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[52]] as core.TimeZone;
  }
  public static US_Central($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[53]] as core.TimeZone;
  }
  public static America_Shiprock($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[54]] as core.TimeZone;
  }
  public static Navajo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[55]] as core.TimeZone;
  }
  public static US_Mountain($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[56]] as core.TimeZone;
  }
  public static US_Michigan($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[57]] as core.TimeZone;
  }
  public static America_Yellowknife($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[58]] as core.TimeZone;
  }
  public static Canada_Mountain($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[59]] as core.TimeZone;
  }
  public static Canada_Atlantic($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[60]] as core.TimeZone;
  }
  public static Cuba($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[61]] as core.TimeZone;
  }
  public static America_Fort_Wayne($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[62]] as core.TimeZone;
  }
  public static America_Indianapolis($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[63]] as core.TimeZone;
  }
  public static US_East_Indiana($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[64]] as core.TimeZone;
  }
  public static America_Knox_IN($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[65]] as core.TimeZone;
  }
  public static US_Indiana_Starke($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[66]] as core.TimeZone;
  }
  public static America_Pangnirtung($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[67]] as core.TimeZone;
  }
  public static Jamaica($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[68]] as core.TimeZone;
  }
  public static America_Louisville($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[69]] as core.TimeZone;
  }
  public static US_Pacific($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[70]] as core.TimeZone;
  }
  public static Brazil_West($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[71]] as core.TimeZone;
  }
  public static Mexico_BajaSur($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[72]] as core.TimeZone;
  }
  public static Mexico_General($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[73]] as core.TimeZone;
  }
  public static US_Eastern($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[74]] as core.TimeZone;
  }
  public static Brazil_DeNoronha($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[75]] as core.TimeZone;
  }
  public static America_Godthab($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[76]] as core.TimeZone;
  }
  public static America_Atikokan($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[77]] as core.TimeZone;
  }
  public static America_Cayman($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[78]] as core.TimeZone;
  }
  public static America_Coral_Harbour($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[79]] as core.TimeZone;
  }
  public static America_Creston($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[80]] as core.TimeZone;
  }
  public static US_Arizona($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[81]] as core.TimeZone;
  }
  public static America_Anguilla($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[82]] as core.TimeZone;
  }
  public static America_Antigua($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[83]] as core.TimeZone;
  }
  public static America_Aruba($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[84]] as core.TimeZone;
  }
  public static America_Blanc_Sablon($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[85]] as core.TimeZone;
  }
  public static America_Curacao($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[86]] as core.TimeZone;
  }
  public static America_Dominica($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[87]] as core.TimeZone;
  }
  public static America_Grenada($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[88]] as core.TimeZone;
  }
  public static America_Guadeloupe($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[89]] as core.TimeZone;
  }
  public static America_Kralendijk($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[90]] as core.TimeZone;
  }
  public static America_Lower_Princes($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[91]] as core.TimeZone;
  }
  public static America_Marigot($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[92]] as core.TimeZone;
  }
  public static America_Montserrat($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[93]] as core.TimeZone;
  }
  public static America_Port_of_Spain($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[94]] as core.TimeZone;
  }
  public static America_St_Barthelemy($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[95]] as core.TimeZone;
  }
  public static America_St_Kitts($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[96]] as core.TimeZone;
  }
  public static America_St_Lucia($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[97]] as core.TimeZone;
  }
  public static America_St_Thomas($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[98]] as core.TimeZone;
  }
  public static America_St_Vincent($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[99]] as core.TimeZone;
  }
  public static America_Tortola($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[100]] as core.TimeZone;
  }
  public static America_Virgin($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[101]] as core.TimeZone;
  }
  public static Canada_Saskatchewan($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[102]] as core.TimeZone;
  }
  public static America_Porto_Acre($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[103]] as core.TimeZone;
  }
  public static Brazil_Acre($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[104]] as core.TimeZone;
  }
  public static Chile_Continental($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[105]] as core.TimeZone;
  }
  public static Brazil_East($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[106]] as core.TimeZone;
  }
  public static Canada_Newfoundland($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[107]] as core.TimeZone;
  }
  public static America_Ensenada($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[108]] as core.TimeZone;
  }
  public static America_Santa_Isabel($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[109]] as core.TimeZone;
  }
  public static Mexico_BajaNorte($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[110]] as core.TimeZone;
  }
  public static America_Montreal($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[111]] as core.TimeZone;
  }
  public static America_Nassau($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[112]] as core.TimeZone;
  }
  public static America_Nipigon($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[113]] as core.TimeZone;
  }
  public static America_Thunder_Bay($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[114]] as core.TimeZone;
  }
  public static Canada_Eastern($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[115]] as core.TimeZone;
  }
  public static Canada_Pacific($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[116]] as core.TimeZone;
  }
  public static Canada_Yukon($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[117]] as core.TimeZone;
  }
  public static America_Rainy_River($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[118]] as core.TimeZone;
  }
  public static Canada_Central($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[119]] as core.TimeZone;
  }
  public static Asia_Ashkhabad($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[120]] as core.TimeZone;
  }
  public static Asia_Phnom_Penh($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[121]] as core.TimeZone;
  }
  public static Asia_Vientiane($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[122]] as core.TimeZone;
  }
  public static Indian_Christmas($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[123]] as core.TimeZone;
  }
  public static Asia_Dacca($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[124]] as core.TimeZone;
  }
  public static Asia_Muscat($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[125]] as core.TimeZone;
  }
  public static Indian_Mahe($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[126]] as core.TimeZone;
  }
  public static Indian_Reunion($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[127]] as core.TimeZone;
  }
  public static Asia_Saigon($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[128]] as core.TimeZone;
  }
  public static Hongkong($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[129]] as core.TimeZone;
  }
  public static Asia_Tel_Aviv($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[130]] as core.TimeZone;
  }
  public static Israel($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[131]] as core.TimeZone;
  }
  public static Asia_Katmandu($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[132]] as core.TimeZone;
  }
  public static Asia_Calcutta($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[133]] as core.TimeZone;
  }
  public static Asia_Brunei($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[134]] as core.TimeZone;
  }
  public static Asia_Macao($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[135]] as core.TimeZone;
  }
  public static Asia_Ujung_Pandang($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[136]] as core.TimeZone;
  }
  public static Europe_Nicosia($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[137]] as core.TimeZone;
  }
  public static Asia_Bahrain($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[138]] as core.TimeZone;
  }
  public static Antarctica_Syowa($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[139]] as core.TimeZone;
  }
  public static Asia_Aden($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[140]] as core.TimeZone;
  }
  public static Asia_Kuwait($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[141]] as core.TimeZone;
  }
  public static ROK($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[142]] as core.TimeZone;
  }
  public static Asia_Chongqing($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[143]] as core.TimeZone;
  }
  public static Asia_Chungking($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[144]] as core.TimeZone;
  }
  public static Asia_Harbin($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[145]] as core.TimeZone;
  }
  public static PRC($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[146]] as core.TimeZone;
  }
  public static Asia_Kuala_Lumpur($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[147]] as core.TimeZone;
  }
  public static Singapore($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[148]] as core.TimeZone;
  }
  public static ROC($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[149]] as core.TimeZone;
  }
  public static Iran($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[150]] as core.TimeZone;
  }
  public static Asia_Thimbu($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[151]] as core.TimeZone;
  }
  public static Japan($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[152]] as core.TimeZone;
  }
  public static Asia_Ulan_Bator($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[153]] as core.TimeZone;
  }
  public static Antarctica_Vostok($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[154]] as core.TimeZone;
  }
  public static Asia_Kashgar($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[155]] as core.TimeZone;
  }
  public static Asia_Rangoon($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[156]] as core.TimeZone;
  }
  public static Indian_Cocos($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[157]] as core.TimeZone;
  }
  public static Atlantic_Faeroe($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[158]] as core.TimeZone;
  }
  public static Australia_South($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[159]] as core.TimeZone;
  }
  public static Australia_Queensland($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[160]] as core.TimeZone;
  }
  public static Australia_Yancowinna($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[161]] as core.TimeZone;
  }
  public static Australia_North($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[162]] as core.TimeZone;
  }
  public static Australia_Currie($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[163]] as core.TimeZone;
  }
  public static Australia_Tasmania($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[164]] as core.TimeZone;
  }
  public static Australia_LHI($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[165]] as core.TimeZone;
  }
  public static Australia_Victoria($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[166]] as core.TimeZone;
  }
  public static Australia_West($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[167]] as core.TimeZone;
  }
  public static Australia_ACT($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[168]] as core.TimeZone;
  }
  public static Australia_Canberra($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[169]] as core.TimeZone;
  }
  public static Australia_NSW($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[170]] as core.TimeZone;
  }
  public static GMT($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[171]] as core.TimeZone;
  }
  public static GMTx0($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[172]] as core.TimeZone;
  }
  public static GMT_0($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[173]] as core.TimeZone;
  }
  public static GMT0($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[174]] as core.TimeZone;
  }
  public static Greenwich($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[175]] as core.TimeZone;
  }
  public static UCT($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[176]] as core.TimeZone;
  }
  public static UTC($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[177]] as core.TimeZone;
  }
  public static Universal($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[178]] as core.TimeZone;
  }
  public static Zulu($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[179]] as core.TimeZone;
  }
  public static Europe_Ljubljana($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[180]] as core.TimeZone;
  }
  public static Europe_Podgorica($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[181]] as core.TimeZone;
  }
  public static Europe_Sarajevo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[182]] as core.TimeZone;
  }
  public static Europe_Skopje($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[183]] as core.TimeZone;
  }
  public static Europe_Zagreb($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[184]] as core.TimeZone;
  }
  public static Arctic_Longyearbyen($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[185]] as core.TimeZone;
  }
  public static Atlantic_Jan_Mayen($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[186]] as core.TimeZone;
  }
  public static Europe_Copenhagen($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[187]] as core.TimeZone;
  }
  public static Europe_Oslo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[188]] as core.TimeZone;
  }
  public static Europe_Stockholm($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[189]] as core.TimeZone;
  }
  public static Europe_Amsterdam($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[190]] as core.TimeZone;
  }
  public static Europe_Luxembourg($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[191]] as core.TimeZone;
  }
  public static Europe_Tiraspol($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[192]] as core.TimeZone;
  }
  public static Eire($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[193]] as core.TimeZone;
  }
  public static Europe_Mariehamn($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[194]] as core.TimeZone;
  }
  public static Asia_Istanbul($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[195]] as core.TimeZone;
  }
  public static Turkey($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[196]] as core.TimeZone;
  }
  public static Europe_Kiev($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[197]] as core.TimeZone;
  }
  public static Europe_Uzhgorod($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[198]] as core.TimeZone;
  }
  public static Europe_Zaporozhye($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[199]] as core.TimeZone;
  }
  public static Portugal($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[200]] as core.TimeZone;
  }
  public static Europe_Belfast($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[201]] as core.TimeZone;
  }
  public static Europe_Guernsey($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[202]] as core.TimeZone;
  }
  public static Europe_Isle_of_Man($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[203]] as core.TimeZone;
  }
  public static Europe_Jersey($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[204]] as core.TimeZone;
  }
  public static GB($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[205]] as core.TimeZone;
  }
  public static GB_Eire($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[206]] as core.TimeZone;
  }
  public static W_SU($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[207]] as core.TimeZone;
  }
  public static Europe_Monaco($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[208]] as core.TimeZone;
  }
  public static Europe_Bratislava($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[209]] as core.TimeZone;
  }
  public static Europe_San_Marino($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[210]] as core.TimeZone;
  }
  public static Europe_Vatican($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[211]] as core.TimeZone;
  }
  public static Poland($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[212]] as core.TimeZone;
  }
  public static Europe_Busingen($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[213]] as core.TimeZone;
  }
  public static Europe_Vaduz($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[214]] as core.TimeZone;
  }
  public static Indian_Kerguelen($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[215]] as core.TimeZone;
  }
  public static Antarctica_McMurdo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[216]] as core.TimeZone;
  }
  public static Antarctica_South_Pole($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[217]] as core.TimeZone;
  }
  public static NZ($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[218]] as core.TimeZone;
  }
  public static NZ_CHAT($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[219]] as core.TimeZone;
  }
  public static Chile_EasterIsland($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[220]] as core.TimeZone;
  }
  public static Pacific_Pohnpei($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[221]] as core.TimeZone;
  }
  public static Pacific_Ponape($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[222]] as core.TimeZone;
  }
  public static Pacific_Saipan($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[223]] as core.TimeZone;
  }
  public static Pacific_Johnston($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[224]] as core.TimeZone;
  }
  public static US_Hawaii($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[225]] as core.TimeZone;
  }
  public static Pacific_Enderbury($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[226]] as core.TimeZone;
  }
  public static Kwajalein($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[227]] as core.TimeZone;
  }
  public static Pacific_Midway($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[228]] as core.TimeZone;
  }
  public static Pacific_Samoa($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[229]] as core.TimeZone;
  }
  public static US_Samoa($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[230]] as core.TimeZone;
  }
  public static Antarctica_DumontDUrville($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[231]] as core.TimeZone;
  }
  public static Pacific_Chuuk($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[232]] as core.TimeZone;
  }
  public static Pacific_Truk($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[233]] as core.TimeZone;
  }
  public static Pacific_Yap($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[234]] as core.TimeZone;
  }
  public static Pacific_Funafuti($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[235]] as core.TimeZone;
  }
  public static Pacific_Majuro($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[236]] as core.TimeZone;
  }
  public static Pacific_Wake($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[237]] as core.TimeZone;
  }
  public static Pacific_Wallis($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[238]] as core.TimeZone;
  }
  public static Africa_Abidjan($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[239]] as core.TimeZone;
  }
  public static Africa_Algiers($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[240]] as core.TimeZone;
  }
  public static Africa_Bissau($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[241]] as core.TimeZone;
  }
  public static Africa_Cairo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[242]] as core.TimeZone;
  }
  public static Africa_Casablanca($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[243]] as core.TimeZone;
  }
  public static Africa_Ceuta($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[244]] as core.TimeZone;
  }
  public static Africa_El_Aaiun($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[245]] as core.TimeZone;
  }
  public static Africa_Johannesburg($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[246]] as core.TimeZone;
  }
  public static Africa_Juba($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[247]] as core.TimeZone;
  }
  public static Africa_Khartoum($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[248]] as core.TimeZone;
  }
  public static Africa_Lagos($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[249]] as core.TimeZone;
  }
  public static Africa_Maputo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[250]] as core.TimeZone;
  }
  public static Africa_Monrovia($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[251]] as core.TimeZone;
  }
  public static Africa_Nairobi($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[252]] as core.TimeZone;
  }
  public static Africa_Ndjamena($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[253]] as core.TimeZone;
  }
  public static Africa_Sao_Tome($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[254]] as core.TimeZone;
  }
  public static Africa_Tripoli($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[255]] as core.TimeZone;
  }
  public static Africa_Tunis($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[256]] as core.TimeZone;
  }
  public static Africa_Windhoek($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[257]] as core.TimeZone;
  }
  public static America_Adak($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[258]] as core.TimeZone;
  }
  public static America_Anchorage($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[259]] as core.TimeZone;
  }
  public static America_Araguaina($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[260]] as core.TimeZone;
  }
  public static America_Argentina_Buenos_Aires($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[261]] as core.TimeZone;
  }
  public static America_Argentina_Catamarca($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[262]] as core.TimeZone;
  }
  public static America_Argentina_Cordoba($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[263]] as core.TimeZone;
  }
  public static America_Argentina_Jujuy($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[264]] as core.TimeZone;
  }
  public static America_Argentina_La_Rioja($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[265]] as core.TimeZone;
  }
  public static America_Argentina_Mendoza($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[266]] as core.TimeZone;
  }
  public static America_Argentina_Rio_Gallegos($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[267]] as core.TimeZone;
  }
  public static America_Argentina_Salta($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[268]] as core.TimeZone;
  }
  public static America_Argentina_San_Juan($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[269]] as core.TimeZone;
  }
  public static America_Argentina_San_Luis($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[270]] as core.TimeZone;
  }
  public static America_Argentina_Tucuman($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[271]] as core.TimeZone;
  }
  public static America_Argentina_Ushuaia($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[272]] as core.TimeZone;
  }
  public static America_Asuncion($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[273]] as core.TimeZone;
  }
  public static America_Bahia($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[274]] as core.TimeZone;
  }
  public static America_Bahia_Banderas($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[275]] as core.TimeZone;
  }
  public static America_Barbados($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[276]] as core.TimeZone;
  }
  public static America_Belem($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[277]] as core.TimeZone;
  }
  public static America_Belize($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[278]] as core.TimeZone;
  }
  public static America_Boa_Vista($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[279]] as core.TimeZone;
  }
  public static America_Bogota($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[280]] as core.TimeZone;
  }
  public static America_Boise($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[281]] as core.TimeZone;
  }
  public static America_Cambridge_Bay($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[282]] as core.TimeZone;
  }
  public static America_Campo_Grande($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[283]] as core.TimeZone;
  }
  public static America_Cancun($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[284]] as core.TimeZone;
  }
  public static America_Caracas($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[285]] as core.TimeZone;
  }
  public static America_Cayenne($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[286]] as core.TimeZone;
  }
  public static America_Chicago($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[287]] as core.TimeZone;
  }
  public static America_Chihuahua($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[288]] as core.TimeZone;
  }
  public static America_Ciudad_Juarez($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[289]] as core.TimeZone;
  }
  public static America_Costa_Rica($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[290]] as core.TimeZone;
  }
  public static America_Cuiaba($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[291]] as core.TimeZone;
  }
  public static America_Danmarkshavn($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[292]] as core.TimeZone;
  }
  public static America_Dawson($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[293]] as core.TimeZone;
  }
  public static America_Dawson_Creek($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[294]] as core.TimeZone;
  }
  public static America_Denver($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[295]] as core.TimeZone;
  }
  public static America_Detroit($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[296]] as core.TimeZone;
  }
  public static America_Edmonton($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[297]] as core.TimeZone;
  }
  public static America_Eirunepe($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[298]] as core.TimeZone;
  }
  public static America_El_Salvador($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[299]] as core.TimeZone;
  }
  public static America_Fort_Nelson($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[300]] as core.TimeZone;
  }
  public static America_Fortaleza($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[301]] as core.TimeZone;
  }
  public static America_Glace_Bay($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[302]] as core.TimeZone;
  }
  public static America_Goose_Bay($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[303]] as core.TimeZone;
  }
  public static America_Grand_Turk($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[304]] as core.TimeZone;
  }
  public static America_Guatemala($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[305]] as core.TimeZone;
  }
  public static America_Guayaquil($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[306]] as core.TimeZone;
  }
  public static America_Guyana($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[307]] as core.TimeZone;
  }
  public static America_Halifax($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[308]] as core.TimeZone;
  }
  public static America_Havana($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[309]] as core.TimeZone;
  }
  public static America_Hermosillo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[310]] as core.TimeZone;
  }
  public static America_Indiana_Indianapolis($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[311]] as core.TimeZone;
  }
  public static America_Indiana_Knox($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[312]] as core.TimeZone;
  }
  public static America_Indiana_Marengo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[313]] as core.TimeZone;
  }
  public static America_Indiana_Petersburg($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[314]] as core.TimeZone;
  }
  public static America_Indiana_Tell_City($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[315]] as core.TimeZone;
  }
  public static America_Indiana_Vevay($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[316]] as core.TimeZone;
  }
  public static America_Indiana_Vincennes($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[317]] as core.TimeZone;
  }
  public static America_Indiana_Winamac($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[318]] as core.TimeZone;
  }
  public static America_Inuvik($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[319]] as core.TimeZone;
  }
  public static America_Iqaluit($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[320]] as core.TimeZone;
  }
  public static America_Jamaica($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[321]] as core.TimeZone;
  }
  public static America_Juneau($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[322]] as core.TimeZone;
  }
  public static America_Kentucky_Louisville($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[323]] as core.TimeZone;
  }
  public static America_Kentucky_Monticello($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[324]] as core.TimeZone;
  }
  public static America_La_Paz($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[325]] as core.TimeZone;
  }
  public static America_Lima($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[326]] as core.TimeZone;
  }
  public static America_Los_Angeles($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[327]] as core.TimeZone;
  }
  public static America_Maceio($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[328]] as core.TimeZone;
  }
  public static America_Managua($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[329]] as core.TimeZone;
  }
  public static America_Manaus($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[330]] as core.TimeZone;
  }
  public static America_Martinique($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[331]] as core.TimeZone;
  }
  public static America_Matamoros($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[332]] as core.TimeZone;
  }
  public static America_Mazatlan($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[333]] as core.TimeZone;
  }
  public static America_Menominee($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[334]] as core.TimeZone;
  }
  public static America_Merida($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[335]] as core.TimeZone;
  }
  public static America_Metlakatla($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[336]] as core.TimeZone;
  }
  public static America_Mexico_City($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[337]] as core.TimeZone;
  }
  public static America_Miquelon($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[338]] as core.TimeZone;
  }
  public static America_Moncton($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[339]] as core.TimeZone;
  }
  public static America_Monterrey($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[340]] as core.TimeZone;
  }
  public static America_Montevideo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[341]] as core.TimeZone;
  }
  public static America_New_York($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[342]] as core.TimeZone;
  }
  public static America_Nome($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[343]] as core.TimeZone;
  }
  public static America_Noronha($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[344]] as core.TimeZone;
  }
  public static America_North_Dakota_Beulah($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[345]] as core.TimeZone;
  }
  public static America_North_Dakota_Center($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[346]] as core.TimeZone;
  }
  public static America_North_Dakota_New_Salem($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[347]] as core.TimeZone;
  }
  public static America_Nuuk($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[348]] as core.TimeZone;
  }
  public static America_Ojinaga($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[349]] as core.TimeZone;
  }
  public static America_Panama($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[350]] as core.TimeZone;
  }
  public static America_Paramaribo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[351]] as core.TimeZone;
  }
  public static America_Phoenix($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[352]] as core.TimeZone;
  }
  public static America_Port_au_Prince($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[353]] as core.TimeZone;
  }
  public static America_Porto_Velho($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[354]] as core.TimeZone;
  }
  public static America_Puerto_Rico($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[355]] as core.TimeZone;
  }
  public static America_Punta_Arenas($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[356]] as core.TimeZone;
  }
  public static America_Rankin_Inlet($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[357]] as core.TimeZone;
  }
  public static America_Recife($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[358]] as core.TimeZone;
  }
  public static America_Regina($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[359]] as core.TimeZone;
  }
  public static America_Resolute($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[360]] as core.TimeZone;
  }
  public static America_Rio_Branco($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[361]] as core.TimeZone;
  }
  public static America_Santarem($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[362]] as core.TimeZone;
  }
  public static America_Santiago($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[363]] as core.TimeZone;
  }
  public static America_Santo_Domingo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[364]] as core.TimeZone;
  }
  public static America_Sao_Paulo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[365]] as core.TimeZone;
  }
  public static America_Scoresbysund($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[366]] as core.TimeZone;
  }
  public static America_Sitka($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[367]] as core.TimeZone;
  }
  public static America_St_Johns($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[368]] as core.TimeZone;
  }
  public static America_Swift_Current($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[369]] as core.TimeZone;
  }
  public static America_Tegucigalpa($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[370]] as core.TimeZone;
  }
  public static America_Thule($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[371]] as core.TimeZone;
  }
  public static America_Tijuana($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[372]] as core.TimeZone;
  }
  public static America_Toronto($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[373]] as core.TimeZone;
  }
  public static America_Vancouver($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[374]] as core.TimeZone;
  }
  public static America_Whitehorse($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[375]] as core.TimeZone;
  }
  public static America_Winnipeg($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[376]] as core.TimeZone;
  }
  public static America_Yakutat($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[377]] as core.TimeZone;
  }
  public static Antarctica_Casey($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[378]] as core.TimeZone;
  }
  public static Antarctica_Davis($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[379]] as core.TimeZone;
  }
  public static Antarctica_Macquarie($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[380]] as core.TimeZone;
  }
  public static Antarctica_Mawson($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[381]] as core.TimeZone;
  }
  public static Antarctica_Palmer($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[382]] as core.TimeZone;
  }
  public static Antarctica_Rothera($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[383]] as core.TimeZone;
  }
  public static Antarctica_Troll($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[384]] as core.TimeZone;
  }
  public static Asia_Almaty($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[385]] as core.TimeZone;
  }
  public static Asia_Amman($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[386]] as core.TimeZone;
  }
  public static Asia_Anadyr($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[387]] as core.TimeZone;
  }
  public static Asia_Aqtau($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[388]] as core.TimeZone;
  }
  public static Asia_Aqtobe($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[389]] as core.TimeZone;
  }
  public static Asia_Ashgabat($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[390]] as core.TimeZone;
  }
  public static Asia_Atyrau($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[391]] as core.TimeZone;
  }
  public static Asia_Baghdad($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[392]] as core.TimeZone;
  }
  public static Asia_Baku($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[393]] as core.TimeZone;
  }
  public static Asia_Bangkok($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[394]] as core.TimeZone;
  }
  public static Asia_Barnaul($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[395]] as core.TimeZone;
  }
  public static Asia_Beirut($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[396]] as core.TimeZone;
  }
  public static Asia_Bishkek($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[397]] as core.TimeZone;
  }
  public static Asia_Chita($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[398]] as core.TimeZone;
  }
  public static Asia_Choibalsan($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[399]] as core.TimeZone;
  }
  public static Asia_Colombo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[400]] as core.TimeZone;
  }
  public static Asia_Damascus($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[401]] as core.TimeZone;
  }
  public static Asia_Dhaka($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[402]] as core.TimeZone;
  }
  public static Asia_Dili($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[403]] as core.TimeZone;
  }
  public static Asia_Dubai($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[404]] as core.TimeZone;
  }
  public static Asia_Dushanbe($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[405]] as core.TimeZone;
  }
  public static Asia_Famagusta($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[406]] as core.TimeZone;
  }
  public static Asia_Gaza($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[407]] as core.TimeZone;
  }
  public static Asia_Hebron($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[408]] as core.TimeZone;
  }
  public static Asia_Ho_Chi_Minh($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[409]] as core.TimeZone;
  }
  public static Asia_Hong_Kong($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[410]] as core.TimeZone;
  }
  public static Asia_Hovd($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[411]] as core.TimeZone;
  }
  public static Asia_Irkutsk($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[412]] as core.TimeZone;
  }
  public static Asia_Jakarta($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[413]] as core.TimeZone;
  }
  public static Asia_Jayapura($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[414]] as core.TimeZone;
  }
  public static Asia_Jerusalem($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[415]] as core.TimeZone;
  }
  public static Asia_Kabul($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[416]] as core.TimeZone;
  }
  public static Asia_Kamchatka($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[417]] as core.TimeZone;
  }
  public static Asia_Karachi($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[418]] as core.TimeZone;
  }
  public static Asia_Kathmandu($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[419]] as core.TimeZone;
  }
  public static Asia_Khandyga($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[420]] as core.TimeZone;
  }
  public static Asia_Kolkata($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[421]] as core.TimeZone;
  }
  public static Asia_Krasnoyarsk($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[422]] as core.TimeZone;
  }
  public static Asia_Kuching($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[423]] as core.TimeZone;
  }
  public static Asia_Macau($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[424]] as core.TimeZone;
  }
  public static Asia_Magadan($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[425]] as core.TimeZone;
  }
  public static Asia_Makassar($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[426]] as core.TimeZone;
  }
  public static Asia_Manila($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[427]] as core.TimeZone;
  }
  public static Asia_Nicosia($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[428]] as core.TimeZone;
  }
  public static Asia_Novokuznetsk($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[429]] as core.TimeZone;
  }
  public static Asia_Novosibirsk($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[430]] as core.TimeZone;
  }
  public static Asia_Omsk($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[431]] as core.TimeZone;
  }
  public static Asia_Oral($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[432]] as core.TimeZone;
  }
  public static Asia_Pontianak($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[433]] as core.TimeZone;
  }
  public static Asia_Pyongyang($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[434]] as core.TimeZone;
  }
  public static Asia_Qatar($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[435]] as core.TimeZone;
  }
  public static Asia_Qostanay($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[436]] as core.TimeZone;
  }
  public static Asia_Qyzylorda($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[437]] as core.TimeZone;
  }
  public static Asia_Riyadh($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[438]] as core.TimeZone;
  }
  public static Asia_Sakhalin($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[439]] as core.TimeZone;
  }
  public static Asia_Samarkand($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[440]] as core.TimeZone;
  }
  public static Asia_Seoul($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[441]] as core.TimeZone;
  }
  public static Asia_Shanghai($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[442]] as core.TimeZone;
  }
  public static Asia_Singapore($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[443]] as core.TimeZone;
  }
  public static Asia_Srednekolymsk($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[444]] as core.TimeZone;
  }
  public static Asia_Taipei($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[445]] as core.TimeZone;
  }
  public static Asia_Tashkent($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[446]] as core.TimeZone;
  }
  public static Asia_Tbilisi($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[447]] as core.TimeZone;
  }
  public static Asia_Tehran($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[448]] as core.TimeZone;
  }
  public static Asia_Thimphu($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[449]] as core.TimeZone;
  }
  public static Asia_Tokyo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[450]] as core.TimeZone;
  }
  public static Asia_Tomsk($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[451]] as core.TimeZone;
  }
  public static Asia_Ulaanbaatar($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[452]] as core.TimeZone;
  }
  public static Asia_Urumqi($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[453]] as core.TimeZone;
  }
  public static Asia_Ust_Nera($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[454]] as core.TimeZone;
  }
  public static Asia_Vladivostok($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[455]] as core.TimeZone;
  }
  public static Asia_Yakutsk($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[456]] as core.TimeZone;
  }
  public static Asia_Yangon($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[457]] as core.TimeZone;
  }
  public static Asia_Yekaterinburg($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[458]] as core.TimeZone;
  }
  public static Asia_Yerevan($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[459]] as core.TimeZone;
  }
  public static Atlantic_Azores($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[460]] as core.TimeZone;
  }
  public static Atlantic_Bermuda($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[461]] as core.TimeZone;
  }
  public static Atlantic_Canary($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[462]] as core.TimeZone;
  }
  public static Atlantic_Cape_Verde($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[463]] as core.TimeZone;
  }
  public static Atlantic_Faroe($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[464]] as core.TimeZone;
  }
  public static Atlantic_Madeira($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[465]] as core.TimeZone;
  }
  public static Atlantic_South_Georgia($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[466]] as core.TimeZone;
  }
  public static Atlantic_Stanley($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[467]] as core.TimeZone;
  }
  public static Australia_Adelaide($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[468]] as core.TimeZone;
  }
  public static Australia_Brisbane($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[469]] as core.TimeZone;
  }
  public static Australia_Broken_Hill($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[470]] as core.TimeZone;
  }
  public static Australia_Darwin($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[471]] as core.TimeZone;
  }
  public static Australia_Eucla($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[472]] as core.TimeZone;
  }
  public static Australia_Hobart($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[473]] as core.TimeZone;
  }
  public static Australia_Lindeman($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[474]] as core.TimeZone;
  }
  public static Australia_Lord_Howe($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[475]] as core.TimeZone;
  }
  public static Australia_Melbourne($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[476]] as core.TimeZone;
  }
  public static Australia_Perth($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[477]] as core.TimeZone;
  }
  public static Australia_Sydney($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[478]] as core.TimeZone;
  }
  public static CET($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[479]] as core.TimeZone;
  }
  public static CST6CDT($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[480]] as core.TimeZone;
  }
  public static EET($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[481]] as core.TimeZone;
  }
  public static EST($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[482]] as core.TimeZone;
  }
  public static EST5EDT($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[483]] as core.TimeZone;
  }
  public static Europe_Andorra($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[484]] as core.TimeZone;
  }
  public static Europe_Astrakhan($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[485]] as core.TimeZone;
  }
  public static Europe_Athens($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[486]] as core.TimeZone;
  }
  public static Europe_Belgrade($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[487]] as core.TimeZone;
  }
  public static Europe_Berlin($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[488]] as core.TimeZone;
  }
  public static Europe_Brussels($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[489]] as core.TimeZone;
  }
  public static Europe_Bucharest($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[490]] as core.TimeZone;
  }
  public static Europe_Budapest($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[491]] as core.TimeZone;
  }
  public static Europe_Chisinau($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[492]] as core.TimeZone;
  }
  public static Europe_Dublin($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[493]] as core.TimeZone;
  }
  public static Europe_Gibraltar($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[494]] as core.TimeZone;
  }
  public static Europe_Helsinki($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[495]] as core.TimeZone;
  }
  public static Europe_Istanbul($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[496]] as core.TimeZone;
  }
  public static Europe_Kaliningrad($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[497]] as core.TimeZone;
  }
  public static Europe_Kirov($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[498]] as core.TimeZone;
  }
  public static Europe_Kyiv($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[499]] as core.TimeZone;
  }
  public static Europe_Lisbon($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[500]] as core.TimeZone;
  }
  public static Europe_London($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[501]] as core.TimeZone;
  }
  public static Europe_Madrid($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[502]] as core.TimeZone;
  }
  public static Europe_Malta($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[503]] as core.TimeZone;
  }
  public static Europe_Minsk($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[504]] as core.TimeZone;
  }
  public static Europe_Moscow($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[505]] as core.TimeZone;
  }
  public static Europe_Paris($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[506]] as core.TimeZone;
  }
  public static Europe_Prague($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[507]] as core.TimeZone;
  }
  public static Europe_Riga($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[508]] as core.TimeZone;
  }
  public static Europe_Rome($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[509]] as core.TimeZone;
  }
  public static Europe_Samara($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[510]] as core.TimeZone;
  }
  public static Europe_Saratov($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[511]] as core.TimeZone;
  }
  public static Europe_Simferopol($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[512]] as core.TimeZone;
  }
  public static Europe_Sofia($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[513]] as core.TimeZone;
  }
  public static Europe_Tallinn($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[514]] as core.TimeZone;
  }
  public static Europe_Tirane($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[515]] as core.TimeZone;
  }
  public static Europe_Ulyanovsk($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[516]] as core.TimeZone;
  }
  public static Europe_Vienna($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[517]] as core.TimeZone;
  }
  public static Europe_Vilnius($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[518]] as core.TimeZone;
  }
  public static Europe_Volgograd($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[519]] as core.TimeZone;
  }
  public static Europe_Warsaw($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[520]] as core.TimeZone;
  }
  public static Europe_Zurich($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[521]] as core.TimeZone;
  }
  public static Factory($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[522]] as core.TimeZone;
  }
  public static HST($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[523]] as core.TimeZone;
  }
  public static Indian_Chagos($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[524]] as core.TimeZone;
  }
  public static Indian_Maldives($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[525]] as core.TimeZone;
  }
  public static Indian_Mauritius($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[526]] as core.TimeZone;
  }
  public static MET($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[527]] as core.TimeZone;
  }
  public static MST($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[528]] as core.TimeZone;
  }
  public static MST7MDT($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[529]] as core.TimeZone;
  }
  public static PST8PDT($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[530]] as core.TimeZone;
  }
  public static Pacific_Apia($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[531]] as core.TimeZone;
  }
  public static Pacific_Auckland($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[532]] as core.TimeZone;
  }
  public static Pacific_Bougainville($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[533]] as core.TimeZone;
  }
  public static Pacific_Chatham($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[534]] as core.TimeZone;
  }
  public static Pacific_Easter($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[535]] as core.TimeZone;
  }
  public static Pacific_Efate($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[536]] as core.TimeZone;
  }
  public static Pacific_Fakaofo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[537]] as core.TimeZone;
  }
  public static Pacific_Fiji($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[538]] as core.TimeZone;
  }
  public static Pacific_Galapagos($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[539]] as core.TimeZone;
  }
  public static Pacific_Gambier($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[540]] as core.TimeZone;
  }
  public static Pacific_Guadalcanal($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[541]] as core.TimeZone;
  }
  public static Pacific_Guam($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[542]] as core.TimeZone;
  }
  public static Pacific_Honolulu($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[543]] as core.TimeZone;
  }
  public static Pacific_Kanton($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[544]] as core.TimeZone;
  }
  public static Pacific_Kiritimati($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[545]] as core.TimeZone;
  }
  public static Pacific_Kosrae($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[546]] as core.TimeZone;
  }
  public static Pacific_Kwajalein($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[547]] as core.TimeZone;
  }
  public static Pacific_Marquesas($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[548]] as core.TimeZone;
  }
  public static Pacific_Nauru($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[549]] as core.TimeZone;
  }
  public static Pacific_Niue($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[550]] as core.TimeZone;
  }
  public static Pacific_Norfolk($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[551]] as core.TimeZone;
  }
  public static Pacific_Noumea($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[552]] as core.TimeZone;
  }
  public static Pacific_Pago_Pago($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[553]] as core.TimeZone;
  }
  public static Pacific_Palau($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[554]] as core.TimeZone;
  }
  public static Pacific_Pitcairn($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[555]] as core.TimeZone;
  }
  public static Pacific_Port_Moresby($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[556]] as core.TimeZone;
  }
  public static Pacific_Rarotonga($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[557]] as core.TimeZone;
  }
  public static Pacific_Tahiti($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[558]] as core.TimeZone;
  }
  public static Pacific_Tarawa($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[559]] as core.TimeZone;
  }
  public static Pacific_Tongatapu($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[560]] as core.TimeZone;
  }
  public static WET($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[561]] as core.TimeZone;
  }
}

export class nodeGeo extends std_n.core.nodeGeo {}

export class ti3d extends std_n.core.ti3d {}

export class Tuple extends $sdk.GCObject {
  static readonly _type = 'core::Tuple';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get x(): any {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set x(v: any) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get y(): any {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set y(v: any) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, x: any, y: any): Tuple {
    return new Tuple($g.abi.libs_by_name.get(stdlib.name)!.mapped[30], x, y);
  }
}

export class any extends $sdk.GCObject {
  static readonly _type = 'core::any';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  static create($g: $sdk.GreyCat): any {
    return new any($g.abi.libs_by_name.get(stdlib.name)!.mapped[31]);
  }
}

export class nodeIndex extends std_n.core.nodeIndex {}

export class tf2d extends std_n.core.tf2d {}

export class GeoBox extends $sdk.GCObject {
  static readonly _type = 'core::GeoBox';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get sw(): $sdk.std.core.geo {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set sw(v: $sdk.std.core.geo) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get ne(): $sdk.std.core.geo {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set ne(v: $sdk.std.core.geo) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, sw: $sdk.std.core.geo, ne: $sdk.std.core.geo): GeoBox {
    return new GeoBox($g.abi.libs_by_name.get(stdlib.name)!.mapped[34], sw, ne);
  }
}

export class Array extends std_n.core.Array {}

export class String extends std_n.core.String {}

export class ti5d extends std_n.core.ti5d {}

}

export namespace runtime {
export class UserGroupPolicyType extends $sdk.GCEnum {
  static readonly _type = 'runtime::UserGroupPolicyType';

  public static read($g: $sdk.GreyCat): runtime.UserGroupPolicyType {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[38];
    return t.enum_values![t.generated_offsets[0]] as runtime.UserGroupPolicyType;
  }
  public static write($g: $sdk.GreyCat): runtime.UserGroupPolicyType {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[38];
    return t.enum_values![t.generated_offsets[1]] as runtime.UserGroupPolicyType;
  }
  public static execute($g: $sdk.GreyCat): runtime.UserGroupPolicyType {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[38];
    return t.enum_values![t.generated_offsets[2]] as runtime.UserGroupPolicyType;
  }
}

export class UserRole extends $sdk.GCObject {
  static readonly _type = 'runtime::UserRole';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get name(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get permissions(): Array<string> {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set permissions(v: Array<string>) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
 static all($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<Array<runtime.UserRole>> {
      return $g.call('runtime::UserRole::all', undefined, $signal);
    }
 static remove($g: $sdk.GreyCat, name: string, $signal?: AbortSignal): Promise<unknown> {
      return $g.call('runtime::UserRole::remove', [name], $signal);
    }
 static set_($g: $sdk.GreyCat, value: runtime.UserRole, $signal?: AbortSignal): Promise<unknown> {
      return $g.call('runtime::UserRole::set_', [value], $signal);
    }
  static create($g: $sdk.GreyCat, name: string, permissions: Array<string>): UserRole {
    return new UserRole($g.abi.libs_by_name.get(stdlib.name)!.mapped[39], name, permissions);
  }
}

export class TaskStatus extends $sdk.GCEnum {
  static readonly _type = 'runtime::TaskStatus';

  public static empty($g: $sdk.GreyCat): runtime.TaskStatus {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[40];
    return t.enum_values![t.generated_offsets[0]] as runtime.TaskStatus;
  }
  public static waiting($g: $sdk.GreyCat): runtime.TaskStatus {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[40];
    return t.enum_values![t.generated_offsets[1]] as runtime.TaskStatus;
  }
  public static running($g: $sdk.GreyCat): runtime.TaskStatus {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[40];
    return t.enum_values![t.generated_offsets[2]] as runtime.TaskStatus;
  }
  public static cancelled($g: $sdk.GreyCat): runtime.TaskStatus {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[40];
    return t.enum_values![t.generated_offsets[3]] as runtime.TaskStatus;
  }
  public static error($g: $sdk.GreyCat): runtime.TaskStatus {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[40];
    return t.enum_values![t.generated_offsets[4]] as runtime.TaskStatus;
  }
  public static ended($g: $sdk.GreyCat): runtime.TaskStatus {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[40];
    return t.enum_values![t.generated_offsets[5]] as runtime.TaskStatus;
  }
}

export class Runtime extends $sdk.GCObject {
  static readonly _type = 'runtime::Runtime';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

 static info($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<runtime.RuntimeInfo> {
      return $g.call('runtime::Runtime::info', undefined, $signal);
    }
 static abi($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<unknown> {
      return $g.call('runtime::Runtime::abi', undefined, $signal);
    }
readModVar($g: $sdk.GreyCat, module: string, name: string, $signal?: AbortSignal): Promise<any | null> {
      return $g.call('runtime::Runtime::readModVar', [module, name], $signal);
    }
  static create($g: $sdk.GreyCat): Runtime {
    return new Runtime($g.abi.libs_by_name.get(stdlib.name)!.mapped[41]);
  }
}

export class User extends $sdk.GCObject {
  static readonly _type = 'runtime::User';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get id(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set id(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get name(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set name(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get activated(): boolean {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set activated(v: boolean) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get full_name(): string | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set full_name(v: string | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get email(): string | null {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set email(v: string | null) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get role(): string | null {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set role(v: string | null) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public get permissions_flags(): bigint | number | null {
    return this.$attrs[this.$type.generated_offsets[6]];
  }
  public set permissions_flags(v: bigint | number | null) {
    this.$attrs[this.$type.generated_offsets[6]] = v;
  }
  public get groups(): Array<runtime.UserGroupPolicy> | null {
    return this.$attrs[this.$type.generated_offsets[7]];
  }
  public set groups(v: Array<runtime.UserGroupPolicy> | null) {
    this.$attrs[this.$type.generated_offsets[7]] = v;
  }
  public get groups_flags(): bigint | number | null {
    return this.$attrs[this.$type.generated_offsets[8]];
  }
  public set groups_flags(v: bigint | number | null) {
    this.$attrs[this.$type.generated_offsets[8]] = v;
  }
  public get external(): boolean {
    return this.$attrs[this.$type.generated_offsets[9]];
  }
  public set external(v: boolean) {
    this.$attrs[this.$type.generated_offsets[9]] = v;
  }
 static all($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<Array<runtime.SecurityEntity>> {
      return $g.call('runtime::SecurityEntity::all', undefined, $signal);
    }
 static set_($g: $sdk.GreyCat, entity: runtime.SecurityEntity, $signal?: AbortSignal): Promise<bigint | number | null> {
      return $g.call('runtime::SecurityEntity::set_', [entity], $signal);
    }
 static login($g: $sdk.GreyCat, credentials: string, use_cookie: boolean, $signal?: AbortSignal): Promise<string> {
      return $g.call('runtime::User::login', [credentials, use_cookie], $signal);
    }
 static tokenLogin($g: $sdk.GreyCat, token: string, use_cookie: boolean, $signal?: AbortSignal): Promise<string> {
      return $g.call('runtime::User::tokenLogin', [token, use_cookie], $signal);
    }
 static renew($g: $sdk.GreyCat, use_cookie: boolean, $signal?: AbortSignal): Promise<string> {
      return $g.call('runtime::User::renew', [use_cookie], $signal);
    }
 static logout($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<unknown> {
      return $g.call('runtime::User::logout', undefined, $signal);
    }
 static current($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<bigint | number> {
      return $g.call('runtime::User::current', undefined, $signal);
    }
 static me($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<runtime.User> {
      return $g.call('runtime::User::me', undefined, $signal);
    }
 static permissions($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<Array<string>> {
      return $g.call('runtime::User::permissions', undefined, $signal);
    }
 static setPassword($g: $sdk.GreyCat, name: string, pass: string, $signal?: AbortSignal): Promise<boolean> {
      return $g.call('runtime::User::setPassword', [name, pass], $signal);
    }
 static getToken($g: $sdk.GreyCat, id: bigint | number, $signal?: AbortSignal): Promise<string> {
      return $g.call('runtime::User::getToken', [id], $signal);
    }
  static create($g: $sdk.GreyCat, id: bigint | number, name: string, activated: boolean, full_name: string | null, email: string | null, role: string | null, permissions_flags: bigint | number | null, groups: Array<runtime.UserGroupPolicy> | null, groups_flags: bigint | number | null, external: boolean): User {
    return new User($g.abi.libs_by_name.get(stdlib.name)!.mapped[42], id, name, activated, full_name, email, role, permissions_flags, groups, groups_flags, external);
  }
}

export class SecurityFields extends $sdk.GCObject {
  static readonly _type = 'runtime::SecurityFields';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get email(): string | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set email(v: string | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get name(): string | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set name(v: string | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get first_name(): string | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set first_name(v: string | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get last_name(): string | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set last_name(v: string | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get roles(): Map<string, string> | null {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set roles(v: Map<string, string> | null) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get groups(): Map<string, string> | null {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set groups(v: Map<string, string> | null) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
 static set_($g: $sdk.GreyCat, f: runtime.SecurityFields, $signal?: AbortSignal): Promise<unknown> {
      return $g.call('runtime::SecurityFields::set_', [f], $signal);
    }
 static get_($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<runtime.SecurityFields | null> {
      return $g.call('runtime::SecurityFields::get_', undefined, $signal);
    }
  static create($g: $sdk.GreyCat, email: string | null, name: string | null, first_name: string | null, last_name: string | null, roles: Map<string, string> | null, groups: Map<string, string> | null): SecurityFields {
    return new SecurityFields($g.abi.libs_by_name.get(stdlib.name)!.mapped[43], email, name, first_name, last_name, roles, groups);
  }
}

export class UserGroupPolicy extends $sdk.GCObject {
  static readonly _type = 'runtime::UserGroupPolicy';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get group_id(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set group_id(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get type(): runtime.UserGroupPolicyType {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set type(v: runtime.UserGroupPolicyType) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, group_id: bigint | number, type: runtime.UserGroupPolicyType): UserGroupPolicy {
    return new UserGroupPolicy($g.abi.libs_by_name.get(stdlib.name)!.mapped[44], group_id, type);
  }
}

export class TaskInfo extends $sdk.GCObject {
  static readonly _type = 'runtime::TaskInfo';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get user_id(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set user_id(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get task_id(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set task_id(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get mod(): string | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set mod(v: string | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get type(): string | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set type(v: string | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get fun(): string | null {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set fun(v: string | null) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get creation(): $sdk.std.core.time {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set creation(v: $sdk.std.core.time) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public get status(): runtime.TaskStatus {
    return this.$attrs[this.$type.generated_offsets[6]];
  }
  public set status(v: runtime.TaskStatus) {
    this.$attrs[this.$type.generated_offsets[6]] = v;
  }
  public get start(): $sdk.std.core.time | null {
    return this.$attrs[this.$type.generated_offsets[7]];
  }
  public set start(v: $sdk.std.core.time | null) {
    this.$attrs[this.$type.generated_offsets[7]] = v;
  }
  public get progress(): number | null {
    return this.$attrs[this.$type.generated_offsets[8]];
  }
  public set progress(v: number | null) {
    this.$attrs[this.$type.generated_offsets[8]] = v;
  }
  public get remaining(): $sdk.std.core.duration | null {
    return this.$attrs[this.$type.generated_offsets[9]];
  }
  public set remaining(v: $sdk.std.core.duration | null) {
    this.$attrs[this.$type.generated_offsets[9]] = v;
  }
  public get duration(): $sdk.std.core.duration | null {
    return this.$attrs[this.$type.generated_offsets[10]];
  }
  public set duration(v: $sdk.std.core.duration | null) {
    this.$attrs[this.$type.generated_offsets[10]] = v;
  }
  public get sub_waiting(): bigint | number | null {
    return this.$attrs[this.$type.generated_offsets[11]];
  }
  public set sub_waiting(v: bigint | number | null) {
    this.$attrs[this.$type.generated_offsets[11]] = v;
  }
  public get sub_tasks_all(): bigint | number | null {
    return this.$attrs[this.$type.generated_offsets[12]];
  }
  public set sub_tasks_all(v: bigint | number | null) {
    this.$attrs[this.$type.generated_offsets[12]] = v;
  }
  static create($g: $sdk.GreyCat, user_id: bigint | number, task_id: bigint | number, mod: string | null, type: string | null, fun: string | null, creation: $sdk.std.core.time, status: runtime.TaskStatus, start: $sdk.std.core.time | null, progress: number | null, remaining: $sdk.std.core.duration | null, duration: $sdk.std.core.duration | null, sub_waiting: bigint | number | null, sub_tasks_all: bigint | number | null): TaskInfo {
    return new TaskInfo($g.abi.libs_by_name.get(stdlib.name)!.mapped[45], user_id, task_id, mod, type, fun, creation, status, start, progress, remaining, duration, sub_waiting, sub_tasks_all);
  }
}

export class PeriodicTask extends $sdk.GCObject {
  static readonly _type = 'runtime::PeriodicTask';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get name(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get user_id(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set user_id(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get args(): string | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set args(v: string | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get start(): $sdk.std.core.time {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set start(v: $sdk.std.core.time) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get every(): $sdk.std.core.duration {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set every(v: $sdk.std.core.duration) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
 static all($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<Array<runtime.PeriodicTask>> {
      return $g.call('runtime::PeriodicTask::all', undefined, $signal);
    }
 static set_($g: $sdk.GreyCat, tasks: Array<runtime.PeriodicTask>, $signal?: AbortSignal): Promise<unknown> {
      return $g.call('runtime::PeriodicTask::set_', [tasks], $signal);
    }
  static create($g: $sdk.GreyCat, name: string, user_id: bigint | number, args: string | null, start: $sdk.std.core.time, every: $sdk.std.core.duration): PeriodicTask {
    return new PeriodicTask($g.abi.libs_by_name.get(stdlib.name)!.mapped[46], name, user_id, args, start, every);
  }
}

export class RuntimeInfo extends $sdk.GCObject {
  static readonly _type = 'runtime::RuntimeInfo';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get version(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set version(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get arch(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set arch(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get timezone(): core.TimeZone {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set timezone(v: core.TimeZone) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get license(): runtime.License {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set license(v: runtime.License) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get io_threads(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set io_threads(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get bg_threads(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set bg_threads(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public get fg_threads(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[6]];
  }
  public set fg_threads(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[6]] = v;
  }
  public get mem_total(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[7]];
  }
  public set mem_total(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[7]] = v;
  }
  public get mem_worker(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[8]];
  }
  public set mem_worker(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[8]] = v;
  }
  public get nb_ctx(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[9]];
  }
  public set nb_ctx(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[9]] = v;
  }
  public get store_stats(): runtime.StoreStat | null {
    return this.$attrs[this.$type.generated_offsets[10]];
  }
  public set store_stats(v: runtime.StoreStat | null) {
    this.$attrs[this.$type.generated_offsets[10]] = v;
  }
  static create($g: $sdk.GreyCat, version: string, arch: string, timezone: core.TimeZone, license: runtime.License, io_threads: bigint | number, bg_threads: bigint | number, fg_threads: bigint | number, mem_total: bigint | number, mem_worker: bigint | number, nb_ctx: bigint | number, store_stats: runtime.StoreStat | null): RuntimeInfo {
    return new RuntimeInfo($g.abi.libs_by_name.get(stdlib.name)!.mapped[47], version, arch, timezone, license, io_threads, bg_threads, fg_threads, mem_total, mem_worker, nb_ctx, store_stats);
  }
}

export class System extends $sdk.GCObject {
  static readonly _type = 'runtime::System';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  static create($g: $sdk.GreyCat): System {
    return new System($g.abi.libs_by_name.get(stdlib.name)!.mapped[48]);
  }
}

export class SecurityPolicy extends $sdk.GCObject {
  static readonly _type = 'runtime::SecurityPolicy';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get entities(): Array<runtime.SecurityEntity> {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set entities(v: Array<runtime.SecurityEntity>) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get credentials(): Map<string, runtime.UserCredential> {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set credentials(v: Map<string, runtime.UserCredential>) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get roles(): Map<string, runtime.UserRole> {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set roles(v: Map<string, runtime.UserRole>) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get fields(): runtime.SecurityFields | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set fields(v: runtime.SecurityFields | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
 static permissions($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<Array<string>> {
      return $g.call('runtime::SecurityPolicy::permissions', undefined, $signal);
    }
  static create($g: $sdk.GreyCat, entities: Array<runtime.SecurityEntity>, credentials: Map<string, runtime.UserCredential>, roles: Map<string, runtime.UserRole>, fields: runtime.SecurityFields | null): SecurityPolicy {
    return new SecurityPolicy($g.abi.libs_by_name.get(stdlib.name)!.mapped[49], entities, credentials, roles, fields);
  }
}

export class License extends $sdk.GCObject {
  static readonly _type = 'runtime::License';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get name(): string | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get start(): $sdk.std.core.time {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set start(v: $sdk.std.core.time) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get end(): $sdk.std.core.time {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set end(v: $sdk.std.core.time) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get company(): string | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set company(v: string | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get max_workers(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set max_workers(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get max_memory(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set max_memory(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public get extra_1(): bigint | number | null {
    return this.$attrs[this.$type.generated_offsets[6]];
  }
  public set extra_1(v: bigint | number | null) {
    this.$attrs[this.$type.generated_offsets[6]] = v;
  }
  public get extra_2(): bigint | number | null {
    return this.$attrs[this.$type.generated_offsets[7]];
  }
  public set extra_2(v: bigint | number | null) {
    this.$attrs[this.$type.generated_offsets[7]] = v;
  }
  public get extra_3(): bigint | number | null {
    return this.$attrs[this.$type.generated_offsets[8]];
  }
  public set extra_3(v: bigint | number | null) {
    this.$attrs[this.$type.generated_offsets[8]] = v;
  }
  public get extra_4(): bigint | number | null {
    return this.$attrs[this.$type.generated_offsets[9]];
  }
  public set extra_4(v: bigint | number | null) {
    this.$attrs[this.$type.generated_offsets[9]] = v;
  }
  static create($g: $sdk.GreyCat, name: string | null, start: $sdk.std.core.time, end: $sdk.std.core.time, company: string | null, max_workers: bigint | number, max_memory: bigint | number, extra_1: bigint | number | null, extra_2: bigint | number | null, extra_3: bigint | number | null, extra_4: bigint | number | null): License {
    return new License($g.abi.libs_by_name.get(stdlib.name)!.mapped[50], name, start, end, company, max_workers, max_memory, extra_1, extra_2, extra_3, extra_4);
  }
}

export class Task extends $sdk.GCObject {
  static readonly _type = 'runtime::Task';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get user_id(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set user_id(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get task_id(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set task_id(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get mod(): string | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set mod(v: string | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get type(): string | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set type(v: string | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get fun(): string | null {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set fun(v: string | null) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get creation(): $sdk.std.core.time {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set creation(v: $sdk.std.core.time) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public get status(): runtime.TaskStatus {
    return this.$attrs[this.$type.generated_offsets[6]];
  }
  public set status(v: runtime.TaskStatus) {
    this.$attrs[this.$type.generated_offsets[6]] = v;
  }
 static running($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<Array<runtime.TaskInfo>> {
      return $g.call('runtime::Task::running', undefined, $signal);
    }
 static history($g: $sdk.GreyCat, offset: bigint | number, max: bigint | number, $signal?: AbortSignal): Promise<Array<runtime.Task>> {
      return $g.call('runtime::Task::history', [offset, max], $signal);
    }
 static cancel($g: $sdk.GreyCat, task_id: bigint | number, $signal?: AbortSignal): Promise<boolean> {
      return $g.call('runtime::Task::cancel', [task_id], $signal);
    }
 static info($g: $sdk.GreyCat, user_id: bigint | number, task_id: bigint | number, $signal?: AbortSignal): Promise<runtime.TaskInfo | null> {
      return $g.call('runtime::Task::info', [user_id, task_id], $signal);
    }
  static create($g: $sdk.GreyCat, user_id: bigint | number, task_id: bigint | number, mod: string | null, type: string | null, fun: string | null, creation: $sdk.std.core.time, status: runtime.TaskStatus): Task {
    return new Task($g.abi.libs_by_name.get(stdlib.name)!.mapped[51], user_id, task_id, mod, type, fun, creation, status);
  }
}

export class UserCredential extends $sdk.GCObject {
  static readonly _type = 'runtime::UserCredential';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get offset(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set offset(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get pass(): string | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set pass(v: string | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, offset: bigint | number, pass: string | null): UserCredential {
    return new UserCredential($g.abi.libs_by_name.get(stdlib.name)!.mapped[52], offset, pass);
  }
}

export class StoreStat extends $sdk.GCObject {
  static readonly _type = 'runtime::StoreStat';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get capacity_bytes(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set capacity_bytes(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get allocated_bytes(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set allocated_bytes(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get allocated_ratio(): number {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set allocated_ratio(v: number) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get remained_bytes(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set remained_bytes(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get remained_ratio(): number {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set remained_ratio(v: number) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get used_bytes(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set used_bytes(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public get used_ratio(): number {
    return this.$attrs[this.$type.generated_offsets[6]];
  }
  public set used_ratio(v: number) {
    this.$attrs[this.$type.generated_offsets[6]] = v;
  }
  public get available_bytes(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[7]];
  }
  public set available_bytes(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[7]] = v;
  }
  public get available_ratio(): number {
    return this.$attrs[this.$type.generated_offsets[8]];
  }
  public set available_ratio(v: number) {
    this.$attrs[this.$type.generated_offsets[8]] = v;
  }
  static create($g: $sdk.GreyCat, capacity_bytes: bigint | number, allocated_bytes: bigint | number, allocated_ratio: number, remained_bytes: bigint | number, remained_ratio: number, used_bytes: bigint | number, used_ratio: number, available_bytes: bigint | number, available_ratio: number): StoreStat {
    return new StoreStat($g.abi.libs_by_name.get(stdlib.name)!.mapped[53], capacity_bytes, allocated_bytes, allocated_ratio, remained_bytes, remained_ratio, used_bytes, used_ratio, available_bytes, available_ratio);
  }
}

export class UserGroup extends $sdk.GCObject {
  static readonly _type = 'runtime::UserGroup';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get id(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set id(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get name(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set name(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get activated(): boolean {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set activated(v: boolean) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
 static all($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<Array<runtime.SecurityEntity>> {
      return $g.call('runtime::SecurityEntity::all', undefined, $signal);
    }
 static set_($g: $sdk.GreyCat, entity: runtime.SecurityEntity, $signal?: AbortSignal): Promise<bigint | number | null> {
      return $g.call('runtime::SecurityEntity::set_', [entity], $signal);
    }
  static create($g: $sdk.GreyCat, id: bigint | number, name: string, activated: boolean): UserGroup {
    return new UserGroup($g.abi.libs_by_name.get(stdlib.name)!.mapped[54], id, name, activated);
  }
}

export class OpenIDConnect extends $sdk.GCObject {
  static readonly _type = 'runtime::OpenIDConnect';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get url(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set url(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get clientId(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set clientId(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
 static config($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<runtime.OpenIDConnect | null> {
      return $g.call('runtime::OpenIDConnect::config', undefined, $signal);
    }
  static create($g: $sdk.GreyCat, url: string, clientId: string): OpenIDConnect {
    return new OpenIDConnect($g.abi.libs_by_name.get(stdlib.name)!.mapped[55], url, clientId);
  }
}

export class SecurityEntity extends $sdk.GCObject {
  static readonly _type = 'runtime::SecurityEntity';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get id(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set id(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get name(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set name(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get activated(): boolean {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set activated(v: boolean) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
 static all($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<Array<runtime.SecurityEntity>> {
      return $g.call('runtime::SecurityEntity::all', undefined, $signal);
    }
 static set_($g: $sdk.GreyCat, entity: runtime.SecurityEntity, $signal?: AbortSignal): Promise<bigint | number | null> {
      return $g.call('runtime::SecurityEntity::set_', [entity], $signal);
    }
  static create($g: $sdk.GreyCat, id: bigint | number, name: string, activated: boolean): SecurityEntity {
    return new SecurityEntity($g.abi.libs_by_name.get(stdlib.name)!.mapped[56], id, name, activated);
  }
}

}

export namespace io {
export class CsvColumnString extends $sdk.GCObject {
  static readonly _type = 'io::CsvColumnString';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get name(): string | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get mandatory(): boolean | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set mandatory(v: boolean | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get trim(): boolean | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set trim(v: boolean | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get try_number(): boolean | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set try_number(v: boolean | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get try_json(): boolean | null {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set try_json(v: boolean | null) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get values(): Array<string> | null {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set values(v: Array<string> | null) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public get encoder(): io.TextEncoder | null {
    return this.$attrs[this.$type.generated_offsets[6]];
  }
  public set encoder(v: io.TextEncoder | null) {
    this.$attrs[this.$type.generated_offsets[6]] = v;
  }
  static create($g: $sdk.GreyCat, name: string | null, mandatory: boolean | null, trim: boolean | null, try_number: boolean | null, try_json: boolean | null, values: Array<string> | null, encoder: io.TextEncoder | null): CsvColumnString {
    return new CsvColumnString($g.abi.libs_by_name.get(stdlib.name)!.mapped[57], name, mandatory, trim, try_number, try_json, values, encoder);
  }
}

export class CsvColumnTime extends $sdk.GCObject {
  static readonly _type = 'io::CsvColumnTime';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get name(): string | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get mandatory(): boolean | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set mandatory(v: boolean | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get unit(): core.DurationUnit | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set unit(v: core.DurationUnit | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  static create($g: $sdk.GreyCat, name: string | null, mandatory: boolean | null, unit: core.DurationUnit | null): CsvColumnTime {
    return new CsvColumnTime($g.abi.libs_by_name.get(stdlib.name)!.mapped[58], name, mandatory, unit);
  }
}

export class CsvColumnDuration extends $sdk.GCObject {
  static readonly _type = 'io::CsvColumnDuration';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get name(): string | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get mandatory(): boolean | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set mandatory(v: boolean | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get unit(): core.DurationUnit | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set unit(v: core.DurationUnit | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  static create($g: $sdk.GreyCat, name: string | null, mandatory: boolean | null, unit: core.DurationUnit | null): CsvColumnDuration {
    return new CsvColumnDuration($g.abi.libs_by_name.get(stdlib.name)!.mapped[59], name, mandatory, unit);
  }
}

export class Email extends $sdk.GCObject {
  static readonly _type = 'io::Email';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get from(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set from(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get subject(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set subject(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get body(): string {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set body(v: string) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get body_is_html(): boolean {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set body_is_html(v: boolean) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get to(): Array<string> {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set to(v: Array<string>) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get cc(): Array<string> | null {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set cc(v: Array<string> | null) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public get bcc(): Array<string> | null {
    return this.$attrs[this.$type.generated_offsets[6]];
  }
  public set bcc(v: Array<string> | null) {
    this.$attrs[this.$type.generated_offsets[6]] = v;
  }
  static create($g: $sdk.GreyCat, from: string, subject: string, body: string, body_is_html: boolean, to: Array<string>, cc: Array<string> | null, bcc: Array<string> | null): Email {
    return new Email($g.abi.libs_by_name.get(stdlib.name)!.mapped[60], from, subject, body, body_is_html, to, cc, bcc);
  }
}

export class Smtp extends $sdk.GCObject {
  static readonly _type = 'io::Smtp';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get host(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set host(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get port(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set port(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get mode(): io.SmtpMode | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set mode(v: io.SmtpMode | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get authenticate(): io.SmtpAuth | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set authenticate(v: io.SmtpAuth | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get user(): string | null {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set user(v: string | null) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get pass(): string | null {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set pass(v: string | null) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  static create($g: $sdk.GreyCat, host: string, port: bigint | number, mode: io.SmtpMode | null, authenticate: io.SmtpAuth | null, user: string | null, pass: string | null): Smtp {
    return new Smtp($g.abi.libs_by_name.get(stdlib.name)!.mapped[61], host, port, mode, authenticate, user, pass);
  }
}

export class CsvColumnFloat extends $sdk.GCObject {
  static readonly _type = 'io::CsvColumnFloat';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get name(): string | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get mandatory(): boolean | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set mandatory(v: boolean | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, name: string | null, mandatory: boolean | null): CsvColumnFloat {
    return new CsvColumnFloat($g.abi.libs_by_name.get(stdlib.name)!.mapped[62], name, mandatory);
  }
}

export class CsvFormat extends $sdk.GCObject {
  static readonly _type = 'io::CsvFormat';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get header_lines(): bigint | number | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set header_lines(v: bigint | number | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get infer(): boolean | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set infer(v: boolean | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get separator(): string | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set separator(v: string | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get string_delimiter(): string | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set string_delimiter(v: string | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get decimal_separator(): string | null {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set decimal_separator(v: string | null) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get thousands_separator(): string | null {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set thousands_separator(v: string | null) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public get columns(): Array<io.CsvColumn> | null {
    return this.$attrs[this.$type.generated_offsets[6]];
  }
  public set columns(v: Array<io.CsvColumn> | null) {
    this.$attrs[this.$type.generated_offsets[6]] = v;
  }
  static create($g: $sdk.GreyCat, header_lines: bigint | number | null, infer: boolean | null, separator: string | null, string_delimiter: string | null, decimal_separator: string | null, thousands_separator: string | null, columns: Array<io.CsvColumn> | null): CsvFormat {
    return new CsvFormat($g.abi.libs_by_name.get(stdlib.name)!.mapped[63], header_lines, infer, separator, string_delimiter, decimal_separator, thousands_separator, columns);
  }
}

export class File extends $sdk.GCObject {
  static readonly _type = 'io::File';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get path(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set path(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get size(): bigint | number | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set size(v: bigint | number | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get last_modification(): $sdk.std.core.time | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set last_modification(v: $sdk.std.core.time | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  static create($g: $sdk.GreyCat, path: string, size: bigint | number | null, last_modification: $sdk.std.core.time | null): File {
    return new File($g.abi.libs_by_name.get(stdlib.name)!.mapped[64], path, size, last_modification);
  }
}

export class TextEncoder extends $sdk.GCEnum {
  static readonly _type = 'io::TextEncoder';

  public static plain($g: $sdk.GreyCat): io.TextEncoder {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[65];
    return t.enum_values![t.generated_offsets[0]] as io.TextEncoder;
  }
  public static base64($g: $sdk.GreyCat): io.TextEncoder {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[65];
    return t.enum_values![t.generated_offsets[1]] as io.TextEncoder;
  }
  public static base64url($g: $sdk.GreyCat): io.TextEncoder {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[65];
    return t.enum_values![t.generated_offsets[2]] as io.TextEncoder;
  }
  public static hexadecimal($g: $sdk.GreyCat): io.TextEncoder {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[65];
    return t.enum_values![t.generated_offsets[3]] as io.TextEncoder;
  }
}

export class CsvColumn extends $sdk.GCObject {
  static readonly _type = 'io::CsvColumn';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get name(): string | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get mandatory(): boolean | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set mandatory(v: boolean | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, name: string | null, mandatory: boolean | null): CsvColumn {
    return new CsvColumn($g.abi.libs_by_name.get(stdlib.name)!.mapped[66], name, mandatory);
  }
}

export class CsvColumnDate extends $sdk.GCObject {
  static readonly _type = 'io::CsvColumnDate';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get name(): string | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get mandatory(): boolean | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set mandatory(v: boolean | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get format(): string | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set format(v: string | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get tz(): core.TimeZone | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set tz(v: core.TimeZone | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get as_time(): boolean | null {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set as_time(v: boolean | null) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  static create($g: $sdk.GreyCat, name: string | null, mandatory: boolean | null, format: string | null, tz: core.TimeZone | null, as_time: boolean | null): CsvColumnDate {
    return new CsvColumnDate($g.abi.libs_by_name.get(stdlib.name)!.mapped[67], name, mandatory, format, tz, as_time);
  }
}

export class SmtpAuth extends $sdk.GCEnum {
  static readonly _type = 'io::SmtpAuth';

  public static none($g: $sdk.GreyCat): io.SmtpAuth {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[68];
    return t.enum_values![t.generated_offsets[0]] as io.SmtpAuth;
  }
  public static plain($g: $sdk.GreyCat): io.SmtpAuth {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[68];
    return t.enum_values![t.generated_offsets[1]] as io.SmtpAuth;
  }
  public static login($g: $sdk.GreyCat): io.SmtpAuth {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[68];
    return t.enum_values![t.generated_offsets[2]] as io.SmtpAuth;
  }
}

export class Http extends $sdk.GCObject {
  static readonly _type = 'io::Http';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  static create($g: $sdk.GreyCat): Http {
    return new Http($g.abi.libs_by_name.get(stdlib.name)!.mapped[69]);
  }
}

export class CsvColumnBoolean extends $sdk.GCObject {
  static readonly _type = 'io::CsvColumnBoolean';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get name(): string | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get mandatory(): boolean | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set mandatory(v: boolean | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, name: string | null, mandatory: boolean | null): CsvColumnBoolean {
    return new CsvColumnBoolean($g.abi.libs_by_name.get(stdlib.name)!.mapped[70], name, mandatory);
  }
}

export class Url extends $sdk.GCObject {
  static readonly _type = 'io::Url';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get protocol(): string | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set protocol(v: string | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get host(): string | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set host(v: string | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get port(): bigint | number | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set port(v: bigint | number | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get path(): string | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set path(v: string | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get params(): Map<string, string> | null {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set params(v: Map<string, string> | null) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get hash(): string | null {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set hash(v: string | null) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  static create($g: $sdk.GreyCat, protocol: string | null, host: string | null, port: bigint | number | null, path: string | null, params: Map<string, string> | null, hash: string | null): Url {
    return new Url($g.abi.libs_by_name.get(stdlib.name)!.mapped[71], protocol, host, port, path, params, hash);
  }
}

export class CsvColumnIgnored extends $sdk.GCObject {
  static readonly _type = 'io::CsvColumnIgnored';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get name(): string | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get mandatory(): boolean | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set mandatory(v: boolean | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, name: string | null, mandatory: boolean | null): CsvColumnIgnored {
    return new CsvColumnIgnored($g.abi.libs_by_name.get(stdlib.name)!.mapped[72], name, mandatory);
  }
}

export class SmtpMode extends $sdk.GCEnum {
  static readonly _type = 'io::SmtpMode';

  public static plain($g: $sdk.GreyCat): io.SmtpMode {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[73];
    return t.enum_values![t.generated_offsets[0]] as io.SmtpMode;
  }
  public static ssl_tls($g: $sdk.GreyCat): io.SmtpMode {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[73];
    return t.enum_values![t.generated_offsets[1]] as io.SmtpMode;
  }
  public static starttls($g: $sdk.GreyCat): io.SmtpMode {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[73];
    return t.enum_values![t.generated_offsets[2]] as io.SmtpMode;
  }
}

export class CsvColumnInteger extends $sdk.GCObject {
  static readonly _type = 'io::CsvColumnInteger';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get name(): string | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get mandatory(): boolean | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set mandatory(v: boolean | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, name: string | null, mandatory: boolean | null): CsvColumnInteger {
    return new CsvColumnInteger($g.abi.libs_by_name.get(stdlib.name)!.mapped[74], name, mandatory);
  }
}

export class HttpHeader extends $sdk.GCObject {
  static readonly _type = 'io::HttpHeader';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get name(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get value(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set value(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, name: string, value: string): HttpHeader {
    return new HttpHeader($g.abi.libs_by_name.get(stdlib.name)!.mapped[75], name, value);
  }
}

}

export namespace math {
export class MathConstants extends $sdk.GCObject {
  static readonly _type = 'math::MathConstants';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public static e($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[76];
    return  t.static_values[0] as number;
  }
  public static log_2e($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[76];
    return  t.static_values[1] as number;
  }
  public static log_10e($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[76];
    return  t.static_values[2] as number;
  }
  public static ln2($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[76];
    return  t.static_values[3] as number;
  }
  public static ln10($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[76];
    return  t.static_values[4] as number;
  }
  public static pi($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[76];
    return  t.static_values[5] as number;
  }
  public static pi_2($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[76];
    return  t.static_values[6] as number;
  }
  public static pi_4($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[76];
    return  t.static_values[7] as number;
  }
  public static m1_pi($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[76];
    return  t.static_values[8] as number;
  }
  public static m2_pi($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[76];
    return  t.static_values[9] as number;
  }
  public static m2_sqrt_pi($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[76];
    return  t.static_values[10] as number;
  }
  public static sqrt2($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[76];
    return  t.static_values[11] as number;
  }
  public static sqrt1_2($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[76];
    return  t.static_values[12] as number;
  }
  static create($g: $sdk.GreyCat): MathConstants {
    return new MathConstants($g.abi.libs_by_name.get(stdlib.name)!.mapped[76]);
  }
}

}

export namespace util {
export class ProgressTracker extends $sdk.GCObject {
  static readonly _type = 'util::ProgressTracker';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get start(): $sdk.std.core.time {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set start(v: $sdk.std.core.time) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get total(): bigint | number | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set total(v: bigint | number | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get counter(): bigint | number | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set counter(v: bigint | number | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get duration(): $sdk.std.core.duration | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set duration(v: $sdk.std.core.duration | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get progress(): number | null {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set progress(v: number | null) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get speed(): number | null {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set speed(v: number | null) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public get remaining(): $sdk.std.core.duration | null {
    return this.$attrs[this.$type.generated_offsets[6]];
  }
  public set remaining(v: $sdk.std.core.duration | null) {
    this.$attrs[this.$type.generated_offsets[6]] = v;
  }
  static create($g: $sdk.GreyCat, start: $sdk.std.core.time, total: bigint | number | null, counter: bigint | number | null, duration: $sdk.std.core.duration | null, progress: number | null, speed: number | null, remaining: $sdk.std.core.duration | null): ProgressTracker {
    return new ProgressTracker($g.abi.libs_by_name.get(stdlib.name)!.mapped[77], start, total, counter, duration, progress, speed, remaining);
  }
}

export class Crypto extends $sdk.GCObject {
  static readonly _type = 'util::Crypto';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  static create($g: $sdk.GreyCat): Crypto {
    return new Crypto($g.abi.libs_by_name.get(stdlib.name)!.mapped[78]);
  }
}

export class HistogramFloat extends std_n.util.HistogramFloat {}

export class TimeWindow extends std_n.util.TimeWindow {}

export class Iban extends std_n.util.Iban {}

export class Gaussian extends $sdk.GCObject {
  static readonly _type = 'util::Gaussian';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get sum(): number | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set sum(v: number | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get sum_sq(): number | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set sum_sq(v: number | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get count(): bigint | number | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set count(v: bigint | number | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get min(): number | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set min(v: number | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get max(): number | null {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set max(v: number | null) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  static create($g: $sdk.GreyCat, sum: number | null, sum_sq: number | null, count: bigint | number | null, min: number | null, max: number | null): Gaussian {
    return new Gaussian($g.abi.libs_by_name.get(stdlib.name)!.mapped[82], sum, sum_sq, count, min, max);
  }
}

export class BoxPlotFloat extends $sdk.GCObject {
  static readonly _type = 'util::BoxPlotFloat';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get min(): number {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set min(v: number) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get max(): number {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set max(v: number) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get whiskerLow(): number {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set whiskerLow(v: number) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get whiskerHigh(): number {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set whiskerHigh(v: number) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get percentile1(): number {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set percentile1(v: number) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get percentile5(): number {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set percentile5(v: number) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public get percentile25(): number {
    return this.$attrs[this.$type.generated_offsets[6]];
  }
  public set percentile25(v: number) {
    this.$attrs[this.$type.generated_offsets[6]] = v;
  }
  public get percentile50(): number {
    return this.$attrs[this.$type.generated_offsets[7]];
  }
  public set percentile50(v: number) {
    this.$attrs[this.$type.generated_offsets[7]] = v;
  }
  public get percentile75(): number {
    return this.$attrs[this.$type.generated_offsets[8]];
  }
  public set percentile75(v: number) {
    this.$attrs[this.$type.generated_offsets[8]] = v;
  }
  public get percentile95(): number {
    return this.$attrs[this.$type.generated_offsets[9]];
  }
  public set percentile95(v: number) {
    this.$attrs[this.$type.generated_offsets[9]] = v;
  }
  public get percentile99(): number {
    return this.$attrs[this.$type.generated_offsets[10]];
  }
  public set percentile99(v: number) {
    this.$attrs[this.$type.generated_offsets[10]] = v;
  }
  public get countOutliersLow(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[11]];
  }
  public set countOutliersLow(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[11]] = v;
  }
  public get countOutliersHigh(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[12]];
  }
  public set countOutliersHigh(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[12]] = v;
  }
  public get percentageOutliersLow(): number {
    return this.$attrs[this.$type.generated_offsets[13]];
  }
  public set percentageOutliersLow(v: number) {
    this.$attrs[this.$type.generated_offsets[13]] = v;
  }
  public get percentageOutliersHigh(): number {
    return this.$attrs[this.$type.generated_offsets[14]];
  }
  public set percentageOutliersHigh(v: number) {
    this.$attrs[this.$type.generated_offsets[14]] = v;
  }
  public get sum(): number {
    return this.$attrs[this.$type.generated_offsets[15]];
  }
  public set sum(v: number) {
    this.$attrs[this.$type.generated_offsets[15]] = v;
  }
  public get avg(): number {
    return this.$attrs[this.$type.generated_offsets[16]];
  }
  public set avg(v: number) {
    this.$attrs[this.$type.generated_offsets[16]] = v;
  }
  public get std(): number {
    return this.$attrs[this.$type.generated_offsets[17]];
  }
  public set std(v: number) {
    this.$attrs[this.$type.generated_offsets[17]] = v;
  }
  public get size(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[18]];
  }
  public set size(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[18]] = v;
  }
  static create($g: $sdk.GreyCat, min: number, max: number, whiskerLow: number, whiskerHigh: number, percentile1: number, percentile5: number, percentile25: number, percentile50: number, percentile75: number, percentile95: number, percentile99: number, countOutliersLow: bigint | number, countOutliersHigh: bigint | number, percentageOutliersLow: number, percentageOutliersHigh: number, sum: number, avg: number, std: number, size: bigint | number): BoxPlotFloat {
    return new BoxPlotFloat($g.abi.libs_by_name.get(stdlib.name)!.mapped[83], min, max, whiskerLow, whiskerHigh, percentile1, percentile5, percentile25, percentile50, percentile75, percentile95, percentile99, countOutliersLow, countOutliersHigh, percentageOutliersLow, percentageOutliersHigh, sum, avg, std, size);
  }
}

export class Assert extends $sdk.GCObject {
  static readonly _type = 'util::Assert';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  static create($g: $sdk.GreyCat): Assert {
    return new Assert($g.abi.libs_by_name.get(stdlib.name)!.mapped[84]);
  }
}

export class SlidingWindow extends std_n.util.SlidingWindow {}

export class HistogramInt extends std_n.util.HistogramInt {}

export class Quantizer extends std_n.util.Quantizer {}

export class GaussianProfile extends std_n.util.GaussianProfile {}

export class Queue extends std_n.util.Queue {}

export class Buffer extends std_n.util.Buffer {}

export class Random extends $sdk.GCObject {
  static readonly _type = 'util::Random';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get seed(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set seed(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get v(): number {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set v(v: number) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, seed: bigint | number, v: number): Random {
    return new Random($g.abi.libs_by_name.get(stdlib.name)!.mapped[91], seed, v);
  }
}

export class BoxPlotInt extends $sdk.GCObject {
  static readonly _type = 'util::BoxPlotInt';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get min(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set min(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get max(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set max(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get whiskerLow(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set whiskerLow(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get whiskerHigh(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set whiskerHigh(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get percentile1(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set percentile1(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get percentile5(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set percentile5(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public get percentile25(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[6]];
  }
  public set percentile25(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[6]] = v;
  }
  public get percentile50(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[7]];
  }
  public set percentile50(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[7]] = v;
  }
  public get percentile75(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[8]];
  }
  public set percentile75(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[8]] = v;
  }
  public get percentile95(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[9]];
  }
  public set percentile95(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[9]] = v;
  }
  public get percentile99(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[10]];
  }
  public set percentile99(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[10]] = v;
  }
  public get countOutliersLow(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[11]];
  }
  public set countOutliersLow(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[11]] = v;
  }
  public get countOutliersHigh(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[12]];
  }
  public set countOutliersHigh(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[12]] = v;
  }
  public get percentageOutliersLow(): number {
    return this.$attrs[this.$type.generated_offsets[13]];
  }
  public set percentageOutliersLow(v: number) {
    this.$attrs[this.$type.generated_offsets[13]] = v;
  }
  public get percentageOutliersHigh(): number {
    return this.$attrs[this.$type.generated_offsets[14]];
  }
  public set percentageOutliersHigh(v: number) {
    this.$attrs[this.$type.generated_offsets[14]] = v;
  }
  public get sum(): number {
    return this.$attrs[this.$type.generated_offsets[15]];
  }
  public set sum(v: number) {
    this.$attrs[this.$type.generated_offsets[15]] = v;
  }
  public get avg(): number {
    return this.$attrs[this.$type.generated_offsets[16]];
  }
  public set avg(v: number) {
    this.$attrs[this.$type.generated_offsets[16]] = v;
  }
  public get std(): number {
    return this.$attrs[this.$type.generated_offsets[17]];
  }
  public set std(v: number) {
    this.$attrs[this.$type.generated_offsets[17]] = v;
  }
  public get size(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[18]];
  }
  public set size(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[18]] = v;
  }
  static create($g: $sdk.GreyCat, min: bigint | number, max: bigint | number, whiskerLow: bigint | number, whiskerHigh: bigint | number, percentile1: bigint | number, percentile5: bigint | number, percentile25: bigint | number, percentile50: bigint | number, percentile75: bigint | number, percentile95: bigint | number, percentile99: bigint | number, countOutliersLow: bigint | number, countOutliersHigh: bigint | number, percentageOutliersLow: number, percentageOutliersHigh: number, sum: number, avg: number, std: number, size: bigint | number): BoxPlotInt {
    return new BoxPlotInt($g.abi.libs_by_name.get(stdlib.name)!.mapped[92], min, max, whiskerLow, whiskerHigh, percentile1, percentile5, percentile25, percentile50, percentile75, percentile95, percentile99, countOutliersLow, countOutliersHigh, percentageOutliersLow, percentageOutliersHigh, sum, avg, std, size);
  }
}

}

export const stdlib: $sdk.Library = {
  name: 'std',
  mapped: [],
  configure(loaders, factories) {
    factories.set(core.TableColumnMeta._type, core.TableColumnMeta);
    factories.set(core.SamplingMode._type, core.SamplingMode);
    factories.set(core.nodeList._type, core.nodeList);
    loaders.set(core.nodeList._type, std_n.core.nodeList.load);
    factories.set(core.Table._type, core.Table);
    loaders.set(core.Table._type, std_n.core.Table.load);
    factories.set(core.DatePart._type, core.DatePart);
    factories.set(core.GeoCircle._type, core.GeoCircle);
    factories.set(core.nodeIndexBucket._type, core.nodeIndexBucket);
    loaders.set(core.nodeIndexBucket._type, std_n.core.nodeIndexBucket.load);
    factories.set(core.time._type, core.time);
    loaders.set(core.time._type, std_n.core.time.load);
    factories.set(core.nodeTime._type, core.nodeTime);
    loaders.set(core.nodeTime._type, std_n.core.nodeTime.load);
    factories.set(core.NodeTimeInfo._type, core.NodeTimeInfo);
    factories.set(core.ErrorCode._type, core.ErrorCode);
    factories.set(core.Error._type, core.Error);
    loaders.set(core.Error._type, std_n.core.Error.load);
    factories.set(core.Map._type, core.Map);
    loaders.set(core.Map._type, std_n.core.Map.load);
    factories.set(core.geo._type, core.geo);
    loaders.set(core.geo._type, std_n.core.geo.load);
    factories.set(core.ti2d._type, core.ti2d);
    loaders.set(core.ti2d._type, std_n.core.ti2d.load);
    factories.set(core.tf3d._type, core.tf3d);
    loaders.set(core.tf3d._type, std_n.core.tf3d.load);
    factories.set(core.TensorType._type, core.TensorType);
    factories.set(core.GeoPoly._type, core.GeoPoly);
    factories.set(core.DurationUnit._type, core.DurationUnit);
    factories.set(core.duration._type, core.duration);
    loaders.set(core.duration._type, std_n.core.duration.load);
    factories.set(core.node._type, core.node);
    loaders.set(core.node._type, std_n.core.node.load);
    factories.set(core.Date._type, core.Date);
    loaders.set(core.Date._type, std_n.core.Date.load);
    factories.set(core.tf4d._type, core.tf4d);
    loaders.set(core.tf4d._type, std_n.core.tf4d.load);
    factories.set(core.Tensor._type, core.Tensor);
    loaders.set(core.Tensor._type, std_n.core.Tensor.load);
    factories.set(core.ti6d._type, core.ti6d);
    loaders.set(core.ti6d._type, std_n.core.ti6d.load);
    factories.set(core.ti4d._type, core.ti4d);
    loaders.set(core.ti4d._type, std_n.core.ti4d.load);
    factories.set(core.ti10d._type, core.ti10d);
    loaders.set(core.ti10d._type, std_n.core.ti10d.load);
    factories.set(core.TimeZone._type, core.TimeZone);
    factories.set(core.nodeGeo._type, core.nodeGeo);
    loaders.set(core.nodeGeo._type, std_n.core.nodeGeo.load);
    factories.set(core.ti3d._type, core.ti3d);
    loaders.set(core.ti3d._type, std_n.core.ti3d.load);
    factories.set(core.Tuple._type, core.Tuple);
    factories.set(core.any._type, core.any);
    factories.set(core.nodeIndex._type, core.nodeIndex);
    loaders.set(core.nodeIndex._type, std_n.core.nodeIndex.load);
    factories.set(core.tf2d._type, core.tf2d);
    loaders.set(core.tf2d._type, std_n.core.tf2d.load);
    factories.set(core.GeoBox._type, core.GeoBox);
    factories.set(core.Array._type, core.Array);
    loaders.set(core.Array._type, std_n.core.Array.load);
    factories.set(core.String._type, core.String);
    loaders.set(core.String._type, std_n.core.String.load);
    factories.set(core.ti5d._type, core.ti5d);
    loaders.set(core.ti5d._type, std_n.core.ti5d.load);
    factories.set(runtime.UserGroupPolicyType._type, runtime.UserGroupPolicyType);
    factories.set(runtime.UserRole._type, runtime.UserRole);
    factories.set(runtime.TaskStatus._type, runtime.TaskStatus);
    factories.set(runtime.Runtime._type, runtime.Runtime);
    factories.set(runtime.User._type, runtime.User);
    factories.set(runtime.SecurityFields._type, runtime.SecurityFields);
    factories.set(runtime.UserGroupPolicy._type, runtime.UserGroupPolicy);
    factories.set(runtime.TaskInfo._type, runtime.TaskInfo);
    factories.set(runtime.PeriodicTask._type, runtime.PeriodicTask);
    factories.set(runtime.RuntimeInfo._type, runtime.RuntimeInfo);
    factories.set(runtime.System._type, runtime.System);
    factories.set(runtime.SecurityPolicy._type, runtime.SecurityPolicy);
    factories.set(runtime.License._type, runtime.License);
    factories.set(runtime.Task._type, runtime.Task);
    factories.set(runtime.UserCredential._type, runtime.UserCredential);
    factories.set(runtime.StoreStat._type, runtime.StoreStat);
    factories.set(runtime.UserGroup._type, runtime.UserGroup);
    factories.set(runtime.OpenIDConnect._type, runtime.OpenIDConnect);
    factories.set(runtime.SecurityEntity._type, runtime.SecurityEntity);
    factories.set(io.CsvColumnString._type, io.CsvColumnString);
    factories.set(io.CsvColumnTime._type, io.CsvColumnTime);
    factories.set(io.CsvColumnDuration._type, io.CsvColumnDuration);
    factories.set(io.Email._type, io.Email);
    factories.set(io.Smtp._type, io.Smtp);
    factories.set(io.CsvColumnFloat._type, io.CsvColumnFloat);
    factories.set(io.CsvFormat._type, io.CsvFormat);
    factories.set(io.File._type, io.File);
    factories.set(io.TextEncoder._type, io.TextEncoder);
    factories.set(io.CsvColumn._type, io.CsvColumn);
    factories.set(io.CsvColumnDate._type, io.CsvColumnDate);
    factories.set(io.SmtpAuth._type, io.SmtpAuth);
    factories.set(io.Http._type, io.Http);
    factories.set(io.CsvColumnBoolean._type, io.CsvColumnBoolean);
    factories.set(io.Url._type, io.Url);
    factories.set(io.CsvColumnIgnored._type, io.CsvColumnIgnored);
    factories.set(io.SmtpMode._type, io.SmtpMode);
    factories.set(io.CsvColumnInteger._type, io.CsvColumnInteger);
    factories.set(io.HttpHeader._type, io.HttpHeader);
    factories.set(math.MathConstants._type, math.MathConstants);
    factories.set(util.ProgressTracker._type, util.ProgressTracker);
    factories.set(util.Crypto._type, util.Crypto);
    factories.set(util.HistogramFloat._type, util.HistogramFloat);
    loaders.set(util.HistogramFloat._type, std_n.util.HistogramFloat.load);
    factories.set(util.TimeWindow._type, util.TimeWindow);
    loaders.set(util.TimeWindow._type, std_n.util.TimeWindow.load);
    factories.set(util.Iban._type, util.Iban);
    loaders.set(util.Iban._type, std_n.util.Iban.load);
    factories.set(util.Gaussian._type, util.Gaussian);
    factories.set(util.BoxPlotFloat._type, util.BoxPlotFloat);
    factories.set(util.Assert._type, util.Assert);
    factories.set(util.SlidingWindow._type, util.SlidingWindow);
    loaders.set(util.SlidingWindow._type, std_n.util.SlidingWindow.load);
    factories.set(util.HistogramInt._type, util.HistogramInt);
    loaders.set(util.HistogramInt._type, std_n.util.HistogramInt.load);
    factories.set(util.Quantizer._type, util.Quantizer);
    loaders.set(util.Quantizer._type, std_n.util.Quantizer.load);
    factories.set(util.GaussianProfile._type, util.GaussianProfile);
    loaders.set(util.GaussianProfile._type, std_n.util.GaussianProfile.load);
    factories.set(util.Queue._type, util.Queue);
    loaders.set(util.Queue._type, std_n.util.Queue.load);
    factories.set(util.Buffer._type, util.Buffer);
    loaders.set(util.Buffer._type, std_n.util.Buffer.load);
    factories.set(util.Random._type, util.Random);
    factories.set(util.BoxPlotInt._type, util.BoxPlotInt);
  },
  init(abi) {
    this.mapped.length = 93;
    this.mapped[0] = abi.type_by_fqn.get(core.TableColumnMeta._type)!;
    this.mapped[0].resolveGeneratedOffsets('type','size','index','min','max','avg','std');
    this.mapped[1] = abi.type_by_fqn.get(core.SamplingMode._type)!;
    this.mapped[1].resolveGeneratedOffsetWithValues('fixed', 0,'fixed_reg', 1,'adaptative', 2,'dense', 3);
    this.mapped[2] = abi.type_by_fqn.get(core.nodeList._type)!;
    this.mapped[3] = abi.type_by_fqn.get(core.Table._type)!;
    this.mapped[4] = abi.type_by_fqn.get(core.DatePart._type)!;
    this.mapped[4].resolveGeneratedOffsetWithValues('years', 0,'months', 1,'days', 2,'hours', 3,'minutes', 4,'seconds', 5,'microseconds', 6);
    this.mapped[5] = abi.type_by_fqn.get(core.GeoCircle._type)!;
    this.mapped[5].resolveGeneratedOffsets('center','radius');
    this.mapped[6] = abi.type_by_fqn.get(core.nodeIndexBucket._type)!;
    this.mapped[7] = abi.type_by_fqn.get(core.time._type)!;
    this.mapped[7].static_values = [abi.createTime(-9223372036854775808n),abi.createTime(9223372036854775807n)];
    this.mapped[8] = abi.type_by_fqn.get(core.nodeTime._type)!;
    this.mapped[9] = abi.type_by_fqn.get(core.NodeTimeInfo._type)!;
    this.mapped[9].resolveGeneratedOffsets('size','from','to');
    this.mapped[10] = abi.type_by_fqn.get(core.ErrorCode._type)!;
    this.mapped[10].resolveGeneratedOffsetWithValues('none', 0,'too_deep_workspace', 1,'too_deep_iterator', 2,'wrong_operand', 3,'wrong_params', 4,'wrong_param_type', 5,'wrong_numeric', 6,'wrong_state', 7,'wrong_null', 8,'unresolved_ref', 9,'assign_error', 10,'interrupted', 11,'throw', 12,'wrong_type', 13,'wrong_dimension', 14,'unsupported_operation', 15,'unsupported_type', 16,'dimensions_mismatch', 17,'timeout', 18,'forbidden', 19,'runtime_error', 20);
    this.mapped[11] = abi.type_by_fqn.get(core.Error._type)!;
    this.mapped[12] = abi.type_by_fqn.get(core.Map._type)!;
    this.mapped[13] = abi.type_by_fqn.get(core.geo._type)!;
    this.mapped[13].static_values = [abi.createGeo(-85.0511287602,-179.9999999581),abi.createGeo(85.0511287602,179.9999999581)];
    this.mapped[14] = abi.type_by_fqn.get(core.ti2d._type)!;
    this.mapped[15] = abi.type_by_fqn.get(core.tf3d._type)!;
    this.mapped[16] = abi.type_by_fqn.get(core.TensorType._type)!;
    this.mapped[16].resolveGeneratedOffsetWithValues('i32', 4,'i64', 8,'f32', 4,'f64', 8,'c64', 8,'c128', 16);
    this.mapped[17] = abi.type_by_fqn.get(core.GeoPoly._type)!;
    this.mapped[17].resolveGeneratedOffsets('points');
    this.mapped[18] = abi.type_by_fqn.get(core.DurationUnit._type)!;
    this.mapped[18].resolveGeneratedOffsetWithValues('microseconds', 1,'milliseconds', 1000,'seconds', 1000000,'minutes', 60000000,'hours', 3600000000,'days', 86400000000,'weeks', 604800000000,'months', 2628000000000,'years', 31536000000000);
    this.mapped[19] = abi.type_by_fqn.get(core.duration._type)!;
    this.mapped[20] = abi.type_by_fqn.get(core.node._type)!;
    this.mapped[21] = abi.type_by_fqn.get(core.Date._type)!;
    this.mapped[22] = abi.type_by_fqn.get(core.tf4d._type)!;
    this.mapped[23] = abi.type_by_fqn.get(core.Tensor._type)!;
    this.mapped[24] = abi.type_by_fqn.get(core.ti6d._type)!;
    this.mapped[25] = abi.type_by_fqn.get(core.ti4d._type)!;
    this.mapped[26] = abi.type_by_fqn.get(core.ti10d._type)!;
    this.mapped[27] = abi.type_by_fqn.get(core.TimeZone._type)!;
    this.mapped[27].resolveGeneratedOffsetWithValues('Africa_Accra', "Africa/Accra",'Africa_Bamako', "Africa/Bamako",'Africa_Banjul', "Africa/Banjul",'Africa_Conakry', "Africa/Conakry",'Africa_Dakar', "Africa/Dakar",'Africa_Freetown', "Africa/Freetown",'Africa_Lome', "Africa/Lome",'Africa_Nouakchott', "Africa/Nouakchott",'Africa_Ouagadougou', "Africa/Ouagadougou",'Africa_Timbuktu', "Africa/Timbuktu",'Atlantic_Reykjavik', "Atlantic/Reykjavik",'Atlantic_St_Helena', "Atlantic/St_Helena",'Iceland', "Iceland",'Egypt', "Egypt",'Africa_Maseru', "Africa/Maseru",'Africa_Mbabane', "Africa/Mbabane",'Africa_Bangui', "Africa/Bangui",'Africa_Brazzaville', "Africa/Brazzaville",'Africa_Douala', "Africa/Douala",'Africa_Kinshasa', "Africa/Kinshasa",'Africa_Libreville', "Africa/Libreville",'Africa_Luanda', "Africa/Luanda",'Africa_Malabo', "Africa/Malabo",'Africa_Niamey', "Africa/Niamey",'Africa_Porto_Novo', "Africa/Porto-Novo",'Africa_Blantyre', "Africa/Blantyre",'Africa_Bujumbura', "Africa/Bujumbura",'Africa_Gaborone', "Africa/Gaborone",'Africa_Harare', "Africa/Harare",'Africa_Kigali', "Africa/Kigali",'Africa_Lubumbashi', "Africa/Lubumbashi",'Africa_Lusaka', "Africa/Lusaka",'Africa_Addis_Ababa', "Africa/Addis_Ababa",'Africa_Asmara', "Africa/Asmara",'Africa_Asmera', "Africa/Asmera",'Africa_Dar_es_Salaam', "Africa/Dar_es_Salaam",'Africa_Djibouti', "Africa/Djibouti",'Africa_Kampala', "Africa/Kampala",'Africa_Mogadishu', "Africa/Mogadishu",'Indian_Antananarivo', "Indian/Antananarivo",'Indian_Comoro', "Indian/Comoro",'Indian_Mayotte', "Indian/Mayotte",'Libya', "Libya",'America_Atka', "America/Atka",'US_Aleutian', "US/Aleutian",'US_Alaska', "US/Alaska",'America_Buenos_Aires', "America/Buenos_Aires",'America_Argentina_ComodRivadavia', "America/Argentina/ComodRivadavia",'America_Catamarca', "America/Catamarca",'America_Cordoba', "America/Cordoba",'America_Rosario', "America/Rosario",'America_Jujuy', "America/Jujuy",'America_Mendoza', "America/Mendoza",'US_Central', "US/Central",'America_Shiprock', "America/Shiprock",'Navajo', "Navajo",'US_Mountain', "US/Mountain",'US_Michigan', "US/Michigan",'America_Yellowknife', "America/Yellowknife",'Canada_Mountain', "Canada/Mountain",'Canada_Atlantic', "Canada/Atlantic",'Cuba', "Cuba",'America_Fort_Wayne', "America/Fort_Wayne",'America_Indianapolis', "America/Indianapolis",'US_East_Indiana', "US/East-Indiana",'America_Knox_IN', "America/Knox_IN",'US_Indiana_Starke', "US/Indiana-Starke",'America_Pangnirtung', "America/Pangnirtung",'Jamaica', "Jamaica",'America_Louisville', "America/Louisville",'US_Pacific', "US/Pacific",'Brazil_West', "Brazil/West",'Mexico_BajaSur', "Mexico/BajaSur",'Mexico_General', "Mexico/General",'US_Eastern', "US/Eastern",'Brazil_DeNoronha', "Brazil/DeNoronha",'America_Godthab', "America/Godthab",'America_Atikokan', "America/Atikokan",'America_Cayman', "America/Cayman",'America_Coral_Harbour', "America/Coral_Harbour",'America_Creston', "America/Creston",'US_Arizona', "US/Arizona",'America_Anguilla', "America/Anguilla",'America_Antigua', "America/Antigua",'America_Aruba', "America/Aruba",'America_Blanc_Sablon', "America/Blanc-Sablon",'America_Curacao', "America/Curacao",'America_Dominica', "America/Dominica",'America_Grenada', "America/Grenada",'America_Guadeloupe', "America/Guadeloupe",'America_Kralendijk', "America/Kralendijk",'America_Lower_Princes', "America/Lower_Princes",'America_Marigot', "America/Marigot",'America_Montserrat', "America/Montserrat",'America_Port_of_Spain', "America/Port_of_Spain",'America_St_Barthelemy', "America/St_Barthelemy",'America_St_Kitts', "America/St_Kitts",'America_St_Lucia', "America/St_Lucia",'America_St_Thomas', "America/St_Thomas",'America_St_Vincent', "America/St_Vincent",'America_Tortola', "America/Tortola",'America_Virgin', "America/Virgin",'Canada_Saskatchewan', "Canada/Saskatchewan",'America_Porto_Acre', "America/Porto_Acre",'Brazil_Acre', "Brazil/Acre",'Chile_Continental', "Chile/Continental",'Brazil_East', "Brazil/East",'Canada_Newfoundland', "Canada/Newfoundland",'America_Ensenada', "America/Ensenada",'America_Santa_Isabel', "America/Santa_Isabel",'Mexico_BajaNorte', "Mexico/BajaNorte",'America_Montreal', "America/Montreal",'America_Nassau', "America/Nassau",'America_Nipigon', "America/Nipigon",'America_Thunder_Bay', "America/Thunder_Bay",'Canada_Eastern', "Canada/Eastern",'Canada_Pacific', "Canada/Pacific",'Canada_Yukon', "Canada/Yukon",'America_Rainy_River', "America/Rainy_River",'Canada_Central', "Canada/Central",'Asia_Ashkhabad', "Asia/Ashkhabad",'Asia_Phnom_Penh', "Asia/Phnom_Penh",'Asia_Vientiane', "Asia/Vientiane",'Indian_Christmas', "Indian/Christmas",'Asia_Dacca', "Asia/Dacca",'Asia_Muscat', "Asia/Muscat",'Indian_Mahe', "Indian/Mahe",'Indian_Reunion', "Indian/Reunion",'Asia_Saigon', "Asia/Saigon",'Hongkong', "Hongkong",'Asia_Tel_Aviv', "Asia/Tel_Aviv",'Israel', "Israel",'Asia_Katmandu', "Asia/Katmandu",'Asia_Calcutta', "Asia/Calcutta",'Asia_Brunei', "Asia/Brunei",'Asia_Macao', "Asia/Macao",'Asia_Ujung_Pandang', "Asia/Ujung_Pandang",'Europe_Nicosia', "Europe/Nicosia",'Asia_Bahrain', "Asia/Bahrain",'Antarctica_Syowa', "Antarctica/Syowa",'Asia_Aden', "Asia/Aden",'Asia_Kuwait', "Asia/Kuwait",'ROK', "ROK",'Asia_Chongqing', "Asia/Chongqing",'Asia_Chungking', "Asia/Chungking",'Asia_Harbin', "Asia/Harbin",'PRC', "PRC",'Asia_Kuala_Lumpur', "Asia/Kuala_Lumpur",'Singapore', "Singapore",'ROC', "ROC",'Iran', "Iran",'Asia_Thimbu', "Asia/Thimbu",'Japan', "Japan",'Asia_Ulan_Bator', "Asia/Ulan_Bator",'Antarctica_Vostok', "Antarctica/Vostok",'Asia_Kashgar', "Asia/Kashgar",'Asia_Rangoon', "Asia/Rangoon",'Indian_Cocos', "Indian/Cocos",'Atlantic_Faeroe', "Atlantic/Faeroe",'Australia_South', "Australia/South",'Australia_Queensland', "Australia/Queensland",'Australia_Yancowinna', "Australia/Yancowinna",'Australia_North', "Australia/North",'Australia_Currie', "Australia/Currie",'Australia_Tasmania', "Australia/Tasmania",'Australia_LHI', "Australia/LHI",'Australia_Victoria', "Australia/Victoria",'Australia_West', "Australia/West",'Australia_ACT', "Australia/ACT",'Australia_Canberra', "Australia/Canberra",'Australia_NSW', "Australia/NSW",'GMT', "GMT",'GMTx0', "GMT+0",'GMT_0', "GMT-0",'GMT0', "GMT0",'Greenwich', "Greenwich",'UCT', "UCT",'UTC', "UTC",'Universal', "Universal",'Zulu', "Zulu",'Europe_Ljubljana', "Europe/Ljubljana",'Europe_Podgorica', "Europe/Podgorica",'Europe_Sarajevo', "Europe/Sarajevo",'Europe_Skopje', "Europe/Skopje",'Europe_Zagreb', "Europe/Zagreb",'Arctic_Longyearbyen', "Arctic/Longyearbyen",'Atlantic_Jan_Mayen', "Atlantic/Jan_Mayen",'Europe_Copenhagen', "Europe/Copenhagen",'Europe_Oslo', "Europe/Oslo",'Europe_Stockholm', "Europe/Stockholm",'Europe_Amsterdam', "Europe/Amsterdam",'Europe_Luxembourg', "Europe/Luxembourg",'Europe_Tiraspol', "Europe/Tiraspol",'Eire', "Eire",'Europe_Mariehamn', "Europe/Mariehamn",'Asia_Istanbul', "Asia/Istanbul",'Turkey', "Turkey",'Europe_Kiev', "Europe/Kiev",'Europe_Uzhgorod', "Europe/Uzhgorod",'Europe_Zaporozhye', "Europe/Zaporozhye",'Portugal', "Portugal",'Europe_Belfast', "Europe/Belfast",'Europe_Guernsey', "Europe/Guernsey",'Europe_Isle_of_Man', "Europe/Isle_of_Man",'Europe_Jersey', "Europe/Jersey",'GB', "GB",'GB_Eire', "GB-Eire",'W_SU', "W-SU",'Europe_Monaco', "Europe/Monaco",'Europe_Bratislava', "Europe/Bratislava",'Europe_San_Marino', "Europe/San_Marino",'Europe_Vatican', "Europe/Vatican",'Poland', "Poland",'Europe_Busingen', "Europe/Busingen",'Europe_Vaduz', "Europe/Vaduz",'Indian_Kerguelen', "Indian/Kerguelen",'Antarctica_McMurdo', "Antarctica/McMurdo",'Antarctica_South_Pole', "Antarctica/South_Pole",'NZ', "NZ",'NZ_CHAT', "NZ-CHAT",'Chile_EasterIsland', "Chile/EasterIsland",'Pacific_Pohnpei', "Pacific/Pohnpei",'Pacific_Ponape', "Pacific/Ponape",'Pacific_Saipan', "Pacific/Saipan",'Pacific_Johnston', "Pacific/Johnston",'US_Hawaii', "US/Hawaii",'Pacific_Enderbury', "Pacific/Enderbury",'Kwajalein', "Kwajalein",'Pacific_Midway', "Pacific/Midway",'Pacific_Samoa', "Pacific/Samoa",'US_Samoa', "US/Samoa",'Antarctica_DumontDUrville', "Antarctica/DumontDUrville",'Pacific_Chuuk', "Pacific/Chuuk",'Pacific_Truk', "Pacific/Truk",'Pacific_Yap', "Pacific/Yap",'Pacific_Funafuti', "Pacific/Funafuti",'Pacific_Majuro', "Pacific/Majuro",'Pacific_Wake', "Pacific/Wake",'Pacific_Wallis', "Pacific/Wallis",'Africa_Abidjan', "Africa/Abidjan",'Africa_Algiers', "Africa/Algiers",'Africa_Bissau', "Africa/Bissau",'Africa_Cairo', "Africa/Cairo",'Africa_Casablanca', "Africa/Casablanca",'Africa_Ceuta', "Africa/Ceuta",'Africa_El_Aaiun', "Africa/El_Aaiun",'Africa_Johannesburg', "Africa/Johannesburg",'Africa_Juba', "Africa/Juba",'Africa_Khartoum', "Africa/Khartoum",'Africa_Lagos', "Africa/Lagos",'Africa_Maputo', "Africa/Maputo",'Africa_Monrovia', "Africa/Monrovia",'Africa_Nairobi', "Africa/Nairobi",'Africa_Ndjamena', "Africa/Ndjamena",'Africa_Sao_Tome', "Africa/Sao_Tome",'Africa_Tripoli', "Africa/Tripoli",'Africa_Tunis', "Africa/Tunis",'Africa_Windhoek', "Africa/Windhoek",'America_Adak', "America/Adak",'America_Anchorage', "America/Anchorage",'America_Araguaina', "America/Araguaina",'America_Argentina_Buenos_Aires', "America/Argentina/Buenos_Aires",'America_Argentina_Catamarca', "America/Argentina/Catamarca",'America_Argentina_Cordoba', "America/Argentina/Cordoba",'America_Argentina_Jujuy', "America/Argentina/Jujuy",'America_Argentina_La_Rioja', "America/Argentina/La_Rioja",'America_Argentina_Mendoza', "America/Argentina/Mendoza",'America_Argentina_Rio_Gallegos', "America/Argentina/Rio_Gallegos",'America_Argentina_Salta', "America/Argentina/Salta",'America_Argentina_San_Juan', "America/Argentina/San_Juan",'America_Argentina_San_Luis', "America/Argentina/San_Luis",'America_Argentina_Tucuman', "America/Argentina/Tucuman",'America_Argentina_Ushuaia', "America/Argentina/Ushuaia",'America_Asuncion', "America/Asuncion",'America_Bahia', "America/Bahia",'America_Bahia_Banderas', "America/Bahia_Banderas",'America_Barbados', "America/Barbados",'America_Belem', "America/Belem",'America_Belize', "America/Belize",'America_Boa_Vista', "America/Boa_Vista",'America_Bogota', "America/Bogota",'America_Boise', "America/Boise",'America_Cambridge_Bay', "America/Cambridge_Bay",'America_Campo_Grande', "America/Campo_Grande",'America_Cancun', "America/Cancun",'America_Caracas', "America/Caracas",'America_Cayenne', "America/Cayenne",'America_Chicago', "America/Chicago",'America_Chihuahua', "America/Chihuahua",'America_Ciudad_Juarez', "America/Ciudad_Juarez",'America_Costa_Rica', "America/Costa_Rica",'America_Cuiaba', "America/Cuiaba",'America_Danmarkshavn', "America/Danmarkshavn",'America_Dawson', "America/Dawson",'America_Dawson_Creek', "America/Dawson_Creek",'America_Denver', "America/Denver",'America_Detroit', "America/Detroit",'America_Edmonton', "America/Edmonton",'America_Eirunepe', "America/Eirunepe",'America_El_Salvador', "America/El_Salvador",'America_Fort_Nelson', "America/Fort_Nelson",'America_Fortaleza', "America/Fortaleza",'America_Glace_Bay', "America/Glace_Bay",'America_Goose_Bay', "America/Goose_Bay",'America_Grand_Turk', "America/Grand_Turk",'America_Guatemala', "America/Guatemala",'America_Guayaquil', "America/Guayaquil",'America_Guyana', "America/Guyana",'America_Halifax', "America/Halifax",'America_Havana', "America/Havana",'America_Hermosillo', "America/Hermosillo",'America_Indiana_Indianapolis', "America/Indiana/Indianapolis",'America_Indiana_Knox', "America/Indiana/Knox",'America_Indiana_Marengo', "America/Indiana/Marengo",'America_Indiana_Petersburg', "America/Indiana/Petersburg",'America_Indiana_Tell_City', "America/Indiana/Tell_City",'America_Indiana_Vevay', "America/Indiana/Vevay",'America_Indiana_Vincennes', "America/Indiana/Vincennes",'America_Indiana_Winamac', "America/Indiana/Winamac",'America_Inuvik', "America/Inuvik",'America_Iqaluit', "America/Iqaluit",'America_Jamaica', "America/Jamaica",'America_Juneau', "America/Juneau",'America_Kentucky_Louisville', "America/Kentucky/Louisville",'America_Kentucky_Monticello', "America/Kentucky/Monticello",'America_La_Paz', "America/La_Paz",'America_Lima', "America/Lima",'America_Los_Angeles', "America/Los_Angeles",'America_Maceio', "America/Maceio",'America_Managua', "America/Managua",'America_Manaus', "America/Manaus",'America_Martinique', "America/Martinique",'America_Matamoros', "America/Matamoros",'America_Mazatlan', "America/Mazatlan",'America_Menominee', "America/Menominee",'America_Merida', "America/Merida",'America_Metlakatla', "America/Metlakatla",'America_Mexico_City', "America/Mexico_City",'America_Miquelon', "America/Miquelon",'America_Moncton', "America/Moncton",'America_Monterrey', "America/Monterrey",'America_Montevideo', "America/Montevideo",'America_New_York', "America/New_York",'America_Nome', "America/Nome",'America_Noronha', "America/Noronha",'America_North_Dakota_Beulah', "America/North_Dakota/Beulah",'America_North_Dakota_Center', "America/North_Dakota/Center",'America_North_Dakota_New_Salem', "America/North_Dakota/New_Salem",'America_Nuuk', "America/Nuuk",'America_Ojinaga', "America/Ojinaga",'America_Panama', "America/Panama",'America_Paramaribo', "America/Paramaribo",'America_Phoenix', "America/Phoenix",'America_Port_au_Prince', "America/Port-au-Prince",'America_Porto_Velho', "America/Porto_Velho",'America_Puerto_Rico', "America/Puerto_Rico",'America_Punta_Arenas', "America/Punta_Arenas",'America_Rankin_Inlet', "America/Rankin_Inlet",'America_Recife', "America/Recife",'America_Regina', "America/Regina",'America_Resolute', "America/Resolute",'America_Rio_Branco', "America/Rio_Branco",'America_Santarem', "America/Santarem",'America_Santiago', "America/Santiago",'America_Santo_Domingo', "America/Santo_Domingo",'America_Sao_Paulo', "America/Sao_Paulo",'America_Scoresbysund', "America/Scoresbysund",'America_Sitka', "America/Sitka",'America_St_Johns', "America/St_Johns",'America_Swift_Current', "America/Swift_Current",'America_Tegucigalpa', "America/Tegucigalpa",'America_Thule', "America/Thule",'America_Tijuana', "America/Tijuana",'America_Toronto', "America/Toronto",'America_Vancouver', "America/Vancouver",'America_Whitehorse', "America/Whitehorse",'America_Winnipeg', "America/Winnipeg",'America_Yakutat', "America/Yakutat",'Antarctica_Casey', "Antarctica/Casey",'Antarctica_Davis', "Antarctica/Davis",'Antarctica_Macquarie', "Antarctica/Macquarie",'Antarctica_Mawson', "Antarctica/Mawson",'Antarctica_Palmer', "Antarctica/Palmer",'Antarctica_Rothera', "Antarctica/Rothera",'Antarctica_Troll', "Antarctica/Troll",'Asia_Almaty', "Asia/Almaty",'Asia_Amman', "Asia/Amman",'Asia_Anadyr', "Asia/Anadyr",'Asia_Aqtau', "Asia/Aqtau",'Asia_Aqtobe', "Asia/Aqtobe",'Asia_Ashgabat', "Asia/Ashgabat",'Asia_Atyrau', "Asia/Atyrau",'Asia_Baghdad', "Asia/Baghdad",'Asia_Baku', "Asia/Baku",'Asia_Bangkok', "Asia/Bangkok",'Asia_Barnaul', "Asia/Barnaul",'Asia_Beirut', "Asia/Beirut",'Asia_Bishkek', "Asia/Bishkek",'Asia_Chita', "Asia/Chita",'Asia_Choibalsan', "Asia/Choibalsan",'Asia_Colombo', "Asia/Colombo",'Asia_Damascus', "Asia/Damascus",'Asia_Dhaka', "Asia/Dhaka",'Asia_Dili', "Asia/Dili",'Asia_Dubai', "Asia/Dubai",'Asia_Dushanbe', "Asia/Dushanbe",'Asia_Famagusta', "Asia/Famagusta",'Asia_Gaza', "Asia/Gaza",'Asia_Hebron', "Asia/Hebron",'Asia_Ho_Chi_Minh', "Asia/Ho_Chi_Minh",'Asia_Hong_Kong', "Asia/Hong_Kong",'Asia_Hovd', "Asia/Hovd",'Asia_Irkutsk', "Asia/Irkutsk",'Asia_Jakarta', "Asia/Jakarta",'Asia_Jayapura', "Asia/Jayapura",'Asia_Jerusalem', "Asia/Jerusalem",'Asia_Kabul', "Asia/Kabul",'Asia_Kamchatka', "Asia/Kamchatka",'Asia_Karachi', "Asia/Karachi",'Asia_Kathmandu', "Asia/Kathmandu",'Asia_Khandyga', "Asia/Khandyga",'Asia_Kolkata', "Asia/Kolkata",'Asia_Krasnoyarsk', "Asia/Krasnoyarsk",'Asia_Kuching', "Asia/Kuching",'Asia_Macau', "Asia/Macau",'Asia_Magadan', "Asia/Magadan",'Asia_Makassar', "Asia/Makassar",'Asia_Manila', "Asia/Manila",'Asia_Nicosia', "Asia/Nicosia",'Asia_Novokuznetsk', "Asia/Novokuznetsk",'Asia_Novosibirsk', "Asia/Novosibirsk",'Asia_Omsk', "Asia/Omsk",'Asia_Oral', "Asia/Oral",'Asia_Pontianak', "Asia/Pontianak",'Asia_Pyongyang', "Asia/Pyongyang",'Asia_Qatar', "Asia/Qatar",'Asia_Qostanay', "Asia/Qostanay",'Asia_Qyzylorda', "Asia/Qyzylorda",'Asia_Riyadh', "Asia/Riyadh",'Asia_Sakhalin', "Asia/Sakhalin",'Asia_Samarkand', "Asia/Samarkand",'Asia_Seoul', "Asia/Seoul",'Asia_Shanghai', "Asia/Shanghai",'Asia_Singapore', "Asia/Singapore",'Asia_Srednekolymsk', "Asia/Srednekolymsk",'Asia_Taipei', "Asia/Taipei",'Asia_Tashkent', "Asia/Tashkent",'Asia_Tbilisi', "Asia/Tbilisi",'Asia_Tehran', "Asia/Tehran",'Asia_Thimphu', "Asia/Thimphu",'Asia_Tokyo', "Asia/Tokyo",'Asia_Tomsk', "Asia/Tomsk",'Asia_Ulaanbaatar', "Asia/Ulaanbaatar",'Asia_Urumqi', "Asia/Urumqi",'Asia_Ust_Nera', "Asia/Ust-Nera",'Asia_Vladivostok', "Asia/Vladivostok",'Asia_Yakutsk', "Asia/Yakutsk",'Asia_Yangon', "Asia/Yangon",'Asia_Yekaterinburg', "Asia/Yekaterinburg",'Asia_Yerevan', "Asia/Yerevan",'Atlantic_Azores', "Atlantic/Azores",'Atlantic_Bermuda', "Atlantic/Bermuda",'Atlantic_Canary', "Atlantic/Canary",'Atlantic_Cape_Verde', "Atlantic/Cape_Verde",'Atlantic_Faroe', "Atlantic/Faroe",'Atlantic_Madeira', "Atlantic/Madeira",'Atlantic_South_Georgia', "Atlantic/South_Georgia",'Atlantic_Stanley', "Atlantic/Stanley",'Australia_Adelaide', "Australia/Adelaide",'Australia_Brisbane', "Australia/Brisbane",'Australia_Broken_Hill', "Australia/Broken_Hill",'Australia_Darwin', "Australia/Darwin",'Australia_Eucla', "Australia/Eucla",'Australia_Hobart', "Australia/Hobart",'Australia_Lindeman', "Australia/Lindeman",'Australia_Lord_Howe', "Australia/Lord_Howe",'Australia_Melbourne', "Australia/Melbourne",'Australia_Perth', "Australia/Perth",'Australia_Sydney', "Australia/Sydney",'CET', "CET",'CST6CDT', "CST6CDT",'EET', "EET",'EST', "EST",'EST5EDT', "EST5EDT",'Europe_Andorra', "Europe/Andorra",'Europe_Astrakhan', "Europe/Astrakhan",'Europe_Athens', "Europe/Athens",'Europe_Belgrade', "Europe/Belgrade",'Europe_Berlin', "Europe/Berlin",'Europe_Brussels', "Europe/Brussels",'Europe_Bucharest', "Europe/Bucharest",'Europe_Budapest', "Europe/Budapest",'Europe_Chisinau', "Europe/Chisinau",'Europe_Dublin', "Europe/Dublin",'Europe_Gibraltar', "Europe/Gibraltar",'Europe_Helsinki', "Europe/Helsinki",'Europe_Istanbul', "Europe/Istanbul",'Europe_Kaliningrad', "Europe/Kaliningrad",'Europe_Kirov', "Europe/Kirov",'Europe_Kyiv', "Europe/Kyiv",'Europe_Lisbon', "Europe/Lisbon",'Europe_London', "Europe/London",'Europe_Madrid', "Europe/Madrid",'Europe_Malta', "Europe/Malta",'Europe_Minsk', "Europe/Minsk",'Europe_Moscow', "Europe/Moscow",'Europe_Paris', "Europe/Paris",'Europe_Prague', "Europe/Prague",'Europe_Riga', "Europe/Riga",'Europe_Rome', "Europe/Rome",'Europe_Samara', "Europe/Samara",'Europe_Saratov', "Europe/Saratov",'Europe_Simferopol', "Europe/Simferopol",'Europe_Sofia', "Europe/Sofia",'Europe_Tallinn', "Europe/Tallinn",'Europe_Tirane', "Europe/Tirane",'Europe_Ulyanovsk', "Europe/Ulyanovsk",'Europe_Vienna', "Europe/Vienna",'Europe_Vilnius', "Europe/Vilnius",'Europe_Volgograd', "Europe/Volgograd",'Europe_Warsaw', "Europe/Warsaw",'Europe_Zurich', "Europe/Zurich",'Factory', "Factory",'HST', "HST",'Indian_Chagos', "Indian/Chagos",'Indian_Maldives', "Indian/Maldives",'Indian_Mauritius', "Indian/Mauritius",'MET', "MET",'MST', "MST",'MST7MDT', "MST7MDT",'PST8PDT', "PST8PDT",'Pacific_Apia', "Pacific/Apia",'Pacific_Auckland', "Pacific/Auckland",'Pacific_Bougainville', "Pacific/Bougainville",'Pacific_Chatham', "Pacific/Chatham",'Pacific_Easter', "Pacific/Easter",'Pacific_Efate', "Pacific/Efate",'Pacific_Fakaofo', "Pacific/Fakaofo",'Pacific_Fiji', "Pacific/Fiji",'Pacific_Galapagos', "Pacific/Galapagos",'Pacific_Gambier', "Pacific/Gambier",'Pacific_Guadalcanal', "Pacific/Guadalcanal",'Pacific_Guam', "Pacific/Guam",'Pacific_Honolulu', "Pacific/Honolulu",'Pacific_Kanton', "Pacific/Kanton",'Pacific_Kiritimati', "Pacific/Kiritimati",'Pacific_Kosrae', "Pacific/Kosrae",'Pacific_Kwajalein', "Pacific/Kwajalein",'Pacific_Marquesas', "Pacific/Marquesas",'Pacific_Nauru', "Pacific/Nauru",'Pacific_Niue', "Pacific/Niue",'Pacific_Norfolk', "Pacific/Norfolk",'Pacific_Noumea', "Pacific/Noumea",'Pacific_Pago_Pago', "Pacific/Pago_Pago",'Pacific_Palau', "Pacific/Palau",'Pacific_Pitcairn', "Pacific/Pitcairn",'Pacific_Port_Moresby', "Pacific/Port_Moresby",'Pacific_Rarotonga', "Pacific/Rarotonga",'Pacific_Tahiti', "Pacific/Tahiti",'Pacific_Tarawa', "Pacific/Tarawa",'Pacific_Tongatapu', "Pacific/Tongatapu",'WET', "WET");
    this.mapped[28] = abi.type_by_fqn.get(core.nodeGeo._type)!;
    this.mapped[29] = abi.type_by_fqn.get(core.ti3d._type)!;
    this.mapped[30] = abi.type_by_fqn.get(core.Tuple._type)!;
    this.mapped[30].resolveGeneratedOffsets('x','y');
    this.mapped[31] = abi.type_by_fqn.get(core.any._type)!;
    this.mapped[32] = abi.type_by_fqn.get(core.nodeIndex._type)!;
    this.mapped[33] = abi.type_by_fqn.get(core.tf2d._type)!;
    this.mapped[34] = abi.type_by_fqn.get(core.GeoBox._type)!;
    this.mapped[34].resolveGeneratedOffsets('sw','ne');
    this.mapped[35] = abi.type_by_fqn.get(core.Array._type)!;
    this.mapped[36] = abi.type_by_fqn.get(core.String._type)!;
    this.mapped[37] = abi.type_by_fqn.get(core.ti5d._type)!;
    this.mapped[38] = abi.type_by_fqn.get(runtime.UserGroupPolicyType._type)!;
    this.mapped[38].resolveGeneratedOffsetWithValues('read', 0,'write', 1,'execute', 2);
    this.mapped[39] = abi.type_by_fqn.get(runtime.UserRole._type)!;
    this.mapped[39].resolveGeneratedOffsets('name','permissions');
    this.mapped[40] = abi.type_by_fqn.get(runtime.TaskStatus._type)!;
    this.mapped[40].resolveGeneratedOffsetWithValues('empty', 0,'waiting', 1,'running', 2,'cancelled', 3,'error', 4,'ended', 5);
    this.mapped[41] = abi.type_by_fqn.get(runtime.Runtime._type)!;
    this.mapped[42] = abi.type_by_fqn.get(runtime.User._type)!;
    this.mapped[42].resolveGeneratedOffsets('id','name','activated','full_name','email','role','permissions_flags','groups','groups_flags','external');
    this.mapped[43] = abi.type_by_fqn.get(runtime.SecurityFields._type)!;
    this.mapped[43].resolveGeneratedOffsets('email','name','first_name','last_name','roles','groups');
    this.mapped[44] = abi.type_by_fqn.get(runtime.UserGroupPolicy._type)!;
    this.mapped[44].resolveGeneratedOffsets('group_id','type');
    this.mapped[45] = abi.type_by_fqn.get(runtime.TaskInfo._type)!;
    this.mapped[45].resolveGeneratedOffsets('user_id','task_id','mod','type','fun','creation','status','start','progress','remaining','duration','sub_waiting','sub_tasks_all');
    this.mapped[46] = abi.type_by_fqn.get(runtime.PeriodicTask._type)!;
    this.mapped[46].resolveGeneratedOffsets('name','user_id','args','start','every');
    this.mapped[47] = abi.type_by_fqn.get(runtime.RuntimeInfo._type)!;
    this.mapped[47].resolveGeneratedOffsets('version','arch','timezone','license','io_threads','bg_threads','fg_threads','mem_total','mem_worker','nb_ctx','store_stats');
    this.mapped[48] = abi.type_by_fqn.get(runtime.System._type)!;
    this.mapped[49] = abi.type_by_fqn.get(runtime.SecurityPolicy._type)!;
    this.mapped[49].resolveGeneratedOffsets('entities','credentials','roles','fields');
    this.mapped[50] = abi.type_by_fqn.get(runtime.License._type)!;
    this.mapped[50].resolveGeneratedOffsets('name','start','end','company','max_workers','max_memory','extra_1','extra_2','extra_3','extra_4');
    this.mapped[51] = abi.type_by_fqn.get(runtime.Task._type)!;
    this.mapped[51].resolveGeneratedOffsets('user_id','task_id','mod','type','fun','creation','status');
    this.mapped[52] = abi.type_by_fqn.get(runtime.UserCredential._type)!;
    this.mapped[52].resolveGeneratedOffsets('offset','pass');
    this.mapped[53] = abi.type_by_fqn.get(runtime.StoreStat._type)!;
    this.mapped[53].resolveGeneratedOffsets('capacity_bytes','allocated_bytes','allocated_ratio','remained_bytes','remained_ratio','used_bytes','used_ratio','available_bytes','available_ratio');
    this.mapped[54] = abi.type_by_fqn.get(runtime.UserGroup._type)!;
    this.mapped[54].resolveGeneratedOffsets('id','name','activated');
    this.mapped[55] = abi.type_by_fqn.get(runtime.OpenIDConnect._type)!;
    this.mapped[55].resolveGeneratedOffsets('url','clientId');
    this.mapped[56] = abi.type_by_fqn.get(runtime.SecurityEntity._type)!;
    this.mapped[56].resolveGeneratedOffsets('id','name','activated');
    this.mapped[57] = abi.type_by_fqn.get(io.CsvColumnString._type)!;
    this.mapped[57].resolveGeneratedOffsets('name','mandatory','trim','try_number','try_json','values','encoder');
    this.mapped[58] = abi.type_by_fqn.get(io.CsvColumnTime._type)!;
    this.mapped[58].resolveGeneratedOffsets('name','mandatory','unit');
    this.mapped[59] = abi.type_by_fqn.get(io.CsvColumnDuration._type)!;
    this.mapped[59].resolveGeneratedOffsets('name','mandatory','unit');
    this.mapped[60] = abi.type_by_fqn.get(io.Email._type)!;
    this.mapped[60].resolveGeneratedOffsets('from','subject','body','body_is_html','to','cc','bcc');
    this.mapped[61] = abi.type_by_fqn.get(io.Smtp._type)!;
    this.mapped[61].resolveGeneratedOffsets('host','port','mode','authenticate','user','pass');
    this.mapped[62] = abi.type_by_fqn.get(io.CsvColumnFloat._type)!;
    this.mapped[62].resolveGeneratedOffsets('name','mandatory');
    this.mapped[63] = abi.type_by_fqn.get(io.CsvFormat._type)!;
    this.mapped[63].resolveGeneratedOffsets('header_lines','infer','separator','string_delimiter','decimal_separator','thousands_separator','columns');
    this.mapped[64] = abi.type_by_fqn.get(io.File._type)!;
    this.mapped[64].resolveGeneratedOffsets('path','size','last_modification');
    this.mapped[65] = abi.type_by_fqn.get(io.TextEncoder._type)!;
    this.mapped[65].resolveGeneratedOffsetWithValues('plain', null,'base64', null,'base64url', null,'hexadecimal', null);
    this.mapped[66] = abi.type_by_fqn.get(io.CsvColumn._type)!;
    this.mapped[66].resolveGeneratedOffsets('name','mandatory');
    this.mapped[67] = abi.type_by_fqn.get(io.CsvColumnDate._type)!;
    this.mapped[67].resolveGeneratedOffsets('name','mandatory','format','tz','as_time');
    this.mapped[68] = abi.type_by_fqn.get(io.SmtpAuth._type)!;
    this.mapped[68].resolveGeneratedOffsetWithValues('none', 0,'plain', 1,'login', 2);
    this.mapped[69] = abi.type_by_fqn.get(io.Http._type)!;
    this.mapped[70] = abi.type_by_fqn.get(io.CsvColumnBoolean._type)!;
    this.mapped[70].resolveGeneratedOffsets('name','mandatory');
    this.mapped[71] = abi.type_by_fqn.get(io.Url._type)!;
    this.mapped[71].resolveGeneratedOffsets('protocol','host','port','path','params','hash');
    this.mapped[72] = abi.type_by_fqn.get(io.CsvColumnIgnored._type)!;
    this.mapped[72].resolveGeneratedOffsets('name','mandatory');
    this.mapped[73] = abi.type_by_fqn.get(io.SmtpMode._type)!;
    this.mapped[73].resolveGeneratedOffsetWithValues('plain', 0,'ssl_tls', 1,'starttls', 2);
    this.mapped[74] = abi.type_by_fqn.get(io.CsvColumnInteger._type)!;
    this.mapped[74].resolveGeneratedOffsets('name','mandatory');
    this.mapped[75] = abi.type_by_fqn.get(io.HttpHeader._type)!;
    this.mapped[75].resolveGeneratedOffsets('name','value');
    this.mapped[76] = abi.type_by_fqn.get(math.MathConstants._type)!;
    this.mapped[76].static_values = [2.7182818285,1.4426950409,0.4342944819,0.6931471806,2.302585093,3.1415926536,1.5707963268,0.7853981634,0.3183098862,0.6366197724,1.1283791671,1.4142135624,0.7071067812];
    this.mapped[77] = abi.type_by_fqn.get(util.ProgressTracker._type)!;
    this.mapped[77].resolveGeneratedOffsets('start','total','counter','duration','progress','speed','remaining');
    this.mapped[78] = abi.type_by_fqn.get(util.Crypto._type)!;
    this.mapped[79] = abi.type_by_fqn.get(util.HistogramFloat._type)!;
    this.mapped[79].static_values = [0,1,2,3];
    this.mapped[80] = abi.type_by_fqn.get(util.TimeWindow._type)!;
    this.mapped[81] = abi.type_by_fqn.get(util.Iban._type)!;
    this.mapped[82] = abi.type_by_fqn.get(util.Gaussian._type)!;
    this.mapped[82].resolveGeneratedOffsets('sum','sum_sq','count','min','max');
    this.mapped[83] = abi.type_by_fqn.get(util.BoxPlotFloat._type)!;
    this.mapped[83].resolveGeneratedOffsets('min','max','whiskerLow','whiskerHigh','percentile1','percentile5','percentile25','percentile50','percentile75','percentile95','percentile99','countOutliersLow','countOutliersHigh','percentageOutliersLow','percentageOutliersHigh','sum','avg','std','size');
    this.mapped[84] = abi.type_by_fqn.get(util.Assert._type)!;
    this.mapped[85] = abi.type_by_fqn.get(util.SlidingWindow._type)!;
    this.mapped[86] = abi.type_by_fqn.get(util.HistogramInt._type)!;
    this.mapped[86].static_values = [0,1,2,3];
    this.mapped[87] = abi.type_by_fqn.get(util.Quantizer._type)!;
    this.mapped[88] = abi.type_by_fqn.get(util.GaussianProfile._type)!;
    this.mapped[88].static_values = [0,1,2,3,4,5,6];
    this.mapped[89] = abi.type_by_fqn.get(util.Queue._type)!;
    this.mapped[90] = abi.type_by_fqn.get(util.Buffer._type)!;
    this.mapped[91] = abi.type_by_fqn.get(util.Random._type)!;
    this.mapped[91].resolveGeneratedOffsets('seed','v');
    this.mapped[92] = abi.type_by_fqn.get(util.BoxPlotInt._type)!;
    this.mapped[92].resolveGeneratedOffsets('min','max','whiskerLow','whiskerHigh','percentile1','percentile5','percentile25','percentile50','percentile75','percentile95','percentile99','countOutliersLow','countOutliersHigh','percentageOutliersLow','percentageOutliersHigh','sum','avg','std','size');
  },
};
