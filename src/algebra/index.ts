// AUTO-GENERATED FILE PLEASE DO NOT MODIFY MANUALLY
/* eslint-disable */
// @ts-nocheck

import * as $sdk from '@greycat/sdk';
import * as algebra_n from '../algebra_n/index.js';

export namespace compute {
export class ComputeOptimizerNesterov extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOptimizerNesterov';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get learning_rate(): number | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set learning_rate(v: number | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get decay_rate(): number {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set decay_rate(v: number) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public static learning_rate_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[0];
    return  t.static_values[0] as number;
  }
  public static decay_rate_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[0];
    return  t.static_values[1] as number;
  }
  static create($g: $sdk.GreyCat, learning_rate: number | null, decay_rate: number): ComputeOptimizerNesterov {
    return new ComputeOptimizerNesterov($g.abi.libs_by_name.get(algebralib.name)!.mapped[0], learning_rate, decay_rate);
  }
}

export class ComputeOperationRaiseToPower extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationRaiseToPower';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get power(): number {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set power(v: number) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, output: string, power: number): ComputeOperationRaiseToPower {
    return new ComputeOperationRaiseToPower($g.abi.libs_by_name.get(algebralib.name)!.mapped[1], input, output, power);
  }
}

export class ComputeOperationElu extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationElu';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get alpha(): number | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set alpha(v: number | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public static alpha_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[2];
    return  t.static_values[0] as number;
  }
  static create($g: $sdk.GreyCat, input: string, output: string, alpha: number | null): ComputeOperationElu {
    return new ComputeOperationElu($g.abi.libs_by_name.get(algebralib.name)!.mapped[2], input, output, alpha);
  }
}

export class ComputeOperationTanh extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationTanh';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, output: string): ComputeOperationTanh {
    return new ComputeOperationTanh($g.abi.libs_by_name.get(algebralib.name)!.mapped[3], input, output);
  }
}

export class ComputeLayerCall extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeLayerCall';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get layer_name(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set layer_name(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get bindings(): Array<compute.ComputeBinding> {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set bindings(v: Array<compute.ComputeBinding>) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, layer_name: string, bindings: Array<compute.ComputeBinding>): ComputeLayerCall {
    return new ComputeLayerCall($g.abi.libs_by_name.get(algebralib.name)!.mapped[4], layer_name, bindings);
  }
}

export class ComputeOperationEuclidean extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationEuclidean';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get input2(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set input2(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, input2: string, output: string): ComputeOperationEuclidean {
    return new ComputeOperationEuclidean($g.abi.libs_by_name.get(algebralib.name)!.mapped[5], input, input2, output);
  }
}

export class ComputeOperationAvg extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationAvg';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get input2(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set input2(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, input2: string, output: string): ComputeOperationAvg {
    return new ComputeOperationAvg($g.abi.libs_by_name.get(algebralib.name)!.mapped[6], input, input2, output);
  }
}

export class ComputeOperationMul extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationMul';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get input2(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set input2(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, input2: string, output: string): ComputeOperationMul {
    return new ComputeOperationMul($g.abi.libs_by_name.get(algebralib.name)!.mapped[7], input, input2, output);
  }
}

export class ComputeOperationCelu extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationCelu';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get alpha(): number | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set alpha(v: number | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public static alpha_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[8];
    return  t.static_values[0] as number;
  }
  static create($g: $sdk.GreyCat, input: string, output: string, alpha: number | null): ComputeOperationCelu {
    return new ComputeOperationCelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[8], input, output, alpha);
  }
}

export class ComputeLayerActivation extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeLayerActivation';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get name(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get activation(): compute.ComputeActivation {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set activation(v: compute.ComputeActivation) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public static var_input_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[9];
    return  t.static_values[0] as string;
  }
  public static var_output_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[9];
    return  t.static_values[1] as string;
  }
  static create($g: $sdk.GreyCat, name: string, activation: compute.ComputeActivation): ComputeLayerActivation {
    return new ComputeLayerActivation($g.abi.libs_by_name.get(algebralib.name)!.mapped[9], name, activation);
  }
}

export class ComputeOperationSinh extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationSinh';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, output: string): ComputeOperationSinh {
    return new ComputeOperationSinh($g.abi.libs_by_name.get(algebralib.name)!.mapped[10], input, output);
  }
}

export class ComputeVar extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeVar';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get name(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  static create($g: $sdk.GreyCat, name: string): ComputeVar {
    return new ComputeVar($g.abi.libs_by_name.get(algebralib.name)!.mapped[11], name);
  }
}

export class ComputeLayerLinear extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeLayerLinear';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get name(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get type(): $sdk.std.core.TensorType {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set type(v: $sdk.std.core.TensorType) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get inputs(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set inputs(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get outputs(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set outputs(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get use_bias(): boolean {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set use_bias(v: boolean) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get weight_initializer(): compute.ComputeInitializer | null {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set weight_initializer(v: compute.ComputeInitializer | null) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public get weight_regularizer(): compute.ComputeRegularizer | null {
    return this.$attrs[this.$type.generated_offsets[6]];
  }
  public set weight_regularizer(v: compute.ComputeRegularizer | null) {
    this.$attrs[this.$type.generated_offsets[6]] = v;
  }
  public get bias_initializer(): compute.ComputeInitializer | null {
    return this.$attrs[this.$type.generated_offsets[7]];
  }
  public set bias_initializer(v: compute.ComputeInitializer | null) {
    this.$attrs[this.$type.generated_offsets[7]] = v;
  }
  public get bias_regularizer(): compute.ComputeRegularizer | null {
    return this.$attrs[this.$type.generated_offsets[8]];
  }
  public set bias_regularizer(v: compute.ComputeRegularizer | null) {
    this.$attrs[this.$type.generated_offsets[8]] = v;
  }
  public static var_input_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[12];
    return  t.static_values[0] as string;
  }
  public static var_output_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[12];
    return  t.static_values[1] as string;
  }
  public static var_weight_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[12];
    return  t.static_values[2] as string;
  }
  public static var_bias_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[12];
    return  t.static_values[3] as string;
  }
  public static var_mult_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[12];
    return  t.static_values[4] as string;
  }
  static create($g: $sdk.GreyCat, name: string, type: $sdk.std.core.TensorType, inputs: bigint | number, outputs: bigint | number, use_bias: boolean, weight_initializer: compute.ComputeInitializer | null, weight_regularizer: compute.ComputeRegularizer | null, bias_initializer: compute.ComputeInitializer | null, bias_regularizer: compute.ComputeRegularizer | null): ComputeLayerLinear {
    return new ComputeLayerLinear($g.abi.libs_by_name.get(algebralib.name)!.mapped[12], name, type, inputs, outputs, use_bias, weight_initializer, weight_regularizer, bias_initializer, bias_regularizer);
  }
}

export class ComputeOperationSoftmax extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationSoftmax';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, output: string): ComputeOperationSoftmax {
    return new ComputeOperationSoftmax($g.abi.libs_by_name.get(algebralib.name)!.mapped[13], input, output);
  }
}

export class ComputeOptimizer extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOptimizer';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get learning_rate(): number | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set learning_rate(v: number | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  static create($g: $sdk.GreyCat, learning_rate: number | null): ComputeOptimizer {
    return new ComputeOptimizer($g.abi.libs_by_name.get(algebralib.name)!.mapped[14], learning_rate);
  }
}

export class ComputeLayerLossClassification extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeLayerLossClassification';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get name(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get reduction(): compute.ComputeReduction | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set reduction(v: compute.ComputeReduction | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get loss_type(): compute.ComputeClassificationLoss {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set loss_type(v: compute.ComputeClassificationLoss) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get has_class_weights(): boolean {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set has_class_weights(v: boolean) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get calculate_probabilities(): boolean {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set calculate_probabilities(v: boolean) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get from_logits(): boolean {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set from_logits(v: boolean) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public static var_class_weights_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[15];
    return  t.static_values[0] as string;
  }
  public static var_predicted_classes_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[15];
    return  t.static_values[1] as string;
  }
  public static var_probabilities_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[15];
    return  t.static_values[2] as string;
  }
  public static var_sum_reduce_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[15];
    return  t.static_values[3] as string;
  }
  static create($g: $sdk.GreyCat, name: string, reduction: compute.ComputeReduction | null, loss_type: compute.ComputeClassificationLoss, has_class_weights: boolean, calculate_probabilities: boolean, from_logits: boolean): ComputeLayerLossClassification {
    return new ComputeLayerLossClassification($g.abi.libs_by_name.get(algebralib.name)!.mapped[15], name, reduction, loss_type, has_class_weights, calculate_probabilities, from_logits);
  }
}

export class ComputeInitializerLSTM extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeInitializerLSTM';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  static create($g: $sdk.GreyCat): ComputeInitializerLSTM {
    return new ComputeInitializerLSTM($g.abi.libs_by_name.get(algebralib.name)!.mapped[16]);
  }
}

export class ComputeLayerClassification extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeLayerClassification';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get name(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get calculate_probabilities(): boolean {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set calculate_probabilities(v: boolean) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get from_logits(): boolean {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set from_logits(v: boolean) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public static var_input_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[17];
    return  t.static_values[0] as string;
  }
  public static var_predicted_classes_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[17];
    return  t.static_values[1] as string;
  }
  public static var_probabilities_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[17];
    return  t.static_values[2] as string;
  }
  static create($g: $sdk.GreyCat, name: string, calculate_probabilities: boolean, from_logits: boolean): ComputeLayerClassification {
    return new ComputeLayerClassification($g.abi.libs_by_name.get(algebralib.name)!.mapped[17], name, calculate_probabilities, from_logits);
  }
}

export class ComputeOperationSign extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationSign';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, output: string): ComputeOperationSign {
    return new ComputeOperationSign($g.abi.libs_by_name.get(algebralib.name)!.mapped[18], input, output);
  }
}

export class ComputeOperationAsin extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationAsin';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, output: string): ComputeOperationAsin {
    return new ComputeOperationAsin($g.abi.libs_by_name.get(algebralib.name)!.mapped[19], input, output);
  }
}

export class ComputeInitializerXavierUniform extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeInitializerXavierUniform';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  static create($g: $sdk.GreyCat): ComputeInitializerXavierUniform {
    return new ComputeInitializerXavierUniform($g.abi.libs_by_name.get(algebralib.name)!.mapped[20]);
  }
}

export class ComputeOptimizerNadam extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOptimizerNadam';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get learning_rate(): number | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set learning_rate(v: number | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get beta1(): number | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set beta1(v: number | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get beta2(): number | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set beta2(v: number | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get smooth_epsilon(): number | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set smooth_epsilon(v: number | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public static learning_rate_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[21];
    return  t.static_values[0] as number;
  }
  public static beta1_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[21];
    return  t.static_values[1] as number;
  }
  public static beta2_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[21];
    return  t.static_values[2] as number;
  }
  public static smooth_epsilon_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[21];
    return  t.static_values[3] as number;
  }
  static create($g: $sdk.GreyCat, learning_rate: number | null, beta1: number | null, beta2: number | null, smooth_epsilon: number | null): ComputeOptimizerNadam {
    return new ComputeOptimizerNadam($g.abi.libs_by_name.get(algebralib.name)!.mapped[21], learning_rate, beta1, beta2, smooth_epsilon);
  }
}

export class ComputeActivationExp extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeActivationExp';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  static create($g: $sdk.GreyCat): ComputeActivationExp {
    return new ComputeActivationExp($g.abi.libs_by_name.get(algebralib.name)!.mapped[22]);
  }
}

export class ComputeInitializerPytorch extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeInitializerPytorch';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  static create($g: $sdk.GreyCat): ComputeInitializerPytorch {
    return new ComputeInitializerPytorch($g.abi.libs_by_name.get(algebralib.name)!.mapped[23]);
  }
}

export class ComputeOperationSub extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationSub';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get input2(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set input2(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, input2: string, output: string): ComputeOperationSub {
    return new ComputeOperationSub($g.abi.libs_by_name.get(algebralib.name)!.mapped[24], input, input2, output);
  }
}

export class ComputeState extends algebra_n.compute.ComputeState {}

export class ComputeOperationAcos extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationAcos';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, output: string): ComputeOperationAcos {
    return new ComputeOperationAcos($g.abi.libs_by_name.get(algebralib.name)!.mapped[26], input, output);
  }
}

export class ComputeOperationSin extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationSin';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, output: string): ComputeOperationSin {
    return new ComputeOperationSin($g.abi.libs_by_name.get(algebralib.name)!.mapped[27], input, output);
  }
}

export class ComputeInitializerUniformAvg extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeInitializerUniformAvg';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  static create($g: $sdk.GreyCat): ComputeInitializerUniformAvg {
    return new ComputeInitializerUniformAvg($g.abi.libs_by_name.get(algebralib.name)!.mapped[28]);
  }
}

export class ComputeOperationArg extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationArg';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get output2(): string {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set output2(v: string) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, output: string, output2: string): ComputeOperationArg {
    return new ComputeOperationArg($g.abi.libs_by_name.get(algebralib.name)!.mapped[29], input, output, output2);
  }
}

export class ComputeVarConst extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeVarConst';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get name(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get type(): $sdk.std.core.TensorType {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set type(v: $sdk.std.core.TensorType) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get shape(): Array<bigint | number> {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set shape(v: Array<bigint | number>) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  static create($g: $sdk.GreyCat, name: string, type: $sdk.std.core.TensorType, shape: Array<bigint | number>): ComputeVarConst {
    return new ComputeVarConst($g.abi.libs_by_name.get(algebralib.name)!.mapped[30], name, type, shape);
  }
}

export class ComputeEngine extends algebra_n.compute.ComputeEngine {}

export class ComputeLayer extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeLayer';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get name(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  static create($g: $sdk.GreyCat, name: string): ComputeLayer {
    return new ComputeLayer($g.abi.libs_by_name.get(algebralib.name)!.mapped[32], name);
  }
}

export class ComputeOperationSqrt extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationSqrt';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, output: string): ComputeOperationSqrt {
    return new ComputeOperationSqrt($g.abi.libs_by_name.get(algebralib.name)!.mapped[33], input, output);
  }
}

export class ComputeRegressionLoss extends $sdk.GCEnum {
  static readonly _type = 'compute::ComputeRegressionLoss';

  public static square($g: $sdk.GreyCat): compute.ComputeRegressionLoss {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[34];
    return t.enum_values![t.generated_offsets[0]] as compute.ComputeRegressionLoss;
  }
  public static abs($g: $sdk.GreyCat): compute.ComputeRegressionLoss {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[34];
    return t.enum_values![t.generated_offsets[1]] as compute.ComputeRegressionLoss;
  }
}

export class ComputeOperationExp extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationExp';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, output: string): ComputeOperationExp {
    return new ComputeOperationExp($g.abi.libs_by_name.get(algebralib.name)!.mapped[35], input, output);
  }
}

export class ComputeLayerLoss extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeLayerLoss';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get name(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get reduction(): compute.ComputeReduction | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set reduction(v: compute.ComputeReduction | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public static var_computed_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[36];
    return  t.static_values[0] as string;
  }
  public static var_expected_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[36];
    return  t.static_values[1] as string;
  }
  public static var_loss_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[36];
    return  t.static_values[2] as string;
  }
  static create($g: $sdk.GreyCat, name: string, reduction: compute.ComputeReduction | null): ComputeLayerLoss {
    return new ComputeLayerLoss($g.abi.libs_by_name.get(algebralib.name)!.mapped[36], name, reduction);
  }
}

export class ComputeOperation2In1Out extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperation2In1Out';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get input2(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set input2(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, input2: string, output: string): ComputeOperation2In1Out {
    return new ComputeOperation2In1Out($g.abi.libs_by_name.get(algebralib.name)!.mapped[37], input, input2, output);
  }
}

export class ComputeOperationArgMin extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationArgMin';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get output2(): string {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set output2(v: string) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, output: string, output2: string): ComputeOperationArgMin {
    return new ComputeOperationArgMin($g.abi.libs_by_name.get(algebralib.name)!.mapped[38], input, output, output2);
  }
}

export class ComputeOperationSumIf extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationSumIf';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get ifCondition(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set ifCondition(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get counts(): string {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set counts(v: string) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get classes(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set classes(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, ifCondition: string, output: string, counts: string, classes: bigint | number): ComputeOperationSumIf {
    return new ComputeOperationSumIf($g.abi.libs_by_name.get(algebralib.name)!.mapped[39], input, ifCondition, output, counts, classes);
  }
}

export class ComputeActivationHardSigmoid extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeActivationHardSigmoid';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get slope(): number | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set slope(v: number | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get shift(): number | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set shift(v: number | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public static slope_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[40];
    return  t.static_values[0] as number;
  }
  public static shift_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[40];
    return  t.static_values[1] as number;
  }
  static create($g: $sdk.GreyCat, slope: number | null, shift: number | null): ComputeActivationHardSigmoid {
    return new ComputeActivationHardSigmoid($g.abi.libs_by_name.get(algebralib.name)!.mapped[40], slope, shift);
  }
}

export class ComputeOperationAsinh extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationAsinh';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, output: string): ComputeOperationAsinh {
    return new ComputeOperationAsinh($g.abi.libs_by_name.get(algebralib.name)!.mapped[41], input, output);
  }
}

export class ComputeInitializerNormal extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeInitializerNormal';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get avg(): number {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set avg(v: number) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get std(): number {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set std(v: number) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, avg: number, std: number): ComputeInitializerNormal {
    return new ComputeInitializerNormal($g.abi.libs_by_name.get(algebralib.name)!.mapped[42], avg, std);
  }
}

export class ComputeVariable extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeVariable';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get name(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  static create($g: $sdk.GreyCat, name: string): ComputeVariable {
    return new ComputeVariable($g.abi.libs_by_name.get(algebralib.name)!.mapped[43], name);
  }
}

export class ComputeOperationRelu extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationRelu';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get max_value(): number | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set max_value(v: number | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get threshold(): number | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set threshold(v: number | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public static threshold_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[44];
    return  t.static_values[0] as number;
  }
  static create($g: $sdk.GreyCat, input: string, output: string, max_value: number | null, threshold: number | null): ComputeOperationRelu {
    return new ComputeOperationRelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[44], input, output, max_value, threshold);
  }
}

export class ComputeOperationSigmoid extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationSigmoid';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, output: string): ComputeOperationSigmoid {
    return new ComputeOperationSigmoid($g.abi.libs_by_name.get(algebralib.name)!.mapped[45], input, output);
  }
}

export class ComputeLayerMinMaxScaler extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeLayerMinMaxScaler';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get name(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get type(): $sdk.std.core.TensorType {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set type(v: $sdk.std.core.TensorType) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get inverse_transform(): boolean {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set inverse_transform(v: boolean) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public static var_input_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[46];
    return  t.static_values[0] as string;
  }
  public static var_output_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[46];
    return  t.static_values[1] as string;
  }
  public static var_min_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[46];
    return  t.static_values[2] as string;
  }
  public static var_max_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[46];
    return  t.static_values[3] as string;
  }
  static create($g: $sdk.GreyCat, name: string, type: $sdk.std.core.TensorType, inverse_transform: boolean): ComputeLayerMinMaxScaler {
    return new ComputeLayerMinMaxScaler($g.abi.libs_by_name.get(algebralib.name)!.mapped[46], name, type, inverse_transform);
  }
}

export class ComputeActivationSoftSign extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeActivationSoftSign';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  static create($g: $sdk.GreyCat): ComputeActivationSoftSign {
    return new ComputeActivationSoftSign($g.abi.libs_by_name.get(algebralib.name)!.mapped[47]);
  }
}

export class ComputeClassificationLoss extends $sdk.GCEnum {
  static readonly _type = 'compute::ComputeClassificationLoss';

  public static categorical_cross_entropy($g: $sdk.GreyCat): compute.ComputeClassificationLoss {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[48];
    return t.enum_values![t.generated_offsets[0]] as compute.ComputeClassificationLoss;
  }
  public static sparse_categorical_cross_entropy($g: $sdk.GreyCat): compute.ComputeClassificationLoss {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[48];
    return t.enum_values![t.generated_offsets[1]] as compute.ComputeClassificationLoss;
  }
}

export class ComputeActivation extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeActivation';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  static create($g: $sdk.GreyCat): ComputeActivation {
    return new ComputeActivation($g.abi.libs_by_name.get(algebralib.name)!.mapped[49]);
  }
}

export class ComputeOperationCos extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationCos';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, output: string): ComputeOperationCos {
    return new ComputeOperationCos($g.abi.libs_by_name.get(algebralib.name)!.mapped[50], input, output);
  }
}

