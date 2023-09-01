// AUTO-GENERATED FILE PLEASE DO NOT MODIFY MANUALLY
/* eslint-disable */
// @ts-nocheck

import * as $sdk from '@greycat/sdk';
import * as std_n from '../std_n/index.js';

export namespace core {
  export class tf2d extends std_n.core.tf2d {}

  export class SamplingMode extends $sdk.GCEnum {
    static readonly _type = 'core::SamplingMode';

    constructor(type: $sdk.AbiType, offset: number, public key: SamplingMode.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static fixed($g: $sdk.GreyCat = globalThis.greycat.default): SamplingMode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[1];
      return t.enum_values![t.generated_offsets[0]];
    }
    static fixed_reg($g: $sdk.GreyCat = globalThis.greycat.default): SamplingMode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[1];
      return t.enum_values![t.generated_offsets[1]];
    }
    static adaptative($g: $sdk.GreyCat = globalThis.greycat.default): SamplingMode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[1];
      return t.enum_values![t.generated_offsets[2]];
    }
    static dense($g: $sdk.GreyCat = globalThis.greycat.default): SamplingMode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[1];
      return t.enum_values![t.generated_offsets[3]];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): SamplingMode[] {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[1];
      return t.enum_values!;
    }
  }

  export namespace SamplingMode  {
    export type Field = 'fixed'|'fixed_reg'|'adaptative'|'dense';
  }
  export class Table<T extends $sdk.Value = any> extends std_n.core.Table<T> {}

  export class ti6d extends std_n.core.ti6d {}

  export class nodeTimeSingleton extends $sdk.GCObject {
    static readonly _type = 'core::nodeTimeSingleton';

    t: $sdk.std.core.time;
    v: any;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        t: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        v: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
      });
    }

    static createFrom({t, v, }: {t: $sdk.std.core.time, v: any, }, $g: $sdk.GreyCat = globalThis.greycat.default): nodeTimeSingleton {
      return new nodeTimeSingleton($g.abi.libs_by_name.get(stdlib.name)!.mapped[4], t, v);
    }
    static create(t: $sdk.std.core.time, v: any, $g: $sdk.GreyCat = globalThis.greycat.default): nodeTimeSingleton {
      return new nodeTimeSingleton($g.abi.libs_by_name.get(stdlib.name)!.mapped[4], t, v);
    }
  }

  export class time extends std_n.core.time {}

  export class nodeTime extends std_n.core.nodeTime {}

  export class DurationUnit extends $sdk.GCEnum {
    static readonly _type = 'core::DurationUnit';

    constructor(type: $sdk.AbiType, offset: number, public key: DurationUnit.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static microseconds($g: $sdk.GreyCat = globalThis.greycat.default): DurationUnit {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[7];
      return t.enum_values![t.generated_offsets[0]];
    }
    static milliseconds($g: $sdk.GreyCat = globalThis.greycat.default): DurationUnit {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[7];
      return t.enum_values![t.generated_offsets[1]];
    }
    static seconds($g: $sdk.GreyCat = globalThis.greycat.default): DurationUnit {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[7];
      return t.enum_values![t.generated_offsets[2]];
    }
    static minutes($g: $sdk.GreyCat = globalThis.greycat.default): DurationUnit {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[7];
      return t.enum_values![t.generated_offsets[3]];
    }
    static hours($g: $sdk.GreyCat = globalThis.greycat.default): DurationUnit {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[7];
      return t.enum_values![t.generated_offsets[4]];
    }
    static days($g: $sdk.GreyCat = globalThis.greycat.default): DurationUnit {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[7];
      return t.enum_values![t.generated_offsets[5]];
    }
    static weeks($g: $sdk.GreyCat = globalThis.greycat.default): DurationUnit {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[7];
      return t.enum_values![t.generated_offsets[6]];
    }
    static months($g: $sdk.GreyCat = globalThis.greycat.default): DurationUnit {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[7];
      return t.enum_values![t.generated_offsets[7]];
    }
    static years($g: $sdk.GreyCat = globalThis.greycat.default): DurationUnit {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[7];
      return t.enum_values![t.generated_offsets[8]];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): DurationUnit[] {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[7];
      return t.enum_values!;
    }
  }

  export namespace DurationUnit  {
    export type Field = 'microseconds'|'milliseconds'|'seconds'|'minutes'|'hours'|'days'|'weeks'|'months'|'years';
  }
  export class NodeTimeInfo extends $sdk.GCObject {
    static readonly _type = 'core::NodeTimeInfo';

    size: bigint | number;
    from: $sdk.std.core.time | null;
    to: $sdk.std.core.time | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        size: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        from: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        to: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
      });
    }

    static createFrom({size, from, to, }: {size: bigint | number, from: $sdk.std.core.time | null, to: $sdk.std.core.time | null, }, $g: $sdk.GreyCat = globalThis.greycat.default): NodeTimeInfo {
      return new NodeTimeInfo($g.abi.libs_by_name.get(stdlib.name)!.mapped[8], size, from, to);
    }
    static create(size: bigint | number, from: $sdk.std.core.time | null, to: $sdk.std.core.time | null, $g: $sdk.GreyCat = globalThis.greycat.default): NodeTimeInfo {
      return new NodeTimeInfo($g.abi.libs_by_name.get(stdlib.name)!.mapped[8], size, from, to);
    }
  }

  export class Error extends std_n.core.Error {}

  export class GeoPoly extends $sdk.GCObject {
    static readonly _type = 'core::GeoPoly';

    points: globalThis.Array<$sdk.std.core.geo>;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        points: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
      });
    }

    static createFrom({points, }: {points: globalThis.Array<$sdk.std.core.geo>, }, $g: $sdk.GreyCat = globalThis.greycat.default): GeoPoly {
      return new GeoPoly($g.abi.libs_by_name.get(stdlib.name)!.mapped[10], points);
    }
    static create(points: globalThis.Array<$sdk.std.core.geo>, $g: $sdk.GreyCat = globalThis.greycat.default): GeoPoly {
      return new GeoPoly($g.abi.libs_by_name.get(stdlib.name)!.mapped[10], points);
    }
  }

  export class duration extends std_n.core.duration {}

  export class ti2d extends std_n.core.ti2d {}

  export class ErrorCode extends $sdk.GCEnum {
    static readonly _type = 'core::ErrorCode';

    constructor(type: $sdk.AbiType, offset: number, public key: ErrorCode.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static none($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[13];
      return t.enum_values![t.generated_offsets[0]];
    }
    static too_deep_workspace($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[13];
      return t.enum_values![t.generated_offsets[1]];
    }
    static too_deep_iterator($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[13];
      return t.enum_values![t.generated_offsets[2]];
    }
    static wrong_operand($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[13];
      return t.enum_values![t.generated_offsets[3]];
    }
    static wrong_params($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[13];
      return t.enum_values![t.generated_offsets[4]];
    }
    static wrong_param_type($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[13];
      return t.enum_values![t.generated_offsets[5]];
    }
    static wrong_numeric($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[13];
      return t.enum_values![t.generated_offsets[6]];
    }
    static wrong_state($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[13];
      return t.enum_values![t.generated_offsets[7]];
    }
    static wrong_null($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[13];
      return t.enum_values![t.generated_offsets[8]];
    }
    static unresolved_ref($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[13];
      return t.enum_values![t.generated_offsets[9]];
    }
    static assign_error($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[13];
      return t.enum_values![t.generated_offsets[10]];
    }
    static interrupted($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[13];
      return t.enum_values![t.generated_offsets[11]];
    }
    static throw_($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[13];
      return t.enum_values![t.generated_offsets[12]];
    }
    static wrong_type($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[13];
      return t.enum_values![t.generated_offsets[13]];
    }
    static wrong_dimension($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[13];
      return t.enum_values![t.generated_offsets[14]];
    }
    static unsupported_operation($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[13];
      return t.enum_values![t.generated_offsets[15]];
    }
    static unsupported_type($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[13];
      return t.enum_values![t.generated_offsets[16]];
    }
    static dimensions_mismatch($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[13];
      return t.enum_values![t.generated_offsets[17]];
    }
    static timeout($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[13];
      return t.enum_values![t.generated_offsets[18]];
    }
    static forbidden($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[13];
      return t.enum_values![t.generated_offsets[19]];
    }
    static runtime_error($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[13];
      return t.enum_values![t.generated_offsets[20]];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode[] {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[13];
      return t.enum_values!;
    }
  }

  export namespace ErrorCode  {
    export type Field = 'none'|'too_deep_workspace'|'too_deep_iterator'|'wrong_operand'|'wrong_params'|'wrong_param_type'|'wrong_numeric'|'wrong_state'|'wrong_null'|'unresolved_ref'|'assign_error'|'interrupted'|'throw'|'wrong_type'|'wrong_dimension'|'unsupported_operation'|'unsupported_type'|'dimensions_mismatch'|'timeout'|'forbidden'|'runtime_error';
  }
  export class geo extends std_n.core.geo {}

  export class node extends std_n.core.node {}

  export class TableColumnMeta extends $sdk.GCObject {
    static readonly _type = 'core::TableColumnMeta';

    type: string | null;
    size: bigint | number;
    index: boolean;
    min: any;
    max: any;
    avg: any;
    std: any;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        type: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        size: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        index: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        min: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        max: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[4]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[4]] = v;
          },
        },
        avg: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[5]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[5]] = v;
          },
        },
        std: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[6]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[6]] = v;
          },
        },
      });
    }

    static createFrom({type, size, index, min, max, avg, std, }: {type: string | null, size: bigint | number, index: boolean, min: any | null, max: any | null, avg: any | null, std: any | null, }, $g: $sdk.GreyCat = globalThis.greycat.default): TableColumnMeta {
      return new TableColumnMeta($g.abi.libs_by_name.get(stdlib.name)!.mapped[16], type, size, index, min, max, avg, std);
    }
    static create(type: string | null, size: bigint | number, index: boolean, min: any | null, max: any | null, avg: any | null, std: any | null, $g: $sdk.GreyCat = globalThis.greycat.default): TableColumnMeta {
      return new TableColumnMeta($g.abi.libs_by_name.get(stdlib.name)!.mapped[16], type, size, index, min, max, avg, std);
    }
  }

  export class Date extends std_n.core.Date {}

  export class Tensor extends std_n.core.Tensor {}

  export class ti4d extends std_n.core.ti4d {}

  export class GeoCircle extends $sdk.GCObject {
    static readonly _type = 'core::GeoCircle';

    center: $sdk.std.core.geo;
    radius: number;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        center: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        radius: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
      });
    }

    static createFrom({center, radius, }: {center: $sdk.std.core.geo, radius: number, }, $g: $sdk.GreyCat = globalThis.greycat.default): GeoCircle {
      return new GeoCircle($g.abi.libs_by_name.get(stdlib.name)!.mapped[20], center, radius);
    }
    static create(center: $sdk.std.core.geo, radius: number, $g: $sdk.GreyCat = globalThis.greycat.default): GeoCircle {
      return new GeoCircle($g.abi.libs_by_name.get(stdlib.name)!.mapped[20], center, radius);
    }
  }

  export class nodeGeo extends std_n.core.nodeGeo {}

  export class ti5d extends std_n.core.ti5d {}

  export class String extends std_n.core.String {}

  export class Map<K extends $sdk.Value = any, V extends $sdk.Value = any> extends std_n.core.Map<K, V> {}

  export class TensorType extends $sdk.GCEnum {
    static readonly _type = 'core::TensorType';

    constructor(type: $sdk.AbiType, offset: number, public key: TensorType.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static i32($g: $sdk.GreyCat = globalThis.greycat.default): TensorType {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[25];
      return t.enum_values![t.generated_offsets[0]];
    }
    static i64($g: $sdk.GreyCat = globalThis.greycat.default): TensorType {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[25];
      return t.enum_values![t.generated_offsets[1]];
    }
    static f32($g: $sdk.GreyCat = globalThis.greycat.default): TensorType {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[25];
      return t.enum_values![t.generated_offsets[2]];
    }
    static f64($g: $sdk.GreyCat = globalThis.greycat.default): TensorType {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[25];
      return t.enum_values![t.generated_offsets[3]];
    }
    static c64($g: $sdk.GreyCat = globalThis.greycat.default): TensorType {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[25];
      return t.enum_values![t.generated_offsets[4]];
    }
    static c128($g: $sdk.GreyCat = globalThis.greycat.default): TensorType {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[25];
      return t.enum_values![t.generated_offsets[5]];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): TensorType[] {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[25];
      return t.enum_values!;
    }
  }

  export namespace TensorType  {
    export type Field = 'i32'|'i64'|'f32'|'f64'|'c64'|'c128';
  }
  export class TimeZone extends $sdk.GCEnum {
    static readonly _type = 'core::TimeZone';

    constructor(type: $sdk.AbiType, offset: number, public key: TimeZone.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static Africa_Accra($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[0]];
    }
    static Africa_Bamako($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[1]];
    }
    static Africa_Banjul($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[2]];
    }
    static Africa_Conakry($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[3]];
    }
    static Africa_Dakar($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[4]];
    }
    static Africa_Freetown($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[5]];
    }
    static Africa_Lome($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[6]];
    }
    static Africa_Nouakchott($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[7]];
    }
    static Africa_Ouagadougou($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[8]];
    }
    static Africa_Timbuktu($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[9]];
    }
    static Atlantic_Reykjavik($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[10]];
    }
    static Atlantic_St_Helena($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[11]];
    }
    static Iceland($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[12]];
    }
    static Egypt($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[13]];
    }
    static Africa_Maseru($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[14]];
    }
    static Africa_Mbabane($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[15]];
    }
    static Africa_Bangui($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[16]];
    }
    static Africa_Brazzaville($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[17]];
    }
    static Africa_Douala($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[18]];
    }
    static Africa_Kinshasa($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[19]];
    }
    static Africa_Libreville($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[20]];
    }
    static Africa_Luanda($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[21]];
    }
    static Africa_Malabo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[22]];
    }
    static Africa_Niamey($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[23]];
    }
    static Africa_Porto_Novo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[24]];
    }
    static Africa_Blantyre($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[25]];
    }
    static Africa_Bujumbura($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[26]];
    }
    static Africa_Gaborone($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[27]];
    }
    static Africa_Harare($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[28]];
    }
    static Africa_Kigali($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[29]];
    }
    static Africa_Lubumbashi($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[30]];
    }
    static Africa_Lusaka($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[31]];
    }
    static Africa_Addis_Ababa($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[32]];
    }
    static Africa_Asmara($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[33]];
    }
    static Africa_Asmera($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[34]];
    }
    static Africa_Dar_es_Salaam($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[35]];
    }
    static Africa_Djibouti($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[36]];
    }
    static Africa_Kampala($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[37]];
    }
    static Africa_Mogadishu($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[38]];
    }
    static Indian_Antananarivo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[39]];
    }
    static Indian_Comoro($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[40]];
    }
    static Indian_Mayotte($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[41]];
    }
    static Libya($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[42]];
    }
    static America_Atka($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[43]];
    }
    static US_Aleutian($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[44]];
    }
    static US_Alaska($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[45]];
    }
    static America_Buenos_Aires($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[46]];
    }
    static America_Argentina_ComodRivadavia($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[47]];
    }
    static America_Catamarca($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[48]];
    }
    static America_Cordoba($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[49]];
    }
    static America_Rosario($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[50]];
    }
    static America_Jujuy($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[51]];
    }
    static America_Mendoza($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[52]];
    }
    static US_Central($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[53]];
    }
    static America_Shiprock($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[54]];
    }
    static Navajo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[55]];
    }
    static US_Mountain($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[56]];
    }
    static US_Michigan($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[57]];
    }
    static America_Yellowknife($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[58]];
    }
    static Canada_Mountain($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[59]];
    }
    static Canada_Atlantic($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[60]];
    }
    static Cuba($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[61]];
    }
    static America_Fort_Wayne($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[62]];
    }
    static America_Indianapolis($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[63]];
    }
    static US_East_Indiana($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[64]];
    }
    static America_Knox_IN($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[65]];
    }
    static US_Indiana_Starke($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[66]];
    }
    static America_Pangnirtung($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[67]];
    }
    static Jamaica($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[68]];
    }
    static America_Louisville($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[69]];
    }
    static US_Pacific($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[70]];
    }
    static Brazil_West($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[71]];
    }
    static Mexico_BajaSur($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[72]];
    }
    static Mexico_General($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[73]];
    }
    static US_Eastern($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[74]];
    }
    static Brazil_DeNoronha($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[75]];
    }
    static America_Godthab($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[76]];
    }
    static America_Atikokan($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[77]];
    }
    static America_Cayman($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[78]];
    }
    static America_Coral_Harbour($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[79]];
    }
    static America_Creston($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[80]];
    }
    static US_Arizona($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[81]];
    }
    static America_Anguilla($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[82]];
    }
    static America_Antigua($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[83]];
    }
    static America_Aruba($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[84]];
    }
    static America_Blanc_Sablon($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[85]];
    }
    static America_Curacao($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[86]];
    }
    static America_Dominica($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[87]];
    }
    static America_Grenada($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[88]];
    }
    static America_Guadeloupe($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[89]];
    }
    static America_Kralendijk($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[90]];
    }
    static America_Lower_Princes($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[91]];
    }
    static America_Marigot($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[92]];
    }
    static America_Montserrat($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[93]];
    }
    static America_Port_of_Spain($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[94]];
    }
    static America_St_Barthelemy($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[95]];
    }
    static America_St_Kitts($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[96]];
    }
    static America_St_Lucia($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[97]];
    }
    static America_St_Thomas($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[98]];
    }
    static America_St_Vincent($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[99]];
    }
    static America_Tortola($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[100]];
    }
    static America_Virgin($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[101]];
    }
    static Canada_Saskatchewan($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[102]];
    }
    static America_Porto_Acre($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[103]];
    }
    static Brazil_Acre($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[104]];
    }
    static Chile_Continental($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[105]];
    }
    static Brazil_East($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[106]];
    }
    static Canada_Newfoundland($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[107]];
    }
    static America_Ensenada($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[108]];
    }
    static America_Santa_Isabel($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[109]];
    }
    static Mexico_BajaNorte($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[110]];
    }
    static America_Montreal($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[111]];
    }
    static America_Nassau($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[112]];
    }
    static America_Nipigon($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[113]];
    }
    static America_Thunder_Bay($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[114]];
    }
    static Canada_Eastern($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[115]];
    }
    static Canada_Pacific($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[116]];
    }
    static Canada_Yukon($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[117]];
    }
    static America_Rainy_River($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[118]];
    }
    static Canada_Central($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[119]];
    }
    static Asia_Ashkhabad($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[120]];
    }
    static Asia_Phnom_Penh($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[121]];
    }
    static Asia_Vientiane($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[122]];
    }
    static Indian_Christmas($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[123]];
    }
    static Asia_Dacca($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[124]];
    }
    static Asia_Muscat($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[125]];
    }
    static Indian_Mahe($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[126]];
    }
    static Indian_Reunion($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[127]];
    }
    static Asia_Saigon($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[128]];
    }
    static Hongkong($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[129]];
    }
    static Asia_Tel_Aviv($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[130]];
    }
    static Israel($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[131]];
    }
    static Asia_Katmandu($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[132]];
    }
    static Asia_Calcutta($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[133]];
    }
    static Asia_Brunei($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[134]];
    }
    static Asia_Macao($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[135]];
    }
    static Asia_Ujung_Pandang($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[136]];
    }
    static Europe_Nicosia($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[137]];
    }
    static Asia_Bahrain($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[138]];
    }
    static Antarctica_Syowa($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[139]];
    }
    static Asia_Aden($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[140]];
    }
    static Asia_Kuwait($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[141]];
    }
    static ROK($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[142]];
    }
    static Asia_Chongqing($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[143]];
    }
    static Asia_Chungking($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[144]];
    }
    static Asia_Harbin($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[145]];
    }
    static PRC($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[146]];
    }
    static Asia_Kuala_Lumpur($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[147]];
    }
    static Singapore($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[148]];
    }
    static ROC($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[149]];
    }
    static Iran($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[150]];
    }
    static Asia_Thimbu($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[151]];
    }
    static Japan($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[152]];
    }
    static Asia_Ulan_Bator($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[153]];
    }
    static Antarctica_Vostok($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[154]];
    }
    static Asia_Kashgar($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[155]];
    }
    static Asia_Rangoon($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[156]];
    }
    static Indian_Cocos($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[157]];
    }
    static Atlantic_Faeroe($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[158]];
    }
    static Australia_South($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[159]];
    }
    static Australia_Queensland($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[160]];
    }
    static Australia_Yancowinna($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[161]];
    }
    static Australia_North($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[162]];
    }
    static Australia_Currie($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[163]];
    }
    static Australia_Tasmania($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[164]];
    }
    static Australia_LHI($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[165]];
    }
    static Australia_Victoria($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[166]];
    }
    static Australia_West($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[167]];
    }
    static Australia_ACT($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[168]];
    }
    static Australia_Canberra($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[169]];
    }
    static Australia_NSW($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[170]];
    }
    static GMT($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[171]];
    }
    static GMTx0($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[172]];
    }
    static GMT_0($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[173]];
    }
    static GMT0($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[174]];
    }
    static Greenwich($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[175]];
    }
    static UCT($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[176]];
    }
    static UTC($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[177]];
    }
    static Universal($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[178]];
    }
    static Zulu($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[179]];
    }
    static Europe_Ljubljana($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[180]];
    }
    static Europe_Podgorica($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[181]];
    }
    static Europe_Sarajevo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[182]];
    }
    static Europe_Skopje($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[183]];
    }
    static Europe_Zagreb($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[184]];
    }
    static Arctic_Longyearbyen($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[185]];
    }
    static Atlantic_Jan_Mayen($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[186]];
    }
    static Europe_Copenhagen($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[187]];
    }
    static Europe_Oslo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[188]];
    }
    static Europe_Stockholm($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[189]];
    }
    static Europe_Amsterdam($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[190]];
    }
    static Europe_Luxembourg($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[191]];
    }
    static Europe_Tiraspol($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[192]];
    }
    static Eire($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[193]];
    }
    static Europe_Mariehamn($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[194]];
    }
    static Asia_Istanbul($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[195]];
    }
    static Turkey($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[196]];
    }
    static Europe_Kiev($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[197]];
    }
    static Europe_Uzhgorod($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[198]];
    }
    static Europe_Zaporozhye($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[199]];
    }
    static Portugal($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[200]];
    }
    static Europe_Belfast($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[201]];
    }
    static Europe_Guernsey($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[202]];
    }
    static Europe_Isle_of_Man($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[203]];
    }
    static Europe_Jersey($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[204]];
    }
    static GB($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[205]];
    }
    static GB_Eire($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[206]];
    }
    static W_SU($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[207]];
    }
    static Europe_Monaco($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[208]];
    }
    static Europe_Bratislava($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[209]];
    }
    static Europe_San_Marino($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[210]];
    }
    static Europe_Vatican($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[211]];
    }
    static Poland($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[212]];
    }
    static Europe_Busingen($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[213]];
    }
    static Europe_Vaduz($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[214]];
    }
    static Indian_Kerguelen($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[215]];
    }
    static Antarctica_McMurdo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[216]];
    }
    static Antarctica_South_Pole($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[217]];
    }
    static NZ($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[218]];
    }
    static NZ_CHAT($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[219]];
    }
    static Chile_EasterIsland($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[220]];
    }
    static Pacific_Pohnpei($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[221]];
    }
    static Pacific_Ponape($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[222]];
    }
    static Pacific_Saipan($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[223]];
    }
    static Pacific_Johnston($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[224]];
    }
    static US_Hawaii($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[225]];
    }
    static Pacific_Enderbury($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[226]];
    }
    static Kwajalein($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[227]];
    }
    static Pacific_Midway($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[228]];
    }
    static Pacific_Samoa($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[229]];
    }
    static US_Samoa($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[230]];
    }
    static Antarctica_DumontDUrville($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[231]];
    }
    static Pacific_Chuuk($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[232]];
    }
    static Pacific_Truk($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[233]];
    }
    static Pacific_Yap($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[234]];
    }
    static Pacific_Funafuti($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[235]];
    }
    static Pacific_Majuro($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[236]];
    }
    static Pacific_Wake($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[237]];
    }
    static Pacific_Wallis($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[238]];
    }
    static Africa_Abidjan($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[239]];
    }
    static Africa_Algiers($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[240]];
    }
    static Africa_Bissau($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[241]];
    }
    static Africa_Cairo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[242]];
    }
    static Africa_Casablanca($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[243]];
    }
    static Africa_Ceuta($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[244]];
    }
    static Africa_El_Aaiun($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[245]];
    }
    static Africa_Johannesburg($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[246]];
    }
    static Africa_Juba($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[247]];
    }
    static Africa_Khartoum($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[248]];
    }
    static Africa_Lagos($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[249]];
    }
    static Africa_Maputo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[250]];
    }
    static Africa_Monrovia($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[251]];
    }
    static Africa_Nairobi($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[252]];
    }
    static Africa_Ndjamena($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[253]];
    }
    static Africa_Sao_Tome($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[254]];
    }
    static Africa_Tripoli($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[255]];
    }
    static Africa_Tunis($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[256]];
    }
    static Africa_Windhoek($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[257]];
    }
    static America_Adak($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[258]];
    }
    static America_Anchorage($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[259]];
    }
    static America_Araguaina($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[260]];
    }
    static America_Argentina_Buenos_Aires($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[261]];
    }
    static America_Argentina_Catamarca($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[262]];
    }
    static America_Argentina_Cordoba($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[263]];
    }
    static America_Argentina_Jujuy($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[264]];
    }
    static America_Argentina_La_Rioja($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[265]];
    }
    static America_Argentina_Mendoza($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[266]];
    }
    static America_Argentina_Rio_Gallegos($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[267]];
    }
    static America_Argentina_Salta($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[268]];
    }
    static America_Argentina_San_Juan($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[269]];
    }
    static America_Argentina_San_Luis($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[270]];
    }
    static America_Argentina_Tucuman($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[271]];
    }
    static America_Argentina_Ushuaia($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[272]];
    }
    static America_Asuncion($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[273]];
    }
    static America_Bahia($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[274]];
    }
    static America_Bahia_Banderas($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[275]];
    }
    static America_Barbados($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[276]];
    }
    static America_Belem($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[277]];
    }
    static America_Belize($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[278]];
    }
    static America_Boa_Vista($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[279]];
    }
    static America_Bogota($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[280]];
    }
    static America_Boise($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[281]];
    }
    static America_Cambridge_Bay($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[282]];
    }
    static America_Campo_Grande($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[283]];
    }
    static America_Cancun($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[284]];
    }
    static America_Caracas($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[285]];
    }
    static America_Cayenne($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[286]];
    }
    static America_Chicago($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[287]];
    }
    static America_Chihuahua($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[288]];
    }
    static America_Ciudad_Juarez($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[289]];
    }
    static America_Costa_Rica($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[290]];
    }
    static America_Cuiaba($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[291]];
    }
    static America_Danmarkshavn($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[292]];
    }
    static America_Dawson($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[293]];
    }
    static America_Dawson_Creek($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[294]];
    }
    static America_Denver($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[295]];
    }
    static America_Detroit($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[296]];
    }
    static America_Edmonton($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[297]];
    }
    static America_Eirunepe($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[298]];
    }
    static America_El_Salvador($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[299]];
    }
    static America_Fort_Nelson($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[300]];
    }
    static America_Fortaleza($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[301]];
    }
    static America_Glace_Bay($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[302]];
    }
    static America_Goose_Bay($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[303]];
    }
    static America_Grand_Turk($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[304]];
    }
    static America_Guatemala($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[305]];
    }
    static America_Guayaquil($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[306]];
    }
    static America_Guyana($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[307]];
    }
    static America_Halifax($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[308]];
    }
    static America_Havana($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[309]];
    }
    static America_Hermosillo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[310]];
    }
    static America_Indiana_Indianapolis($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[311]];
    }
    static America_Indiana_Knox($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[312]];
    }
    static America_Indiana_Marengo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[313]];
    }
    static America_Indiana_Petersburg($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[314]];
    }
    static America_Indiana_Tell_City($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[315]];
    }
    static America_Indiana_Vevay($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[316]];
    }
    static America_Indiana_Vincennes($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[317]];
    }
    static America_Indiana_Winamac($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[318]];
    }
    static America_Inuvik($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[319]];
    }
    static America_Iqaluit($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[320]];
    }
    static America_Jamaica($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[321]];
    }
    static America_Juneau($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[322]];
    }
    static America_Kentucky_Louisville($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[323]];
    }
    static America_Kentucky_Monticello($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[324]];
    }
    static America_La_Paz($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[325]];
    }
    static America_Lima($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[326]];
    }
    static America_Los_Angeles($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[327]];
    }
    static America_Maceio($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[328]];
    }
    static America_Managua($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[329]];
    }
    static America_Manaus($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[330]];
    }
    static America_Martinique($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[331]];
    }
    static America_Matamoros($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[332]];
    }
    static America_Mazatlan($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[333]];
    }
    static America_Menominee($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[334]];
    }
    static America_Merida($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[335]];
    }
    static America_Metlakatla($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[336]];
    }
    static America_Mexico_City($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[337]];
    }
    static America_Miquelon($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[338]];
    }
    static America_Moncton($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[339]];
    }
    static America_Monterrey($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[340]];
    }
    static America_Montevideo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[341]];
    }
    static America_New_York($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[342]];
    }
    static America_Nome($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[343]];
    }
    static America_Noronha($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[344]];
    }
    static America_North_Dakota_Beulah($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[345]];
    }
    static America_North_Dakota_Center($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[346]];
    }
    static America_North_Dakota_New_Salem($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[347]];
    }
    static America_Nuuk($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[348]];
    }
    static America_Ojinaga($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[349]];
    }
    static America_Panama($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[350]];
    }
    static America_Paramaribo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[351]];
    }
    static America_Phoenix($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[352]];
    }
    static America_Port_au_Prince($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[353]];
    }
    static America_Porto_Velho($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[354]];
    }
    static America_Puerto_Rico($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[355]];
    }
    static America_Punta_Arenas($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[356]];
    }
    static America_Rankin_Inlet($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[357]];
    }
    static America_Recife($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[358]];
    }
    static America_Regina($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[359]];
    }
    static America_Resolute($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[360]];
    }
    static America_Rio_Branco($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[361]];
    }
    static America_Santarem($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[362]];
    }
    static America_Santiago($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[363]];
    }
    static America_Santo_Domingo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[364]];
    }
    static America_Sao_Paulo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[365]];
    }
    static America_Scoresbysund($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[366]];
    }
    static America_Sitka($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[367]];
    }
    static America_St_Johns($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[368]];
    }
    static America_Swift_Current($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[369]];
    }
    static America_Tegucigalpa($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[370]];
    }
    static America_Thule($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[371]];
    }
    static America_Tijuana($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[372]];
    }
    static America_Toronto($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[373]];
    }
    static America_Vancouver($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[374]];
    }
    static America_Whitehorse($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[375]];
    }
    static America_Winnipeg($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[376]];
    }
    static America_Yakutat($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[377]];
    }
    static Antarctica_Casey($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[378]];
    }
    static Antarctica_Davis($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[379]];
    }
    static Antarctica_Macquarie($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[380]];
    }
    static Antarctica_Mawson($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[381]];
    }
    static Antarctica_Palmer($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[382]];
    }
    static Antarctica_Rothera($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[383]];
    }
    static Antarctica_Troll($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[384]];
    }
    static Asia_Almaty($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[385]];
    }
    static Asia_Amman($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[386]];
    }
    static Asia_Anadyr($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[387]];
    }
    static Asia_Aqtau($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[388]];
    }
    static Asia_Aqtobe($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[389]];
    }
    static Asia_Ashgabat($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[390]];
    }
    static Asia_Atyrau($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[391]];
    }
    static Asia_Baghdad($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[392]];
    }
    static Asia_Baku($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[393]];
    }
    static Asia_Bangkok($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[394]];
    }
    static Asia_Barnaul($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[395]];
    }
    static Asia_Beirut($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[396]];
    }
    static Asia_Bishkek($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[397]];
    }
    static Asia_Chita($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[398]];
    }
    static Asia_Choibalsan($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[399]];
    }
    static Asia_Colombo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[400]];
    }
    static Asia_Damascus($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[401]];
    }
    static Asia_Dhaka($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[402]];
    }
    static Asia_Dili($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[403]];
    }
    static Asia_Dubai($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[404]];
    }
    static Asia_Dushanbe($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[405]];
    }
    static Asia_Famagusta($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[406]];
    }
    static Asia_Gaza($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[407]];
    }
    static Asia_Hebron($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[408]];
    }
    static Asia_Ho_Chi_Minh($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[409]];
    }
    static Asia_Hong_Kong($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[410]];
    }
    static Asia_Hovd($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[411]];
    }
    static Asia_Irkutsk($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[412]];
    }
    static Asia_Jakarta($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[413]];
    }
    static Asia_Jayapura($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[414]];
    }
    static Asia_Jerusalem($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[415]];
    }
    static Asia_Kabul($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[416]];
    }
    static Asia_Kamchatka($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[417]];
    }
    static Asia_Karachi($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[418]];
    }
    static Asia_Kathmandu($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[419]];
    }
    static Asia_Khandyga($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[420]];
    }
    static Asia_Kolkata($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[421]];
    }
    static Asia_Krasnoyarsk($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[422]];
    }
    static Asia_Kuching($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[423]];
    }
    static Asia_Macau($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[424]];
    }
    static Asia_Magadan($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[425]];
    }
    static Asia_Makassar($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[426]];
    }
    static Asia_Manila($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[427]];
    }
    static Asia_Nicosia($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[428]];
    }
    static Asia_Novokuznetsk($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[429]];
    }
    static Asia_Novosibirsk($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[430]];
    }
    static Asia_Omsk($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[431]];
    }
    static Asia_Oral($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[432]];
    }
    static Asia_Pontianak($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[433]];
    }
    static Asia_Pyongyang($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[434]];
    }
    static Asia_Qatar($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[435]];
    }
    static Asia_Qostanay($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[436]];
    }
    static Asia_Qyzylorda($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[437]];
    }
    static Asia_Riyadh($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[438]];
    }
    static Asia_Sakhalin($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[439]];
    }
    static Asia_Samarkand($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[440]];
    }
    static Asia_Seoul($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[441]];
    }
    static Asia_Shanghai($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[442]];
    }
    static Asia_Singapore($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[443]];
    }
    static Asia_Srednekolymsk($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[444]];
    }
    static Asia_Taipei($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[445]];
    }
    static Asia_Tashkent($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[446]];
    }
    static Asia_Tbilisi($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[447]];
    }
    static Asia_Tehran($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[448]];
    }
    static Asia_Thimphu($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[449]];
    }
    static Asia_Tokyo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[450]];
    }
    static Asia_Tomsk($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[451]];
    }
    static Asia_Ulaanbaatar($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[452]];
    }
    static Asia_Urumqi($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[453]];
    }
    static Asia_Ust_Nera($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[454]];
    }
    static Asia_Vladivostok($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[455]];
    }
    static Asia_Yakutsk($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[456]];
    }
    static Asia_Yangon($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[457]];
    }
    static Asia_Yekaterinburg($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[458]];
    }
    static Asia_Yerevan($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[459]];
    }
    static Atlantic_Azores($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[460]];
    }
    static Atlantic_Bermuda($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[461]];
    }
    static Atlantic_Canary($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[462]];
    }
    static Atlantic_Cape_Verde($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[463]];
    }
    static Atlantic_Faroe($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[464]];
    }
    static Atlantic_Madeira($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[465]];
    }
    static Atlantic_South_Georgia($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[466]];
    }
    static Atlantic_Stanley($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[467]];
    }
    static Australia_Adelaide($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[468]];
    }
    static Australia_Brisbane($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[469]];
    }
    static Australia_Broken_Hill($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[470]];
    }
    static Australia_Darwin($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[471]];
    }
    static Australia_Eucla($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[472]];
    }
    static Australia_Hobart($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[473]];
    }
    static Australia_Lindeman($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[474]];
    }
    static Australia_Lord_Howe($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[475]];
    }
    static Australia_Melbourne($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[476]];
    }
    static Australia_Perth($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[477]];
    }
    static Australia_Sydney($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[478]];
    }
    static CET($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[479]];
    }
    static CST6CDT($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[480]];
    }
    static EET($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[481]];
    }
    static EST($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[482]];
    }
    static EST5EDT($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[483]];
    }
    static Europe_Andorra($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[484]];
    }
    static Europe_Astrakhan($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[485]];
    }
    static Europe_Athens($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[486]];
    }
    static Europe_Belgrade($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[487]];
    }
    static Europe_Berlin($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[488]];
    }
    static Europe_Brussels($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[489]];
    }
    static Europe_Bucharest($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[490]];
    }
    static Europe_Budapest($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[491]];
    }
    static Europe_Chisinau($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[492]];
    }
    static Europe_Dublin($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[493]];
    }
    static Europe_Gibraltar($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[494]];
    }
    static Europe_Helsinki($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[495]];
    }
    static Europe_Istanbul($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[496]];
    }
    static Europe_Kaliningrad($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[497]];
    }
    static Europe_Kirov($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[498]];
    }
    static Europe_Kyiv($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[499]];
    }
    static Europe_Lisbon($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[500]];
    }
    static Europe_London($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[501]];
    }
    static Europe_Madrid($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[502]];
    }
    static Europe_Malta($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[503]];
    }
    static Europe_Minsk($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[504]];
    }
    static Europe_Moscow($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[505]];
    }
    static Europe_Paris($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[506]];
    }
    static Europe_Prague($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[507]];
    }
    static Europe_Riga($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[508]];
    }
    static Europe_Rome($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[509]];
    }
    static Europe_Samara($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[510]];
    }
    static Europe_Saratov($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[511]];
    }
    static Europe_Simferopol($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[512]];
    }
    static Europe_Sofia($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[513]];
    }
    static Europe_Tallinn($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[514]];
    }
    static Europe_Tirane($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[515]];
    }
    static Europe_Ulyanovsk($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[516]];
    }
    static Europe_Vienna($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[517]];
    }
    static Europe_Vilnius($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[518]];
    }
    static Europe_Volgograd($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[519]];
    }
    static Europe_Warsaw($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[520]];
    }
    static Europe_Zurich($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[521]];
    }
    static Factory($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[522]];
    }
    static HST($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[523]];
    }
    static Indian_Chagos($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[524]];
    }
    static Indian_Maldives($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[525]];
    }
    static Indian_Mauritius($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[526]];
    }
    static MET($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[527]];
    }
    static MST($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[528]];
    }
    static MST7MDT($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[529]];
    }
    static PST8PDT($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[530]];
    }
    static Pacific_Apia($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[531]];
    }
    static Pacific_Auckland($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[532]];
    }
    static Pacific_Bougainville($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[533]];
    }
    static Pacific_Chatham($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[534]];
    }
    static Pacific_Easter($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[535]];
    }
    static Pacific_Efate($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[536]];
    }
    static Pacific_Fakaofo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[537]];
    }
    static Pacific_Fiji($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[538]];
    }
    static Pacific_Galapagos($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[539]];
    }
    static Pacific_Gambier($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[540]];
    }
    static Pacific_Guadalcanal($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[541]];
    }
    static Pacific_Guam($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[542]];
    }
    static Pacific_Honolulu($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[543]];
    }
    static Pacific_Kanton($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[544]];
    }
    static Pacific_Kiritimati($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[545]];
    }
    static Pacific_Kosrae($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[546]];
    }
    static Pacific_Kwajalein($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[547]];
    }
    static Pacific_Marquesas($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[548]];
    }
    static Pacific_Nauru($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[549]];
    }
    static Pacific_Niue($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[550]];
    }
    static Pacific_Norfolk($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[551]];
    }
    static Pacific_Noumea($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[552]];
    }
    static Pacific_Pago_Pago($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[553]];
    }
    static Pacific_Palau($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[554]];
    }
    static Pacific_Pitcairn($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[555]];
    }
    static Pacific_Port_Moresby($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[556]];
    }
    static Pacific_Rarotonga($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[557]];
    }
    static Pacific_Tahiti($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[558]];
    }
    static Pacific_Tarawa($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[559]];
    }
    static Pacific_Tongatapu($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[560]];
    }
    static WET($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values![t.generated_offsets[561]];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone[] {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[26];
      return t.enum_values!;
    }
  }

  export namespace TimeZone  {
    export type Field = 'Africa_Accra'|'Africa_Bamako'|'Africa_Banjul'|'Africa_Conakry'|'Africa_Dakar'|'Africa_Freetown'|'Africa_Lome'|'Africa_Nouakchott'|'Africa_Ouagadougou'|'Africa_Timbuktu'|'Atlantic_Reykjavik'|'Atlantic_St_Helena'|'Iceland'|'Egypt'|'Africa_Maseru'|'Africa_Mbabane'|'Africa_Bangui'|'Africa_Brazzaville'|'Africa_Douala'|'Africa_Kinshasa'|'Africa_Libreville'|'Africa_Luanda'|'Africa_Malabo'|'Africa_Niamey'|'Africa_Porto_Novo'|'Africa_Blantyre'|'Africa_Bujumbura'|'Africa_Gaborone'|'Africa_Harare'|'Africa_Kigali'|'Africa_Lubumbashi'|'Africa_Lusaka'|'Africa_Addis_Ababa'|'Africa_Asmara'|'Africa_Asmera'|'Africa_Dar_es_Salaam'|'Africa_Djibouti'|'Africa_Kampala'|'Africa_Mogadishu'|'Indian_Antananarivo'|'Indian_Comoro'|'Indian_Mayotte'|'Libya'|'America_Atka'|'US_Aleutian'|'US_Alaska'|'America_Buenos_Aires'|'America_Argentina_ComodRivadavia'|'America_Catamarca'|'America_Cordoba'|'America_Rosario'|'America_Jujuy'|'America_Mendoza'|'US_Central'|'America_Shiprock'|'Navajo'|'US_Mountain'|'US_Michigan'|'America_Yellowknife'|'Canada_Mountain'|'Canada_Atlantic'|'Cuba'|'America_Fort_Wayne'|'America_Indianapolis'|'US_East_Indiana'|'America_Knox_IN'|'US_Indiana_Starke'|'America_Pangnirtung'|'Jamaica'|'America_Louisville'|'US_Pacific'|'Brazil_West'|'Mexico_BajaSur'|'Mexico_General'|'US_Eastern'|'Brazil_DeNoronha'|'America_Godthab'|'America_Atikokan'|'America_Cayman'|'America_Coral_Harbour'|'America_Creston'|'US_Arizona'|'America_Anguilla'|'America_Antigua'|'America_Aruba'|'America_Blanc_Sablon'|'America_Curacao'|'America_Dominica'|'America_Grenada'|'America_Guadeloupe'|'America_Kralendijk'|'America_Lower_Princes'|'America_Marigot'|'America_Montserrat'|'America_Port_of_Spain'|'America_St_Barthelemy'|'America_St_Kitts'|'America_St_Lucia'|'America_St_Thomas'|'America_St_Vincent'|'America_Tortola'|'America_Virgin'|'Canada_Saskatchewan'|'America_Porto_Acre'|'Brazil_Acre'|'Chile_Continental'|'Brazil_East'|'Canada_Newfoundland'|'America_Ensenada'|'America_Santa_Isabel'|'Mexico_BajaNorte'|'America_Montreal'|'America_Nassau'|'America_Nipigon'|'America_Thunder_Bay'|'Canada_Eastern'|'Canada_Pacific'|'Canada_Yukon'|'America_Rainy_River'|'Canada_Central'|'Asia_Ashkhabad'|'Asia_Phnom_Penh'|'Asia_Vientiane'|'Indian_Christmas'|'Asia_Dacca'|'Asia_Muscat'|'Indian_Mahe'|'Indian_Reunion'|'Asia_Saigon'|'Hongkong'|'Asia_Tel_Aviv'|'Israel'|'Asia_Katmandu'|'Asia_Calcutta'|'Asia_Brunei'|'Asia_Macao'|'Asia_Ujung_Pandang'|'Europe_Nicosia'|'Asia_Bahrain'|'Antarctica_Syowa'|'Asia_Aden'|'Asia_Kuwait'|'ROK'|'Asia_Chongqing'|'Asia_Chungking'|'Asia_Harbin'|'PRC'|'Asia_Kuala_Lumpur'|'Singapore'|'ROC'|'Iran'|'Asia_Thimbu'|'Japan'|'Asia_Ulan_Bator'|'Antarctica_Vostok'|'Asia_Kashgar'|'Asia_Rangoon'|'Indian_Cocos'|'Atlantic_Faeroe'|'Australia_South'|'Australia_Queensland'|'Australia_Yancowinna'|'Australia_North'|'Australia_Currie'|'Australia_Tasmania'|'Australia_LHI'|'Australia_Victoria'|'Australia_West'|'Australia_ACT'|'Australia_Canberra'|'Australia_NSW'|'GMT'|'GMTx0'|'GMT_0'|'GMT0'|'Greenwich'|'UCT'|'UTC'|'Universal'|'Zulu'|'Europe_Ljubljana'|'Europe_Podgorica'|'Europe_Sarajevo'|'Europe_Skopje'|'Europe_Zagreb'|'Arctic_Longyearbyen'|'Atlantic_Jan_Mayen'|'Europe_Copenhagen'|'Europe_Oslo'|'Europe_Stockholm'|'Europe_Amsterdam'|'Europe_Luxembourg'|'Europe_Tiraspol'|'Eire'|'Europe_Mariehamn'|'Asia_Istanbul'|'Turkey'|'Europe_Kiev'|'Europe_Uzhgorod'|'Europe_Zaporozhye'|'Portugal'|'Europe_Belfast'|'Europe_Guernsey'|'Europe_Isle_of_Man'|'Europe_Jersey'|'GB'|'GB_Eire'|'W_SU'|'Europe_Monaco'|'Europe_Bratislava'|'Europe_San_Marino'|'Europe_Vatican'|'Poland'|'Europe_Busingen'|'Europe_Vaduz'|'Indian_Kerguelen'|'Antarctica_McMurdo'|'Antarctica_South_Pole'|'NZ'|'NZ_CHAT'|'Chile_EasterIsland'|'Pacific_Pohnpei'|'Pacific_Ponape'|'Pacific_Saipan'|'Pacific_Johnston'|'US_Hawaii'|'Pacific_Enderbury'|'Kwajalein'|'Pacific_Midway'|'Pacific_Samoa'|'US_Samoa'|'Antarctica_DumontDUrville'|'Pacific_Chuuk'|'Pacific_Truk'|'Pacific_Yap'|'Pacific_Funafuti'|'Pacific_Majuro'|'Pacific_Wake'|'Pacific_Wallis'|'Africa_Abidjan'|'Africa_Algiers'|'Africa_Bissau'|'Africa_Cairo'|'Africa_Casablanca'|'Africa_Ceuta'|'Africa_El_Aaiun'|'Africa_Johannesburg'|'Africa_Juba'|'Africa_Khartoum'|'Africa_Lagos'|'Africa_Maputo'|'Africa_Monrovia'|'Africa_Nairobi'|'Africa_Ndjamena'|'Africa_Sao_Tome'|'Africa_Tripoli'|'Africa_Tunis'|'Africa_Windhoek'|'America_Adak'|'America_Anchorage'|'America_Araguaina'|'America_Argentina_Buenos_Aires'|'America_Argentina_Catamarca'|'America_Argentina_Cordoba'|'America_Argentina_Jujuy'|'America_Argentina_La_Rioja'|'America_Argentina_Mendoza'|'America_Argentina_Rio_Gallegos'|'America_Argentina_Salta'|'America_Argentina_San_Juan'|'America_Argentina_San_Luis'|'America_Argentina_Tucuman'|'America_Argentina_Ushuaia'|'America_Asuncion'|'America_Bahia'|'America_Bahia_Banderas'|'America_Barbados'|'America_Belem'|'America_Belize'|'America_Boa_Vista'|'America_Bogota'|'America_Boise'|'America_Cambridge_Bay'|'America_Campo_Grande'|'America_Cancun'|'America_Caracas'|'America_Cayenne'|'America_Chicago'|'America_Chihuahua'|'America_Ciudad_Juarez'|'America_Costa_Rica'|'America_Cuiaba'|'America_Danmarkshavn'|'America_Dawson'|'America_Dawson_Creek'|'America_Denver'|'America_Detroit'|'America_Edmonton'|'America_Eirunepe'|'America_El_Salvador'|'America_Fort_Nelson'|'America_Fortaleza'|'America_Glace_Bay'|'America_Goose_Bay'|'America_Grand_Turk'|'America_Guatemala'|'America_Guayaquil'|'America_Guyana'|'America_Halifax'|'America_Havana'|'America_Hermosillo'|'America_Indiana_Indianapolis'|'America_Indiana_Knox'|'America_Indiana_Marengo'|'America_Indiana_Petersburg'|'America_Indiana_Tell_City'|'America_Indiana_Vevay'|'America_Indiana_Vincennes'|'America_Indiana_Winamac'|'America_Inuvik'|'America_Iqaluit'|'America_Jamaica'|'America_Juneau'|'America_Kentucky_Louisville'|'America_Kentucky_Monticello'|'America_La_Paz'|'America_Lima'|'America_Los_Angeles'|'America_Maceio'|'America_Managua'|'America_Manaus'|'America_Martinique'|'America_Matamoros'|'America_Mazatlan'|'America_Menominee'|'America_Merida'|'America_Metlakatla'|'America_Mexico_City'|'America_Miquelon'|'America_Moncton'|'America_Monterrey'|'America_Montevideo'|'America_New_York'|'America_Nome'|'America_Noronha'|'America_North_Dakota_Beulah'|'America_North_Dakota_Center'|'America_North_Dakota_New_Salem'|'America_Nuuk'|'America_Ojinaga'|'America_Panama'|'America_Paramaribo'|'America_Phoenix'|'America_Port_au_Prince'|'America_Porto_Velho'|'America_Puerto_Rico'|'America_Punta_Arenas'|'America_Rankin_Inlet'|'America_Recife'|'America_Regina'|'America_Resolute'|'America_Rio_Branco'|'America_Santarem'|'America_Santiago'|'America_Santo_Domingo'|'America_Sao_Paulo'|'America_Scoresbysund'|'America_Sitka'|'America_St_Johns'|'America_Swift_Current'|'America_Tegucigalpa'|'America_Thule'|'America_Tijuana'|'America_Toronto'|'America_Vancouver'|'America_Whitehorse'|'America_Winnipeg'|'America_Yakutat'|'Antarctica_Casey'|'Antarctica_Davis'|'Antarctica_Macquarie'|'Antarctica_Mawson'|'Antarctica_Palmer'|'Antarctica_Rothera'|'Antarctica_Troll'|'Asia_Almaty'|'Asia_Amman'|'Asia_Anadyr'|'Asia_Aqtau'|'Asia_Aqtobe'|'Asia_Ashgabat'|'Asia_Atyrau'|'Asia_Baghdad'|'Asia_Baku'|'Asia_Bangkok'|'Asia_Barnaul'|'Asia_Beirut'|'Asia_Bishkek'|'Asia_Chita'|'Asia_Choibalsan'|'Asia_Colombo'|'Asia_Damascus'|'Asia_Dhaka'|'Asia_Dili'|'Asia_Dubai'|'Asia_Dushanbe'|'Asia_Famagusta'|'Asia_Gaza'|'Asia_Hebron'|'Asia_Ho_Chi_Minh'|'Asia_Hong_Kong'|'Asia_Hovd'|'Asia_Irkutsk'|'Asia_Jakarta'|'Asia_Jayapura'|'Asia_Jerusalem'|'Asia_Kabul'|'Asia_Kamchatka'|'Asia_Karachi'|'Asia_Kathmandu'|'Asia_Khandyga'|'Asia_Kolkata'|'Asia_Krasnoyarsk'|'Asia_Kuching'|'Asia_Macau'|'Asia_Magadan'|'Asia_Makassar'|'Asia_Manila'|'Asia_Nicosia'|'Asia_Novokuznetsk'|'Asia_Novosibirsk'|'Asia_Omsk'|'Asia_Oral'|'Asia_Pontianak'|'Asia_Pyongyang'|'Asia_Qatar'|'Asia_Qostanay'|'Asia_Qyzylorda'|'Asia_Riyadh'|'Asia_Sakhalin'|'Asia_Samarkand'|'Asia_Seoul'|'Asia_Shanghai'|'Asia_Singapore'|'Asia_Srednekolymsk'|'Asia_Taipei'|'Asia_Tashkent'|'Asia_Tbilisi'|'Asia_Tehran'|'Asia_Thimphu'|'Asia_Tokyo'|'Asia_Tomsk'|'Asia_Ulaanbaatar'|'Asia_Urumqi'|'Asia_Ust_Nera'|'Asia_Vladivostok'|'Asia_Yakutsk'|'Asia_Yangon'|'Asia_Yekaterinburg'|'Asia_Yerevan'|'Atlantic_Azores'|'Atlantic_Bermuda'|'Atlantic_Canary'|'Atlantic_Cape_Verde'|'Atlantic_Faroe'|'Atlantic_Madeira'|'Atlantic_South_Georgia'|'Atlantic_Stanley'|'Australia_Adelaide'|'Australia_Brisbane'|'Australia_Broken_Hill'|'Australia_Darwin'|'Australia_Eucla'|'Australia_Hobart'|'Australia_Lindeman'|'Australia_Lord_Howe'|'Australia_Melbourne'|'Australia_Perth'|'Australia_Sydney'|'CET'|'CST6CDT'|'EET'|'EST'|'EST5EDT'|'Europe_Andorra'|'Europe_Astrakhan'|'Europe_Athens'|'Europe_Belgrade'|'Europe_Berlin'|'Europe_Brussels'|'Europe_Bucharest'|'Europe_Budapest'|'Europe_Chisinau'|'Europe_Dublin'|'Europe_Gibraltar'|'Europe_Helsinki'|'Europe_Istanbul'|'Europe_Kaliningrad'|'Europe_Kirov'|'Europe_Kyiv'|'Europe_Lisbon'|'Europe_London'|'Europe_Madrid'|'Europe_Malta'|'Europe_Minsk'|'Europe_Moscow'|'Europe_Paris'|'Europe_Prague'|'Europe_Riga'|'Europe_Rome'|'Europe_Samara'|'Europe_Saratov'|'Europe_Simferopol'|'Europe_Sofia'|'Europe_Tallinn'|'Europe_Tirane'|'Europe_Ulyanovsk'|'Europe_Vienna'|'Europe_Vilnius'|'Europe_Volgograd'|'Europe_Warsaw'|'Europe_Zurich'|'Factory'|'HST'|'Indian_Chagos'|'Indian_Maldives'|'Indian_Mauritius'|'MET'|'MST'|'MST7MDT'|'PST8PDT'|'Pacific_Apia'|'Pacific_Auckland'|'Pacific_Bougainville'|'Pacific_Chatham'|'Pacific_Easter'|'Pacific_Efate'|'Pacific_Fakaofo'|'Pacific_Fiji'|'Pacific_Galapagos'|'Pacific_Gambier'|'Pacific_Guadalcanal'|'Pacific_Guam'|'Pacific_Honolulu'|'Pacific_Kanton'|'Pacific_Kiritimati'|'Pacific_Kosrae'|'Pacific_Kwajalein'|'Pacific_Marquesas'|'Pacific_Nauru'|'Pacific_Niue'|'Pacific_Norfolk'|'Pacific_Noumea'|'Pacific_Pago_Pago'|'Pacific_Palau'|'Pacific_Pitcairn'|'Pacific_Port_Moresby'|'Pacific_Rarotonga'|'Pacific_Tahiti'|'Pacific_Tarawa'|'Pacific_Tongatapu'|'WET';
  }
  export class GeoBox extends $sdk.GCObject {
    static readonly _type = 'core::GeoBox';

    sw: $sdk.std.core.geo;
    ne: $sdk.std.core.geo;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        sw: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        ne: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
      });
    }

    static createFrom({sw, ne, }: {sw: $sdk.std.core.geo, ne: $sdk.std.core.geo, }, $g: $sdk.GreyCat = globalThis.greycat.default): GeoBox {
      return new GeoBox($g.abi.libs_by_name.get(stdlib.name)!.mapped[27], sw, ne);
    }
    static create(sw: $sdk.std.core.geo, ne: $sdk.std.core.geo, $g: $sdk.GreyCat = globalThis.greycat.default): GeoBox {
      return new GeoBox($g.abi.libs_by_name.get(stdlib.name)!.mapped[27], sw, ne);
    }
  }

  export class Tuple<T extends $sdk.Value = any, U extends $sdk.Value = any> extends $sdk.GCObject {
    static readonly _type = 'core::Tuple';

    x: T;
    y: U;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        x: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        y: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
      });
    }

    static createFrom({x, y, }: {x: any, y: any, }, $g: $sdk.GreyCat = globalThis.greycat.default): Tuple {
      return new Tuple($g.abi.libs_by_name.get(stdlib.name)!.mapped[28], x, y);
    }
    static create(x: any, y: any, $g: $sdk.GreyCat = globalThis.greycat.default): Tuple {
      return new Tuple($g.abi.libs_by_name.get(stdlib.name)!.mapped[28], x, y);
    }
  }

  export class DatePart extends $sdk.GCEnum {
    static readonly _type = 'core::DatePart';

    constructor(type: $sdk.AbiType, offset: number, public key: DatePart.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static years($g: $sdk.GreyCat = globalThis.greycat.default): DatePart {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[29];
      return t.enum_values![t.generated_offsets[0]];
    }
    static months($g: $sdk.GreyCat = globalThis.greycat.default): DatePart {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[29];
      return t.enum_values![t.generated_offsets[1]];
    }
    static days($g: $sdk.GreyCat = globalThis.greycat.default): DatePart {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[29];
      return t.enum_values![t.generated_offsets[2]];
    }
    static hours($g: $sdk.GreyCat = globalThis.greycat.default): DatePart {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[29];
      return t.enum_values![t.generated_offsets[3]];
    }
    static minutes($g: $sdk.GreyCat = globalThis.greycat.default): DatePart {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[29];
      return t.enum_values![t.generated_offsets[4]];
    }
    static seconds($g: $sdk.GreyCat = globalThis.greycat.default): DatePart {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[29];
      return t.enum_values![t.generated_offsets[5]];
    }
    static microseconds($g: $sdk.GreyCat = globalThis.greycat.default): DatePart {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[29];
      return t.enum_values![t.generated_offsets[6]];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): DatePart[] {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[29];
      return t.enum_values!;
    }
  }

  export namespace DatePart  {
    export type Field = 'years'|'months'|'days'|'hours'|'minutes'|'seconds'|'microseconds';
  }
  export class nodeIndex extends std_n.core.nodeIndex {}

  export class nodeList extends std_n.core.nodeList {}

  export class any extends $sdk.GCObject {
    static readonly _type = 'core::any';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): any {
      return new any($g.abi.libs_by_name.get(stdlib.name)!.mapped[32]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): any {
      return new any($g.abi.libs_by_name.get(stdlib.name)!.mapped[32]);
    }
  }

  export class tf3d extends std_n.core.tf3d {}

  export class nodeIndexBucket extends std_n.core.nodeIndexBucket {}

  export class ti10d extends std_n.core.ti10d {}

  export class Array<T extends $sdk.Value = any> extends std_n.core.Array<T> {}

  export class tf4d extends std_n.core.tf4d {}

  export class ti3d extends std_n.core.ti3d {}

}

