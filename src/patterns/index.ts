// AUTO-GENERATED FILE PLEASE DO NOT MODIFY MANUALLY
/* eslint-disable */
// @ts-nocheck

import * as $sdk from '../index.js';
import * as patterns_n from '../patterns_n/index.js';

export namespace pattern_detectors {
  export class ScoreDetailsSingleton extends $sdk.GCObject {
    static readonly _type = 'pattern_detectors::ScoreDetailsSingleton';

    best_pattern: bigint | number;
    timespan: $sdk.std.core.duration;
    timestamp: $sdk.std.core.time;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        best_pattern: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        timespan: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        timestamp: {
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

    static createFrom({best_pattern, timespan, timestamp}: {best_pattern: bigint | number, timespan: $sdk.std.core.duration, timestamp: $sdk.std.core.time}, $g: $sdk.GreyCat = globalThis.greycat.default): ScoreDetailsSingleton {
      return new ScoreDetailsSingleton($g.abi.libs_by_name.get(patternslib.name)!.mapped[0], best_pattern, timespan, timestamp);
    }
    static create(best_pattern: bigint | number, timespan: $sdk.std.core.duration, timestamp: $sdk.std.core.time, $g: $sdk.GreyCat = globalThis.greycat.default): ScoreDetailsSingleton {
      return new ScoreDetailsSingleton($g.abi.libs_by_name.get(patternslib.name)!.mapped[0], best_pattern, timespan, timestamp);
    }
  }

  export class EuclideanPatternDetector extends $sdk.GCObject {
    static readonly _type = 'pattern_detectors::EuclideanPatternDetector';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): EuclideanPatternDetector {
      return new EuclideanPatternDetector($g.abi.libs_by_name.get(patternslib.name)!.mapped[1]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): EuclideanPatternDetector {
      return new EuclideanPatternDetector($g.abi.libs_by_name.get(patternslib.name)!.mapped[1]);
    }
  }

  export class SamplingPolicy extends $sdk.GCEnum {
    static readonly _type = 'pattern_detectors::SamplingPolicy';