export class ComputeOptimizerAdaDelta extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOptimizerAdaDelta';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get learning_rate(): number | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set learning_rate(v: number | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get decay_rate(): number | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set decay_rate(v: number | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get smooth_epsilon(): number | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set smooth_epsilon(v: number | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public static learning_rate_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[51];
    return  t.static_values[0] as number;
  }
  public static decay_rate_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[51];
    return  t.static_values[1] as number;
  }
  public static smooth_epsilon_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[51];
    return  t.static_values[2] as number;
  }
  static create($g: $sdk.GreyCat, learning_rate: number | null, decay_rate: number | null, smooth_epsilon: number | null): ComputeOptimizerAdaDelta {
    return new ComputeOptimizerAdaDelta($g.abi.libs_by_name.get(algebralib.name)!.mapped[51], learning_rate, decay_rate, smooth_epsilon);
  }
}

export class ComputeInitializerNormalIn extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeInitializerNormalIn';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  static create($g: $sdk.GreyCat): ComputeInitializerNormalIn {
    return new ComputeInitializerNormalIn($g.abi.libs_by_name.get(algebralib.name)!.mapped[52]);
  }
}

export class ComputeOperationSelu extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationSelu';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, output: string): ComputeOperationSelu {
    return new ComputeOperationSelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[53], input, output);
  }
}

export class ComputeOperationLeakyRelu extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationLeakyRelu';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get alpha(): number | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set alpha(v: number | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get max_value(): number | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set max_value(v: number | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get threshold(): number | null {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set threshold(v: number | null) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public static alpha_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[54];
    return  t.static_values[0] as number;
  }
  public static max_value_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[54];
    return  t.static_values[1] as number;
  }
  public static threshold_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[54];
    return  t.static_values[2] as number;
  }
  static create($g: $sdk.GreyCat, input: string, output: string, alpha: number | null, max_value: number | null, threshold: number | null): ComputeOperationLeakyRelu {
    return new ComputeOperationLeakyRelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[54], input, output, alpha, max_value, threshold);
  }
}

export class ComputeOperationSoftplus extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationSoftplus';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, output: string): ComputeOperationSoftplus {
    return new ComputeOperationSoftplus($g.abi.libs_by_name.get(algebralib.name)!.mapped[55], input, output);
  }
}

export class ComputeOperationSoftSign extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationSoftSign';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, output: string): ComputeOperationSoftSign {
    return new ComputeOperationSoftSign($g.abi.libs_by_name.get(algebralib.name)!.mapped[56], input, output);
  }
}

export class ComputeInitializerUniformOut extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeInitializerUniformOut';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  static create($g: $sdk.GreyCat): ComputeInitializerUniformOut {
    return new ComputeInitializerUniformOut($g.abi.libs_by_name.get(algebralib.name)!.mapped[57]);
  }
}

export class ComputeOperationLog extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationLog';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, output: string): ComputeOperationLog {
    return new ComputeOperationLog($g.abi.libs_by_name.get(algebralib.name)!.mapped[58], input, output);
  }
}

export class ComputeActivationSelu extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeActivationSelu';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  static create($g: $sdk.GreyCat): ComputeActivationSelu {
    return new ComputeActivationSelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[59]);
  }
}

export class ComputeActivationLeakyRelu extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeActivationLeakyRelu';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get alpha(): number | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set alpha(v: number | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get max_value(): number | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set max_value(v: number | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get threshold(): number | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set threshold(v: number | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public static alpha_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[60];
    return  t.static_values[0] as number;
  }
  public static threshold_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[60];
    return  t.static_values[1] as number;
  }
  static create($g: $sdk.GreyCat, alpha: number | null, max_value: number | null, threshold: number | null): ComputeActivationLeakyRelu {
    return new ComputeActivationLeakyRelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[60], alpha, max_value, threshold);
  }
}

export class ComputeOperationSum extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationSum';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get axis(): bigint | number | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set axis(v: bigint | number | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, output: string, axis: bigint | number | null): ComputeOperationSum {
    return new ComputeOperationSum($g.abi.libs_by_name.get(algebralib.name)!.mapped[61], input, output, axis);
  }
}

export class ComputeOperationFill extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationFill';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get value(): any {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set value(v: any) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, value: any): ComputeOperationFill {
    return new ComputeOperationFill($g.abi.libs_by_name.get(algebralib.name)!.mapped[62], input, value);
  }
}

export class ComputeLayerCustom extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeLayerCustom';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get name(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get ops(): Array<compute.ComputeOperation> {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set ops(v: Array<compute.ComputeOperation>) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get vars(): Array<compute.ComputeVariable> {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set vars(v: Array<compute.ComputeVariable>) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  static create($g: $sdk.GreyCat, name: string, ops: Array<compute.ComputeOperation>, vars: Array<compute.ComputeVariable>): ComputeLayerCustom {
    return new ComputeLayerCustom($g.abi.libs_by_name.get(algebralib.name)!.mapped[63], name, ops, vars);
  }
}

export class ComputeActivationSigmoid extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeActivationSigmoid';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  static create($g: $sdk.GreyCat): ComputeActivationSigmoid {
    return new ComputeActivationSigmoid($g.abi.libs_by_name.get(algebralib.name)!.mapped[64]);
  }
}

export class ComputeRegularizer extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeRegularizer';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get l1(): number {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set l1(v: number) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get l2(): number {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set l2(v: number) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, l1: number, l2: number): ComputeRegularizer {
    return new ComputeRegularizer($g.abi.libs_by_name.get(algebralib.name)!.mapped[65], l1, l2);
  }
}

export class ComputeOperationClip extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationClip';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get min(): number | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set min(v: number | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get max(): number | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set max(v: number | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, output: string, min: number | null, max: number | null): ComputeOperationClip {
    return new ComputeOperationClip($g.abi.libs_by_name.get(algebralib.name)!.mapped[66], input, output, min, max);
  }
}

export class ComputeOperationPow extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationPow';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get input2(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set input2(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, input2: string, output: string): ComputeOperationPow {
    return new ComputeOperationPow($g.abi.libs_by_name.get(algebralib.name)!.mapped[67], input, input2, output);
  }
}

export class ComputeActivationSoftmax extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeActivationSoftmax';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get classes(): string | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set classes(v: string | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  static create($g: $sdk.GreyCat, classes: string | null): ComputeActivationSoftmax {
    return new ComputeActivationSoftmax($g.abi.libs_by_name.get(algebralib.name)!.mapped[68], classes);
  }
}

export class ComputeLayerDense extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeLayerDense';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get name(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get type(): $sdk.std.core.TensorType {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set type(v: $sdk.std.core.TensorType) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get inputs(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set inputs(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get outputs(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set outputs(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get use_bias(): boolean {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set use_bias(v: boolean) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get weight_initializer(): compute.ComputeInitializer | null {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set weight_initializer(v: compute.ComputeInitializer | null) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public get weight_regularizer(): compute.ComputeRegularizer | null {
    return this.$attrs[this.$type.generated_offsets[6]];
  }
  public set weight_regularizer(v: compute.ComputeRegularizer | null) {
    this.$attrs[this.$type.generated_offsets[6]] = v;
  }
  public get bias_initializer(): compute.ComputeInitializer | null {
    return this.$attrs[this.$type.generated_offsets[7]];
  }
  public set bias_initializer(v: compute.ComputeInitializer | null) {
    this.$attrs[this.$type.generated_offsets[7]] = v;
  }
  public get bias_regularizer(): compute.ComputeRegularizer | null {
    return this.$attrs[this.$type.generated_offsets[8]];
  }
  public set bias_regularizer(v: compute.ComputeRegularizer | null) {
    this.$attrs[this.$type.generated_offsets[8]] = v;
  }
  public get activation(): compute.ComputeActivation | null {
    return this.$attrs[this.$type.generated_offsets[9]];
  }
  public set activation(v: compute.ComputeActivation | null) {
    this.$attrs[this.$type.generated_offsets[9]] = v;
  }
  public static var_input_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[69];
    return  t.static_values[0] as string;
  }
  public static var_output_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[69];
    return  t.static_values[1] as string;
  }
  public static var_weight_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[69];
    return  t.static_values[2] as string;
  }
  public static var_bias_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[69];
    return  t.static_values[3] as string;
  }
  public static var_mult_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[69];
    return  t.static_values[4] as string;
  }
  public static var_pre_activation_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[69];
    return  t.static_values[5] as string;
  }
  static create($g: $sdk.GreyCat, name: string, type: $sdk.std.core.TensorType, inputs: bigint | number, outputs: bigint | number, use_bias: boolean, weight_initializer: compute.ComputeInitializer | null, weight_regularizer: compute.ComputeRegularizer | null, bias_initializer: compute.ComputeInitializer | null, bias_regularizer: compute.ComputeRegularizer | null, activation: compute.ComputeActivation | null): ComputeLayerDense {
    return new ComputeLayerDense($g.abi.libs_by_name.get(algebralib.name)!.mapped[69], name, type, inputs, outputs, use_bias, weight_initializer, weight_regularizer, bias_initializer, bias_regularizer, activation);
  }
}

export class ComputeInitializerRelu extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeInitializerRelu';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  static create($g: $sdk.GreyCat): ComputeInitializerRelu {
    return new ComputeInitializerRelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[70]);
  }
}

export class ComputeInitializerConstant extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeInitializerConstant';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get value(): any {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set value(v: any) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  static create($g: $sdk.GreyCat, value: any): ComputeInitializerConstant {
    return new ComputeInitializerConstant($g.abi.libs_by_name.get(algebralib.name)!.mapped[71], value);
  }
}

export class ComputeInitializerUniform extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeInitializerUniform';

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
  static create($g: $sdk.GreyCat, min: number, max: number): ComputeInitializerUniform {
    return new ComputeInitializerUniform($g.abi.libs_by_name.get(algebralib.name)!.mapped[72], min, max);
  }
}

export class ComputeOptimizerMomentum extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOptimizerMomentum';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get learning_rate(): number | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set learning_rate(v: number | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get decay_rate(): number {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set decay_rate(v: number) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public static learning_rate_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[73];
    return  t.static_values[0] as number;
  }
  public static decay_rate_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[73];
    return  t.static_values[1] as number;
  }
  static create($g: $sdk.GreyCat, learning_rate: number | null, decay_rate: number): ComputeOptimizerMomentum {
    return new ComputeOptimizerMomentum($g.abi.libs_by_name.get(algebralib.name)!.mapped[73], learning_rate, decay_rate);
  }
}

export class ComputeInitializerGlorotUniform extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeInitializerGlorotUniform';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  static create($g: $sdk.GreyCat): ComputeInitializerGlorotUniform {
    return new ComputeInitializerGlorotUniform($g.abi.libs_by_name.get(algebralib.name)!.mapped[74]);
  }
}

export class ComputeOperationMatMul extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationMatMul';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get input2(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set input2(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get transposeA(): boolean {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set transposeA(v: boolean) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get transposeB(): boolean {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set transposeB(v: boolean) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get alpha(): number {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set alpha(v: number) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public get beta(): number {
    return this.$attrs[this.$type.generated_offsets[6]];
  }
  public set beta(v: number) {
    this.$attrs[this.$type.generated_offsets[6]] = v;
  }
  public static transpose_def($g: $sdk.GreyCat): boolean {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[75];
    return  t.static_values[0] as boolean;
  }
  public static alpha_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[75];
    return  t.static_values[1] as number;
  }
  public static beta_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[75];
    return  t.static_values[2] as number;
  }
  static create($g: $sdk.GreyCat, input: string, input2: string, output: string, transposeA: boolean, transposeB: boolean, alpha: number, beta: number): ComputeOperationMatMul {
    return new ComputeOperationMatMul($g.abi.libs_by_name.get(algebralib.name)!.mapped[75], input, input2, output, transposeA, transposeB, alpha, beta);
  }
}

export class ComputeCounter extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeCounter';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get epoch(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set epoch(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get optimizationSteps(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set optimizationSteps(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get batchNotOptimized(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set batchNotOptimized(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  static create($g: $sdk.GreyCat, epoch: bigint | number, optimizationSteps: bigint | number, batchNotOptimized: bigint | number): ComputeCounter {
    return new ComputeCounter($g.abi.libs_by_name.get(algebralib.name)!.mapped[76], epoch, optimizationSteps, batchNotOptimized);
  }
}

export class ComputeInitializerNormalAvg extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeInitializerNormalAvg';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  static create($g: $sdk.GreyCat): ComputeInitializerNormalAvg {
    return new ComputeInitializerNormalAvg($g.abi.libs_by_name.get(algebralib.name)!.mapped[77]);
  }
}

export class ComputeOperation1In1Out extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperation1In1Out';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, output: string): ComputeOperation1In1Out {
    return new ComputeOperation1In1Out($g.abi.libs_by_name.get(algebralib.name)!.mapped[78], input, output);
  }
}

export class ComputeOperationArgMax extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationArgMax';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get output2(): string {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set output2(v: string) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, output: string, output2: string): ComputeOperationArgMax {
    return new ComputeOperationArgMax($g.abi.libs_by_name.get(algebralib.name)!.mapped[79], input, output, output2);
  }
}

export class ComputeActivationElu extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeActivationElu';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get alpha(): number | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set alpha(v: number | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public static alpha_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[80];
    return  t.static_values[0] as number;
  }
  static create($g: $sdk.GreyCat, alpha: number | null): ComputeActivationElu {
    return new ComputeActivationElu($g.abi.libs_by_name.get(algebralib.name)!.mapped[80], alpha);
  }
}

export class ComputeReduction extends $sdk.GCEnum {
  static readonly _type = 'compute::ComputeReduction';

  public static auto($g: $sdk.GreyCat): compute.ComputeReduction {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[81];
    return t.enum_values![t.generated_offsets[0]] as compute.ComputeReduction;
  }
  public static none($g: $sdk.GreyCat): compute.ComputeReduction {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[81];
    return t.enum_values![t.generated_offsets[1]] as compute.ComputeReduction;
  }
  public static sum($g: $sdk.GreyCat): compute.ComputeReduction {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[81];
    return t.enum_values![t.generated_offsets[2]] as compute.ComputeReduction;
  }
  public static mean($g: $sdk.GreyCat): compute.ComputeReduction {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[81];
    return t.enum_values![t.generated_offsets[3]] as compute.ComputeReduction;
  }
  public static disabled($g: $sdk.GreyCat): compute.ComputeReduction {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[81];
    return t.enum_values![t.generated_offsets[4]] as compute.ComputeReduction;
  }
}

export class ComputeOperationAdd extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationAdd';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get input2(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set input2(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, input2: string, output: string): ComputeOperationAdd {
    return new ComputeOperationAdd($g.abi.libs_by_name.get(algebralib.name)!.mapped[82], input, input2, output);
  }
}

export class ComputeModel extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeModel';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get layers(): Array<compute.ComputeLayer> {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set layers(v: Array<compute.ComputeLayer>) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  static create($g: $sdk.GreyCat, layers: Array<compute.ComputeLayer>): ComputeModel {
    return new ComputeModel($g.abi.libs_by_name.get(algebralib.name)!.mapped[83], layers);
  }
}

export class ComputeActivationRelu extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeActivationRelu';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get max_value(): number | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set max_value(v: number | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get threshold(): number | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set threshold(v: number | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public static threshold_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[84];
    return  t.static_values[0] as number;
  }
  static create($g: $sdk.GreyCat, max_value: number | null, threshold: number | null): ComputeActivationRelu {
    return new ComputeActivationRelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[84], max_value, threshold);
  }
}

export class ComputeOperationAtan extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationAtan';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, output: string): ComputeOperationAtan {
    return new ComputeOperationAtan($g.abi.libs_by_name.get(algebralib.name)!.mapped[85], input, output);
  }
}

export class ComputeOptimizerAdam extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOptimizerAdam';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get learning_rate(): number | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set learning_rate(v: number | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get beta1(): number | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set beta1(v: number | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get beta2(): number | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set beta2(v: number | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get smooth_epsilon(): number | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set smooth_epsilon(v: number | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public static learning_rate_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[86];
    return  t.static_values[0] as number;
  }
  public static beta1_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[86];
    return  t.static_values[1] as number;
  }
  public static beta2_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[86];
    return  t.static_values[2] as number;
  }
  public static smooth_epsilon_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[86];
    return  t.static_values[3] as number;
  }
  static create($g: $sdk.GreyCat, learning_rate: number | null, beta1: number | null, beta2: number | null, smooth_epsilon: number | null): ComputeOptimizerAdam {
    return new ComputeOptimizerAdam($g.abi.libs_by_name.get(algebralib.name)!.mapped[86], learning_rate, beta1, beta2, smooth_epsilon);
  }
}

export class ComputeOptimizerFtrl extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOptimizerFtrl';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get learning_rate(): number | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set learning_rate(v: number | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get lambda1(): number | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set lambda1(v: number | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get lambda2(): number | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set lambda2(v: number | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get beta(): number | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set beta(v: number | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public static learning_rate_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[87];
    return  t.static_values[0] as number;
  }
  public static beta_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[87];
    return  t.static_values[1] as number;
  }
  public static lambda1_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[87];
    return  t.static_values[2] as number;
  }
  public static lambda2_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[87];
    return  t.static_values[3] as number;
  }
  static create($g: $sdk.GreyCat, learning_rate: number | null, lambda1: number | null, lambda2: number | null, beta: number | null): ComputeOptimizerFtrl {
    return new ComputeOptimizerFtrl($g.abi.libs_by_name.get(algebralib.name)!.mapped[87], learning_rate, lambda1, lambda2, beta);
  }
}

export class ComputeInitializerIdentity extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeInitializerIdentity';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  static create($g: $sdk.GreyCat): ComputeInitializerIdentity {
    return new ComputeInitializerIdentity($g.abi.libs_by_name.get(algebralib.name)!.mapped[88]);
  }
}

export class ComputeInitializerUniformIn extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeInitializerUniformIn';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  static create($g: $sdk.GreyCat): ComputeInitializerUniformIn {
    return new ComputeInitializerUniformIn($g.abi.libs_by_name.get(algebralib.name)!.mapped[89]);
  }
}

export class ComputeInitializerSigmoidUniform extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeInitializerSigmoidUniform';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  static create($g: $sdk.GreyCat): ComputeInitializerSigmoidUniform {
    return new ComputeInitializerSigmoidUniform($g.abi.libs_by_name.get(algebralib.name)!.mapped[90]);
  }
}

export class ComputeActivationSoftplus extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeActivationSoftplus';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  static create($g: $sdk.GreyCat): ComputeActivationSoftplus {
    return new ComputeActivationSoftplus($g.abi.libs_by_name.get(algebralib.name)!.mapped[91]);
  }
}

export class ComputeOperationLeCunTanh extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationLeCunTanh';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, output: string): ComputeOperationLeCunTanh {
    return new ComputeOperationLeCunTanh($g.abi.libs_by_name.get(algebralib.name)!.mapped[92], input, output);
  }
}

export class ComputeOperationDiv extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationDiv';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get input2(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set input2(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, input2: string, output: string): ComputeOperationDiv {
    return new ComputeOperationDiv($g.abi.libs_by_name.get(algebralib.name)!.mapped[93], input, input2, output);
  }
}

export class ComputeInitializerReluUniform extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeInitializerReluUniform';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  static create($g: $sdk.GreyCat): ComputeInitializerReluUniform {
    return new ComputeInitializerReluUniform($g.abi.libs_by_name.get(algebralib.name)!.mapped[94]);
  }
}

export class ComputeLayerLSTM extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeLayerLSTM';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get name(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get bias_initializer(): compute.ComputeInitializer | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set bias_initializer(v: compute.ComputeInitializer | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get weight_regularizer(): compute.ComputeRegularizer | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set weight_regularizer(v: compute.ComputeRegularizer | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get bias_regularizer(): compute.ComputeRegularizer | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set bias_regularizer(v: compute.ComputeRegularizer | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get type(): $sdk.std.core.TensorType {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set type(v: $sdk.std.core.TensorType) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get use_bias(): boolean | null {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set use_bias(v: boolean | null) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public get return_sequences(): boolean | null {
    return this.$attrs[this.$type.generated_offsets[6]];
  }
  public set return_sequences(v: boolean | null) {
    this.$attrs[this.$type.generated_offsets[6]] = v;
  }
  public get bidirectional(): boolean | null {
    return this.$attrs[this.$type.generated_offsets[7]];
  }
  public set bidirectional(v: boolean | null) {
    this.$attrs[this.$type.generated_offsets[7]] = v;
  }
  public get auto_init_states(): boolean | null {
    return this.$attrs[this.$type.generated_offsets[8]];
  }
  public set auto_init_states(v: boolean | null) {
    this.$attrs[this.$type.generated_offsets[8]] = v;
  }
  public get inputs(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[9]];
  }
  public set inputs(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[9]] = v;
  }
  public get outputs(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[10]];
  }
  public set outputs(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[10]] = v;
  }
  public get layers(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[11]];
  }
  public set layers(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[11]] = v;
  }
  public get sequences(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[12]];
  }
  public set sequences(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[12]] = v;
  }
  public static var_input_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[95];
    return  t.static_values[0] as string;
  }
  public static var_output_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[95];
    return  t.static_values[1] as string;
  }
  public static var_hx_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[95];
    return  t.static_values[2] as string;
  }
  public static var_cx_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[95];
    return  t.static_values[3] as string;
  }
  public static var_hy_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[95];
    return  t.static_values[4] as string;
  }
  public static var_cy_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[95];
    return  t.static_values[5] as string;
  }
  public static var_weight_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[95];
    return  t.static_values[6] as string;
  }
  public static var_bias_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[95];
    return  t.static_values[7] as string;
  }
  public static var_internal_i_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[95];
    return  t.static_values[8] as string;
  }
  public static var_internal_f_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[95];
    return  t.static_values[9] as string;
  }
  public static var_internal_cp_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[95];
    return  t.static_values[10] as string;
  }
  public static var_internal_o_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[95];
    return  t.static_values[11] as string;
  }
  public static var_internal_h_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[95];
    return  t.static_values[12] as string;
  }
  public static var_internal_c_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[95];
    return  t.static_values[13] as string;
  }
  public static var_internal_mult_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[95];
    return  t.static_values[14] as string;
  }
  public static var_internal_output_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[95];
    return  t.static_values[15] as string;
  }
  static create($g: $sdk.GreyCat, name: string, bias_initializer: compute.ComputeInitializer | null, weight_regularizer: compute.ComputeRegularizer | null, bias_regularizer: compute.ComputeRegularizer | null, type: $sdk.std.core.TensorType, use_bias: boolean | null, return_sequences: boolean | null, bidirectional: boolean | null, auto_init_states: boolean | null, inputs: bigint | number, outputs: bigint | number, layers: bigint | number, sequences: bigint | number): ComputeLayerLSTM {
    return new ComputeLayerLSTM($g.abi.libs_by_name.get(algebralib.name)!.mapped[95], name, bias_initializer, weight_regularizer, bias_regularizer, type, use_bias, return_sequences, bidirectional, auto_init_states, inputs, outputs, layers, sequences);
  }
}