export namespace util {
  export class TimeWindow extends std_n.util.TimeWindow {}

  export class Random extends $sdk.GCObject {
    static readonly _type = 'util::Random';

    seed: bigint | number;
    v: number;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        seed: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        v: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
      });
    }

    static createFrom({seed, v, }: {seed: bigint | number, v: number, }, $g: $sdk.GreyCat = globalThis.greycat.default): Random {
      return new Random($g.abi.libs_by_name.get(stdlib.name)!.mapped[40], seed, v);
    }
    static create(seed: bigint | number, v: number, $g: $sdk.GreyCat = globalThis.greycat.default): Random {
      return new Random($g.abi.libs_by_name.get(stdlib.name)!.mapped[40], seed, v);
    }
  }

  export class HistogramInt extends std_n.util.HistogramInt {}

  export class Queue<T extends $sdk.Value = any> extends std_n.util.Queue<T> {}

  export class HistogramFloat extends std_n.util.HistogramFloat {}

  export class BoxPlotInt extends $sdk.GCObject {
    static readonly _type = 'util::BoxPlotInt';

    min: bigint | number;
    max: bigint | number;
    whiskerLow: bigint | number;
    whiskerHigh: bigint | number;
    percentile1: bigint | number;
    percentile5: bigint | number;
    percentile25: bigint | number;
    percentile50: bigint | number;
    percentile75: bigint | number;
    percentile95: bigint | number;
    percentile99: bigint | number;
    countOutliersLow: bigint | number;
    countOutliersHigh: bigint | number;
    percentageOutliersLow: number;
    percentageOutliersHigh: number;
    sum: number;
    avg: number;
    std: number;
    size: bigint | number;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        min: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        max: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        whiskerLow: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        whiskerHigh: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        percentile1: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[4]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[4]] = v;
          },
        },
        percentile5: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[5]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[5]] = v;
          },
        },
        percentile25: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[6]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[6]] = v;
          },
        },
        percentile50: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[7]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[7]] = v;
          },
        },
        percentile75: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[8]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[8]] = v;
          },
        },
        percentile95: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[9]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[9]] = v;
          },
        },
        percentile99: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[10]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[10]] = v;
          },
        },
        countOutliersLow: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[11]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[11]] = v;
          },
        },
        countOutliersHigh: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[12]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[12]] = v;
          },
        },
        percentageOutliersLow: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[13]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[13]] = v;
          },
        },
        percentageOutliersHigh: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[14]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[14]] = v;
          },
        },
        sum: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[15]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[15]] = v;
          },
        },
        avg: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[16]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[16]] = v;
          },
        },
        std: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[17]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[17]] = v;
          },
        },
        size: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[18]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[18]] = v;
          },
        },
      });
    }

    static createFrom({min, max, whiskerLow, whiskerHigh, percentile1, percentile5, percentile25, percentile50, percentile75, percentile95, percentile99, countOutliersLow, countOutliersHigh, percentageOutliersLow, percentageOutliersHigh, sum, avg, std, size, }: {min: bigint | number, max: bigint | number, whiskerLow: bigint | number, whiskerHigh: bigint | number, percentile1: bigint | number, percentile5: bigint | number, percentile25: bigint | number, percentile50: bigint | number, percentile75: bigint | number, percentile95: bigint | number, percentile99: bigint | number, countOutliersLow: bigint | number, countOutliersHigh: bigint | number, percentageOutliersLow: number, percentageOutliersHigh: number, sum: number, avg: number, std: number, size: bigint | number, }, $g: $sdk.GreyCat = globalThis.greycat.default): BoxPlotInt {
      return new BoxPlotInt($g.abi.libs_by_name.get(stdlib.name)!.mapped[44], min, max, whiskerLow, whiskerHigh, percentile1, percentile5, percentile25, percentile50, percentile75, percentile95, percentile99, countOutliersLow, countOutliersHigh, percentageOutliersLow, percentageOutliersHigh, sum, avg, std, size);
    }
    static create(min: bigint | number, max: bigint | number, whiskerLow: bigint | number, whiskerHigh: bigint | number, percentile1: bigint | number, percentile5: bigint | number, percentile25: bigint | number, percentile50: bigint | number, percentile75: bigint | number, percentile95: bigint | number, percentile99: bigint | number, countOutliersLow: bigint | number, countOutliersHigh: bigint | number, percentageOutliersLow: number, percentageOutliersHigh: number, sum: number, avg: number, std: number, size: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default): BoxPlotInt {
      return new BoxPlotInt($g.abi.libs_by_name.get(stdlib.name)!.mapped[44], min, max, whiskerLow, whiskerHigh, percentile1, percentile5, percentile25, percentile50, percentile75, percentile95, percentile99, countOutliersLow, countOutliersHigh, percentageOutliersLow, percentageOutliersHigh, sum, avg, std, size);
    }
  }

  export class Buffer extends std_n.util.Buffer {}

  export class Iban extends std_n.util.Iban {}

  export class Crypto extends $sdk.GCObject {
    static readonly _type = 'util::Crypto';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): Crypto {
      return new Crypto($g.abi.libs_by_name.get(stdlib.name)!.mapped[47]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): Crypto {
      return new Crypto($g.abi.libs_by_name.get(stdlib.name)!.mapped[47]);
    }
  }

  export class Gaussian extends $sdk.GCObject {
    static readonly _type = 'util::Gaussian';

    sum: number | null;
    sum_sq: number | null;
    count: bigint | number | null;
    min: number | null;
    max: number | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        sum: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        sum_sq: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        count: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        min: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        max: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[4]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[4]] = v;
          },
        },
      });
    }

    static createFrom({sum, sum_sq, count, min, max, }: {sum: number | null, sum_sq: number | null, count: bigint | number | null, min: number | null, max: number | null, }, $g: $sdk.GreyCat = globalThis.greycat.default): Gaussian {
      return new Gaussian($g.abi.libs_by_name.get(stdlib.name)!.mapped[48], sum, sum_sq, count, min, max);
    }
    static create(sum: number | null, sum_sq: number | null, count: bigint | number | null, min: number | null, max: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): Gaussian {
      return new Gaussian($g.abi.libs_by_name.get(stdlib.name)!.mapped[48], sum, sum_sq, count, min, max);
    }
  }

  export class Quantizer extends std_n.util.Quantizer {}

  export class BoxPlotFloat extends $sdk.GCObject {
    static readonly _type = 'util::BoxPlotFloat';

    min: number;
    max: number;
    whiskerLow: number;
    whiskerHigh: number;
    percentile1: number;
    percentile5: number;
    percentile25: number;
    percentile50: number;
    percentile75: number;
    percentile95: number;
    percentile99: number;
    countOutliersLow: bigint | number;
    countOutliersHigh: bigint | number;
    percentageOutliersLow: number;
    percentageOutliersHigh: number;
    sum: number;
    avg: number;
    std: number;
    size: bigint | number;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        min: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        max: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        whiskerLow: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        whiskerHigh: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        percentile1: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[4]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[4]] = v;
          },
        },
        percentile5: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[5]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[5]] = v;
          },
        },
        percentile25: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[6]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[6]] = v;
          },
        },
        percentile50: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[7]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[7]] = v;
          },
        },
        percentile75: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[8]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[8]] = v;
          },
        },
        percentile95: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[9]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[9]] = v;
          },
        },
        percentile99: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[10]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[10]] = v;
          },
        },
        countOutliersLow: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[11]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[11]] = v;
          },
        },
        countOutliersHigh: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[12]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[12]] = v;
          },
        },
        percentageOutliersLow: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[13]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[13]] = v;
          },
        },
        percentageOutliersHigh: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[14]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[14]] = v;
          },
        },
        sum: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[15]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[15]] = v;
          },
        },
        avg: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[16]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[16]] = v;
          },
        },
        std: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[17]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[17]] = v;
          },
        },
        size: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[18]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[18]] = v;
          },
        },
      });
    }

    static createFrom({min, max, whiskerLow, whiskerHigh, percentile1, percentile5, percentile25, percentile50, percentile75, percentile95, percentile99, countOutliersLow, countOutliersHigh, percentageOutliersLow, percentageOutliersHigh, sum, avg, std, size, }: {min: number, max: number, whiskerLow: number, whiskerHigh: number, percentile1: number, percentile5: number, percentile25: number, percentile50: number, percentile75: number, percentile95: number, percentile99: number, countOutliersLow: bigint | number, countOutliersHigh: bigint | number, percentageOutliersLow: number, percentageOutliersHigh: number, sum: number, avg: number, std: number, size: bigint | number, }, $g: $sdk.GreyCat = globalThis.greycat.default): BoxPlotFloat {
      return new BoxPlotFloat($g.abi.libs_by_name.get(stdlib.name)!.mapped[50], min, max, whiskerLow, whiskerHigh, percentile1, percentile5, percentile25, percentile50, percentile75, percentile95, percentile99, countOutliersLow, countOutliersHigh, percentageOutliersLow, percentageOutliersHigh, sum, avg, std, size);
    }
    static create(min: number, max: number, whiskerLow: number, whiskerHigh: number, percentile1: number, percentile5: number, percentile25: number, percentile50: number, percentile75: number, percentile95: number, percentile99: number, countOutliersLow: bigint | number, countOutliersHigh: bigint | number, percentageOutliersLow: number, percentageOutliersHigh: number, sum: number, avg: number, std: number, size: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default): BoxPlotFloat {
      return new BoxPlotFloat($g.abi.libs_by_name.get(stdlib.name)!.mapped[50], min, max, whiskerLow, whiskerHigh, percentile1, percentile5, percentile25, percentile50, percentile75, percentile95, percentile99, countOutliersLow, countOutliersHigh, percentageOutliersLow, percentageOutliersHigh, sum, avg, std, size);
    }
  }

  export class GaussianProfile extends std_n.util.GaussianProfile {}

  export class SlidingWindow extends std_n.util.SlidingWindow {}

  export class ProgressTracker extends $sdk.GCObject {
    static readonly _type = 'util::ProgressTracker';

    start: $sdk.std.core.time;
    total: bigint | number | null;
    counter: bigint | number | null;
    duration: $sdk.std.core.duration | null;
    progress: number | null;
    speed: number | null;
    remaining: $sdk.std.core.duration | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        start: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        total: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        counter: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        duration: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        progress: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[4]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[4]] = v;
          },
        },
        speed: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[5]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[5]] = v;
          },
        },
        remaining: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[6]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[6]] = v;
          },
        },
      });
    }

    static createFrom({start, total, counter, duration, progress, speed, remaining, }: {start: $sdk.std.core.time, total: bigint | number | null, counter: bigint | number | null, duration: $sdk.std.core.duration | null, progress: number | null, speed: number | null, remaining: $sdk.std.core.duration | null, }, $g: $sdk.GreyCat = globalThis.greycat.default): ProgressTracker {
      return new ProgressTracker($g.abi.libs_by_name.get(stdlib.name)!.mapped[53], start, total, counter, duration, progress, speed, remaining);
    }
    static create(start: $sdk.std.core.time, total: bigint | number | null, counter: bigint | number | null, duration: $sdk.std.core.duration | null, progress: number | null, speed: number | null, remaining: $sdk.std.core.duration | null, $g: $sdk.GreyCat = globalThis.greycat.default): ProgressTracker {
      return new ProgressTracker($g.abi.libs_by_name.get(stdlib.name)!.mapped[53], start, total, counter, duration, progress, speed, remaining);
    }
  }

  export class Assert extends $sdk.GCObject {
    static readonly _type = 'util::Assert';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): Assert {
      return new Assert($g.abi.libs_by_name.get(stdlib.name)!.mapped[54]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): Assert {
      return new Assert($g.abi.libs_by_name.get(stdlib.name)!.mapped[54]);
    }
  }

}

