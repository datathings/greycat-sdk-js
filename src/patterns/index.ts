// AUTO-GENERATED FILE PLEASE DO NOT MODIFY MANUALLY
/* eslint-disable */
// @ts-nocheck

import * as $sdk from '../index.js';
import * as patterns_n from '../patterns_n/index.js';

export namespace pattern_detectors {
  export class PatternDetector extends $sdk.GCObject {
    static readonly _type = 'pattern_detectors::PatternDetector';


  }

  export class ScoreDetails extends $sdk.GCObject {
    static readonly _type = 'pattern_detectors::ScoreDetails';

    best_pattern: bigint | number;
    timespan: $sdk.std.core.duration;

    static createFrom({best_pattern, timespan}: {best_pattern: bigint | number, timespan: $sdk.std.core.duration}, $g: $sdk.GreyCat = globalThis.greycat.default): ScoreDetails {
      return new ScoreDetails($g.abi.libs_by_name.get(patternslib.name)!.mapped[1], best_pattern, timespan);
    }
    static create(best_pattern: bigint | number, timespan: $sdk.std.core.duration, $g: $sdk.GreyCat = globalThis.greycat.default): ScoreDetails {
      return new ScoreDetails($g.abi.libs_by_name.get(patternslib.name)!.mapped[1], best_pattern, timespan);
    }
  }

  export class Detection extends $sdk.GCObject {
    static readonly _type = 'pattern_detectors::Detection';

    score: number;
    best_pattern: bigint | number;
    timespan: $sdk.std.core.duration;

  }

  export class SaxPatternDetector extends $sdk.GCObject {
    static readonly _type = 'pattern_detectors::SaxPatternDetector';

    alphabet_size: bigint | number;
    fingerprint_length: bigint | number;

    static createFrom({alphabet_size, fingerprint_length}: {alphabet_size: bigint | number, fingerprint_length: bigint | number}, $g: $sdk.GreyCat = globalThis.greycat.default): SaxPatternDetector {
      return new SaxPatternDetector($g.abi.libs_by_name.get(patternslib.name)!.mapped[3], alphabet_size, fingerprint_length);
    }
    static create(alphabet_size: bigint | number, fingerprint_length: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default): SaxPatternDetector {
      return new SaxPatternDetector($g.abi.libs_by_name.get(patternslib.name)!.mapped[3], alphabet_size, fingerprint_length);
    }
  }

  export class ScoreDetailsSingleton extends $sdk.GCObject {
    static readonly _type = 'pattern_detectors::ScoreDetailsSingleton';

    best_pattern: bigint | number;
    timespan: $sdk.std.core.duration;
    timestamp: $sdk.std.core.time;

    static createFrom({best_pattern, timespan, timestamp}: {best_pattern: bigint | number, timespan: $sdk.std.core.duration, timestamp: $sdk.std.core.time}, $g: $sdk.GreyCat = globalThis.greycat.default): ScoreDetailsSingleton {
      return new ScoreDetailsSingleton($g.abi.libs_by_name.get(patternslib.name)!.mapped[4], best_pattern, timespan, timestamp);
    }
    static create(best_pattern: bigint | number, timespan: $sdk.std.core.duration, timestamp: $sdk.std.core.time, $g: $sdk.GreyCat = globalThis.greycat.default): ScoreDetailsSingleton {
      return new ScoreDetailsSingleton($g.abi.libs_by_name.get(patternslib.name)!.mapped[4], best_pattern, timespan, timestamp);
    }
  }

  export class EuclideanPatternDetector extends $sdk.GCObject {
    static readonly _type = 'pattern_detectors::EuclideanPatternDetector';


    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): EuclideanPatternDetector {
      return new EuclideanPatternDetector($g.abi.libs_by_name.get(patternslib.name)!.mapped[5]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): EuclideanPatternDetector {
      return new EuclideanPatternDetector($g.abi.libs_by_name.get(patternslib.name)!.mapped[5]);
    }
  }