export class ComputeInitializerLeCunUniform extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeInitializerLeCunUniform';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  static create($g: $sdk.GreyCat): ComputeInitializerLeCunUniform {
    return new ComputeInitializerLeCunUniform($g.abi.libs_by_name.get(algebralib.name)!.mapped[96]);
  }
}

export class ComputeActivationTanh extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeActivationTanh';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  static create($g: $sdk.GreyCat): ComputeActivationTanh {
    return new ComputeActivationTanh($g.abi.libs_by_name.get(algebralib.name)!.mapped[97]);
  }
}

export class ComputeVarInOut extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeVarInOut';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get name(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get type(): $sdk.std.core.TensorType {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set type(v: $sdk.std.core.TensorType) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get shape(): Array<bigint | number> {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set shape(v: Array<bigint | number>) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get with_grad(): boolean {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set with_grad(v: boolean) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  static create($g: $sdk.GreyCat, name: string, type: $sdk.std.core.TensorType, shape: Array<bigint | number>, with_grad: boolean): ComputeVarInOut {
    return new ComputeVarInOut($g.abi.libs_by_name.get(algebralib.name)!.mapped[98], name, type, shape, with_grad);
  }
}

export class ComputeLayerFilter extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeLayerFilter';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get name(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get type(): $sdk.std.core.TensorType {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set type(v: $sdk.std.core.TensorType) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get inputs(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set inputs(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get outputs(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set outputs(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get maskValues(): Array<bigint | number> {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set maskValues(v: Array<bigint | number>) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public static var_input_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[99];
    return  t.static_values[0] as string;
  }
  public static var_output_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[99];
    return  t.static_values[1] as string;
  }
  public static var_mask_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[99];
    return  t.static_values[2] as string;
  }
  static create($g: $sdk.GreyCat, name: string, type: $sdk.std.core.TensorType, inputs: bigint | number, outputs: bigint | number, maskValues: Array<bigint | number>): ComputeLayerFilter {
    return new ComputeLayerFilter($g.abi.libs_by_name.get(algebralib.name)!.mapped[99], name, type, inputs, outputs, maskValues);
  }
}

export class ComputeOptimizerRmsProp extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOptimizerRmsProp';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get learning_rate(): number | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set learning_rate(v: number | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get decay_rate(): number | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set decay_rate(v: number | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get smooth_epsilon(): number | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set smooth_epsilon(v: number | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public static learning_rate_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[100];
    return  t.static_values[0] as number;
  }
  public static decay_rate_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[100];
    return  t.static_values[1] as number;
  }
  public static smooth_epsilon_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[100];
    return  t.static_values[2] as number;
  }
  static create($g: $sdk.GreyCat, learning_rate: number | null, decay_rate: number | null, smooth_epsilon: number | null): ComputeOptimizerRmsProp {
    return new ComputeOptimizerRmsProp($g.abi.libs_by_name.get(algebralib.name)!.mapped[100], learning_rate, decay_rate, smooth_epsilon);
  }
}

export class ComputeOptimizerSgd extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOptimizerSgd';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get learning_rate(): number | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set learning_rate(v: number | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public static learning_rate_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[101];
    return  t.static_values[0] as number;
  }
  static create($g: $sdk.GreyCat, learning_rate: number | null): ComputeOptimizerSgd {
    return new ComputeOptimizerSgd($g.abi.libs_by_name.get(algebralib.name)!.mapped[101], learning_rate);
  }
}

export class ComputeBinding extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeBinding';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get src_layer_name(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set src_layer_name(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get src_var_name(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set src_var_name(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get target_var_name(): string {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set target_var_name(v: string) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  static create($g: $sdk.GreyCat, src_layer_name: string, src_var_name: string, target_var_name: string): ComputeBinding {
    return new ComputeBinding($g.abi.libs_by_name.get(algebralib.name)!.mapped[102], src_layer_name, src_var_name, target_var_name);
  }
}

export class ComputeLayerStandardScaler extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeLayerStandardScaler';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get name(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get type(): $sdk.std.core.TensorType {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set type(v: $sdk.std.core.TensorType) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get inverse_transform(): boolean {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set inverse_transform(v: boolean) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public static var_input_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[103];
    return  t.static_values[0] as string;
  }
  public static var_output_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[103];
    return  t.static_values[1] as string;
  }
  public static var_avg_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[103];
    return  t.static_values[2] as string;
  }
  public static var_std_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[103];
    return  t.static_values[3] as string;
  }
  static create($g: $sdk.GreyCat, name: string, type: $sdk.std.core.TensorType, inverse_transform: boolean): ComputeLayerStandardScaler {
    return new ComputeLayerStandardScaler($g.abi.libs_by_name.get(algebralib.name)!.mapped[103], name, type, inverse_transform);
  }
}

export class ComputeInitializerNormalOut extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeInitializerNormalOut';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  static create($g: $sdk.GreyCat): ComputeInitializerNormalOut {
    return new ComputeInitializerNormalOut($g.abi.libs_by_name.get(algebralib.name)!.mapped[104]);
  }
}

export class ComputeInitializerNone extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeInitializerNone';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  static create($g: $sdk.GreyCat): ComputeInitializerNone {
    return new ComputeInitializerNone($g.abi.libs_by_name.get(algebralib.name)!.mapped[105]);
  }
}

export class ComputeOperationNeg extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationNeg';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, output: string): ComputeOperationNeg {
    return new ComputeOperationNeg($g.abi.libs_by_name.get(algebralib.name)!.mapped[106], input, output);
  }
}

export class ComputeOperationTan extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationTan';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, output: string): ComputeOperationTan {
    return new ComputeOperationTan($g.abi.libs_by_name.get(algebralib.name)!.mapped[107], input, output);
  }
}

export class ComputeVarProxy extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeVarProxy';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get name(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  static create($g: $sdk.GreyCat, name: string): ComputeVarProxy {
    return new ComputeVarProxy($g.abi.libs_by_name.get(algebralib.name)!.mapped[108], name);
  }
}

export class ComputeOperationCosh extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationCosh';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, output: string): ComputeOperationCosh {
    return new ComputeOperationCosh($g.abi.libs_by_name.get(algebralib.name)!.mapped[109], input, output);
  }
}

export class ComputeLayerSeq extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeLayerSeq';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get name(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get calls(): Array<compute.ComputeLayerCall> {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set calls(v: Array<compute.ComputeLayerCall>) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get optimizer(): compute.ComputeOptimizer | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set optimizer(v: compute.ComputeOptimizer | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  static create($g: $sdk.GreyCat, name: string, calls: Array<compute.ComputeLayerCall>, optimizer: compute.ComputeOptimizer | null): ComputeLayerSeq {
    return new ComputeLayerSeq($g.abi.libs_by_name.get(algebralib.name)!.mapped[110], name, calls, optimizer);
  }
}

export class ComputeLayerLossRegression extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeLayerLossRegression';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get name(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get reduction(): compute.ComputeReduction | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set reduction(v: compute.ComputeReduction | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get loss_type(): compute.ComputeRegressionLoss {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set loss_type(v: compute.ComputeRegressionLoss) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  static create($g: $sdk.GreyCat, name: string, reduction: compute.ComputeReduction | null, loss_type: compute.ComputeRegressionLoss): ComputeLayerLossRegression {
    return new ComputeLayerLossRegression($g.abi.libs_by_name.get(algebralib.name)!.mapped[111], name, reduction, loss_type);
  }
}

export class ComputeOperationAcosh extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationAcosh';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, output: string): ComputeOperationAcosh {
    return new ComputeOperationAcosh($g.abi.libs_by_name.get(algebralib.name)!.mapped[112], input, output);
  }
}

export class ComputeOperationHardSigmoid extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationHardSigmoid';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get slope(): number | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set slope(v: number | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get shift(): number | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set shift(v: number | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public static slope_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[113];
    return  t.static_values[0] as number;
  }
  public static shift_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[113];
    return  t.static_values[1] as number;
  }
  static create($g: $sdk.GreyCat, input: string, output: string, slope: number | null, shift: number | null): ComputeOperationHardSigmoid {
    return new ComputeOperationHardSigmoid($g.abi.libs_by_name.get(algebralib.name)!.mapped[113], input, output, slope, shift);
  }
}

export class ComputeOperationLogSoftmax extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationLogSoftmax';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get axis(): bigint | number | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set axis(v: bigint | number | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, output: string, axis: bigint | number | null): ComputeOperationLogSoftmax {
    return new ComputeOperationLogSoftmax($g.abi.libs_by_name.get(algebralib.name)!.mapped[114], input, output, axis);
  }
}

export class ComputeVarOptimize extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeVarOptimize';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get name(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get type(): $sdk.std.core.TensorType {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set type(v: $sdk.std.core.TensorType) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get shape(): Array<bigint | number> {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set shape(v: Array<bigint | number>) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get l1(): number {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set l1(v: number) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get l2(): number {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set l2(v: number) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get init(): compute.ComputeInitializer | null {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set init(v: compute.ComputeInitializer | null) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  static create($g: $sdk.GreyCat, name: string, type: $sdk.std.core.TensorType, shape: Array<bigint | number>, l1: number, l2: number, init: compute.ComputeInitializer | null): ComputeVarOptimize {
    return new ComputeVarOptimize($g.abi.libs_by_name.get(algebralib.name)!.mapped[115], name, type, shape, l1, l2, init);
  }
}

export class ComputeOperationAddBias extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationAddBias';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get input2(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set input2(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, input2: string, output: string): ComputeOperationAddBias {
    return new ComputeOperationAddBias($g.abi.libs_by_name.get(algebralib.name)!.mapped[116], input, input2, output);
  }
}

export class ComputeOperationAbs extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationAbs';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, output: string): ComputeOperationAbs {
    return new ComputeOperationAbs($g.abi.libs_by_name.get(algebralib.name)!.mapped[117], input, output);
  }
}

export class ComputeOperationScale extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationScale';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get alpha(): number {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set alpha(v: number) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, output: string, alpha: number): ComputeOperationScale {
    return new ComputeOperationScale($g.abi.libs_by_name.get(algebralib.name)!.mapped[118], input, output, alpha);
  }
}

export class ComputeOptimizerAdaGrad extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOptimizerAdaGrad';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get learning_rate(): number | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set learning_rate(v: number | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get initial_accumulator(): number | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set initial_accumulator(v: number | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get smooth_epsilon(): number | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set smooth_epsilon(v: number | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public static learning_rate_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[119];
    return  t.static_values[0] as number;
  }
  public static initial_accumulator_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[119];
    return  t.static_values[1] as number;
  }
  public static smooth_epsilon_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[119];
    return  t.static_values[2] as number;
  }
  static create($g: $sdk.GreyCat, learning_rate: number | null, initial_accumulator: number | null, smooth_epsilon: number | null): ComputeOptimizerAdaGrad {
    return new ComputeOptimizerAdaGrad($g.abi.libs_by_name.get(algebralib.name)!.mapped[119], learning_rate, initial_accumulator, smooth_epsilon);
  }
}

export class ComputeOptimizerAdaMax extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOptimizerAdaMax';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get learning_rate(): number | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set learning_rate(v: number | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get beta1(): number | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set beta1(v: number | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get beta2(): number | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set beta2(v: number | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get smooth_epsilon(): number | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set smooth_epsilon(v: number | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public static learning_rate_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[120];
    return  t.static_values[0] as number;
  }
  public static beta1_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[120];
    return  t.static_values[1] as number;
  }
  public static beta2_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[120];
    return  t.static_values[2] as number;
  }
  public static smooth_epsilon_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[120];
    return  t.static_values[3] as number;
  }
  static create($g: $sdk.GreyCat, learning_rate: number | null, beta1: number | null, beta2: number | null, smooth_epsilon: number | null): ComputeOptimizerAdaMax {
    return new ComputeOptimizerAdaMax($g.abi.libs_by_name.get(algebralib.name)!.mapped[120], learning_rate, beta1, beta2, smooth_epsilon);
  }
}

export class ComputeOperationAtanh extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationAtanh';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, output: string): ComputeOperationAtanh {
    return new ComputeOperationAtanh($g.abi.libs_by_name.get(algebralib.name)!.mapped[121], input, output);
  }
}

export class ComputeInitializerXavier extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeInitializerXavier';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  static create($g: $sdk.GreyCat): ComputeInitializerXavier {
    return new ComputeInitializerXavier($g.abi.libs_by_name.get(algebralib.name)!.mapped[122]);
  }
}

export class ComputeLayerPCAScaler extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeLayerPCAScaler';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get name(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get type(): $sdk.std.core.TensorType {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set type(v: $sdk.std.core.TensorType) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get inverse_transform(): boolean {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set inverse_transform(v: boolean) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public static var_input_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[123];
    return  t.static_values[0] as string;
  }
  public static var_output_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[123];
    return  t.static_values[1] as string;
  }
  public static var_avg_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[123];
    return  t.static_values[2] as string;
  }
  public static var_std_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[123];
    return  t.static_values[3] as string;
  }
  public static var_space_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[123];
    return  t.static_values[4] as string;
  }
  static create($g: $sdk.GreyCat, name: string, type: $sdk.std.core.TensorType, inverse_transform: boolean): ComputeLayerPCAScaler {
    return new ComputeLayerPCAScaler($g.abi.libs_by_name.get(algebralib.name)!.mapped[123], name, type, inverse_transform);
  }
}

export class ComputeOperation extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperation';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  static create($g: $sdk.GreyCat): ComputeOperation {
    return new ComputeOperation($g.abi.libs_by_name.get(algebralib.name)!.mapped[124]);
  }
}

export class ComputeActivationCelu extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeActivationCelu';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get alpha(): number | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set alpha(v: number | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public static alpha_def($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[125];
    return  t.static_values[0] as number;
  }
  static create($g: $sdk.GreyCat, alpha: number | null): ComputeActivationCelu {
    return new ComputeActivationCelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[125], alpha);
  }
}

export class ComputeInitializer extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeInitializer';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  static create($g: $sdk.GreyCat): ComputeInitializer {
    return new ComputeInitializer($g.abi.libs_by_name.get(algebralib.name)!.mapped[126]);
  }
}