export namespace runtime {
  export class SecurityFields extends $sdk.GCObject {
    static readonly _type = 'runtime::SecurityFields';

    email: string | null;
    name: string | null;
    first_name: string | null;
    last_name: string | null;
    roles: globalThis.Map<string, string> | null;
    groups: globalThis.Map<string, string> | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        email: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        name: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        first_name: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        last_name: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        roles: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[4]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[4]] = v;
          },
        },
        groups: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[5]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[5]] = v;
          },
        },
      });
    }

     static set_(f: runtime.SecurityFields, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<unknown> {
      return $g.call('runtime::SecurityFields::set', [f], $signal);
    }
     static get_($g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<runtime.SecurityFields | null> {
      return $g.call('runtime::SecurityFields::get', undefined, $signal);
    }
    static createFrom({email, name, first_name, last_name, roles, groups, }: {email: string | null, name: string | null, first_name: string | null, last_name: string | null, roles: globalThis.Map<string, string> | null, groups: globalThis.Map<string, string> | null, }, $g: $sdk.GreyCat = globalThis.greycat.default): SecurityFields {
      return new SecurityFields($g.abi.libs_by_name.get(stdlib.name)!.mapped[55], email, name, first_name, last_name, roles, groups);
    }
    static create(email: string | null, name: string | null, first_name: string | null, last_name: string | null, roles: globalThis.Map<string, string> | null, groups: globalThis.Map<string, string> | null, $g: $sdk.GreyCat = globalThis.greycat.default): SecurityFields {
      return new SecurityFields($g.abi.libs_by_name.get(stdlib.name)!.mapped[55], email, name, first_name, last_name, roles, groups);
    }
  }

  export class License extends $sdk.GCObject {
    static readonly _type = 'runtime::License';

    name: string | null;
    start: $sdk.std.core.time;
    end: $sdk.std.core.time;
    company: string | null;
    max_workers: bigint | number;
    max_memory: bigint | number;
    extra_1: bigint | number | null;
    extra_2: bigint | number | null;
    extra_3: bigint | number | null;
    extra_4: bigint | number | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        name: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        start: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        end: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        company: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        max_workers: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[4]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[4]] = v;
          },
        },
        max_memory: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[5]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[5]] = v;
          },
        },
        extra_1: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[6]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[6]] = v;
          },
        },
        extra_2: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[7]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[7]] = v;
          },
        },
        extra_3: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[8]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[8]] = v;
          },
        },
        extra_4: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[9]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[9]] = v;
          },
        },
      });
    }

    static createFrom({name, start, end, company, max_workers, max_memory, extra_1, extra_2, extra_3, extra_4, }: {name: string | null, start: $sdk.std.core.time, end: $sdk.std.core.time, company: string | null, max_workers: bigint | number, max_memory: bigint | number, extra_1: bigint | number | null, extra_2: bigint | number | null, extra_3: bigint | number | null, extra_4: bigint | number | null, }, $g: $sdk.GreyCat = globalThis.greycat.default): License {
      return new License($g.abi.libs_by_name.get(stdlib.name)!.mapped[56], name, start, end, company, max_workers, max_memory, extra_1, extra_2, extra_3, extra_4);
    }
    static create(name: string | null, start: $sdk.std.core.time, end: $sdk.std.core.time, company: string | null, max_workers: bigint | number, max_memory: bigint | number, extra_1: bigint | number | null, extra_2: bigint | number | null, extra_3: bigint | number | null, extra_4: bigint | number | null, $g: $sdk.GreyCat = globalThis.greycat.default): License {
      return new License($g.abi.libs_by_name.get(stdlib.name)!.mapped[56], name, start, end, company, max_workers, max_memory, extra_1, extra_2, extra_3, extra_4);
    }
  }

  export class TaskStatus extends $sdk.GCEnum {
    static readonly _type = 'runtime::TaskStatus';

    constructor(type: $sdk.AbiType, offset: number, public key: TaskStatus.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static empty($g: $sdk.GreyCat = globalThis.greycat.default): TaskStatus {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[57];
      return t.enum_values![t.generated_offsets[0]];
    }
    static waiting($g: $sdk.GreyCat = globalThis.greycat.default): TaskStatus {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[57];
      return t.enum_values![t.generated_offsets[1]];
    }
    static running($g: $sdk.GreyCat = globalThis.greycat.default): TaskStatus {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[57];
      return t.enum_values![t.generated_offsets[2]];
    }
    static cancelled($g: $sdk.GreyCat = globalThis.greycat.default): TaskStatus {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[57];
      return t.enum_values![t.generated_offsets[3]];
    }
    static error($g: $sdk.GreyCat = globalThis.greycat.default): TaskStatus {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[57];
      return t.enum_values![t.generated_offsets[4]];
    }
    static ended($g: $sdk.GreyCat = globalThis.greycat.default): TaskStatus {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[57];
      return t.enum_values![t.generated_offsets[5]];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): TaskStatus[] {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[57];
      return t.enum_values!;
    }
  }

  export namespace TaskStatus  {
    export type Field = 'empty'|'waiting'|'running'|'cancelled'|'error'|'ended';
  }
  export class UserRole extends $sdk.GCObject {
    static readonly _type = 'runtime::UserRole';

    name: string;
    permissions: globalThis.Array<string>;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        name: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        permissions: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
      });
    }

     static all($g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<globalThis.Array<runtime.UserRole>> {
      return $g.call('runtime::UserRole::all', undefined, $signal);
    }
     static remove(name: string, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<unknown> {
      return $g.call('runtime::UserRole::remove', [name], $signal);
    }
     static set_(value: runtime.UserRole, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<unknown> {
      return $g.call('runtime::UserRole::set', [value], $signal);
    }
    static createFrom({name, permissions, }: {name: string, permissions: globalThis.Array<string>, }, $g: $sdk.GreyCat = globalThis.greycat.default): UserRole {
      return new UserRole($g.abi.libs_by_name.get(stdlib.name)!.mapped[58], name, permissions);
    }
    static create(name: string, permissions: globalThis.Array<string>, $g: $sdk.GreyCat = globalThis.greycat.default): UserRole {
      return new UserRole($g.abi.libs_by_name.get(stdlib.name)!.mapped[58], name, permissions);
    }
  }

  export class UserGroupPolicyType extends $sdk.GCEnum {
    static readonly _type = 'runtime::UserGroupPolicyType';

    constructor(type: $sdk.AbiType, offset: number, public key: UserGroupPolicyType.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static read($g: $sdk.GreyCat = globalThis.greycat.default): UserGroupPolicyType {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[59];
      return t.enum_values![t.generated_offsets[0]];
    }
    static write($g: $sdk.GreyCat = globalThis.greycat.default): UserGroupPolicyType {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[59];
      return t.enum_values![t.generated_offsets[1]];
    }
    static execute($g: $sdk.GreyCat = globalThis.greycat.default): UserGroupPolicyType {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[59];
      return t.enum_values![t.generated_offsets[2]];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): UserGroupPolicyType[] {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[59];
      return t.enum_values!;
    }
  }

  export namespace UserGroupPolicyType  {
    export type Field = 'read'|'write'|'execute';
  }
  export class SecurityPolicy extends $sdk.GCObject {
    static readonly _type = 'runtime::SecurityPolicy';

    entities: globalThis.Array<runtime.SecurityEntity>;
    credentials: globalThis.Map<string, runtime.UserCredential>;
    roles: globalThis.Map<string, runtime.UserRole>;
    fields: runtime.SecurityFields | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        entities: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        credentials: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        roles: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        fields: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
      });
    }

     static permissions($g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<globalThis.Array<string>> {
      return $g.call('runtime::SecurityPolicy::permissions', undefined, $signal);
    }
    static createFrom({entities, credentials, roles, fields, }: {entities: globalThis.Array<runtime.SecurityEntity>, credentials: globalThis.Map<string, runtime.UserCredential>, roles: globalThis.Map<string, runtime.UserRole>, fields: runtime.SecurityFields | null, }, $g: $sdk.GreyCat = globalThis.greycat.default): SecurityPolicy {
      return new SecurityPolicy($g.abi.libs_by_name.get(stdlib.name)!.mapped[60], entities, credentials, roles, fields);
    }
    static create(entities: globalThis.Array<runtime.SecurityEntity>, credentials: globalThis.Map<string, runtime.UserCredential>, roles: globalThis.Map<string, runtime.UserRole>, fields: runtime.SecurityFields | null, $g: $sdk.GreyCat = globalThis.greycat.default): SecurityPolicy {
      return new SecurityPolicy($g.abi.libs_by_name.get(stdlib.name)!.mapped[60], entities, credentials, roles, fields);
    }
  }

  export class UserGroupPolicy extends $sdk.GCObject {
    static readonly _type = 'runtime::UserGroupPolicy';

    group_id: bigint | number;
    type: runtime.UserGroupPolicyType;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        group_id: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        type: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
      });
    }

    static createFrom({group_id, type, }: {group_id: bigint | number, type: runtime.UserGroupPolicyType, }, $g: $sdk.GreyCat = globalThis.greycat.default): UserGroupPolicy {
      return new UserGroupPolicy($g.abi.libs_by_name.get(stdlib.name)!.mapped[61], group_id, type);
    }
    static create(group_id: bigint | number, type: runtime.UserGroupPolicyType, $g: $sdk.GreyCat = globalThis.greycat.default): UserGroupPolicy {
      return new UserGroupPolicy($g.abi.libs_by_name.get(stdlib.name)!.mapped[61], group_id, type);
    }
  }

  export class StoreStat extends $sdk.GCObject {
    static readonly _type = 'runtime::StoreStat';

    capacity_bytes: bigint | number;
    allocated_bytes: bigint | number;
    allocated_ratio: number;
    remained_bytes: bigint | number;
    remained_ratio: number;
    used_bytes: bigint | number;
    used_ratio: number;
    available_bytes: bigint | number;
    available_ratio: number;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        capacity_bytes: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        allocated_bytes: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        allocated_ratio: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        remained_bytes: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        remained_ratio: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[4]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[4]] = v;
          },
        },
        used_bytes: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[5]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[5]] = v;
          },
        },
        used_ratio: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[6]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[6]] = v;
          },
        },
        available_bytes: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[7]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[7]] = v;
          },
        },
        available_ratio: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[8]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[8]] = v;
          },
        },
      });
    }

    static createFrom({capacity_bytes, allocated_bytes, allocated_ratio, remained_bytes, remained_ratio, used_bytes, used_ratio, available_bytes, available_ratio, }: {capacity_bytes: bigint | number, allocated_bytes: bigint | number, allocated_ratio: number, remained_bytes: bigint | number, remained_ratio: number, used_bytes: bigint | number, used_ratio: number, available_bytes: bigint | number, available_ratio: number, }, $g: $sdk.GreyCat = globalThis.greycat.default): StoreStat {
      return new StoreStat($g.abi.libs_by_name.get(stdlib.name)!.mapped[62], capacity_bytes, allocated_bytes, allocated_ratio, remained_bytes, remained_ratio, used_bytes, used_ratio, available_bytes, available_ratio);
    }
    static create(capacity_bytes: bigint | number, allocated_bytes: bigint | number, allocated_ratio: number, remained_bytes: bigint | number, remained_ratio: number, used_bytes: bigint | number, used_ratio: number, available_bytes: bigint | number, available_ratio: number, $g: $sdk.GreyCat = globalThis.greycat.default): StoreStat {
      return new StoreStat($g.abi.libs_by_name.get(stdlib.name)!.mapped[62], capacity_bytes, allocated_bytes, allocated_ratio, remained_bytes, remained_ratio, used_bytes, used_ratio, available_bytes, available_ratio);
    }
  }

  export class UserCredential extends $sdk.GCObject {
    static readonly _type = 'runtime::UserCredential';

    offset: bigint | number;
    pass: string | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        offset: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        pass: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
      });
    }

    static createFrom({offset, pass, }: {offset: bigint | number, pass: string | null, }, $g: $sdk.GreyCat = globalThis.greycat.default): UserCredential {
      return new UserCredential($g.abi.libs_by_name.get(stdlib.name)!.mapped[63], offset, pass);
    }
    static create(offset: bigint | number, pass: string | null, $g: $sdk.GreyCat = globalThis.greycat.default): UserCredential {
      return new UserCredential($g.abi.libs_by_name.get(stdlib.name)!.mapped[63], offset, pass);
    }
  }

  export class OpenIDConnect extends $sdk.GCObject {
    static readonly _type = 'runtime::OpenIDConnect';

    url: string;
    clientId: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        url: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        clientId: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
      });
    }

     static config($g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<runtime.OpenIDConnect | null> {
      return $g.call('runtime::OpenIDConnect::config', undefined, $signal);
    }
    static createFrom({url, clientId, }: {url: string, clientId: string, }, $g: $sdk.GreyCat = globalThis.greycat.default): OpenIDConnect {
      return new OpenIDConnect($g.abi.libs_by_name.get(stdlib.name)!.mapped[64], url, clientId);
    }
    static create(url: string, clientId: string, $g: $sdk.GreyCat = globalThis.greycat.default): OpenIDConnect {
      return new OpenIDConnect($g.abi.libs_by_name.get(stdlib.name)!.mapped[64], url, clientId);
    }
  }

  export class RuntimeInfo extends $sdk.GCObject {
    static readonly _type = 'runtime::RuntimeInfo';

    version: string;
    arch: string;
    timezone: core.TimeZone;
    license: runtime.License;
    io_threads: bigint | number;
    bg_threads: bigint | number;
    fg_threads: bigint | number;
    mem_total: bigint | number;
    mem_worker: bigint | number;
    nb_ctx: bigint | number;
    store_stats: runtime.StoreStat | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        version: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        arch: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        timezone: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        license: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        io_threads: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[4]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[4]] = v;
          },
        },
        bg_threads: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[5]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[5]] = v;
          },
        },
        fg_threads: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[6]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[6]] = v;
          },
        },
        mem_total: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[7]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[7]] = v;
          },
        },
        mem_worker: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[8]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[8]] = v;
          },
        },
        nb_ctx: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[9]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[9]] = v;
          },
        },
        store_stats: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[10]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[10]] = v;
          },
        },
      });
    }

    static createFrom({version, arch, timezone, license, io_threads, bg_threads, fg_threads, mem_total, mem_worker, nb_ctx, store_stats, }: {version: string, arch: string, timezone: core.TimeZone, license: runtime.License, io_threads: bigint | number, bg_threads: bigint | number, fg_threads: bigint | number, mem_total: bigint | number, mem_worker: bigint | number, nb_ctx: bigint | number, store_stats: runtime.StoreStat | null, }, $g: $sdk.GreyCat = globalThis.greycat.default): RuntimeInfo {
      return new RuntimeInfo($g.abi.libs_by_name.get(stdlib.name)!.mapped[65], version, arch, timezone, license, io_threads, bg_threads, fg_threads, mem_total, mem_worker, nb_ctx, store_stats);
    }
    static create(version: string, arch: string, timezone: core.TimeZone, license: runtime.License, io_threads: bigint | number, bg_threads: bigint | number, fg_threads: bigint | number, mem_total: bigint | number, mem_worker: bigint | number, nb_ctx: bigint | number, store_stats: runtime.StoreStat | null, $g: $sdk.GreyCat = globalThis.greycat.default): RuntimeInfo {
      return new RuntimeInfo($g.abi.libs_by_name.get(stdlib.name)!.mapped[65], version, arch, timezone, license, io_threads, bg_threads, fg_threads, mem_total, mem_worker, nb_ctx, store_stats);
    }
  }

  export class PeriodicTask extends $sdk.GCObject {
    static readonly _type = 'runtime::PeriodicTask';

    name: string;
    user_id: bigint | number;
    args: string | null;
    start: $sdk.std.core.time;
    every: $sdk.std.core.duration;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        name: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        user_id: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        args: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        start: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        every: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[4]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[4]] = v;
          },
        },
      });
    }

     static all($g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<globalThis.Array<runtime.PeriodicTask>> {
      return $g.call('runtime::PeriodicTask::all', undefined, $signal);
    }
     static set_(tasks: globalThis.Array<runtime.PeriodicTask>, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<unknown> {
      return $g.call('runtime::PeriodicTask::set', [tasks], $signal);
    }
    static createFrom({name, user_id, args, start, every, }: {name: string, user_id: bigint | number, args: string | null, start: $sdk.std.core.time, every: $sdk.std.core.duration, }, $g: $sdk.GreyCat = globalThis.greycat.default): PeriodicTask {
      return new PeriodicTask($g.abi.libs_by_name.get(stdlib.name)!.mapped[66], name, user_id, args, start, every);
    }
    static create(name: string, user_id: bigint | number, args: string | null, start: $sdk.std.core.time, every: $sdk.std.core.duration, $g: $sdk.GreyCat = globalThis.greycat.default): PeriodicTask {
      return new PeriodicTask($g.abi.libs_by_name.get(stdlib.name)!.mapped[66], name, user_id, args, start, every);
    }
  }

  export class System extends $sdk.GCObject {
    static readonly _type = 'runtime::System';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): System {
      return new System($g.abi.libs_by_name.get(stdlib.name)!.mapped[67]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): System {
      return new System($g.abi.libs_by_name.get(stdlib.name)!.mapped[67]);
    }
  }

  export class TaskInfo extends $sdk.GCObject {
    static readonly _type = 'runtime::TaskInfo';

    user_id: bigint | number;
    task_id: bigint | number;
    mod: string | null;
    type: string | null;
    fun: string | null;
    creation: $sdk.std.core.time;
    status: runtime.TaskStatus;
    start: $sdk.std.core.time | null;
    progress: number | null;
    remaining: $sdk.std.core.duration | null;
    duration: $sdk.std.core.duration | null;
    sub_waiting: bigint | number | null;
    sub_tasks_all: bigint | number | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        user_id: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        task_id: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        mod: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        type: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        fun: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[4]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[4]] = v;
          },
        },
        creation: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[5]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[5]] = v;
          },
        },
        status: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[6]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[6]] = v;
          },
        },
        start: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[7]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[7]] = v;
          },
        },
        progress: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[8]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[8]] = v;
          },
        },
        remaining: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[9]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[9]] = v;
          },
        },
        duration: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[10]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[10]] = v;
          },
        },
        sub_waiting: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[11]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[11]] = v;
          },
        },
        sub_tasks_all: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[12]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[12]] = v;
          },
        },
      });
    }

    static createFrom({user_id, task_id, mod, type, fun, creation, status, start, progress, remaining, duration, sub_waiting, sub_tasks_all, }: {user_id: bigint | number, task_id: bigint | number, mod: string | null, type: string | null, fun: string | null, creation: $sdk.std.core.time, status: runtime.TaskStatus, start: $sdk.std.core.time | null, progress: number | null, remaining: $sdk.std.core.duration | null, duration: $sdk.std.core.duration | null, sub_waiting: bigint | number | null, sub_tasks_all: bigint | number | null, }, $g: $sdk.GreyCat = globalThis.greycat.default): TaskInfo {
      return new TaskInfo($g.abi.libs_by_name.get(stdlib.name)!.mapped[68], user_id, task_id, mod, type, fun, creation, status, start, progress, remaining, duration, sub_waiting, sub_tasks_all);
    }
    static create(user_id: bigint | number, task_id: bigint | number, mod: string | null, type: string | null, fun: string | null, creation: $sdk.std.core.time, status: runtime.TaskStatus, start: $sdk.std.core.time | null, progress: number | null, remaining: $sdk.std.core.duration | null, duration: $sdk.std.core.duration | null, sub_waiting: bigint | number | null, sub_tasks_all: bigint | number | null, $g: $sdk.GreyCat = globalThis.greycat.default): TaskInfo {
      return new TaskInfo($g.abi.libs_by_name.get(stdlib.name)!.mapped[68], user_id, task_id, mod, type, fun, creation, status, start, progress, remaining, duration, sub_waiting, sub_tasks_all);
    }
  }

  export class SecurityEntity extends $sdk.GCObject {
    static readonly _type = 'runtime::SecurityEntity';

    id: bigint | number;
    name: string;
    activated: boolean;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        id: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        name: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        activated: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
      });
    }

     static all($g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<globalThis.Array<runtime.SecurityEntity>> {
      return $g.call('runtime::SecurityEntity::all', undefined, $signal);
    }
     static set_(entity: runtime.SecurityEntity, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<bigint | number | null> {
      return $g.call('runtime::SecurityEntity::set', [entity], $signal);
    }
    static createFrom({id, name, activated, }: {id: bigint | number, name: string, activated: boolean, }, $g: $sdk.GreyCat = globalThis.greycat.default): SecurityEntity {
      return new SecurityEntity($g.abi.libs_by_name.get(stdlib.name)!.mapped[69], id, name, activated);
    }
    static create(id: bigint | number, name: string, activated: boolean, $g: $sdk.GreyCat = globalThis.greycat.default): SecurityEntity {
      return new SecurityEntity($g.abi.libs_by_name.get(stdlib.name)!.mapped[69], id, name, activated);
    }
  }

  export class User extends $sdk.GCObject {
    static readonly _type = 'runtime::User';

    id: bigint | number;
    name: string;
    activated: boolean;
    full_name: string | null;
    email: string | null;
    role: string | null;
    permissions_flags: bigint | number | null;
    groups: globalThis.Array<runtime.UserGroupPolicy> | null;
    groups_flags: bigint | number | null;
    external: boolean;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        id: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        name: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        activated: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        full_name: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        email: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[4]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[4]] = v;
          },
        },
        role: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[5]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[5]] = v;
          },
        },
        permissions_flags: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[6]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[6]] = v;
          },
        },
        groups: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[7]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[7]] = v;
          },
        },
        groups_flags: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[8]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[8]] = v;
          },
        },
        external: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[9]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[9]] = v;
          },
        },
      });
    }

     static all($g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<globalThis.Array<runtime.SecurityEntity>> {
      return $g.call('runtime::SecurityEntity::all', undefined, $signal);
    }
     static set_(entity: runtime.SecurityEntity, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<bigint | number | null> {
      return $g.call('runtime::SecurityEntity::set', [entity], $signal);
    }
     static login(credentials: string, use_cookie: boolean, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<string> {
      return $g.call('runtime::User::login', [credentials, use_cookie], $signal);
    }
     static tokenLogin(token: string, use_cookie: boolean, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<string> {
      return $g.call('runtime::User::tokenLogin', [token, use_cookie], $signal);
    }
     static renew(use_cookie: boolean, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<string> {
      return $g.call('runtime::User::renew', [use_cookie], $signal);
    }
     static logout($g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<unknown> {
      return $g.call('runtime::User::logout', undefined, $signal);
    }
     static current($g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<bigint | number> {
      return $g.call('runtime::User::current', undefined, $signal);
    }
     static me($g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<runtime.User> {
      return $g.call('runtime::User::me', undefined, $signal);
    }
     static permissions($g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<globalThis.Array<string>> {
      return $g.call('runtime::User::permissions', undefined, $signal);
    }
     static setPassword(name: string, pass: string, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<boolean> {
      return $g.call('runtime::User::setPassword', [name, pass], $signal);
    }
     static getToken(id: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<string> {
      return $g.call('runtime::User::getToken', [id], $signal);
    }
    static createFrom({id, name, activated, full_name, email, role, permissions_flags, groups, groups_flags, external, }: {id: bigint | number, name: string, activated: boolean, full_name: string | null, email: string | null, role: string | null, permissions_flags: bigint | number | null, groups: globalThis.Array<runtime.UserGroupPolicy> | null, groups_flags: bigint | number | null, external: boolean, }, $g: $sdk.GreyCat = globalThis.greycat.default): User {
      return new User($g.abi.libs_by_name.get(stdlib.name)!.mapped[70], id, name, activated, full_name, email, role, permissions_flags, groups, groups_flags, external);
    }
    static create(id: bigint | number, name: string, activated: boolean, full_name: string | null, email: string | null, role: string | null, permissions_flags: bigint | number | null, groups: globalThis.Array<runtime.UserGroupPolicy> | null, groups_flags: bigint | number | null, external: boolean, $g: $sdk.GreyCat = globalThis.greycat.default): User {
      return new User($g.abi.libs_by_name.get(stdlib.name)!.mapped[70], id, name, activated, full_name, email, role, permissions_flags, groups, groups_flags, external);
    }
  }

  export class Task extends $sdk.GCObject {
    static readonly _type = 'runtime::Task';

    user_id: bigint | number;
    task_id: bigint | number;
    mod: string | null;
    type: string | null;
    fun: string | null;
    creation: $sdk.std.core.time;
    status: runtime.TaskStatus;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        user_id: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        task_id: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        mod: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        type: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        fun: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[4]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[4]] = v;
          },
        },
        creation: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[5]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[5]] = v;
          },
        },
        status: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[6]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[6]] = v;
          },
        },
      });
    }

     static running($g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<globalThis.Array<runtime.TaskInfo>> {
      return $g.call('runtime::Task::running', undefined, $signal);
    }
     static history(offset: bigint | number, max: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<globalThis.Array<runtime.Task>> {
      return $g.call('runtime::Task::history', [offset, max], $signal);
    }
     static cancel(task_id: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<boolean> {
      return $g.call('runtime::Task::cancel', [task_id], $signal);
    }
     static info(user_id: bigint | number, task_id: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<runtime.TaskInfo | null> {
      return $g.call('runtime::Task::info', [user_id, task_id], $signal);
    }
    static createFrom({user_id, task_id, mod, type, fun, creation, status, }: {user_id: bigint | number, task_id: bigint | number, mod: string | null, type: string | null, fun: string | null, creation: $sdk.std.core.time, status: runtime.TaskStatus, }, $g: $sdk.GreyCat = globalThis.greycat.default): Task {
      return new Task($g.abi.libs_by_name.get(stdlib.name)!.mapped[71], user_id, task_id, mod, type, fun, creation, status);
    }
    static create(user_id: bigint | number, task_id: bigint | number, mod: string | null, type: string | null, fun: string | null, creation: $sdk.std.core.time, status: runtime.TaskStatus, $g: $sdk.GreyCat = globalThis.greycat.default): Task {
      return new Task($g.abi.libs_by_name.get(stdlib.name)!.mapped[71], user_id, task_id, mod, type, fun, creation, status);
    }
  }

  export class UserGroup extends $sdk.GCObject {
    static readonly _type = 'runtime::UserGroup';

    id: bigint | number;
    name: string;
    activated: boolean;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        id: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        name: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        activated: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
      });
    }

     static all($g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<globalThis.Array<runtime.SecurityEntity>> {
      return $g.call('runtime::SecurityEntity::all', undefined, $signal);
    }
     static set_(entity: runtime.SecurityEntity, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<bigint | number | null> {
      return $g.call('runtime::SecurityEntity::set', [entity], $signal);
    }
    static createFrom({id, name, activated, }: {id: bigint | number, name: string, activated: boolean, }, $g: $sdk.GreyCat = globalThis.greycat.default): UserGroup {
      return new UserGroup($g.abi.libs_by_name.get(stdlib.name)!.mapped[72], id, name, activated);
    }
    static create(id: bigint | number, name: string, activated: boolean, $g: $sdk.GreyCat = globalThis.greycat.default): UserGroup {
      return new UserGroup($g.abi.libs_by_name.get(stdlib.name)!.mapped[72], id, name, activated);
    }
  }

  export class Runtime extends $sdk.GCObject {
    static readonly _type = 'runtime::Runtime';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

     static info($g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<runtime.RuntimeInfo> {
      return $g.call('runtime::Runtime::info', undefined, $signal);
    }
     static abi($g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<unknown> {
      return $g.call('runtime::Runtime::abi', undefined, $signal);
    }
    readModVar(module: string, name: string, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<any | null> {
      return $g.call('runtime::Runtime::readModVar', [module, name], $signal);
    }
    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): Runtime {
      return new Runtime($g.abi.libs_by_name.get(stdlib.name)!.mapped[73]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): Runtime {
      return new Runtime($g.abi.libs_by_name.get(stdlib.name)!.mapped[73]);
    }
  }

}

export namespace math {
  export class MathConstants extends $sdk.GCObject {
    static readonly _type = 'math::MathConstants';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

    static e($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[74];
      return  t.static_values[0] as number;
    }
    static log_2e($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[74];
      return  t.static_values[1] as number;
    }
    static log_10e($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[74];
      return  t.static_values[2] as number;
    }
    static ln2($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[74];
      return  t.static_values[3] as number;
    }
    static ln10($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[74];
      return  t.static_values[4] as number;
    }
    static pi($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[74];
      return  t.static_values[5] as number;
    }
    static pi_2($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[74];
      return  t.static_values[6] as number;
    }
    static pi_4($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[74];
      return  t.static_values[7] as number;
    }
    static m1_pi($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[74];
      return  t.static_values[8] as number;
    }
    static m2_pi($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[74];
      return  t.static_values[9] as number;
    }
    static m2_sqrt_pi($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[74];
      return  t.static_values[10] as number;
    }
    static sqrt2($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[74];
      return  t.static_values[11] as number;
    }
    static sqrt1_2($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[74];
      return  t.static_values[12] as number;
    }
    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): MathConstants {
      return new MathConstants($g.abi.libs_by_name.get(stdlib.name)!.mapped[74]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): MathConstants {
      return new MathConstants($g.abi.libs_by_name.get(stdlib.name)!.mapped[74]);
    }
  }

}

export namespace io {
  export class CsvColumn extends $sdk.GCObject {
    static readonly _type = 'io::CsvColumn';

    name: string | null;
    mandatory: boolean | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        name: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        mandatory: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
      });
    }

    static createFrom({name, mandatory, }: {name: string | null, mandatory: boolean | null, }, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumn {
      return new CsvColumn($g.abi.libs_by_name.get(stdlib.name)!.mapped[75], name, mandatory);
    }
    static create(name: string | null, mandatory: boolean | null, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumn {
      return new CsvColumn($g.abi.libs_by_name.get(stdlib.name)!.mapped[75], name, mandatory);
    }
  }

  export class Http extends $sdk.GCObject {
    static readonly _type = 'io::Http';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): Http {
      return new Http($g.abi.libs_by_name.get(stdlib.name)!.mapped[76]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): Http {
      return new Http($g.abi.libs_by_name.get(stdlib.name)!.mapped[76]);
    }
  }

  export class CsvColumnTime extends $sdk.GCObject {
    static readonly _type = 'io::CsvColumnTime';

    name: string | null;
    mandatory: boolean | null;
    unit: core.DurationUnit | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        name: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        mandatory: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        unit: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
      });
    }

    static createFrom({name, mandatory, unit, }: {name: string | null, mandatory: boolean | null, unit: core.DurationUnit | null, }, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumnTime {
      return new CsvColumnTime($g.abi.libs_by_name.get(stdlib.name)!.mapped[77], name, mandatory, unit);
    }
    static create(name: string | null, mandatory: boolean | null, unit: core.DurationUnit | null, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumnTime {
      return new CsvColumnTime($g.abi.libs_by_name.get(stdlib.name)!.mapped[77], name, mandatory, unit);
    }
  }

  export class CsvColumnDuration extends $sdk.GCObject {
    static readonly _type = 'io::CsvColumnDuration';

    name: string | null;
    mandatory: boolean | null;
    unit: core.DurationUnit | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        name: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        mandatory: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        unit: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
      });
    }

    static createFrom({name, mandatory, unit, }: {name: string | null, mandatory: boolean | null, unit: core.DurationUnit | null, }, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumnDuration {
      return new CsvColumnDuration($g.abi.libs_by_name.get(stdlib.name)!.mapped[78], name, mandatory, unit);
    }
    static create(name: string | null, mandatory: boolean | null, unit: core.DurationUnit | null, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumnDuration {
      return new CsvColumnDuration($g.abi.libs_by_name.get(stdlib.name)!.mapped[78], name, mandatory, unit);
    }
  }

  export class SmtpMode extends $sdk.GCEnum {
    static readonly _type = 'io::SmtpMode';

    constructor(type: $sdk.AbiType, offset: number, public key: SmtpMode.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static plain($g: $sdk.GreyCat = globalThis.greycat.default): SmtpMode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[79];
      return t.enum_values![t.generated_offsets[0]];
    }
    static ssl_tls($g: $sdk.GreyCat = globalThis.greycat.default): SmtpMode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[79];
      return t.enum_values![t.generated_offsets[1]];
    }
    static starttls($g: $sdk.GreyCat = globalThis.greycat.default): SmtpMode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[79];
      return t.enum_values![t.generated_offsets[2]];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): SmtpMode[] {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[79];
      return t.enum_values!;
    }
  }

  export namespace SmtpMode  {
    export type Field = 'plain'|'ssl_tls'|'starttls';
  }
  export class CsvColumnBoolean extends $sdk.GCObject {
    static readonly _type = 'io::CsvColumnBoolean';

    name: string | null;
    mandatory: boolean | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        name: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        mandatory: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
      });
    }

    static createFrom({name, mandatory, }: {name: string | null, mandatory: boolean | null, }, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumnBoolean {
      return new CsvColumnBoolean($g.abi.libs_by_name.get(stdlib.name)!.mapped[80], name, mandatory);
    }
    static create(name: string | null, mandatory: boolean | null, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumnBoolean {
      return new CsvColumnBoolean($g.abi.libs_by_name.get(stdlib.name)!.mapped[80], name, mandatory);
    }
  }

  export class CsvColumnInteger extends $sdk.GCObject {
    static readonly _type = 'io::CsvColumnInteger';

    name: string | null;
    mandatory: boolean | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        name: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        mandatory: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
      });
    }

    static createFrom({name, mandatory, }: {name: string | null, mandatory: boolean | null, }, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumnInteger {
      return new CsvColumnInteger($g.abi.libs_by_name.get(stdlib.name)!.mapped[81], name, mandatory);
    }
    static create(name: string | null, mandatory: boolean | null, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumnInteger {
      return new CsvColumnInteger($g.abi.libs_by_name.get(stdlib.name)!.mapped[81], name, mandatory);
    }
  }

  export class Url extends $sdk.GCObject {
    static readonly _type = 'io::Url';

    protocol: string | null;
    host: string | null;
    port: bigint | number | null;
    path: string | null;
    params: globalThis.Map<string, string> | null;
    hash: string | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        protocol: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        host: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        port: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        path: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        params: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[4]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[4]] = v;
          },
        },
        hash: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[5]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[5]] = v;
          },
        },
      });
    }

    static createFrom({protocol, host, port, path, params, hash, }: {protocol: string | null, host: string | null, port: bigint | number | null, path: string | null, params: globalThis.Map<string, string> | null, hash: string | null, }, $g: $sdk.GreyCat = globalThis.greycat.default): Url {
      return new Url($g.abi.libs_by_name.get(stdlib.name)!.mapped[82], protocol, host, port, path, params, hash);
    }
    static create(protocol: string | null, host: string | null, port: bigint | number | null, path: string | null, params: globalThis.Map<string, string> | null, hash: string | null, $g: $sdk.GreyCat = globalThis.greycat.default): Url {
      return new Url($g.abi.libs_by_name.get(stdlib.name)!.mapped[82], protocol, host, port, path, params, hash);
    }
  }

  export class CsvColumnFloat extends $sdk.GCObject {
    static readonly _type = 'io::CsvColumnFloat';

    name: string | null;
    mandatory: boolean | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        name: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        mandatory: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
      });
    }

    static createFrom({name, mandatory, }: {name: string | null, mandatory: boolean | null, }, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumnFloat {
      return new CsvColumnFloat($g.abi.libs_by_name.get(stdlib.name)!.mapped[83], name, mandatory);
    }
    static create(name: string | null, mandatory: boolean | null, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumnFloat {
      return new CsvColumnFloat($g.abi.libs_by_name.get(stdlib.name)!.mapped[83], name, mandatory);
    }
  }

  export class SmtpAuth extends $sdk.GCEnum {
    static readonly _type = 'io::SmtpAuth';

    constructor(type: $sdk.AbiType, offset: number, public key: SmtpAuth.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static none($g: $sdk.GreyCat = globalThis.greycat.default): SmtpAuth {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[84];
      return t.enum_values![t.generated_offsets[0]];
    }
    static plain($g: $sdk.GreyCat = globalThis.greycat.default): SmtpAuth {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[84];
      return t.enum_values![t.generated_offsets[1]];
    }
    static login($g: $sdk.GreyCat = globalThis.greycat.default): SmtpAuth {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[84];
      return t.enum_values![t.generated_offsets[2]];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): SmtpAuth[] {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[84];
      return t.enum_values!;
    }
  }

  export namespace SmtpAuth  {
    export type Field = 'none'|'plain'|'login';
  }
  export class CsvFormat extends $sdk.GCObject {
    static readonly _type = 'io::CsvFormat';

    header_lines: bigint | number | null;
    infer: boolean | null;
    separator: string | null;
    string_delimiter: string | null;
    decimal_separator: string | null;
    thousands_separator: string | null;
    columns: globalThis.Array<io.CsvColumn> | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        header_lines: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        infer: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        separator: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        string_delimiter: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        decimal_separator: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[4]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[4]] = v;
          },
        },
        thousands_separator: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[5]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[5]] = v;
          },
        },
        columns: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[6]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[6]] = v;
          },
        },
      });
    }

    static createFrom({header_lines, infer, separator, string_delimiter, decimal_separator, thousands_separator, columns, }: {header_lines: bigint | number | null, infer: boolean | null, separator: string | null, string_delimiter: string | null, decimal_separator: string | null, thousands_separator: string | null, columns: globalThis.Array<io.CsvColumn> | null, }, $g: $sdk.GreyCat = globalThis.greycat.default): CsvFormat {
      return new CsvFormat($g.abi.libs_by_name.get(stdlib.name)!.mapped[85], header_lines, infer, separator, string_delimiter, decimal_separator, thousands_separator, columns);
    }
    static create(header_lines: bigint | number | null, infer: boolean | null, separator: string | null, string_delimiter: string | null, decimal_separator: string | null, thousands_separator: string | null, columns: globalThis.Array<io.CsvColumn> | null, $g: $sdk.GreyCat = globalThis.greycat.default): CsvFormat {
      return new CsvFormat($g.abi.libs_by_name.get(stdlib.name)!.mapped[85], header_lines, infer, separator, string_delimiter, decimal_separator, thousands_separator, columns);
    }
  }

  export class Smtp extends $sdk.GCObject {
    static readonly _type = 'io::Smtp';

    host: string;
    port: bigint | number;
    mode: io.SmtpMode | null;
    authenticate: io.SmtpAuth | null;
    user: string | null;
    pass: string | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        host: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        port: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        mode: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        authenticate: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        user: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[4]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[4]] = v;
          },
        },
        pass: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[5]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[5]] = v;
          },
        },
      });
    }

    static createFrom({host, port, mode, authenticate, user, pass, }: {host: string, port: bigint | number, mode: io.SmtpMode | null, authenticate: io.SmtpAuth | null, user: string | null, pass: string | null, }, $g: $sdk.GreyCat = globalThis.greycat.default): Smtp {
      return new Smtp($g.abi.libs_by_name.get(stdlib.name)!.mapped[86], host, port, mode, authenticate, user, pass);
    }
    static create(host: string, port: bigint | number, mode: io.SmtpMode | null, authenticate: io.SmtpAuth | null, user: string | null, pass: string | null, $g: $sdk.GreyCat = globalThis.greycat.default): Smtp {
      return new Smtp($g.abi.libs_by_name.get(stdlib.name)!.mapped[86], host, port, mode, authenticate, user, pass);
    }
  }

  export class CsvColumnDate extends $sdk.GCObject {
    static readonly _type = 'io::CsvColumnDate';

    name: string | null;
    mandatory: boolean | null;
    format: string | null;
    tz: core.TimeZone | null;
    as_time: boolean | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        name: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        mandatory: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        format: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        tz: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        as_time: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[4]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[4]] = v;
          },
        },
      });
    }

    static createFrom({name, mandatory, format, tz, as_time, }: {name: string | null, mandatory: boolean | null, format: string | null, tz: core.TimeZone | null, as_time: boolean | null, }, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumnDate {
      return new CsvColumnDate($g.abi.libs_by_name.get(stdlib.name)!.mapped[87], name, mandatory, format, tz, as_time);
    }
    static create(name: string | null, mandatory: boolean | null, format: string | null, tz: core.TimeZone | null, as_time: boolean | null, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumnDate {
      return new CsvColumnDate($g.abi.libs_by_name.get(stdlib.name)!.mapped[87], name, mandatory, format, tz, as_time);
    }
  }

  export class CsvColumnIgnored extends $sdk.GCObject {
    static readonly _type = 'io::CsvColumnIgnored';

    name: string | null;
    mandatory: boolean | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        name: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        mandatory: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
      });
    }

    static createFrom({name, mandatory, }: {name: string | null, mandatory: boolean | null, }, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumnIgnored {
      return new CsvColumnIgnored($g.abi.libs_by_name.get(stdlib.name)!.mapped[88], name, mandatory);
    }
    static create(name: string | null, mandatory: boolean | null, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumnIgnored {
      return new CsvColumnIgnored($g.abi.libs_by_name.get(stdlib.name)!.mapped[88], name, mandatory);
    }
  }

  export class CsvColumnString extends $sdk.GCObject {
    static readonly _type = 'io::CsvColumnString';

    name: string | null;
    mandatory: boolean | null;
    trim: boolean | null;
    try_number: boolean | null;
    try_json: boolean | null;
    values: globalThis.Array<string> | null;
    encoder: io.TextEncoder | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        name: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        mandatory: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        trim: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        try_number: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        try_json: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[4]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[4]] = v;
          },
        },
        values: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[5]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[5]] = v;
          },
        },
        encoder: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[6]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[6]] = v;
          },
        },
      });
    }

    static createFrom({name, mandatory, trim, try_number, try_json, values, encoder, }: {name: string | null, mandatory: boolean | null, trim: boolean | null, try_number: boolean | null, try_json: boolean | null, values: globalThis.Array<string> | null, encoder: io.TextEncoder | null, }, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumnString {
      return new CsvColumnString($g.abi.libs_by_name.get(stdlib.name)!.mapped[89], name, mandatory, trim, try_number, try_json, values, encoder);
    }
    static create(name: string | null, mandatory: boolean | null, trim: boolean | null, try_number: boolean | null, try_json: boolean | null, values: globalThis.Array<string> | null, encoder: io.TextEncoder | null, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumnString {
      return new CsvColumnString($g.abi.libs_by_name.get(stdlib.name)!.mapped[89], name, mandatory, trim, try_number, try_json, values, encoder);
    }
  }

  export class File extends $sdk.GCObject {
    static readonly _type = 'io::File';

    path: string;
    size: bigint | number | null;
    last_modification: $sdk.std.core.time | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        path: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        size: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        last_modification: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
      });
    }

    static createFrom({path, size, last_modification, }: {path: string, size: bigint | number | null, last_modification: $sdk.std.core.time | null, }, $g: $sdk.GreyCat = globalThis.greycat.default): File {
      return new File($g.abi.libs_by_name.get(stdlib.name)!.mapped[90], path, size, last_modification);
    }
    static create(path: string, size: bigint | number | null, last_modification: $sdk.std.core.time | null, $g: $sdk.GreyCat = globalThis.greycat.default): File {
      return new File($g.abi.libs_by_name.get(stdlib.name)!.mapped[90], path, size, last_modification);
    }
  }

  export class TextEncoder extends $sdk.GCEnum {
    static readonly _type = 'io::TextEncoder';

    constructor(type: $sdk.AbiType, offset: number, public key: TextEncoder.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static plain($g: $sdk.GreyCat = globalThis.greycat.default): TextEncoder {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[91];
      return t.enum_values![t.generated_offsets[0]];
    }
    static base64($g: $sdk.GreyCat = globalThis.greycat.default): TextEncoder {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[91];
      return t.enum_values![t.generated_offsets[1]];
    }
    static base64url($g: $sdk.GreyCat = globalThis.greycat.default): TextEncoder {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[91];
      return t.enum_values![t.generated_offsets[2]];
    }
    static hexadecimal($g: $sdk.GreyCat = globalThis.greycat.default): TextEncoder {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[91];
      return t.enum_values![t.generated_offsets[3]];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): TextEncoder[] {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[91];
      return t.enum_values!;
    }
  }

  export namespace TextEncoder  {
    export type Field = 'plain'|'base64'|'base64url'|'hexadecimal';
  }
  export class Email extends $sdk.GCObject {
    static readonly _type = 'io::Email';

    from: string;
    subject: string;
    body: string;
    body_is_html: boolean;
    to: globalThis.Array<string>;
    cc: globalThis.Array<string> | null;
    bcc: globalThis.Array<string> | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        from: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        subject: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        body: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        body_is_html: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        to: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[4]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[4]] = v;
          },
        },
        cc: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[5]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[5]] = v;
          },
        },
        bcc: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[6]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[6]] = v;
          },
        },
      });
    }

    static createFrom({from, subject, body, body_is_html, to, cc, bcc, }: {from: string, subject: string, body: string, body_is_html: boolean, to: globalThis.Array<string>, cc: globalThis.Array<string> | null, bcc: globalThis.Array<string> | null, }, $g: $sdk.GreyCat = globalThis.greycat.default): Email {
      return new Email($g.abi.libs_by_name.get(stdlib.name)!.mapped[92], from, subject, body, body_is_html, to, cc, bcc);
    }
    static create(from: string, subject: string, body: string, body_is_html: boolean, to: globalThis.Array<string>, cc: globalThis.Array<string> | null, bcc: globalThis.Array<string> | null, $g: $sdk.GreyCat = globalThis.greycat.default): Email {
      return new Email($g.abi.libs_by_name.get(stdlib.name)!.mapped[92], from, subject, body, body_is_html, to, cc, bcc);
    }
  }

  export class HttpHeader extends $sdk.GCObject {
    static readonly _type = 'io::HttpHeader';

    name: string;
    value: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        name: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        value: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
      });
    }

    static createFrom({name, value, }: {name: string, value: string, }, $g: $sdk.GreyCat = globalThis.greycat.default): HttpHeader {
      return new HttpHeader($g.abi.libs_by_name.get(stdlib.name)!.mapped[93], name, value);
    }
    static create(name: string, value: string, $g: $sdk.GreyCat = globalThis.greycat.default): HttpHeader {
      return new HttpHeader($g.abi.libs_by_name.get(stdlib.name)!.mapped[93], name, value);
    }
  }

}