    constructor(type: $sdk.AbiType, offset: number, public key: SamplingPolicy.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static as_is($g: $sdk.GreyCat = globalThis.greycat.default): SamplingPolicy {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[0]];
    }
    static average_frequency($g: $sdk.GreyCat = globalThis.greycat.default): SamplingPolicy {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[1]];
    }
    static highest_frequency($g: $sdk.GreyCat = globalThis.greycat.default): SamplingPolicy {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[2]];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): SamplingPolicy[] {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[2];
      return t.enum_values!;
    }
  }

  export namespace SamplingPolicy  {
    export type Field = 'as_is'|'average_frequency'|'highest_frequency';
  }
  export class EuclideanPatternDetectionEngine extends $sdk.GCObject {
    static readonly _type = 'pattern_detectors::EuclideanPatternDetectionEngine';

    timeseries: $sdk.std.core.nodeTime;
    state: pattern_detectors.PatternDetectionEngineState | null;
    nullStrategy: pattern_detectors.PatternNullStrategy | null;
    nullReplaceConstant: number | null;
    samplingPolicy: pattern_detectors.SamplingPolicy | null;
    std: number | null;
    matchingNormalisation: pattern_detectors.MatchingNormalisation | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        timeseries: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        state: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        nullStrategy: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        nullReplaceConstant: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        samplingPolicy: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[4]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[4]] = v;
          },
        },
        std: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[5]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[5]] = v;
          },
        },
        matchingNormalisation: {
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

    static createFrom({timeseries, state, nullStrategy, nullReplaceConstant, samplingPolicy, std, matchingNormalisation}: {timeseries: $sdk.std.core.nodeTime, state: pattern_detectors.PatternDetectionEngineState | null, nullStrategy: pattern_detectors.PatternNullStrategy | null, nullReplaceConstant: number | null, samplingPolicy: pattern_detectors.SamplingPolicy | null, std: number | null, matchingNormalisation: pattern_detectors.MatchingNormalisation | null}, $g: $sdk.GreyCat = globalThis.greycat.default): EuclideanPatternDetectionEngine {
      return new EuclideanPatternDetectionEngine($g.abi.libs_by_name.get(patternslib.name)!.mapped[3], timeseries, state, nullStrategy, nullReplaceConstant, samplingPolicy, std, matchingNormalisation);
    }
    static create(timeseries: $sdk.std.core.nodeTime, state: pattern_detectors.PatternDetectionEngineState | null, nullStrategy: pattern_detectors.PatternNullStrategy | null, nullReplaceConstant: number | null, samplingPolicy: pattern_detectors.SamplingPolicy | null, std: number | null, matchingNormalisation: pattern_detectors.MatchingNormalisation | null, $g: $sdk.GreyCat = globalThis.greycat.default): EuclideanPatternDetectionEngine {
      return new EuclideanPatternDetectionEngine($g.abi.libs_by_name.get(patternslib.name)!.mapped[3], timeseries, state, nullStrategy, nullReplaceConstant, samplingPolicy, std, matchingNormalisation);
    }
  }

  export class PatternDetectionSensitivity extends $sdk.GCObject {
    static readonly _type = 'pattern_detectors::PatternDetectionSensitivity';

    threshold: number;
    overlap: number;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        threshold: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        overlap: {
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

    static createFrom({threshold, overlap}: {threshold: number, overlap: number}, $g: $sdk.GreyCat = globalThis.greycat.default): PatternDetectionSensitivity {
      return new PatternDetectionSensitivity($g.abi.libs_by_name.get(patternslib.name)!.mapped[4], threshold, overlap);
    }
    static create(threshold: number, overlap: number, $g: $sdk.GreyCat = globalThis.greycat.default): PatternDetectionSensitivity {
      return new PatternDetectionSensitivity($g.abi.libs_by_name.get(patternslib.name)!.mapped[4], threshold, overlap);
    }
  }

  export class SaxPatternDetector extends $sdk.GCObject {
    static readonly _type = 'pattern_detectors::SaxPatternDetector';

    alphabet_size: bigint | number;
    fingerprint_length: bigint | number;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        alphabet_size: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        fingerprint_length: {
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

    static createFrom({alphabet_size, fingerprint_length}: {alphabet_size: bigint | number, fingerprint_length: bigint | number}, $g: $sdk.GreyCat = globalThis.greycat.default): SaxPatternDetector {
      return new SaxPatternDetector($g.abi.libs_by_name.get(patternslib.name)!.mapped[5], alphabet_size, fingerprint_length);
    }
    static create(alphabet_size: bigint | number, fingerprint_length: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default): SaxPatternDetector {
      return new SaxPatternDetector($g.abi.libs_by_name.get(patternslib.name)!.mapped[5], alphabet_size, fingerprint_length);
    }
  }

  export class ScoreDetails extends $sdk.GCObject {
    static readonly _type = 'pattern_detectors::ScoreDetails';

    best_pattern: bigint | number;
    timespan: $sdk.std.core.duration;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        best_pattern: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        timespan: {
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

    static createFrom({best_pattern, timespan}: {best_pattern: bigint | number, timespan: $sdk.std.core.duration}, $g: $sdk.GreyCat = globalThis.greycat.default): ScoreDetails {
      return new ScoreDetails($g.abi.libs_by_name.get(patternslib.name)!.mapped[6], best_pattern, timespan);
    }
    static create(best_pattern: bigint | number, timespan: $sdk.std.core.duration, $g: $sdk.GreyCat = globalThis.greycat.default): ScoreDetails {
      return new ScoreDetails($g.abi.libs_by_name.get(patternslib.name)!.mapped[6], best_pattern, timespan);
    }
  }

  export class Detection extends $sdk.GCObject {
    static readonly _type = 'pattern_detectors::Detection';

    score: number;
    best_pattern: bigint | number;
    timespan: $sdk.std.core.duration;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        score: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        best_pattern: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        timespan: {
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

  }

  export class SaxPatternDetectionEngine extends $sdk.GCObject {
    static readonly _type = 'pattern_detectors::SaxPatternDetectionEngine';

    timeseries: $sdk.std.core.nodeTime;
    state: pattern_detectors.PatternDetectionEngineState | null;
    nullStrategy: pattern_detectors.PatternNullStrategy | null;
    nullReplaceConstant: number | null;
    samplingPolicy: pattern_detectors.SamplingPolicy | null;
    alphabet_size: bigint | number;
    alphabet_boundaries: globalThis.Array<number>;
    lookup_table: $sdk.std.core.nodeIndex;
    max_distance: number;
    pattern_fingerprints: globalThis.Array<string>;
    fingerprint_length: bigint | number;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        timeseries: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        state: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        nullStrategy: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        nullReplaceConstant: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        samplingPolicy: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[4]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[4]] = v;
          },
        },
        alphabet_size: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[5]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[5]] = v;
          },
        },
        alphabet_boundaries: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[6]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[6]] = v;
          },
        },
        lookup_table: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[7]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[7]] = v;
          },
        },
        max_distance: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[8]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[8]] = v;
          },
        },
        pattern_fingerprints: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[9]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[9]] = v;
          },
        },
        fingerprint_length: {
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

    static alphabet($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[8];
      return  t.static_values[0] as string;
    }
    static createFrom({timeseries, state, nullStrategy, nullReplaceConstant, samplingPolicy, alphabet_size, alphabet_boundaries, lookup_table, max_distance, pattern_fingerprints, fingerprint_length}: {timeseries: $sdk.std.core.nodeTime, state: pattern_detectors.PatternDetectionEngineState | null, nullStrategy: pattern_detectors.PatternNullStrategy | null, nullReplaceConstant: number | null, samplingPolicy: pattern_detectors.SamplingPolicy | null, alphabet_size: bigint | number, alphabet_boundaries: globalThis.Array<number>, lookup_table: $sdk.std.core.nodeIndex, max_distance: number, pattern_fingerprints: globalThis.Array<string>, fingerprint_length: bigint | number}, $g: $sdk.GreyCat = globalThis.greycat.default): SaxPatternDetectionEngine {
      return new SaxPatternDetectionEngine($g.abi.libs_by_name.get(patternslib.name)!.mapped[8], timeseries, state, nullStrategy, nullReplaceConstant, samplingPolicy, alphabet_size, alphabet_boundaries, lookup_table, max_distance, pattern_fingerprints, fingerprint_length);
    }
    static create(timeseries: $sdk.std.core.nodeTime, state: pattern_detectors.PatternDetectionEngineState | null, nullStrategy: pattern_detectors.PatternNullStrategy | null, nullReplaceConstant: number | null, samplingPolicy: pattern_detectors.SamplingPolicy | null, alphabet_size: bigint | number, alphabet_boundaries: globalThis.Array<number>, lookup_table: $sdk.std.core.nodeIndex, max_distance: number, pattern_fingerprints: globalThis.Array<string>, fingerprint_length: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default): SaxPatternDetectionEngine {
      return new SaxPatternDetectionEngine($g.abi.libs_by_name.get(patternslib.name)!.mapped[8], timeseries, state, nullStrategy, nullReplaceConstant, samplingPolicy, alphabet_size, alphabet_boundaries, lookup_table, max_distance, pattern_fingerprints, fingerprint_length);
    }
  }

  export class PatternNullStrategy extends $sdk.GCEnum {
    static readonly _type = 'pattern_detectors::PatternNullStrategy';

    constructor(type: $sdk.AbiType, offset: number, public key: PatternNullStrategy.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static replace($g: $sdk.GreyCat = globalThis.greycat.default): PatternNullStrategy {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[9];
      return t.enum_values![t.generated_offsets[0]];
    }
    static interpolate($g: $sdk.GreyCat = globalThis.greycat.default): PatternNullStrategy {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[9];
      return t.enum_values![t.generated_offsets[1]];
    }
    static previous($g: $sdk.GreyCat = globalThis.greycat.default): PatternNullStrategy {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[9];
      return t.enum_values![t.generated_offsets[2]];
    }
    static next($g: $sdk.GreyCat = globalThis.greycat.default): PatternNullStrategy {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[9];
      return t.enum_values![t.generated_offsets[3]];
    }
    static none($g: $sdk.GreyCat = globalThis.greycat.default): PatternNullStrategy {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[9];
      return t.enum_values![t.generated_offsets[4]];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): PatternNullStrategy[] {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[9];
      return t.enum_values!;
    }
  }

  export namespace PatternNullStrategy  {
    export type Field = 'replace'|'interpolate'|'previous'|'next'|'none';
  }
  export class PatternDetectionEngineState extends $sdk.GCObject {
    static readonly _type = 'pattern_detectors::PatternDetectionEngineState';

    hasScores: boolean;
    hasDetections: boolean;
    patterns: globalThis.Array<$sdk.std.util.TimeWindow>;
    scores: $sdk.std.core.nodeList;
    detections: $sdk.std.core.nodeTime;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        hasScores: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        hasDetections: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        patterns: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        scores: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        detections: {
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

    static createFrom({hasScores, hasDetections, patterns, scores, detections}: {hasScores: boolean, hasDetections: boolean, patterns: globalThis.Array<$sdk.std.util.TimeWindow>, scores: $sdk.std.core.nodeList, detections: $sdk.std.core.nodeTime}, $g: $sdk.GreyCat = globalThis.greycat.default): PatternDetectionEngineState {
      return new PatternDetectionEngineState($g.abi.libs_by_name.get(patternslib.name)!.mapped[10], hasScores, hasDetections, patterns, scores, detections);
    }
    static create(hasScores: boolean, hasDetections: boolean, patterns: globalThis.Array<$sdk.std.util.TimeWindow>, scores: $sdk.std.core.nodeList, detections: $sdk.std.core.nodeTime, $g: $sdk.GreyCat = globalThis.greycat.default): PatternDetectionEngineState {
      return new PatternDetectionEngineState($g.abi.libs_by_name.get(patternslib.name)!.mapped[10], hasScores, hasDetections, patterns, scores, detections);
    }
  }

  export class MatchingNormalisation extends $sdk.GCEnum {
    static readonly _type = 'pattern_detectors::MatchingNormalisation';

    constructor(type: $sdk.AbiType, offset: number, public key: MatchingNormalisation.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static as_is($g: $sdk.GreyCat = globalThis.greycat.default): MatchingNormalisation {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[11];
      return t.enum_values![t.generated_offsets[0]];
    }
    static shift($g: $sdk.GreyCat = globalThis.greycat.default): MatchingNormalisation {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[11];
      return t.enum_values![t.generated_offsets[1]];
    }
    static scaling($g: $sdk.GreyCat = globalThis.greycat.default): MatchingNormalisation {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[11];
      return t.enum_values![t.generated_offsets[2]];
    }
    static shift_and_scaling($g: $sdk.GreyCat = globalThis.greycat.default): MatchingNormalisation {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[11];
      return t.enum_values![t.generated_offsets[3]];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): MatchingNormalisation[] {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[11];
      return t.enum_values!;
    }
  }

  export namespace MatchingNormalisation  {
    export type Field = 'as_is'|'shift'|'scaling'|'shift_and_scaling';
  }
  export class PatternDetector extends $sdk.GCObject {
    static readonly _type = 'pattern_detectors::PatternDetector';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

  }

  export class OverlappingDetection extends $sdk.GCObject {
    static readonly _type = 'pattern_detectors::OverlappingDetection';

    score: number;
    best_pattern: bigint | number;
    timespan: $sdk.std.core.duration;
    overlap: $sdk.std.core.duration;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        score: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        best_pattern: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        timespan: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        overlap: {
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

    static createFrom({score, best_pattern, timespan, overlap}: {score: number, best_pattern: bigint | number, timespan: $sdk.std.core.duration, overlap: $sdk.std.core.duration}, $g: $sdk.GreyCat = globalThis.greycat.default): OverlappingDetection {
      return new OverlappingDetection($g.abi.libs_by_name.get(patternslib.name)!.mapped[13], score, best_pattern, timespan, overlap);
    }
    static create(score: number, best_pattern: bigint | number, timespan: $sdk.std.core.duration, overlap: $sdk.std.core.duration, $g: $sdk.GreyCat = globalThis.greycat.default): OverlappingDetection {
      return new OverlappingDetection($g.abi.libs_by_name.get(patternslib.name)!.mapped[13], score, best_pattern, timespan, overlap);
    }
  }

  export class RandomPatternDetector extends $sdk.GCObject {
    static readonly _type = 'pattern_detectors::RandomPatternDetector';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): RandomPatternDetector {
      return new RandomPatternDetector($g.abi.libs_by_name.get(patternslib.name)!.mapped[14]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): RandomPatternDetector {
      return new RandomPatternDetector($g.abi.libs_by_name.get(patternslib.name)!.mapped[14]);
    }
  }

  export class PatternDetectors extends $sdk.GCEnum {
    static readonly _type = 'pattern_detectors::PatternDetectors';

    constructor(type: $sdk.AbiType, offset: number, public key: PatternDetectors.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static none($g: $sdk.GreyCat = globalThis.greycat.default): PatternDetectors {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[15];
      return t.enum_values![t.generated_offsets[0]];
    }
    static euclidean($g: $sdk.GreyCat = globalThis.greycat.default): PatternDetectors {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[15];
      return t.enum_values![t.generated_offsets[1]];
    }
    static random($g: $sdk.GreyCat = globalThis.greycat.default): PatternDetectors {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[15];
      return t.enum_values![t.generated_offsets[2]];
    }
    static sax($g: $sdk.GreyCat = globalThis.greycat.default): PatternDetectors {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[15];
      return t.enum_values![t.generated_offsets[3]];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): PatternDetectors[] {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[15];
      return t.enum_values!;
    }
  }

  export namespace PatternDetectors  {
    export type Field = 'none'|'euclidean'|'random'|'sax';
  }
  export class PatternDetectionEngine extends $sdk.GCObject {
    static readonly _type = 'pattern_detectors::PatternDetectionEngine';

    timeseries: $sdk.std.core.nodeTime;
    state: pattern_detectors.PatternDetectionEngineState | null;
    nullStrategy: pattern_detectors.PatternNullStrategy | null;
    nullReplaceConstant: number | null;
    samplingPolicy: pattern_detectors.SamplingPolicy | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        timeseries: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        state: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        nullStrategy: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        nullReplaceConstant: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        samplingPolicy: {
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

  }

  export class RandomPatternDetectionEngine extends $sdk.GCObject {
    static readonly _type = 'pattern_detectors::RandomPatternDetectionEngine';

    timeseries: $sdk.std.core.nodeTime;
    state: pattern_detectors.PatternDetectionEngineState | null;
    nullStrategy: pattern_detectors.PatternNullStrategy | null;
    nullReplaceConstant: number | null;
    samplingPolicy: pattern_detectors.SamplingPolicy | null;
    rng: $sdk.std.util.Random;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        timeseries: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        state: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        nullStrategy: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        nullReplaceConstant: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        samplingPolicy: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[4]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[4]] = v;
          },
        },
        rng: {
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

    static createFrom({timeseries, state, nullStrategy, nullReplaceConstant, samplingPolicy, rng}: {timeseries: $sdk.std.core.nodeTime, state: pattern_detectors.PatternDetectionEngineState | null, nullStrategy: pattern_detectors.PatternNullStrategy | null, nullReplaceConstant: number | null, samplingPolicy: pattern_detectors.SamplingPolicy | null, rng: $sdk.std.util.Random}, $g: $sdk.GreyCat = globalThis.greycat.default): RandomPatternDetectionEngine {
      return new RandomPatternDetectionEngine($g.abi.libs_by_name.get(patternslib.name)!.mapped[17], timeseries, state, nullStrategy, nullReplaceConstant, samplingPolicy, rng);
    }
    static create(timeseries: $sdk.std.core.nodeTime, state: pattern_detectors.PatternDetectionEngineState | null, nullStrategy: pattern_detectors.PatternNullStrategy | null, nullReplaceConstant: number | null, samplingPolicy: pattern_detectors.SamplingPolicy | null, rng: $sdk.std.util.Random, $g: $sdk.GreyCat = globalThis.greycat.default): RandomPatternDetectionEngine {
      return new RandomPatternDetectionEngine($g.abi.libs_by_name.get(patternslib.name)!.mapped[17], timeseries, state, nullStrategy, nullReplaceConstant, samplingPolicy, rng);
    }
  }

}

export namespace chocolate {
}

export const patternslib: $sdk.Library = {
  name: 'patterns',
  mapped: [],
  configure(loaders, factories) {
    factories.set(pattern_detectors.ScoreDetailsSingleton._type, pattern_detectors.ScoreDetailsSingleton);
    factories.set(pattern_detectors.EuclideanPatternDetector._type, pattern_detectors.EuclideanPatternDetector);
    factories.set(pattern_detectors.SamplingPolicy._type, pattern_detectors.SamplingPolicy);
    factories.set(pattern_detectors.EuclideanPatternDetectionEngine._type, pattern_detectors.EuclideanPatternDetectionEngine);
    factories.set(pattern_detectors.PatternDetectionSensitivity._type, pattern_detectors.PatternDetectionSensitivity);
    factories.set(pattern_detectors.SaxPatternDetector._type, pattern_detectors.SaxPatternDetector);
    factories.set(pattern_detectors.ScoreDetails._type, pattern_detectors.ScoreDetails);
    factories.set(pattern_detectors.Detection._type, pattern_detectors.Detection);
    factories.set(pattern_detectors.SaxPatternDetectionEngine._type, pattern_detectors.SaxPatternDetectionEngine);
    factories.set(pattern_detectors.PatternNullStrategy._type, pattern_detectors.PatternNullStrategy);
    factories.set(pattern_detectors.PatternDetectionEngineState._type, pattern_detectors.PatternDetectionEngineState);
    factories.set(pattern_detectors.MatchingNormalisation._type, pattern_detectors.MatchingNormalisation);
    factories.set(pattern_detectors.PatternDetector._type, pattern_detectors.PatternDetector);
    factories.set(pattern_detectors.OverlappingDetection._type, pattern_detectors.OverlappingDetection);
    factories.set(pattern_detectors.RandomPatternDetector._type, pattern_detectors.RandomPatternDetector);
    factories.set(pattern_detectors.PatternDetectors._type, pattern_detectors.PatternDetectors);
    factories.set(pattern_detectors.PatternDetectionEngine._type, pattern_detectors.PatternDetectionEngine);
    factories.set(pattern_detectors.RandomPatternDetectionEngine._type, pattern_detectors.RandomPatternDetectionEngine);
  },
  init(abi) {
    this.mapped.length = 18;
    this.mapped[0] = abi.type_by_fqn.get(pattern_detectors.ScoreDetailsSingleton._type)!;
    this.mapped[0].resolveGeneratedOffsets('best_pattern','timespan','timestamp');
    this.mapped[1] = abi.type_by_fqn.get(pattern_detectors.EuclideanPatternDetector._type)!;
    this.mapped[2] = abi.type_by_fqn.get(pattern_detectors.SamplingPolicy._type)!;
    this.mapped[2].resolveGeneratedOffsetWithValues('as_is', "As-is",'average_frequency', "Average frequency",'highest_frequency', "Highest frequency");
    this.mapped[3] = abi.type_by_fqn.get(pattern_detectors.EuclideanPatternDetectionEngine._type)!;
    this.mapped[3].resolveGeneratedOffsets('timeseries','state','nullStrategy','nullReplaceConstant','samplingPolicy','std','matchingNormalisation');
    this.mapped[4] = abi.type_by_fqn.get(pattern_detectors.PatternDetectionSensitivity._type)!;
    this.mapped[4].resolveGeneratedOffsets('threshold','overlap');
    this.mapped[5] = abi.type_by_fqn.get(pattern_detectors.SaxPatternDetector._type)!;
    this.mapped[5].resolveGeneratedOffsets('alphabet_size','fingerprint_length');
    this.mapped[6] = abi.type_by_fqn.get(pattern_detectors.ScoreDetails._type)!;
    this.mapped[6].resolveGeneratedOffsets('best_pattern','timespan');
    this.mapped[7] = abi.type_by_fqn.get(pattern_detectors.Detection._type)!;
    this.mapped[7].resolveGeneratedOffsets('score','best_pattern','timespan');
    this.mapped[8] = abi.type_by_fqn.get(pattern_detectors.SaxPatternDetectionEngine._type)!;
    this.mapped[8].resolveGeneratedOffsets('timeseries','state','nullStrategy','nullReplaceConstant','samplingPolicy','alphabet_size','alphabet_boundaries','lookup_table','max_distance','pattern_fingerprints','fingerprint_length');
    this.mapped[8].static_values = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz"];
    this.mapped[9] = abi.type_by_fqn.get(pattern_detectors.PatternNullStrategy._type)!;
    this.mapped[9].resolveGeneratedOffsetWithValues('replace', "Replace",'interpolate', "Interpolate",'previous', "Previous",'next', "Next",'none', "None");
    this.mapped[10] = abi.type_by_fqn.get(pattern_detectors.PatternDetectionEngineState._type)!;
    this.mapped[10].resolveGeneratedOffsets('hasScores','hasDetections','patterns','scores','detections');
    this.mapped[11] = abi.type_by_fqn.get(pattern_detectors.MatchingNormalisation._type)!;
    this.mapped[11].resolveGeneratedOffsetWithValues('as_is', "As-is",'shift', "Vertical shift",'scaling', "Vertical scaling",'shift_and_scaling', "Vertical shift and scaling");
    this.mapped[12] = abi.type_by_fqn.get(pattern_detectors.PatternDetector._type)!;
    this.mapped[13] = abi.type_by_fqn.get(pattern_detectors.OverlappingDetection._type)!;
    this.mapped[13].resolveGeneratedOffsets('score','best_pattern','timespan','overlap');
    this.mapped[14] = abi.type_by_fqn.get(pattern_detectors.RandomPatternDetector._type)!;
    this.mapped[15] = abi.type_by_fqn.get(pattern_detectors.PatternDetectors._type)!;
    this.mapped[15].resolveGeneratedOffsetWithValues('none', "None",'euclidean', "Euclidean",'random', "Random",'sax', "SAX");
    this.mapped[16] = abi.type_by_fqn.get(pattern_detectors.PatternDetectionEngine._type)!;
    this.mapped[16].resolveGeneratedOffsets('timeseries','state','nullStrategy','nullReplaceConstant','samplingPolicy');
    this.mapped[17] = abi.type_by_fqn.get(pattern_detectors.RandomPatternDetectionEngine._type)!;
    this.mapped[17].resolveGeneratedOffsets('timeseries','state','nullStrategy','nullReplaceConstant','samplingPolicy','rng');
  },
};