  export class PatternDetectionEngineState extends $sdk.GCObject {
    static readonly _type = 'pattern_detectors::PatternDetectionEngineState';

    hasScores: boolean;
    hasDetections: boolean;
    patterns: globalThis.Array<$sdk.std.util.TimeWindow>;
    scores: $sdk.std.core.nodeList;
    detections: $sdk.std.core.nodeTime;

    static createFrom({hasScores, hasDetections, patterns, scores, detections}: {hasScores: boolean, hasDetections: boolean, patterns: globalThis.Array<$sdk.std.util.TimeWindow>, scores: $sdk.std.core.nodeList, detections: $sdk.std.core.nodeTime}, $g: $sdk.GreyCat = globalThis.greycat.default): PatternDetectionEngineState {
      return new PatternDetectionEngineState($g.abi.libs_by_name.get(patternslib.name)!.mapped[6], hasScores, hasDetections, patterns, scores, detections);
    }
    static create(hasScores: boolean, hasDetections: boolean, patterns: globalThis.Array<$sdk.std.util.TimeWindow>, scores: $sdk.std.core.nodeList, detections: $sdk.std.core.nodeTime, $g: $sdk.GreyCat = globalThis.greycat.default): PatternDetectionEngineState {
      return new PatternDetectionEngineState($g.abi.libs_by_name.get(patternslib.name)!.mapped[6], hasScores, hasDetections, patterns, scores, detections);
    }
  }

  export class EuclideanPatternDetectionEngine extends $sdk.GCObject {
    static readonly _type = 'pattern_detectors::EuclideanPatternDetectionEngine';

    timeseries: $sdk.std.core.nodeTime;
    state: pattern_detectors.PatternDetectionEngineState | null;
    nullStrategy: pattern_detectors.PatternNullStrategy | null;
    nullReplaceConstant: number | null;
    samplingPolicy: pattern_detectors.SamplingPolicy | null;
    pattern_tensors: globalThis.Array<$sdk.std.core.Tensor> | null;
    window_tensors: globalThis.Array<$sdk.std.core.Tensor> | null;
    std: number | null;
    matchingNormalisation: pattern_detectors.MatchingNormalisation | null;

    static createFrom({timeseries, state, nullStrategy, nullReplaceConstant, samplingPolicy, pattern_tensors, window_tensors, std, matchingNormalisation}: {timeseries: $sdk.std.core.nodeTime, state: pattern_detectors.PatternDetectionEngineState | null, nullStrategy: pattern_detectors.PatternNullStrategy | null, nullReplaceConstant: number | null, samplingPolicy: pattern_detectors.SamplingPolicy | null, pattern_tensors: globalThis.Array<$sdk.std.core.Tensor> | null, window_tensors: globalThis.Array<$sdk.std.core.Tensor> | null, std: number | null, matchingNormalisation: pattern_detectors.MatchingNormalisation | null}, $g: $sdk.GreyCat = globalThis.greycat.default): EuclideanPatternDetectionEngine {
      return new EuclideanPatternDetectionEngine($g.abi.libs_by_name.get(patternslib.name)!.mapped[7], timeseries, state, nullStrategy, nullReplaceConstant, samplingPolicy, pattern_tensors, window_tensors, std, matchingNormalisation);
    }
    static create(timeseries: $sdk.std.core.nodeTime, state: pattern_detectors.PatternDetectionEngineState | null, nullStrategy: pattern_detectors.PatternNullStrategy | null, nullReplaceConstant: number | null, samplingPolicy: pattern_detectors.SamplingPolicy | null, pattern_tensors: globalThis.Array<$sdk.std.core.Tensor> | null, window_tensors: globalThis.Array<$sdk.std.core.Tensor> | null, std: number | null, matchingNormalisation: pattern_detectors.MatchingNormalisation | null, $g: $sdk.GreyCat = globalThis.greycat.default): EuclideanPatternDetectionEngine {
      return new EuclideanPatternDetectionEngine($g.abi.libs_by_name.get(patternslib.name)!.mapped[7], timeseries, state, nullStrategy, nullReplaceConstant, samplingPolicy, pattern_tensors, window_tensors, std, matchingNormalisation);
    }
  }