export const stdlib: $sdk.Library = {
  name: 'std',
  mapped: [],
  configure(loaders, factories) {
    factories.set(core.tf2d._type, core.tf2d);
    loaders.set(core.tf2d._type, std_n.core.tf2d.load);
    factories.set(core.SamplingMode._type, core.SamplingMode);
    factories.set(core.Table._type, core.Table);
    loaders.set(core.Table._type, std_n.core.Table.load);
    factories.set(core.ti6d._type, core.ti6d);
    loaders.set(core.ti6d._type, std_n.core.ti6d.load);
    factories.set(core.nodeTimeSingleton._type, core.nodeTimeSingleton);
    factories.set(core.time._type, core.time);
    loaders.set(core.time._type, std_n.core.time.load);
    factories.set(core.nodeTime._type, core.nodeTime);
    loaders.set(core.nodeTime._type, std_n.core.nodeTime.load);
    factories.set(core.DurationUnit._type, core.DurationUnit);
    factories.set(core.NodeTimeInfo._type, core.NodeTimeInfo);
    factories.set(core.Error._type, core.Error);
    loaders.set(core.Error._type, std_n.core.Error.load);
    factories.set(core.GeoPoly._type, core.GeoPoly);
    factories.set(core.duration._type, core.duration);
    loaders.set(core.duration._type, std_n.core.duration.load);
    factories.set(core.ti2d._type, core.ti2d);
    loaders.set(core.ti2d._type, std_n.core.ti2d.load);
    factories.set(core.ErrorCode._type, core.ErrorCode);
    factories.set(core.geo._type, core.geo);
    loaders.set(core.geo._type, std_n.core.geo.load);
    factories.set(core.node._type, core.node);
    loaders.set(core.node._type, std_n.core.node.load);
    factories.set(core.TableColumnMeta._type, core.TableColumnMeta);
    factories.set(core.Date._type, core.Date);
    loaders.set(core.Date._type, std_n.core.Date.load);
    factories.set(core.Tensor._type, core.Tensor);
    loaders.set(core.Tensor._type, std_n.core.Tensor.load);
    factories.set(core.ti4d._type, core.ti4d);
    loaders.set(core.ti4d._type, std_n.core.ti4d.load);
    factories.set(core.GeoCircle._type, core.GeoCircle);
    factories.set(core.nodeGeo._type, core.nodeGeo);
    loaders.set(core.nodeGeo._type, std_n.core.nodeGeo.load);
    factories.set(core.ti5d._type, core.ti5d);
    loaders.set(core.ti5d._type, std_n.core.ti5d.load);
    factories.set(core.String._type, core.String);
    loaders.set(core.String._type, std_n.core.String.load);
    factories.set(core.Map._type, core.Map);
    loaders.set(core.Map._type, std_n.core.Map.load);
    factories.set(core.TensorType._type, core.TensorType);
    factories.set(core.TimeZone._type, core.TimeZone);
    factories.set(core.GeoBox._type, core.GeoBox);
    factories.set(core.Tuple._type, core.Tuple);
    factories.set(core.DatePart._type, core.DatePart);
    factories.set(core.nodeIndex._type, core.nodeIndex);
    loaders.set(core.nodeIndex._type, std_n.core.nodeIndex.load);
    factories.set(core.nodeList._type, core.nodeList);
    loaders.set(core.nodeList._type, std_n.core.nodeList.load);
    factories.set(core.any._type, core.any);
    factories.set(core.tf3d._type, core.tf3d);
    loaders.set(core.tf3d._type, std_n.core.tf3d.load);
    factories.set(core.nodeIndexBucket._type, core.nodeIndexBucket);
    loaders.set(core.nodeIndexBucket._type, std_n.core.nodeIndexBucket.load);
    factories.set(core.ti10d._type, core.ti10d);
    loaders.set(core.ti10d._type, std_n.core.ti10d.load);
    factories.set(core.Array._type, core.Array);
    loaders.set(core.Array._type, std_n.core.Array.load);
    factories.set(core.tf4d._type, core.tf4d);
    loaders.set(core.tf4d._type, std_n.core.tf4d.load);
    factories.set(core.ti3d._type, core.ti3d);
    loaders.set(core.ti3d._type, std_n.core.ti3d.load);
    factories.set(util.TimeWindow._type, util.TimeWindow);
    loaders.set(util.TimeWindow._type, std_n.util.TimeWindow.load);
    factories.set(util.Random._type, util.Random);
    factories.set(util.HistogramInt._type, util.HistogramInt);
    loaders.set(util.HistogramInt._type, std_n.util.HistogramInt.load);
    factories.set(util.Queue._type, util.Queue);
    loaders.set(util.Queue._type, std_n.util.Queue.load);
    factories.set(util.HistogramFloat._type, util.HistogramFloat);
    loaders.set(util.HistogramFloat._type, std_n.util.HistogramFloat.load);
    factories.set(util.BoxPlotInt._type, util.BoxPlotInt);
    factories.set(util.Buffer._type, util.Buffer);
    loaders.set(util.Buffer._type, std_n.util.Buffer.load);
    factories.set(util.Iban._type, util.Iban);
    loaders.set(util.Iban._type, std_n.util.Iban.load);
    factories.set(util.Crypto._type, util.Crypto);
    factories.set(util.Gaussian._type, util.Gaussian);
    factories.set(util.Quantizer._type, util.Quantizer);
    loaders.set(util.Quantizer._type, std_n.util.Quantizer.load);
    factories.set(util.BoxPlotFloat._type, util.BoxPlotFloat);
    factories.set(util.GaussianProfile._type, util.GaussianProfile);
    loaders.set(util.GaussianProfile._type, std_n.util.GaussianProfile.load);
    factories.set(util.SlidingWindow._type, util.SlidingWindow);
    loaders.set(util.SlidingWindow._type, std_n.util.SlidingWindow.load);
    factories.set(util.ProgressTracker._type, util.ProgressTracker);
    factories.set(util.Assert._type, util.Assert);
    factories.set(runtime.SecurityFields._type, runtime.SecurityFields);
    factories.set(runtime.License._type, runtime.License);
    factories.set(runtime.TaskStatus._type, runtime.TaskStatus);
    factories.set(runtime.UserRole._type, runtime.UserRole);
    factories.set(runtime.UserGroupPolicyType._type, runtime.UserGroupPolicyType);
    factories.set(runtime.SecurityPolicy._type, runtime.SecurityPolicy);
    factories.set(runtime.UserGroupPolicy._type, runtime.UserGroupPolicy);
    factories.set(runtime.StoreStat._type, runtime.StoreStat);
    factories.set(runtime.UserCredential._type, runtime.UserCredential);
    factories.set(runtime.OpenIDConnect._type, runtime.OpenIDConnect);
    factories.set(runtime.RuntimeInfo._type, runtime.RuntimeInfo);
    factories.set(runtime.PeriodicTask._type, runtime.PeriodicTask);
    factories.set(runtime.System._type, runtime.System);
    factories.set(runtime.TaskInfo._type, runtime.TaskInfo);
    factories.set(runtime.SecurityEntity._type, runtime.SecurityEntity);
    factories.set(runtime.User._type, runtime.User);
    factories.set(runtime.Task._type, runtime.Task);
    factories.set(runtime.UserGroup._type, runtime.UserGroup);
    factories.set(runtime.Runtime._type, runtime.Runtime);
    factories.set(math.MathConstants._type, math.MathConstants);
    factories.set(io.CsvColumn._type, io.CsvColumn);
    factories.set(io.Http._type, io.Http);
    factories.set(io.CsvColumnTime._type, io.CsvColumnTime);
    factories.set(io.CsvColumnDuration._type, io.CsvColumnDuration);
    factories.set(io.SmtpMode._type, io.SmtpMode);
    factories.set(io.CsvColumnBoolean._type, io.CsvColumnBoolean);
    factories.set(io.CsvColumnInteger._type, io.CsvColumnInteger);
    factories.set(io.Url._type, io.Url);
    factories.set(io.CsvColumnFloat._type, io.CsvColumnFloat);
    factories.set(io.SmtpAuth._type, io.SmtpAuth);
    factories.set(io.CsvFormat._type, io.CsvFormat);
    factories.set(io.Smtp._type, io.Smtp);
    factories.set(io.CsvColumnDate._type, io.CsvColumnDate);
    factories.set(io.CsvColumnIgnored._type, io.CsvColumnIgnored);
    factories.set(io.CsvColumnString._type, io.CsvColumnString);
    factories.set(io.File._type, io.File);
    factories.set(io.TextEncoder._type, io.TextEncoder);
    factories.set(io.Email._type, io.Email);
    factories.set(io.HttpHeader._type, io.HttpHeader);
  },
  init(abi) {
    this.mapped.length = 94;
    this.mapped[0] = abi.type_by_fqn.get(core.tf2d._type)!;
    this.mapped[1] = abi.type_by_fqn.get(core.SamplingMode._type)!;
    this.mapped[1].resolveGeneratedOffsetWithValues('fixed', 0,'fixed_reg', 1,'adaptative', 2,'dense', 3);
    this.mapped[2] = abi.type_by_fqn.get(core.Table._type)!;
    this.mapped[3] = abi.type_by_fqn.get(core.ti6d._type)!;
    this.mapped[4] = abi.type_by_fqn.get(core.nodeTimeSingleton._type)!;
    this.mapped[4].resolveGeneratedOffsets('t','v');
    this.mapped[5] = abi.type_by_fqn.get(core.time._type)!;
    this.mapped[5].static_values = [abi.createTime(-9223372036854775808n),abi.createTime(9223372036854775807n)];
    this.mapped[6] = abi.type_by_fqn.get(core.nodeTime._type)!;
    this.mapped[7] = abi.type_by_fqn.get(core.DurationUnit._type)!;
    this.mapped[7].resolveGeneratedOffsetWithValues('microseconds', 1,'milliseconds', 1000,'seconds', 1000000,'minutes', 60000000,'hours', 3600000000,'days', 86400000000,'weeks', 604800000000,'months', 2628000000000,'years', 31536000000000);
    this.mapped[8] = abi.type_by_fqn.get(core.NodeTimeInfo._type)!;
    this.mapped[8].resolveGeneratedOffsets('size','from','to');
    this.mapped[9] = abi.type_by_fqn.get(core.Error._type)!;
    this.mapped[10] = abi.type_by_fqn.get(core.GeoPoly._type)!;
    this.mapped[10].resolveGeneratedOffsets('points');
    this.mapped[11] = abi.type_by_fqn.get(core.duration._type)!;
    this.mapped[12] = abi.type_by_fqn.get(core.ti2d._type)!;
    this.mapped[13] = abi.type_by_fqn.get(core.ErrorCode._type)!;
    this.mapped[13].resolveGeneratedOffsetWithValues('none', 0,'too_deep_workspace', 1,'too_deep_iterator', 2,'wrong_operand', 3,'wrong_params', 4,'wrong_param_type', 5,'wrong_numeric', 6,'wrong_state', 7,'wrong_null', 8,'unresolved_ref', 9,'assign_error', 10,'interrupted', 11,'throw', 12,'wrong_type', 13,'wrong_dimension', 14,'unsupported_operation', 15,'unsupported_type', 16,'dimensions_mismatch', 17,'timeout', 18,'forbidden', 19,'runtime_error', 20);
    this.mapped[14] = abi.type_by_fqn.get(core.geo._type)!;
    this.mapped[14].static_values = [abi.createGeo(-85.0511287602,-179.9999999581),abi.createGeo(85.0511287602,179.9999999581)];
    this.mapped[15] = abi.type_by_fqn.get(core.node._type)!;
    this.mapped[16] = abi.type_by_fqn.get(core.TableColumnMeta._type)!;
    this.mapped[16].resolveGeneratedOffsets('type','size','index','min','max','avg','std');
    this.mapped[17] = abi.type_by_fqn.get(core.Date._type)!;
    this.mapped[18] = abi.type_by_fqn.get(core.Tensor._type)!;
    this.mapped[19] = abi.type_by_fqn.get(core.ti4d._type)!;
    this.mapped[20] = abi.type_by_fqn.get(core.GeoCircle._type)!;
    this.mapped[20].resolveGeneratedOffsets('center','radius');
    this.mapped[21] = abi.type_by_fqn.get(core.nodeGeo._type)!;
    this.mapped[22] = abi.type_by_fqn.get(core.ti5d._type)!;
    this.mapped[23] = abi.type_by_fqn.get(core.String._type)!;
    this.mapped[24] = abi.type_by_fqn.get(core.Map._type)!;
    this.mapped[25] = abi.type_by_fqn.get(core.TensorType._type)!;
    this.mapped[25].resolveGeneratedOffsetWithValues('i32', 4,'i64', 8,'f32', 4,'f64', 8,'c64', 8,'c128', 16);
    this.mapped[26] = abi.type_by_fqn.get(core.TimeZone._type)!;
    this.mapped[26].resolveGeneratedOffsetWithValues('Africa_Accra', "Africa/Accra",'Africa_Bamako', "Africa/Bamako",'Africa_Banjul', "Africa/Banjul",'Africa_Conakry', "Africa/Conakry",'Africa_Dakar', "Africa/Dakar",'Africa_Freetown', "Africa/Freetown",'Africa_Lome', "Africa/Lome",'Africa_Nouakchott', "Africa/Nouakchott",'Africa_Ouagadougou', "Africa/Ouagadougou",'Africa_Timbuktu', "Africa/Timbuktu",'Atlantic_Reykjavik', "Atlantic/Reykjavik",'Atlantic_St_Helena', "Atlantic/St_Helena",'Iceland', "Iceland",'Egypt', "Egypt",'Africa_Maseru', "Africa/Maseru",'Africa_Mbabane', "Africa/Mbabane",'Africa_Bangui', "Africa/Bangui",'Africa_Brazzaville', "Africa/Brazzaville",'Africa_Douala', "Africa/Douala",'Africa_Kinshasa', "Africa/Kinshasa",'Africa_Libreville', "Africa/Libreville",'Africa_Luanda', "Africa/Luanda",'Africa_Malabo', "Africa/Malabo",'Africa_Niamey', "Africa/Niamey",'Africa_Porto_Novo', "Africa/Porto-Novo",'Africa_Blantyre', "Africa/Blantyre",'Africa_Bujumbura', "Africa/Bujumbura",'Africa_Gaborone', "Africa/Gaborone",'Africa_Harare', "Africa/Harare",'Africa_Kigali', "Africa/Kigali",'Africa_Lubumbashi', "Africa/Lubumbashi",'Africa_Lusaka', "Africa/Lusaka",'Africa_Addis_Ababa', "Africa/Addis_Ababa",'Africa_Asmara', "Africa/Asmara",'Africa_Asmera', "Africa/Asmera",'Africa_Dar_es_Salaam', "Africa/Dar_es_Salaam",'Africa_Djibouti', "Africa/Djibouti",'Africa_Kampala', "Africa/Kampala",'Africa_Mogadishu', "Africa/Mogadishu",'Indian_Antananarivo', "Indian/Antananarivo",'Indian_Comoro', "Indian/Comoro",'Indian_Mayotte', "Indian/Mayotte",'Libya', "Libya",'America_Atka', "America/Atka",'US_Aleutian', "US/Aleutian",'US_Alaska', "US/Alaska",'America_Buenos_Aires', "America/Buenos_Aires",'America_Argentina_ComodRivadavia', "America/Argentina/ComodRivadavia",'America_Catamarca', "America/Catamarca",'America_Cordoba', "America/Cordoba",'America_Rosario', "America/Rosario",'America_Jujuy', "America/Jujuy",'America_Mendoza', "America/Mendoza",'US_Central', "US/Central",'America_Shiprock', "America/Shiprock",'Navajo', "Navajo",'US_Mountain', "US/Mountain",'US_Michigan', "US/Michigan",'America_Yellowknife', "America/Yellowknife",'Canada_Mountain', "Canada/Mountain",'Canada_Atlantic', "Canada/Atlantic",'Cuba', "Cuba",'America_Fort_Wayne', "America/Fort_Wayne",'America_Indianapolis', "America/Indianapolis",'US_East_Indiana', "US/East-Indiana",'America_Knox_IN', "America/Knox_IN",'US_Indiana_Starke', "US/Indiana-Starke",'America_Pangnirtung', "America/Pangnirtung",'Jamaica', "Jamaica",'America_Louisville', "America/Louisville",'US_Pacific', "US/Pacific",'Brazil_West', "Brazil/West",'Mexico_BajaSur', "Mexico/BajaSur",'Mexico_General', "Mexico/General",'US_Eastern', "US/Eastern",'Brazil_DeNoronha', "Brazil/DeNoronha",'America_Godthab', "America/Godthab",'America_Atikokan', "America/Atikokan",'America_Cayman', "America/Cayman",'America_Coral_Harbour', "America/Coral_Harbour",'America_Creston', "America/Creston",'US_Arizona', "US/Arizona",'America_Anguilla', "America/Anguilla",'America_Antigua', "America/Antigua",'America_Aruba', "America/Aruba",'America_Blanc_Sablon', "America/Blanc-Sablon",'America_Curacao', "America/Curacao",'America_Dominica', "America/Dominica",'America_Grenada', "America/Grenada",'America_Guadeloupe', "America/Guadeloupe",'America_Kralendijk', "America/Kralendijk",'America_Lower_Princes', "America/Lower_Princes",'America_Marigot', "America/Marigot",'America_Montserrat', "America/Montserrat",'America_Port_of_Spain', "America/Port_of_Spain",'America_St_Barthelemy', "America/St_Barthelemy",'America_St_Kitts', "America/St_Kitts",'America_St_Lucia', "America/St_Lucia",'America_St_Thomas', "America/St_Thomas",'America_St_Vincent', "America/St_Vincent",'America_Tortola', "America/Tortola",'America_Virgin', "America/Virgin",'Canada_Saskatchewan', "Canada/Saskatchewan",'America_Porto_Acre', "America/Porto_Acre",'Brazil_Acre', "Brazil/Acre",'Chile_Continental', "Chile/Continental",'Brazil_East', "Brazil/East",'Canada_Newfoundland', "Canada/Newfoundland",'America_Ensenada', "America/Ensenada",'America_Santa_Isabel', "America/Santa_Isabel",'Mexico_BajaNorte', "Mexico/BajaNorte",'America_Montreal', "America/Montreal",'America_Nassau', "America/Nassau",'America_Nipigon', "America/Nipigon",'America_Thunder_Bay', "America/Thunder_Bay",'Canada_Eastern', "Canada/Eastern",'Canada_Pacific', "Canada/Pacific",'Canada_Yukon', "Canada/Yukon",'America_Rainy_River', "America/Rainy_River",'Canada_Central', "Canada/Central",'Asia_Ashkhabad', "Asia/Ashkhabad",'Asia_Phnom_Penh', "Asia/Phnom_Penh",'Asia_Vientiane', "Asia/Vientiane",'Indian_Christmas', "Indian/Christmas",'Asia_Dacca', "Asia/Dacca",'Asia_Muscat', "Asia/Muscat",'Indian_Mahe', "Indian/Mahe",'Indian_Reunion', "Indian/Reunion",'Asia_Saigon', "Asia/Saigon",'Hongkong', "Hongkong",'Asia_Tel_Aviv', "Asia/Tel_Aviv",'Israel', "Israel",'Asia_Katmandu', "Asia/Katmandu",'Asia_Calcutta', "Asia/Calcutta",'Asia_Brunei', "Asia/Brunei",'Asia_Macao', "Asia/Macao",'Asia_Ujung_Pandang', "Asia/Ujung_Pandang",'Europe_Nicosia', "Europe/Nicosia",'Asia_Bahrain', "Asia/Bahrain",'Antarctica_Syowa', "Antarctica/Syowa",'Asia_Aden', "Asia/Aden",'Asia_Kuwait', "Asia/Kuwait",'ROK', "ROK",'Asia_Chongqing', "Asia/Chongqing",'Asia_Chungking', "Asia/Chungking",'Asia_Harbin', "Asia/Harbin",'PRC', "PRC",'Asia_Kuala_Lumpur', "Asia/Kuala_Lumpur",'Singapore', "Singapore",'ROC', "ROC",'Iran', "Iran",'Asia_Thimbu', "Asia/Thimbu",'Japan', "Japan",'Asia_Ulan_Bator', "Asia/Ulan_Bator",'Antarctica_Vostok', "Antarctica/Vostok",'Asia_Kashgar', "Asia/Kashgar",'Asia_Rangoon', "Asia/Rangoon",'Indian_Cocos', "Indian/Cocos",'Atlantic_Faeroe', "Atlantic/Faeroe",'Australia_South', "Australia/South",'Australia_Queensland', "Australia/Queensland",'Australia_Yancowinna', "Australia/Yancowinna",'Australia_North', "Australia/North",'Australia_Currie', "Australia/Currie",'Australia_Tasmania', "Australia/Tasmania",'Australia_LHI', "Australia/LHI",'Australia_Victoria', "Australia/Victoria",'Australia_West', "Australia/West",'Australia_ACT', "Australia/ACT",'Australia_Canberra', "Australia/Canberra",'Australia_NSW', "Australia/NSW",'GMT', "GMT",'GMTx0', "GMT+0",'GMT_0', "GMT-0",'GMT0', "GMT0",'Greenwich', "Greenwich",'UCT', "UCT",'UTC', "UTC",'Universal', "Universal",'Zulu', "Zulu",'Europe_Ljubljana', "Europe/Ljubljana",'Europe_Podgorica', "Europe/Podgorica",'Europe_Sarajevo', "Europe/Sarajevo",'Europe_Skopje', "Europe/Skopje",'Europe_Zagreb', "Europe/Zagreb",'Arctic_Longyearbyen', "Arctic/Longyearbyen",'Atlantic_Jan_Mayen', "Atlantic/Jan_Mayen",'Europe_Copenhagen', "Europe/Copenhagen",'Europe_Oslo', "Europe/Oslo",'Europe_Stockholm', "Europe/Stockholm",'Europe_Amsterdam', "Europe/Amsterdam",'Europe_Luxembourg', "Europe/Luxembourg",'Europe_Tiraspol', "Europe/Tiraspol",'Eire', "Eire",'Europe_Mariehamn', "Europe/Mariehamn",'Asia_Istanbul', "Asia/Istanbul",'Turkey', "Turkey",'Europe_Kiev', "Europe/Kiev",'Europe_Uzhgorod', "Europe/Uzhgorod",'Europe_Zaporozhye', "Europe/Zaporozhye",'Portugal', "Portugal",'Europe_Belfast', "Europe/Belfast",'Europe_Guernsey', "Europe/Guernsey",'Europe_Isle_of_Man', "Europe/Isle_of_Man",'Europe_Jersey', "Europe/Jersey",'GB', "GB",'GB_Eire', "GB-Eire",'W_SU', "W-SU",'Europe_Monaco', "Europe/Monaco",'Europe_Bratislava', "Europe/Bratislava",'Europe_San_Marino', "Europe/San_Marino",'Europe_Vatican', "Europe/Vatican",'Poland', "Poland",'Europe_Busingen', "Europe/Busingen",'Europe_Vaduz', "Europe/Vaduz",'Indian_Kerguelen', "Indian/Kerguelen",'Antarctica_McMurdo', "Antarctica/McMurdo",'Antarctica_South_Pole', "Antarctica/South_Pole",'NZ', "NZ",'NZ_CHAT', "NZ-CHAT",'Chile_EasterIsland', "Chile/EasterIsland",'Pacific_Pohnpei', "Pacific/Pohnpei",'Pacific_Ponape', "Pacific/Ponape",'Pacific_Saipan', "Pacific/Saipan",'Pacific_Johnston', "Pacific/Johnston",'US_Hawaii', "US/Hawaii",'Pacific_Enderbury', "Pacific/Enderbury",'Kwajalein', "Kwajalein",'Pacific_Midway', "Pacific/Midway",'Pacific_Samoa', "Pacific/Samoa",'US_Samoa', "US/Samoa",'Antarctica_DumontDUrville', "Antarctica/DumontDUrville",'Pacific_Chuuk', "Pacific/Chuuk",'Pacific_Truk', "Pacific/Truk",'Pacific_Yap', "Pacific/Yap",'Pacific_Funafuti', "Pacific/Funafuti",'Pacific_Majuro', "Pacific/Majuro",'Pacific_Wake', "Pacific/Wake",'Pacific_Wallis', "Pacific/Wallis",'Africa_Abidjan', "Africa/Abidjan",'Africa_Algiers', "Africa/Algiers",'Africa_Bissau', "Africa/Bissau",'Africa_Cairo', "Africa/Cairo",'Africa_Casablanca', "Africa/Casablanca",'Africa_Ceuta', "Africa/Ceuta",'Africa_El_Aaiun', "Africa/El_Aaiun",'Africa_Johannesburg', "Africa/Johannesburg",'Africa_Juba', "Africa/Juba",'Africa_Khartoum', "Africa/Khartoum",'Africa_Lagos', "Africa/Lagos",'Africa_Maputo', "Africa/Maputo",'Africa_Monrovia', "Africa/Monrovia",'Africa_Nairobi', "Africa/Nairobi",'Africa_Ndjamena', "Africa/Ndjamena",'Africa_Sao_Tome', "Africa/Sao_Tome",'Africa_Tripoli', "Africa/Tripoli",'Africa_Tunis', "Africa/Tunis",'Africa_Windhoek', "Africa/Windhoek",'America_Adak', "America/Adak",'America_Anchorage', "America/Anchorage",'America_Araguaina', "America/Araguaina",'America_Argentina_Buenos_Aires', "America/Argentina/Buenos_Aires",'America_Argentina_Catamarca', "America/Argentina/Catamarca",'America_Argentina_Cordoba', "America/Argentina/Cordoba",'America_Argentina_Jujuy', "America/Argentina/Jujuy",'America_Argentina_La_Rioja', "America/Argentina/La_Rioja",'America_Argentina_Mendoza', "America/Argentina/Mendoza",'America_Argentina_Rio_Gallegos', "America/Argentina/Rio_Gallegos",'America_Argentina_Salta', "America/Argentina/Salta",'America_Argentina_San_Juan', "America/Argentina/San_Juan",'America_Argentina_San_Luis', "America/Argentina/San_Luis",'America_Argentina_Tucuman', "America/Argentina/Tucuman",'America_Argentina_Ushuaia', "America/Argentina/Ushuaia",'America_Asuncion', "America/Asuncion",'America_Bahia', "America/Bahia",'America_Bahia_Banderas', "America/Bahia_Banderas",'America_Barbados', "America/Barbados",'America_Belem', "America/Belem",'America_Belize', "America/Belize",'America_Boa_Vista', "America/Boa_Vista",'America_Bogota', "America/Bogota",'America_Boise', "America/Boise",'America_Cambridge_Bay', "America/Cambridge_Bay",'America_Campo_Grande', "America/Campo_Grande",'America_Cancun', "America/Cancun",'America_Caracas', "America/Caracas",'America_Cayenne', "America/Cayenne",'America_Chicago', "America/Chicago",'America_Chihuahua', "America/Chihuahua",'America_Ciudad_Juarez', "America/Ciudad_Juarez",'America_Costa_Rica', "America/Costa_Rica",'America_Cuiaba', "America/Cuiaba",'America_Danmarkshavn', "America/Danmarkshavn",'America_Dawson', "America/Dawson",'America_Dawson_Creek', "America/Dawson_Creek",'America_Denver', "America/Denver",'America_Detroit', "America/Detroit",'America_Edmonton', "America/Edmonton",'America_Eirunepe', "America/Eirunepe",'America_El_Salvador', "America/El_Salvador",'America_Fort_Nelson', "America/Fort_Nelson",'America_Fortaleza', "America/Fortaleza",'America_Glace_Bay', "America/Glace_Bay",'America_Goose_Bay', "America/Goose_Bay",'America_Grand_Turk', "America/Grand_Turk",'America_Guatemala', "America/Guatemala",'America_Guayaquil', "America/Guayaquil",'America_Guyana', "America/Guyana",'America_Halifax', "America/Halifax",'America_Havana', "America/Havana",'America_Hermosillo', "America/Hermosillo",'America_Indiana_Indianapolis', "America/Indiana/Indianapolis",'America_Indiana_Knox', "America/Indiana/Knox",'America_Indiana_Marengo', "America/Indiana/Marengo",'America_Indiana_Petersburg', "America/Indiana/Petersburg",'America_Indiana_Tell_City', "America/Indiana/Tell_City",'America_Indiana_Vevay', "America/Indiana/Vevay",'America_Indiana_Vincennes', "America/Indiana/Vincennes",'America_Indiana_Winamac', "America/Indiana/Winamac",'America_Inuvik', "America/Inuvik",'America_Iqaluit', "America/Iqaluit",'America_Jamaica', "America/Jamaica",'America_Juneau', "America/Juneau",'America_Kentucky_Louisville', "America/Kentucky/Louisville",'America_Kentucky_Monticello', "America/Kentucky/Monticello",'America_La_Paz', "America/La_Paz",'America_Lima', "America/Lima",'America_Los_Angeles', "America/Los_Angeles",'America_Maceio', "America/Maceio",'America_Managua', "America/Managua",'America_Manaus', "America/Manaus",'America_Martinique', "America/Martinique",'America_Matamoros', "America/Matamoros",'America_Mazatlan', "America/Mazatlan",'America_Menominee', "America/Menominee",'America_Merida', "America/Merida",'America_Metlakatla', "America/Metlakatla",'America_Mexico_City', "America/Mexico_City",'America_Miquelon', "America/Miquelon",'America_Moncton', "America/Moncton",'America_Monterrey', "America/Monterrey",'America_Montevideo', "America/Montevideo",'America_New_York', "America/New_York",'America_Nome', "America/Nome",'America_Noronha', "America/Noronha",'America_North_Dakota_Beulah', "America/North_Dakota/Beulah",'America_North_Dakota_Center', "America/North_Dakota/Center",'America_North_Dakota_New_Salem', "America/North_Dakota/New_Salem",'America_Nuuk', "America/Nuuk",'America_Ojinaga', "America/Ojinaga",'America_Panama', "America/Panama",'America_Paramaribo', "America/Paramaribo",'America_Phoenix', "America/Phoenix",'America_Port_au_Prince', "America/Port-au-Prince",'America_Porto_Velho', "America/Porto_Velho",'America_Puerto_Rico', "America/Puerto_Rico",'America_Punta_Arenas', "America/Punta_Arenas",'America_Rankin_Inlet', "America/Rankin_Inlet",'America_Recife', "America/Recife",'America_Regina', "America/Regina",'America_Resolute', "America/Resolute",'America_Rio_Branco', "America/Rio_Branco",'America_Santarem', "America/Santarem",'America_Santiago', "America/Santiago",'America_Santo_Domingo', "America/Santo_Domingo",'America_Sao_Paulo', "America/Sao_Paulo",'America_Scoresbysund', "America/Scoresbysund",'America_Sitka', "America/Sitka",'America_St_Johns', "America/St_Johns",'America_Swift_Current', "America/Swift_Current",'America_Tegucigalpa', "America/Tegucigalpa",'America_Thule', "America/Thule",'America_Tijuana', "America/Tijuana",'America_Toronto', "America/Toronto",'America_Vancouver', "America/Vancouver",'America_Whitehorse', "America/Whitehorse",'America_Winnipeg', "America/Winnipeg",'America_Yakutat', "America/Yakutat",'Antarctica_Casey', "Antarctica/Casey",'Antarctica_Davis', "Antarctica/Davis",'Antarctica_Macquarie', "Antarctica/Macquarie",'Antarctica_Mawson', "Antarctica/Mawson",'Antarctica_Palmer', "Antarctica/Palmer",'Antarctica_Rothera', "Antarctica/Rothera",'Antarctica_Troll', "Antarctica/Troll",'Asia_Almaty', "Asia/Almaty",'Asia_Amman', "Asia/Amman",'Asia_Anadyr', "Asia/Anadyr",'Asia_Aqtau', "Asia/Aqtau",'Asia_Aqtobe', "Asia/Aqtobe",'Asia_Ashgabat', "Asia/Ashgabat",'Asia_Atyrau', "Asia/Atyrau",'Asia_Baghdad', "Asia/Baghdad",'Asia_Baku', "Asia/Baku",'Asia_Bangkok', "Asia/Bangkok",'Asia_Barnaul', "Asia/Barnaul",'Asia_Beirut', "Asia/Beirut",'Asia_Bishkek', "Asia/Bishkek",'Asia_Chita', "Asia/Chita",'Asia_Choibalsan', "Asia/Choibalsan",'Asia_Colombo', "Asia/Colombo",'Asia_Damascus', "Asia/Damascus",'Asia_Dhaka', "Asia/Dhaka",'Asia_Dili', "Asia/Dili",'Asia_Dubai', "Asia/Dubai",'Asia_Dushanbe', "Asia/Dushanbe",'Asia_Famagusta', "Asia/Famagusta",'Asia_Gaza', "Asia/Gaza",'Asia_Hebron', "Asia/Hebron",'Asia_Ho_Chi_Minh', "Asia/Ho_Chi_Minh",'Asia_Hong_Kong', "Asia/Hong_Kong",'Asia_Hovd', "Asia/Hovd",'Asia_Irkutsk', "Asia/Irkutsk",'Asia_Jakarta', "Asia/Jakarta",'Asia_Jayapura', "Asia/Jayapura",'Asia_Jerusalem', "Asia/Jerusalem",'Asia_Kabul', "Asia/Kabul",'Asia_Kamchatka', "Asia/Kamchatka",'Asia_Karachi', "Asia/Karachi",'Asia_Kathmandu', "Asia/Kathmandu",'Asia_Khandyga', "Asia/Khandyga",'Asia_Kolkata', "Asia/Kolkata",'Asia_Krasnoyarsk', "Asia/Krasnoyarsk",'Asia_Kuching', "Asia/Kuching",'Asia_Macau', "Asia/Macau",'Asia_Magadan', "Asia/Magadan",'Asia_Makassar', "Asia/Makassar",'Asia_Manila', "Asia/Manila",'Asia_Nicosia', "Asia/Nicosia",'Asia_Novokuznetsk', "Asia/Novokuznetsk",'Asia_Novosibirsk', "Asia/Novosibirsk",'Asia_Omsk', "Asia/Omsk",'Asia_Oral', "Asia/Oral",'Asia_Pontianak', "Asia/Pontianak",'Asia_Pyongyang', "Asia/Pyongyang",'Asia_Qatar', "Asia/Qatar",'Asia_Qostanay', "Asia/Qostanay",'Asia_Qyzylorda', "Asia/Qyzylorda",'Asia_Riyadh', "Asia/Riyadh",'Asia_Sakhalin', "Asia/Sakhalin",'Asia_Samarkand', "Asia/Samarkand",'Asia_Seoul', "Asia/Seoul",'Asia_Shanghai', "Asia/Shanghai",'Asia_Singapore', "Asia/Singapore",'Asia_Srednekolymsk', "Asia/Srednekolymsk",'Asia_Taipei', "Asia/Taipei",'Asia_Tashkent', "Asia/Tashkent",'Asia_Tbilisi', "Asia/Tbilisi",'Asia_Tehran', "Asia/Tehran",'Asia_Thimphu', "Asia/Thimphu",'Asia_Tokyo', "Asia/Tokyo",'Asia_Tomsk', "Asia/Tomsk",'Asia_Ulaanbaatar', "Asia/Ulaanbaatar",'Asia_Urumqi', "Asia/Urumqi",'Asia_Ust_Nera', "Asia/Ust-Nera",'Asia_Vladivostok', "Asia/Vladivostok",'Asia_Yakutsk', "Asia/Yakutsk",'Asia_Yangon', "Asia/Yangon",'Asia_Yekaterinburg', "Asia/Yekaterinburg",'Asia_Yerevan', "Asia/Yerevan",'Atlantic_Azores', "Atlantic/Azores",'Atlantic_Bermuda', "Atlantic/Bermuda",'Atlantic_Canary', "Atlantic/Canary",'Atlantic_Cape_Verde', "Atlantic/Cape_Verde",'Atlantic_Faroe', "Atlantic/Faroe",'Atlantic_Madeira', "Atlantic/Madeira",'Atlantic_South_Georgia', "Atlantic/South_Georgia",'Atlantic_Stanley', "Atlantic/Stanley",'Australia_Adelaide', "Australia/Adelaide",'Australia_Brisbane', "Australia/Brisbane",'Australia_Broken_Hill', "Australia/Broken_Hill",'Australia_Darwin', "Australia/Darwin",'Australia_Eucla', "Australia/Eucla",'Australia_Hobart', "Australia/Hobart",'Australia_Lindeman', "Australia/Lindeman",'Australia_Lord_Howe', "Australia/Lord_Howe",'Australia_Melbourne', "Australia/Melbourne",'Australia_Perth', "Australia/Perth",'Australia_Sydney', "Australia/Sydney",'CET', "CET",'CST6CDT', "CST6CDT",'EET', "EET",'EST', "EST",'EST5EDT', "EST5EDT",'Europe_Andorra', "Europe/Andorra",'Europe_Astrakhan', "Europe/Astrakhan",'Europe_Athens', "Europe/Athens",'Europe_Belgrade', "Europe/Belgrade",'Europe_Berlin', "Europe/Berlin",'Europe_Brussels', "Europe/Brussels",'Europe_Bucharest', "Europe/Bucharest",'Europe_Budapest', "Europe/Budapest",'Europe_Chisinau', "Europe/Chisinau",'Europe_Dublin', "Europe/Dublin",'Europe_Gibraltar', "Europe/Gibraltar",'Europe_Helsinki', "Europe/Helsinki",'Europe_Istanbul', "Europe/Istanbul",'Europe_Kaliningrad', "Europe/Kaliningrad",'Europe_Kirov', "Europe/Kirov",'Europe_Kyiv', "Europe/Kyiv",'Europe_Lisbon', "Europe/Lisbon",'Europe_London', "Europe/London",'Europe_Madrid', "Europe/Madrid",'Europe_Malta', "Europe/Malta",'Europe_Minsk', "Europe/Minsk",'Europe_Moscow', "Europe/Moscow",'Europe_Paris', "Europe/Paris",'Europe_Prague', "Europe/Prague",'Europe_Riga', "Europe/Riga",'Europe_Rome', "Europe/Rome",'Europe_Samara', "Europe/Samara",'Europe_Saratov', "Europe/Saratov",'Europe_Simferopol', "Europe/Simferopol",'Europe_Sofia', "Europe/Sofia",'Europe_Tallinn', "Europe/Tallinn",'Europe_Tirane', "Europe/Tirane",'Europe_Ulyanovsk', "Europe/Ulyanovsk",'Europe_Vienna', "Europe/Vienna",'Europe_Vilnius', "Europe/Vilnius",'Europe_Volgograd', "Europe/Volgograd",'Europe_Warsaw', "Europe/Warsaw",'Europe_Zurich', "Europe/Zurich",'Factory', "Factory",'HST', "HST",'Indian_Chagos', "Indian/Chagos",'Indian_Maldives', "Indian/Maldives",'Indian_Mauritius', "Indian/Mauritius",'MET', "MET",'MST', "MST",'MST7MDT', "MST7MDT",'PST8PDT', "PST8PDT",'Pacific_Apia', "Pacific/Apia",'Pacific_Auckland', "Pacific/Auckland",'Pacific_Bougainville', "Pacific/Bougainville",'Pacific_Chatham', "Pacific/Chatham",'Pacific_Easter', "Pacific/Easter",'Pacific_Efate', "Pacific/Efate",'Pacific_Fakaofo', "Pacific/Fakaofo",'Pacific_Fiji', "Pacific/Fiji",'Pacific_Galapagos', "Pacific/Galapagos",'Pacific_Gambier', "Pacific/Gambier",'Pacific_Guadalcanal', "Pacific/Guadalcanal",'Pacific_Guam', "Pacific/Guam",'Pacific_Honolulu', "Pacific/Honolulu",'Pacific_Kanton', "Pacific/Kanton",'Pacific_Kiritimati', "Pacific/Kiritimati",'Pacific_Kosrae', "Pacific/Kosrae",'Pacific_Kwajalein', "Pacific/Kwajalein",'Pacific_Marquesas', "Pacific/Marquesas",'Pacific_Nauru', "Pacific/Nauru",'Pacific_Niue', "Pacific/Niue",'Pacific_Norfolk', "Pacific/Norfolk",'Pacific_Noumea', "Pacific/Noumea",'Pacific_Pago_Pago', "Pacific/Pago_Pago",'Pacific_Palau', "Pacific/Palau",'Pacific_Pitcairn', "Pacific/Pitcairn",'Pacific_Port_Moresby', "Pacific/Port_Moresby",'Pacific_Rarotonga', "Pacific/Rarotonga",'Pacific_Tahiti', "Pacific/Tahiti",'Pacific_Tarawa', "Pacific/Tarawa",'Pacific_Tongatapu', "Pacific/Tongatapu",'WET', "WET");
    this.mapped[27] = abi.type_by_fqn.get(core.GeoBox._type)!;
    this.mapped[27].resolveGeneratedOffsets('sw','ne');
    this.mapped[28] = abi.type_by_fqn.get(core.Tuple._type)!;
    this.mapped[28].resolveGeneratedOffsets('x','y');
    this.mapped[29] = abi.type_by_fqn.get(core.DatePart._type)!;
    this.mapped[29].resolveGeneratedOffsetWithValues('years', 0,'months', 1,'days', 2,'hours', 3,'minutes', 4,'seconds', 5,'microseconds', 6);
    this.mapped[30] = abi.type_by_fqn.get(core.nodeIndex._type)!;
    this.mapped[31] = abi.type_by_fqn.get(core.nodeList._type)!;
    this.mapped[32] = abi.type_by_fqn.get(core.any._type)!;
    this.mapped[33] = abi.type_by_fqn.get(core.tf3d._type)!;
    this.mapped[34] = abi.type_by_fqn.get(core.nodeIndexBucket._type)!;
    this.mapped[35] = abi.type_by_fqn.get(core.ti10d._type)!;
    this.mapped[36] = abi.type_by_fqn.get(core.Array._type)!;
    this.mapped[37] = abi.type_by_fqn.get(core.tf4d._type)!;
    this.mapped[38] = abi.type_by_fqn.get(core.ti3d._type)!;
    this.mapped[39] = abi.type_by_fqn.get(util.TimeWindow._type)!;
    this.mapped[40] = abi.type_by_fqn.get(util.Random._type)!;
    this.mapped[40].resolveGeneratedOffsets('seed','v');
    this.mapped[41] = abi.type_by_fqn.get(util.HistogramInt._type)!;
    this.mapped[41].static_values = [0,1,2,3];
    this.mapped[42] = abi.type_by_fqn.get(util.Queue._type)!;
    this.mapped[43] = abi.type_by_fqn.get(util.HistogramFloat._type)!;
    this.mapped[43].static_values = [0,1,2,3];
    this.mapped[44] = abi.type_by_fqn.get(util.BoxPlotInt._type)!;
    this.mapped[44].resolveGeneratedOffsets('min','max','whiskerLow','whiskerHigh','percentile1','percentile5','percentile25','percentile50','percentile75','percentile95','percentile99','countOutliersLow','countOutliersHigh','percentageOutliersLow','percentageOutliersHigh','sum','avg','std','size');
    this.mapped[45] = abi.type_by_fqn.get(util.Buffer._type)!;
    this.mapped[46] = abi.type_by_fqn.get(util.Iban._type)!;
    this.mapped[47] = abi.type_by_fqn.get(util.Crypto._type)!;
    this.mapped[48] = abi.type_by_fqn.get(util.Gaussian._type)!;
    this.mapped[48].resolveGeneratedOffsets('sum','sum_sq','count','min','max');
    this.mapped[49] = abi.type_by_fqn.get(util.Quantizer._type)!;
    this.mapped[50] = abi.type_by_fqn.get(util.BoxPlotFloat._type)!;
    this.mapped[50].resolveGeneratedOffsets('min','max','whiskerLow','whiskerHigh','percentile1','percentile5','percentile25','percentile50','percentile75','percentile95','percentile99','countOutliersLow','countOutliersHigh','percentageOutliersLow','percentageOutliersHigh','sum','avg','std','size');
    this.mapped[51] = abi.type_by_fqn.get(util.GaussianProfile._type)!;
    this.mapped[51].static_values = [0,1,2,3,4,5,6];
    this.mapped[52] = abi.type_by_fqn.get(util.SlidingWindow._type)!;
    this.mapped[53] = abi.type_by_fqn.get(util.ProgressTracker._type)!;
    this.mapped[53].resolveGeneratedOffsets('start','total','counter','duration','progress','speed','remaining');
    this.mapped[54] = abi.type_by_fqn.get(util.Assert._type)!;
    this.mapped[55] = abi.type_by_fqn.get(runtime.SecurityFields._type)!;
    this.mapped[55].resolveGeneratedOffsets('email','name','first_name','last_name','roles','groups');
    this.mapped[56] = abi.type_by_fqn.get(runtime.License._type)!;
    this.mapped[56].resolveGeneratedOffsets('name','start','end','company','max_workers','max_memory','extra_1','extra_2','extra_3','extra_4');
    this.mapped[57] = abi.type_by_fqn.get(runtime.TaskStatus._type)!;
    this.mapped[57].resolveGeneratedOffsetWithValues('empty', 0,'waiting', 1,'running', 2,'cancelled', 3,'error', 4,'ended', 5);
    this.mapped[58] = abi.type_by_fqn.get(runtime.UserRole._type)!;
    this.mapped[58].resolveGeneratedOffsets('name','permissions');
    this.mapped[59] = abi.type_by_fqn.get(runtime.UserGroupPolicyType._type)!;
    this.mapped[59].resolveGeneratedOffsetWithValues('read', 0,'write', 1,'execute', 2);
    this.mapped[60] = abi.type_by_fqn.get(runtime.SecurityPolicy._type)!;
    this.mapped[60].resolveGeneratedOffsets('entities','credentials','roles','fields');
    this.mapped[61] = abi.type_by_fqn.get(runtime.UserGroupPolicy._type)!;
    this.mapped[61].resolveGeneratedOffsets('group_id','type');
    this.mapped[62] = abi.type_by_fqn.get(runtime.StoreStat._type)!;
    this.mapped[62].resolveGeneratedOffsets('capacity_bytes','allocated_bytes','allocated_ratio','remained_bytes','remained_ratio','used_bytes','used_ratio','available_bytes','available_ratio');
    this.mapped[63] = abi.type_by_fqn.get(runtime.UserCredential._type)!;
    this.mapped[63].resolveGeneratedOffsets('offset','pass');
    this.mapped[64] = abi.type_by_fqn.get(runtime.OpenIDConnect._type)!;
    this.mapped[64].resolveGeneratedOffsets('url','clientId');
    this.mapped[65] = abi.type_by_fqn.get(runtime.RuntimeInfo._type)!;
    this.mapped[65].resolveGeneratedOffsets('version','arch','timezone','license','io_threads','bg_threads','fg_threads','mem_total','mem_worker','nb_ctx','store_stats');
    this.mapped[66] = abi.type_by_fqn.get(runtime.PeriodicTask._type)!;
    this.mapped[66].resolveGeneratedOffsets('name','user_id','args','start','every');
    this.mapped[67] = abi.type_by_fqn.get(runtime.System._type)!;
    this.mapped[68] = abi.type_by_fqn.get(runtime.TaskInfo._type)!;
    this.mapped[68].resolveGeneratedOffsets('user_id','task_id','mod','type','fun','creation','status','start','progress','remaining','duration','sub_waiting','sub_tasks_all');
    this.mapped[69] = abi.type_by_fqn.get(runtime.SecurityEntity._type)!;
    this.mapped[69].resolveGeneratedOffsets('id','name','activated');
    this.mapped[70] = abi.type_by_fqn.get(runtime.User._type)!;
    this.mapped[70].resolveGeneratedOffsets('id','name','activated','full_name','email','role','permissions_flags','groups','groups_flags','external');
    this.mapped[71] = abi.type_by_fqn.get(runtime.Task._type)!;
    this.mapped[71].resolveGeneratedOffsets('user_id','task_id','mod','type','fun','creation','status');
    this.mapped[72] = abi.type_by_fqn.get(runtime.UserGroup._type)!;
    this.mapped[72].resolveGeneratedOffsets('id','name','activated');
    this.mapped[73] = abi.type_by_fqn.get(runtime.Runtime._type)!;
    this.mapped[74] = abi.type_by_fqn.get(math.MathConstants._type)!;
    this.mapped[74].static_values = [2.7182818285,1.4426950409,0.4342944819,0.6931471806,2.302585093,3.1415926536,1.5707963268,0.7853981634,0.3183098862,0.6366197724,1.1283791671,1.4142135624,0.7071067812];
    this.mapped[75] = abi.type_by_fqn.get(io.CsvColumn._type)!;
    this.mapped[75].resolveGeneratedOffsets('name','mandatory');
    this.mapped[76] = abi.type_by_fqn.get(io.Http._type)!;
    this.mapped[77] = abi.type_by_fqn.get(io.CsvColumnTime._type)!;
    this.mapped[77].resolveGeneratedOffsets('name','mandatory','unit');
    this.mapped[78] = abi.type_by_fqn.get(io.CsvColumnDuration._type)!;
    this.mapped[78].resolveGeneratedOffsets('name','mandatory','unit');
    this.mapped[79] = abi.type_by_fqn.get(io.SmtpMode._type)!;
    this.mapped[79].resolveGeneratedOffsetWithValues('plain', 0,'ssl_tls', 1,'starttls', 2);
    this.mapped[80] = abi.type_by_fqn.get(io.CsvColumnBoolean._type)!;
    this.mapped[80].resolveGeneratedOffsets('name','mandatory');
    this.mapped[81] = abi.type_by_fqn.get(io.CsvColumnInteger._type)!;
    this.mapped[81].resolveGeneratedOffsets('name','mandatory');
    this.mapped[82] = abi.type_by_fqn.get(io.Url._type)!;
    this.mapped[82].resolveGeneratedOffsets('protocol','host','port','path','params','hash');
    this.mapped[83] = abi.type_by_fqn.get(io.CsvColumnFloat._type)!;
    this.mapped[83].resolveGeneratedOffsets('name','mandatory');
    this.mapped[84] = abi.type_by_fqn.get(io.SmtpAuth._type)!;
    this.mapped[84].resolveGeneratedOffsetWithValues('none', 0,'plain', 1,'login', 2);
    this.mapped[85] = abi.type_by_fqn.get(io.CsvFormat._type)!;
    this.mapped[85].resolveGeneratedOffsets('header_lines','infer','separator','string_delimiter','decimal_separator','thousands_separator','columns');
    this.mapped[86] = abi.type_by_fqn.get(io.Smtp._type)!;
    this.mapped[86].resolveGeneratedOffsets('host','port','mode','authenticate','user','pass');
    this.mapped[87] = abi.type_by_fqn.get(io.CsvColumnDate._type)!;
    this.mapped[87].resolveGeneratedOffsets('name','mandatory','format','tz','as_time');
    this.mapped[88] = abi.type_by_fqn.get(io.CsvColumnIgnored._type)!;
    this.mapped[88].resolveGeneratedOffsets('name','mandatory');
    this.mapped[89] = abi.type_by_fqn.get(io.CsvColumnString._type)!;
    this.mapped[89].resolveGeneratedOffsets('name','mandatory','trim','try_number','try_json','values','encoder');
    this.mapped[90] = abi.type_by_fqn.get(io.File._type)!;
    this.mapped[90].resolveGeneratedOffsets('path','size','last_modification');
    this.mapped[91] = abi.type_by_fqn.get(io.TextEncoder._type)!;
    this.mapped[91].resolveGeneratedOffsetWithValues('plain', null,'base64', null,'base64url', null,'hexadecimal', null);
    this.mapped[92] = abi.type_by_fqn.get(io.Email._type)!;
    this.mapped[92].resolveGeneratedOffsets('from','subject','body','body_is_html','to','cc','bcc');
    this.mapped[93] = abi.type_by_fqn.get(io.HttpHeader._type)!;
    this.mapped[93].resolveGeneratedOffsets('name','value');
  },
};