export class ComputeOperationFilter extends $sdk.GCObject {
  static readonly _type = 'compute::ComputeOperationFilter';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get input(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set input(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get output(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set output(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get mask(): string {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set mask(v: string) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get nbOutputs(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set nbOutputs(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  static create($g: $sdk.GreyCat, input: string, output: string, mask: string, nbOutputs: bigint | number): ComputeOperationFilter {
    return new ComputeOperationFilter($g.abi.libs_by_name.get(algebralib.name)!.mapped[127], input, output, mask, nbOutputs);
  }
}

}

export namespace climate {
}

export namespace nn_layers_names {
export class NNLayersNames extends $sdk.GCEnum {
  static readonly _type = 'nn_layers_names::NNLayersNames';

  public static layer_0($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[0]] as nn_layers_names.NNLayersNames;
  }
  public static layer_1($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[1]] as nn_layers_names.NNLayersNames;
  }
  public static layer_2($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[2]] as nn_layers_names.NNLayersNames;
  }
  public static layer_3($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[3]] as nn_layers_names.NNLayersNames;
  }
  public static layer_4($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[4]] as nn_layers_names.NNLayersNames;
  }
  public static layer_5($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[5]] as nn_layers_names.NNLayersNames;
  }
  public static layer_6($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[6]] as nn_layers_names.NNLayersNames;
  }
  public static layer_7($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[7]] as nn_layers_names.NNLayersNames;
  }
  public static layer_8($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[8]] as nn_layers_names.NNLayersNames;
  }
  public static layer_9($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[9]] as nn_layers_names.NNLayersNames;
  }
  public static layer_10($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[10]] as nn_layers_names.NNLayersNames;
  }
  public static layer_11($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[11]] as nn_layers_names.NNLayersNames;
  }
  public static layer_12($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[12]] as nn_layers_names.NNLayersNames;
  }
  public static layer_13($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[13]] as nn_layers_names.NNLayersNames;
  }
  public static layer_14($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[14]] as nn_layers_names.NNLayersNames;
  }
  public static layer_15($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[15]] as nn_layers_names.NNLayersNames;
  }
  public static layer_16($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[16]] as nn_layers_names.NNLayersNames;
  }
  public static layer_17($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[17]] as nn_layers_names.NNLayersNames;
  }
  public static layer_18($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[18]] as nn_layers_names.NNLayersNames;
  }
  public static layer_19($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[19]] as nn_layers_names.NNLayersNames;
  }
  public static layer_20($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[20]] as nn_layers_names.NNLayersNames;
  }
  public static layer_21($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[21]] as nn_layers_names.NNLayersNames;
  }
  public static layer_22($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[22]] as nn_layers_names.NNLayersNames;
  }
  public static layer_23($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[23]] as nn_layers_names.NNLayersNames;
  }
  public static layer_24($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[24]] as nn_layers_names.NNLayersNames;
  }
  public static layer_25($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[25]] as nn_layers_names.NNLayersNames;
  }
  public static layer_26($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[26]] as nn_layers_names.NNLayersNames;
  }
  public static layer_27($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[27]] as nn_layers_names.NNLayersNames;
  }
  public static layer_28($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[28]] as nn_layers_names.NNLayersNames;
  }
  public static layer_29($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[29]] as nn_layers_names.NNLayersNames;
  }
  public static layer_30($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[30]] as nn_layers_names.NNLayersNames;
  }
  public static layer_31($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[31]] as nn_layers_names.NNLayersNames;
  }
  public static layer_32($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[32]] as nn_layers_names.NNLayersNames;
  }
  public static layer_33($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[33]] as nn_layers_names.NNLayersNames;
  }
  public static layer_34($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[34]] as nn_layers_names.NNLayersNames;
  }
  public static layer_35($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[35]] as nn_layers_names.NNLayersNames;
  }
  public static layer_36($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[36]] as nn_layers_names.NNLayersNames;
  }
  public static layer_37($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[37]] as nn_layers_names.NNLayersNames;
  }
  public static layer_38($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[38]] as nn_layers_names.NNLayersNames;
  }
  public static layer_39($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[39]] as nn_layers_names.NNLayersNames;
  }
  public static layer_40($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[40]] as nn_layers_names.NNLayersNames;
  }
  public static layer_41($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[41]] as nn_layers_names.NNLayersNames;
  }
  public static layer_42($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[42]] as nn_layers_names.NNLayersNames;
  }
  public static layer_43($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[43]] as nn_layers_names.NNLayersNames;
  }
  public static layer_44($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[44]] as nn_layers_names.NNLayersNames;
  }
  public static layer_45($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[45]] as nn_layers_names.NNLayersNames;
  }
  public static layer_46($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[46]] as nn_layers_names.NNLayersNames;
  }
  public static layer_47($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[47]] as nn_layers_names.NNLayersNames;
  }
  public static layer_48($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[48]] as nn_layers_names.NNLayersNames;
  }
  public static layer_49($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[49]] as nn_layers_names.NNLayersNames;
  }
  public static layer_50($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[50]] as nn_layers_names.NNLayersNames;
  }
  public static layer_51($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[51]] as nn_layers_names.NNLayersNames;
  }
  public static layer_52($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[52]] as nn_layers_names.NNLayersNames;
  }
  public static layer_53($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[53]] as nn_layers_names.NNLayersNames;
  }
  public static layer_54($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[54]] as nn_layers_names.NNLayersNames;
  }
  public static layer_55($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[55]] as nn_layers_names.NNLayersNames;
  }
  public static layer_56($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[56]] as nn_layers_names.NNLayersNames;
  }
  public static layer_57($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[57]] as nn_layers_names.NNLayersNames;
  }
  public static layer_58($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[58]] as nn_layers_names.NNLayersNames;
  }
  public static layer_59($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[59]] as nn_layers_names.NNLayersNames;
  }
  public static layer_60($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[60]] as nn_layers_names.NNLayersNames;
  }
  public static layer_61($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[61]] as nn_layers_names.NNLayersNames;
  }
  public static layer_62($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[62]] as nn_layers_names.NNLayersNames;
  }
  public static layer_63($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[63]] as nn_layers_names.NNLayersNames;
  }
  public static layer_64($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[64]] as nn_layers_names.NNLayersNames;
  }
  public static layer_65($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[65]] as nn_layers_names.NNLayersNames;
  }
  public static layer_66($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[66]] as nn_layers_names.NNLayersNames;
  }
  public static layer_67($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[67]] as nn_layers_names.NNLayersNames;
  }
  public static layer_68($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[68]] as nn_layers_names.NNLayersNames;
  }
  public static layer_69($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[69]] as nn_layers_names.NNLayersNames;
  }
  public static layer_70($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[70]] as nn_layers_names.NNLayersNames;
  }
  public static layer_71($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[71]] as nn_layers_names.NNLayersNames;
  }
  public static layer_72($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[72]] as nn_layers_names.NNLayersNames;
  }
  public static layer_73($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[73]] as nn_layers_names.NNLayersNames;
  }
  public static layer_74($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[74]] as nn_layers_names.NNLayersNames;
  }
  public static layer_75($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[75]] as nn_layers_names.NNLayersNames;
  }
  public static layer_76($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[76]] as nn_layers_names.NNLayersNames;
  }
  public static layer_77($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[77]] as nn_layers_names.NNLayersNames;
  }
  public static layer_78($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[78]] as nn_layers_names.NNLayersNames;
  }
  public static layer_79($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[79]] as nn_layers_names.NNLayersNames;
  }
  public static layer_80($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[80]] as nn_layers_names.NNLayersNames;
  }
  public static layer_81($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[81]] as nn_layers_names.NNLayersNames;
  }
  public static layer_82($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[82]] as nn_layers_names.NNLayersNames;
  }
  public static layer_83($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[83]] as nn_layers_names.NNLayersNames;
  }
  public static layer_84($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[84]] as nn_layers_names.NNLayersNames;
  }
  public static layer_85($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[85]] as nn_layers_names.NNLayersNames;
  }
  public static layer_86($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[86]] as nn_layers_names.NNLayersNames;
  }
  public static layer_87($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[87]] as nn_layers_names.NNLayersNames;
  }
  public static layer_88($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[88]] as nn_layers_names.NNLayersNames;
  }
  public static layer_89($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[89]] as nn_layers_names.NNLayersNames;
  }
  public static layer_90($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[90]] as nn_layers_names.NNLayersNames;
  }
  public static layer_91($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[91]] as nn_layers_names.NNLayersNames;
  }
  public static layer_92($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[92]] as nn_layers_names.NNLayersNames;
  }
  public static layer_93($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[93]] as nn_layers_names.NNLayersNames;
  }
  public static layer_94($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[94]] as nn_layers_names.NNLayersNames;
  }
  public static layer_95($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[95]] as nn_layers_names.NNLayersNames;
  }
  public static layer_96($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[96]] as nn_layers_names.NNLayersNames;
  }
  public static layer_97($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[97]] as nn_layers_names.NNLayersNames;
  }
  public static layer_98($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[98]] as nn_layers_names.NNLayersNames;
  }
  public static layer_99($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[99]] as nn_layers_names.NNLayersNames;
  }
  public static layer_100($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[100]] as nn_layers_names.NNLayersNames;
  }
  public static layer_101($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[101]] as nn_layers_names.NNLayersNames;
  }
  public static layer_102($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[102]] as nn_layers_names.NNLayersNames;
  }
  public static layer_103($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[103]] as nn_layers_names.NNLayersNames;
  }
  public static layer_104($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[104]] as nn_layers_names.NNLayersNames;
  }
  public static layer_105($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[105]] as nn_layers_names.NNLayersNames;
  }
  public static layer_106($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[106]] as nn_layers_names.NNLayersNames;
  }
  public static layer_107($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[107]] as nn_layers_names.NNLayersNames;
  }
  public static layer_108($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[108]] as nn_layers_names.NNLayersNames;
  }
  public static layer_109($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[109]] as nn_layers_names.NNLayersNames;
  }
  public static layer_110($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[110]] as nn_layers_names.NNLayersNames;
  }
  public static layer_111($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[111]] as nn_layers_names.NNLayersNames;
  }
  public static layer_112($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[112]] as nn_layers_names.NNLayersNames;
  }
  public static layer_113($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[113]] as nn_layers_names.NNLayersNames;
  }
  public static layer_114($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[114]] as nn_layers_names.NNLayersNames;
  }
  public static layer_115($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[115]] as nn_layers_names.NNLayersNames;
  }
  public static layer_116($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[116]] as nn_layers_names.NNLayersNames;
  }
  public static layer_117($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[117]] as nn_layers_names.NNLayersNames;
  }
  public static layer_118($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[118]] as nn_layers_names.NNLayersNames;
  }
  public static layer_119($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[119]] as nn_layers_names.NNLayersNames;
  }
  public static layer_120($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[120]] as nn_layers_names.NNLayersNames;
  }
  public static layer_121($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[121]] as nn_layers_names.NNLayersNames;
  }
  public static layer_122($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[122]] as nn_layers_names.NNLayersNames;
  }
  public static layer_123($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[123]] as nn_layers_names.NNLayersNames;
  }
  public static layer_124($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[124]] as nn_layers_names.NNLayersNames;
  }
  public static layer_125($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[125]] as nn_layers_names.NNLayersNames;
  }
  public static layer_126($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[126]] as nn_layers_names.NNLayersNames;
  }
  public static layer_127($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[127]] as nn_layers_names.NNLayersNames;
  }
  public static layer_128($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[128]] as nn_layers_names.NNLayersNames;
  }
  public static layer_129($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[129]] as nn_layers_names.NNLayersNames;
  }
  public static layer_130($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[130]] as nn_layers_names.NNLayersNames;
  }
  public static layer_131($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[131]] as nn_layers_names.NNLayersNames;
  }
  public static layer_132($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[132]] as nn_layers_names.NNLayersNames;
  }
  public static layer_133($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[133]] as nn_layers_names.NNLayersNames;
  }
  public static layer_134($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[134]] as nn_layers_names.NNLayersNames;
  }
  public static layer_135($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[135]] as nn_layers_names.NNLayersNames;
  }
  public static layer_136($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[136]] as nn_layers_names.NNLayersNames;
  }
  public static layer_137($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[137]] as nn_layers_names.NNLayersNames;
  }
  public static layer_138($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[138]] as nn_layers_names.NNLayersNames;
  }
  public static layer_139($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[139]] as nn_layers_names.NNLayersNames;
  }
  public static layer_140($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[140]] as nn_layers_names.NNLayersNames;
  }
  public static layer_141($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[141]] as nn_layers_names.NNLayersNames;
  }
  public static layer_142($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[142]] as nn_layers_names.NNLayersNames;
  }
  public static layer_143($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[143]] as nn_layers_names.NNLayersNames;
  }
  public static layer_144($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[144]] as nn_layers_names.NNLayersNames;
  }
  public static layer_145($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[145]] as nn_layers_names.NNLayersNames;
  }
  public static layer_146($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[146]] as nn_layers_names.NNLayersNames;
  }
  public static layer_147($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[147]] as nn_layers_names.NNLayersNames;
  }
  public static layer_148($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[148]] as nn_layers_names.NNLayersNames;
  }
  public static layer_149($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[149]] as nn_layers_names.NNLayersNames;
  }
  public static layer_150($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[150]] as nn_layers_names.NNLayersNames;
  }
  public static layer_151($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[151]] as nn_layers_names.NNLayersNames;
  }
  public static layer_152($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[152]] as nn_layers_names.NNLayersNames;
  }
  public static layer_153($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[153]] as nn_layers_names.NNLayersNames;
  }
  public static layer_154($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[154]] as nn_layers_names.NNLayersNames;
  }
  public static layer_155($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[155]] as nn_layers_names.NNLayersNames;
  }
  public static layer_156($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[156]] as nn_layers_names.NNLayersNames;
  }
  public static layer_157($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[157]] as nn_layers_names.NNLayersNames;
  }
  public static layer_158($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[158]] as nn_layers_names.NNLayersNames;
  }
  public static layer_159($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[159]] as nn_layers_names.NNLayersNames;
  }
  public static layer_160($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[160]] as nn_layers_names.NNLayersNames;
  }
  public static layer_161($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[161]] as nn_layers_names.NNLayersNames;
  }
  public static layer_162($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[162]] as nn_layers_names.NNLayersNames;
  }
  public static layer_163($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[163]] as nn_layers_names.NNLayersNames;
  }
  public static layer_164($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[164]] as nn_layers_names.NNLayersNames;
  }
  public static layer_165($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[165]] as nn_layers_names.NNLayersNames;
  }
  public static layer_166($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[166]] as nn_layers_names.NNLayersNames;
  }
  public static layer_167($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[167]] as nn_layers_names.NNLayersNames;
  }
  public static layer_168($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[168]] as nn_layers_names.NNLayersNames;
  }
  public static layer_169($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[169]] as nn_layers_names.NNLayersNames;
  }
  public static layer_170($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[170]] as nn_layers_names.NNLayersNames;
  }
  public static layer_171($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[171]] as nn_layers_names.NNLayersNames;
  }
  public static layer_172($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[172]] as nn_layers_names.NNLayersNames;
  }
  public static layer_173($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[173]] as nn_layers_names.NNLayersNames;
  }
  public static layer_174($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[174]] as nn_layers_names.NNLayersNames;
  }
  public static layer_175($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[175]] as nn_layers_names.NNLayersNames;
  }
  public static layer_176($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[176]] as nn_layers_names.NNLayersNames;
  }
  public static layer_177($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[177]] as nn_layers_names.NNLayersNames;
  }
  public static layer_178($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[178]] as nn_layers_names.NNLayersNames;
  }
  public static layer_179($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[179]] as nn_layers_names.NNLayersNames;
  }
  public static layer_180($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[180]] as nn_layers_names.NNLayersNames;
  }
  public static layer_181($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[181]] as nn_layers_names.NNLayersNames;
  }
  public static layer_182($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[182]] as nn_layers_names.NNLayersNames;
  }
  public static layer_183($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[183]] as nn_layers_names.NNLayersNames;
  }
  public static layer_184($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[184]] as nn_layers_names.NNLayersNames;
  }
  public static layer_185($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[185]] as nn_layers_names.NNLayersNames;
  }
  public static layer_186($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[186]] as nn_layers_names.NNLayersNames;
  }
  public static layer_187($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[187]] as nn_layers_names.NNLayersNames;
  }
  public static layer_188($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[188]] as nn_layers_names.NNLayersNames;
  }
  public static layer_189($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[189]] as nn_layers_names.NNLayersNames;
  }
  public static layer_190($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[190]] as nn_layers_names.NNLayersNames;
  }
  public static layer_191($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[191]] as nn_layers_names.NNLayersNames;
  }
  public static layer_192($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[192]] as nn_layers_names.NNLayersNames;
  }
  public static layer_193($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[193]] as nn_layers_names.NNLayersNames;
  }
  public static layer_194($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[194]] as nn_layers_names.NNLayersNames;
  }
  public static layer_195($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[195]] as nn_layers_names.NNLayersNames;
  }
  public static layer_196($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[196]] as nn_layers_names.NNLayersNames;
  }
  public static layer_197($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[197]] as nn_layers_names.NNLayersNames;
  }
  public static layer_198($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[198]] as nn_layers_names.NNLayersNames;
  }
  public static layer_199($g: $sdk.GreyCat): nn_layers_names.NNLayersNames {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
    return t.enum_values![t.generated_offsets[199]] as nn_layers_names.NNLayersNames;
  }
}

}