  export class RandomPatternDetector extends $sdk.GCObject {
    static readonly _type = 'pattern_detectors::RandomPatternDetector';


    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): RandomPatternDetector {
      return new RandomPatternDetector($g.abi.libs_by_name.get(patternslib.name)!.mapped[8]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): RandomPatternDetector {
      return new RandomPatternDetector($g.abi.libs_by_name.get(patternslib.name)!.mapped[8]);
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

    static createFrom({timeseries, state, nullStrategy, nullReplaceConstant, samplingPolicy, rng}: {timeseries: $sdk.std.core.nodeTime, state: pattern_detectors.PatternDetectionEngineState | null, nullStrategy: pattern_detectors.PatternNullStrategy | null, nullReplaceConstant: number | null, samplingPolicy: pattern_detectors.SamplingPolicy | null, rng: $sdk.std.util.Random}, $g: $sdk.GreyCat = globalThis.greycat.default): RandomPatternDetectionEngine {
      return new RandomPatternDetectionEngine($g.abi.libs_by_name.get(patternslib.name)!.mapped[9], timeseries, state, nullStrategy, nullReplaceConstant, samplingPolicy, rng);
    }
    static create(timeseries: $sdk.std.core.nodeTime, state: pattern_detectors.PatternDetectionEngineState | null, nullStrategy: pattern_detectors.PatternNullStrategy | null, nullReplaceConstant: number | null, samplingPolicy: pattern_detectors.SamplingPolicy | null, rng: $sdk.std.util.Random, $g: $sdk.GreyCat = globalThis.greycat.default): RandomPatternDetectionEngine {
      return new RandomPatternDetectionEngine($g.abi.libs_by_name.get(patternslib.name)!.mapped[9], timeseries, state, nullStrategy, nullReplaceConstant, samplingPolicy, rng);
    }
  }

  export class PatternDetectionEngine extends $sdk.GCObject {
    static readonly _type = 'pattern_detectors::PatternDetectionEngine';

    timeseries: $sdk.std.core.nodeTime;
    state: pattern_detectors.PatternDetectionEngineState | null;
    nullStrategy: pattern_detectors.PatternNullStrategy | null;
    nullReplaceConstant: number | null;
    samplingPolicy: pattern_detectors.SamplingPolicy | null;

  }

  export class DTWPatternDetectionEngine extends $sdk.GCObject {
    static readonly _type = 'pattern_detectors::DTWPatternDetectionEngine';

    timeseries: $sdk.std.core.nodeTime;
    state: pattern_detectors.PatternDetectionEngineState | null;
    nullStrategy: pattern_detectors.PatternNullStrategy | null;
    nullReplaceConstant: number | null;
    samplingPolicy: pattern_detectors.SamplingPolicy | null;
    std: number | null;
    matchingNormalisation: pattern_detectors.MatchingNormalisation | null;

    static createFrom({timeseries, state, nullStrategy, nullReplaceConstant, samplingPolicy, std, matchingNormalisation}: {timeseries: $sdk.std.core.nodeTime, state: pattern_detectors.PatternDetectionEngineState | null, nullStrategy: pattern_detectors.PatternNullStrategy | null, nullReplaceConstant: number | null, samplingPolicy: pattern_detectors.SamplingPolicy | null, std: number | null, matchingNormalisation: pattern_detectors.MatchingNormalisation | null}, $g: $sdk.GreyCat = globalThis.greycat.default): DTWPatternDetectionEngine {
      return new DTWPatternDetectionEngine($g.abi.libs_by_name.get(patternslib.name)!.mapped[11], timeseries, state, nullStrategy, nullReplaceConstant, samplingPolicy, std, matchingNormalisation);
    }
    static create(timeseries: $sdk.std.core.nodeTime, state: pattern_detectors.PatternDetectionEngineState | null, nullStrategy: pattern_detectors.PatternNullStrategy | null, nullReplaceConstant: number | null, samplingPolicy: pattern_detectors.SamplingPolicy | null, std: number | null, matchingNormalisation: pattern_detectors.MatchingNormalisation | null, $g: $sdk.GreyCat = globalThis.greycat.default): DTWPatternDetectionEngine {
      return new DTWPatternDetectionEngine($g.abi.libs_by_name.get(patternslib.name)!.mapped[11], timeseries, state, nullStrategy, nullReplaceConstant, samplingPolicy, std, matchingNormalisation);
    }
  }

  export class PatternNullStrategy extends $sdk.GCEnum {
    static readonly _type = 'pattern_detectors::PatternNullStrategy';

    constructor(type: $sdk.AbiType, offset: number, public key: PatternNullStrategy.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static replace($g: $sdk.GreyCat = globalThis.greycat.default): PatternNullStrategy {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[12];
      return t.static_values['replace'];
    }
    static interpolate($g: $sdk.GreyCat = globalThis.greycat.default): PatternNullStrategy {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[12];
      return t.static_values['interpolate'];
    }
    static previous($g: $sdk.GreyCat = globalThis.greycat.default): PatternNullStrategy {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[12];
      return t.static_values['previous'];
    }
    static next($g: $sdk.GreyCat = globalThis.greycat.default): PatternNullStrategy {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[12];
      return t.static_values['next'];
    }
    static none($g: $sdk.GreyCat = globalThis.greycat.default): PatternNullStrategy {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[12];
      return t.static_values['none'];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): PatternNullStrategy[] {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[12];
      return t.enum_values!;
    }
  }

  export namespace PatternNullStrategy  {
    export type Field = 'replace'|'interpolate'|'previous'|'next'|'none';
  }
  export class OverlappingDetection extends $sdk.GCObject {
    static readonly _type = 'pattern_detectors::OverlappingDetection';

    score: number;
    best_pattern: bigint | number;
    timespan: $sdk.std.core.duration;
    overlap: $sdk.std.core.duration;

    static createFrom({score, best_pattern, timespan, overlap}: {score: number, best_pattern: bigint | number, timespan: $sdk.std.core.duration, overlap: $sdk.std.core.duration}, $g: $sdk.GreyCat = globalThis.greycat.default): OverlappingDetection {
      return new OverlappingDetection($g.abi.libs_by_name.get(patternslib.name)!.mapped[13], score, best_pattern, timespan, overlap);
    }
    static create(score: number, best_pattern: bigint | number, timespan: $sdk.std.core.duration, overlap: $sdk.std.core.duration, $g: $sdk.GreyCat = globalThis.greycat.default): OverlappingDetection {
      return new OverlappingDetection($g.abi.libs_by_name.get(patternslib.name)!.mapped[13], score, best_pattern, timespan, overlap);
    }
  }

  export class PatternDetectors extends $sdk.GCEnum {
    static readonly _type = 'pattern_detectors::PatternDetectors';

    constructor(type: $sdk.AbiType, offset: number, public key: PatternDetectors.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static none($g: $sdk.GreyCat = globalThis.greycat.default): PatternDetectors {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[14];
      return t.static_values['none'];
    }
    static euclidean($g: $sdk.GreyCat = globalThis.greycat.default): PatternDetectors {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[14];
      return t.static_values['euclidean'];
    }
    static dtw($g: $sdk.GreyCat = globalThis.greycat.default): PatternDetectors {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[14];
      return t.static_values['dtw'];
    }
    static random($g: $sdk.GreyCat = globalThis.greycat.default): PatternDetectors {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[14];
      return t.static_values['random'];
    }
    static sax($g: $sdk.GreyCat = globalThis.greycat.default): PatternDetectors {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[14];
      return t.static_values['sax'];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): PatternDetectors[] {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[14];
      return t.enum_values!;
    }
  }

  export namespace PatternDetectors  {
    export type Field = 'none'|'euclidean'|'dtw'|'random'|'sax';
  }
  export class MatchingNormalisation extends $sdk.GCEnum {
    static readonly _type = 'pattern_detectors::MatchingNormalisation';

    constructor(type: $sdk.AbiType, offset: number, public key: MatchingNormalisation.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static as_is($g: $sdk.GreyCat = globalThis.greycat.default): MatchingNormalisation {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[15];
      return t.static_values['as_is'];
    }
    static shift($g: $sdk.GreyCat = globalThis.greycat.default): MatchingNormalisation {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[15];
      return t.static_values['shift'];
    }
    static scaling($g: $sdk.GreyCat = globalThis.greycat.default): MatchingNormalisation {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[15];
      return t.static_values['scaling'];
    }
    static shift_and_scaling($g: $sdk.GreyCat = globalThis.greycat.default): MatchingNormalisation {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[15];
      return t.static_values['shift_and_scaling'];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): MatchingNormalisation[] {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[15];
      return t.enum_values!;
    }
  }

  export namespace MatchingNormalisation  {
    export type Field = 'as_is'|'shift'|'scaling'|'shift_and_scaling';
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

    static alphabet($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[16];
      return  t.static_values['alphabet'] as string;
    }
    static createFrom({timeseries, state, nullStrategy, nullReplaceConstant, samplingPolicy, alphabet_size, alphabet_boundaries, lookup_table, max_distance, pattern_fingerprints, fingerprint_length}: {timeseries: $sdk.std.core.nodeTime, state: pattern_detectors.PatternDetectionEngineState | null, nullStrategy: pattern_detectors.PatternNullStrategy | null, nullReplaceConstant: number | null, samplingPolicy: pattern_detectors.SamplingPolicy | null, alphabet_size: bigint | number, alphabet_boundaries: globalThis.Array<number>, lookup_table: $sdk.std.core.nodeIndex, max_distance: number, pattern_fingerprints: globalThis.Array<string>, fingerprint_length: bigint | number}, $g: $sdk.GreyCat = globalThis.greycat.default): SaxPatternDetectionEngine {
      return new SaxPatternDetectionEngine($g.abi.libs_by_name.get(patternslib.name)!.mapped[16], timeseries, state, nullStrategy, nullReplaceConstant, samplingPolicy, alphabet_size, alphabet_boundaries, lookup_table, max_distance, pattern_fingerprints, fingerprint_length);
    }
    static create(timeseries: $sdk.std.core.nodeTime, state: pattern_detectors.PatternDetectionEngineState | null, nullStrategy: pattern_detectors.PatternNullStrategy | null, nullReplaceConstant: number | null, samplingPolicy: pattern_detectors.SamplingPolicy | null, alphabet_size: bigint | number, alphabet_boundaries: globalThis.Array<number>, lookup_table: $sdk.std.core.nodeIndex, max_distance: number, pattern_fingerprints: globalThis.Array<string>, fingerprint_length: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default): SaxPatternDetectionEngine {
      return new SaxPatternDetectionEngine($g.abi.libs_by_name.get(patternslib.name)!.mapped[16], timeseries, state, nullStrategy, nullReplaceConstant, samplingPolicy, alphabet_size, alphabet_boundaries, lookup_table, max_distance, pattern_fingerprints, fingerprint_length);
    }
  }

  export class SamplingPolicy extends $sdk.GCEnum {
    static readonly _type = 'pattern_detectors::SamplingPolicy';

    constructor(type: $sdk.AbiType, offset: number, public key: SamplingPolicy.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static as_is($g: $sdk.GreyCat = globalThis.greycat.default): SamplingPolicy {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[17];
      return t.static_values['as_is'];
    }
    static average_frequency($g: $sdk.GreyCat = globalThis.greycat.default): SamplingPolicy {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[17];
      return t.static_values['average_frequency'];
    }
    static highest_frequency($g: $sdk.GreyCat = globalThis.greycat.default): SamplingPolicy {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[17];
      return t.static_values['highest_frequency'];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): SamplingPolicy[] {
      const t = $g.abi.libs_by_name.get(patternslib.name)!.mapped[17];
      return t.enum_values!;
    }
  }

  export namespace SamplingPolicy  {
    export type Field = 'as_is'|'average_frequency'|'highest_frequency';
  }
  export class PatternDetectionSensitivity extends $sdk.GCObject {
    static readonly _type = 'pattern_detectors::PatternDetectionSensitivity';

    threshold: number;
    overlap: number;

    static createFrom({threshold, overlap}: {threshold: number, overlap: number}, $g: $sdk.GreyCat = globalThis.greycat.default): PatternDetectionSensitivity {
      return new PatternDetectionSensitivity($g.abi.libs_by_name.get(patternslib.name)!.mapped[18], threshold, overlap);
    }
    static create(threshold: number, overlap: number, $g: $sdk.GreyCat = globalThis.greycat.default): PatternDetectionSensitivity {
      return new PatternDetectionSensitivity($g.abi.libs_by_name.get(patternslib.name)!.mapped[18], threshold, overlap);
    }
  }

  export class DTWPatternDetector extends $sdk.GCObject {
    static readonly _type = 'pattern_detectors::DTWPatternDetector';


    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): DTWPatternDetector {
      return new DTWPatternDetector($g.abi.libs_by_name.get(patternslib.name)!.mapped[19]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): DTWPatternDetector {
      return new DTWPatternDetector($g.abi.libs_by_name.get(patternslib.name)!.mapped[19]);
    }
  }

}

export namespace chocolate {
}

export const patternslib: $sdk.Library = {
  name: 'patterns',
  mapped: new globalThis.Array(20),
  configure(loaders, factories) {
    factories.set(pattern_detectors.PatternDetector._type, pattern_detectors.PatternDetector);
    factories.set(pattern_detectors.ScoreDetails._type, pattern_detectors.ScoreDetails);
    factories.set(pattern_detectors.Detection._type, pattern_detectors.Detection);
    factories.set(pattern_detectors.SaxPatternDetector._type, pattern_detectors.SaxPatternDetector);
    factories.set(pattern_detectors.ScoreDetailsSingleton._type, pattern_detectors.ScoreDetailsSingleton);
    factories.set(pattern_detectors.EuclideanPatternDetector._type, pattern_detectors.EuclideanPatternDetector);
    factories.set(pattern_detectors.PatternDetectionEngineState._type, pattern_detectors.PatternDetectionEngineState);
    factories.set(pattern_detectors.EuclideanPatternDetectionEngine._type, pattern_detectors.EuclideanPatternDetectionEngine);
    factories.set(pattern_detectors.RandomPatternDetector._type, pattern_detectors.RandomPatternDetector);
    factories.set(pattern_detectors.RandomPatternDetectionEngine._type, pattern_detectors.RandomPatternDetectionEngine);
    factories.set(pattern_detectors.PatternDetectionEngine._type, pattern_detectors.PatternDetectionEngine);
    factories.set(pattern_detectors.DTWPatternDetectionEngine._type, pattern_detectors.DTWPatternDetectionEngine);
    factories.set(pattern_detectors.PatternNullStrategy._type, pattern_detectors.PatternNullStrategy);
    factories.set(pattern_detectors.OverlappingDetection._type, pattern_detectors.OverlappingDetection);
    factories.set(pattern_detectors.PatternDetectors._type, pattern_detectors.PatternDetectors);
    factories.set(pattern_detectors.MatchingNormalisation._type, pattern_detectors.MatchingNormalisation);
    factories.set(pattern_detectors.SaxPatternDetectionEngine._type, pattern_detectors.SaxPatternDetectionEngine);
    factories.set(pattern_detectors.SamplingPolicy._type, pattern_detectors.SamplingPolicy);
    factories.set(pattern_detectors.PatternDetectionSensitivity._type, pattern_detectors.PatternDetectionSensitivity);
    factories.set(pattern_detectors.DTWPatternDetector._type, pattern_detectors.DTWPatternDetector);
  },
  init(abi) {
    this.mapped[0] = abi.type_by_fqn.get(pattern_detectors.PatternDetector._type);
    this.mapped[1] = abi.type_by_fqn.get(pattern_detectors.ScoreDetails._type);
    this.mapped[2] = abi.type_by_fqn.get(pattern_detectors.Detection._type);
    this.mapped[3] = abi.type_by_fqn.get(pattern_detectors.SaxPatternDetector._type);
    this.mapped[4] = abi.type_by_fqn.get(pattern_detectors.ScoreDetailsSingleton._type);
    this.mapped[5] = abi.type_by_fqn.get(pattern_detectors.EuclideanPatternDetector._type);
    this.mapped[6] = abi.type_by_fqn.get(pattern_detectors.PatternDetectionEngineState._type);
    this.mapped[7] = abi.type_by_fqn.get(pattern_detectors.EuclideanPatternDetectionEngine._type);
    this.mapped[8] = abi.type_by_fqn.get(pattern_detectors.RandomPatternDetector._type);
    this.mapped[9] = abi.type_by_fqn.get(pattern_detectors.RandomPatternDetectionEngine._type);
    this.mapped[10] = abi.type_by_fqn.get(pattern_detectors.PatternDetectionEngine._type);
    this.mapped[11] = abi.type_by_fqn.get(pattern_detectors.DTWPatternDetectionEngine._type);
    this.mapped[12] = abi.type_by_fqn.get(pattern_detectors.PatternNullStrategy._type);
    this.mapped[12]?.resolveGeneratedOffsetWithValues('replace', "Replace",'interpolate', "Interpolate",'previous', "Previous",'next', "Next",'none', "None");
    this.mapped[13] = abi.type_by_fqn.get(pattern_detectors.OverlappingDetection._type);
    this.mapped[14] = abi.type_by_fqn.get(pattern_detectors.PatternDetectors._type);
    this.mapped[14]?.resolveGeneratedOffsetWithValues('none', "None",'euclidean', "Euclidean",'dtw', "dtw",'random', "Random",'sax', "SAX");
    this.mapped[15] = abi.type_by_fqn.get(pattern_detectors.MatchingNormalisation._type);
    this.mapped[15]?.resolveGeneratedOffsetWithValues('as_is', "As-is",'shift', "Vertical shift",'scaling', "Vertical scaling",'shift_and_scaling', "Vertical shift and scaling");
    this.mapped[16] = abi.type_by_fqn.get(pattern_detectors.SaxPatternDetectionEngine._type);
    if (this.mapped[16]) {
      this.mapped[16].static_values = {['alphabet']: "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz",};
    }
    this.mapped[17] = abi.type_by_fqn.get(pattern_detectors.SamplingPolicy._type);
    this.mapped[17]?.resolveGeneratedOffsetWithValues('as_is', "As-is",'average_frequency', "Average frequency",'highest_frequency', "Highest frequency");
    this.mapped[18] = abi.type_by_fqn.get(pattern_detectors.PatternDetectionSensitivity._type);
    this.mapped[19] = abi.type_by_fqn.get(pattern_detectors.DTWPatternDetector._type);
  },
};
