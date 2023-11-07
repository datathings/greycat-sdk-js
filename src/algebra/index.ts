// AUTO-GENERATED FILE PLEASE DO NOT MODIFY MANUALLY
/* eslint-disable */
// @ts-nocheck

import * as $sdk from '../index.js';
import * as algebra_n from '../algebra_n/index.js';

export namespace compute {
  export class ComputeLayerLossRegression extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeLayerLossRegression';

    name: string;
    reduction: compute.ComputeReduction | null;
    loss_type: compute.ComputeRegressionLoss;

    static createFrom({name, reduction, loss_type}: {name: string, reduction: compute.ComputeReduction | null, loss_type: compute.ComputeRegressionLoss}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerLossRegression {
      return new ComputeLayerLossRegression($g.abi.libs_by_name.get(algebralib.name)!.mapped[0], name, reduction, loss_type);
    }
    static create(name: string, reduction: compute.ComputeReduction | null, loss_type: compute.ComputeRegressionLoss, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerLossRegression {
      return new ComputeLayerLossRegression($g.abi.libs_by_name.get(algebralib.name)!.mapped[0], name, reduction, loss_type);
    }
  }

  export class ComputeOperationEuclidean extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationEuclidean';

    input: string;
    input2: string;
    output: string;

    static createFrom({input, input2, output}: {input: string, input2: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationEuclidean {
      return new ComputeOperationEuclidean($g.abi.libs_by_name.get(algebralib.name)!.mapped[1], input, input2, output);
    }
    static create(input: string, input2: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationEuclidean {
      return new ComputeOperationEuclidean($g.abi.libs_by_name.get(algebralib.name)!.mapped[1], input, input2, output);
    }
  }

  export class ComputeOperation1In1Out extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperation1In1Out';

    input: string;
    output: string;

  }

  export class ComputeOperationSoftplus extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationSoftplus';

    input: string;
    output: string;

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSoftplus {
      return new ComputeOperationSoftplus($g.abi.libs_by_name.get(algebralib.name)!.mapped[3], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSoftplus {
      return new ComputeOperationSoftplus($g.abi.libs_by_name.get(algebralib.name)!.mapped[3], input, output);
    }
  }

  export class ComputeInitializerUniform extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerUniform';

    min: number;
    max: number;

    static createFrom({min, max}: {min: number, max: number}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerUniform {
      return new ComputeInitializerUniform($g.abi.libs_by_name.get(algebralib.name)!.mapped[4], min, max);
    }
    static create(min: number, max: number, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerUniform {
      return new ComputeInitializerUniform($g.abi.libs_by_name.get(algebralib.name)!.mapped[4], min, max);
    }
  }

  export class ComputeInitializerUniformIn extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerUniformIn';


    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerUniformIn {
      return new ComputeInitializerUniformIn($g.abi.libs_by_name.get(algebralib.name)!.mapped[5]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerUniformIn {
      return new ComputeInitializerUniformIn($g.abi.libs_by_name.get(algebralib.name)!.mapped[5]);
    }
  }

  export class ComputeOperationAddBias extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationAddBias';

    input: string;
    input2: string;
    output: string;

    static createFrom({input, input2, output}: {input: string, input2: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAddBias {
      return new ComputeOperationAddBias($g.abi.libs_by_name.get(algebralib.name)!.mapped[6], input, input2, output);
    }
    static create(input: string, input2: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAddBias {
      return new ComputeOperationAddBias($g.abi.libs_by_name.get(algebralib.name)!.mapped[6], input, input2, output);
    }
  }

  export class ComputeOperationLogSoftmax extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationLogSoftmax';

    input: string;
    output: string;
    axis: bigint | number | null;

    static createFrom({input, output, axis}: {input: string, output: string, axis: bigint | number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationLogSoftmax {
      return new ComputeOperationLogSoftmax($g.abi.libs_by_name.get(algebralib.name)!.mapped[7], input, output, axis);
    }
    static create(input: string, output: string, axis: bigint | number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationLogSoftmax {
      return new ComputeOperationLogSoftmax($g.abi.libs_by_name.get(algebralib.name)!.mapped[7], input, output, axis);
    }
  }

  export class ComputeLayer extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeLayer';

    name: string;

  }

  export class ComputeInitializerNormalAvg extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerNormalAvg';


    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerNormalAvg {
      return new ComputeInitializerNormalAvg($g.abi.libs_by_name.get(algebralib.name)!.mapped[9]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerNormalAvg {
      return new ComputeInitializerNormalAvg($g.abi.libs_by_name.get(algebralib.name)!.mapped[9]);
    }
  }

  export class ComputeInitializerUniformAvg extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerUniformAvg';


    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerUniformAvg {
      return new ComputeInitializerUniformAvg($g.abi.libs_by_name.get(algebralib.name)!.mapped[10]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerUniformAvg {
      return new ComputeInitializerUniformAvg($g.abi.libs_by_name.get(algebralib.name)!.mapped[10]);
    }
  }

  export class ComputeOperationAsin extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationAsin';

    input: string;
    output: string;

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAsin {
      return new ComputeOperationAsin($g.abi.libs_by_name.get(algebralib.name)!.mapped[11], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAsin {
      return new ComputeOperationAsin($g.abi.libs_by_name.get(algebralib.name)!.mapped[11], input, output);
    }
  }

  export class ComputeOptimizerAdaGrad extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOptimizerAdaGrad';

    learning_rate: number | null;
    initial_accumulator: number | null;
    smooth_epsilon: number | null;

    static learning_rate_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[12];
      return  t.static_values['learning_rate_def'] as number;
    }
    static initial_accumulator_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[12];
      return  t.static_values['initial_accumulator_def'] as number;
    }
    static smooth_epsilon_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[12];
      return  t.static_values['smooth_epsilon_def'] as number;
    }
    static createFrom({learning_rate, initial_accumulator, smooth_epsilon}: {learning_rate: number | null, initial_accumulator: number | null, smooth_epsilon: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerAdaGrad {
      return new ComputeOptimizerAdaGrad($g.abi.libs_by_name.get(algebralib.name)!.mapped[12], learning_rate, initial_accumulator, smooth_epsilon);
    }
    static create(learning_rate: number | null, initial_accumulator: number | null, smooth_epsilon: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerAdaGrad {
      return new ComputeOptimizerAdaGrad($g.abi.libs_by_name.get(algebralib.name)!.mapped[12], learning_rate, initial_accumulator, smooth_epsilon);
    }
  }

  export class ComputeActivationExp extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeActivationExp';


    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationExp {
      return new ComputeActivationExp($g.abi.libs_by_name.get(algebralib.name)!.mapped[13]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationExp {
      return new ComputeActivationExp($g.abi.libs_by_name.get(algebralib.name)!.mapped[13]);
    }
  }

  export class ComputeLayerConfusion extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeLayerConfusion';

    name: string;
    nbClass: bigint | number;

    static var_computed_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[14];
      return  t.static_values['var_computed_name'] as string;
    }
    static var_expected_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[14];
      return  t.static_values['var_expected_name'] as string;
    }
    static var_confusion_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[14];
      return  t.static_values['var_confusion_name'] as string;
    }
    static createFrom({name, nbClass}: {name: string, nbClass: bigint | number}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerConfusion {
      return new ComputeLayerConfusion($g.abi.libs_by_name.get(algebralib.name)!.mapped[14], name, nbClass);
    }
    static create(name: string, nbClass: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerConfusion {
      return new ComputeLayerConfusion($g.abi.libs_by_name.get(algebralib.name)!.mapped[14], name, nbClass);
    }
  }

  export class ComputeVarOptimize extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeVarOptimize';

    name: string;
    type: $sdk.std.core.TensorType;
    shape: globalThis.Array<bigint | number>;
    l1: number;
    l2: number;
    init: compute.ComputeInitializer | null;

    static createFrom({name, type, shape, l1, l2, init}: {name: string, type: $sdk.std.core.TensorType, shape: globalThis.Array<bigint | number>, l1: number, l2: number, init: compute.ComputeInitializer | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeVarOptimize {
      return new ComputeVarOptimize($g.abi.libs_by_name.get(algebralib.name)!.mapped[15], name, type, shape, l1, l2, init);
    }
    static create(name: string, type: $sdk.std.core.TensorType, shape: globalThis.Array<bigint | number>, l1: number, l2: number, init: compute.ComputeInitializer | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeVarOptimize {
      return new ComputeVarOptimize($g.abi.libs_by_name.get(algebralib.name)!.mapped[15], name, type, shape, l1, l2, init);
    }
  }

  export class ComputeInitializerConstant extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerConstant';

    value: any;

    static createFrom({value}: {value: any}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerConstant {
      return new ComputeInitializerConstant($g.abi.libs_by_name.get(algebralib.name)!.mapped[16], value);
    }
    static create(value: any, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerConstant {
      return new ComputeInitializerConstant($g.abi.libs_by_name.get(algebralib.name)!.mapped[16], value);
    }
  }

  export class ComputeOperationSub extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationSub';

    input: string;
    input2: string;
    output: string;

    static createFrom({input, input2, output}: {input: string, input2: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSub {
      return new ComputeOperationSub($g.abi.libs_by_name.get(algebralib.name)!.mapped[17], input, input2, output);
    }
    static create(input: string, input2: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSub {
      return new ComputeOperationSub($g.abi.libs_by_name.get(algebralib.name)!.mapped[17], input, input2, output);
    }
  }

  export class ComputeOperationElu extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationElu';

    input: string;
    output: string;
    alpha: number | null;

    static alpha_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[18];
      return  t.static_values['alpha_def'] as number;
    }
    static createFrom({input, output, alpha}: {input: string, output: string, alpha: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationElu {
      return new ComputeOperationElu($g.abi.libs_by_name.get(algebralib.name)!.mapped[18], input, output, alpha);
    }
    static create(input: string, output: string, alpha: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationElu {
      return new ComputeOperationElu($g.abi.libs_by_name.get(algebralib.name)!.mapped[18], input, output, alpha);
    }
  }

  export class ComputeOperationMul extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationMul';

    input: string;
    input2: string;
    output: string;

    static createFrom({input, input2, output}: {input: string, input2: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationMul {
      return new ComputeOperationMul($g.abi.libs_by_name.get(algebralib.name)!.mapped[19], input, input2, output);
    }
    static create(input: string, input2: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationMul {
      return new ComputeOperationMul($g.abi.libs_by_name.get(algebralib.name)!.mapped[19], input, input2, output);
    }
  }

  export class ComputeOptimizerAdaMax extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOptimizerAdaMax';

    learning_rate: number | null;
    beta1: number | null;
    beta2: number | null;
    smooth_epsilon: number | null;

    static learning_rate_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[20];
      return  t.static_values['learning_rate_def'] as number;
    }
    static beta1_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[20];
      return  t.static_values['beta1_def'] as number;
    }
    static beta2_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[20];
      return  t.static_values['beta2_def'] as number;
    }
    static smooth_epsilon_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[20];
      return  t.static_values['smooth_epsilon_def'] as number;
    }
    static createFrom({learning_rate, beta1, beta2, smooth_epsilon}: {learning_rate: number | null, beta1: number | null, beta2: number | null, smooth_epsilon: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerAdaMax {
      return new ComputeOptimizerAdaMax($g.abi.libs_by_name.get(algebralib.name)!.mapped[20], learning_rate, beta1, beta2, smooth_epsilon);
    }
    static create(learning_rate: number | null, beta1: number | null, beta2: number | null, smooth_epsilon: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerAdaMax {
      return new ComputeOptimizerAdaMax($g.abi.libs_by_name.get(algebralib.name)!.mapped[20], learning_rate, beta1, beta2, smooth_epsilon);
    }
  }

  export class ComputeRegressionLoss extends $sdk.GCEnum {
    static readonly _type = 'compute::ComputeRegressionLoss';

    constructor(type: $sdk.AbiType, offset: number, public key: ComputeRegressionLoss.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static square($g: $sdk.GreyCat = globalThis.greycat.default): ComputeRegressionLoss {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[21];
      return t.static_values['square'];
    }
    static abs($g: $sdk.GreyCat = globalThis.greycat.default): ComputeRegressionLoss {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[21];
      return t.static_values['abs'];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): ComputeRegressionLoss[] {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[21];
      return t.enum_values!;
    }
  }

  export namespace ComputeRegressionLoss  {
    export type Field = 'square'|'abs';
  }
  export class ComputeOperationSoftSign extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationSoftSign';

    input: string;
    output: string;

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSoftSign {
      return new ComputeOperationSoftSign($g.abi.libs_by_name.get(algebralib.name)!.mapped[22], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSoftSign {
      return new ComputeOperationSoftSign($g.abi.libs_by_name.get(algebralib.name)!.mapped[22], input, output);
    }
  }

  export class ComputeOperationArg extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationArg';

    input: string;
    output: string;
    output2: string;

  }

  export class ComputeOperationAtanh extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationAtanh';

    input: string;
    output: string;

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAtanh {
      return new ComputeOperationAtanh($g.abi.libs_by_name.get(algebralib.name)!.mapped[24], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAtanh {
      return new ComputeOperationAtanh($g.abi.libs_by_name.get(algebralib.name)!.mapped[24], input, output);
    }
  }

  export class ComputeActivationElu extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeActivationElu';

    alpha: number | null;

    static alpha_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[25];
      return  t.static_values['alpha_def'] as number;
    }
    static createFrom({alpha}: {alpha: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationElu {
      return new ComputeActivationElu($g.abi.libs_by_name.get(algebralib.name)!.mapped[25], alpha);
    }
    static create(alpha: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationElu {
      return new ComputeActivationElu($g.abi.libs_by_name.get(algebralib.name)!.mapped[25], alpha);
    }
  }

  export class ComputeOperationSqrt extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationSqrt';

    input: string;
    output: string;

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSqrt {
      return new ComputeOperationSqrt($g.abi.libs_by_name.get(algebralib.name)!.mapped[26], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSqrt {
      return new ComputeOperationSqrt($g.abi.libs_by_name.get(algebralib.name)!.mapped[26], input, output);
    }
  }

  export class ComputeRegularizer extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeRegularizer';

    l1: number;
    l2: number;

    static createFrom({l1, l2}: {l1: number, l2: number}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeRegularizer {
      return new ComputeRegularizer($g.abi.libs_by_name.get(algebralib.name)!.mapped[27], l1, l2);
    }
    static create(l1: number, l2: number, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeRegularizer {
      return new ComputeRegularizer($g.abi.libs_by_name.get(algebralib.name)!.mapped[27], l1, l2);
    }
  }

  export class ComputeOperationSumIf extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationSumIf';

    input: string;
    ifCondition: string;
    output: string;
    counts: string;
    classes: bigint | number;

    static createFrom({input, ifCondition, output, counts, classes}: {input: string, ifCondition: string, output: string, counts: string, classes: bigint | number}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSumIf {
      return new ComputeOperationSumIf($g.abi.libs_by_name.get(algebralib.name)!.mapped[28], input, ifCondition, output, counts, classes);
    }
    static create(input: string, ifCondition: string, output: string, counts: string, classes: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSumIf {
      return new ComputeOperationSumIf($g.abi.libs_by_name.get(algebralib.name)!.mapped[28], input, ifCondition, output, counts, classes);
    }
  }

  export class ComputeLayerFilter extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeLayerFilter';

    name: string;
    type: $sdk.std.core.TensorType;
    inputs: bigint | number;
    outputs: bigint | number;
    maskValues: globalThis.Array<bigint | number>;

    static var_input_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[29];
      return  t.static_values['var_input_name'] as string;
    }
    static var_output_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[29];
      return  t.static_values['var_output_name'] as string;
    }
    static var_mask_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[29];
      return  t.static_values['var_mask_name'] as string;
    }
    static createFrom({name, type, inputs, outputs, maskValues}: {name: string, type: $sdk.std.core.TensorType, inputs: bigint | number, outputs: bigint | number, maskValues: globalThis.Array<bigint | number>}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerFilter {
      return new ComputeLayerFilter($g.abi.libs_by_name.get(algebralib.name)!.mapped[29], name, type, inputs, outputs, maskValues);
    }
    static create(name: string, type: $sdk.std.core.TensorType, inputs: bigint | number, outputs: bigint | number, maskValues: globalThis.Array<bigint | number>, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerFilter {
      return new ComputeLayerFilter($g.abi.libs_by_name.get(algebralib.name)!.mapped[29], name, type, inputs, outputs, maskValues);
    }
  }

  export class ComputeLayerClassification extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeLayerClassification';

    name: string;
    calculate_probabilities: boolean;
    from_logits: boolean;

    static var_input_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[30];
      return  t.static_values['var_input_name'] as string;
    }
    static var_predicted_classes_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[30];
      return  t.static_values['var_predicted_classes_name'] as string;
    }
    static var_probabilities_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[30];
      return  t.static_values['var_probabilities_name'] as string;
    }
    static createFrom({name, calculate_probabilities, from_logits}: {name: string, calculate_probabilities: boolean, from_logits: boolean}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerClassification {
      return new ComputeLayerClassification($g.abi.libs_by_name.get(algebralib.name)!.mapped[30], name, calculate_probabilities, from_logits);
    }
    static create(name: string, calculate_probabilities: boolean, from_logits: boolean, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerClassification {
      return new ComputeLayerClassification($g.abi.libs_by_name.get(algebralib.name)!.mapped[30], name, calculate_probabilities, from_logits);
    }
  }

  export class ComputeReduction extends $sdk.GCEnum {
    static readonly _type = 'compute::ComputeReduction';

    constructor(type: $sdk.AbiType, offset: number, public key: ComputeReduction.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static auto($g: $sdk.GreyCat = globalThis.greycat.default): ComputeReduction {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[31];
      return t.static_values['auto'];
    }
    static none($g: $sdk.GreyCat = globalThis.greycat.default): ComputeReduction {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[31];
      return t.static_values['none'];
    }
    static sum($g: $sdk.GreyCat = globalThis.greycat.default): ComputeReduction {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[31];
      return t.static_values['sum'];
    }
    static mean($g: $sdk.GreyCat = globalThis.greycat.default): ComputeReduction {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[31];
      return t.static_values['mean'];
    }
    static disabled($g: $sdk.GreyCat = globalThis.greycat.default): ComputeReduction {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[31];
      return t.static_values['disabled'];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): ComputeReduction[] {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[31];
      return t.enum_values!;
    }
  }

  export namespace ComputeReduction  {
    export type Field = 'auto'|'none'|'sum'|'mean'|'disabled';
  }
  export class ComputeOptimizerRmsProp extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOptimizerRmsProp';

    learning_rate: number | null;
    decay_rate: number | null;
    smooth_epsilon: number | null;

    static learning_rate_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[32];
      return  t.static_values['learning_rate_def'] as number;
    }
    static decay_rate_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[32];
      return  t.static_values['decay_rate_def'] as number;
    }
    static smooth_epsilon_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[32];
      return  t.static_values['smooth_epsilon_def'] as number;
    }
    static createFrom({learning_rate, decay_rate, smooth_epsilon}: {learning_rate: number | null, decay_rate: number | null, smooth_epsilon: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerRmsProp {
      return new ComputeOptimizerRmsProp($g.abi.libs_by_name.get(algebralib.name)!.mapped[32], learning_rate, decay_rate, smooth_epsilon);
    }
    static create(learning_rate: number | null, decay_rate: number | null, smooth_epsilon: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerRmsProp {
      return new ComputeOptimizerRmsProp($g.abi.libs_by_name.get(algebralib.name)!.mapped[32], learning_rate, decay_rate, smooth_epsilon);
    }
  }

  export class ComputeOperationAtan extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationAtan';

    input: string;
    output: string;

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAtan {
      return new ComputeOperationAtan($g.abi.libs_by_name.get(algebralib.name)!.mapped[33], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAtan {
      return new ComputeOperationAtan($g.abi.libs_by_name.get(algebralib.name)!.mapped[33], input, output);
    }
  }

  export class ComputeOperationSum extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationSum';

    input: string;
    output: string;
    axis: bigint | number | null;

    static createFrom({input, output, axis}: {input: string, output: string, axis: bigint | number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSum {
      return new ComputeOperationSum($g.abi.libs_by_name.get(algebralib.name)!.mapped[34], input, output, axis);
    }
    static create(input: string, output: string, axis: bigint | number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSum {
      return new ComputeOperationSum($g.abi.libs_by_name.get(algebralib.name)!.mapped[34], input, output, axis);
    }
  }

  export class ComputeOperationSelu extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationSelu';

    input: string;
    output: string;

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSelu {
      return new ComputeOperationSelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[35], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSelu {
      return new ComputeOperationSelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[35], input, output);
    }
  }

  export class ComputeOperationAcosh extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationAcosh';

    input: string;
    output: string;

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAcosh {
      return new ComputeOperationAcosh($g.abi.libs_by_name.get(algebralib.name)!.mapped[36], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAcosh {
      return new ComputeOperationAcosh($g.abi.libs_by_name.get(algebralib.name)!.mapped[36], input, output);
    }
  }

  export class ComputeOperationRaiseToPower extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationRaiseToPower';

    input: string;
    output: string;
    power: number;

    static createFrom({input, output, power}: {input: string, output: string, power: number}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationRaiseToPower {
      return new ComputeOperationRaiseToPower($g.abi.libs_by_name.get(algebralib.name)!.mapped[37], input, output, power);
    }
    static create(input: string, output: string, power: number, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationRaiseToPower {
      return new ComputeOperationRaiseToPower($g.abi.libs_by_name.get(algebralib.name)!.mapped[37], input, output, power);
    }
  }

  export class ComputeOperationLog extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationLog';

    input: string;
    output: string;

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationLog {
      return new ComputeOperationLog($g.abi.libs_by_name.get(algebralib.name)!.mapped[38], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationLog {
      return new ComputeOperationLog($g.abi.libs_by_name.get(algebralib.name)!.mapped[38], input, output);
    }
  }

  export class ComputeActivationLeakyRelu extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeActivationLeakyRelu';

    alpha: number | null;
    max_value: number | null;
    threshold: number | null;

    static alpha_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[39];
      return  t.static_values['alpha_def'] as number;
    }
    static threshold_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[39];
      return  t.static_values['threshold_def'] as number;
    }
    static createFrom({alpha, max_value, threshold}: {alpha: number | null, max_value: number | null, threshold: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationLeakyRelu {
      return new ComputeActivationLeakyRelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[39], alpha, max_value, threshold);
    }
    static create(alpha: number | null, max_value: number | null, threshold: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationLeakyRelu {
      return new ComputeActivationLeakyRelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[39], alpha, max_value, threshold);
    }
  }

  export class ComputeInitializerLeCunUniform extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerLeCunUniform';


    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerLeCunUniform {
      return new ComputeInitializerLeCunUniform($g.abi.libs_by_name.get(algebralib.name)!.mapped[40]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerLeCunUniform {
      return new ComputeInitializerLeCunUniform($g.abi.libs_by_name.get(algebralib.name)!.mapped[40]);
    }
  }

  export class ComputeInitializerXavierUniform extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerXavierUniform';


    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerXavierUniform {
      return new ComputeInitializerXavierUniform($g.abi.libs_by_name.get(algebralib.name)!.mapped[41]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerXavierUniform {
      return new ComputeInitializerXavierUniform($g.abi.libs_by_name.get(algebralib.name)!.mapped[41]);
    }
  }

  export class ComputeOperationAvg extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationAvg';

    input: string;
    input2: string;
    output: string;

    static createFrom({input, input2, output}: {input: string, input2: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAvg {
      return new ComputeOperationAvg($g.abi.libs_by_name.get(algebralib.name)!.mapped[42], input, input2, output);
    }
    static create(input: string, input2: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAvg {
      return new ComputeOperationAvg($g.abi.libs_by_name.get(algebralib.name)!.mapped[42], input, input2, output);
    }
  }

  export class ComputeOperationSign extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationSign';

    input: string;
    output: string;

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSign {
      return new ComputeOperationSign($g.abi.libs_by_name.get(algebralib.name)!.mapped[43], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSign {
      return new ComputeOperationSign($g.abi.libs_by_name.get(algebralib.name)!.mapped[43], input, output);
    }
  }

  export class ComputeOperationAcos extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationAcos';

    input: string;
    output: string;

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAcos {
      return new ComputeOperationAcos($g.abi.libs_by_name.get(algebralib.name)!.mapped[44], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAcos {
      return new ComputeOperationAcos($g.abi.libs_by_name.get(algebralib.name)!.mapped[44], input, output);
    }
  }

  export class ComputeActivationHardSigmoid extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeActivationHardSigmoid';

    slope: number | null;
    shift: number | null;

    static slope_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[45];
      return  t.static_values['slope_def'] as number;
    }
    static shift_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[45];
      return  t.static_values['shift_def'] as number;
    }
    static createFrom({slope, shift}: {slope: number | null, shift: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationHardSigmoid {
      return new ComputeActivationHardSigmoid($g.abi.libs_by_name.get(algebralib.name)!.mapped[45], slope, shift);
    }
    static create(slope: number | null, shift: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationHardSigmoid {
      return new ComputeActivationHardSigmoid($g.abi.libs_by_name.get(algebralib.name)!.mapped[45], slope, shift);
    }
  }

  export class ComputeOperationHardSigmoid extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationHardSigmoid';

    input: string;
    output: string;
    slope: number | null;
    shift: number | null;

    static slope_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[46];
      return  t.static_values['slope_def'] as number;
    }
    static shift_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[46];
      return  t.static_values['shift_def'] as number;
    }
    static createFrom({input, output, slope, shift}: {input: string, output: string, slope: number | null, shift: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationHardSigmoid {
      return new ComputeOperationHardSigmoid($g.abi.libs_by_name.get(algebralib.name)!.mapped[46], input, output, slope, shift);
    }
    static create(input: string, output: string, slope: number | null, shift: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationHardSigmoid {
      return new ComputeOperationHardSigmoid($g.abi.libs_by_name.get(algebralib.name)!.mapped[46], input, output, slope, shift);
    }
  }

  export class ComputeOperationLeCunTanh extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationLeCunTanh';

    input: string;
    output: string;

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationLeCunTanh {
      return new ComputeOperationLeCunTanh($g.abi.libs_by_name.get(algebralib.name)!.mapped[47], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationLeCunTanh {
      return new ComputeOperationLeCunTanh($g.abi.libs_by_name.get(algebralib.name)!.mapped[47], input, output);
    }
  }

  export class ComputeInitializerGlorotUniform extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerGlorotUniform';


    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerGlorotUniform {
      return new ComputeInitializerGlorotUniform($g.abi.libs_by_name.get(algebralib.name)!.mapped[48]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerGlorotUniform {
      return new ComputeInitializerGlorotUniform($g.abi.libs_by_name.get(algebralib.name)!.mapped[48]);
    }
  }

  export class ComputeInitializerSigmoidUniform extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerSigmoidUniform';


    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerSigmoidUniform {
      return new ComputeInitializerSigmoidUniform($g.abi.libs_by_name.get(algebralib.name)!.mapped[49]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerSigmoidUniform {
      return new ComputeInitializerSigmoidUniform($g.abi.libs_by_name.get(algebralib.name)!.mapped[49]);
    }
  }

  export class ComputeOptimizerNesterov extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOptimizerNesterov';

    learning_rate: number | null;
    decay_rate: number;

    static learning_rate_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[50];
      return  t.static_values['learning_rate_def'] as number;
    }
    static decay_rate_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[50];
      return  t.static_values['decay_rate_def'] as number;
    }
    static createFrom({learning_rate, decay_rate}: {learning_rate: number | null, decay_rate: number}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerNesterov {
      return new ComputeOptimizerNesterov($g.abi.libs_by_name.get(algebralib.name)!.mapped[50], learning_rate, decay_rate);
    }
    static create(learning_rate: number | null, decay_rate: number, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerNesterov {
      return new ComputeOptimizerNesterov($g.abi.libs_by_name.get(algebralib.name)!.mapped[50], learning_rate, decay_rate);
    }
  }

  export class ComputeOptimizerAdam extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOptimizerAdam';

    learning_rate: number | null;
    beta1: number | null;
    beta2: number | null;
    smooth_epsilon: number | null;

    static learning_rate_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[51];
      return  t.static_values['learning_rate_def'] as number;
    }
    static beta1_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[51];
      return  t.static_values['beta1_def'] as number;
    }
    static beta2_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[51];
      return  t.static_values['beta2_def'] as number;
    }
    static smooth_epsilon_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[51];
      return  t.static_values['smooth_epsilon_def'] as number;
    }
    static createFrom({learning_rate, beta1, beta2, smooth_epsilon}: {learning_rate: number | null, beta1: number | null, beta2: number | null, smooth_epsilon: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerAdam {
      return new ComputeOptimizerAdam($g.abi.libs_by_name.get(algebralib.name)!.mapped[51], learning_rate, beta1, beta2, smooth_epsilon);
    }
    static create(learning_rate: number | null, beta1: number | null, beta2: number | null, smooth_epsilon: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerAdam {
      return new ComputeOptimizerAdam($g.abi.libs_by_name.get(algebralib.name)!.mapped[51], learning_rate, beta1, beta2, smooth_epsilon);
    }
  }

  export class ComputeModel extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeModel';

    layers: globalThis.Array<compute.ComputeLayer>;

    static createFrom({layers}: {layers: globalThis.Array<compute.ComputeLayer>}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeModel {
      return new ComputeModel($g.abi.libs_by_name.get(algebralib.name)!.mapped[52], layers);
    }
    static create(layers: globalThis.Array<compute.ComputeLayer>, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeModel {
      return new ComputeModel($g.abi.libs_by_name.get(algebralib.name)!.mapped[52], layers);
    }
  }

  export class ComputeLayerSeq extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeLayerSeq';

    name: string;
    calls: globalThis.Array<compute.ComputeLayerCall>;
    optimizer: compute.ComputeOptimizer | null;

    static createFrom({name, calls, optimizer}: {name: string, calls: globalThis.Array<compute.ComputeLayerCall>, optimizer: compute.ComputeOptimizer | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerSeq {
      return new ComputeLayerSeq($g.abi.libs_by_name.get(algebralib.name)!.mapped[53], name, calls, optimizer);
    }
    static create(name: string, calls: globalThis.Array<compute.ComputeLayerCall>, optimizer: compute.ComputeOptimizer | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerSeq {
      return new ComputeLayerSeq($g.abi.libs_by_name.get(algebralib.name)!.mapped[53], name, calls, optimizer);
    }
  }

  export class ComputeOptimizerNadam extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOptimizerNadam';

    learning_rate: number | null;
    beta1: number | null;
    beta2: number | null;
    smooth_epsilon: number | null;

    static learning_rate_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[54];
      return  t.static_values['learning_rate_def'] as number;
    }
    static beta1_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[54];
      return  t.static_values['beta1_def'] as number;
    }
    static beta2_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[54];
      return  t.static_values['beta2_def'] as number;
    }
    static smooth_epsilon_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[54];
      return  t.static_values['smooth_epsilon_def'] as number;
    }
    static createFrom({learning_rate, beta1, beta2, smooth_epsilon}: {learning_rate: number | null, beta1: number | null, beta2: number | null, smooth_epsilon: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerNadam {
      return new ComputeOptimizerNadam($g.abi.libs_by_name.get(algebralib.name)!.mapped[54], learning_rate, beta1, beta2, smooth_epsilon);
    }
    static create(learning_rate: number | null, beta1: number | null, beta2: number | null, smooth_epsilon: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerNadam {
      return new ComputeOptimizerNadam($g.abi.libs_by_name.get(algebralib.name)!.mapped[54], learning_rate, beta1, beta2, smooth_epsilon);
    }
  }

  export class ComputeActivationCelu extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeActivationCelu';

    alpha: number | null;

    static alpha_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[55];
      return  t.static_values['alpha_def'] as number;
    }
    static createFrom({alpha}: {alpha: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationCelu {
      return new ComputeActivationCelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[55], alpha);
    }
    static create(alpha: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationCelu {
      return new ComputeActivationCelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[55], alpha);
    }
  }

  export class ComputeOperation extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperation';


  }

  export class ComputeOperationCelu extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationCelu';

    input: string;
    output: string;
    alpha: number | null;

    static alpha_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[57];
      return  t.static_values['alpha_def'] as number;
    }
    static createFrom({input, output, alpha}: {input: string, output: string, alpha: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationCelu {
      return new ComputeOperationCelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[57], input, output, alpha);
    }
    static create(input: string, output: string, alpha: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationCelu {
      return new ComputeOperationCelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[57], input, output, alpha);
    }
  }

  export class ComputeOperationScale extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationScale';

    input: string;
    output: string;
    alpha: number;

    static createFrom({input, output, alpha}: {input: string, output: string, alpha: number}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationScale {
      return new ComputeOperationScale($g.abi.libs_by_name.get(algebralib.name)!.mapped[58], input, output, alpha);
    }
    static create(input: string, output: string, alpha: number, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationScale {
      return new ComputeOperationScale($g.abi.libs_by_name.get(algebralib.name)!.mapped[58], input, output, alpha);
    }
  }

  export class ComputeOperationFilter extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationFilter';

    input: string;
    output: string;
    mask: string;
    nbOutputs: bigint | number;

    static createFrom({input, output, mask, nbOutputs}: {input: string, output: string, mask: string, nbOutputs: bigint | number}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationFilter {
      return new ComputeOperationFilter($g.abi.libs_by_name.get(algebralib.name)!.mapped[59], input, output, mask, nbOutputs);
    }
    static create(input: string, output: string, mask: string, nbOutputs: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationFilter {
      return new ComputeOperationFilter($g.abi.libs_by_name.get(algebralib.name)!.mapped[59], input, output, mask, nbOutputs);
    }
  }

  export class ComputeActivationSoftSign extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeActivationSoftSign';


    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationSoftSign {
      return new ComputeActivationSoftSign($g.abi.libs_by_name.get(algebralib.name)!.mapped[60]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationSoftSign {
      return new ComputeActivationSoftSign($g.abi.libs_by_name.get(algebralib.name)!.mapped[60]);
    }
  }

  export class ComputeInitializerIdentity extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerIdentity';


    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerIdentity {
      return new ComputeInitializerIdentity($g.abi.libs_by_name.get(algebralib.name)!.mapped[61]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerIdentity {
      return new ComputeInitializerIdentity($g.abi.libs_by_name.get(algebralib.name)!.mapped[61]);
    }
  }

  export class ComputeInitializerNormalIn extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerNormalIn';


    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerNormalIn {
      return new ComputeInitializerNormalIn($g.abi.libs_by_name.get(algebralib.name)!.mapped[62]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerNormalIn {
      return new ComputeInitializerNormalIn($g.abi.libs_by_name.get(algebralib.name)!.mapped[62]);
    }
  }

  export class ComputeInitializerUniformOut extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerUniformOut';


    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerUniformOut {
      return new ComputeInitializerUniformOut($g.abi.libs_by_name.get(algebralib.name)!.mapped[63]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerUniformOut {
      return new ComputeInitializerUniformOut($g.abi.libs_by_name.get(algebralib.name)!.mapped[63]);
    }
  }

  export class ComputeOperationRelu extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationRelu';

    input: string;
    output: string;
    max_value: number | null;
    threshold: number | null;

    static threshold_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[64];
      return  t.static_values['threshold_def'] as number;
    }
    static createFrom({input, output, max_value, threshold}: {input: string, output: string, max_value: number | null, threshold: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationRelu {
      return new ComputeOperationRelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[64], input, output, max_value, threshold);
    }
    static create(input: string, output: string, max_value: number | null, threshold: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationRelu {
      return new ComputeOperationRelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[64], input, output, max_value, threshold);
    }
  }

  export class ComputeInitializer extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializer';


  }

  export class ComputeOperationSin extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationSin';

    input: string;
    output: string;

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSin {
      return new ComputeOperationSin($g.abi.libs_by_name.get(algebralib.name)!.mapped[66], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSin {
      return new ComputeOperationSin($g.abi.libs_by_name.get(algebralib.name)!.mapped[66], input, output);
    }
  }

  export class ComputeCounter extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeCounter';

    epoch: bigint | number;
    optimizationSteps: bigint | number;
    batchNotOptimized: bigint | number;

    static createFrom({epoch, optimizationSteps, batchNotOptimized}: {epoch: bigint | number, optimizationSteps: bigint | number, batchNotOptimized: bigint | number}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeCounter {
      return new ComputeCounter($g.abi.libs_by_name.get(algebralib.name)!.mapped[67], epoch, optimizationSteps, batchNotOptimized);
    }
    static create(epoch: bigint | number, optimizationSteps: bigint | number, batchNotOptimized: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeCounter {
      return new ComputeCounter($g.abi.libs_by_name.get(algebralib.name)!.mapped[67], epoch, optimizationSteps, batchNotOptimized);
    }
  }

  export class ComputeOperationSinh extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationSinh';

    input: string;
    output: string;

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSinh {
      return new ComputeOperationSinh($g.abi.libs_by_name.get(algebralib.name)!.mapped[68], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSinh {
      return new ComputeOperationSinh($g.abi.libs_by_name.get(algebralib.name)!.mapped[68], input, output);
    }
  }

  export class ComputeActivationSoftplus extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeActivationSoftplus';


    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationSoftplus {
      return new ComputeActivationSoftplus($g.abi.libs_by_name.get(algebralib.name)!.mapped[69]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationSoftplus {
      return new ComputeActivationSoftplus($g.abi.libs_by_name.get(algebralib.name)!.mapped[69]);
    }
  }

  export class ComputeOperationSigmoid extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationSigmoid';

    input: string;
    output: string;

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSigmoid {
      return new ComputeOperationSigmoid($g.abi.libs_by_name.get(algebralib.name)!.mapped[70], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSigmoid {
      return new ComputeOperationSigmoid($g.abi.libs_by_name.get(algebralib.name)!.mapped[70], input, output);
    }
  }

  export class ComputeOperationArgMin extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationArgMin';

    input: string;
    output: string;
    output2: string;

    static createFrom({input, output, output2}: {input: string, output: string, output2: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationArgMin {
      return new ComputeOperationArgMin($g.abi.libs_by_name.get(algebralib.name)!.mapped[71], input, output, output2);
    }
    static create(input: string, output: string, output2: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationArgMin {
      return new ComputeOperationArgMin($g.abi.libs_by_name.get(algebralib.name)!.mapped[71], input, output, output2);
    }
  }

  export class ComputeLayerStandardScaler extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeLayerStandardScaler';

    name: string;
    type: $sdk.std.core.TensorType;
    inverse_transform: boolean;

    static var_input_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[72];
      return  t.static_values['var_input_name'] as string;
    }
    static var_output_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[72];
      return  t.static_values['var_output_name'] as string;
    }
    static var_avg_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[72];
      return  t.static_values['var_avg_name'] as string;
    }
    static var_std_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[72];
      return  t.static_values['var_std_name'] as string;
    }
    static createFrom({name, type, inverse_transform}: {name: string, type: $sdk.std.core.TensorType, inverse_transform: boolean}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerStandardScaler {
      return new ComputeLayerStandardScaler($g.abi.libs_by_name.get(algebralib.name)!.mapped[72], name, type, inverse_transform);
    }
    static create(name: string, type: $sdk.std.core.TensorType, inverse_transform: boolean, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerStandardScaler {
      return new ComputeLayerStandardScaler($g.abi.libs_by_name.get(algebralib.name)!.mapped[72], name, type, inverse_transform);
    }
  }

  export class ComputeActivationSelu extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeActivationSelu';


    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationSelu {
      return new ComputeActivationSelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[73]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationSelu {
      return new ComputeActivationSelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[73]);
    }
  }

  export class ComputeInitializerNormal extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerNormal';

    avg: number;
    std: number;

    static createFrom({avg, std}: {avg: number, std: number}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerNormal {
      return new ComputeInitializerNormal($g.abi.libs_by_name.get(algebralib.name)!.mapped[74], avg, std);
    }
    static create(avg: number, std: number, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerNormal {
      return new ComputeInitializerNormal($g.abi.libs_by_name.get(algebralib.name)!.mapped[74], avg, std);
    }
  }

  export class ComputeOperationMatMul extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationMatMul';

    input: string;
    input2: string;
    output: string;
    transposeA: boolean;
    transposeB: boolean;
    alpha: number;
    beta: number;

    static transpose_def($g: $sdk.GreyCat = globalThis.greycat.default): boolean {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[75];
      return  t.static_values['transpose_def'] as boolean;
    }
    static alpha_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[75];
      return  t.static_values['alpha_def'] as number;
    }
    static beta_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[75];
      return  t.static_values['beta_def'] as number;
    }
    static createFrom({input, input2, output, transposeA, transposeB, alpha, beta}: {input: string, input2: string, output: string, transposeA: boolean, transposeB: boolean, alpha: number, beta: number}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationMatMul {
      return new ComputeOperationMatMul($g.abi.libs_by_name.get(algebralib.name)!.mapped[75], input, input2, output, transposeA, transposeB, alpha, beta);
    }
    static create(input: string, input2: string, output: string, transposeA: boolean, transposeB: boolean, alpha: number, beta: number, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationMatMul {
      return new ComputeOperationMatMul($g.abi.libs_by_name.get(algebralib.name)!.mapped[75], input, input2, output, transposeA, transposeB, alpha, beta);
    }
  }

  export class ComputeActivationTanh extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeActivationTanh';


    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationTanh {
      return new ComputeActivationTanh($g.abi.libs_by_name.get(algebralib.name)!.mapped[76]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationTanh {
      return new ComputeActivationTanh($g.abi.libs_by_name.get(algebralib.name)!.mapped[76]);
    }
  }

  export class ComputeOptimizerMomentum extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOptimizerMomentum';

    learning_rate: number | null;
    decay_rate: number;

    static learning_rate_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[77];
      return  t.static_values['learning_rate_def'] as number;
    }
    static decay_rate_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[77];
      return  t.static_values['decay_rate_def'] as number;
    }
    static createFrom({learning_rate, decay_rate}: {learning_rate: number | null, decay_rate: number}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerMomentum {
      return new ComputeOptimizerMomentum($g.abi.libs_by_name.get(algebralib.name)!.mapped[77], learning_rate, decay_rate);
    }
    static create(learning_rate: number | null, decay_rate: number, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerMomentum {
      return new ComputeOptimizerMomentum($g.abi.libs_by_name.get(algebralib.name)!.mapped[77], learning_rate, decay_rate);
    }
  }

  export class ComputeOptimizerSgd extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOptimizerSgd';

    learning_rate: number | null;

    static learning_rate_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[78];
      return  t.static_values['learning_rate_def'] as number;
    }
    static createFrom({learning_rate}: {learning_rate: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerSgd {
      return new ComputeOptimizerSgd($g.abi.libs_by_name.get(algebralib.name)!.mapped[78], learning_rate);
    }
    static create(learning_rate: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerSgd {
      return new ComputeOptimizerSgd($g.abi.libs_by_name.get(algebralib.name)!.mapped[78], learning_rate);
    }
  }

  export class ComputeState extends algebra_n.compute.ComputeState {
  }

  export class ComputeLayerDense extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeLayerDense';

    name: string;
    type: $sdk.std.core.TensorType;
    inputs: bigint | number;
    outputs: bigint | number;
    use_bias: boolean;
    weight_initializer: compute.ComputeInitializer | null;
    weight_regularizer: compute.ComputeRegularizer | null;
    bias_initializer: compute.ComputeInitializer | null;
    bias_regularizer: compute.ComputeRegularizer | null;
    activation: compute.ComputeActivation | null;

    static var_input_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[80];
      return  t.static_values['var_input_name'] as string;
    }
    static var_output_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[80];
      return  t.static_values['var_output_name'] as string;
    }
    static var_weight_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[80];
      return  t.static_values['var_weight_name'] as string;
    }
    static var_bias_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[80];
      return  t.static_values['var_bias_name'] as string;
    }
    static var_mult_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[80];
      return  t.static_values['var_mult_name'] as string;
    }
    static var_pre_activation_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[80];
      return  t.static_values['var_pre_activation_name'] as string;
    }
    static createFrom({name, type, inputs, outputs, use_bias, weight_initializer, weight_regularizer, bias_initializer, bias_regularizer, activation}: {name: string, type: $sdk.std.core.TensorType, inputs: bigint | number, outputs: bigint | number, use_bias: boolean, weight_initializer: compute.ComputeInitializer | null, weight_regularizer: compute.ComputeRegularizer | null, bias_initializer: compute.ComputeInitializer | null, bias_regularizer: compute.ComputeRegularizer | null, activation: compute.ComputeActivation | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerDense {
      return new ComputeLayerDense($g.abi.libs_by_name.get(algebralib.name)!.mapped[80], name, type, inputs, outputs, use_bias, weight_initializer, weight_regularizer, bias_initializer, bias_regularizer, activation);
    }
    static create(name: string, type: $sdk.std.core.TensorType, inputs: bigint | number, outputs: bigint | number, use_bias: boolean, weight_initializer: compute.ComputeInitializer | null, weight_regularizer: compute.ComputeRegularizer | null, bias_initializer: compute.ComputeInitializer | null, bias_regularizer: compute.ComputeRegularizer | null, activation: compute.ComputeActivation | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerDense {
      return new ComputeLayerDense($g.abi.libs_by_name.get(algebralib.name)!.mapped[80], name, type, inputs, outputs, use_bias, weight_initializer, weight_regularizer, bias_initializer, bias_regularizer, activation);
    }
  }

  export class ComputeLayerCall extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeLayerCall';

    layer_name: string;
    bindings: globalThis.Array<compute.ComputeBinding>;

    static createFrom({layer_name, bindings}: {layer_name: string, bindings: globalThis.Array<compute.ComputeBinding>}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerCall {
      return new ComputeLayerCall($g.abi.libs_by_name.get(algebralib.name)!.mapped[81], layer_name, bindings);
    }
    static create(layer_name: string, bindings: globalThis.Array<compute.ComputeBinding>, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerCall {
      return new ComputeLayerCall($g.abi.libs_by_name.get(algebralib.name)!.mapped[81], layer_name, bindings);
    }
  }

  export class ComputeVarConst extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeVarConst';

    name: string;
    type: $sdk.std.core.TensorType;
    shape: globalThis.Array<bigint | number>;

    static createFrom({name, type, shape}: {name: string, type: $sdk.std.core.TensorType, shape: globalThis.Array<bigint | number>}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeVarConst {
      return new ComputeVarConst($g.abi.libs_by_name.get(algebralib.name)!.mapped[82], name, type, shape);
    }
    static create(name: string, type: $sdk.std.core.TensorType, shape: globalThis.Array<bigint | number>, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeVarConst {
      return new ComputeVarConst($g.abi.libs_by_name.get(algebralib.name)!.mapped[82], name, type, shape);
    }
  }

  export class ComputeOperationPow extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationPow';

    input: string;
    input2: string;
    output: string;

    static createFrom({input, input2, output}: {input: string, input2: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationPow {
      return new ComputeOperationPow($g.abi.libs_by_name.get(algebralib.name)!.mapped[83], input, input2, output);
    }
    static create(input: string, input2: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationPow {
      return new ComputeOperationPow($g.abi.libs_by_name.get(algebralib.name)!.mapped[83], input, input2, output);
    }
  }

  export class ComputeOperationExp extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationExp';

    input: string;
    output: string;

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationExp {
      return new ComputeOperationExp($g.abi.libs_by_name.get(algebralib.name)!.mapped[84], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationExp {
      return new ComputeOperationExp($g.abi.libs_by_name.get(algebralib.name)!.mapped[84], input, output);
    }
  }

  export class ComputeInitializerNone extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerNone';


    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerNone {
      return new ComputeInitializerNone($g.abi.libs_by_name.get(algebralib.name)!.mapped[85]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerNone {
      return new ComputeInitializerNone($g.abi.libs_by_name.get(algebralib.name)!.mapped[85]);
    }
  }

  export class ComputeOperationNeg extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationNeg';

    input: string;
    output: string;

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationNeg {
      return new ComputeOperationNeg($g.abi.libs_by_name.get(algebralib.name)!.mapped[86], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationNeg {
      return new ComputeOperationNeg($g.abi.libs_by_name.get(algebralib.name)!.mapped[86], input, output);
    }
  }

  export class ComputeLayerPCAScaler extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeLayerPCAScaler';

    name: string;
    type: $sdk.std.core.TensorType;
    inverse_transform: boolean;

    static var_input_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[87];
      return  t.static_values['var_input_name'] as string;
    }
    static var_output_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[87];
      return  t.static_values['var_output_name'] as string;
    }
    static var_avg_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[87];
      return  t.static_values['var_avg_name'] as string;
    }
    static var_std_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[87];
      return  t.static_values['var_std_name'] as string;
    }
    static var_space_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[87];
      return  t.static_values['var_space_name'] as string;
    }
    static createFrom({name, type, inverse_transform}: {name: string, type: $sdk.std.core.TensorType, inverse_transform: boolean}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerPCAScaler {
      return new ComputeLayerPCAScaler($g.abi.libs_by_name.get(algebralib.name)!.mapped[87], name, type, inverse_transform);
    }
    static create(name: string, type: $sdk.std.core.TensorType, inverse_transform: boolean, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerPCAScaler {
      return new ComputeLayerPCAScaler($g.abi.libs_by_name.get(algebralib.name)!.mapped[87], name, type, inverse_transform);
    }
  }

  export class ComputeOperationDiv extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationDiv';

    input: string;
    input2: string;
    output: string;

    static createFrom({input, input2, output}: {input: string, input2: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationDiv {
      return new ComputeOperationDiv($g.abi.libs_by_name.get(algebralib.name)!.mapped[88], input, input2, output);
    }
    static create(input: string, input2: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationDiv {
      return new ComputeOperationDiv($g.abi.libs_by_name.get(algebralib.name)!.mapped[88], input, input2, output);
    }
  }

  export class ComputeLayerMinMaxScaler extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeLayerMinMaxScaler';

    name: string;
    type: $sdk.std.core.TensorType;
    inverse_transform: boolean;

    static var_input_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[89];
      return  t.static_values['var_input_name'] as string;
    }
    static var_output_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[89];
      return  t.static_values['var_output_name'] as string;
    }
    static var_min_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[89];
      return  t.static_values['var_min_name'] as string;
    }
    static var_max_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[89];
      return  t.static_values['var_max_name'] as string;
    }
    static createFrom({name, type, inverse_transform}: {name: string, type: $sdk.std.core.TensorType, inverse_transform: boolean}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerMinMaxScaler {
      return new ComputeLayerMinMaxScaler($g.abi.libs_by_name.get(algebralib.name)!.mapped[89], name, type, inverse_transform);
    }
    static create(name: string, type: $sdk.std.core.TensorType, inverse_transform: boolean, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerMinMaxScaler {
      return new ComputeLayerMinMaxScaler($g.abi.libs_by_name.get(algebralib.name)!.mapped[89], name, type, inverse_transform);
    }
  }

  export class ComputeInitializerXavier extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerXavier';


    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerXavier {
      return new ComputeInitializerXavier($g.abi.libs_by_name.get(algebralib.name)!.mapped[90]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerXavier {
      return new ComputeInitializerXavier($g.abi.libs_by_name.get(algebralib.name)!.mapped[90]);
    }
  }

  export class ComputeOperationFill extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationFill';

    input: string;
    value: any;

    static createFrom({input, value}: {input: string, value: any}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationFill {
      return new ComputeOperationFill($g.abi.libs_by_name.get(algebralib.name)!.mapped[91], input, value);
    }
    static create(input: string, value: any, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationFill {
      return new ComputeOperationFill($g.abi.libs_by_name.get(algebralib.name)!.mapped[91], input, value);
    }
  }

  export class ComputeOperationArgMax extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationArgMax';

    input: string;
    output: string;
    output2: string;

    static createFrom({input, output, output2}: {input: string, output: string, output2: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationArgMax {
      return new ComputeOperationArgMax($g.abi.libs_by_name.get(algebralib.name)!.mapped[92], input, output, output2);
    }
    static create(input: string, output: string, output2: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationArgMax {
      return new ComputeOperationArgMax($g.abi.libs_by_name.get(algebralib.name)!.mapped[92], input, output, output2);
    }
  }

  export class ComputeLayerLossClassification extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeLayerLossClassification';

    name: string;
    reduction: compute.ComputeReduction | null;
    loss_type: compute.ComputeClassificationLoss;
    has_class_weights: boolean;
    calculate_probabilities: boolean;
    from_logits: boolean;

    static var_class_weights_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[93];
      return  t.static_values['var_class_weights_name'] as string;
    }
    static var_predicted_classes_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[93];
      return  t.static_values['var_predicted_classes_name'] as string;
    }
    static var_probabilities_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[93];
      return  t.static_values['var_probabilities_name'] as string;
    }
    static var_sum_reduce_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[93];
      return  t.static_values['var_sum_reduce_name'] as string;
    }
    static createFrom({name, reduction, loss_type, has_class_weights, calculate_probabilities, from_logits}: {name: string, reduction: compute.ComputeReduction | null, loss_type: compute.ComputeClassificationLoss, has_class_weights: boolean, calculate_probabilities: boolean, from_logits: boolean}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerLossClassification {
      return new ComputeLayerLossClassification($g.abi.libs_by_name.get(algebralib.name)!.mapped[93], name, reduction, loss_type, has_class_weights, calculate_probabilities, from_logits);
    }
    static create(name: string, reduction: compute.ComputeReduction | null, loss_type: compute.ComputeClassificationLoss, has_class_weights: boolean, calculate_probabilities: boolean, from_logits: boolean, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerLossClassification {
      return new ComputeLayerLossClassification($g.abi.libs_by_name.get(algebralib.name)!.mapped[93], name, reduction, loss_type, has_class_weights, calculate_probabilities, from_logits);
    }
  }

  export class ComputeLayerCustom extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeLayerCustom';

    name: string;
    ops: globalThis.Array<compute.ComputeOperation>;
    vars: globalThis.Array<compute.ComputeVariable>;

    static createFrom({name, ops, vars}: {name: string, ops: globalThis.Array<compute.ComputeOperation>, vars: globalThis.Array<compute.ComputeVariable>}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerCustom {
      return new ComputeLayerCustom($g.abi.libs_by_name.get(algebralib.name)!.mapped[94], name, ops, vars);
    }
    static create(name: string, ops: globalThis.Array<compute.ComputeOperation>, vars: globalThis.Array<compute.ComputeVariable>, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerCustom {
      return new ComputeLayerCustom($g.abi.libs_by_name.get(algebralib.name)!.mapped[94], name, ops, vars);
    }
  }

  export class ComputeVar extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeVar';

    name: string;

    static createFrom({name}: {name: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeVar {
      return new ComputeVar($g.abi.libs_by_name.get(algebralib.name)!.mapped[95], name);
    }
    static create(name: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeVar {
      return new ComputeVar($g.abi.libs_by_name.get(algebralib.name)!.mapped[95], name);
    }
  }

  export class ComputeActivationSigmoid extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeActivationSigmoid';


    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationSigmoid {
      return new ComputeActivationSigmoid($g.abi.libs_by_name.get(algebralib.name)!.mapped[96]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationSigmoid {
      return new ComputeActivationSigmoid($g.abi.libs_by_name.get(algebralib.name)!.mapped[96]);
    }
  }

  export class ComputeEngine extends algebra_n.compute.ComputeEngine {
  }

  export class ComputeOptimizerAdaDelta extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOptimizerAdaDelta';

    learning_rate: number | null;
    decay_rate: number | null;
    smooth_epsilon: number | null;

    static learning_rate_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[98];
      return  t.static_values['learning_rate_def'] as number;
    }
    static decay_rate_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[98];
      return  t.static_values['decay_rate_def'] as number;
    }
    static smooth_epsilon_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[98];
      return  t.static_values['smooth_epsilon_def'] as number;
    }
    static createFrom({learning_rate, decay_rate, smooth_epsilon}: {learning_rate: number | null, decay_rate: number | null, smooth_epsilon: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerAdaDelta {
      return new ComputeOptimizerAdaDelta($g.abi.libs_by_name.get(algebralib.name)!.mapped[98], learning_rate, decay_rate, smooth_epsilon);
    }
    static create(learning_rate: number | null, decay_rate: number | null, smooth_epsilon: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerAdaDelta {
      return new ComputeOptimizerAdaDelta($g.abi.libs_by_name.get(algebralib.name)!.mapped[98], learning_rate, decay_rate, smooth_epsilon);
    }
  }

  export class ComputeActivationSoftmax extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeActivationSoftmax';

    classes: string | null;

    static createFrom({classes}: {classes: string | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationSoftmax {
      return new ComputeActivationSoftmax($g.abi.libs_by_name.get(algebralib.name)!.mapped[99], classes);
    }
    static create(classes: string | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationSoftmax {
      return new ComputeActivationSoftmax($g.abi.libs_by_name.get(algebralib.name)!.mapped[99], classes);
    }
  }

  export class ComputeClassificationLoss extends $sdk.GCEnum {
    static readonly _type = 'compute::ComputeClassificationLoss';

    constructor(type: $sdk.AbiType, offset: number, public key: ComputeClassificationLoss.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static categorical_cross_entropy($g: $sdk.GreyCat = globalThis.greycat.default): ComputeClassificationLoss {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[100];
      return t.static_values['categorical_cross_entropy'];
    }
    static sparse_categorical_cross_entropy($g: $sdk.GreyCat = globalThis.greycat.default): ComputeClassificationLoss {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[100];
      return t.static_values['sparse_categorical_cross_entropy'];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): ComputeClassificationLoss[] {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[100];
      return t.enum_values!;
    }
  }

  export namespace ComputeClassificationLoss  {
    export type Field = 'categorical_cross_entropy'|'sparse_categorical_cross_entropy';
  }
  export class ComputeInitializerReluUniform extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerReluUniform';


    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerReluUniform {
      return new ComputeInitializerReluUniform($g.abi.libs_by_name.get(algebralib.name)!.mapped[101]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerReluUniform {
      return new ComputeInitializerReluUniform($g.abi.libs_by_name.get(algebralib.name)!.mapped[101]);
    }
  }

  export class ComputeOptimizerFtrl extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOptimizerFtrl';

    learning_rate: number | null;
    lambda1: number | null;
    lambda2: number | null;
    beta: number | null;

    static learning_rate_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[102];
      return  t.static_values['learning_rate_def'] as number;
    }
    static beta_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[102];
      return  t.static_values['beta_def'] as number;
    }
    static lambda1_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[102];
      return  t.static_values['lambda1_def'] as number;
    }
    static lambda2_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[102];
      return  t.static_values['lambda2_def'] as number;
    }
    static createFrom({learning_rate, lambda1, lambda2, beta}: {learning_rate: number | null, lambda1: number | null, lambda2: number | null, beta: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerFtrl {
      return new ComputeOptimizerFtrl($g.abi.libs_by_name.get(algebralib.name)!.mapped[102], learning_rate, lambda1, lambda2, beta);
    }
    static create(learning_rate: number | null, lambda1: number | null, lambda2: number | null, beta: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerFtrl {
      return new ComputeOptimizerFtrl($g.abi.libs_by_name.get(algebralib.name)!.mapped[102], learning_rate, lambda1, lambda2, beta);
    }
  }

  export class ComputeOperationClip extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationClip';

    input: string;
    output: string;
    min: number | null;
    max: number | null;

    static createFrom({input, output, min, max}: {input: string, output: string, min: number | null, max: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationClip {
      return new ComputeOperationClip($g.abi.libs_by_name.get(algebralib.name)!.mapped[103], input, output, min, max);
    }
    static create(input: string, output: string, min: number | null, max: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationClip {
      return new ComputeOperationClip($g.abi.libs_by_name.get(algebralib.name)!.mapped[103], input, output, min, max);
    }
  }

  export class ComputeLayerLSTM extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeLayerLSTM';

    name: string;
    bias_initializer: compute.ComputeInitializer | null;
    weight_regularizer: compute.ComputeRegularizer | null;
    bias_regularizer: compute.ComputeRegularizer | null;
    type: $sdk.std.core.TensorType;
    use_bias: boolean | null;
    return_sequences: boolean | null;
    bidirectional: boolean | null;
    auto_init_states: boolean | null;
    inputs: bigint | number;
    outputs: bigint | number;
    layers: bigint | number;
    sequences: bigint | number;

    static var_input_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[104];
      return  t.static_values['var_input_name'] as string;
    }
    static var_output_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[104];
      return  t.static_values['var_output_name'] as string;
    }
    static var_hx_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[104];
      return  t.static_values['var_hx_name'] as string;
    }
    static var_cx_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[104];
      return  t.static_values['var_cx_name'] as string;
    }
    static var_hy_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[104];
      return  t.static_values['var_hy_name'] as string;
    }
    static var_cy_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[104];
      return  t.static_values['var_cy_name'] as string;
    }
    static var_weight_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[104];
      return  t.static_values['var_weight_name'] as string;
    }
    static var_bias_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[104];
      return  t.static_values['var_bias_name'] as string;
    }
    static var_internal_i_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[104];
      return  t.static_values['var_internal_i_name'] as string;
    }
    static var_internal_f_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[104];
      return  t.static_values['var_internal_f_name'] as string;
    }
    static var_internal_cp_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[104];
      return  t.static_values['var_internal_cp_name'] as string;
    }
    static var_internal_o_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[104];
      return  t.static_values['var_internal_o_name'] as string;
    }
    static var_internal_h_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[104];
      return  t.static_values['var_internal_h_name'] as string;
    }
    static var_internal_c_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[104];
      return  t.static_values['var_internal_c_name'] as string;
    }
    static var_internal_mult_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[104];
      return  t.static_values['var_internal_mult_name'] as string;
    }
    static var_internal_output_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[104];
      return  t.static_values['var_internal_output_name'] as string;
    }
    static createFrom({name, bias_initializer, weight_regularizer, bias_regularizer, type, use_bias, return_sequences, bidirectional, auto_init_states, inputs, outputs, layers, sequences}: {name: string, bias_initializer: compute.ComputeInitializer | null, weight_regularizer: compute.ComputeRegularizer | null, bias_regularizer: compute.ComputeRegularizer | null, type: $sdk.std.core.TensorType, use_bias: boolean | null, return_sequences: boolean | null, bidirectional: boolean | null, auto_init_states: boolean | null, inputs: bigint | number, outputs: bigint | number, layers: bigint | number, sequences: bigint | number}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerLSTM {
      return new ComputeLayerLSTM($g.abi.libs_by_name.get(algebralib.name)!.mapped[104], name, bias_initializer, weight_regularizer, bias_regularizer, type, use_bias, return_sequences, bidirectional, auto_init_states, inputs, outputs, layers, sequences);
    }
    static create(name: string, bias_initializer: compute.ComputeInitializer | null, weight_regularizer: compute.ComputeRegularizer | null, bias_regularizer: compute.ComputeRegularizer | null, type: $sdk.std.core.TensorType, use_bias: boolean | null, return_sequences: boolean | null, bidirectional: boolean | null, auto_init_states: boolean | null, inputs: bigint | number, outputs: bigint | number, layers: bigint | number, sequences: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerLSTM {
      return new ComputeLayerLSTM($g.abi.libs_by_name.get(algebralib.name)!.mapped[104], name, bias_initializer, weight_regularizer, bias_regularizer, type, use_bias, return_sequences, bidirectional, auto_init_states, inputs, outputs, layers, sequences);
    }
  }

  export class ComputeInitializerPytorch extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerPytorch';


    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerPytorch {
      return new ComputeInitializerPytorch($g.abi.libs_by_name.get(algebralib.name)!.mapped[105]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerPytorch {
      return new ComputeInitializerPytorch($g.abi.libs_by_name.get(algebralib.name)!.mapped[105]);
    }
  }

  export class ComputeOperationAsinh extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationAsinh';

    input: string;
    output: string;

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAsinh {
      return new ComputeOperationAsinh($g.abi.libs_by_name.get(algebralib.name)!.mapped[106], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAsinh {
      return new ComputeOperationAsinh($g.abi.libs_by_name.get(algebralib.name)!.mapped[106], input, output);
    }
  }

  export class ComputeOptimizer extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOptimizer';

    learning_rate: number | null;

  }

  export class ComputeInitializerLSTM extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerLSTM';


    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerLSTM {
      return new ComputeInitializerLSTM($g.abi.libs_by_name.get(algebralib.name)!.mapped[108]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerLSTM {
      return new ComputeInitializerLSTM($g.abi.libs_by_name.get(algebralib.name)!.mapped[108]);
    }
  }

  export class ComputeOperationAdd extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationAdd';

    input: string;
    input2: string;
    output: string;

    static createFrom({input, input2, output}: {input: string, input2: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAdd {
      return new ComputeOperationAdd($g.abi.libs_by_name.get(algebralib.name)!.mapped[109], input, input2, output);
    }
    static create(input: string, input2: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAdd {
      return new ComputeOperationAdd($g.abi.libs_by_name.get(algebralib.name)!.mapped[109], input, input2, output);
    }
  }

  export class ComputeVariable extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeVariable';

    name: string;

  }

  export class ComputeInitializerRelu extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerRelu';


    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerRelu {
      return new ComputeInitializerRelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[111]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerRelu {
      return new ComputeInitializerRelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[111]);
    }
  }

  export class ComputeOperationSoftmax extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationSoftmax';

    input: string;
    output: string;

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSoftmax {
      return new ComputeOperationSoftmax($g.abi.libs_by_name.get(algebralib.name)!.mapped[112], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSoftmax {
      return new ComputeOperationSoftmax($g.abi.libs_by_name.get(algebralib.name)!.mapped[112], input, output);
    }
  }

  export class ComputeActivationRelu extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeActivationRelu';

    max_value: number | null;
    threshold: number | null;

    static threshold_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[113];
      return  t.static_values['threshold_def'] as number;
    }
    static createFrom({max_value, threshold}: {max_value: number | null, threshold: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationRelu {
      return new ComputeActivationRelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[113], max_value, threshold);
    }
    static create(max_value: number | null, threshold: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationRelu {
      return new ComputeActivationRelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[113], max_value, threshold);
    }
  }

  export class ComputeOperationCos extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationCos';

    input: string;
    output: string;

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationCos {
      return new ComputeOperationCos($g.abi.libs_by_name.get(algebralib.name)!.mapped[114], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationCos {
      return new ComputeOperationCos($g.abi.libs_by_name.get(algebralib.name)!.mapped[114], input, output);
    }
  }

  export class ComputeLayerActivation extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeLayerActivation';

    name: string;
    activation: compute.ComputeActivation;

    static var_input_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[115];
      return  t.static_values['var_input_name'] as string;
    }
    static var_output_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[115];
      return  t.static_values['var_output_name'] as string;
    }
    static createFrom({name, activation}: {name: string, activation: compute.ComputeActivation}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerActivation {
      return new ComputeLayerActivation($g.abi.libs_by_name.get(algebralib.name)!.mapped[115], name, activation);
    }
    static create(name: string, activation: compute.ComputeActivation, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerActivation {
      return new ComputeLayerActivation($g.abi.libs_by_name.get(algebralib.name)!.mapped[115], name, activation);
    }
  }

  export class ComputeVarProxy extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeVarProxy';

    name: string;

    static createFrom({name}: {name: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeVarProxy {
      return new ComputeVarProxy($g.abi.libs_by_name.get(algebralib.name)!.mapped[116], name);
    }
    static create(name: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeVarProxy {
      return new ComputeVarProxy($g.abi.libs_by_name.get(algebralib.name)!.mapped[116], name);
    }
  }

  export class ComputeOperationAbs extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationAbs';

    input: string;
    output: string;

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAbs {
      return new ComputeOperationAbs($g.abi.libs_by_name.get(algebralib.name)!.mapped[117], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAbs {
      return new ComputeOperationAbs($g.abi.libs_by_name.get(algebralib.name)!.mapped[117], input, output);
    }
  }

  export class ComputeVarInOut extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeVarInOut';

    name: string;
    type: $sdk.std.core.TensorType;
    shape: globalThis.Array<bigint | number>;
    with_grad: boolean;

    static createFrom({name, type, shape, with_grad}: {name: string, type: $sdk.std.core.TensorType, shape: globalThis.Array<bigint | number>, with_grad: boolean}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeVarInOut {
      return new ComputeVarInOut($g.abi.libs_by_name.get(algebralib.name)!.mapped[118], name, type, shape, with_grad);
    }
    static create(name: string, type: $sdk.std.core.TensorType, shape: globalThis.Array<bigint | number>, with_grad: boolean, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeVarInOut {
      return new ComputeVarInOut($g.abi.libs_by_name.get(algebralib.name)!.mapped[118], name, type, shape, with_grad);
    }
  }

  export class ComputeLayerLoss extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeLayerLoss';

    name: string;
    reduction: compute.ComputeReduction | null;

    static var_computed_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[119];
      return  t.static_values['var_computed_name'] as string;
    }
    static var_expected_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[119];
      return  t.static_values['var_expected_name'] as string;
    }
    static var_loss_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[119];
      return  t.static_values['var_loss_name'] as string;
    }
  }

  export class ComputeLayerLinear extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeLayerLinear';

    name: string;
    type: $sdk.std.core.TensorType;
    inputs: bigint | number;
    outputs: bigint | number;
    use_bias: boolean;
    weight_initializer: compute.ComputeInitializer | null;
    weight_regularizer: compute.ComputeRegularizer | null;
    bias_initializer: compute.ComputeInitializer | null;
    bias_regularizer: compute.ComputeRegularizer | null;

    static var_input_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[120];
      return  t.static_values['var_input_name'] as string;
    }
    static var_output_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[120];
      return  t.static_values['var_output_name'] as string;
    }
    static var_weight_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[120];
      return  t.static_values['var_weight_name'] as string;
    }
    static var_bias_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[120];
      return  t.static_values['var_bias_name'] as string;
    }
    static var_mult_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[120];
      return  t.static_values['var_mult_name'] as string;
    }
    static createFrom({name, type, inputs, outputs, use_bias, weight_initializer, weight_regularizer, bias_initializer, bias_regularizer}: {name: string, type: $sdk.std.core.TensorType, inputs: bigint | number, outputs: bigint | number, use_bias: boolean, weight_initializer: compute.ComputeInitializer | null, weight_regularizer: compute.ComputeRegularizer | null, bias_initializer: compute.ComputeInitializer | null, bias_regularizer: compute.ComputeRegularizer | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerLinear {
      return new ComputeLayerLinear($g.abi.libs_by_name.get(algebralib.name)!.mapped[120], name, type, inputs, outputs, use_bias, weight_initializer, weight_regularizer, bias_initializer, bias_regularizer);
    }
    static create(name: string, type: $sdk.std.core.TensorType, inputs: bigint | number, outputs: bigint | number, use_bias: boolean, weight_initializer: compute.ComputeInitializer | null, weight_regularizer: compute.ComputeRegularizer | null, bias_initializer: compute.ComputeInitializer | null, bias_regularizer: compute.ComputeRegularizer | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerLinear {
      return new ComputeLayerLinear($g.abi.libs_by_name.get(algebralib.name)!.mapped[120], name, type, inputs, outputs, use_bias, weight_initializer, weight_regularizer, bias_initializer, bias_regularizer);
    }
  }

  export class ComputeBinding extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeBinding';

    src_layer_name: string;
    src_var_name: string;
    target_var_name: string;

    static createFrom({src_layer_name, src_var_name, target_var_name}: {src_layer_name: string, src_var_name: string, target_var_name: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeBinding {
      return new ComputeBinding($g.abi.libs_by_name.get(algebralib.name)!.mapped[121], src_layer_name, src_var_name, target_var_name);
    }
    static create(src_layer_name: string, src_var_name: string, target_var_name: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeBinding {
      return new ComputeBinding($g.abi.libs_by_name.get(algebralib.name)!.mapped[121], src_layer_name, src_var_name, target_var_name);
    }
  }

  export class ComputeOperationCosh extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationCosh';

    input: string;
    output: string;

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationCosh {
      return new ComputeOperationCosh($g.abi.libs_by_name.get(algebralib.name)!.mapped[122], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationCosh {
      return new ComputeOperationCosh($g.abi.libs_by_name.get(algebralib.name)!.mapped[122], input, output);
    }
  }

  export class ComputeOperationTan extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationTan';

    input: string;
    output: string;

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationTan {
      return new ComputeOperationTan($g.abi.libs_by_name.get(algebralib.name)!.mapped[123], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationTan {
      return new ComputeOperationTan($g.abi.libs_by_name.get(algebralib.name)!.mapped[123], input, output);
    }
  }

  export class ComputeOperationLeakyRelu extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationLeakyRelu';

    input: string;
    output: string;
    alpha: number | null;
    max_value: number | null;
    threshold: number | null;

    static alpha_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[124];
      return  t.static_values['alpha_def'] as number;
    }
    static max_value_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[124];
      return  t.static_values['max_value_def'] as number;
    }
    static threshold_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[124];
      return  t.static_values['threshold_def'] as number;
    }
    static createFrom({input, output, alpha, max_value, threshold}: {input: string, output: string, alpha: number | null, max_value: number | null, threshold: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationLeakyRelu {
      return new ComputeOperationLeakyRelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[124], input, output, alpha, max_value, threshold);
    }
    static create(input: string, output: string, alpha: number | null, max_value: number | null, threshold: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationLeakyRelu {
      return new ComputeOperationLeakyRelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[124], input, output, alpha, max_value, threshold);
    }
  }

  export class ComputeOperationTanh extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationTanh';

    input: string;
    output: string;

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationTanh {
      return new ComputeOperationTanh($g.abi.libs_by_name.get(algebralib.name)!.mapped[125], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationTanh {
      return new ComputeOperationTanh($g.abi.libs_by_name.get(algebralib.name)!.mapped[125], input, output);
    }
  }

  export class ComputeOperation2In1Out extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperation2In1Out';

    input: string;
    input2: string;
    output: string;

  }

  export class ComputeInitializerNormalOut extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerNormalOut';


    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerNormalOut {
      return new ComputeInitializerNormalOut($g.abi.libs_by_name.get(algebralib.name)!.mapped[127]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerNormalOut {
      return new ComputeInitializerNormalOut($g.abi.libs_by_name.get(algebralib.name)!.mapped[127]);
    }
  }

  export class ComputeActivation extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeActivation';


  }

}

export namespace climate {
}

export namespace nn_layers_names {
  export class NNLayersNames extends $sdk.GCEnum {
    static readonly _type = 'nn_layers_names::NNLayersNames';

    constructor(type: $sdk.AbiType, offset: number, public key: NNLayersNames.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static layer_0($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_0'];
    }
    static layer_1($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_1'];
    }
    static layer_2($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_2'];
    }
    static layer_3($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_3'];
    }
    static layer_4($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_4'];
    }
    static layer_5($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_5'];
    }
    static layer_6($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_6'];
    }
    static layer_7($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_7'];
    }
    static layer_8($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_8'];
    }
    static layer_9($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_9'];
    }
    static layer_10($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_10'];
    }
    static layer_11($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_11'];
    }
    static layer_12($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_12'];
    }
    static layer_13($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_13'];
    }
    static layer_14($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_14'];
    }
    static layer_15($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_15'];
    }
    static layer_16($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_16'];
    }
    static layer_17($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_17'];
    }
    static layer_18($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_18'];
    }
    static layer_19($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_19'];
    }
    static layer_20($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_20'];
    }
    static layer_21($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_21'];
    }
    static layer_22($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_22'];
    }
    static layer_23($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_23'];
    }
    static layer_24($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_24'];
    }
    static layer_25($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_25'];
    }
    static layer_26($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_26'];
    }
    static layer_27($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_27'];
    }
    static layer_28($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_28'];
    }
    static layer_29($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_29'];
    }
    static layer_30($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_30'];
    }
    static layer_31($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_31'];
    }
    static layer_32($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_32'];
    }
    static layer_33($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_33'];
    }
    static layer_34($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_34'];
    }
    static layer_35($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_35'];
    }
    static layer_36($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_36'];
    }
    static layer_37($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_37'];
    }
    static layer_38($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_38'];
    }
    static layer_39($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_39'];
    }
    static layer_40($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_40'];
    }
    static layer_41($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_41'];
    }
    static layer_42($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_42'];
    }
    static layer_43($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_43'];
    }
    static layer_44($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_44'];
    }
    static layer_45($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_45'];
    }
    static layer_46($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_46'];
    }
    static layer_47($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_47'];
    }
    static layer_48($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_48'];
    }
    static layer_49($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_49'];
    }
    static layer_50($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_50'];
    }
    static layer_51($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_51'];
    }
    static layer_52($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_52'];
    }
    static layer_53($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_53'];
    }
    static layer_54($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_54'];
    }
    static layer_55($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_55'];
    }
    static layer_56($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_56'];
    }
    static layer_57($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_57'];
    }
    static layer_58($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_58'];
    }
    static layer_59($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_59'];
    }
    static layer_60($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_60'];
    }
    static layer_61($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_61'];
    }
    static layer_62($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_62'];
    }
    static layer_63($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_63'];
    }
    static layer_64($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_64'];
    }
    static layer_65($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_65'];
    }
    static layer_66($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_66'];
    }
    static layer_67($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_67'];
    }
    static layer_68($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_68'];
    }
    static layer_69($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_69'];
    }
    static layer_70($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_70'];
    }
    static layer_71($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_71'];
    }
    static layer_72($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_72'];
    }
    static layer_73($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_73'];
    }
    static layer_74($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_74'];
    }
    static layer_75($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_75'];
    }
    static layer_76($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_76'];
    }
    static layer_77($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_77'];
    }
    static layer_78($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_78'];
    }
    static layer_79($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_79'];
    }
    static layer_80($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_80'];
    }
    static layer_81($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_81'];
    }
    static layer_82($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_82'];
    }
    static layer_83($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_83'];
    }
    static layer_84($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_84'];
    }
    static layer_85($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_85'];
    }
    static layer_86($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_86'];
    }
    static layer_87($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_87'];
    }
    static layer_88($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_88'];
    }
    static layer_89($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_89'];
    }
    static layer_90($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_90'];
    }
    static layer_91($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_91'];
    }
    static layer_92($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_92'];
    }
    static layer_93($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_93'];
    }
    static layer_94($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_94'];
    }
    static layer_95($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_95'];
    }
    static layer_96($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_96'];
    }
    static layer_97($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_97'];
    }
    static layer_98($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_98'];
    }
    static layer_99($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_99'];
    }
    static layer_100($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_100'];
    }
    static layer_101($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_101'];
    }
    static layer_102($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_102'];
    }
    static layer_103($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_103'];
    }
    static layer_104($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_104'];
    }
    static layer_105($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_105'];
    }
    static layer_106($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_106'];
    }
    static layer_107($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_107'];
    }
    static layer_108($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_108'];
    }
    static layer_109($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_109'];
    }
    static layer_110($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_110'];
    }
    static layer_111($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_111'];
    }
    static layer_112($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_112'];
    }
    static layer_113($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_113'];
    }
    static layer_114($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_114'];
    }
    static layer_115($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_115'];
    }
    static layer_116($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_116'];
    }
    static layer_117($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_117'];
    }
    static layer_118($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_118'];
    }
    static layer_119($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_119'];
    }
    static layer_120($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_120'];
    }
    static layer_121($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_121'];
    }
    static layer_122($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_122'];
    }
    static layer_123($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_123'];
    }
    static layer_124($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_124'];
    }
    static layer_125($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_125'];
    }
    static layer_126($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_126'];
    }
    static layer_127($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_127'];
    }
    static layer_128($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_128'];
    }
    static layer_129($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_129'];
    }
    static layer_130($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_130'];
    }
    static layer_131($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_131'];
    }
    static layer_132($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_132'];
    }
    static layer_133($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_133'];
    }
    static layer_134($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_134'];
    }
    static layer_135($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_135'];
    }
    static layer_136($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_136'];
    }
    static layer_137($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_137'];
    }
    static layer_138($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_138'];
    }
    static layer_139($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_139'];
    }
    static layer_140($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_140'];
    }
    static layer_141($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_141'];
    }
    static layer_142($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_142'];
    }
    static layer_143($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_143'];
    }
    static layer_144($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_144'];
    }
    static layer_145($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_145'];
    }
    static layer_146($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_146'];
    }
    static layer_147($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_147'];
    }
    static layer_148($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_148'];
    }
    static layer_149($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_149'];
    }
    static layer_150($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_150'];
    }
    static layer_151($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_151'];
    }
    static layer_152($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_152'];
    }
    static layer_153($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_153'];
    }
    static layer_154($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_154'];
    }
    static layer_155($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_155'];
    }
    static layer_156($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_156'];
    }
    static layer_157($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_157'];
    }
    static layer_158($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_158'];
    }
    static layer_159($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_159'];
    }
    static layer_160($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_160'];
    }
    static layer_161($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_161'];
    }
    static layer_162($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_162'];
    }
    static layer_163($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_163'];
    }
    static layer_164($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_164'];
    }
    static layer_165($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_165'];
    }
    static layer_166($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_166'];
    }
    static layer_167($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_167'];
    }
    static layer_168($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_168'];
    }
    static layer_169($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_169'];
    }
    static layer_170($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_170'];
    }
    static layer_171($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_171'];
    }
    static layer_172($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_172'];
    }
    static layer_173($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_173'];
    }
    static layer_174($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_174'];
    }
    static layer_175($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_175'];
    }
    static layer_176($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_176'];
    }
    static layer_177($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_177'];
    }
    static layer_178($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_178'];
    }
    static layer_179($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_179'];
    }
    static layer_180($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_180'];
    }
    static layer_181($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_181'];
    }
    static layer_182($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_182'];
    }
    static layer_183($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_183'];
    }
    static layer_184($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_184'];
    }
    static layer_185($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_185'];
    }
    static layer_186($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_186'];
    }
    static layer_187($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_187'];
    }
    static layer_188($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_188'];
    }
    static layer_189($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_189'];
    }
    static layer_190($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_190'];
    }
    static layer_191($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_191'];
    }
    static layer_192($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_192'];
    }
    static layer_193($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_193'];
    }
    static layer_194($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_194'];
    }
    static layer_195($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_195'];
    }
    static layer_196($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_196'];
    }
    static layer_197($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_197'];
    }
    static layer_198($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_198'];
    }
    static layer_199($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.static_values['layer_199'];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames[] {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
      return t.enum_values!;
    }
  }

  export namespace NNLayersNames  {
    export type Field = 'layer_0'|'layer_1'|'layer_2'|'layer_3'|'layer_4'|'layer_5'|'layer_6'|'layer_7'|'layer_8'|'layer_9'|'layer_10'|'layer_11'|'layer_12'|'layer_13'|'layer_14'|'layer_15'|'layer_16'|'layer_17'|'layer_18'|'layer_19'|'layer_20'|'layer_21'|'layer_22'|'layer_23'|'layer_24'|'layer_25'|'layer_26'|'layer_27'|'layer_28'|'layer_29'|'layer_30'|'layer_31'|'layer_32'|'layer_33'|'layer_34'|'layer_35'|'layer_36'|'layer_37'|'layer_38'|'layer_39'|'layer_40'|'layer_41'|'layer_42'|'layer_43'|'layer_44'|'layer_45'|'layer_46'|'layer_47'|'layer_48'|'layer_49'|'layer_50'|'layer_51'|'layer_52'|'layer_53'|'layer_54'|'layer_55'|'layer_56'|'layer_57'|'layer_58'|'layer_59'|'layer_60'|'layer_61'|'layer_62'|'layer_63'|'layer_64'|'layer_65'|'layer_66'|'layer_67'|'layer_68'|'layer_69'|'layer_70'|'layer_71'|'layer_72'|'layer_73'|'layer_74'|'layer_75'|'layer_76'|'layer_77'|'layer_78'|'layer_79'|'layer_80'|'layer_81'|'layer_82'|'layer_83'|'layer_84'|'layer_85'|'layer_86'|'layer_87'|'layer_88'|'layer_89'|'layer_90'|'layer_91'|'layer_92'|'layer_93'|'layer_94'|'layer_95'|'layer_96'|'layer_97'|'layer_98'|'layer_99'|'layer_100'|'layer_101'|'layer_102'|'layer_103'|'layer_104'|'layer_105'|'layer_106'|'layer_107'|'layer_108'|'layer_109'|'layer_110'|'layer_111'|'layer_112'|'layer_113'|'layer_114'|'layer_115'|'layer_116'|'layer_117'|'layer_118'|'layer_119'|'layer_120'|'layer_121'|'layer_122'|'layer_123'|'layer_124'|'layer_125'|'layer_126'|'layer_127'|'layer_128'|'layer_129'|'layer_130'|'layer_131'|'layer_132'|'layer_133'|'layer_134'|'layer_135'|'layer_136'|'layer_137'|'layer_138'|'layer_139'|'layer_140'|'layer_141'|'layer_142'|'layer_143'|'layer_144'|'layer_145'|'layer_146'|'layer_147'|'layer_148'|'layer_149'|'layer_150'|'layer_151'|'layer_152'|'layer_153'|'layer_154'|'layer_155'|'layer_156'|'layer_157'|'layer_158'|'layer_159'|'layer_160'|'layer_161'|'layer_162'|'layer_163'|'layer_164'|'layer_165'|'layer_166'|'layer_167'|'layer_168'|'layer_169'|'layer_170'|'layer_171'|'layer_172'|'layer_173'|'layer_174'|'layer_175'|'layer_176'|'layer_177'|'layer_178'|'layer_179'|'layer_180'|'layer_181'|'layer_182'|'layer_183'|'layer_184'|'layer_185'|'layer_186'|'layer_187'|'layer_188'|'layer_189'|'layer_190'|'layer_191'|'layer_192'|'layer_193'|'layer_194'|'layer_195'|'layer_196'|'layer_197'|'layer_198'|'layer_199';
  }
}

export namespace nn {
  export class ComputeLayerTypes extends $sdk.GCEnum {
    static readonly _type = 'nn::ComputeLayerTypes';

    constructor(type: $sdk.AbiType, offset: number, public key: ComputeLayerTypes.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static linear($g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerTypes {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[130];
      return t.static_values['linear'];
    }
    static dense($g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerTypes {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[130];
      return t.static_values['dense'];
    }
    static activation($g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerTypes {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[130];
      return t.static_values['activation'];
    }
    static lstm($g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerTypes {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[130];
      return t.static_values['lstm'];
    }
    static loss($g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerTypes {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[130];
      return t.static_values['loss'];
    }
    static filter($g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerTypes {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[130];
      return t.static_values['filter'];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerTypes[] {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[130];
      return t.enum_values!;
    }
  }

  export namespace ComputeLayerTypes  {
    export type Field = 'linear'|'dense'|'activation'|'lstm'|'loss'|'filter';
  }
  export class NeuralNetwork extends $sdk.GCObject {
    static readonly _type = 'nn::NeuralNetwork';

    inputs: bigint | number;
    inputs_gradients: boolean;
    outputs: bigint | number;
    fixed_batch_size: bigint | number;
    inputs_sequences: bigint | number;
    outputs_sequences: bigint | number;
    tensor_type: $sdk.std.core.TensorType;
    seed: bigint | number;
    randomizeSeed: boolean;
    layers: globalThis.Array<compute.ComputeLayer> | null;
    preProcessType: nn.PreProcessType | null;
    preProcessObject: any;
    postProcessType: nn.PostProcessType | null;
    postProcessObject: any;
    optimizer: compute.ComputeOptimizer;
    lossLayer: compute.ComputeLayerLoss | null;
    _lastLayer: string | null;
    _lastOutput: string | null;

    static err_negative_in_out($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['err_negative_in_out'] as string;
    }
    static err_last_layer_wrong($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['err_last_layer_wrong'] as string;
    }
    static err_incompatible_loss($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['err_incompatible_loss'] as string;
    }
    static err_layer_not_supported($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['err_layer_not_supported'] as string;
    }
    static err_tensor_type_not_supported($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['err_tensor_type_not_supported'] as string;
    }
    static err_minimum_layers($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['err_minimum_layers'] as string;
    }
    static layer_placeholders_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['layer_placeholders_name'] as string;
    }
    static layer_classification_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['layer_classification_name'] as string;
    }
    static layer_preprocess_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['layer_preprocess_name'] as string;
    }
    static layer_postprocess_learn_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['layer_postprocess_learn_name'] as string;
    }
    static layer_main_layers_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['layer_main_layers_name'] as string;
    }
    static layer_loss_learn_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['layer_loss_learn_name'] as string;
    }
    static layer_loss_display_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['layer_loss_display_name'] as string;
    }
    static layer_postprocess_display_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['layer_postprocess_display_name'] as string;
    }
    static layer_confusion_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['layer_confusion_name'] as string;
    }
    static seq_predict($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['seq_predict'] as string;
    }
    static seq_post_process($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['seq_post_process'] as string;
    }
    static seq_learn($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['seq_learn'] as string;
    }
    static seq_loss_display($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['seq_loss_display'] as string;
    }
    static seq_encode($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['seq_encode'] as string;
    }
    static seq_decode($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['seq_decode'] as string;
    }
    static seq_confusion($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['seq_confusion'] as string;
    }
    static var_inputs_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['var_inputs_name'] as string;
    }
    static var_enc_inputs_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['var_enc_inputs_name'] as string;
    }
    static var_targets_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['var_targets_name'] as string;
    }
    static var_classifier_classes($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['var_classifier_classes'] as string;
    }
    static var_classifier_probabilities($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['var_classifier_probabilities'] as string;
    }
    static var_classifier_class_weights($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['var_classifier_class_weights'] as string;
    }
    static var_classifier_confusion($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['var_classifier_confusion'] as string;
    }
    static var_input_avg($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['var_input_avg'] as string;
    }
    static var_input_min($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['var_input_min'] as string;
    }
    static var_input_max($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['var_input_max'] as string;
    }
    static var_input_std($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['var_input_std'] as string;
    }
    static var_input_space($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['var_input_space'] as string;
    }
    static var_output_avg($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['var_output_avg'] as string;
    }
    static var_output_min($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['var_output_min'] as string;
    }
    static var_output_max($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['var_output_max'] as string;
    }
    static var_output_std($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return  t.static_values['var_output_std'] as string;
    }
  }

  export class PostProcessType extends $sdk.GCEnum {
    static readonly _type = 'nn::PostProcessType';

    constructor(type: $sdk.AbiType, offset: number, public key: PostProcessType.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static none($g: $sdk.GreyCat = globalThis.greycat.default): PostProcessType {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[132];
      return t.static_values['none'];
    }
    static min_max_scaling($g: $sdk.GreyCat = globalThis.greycat.default): PostProcessType {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[132];
      return t.static_values['min_max_scaling'];
    }
    static standard_scaling($g: $sdk.GreyCat = globalThis.greycat.default): PostProcessType {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[132];
      return t.static_values['standard_scaling'];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): PostProcessType[] {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[132];
      return t.enum_values!;
    }
  }

  export namespace PostProcessType  {
    export type Field = 'none'|'min_max_scaling'|'standard_scaling';
  }
  export class BindingsResult extends $sdk.GCObject {
    static readonly _type = 'nn::BindingsResult';

    previousLayerName: string;
    previousLayerOutput: string;
    expectedLayerName: string;
    expectedLayerOutput: string;
    postLayer: compute.ComputeLayer | null;

    static createFrom({previousLayerName, previousLayerOutput, expectedLayerName, expectedLayerOutput, postLayer}: {previousLayerName: string, previousLayerOutput: string, expectedLayerName: string, expectedLayerOutput: string, postLayer: compute.ComputeLayer | null}, $g: $sdk.GreyCat = globalThis.greycat.default): BindingsResult {
      return new BindingsResult($g.abi.libs_by_name.get(algebralib.name)!.mapped[133], previousLayerName, previousLayerOutput, expectedLayerName, expectedLayerOutput, postLayer);
    }
    static create(previousLayerName: string, previousLayerOutput: string, expectedLayerName: string, expectedLayerOutput: string, postLayer: compute.ComputeLayer | null, $g: $sdk.GreyCat = globalThis.greycat.default): BindingsResult {
      return new BindingsResult($g.abi.libs_by_name.get(algebralib.name)!.mapped[133], previousLayerName, previousLayerOutput, expectedLayerName, expectedLayerOutput, postLayer);
    }
  }

  export class ComputeActivations extends $sdk.GCEnum {
    static readonly _type = 'nn::ComputeActivations';

    constructor(type: $sdk.AbiType, offset: number, public key: ComputeActivations.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static relu($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivations {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[134];
      return t.static_values['relu'];
    }
    static leaky_relu($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivations {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[134];
      return t.static_values['leaky_relu'];
    }
    static sigmoid($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivations {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[134];
      return t.static_values['sigmoid'];
    }
    static hard_sigmoid($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivations {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[134];
      return t.static_values['hard_sigmoid'];
    }
    static exp($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivations {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[134];
      return t.static_values['exp'];
    }
    static soft_max($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivations {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[134];
      return t.static_values['soft_max'];
    }
    static soft_plus($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivations {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[134];
      return t.static_values['soft_plus'];
    }
    static soft_sign($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivations {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[134];
      return t.static_values['soft_sign'];
    }
    static tanh($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivations {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[134];
      return t.static_values['tanh'];
    }
    static selu($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivations {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[134];
      return t.static_values['selu'];
    }
    static elu($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivations {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[134];
      return t.static_values['elu'];
    }
    static celu($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivations {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[134];
      return t.static_values['celu'];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivations[] {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[134];
      return t.enum_values!;
    }
  }

  export namespace ComputeActivations  {
    export type Field = 'relu'|'leaky_relu'|'sigmoid'|'hard_sigmoid'|'exp'|'soft_max'|'soft_plus'|'soft_sign'|'tanh'|'selu'|'elu'|'celu';
  }
  export class ComputeInitializers extends $sdk.GCEnum {
    static readonly _type = 'nn::ComputeInitializers';

    constructor(type: $sdk.AbiType, offset: number, public key: ComputeInitializers.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static none($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[135];
      return t.static_values['none'];
    }
    static constant($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[135];
      return t.static_values['constant'];
    }
    static sigmoid_uniform($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[135];
      return t.static_values['sigmoid_uniform'];
    }
    static lecun_uniform($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[135];
      return t.static_values['lecun_uniform'];
    }
    static xavier($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[135];
      return t.static_values['xavier'];
    }
    static xavier_uniform($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[135];
      return t.static_values['xavier_uniform'];
    }
    static relu($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[135];
      return t.static_values['relu'];
    }
    static relu_uniform($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[135];
      return t.static_values['relu_uniform'];
    }
    static normal($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[135];
      return t.static_values['normal'];
    }
    static normal_in($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[135];
      return t.static_values['normal_in'];
    }
    static normal_out($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[135];
      return t.static_values['normal_out'];
    }
    static normal_avg($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[135];
      return t.static_values['normal_avg'];
    }
    static uniform($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[135];
      return t.static_values['uniform'];
    }
    static uniform_in($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[135];
      return t.static_values['uniform_in'];
    }
    static uniform_out($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[135];
      return t.static_values['uniform_out'];
    }
    static uniform_avg($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[135];
      return t.static_values['uniform_avg'];
    }
    static identity($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[135];
      return t.static_values['identity'];
    }
    static pytorch($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[135];
      return t.static_values['pytorch'];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers[] {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[135];
      return t.enum_values!;
    }
  }

  export namespace ComputeInitializers  {
    export type Field = 'none'|'constant'|'sigmoid_uniform'|'lecun_uniform'|'xavier'|'xavier_uniform'|'relu'|'relu_uniform'|'normal'|'normal_in'|'normal_out'|'normal_avg'|'uniform'|'uniform_in'|'uniform_out'|'uniform_avg'|'identity'|'pytorch';
  }
  export class InitializerConfig extends $sdk.GCObject {
    static readonly _type = 'nn::InitializerConfig';

    weight_initializer: compute.ComputeInitializer | null;
    weight_regularizer: compute.ComputeRegularizer | null;
    bias_initializer: compute.ComputeInitializer | null;
    bias_regularizer: compute.ComputeRegularizer | null;

    static createFrom({weight_initializer, weight_regularizer, bias_initializer, bias_regularizer}: {weight_initializer: compute.ComputeInitializer | null, weight_regularizer: compute.ComputeRegularizer | null, bias_initializer: compute.ComputeInitializer | null, bias_regularizer: compute.ComputeRegularizer | null}, $g: $sdk.GreyCat = globalThis.greycat.default): InitializerConfig {
      return new InitializerConfig($g.abi.libs_by_name.get(algebralib.name)!.mapped[136], weight_initializer, weight_regularizer, bias_initializer, bias_regularizer);
    }
    static create(weight_initializer: compute.ComputeInitializer | null, weight_regularizer: compute.ComputeRegularizer | null, bias_initializer: compute.ComputeInitializer | null, bias_regularizer: compute.ComputeRegularizer | null, $g: $sdk.GreyCat = globalThis.greycat.default): InitializerConfig {
      return new InitializerConfig($g.abi.libs_by_name.get(algebralib.name)!.mapped[136], weight_initializer, weight_regularizer, bias_initializer, bias_regularizer);
    }
  }

  export class ClassificationMetrics extends $sdk.GCObject {
    static readonly _type = 'nn::ClassificationMetrics';

    precision: globalThis.Array<number>;
    recall: globalThis.Array<number>;
    f1Score: globalThis.Array<number>;

    static createFrom({precision, recall, f1Score}: {precision: globalThis.Array<number>, recall: globalThis.Array<number>, f1Score: globalThis.Array<number>}, $g: $sdk.GreyCat = globalThis.greycat.default): ClassificationMetrics {
      return new ClassificationMetrics($g.abi.libs_by_name.get(algebralib.name)!.mapped[137], precision, recall, f1Score);
    }
    static create(precision: globalThis.Array<number>, recall: globalThis.Array<number>, f1Score: globalThis.Array<number>, $g: $sdk.GreyCat = globalThis.greycat.default): ClassificationMetrics {
      return new ClassificationMetrics($g.abi.libs_by_name.get(algebralib.name)!.mapped[137], precision, recall, f1Score);
    }
  }

  export class ClassificationNetwork extends $sdk.GCObject {
    static readonly _type = 'nn::ClassificationNetwork';

    inputs: bigint | number;
    inputs_gradients: boolean;
    outputs: bigint | number;
    fixed_batch_size: bigint | number;
    inputs_sequences: bigint | number;
    outputs_sequences: bigint | number;
    tensor_type: $sdk.std.core.TensorType;
    seed: bigint | number;
    randomizeSeed: boolean;
    layers: globalThis.Array<compute.ComputeLayer> | null;
    preProcessType: nn.PreProcessType | null;
    preProcessObject: any;
    postProcessType: nn.PostProcessType | null;
    postProcessObject: any;
    optimizer: compute.ComputeOptimizer;
    lossLayer: compute.ComputeLayerLoss | null;
    _lastLayer: string | null;
    _lastOutput: string | null;
    calculate_probabilities: boolean;
    has_class_weights: boolean;
    from_logits: boolean;

    static createFrom({inputs, inputs_gradients, outputs, fixed_batch_size, inputs_sequences, outputs_sequences, tensor_type, seed, randomizeSeed, layers, preProcessType, preProcessObject, postProcessType, postProcessObject, optimizer, lossLayer, _lastLayer, _lastOutput, calculate_probabilities, has_class_weights, from_logits}: {inputs: bigint | number, inputs_gradients: boolean, outputs: bigint | number, fixed_batch_size: bigint | number, inputs_sequences: bigint | number, outputs_sequences: bigint | number, tensor_type: $sdk.std.core.TensorType, seed: bigint | number, randomizeSeed: boolean, layers: globalThis.Array<compute.ComputeLayer> | null, preProcessType: nn.PreProcessType | null, preProcessObject: any | null, postProcessType: nn.PostProcessType | null, postProcessObject: any | null, optimizer: compute.ComputeOptimizer, lossLayer: compute.ComputeLayerLoss | null, _lastLayer: string | null, _lastOutput: string | null, calculate_probabilities: boolean, has_class_weights: boolean, from_logits: boolean}, $g: $sdk.GreyCat = globalThis.greycat.default): ClassificationNetwork {
      return new ClassificationNetwork($g.abi.libs_by_name.get(algebralib.name)!.mapped[138], inputs, inputs_gradients, outputs, fixed_batch_size, inputs_sequences, outputs_sequences, tensor_type, seed, randomizeSeed, layers, preProcessType, preProcessObject, postProcessType, postProcessObject, optimizer, lossLayer, _lastLayer, _lastOutput, calculate_probabilities, has_class_weights, from_logits);
    }
    static create(inputs: bigint | number, inputs_gradients: boolean, outputs: bigint | number, fixed_batch_size: bigint | number, inputs_sequences: bigint | number, outputs_sequences: bigint | number, tensor_type: $sdk.std.core.TensorType, seed: bigint | number, randomizeSeed: boolean, layers: globalThis.Array<compute.ComputeLayer> | null, preProcessType: nn.PreProcessType | null, preProcessObject: any | null, postProcessType: nn.PostProcessType | null, postProcessObject: any | null, optimizer: compute.ComputeOptimizer, lossLayer: compute.ComputeLayerLoss | null, _lastLayer: string | null, _lastOutput: string | null, calculate_probabilities: boolean, has_class_weights: boolean, from_logits: boolean, $g: $sdk.GreyCat = globalThis.greycat.default): ClassificationNetwork {
      return new ClassificationNetwork($g.abi.libs_by_name.get(algebralib.name)!.mapped[138], inputs, inputs_gradients, outputs, fixed_batch_size, inputs_sequences, outputs_sequences, tensor_type, seed, randomizeSeed, layers, preProcessType, preProcessObject, postProcessType, postProcessObject, optimizer, lossLayer, _lastLayer, _lastOutput, calculate_probabilities, has_class_weights, from_logits);
    }
  }

  export class ComputeOptimizers extends $sdk.GCEnum {
    static readonly _type = 'nn::ComputeOptimizers';

    constructor(type: $sdk.AbiType, offset: number, public key: ComputeOptimizers.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static ada_delta($g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[139];
      return t.static_values['ada_delta'];
    }
    static ada_grad($g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[139];
      return t.static_values['ada_grad'];
    }
    static adam($g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[139];
      return t.static_values['adam'];
    }
    static ada_max($g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[139];
      return t.static_values['ada_max'];
    }
    static nadam($g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[139];
      return t.static_values['nadam'];
    }
    static ftrl($g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[139];
      return t.static_values['ftrl'];
    }
    static sgd($g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[139];
      return t.static_values['sgd'];
    }
    static rms_prop($g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[139];
      return t.static_values['rms_prop'];
    }
    static momentum($g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[139];
      return t.static_values['momentum'];
    }
    static nesterov($g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[139];
      return t.static_values['nesterov'];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizers[] {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[139];
      return t.enum_values!;
    }
  }

  export namespace ComputeOptimizers  {
    export type Field = 'ada_delta'|'ada_grad'|'adam'|'ada_max'|'nadam'|'ftrl'|'sgd'|'rms_prop'|'momentum'|'nesterov';
  }
  export class AutoEncoderNetwork extends $sdk.GCObject {
    static readonly _type = 'nn::AutoEncoderNetwork';

    inputs: bigint | number;
    inputs_gradients: boolean;
    outputs: bigint | number;
    fixed_batch_size: bigint | number;
    inputs_sequences: bigint | number;
    outputs_sequences: bigint | number;
    tensor_type: $sdk.std.core.TensorType;
    seed: bigint | number;
    randomizeSeed: boolean;
    layers: globalThis.Array<compute.ComputeLayer> | null;
    preProcessType: nn.PreProcessType | null;
    preProcessObject: any;
    postProcessType: nn.PostProcessType | null;
    postProcessObject: any;
    optimizer: compute.ComputeOptimizer;
    lossLayer: compute.ComputeLayerLoss | null;
    _lastLayer: string | null;
    _lastOutput: string | null;
    encoder_layer_idx: bigint | number;
    encoder_layer_name: string | null;
    encoder_layer_var: string | null;

    static createFrom({inputs, inputs_gradients, outputs, fixed_batch_size, inputs_sequences, outputs_sequences, tensor_type, seed, randomizeSeed, layers, preProcessType, preProcessObject, postProcessType, postProcessObject, optimizer, lossLayer, _lastLayer, _lastOutput, encoder_layer_idx, encoder_layer_name, encoder_layer_var}: {inputs: bigint | number, inputs_gradients: boolean, outputs: bigint | number, fixed_batch_size: bigint | number, inputs_sequences: bigint | number, outputs_sequences: bigint | number, tensor_type: $sdk.std.core.TensorType, seed: bigint | number, randomizeSeed: boolean, layers: globalThis.Array<compute.ComputeLayer> | null, preProcessType: nn.PreProcessType | null, preProcessObject: any | null, postProcessType: nn.PostProcessType | null, postProcessObject: any | null, optimizer: compute.ComputeOptimizer, lossLayer: compute.ComputeLayerLoss | null, _lastLayer: string | null, _lastOutput: string | null, encoder_layer_idx: bigint | number, encoder_layer_name: string | null, encoder_layer_var: string | null}, $g: $sdk.GreyCat = globalThis.greycat.default): AutoEncoderNetwork {
      return new AutoEncoderNetwork($g.abi.libs_by_name.get(algebralib.name)!.mapped[140], inputs, inputs_gradients, outputs, fixed_batch_size, inputs_sequences, outputs_sequences, tensor_type, seed, randomizeSeed, layers, preProcessType, preProcessObject, postProcessType, postProcessObject, optimizer, lossLayer, _lastLayer, _lastOutput, encoder_layer_idx, encoder_layer_name, encoder_layer_var);
    }
    static create(inputs: bigint | number, inputs_gradients: boolean, outputs: bigint | number, fixed_batch_size: bigint | number, inputs_sequences: bigint | number, outputs_sequences: bigint | number, tensor_type: $sdk.std.core.TensorType, seed: bigint | number, randomizeSeed: boolean, layers: globalThis.Array<compute.ComputeLayer> | null, preProcessType: nn.PreProcessType | null, preProcessObject: any | null, postProcessType: nn.PostProcessType | null, postProcessObject: any | null, optimizer: compute.ComputeOptimizer, lossLayer: compute.ComputeLayerLoss | null, _lastLayer: string | null, _lastOutput: string | null, encoder_layer_idx: bigint | number, encoder_layer_name: string | null, encoder_layer_var: string | null, $g: $sdk.GreyCat = globalThis.greycat.default): AutoEncoderNetwork {
      return new AutoEncoderNetwork($g.abi.libs_by_name.get(algebralib.name)!.mapped[140], inputs, inputs_gradients, outputs, fixed_batch_size, inputs_sequences, outputs_sequences, tensor_type, seed, randomizeSeed, layers, preProcessType, preProcessObject, postProcessType, postProcessObject, optimizer, lossLayer, _lastLayer, _lastOutput, encoder_layer_idx, encoder_layer_name, encoder_layer_var);
    }
  }

  export class RegressionNetwork extends $sdk.GCObject {
    static readonly _type = 'nn::RegressionNetwork';

    inputs: bigint | number;
    inputs_gradients: boolean;
    outputs: bigint | number;
    fixed_batch_size: bigint | number;
    inputs_sequences: bigint | number;
    outputs_sequences: bigint | number;
    tensor_type: $sdk.std.core.TensorType;
    seed: bigint | number;
    randomizeSeed: boolean;
    layers: globalThis.Array<compute.ComputeLayer> | null;
    preProcessType: nn.PreProcessType | null;
    preProcessObject: any;
    postProcessType: nn.PostProcessType | null;
    postProcessObject: any;
    optimizer: compute.ComputeOptimizer;
    lossLayer: compute.ComputeLayerLoss | null;
    _lastLayer: string | null;
    _lastOutput: string | null;

    static createFrom({inputs, inputs_gradients, outputs, fixed_batch_size, inputs_sequences, outputs_sequences, tensor_type, seed, randomizeSeed, layers, preProcessType, preProcessObject, postProcessType, postProcessObject, optimizer, lossLayer, _lastLayer, _lastOutput}: {inputs: bigint | number, inputs_gradients: boolean, outputs: bigint | number, fixed_batch_size: bigint | number, inputs_sequences: bigint | number, outputs_sequences: bigint | number, tensor_type: $sdk.std.core.TensorType, seed: bigint | number, randomizeSeed: boolean, layers: globalThis.Array<compute.ComputeLayer> | null, preProcessType: nn.PreProcessType | null, preProcessObject: any | null, postProcessType: nn.PostProcessType | null, postProcessObject: any | null, optimizer: compute.ComputeOptimizer, lossLayer: compute.ComputeLayerLoss | null, _lastLayer: string | null, _lastOutput: string | null}, $g: $sdk.GreyCat = globalThis.greycat.default): RegressionNetwork {
      return new RegressionNetwork($g.abi.libs_by_name.get(algebralib.name)!.mapped[141], inputs, inputs_gradients, outputs, fixed_batch_size, inputs_sequences, outputs_sequences, tensor_type, seed, randomizeSeed, layers, preProcessType, preProcessObject, postProcessType, postProcessObject, optimizer, lossLayer, _lastLayer, _lastOutput);
    }
    static create(inputs: bigint | number, inputs_gradients: boolean, outputs: bigint | number, fixed_batch_size: bigint | number, inputs_sequences: bigint | number, outputs_sequences: bigint | number, tensor_type: $sdk.std.core.TensorType, seed: bigint | number, randomizeSeed: boolean, layers: globalThis.Array<compute.ComputeLayer> | null, preProcessType: nn.PreProcessType | null, preProcessObject: any | null, postProcessType: nn.PostProcessType | null, postProcessObject: any | null, optimizer: compute.ComputeOptimizer, lossLayer: compute.ComputeLayerLoss | null, _lastLayer: string | null, _lastOutput: string | null, $g: $sdk.GreyCat = globalThis.greycat.default): RegressionNetwork {
      return new RegressionNetwork($g.abi.libs_by_name.get(algebralib.name)!.mapped[141], inputs, inputs_gradients, outputs, fixed_batch_size, inputs_sequences, outputs_sequences, tensor_type, seed, randomizeSeed, layers, preProcessType, preProcessObject, postProcessType, postProcessObject, optimizer, lossLayer, _lastLayer, _lastOutput);
    }
  }

  export class PreProcessType extends $sdk.GCEnum {
    static readonly _type = 'nn::PreProcessType';

    constructor(type: $sdk.AbiType, offset: number, public key: PreProcessType.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static none($g: $sdk.GreyCat = globalThis.greycat.default): PreProcessType {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[142];
      return t.static_values['none'];
    }
    static min_max_scaling($g: $sdk.GreyCat = globalThis.greycat.default): PreProcessType {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[142];
      return t.static_values['min_max_scaling'];
    }
    static standard_scaling($g: $sdk.GreyCat = globalThis.greycat.default): PreProcessType {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[142];
      return t.static_values['standard_scaling'];
    }
    static pca_scaling($g: $sdk.GreyCat = globalThis.greycat.default): PreProcessType {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[142];
      return t.static_values['pca_scaling'];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): PreProcessType[] {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[142];
      return t.enum_values!;
    }
  }

  export namespace PreProcessType  {
    export type Field = 'none'|'min_max_scaling'|'standard_scaling'|'pca_scaling';
  }
}

export namespace kmeans {
  export class Kmeans extends $sdk.GCObject {
    static readonly _type = 'kmeans::Kmeans';


    static var_input($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[143];
      return  t.static_values['var_input'] as string;
    }
    static var_assignement($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[143];
      return  t.static_values['var_assignement'] as string;
    }
    static var_min_distance($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[143];
      return  t.static_values['var_min_distance'] as string;
    }
    static varo_centroids($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[143];
      return  t.static_values['varo_centroids'] as string;
    }
    static var_distance($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[143];
      return  t.static_values['var_distance'] as string;
    }
    static var_sum_centroids($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[143];
      return  t.static_values['var_sum_centroids'] as string;
    }
    static var_sum_min_distance($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[143];
      return  t.static_values['var_sum_min_distance'] as string;
    }
    static var_count_centroids($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[143];
      return  t.static_values['var_count_centroids'] as string;
    }
    static var_centroid_distances($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[143];
      return  t.static_values['var_centroid_distances'] as string;
    }
    static var_sum_cluster_distances($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[143];
      return  t.static_values['var_sum_cluster_distances'] as string;
    }
    static var_avg_cluster_distances($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[143];
      return  t.static_values['var_avg_cluster_distances'] as string;
    }
    static var_count_cluster_distances($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[143];
      return  t.static_values['var_count_cluster_distances'] as string;
    }
    static layer_placeholders($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[143];
      return  t.static_values['layer_placeholders'] as string;
    }
    static layer_forward($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[143];
      return  t.static_values['layer_forward'] as string;
    }
    static layer_backward($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[143];
      return  t.static_values['layer_backward'] as string;
    }
    static layer_init_round($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[143];
      return  t.static_values['layer_init_round'] as string;
    }
    static layer_end_round($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[143];
      return  t.static_values['layer_end_round'] as string;
    }
    static layer_stats($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[143];
      return  t.static_values['layer_stats'] as string;
    }
    static seq_init_round($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[143];
      return  t.static_values['seq_init_round'] as string;
    }
    static seq_forward($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[143];
      return  t.static_values['seq_forward'] as string;
    }
    static seq_backward($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[143];
      return  t.static_values['seq_backward'] as string;
    }
    static seq_end_round($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[143];
      return  t.static_values['seq_end_round'] as string;
    }
    static seq_stats($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[143];
      return  t.static_values['seq_stats'] as string;
    }
    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): Kmeans {
      return new Kmeans($g.abi.libs_by_name.get(algebralib.name)!.mapped[143]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): Kmeans {
      return new Kmeans($g.abi.libs_by_name.get(algebralib.name)!.mapped[143]);
    }
  }

}

export namespace ml {
  export class TimeSeriesDecomposition extends $sdk.GCObject {
    static readonly _type = 'ml::TimeSeriesDecomposition';


    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): TimeSeriesDecomposition {
      return new TimeSeriesDecomposition($g.abi.libs_by_name.get(algebralib.name)!.mapped[144]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): TimeSeriesDecomposition {
      return new TimeSeriesDecomposition($g.abi.libs_by_name.get(algebralib.name)!.mapped[144]);
    }
  }

  export class Polynomial extends algebra_n.ml.Polynomial {
  }

  export class PCA extends algebra_n.ml.PCA {
  }

  export class Solver extends $sdk.GCObject {
    static readonly _type = 'ml::Solver';


    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): Solver {
      return new Solver($g.abi.libs_by_name.get(algebralib.name)!.mapped[147]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): Solver {
      return new Solver($g.abi.libs_by_name.get(algebralib.name)!.mapped[147]);
    }
  }

  export class GaussianND extends algebra_n.ml.GaussianND {
  }

  export class HeatMapProfile extends $sdk.GCObject {
    static readonly _type = 'ml::HeatMapProfile';

    counts: $sdk.std.core.Table<bigint | number>;
    x_labels: globalThis.Array<string>;
    y_labels: globalThis.Array<string>;
    counts_max: bigint | number;
    counts_sum: bigint | number;

    static createFrom({counts, x_labels, y_labels, counts_max, counts_sum}: {counts: $sdk.std.core.Table<bigint | number>, x_labels: globalThis.Array<string>, y_labels: globalThis.Array<string>, counts_max: bigint | number, counts_sum: bigint | number}, $g: $sdk.GreyCat = globalThis.greycat.default): HeatMapProfile {
      return new HeatMapProfile($g.abi.libs_by_name.get(algebralib.name)!.mapped[149], counts, x_labels, y_labels, counts_max, counts_sum);
    }
    static create(counts: $sdk.std.core.Table<bigint | number>, x_labels: globalThis.Array<string>, y_labels: globalThis.Array<string>, counts_max: bigint | number, counts_sum: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default): HeatMapProfile {
      return new HeatMapProfile($g.abi.libs_by_name.get(algebralib.name)!.mapped[149], counts, x_labels, y_labels, counts_max, counts_sum);
    }
  }

}

export namespace transforms {
}

export namespace powerflow {
  export class PowerLineResult extends $sdk.GCObject {
    static readonly _type = 'powerflow::PowerLineResult';

    p_from_mw: number;
    q_from_mvar: number;
    p_to_mw: number;
    q_to_mvar: number;
    pl_mw: number;
    ql_mvar: number;
    i_from_ka: number;
    i_to_ka: number;
    i_ka: number;
    vm_from_pu: number;
    vm_to_pu: number;
    va_from_radians: number;
    va_to_radians: number;
    loading_percent: number;

    static createFrom({p_from_mw, q_from_mvar, p_to_mw, q_to_mvar, pl_mw, ql_mvar, i_from_ka, i_to_ka, i_ka, vm_from_pu, vm_to_pu, va_from_radians, va_to_radians, loading_percent}: {p_from_mw: number, q_from_mvar: number, p_to_mw: number, q_to_mvar: number, pl_mw: number, ql_mvar: number, i_from_ka: number, i_to_ka: number, i_ka: number, vm_from_pu: number, vm_to_pu: number, va_from_radians: number, va_to_radians: number, loading_percent: number}, $g: $sdk.GreyCat = globalThis.greycat.default): PowerLineResult {
      return new PowerLineResult($g.abi.libs_by_name.get(algebralib.name)!.mapped[150], p_from_mw, q_from_mvar, p_to_mw, q_to_mvar, pl_mw, ql_mvar, i_from_ka, i_to_ka, i_ka, vm_from_pu, vm_to_pu, va_from_radians, va_to_radians, loading_percent);
    }
    static create(p_from_mw: number, q_from_mvar: number, p_to_mw: number, q_to_mvar: number, pl_mw: number, ql_mvar: number, i_from_ka: number, i_to_ka: number, i_ka: number, vm_from_pu: number, vm_to_pu: number, va_from_radians: number, va_to_radians: number, loading_percent: number, $g: $sdk.GreyCat = globalThis.greycat.default): PowerLineResult {
      return new PowerLineResult($g.abi.libs_by_name.get(algebralib.name)!.mapped[150], p_from_mw, q_from_mvar, p_to_mw, q_to_mvar, pl_mw, ql_mvar, i_from_ka, i_to_ka, i_ka, vm_from_pu, vm_to_pu, va_from_radians, va_to_radians, loading_percent);
    }
  }

  export class PowerBusResult extends $sdk.GCObject {
    static readonly _type = 'powerflow::PowerBusResult';

    abs: number;
    angle_radians: number;
    voltage: number;
    voltage_img: number;
    current: number;
    current_img: number;

    static createFrom({abs, angle_radians, voltage, voltage_img, current, current_img}: {abs: number, angle_radians: number, voltage: number, voltage_img: number, current: number, current_img: number}, $g: $sdk.GreyCat = globalThis.greycat.default): PowerBusResult {
      return new PowerBusResult($g.abi.libs_by_name.get(algebralib.name)!.mapped[151], abs, angle_radians, voltage, voltage_img, current, current_img);
    }
    static create(abs: number, angle_radians: number, voltage: number, voltage_img: number, current: number, current_img: number, $g: $sdk.GreyCat = globalThis.greycat.default): PowerBusResult {
      return new PowerBusResult($g.abi.libs_by_name.get(algebralib.name)!.mapped[151], abs, angle_radians, voltage, voltage_img, current, current_img);
    }
  }

}

export const algebralib: $sdk.Library = {
  name: 'algebra',
  mapped: new globalThis.Array(152),
  configure(loaders, factories) {
    factories.set(compute.ComputeLayerLossRegression._type, compute.ComputeLayerLossRegression);
    factories.set(compute.ComputeOperationEuclidean._type, compute.ComputeOperationEuclidean);
    factories.set(compute.ComputeOperation1In1Out._type, compute.ComputeOperation1In1Out);
    factories.set(compute.ComputeOperationSoftplus._type, compute.ComputeOperationSoftplus);
    factories.set(compute.ComputeInitializerUniform._type, compute.ComputeInitializerUniform);
    factories.set(compute.ComputeInitializerUniformIn._type, compute.ComputeInitializerUniformIn);
    factories.set(compute.ComputeOperationAddBias._type, compute.ComputeOperationAddBias);
    factories.set(compute.ComputeOperationLogSoftmax._type, compute.ComputeOperationLogSoftmax);
    factories.set(compute.ComputeLayer._type, compute.ComputeLayer);
    factories.set(compute.ComputeInitializerNormalAvg._type, compute.ComputeInitializerNormalAvg);
    factories.set(compute.ComputeInitializerUniformAvg._type, compute.ComputeInitializerUniformAvg);
    factories.set(compute.ComputeOperationAsin._type, compute.ComputeOperationAsin);
    factories.set(compute.ComputeOptimizerAdaGrad._type, compute.ComputeOptimizerAdaGrad);
    factories.set(compute.ComputeActivationExp._type, compute.ComputeActivationExp);
    factories.set(compute.ComputeLayerConfusion._type, compute.ComputeLayerConfusion);
    factories.set(compute.ComputeVarOptimize._type, compute.ComputeVarOptimize);
    factories.set(compute.ComputeInitializerConstant._type, compute.ComputeInitializerConstant);
    factories.set(compute.ComputeOperationSub._type, compute.ComputeOperationSub);
    factories.set(compute.ComputeOperationElu._type, compute.ComputeOperationElu);
    factories.set(compute.ComputeOperationMul._type, compute.ComputeOperationMul);
    factories.set(compute.ComputeOptimizerAdaMax._type, compute.ComputeOptimizerAdaMax);
    factories.set(compute.ComputeRegressionLoss._type, compute.ComputeRegressionLoss);
    factories.set(compute.ComputeOperationSoftSign._type, compute.ComputeOperationSoftSign);
    factories.set(compute.ComputeOperationArg._type, compute.ComputeOperationArg);
    factories.set(compute.ComputeOperationAtanh._type, compute.ComputeOperationAtanh);
    factories.set(compute.ComputeActivationElu._type, compute.ComputeActivationElu);
    factories.set(compute.ComputeOperationSqrt._type, compute.ComputeOperationSqrt);
    factories.set(compute.ComputeRegularizer._type, compute.ComputeRegularizer);
    factories.set(compute.ComputeOperationSumIf._type, compute.ComputeOperationSumIf);
    factories.set(compute.ComputeLayerFilter._type, compute.ComputeLayerFilter);
    factories.set(compute.ComputeLayerClassification._type, compute.ComputeLayerClassification);
    factories.set(compute.ComputeReduction._type, compute.ComputeReduction);
    factories.set(compute.ComputeOptimizerRmsProp._type, compute.ComputeOptimizerRmsProp);
    factories.set(compute.ComputeOperationAtan._type, compute.ComputeOperationAtan);
    factories.set(compute.ComputeOperationSum._type, compute.ComputeOperationSum);
    factories.set(compute.ComputeOperationSelu._type, compute.ComputeOperationSelu);
    factories.set(compute.ComputeOperationAcosh._type, compute.ComputeOperationAcosh);
    factories.set(compute.ComputeOperationRaiseToPower._type, compute.ComputeOperationRaiseToPower);
    factories.set(compute.ComputeOperationLog._type, compute.ComputeOperationLog);
    factories.set(compute.ComputeActivationLeakyRelu._type, compute.ComputeActivationLeakyRelu);
    factories.set(compute.ComputeInitializerLeCunUniform._type, compute.ComputeInitializerLeCunUniform);
    factories.set(compute.ComputeInitializerXavierUniform._type, compute.ComputeInitializerXavierUniform);
    factories.set(compute.ComputeOperationAvg._type, compute.ComputeOperationAvg);
    factories.set(compute.ComputeOperationSign._type, compute.ComputeOperationSign);
    factories.set(compute.ComputeOperationAcos._type, compute.ComputeOperationAcos);
    factories.set(compute.ComputeActivationHardSigmoid._type, compute.ComputeActivationHardSigmoid);
    factories.set(compute.ComputeOperationHardSigmoid._type, compute.ComputeOperationHardSigmoid);
    factories.set(compute.ComputeOperationLeCunTanh._type, compute.ComputeOperationLeCunTanh);
    factories.set(compute.ComputeInitializerGlorotUniform._type, compute.ComputeInitializerGlorotUniform);
    factories.set(compute.ComputeInitializerSigmoidUniform._type, compute.ComputeInitializerSigmoidUniform);
    factories.set(compute.ComputeOptimizerNesterov._type, compute.ComputeOptimizerNesterov);
    factories.set(compute.ComputeOptimizerAdam._type, compute.ComputeOptimizerAdam);
    factories.set(compute.ComputeModel._type, compute.ComputeModel);
    factories.set(compute.ComputeLayerSeq._type, compute.ComputeLayerSeq);
    factories.set(compute.ComputeOptimizerNadam._type, compute.ComputeOptimizerNadam);
    factories.set(compute.ComputeActivationCelu._type, compute.ComputeActivationCelu);
    factories.set(compute.ComputeOperation._type, compute.ComputeOperation);
    factories.set(compute.ComputeOperationCelu._type, compute.ComputeOperationCelu);
    factories.set(compute.ComputeOperationScale._type, compute.ComputeOperationScale);
    factories.set(compute.ComputeOperationFilter._type, compute.ComputeOperationFilter);
    factories.set(compute.ComputeActivationSoftSign._type, compute.ComputeActivationSoftSign);
    factories.set(compute.ComputeInitializerIdentity._type, compute.ComputeInitializerIdentity);
    factories.set(compute.ComputeInitializerNormalIn._type, compute.ComputeInitializerNormalIn);
    factories.set(compute.ComputeInitializerUniformOut._type, compute.ComputeInitializerUniformOut);
    factories.set(compute.ComputeOperationRelu._type, compute.ComputeOperationRelu);
    factories.set(compute.ComputeInitializer._type, compute.ComputeInitializer);
    factories.set(compute.ComputeOperationSin._type, compute.ComputeOperationSin);
    factories.set(compute.ComputeCounter._type, compute.ComputeCounter);
    factories.set(compute.ComputeOperationSinh._type, compute.ComputeOperationSinh);
    factories.set(compute.ComputeActivationSoftplus._type, compute.ComputeActivationSoftplus);
    factories.set(compute.ComputeOperationSigmoid._type, compute.ComputeOperationSigmoid);
    factories.set(compute.ComputeOperationArgMin._type, compute.ComputeOperationArgMin);
    factories.set(compute.ComputeLayerStandardScaler._type, compute.ComputeLayerStandardScaler);
    factories.set(compute.ComputeActivationSelu._type, compute.ComputeActivationSelu);
    factories.set(compute.ComputeInitializerNormal._type, compute.ComputeInitializerNormal);
    factories.set(compute.ComputeOperationMatMul._type, compute.ComputeOperationMatMul);
    factories.set(compute.ComputeActivationTanh._type, compute.ComputeActivationTanh);
    factories.set(compute.ComputeOptimizerMomentum._type, compute.ComputeOptimizerMomentum);
    factories.set(compute.ComputeOptimizerSgd._type, compute.ComputeOptimizerSgd);
    factories.set(compute.ComputeState._type, compute.ComputeState);
    loaders.set(compute.ComputeState._type, algebra_n.compute.ComputeState.load);
    factories.set(compute.ComputeLayerDense._type, compute.ComputeLayerDense);
    factories.set(compute.ComputeLayerCall._type, compute.ComputeLayerCall);
    factories.set(compute.ComputeVarConst._type, compute.ComputeVarConst);
    factories.set(compute.ComputeOperationPow._type, compute.ComputeOperationPow);
    factories.set(compute.ComputeOperationExp._type, compute.ComputeOperationExp);
    factories.set(compute.ComputeInitializerNone._type, compute.ComputeInitializerNone);
    factories.set(compute.ComputeOperationNeg._type, compute.ComputeOperationNeg);
    factories.set(compute.ComputeLayerPCAScaler._type, compute.ComputeLayerPCAScaler);
    factories.set(compute.ComputeOperationDiv._type, compute.ComputeOperationDiv);
    factories.set(compute.ComputeLayerMinMaxScaler._type, compute.ComputeLayerMinMaxScaler);
    factories.set(compute.ComputeInitializerXavier._type, compute.ComputeInitializerXavier);
    factories.set(compute.ComputeOperationFill._type, compute.ComputeOperationFill);
    factories.set(compute.ComputeOperationArgMax._type, compute.ComputeOperationArgMax);
    factories.set(compute.ComputeLayerLossClassification._type, compute.ComputeLayerLossClassification);
    factories.set(compute.ComputeLayerCustom._type, compute.ComputeLayerCustom);
    factories.set(compute.ComputeVar._type, compute.ComputeVar);
    factories.set(compute.ComputeActivationSigmoid._type, compute.ComputeActivationSigmoid);
    factories.set(compute.ComputeEngine._type, compute.ComputeEngine);
    loaders.set(compute.ComputeEngine._type, algebra_n.compute.ComputeEngine.load);
    factories.set(compute.ComputeOptimizerAdaDelta._type, compute.ComputeOptimizerAdaDelta);
    factories.set(compute.ComputeActivationSoftmax._type, compute.ComputeActivationSoftmax);
    factories.set(compute.ComputeClassificationLoss._type, compute.ComputeClassificationLoss);
    factories.set(compute.ComputeInitializerReluUniform._type, compute.ComputeInitializerReluUniform);
    factories.set(compute.ComputeOptimizerFtrl._type, compute.ComputeOptimizerFtrl);
    factories.set(compute.ComputeOperationClip._type, compute.ComputeOperationClip);
    factories.set(compute.ComputeLayerLSTM._type, compute.ComputeLayerLSTM);
    factories.set(compute.ComputeInitializerPytorch._type, compute.ComputeInitializerPytorch);
    factories.set(compute.ComputeOperationAsinh._type, compute.ComputeOperationAsinh);
    factories.set(compute.ComputeOptimizer._type, compute.ComputeOptimizer);
    factories.set(compute.ComputeInitializerLSTM._type, compute.ComputeInitializerLSTM);
    factories.set(compute.ComputeOperationAdd._type, compute.ComputeOperationAdd);
    factories.set(compute.ComputeVariable._type, compute.ComputeVariable);
    factories.set(compute.ComputeInitializerRelu._type, compute.ComputeInitializerRelu);
    factories.set(compute.ComputeOperationSoftmax._type, compute.ComputeOperationSoftmax);
    factories.set(compute.ComputeActivationRelu._type, compute.ComputeActivationRelu);
    factories.set(compute.ComputeOperationCos._type, compute.ComputeOperationCos);
    factories.set(compute.ComputeLayerActivation._type, compute.ComputeLayerActivation);
    factories.set(compute.ComputeVarProxy._type, compute.ComputeVarProxy);
    factories.set(compute.ComputeOperationAbs._type, compute.ComputeOperationAbs);
    factories.set(compute.ComputeVarInOut._type, compute.ComputeVarInOut);
    factories.set(compute.ComputeLayerLoss._type, compute.ComputeLayerLoss);
    factories.set(compute.ComputeLayerLinear._type, compute.ComputeLayerLinear);
    factories.set(compute.ComputeBinding._type, compute.ComputeBinding);
    factories.set(compute.ComputeOperationCosh._type, compute.ComputeOperationCosh);
    factories.set(compute.ComputeOperationTan._type, compute.ComputeOperationTan);
    factories.set(compute.ComputeOperationLeakyRelu._type, compute.ComputeOperationLeakyRelu);
    factories.set(compute.ComputeOperationTanh._type, compute.ComputeOperationTanh);
    factories.set(compute.ComputeOperation2In1Out._type, compute.ComputeOperation2In1Out);
    factories.set(compute.ComputeInitializerNormalOut._type, compute.ComputeInitializerNormalOut);
    factories.set(compute.ComputeActivation._type, compute.ComputeActivation);
    factories.set(nn_layers_names.NNLayersNames._type, nn_layers_names.NNLayersNames);
    factories.set(nn.ComputeLayerTypes._type, nn.ComputeLayerTypes);
    factories.set(nn.NeuralNetwork._type, nn.NeuralNetwork);
    factories.set(nn.PostProcessType._type, nn.PostProcessType);
    factories.set(nn.BindingsResult._type, nn.BindingsResult);
    factories.set(nn.ComputeActivations._type, nn.ComputeActivations);
    factories.set(nn.ComputeInitializers._type, nn.ComputeInitializers);
    factories.set(nn.InitializerConfig._type, nn.InitializerConfig);
    factories.set(nn.ClassificationMetrics._type, nn.ClassificationMetrics);
    factories.set(nn.ClassificationNetwork._type, nn.ClassificationNetwork);
    factories.set(nn.ComputeOptimizers._type, nn.ComputeOptimizers);
    factories.set(nn.AutoEncoderNetwork._type, nn.AutoEncoderNetwork);
    factories.set(nn.RegressionNetwork._type, nn.RegressionNetwork);
    factories.set(nn.PreProcessType._type, nn.PreProcessType);
    factories.set(kmeans.Kmeans._type, kmeans.Kmeans);
    factories.set(ml.TimeSeriesDecomposition._type, ml.TimeSeriesDecomposition);
    factories.set(ml.Polynomial._type, ml.Polynomial);
    loaders.set(ml.Polynomial._type, algebra_n.ml.Polynomial.load);
    factories.set(ml.PCA._type, ml.PCA);
    loaders.set(ml.PCA._type, algebra_n.ml.PCA.load);
    factories.set(ml.Solver._type, ml.Solver);
    factories.set(ml.GaussianND._type, ml.GaussianND);
    loaders.set(ml.GaussianND._type, algebra_n.ml.GaussianND.load);
    factories.set(ml.HeatMapProfile._type, ml.HeatMapProfile);
    factories.set(powerflow.PowerLineResult._type, powerflow.PowerLineResult);
    factories.set(powerflow.PowerBusResult._type, powerflow.PowerBusResult);
  },
  init(abi) {
    this.mapped[0] = abi.type_by_fqn.get(compute.ComputeLayerLossRegression._type);
    this.mapped[1] = abi.type_by_fqn.get(compute.ComputeOperationEuclidean._type);
    this.mapped[2] = abi.type_by_fqn.get(compute.ComputeOperation1In1Out._type);
    this.mapped[3] = abi.type_by_fqn.get(compute.ComputeOperationSoftplus._type);
    this.mapped[4] = abi.type_by_fqn.get(compute.ComputeInitializerUniform._type);
    this.mapped[5] = abi.type_by_fqn.get(compute.ComputeInitializerUniformIn._type);
    this.mapped[6] = abi.type_by_fqn.get(compute.ComputeOperationAddBias._type);
    this.mapped[7] = abi.type_by_fqn.get(compute.ComputeOperationLogSoftmax._type);
    this.mapped[8] = abi.type_by_fqn.get(compute.ComputeLayer._type);
    this.mapped[9] = abi.type_by_fqn.get(compute.ComputeInitializerNormalAvg._type);
    this.mapped[10] = abi.type_by_fqn.get(compute.ComputeInitializerUniformAvg._type);
    this.mapped[11] = abi.type_by_fqn.get(compute.ComputeOperationAsin._type);
    this.mapped[12] = abi.type_by_fqn.get(compute.ComputeOptimizerAdaGrad._type);
    if (this.mapped[12]) {
      this.mapped[12].static_values = {['learning_rate_def']: 0.001,['initial_accumulator_def']: 0.1,['smooth_epsilon_def']: 0.0000001,};
    }
    this.mapped[13] = abi.type_by_fqn.get(compute.ComputeActivationExp._type);
    this.mapped[14] = abi.type_by_fqn.get(compute.ComputeLayerConfusion._type);
    if (this.mapped[14]) {
      this.mapped[14].static_values = {['var_computed_name']: "computed",['var_expected_name']: "expected",['var_confusion_name']: "confusion",};
    }
    this.mapped[15] = abi.type_by_fqn.get(compute.ComputeVarOptimize._type);
    this.mapped[16] = abi.type_by_fqn.get(compute.ComputeInitializerConstant._type);
    this.mapped[17] = abi.type_by_fqn.get(compute.ComputeOperationSub._type);
    this.mapped[18] = abi.type_by_fqn.get(compute.ComputeOperationElu._type);
    if (this.mapped[18]) {
      this.mapped[18].static_values = {['alpha_def']: 1.0,};
    }
    this.mapped[19] = abi.type_by_fqn.get(compute.ComputeOperationMul._type);
    this.mapped[20] = abi.type_by_fqn.get(compute.ComputeOptimizerAdaMax._type);
    if (this.mapped[20]) {
      this.mapped[20].static_values = {['learning_rate_def']: 0.001,['beta1_def']: 0.9,['beta2_def']: 0.999,['smooth_epsilon_def']: 0.0000001,};
    }
    this.mapped[21] = abi.type_by_fqn.get(compute.ComputeRegressionLoss._type);
    this.mapped[21]?.resolveGeneratedOffsetWithValues('square', "Square",'abs', "Abs");
    this.mapped[22] = abi.type_by_fqn.get(compute.ComputeOperationSoftSign._type);
    this.mapped[23] = abi.type_by_fqn.get(compute.ComputeOperationArg._type);
    this.mapped[24] = abi.type_by_fqn.get(compute.ComputeOperationAtanh._type);
    this.mapped[25] = abi.type_by_fqn.get(compute.ComputeActivationElu._type);
    if (this.mapped[25]) {
      this.mapped[25].static_values = {['alpha_def']: 1.0,};
    }
    this.mapped[26] = abi.type_by_fqn.get(compute.ComputeOperationSqrt._type);
    this.mapped[27] = abi.type_by_fqn.get(compute.ComputeRegularizer._type);
    this.mapped[28] = abi.type_by_fqn.get(compute.ComputeOperationSumIf._type);
    this.mapped[29] = abi.type_by_fqn.get(compute.ComputeLayerFilter._type);
    if (this.mapped[29]) {
      this.mapped[29].static_values = {['var_input_name']: "input",['var_output_name']: "output",['var_mask_name']: "mask",};
    }
    this.mapped[30] = abi.type_by_fqn.get(compute.ComputeLayerClassification._type);
    if (this.mapped[30]) {
      this.mapped[30].static_values = {['var_input_name']: "input",['var_predicted_classes_name']: "predicted_classes",['var_probabilities_name']: "probabilities",};
    }
    this.mapped[31] = abi.type_by_fqn.get(compute.ComputeReduction._type);
    this.mapped[31]?.resolveGeneratedOffsetWithValues('auto', "auto",'none', "none",'sum', "sum",'mean', "mean",'disabled', "disabled");
    this.mapped[32] = abi.type_by_fqn.get(compute.ComputeOptimizerRmsProp._type);
    if (this.mapped[32]) {
      this.mapped[32].static_values = {['learning_rate_def']: 0.001,['decay_rate_def']: 0.9,['smooth_epsilon_def']: 0.0000001,};
    }
    this.mapped[33] = abi.type_by_fqn.get(compute.ComputeOperationAtan._type);
    this.mapped[34] = abi.type_by_fqn.get(compute.ComputeOperationSum._type);
    this.mapped[35] = abi.type_by_fqn.get(compute.ComputeOperationSelu._type);
    this.mapped[36] = abi.type_by_fqn.get(compute.ComputeOperationAcosh._type);
    this.mapped[37] = abi.type_by_fqn.get(compute.ComputeOperationRaiseToPower._type);
    this.mapped[38] = abi.type_by_fqn.get(compute.ComputeOperationLog._type);
    this.mapped[39] = abi.type_by_fqn.get(compute.ComputeActivationLeakyRelu._type);
    if (this.mapped[39]) {
      this.mapped[39].static_values = {['alpha_def']: 0.3,['threshold_def']: 0.0,};
    }
    this.mapped[40] = abi.type_by_fqn.get(compute.ComputeInitializerLeCunUniform._type);
    this.mapped[41] = abi.type_by_fqn.get(compute.ComputeInitializerXavierUniform._type);
    this.mapped[42] = abi.type_by_fqn.get(compute.ComputeOperationAvg._type);
    this.mapped[43] = abi.type_by_fqn.get(compute.ComputeOperationSign._type);
    this.mapped[44] = abi.type_by_fqn.get(compute.ComputeOperationAcos._type);
    this.mapped[45] = abi.type_by_fqn.get(compute.ComputeActivationHardSigmoid._type);
    if (this.mapped[45]) {
      this.mapped[45].static_values = {['slope_def']: 0.2,['shift_def']: 0.5,};
    }
    this.mapped[46] = abi.type_by_fqn.get(compute.ComputeOperationHardSigmoid._type);
    if (this.mapped[46]) {
      this.mapped[46].static_values = {['slope_def']: 0.2,['shift_def']: 0.5,};
    }
    this.mapped[47] = abi.type_by_fqn.get(compute.ComputeOperationLeCunTanh._type);
    this.mapped[48] = abi.type_by_fqn.get(compute.ComputeInitializerGlorotUniform._type);
    this.mapped[49] = abi.type_by_fqn.get(compute.ComputeInitializerSigmoidUniform._type);
    this.mapped[50] = abi.type_by_fqn.get(compute.ComputeOptimizerNesterov._type);
    if (this.mapped[50]) {
      this.mapped[50].static_values = {['learning_rate_def']: 0.001,['decay_rate_def']: 0.9,};
    }
    this.mapped[51] = abi.type_by_fqn.get(compute.ComputeOptimizerAdam._type);
    if (this.mapped[51]) {
      this.mapped[51].static_values = {['learning_rate_def']: 0.001,['beta1_def']: 0.9,['beta2_def']: 0.999,['smooth_epsilon_def']: 0.0000001,};
    }
    this.mapped[52] = abi.type_by_fqn.get(compute.ComputeModel._type);
    this.mapped[53] = abi.type_by_fqn.get(compute.ComputeLayerSeq._type);
    this.mapped[54] = abi.type_by_fqn.get(compute.ComputeOptimizerNadam._type);
    if (this.mapped[54]) {
      this.mapped[54].static_values = {['learning_rate_def']: 0.001,['beta1_def']: 0.9,['beta2_def']: 0.999,['smooth_epsilon_def']: 0.0000001,};
    }
    this.mapped[55] = abi.type_by_fqn.get(compute.ComputeActivationCelu._type);
    if (this.mapped[55]) {
      this.mapped[55].static_values = {['alpha_def']: 1.0,};
    }
    this.mapped[56] = abi.type_by_fqn.get(compute.ComputeOperation._type);
    this.mapped[57] = abi.type_by_fqn.get(compute.ComputeOperationCelu._type);
    if (this.mapped[57]) {
      this.mapped[57].static_values = {['alpha_def']: 1.0,};
    }
    this.mapped[58] = abi.type_by_fqn.get(compute.ComputeOperationScale._type);
    this.mapped[59] = abi.type_by_fqn.get(compute.ComputeOperationFilter._type);
    this.mapped[60] = abi.type_by_fqn.get(compute.ComputeActivationSoftSign._type);
    this.mapped[61] = abi.type_by_fqn.get(compute.ComputeInitializerIdentity._type);
    this.mapped[62] = abi.type_by_fqn.get(compute.ComputeInitializerNormalIn._type);
    this.mapped[63] = abi.type_by_fqn.get(compute.ComputeInitializerUniformOut._type);
    this.mapped[64] = abi.type_by_fqn.get(compute.ComputeOperationRelu._type);
    if (this.mapped[64]) {
      this.mapped[64].static_values = {['threshold_def']: 0.0,};
    }
    this.mapped[65] = abi.type_by_fqn.get(compute.ComputeInitializer._type);
    this.mapped[66] = abi.type_by_fqn.get(compute.ComputeOperationSin._type);
    this.mapped[67] = abi.type_by_fqn.get(compute.ComputeCounter._type);
    this.mapped[68] = abi.type_by_fqn.get(compute.ComputeOperationSinh._type);
    this.mapped[69] = abi.type_by_fqn.get(compute.ComputeActivationSoftplus._type);
    this.mapped[70] = abi.type_by_fqn.get(compute.ComputeOperationSigmoid._type);
    this.mapped[71] = abi.type_by_fqn.get(compute.ComputeOperationArgMin._type);
    this.mapped[72] = abi.type_by_fqn.get(compute.ComputeLayerStandardScaler._type);
    if (this.mapped[72]) {
      this.mapped[72].static_values = {['var_input_name']: "input",['var_output_name']: "output",['var_avg_name']: "avg",['var_std_name']: "std",};
    }
    this.mapped[73] = abi.type_by_fqn.get(compute.ComputeActivationSelu._type);
    this.mapped[74] = abi.type_by_fqn.get(compute.ComputeInitializerNormal._type);
    this.mapped[75] = abi.type_by_fqn.get(compute.ComputeOperationMatMul._type);
    if (this.mapped[75]) {
      this.mapped[75].static_values = {['transpose_def']: false,['alpha_def']: 1.0,['beta_def']: 0.0,};
    }
    this.mapped[76] = abi.type_by_fqn.get(compute.ComputeActivationTanh._type);
    this.mapped[77] = abi.type_by_fqn.get(compute.ComputeOptimizerMomentum._type);
    if (this.mapped[77]) {
      this.mapped[77].static_values = {['learning_rate_def']: 0.001,['decay_rate_def']: 0.9,};
    }
    this.mapped[78] = abi.type_by_fqn.get(compute.ComputeOptimizerSgd._type);
    if (this.mapped[78]) {
      this.mapped[78].static_values = {['learning_rate_def']: 0.01,};
    }
    this.mapped[79] = abi.type_by_fqn.get(compute.ComputeState._type);
    this.mapped[80] = abi.type_by_fqn.get(compute.ComputeLayerDense._type);
    if (this.mapped[80]) {
      this.mapped[80].static_values = {['var_input_name']: "input",['var_output_name']: "output",['var_weight_name']: "weight",['var_bias_name']: "bias",['var_mult_name']: "mult",['var_pre_activation_name']: "pre_activation",};
    }
    this.mapped[81] = abi.type_by_fqn.get(compute.ComputeLayerCall._type);
    this.mapped[82] = abi.type_by_fqn.get(compute.ComputeVarConst._type);
    this.mapped[83] = abi.type_by_fqn.get(compute.ComputeOperationPow._type);
    this.mapped[84] = abi.type_by_fqn.get(compute.ComputeOperationExp._type);
    this.mapped[85] = abi.type_by_fqn.get(compute.ComputeInitializerNone._type);
    this.mapped[86] = abi.type_by_fqn.get(compute.ComputeOperationNeg._type);
    this.mapped[87] = abi.type_by_fqn.get(compute.ComputeLayerPCAScaler._type);
    if (this.mapped[87]) {
      this.mapped[87].static_values = {['var_input_name']: "input",['var_output_name']: "output",['var_avg_name']: "avg",['var_std_name']: "std",['var_space_name']: "space",};
    }
    this.mapped[88] = abi.type_by_fqn.get(compute.ComputeOperationDiv._type);
    this.mapped[89] = abi.type_by_fqn.get(compute.ComputeLayerMinMaxScaler._type);
    if (this.mapped[89]) {
      this.mapped[89].static_values = {['var_input_name']: "input",['var_output_name']: "output",['var_min_name']: "min",['var_max_name']: "max",};
    }
    this.mapped[90] = abi.type_by_fqn.get(compute.ComputeInitializerXavier._type);
    this.mapped[91] = abi.type_by_fqn.get(compute.ComputeOperationFill._type);
    this.mapped[92] = abi.type_by_fqn.get(compute.ComputeOperationArgMax._type);
    this.mapped[93] = abi.type_by_fqn.get(compute.ComputeLayerLossClassification._type);
    if (this.mapped[93]) {
      this.mapped[93].static_values = {['var_class_weights_name']: "class_weights",['var_predicted_classes_name']: "predicted_classes",['var_probabilities_name']: "probabilities",['var_sum_reduce_name']: "sum_reduce",};
    }
    this.mapped[94] = abi.type_by_fqn.get(compute.ComputeLayerCustom._type);
    this.mapped[95] = abi.type_by_fqn.get(compute.ComputeVar._type);
    this.mapped[96] = abi.type_by_fqn.get(compute.ComputeActivationSigmoid._type);
    this.mapped[97] = abi.type_by_fqn.get(compute.ComputeEngine._type);
    this.mapped[98] = abi.type_by_fqn.get(compute.ComputeOptimizerAdaDelta._type);
    if (this.mapped[98]) {
      this.mapped[98].static_values = {['learning_rate_def']: 0.001,['decay_rate_def']: 0.95,['smooth_epsilon_def']: 0.0000001,};
    }
    this.mapped[99] = abi.type_by_fqn.get(compute.ComputeActivationSoftmax._type);
    this.mapped[100] = abi.type_by_fqn.get(compute.ComputeClassificationLoss._type);
    this.mapped[100]?.resolveGeneratedOffsetWithValues('categorical_cross_entropy', "Categorical Cross Entropy",'sparse_categorical_cross_entropy', "Sparse Categorical Cross Entropy");
    this.mapped[101] = abi.type_by_fqn.get(compute.ComputeInitializerReluUniform._type);
    this.mapped[102] = abi.type_by_fqn.get(compute.ComputeOptimizerFtrl._type);
    if (this.mapped[102]) {
      this.mapped[102].static_values = {['learning_rate_def']: 0.001,['beta_def']: 0.0,['lambda1_def']: 0.0,['lambda2_def']: 0.0,};
    }
    this.mapped[103] = abi.type_by_fqn.get(compute.ComputeOperationClip._type);
    this.mapped[104] = abi.type_by_fqn.get(compute.ComputeLayerLSTM._type);
    if (this.mapped[104]) {
      this.mapped[104].static_values = {['var_input_name']: "input",['var_output_name']: "output",['var_hx_name']: "hx",['var_cx_name']: "cx",['var_hy_name']: "hy",['var_cy_name']: "cy",['var_weight_name']: "weight",['var_bias_name']: "bias",['var_internal_i_name']: "internal_i",['var_internal_f_name']: "internal_f",['var_internal_cp_name']: "internal_cp",['var_internal_o_name']: "internal_o",['var_internal_h_name']: "internal_h",['var_internal_c_name']: "internal_c",['var_internal_mult_name']: "internal_mult",['var_internal_output_name']: "internal_output",};
    }
    this.mapped[105] = abi.type_by_fqn.get(compute.ComputeInitializerPytorch._type);
    this.mapped[106] = abi.type_by_fqn.get(compute.ComputeOperationAsinh._type);
    this.mapped[107] = abi.type_by_fqn.get(compute.ComputeOptimizer._type);
    this.mapped[108] = abi.type_by_fqn.get(compute.ComputeInitializerLSTM._type);
    this.mapped[109] = abi.type_by_fqn.get(compute.ComputeOperationAdd._type);
    this.mapped[110] = abi.type_by_fqn.get(compute.ComputeVariable._type);
    this.mapped[111] = abi.type_by_fqn.get(compute.ComputeInitializerRelu._type);
    this.mapped[112] = abi.type_by_fqn.get(compute.ComputeOperationSoftmax._type);
    this.mapped[113] = abi.type_by_fqn.get(compute.ComputeActivationRelu._type);
    if (this.mapped[113]) {
      this.mapped[113].static_values = {['threshold_def']: 0.0,};
    }
    this.mapped[114] = abi.type_by_fqn.get(compute.ComputeOperationCos._type);
    this.mapped[115] = abi.type_by_fqn.get(compute.ComputeLayerActivation._type);
    if (this.mapped[115]) {
      this.mapped[115].static_values = {['var_input_name']: "input",['var_output_name']: "output",};
    }
    this.mapped[116] = abi.type_by_fqn.get(compute.ComputeVarProxy._type);
    this.mapped[117] = abi.type_by_fqn.get(compute.ComputeOperationAbs._type);
    this.mapped[118] = abi.type_by_fqn.get(compute.ComputeVarInOut._type);
    this.mapped[119] = abi.type_by_fqn.get(compute.ComputeLayerLoss._type);
    if (this.mapped[119]) {
      this.mapped[119].static_values = {['var_computed_name']: "computed",['var_expected_name']: "expected",['var_loss_name']: "loss",};
    }
    this.mapped[120] = abi.type_by_fqn.get(compute.ComputeLayerLinear._type);
    if (this.mapped[120]) {
      this.mapped[120].static_values = {['var_input_name']: "input",['var_output_name']: "output",['var_weight_name']: "weight",['var_bias_name']: "bias",['var_mult_name']: "mult",};
    }
    this.mapped[121] = abi.type_by_fqn.get(compute.ComputeBinding._type);
    this.mapped[122] = abi.type_by_fqn.get(compute.ComputeOperationCosh._type);
    this.mapped[123] = abi.type_by_fqn.get(compute.ComputeOperationTan._type);
    this.mapped[124] = abi.type_by_fqn.get(compute.ComputeOperationLeakyRelu._type);
    if (this.mapped[124]) {
      this.mapped[124].static_values = {['alpha_def']: 0.3,['max_value_def']: 1.7976931349E308,['threshold_def']: 0.0,};
    }
    this.mapped[125] = abi.type_by_fqn.get(compute.ComputeOperationTanh._type);
    this.mapped[126] = abi.type_by_fqn.get(compute.ComputeOperation2In1Out._type);
    this.mapped[127] = abi.type_by_fqn.get(compute.ComputeInitializerNormalOut._type);
    this.mapped[128] = abi.type_by_fqn.get(compute.ComputeActivation._type);
    this.mapped[129] = abi.type_by_fqn.get(nn_layers_names.NNLayersNames._type);
    this.mapped[129]?.resolveGeneratedOffsetWithValues('layer_0', "layer_0",'layer_1', "layer_1",'layer_2', "layer_2",'layer_3', "layer_3",'layer_4', "layer_4",'layer_5', "layer_5",'layer_6', "layer_6",'layer_7', "layer_7",'layer_8', "layer_8",'layer_9', "layer_9",'layer_10', "layer_10",'layer_11', "layer_11",'layer_12', "layer_12",'layer_13', "layer_13",'layer_14', "layer_14",'layer_15', "layer_15",'layer_16', "layer_16",'layer_17', "layer_17",'layer_18', "layer_18",'layer_19', "layer_19",'layer_20', "layer_20",'layer_21', "layer_21",'layer_22', "layer_22",'layer_23', "layer_23",'layer_24', "layer_24",'layer_25', "layer_25",'layer_26', "layer_26",'layer_27', "layer_27",'layer_28', "layer_28",'layer_29', "layer_29",'layer_30', "layer_30",'layer_31', "layer_31",'layer_32', "layer_32",'layer_33', "layer_33",'layer_34', "layer_34",'layer_35', "layer_35",'layer_36', "layer_36",'layer_37', "layer_37",'layer_38', "layer_38",'layer_39', "layer_39",'layer_40', "layer_40",'layer_41', "layer_41",'layer_42', "layer_42",'layer_43', "layer_43",'layer_44', "layer_44",'layer_45', "layer_45",'layer_46', "layer_46",'layer_47', "layer_47",'layer_48', "layer_48",'layer_49', "layer_49",'layer_50', "layer_50",'layer_51', "layer_51",'layer_52', "layer_52",'layer_53', "layer_53",'layer_54', "layer_54",'layer_55', "layer_55",'layer_56', "layer_56",'layer_57', "layer_57",'layer_58', "layer_58",'layer_59', "layer_59",'layer_60', "layer_60",'layer_61', "layer_61",'layer_62', "layer_62",'layer_63', "layer_63",'layer_64', "layer_64",'layer_65', "layer_65",'layer_66', "layer_66",'layer_67', "layer_67",'layer_68', "layer_68",'layer_69', "layer_69",'layer_70', "layer_70",'layer_71', "layer_71",'layer_72', "layer_72",'layer_73', "layer_73",'layer_74', "layer_74",'layer_75', "layer_75",'layer_76', "layer_76",'layer_77', "layer_77",'layer_78', "layer_78",'layer_79', "layer_79",'layer_80', "layer_80",'layer_81', "layer_81",'layer_82', "layer_82",'layer_83', "layer_83",'layer_84', "layer_84",'layer_85', "layer_85",'layer_86', "layer_86",'layer_87', "layer_87",'layer_88', "layer_88",'layer_89', "layer_89",'layer_90', "layer_90",'layer_91', "layer_91",'layer_92', "layer_92",'layer_93', "layer_93",'layer_94', "layer_94",'layer_95', "layer_95",'layer_96', "layer_96",'layer_97', "layer_97",'layer_98', "layer_98",'layer_99', "layer_99",'layer_100', "layer_100",'layer_101', "layer_101",'layer_102', "layer_102",'layer_103', "layer_103",'layer_104', "layer_104",'layer_105', "layer_105",'layer_106', "layer_106",'layer_107', "layer_107",'layer_108', "layer_108",'layer_109', "layer_109",'layer_110', "layer_110",'layer_111', "layer_111",'layer_112', "layer_112",'layer_113', "layer_113",'layer_114', "layer_114",'layer_115', "layer_115",'layer_116', "layer_116",'layer_117', "layer_117",'layer_118', "layer_118",'layer_119', "layer_119",'layer_120', "layer_120",'layer_121', "layer_121",'layer_122', "layer_122",'layer_123', "layer_123",'layer_124', "layer_124",'layer_125', "layer_125",'layer_126', "layer_126",'layer_127', "layer_127",'layer_128', "layer_128",'layer_129', "layer_129",'layer_130', "layer_130",'layer_131', "layer_131",'layer_132', "layer_132",'layer_133', "layer_133",'layer_134', "layer_134",'layer_135', "layer_135",'layer_136', "layer_136",'layer_137', "layer_137",'layer_138', "layer_138",'layer_139', "layer_139",'layer_140', "layer_140",'layer_141', "layer_141",'layer_142', "layer_142",'layer_143', "layer_143",'layer_144', "layer_144",'layer_145', "layer_145",'layer_146', "layer_146",'layer_147', "layer_147",'layer_148', "layer_148",'layer_149', "layer_149",'layer_150', "layer_150",'layer_151', "layer_151",'layer_152', "layer_152",'layer_153', "layer_153",'layer_154', "layer_154",'layer_155', "layer_155",'layer_156', "layer_156",'layer_157', "layer_157",'layer_158', "layer_158",'layer_159', "layer_159",'layer_160', "layer_160",'layer_161', "layer_161",'layer_162', "layer_162",'layer_163', "layer_163",'layer_164', "layer_164",'layer_165', "layer_165",'layer_166', "layer_166",'layer_167', "layer_167",'layer_168', "layer_168",'layer_169', "layer_169",'layer_170', "layer_170",'layer_171', "layer_171",'layer_172', "layer_172",'layer_173', "layer_173",'layer_174', "layer_174",'layer_175', "layer_175",'layer_176', "layer_176",'layer_177', "layer_177",'layer_178', "layer_178",'layer_179', "layer_179",'layer_180', "layer_180",'layer_181', "layer_181",'layer_182', "layer_182",'layer_183', "layer_183",'layer_184', "layer_184",'layer_185', "layer_185",'layer_186', "layer_186",'layer_187', "layer_187",'layer_188', "layer_188",'layer_189', "layer_189",'layer_190', "layer_190",'layer_191', "layer_191",'layer_192', "layer_192",'layer_193', "layer_193",'layer_194', "layer_194",'layer_195', "layer_195",'layer_196', "layer_196",'layer_197', "layer_197",'layer_198', "layer_198",'layer_199', "layer_199");
    this.mapped[130] = abi.type_by_fqn.get(nn.ComputeLayerTypes._type);
    this.mapped[130]?.resolveGeneratedOffsetWithValues('linear', "Linear",'dense', "Dense",'activation', "Activation",'lstm', "LSTM",'loss', "Loss",'filter', "Filter");
    this.mapped[131] = abi.type_by_fqn.get(nn.NeuralNetwork._type);
    if (this.mapped[131]) {
      this.mapped[131].static_values = {['err_negative_in_out']: "Inputs or outputs can't be negative",['err_last_layer_wrong']: "Last layer has different number of outputs than declared",['err_incompatible_loss']: "Incompatible loss function",['err_layer_not_supported']: "Some NN layers are not currently supported",['err_tensor_type_not_supported']: "Tensor Type not currently supported",['err_minimum_layers']: "NN should contain at least 1 layer",['layer_placeholders_name']: "layer placeholders",['layer_classification_name']: "layer classification",['layer_preprocess_name']: "layer preprocess",['layer_postprocess_learn_name']: "layer postprocess learn",['layer_main_layers_name']: "layer main",['layer_loss_learn_name']: "layer loss learn",['layer_loss_display_name']: "layer loss display",['layer_postprocess_display_name']: "layer postprocess display",['layer_confusion_name']: "layer confusion",['seq_predict']: "seq predict",['seq_post_process']: "seq postprocess",['seq_learn']: "seq learn",['seq_loss_display']: "seq loss display",['seq_encode']: "seq encode",['seq_decode']: "seq decode",['seq_confusion']: "seq confusion",['var_inputs_name']: "var input",['var_enc_inputs_name']: "var enc input",['var_targets_name']: "var targets",['var_classifier_classes']: "var Classifier classes",['var_classifier_probabilities']: "var Classifier probabilities",['var_classifier_class_weights']: "var Classifier class weights",['var_classifier_confusion']: "var Classifier confusion",['var_input_avg']: "var input avg",['var_input_min']: "var input min",['var_input_max']: "var input max",['var_input_std']: "var input std",['var_input_space']: "var input space",['var_output_avg']: "var output avg",['var_output_min']: "var output min",['var_output_max']: "var output max",['var_output_std']: "var output std",};
    }
    this.mapped[132] = abi.type_by_fqn.get(nn.PostProcessType._type);
    this.mapped[132]?.resolveGeneratedOffsetWithValues('none', "None",'min_max_scaling', "Min/Max Scaling",'standard_scaling', "Standard Scaling");
    this.mapped[133] = abi.type_by_fqn.get(nn.BindingsResult._type);
    this.mapped[134] = abi.type_by_fqn.get(nn.ComputeActivations._type);
    this.mapped[134]?.resolveGeneratedOffsetWithValues('relu', "Relu",'leaky_relu', "Leaky Relu",'sigmoid', "Sigmoid",'hard_sigmoid', "Hard Sigmoid",'exp', "Exp",'soft_max', "Soft Max",'soft_plus', "Soft Plus",'soft_sign', "Soft Sign",'tanh', "Tanh",'selu', "Selu",'elu', "Elu",'celu', "Celu");
    this.mapped[135] = abi.type_by_fqn.get(nn.ComputeInitializers._type);
    this.mapped[135]?.resolveGeneratedOffsetWithValues('none', "None",'constant', "Constant",'sigmoid_uniform', "SigmoidUniform",'lecun_uniform', "LeCunUniform",'xavier', "Xavier",'xavier_uniform', "XavierUniform",'relu', "Relu",'relu_uniform', "ReluUniform",'normal', "Normal",'normal_in', "NormalIn",'normal_out', "NormalOut",'normal_avg', "NormalAvg",'uniform', "Uniform",'uniform_in', "UniformIn",'uniform_out', "UniformOut",'uniform_avg', "UniformAvg",'identity', "Identity",'pytorch', "Pytorch");
    this.mapped[136] = abi.type_by_fqn.get(nn.InitializerConfig._type);
    this.mapped[137] = abi.type_by_fqn.get(nn.ClassificationMetrics._type);
    this.mapped[138] = abi.type_by_fqn.get(nn.ClassificationNetwork._type);
    this.mapped[139] = abi.type_by_fqn.get(nn.ComputeOptimizers._type);
    this.mapped[139]?.resolveGeneratedOffsetWithValues('ada_delta', "Ada Delta",'ada_grad', "Ada Grad",'adam', "Adam",'ada_max', "Ada Max",'nadam', "NAdam",'ftrl', "Ftrl",'sgd', "Stochastic Gradient Descent",'rms_prop', "RMS Prop",'momentum', "Momentum",'nesterov', "Nesterov");
    this.mapped[140] = abi.type_by_fqn.get(nn.AutoEncoderNetwork._type);
    this.mapped[141] = abi.type_by_fqn.get(nn.RegressionNetwork._type);
    this.mapped[142] = abi.type_by_fqn.get(nn.PreProcessType._type);
    this.mapped[142]?.resolveGeneratedOffsetWithValues('none', "None",'min_max_scaling', "Min/Max Scaling",'standard_scaling', "Standard Scaling",'pca_scaling', "PCA Scaling");
    this.mapped[143] = abi.type_by_fqn.get(kmeans.Kmeans._type);
    if (this.mapped[143]) {
      this.mapped[143].static_values = {['var_input']: "input",['var_assignement']: "assignement",['var_min_distance']: "min_distance",['varo_centroids']: "centroids",['var_distance']: "distance",['var_sum_centroids']: "sum_centroids",['var_sum_min_distance']: "sum_min_distance",['var_count_centroids']: "count_centroids",['var_centroid_distances']: "centroid_distances",['var_sum_cluster_distances']: "sum_cluster_distances",['var_avg_cluster_distances']: "avg_cluster_distances",['var_count_cluster_distances']: "count_cluster_distances",['layer_placeholders']: "placeholders",['layer_forward']: "kmeans_forward",['layer_backward']: "kmeans_backward",['layer_init_round']: "kmeans_init_round",['layer_end_round']: "kmeans_end_round",['layer_stats']: "kmeans_stats_layer",['seq_init_round']: "kmeans_init_round_seq",['seq_forward']: "kmeans_forward_seq",['seq_backward']: "kmeans_backward_seq",['seq_end_round']: "kmeans_end_round_seq",['seq_stats']: "kmeans_stats_seq",};
    }
    this.mapped[144] = abi.type_by_fqn.get(ml.TimeSeriesDecomposition._type);
    this.mapped[145] = abi.type_by_fqn.get(ml.Polynomial._type);
    this.mapped[146] = abi.type_by_fqn.get(ml.PCA._type);
    if (this.mapped[146]) {
      this.mapped[146].static_values = {['threshold_def']: 0.95,};
    }
    this.mapped[147] = abi.type_by_fqn.get(ml.Solver._type);
    this.mapped[148] = abi.type_by_fqn.get(ml.GaussianND._type);
    this.mapped[149] = abi.type_by_fqn.get(ml.HeatMapProfile._type);
    this.mapped[150] = abi.type_by_fqn.get(powerflow.PowerLineResult._type);
    this.mapped[151] = abi.type_by_fqn.get(powerflow.PowerBusResult._type);
  },
};