export namespace nn {
export class NeuralNetwork extends $sdk.GCObject {
  static readonly _type = 'nn::NeuralNetwork';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get inputs(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set inputs(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get inputs_gradients(): boolean {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set inputs_gradients(v: boolean) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get outputs(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set outputs(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get fixed_batch_size(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set fixed_batch_size(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get inputs_sequences(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set inputs_sequences(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get outputs_sequences(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set outputs_sequences(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public get tensor_type(): $sdk.std.core.TensorType {
    return this.$attrs[this.$type.generated_offsets[6]];
  }
  public set tensor_type(v: $sdk.std.core.TensorType) {
    this.$attrs[this.$type.generated_offsets[6]] = v;
  }
  public get lossLayer(): compute.ComputeLayerLoss | null {
    return this.$attrs[this.$type.generated_offsets[7]];
  }
  public set lossLayer(v: compute.ComputeLayerLoss | null) {
    this.$attrs[this.$type.generated_offsets[7]] = v;
  }
  public get optimizer(): compute.ComputeOptimizer {
    return this.$attrs[this.$type.generated_offsets[8]];
  }
  public set optimizer(v: compute.ComputeOptimizer) {
    this.$attrs[this.$type.generated_offsets[8]] = v;
  }
  public get seed(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[9]];
  }
  public set seed(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[9]] = v;
  }
  public get randomizeSeed(): boolean {
    return this.$attrs[this.$type.generated_offsets[10]];
  }
  public set randomizeSeed(v: boolean) {
    this.$attrs[this.$type.generated_offsets[10]] = v;
  }
  public get placeholders(): compute.ComputeLayerCustom | null {
    return this.$attrs[this.$type.generated_offsets[11]];
  }
  public set placeholders(v: compute.ComputeLayerCustom | null) {
    this.$attrs[this.$type.generated_offsets[11]] = v;
  }
  public get preProcessType(): compute.ComputeLayer | null {
    return this.$attrs[this.$type.generated_offsets[12]];
  }
  public set preProcessType(v: compute.ComputeLayer | null) {
    this.$attrs[this.$type.generated_offsets[12]] = v;
  }
  public get postProcessType(): compute.ComputeLayer | null {
    return this.$attrs[this.$type.generated_offsets[13]];
  }
  public set postProcessType(v: compute.ComputeLayer | null) {
    this.$attrs[this.$type.generated_offsets[13]] = v;
  }
  public get preProcessObject(): any | null {
    return this.$attrs[this.$type.generated_offsets[14]];
  }
  public set preProcessObject(v: any | null) {
    this.$attrs[this.$type.generated_offsets[14]] = v;
  }
  public get postProcessObject(): any | null {
    return this.$attrs[this.$type.generated_offsets[15]];
  }
  public set postProcessObject(v: any | null) {
    this.$attrs[this.$type.generated_offsets[15]] = v;
  }
  public get layers(): Array<compute.ComputeLayer> | null {
    return this.$attrs[this.$type.generated_offsets[16]];
  }
  public set layers(v: Array<compute.ComputeLayer> | null) {
    this.$attrs[this.$type.generated_offsets[16]] = v;
  }
  public get lastLayer(): string | null {
    return this.$attrs[this.$type.generated_offsets[17]];
  }
  public set lastLayer(v: string | null) {
    this.$attrs[this.$type.generated_offsets[17]] = v;
  }
  public get lastOutput(): string | null {
    return this.$attrs[this.$type.generated_offsets[18]];
  }
  public set lastOutput(v: string | null) {
    this.$attrs[this.$type.generated_offsets[18]] = v;
  }
  public static err_negative_in_out($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
    return  t.static_values[0] as string;
  }
  public static err_last_layer_wrong($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
    return  t.static_values[1] as string;
  }
  public static err_incompatible_loss($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
    return  t.static_values[2] as string;
  }
  public static err_layer_not_supported($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
    return  t.static_values[3] as string;
  }
  public static err_tensor_type_not_supported($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
    return  t.static_values[4] as string;
  }
  public static err_minimum_layers($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
    return  t.static_values[5] as string;
  }
  public static layer_placeholders_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
    return  t.static_values[6] as string;
  }
  public static layer_classification_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
    return  t.static_values[7] as string;
  }
  public static layer_loss_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
    return  t.static_values[8] as string;
  }
  public static var_inputs_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
    return  t.static_values[9] as string;
  }
  public static var_enc_inputs_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
    return  t.static_values[10] as string;
  }
  public static var_targets_name($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
    return  t.static_values[11] as string;
  }
  public static var_classifier_classes($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
    return  t.static_values[12] as string;
  }
  public static var_classifier_probabilities($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
    return  t.static_values[13] as string;
  }
  public static var_classifier_class_weights($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
    return  t.static_values[14] as string;
  }
  public static pre_process($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
    return  t.static_values[15] as string;
  }
  public static input_avg($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
    return  t.static_values[16] as string;
  }
  public static input_min($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
    return  t.static_values[17] as string;
  }
  public static input_max($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
    return  t.static_values[18] as string;
  }
  public static input_std($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
    return  t.static_values[19] as string;
  }
  public static input_space($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
    return  t.static_values[20] as string;
  }
  public static output_avg($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
    return  t.static_values[21] as string;
  }
  public static output_min($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
    return  t.static_values[22] as string;
  }
  public static output_max($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
    return  t.static_values[23] as string;
  }
  public static output_std($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
    return  t.static_values[24] as string;
  }
  public static post_process($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
    return  t.static_values[25] as string;
  }
  public static seq_predict($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
    return  t.static_values[26] as string;
  }
  public static seq_learn($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
    return  t.static_values[27] as string;
  }
  public static seq_encode($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
    return  t.static_values[28] as string;
  }
  public static seq_decode($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[129];
    return  t.static_values[29] as string;
  }
  static create($g: $sdk.GreyCat, inputs: bigint | number, inputs_gradients: boolean, outputs: bigint | number, fixed_batch_size: bigint | number, inputs_sequences: bigint | number, outputs_sequences: bigint | number, tensor_type: $sdk.std.core.TensorType, lossLayer: compute.ComputeLayerLoss | null, optimizer: compute.ComputeOptimizer, seed: bigint | number, randomizeSeed: boolean, placeholders: compute.ComputeLayerCustom | null, preProcessType: compute.ComputeLayer | null, postProcessType: compute.ComputeLayer | null, preProcessObject: any | null, postProcessObject: any | null, layers: Array<compute.ComputeLayer> | null, lastLayer: string | null, lastOutput: string | null): NeuralNetwork {
    return new NeuralNetwork($g.abi.libs_by_name.get(algebralib.name)!.mapped[129], inputs, inputs_gradients, outputs, fixed_batch_size, inputs_sequences, outputs_sequences, tensor_type, lossLayer, optimizer, seed, randomizeSeed, placeholders, preProcessType, postProcessType, preProcessObject, postProcessObject, layers, lastLayer, lastOutput);
  }
}

export class ComputeInitializers extends $sdk.GCEnum {
  static readonly _type = 'nn::ComputeInitializers';

  public static none($g: $sdk.GreyCat): nn.ComputeInitializers {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[130];
    return t.enum_values![t.generated_offsets[0]] as nn.ComputeInitializers;
  }
  public static constant($g: $sdk.GreyCat): nn.ComputeInitializers {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[130];
    return t.enum_values![t.generated_offsets[1]] as nn.ComputeInitializers;
  }
  public static sigmoid_uniform($g: $sdk.GreyCat): nn.ComputeInitializers {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[130];
    return t.enum_values![t.generated_offsets[2]] as nn.ComputeInitializers;
  }
  public static lecun_uniform($g: $sdk.GreyCat): nn.ComputeInitializers {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[130];
    return t.enum_values![t.generated_offsets[3]] as nn.ComputeInitializers;
  }
  public static xavier($g: $sdk.GreyCat): nn.ComputeInitializers {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[130];
    return t.enum_values![t.generated_offsets[4]] as nn.ComputeInitializers;
  }
  public static xavier_uniform($g: $sdk.GreyCat): nn.ComputeInitializers {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[130];
    return t.enum_values![t.generated_offsets[5]] as nn.ComputeInitializers;
  }
  public static relu($g: $sdk.GreyCat): nn.ComputeInitializers {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[130];
    return t.enum_values![t.generated_offsets[6]] as nn.ComputeInitializers;
  }
  public static relu_uniform($g: $sdk.GreyCat): nn.ComputeInitializers {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[130];
    return t.enum_values![t.generated_offsets[7]] as nn.ComputeInitializers;
  }
  public static normal($g: $sdk.GreyCat): nn.ComputeInitializers {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[130];
    return t.enum_values![t.generated_offsets[8]] as nn.ComputeInitializers;
  }
  public static normal_in($g: $sdk.GreyCat): nn.ComputeInitializers {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[130];
    return t.enum_values![t.generated_offsets[9]] as nn.ComputeInitializers;
  }
  public static normal_out($g: $sdk.GreyCat): nn.ComputeInitializers {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[130];
    return t.enum_values![t.generated_offsets[10]] as nn.ComputeInitializers;
  }
  public static normal_avg($g: $sdk.GreyCat): nn.ComputeInitializers {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[130];
    return t.enum_values![t.generated_offsets[11]] as nn.ComputeInitializers;
  }
  public static uniform($g: $sdk.GreyCat): nn.ComputeInitializers {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[130];
    return t.enum_values![t.generated_offsets[12]] as nn.ComputeInitializers;
  }
  public static uniform_in($g: $sdk.GreyCat): nn.ComputeInitializers {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[130];
    return t.enum_values![t.generated_offsets[13]] as nn.ComputeInitializers;
  }
  public static uniform_out($g: $sdk.GreyCat): nn.ComputeInitializers {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[130];
    return t.enum_values![t.generated_offsets[14]] as nn.ComputeInitializers;
  }
  public static uniform_avg($g: $sdk.GreyCat): nn.ComputeInitializers {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[130];
    return t.enum_values![t.generated_offsets[15]] as nn.ComputeInitializers;
  }
  public static identity($g: $sdk.GreyCat): nn.ComputeInitializers {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[130];
    return t.enum_values![t.generated_offsets[16]] as nn.ComputeInitializers;
  }
  public static pytorch($g: $sdk.GreyCat): nn.ComputeInitializers {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[130];
    return t.enum_values![t.generated_offsets[17]] as nn.ComputeInitializers;
  }
}

export class InitializerConfig extends $sdk.GCObject {
  static readonly _type = 'nn::InitializerConfig';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get weight_initializer(): compute.ComputeInitializer | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set weight_initializer(v: compute.ComputeInitializer | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get weight_regularizer(): compute.ComputeRegularizer | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set weight_regularizer(v: compute.ComputeRegularizer | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get bias_initializer(): compute.ComputeInitializer | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set bias_initializer(v: compute.ComputeInitializer | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get bias_regularizer(): compute.ComputeRegularizer | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set bias_regularizer(v: compute.ComputeRegularizer | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  static create($g: $sdk.GreyCat, weight_initializer: compute.ComputeInitializer | null, weight_regularizer: compute.ComputeRegularizer | null, bias_initializer: compute.ComputeInitializer | null, bias_regularizer: compute.ComputeRegularizer | null): InitializerConfig {
    return new InitializerConfig($g.abi.libs_by_name.get(algebralib.name)!.mapped[131], weight_initializer, weight_regularizer, bias_initializer, bias_regularizer);
  }
}

export class ComputeOptimizers extends $sdk.GCEnum {
  static readonly _type = 'nn::ComputeOptimizers';

  public static ada_delta($g: $sdk.GreyCat): nn.ComputeOptimizers {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[132];
    return t.enum_values![t.generated_offsets[0]] as nn.ComputeOptimizers;
  }
  public static ada_grad($g: $sdk.GreyCat): nn.ComputeOptimizers {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[132];
    return t.enum_values![t.generated_offsets[1]] as nn.ComputeOptimizers;
  }
  public static adam($g: $sdk.GreyCat): nn.ComputeOptimizers {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[132];
    return t.enum_values![t.generated_offsets[2]] as nn.ComputeOptimizers;
  }
  public static ada_max($g: $sdk.GreyCat): nn.ComputeOptimizers {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[132];
    return t.enum_values![t.generated_offsets[3]] as nn.ComputeOptimizers;
  }
  public static nadam($g: $sdk.GreyCat): nn.ComputeOptimizers {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[132];
    return t.enum_values![t.generated_offsets[4]] as nn.ComputeOptimizers;
  }
  public static ftrl($g: $sdk.GreyCat): nn.ComputeOptimizers {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[132];
    return t.enum_values![t.generated_offsets[5]] as nn.ComputeOptimizers;
  }
  public static sgd($g: $sdk.GreyCat): nn.ComputeOptimizers {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[132];
    return t.enum_values![t.generated_offsets[6]] as nn.ComputeOptimizers;
  }
  public static rms_prop($g: $sdk.GreyCat): nn.ComputeOptimizers {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[132];
    return t.enum_values![t.generated_offsets[7]] as nn.ComputeOptimizers;
  }
  public static momentum($g: $sdk.GreyCat): nn.ComputeOptimizers {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[132];
    return t.enum_values![t.generated_offsets[8]] as nn.ComputeOptimizers;
  }
  public static nesterov($g: $sdk.GreyCat): nn.ComputeOptimizers {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[132];
    return t.enum_values![t.generated_offsets[9]] as nn.ComputeOptimizers;
  }
}

export class ComputeLayerTypes extends $sdk.GCEnum {
  static readonly _type = 'nn::ComputeLayerTypes';

  public static linear($g: $sdk.GreyCat): nn.ComputeLayerTypes {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[133];
    return t.enum_values![t.generated_offsets[0]] as nn.ComputeLayerTypes;
  }
  public static dense($g: $sdk.GreyCat): nn.ComputeLayerTypes {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[133];
    return t.enum_values![t.generated_offsets[1]] as nn.ComputeLayerTypes;
  }
  public static activation($g: $sdk.GreyCat): nn.ComputeLayerTypes {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[133];
    return t.enum_values![t.generated_offsets[2]] as nn.ComputeLayerTypes;
  }
  public static lstm($g: $sdk.GreyCat): nn.ComputeLayerTypes {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[133];
    return t.enum_values![t.generated_offsets[3]] as nn.ComputeLayerTypes;
  }
  public static loss($g: $sdk.GreyCat): nn.ComputeLayerTypes {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[133];
    return t.enum_values![t.generated_offsets[4]] as nn.ComputeLayerTypes;
  }
  public static filter($g: $sdk.GreyCat): nn.ComputeLayerTypes {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[133];
    return t.enum_values![t.generated_offsets[5]] as nn.ComputeLayerTypes;
  }
}

export class PostProcessType extends $sdk.GCEnum {
  static readonly _type = 'nn::PostProcessType';

  public static none($g: $sdk.GreyCat): nn.PostProcessType {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[134];
    return t.enum_values![t.generated_offsets[0]] as nn.PostProcessType;
  }
  public static min_max_scaling($g: $sdk.GreyCat): nn.PostProcessType {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[134];
    return t.enum_values![t.generated_offsets[1]] as nn.PostProcessType;
  }
  public static standard_scaling($g: $sdk.GreyCat): nn.PostProcessType {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[134];
    return t.enum_values![t.generated_offsets[2]] as nn.PostProcessType;
  }
}

export class ComputeActivations extends $sdk.GCEnum {
  static readonly _type = 'nn::ComputeActivations';

  public static relu($g: $sdk.GreyCat): nn.ComputeActivations {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[135];
    return t.enum_values![t.generated_offsets[0]] as nn.ComputeActivations;
  }
  public static leaky_relu($g: $sdk.GreyCat): nn.ComputeActivations {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[135];
    return t.enum_values![t.generated_offsets[1]] as nn.ComputeActivations;
  }
  public static sigmoid($g: $sdk.GreyCat): nn.ComputeActivations {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[135];
    return t.enum_values![t.generated_offsets[2]] as nn.ComputeActivations;
  }
  public static hard_sigmoid($g: $sdk.GreyCat): nn.ComputeActivations {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[135];
    return t.enum_values![t.generated_offsets[3]] as nn.ComputeActivations;
  }
  public static exp($g: $sdk.GreyCat): nn.ComputeActivations {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[135];
    return t.enum_values![t.generated_offsets[4]] as nn.ComputeActivations;
  }
  public static soft_max($g: $sdk.GreyCat): nn.ComputeActivations {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[135];
    return t.enum_values![t.generated_offsets[5]] as nn.ComputeActivations;
  }
  public static soft_plus($g: $sdk.GreyCat): nn.ComputeActivations {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[135];
    return t.enum_values![t.generated_offsets[6]] as nn.ComputeActivations;
  }
  public static soft_sign($g: $sdk.GreyCat): nn.ComputeActivations {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[135];
    return t.enum_values![t.generated_offsets[7]] as nn.ComputeActivations;
  }
  public static tanh($g: $sdk.GreyCat): nn.ComputeActivations {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[135];
    return t.enum_values![t.generated_offsets[8]] as nn.ComputeActivations;
  }
  public static selu($g: $sdk.GreyCat): nn.ComputeActivations {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[135];
    return t.enum_values![t.generated_offsets[9]] as nn.ComputeActivations;
  }
  public static elu($g: $sdk.GreyCat): nn.ComputeActivations {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[135];
    return t.enum_values![t.generated_offsets[10]] as nn.ComputeActivations;
  }
  public static celu($g: $sdk.GreyCat): nn.ComputeActivations {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[135];
    return t.enum_values![t.generated_offsets[11]] as nn.ComputeActivations;
  }
}

export class RegressionNetwork extends $sdk.GCObject {
  static readonly _type = 'nn::RegressionNetwork';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get inputs(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set inputs(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get inputs_gradients(): boolean {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set inputs_gradients(v: boolean) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get outputs(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set outputs(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get fixed_batch_size(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set fixed_batch_size(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get inputs_sequences(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set inputs_sequences(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get outputs_sequences(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set outputs_sequences(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public get tensor_type(): $sdk.std.core.TensorType {
    return this.$attrs[this.$type.generated_offsets[6]];
  }
  public set tensor_type(v: $sdk.std.core.TensorType) {
    this.$attrs[this.$type.generated_offsets[6]] = v;
  }
  public get lossLayer(): compute.ComputeLayerLoss | null {
    return this.$attrs[this.$type.generated_offsets[7]];
  }
  public set lossLayer(v: compute.ComputeLayerLoss | null) {
    this.$attrs[this.$type.generated_offsets[7]] = v;
  }
  public get optimizer(): compute.ComputeOptimizer {
    return this.$attrs[this.$type.generated_offsets[8]];
  }
  public set optimizer(v: compute.ComputeOptimizer) {
    this.$attrs[this.$type.generated_offsets[8]] = v;
  }
  public get seed(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[9]];
  }
  public set seed(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[9]] = v;
  }
  public get randomizeSeed(): boolean {
    return this.$attrs[this.$type.generated_offsets[10]];
  }
  public set randomizeSeed(v: boolean) {
    this.$attrs[this.$type.generated_offsets[10]] = v;
  }
  public get placeholders(): compute.ComputeLayerCustom | null {
    return this.$attrs[this.$type.generated_offsets[11]];
  }
  public set placeholders(v: compute.ComputeLayerCustom | null) {
    this.$attrs[this.$type.generated_offsets[11]] = v;
  }
  public get preProcessType(): compute.ComputeLayer | null {
    return this.$attrs[this.$type.generated_offsets[12]];
  }
  public set preProcessType(v: compute.ComputeLayer | null) {
    this.$attrs[this.$type.generated_offsets[12]] = v;
  }
  public get postProcessType(): compute.ComputeLayer | null {
    return this.$attrs[this.$type.generated_offsets[13]];
  }
  public set postProcessType(v: compute.ComputeLayer | null) {
    this.$attrs[this.$type.generated_offsets[13]] = v;
  }
  public get preProcessObject(): any | null {
    return this.$attrs[this.$type.generated_offsets[14]];
  }
  public set preProcessObject(v: any | null) {
    this.$attrs[this.$type.generated_offsets[14]] = v;
  }
  public get postProcessObject(): any | null {
    return this.$attrs[this.$type.generated_offsets[15]];
  }
  public set postProcessObject(v: any | null) {
    this.$attrs[this.$type.generated_offsets[15]] = v;
  }
  public get layers(): Array<compute.ComputeLayer> | null {
    return this.$attrs[this.$type.generated_offsets[16]];
  }
  public set layers(v: Array<compute.ComputeLayer> | null) {
    this.$attrs[this.$type.generated_offsets[16]] = v;
  }
  public get lastLayer(): string | null {
    return this.$attrs[this.$type.generated_offsets[17]];
  }
  public set lastLayer(v: string | null) {
    this.$attrs[this.$type.generated_offsets[17]] = v;
  }
  public get lastOutput(): string | null {
    return this.$attrs[this.$type.generated_offsets[18]];
  }
  public set lastOutput(v: string | null) {
    this.$attrs[this.$type.generated_offsets[18]] = v;
  }
  static create($g: $sdk.GreyCat, inputs: bigint | number, inputs_gradients: boolean, outputs: bigint | number, fixed_batch_size: bigint | number, inputs_sequences: bigint | number, outputs_sequences: bigint | number, tensor_type: $sdk.std.core.TensorType, lossLayer: compute.ComputeLayerLoss | null, optimizer: compute.ComputeOptimizer, seed: bigint | number, randomizeSeed: boolean, placeholders: compute.ComputeLayerCustom | null, preProcessType: compute.ComputeLayer | null, postProcessType: compute.ComputeLayer | null, preProcessObject: any | null, postProcessObject: any | null, layers: Array<compute.ComputeLayer> | null, lastLayer: string | null, lastOutput: string | null): RegressionNetwork {
    return new RegressionNetwork($g.abi.libs_by_name.get(algebralib.name)!.mapped[136], inputs, inputs_gradients, outputs, fixed_batch_size, inputs_sequences, outputs_sequences, tensor_type, lossLayer, optimizer, seed, randomizeSeed, placeholders, preProcessType, postProcessType, preProcessObject, postProcessObject, layers, lastLayer, lastOutput);
  }
}

export class BindingsResult extends $sdk.GCObject {
  static readonly _type = 'nn::BindingsResult';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get previousLayerName(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set previousLayerName(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get previousLayerOutput(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set previousLayerOutput(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get expectedLayerName(): string {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set expectedLayerName(v: string) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get expectedLayerOutput(): string {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set expectedLayerOutput(v: string) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get postLayer(): compute.ComputeLayer | null {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set postLayer(v: compute.ComputeLayer | null) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  static create($g: $sdk.GreyCat, previousLayerName: string, previousLayerOutput: string, expectedLayerName: string, expectedLayerOutput: string, postLayer: compute.ComputeLayer | null): BindingsResult {
    return new BindingsResult($g.abi.libs_by_name.get(algebralib.name)!.mapped[137], previousLayerName, previousLayerOutput, expectedLayerName, expectedLayerOutput, postLayer);
  }
}

export class AutoEncoderNetwork extends $sdk.GCObject {
  static readonly _type = 'nn::AutoEncoderNetwork';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get inputs(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set inputs(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get inputs_gradients(): boolean {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set inputs_gradients(v: boolean) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get outputs(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set outputs(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get fixed_batch_size(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set fixed_batch_size(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get inputs_sequences(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set inputs_sequences(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get outputs_sequences(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set outputs_sequences(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public get tensor_type(): $sdk.std.core.TensorType {
    return this.$attrs[this.$type.generated_offsets[6]];
  }
  public set tensor_type(v: $sdk.std.core.TensorType) {
    this.$attrs[this.$type.generated_offsets[6]] = v;
  }
  public get lossLayer(): compute.ComputeLayerLoss | null {
    return this.$attrs[this.$type.generated_offsets[7]];
  }
  public set lossLayer(v: compute.ComputeLayerLoss | null) {
    this.$attrs[this.$type.generated_offsets[7]] = v;
  }
  public get optimizer(): compute.ComputeOptimizer {
    return this.$attrs[this.$type.generated_offsets[8]];
  }
  public set optimizer(v: compute.ComputeOptimizer) {
    this.$attrs[this.$type.generated_offsets[8]] = v;
  }
  public get seed(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[9]];
  }
  public set seed(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[9]] = v;
  }
  public get randomizeSeed(): boolean {
    return this.$attrs[this.$type.generated_offsets[10]];
  }
  public set randomizeSeed(v: boolean) {
    this.$attrs[this.$type.generated_offsets[10]] = v;
  }
  public get placeholders(): compute.ComputeLayerCustom | null {
    return this.$attrs[this.$type.generated_offsets[11]];
  }
  public set placeholders(v: compute.ComputeLayerCustom | null) {
    this.$attrs[this.$type.generated_offsets[11]] = v;
  }
  public get preProcessType(): compute.ComputeLayer | null {
    return this.$attrs[this.$type.generated_offsets[12]];
  }
  public set preProcessType(v: compute.ComputeLayer | null) {
    this.$attrs[this.$type.generated_offsets[12]] = v;
  }
  public get postProcessType(): compute.ComputeLayer | null {
    return this.$attrs[this.$type.generated_offsets[13]];
  }
  public set postProcessType(v: compute.ComputeLayer | null) {
    this.$attrs[this.$type.generated_offsets[13]] = v;
  }
  public get preProcessObject(): any | null {
    return this.$attrs[this.$type.generated_offsets[14]];
  }
  public set preProcessObject(v: any | null) {
    this.$attrs[this.$type.generated_offsets[14]] = v;
  }
  public get postProcessObject(): any | null {
    return this.$attrs[this.$type.generated_offsets[15]];
  }
  public set postProcessObject(v: any | null) {
    this.$attrs[this.$type.generated_offsets[15]] = v;
  }
  public get layers(): Array<compute.ComputeLayer> | null {
    return this.$attrs[this.$type.generated_offsets[16]];
  }
  public set layers(v: Array<compute.ComputeLayer> | null) {
    this.$attrs[this.$type.generated_offsets[16]] = v;
  }
  public get lastLayer(): string | null {
    return this.$attrs[this.$type.generated_offsets[17]];
  }
  public set lastLayer(v: string | null) {
    this.$attrs[this.$type.generated_offsets[17]] = v;
  }
  public get lastOutput(): string | null {
    return this.$attrs[this.$type.generated_offsets[18]];
  }
  public set lastOutput(v: string | null) {
    this.$attrs[this.$type.generated_offsets[18]] = v;
  }
  public get encoder_layer_idx(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[19]];
  }
  public set encoder_layer_idx(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[19]] = v;
  }
  public get encoder_layer_name(): string | null {
    return this.$attrs[this.$type.generated_offsets[20]];
  }
  public set encoder_layer_name(v: string | null) {
    this.$attrs[this.$type.generated_offsets[20]] = v;
  }
  public get encoder_layer_var(): string | null {
    return this.$attrs[this.$type.generated_offsets[21]];
  }
  public set encoder_layer_var(v: string | null) {
    this.$attrs[this.$type.generated_offsets[21]] = v;
  }
  static create($g: $sdk.GreyCat, inputs: bigint | number, inputs_gradients: boolean, outputs: bigint | number, fixed_batch_size: bigint | number, inputs_sequences: bigint | number, outputs_sequences: bigint | number, tensor_type: $sdk.std.core.TensorType, lossLayer: compute.ComputeLayerLoss | null, optimizer: compute.ComputeOptimizer, seed: bigint | number, randomizeSeed: boolean, placeholders: compute.ComputeLayerCustom | null, preProcessType: compute.ComputeLayer | null, postProcessType: compute.ComputeLayer | null, preProcessObject: any | null, postProcessObject: any | null, layers: Array<compute.ComputeLayer> | null, lastLayer: string | null, lastOutput: string | null, encoder_layer_idx: bigint | number, encoder_layer_name: string | null, encoder_layer_var: string | null): AutoEncoderNetwork {
    return new AutoEncoderNetwork($g.abi.libs_by_name.get(algebralib.name)!.mapped[138], inputs, inputs_gradients, outputs, fixed_batch_size, inputs_sequences, outputs_sequences, tensor_type, lossLayer, optimizer, seed, randomizeSeed, placeholders, preProcessType, postProcessType, preProcessObject, postProcessObject, layers, lastLayer, lastOutput, encoder_layer_idx, encoder_layer_name, encoder_layer_var);
  }
}

export class PreProcessType extends $sdk.GCEnum {
  static readonly _type = 'nn::PreProcessType';

  public static none($g: $sdk.GreyCat): nn.PreProcessType {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[139];
    return t.enum_values![t.generated_offsets[0]] as nn.PreProcessType;
  }
  public static min_max_scaling($g: $sdk.GreyCat): nn.PreProcessType {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[139];
    return t.enum_values![t.generated_offsets[1]] as nn.PreProcessType;
  }
  public static standard_scaling($g: $sdk.GreyCat): nn.PreProcessType {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[139];
    return t.enum_values![t.generated_offsets[2]] as nn.PreProcessType;
  }
  public static pca_scaling($g: $sdk.GreyCat): nn.PreProcessType {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[139];
    return t.enum_values![t.generated_offsets[3]] as nn.PreProcessType;
  }
}

export class ClassificationNetwork extends $sdk.GCObject {
  static readonly _type = 'nn::ClassificationNetwork';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get inputs(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set inputs(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get inputs_gradients(): boolean {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set inputs_gradients(v: boolean) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get outputs(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set outputs(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get fixed_batch_size(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set fixed_batch_size(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get inputs_sequences(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set inputs_sequences(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get outputs_sequences(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set outputs_sequences(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public get tensor_type(): $sdk.std.core.TensorType {
    return this.$attrs[this.$type.generated_offsets[6]];
  }
  public set tensor_type(v: $sdk.std.core.TensorType) {
    this.$attrs[this.$type.generated_offsets[6]] = v;
  }
  public get lossLayer(): compute.ComputeLayerLoss | null {
    return this.$attrs[this.$type.generated_offsets[7]];
  }
  public set lossLayer(v: compute.ComputeLayerLoss | null) {
    this.$attrs[this.$type.generated_offsets[7]] = v;
  }
  public get optimizer(): compute.ComputeOptimizer {
    return this.$attrs[this.$type.generated_offsets[8]];
  }
  public set optimizer(v: compute.ComputeOptimizer) {
    this.$attrs[this.$type.generated_offsets[8]] = v;
  }
  public get seed(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[9]];
  }
  public set seed(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[9]] = v;
  }
  public get randomizeSeed(): boolean {
    return this.$attrs[this.$type.generated_offsets[10]];
  }
  public set randomizeSeed(v: boolean) {
    this.$attrs[this.$type.generated_offsets[10]] = v;
  }
  public get placeholders(): compute.ComputeLayerCustom | null {
    return this.$attrs[this.$type.generated_offsets[11]];
  }
  public set placeholders(v: compute.ComputeLayerCustom | null) {
    this.$attrs[this.$type.generated_offsets[11]] = v;
  }
  public get preProcessType(): compute.ComputeLayer | null {
    return this.$attrs[this.$type.generated_offsets[12]];
  }
  public set preProcessType(v: compute.ComputeLayer | null) {
    this.$attrs[this.$type.generated_offsets[12]] = v;
  }
  public get postProcessType(): compute.ComputeLayer | null {
    return this.$attrs[this.$type.generated_offsets[13]];
  }
  public set postProcessType(v: compute.ComputeLayer | null) {
    this.$attrs[this.$type.generated_offsets[13]] = v;
  }
  public get preProcessObject(): any | null {
    return this.$attrs[this.$type.generated_offsets[14]];
  }
  public set preProcessObject(v: any | null) {
    this.$attrs[this.$type.generated_offsets[14]] = v;
  }
  public get postProcessObject(): any | null {
    return this.$attrs[this.$type.generated_offsets[15]];
  }
  public set postProcessObject(v: any | null) {
    this.$attrs[this.$type.generated_offsets[15]] = v;
  }
  public get layers(): Array<compute.ComputeLayer> | null {
    return this.$attrs[this.$type.generated_offsets[16]];
  }
  public set layers(v: Array<compute.ComputeLayer> | null) {
    this.$attrs[this.$type.generated_offsets[16]] = v;
  }
  public get lastLayer(): string | null {
    return this.$attrs[this.$type.generated_offsets[17]];
  }
  public set lastLayer(v: string | null) {
    this.$attrs[this.$type.generated_offsets[17]] = v;
  }
  public get lastOutput(): string | null {
    return this.$attrs[this.$type.generated_offsets[18]];
  }
  public set lastOutput(v: string | null) {
    this.$attrs[this.$type.generated_offsets[18]] = v;
  }
  public get calculate_probabilities(): boolean {
    return this.$attrs[this.$type.generated_offsets[19]];
  }
  public set calculate_probabilities(v: boolean) {
    this.$attrs[this.$type.generated_offsets[19]] = v;
  }
  public get has_class_weights(): boolean {
    return this.$attrs[this.$type.generated_offsets[20]];
  }
  public set has_class_weights(v: boolean) {
    this.$attrs[this.$type.generated_offsets[20]] = v;
  }
  public get from_logits(): boolean {
    return this.$attrs[this.$type.generated_offsets[21]];
  }
  public set from_logits(v: boolean) {
    this.$attrs[this.$type.generated_offsets[21]] = v;
  }
  static create($g: $sdk.GreyCat, inputs: bigint | number, inputs_gradients: boolean, outputs: bigint | number, fixed_batch_size: bigint | number, inputs_sequences: bigint | number, outputs_sequences: bigint | number, tensor_type: $sdk.std.core.TensorType, lossLayer: compute.ComputeLayerLoss | null, optimizer: compute.ComputeOptimizer, seed: bigint | number, randomizeSeed: boolean, placeholders: compute.ComputeLayerCustom | null, preProcessType: compute.ComputeLayer | null, postProcessType: compute.ComputeLayer | null, preProcessObject: any | null, postProcessObject: any | null, layers: Array<compute.ComputeLayer> | null, lastLayer: string | null, lastOutput: string | null, calculate_probabilities: boolean, has_class_weights: boolean, from_logits: boolean): ClassificationNetwork {
    return new ClassificationNetwork($g.abi.libs_by_name.get(algebralib.name)!.mapped[140], inputs, inputs_gradients, outputs, fixed_batch_size, inputs_sequences, outputs_sequences, tensor_type, lossLayer, optimizer, seed, randomizeSeed, placeholders, preProcessType, postProcessType, preProcessObject, postProcessObject, layers, lastLayer, lastOutput, calculate_probabilities, has_class_weights, from_logits);
  }
}

}

export namespace kmeans {
export class Kmeans extends $sdk.GCObject {
  static readonly _type = 'kmeans::Kmeans';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public static var_input($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
    return  t.static_values[0] as string;
  }
  public static var_assignement($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
    return  t.static_values[1] as string;
  }
  public static var_min_distance($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
    return  t.static_values[2] as string;
  }
  public static varo_centroids($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
    return  t.static_values[3] as string;
  }
  public static var_distance($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
    return  t.static_values[4] as string;
  }
  public static var_sum_centroids($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
    return  t.static_values[5] as string;
  }
  public static var_sum_min_distance($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
    return  t.static_values[6] as string;
  }
  public static var_count_centroids($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
    return  t.static_values[7] as string;
  }
  public static var_centroid_distances($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
    return  t.static_values[8] as string;
  }
  public static var_sum_cluster_distances($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
    return  t.static_values[9] as string;
  }
  public static var_avg_cluster_distances($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
    return  t.static_values[10] as string;
  }
  public static var_count_cluster_distances($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
    return  t.static_values[11] as string;
  }
  public static layer_placeholders($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
    return  t.static_values[12] as string;
  }
  public static layer_forward($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
    return  t.static_values[13] as string;
  }
  public static layer_backward($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
    return  t.static_values[14] as string;
  }
  public static layer_init_round($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
    return  t.static_values[15] as string;
  }
  public static layer_end_round($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
    return  t.static_values[16] as string;
  }
  public static layer_stats($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
    return  t.static_values[17] as string;
  }
  public static seq_init_round($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
    return  t.static_values[18] as string;
  }
  public static seq_forward($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
    return  t.static_values[19] as string;
  }
  public static seq_backward($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
    return  t.static_values[20] as string;
  }
  public static seq_end_round($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
    return  t.static_values[21] as string;
  }
  public static seq_stats($g: $sdk.GreyCat): string {
    const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
    return  t.static_values[22] as string;
  }
  static create($g: $sdk.GreyCat): Kmeans {
    return new Kmeans($g.abi.libs_by_name.get(algebralib.name)!.mapped[141]);
  }
}

}

export namespace ml {
export class Polynomial extends algebra_n.ml.Polynomial {}

export class PCA extends algebra_n.ml.PCA {}

export class HeatMapProfile extends $sdk.GCObject {
  static readonly _type = 'ml::HeatMapProfile';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get counts(): $sdk.std.core.Table<bigint | number> {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set counts(v: $sdk.std.core.Table<bigint | number>) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get x_labels(): Array<string> {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set x_labels(v: Array<string>) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get y_labels(): Array<string> {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set y_labels(v: Array<string>) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get counts_max(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set counts_max(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get counts_sum(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set counts_sum(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  static create($g: $sdk.GreyCat, counts: $sdk.std.core.Table<bigint | number>, x_labels: Array<string>, y_labels: Array<string>, counts_max: bigint | number, counts_sum: bigint | number): HeatMapProfile {
    return new HeatMapProfile($g.abi.libs_by_name.get(algebralib.name)!.mapped[144], counts, x_labels, y_labels, counts_max, counts_sum);
  }
}

export class TimeSeriesDecomposition extends $sdk.GCObject {
  static readonly _type = 'ml::TimeSeriesDecomposition';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  static create($g: $sdk.GreyCat): TimeSeriesDecomposition {
    return new TimeSeriesDecomposition($g.abi.libs_by_name.get(algebralib.name)!.mapped[145]);
  }
}

export class Solver extends $sdk.GCObject {
  static readonly _type = 'ml::Solver';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  static create($g: $sdk.GreyCat): Solver {
    return new Solver($g.abi.libs_by_name.get(algebralib.name)!.mapped[146]);
  }
}

export class GaussianND extends algebra_n.ml.GaussianND {}

}

export namespace powerflow {
export class PowerLineResult extends $sdk.GCObject {
  static readonly _type = 'powerflow::PowerLineResult';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get p_from_mw(): number {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set p_from_mw(v: number) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get q_from_mvar(): number {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set q_from_mvar(v: number) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get p_to_mw(): number {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set p_to_mw(v: number) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get q_to_mvar(): number {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set q_to_mvar(v: number) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get pl_mw(): number {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set pl_mw(v: number) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get ql_mvar(): number {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set ql_mvar(v: number) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public get i_from_ka(): number {
    return this.$attrs[this.$type.generated_offsets[6]];
  }
  public set i_from_ka(v: number) {
    this.$attrs[this.$type.generated_offsets[6]] = v;
  }
  public get i_to_ka(): number {
    return this.$attrs[this.$type.generated_offsets[7]];
  }
  public set i_to_ka(v: number) {
    this.$attrs[this.$type.generated_offsets[7]] = v;
  }
  public get i_ka(): number {
    return this.$attrs[this.$type.generated_offsets[8]];
  }
  public set i_ka(v: number) {
    this.$attrs[this.$type.generated_offsets[8]] = v;
  }
  public get vm_from_pu(): number {
    return this.$attrs[this.$type.generated_offsets[9]];
  }
  public set vm_from_pu(v: number) {
    this.$attrs[this.$type.generated_offsets[9]] = v;
  }
  public get vm_to_pu(): number {
    return this.$attrs[this.$type.generated_offsets[10]];
  }
  public set vm_to_pu(v: number) {
    this.$attrs[this.$type.generated_offsets[10]] = v;
  }
  public get va_from_radians(): number {
    return this.$attrs[this.$type.generated_offsets[11]];
  }
  public set va_from_radians(v: number) {
    this.$attrs[this.$type.generated_offsets[11]] = v;
  }
  public get va_to_radians(): number {
    return this.$attrs[this.$type.generated_offsets[12]];
  }
  public set va_to_radians(v: number) {
    this.$attrs[this.$type.generated_offsets[12]] = v;
  }
  public get loading_percent(): number {
    return this.$attrs[this.$type.generated_offsets[13]];
  }
  public set loading_percent(v: number) {
    this.$attrs[this.$type.generated_offsets[13]] = v;
  }
  static create($g: $sdk.GreyCat, p_from_mw: number, q_from_mvar: number, p_to_mw: number, q_to_mvar: number, pl_mw: number, ql_mvar: number, i_from_ka: number, i_to_ka: number, i_ka: number, vm_from_pu: number, vm_to_pu: number, va_from_radians: number, va_to_radians: number, loading_percent: number): PowerLineResult {
    return new PowerLineResult($g.abi.libs_by_name.get(algebralib.name)!.mapped[148], p_from_mw, q_from_mvar, p_to_mw, q_to_mvar, pl_mw, ql_mvar, i_from_ka, i_to_ka, i_ka, vm_from_pu, vm_to_pu, va_from_radians, va_to_radians, loading_percent);
  }
}

export class PowerBusResult extends $sdk.GCObject {
  static readonly _type = 'powerflow::PowerBusResult';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get abs(): number {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set abs(v: number) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get angle_radians(): number {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set angle_radians(v: number) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get voltage(): number {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set voltage(v: number) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get voltage_img(): number {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set voltage_img(v: number) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get current(): number {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set current(v: number) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get current_img(): number {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set current_img(v: number) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  static create($g: $sdk.GreyCat, abs: number, angle_radians: number, voltage: number, voltage_img: number, current: number, current_img: number): PowerBusResult {
    return new PowerBusResult($g.abi.libs_by_name.get(algebralib.name)!.mapped[149], abs, angle_radians, voltage, voltage_img, current, current_img);
  }
}

}

export const algebralib: $sdk.Library = {
  name: 'algebra',
  mapped: [],
  configure(loaders, factories) {
    factories.set(compute.ComputeOptimizerNesterov._type, compute.ComputeOptimizerNesterov);
    factories.set(compute.ComputeOperationRaiseToPower._type, compute.ComputeOperationRaiseToPower);
    factories.set(compute.ComputeOperationElu._type, compute.ComputeOperationElu);
    factories.set(compute.ComputeOperationTanh._type, compute.ComputeOperationTanh);
    factories.set(compute.ComputeLayerCall._type, compute.ComputeLayerCall);
    factories.set(compute.ComputeOperationEuclidean._type, compute.ComputeOperationEuclidean);
    factories.set(compute.ComputeOperationAvg._type, compute.ComputeOperationAvg);
    factories.set(compute.ComputeOperationMul._type, compute.ComputeOperationMul);
    factories.set(compute.ComputeOperationCelu._type, compute.ComputeOperationCelu);
    factories.set(compute.ComputeLayerActivation._type, compute.ComputeLayerActivation);
    factories.set(compute.ComputeOperationSinh._type, compute.ComputeOperationSinh);
    factories.set(compute.ComputeVar._type, compute.ComputeVar);
    factories.set(compute.ComputeLayerLinear._type, compute.ComputeLayerLinear);
    factories.set(compute.ComputeOperationSoftmax._type, compute.ComputeOperationSoftmax);
    factories.set(compute.ComputeOptimizer._type, compute.ComputeOptimizer);
    factories.set(compute.ComputeLayerLossClassification._type, compute.ComputeLayerLossClassification);
    factories.set(compute.ComputeInitializerLSTM._type, compute.ComputeInitializerLSTM);
    factories.set(compute.ComputeLayerClassification._type, compute.ComputeLayerClassification);
    factories.set(compute.ComputeOperationSign._type, compute.ComputeOperationSign);
    factories.set(compute.ComputeOperationAsin._type, compute.ComputeOperationAsin);
    factories.set(compute.ComputeInitializerXavierUniform._type, compute.ComputeInitializerXavierUniform);
    factories.set(compute.ComputeOptimizerNadam._type, compute.ComputeOptimizerNadam);
    factories.set(compute.ComputeActivationExp._type, compute.ComputeActivationExp);
    factories.set(compute.ComputeInitializerPytorch._type, compute.ComputeInitializerPytorch);
    factories.set(compute.ComputeOperationSub._type, compute.ComputeOperationSub);
    factories.set(compute.ComputeState._type, compute.ComputeState);
    loaders.set(compute.ComputeState._type, algebra_n.compute.ComputeState.load);
    factories.set(compute.ComputeOperationAcos._type, compute.ComputeOperationAcos);
    factories.set(compute.ComputeOperationSin._type, compute.ComputeOperationSin);
    factories.set(compute.ComputeInitializerUniformAvg._type, compute.ComputeInitializerUniformAvg);
    factories.set(compute.ComputeOperationArg._type, compute.ComputeOperationArg);
    factories.set(compute.ComputeVarConst._type, compute.ComputeVarConst);
    factories.set(compute.ComputeEngine._type, compute.ComputeEngine);
    loaders.set(compute.ComputeEngine._type, algebra_n.compute.ComputeEngine.load);
    factories.set(compute.ComputeLayer._type, compute.ComputeLayer);
    factories.set(compute.ComputeOperationSqrt._type, compute.ComputeOperationSqrt);
    factories.set(compute.ComputeRegressionLoss._type, compute.ComputeRegressionLoss);
    factories.set(compute.ComputeOperationExp._type, compute.ComputeOperationExp);
    factories.set(compute.ComputeLayerLoss._type, compute.ComputeLayerLoss);
    factories.set(compute.ComputeOperation2In1Out._type, compute.ComputeOperation2In1Out);
    factories.set(compute.ComputeOperationArgMin._type, compute.ComputeOperationArgMin);
    factories.set(compute.ComputeOperationSumIf._type, compute.ComputeOperationSumIf);
    factories.set(compute.ComputeActivationHardSigmoid._type, compute.ComputeActivationHardSigmoid);
    factories.set(compute.ComputeOperationAsinh._type, compute.ComputeOperationAsinh);
    factories.set(compute.ComputeInitializerNormal._type, compute.ComputeInitializerNormal);
    factories.set(compute.ComputeVariable._type, compute.ComputeVariable);
    factories.set(compute.ComputeOperationRelu._type, compute.ComputeOperationRelu);
    factories.set(compute.ComputeOperationSigmoid._type, compute.ComputeOperationSigmoid);
    factories.set(compute.ComputeLayerMinMaxScaler._type, compute.ComputeLayerMinMaxScaler);
    factories.set(compute.ComputeActivationSoftSign._type, compute.ComputeActivationSoftSign);
    factories.set(compute.ComputeClassificationLoss._type, compute.ComputeClassificationLoss);
    factories.set(compute.ComputeActivation._type, compute.ComputeActivation);
    factories.set(compute.ComputeOperationCos._type, compute.ComputeOperationCos);
    factories.set(compute.ComputeOptimizerAdaDelta._type, compute.ComputeOptimizerAdaDelta);
    factories.set(compute.ComputeInitializerNormalIn._type, compute.ComputeInitializerNormalIn);
    factories.set(compute.ComputeOperationSelu._type, compute.ComputeOperationSelu);
    factories.set(compute.ComputeOperationLeakyRelu._type, compute.ComputeOperationLeakyRelu);
    factories.set(compute.ComputeOperationSoftplus._type, compute.ComputeOperationSoftplus);
    factories.set(compute.ComputeOperationSoftSign._type, compute.ComputeOperationSoftSign);
    factories.set(compute.ComputeInitializerUniformOut._type, compute.ComputeInitializerUniformOut);
    factories.set(compute.ComputeOperationLog._type, compute.ComputeOperationLog);
    factories.set(compute.ComputeActivationSelu._type, compute.ComputeActivationSelu);
    factories.set(compute.ComputeActivationLeakyRelu._type, compute.ComputeActivationLeakyRelu);
    factories.set(compute.ComputeOperationSum._type, compute.ComputeOperationSum);
    factories.set(compute.ComputeOperationFill._type, compute.ComputeOperationFill);
    factories.set(compute.ComputeLayerCustom._type, compute.ComputeLayerCustom);
    factories.set(compute.ComputeActivationSigmoid._type, compute.ComputeActivationSigmoid);
    factories.set(compute.ComputeRegularizer._type, compute.ComputeRegularizer);
    factories.set(compute.ComputeOperationClip._type, compute.ComputeOperationClip);
    factories.set(compute.ComputeOperationPow._type, compute.ComputeOperationPow);
    factories.set(compute.ComputeActivationSoftmax._type, compute.ComputeActivationSoftmax);
    factories.set(compute.ComputeLayerDense._type, compute.ComputeLayerDense);
    factories.set(compute.ComputeInitializerRelu._type, compute.ComputeInitializerRelu);
    factories.set(compute.ComputeInitializerConstant._type, compute.ComputeInitializerConstant);
    factories.set(compute.ComputeInitializerUniform._type, compute.ComputeInitializerUniform);
    factories.set(compute.ComputeOptimizerMomentum._type, compute.ComputeOptimizerMomentum);
    factories.set(compute.ComputeInitializerGlorotUniform._type, compute.ComputeInitializerGlorotUniform);
    factories.set(compute.ComputeOperationMatMul._type, compute.ComputeOperationMatMul);
    factories.set(compute.ComputeCounter._type, compute.ComputeCounter);
    factories.set(compute.ComputeInitializerNormalAvg._type, compute.ComputeInitializerNormalAvg);
    factories.set(compute.ComputeOperation1In1Out._type, compute.ComputeOperation1In1Out);
    factories.set(compute.ComputeOperationArgMax._type, compute.ComputeOperationArgMax);
    factories.set(compute.ComputeActivationElu._type, compute.ComputeActivationElu);
    factories.set(compute.ComputeReduction._type, compute.ComputeReduction);
    factories.set(compute.ComputeOperationAdd._type, compute.ComputeOperationAdd);
    factories.set(compute.ComputeModel._type, compute.ComputeModel);
    factories.set(compute.ComputeActivationRelu._type, compute.ComputeActivationRelu);
    factories.set(compute.ComputeOperationAtan._type, compute.ComputeOperationAtan);
    factories.set(compute.ComputeOptimizerAdam._type, compute.ComputeOptimizerAdam);
    factories.set(compute.ComputeOptimizerFtrl._type, compute.ComputeOptimizerFtrl);
    factories.set(compute.ComputeInitializerIdentity._type, compute.ComputeInitializerIdentity);
    factories.set(compute.ComputeInitializerUniformIn._type, compute.ComputeInitializerUniformIn);
    factories.set(compute.ComputeInitializerSigmoidUniform._type, compute.ComputeInitializerSigmoidUniform);
    factories.set(compute.ComputeActivationSoftplus._type, compute.ComputeActivationSoftplus);
    factories.set(compute.ComputeOperationLeCunTanh._type, compute.ComputeOperationLeCunTanh);
    factories.set(compute.ComputeOperationDiv._type, compute.ComputeOperationDiv);
    factories.set(compute.ComputeInitializerReluUniform._type, compute.ComputeInitializerReluUniform);
    factories.set(compute.ComputeLayerLSTM._type, compute.ComputeLayerLSTM);
    factories.set(compute.ComputeInitializerLeCunUniform._type, compute.ComputeInitializerLeCunUniform);
    factories.set(compute.ComputeActivationTanh._type, compute.ComputeActivationTanh);
    factories.set(compute.ComputeVarInOut._type, compute.ComputeVarInOut);
    factories.set(compute.ComputeLayerFilter._type, compute.ComputeLayerFilter);
    factories.set(compute.ComputeOptimizerRmsProp._type, compute.ComputeOptimizerRmsProp);
    factories.set(compute.ComputeOptimizerSgd._type, compute.ComputeOptimizerSgd);
    factories.set(compute.ComputeBinding._type, compute.ComputeBinding);
    factories.set(compute.ComputeLayerStandardScaler._type, compute.ComputeLayerStandardScaler);
    factories.set(compute.ComputeInitializerNormalOut._type, compute.ComputeInitializerNormalOut);
    factories.set(compute.ComputeInitializerNone._type, compute.ComputeInitializerNone);
    factories.set(compute.ComputeOperationNeg._type, compute.ComputeOperationNeg);
    factories.set(compute.ComputeOperationTan._type, compute.ComputeOperationTan);
    factories.set(compute.ComputeVarProxy._type, compute.ComputeVarProxy);
    factories.set(compute.ComputeOperationCosh._type, compute.ComputeOperationCosh);
    factories.set(compute.ComputeLayerSeq._type, compute.ComputeLayerSeq);
    factories.set(compute.ComputeLayerLossRegression._type, compute.ComputeLayerLossRegression);
    factories.set(compute.ComputeOperationAcosh._type, compute.ComputeOperationAcosh);
    factories.set(compute.ComputeOperationHardSigmoid._type, compute.ComputeOperationHardSigmoid);
    factories.set(compute.ComputeOperationLogSoftmax._type, compute.ComputeOperationLogSoftmax);
    factories.set(compute.ComputeVarOptimize._type, compute.ComputeVarOptimize);
    factories.set(compute.ComputeOperationAddBias._type, compute.ComputeOperationAddBias);
    factories.set(compute.ComputeOperationAbs._type, compute.ComputeOperationAbs);
    factories.set(compute.ComputeOperationScale._type, compute.ComputeOperationScale);
    factories.set(compute.ComputeOptimizerAdaGrad._type, compute.ComputeOptimizerAdaGrad);
    factories.set(compute.ComputeOptimizerAdaMax._type, compute.ComputeOptimizerAdaMax);
    factories.set(compute.ComputeOperationAtanh._type, compute.ComputeOperationAtanh);
    factories.set(compute.ComputeInitializerXavier._type, compute.ComputeInitializerXavier);
    factories.set(compute.ComputeLayerPCAScaler._type, compute.ComputeLayerPCAScaler);
    factories.set(compute.ComputeOperation._type, compute.ComputeOperation);
    factories.set(compute.ComputeActivationCelu._type, compute.ComputeActivationCelu);
    factories.set(compute.ComputeInitializer._type, compute.ComputeInitializer);
    factories.set(compute.ComputeOperationFilter._type, compute.ComputeOperationFilter);
    factories.set(nn_layers_names.NNLayersNames._type, nn_layers_names.NNLayersNames);
    factories.set(nn.NeuralNetwork._type, nn.NeuralNetwork);
    factories.set(nn.ComputeInitializers._type, nn.ComputeInitializers);
    factories.set(nn.InitializerConfig._type, nn.InitializerConfig);
    factories.set(nn.ComputeOptimizers._type, nn.ComputeOptimizers);
    factories.set(nn.ComputeLayerTypes._type, nn.ComputeLayerTypes);
    factories.set(nn.PostProcessType._type, nn.PostProcessType);
    factories.set(nn.ComputeActivations._type, nn.ComputeActivations);
    factories.set(nn.RegressionNetwork._type, nn.RegressionNetwork);
    factories.set(nn.BindingsResult._type, nn.BindingsResult);
    factories.set(nn.AutoEncoderNetwork._type, nn.AutoEncoderNetwork);
    factories.set(nn.PreProcessType._type, nn.PreProcessType);
    factories.set(nn.ClassificationNetwork._type, nn.ClassificationNetwork);
    factories.set(kmeans.Kmeans._type, kmeans.Kmeans);
    factories.set(ml.Polynomial._type, ml.Polynomial);
    loaders.set(ml.Polynomial._type, algebra_n.ml.Polynomial.load);
    factories.set(ml.PCA._type, ml.PCA);
    loaders.set(ml.PCA._type, algebra_n.ml.PCA.load);
    factories.set(ml.HeatMapProfile._type, ml.HeatMapProfile);
    factories.set(ml.TimeSeriesDecomposition._type, ml.TimeSeriesDecomposition);
    factories.set(ml.Solver._type, ml.Solver);
    factories.set(ml.GaussianND._type, ml.GaussianND);
    loaders.set(ml.GaussianND._type, algebra_n.ml.GaussianND.load);
    factories.set(powerflow.PowerLineResult._type, powerflow.PowerLineResult);
    factories.set(powerflow.PowerBusResult._type, powerflow.PowerBusResult);
  },
  init(abi) {
    this.mapped.length = 150;
    this.mapped[0] = abi.type_by_fqn.get(compute.ComputeOptimizerNesterov._type)!;
    this.mapped[0].resolveGeneratedOffsets('learning_rate','decay_rate');
    this.mapped[0].static_values = [0.001,0.9];
    this.mapped[1] = abi.type_by_fqn.get(compute.ComputeOperationRaiseToPower._type)!;
    this.mapped[1].resolveGeneratedOffsets('input','output','power');
    this.mapped[2] = abi.type_by_fqn.get(compute.ComputeOperationElu._type)!;
    this.mapped[2].resolveGeneratedOffsets('input','output','alpha');
    this.mapped[2].static_values = [1.0];
    this.mapped[3] = abi.type_by_fqn.get(compute.ComputeOperationTanh._type)!;
    this.mapped[3].resolveGeneratedOffsets('input','output');
    this.mapped[4] = abi.type_by_fqn.get(compute.ComputeLayerCall._type)!;
    this.mapped[4].resolveGeneratedOffsets('layer_name','bindings');
    this.mapped[5] = abi.type_by_fqn.get(compute.ComputeOperationEuclidean._type)!;
    this.mapped[5].resolveGeneratedOffsets('input','input2','output');
    this.mapped[6] = abi.type_by_fqn.get(compute.ComputeOperationAvg._type)!;
    this.mapped[6].resolveGeneratedOffsets('input','input2','output');
    this.mapped[7] = abi.type_by_fqn.get(compute.ComputeOperationMul._type)!;
    this.mapped[7].resolveGeneratedOffsets('input','input2','output');
    this.mapped[8] = abi.type_by_fqn.get(compute.ComputeOperationCelu._type)!;
    this.mapped[8].resolveGeneratedOffsets('input','output','alpha');
    this.mapped[8].static_values = [1.0];
    this.mapped[9] = abi.type_by_fqn.get(compute.ComputeLayerActivation._type)!;
    this.mapped[9].resolveGeneratedOffsets('name','activation');
    this.mapped[9].static_values = ["input","output"];
    this.mapped[10] = abi.type_by_fqn.get(compute.ComputeOperationSinh._type)!;
    this.mapped[10].resolveGeneratedOffsets('input','output');
    this.mapped[11] = abi.type_by_fqn.get(compute.ComputeVar._type)!;
    this.mapped[11].resolveGeneratedOffsets('name');
    this.mapped[12] = abi.type_by_fqn.get(compute.ComputeLayerLinear._type)!;
    this.mapped[12].resolveGeneratedOffsets('name','type','inputs','outputs','use_bias','weight_initializer','weight_regularizer','bias_initializer','bias_regularizer');
    this.mapped[12].static_values = ["input","output","weight","bias","mult"];
    this.mapped[13] = abi.type_by_fqn.get(compute.ComputeOperationSoftmax._type)!;
    this.mapped[13].resolveGeneratedOffsets('input','output');
    this.mapped[14] = abi.type_by_fqn.get(compute.ComputeOptimizer._type)!;
    this.mapped[14].resolveGeneratedOffsets('learning_rate');
    this.mapped[15] = abi.type_by_fqn.get(compute.ComputeLayerLossClassification._type)!;
    this.mapped[15].resolveGeneratedOffsets('name','reduction','loss_type','has_class_weights','calculate_probabilities','from_logits');
    this.mapped[15].static_values = ["class_weights","predicted_classes","probabilities","sum_reduce"];
    this.mapped[16] = abi.type_by_fqn.get(compute.ComputeInitializerLSTM._type)!;
    this.mapped[17] = abi.type_by_fqn.get(compute.ComputeLayerClassification._type)!;
    this.mapped[17].resolveGeneratedOffsets('name','calculate_probabilities','from_logits');
    this.mapped[17].static_values = ["input","predicted_classes","probabilities"];
    this.mapped[18] = abi.type_by_fqn.get(compute.ComputeOperationSign._type)!;
    this.mapped[18].resolveGeneratedOffsets('input','output');
    this.mapped[19] = abi.type_by_fqn.get(compute.ComputeOperationAsin._type)!;
    this.mapped[19].resolveGeneratedOffsets('input','output');
    this.mapped[20] = abi.type_by_fqn.get(compute.ComputeInitializerXavierUniform._type)!;
    this.mapped[21] = abi.type_by_fqn.get(compute.ComputeOptimizerNadam._type)!;
    this.mapped[21].resolveGeneratedOffsets('learning_rate','beta1','beta2','smooth_epsilon');
    this.mapped[21].static_values = [0.001,0.9,0.999,0.0000001];
    this.mapped[22] = abi.type_by_fqn.get(compute.ComputeActivationExp._type)!;
    this.mapped[23] = abi.type_by_fqn.get(compute.ComputeInitializerPytorch._type)!;
    this.mapped[24] = abi.type_by_fqn.get(compute.ComputeOperationSub._type)!;
    this.mapped[24].resolveGeneratedOffsets('input','input2','output');
    this.mapped[25] = abi.type_by_fqn.get(compute.ComputeState._type)!;
    this.mapped[26] = abi.type_by_fqn.get(compute.ComputeOperationAcos._type)!;
    this.mapped[26].resolveGeneratedOffsets('input','output');
    this.mapped[27] = abi.type_by_fqn.get(compute.ComputeOperationSin._type)!;
    this.mapped[27].resolveGeneratedOffsets('input','output');
    this.mapped[28] = abi.type_by_fqn.get(compute.ComputeInitializerUniformAvg._type)!;
    this.mapped[29] = abi.type_by_fqn.get(compute.ComputeOperationArg._type)!;
    this.mapped[29].resolveGeneratedOffsets('input','output','output2');
    this.mapped[30] = abi.type_by_fqn.get(compute.ComputeVarConst._type)!;
    this.mapped[30].resolveGeneratedOffsets('name','type','shape');
    this.mapped[31] = abi.type_by_fqn.get(compute.ComputeEngine._type)!;
    this.mapped[32] = abi.type_by_fqn.get(compute.ComputeLayer._type)!;
    this.mapped[32].resolveGeneratedOffsets('name');
    this.mapped[33] = abi.type_by_fqn.get(compute.ComputeOperationSqrt._type)!;
    this.mapped[33].resolveGeneratedOffsets('input','output');
    this.mapped[34] = abi.type_by_fqn.get(compute.ComputeRegressionLoss._type)!;
    this.mapped[34].resolveGeneratedOffsetWithValues('square', "Square",'abs', "Abs");
    this.mapped[35] = abi.type_by_fqn.get(compute.ComputeOperationExp._type)!;
    this.mapped[35].resolveGeneratedOffsets('input','output');
    this.mapped[36] = abi.type_by_fqn.get(compute.ComputeLayerLoss._type)!;
    this.mapped[36].resolveGeneratedOffsets('name','reduction');
    this.mapped[36].static_values = ["computed","expected","loss"];
    this.mapped[37] = abi.type_by_fqn.get(compute.ComputeOperation2In1Out._type)!;
    this.mapped[37].resolveGeneratedOffsets('input','input2','output');
    this.mapped[38] = abi.type_by_fqn.get(compute.ComputeOperationArgMin._type)!;
    this.mapped[38].resolveGeneratedOffsets('input','output','output2');
    this.mapped[39] = abi.type_by_fqn.get(compute.ComputeOperationSumIf._type)!;
    this.mapped[39].resolveGeneratedOffsets('input','ifCondition','output','counts','classes');
    this.mapped[40] = abi.type_by_fqn.get(compute.ComputeActivationHardSigmoid._type)!;
    this.mapped[40].resolveGeneratedOffsets('slope','shift');
    this.mapped[40].static_values = [0.2,0.5];
    this.mapped[41] = abi.type_by_fqn.get(compute.ComputeOperationAsinh._type)!;
    this.mapped[41].resolveGeneratedOffsets('input','output');
    this.mapped[42] = abi.type_by_fqn.get(compute.ComputeInitializerNormal._type)!;
    this.mapped[42].resolveGeneratedOffsets('avg','std');
    this.mapped[43] = abi.type_by_fqn.get(compute.ComputeVariable._type)!;
    this.mapped[43].resolveGeneratedOffsets('name');
    this.mapped[44] = abi.type_by_fqn.get(compute.ComputeOperationRelu._type)!;
    this.mapped[44].resolveGeneratedOffsets('input','output','max_value','threshold');
    this.mapped[44].static_values = [0.0];
    this.mapped[45] = abi.type_by_fqn.get(compute.ComputeOperationSigmoid._type)!;
    this.mapped[45].resolveGeneratedOffsets('input','output');
    this.mapped[46] = abi.type_by_fqn.get(compute.ComputeLayerMinMaxScaler._type)!;
    this.mapped[46].resolveGeneratedOffsets('name','type','inverse_transform');
    this.mapped[46].static_values = ["input","output","min","max"];
    this.mapped[47] = abi.type_by_fqn.get(compute.ComputeActivationSoftSign._type)!;
    this.mapped[48] = abi.type_by_fqn.get(compute.ComputeClassificationLoss._type)!;
    this.mapped[48].resolveGeneratedOffsetWithValues('categorical_cross_entropy', "Categorical Cross Entropy",'sparse_categorical_cross_entropy', "Sparse Categorical Cross Entropy");
    this.mapped[49] = abi.type_by_fqn.get(compute.ComputeActivation._type)!;
    this.mapped[50] = abi.type_by_fqn.get(compute.ComputeOperationCos._type)!;
    this.mapped[50].resolveGeneratedOffsets('input','output');
    this.mapped[51] = abi.type_by_fqn.get(compute.ComputeOptimizerAdaDelta._type)!;
    this.mapped[51].resolveGeneratedOffsets('learning_rate','decay_rate','smooth_epsilon');
    this.mapped[51].static_values = [0.001,0.95,0.0000001];
    this.mapped[52] = abi.type_by_fqn.get(compute.ComputeInitializerNormalIn._type)!;
    this.mapped[53] = abi.type_by_fqn.get(compute.ComputeOperationSelu._type)!;
    this.mapped[53].resolveGeneratedOffsets('input','output');
    this.mapped[54] = abi.type_by_fqn.get(compute.ComputeOperationLeakyRelu._type)!;
    this.mapped[54].resolveGeneratedOffsets('input','output','alpha','max_value','threshold');
    this.mapped[54].static_values = [0.3,1.7976931349E308,0.0];
    this.mapped[55] = abi.type_by_fqn.get(compute.ComputeOperationSoftplus._type)!;
    this.mapped[55].resolveGeneratedOffsets('input','output');
    this.mapped[56] = abi.type_by_fqn.get(compute.ComputeOperationSoftSign._type)!;
    this.mapped[56].resolveGeneratedOffsets('input','output');
    this.mapped[57] = abi.type_by_fqn.get(compute.ComputeInitializerUniformOut._type)!;
    this.mapped[58] = abi.type_by_fqn.get(compute.ComputeOperationLog._type)!;
    this.mapped[58].resolveGeneratedOffsets('input','output');
    this.mapped[59] = abi.type_by_fqn.get(compute.ComputeActivationSelu._type)!;
    this.mapped[60] = abi.type_by_fqn.get(compute.ComputeActivationLeakyRelu._type)!;
    this.mapped[60].resolveGeneratedOffsets('alpha','max_value','threshold');
    this.mapped[60].static_values = [0.3,0.0];
    this.mapped[61] = abi.type_by_fqn.get(compute.ComputeOperationSum._type)!;
    this.mapped[61].resolveGeneratedOffsets('input','output','axis');
    this.mapped[62] = abi.type_by_fqn.get(compute.ComputeOperationFill._type)!;
    this.mapped[62].resolveGeneratedOffsets('input','value');
    this.mapped[63] = abi.type_by_fqn.get(compute.ComputeLayerCustom._type)!;
    this.mapped[63].resolveGeneratedOffsets('name','ops','vars');
    this.mapped[64] = abi.type_by_fqn.get(compute.ComputeActivationSigmoid._type)!;
    this.mapped[65] = abi.type_by_fqn.get(compute.ComputeRegularizer._type)!;
    this.mapped[65].resolveGeneratedOffsets('l1','l2');
    this.mapped[66] = abi.type_by_fqn.get(compute.ComputeOperationClip._type)!;
    this.mapped[66].resolveGeneratedOffsets('input','output','min','max');
    this.mapped[67] = abi.type_by_fqn.get(compute.ComputeOperationPow._type)!;
    this.mapped[67].resolveGeneratedOffsets('input','input2','output');
    this.mapped[68] = abi.type_by_fqn.get(compute.ComputeActivationSoftmax._type)!;
    this.mapped[68].resolveGeneratedOffsets('classes');
    this.mapped[69] = abi.type_by_fqn.get(compute.ComputeLayerDense._type)!;
    this.mapped[69].resolveGeneratedOffsets('name','type','inputs','outputs','use_bias','weight_initializer','weight_regularizer','bias_initializer','bias_regularizer','activation');
    this.mapped[69].static_values = ["input","output","weight","bias","mult","pre_activation"];
    this.mapped[70] = abi.type_by_fqn.get(compute.ComputeInitializerRelu._type)!;
    this.mapped[71] = abi.type_by_fqn.get(compute.ComputeInitializerConstant._type)!;
    this.mapped[71].resolveGeneratedOffsets('value');
    this.mapped[72] = abi.type_by_fqn.get(compute.ComputeInitializerUniform._type)!;
    this.mapped[72].resolveGeneratedOffsets('min','max');
    this.mapped[73] = abi.type_by_fqn.get(compute.ComputeOptimizerMomentum._type)!;
    this.mapped[73].resolveGeneratedOffsets('learning_rate','decay_rate');
    this.mapped[73].static_values = [0.001,0.9];
    this.mapped[74] = abi.type_by_fqn.get(compute.ComputeInitializerGlorotUniform._type)!;
    this.mapped[75] = abi.type_by_fqn.get(compute.ComputeOperationMatMul._type)!;
    this.mapped[75].resolveGeneratedOffsets('input','input2','output','transposeA','transposeB','alpha','beta');
    this.mapped[75].static_values = [false,1.0,0.0];
    this.mapped[76] = abi.type_by_fqn.get(compute.ComputeCounter._type)!;
    this.mapped[76].resolveGeneratedOffsets('epoch','optimizationSteps','batchNotOptimized');
    this.mapped[77] = abi.type_by_fqn.get(compute.ComputeInitializerNormalAvg._type)!;
    this.mapped[78] = abi.type_by_fqn.get(compute.ComputeOperation1In1Out._type)!;
    this.mapped[78].resolveGeneratedOffsets('input','output');
    this.mapped[79] = abi.type_by_fqn.get(compute.ComputeOperationArgMax._type)!;
    this.mapped[79].resolveGeneratedOffsets('input','output','output2');
    this.mapped[80] = abi.type_by_fqn.get(compute.ComputeActivationElu._type)!;
    this.mapped[80].resolveGeneratedOffsets('alpha');
    this.mapped[80].static_values = [1.0];
    this.mapped[81] = abi.type_by_fqn.get(compute.ComputeReduction._type)!;
    this.mapped[81].resolveGeneratedOffsetWithValues('auto', "auto",'none', "none",'sum', "sum",'mean', "mean",'disabled', "disabled");
    this.mapped[82] = abi.type_by_fqn.get(compute.ComputeOperationAdd._type)!;
    this.mapped[82].resolveGeneratedOffsets('input','input2','output');
    this.mapped[83] = abi.type_by_fqn.get(compute.ComputeModel._type)!;
    this.mapped[83].resolveGeneratedOffsets('layers');
    this.mapped[84] = abi.type_by_fqn.get(compute.ComputeActivationRelu._type)!;
    this.mapped[84].resolveGeneratedOffsets('max_value','threshold');
    this.mapped[84].static_values = [0.0];
    this.mapped[85] = abi.type_by_fqn.get(compute.ComputeOperationAtan._type)!;
    this.mapped[85].resolveGeneratedOffsets('input','output');
    this.mapped[86] = abi.type_by_fqn.get(compute.ComputeOptimizerAdam._type)!;
    this.mapped[86].resolveGeneratedOffsets('learning_rate','beta1','beta2','smooth_epsilon');
    this.mapped[86].static_values = [0.001,0.9,0.999,0.0000001];
    this.mapped[87] = abi.type_by_fqn.get(compute.ComputeOptimizerFtrl._type)!;
    this.mapped[87].resolveGeneratedOffsets('learning_rate','lambda1','lambda2','beta');
    this.mapped[87].static_values = [0.001,0.0,0.0,0.0];
    this.mapped[88] = abi.type_by_fqn.get(compute.ComputeInitializerIdentity._type)!;
    this.mapped[89] = abi.type_by_fqn.get(compute.ComputeInitializerUniformIn._type)!;
    this.mapped[90] = abi.type_by_fqn.get(compute.ComputeInitializerSigmoidUniform._type)!;
    this.mapped[91] = abi.type_by_fqn.get(compute.ComputeActivationSoftplus._type)!;
    this.mapped[92] = abi.type_by_fqn.get(compute.ComputeOperationLeCunTanh._type)!;
    this.mapped[92].resolveGeneratedOffsets('input','output');
    this.mapped[93] = abi.type_by_fqn.get(compute.ComputeOperationDiv._type)!;
    this.mapped[93].resolveGeneratedOffsets('input','input2','output');
    this.mapped[94] = abi.type_by_fqn.get(compute.ComputeInitializerReluUniform._type)!;
    this.mapped[95] = abi.type_by_fqn.get(compute.ComputeLayerLSTM._type)!;
    this.mapped[95].resolveGeneratedOffsets('name','bias_initializer','weight_regularizer','bias_regularizer','type','use_bias','return_sequences','bidirectional','auto_init_states','inputs','outputs','layers','sequences');
    this.mapped[95].static_values = ["input","output","hx","cx","hy","cy","weight","bias","internal_i","internal_f","internal_cp","internal_o","internal_h","internal_c","internal_mult","internal_output"];
    this.mapped[96] = abi.type_by_fqn.get(compute.ComputeInitializerLeCunUniform._type)!;
    this.mapped[97] = abi.type_by_fqn.get(compute.ComputeActivationTanh._type)!;
    this.mapped[98] = abi.type_by_fqn.get(compute.ComputeVarInOut._type)!;
    this.mapped[98].resolveGeneratedOffsets('name','type','shape','with_grad');
    this.mapped[99] = abi.type_by_fqn.get(compute.ComputeLayerFilter._type)!;
    this.mapped[99].resolveGeneratedOffsets('name','type','inputs','outputs','maskValues');
    this.mapped[99].static_values = ["input","output","mask"];
    this.mapped[100] = abi.type_by_fqn.get(compute.ComputeOptimizerRmsProp._type)!;
    this.mapped[100].resolveGeneratedOffsets('learning_rate','decay_rate','smooth_epsilon');
    this.mapped[100].static_values = [0.001,0.9,0.0000001];
    this.mapped[101] = abi.type_by_fqn.get(compute.ComputeOptimizerSgd._type)!;
    this.mapped[101].resolveGeneratedOffsets('learning_rate');
    this.mapped[101].static_values = [0.01];
    this.mapped[102] = abi.type_by_fqn.get(compute.ComputeBinding._type)!;
    this.mapped[102].resolveGeneratedOffsets('src_layer_name','src_var_name','target_var_name');
    this.mapped[103] = abi.type_by_fqn.get(compute.ComputeLayerStandardScaler._type)!;
    this.mapped[103].resolveGeneratedOffsets('name','type','inverse_transform');
    this.mapped[103].static_values = ["input","output","avg","std"];
    this.mapped[104] = abi.type_by_fqn.get(compute.ComputeInitializerNormalOut._type)!;
    this.mapped[105] = abi.type_by_fqn.get(compute.ComputeInitializerNone._type)!;
    this.mapped[106] = abi.type_by_fqn.get(compute.ComputeOperationNeg._type)!;
    this.mapped[106].resolveGeneratedOffsets('input','output');
    this.mapped[107] = abi.type_by_fqn.get(compute.ComputeOperationTan._type)!;
    this.mapped[107].resolveGeneratedOffsets('input','output');
    this.mapped[108] = abi.type_by_fqn.get(compute.ComputeVarProxy._type)!;
    this.mapped[108].resolveGeneratedOffsets('name');
    this.mapped[109] = abi.type_by_fqn.get(compute.ComputeOperationCosh._type)!;
    this.mapped[109].resolveGeneratedOffsets('input','output');
    this.mapped[110] = abi.type_by_fqn.get(compute.ComputeLayerSeq._type)!;
    this.mapped[110].resolveGeneratedOffsets('name','calls','optimizer');
    this.mapped[111] = abi.type_by_fqn.get(compute.ComputeLayerLossRegression._type)!;
    this.mapped[111].resolveGeneratedOffsets('name','reduction','loss_type');
    this.mapped[112] = abi.type_by_fqn.get(compute.ComputeOperationAcosh._type)!;
    this.mapped[112].resolveGeneratedOffsets('input','output');
    this.mapped[113] = abi.type_by_fqn.get(compute.ComputeOperationHardSigmoid._type)!;
    this.mapped[113].resolveGeneratedOffsets('input','output','slope','shift');
    this.mapped[113].static_values = [0.2,0.5];
    this.mapped[114] = abi.type_by_fqn.get(compute.ComputeOperationLogSoftmax._type)!;
    this.mapped[114].resolveGeneratedOffsets('input','output','axis');
    this.mapped[115] = abi.type_by_fqn.get(compute.ComputeVarOptimize._type)!;
    this.mapped[115].resolveGeneratedOffsets('name','type','shape','l1','l2','init');
    this.mapped[116] = abi.type_by_fqn.get(compute.ComputeOperationAddBias._type)!;
    this.mapped[116].resolveGeneratedOffsets('input','input2','output');
    this.mapped[117] = abi.type_by_fqn.get(compute.ComputeOperationAbs._type)!;
    this.mapped[117].resolveGeneratedOffsets('input','output');
    this.mapped[118] = abi.type_by_fqn.get(compute.ComputeOperationScale._type)!;
    this.mapped[118].resolveGeneratedOffsets('input','output','alpha');
    this.mapped[119] = abi.type_by_fqn.get(compute.ComputeOptimizerAdaGrad._type)!;
    this.mapped[119].resolveGeneratedOffsets('learning_rate','initial_accumulator','smooth_epsilon');
    this.mapped[119].static_values = [0.001,0.1,0.0000001];
    this.mapped[120] = abi.type_by_fqn.get(compute.ComputeOptimizerAdaMax._type)!;
    this.mapped[120].resolveGeneratedOffsets('learning_rate','beta1','beta2','smooth_epsilon');
    this.mapped[120].static_values = [0.001,0.9,0.999,0.0000001];
    this.mapped[121] = abi.type_by_fqn.get(compute.ComputeOperationAtanh._type)!;
    this.mapped[121].resolveGeneratedOffsets('input','output');
    this.mapped[122] = abi.type_by_fqn.get(compute.ComputeInitializerXavier._type)!;
    this.mapped[123] = abi.type_by_fqn.get(compute.ComputeLayerPCAScaler._type)!;
    this.mapped[123].resolveGeneratedOffsets('name','type','inverse_transform');
    this.mapped[123].static_values = ["input","output","avg","std","space"];
    this.mapped[124] = abi.type_by_fqn.get(compute.ComputeOperation._type)!;
    this.mapped[125] = abi.type_by_fqn.get(compute.ComputeActivationCelu._type)!;
    this.mapped[125].resolveGeneratedOffsets('alpha');
    this.mapped[125].static_values = [1.0];
    this.mapped[126] = abi.type_by_fqn.get(compute.ComputeInitializer._type)!;
    this.mapped[127] = abi.type_by_fqn.get(compute.ComputeOperationFilter._type)!;
    this.mapped[127].resolveGeneratedOffsets('input','output','mask','nbOutputs');
    this.mapped[128] = abi.type_by_fqn.get(nn_layers_names.NNLayersNames._type)!;
    this.mapped[128].resolveGeneratedOffsetWithValues('layer_0', "layer_0",'layer_1', "layer_1",'layer_2', "layer_2",'layer_3', "layer_3",'layer_4', "layer_4",'layer_5', "layer_5",'layer_6', "layer_6",'layer_7', "layer_7",'layer_8', "layer_8",'layer_9', "layer_9",'layer_10', "layer_10",'layer_11', "layer_11",'layer_12', "layer_12",'layer_13', "layer_13",'layer_14', "layer_14",'layer_15', "layer_15",'layer_16', "layer_16",'layer_17', "layer_17",'layer_18', "layer_18",'layer_19', "layer_19",'layer_20', "layer_20",'layer_21', "layer_21",'layer_22', "layer_22",'layer_23', "layer_23",'layer_24', "layer_24",'layer_25', "layer_25",'layer_26', "layer_26",'layer_27', "layer_27",'layer_28', "layer_28",'layer_29', "layer_29",'layer_30', "layer_30",'layer_31', "layer_31",'layer_32', "layer_32",'layer_33', "layer_33",'layer_34', "layer_34",'layer_35', "layer_35",'layer_36', "layer_36",'layer_37', "layer_37",'layer_38', "layer_38",'layer_39', "layer_39",'layer_40', "layer_40",'layer_41', "layer_41",'layer_42', "layer_42",'layer_43', "layer_43",'layer_44', "layer_44",'layer_45', "layer_45",'layer_46', "layer_46",'layer_47', "layer_47",'layer_48', "layer_48",'layer_49', "layer_49",'layer_50', "layer_50",'layer_51', "layer_51",'layer_52', "layer_52",'layer_53', "layer_53",'layer_54', "layer_54",'layer_55', "layer_55",'layer_56', "layer_56",'layer_57', "layer_57",'layer_58', "layer_58",'layer_59', "layer_59",'layer_60', "layer_60",'layer_61', "layer_61",'layer_62', "layer_62",'layer_63', "layer_63",'layer_64', "layer_64",'layer_65', "layer_65",'layer_66', "layer_66",'layer_67', "layer_67",'layer_68', "layer_68",'layer_69', "layer_69",'layer_70', "layer_70",'layer_71', "layer_71",'layer_72', "layer_72",'layer_73', "layer_73",'layer_74', "layer_74",'layer_75', "layer_75",'layer_76', "layer_76",'layer_77', "layer_77",'layer_78', "layer_78",'layer_79', "layer_79",'layer_80', "layer_80",'layer_81', "layer_81",'layer_82', "layer_82",'layer_83', "layer_83",'layer_84', "layer_84",'layer_85', "layer_85",'layer_86', "layer_86",'layer_87', "layer_87",'layer_88', "layer_88",'layer_89', "layer_89",'layer_90', "layer_90",'layer_91', "layer_91",'layer_92', "layer_92",'layer_93', "layer_93",'layer_94', "layer_94",'layer_95', "layer_95",'layer_96', "layer_96",'layer_97', "layer_97",'layer_98', "layer_98",'layer_99', "layer_99",'layer_100', "layer_100",'layer_101', "layer_101",'layer_102', "layer_102",'layer_103', "layer_103",'layer_104', "layer_104",'layer_105', "layer_105",'layer_106', "layer_106",'layer_107', "layer_107",'layer_108', "layer_108",'layer_109', "layer_109",'layer_110', "layer_110",'layer_111', "layer_111",'layer_112', "layer_112",'layer_113', "layer_113",'layer_114', "layer_114",'layer_115', "layer_115",'layer_116', "layer_116",'layer_117', "layer_117",'layer_118', "layer_118",'layer_119', "layer_119",'layer_120', "layer_120",'layer_121', "layer_121",'layer_122', "layer_122",'layer_123', "layer_123",'layer_124', "layer_124",'layer_125', "layer_125",'layer_126', "layer_126",'layer_127', "layer_127",'layer_128', "layer_128",'layer_129', "layer_129",'layer_130', "layer_130",'layer_131', "layer_131",'layer_132', "layer_132",'layer_133', "layer_133",'layer_134', "layer_134",'layer_135', "layer_135",'layer_136', "layer_136",'layer_137', "layer_137",'layer_138', "layer_138",'layer_139', "layer_139",'layer_140', "layer_140",'layer_141', "layer_141",'layer_142', "layer_142",'layer_143', "layer_143",'layer_144', "layer_144",'layer_145', "layer_145",'layer_146', "layer_146",'layer_147', "layer_147",'layer_148', "layer_148",'layer_149', "layer_149",'layer_150', "layer_150",'layer_151', "layer_151",'layer_152', "layer_152",'layer_153', "layer_153",'layer_154', "layer_154",'layer_155', "layer_155",'layer_156', "layer_156",'layer_157', "layer_157",'layer_158', "layer_158",'layer_159', "layer_159",'layer_160', "layer_160",'layer_161', "layer_161",'layer_162', "layer_162",'layer_163', "layer_163",'layer_164', "layer_164",'layer_165', "layer_165",'layer_166', "layer_166",'layer_167', "layer_167",'layer_168', "layer_168",'layer_169', "layer_169",'layer_170', "layer_170",'layer_171', "layer_171",'layer_172', "layer_172",'layer_173', "layer_173",'layer_174', "layer_174",'layer_175', "layer_175",'layer_176', "layer_176",'layer_177', "layer_177",'layer_178', "layer_178",'layer_179', "layer_179",'layer_180', "layer_180",'layer_181', "layer_181",'layer_182', "layer_182",'layer_183', "layer_183",'layer_184', "layer_184",'layer_185', "layer_185",'layer_186', "layer_186",'layer_187', "layer_187",'layer_188', "layer_188",'layer_189', "layer_189",'layer_190', "layer_190",'layer_191', "layer_191",'layer_192', "layer_192",'layer_193', "layer_193",'layer_194', "layer_194",'layer_195', "layer_195",'layer_196', "layer_196",'layer_197', "layer_197",'layer_198', "layer_198",'layer_199', "layer_199");
    this.mapped[129] = abi.type_by_fqn.get(nn.NeuralNetwork._type)!;
    this.mapped[129].resolveGeneratedOffsets('inputs','inputs_gradients','outputs','fixed_batch_size','inputs_sequences','outputs_sequences','tensor_type','lossLayer','optimizer','seed','randomizeSeed','placeholders','preProcessType','postProcessType','preProcessObject','postProcessObject','layers','lastLayer','lastOutput');
    this.mapped[129].static_values = ["Inputs or outputs can't be negative","Last layer has different number of outputs than declared","Incompatible loss function","Some NN layers are not currently supported","Tensor Type not currently supported","NN should contain at least 1 layer","placeholders","classification layer","loss","input","enc_input","targets","Classifier classes","Classifier probabilities","Classifier class weights","pre_process","input_avg","input_min","input_max","input_std","input_space","output_avg","output_min","output_max","output_std","post_process","predict","learn","encode","decode"];
    this.mapped[130] = abi.type_by_fqn.get(nn.ComputeInitializers._type)!;
    this.mapped[130].resolveGeneratedOffsetWithValues('none', "None",'constant', "Constant",'sigmoid_uniform', "SigmoidUniform",'lecun_uniform', "LeCunUniform",'xavier', "Xavier",'xavier_uniform', "XavierUniform",'relu', "Relu",'relu_uniform', "ReluUniform",'normal', "Normal",'normal_in', "NormalIn",'normal_out', "NormalOut",'normal_avg', "NormalAvg",'uniform', "Uniform",'uniform_in', "UniformIn",'uniform_out', "UniformOut",'uniform_avg', "UniformAvg",'identity', "Identity",'pytorch', "Pytorch");
    this.mapped[131] = abi.type_by_fqn.get(nn.InitializerConfig._type)!;
    this.mapped[131].resolveGeneratedOffsets('weight_initializer','weight_regularizer','bias_initializer','bias_regularizer');
    this.mapped[132] = abi.type_by_fqn.get(nn.ComputeOptimizers._type)!;
    this.mapped[132].resolveGeneratedOffsetWithValues('ada_delta', "Ada Delta",'ada_grad', "Ada Grad",'adam', "Adam",'ada_max', "Ada Max",'nadam', "NAdam",'ftrl', "Ftrl",'sgd', "Stochastic Gradient Descent",'rms_prop', "RMS Prop",'momentum', "Momentum",'nesterov', "Nesterov");
    this.mapped[133] = abi.type_by_fqn.get(nn.ComputeLayerTypes._type)!;
    this.mapped[133].resolveGeneratedOffsetWithValues('linear', "Linear",'dense', "Dense",'activation', "Activation",'lstm', "LSTM",'loss', "Loss",'filter', "Filter");
    this.mapped[134] = abi.type_by_fqn.get(nn.PostProcessType._type)!;
    this.mapped[134].resolveGeneratedOffsetWithValues('none', "None",'min_max_scaling', "Min/Max Scaling",'standard_scaling', "Standard Scaling");
    this.mapped[135] = abi.type_by_fqn.get(nn.ComputeActivations._type)!;
    this.mapped[135].resolveGeneratedOffsetWithValues('relu', "Relu",'leaky_relu', "Leaky Relu",'sigmoid', "Sigmoid",'hard_sigmoid', "Hard Sigmoid",'exp', "Exp",'soft_max', "Soft Max",'soft_plus', "Soft Plus",'soft_sign', "Soft Sign",'tanh', "Tanh",'selu', "Selu",'elu', "Elu",'celu', "Celu");
    this.mapped[136] = abi.type_by_fqn.get(nn.RegressionNetwork._type)!;
    this.mapped[136].resolveGeneratedOffsets('inputs','inputs_gradients','outputs','fixed_batch_size','inputs_sequences','outputs_sequences','tensor_type','lossLayer','optimizer','seed','randomizeSeed','placeholders','preProcessType','postProcessType','preProcessObject','postProcessObject','layers','lastLayer','lastOutput');
    this.mapped[137] = abi.type_by_fqn.get(nn.BindingsResult._type)!;
    this.mapped[137].resolveGeneratedOffsets('previousLayerName','previousLayerOutput','expectedLayerName','expectedLayerOutput','postLayer');
    this.mapped[138] = abi.type_by_fqn.get(nn.AutoEncoderNetwork._type)!;
    this.mapped[138].resolveGeneratedOffsets('inputs','inputs_gradients','outputs','fixed_batch_size','inputs_sequences','outputs_sequences','tensor_type','lossLayer','optimizer','seed','randomizeSeed','placeholders','preProcessType','postProcessType','preProcessObject','postProcessObject','layers','lastLayer','lastOutput','encoder_layer_idx','encoder_layer_name','encoder_layer_var');
    this.mapped[139] = abi.type_by_fqn.get(nn.PreProcessType._type)!;
    this.mapped[139].resolveGeneratedOffsetWithValues('none', "None",'min_max_scaling', "Min/Max Scaling",'standard_scaling', "Standard Scaling",'pca_scaling', "PCA Scaling");
    this.mapped[140] = abi.type_by_fqn.get(nn.ClassificationNetwork._type)!;
    this.mapped[140].resolveGeneratedOffsets('inputs','inputs_gradients','outputs','fixed_batch_size','inputs_sequences','outputs_sequences','tensor_type','lossLayer','optimizer','seed','randomizeSeed','placeholders','preProcessType','postProcessType','preProcessObject','postProcessObject','layers','lastLayer','lastOutput','calculate_probabilities','has_class_weights','from_logits');
    this.mapped[141] = abi.type_by_fqn.get(kmeans.Kmeans._type)!;
    this.mapped[141].static_values = ["input","assignement","min_distance","centroids","distance","sum_centroids","sum_min_distance","count_centroids","centroid_distances","sum_cluster_distances","avg_cluster_distances","count_cluster_distances","placeholders","kmeans_forward","kmeans_backward","kmeans_init_round","kmeans_end_round","kmeans_stats_layer","kmeans_init_round_seq","kmeans_forward_seq","kmeans_backward_seq","kmeans_end_round_seq","kmeans_stats_seq"];
    this.mapped[142] = abi.type_by_fqn.get(ml.Polynomial._type)!;
    this.mapped[143] = abi.type_by_fqn.get(ml.PCA._type)!;
    this.mapped[143].static_values = [0.95];
    this.mapped[144] = abi.type_by_fqn.get(ml.HeatMapProfile._type)!;
    this.mapped[144].resolveGeneratedOffsets('counts','x_labels','y_labels','counts_max','counts_sum');
    this.mapped[145] = abi.type_by_fqn.get(ml.TimeSeriesDecomposition._type)!;
    this.mapped[146] = abi.type_by_fqn.get(ml.Solver._type)!;
    this.mapped[147] = abi.type_by_fqn.get(ml.GaussianND._type)!;
    this.mapped[148] = abi.type_by_fqn.get(powerflow.PowerLineResult._type)!;
    this.mapped[148].resolveGeneratedOffsets('p_from_mw','q_from_mvar','p_to_mw','q_to_mvar','pl_mw','ql_mvar','i_from_ka','i_to_ka','i_ka','vm_from_pu','vm_to_pu','va_from_radians','va_to_radians','loading_percent');
    this.mapped[149] = abi.type_by_fqn.get(powerflow.PowerBusResult._type)!;
    this.mapped[149].resolveGeneratedOffsets('abs','angle_radians','voltage','voltage_img','current','current_img');
  },
};
