// AUTO-GENERATED FILE PLEASE DO NOT MODIFY MANUALLY
/* eslint-disable */
// @ts-nocheck

import * as $sdk from '@greycat/sdk';
import * as algebra_n from '../algebra_n/index.js';

export namespace compute {
  export class ComputeLayerMinMaxScaler extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeLayerMinMaxScaler';

    name: string;
    type: $sdk.std.core.TensorType;
    inverse_transform: boolean;
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
        type: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        inverse_transform: {
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

    static var_input_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[0];
      return  t.static_values[0] as string;
    }
    static var_output_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[0];
      return  t.static_values[1] as string;
    }
    static var_min_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[0];
      return  t.static_values[2] as string;
    }
    static var_max_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[0];
      return  t.static_values[3] as string;
    }
    static createFrom({name, type, inverse_transform}: {name: string, type: $sdk.std.core.TensorType, inverse_transform: boolean}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerMinMaxScaler {
      return new ComputeLayerMinMaxScaler($g.abi.libs_by_name.get(algebralib.name)!.mapped[0], name, type, inverse_transform);
    }
    static create(name: string, type: $sdk.std.core.TensorType, inverse_transform: boolean, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerMinMaxScaler {
      return new ComputeLayerMinMaxScaler($g.abi.libs_by_name.get(algebralib.name)!.mapped[0], name, type, inverse_transform);
    }
  }

  export class ComputeOptimizerMomentum extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOptimizerMomentum';

    learning_rate: number | null;
    decay_rate: number;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        learning_rate: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        decay_rate: {
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

    static learning_rate_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[1];
      return  t.static_values[0] as number;
    }
    static decay_rate_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[1];
      return  t.static_values[1] as number;
    }
    static createFrom({learning_rate, decay_rate}: {learning_rate: number | null, decay_rate: number}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerMomentum {
      return new ComputeOptimizerMomentum($g.abi.libs_by_name.get(algebralib.name)!.mapped[1], learning_rate, decay_rate);
    }
    static create(learning_rate: number | null, decay_rate: number, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerMomentum {
      return new ComputeOptimizerMomentum($g.abi.libs_by_name.get(algebralib.name)!.mapped[1], learning_rate, decay_rate);
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
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        input2: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        output: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        transposeA: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        transposeB: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[4]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[4]] = v;
          },
        },
        alpha: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[5]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[5]] = v;
          },
        },
        beta: {
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

    static transpose_def($g: $sdk.GreyCat = globalThis.greycat.default): boolean {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[2];
      return  t.static_values[0] as boolean;
    }
    static alpha_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[2];
      return  t.static_values[1] as number;
    }
    static beta_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[2];
      return  t.static_values[2] as number;
    }
    static createFrom({input, input2, output, transposeA, transposeB, alpha, beta}: {input: string, input2: string, output: string, transposeA: boolean, transposeB: boolean, alpha: number, beta: number}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationMatMul {
      return new ComputeOperationMatMul($g.abi.libs_by_name.get(algebralib.name)!.mapped[2], input, input2, output, transposeA, transposeB, alpha, beta);
    }
    static create(input: string, input2: string, output: string, transposeA: boolean, transposeB: boolean, alpha: number, beta: number, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationMatMul {
      return new ComputeOperationMatMul($g.abi.libs_by_name.get(algebralib.name)!.mapped[2], input, input2, output, transposeA, transposeB, alpha, beta);
    }
  }

  export class ComputeOperationScale extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationScale';

    input: string;
    output: string;
    alpha: number;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        alpha: {
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

    static createFrom({input, output, alpha}: {input: string, output: string, alpha: number}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationScale {
      return new ComputeOperationScale($g.abi.libs_by_name.get(algebralib.name)!.mapped[3], input, output, alpha);
    }
    static create(input: string, output: string, alpha: number, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationScale {
      return new ComputeOperationScale($g.abi.libs_by_name.get(algebralib.name)!.mapped[3], input, output, alpha);
    }
  }

  export class ComputeOperationFilter extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationFilter';

    input: string;
    output: string;
    mask: string;
    nbOutputs: bigint | number;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        mask: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        nbOutputs: {
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

    static createFrom({input, output, mask, nbOutputs}: {input: string, output: string, mask: string, nbOutputs: bigint | number}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationFilter {
      return new ComputeOperationFilter($g.abi.libs_by_name.get(algebralib.name)!.mapped[4], input, output, mask, nbOutputs);
    }
    static create(input: string, output: string, mask: string, nbOutputs: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationFilter {
      return new ComputeOperationFilter($g.abi.libs_by_name.get(algebralib.name)!.mapped[4], input, output, mask, nbOutputs);
    }
  }

  export class ComputeVarProxy extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeVarProxy';

    name: string;
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
      });
    }

    static createFrom({name}: {name: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeVarProxy {
      return new ComputeVarProxy($g.abi.libs_by_name.get(algebralib.name)!.mapped[5], name);
    }
    static create(name: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeVarProxy {
      return new ComputeVarProxy($g.abi.libs_by_name.get(algebralib.name)!.mapped[5], name);
    }
  }

  export class ComputeOperationEuclidean extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationEuclidean';

    input: string;
    input2: string;
    output: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        input2: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        output: {
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

    static createFrom({input, input2, output}: {input: string, input2: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationEuclidean {
      return new ComputeOperationEuclidean($g.abi.libs_by_name.get(algebralib.name)!.mapped[6], input, input2, output);
    }
    static create(input: string, input2: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationEuclidean {
      return new ComputeOperationEuclidean($g.abi.libs_by_name.get(algebralib.name)!.mapped[6], input, input2, output);
    }
  }

  export class ComputeRegularizer extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeRegularizer';

    l1: number;
    l2: number;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        l1: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        l2: {
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

    static createFrom({l1, l2}: {l1: number, l2: number}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeRegularizer {
      return new ComputeRegularizer($g.abi.libs_by_name.get(algebralib.name)!.mapped[7], l1, l2);
    }
    static create(l1: number, l2: number, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeRegularizer {
      return new ComputeRegularizer($g.abi.libs_by_name.get(algebralib.name)!.mapped[7], l1, l2);
    }
  }

  export class ComputeOperationAdd extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationAdd';

    input: string;
    input2: string;
    output: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        input2: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        output: {
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

    static createFrom({input, input2, output}: {input: string, input2: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAdd {
      return new ComputeOperationAdd($g.abi.libs_by_name.get(algebralib.name)!.mapped[8], input, input2, output);
    }
    static create(input: string, input2: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAdd {
      return new ComputeOperationAdd($g.abi.libs_by_name.get(algebralib.name)!.mapped[8], input, input2, output);
    }
  }

  export class ComputeOperationSoftmax extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationSoftmax';

    input: string;
    output: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
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

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSoftmax {
      return new ComputeOperationSoftmax($g.abi.libs_by_name.get(algebralib.name)!.mapped[9], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSoftmax {
      return new ComputeOperationSoftmax($g.abi.libs_by_name.get(algebralib.name)!.mapped[9], input, output);
    }
  }

  export class ComputeOptimizer extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOptimizer';

    learning_rate: number | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        learning_rate: {
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

  }

  export class ComputeInitializerXavier extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerXavier';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerXavier {
      return new ComputeInitializerXavier($g.abi.libs_by_name.get(algebralib.name)!.mapped[11]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerXavier {
      return new ComputeInitializerXavier($g.abi.libs_by_name.get(algebralib.name)!.mapped[11]);
    }
  }

  export class ComputeModel extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeModel';

    layers: globalThis.Array<compute.ComputeLayer>;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        layers: {
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

    static createFrom({layers}: {layers: globalThis.Array<compute.ComputeLayer>}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeModel {
      return new ComputeModel($g.abi.libs_by_name.get(algebralib.name)!.mapped[12], layers);
    }
    static create(layers: globalThis.Array<compute.ComputeLayer>, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeModel {
      return new ComputeModel($g.abi.libs_by_name.get(algebralib.name)!.mapped[12], layers);
    }
  }

  export class ComputeLayerPCAScaler extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeLayerPCAScaler';

    name: string;
    type: $sdk.std.core.TensorType;
    inverse_transform: boolean;
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
        type: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        inverse_transform: {
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

    static var_input_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[13];
      return  t.static_values[0] as string;
    }
    static var_output_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[13];
      return  t.static_values[1] as string;
    }
    static var_avg_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[13];
      return  t.static_values[2] as string;
    }
    static var_std_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[13];
      return  t.static_values[3] as string;
    }
    static var_space_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[13];
      return  t.static_values[4] as string;
    }
    static createFrom({name, type, inverse_transform}: {name: string, type: $sdk.std.core.TensorType, inverse_transform: boolean}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerPCAScaler {
      return new ComputeLayerPCAScaler($g.abi.libs_by_name.get(algebralib.name)!.mapped[13], name, type, inverse_transform);
    }
    static create(name: string, type: $sdk.std.core.TensorType, inverse_transform: boolean, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerPCAScaler {
      return new ComputeLayerPCAScaler($g.abi.libs_by_name.get(algebralib.name)!.mapped[13], name, type, inverse_transform);
    }
  }

  export class ComputeOperationHardSigmoid extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationHardSigmoid';

    input: string;
    output: string;
    slope: number | null;
    shift: number | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        slope: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        shift: {
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

    static slope_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[14];
      return  t.static_values[0] as number;
    }
    static shift_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[14];
      return  t.static_values[1] as number;
    }
    static createFrom({input, output, slope, shift}: {input: string, output: string, slope: number | null, shift: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationHardSigmoid {
      return new ComputeOperationHardSigmoid($g.abi.libs_by_name.get(algebralib.name)!.mapped[14], input, output, slope, shift);
    }
    static create(input: string, output: string, slope: number | null, shift: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationHardSigmoid {
      return new ComputeOperationHardSigmoid($g.abi.libs_by_name.get(algebralib.name)!.mapped[14], input, output, slope, shift);
    }
  }

  export class ComputeInitializerSigmoidUniform extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerSigmoidUniform';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerSigmoidUniform {
      return new ComputeInitializerSigmoidUniform($g.abi.libs_by_name.get(algebralib.name)!.mapped[15]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerSigmoidUniform {
      return new ComputeInitializerSigmoidUniform($g.abi.libs_by_name.get(algebralib.name)!.mapped[15]);
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
        reduction: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        loss_type: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        has_class_weights: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        calculate_probabilities: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[4]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[4]] = v;
          },
        },
        from_logits: {
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

    static var_class_weights_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[16];
      return  t.static_values[0] as string;
    }
    static var_predicted_classes_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[16];
      return  t.static_values[1] as string;
    }
    static var_probabilities_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[16];
      return  t.static_values[2] as string;
    }
    static var_sum_reduce_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[16];
      return  t.static_values[3] as string;
    }
    static createFrom({name, reduction, loss_type, has_class_weights, calculate_probabilities, from_logits}: {name: string, reduction: compute.ComputeReduction | null, loss_type: compute.ComputeClassificationLoss, has_class_weights: boolean, calculate_probabilities: boolean, from_logits: boolean}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerLossClassification {
      return new ComputeLayerLossClassification($g.abi.libs_by_name.get(algebralib.name)!.mapped[16], name, reduction, loss_type, has_class_weights, calculate_probabilities, from_logits);
    }
    static create(name: string, reduction: compute.ComputeReduction | null, loss_type: compute.ComputeClassificationLoss, has_class_weights: boolean, calculate_probabilities: boolean, from_logits: boolean, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerLossClassification {
      return new ComputeLayerLossClassification($g.abi.libs_by_name.get(algebralib.name)!.mapped[16], name, reduction, loss_type, has_class_weights, calculate_probabilities, from_logits);
    }
  }

  export class ComputeOperationAcos extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationAcos';

    input: string;
    output: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
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

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAcos {
      return new ComputeOperationAcos($g.abi.libs_by_name.get(algebralib.name)!.mapped[17], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAcos {
      return new ComputeOperationAcos($g.abi.libs_by_name.get(algebralib.name)!.mapped[17], input, output);
    }
  }

  export class ComputeOperationNeg extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationNeg';

    input: string;
    output: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
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

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationNeg {
      return new ComputeOperationNeg($g.abi.libs_by_name.get(algebralib.name)!.mapped[18], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationNeg {
      return new ComputeOperationNeg($g.abi.libs_by_name.get(algebralib.name)!.mapped[18], input, output);
    }
  }

  export class ComputeInitializerUniformOut extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerUniformOut';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerUniformOut {
      return new ComputeInitializerUniformOut($g.abi.libs_by_name.get(algebralib.name)!.mapped[19]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerUniformOut {
      return new ComputeInitializerUniformOut($g.abi.libs_by_name.get(algebralib.name)!.mapped[19]);
    }
  }

  export class ComputeOptimizerNadam extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOptimizerNadam';

    learning_rate: number | null;
    beta1: number | null;
    beta2: number | null;
    smooth_epsilon: number | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        learning_rate: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        beta1: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        beta2: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        smooth_epsilon: {
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

    static learning_rate_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[20];
      return  t.static_values[0] as number;
    }
    static beta1_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[20];
      return  t.static_values[1] as number;
    }
    static beta2_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[20];
      return  t.static_values[2] as number;
    }
    static smooth_epsilon_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[20];
      return  t.static_values[3] as number;
    }
    static createFrom({learning_rate, beta1, beta2, smooth_epsilon}: {learning_rate: number | null, beta1: number | null, beta2: number | null, smooth_epsilon: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerNadam {
      return new ComputeOptimizerNadam($g.abi.libs_by_name.get(algebralib.name)!.mapped[20], learning_rate, beta1, beta2, smooth_epsilon);
    }
    static create(learning_rate: number | null, beta1: number | null, beta2: number | null, smooth_epsilon: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerNadam {
      return new ComputeOptimizerNadam($g.abi.libs_by_name.get(algebralib.name)!.mapped[20], learning_rate, beta1, beta2, smooth_epsilon);
    }
  }

  export class ComputeOperationArgMax extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationArgMax';

    input: string;
    output: string;
    output2: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        output2: {
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

    static createFrom({input, output, output2}: {input: string, output: string, output2: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationArgMax {
      return new ComputeOperationArgMax($g.abi.libs_by_name.get(algebralib.name)!.mapped[21], input, output, output2);
    }
    static create(input: string, output: string, output2: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationArgMax {
      return new ComputeOperationArgMax($g.abi.libs_by_name.get(algebralib.name)!.mapped[21], input, output, output2);
    }
  }

  export class ComputeOptimizerAdaMax extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOptimizerAdaMax';

    learning_rate: number | null;
    beta1: number | null;
    beta2: number | null;
    smooth_epsilon: number | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        learning_rate: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        beta1: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        beta2: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        smooth_epsilon: {
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

    static learning_rate_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[22];
      return  t.static_values[0] as number;
    }
    static beta1_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[22];
      return  t.static_values[1] as number;
    }
    static beta2_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[22];
      return  t.static_values[2] as number;
    }
    static smooth_epsilon_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[22];
      return  t.static_values[3] as number;
    }
    static createFrom({learning_rate, beta1, beta2, smooth_epsilon}: {learning_rate: number | null, beta1: number | null, beta2: number | null, smooth_epsilon: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerAdaMax {
      return new ComputeOptimizerAdaMax($g.abi.libs_by_name.get(algebralib.name)!.mapped[22], learning_rate, beta1, beta2, smooth_epsilon);
    }
    static create(learning_rate: number | null, beta1: number | null, beta2: number | null, smooth_epsilon: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerAdaMax {
      return new ComputeOptimizerAdaMax($g.abi.libs_by_name.get(algebralib.name)!.mapped[22], learning_rate, beta1, beta2, smooth_epsilon);
    }
  }

  export class ComputeRegressionLoss extends $sdk.GCEnum {
    static readonly _type = 'compute::ComputeRegressionLoss';

    constructor(type: $sdk.AbiType, offset: number, public key: ComputeRegressionLoss.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static square($g: $sdk.GreyCat = globalThis.greycat.default): ComputeRegressionLoss {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[23];
      return t.enum_values![t.generated_offsets[0]];
    }
    static abs($g: $sdk.GreyCat = globalThis.greycat.default): ComputeRegressionLoss {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[23];
      return t.enum_values![t.generated_offsets[1]];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): ComputeRegressionLoss[] {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[23];
      return t.enum_values!;
    }
  }

  export namespace ComputeRegressionLoss  {
    export type Field = 'square'|'abs';
  }
  export class ComputeOperationExp extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationExp';

    input: string;
    output: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
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

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationExp {
      return new ComputeOperationExp($g.abi.libs_by_name.get(algebralib.name)!.mapped[24], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationExp {
      return new ComputeOperationExp($g.abi.libs_by_name.get(algebralib.name)!.mapped[24], input, output);
    }
  }

  export class ComputeOperationSigmoid extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationSigmoid';

    input: string;
    output: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
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

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSigmoid {
      return new ComputeOperationSigmoid($g.abi.libs_by_name.get(algebralib.name)!.mapped[25], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSigmoid {
      return new ComputeOperationSigmoid($g.abi.libs_by_name.get(algebralib.name)!.mapped[25], input, output);
    }
  }

  export class ComputeOperationArg extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationArg';

    input: string;
    output: string;
    output2: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        output2: {
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

  export class ComputeOperationAtanh extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationAtanh';

    input: string;
    output: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
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

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAtanh {
      return new ComputeOperationAtanh($g.abi.libs_by_name.get(algebralib.name)!.mapped[27], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAtanh {
      return new ComputeOperationAtanh($g.abi.libs_by_name.get(algebralib.name)!.mapped[27], input, output);
    }
  }

  export class ComputeVarConst extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeVarConst';

    name: string;
    type: $sdk.std.core.TensorType;
    shape: globalThis.Array<bigint | number>;
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
        type: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        shape: {
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

    static createFrom({name, type, shape}: {name: string, type: $sdk.std.core.TensorType, shape: globalThis.Array<bigint | number>}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeVarConst {
      return new ComputeVarConst($g.abi.libs_by_name.get(algebralib.name)!.mapped[28], name, type, shape);
    }
    static create(name: string, type: $sdk.std.core.TensorType, shape: globalThis.Array<bigint | number>, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeVarConst {
      return new ComputeVarConst($g.abi.libs_by_name.get(algebralib.name)!.mapped[28], name, type, shape);
    }
  }

  export class ComputeLayerLoss extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeLayerLoss';

    name: string;
    reduction: compute.ComputeReduction | null;
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
        reduction: {
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

    static var_computed_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[29];
      return  t.static_values[0] as string;
    }
    static var_expected_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[29];
      return  t.static_values[1] as string;
    }
    static var_loss_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[29];
      return  t.static_values[2] as string;
    }
  }

  export class ComputeOperationSoftplus extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationSoftplus';

    input: string;
    output: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
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

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSoftplus {
      return new ComputeOperationSoftplus($g.abi.libs_by_name.get(algebralib.name)!.mapped[30], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSoftplus {
      return new ComputeOperationSoftplus($g.abi.libs_by_name.get(algebralib.name)!.mapped[30], input, output);
    }
  }

  export class ComputeVarInOut extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeVarInOut';

    name: string;
    type: $sdk.std.core.TensorType;
    shape: globalThis.Array<bigint | number>;
    with_grad: boolean;
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
        type: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        shape: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        with_grad: {
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

    static createFrom({name, type, shape, with_grad}: {name: string, type: $sdk.std.core.TensorType, shape: globalThis.Array<bigint | number>, with_grad: boolean}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeVarInOut {
      return new ComputeVarInOut($g.abi.libs_by_name.get(algebralib.name)!.mapped[31], name, type, shape, with_grad);
    }
    static create(name: string, type: $sdk.std.core.TensorType, shape: globalThis.Array<bigint | number>, with_grad: boolean, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeVarInOut {
      return new ComputeVarInOut($g.abi.libs_by_name.get(algebralib.name)!.mapped[31], name, type, shape, with_grad);
    }
  }

  export class ComputeOperationLeCunTanh extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationLeCunTanh';

    input: string;
    output: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
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

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationLeCunTanh {
      return new ComputeOperationLeCunTanh($g.abi.libs_by_name.get(algebralib.name)!.mapped[32], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationLeCunTanh {
      return new ComputeOperationLeCunTanh($g.abi.libs_by_name.get(algebralib.name)!.mapped[32], input, output);
    }
  }

  export class ComputeLayerLossRegression extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeLayerLossRegression';

    name: string;
    reduction: compute.ComputeReduction | null;
    loss_type: compute.ComputeRegressionLoss;
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
        reduction: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        loss_type: {
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

    static createFrom({name, reduction, loss_type}: {name: string, reduction: compute.ComputeReduction | null, loss_type: compute.ComputeRegressionLoss}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerLossRegression {
      return new ComputeLayerLossRegression($g.abi.libs_by_name.get(algebralib.name)!.mapped[33], name, reduction, loss_type);
    }
    static create(name: string, reduction: compute.ComputeReduction | null, loss_type: compute.ComputeRegressionLoss, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerLossRegression {
      return new ComputeLayerLossRegression($g.abi.libs_by_name.get(algebralib.name)!.mapped[33], name, reduction, loss_type);
    }
  }

  export class ComputeOperationAsin extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationAsin';

    input: string;
    output: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
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

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAsin {
      return new ComputeOperationAsin($g.abi.libs_by_name.get(algebralib.name)!.mapped[34], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAsin {
      return new ComputeOperationAsin($g.abi.libs_by_name.get(algebralib.name)!.mapped[34], input, output);
    }
  }

  export class ComputeLayerCustom extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeLayerCustom';

    name: string;
    ops: globalThis.Array<compute.ComputeOperation>;
    vars: globalThis.Array<compute.ComputeVariable>;
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
        ops: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        vars: {
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

    static createFrom({name, ops, vars}: {name: string, ops: globalThis.Array<compute.ComputeOperation>, vars: globalThis.Array<compute.ComputeVariable>}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerCustom {
      return new ComputeLayerCustom($g.abi.libs_by_name.get(algebralib.name)!.mapped[35], name, ops, vars);
    }
    static create(name: string, ops: globalThis.Array<compute.ComputeOperation>, vars: globalThis.Array<compute.ComputeVariable>, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerCustom {
      return new ComputeLayerCustom($g.abi.libs_by_name.get(algebralib.name)!.mapped[35], name, ops, vars);
    }
  }

  export class ComputeLayerFilter extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeLayerFilter';

    name: string;
    type: $sdk.std.core.TensorType;
    inputs: bigint | number;
    outputs: bigint | number;
    maskValues: globalThis.Array<bigint | number>;
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
        type: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        inputs: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        outputs: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        maskValues: {
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

    static var_input_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[36];
      return  t.static_values[0] as string;
    }
    static var_output_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[36];
      return  t.static_values[1] as string;
    }
    static var_mask_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[36];
      return  t.static_values[2] as string;
    }
    static createFrom({name, type, inputs, outputs, maskValues}: {name: string, type: $sdk.std.core.TensorType, inputs: bigint | number, outputs: bigint | number, maskValues: globalThis.Array<bigint | number>}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerFilter {
      return new ComputeLayerFilter($g.abi.libs_by_name.get(algebralib.name)!.mapped[36], name, type, inputs, outputs, maskValues);
    }
    static create(name: string, type: $sdk.std.core.TensorType, inputs: bigint | number, outputs: bigint | number, maskValues: globalThis.Array<bigint | number>, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerFilter {
      return new ComputeLayerFilter($g.abi.libs_by_name.get(algebralib.name)!.mapped[36], name, type, inputs, outputs, maskValues);
    }
  }

  export class ComputeCounter extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeCounter';

    epoch: bigint | number;
    optimizationSteps: bigint | number;
    batchNotOptimized: bigint | number;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        epoch: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        optimizationSteps: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        batchNotOptimized: {
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

    static createFrom({epoch, optimizationSteps, batchNotOptimized}: {epoch: bigint | number, optimizationSteps: bigint | number, batchNotOptimized: bigint | number}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeCounter {
      return new ComputeCounter($g.abi.libs_by_name.get(algebralib.name)!.mapped[37], epoch, optimizationSteps, batchNotOptimized);
    }
    static create(epoch: bigint | number, optimizationSteps: bigint | number, batchNotOptimized: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeCounter {
      return new ComputeCounter($g.abi.libs_by_name.get(algebralib.name)!.mapped[37], epoch, optimizationSteps, batchNotOptimized);
    }
  }

  export class ComputeOperationSign extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationSign';

    input: string;
    output: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
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

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSign {
      return new ComputeOperationSign($g.abi.libs_by_name.get(algebralib.name)!.mapped[38], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSign {
      return new ComputeOperationSign($g.abi.libs_by_name.get(algebralib.name)!.mapped[38], input, output);
    }
  }

  export class ComputeInitializerNormalIn extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerNormalIn';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerNormalIn {
      return new ComputeInitializerNormalIn($g.abi.libs_by_name.get(algebralib.name)!.mapped[39]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerNormalIn {
      return new ComputeInitializerNormalIn($g.abi.libs_by_name.get(algebralib.name)!.mapped[39]);
    }
  }

  export class ComputeLayerSeq extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeLayerSeq';

    name: string;
    calls: globalThis.Array<compute.ComputeLayerCall>;
    optimizer: compute.ComputeOptimizer | null;
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
        calls: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        optimizer: {
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

    static createFrom({name, calls, optimizer}: {name: string, calls: globalThis.Array<compute.ComputeLayerCall>, optimizer: compute.ComputeOptimizer | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerSeq {
      return new ComputeLayerSeq($g.abi.libs_by_name.get(algebralib.name)!.mapped[40], name, calls, optimizer);
    }
    static create(name: string, calls: globalThis.Array<compute.ComputeLayerCall>, optimizer: compute.ComputeOptimizer | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerSeq {
      return new ComputeLayerSeq($g.abi.libs_by_name.get(algebralib.name)!.mapped[40], name, calls, optimizer);
    }
  }

  export class ComputeOptimizerFtrl extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOptimizerFtrl';

    learning_rate: number | null;
    lambda1: number | null;
    lambda2: number | null;
    beta: number | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        learning_rate: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        lambda1: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        lambda2: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        beta: {
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

    static learning_rate_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[41];
      return  t.static_values[0] as number;
    }
    static beta_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[41];
      return  t.static_values[1] as number;
    }
    static lambda1_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[41];
      return  t.static_values[2] as number;
    }
    static lambda2_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[41];
      return  t.static_values[3] as number;
    }
    static createFrom({learning_rate, lambda1, lambda2, beta}: {learning_rate: number | null, lambda1: number | null, lambda2: number | null, beta: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerFtrl {
      return new ComputeOptimizerFtrl($g.abi.libs_by_name.get(algebralib.name)!.mapped[41], learning_rate, lambda1, lambda2, beta);
    }
    static create(learning_rate: number | null, lambda1: number | null, lambda2: number | null, beta: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerFtrl {
      return new ComputeOptimizerFtrl($g.abi.libs_by_name.get(algebralib.name)!.mapped[41], learning_rate, lambda1, lambda2, beta);
    }
  }

  export class ComputeOperationSelu extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationSelu';

    input: string;
    output: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
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

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSelu {
      return new ComputeOperationSelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[42], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSelu {
      return new ComputeOperationSelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[42], input, output);
    }
  }

  export class ComputeOperationClip extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationClip';

    input: string;
    output: string;
    min: number | null;
    max: number | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        min: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        max: {
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

    static createFrom({input, output, min, max}: {input: string, output: string, min: number | null, max: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationClip {
      return new ComputeOperationClip($g.abi.libs_by_name.get(algebralib.name)!.mapped[43], input, output, min, max);
    }
    static create(input: string, output: string, min: number | null, max: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationClip {
      return new ComputeOperationClip($g.abi.libs_by_name.get(algebralib.name)!.mapped[43], input, output, min, max);
    }
  }

  export class ComputeInitializer extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializer';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

  }

  export class ComputeOptimizerAdaGrad extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOptimizerAdaGrad';

    learning_rate: number | null;
    initial_accumulator: number | null;
    smooth_epsilon: number | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        learning_rate: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        initial_accumulator: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        smooth_epsilon: {
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

    static learning_rate_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[45];
      return  t.static_values[0] as number;
    }
    static initial_accumulator_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[45];
      return  t.static_values[1] as number;
    }
    static smooth_epsilon_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[45];
      return  t.static_values[2] as number;
    }
    static createFrom({learning_rate, initial_accumulator, smooth_epsilon}: {learning_rate: number | null, initial_accumulator: number | null, smooth_epsilon: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerAdaGrad {
      return new ComputeOptimizerAdaGrad($g.abi.libs_by_name.get(algebralib.name)!.mapped[45], learning_rate, initial_accumulator, smooth_epsilon);
    }
    static create(learning_rate: number | null, initial_accumulator: number | null, smooth_epsilon: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerAdaGrad {
      return new ComputeOptimizerAdaGrad($g.abi.libs_by_name.get(algebralib.name)!.mapped[45], learning_rate, initial_accumulator, smooth_epsilon);
    }
  }

  export class ComputeOperationSum extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationSum';

    input: string;
    output: string;
    axis: bigint | number | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        axis: {
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

    static createFrom({input, output, axis}: {input: string, output: string, axis: bigint | number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSum {
      return new ComputeOperationSum($g.abi.libs_by_name.get(algebralib.name)!.mapped[46], input, output, axis);
    }
    static create(input: string, output: string, axis: bigint | number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSum {
      return new ComputeOperationSum($g.abi.libs_by_name.get(algebralib.name)!.mapped[46], input, output, axis);
    }
  }

  export class ComputeOptimizerAdaDelta extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOptimizerAdaDelta';

    learning_rate: number | null;
    decay_rate: number | null;
    smooth_epsilon: number | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        learning_rate: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        decay_rate: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        smooth_epsilon: {
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

    static learning_rate_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[47];
      return  t.static_values[0] as number;
    }
    static decay_rate_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[47];
      return  t.static_values[1] as number;
    }
    static smooth_epsilon_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[47];
      return  t.static_values[2] as number;
    }
    static createFrom({learning_rate, decay_rate, smooth_epsilon}: {learning_rate: number | null, decay_rate: number | null, smooth_epsilon: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerAdaDelta {
      return new ComputeOptimizerAdaDelta($g.abi.libs_by_name.get(algebralib.name)!.mapped[47], learning_rate, decay_rate, smooth_epsilon);
    }
    static create(learning_rate: number | null, decay_rate: number | null, smooth_epsilon: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerAdaDelta {
      return new ComputeOptimizerAdaDelta($g.abi.libs_by_name.get(algebralib.name)!.mapped[47], learning_rate, decay_rate, smooth_epsilon);
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
        bias_initializer: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        weight_regularizer: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        bias_regularizer: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        type: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[4]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[4]] = v;
          },
        },
        use_bias: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[5]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[5]] = v;
          },
        },
        return_sequences: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[6]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[6]] = v;
          },
        },
        bidirectional: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[7]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[7]] = v;
          },
        },
        auto_init_states: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[8]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[8]] = v;
          },
        },
        inputs: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[9]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[9]] = v;
          },
        },
        outputs: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[10]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[10]] = v;
          },
        },
        layers: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[11]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[11]] = v;
          },
        },
        sequences: {
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

    static var_input_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[48];
      return  t.static_values[0] as string;
    }
    static var_output_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[48];
      return  t.static_values[1] as string;
    }
    static var_hx_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[48];
      return  t.static_values[2] as string;
    }
    static var_cx_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[48];
      return  t.static_values[3] as string;
    }
    static var_hy_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[48];
      return  t.static_values[4] as string;
    }
    static var_cy_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[48];
      return  t.static_values[5] as string;
    }
    static var_weight_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[48];
      return  t.static_values[6] as string;
    }
    static var_bias_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[48];
      return  t.static_values[7] as string;
    }
    static var_internal_i_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[48];
      return  t.static_values[8] as string;
    }
    static var_internal_f_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[48];
      return  t.static_values[9] as string;
    }
    static var_internal_cp_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[48];
      return  t.static_values[10] as string;
    }
    static var_internal_o_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[48];
      return  t.static_values[11] as string;
    }
    static var_internal_h_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[48];
      return  t.static_values[12] as string;
    }
    static var_internal_c_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[48];
      return  t.static_values[13] as string;
    }
    static var_internal_mult_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[48];
      return  t.static_values[14] as string;
    }
    static var_internal_output_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[48];
      return  t.static_values[15] as string;
    }
    static createFrom({name, bias_initializer, weight_regularizer, bias_regularizer, type, use_bias, return_sequences, bidirectional, auto_init_states, inputs, outputs, layers, sequences}: {name: string, bias_initializer: compute.ComputeInitializer | null, weight_regularizer: compute.ComputeRegularizer | null, bias_regularizer: compute.ComputeRegularizer | null, type: $sdk.std.core.TensorType, use_bias: boolean | null, return_sequences: boolean | null, bidirectional: boolean | null, auto_init_states: boolean | null, inputs: bigint | number, outputs: bigint | number, layers: bigint | number, sequences: bigint | number}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerLSTM {
      return new ComputeLayerLSTM($g.abi.libs_by_name.get(algebralib.name)!.mapped[48], name, bias_initializer, weight_regularizer, bias_regularizer, type, use_bias, return_sequences, bidirectional, auto_init_states, inputs, outputs, layers, sequences);
    }
    static create(name: string, bias_initializer: compute.ComputeInitializer | null, weight_regularizer: compute.ComputeRegularizer | null, bias_regularizer: compute.ComputeRegularizer | null, type: $sdk.std.core.TensorType, use_bias: boolean | null, return_sequences: boolean | null, bidirectional: boolean | null, auto_init_states: boolean | null, inputs: bigint | number, outputs: bigint | number, layers: bigint | number, sequences: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerLSTM {
      return new ComputeLayerLSTM($g.abi.libs_by_name.get(algebralib.name)!.mapped[48], name, bias_initializer, weight_regularizer, bias_regularizer, type, use_bias, return_sequences, bidirectional, auto_init_states, inputs, outputs, layers, sequences);
    }
  }

  export class ComputeActivationTanh extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeActivationTanh';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationTanh {
      return new ComputeActivationTanh($g.abi.libs_by_name.get(algebralib.name)!.mapped[49]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationTanh {
      return new ComputeActivationTanh($g.abi.libs_by_name.get(algebralib.name)!.mapped[49]);
    }
  }

  export class ComputeInitializerXavierUniform extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerXavierUniform';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerXavierUniform {
      return new ComputeInitializerXavierUniform($g.abi.libs_by_name.get(algebralib.name)!.mapped[50]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerXavierUniform {
      return new ComputeInitializerXavierUniform($g.abi.libs_by_name.get(algebralib.name)!.mapped[50]);
    }
  }

  export class ComputeOperationSqrt extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationSqrt';

    input: string;
    output: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
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

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSqrt {
      return new ComputeOperationSqrt($g.abi.libs_by_name.get(algebralib.name)!.mapped[51], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSqrt {
      return new ComputeOperationSqrt($g.abi.libs_by_name.get(algebralib.name)!.mapped[51], input, output);
    }
  }

  export class ComputeActivationExp extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeActivationExp';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationExp {
      return new ComputeActivationExp($g.abi.libs_by_name.get(algebralib.name)!.mapped[52]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationExp {
      return new ComputeActivationExp($g.abi.libs_by_name.get(algebralib.name)!.mapped[52]);
    }
  }

  export class ComputeInitializerLSTM extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerLSTM';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerLSTM {
      return new ComputeInitializerLSTM($g.abi.libs_by_name.get(algebralib.name)!.mapped[53]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerLSTM {
      return new ComputeInitializerLSTM($g.abi.libs_by_name.get(algebralib.name)!.mapped[53]);
    }
  }

  export class ComputeOperationRaiseToPower extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationRaiseToPower';

    input: string;
    output: string;
    power: number;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        power: {
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

    static createFrom({input, output, power}: {input: string, output: string, power: number}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationRaiseToPower {
      return new ComputeOperationRaiseToPower($g.abi.libs_by_name.get(algebralib.name)!.mapped[54], input, output, power);
    }
    static create(input: string, output: string, power: number, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationRaiseToPower {
      return new ComputeOperationRaiseToPower($g.abi.libs_by_name.get(algebralib.name)!.mapped[54], input, output, power);
    }
  }

  export class ComputeOperationElu extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationElu';

    input: string;
    output: string;
    alpha: number | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        alpha: {
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

    static alpha_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[55];
      return  t.static_values[0] as number;
    }
    static createFrom({input, output, alpha}: {input: string, output: string, alpha: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationElu {
      return new ComputeOperationElu($g.abi.libs_by_name.get(algebralib.name)!.mapped[55], input, output, alpha);
    }
    static create(input: string, output: string, alpha: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationElu {
      return new ComputeOperationElu($g.abi.libs_by_name.get(algebralib.name)!.mapped[55], input, output, alpha);
    }
  }

  export class ComputeReduction extends $sdk.GCEnum {
    static readonly _type = 'compute::ComputeReduction';

    constructor(type: $sdk.AbiType, offset: number, public key: ComputeReduction.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static auto($g: $sdk.GreyCat = globalThis.greycat.default): ComputeReduction {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[56];
      return t.enum_values![t.generated_offsets[0]];
    }
    static none($g: $sdk.GreyCat = globalThis.greycat.default): ComputeReduction {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[56];
      return t.enum_values![t.generated_offsets[1]];
    }
    static sum($g: $sdk.GreyCat = globalThis.greycat.default): ComputeReduction {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[56];
      return t.enum_values![t.generated_offsets[2]];
    }
    static mean($g: $sdk.GreyCat = globalThis.greycat.default): ComputeReduction {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[56];
      return t.enum_values![t.generated_offsets[3]];
    }
    static disabled($g: $sdk.GreyCat = globalThis.greycat.default): ComputeReduction {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[56];
      return t.enum_values![t.generated_offsets[4]];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): ComputeReduction[] {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[56];
      return t.enum_values!;
    }
  }

  export namespace ComputeReduction  {
    export type Field = 'auto'|'none'|'sum'|'mean'|'disabled';
  }
  export class ComputeOperationLogSoftmax extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationLogSoftmax';

    input: string;
    output: string;
    axis: bigint | number | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        axis: {
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

    static createFrom({input, output, axis}: {input: string, output: string, axis: bigint | number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationLogSoftmax {
      return new ComputeOperationLogSoftmax($g.abi.libs_by_name.get(algebralib.name)!.mapped[57], input, output, axis);
    }
    static create(input: string, output: string, axis: bigint | number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationLogSoftmax {
      return new ComputeOperationLogSoftmax($g.abi.libs_by_name.get(algebralib.name)!.mapped[57], input, output, axis);
    }
  }

  export class ComputeOperation1In1Out extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperation1In1Out';

    input: string;
    output: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
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

  }

  export class ComputeOperationRelu extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationRelu';

    input: string;
    output: string;
    max_value: number | null;
    threshold: number | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        max_value: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        threshold: {
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

    static threshold_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[59];
      return  t.static_values[0] as number;
    }
    static createFrom({input, output, max_value, threshold}: {input: string, output: string, max_value: number | null, threshold: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationRelu {
      return new ComputeOperationRelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[59], input, output, max_value, threshold);
    }
    static create(input: string, output: string, max_value: number | null, threshold: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationRelu {
      return new ComputeOperationRelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[59], input, output, max_value, threshold);
    }
  }

  export class ComputeActivationElu extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeActivationElu';

    alpha: number | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        alpha: {
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

    static alpha_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[60];
      return  t.static_values[0] as number;
    }
    static createFrom({alpha}: {alpha: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationElu {
      return new ComputeActivationElu($g.abi.libs_by_name.get(algebralib.name)!.mapped[60], alpha);
    }
    static create(alpha: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationElu {
      return new ComputeActivationElu($g.abi.libs_by_name.get(algebralib.name)!.mapped[60], alpha);
    }
  }

  export class ComputeBinding extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeBinding';

    src_layer_name: string;
    src_var_name: string;
    target_var_name: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        src_layer_name: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        src_var_name: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        target_var_name: {
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

    static createFrom({src_layer_name, src_var_name, target_var_name}: {src_layer_name: string, src_var_name: string, target_var_name: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeBinding {
      return new ComputeBinding($g.abi.libs_by_name.get(algebralib.name)!.mapped[61], src_layer_name, src_var_name, target_var_name);
    }
    static create(src_layer_name: string, src_var_name: string, target_var_name: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeBinding {
      return new ComputeBinding($g.abi.libs_by_name.get(algebralib.name)!.mapped[61], src_layer_name, src_var_name, target_var_name);
    }
  }

  export class ComputeVariable extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeVariable';

    name: string;
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
      });
    }

  }

  export class ComputeLayerCall extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeLayerCall';

    layer_name: string;
    bindings: globalThis.Array<compute.ComputeBinding>;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        layer_name: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        bindings: {
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

    static createFrom({layer_name, bindings}: {layer_name: string, bindings: globalThis.Array<compute.ComputeBinding>}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerCall {
      return new ComputeLayerCall($g.abi.libs_by_name.get(algebralib.name)!.mapped[63], layer_name, bindings);
    }
    static create(layer_name: string, bindings: globalThis.Array<compute.ComputeBinding>, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerCall {
      return new ComputeLayerCall($g.abi.libs_by_name.get(algebralib.name)!.mapped[63], layer_name, bindings);
    }
  }

  export class ComputeInitializerLeCunUniform extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerLeCunUniform';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerLeCunUniform {
      return new ComputeInitializerLeCunUniform($g.abi.libs_by_name.get(algebralib.name)!.mapped[64]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerLeCunUniform {
      return new ComputeInitializerLeCunUniform($g.abi.libs_by_name.get(algebralib.name)!.mapped[64]);
    }
  }

  export class ComputeLayer extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeLayer';

    name: string;
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
      });
    }

  }

  export class ComputeActivationSoftmax extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeActivationSoftmax';

    classes: string | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        classes: {
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

    static createFrom({classes}: {classes: string | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationSoftmax {
      return new ComputeActivationSoftmax($g.abi.libs_by_name.get(algebralib.name)!.mapped[66], classes);
    }
    static create(classes: string | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationSoftmax {
      return new ComputeActivationSoftmax($g.abi.libs_by_name.get(algebralib.name)!.mapped[66], classes);
    }
  }

  export class ComputeInitializerUniform extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerUniform';

    min: number;
    max: number;
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
      });
    }

    static createFrom({min, max}: {min: number, max: number}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerUniform {
      return new ComputeInitializerUniform($g.abi.libs_by_name.get(algebralib.name)!.mapped[67], min, max);
    }
    static create(min: number, max: number, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerUniform {
      return new ComputeInitializerUniform($g.abi.libs_by_name.get(algebralib.name)!.mapped[67], min, max);
    }
  }

  export class ComputeOperationDiv extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationDiv';

    input: string;
    input2: string;
    output: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        input2: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        output: {
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

    static createFrom({input, input2, output}: {input: string, input2: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationDiv {
      return new ComputeOperationDiv($g.abi.libs_by_name.get(algebralib.name)!.mapped[68], input, input2, output);
    }
    static create(input: string, input2: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationDiv {
      return new ComputeOperationDiv($g.abi.libs_by_name.get(algebralib.name)!.mapped[68], input, input2, output);
    }
  }

  export class ComputeActivationSoftplus extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeActivationSoftplus';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationSoftplus {
      return new ComputeActivationSoftplus($g.abi.libs_by_name.get(algebralib.name)!.mapped[69]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationSoftplus {
      return new ComputeActivationSoftplus($g.abi.libs_by_name.get(algebralib.name)!.mapped[69]);
    }
  }

  export class ComputeOperationArgMin extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationArgMin';

    input: string;
    output: string;
    output2: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        output2: {
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

    static createFrom({input, output, output2}: {input: string, output: string, output2: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationArgMin {
      return new ComputeOperationArgMin($g.abi.libs_by_name.get(algebralib.name)!.mapped[70], input, output, output2);
    }
    static create(input: string, output: string, output2: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationArgMin {
      return new ComputeOperationArgMin($g.abi.libs_by_name.get(algebralib.name)!.mapped[70], input, output, output2);
    }
  }

  export class ComputeOperationFill extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationFill';

    input: string;
    value: any;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
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

    static createFrom({input, value}: {input: string, value: any}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationFill {
      return new ComputeOperationFill($g.abi.libs_by_name.get(algebralib.name)!.mapped[71], input, value);
    }
    static create(input: string, value: any, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationFill {
      return new ComputeOperationFill($g.abi.libs_by_name.get(algebralib.name)!.mapped[71], input, value);
    }
  }

  export class ComputeInitializerUniformAvg extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerUniformAvg';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerUniformAvg {
      return new ComputeInitializerUniformAvg($g.abi.libs_by_name.get(algebralib.name)!.mapped[72]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerUniformAvg {
      return new ComputeInitializerUniformAvg($g.abi.libs_by_name.get(algebralib.name)!.mapped[72]);
    }
  }

  export class ComputeLayerStandardScaler extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeLayerStandardScaler';

    name: string;
    type: $sdk.std.core.TensorType;
    inverse_transform: boolean;
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
        type: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        inverse_transform: {
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

    static var_input_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[73];
      return  t.static_values[0] as string;
    }
    static var_output_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[73];
      return  t.static_values[1] as string;
    }
    static var_avg_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[73];
      return  t.static_values[2] as string;
    }
    static var_std_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[73];
      return  t.static_values[3] as string;
    }
    static createFrom({name, type, inverse_transform}: {name: string, type: $sdk.std.core.TensorType, inverse_transform: boolean}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerStandardScaler {
      return new ComputeLayerStandardScaler($g.abi.libs_by_name.get(algebralib.name)!.mapped[73], name, type, inverse_transform);
    }
    static create(name: string, type: $sdk.std.core.TensorType, inverse_transform: boolean, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerStandardScaler {
      return new ComputeLayerStandardScaler($g.abi.libs_by_name.get(algebralib.name)!.mapped[73], name, type, inverse_transform);
    }
  }

  export class ComputeInitializerReluUniform extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerReluUniform';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerReluUniform {
      return new ComputeInitializerReluUniform($g.abi.libs_by_name.get(algebralib.name)!.mapped[74]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerReluUniform {
      return new ComputeInitializerReluUniform($g.abi.libs_by_name.get(algebralib.name)!.mapped[74]);
    }
  }

  export class ComputeInitializerNormalOut extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerNormalOut';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerNormalOut {
      return new ComputeInitializerNormalOut($g.abi.libs_by_name.get(algebralib.name)!.mapped[75]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerNormalOut {
      return new ComputeInitializerNormalOut($g.abi.libs_by_name.get(algebralib.name)!.mapped[75]);
    }
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
        type: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        inputs: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        outputs: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        use_bias: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[4]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[4]] = v;
          },
        },
        weight_initializer: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[5]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[5]] = v;
          },
        },
        weight_regularizer: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[6]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[6]] = v;
          },
        },
        bias_initializer: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[7]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[7]] = v;
          },
        },
        bias_regularizer: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[8]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[8]] = v;
          },
        },
        activation: {
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

    static var_input_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[76];
      return  t.static_values[0] as string;
    }
    static var_output_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[76];
      return  t.static_values[1] as string;
    }
    static var_weight_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[76];
      return  t.static_values[2] as string;
    }
    static var_bias_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[76];
      return  t.static_values[3] as string;
    }
    static var_mult_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[76];
      return  t.static_values[4] as string;
    }
    static var_pre_activation_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[76];
      return  t.static_values[5] as string;
    }
    static createFrom({name, type, inputs, outputs, use_bias, weight_initializer, weight_regularizer, bias_initializer, bias_regularizer, activation}: {name: string, type: $sdk.std.core.TensorType, inputs: bigint | number, outputs: bigint | number, use_bias: boolean, weight_initializer: compute.ComputeInitializer | null, weight_regularizer: compute.ComputeRegularizer | null, bias_initializer: compute.ComputeInitializer | null, bias_regularizer: compute.ComputeRegularizer | null, activation: compute.ComputeActivation | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerDense {
      return new ComputeLayerDense($g.abi.libs_by_name.get(algebralib.name)!.mapped[76], name, type, inputs, outputs, use_bias, weight_initializer, weight_regularizer, bias_initializer, bias_regularizer, activation);
    }
    static create(name: string, type: $sdk.std.core.TensorType, inputs: bigint | number, outputs: bigint | number, use_bias: boolean, weight_initializer: compute.ComputeInitializer | null, weight_regularizer: compute.ComputeRegularizer | null, bias_initializer: compute.ComputeInitializer | null, bias_regularizer: compute.ComputeRegularizer | null, activation: compute.ComputeActivation | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerDense {
      return new ComputeLayerDense($g.abi.libs_by_name.get(algebralib.name)!.mapped[76], name, type, inputs, outputs, use_bias, weight_initializer, weight_regularizer, bias_initializer, bias_regularizer, activation);
    }
  }

  export class ComputeOptimizerRmsProp extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOptimizerRmsProp';

    learning_rate: number | null;
    decay_rate: number | null;
    smooth_epsilon: number | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        learning_rate: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        decay_rate: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        smooth_epsilon: {
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

    static learning_rate_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[77];
      return  t.static_values[0] as number;
    }
    static decay_rate_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[77];
      return  t.static_values[1] as number;
    }
    static smooth_epsilon_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[77];
      return  t.static_values[2] as number;
    }
    static createFrom({learning_rate, decay_rate, smooth_epsilon}: {learning_rate: number | null, decay_rate: number | null, smooth_epsilon: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerRmsProp {
      return new ComputeOptimizerRmsProp($g.abi.libs_by_name.get(algebralib.name)!.mapped[77], learning_rate, decay_rate, smooth_epsilon);
    }
    static create(learning_rate: number | null, decay_rate: number | null, smooth_epsilon: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerRmsProp {
      return new ComputeOptimizerRmsProp($g.abi.libs_by_name.get(algebralib.name)!.mapped[77], learning_rate, decay_rate, smooth_epsilon);
    }
  }

  export class ComputeActivationLeakyRelu extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeActivationLeakyRelu';

    alpha: number | null;
    max_value: number | null;
    threshold: number | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        alpha: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        max_value: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        threshold: {
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

    static alpha_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[78];
      return  t.static_values[0] as number;
    }
    static threshold_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[78];
      return  t.static_values[1] as number;
    }
    static createFrom({alpha, max_value, threshold}: {alpha: number | null, max_value: number | null, threshold: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationLeakyRelu {
      return new ComputeActivationLeakyRelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[78], alpha, max_value, threshold);
    }
    static create(alpha: number | null, max_value: number | null, threshold: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationLeakyRelu {
      return new ComputeActivationLeakyRelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[78], alpha, max_value, threshold);
    }
  }

  export class ComputeOperationAbs extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationAbs';

    input: string;
    output: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
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

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAbs {
      return new ComputeOperationAbs($g.abi.libs_by_name.get(algebralib.name)!.mapped[79], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAbs {
      return new ComputeOperationAbs($g.abi.libs_by_name.get(algebralib.name)!.mapped[79], input, output);
    }
  }

  export class ComputeOperationCos extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationCos';

    input: string;
    output: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
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

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationCos {
      return new ComputeOperationCos($g.abi.libs_by_name.get(algebralib.name)!.mapped[80], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationCos {
      return new ComputeOperationCos($g.abi.libs_by_name.get(algebralib.name)!.mapped[80], input, output);
    }
  }

  export class ComputeOperation2In1Out extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperation2In1Out';

    input: string;
    input2: string;
    output: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        input2: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        output: {
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

  export class ComputeLayerActivation extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeLayerActivation';

    name: string;
    activation: compute.ComputeActivation;
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
        activation: {
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

    static var_input_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[82];
      return  t.static_values[0] as string;
    }
    static var_output_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[82];
      return  t.static_values[1] as string;
    }
    static createFrom({name, activation}: {name: string, activation: compute.ComputeActivation}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerActivation {
      return new ComputeLayerActivation($g.abi.libs_by_name.get(algebralib.name)!.mapped[82], name, activation);
    }
    static create(name: string, activation: compute.ComputeActivation, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerActivation {
      return new ComputeLayerActivation($g.abi.libs_by_name.get(algebralib.name)!.mapped[82], name, activation);
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
        type: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        inputs: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        outputs: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        use_bias: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[4]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[4]] = v;
          },
        },
        weight_initializer: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[5]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[5]] = v;
          },
        },
        weight_regularizer: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[6]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[6]] = v;
          },
        },
        bias_initializer: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[7]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[7]] = v;
          },
        },
        bias_regularizer: {
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

    static var_input_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[83];
      return  t.static_values[0] as string;
    }
    static var_output_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[83];
      return  t.static_values[1] as string;
    }
    static var_weight_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[83];
      return  t.static_values[2] as string;
    }
    static var_bias_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[83];
      return  t.static_values[3] as string;
    }
    static var_mult_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[83];
      return  t.static_values[4] as string;
    }
    static createFrom({name, type, inputs, outputs, use_bias, weight_initializer, weight_regularizer, bias_initializer, bias_regularizer}: {name: string, type: $sdk.std.core.TensorType, inputs: bigint | number, outputs: bigint | number, use_bias: boolean, weight_initializer: compute.ComputeInitializer | null, weight_regularizer: compute.ComputeRegularizer | null, bias_initializer: compute.ComputeInitializer | null, bias_regularizer: compute.ComputeRegularizer | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerLinear {
      return new ComputeLayerLinear($g.abi.libs_by_name.get(algebralib.name)!.mapped[83], name, type, inputs, outputs, use_bias, weight_initializer, weight_regularizer, bias_initializer, bias_regularizer);
    }
    static create(name: string, type: $sdk.std.core.TensorType, inputs: bigint | number, outputs: bigint | number, use_bias: boolean, weight_initializer: compute.ComputeInitializer | null, weight_regularizer: compute.ComputeRegularizer | null, bias_initializer: compute.ComputeInitializer | null, bias_regularizer: compute.ComputeRegularizer | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerLinear {
      return new ComputeLayerLinear($g.abi.libs_by_name.get(algebralib.name)!.mapped[83], name, type, inputs, outputs, use_bias, weight_initializer, weight_regularizer, bias_initializer, bias_regularizer);
    }
  }

  export class ComputeOperationAtan extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationAtan';

    input: string;
    output: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
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

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAtan {
      return new ComputeOperationAtan($g.abi.libs_by_name.get(algebralib.name)!.mapped[84], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAtan {
      return new ComputeOperationAtan($g.abi.libs_by_name.get(algebralib.name)!.mapped[84], input, output);
    }
  }

  export class ComputeOperationAvg extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationAvg';

    input: string;
    input2: string;
    output: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        input2: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        output: {
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

    static createFrom({input, input2, output}: {input: string, input2: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAvg {
      return new ComputeOperationAvg($g.abi.libs_by_name.get(algebralib.name)!.mapped[85], input, input2, output);
    }
    static create(input: string, input2: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAvg {
      return new ComputeOperationAvg($g.abi.libs_by_name.get(algebralib.name)!.mapped[85], input, input2, output);
    }
  }

  export class ComputeActivationCelu extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeActivationCelu';

    alpha: number | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        alpha: {
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

    static alpha_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[86];
      return  t.static_values[0] as number;
    }
    static createFrom({alpha}: {alpha: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationCelu {
      return new ComputeActivationCelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[86], alpha);
    }
    static create(alpha: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationCelu {
      return new ComputeActivationCelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[86], alpha);
    }
  }

  export class ComputeActivationSigmoid extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeActivationSigmoid';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationSigmoid {
      return new ComputeActivationSigmoid($g.abi.libs_by_name.get(algebralib.name)!.mapped[87]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationSigmoid {
      return new ComputeActivationSigmoid($g.abi.libs_by_name.get(algebralib.name)!.mapped[87]);
    }
  }

  export class ComputeClassificationLoss extends $sdk.GCEnum {
    static readonly _type = 'compute::ComputeClassificationLoss';

    constructor(type: $sdk.AbiType, offset: number, public key: ComputeClassificationLoss.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static categorical_cross_entropy($g: $sdk.GreyCat = globalThis.greycat.default): ComputeClassificationLoss {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[88];
      return t.enum_values![t.generated_offsets[0]];
    }
    static sparse_categorical_cross_entropy($g: $sdk.GreyCat = globalThis.greycat.default): ComputeClassificationLoss {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[88];
      return t.enum_values![t.generated_offsets[1]];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): ComputeClassificationLoss[] {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[88];
      return t.enum_values!;
    }
  }

  export namespace ComputeClassificationLoss  {
    export type Field = 'categorical_cross_entropy'|'sparse_categorical_cross_entropy';
  }
  export class ComputeOptimizerNesterov extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOptimizerNesterov';

    learning_rate: number | null;
    decay_rate: number;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        learning_rate: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        decay_rate: {
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

    static learning_rate_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[89];
      return  t.static_values[0] as number;
    }
    static decay_rate_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[89];
      return  t.static_values[1] as number;
    }
    static createFrom({learning_rate, decay_rate}: {learning_rate: number | null, decay_rate: number}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerNesterov {
      return new ComputeOptimizerNesterov($g.abi.libs_by_name.get(algebralib.name)!.mapped[89], learning_rate, decay_rate);
    }
    static create(learning_rate: number | null, decay_rate: number, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerNesterov {
      return new ComputeOptimizerNesterov($g.abi.libs_by_name.get(algebralib.name)!.mapped[89], learning_rate, decay_rate);
    }
  }

  export class ComputeOptimizerSgd extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOptimizerSgd';

    learning_rate: number | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        learning_rate: {
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

    static learning_rate_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[90];
      return  t.static_values[0] as number;
    }
    static createFrom({learning_rate}: {learning_rate: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerSgd {
      return new ComputeOptimizerSgd($g.abi.libs_by_name.get(algebralib.name)!.mapped[90], learning_rate);
    }
    static create(learning_rate: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerSgd {
      return new ComputeOptimizerSgd($g.abi.libs_by_name.get(algebralib.name)!.mapped[90], learning_rate);
    }
  }

  export class ComputeActivation extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeActivation';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

  }

  export class ComputeOperationSin extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationSin';

    input: string;
    output: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
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

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSin {
      return new ComputeOperationSin($g.abi.libs_by_name.get(algebralib.name)!.mapped[92], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSin {
      return new ComputeOperationSin($g.abi.libs_by_name.get(algebralib.name)!.mapped[92], input, output);
    }
  }

  export class ComputeInitializerGlorotUniform extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerGlorotUniform';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerGlorotUniform {
      return new ComputeInitializerGlorotUniform($g.abi.libs_by_name.get(algebralib.name)!.mapped[93]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerGlorotUniform {
      return new ComputeInitializerGlorotUniform($g.abi.libs_by_name.get(algebralib.name)!.mapped[93]);
    }
  }

  export class ComputeOperationAsinh extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationAsinh';

    input: string;
    output: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
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

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAsinh {
      return new ComputeOperationAsinh($g.abi.libs_by_name.get(algebralib.name)!.mapped[94], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAsinh {
      return new ComputeOperationAsinh($g.abi.libs_by_name.get(algebralib.name)!.mapped[94], input, output);
    }
  }

  export class ComputeOperationSub extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationSub';

    input: string;
    input2: string;
    output: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        input2: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        output: {
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

    static createFrom({input, input2, output}: {input: string, input2: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSub {
      return new ComputeOperationSub($g.abi.libs_by_name.get(algebralib.name)!.mapped[95], input, input2, output);
    }
    static create(input: string, input2: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSub {
      return new ComputeOperationSub($g.abi.libs_by_name.get(algebralib.name)!.mapped[95], input, input2, output);
    }
  }

  export class ComputeInitializerConstant extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerConstant';

    value: any;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        value: {
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

    static createFrom({value}: {value: any}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerConstant {
      return new ComputeInitializerConstant($g.abi.libs_by_name.get(algebralib.name)!.mapped[96], value);
    }
    static create(value: any, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerConstant {
      return new ComputeInitializerConstant($g.abi.libs_by_name.get(algebralib.name)!.mapped[96], value);
    }
  }

  export class ComputeInitializerIdentity extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerIdentity';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerIdentity {
      return new ComputeInitializerIdentity($g.abi.libs_by_name.get(algebralib.name)!.mapped[97]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerIdentity {
      return new ComputeInitializerIdentity($g.abi.libs_by_name.get(algebralib.name)!.mapped[97]);
    }
  }

  export class ComputeActivationSoftSign extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeActivationSoftSign';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationSoftSign {
      return new ComputeActivationSoftSign($g.abi.libs_by_name.get(algebralib.name)!.mapped[98]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationSoftSign {
      return new ComputeActivationSoftSign($g.abi.libs_by_name.get(algebralib.name)!.mapped[98]);
    }
  }

  export class ComputeActivationRelu extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeActivationRelu';

    max_value: number | null;
    threshold: number | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        max_value: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        threshold: {
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

    static threshold_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[99];
      return  t.static_values[0] as number;
    }
    static createFrom({max_value, threshold}: {max_value: number | null, threshold: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationRelu {
      return new ComputeActivationRelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[99], max_value, threshold);
    }
    static create(max_value: number | null, threshold: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationRelu {
      return new ComputeActivationRelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[99], max_value, threshold);
    }
  }

  export class ComputeOperationTanh extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationTanh';

    input: string;
    output: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
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

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationTanh {
      return new ComputeOperationTanh($g.abi.libs_by_name.get(algebralib.name)!.mapped[100], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationTanh {
      return new ComputeOperationTanh($g.abi.libs_by_name.get(algebralib.name)!.mapped[100], input, output);
    }
  }

  export class ComputeInitializerPytorch extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerPytorch';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerPytorch {
      return new ComputeInitializerPytorch($g.abi.libs_by_name.get(algebralib.name)!.mapped[101]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerPytorch {
      return new ComputeInitializerPytorch($g.abi.libs_by_name.get(algebralib.name)!.mapped[101]);
    }
  }

  export class ComputeOperationCelu extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationCelu';

    input: string;
    output: string;
    alpha: number | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        alpha: {
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

    static alpha_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[102];
      return  t.static_values[0] as number;
    }
    static createFrom({input, output, alpha}: {input: string, output: string, alpha: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationCelu {
      return new ComputeOperationCelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[102], input, output, alpha);
    }
    static create(input: string, output: string, alpha: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationCelu {
      return new ComputeOperationCelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[102], input, output, alpha);
    }
  }

  export class ComputeInitializerNormalAvg extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerNormalAvg';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerNormalAvg {
      return new ComputeInitializerNormalAvg($g.abi.libs_by_name.get(algebralib.name)!.mapped[103]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerNormalAvg {
      return new ComputeInitializerNormalAvg($g.abi.libs_by_name.get(algebralib.name)!.mapped[103]);
    }
  }

  export class ComputeActivationSelu extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeActivationSelu';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationSelu {
      return new ComputeActivationSelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[104]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationSelu {
      return new ComputeActivationSelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[104]);
    }
  }

  export class ComputeEngine extends algebra_n.compute.ComputeEngine {}

  export class ComputeOperation extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperation';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

  }

  export class ComputeInitializerRelu extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerRelu';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerRelu {
      return new ComputeInitializerRelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[107]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerRelu {
      return new ComputeInitializerRelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[107]);
    }
  }

  export class ComputeOperationLeakyRelu extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationLeakyRelu';

    input: string;
    output: string;
    alpha: number | null;
    max_value: number | null;
    threshold: number | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        alpha: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        max_value: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        threshold: {
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

    static alpha_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[108];
      return  t.static_values[0] as number;
    }
    static max_value_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[108];
      return  t.static_values[1] as number;
    }
    static threshold_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[108];
      return  t.static_values[2] as number;
    }
    static createFrom({input, output, alpha, max_value, threshold}: {input: string, output: string, alpha: number | null, max_value: number | null, threshold: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationLeakyRelu {
      return new ComputeOperationLeakyRelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[108], input, output, alpha, max_value, threshold);
    }
    static create(input: string, output: string, alpha: number | null, max_value: number | null, threshold: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationLeakyRelu {
      return new ComputeOperationLeakyRelu($g.abi.libs_by_name.get(algebralib.name)!.mapped[108], input, output, alpha, max_value, threshold);
    }
  }

  export class ComputeOperationSoftSign extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationSoftSign';

    input: string;
    output: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
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

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSoftSign {
      return new ComputeOperationSoftSign($g.abi.libs_by_name.get(algebralib.name)!.mapped[109], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSoftSign {
      return new ComputeOperationSoftSign($g.abi.libs_by_name.get(algebralib.name)!.mapped[109], input, output);
    }
  }

  export class ComputeOperationTan extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationTan';

    input: string;
    output: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
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

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationTan {
      return new ComputeOperationTan($g.abi.libs_by_name.get(algebralib.name)!.mapped[110], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationTan {
      return new ComputeOperationTan($g.abi.libs_by_name.get(algebralib.name)!.mapped[110], input, output);
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
        type: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        shape: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        l1: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        l2: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[4]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[4]] = v;
          },
        },
        init: {
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

    static createFrom({name, type, shape, l1, l2, init}: {name: string, type: $sdk.std.core.TensorType, shape: globalThis.Array<bigint | number>, l1: number, l2: number, init: compute.ComputeInitializer | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeVarOptimize {
      return new ComputeVarOptimize($g.abi.libs_by_name.get(algebralib.name)!.mapped[111], name, type, shape, l1, l2, init);
    }
    static create(name: string, type: $sdk.std.core.TensorType, shape: globalThis.Array<bigint | number>, l1: number, l2: number, init: compute.ComputeInitializer | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeVarOptimize {
      return new ComputeVarOptimize($g.abi.libs_by_name.get(algebralib.name)!.mapped[111], name, type, shape, l1, l2, init);
    }
  }

  export class ComputeInitializerNone extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerNone';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerNone {
      return new ComputeInitializerNone($g.abi.libs_by_name.get(algebralib.name)!.mapped[112]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerNone {
      return new ComputeInitializerNone($g.abi.libs_by_name.get(algebralib.name)!.mapped[112]);
    }
  }

  export class ComputeOperationLog extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationLog';

    input: string;
    output: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
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

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationLog {
      return new ComputeOperationLog($g.abi.libs_by_name.get(algebralib.name)!.mapped[113], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationLog {
      return new ComputeOperationLog($g.abi.libs_by_name.get(algebralib.name)!.mapped[113], input, output);
    }
  }

  export class ComputeOperationMul extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationMul';

    input: string;
    input2: string;
    output: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        input2: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        output: {
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

    static createFrom({input, input2, output}: {input: string, input2: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationMul {
      return new ComputeOperationMul($g.abi.libs_by_name.get(algebralib.name)!.mapped[114], input, input2, output);
    }
    static create(input: string, input2: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationMul {
      return new ComputeOperationMul($g.abi.libs_by_name.get(algebralib.name)!.mapped[114], input, input2, output);
    }
  }

  export class ComputeOperationPow extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationPow';

    input: string;
    input2: string;
    output: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        input2: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        output: {
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

    static createFrom({input, input2, output}: {input: string, input2: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationPow {
      return new ComputeOperationPow($g.abi.libs_by_name.get(algebralib.name)!.mapped[115], input, input2, output);
    }
    static create(input: string, input2: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationPow {
      return new ComputeOperationPow($g.abi.libs_by_name.get(algebralib.name)!.mapped[115], input, input2, output);
    }
  }

  export class ComputeLayerClassification extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeLayerClassification';

    name: string;
    calculate_probabilities: boolean;
    from_logits: boolean;
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
        calculate_probabilities: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        from_logits: {
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

    static var_input_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[116];
      return  t.static_values[0] as string;
    }
    static var_predicted_classes_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[116];
      return  t.static_values[1] as string;
    }
    static var_probabilities_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[116];
      return  t.static_values[2] as string;
    }
    static createFrom({name, calculate_probabilities, from_logits}: {name: string, calculate_probabilities: boolean, from_logits: boolean}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerClassification {
      return new ComputeLayerClassification($g.abi.libs_by_name.get(algebralib.name)!.mapped[116], name, calculate_probabilities, from_logits);
    }
    static create(name: string, calculate_probabilities: boolean, from_logits: boolean, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerClassification {
      return new ComputeLayerClassification($g.abi.libs_by_name.get(algebralib.name)!.mapped[116], name, calculate_probabilities, from_logits);
    }
  }

  export class ComputeOperationSumIf extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationSumIf';

    input: string;
    ifCondition: string;
    output: string;
    counts: string;
    classes: bigint | number;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        ifCondition: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        output: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        counts: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        classes: {
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

    static createFrom({input, ifCondition, output, counts, classes}: {input: string, ifCondition: string, output: string, counts: string, classes: bigint | number}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSumIf {
      return new ComputeOperationSumIf($g.abi.libs_by_name.get(algebralib.name)!.mapped[117], input, ifCondition, output, counts, classes);
    }
    static create(input: string, ifCondition: string, output: string, counts: string, classes: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSumIf {
      return new ComputeOperationSumIf($g.abi.libs_by_name.get(algebralib.name)!.mapped[117], input, ifCondition, output, counts, classes);
    }
  }

  export class ComputeOperationCosh extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationCosh';

    input: string;
    output: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
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

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationCosh {
      return new ComputeOperationCosh($g.abi.libs_by_name.get(algebralib.name)!.mapped[118], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationCosh {
      return new ComputeOperationCosh($g.abi.libs_by_name.get(algebralib.name)!.mapped[118], input, output);
    }
  }

  export class ComputeOperationAddBias extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationAddBias';

    input: string;
    input2: string;
    output: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        input2: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        output: {
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

    static createFrom({input, input2, output}: {input: string, input2: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAddBias {
      return new ComputeOperationAddBias($g.abi.libs_by_name.get(algebralib.name)!.mapped[119], input, input2, output);
    }
    static create(input: string, input2: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAddBias {
      return new ComputeOperationAddBias($g.abi.libs_by_name.get(algebralib.name)!.mapped[119], input, input2, output);
    }
  }

  export class ComputeOperationSinh extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationSinh';

    input: string;
    output: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
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

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSinh {
      return new ComputeOperationSinh($g.abi.libs_by_name.get(algebralib.name)!.mapped[120], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationSinh {
      return new ComputeOperationSinh($g.abi.libs_by_name.get(algebralib.name)!.mapped[120], input, output);
    }
  }

  export class ComputeOptimizerAdam extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOptimizerAdam';

    learning_rate: number | null;
    beta1: number | null;
    beta2: number | null;
    smooth_epsilon: number | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        learning_rate: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        beta1: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        beta2: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        smooth_epsilon: {
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

    static learning_rate_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[121];
      return  t.static_values[0] as number;
    }
    static beta1_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[121];
      return  t.static_values[1] as number;
    }
    static beta2_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[121];
      return  t.static_values[2] as number;
    }
    static smooth_epsilon_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[121];
      return  t.static_values[3] as number;
    }
    static createFrom({learning_rate, beta1, beta2, smooth_epsilon}: {learning_rate: number | null, beta1: number | null, beta2: number | null, smooth_epsilon: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerAdam {
      return new ComputeOptimizerAdam($g.abi.libs_by_name.get(algebralib.name)!.mapped[121], learning_rate, beta1, beta2, smooth_epsilon);
    }
    static create(learning_rate: number | null, beta1: number | null, beta2: number | null, smooth_epsilon: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizerAdam {
      return new ComputeOptimizerAdam($g.abi.libs_by_name.get(algebralib.name)!.mapped[121], learning_rate, beta1, beta2, smooth_epsilon);
    }
  }

  export class ComputeState extends algebra_n.compute.ComputeState {}

  export class ComputeInitializerUniformIn extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerUniformIn';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerUniformIn {
      return new ComputeInitializerUniformIn($g.abi.libs_by_name.get(algebralib.name)!.mapped[123]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerUniformIn {
      return new ComputeInitializerUniformIn($g.abi.libs_by_name.get(algebralib.name)!.mapped[123]);
    }
  }

  export class ComputeOperationAcosh extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeOperationAcosh';

    input: string;
    output: string;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        input: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        output: {
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

    static createFrom({input, output}: {input: string, output: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAcosh {
      return new ComputeOperationAcosh($g.abi.libs_by_name.get(algebralib.name)!.mapped[124], input, output);
    }
    static create(input: string, output: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeOperationAcosh {
      return new ComputeOperationAcosh($g.abi.libs_by_name.get(algebralib.name)!.mapped[124], input, output);
    }
  }

  export class ComputeActivationHardSigmoid extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeActivationHardSigmoid';

    slope: number | null;
    shift: number | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        slope: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        shift: {
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

    static slope_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[125];
      return  t.static_values[0] as number;
    }
    static shift_def($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[125];
      return  t.static_values[1] as number;
    }
    static createFrom({slope, shift}: {slope: number | null, shift: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationHardSigmoid {
      return new ComputeActivationHardSigmoid($g.abi.libs_by_name.get(algebralib.name)!.mapped[125], slope, shift);
    }
    static create(slope: number | null, shift: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivationHardSigmoid {
      return new ComputeActivationHardSigmoid($g.abi.libs_by_name.get(algebralib.name)!.mapped[125], slope, shift);
    }
  }

  export class ComputeVar extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeVar';

    name: string;
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
      });
    }

    static createFrom({name}: {name: string}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeVar {
      return new ComputeVar($g.abi.libs_by_name.get(algebralib.name)!.mapped[126], name);
    }
    static create(name: string, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeVar {
      return new ComputeVar($g.abi.libs_by_name.get(algebralib.name)!.mapped[126], name);
    }
  }

  export class ComputeInitializerNormal extends $sdk.GCObject {
    static readonly _type = 'compute::ComputeInitializerNormal';

    avg: number;
    std: number;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        avg: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        std: {
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

    static createFrom({avg, std}: {avg: number, std: number}, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerNormal {
      return new ComputeInitializerNormal($g.abi.libs_by_name.get(algebralib.name)!.mapped[127], avg, std);
    }
    static create(avg: number, std: number, $g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializerNormal {
      return new ComputeInitializerNormal($g.abi.libs_by_name.get(algebralib.name)!.mapped[127], avg, std);
    }
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
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[0]];
    }
    static layer_1($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[1]];
    }
    static layer_2($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[2]];
    }
    static layer_3($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[3]];
    }
    static layer_4($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[4]];
    }
    static layer_5($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[5]];
    }
    static layer_6($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[6]];
    }
    static layer_7($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[7]];
    }
    static layer_8($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[8]];
    }
    static layer_9($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[9]];
    }
    static layer_10($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[10]];
    }
    static layer_11($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[11]];
    }
    static layer_12($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[12]];
    }
    static layer_13($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[13]];
    }
    static layer_14($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[14]];
    }
    static layer_15($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[15]];
    }
    static layer_16($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[16]];
    }
    static layer_17($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[17]];
    }
    static layer_18($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[18]];
    }
    static layer_19($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[19]];
    }
    static layer_20($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[20]];
    }
    static layer_21($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[21]];
    }
    static layer_22($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[22]];
    }
    static layer_23($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[23]];
    }
    static layer_24($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[24]];
    }
    static layer_25($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[25]];
    }
    static layer_26($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[26]];
    }
    static layer_27($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[27]];
    }
    static layer_28($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[28]];
    }
    static layer_29($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[29]];
    }
    static layer_30($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[30]];
    }
    static layer_31($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[31]];
    }
    static layer_32($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[32]];
    }
    static layer_33($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[33]];
    }
    static layer_34($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[34]];
    }
    static layer_35($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[35]];
    }
    static layer_36($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[36]];
    }
    static layer_37($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[37]];
    }
    static layer_38($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[38]];
    }
    static layer_39($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[39]];
    }
    static layer_40($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[40]];
    }
    static layer_41($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[41]];
    }
    static layer_42($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[42]];
    }
    static layer_43($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[43]];
    }
    static layer_44($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[44]];
    }
    static layer_45($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[45]];
    }
    static layer_46($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[46]];
    }
    static layer_47($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[47]];
    }
    static layer_48($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[48]];
    }
    static layer_49($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[49]];
    }
    static layer_50($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[50]];
    }
    static layer_51($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[51]];
    }
    static layer_52($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[52]];
    }
    static layer_53($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[53]];
    }
    static layer_54($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[54]];
    }
    static layer_55($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[55]];
    }
    static layer_56($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[56]];
    }
    static layer_57($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[57]];
    }
    static layer_58($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[58]];
    }
    static layer_59($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[59]];
    }
    static layer_60($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[60]];
    }
    static layer_61($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[61]];
    }
    static layer_62($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[62]];
    }
    static layer_63($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[63]];
    }
    static layer_64($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[64]];
    }
    static layer_65($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[65]];
    }
    static layer_66($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[66]];
    }
    static layer_67($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[67]];
    }
    static layer_68($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[68]];
    }
    static layer_69($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[69]];
    }
    static layer_70($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[70]];
    }
    static layer_71($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[71]];
    }
    static layer_72($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[72]];
    }
    static layer_73($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[73]];
    }
    static layer_74($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[74]];
    }
    static layer_75($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[75]];
    }
    static layer_76($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[76]];
    }
    static layer_77($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[77]];
    }
    static layer_78($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[78]];
    }
    static layer_79($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[79]];
    }
    static layer_80($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[80]];
    }
    static layer_81($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[81]];
    }
    static layer_82($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[82]];
    }
    static layer_83($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[83]];
    }
    static layer_84($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[84]];
    }
    static layer_85($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[85]];
    }
    static layer_86($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[86]];
    }
    static layer_87($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[87]];
    }
    static layer_88($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[88]];
    }
    static layer_89($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[89]];
    }
    static layer_90($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[90]];
    }
    static layer_91($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[91]];
    }
    static layer_92($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[92]];
    }
    static layer_93($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[93]];
    }
    static layer_94($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[94]];
    }
    static layer_95($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[95]];
    }
    static layer_96($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[96]];
    }
    static layer_97($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[97]];
    }
    static layer_98($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[98]];
    }
    static layer_99($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[99]];
    }
    static layer_100($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[100]];
    }
    static layer_101($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[101]];
    }
    static layer_102($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[102]];
    }
    static layer_103($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[103]];
    }
    static layer_104($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[104]];
    }
    static layer_105($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[105]];
    }
    static layer_106($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[106]];
    }
    static layer_107($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[107]];
    }
    static layer_108($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[108]];
    }
    static layer_109($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[109]];
    }
    static layer_110($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[110]];
    }
    static layer_111($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[111]];
    }
    static layer_112($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[112]];
    }
    static layer_113($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[113]];
    }
    static layer_114($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[114]];
    }
    static layer_115($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[115]];
    }
    static layer_116($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[116]];
    }
    static layer_117($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[117]];
    }
    static layer_118($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[118]];
    }
    static layer_119($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[119]];
    }
    static layer_120($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[120]];
    }
    static layer_121($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[121]];
    }
    static layer_122($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[122]];
    }
    static layer_123($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[123]];
    }
    static layer_124($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[124]];
    }
    static layer_125($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[125]];
    }
    static layer_126($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[126]];
    }
    static layer_127($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[127]];
    }
    static layer_128($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[128]];
    }
    static layer_129($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[129]];
    }
    static layer_130($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[130]];
    }
    static layer_131($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[131]];
    }
    static layer_132($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[132]];
    }
    static layer_133($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[133]];
    }
    static layer_134($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[134]];
    }
    static layer_135($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[135]];
    }
    static layer_136($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[136]];
    }
    static layer_137($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[137]];
    }
    static layer_138($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[138]];
    }
    static layer_139($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[139]];
    }
    static layer_140($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[140]];
    }
    static layer_141($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[141]];
    }
    static layer_142($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[142]];
    }
    static layer_143($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[143]];
    }
    static layer_144($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[144]];
    }
    static layer_145($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[145]];
    }
    static layer_146($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[146]];
    }
    static layer_147($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[147]];
    }
    static layer_148($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[148]];
    }
    static layer_149($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[149]];
    }
    static layer_150($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[150]];
    }
    static layer_151($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[151]];
    }
    static layer_152($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[152]];
    }
    static layer_153($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[153]];
    }
    static layer_154($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[154]];
    }
    static layer_155($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[155]];
    }
    static layer_156($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[156]];
    }
    static layer_157($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[157]];
    }
    static layer_158($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[158]];
    }
    static layer_159($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[159]];
    }
    static layer_160($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[160]];
    }
    static layer_161($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[161]];
    }
    static layer_162($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[162]];
    }
    static layer_163($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[163]];
    }
    static layer_164($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[164]];
    }
    static layer_165($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[165]];
    }
    static layer_166($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[166]];
    }
    static layer_167($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[167]];
    }
    static layer_168($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[168]];
    }
    static layer_169($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[169]];
    }
    static layer_170($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[170]];
    }
    static layer_171($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[171]];
    }
    static layer_172($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[172]];
    }
    static layer_173($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[173]];
    }
    static layer_174($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[174]];
    }
    static layer_175($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[175]];
    }
    static layer_176($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[176]];
    }
    static layer_177($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[177]];
    }
    static layer_178($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[178]];
    }
    static layer_179($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[179]];
    }
    static layer_180($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[180]];
    }
    static layer_181($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[181]];
    }
    static layer_182($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[182]];
    }
    static layer_183($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[183]];
    }
    static layer_184($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[184]];
    }
    static layer_185($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[185]];
    }
    static layer_186($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[186]];
    }
    static layer_187($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[187]];
    }
    static layer_188($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[188]];
    }
    static layer_189($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[189]];
    }
    static layer_190($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[190]];
    }
    static layer_191($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[191]];
    }
    static layer_192($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[192]];
    }
    static layer_193($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[193]];
    }
    static layer_194($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[194]];
    }
    static layer_195($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[195]];
    }
    static layer_196($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[196]];
    }
    static layer_197($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[197]];
    }
    static layer_198($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[198]];
    }
    static layer_199($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values![t.generated_offsets[199]];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): NNLayersNames[] {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[128];
      return t.enum_values!;
    }
  }

  export namespace NNLayersNames  {
    export type Field = 'layer_0'|'layer_1'|'layer_2'|'layer_3'|'layer_4'|'layer_5'|'layer_6'|'layer_7'|'layer_8'|'layer_9'|'layer_10'|'layer_11'|'layer_12'|'layer_13'|'layer_14'|'layer_15'|'layer_16'|'layer_17'|'layer_18'|'layer_19'|'layer_20'|'layer_21'|'layer_22'|'layer_23'|'layer_24'|'layer_25'|'layer_26'|'layer_27'|'layer_28'|'layer_29'|'layer_30'|'layer_31'|'layer_32'|'layer_33'|'layer_34'|'layer_35'|'layer_36'|'layer_37'|'layer_38'|'layer_39'|'layer_40'|'layer_41'|'layer_42'|'layer_43'|'layer_44'|'layer_45'|'layer_46'|'layer_47'|'layer_48'|'layer_49'|'layer_50'|'layer_51'|'layer_52'|'layer_53'|'layer_54'|'layer_55'|'layer_56'|'layer_57'|'layer_58'|'layer_59'|'layer_60'|'layer_61'|'layer_62'|'layer_63'|'layer_64'|'layer_65'|'layer_66'|'layer_67'|'layer_68'|'layer_69'|'layer_70'|'layer_71'|'layer_72'|'layer_73'|'layer_74'|'layer_75'|'layer_76'|'layer_77'|'layer_78'|'layer_79'|'layer_80'|'layer_81'|'layer_82'|'layer_83'|'layer_84'|'layer_85'|'layer_86'|'layer_87'|'layer_88'|'layer_89'|'layer_90'|'layer_91'|'layer_92'|'layer_93'|'layer_94'|'layer_95'|'layer_96'|'layer_97'|'layer_98'|'layer_99'|'layer_100'|'layer_101'|'layer_102'|'layer_103'|'layer_104'|'layer_105'|'layer_106'|'layer_107'|'layer_108'|'layer_109'|'layer_110'|'layer_111'|'layer_112'|'layer_113'|'layer_114'|'layer_115'|'layer_116'|'layer_117'|'layer_118'|'layer_119'|'layer_120'|'layer_121'|'layer_122'|'layer_123'|'layer_124'|'layer_125'|'layer_126'|'layer_127'|'layer_128'|'layer_129'|'layer_130'|'layer_131'|'layer_132'|'layer_133'|'layer_134'|'layer_135'|'layer_136'|'layer_137'|'layer_138'|'layer_139'|'layer_140'|'layer_141'|'layer_142'|'layer_143'|'layer_144'|'layer_145'|'layer_146'|'layer_147'|'layer_148'|'layer_149'|'layer_150'|'layer_151'|'layer_152'|'layer_153'|'layer_154'|'layer_155'|'layer_156'|'layer_157'|'layer_158'|'layer_159'|'layer_160'|'layer_161'|'layer_162'|'layer_163'|'layer_164'|'layer_165'|'layer_166'|'layer_167'|'layer_168'|'layer_169'|'layer_170'|'layer_171'|'layer_172'|'layer_173'|'layer_174'|'layer_175'|'layer_176'|'layer_177'|'layer_178'|'layer_179'|'layer_180'|'layer_181'|'layer_182'|'layer_183'|'layer_184'|'layer_185'|'layer_186'|'layer_187'|'layer_188'|'layer_189'|'layer_190'|'layer_191'|'layer_192'|'layer_193'|'layer_194'|'layer_195'|'layer_196'|'layer_197'|'layer_198'|'layer_199';
  }
}

export namespace nn {
  export class RegressionNetwork extends $sdk.GCObject {
    static readonly _type = 'nn::RegressionNetwork';

    inputs: bigint | number;
    inputs_gradients: boolean;
    outputs: bigint | number;
    fixed_batch_size: bigint | number;
    inputs_sequences: bigint | number;
    outputs_sequences: bigint | number;
    tensor_type: $sdk.std.core.TensorType;
    lossLayer: compute.ComputeLayerLoss | null;
    optimizer: compute.ComputeOptimizer;
    seed: bigint | number;
    randomizeSeed: boolean;
    placeholders: compute.ComputeLayerCustom | null;
    preProcessType: compute.ComputeLayer | null;
    postProcessType: compute.ComputeLayer | null;
    preProcessObject: any;
    postProcessObject: any;
    layers: globalThis.Array<compute.ComputeLayer> | null;
    lastLayer: string | null;
    lastOutput: string | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        inputs: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        inputs_gradients: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        outputs: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        fixed_batch_size: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        inputs_sequences: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[4]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[4]] = v;
          },
        },
        outputs_sequences: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[5]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[5]] = v;
          },
        },
        tensor_type: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[6]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[6]] = v;
          },
        },
        lossLayer: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[7]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[7]] = v;
          },
        },
        optimizer: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[8]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[8]] = v;
          },
        },
        seed: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[9]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[9]] = v;
          },
        },
        randomizeSeed: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[10]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[10]] = v;
          },
        },
        placeholders: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[11]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[11]] = v;
          },
        },
        preProcessType: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[12]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[12]] = v;
          },
        },
        postProcessType: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[13]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[13]] = v;
          },
        },
        preProcessObject: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[14]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[14]] = v;
          },
        },
        postProcessObject: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[15]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[15]] = v;
          },
        },
        layers: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[16]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[16]] = v;
          },
        },
        lastLayer: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[17]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[17]] = v;
          },
        },
        lastOutput: {
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

    static createFrom({inputs, inputs_gradients, outputs, fixed_batch_size, inputs_sequences, outputs_sequences, tensor_type, lossLayer, optimizer, seed, randomizeSeed, placeholders, preProcessType, postProcessType, preProcessObject, postProcessObject, layers, lastLayer, lastOutput}: {inputs: bigint | number, inputs_gradients: boolean, outputs: bigint | number, fixed_batch_size: bigint | number, inputs_sequences: bigint | number, outputs_sequences: bigint | number, tensor_type: $sdk.std.core.TensorType, lossLayer: compute.ComputeLayerLoss | null, optimizer: compute.ComputeOptimizer, seed: bigint | number, randomizeSeed: boolean, placeholders: compute.ComputeLayerCustom | null, preProcessType: compute.ComputeLayer | null, postProcessType: compute.ComputeLayer | null, preProcessObject: any | null, postProcessObject: any | null, layers: globalThis.Array<compute.ComputeLayer> | null, lastLayer: string | null, lastOutput: string | null}, $g: $sdk.GreyCat = globalThis.greycat.default): RegressionNetwork {
      return new RegressionNetwork($g.abi.libs_by_name.get(algebralib.name)!.mapped[129], inputs, inputs_gradients, outputs, fixed_batch_size, inputs_sequences, outputs_sequences, tensor_type, lossLayer, optimizer, seed, randomizeSeed, placeholders, preProcessType, postProcessType, preProcessObject, postProcessObject, layers, lastLayer, lastOutput);
    }
    static create(inputs: bigint | number, inputs_gradients: boolean, outputs: bigint | number, fixed_batch_size: bigint | number, inputs_sequences: bigint | number, outputs_sequences: bigint | number, tensor_type: $sdk.std.core.TensorType, lossLayer: compute.ComputeLayerLoss | null, optimizer: compute.ComputeOptimizer, seed: bigint | number, randomizeSeed: boolean, placeholders: compute.ComputeLayerCustom | null, preProcessType: compute.ComputeLayer | null, postProcessType: compute.ComputeLayer | null, preProcessObject: any | null, postProcessObject: any | null, layers: globalThis.Array<compute.ComputeLayer> | null, lastLayer: string | null, lastOutput: string | null, $g: $sdk.GreyCat = globalThis.greycat.default): RegressionNetwork {
      return new RegressionNetwork($g.abi.libs_by_name.get(algebralib.name)!.mapped[129], inputs, inputs_gradients, outputs, fixed_batch_size, inputs_sequences, outputs_sequences, tensor_type, lossLayer, optimizer, seed, randomizeSeed, placeholders, preProcessType, postProcessType, preProcessObject, postProcessObject, layers, lastLayer, lastOutput);
    }
  }

  export class InitializerConfig extends $sdk.GCObject {
    static readonly _type = 'nn::InitializerConfig';

    weight_initializer: compute.ComputeInitializer | null;
    weight_regularizer: compute.ComputeRegularizer | null;
    bias_initializer: compute.ComputeInitializer | null;
    bias_regularizer: compute.ComputeRegularizer | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        weight_initializer: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        weight_regularizer: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        bias_initializer: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        bias_regularizer: {
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

    static createFrom({weight_initializer, weight_regularizer, bias_initializer, bias_regularizer}: {weight_initializer: compute.ComputeInitializer | null, weight_regularizer: compute.ComputeRegularizer | null, bias_initializer: compute.ComputeInitializer | null, bias_regularizer: compute.ComputeRegularizer | null}, $g: $sdk.GreyCat = globalThis.greycat.default): InitializerConfig {
      return new InitializerConfig($g.abi.libs_by_name.get(algebralib.name)!.mapped[130], weight_initializer, weight_regularizer, bias_initializer, bias_regularizer);
    }
    static create(weight_initializer: compute.ComputeInitializer | null, weight_regularizer: compute.ComputeRegularizer | null, bias_initializer: compute.ComputeInitializer | null, bias_regularizer: compute.ComputeRegularizer | null, $g: $sdk.GreyCat = globalThis.greycat.default): InitializerConfig {
      return new InitializerConfig($g.abi.libs_by_name.get(algebralib.name)!.mapped[130], weight_initializer, weight_regularizer, bias_initializer, bias_regularizer);
    }
  }

  export class ComputeActivations extends $sdk.GCEnum {
    static readonly _type = 'nn::ComputeActivations';

    constructor(type: $sdk.AbiType, offset: number, public key: ComputeActivations.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static relu($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivations {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return t.enum_values![t.generated_offsets[0]];
    }
    static leaky_relu($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivations {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return t.enum_values![t.generated_offsets[1]];
    }
    static sigmoid($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivations {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return t.enum_values![t.generated_offsets[2]];
    }
    static hard_sigmoid($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivations {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return t.enum_values![t.generated_offsets[3]];
    }
    static exp($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivations {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return t.enum_values![t.generated_offsets[4]];
    }
    static soft_max($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivations {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return t.enum_values![t.generated_offsets[5]];
    }
    static soft_plus($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivations {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return t.enum_values![t.generated_offsets[6]];
    }
    static soft_sign($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivations {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return t.enum_values![t.generated_offsets[7]];
    }
    static tanh($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivations {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return t.enum_values![t.generated_offsets[8]];
    }
    static selu($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivations {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return t.enum_values![t.generated_offsets[9]];
    }
    static elu($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivations {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return t.enum_values![t.generated_offsets[10]];
    }
    static celu($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivations {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return t.enum_values![t.generated_offsets[11]];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): ComputeActivations[] {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[131];
      return t.enum_values!;
    }
  }

  export namespace ComputeActivations  {
    export type Field = 'relu'|'leaky_relu'|'sigmoid'|'hard_sigmoid'|'exp'|'soft_max'|'soft_plus'|'soft_sign'|'tanh'|'selu'|'elu'|'celu';
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
    lossLayer: compute.ComputeLayerLoss | null;
    optimizer: compute.ComputeOptimizer;
    seed: bigint | number;
    randomizeSeed: boolean;
    placeholders: compute.ComputeLayerCustom | null;
    preProcessType: compute.ComputeLayer | null;
    postProcessType: compute.ComputeLayer | null;
    preProcessObject: any;
    postProcessObject: any;
    layers: globalThis.Array<compute.ComputeLayer> | null;
    lastLayer: string | null;
    lastOutput: string | null;
    encoder_layer_idx: bigint | number;
    encoder_layer_name: string | null;
    encoder_layer_var: string | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        inputs: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        inputs_gradients: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        outputs: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        fixed_batch_size: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        inputs_sequences: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[4]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[4]] = v;
          },
        },
        outputs_sequences: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[5]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[5]] = v;
          },
        },
        tensor_type: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[6]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[6]] = v;
          },
        },
        lossLayer: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[7]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[7]] = v;
          },
        },
        optimizer: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[8]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[8]] = v;
          },
        },
        seed: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[9]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[9]] = v;
          },
        },
        randomizeSeed: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[10]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[10]] = v;
          },
        },
        placeholders: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[11]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[11]] = v;
          },
        },
        preProcessType: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[12]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[12]] = v;
          },
        },
        postProcessType: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[13]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[13]] = v;
          },
        },
        preProcessObject: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[14]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[14]] = v;
          },
        },
        postProcessObject: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[15]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[15]] = v;
          },
        },
        layers: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[16]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[16]] = v;
          },
        },
        lastLayer: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[17]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[17]] = v;
          },
        },
        lastOutput: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[18]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[18]] = v;
          },
        },
        encoder_layer_idx: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[19]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[19]] = v;
          },
        },
        encoder_layer_name: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[20]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[20]] = v;
          },
        },
        encoder_layer_var: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[21]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[21]] = v;
          },
        },
      });
    }

    static createFrom({inputs, inputs_gradients, outputs, fixed_batch_size, inputs_sequences, outputs_sequences, tensor_type, lossLayer, optimizer, seed, randomizeSeed, placeholders, preProcessType, postProcessType, preProcessObject, postProcessObject, layers, lastLayer, lastOutput, encoder_layer_idx, encoder_layer_name, encoder_layer_var}: {inputs: bigint | number, inputs_gradients: boolean, outputs: bigint | number, fixed_batch_size: bigint | number, inputs_sequences: bigint | number, outputs_sequences: bigint | number, tensor_type: $sdk.std.core.TensorType, lossLayer: compute.ComputeLayerLoss | null, optimizer: compute.ComputeOptimizer, seed: bigint | number, randomizeSeed: boolean, placeholders: compute.ComputeLayerCustom | null, preProcessType: compute.ComputeLayer | null, postProcessType: compute.ComputeLayer | null, preProcessObject: any | null, postProcessObject: any | null, layers: globalThis.Array<compute.ComputeLayer> | null, lastLayer: string | null, lastOutput: string | null, encoder_layer_idx: bigint | number, encoder_layer_name: string | null, encoder_layer_var: string | null}, $g: $sdk.GreyCat = globalThis.greycat.default): AutoEncoderNetwork {
      return new AutoEncoderNetwork($g.abi.libs_by_name.get(algebralib.name)!.mapped[132], inputs, inputs_gradients, outputs, fixed_batch_size, inputs_sequences, outputs_sequences, tensor_type, lossLayer, optimizer, seed, randomizeSeed, placeholders, preProcessType, postProcessType, preProcessObject, postProcessObject, layers, lastLayer, lastOutput, encoder_layer_idx, encoder_layer_name, encoder_layer_var);
    }
    static create(inputs: bigint | number, inputs_gradients: boolean, outputs: bigint | number, fixed_batch_size: bigint | number, inputs_sequences: bigint | number, outputs_sequences: bigint | number, tensor_type: $sdk.std.core.TensorType, lossLayer: compute.ComputeLayerLoss | null, optimizer: compute.ComputeOptimizer, seed: bigint | number, randomizeSeed: boolean, placeholders: compute.ComputeLayerCustom | null, preProcessType: compute.ComputeLayer | null, postProcessType: compute.ComputeLayer | null, preProcessObject: any | null, postProcessObject: any | null, layers: globalThis.Array<compute.ComputeLayer> | null, lastLayer: string | null, lastOutput: string | null, encoder_layer_idx: bigint | number, encoder_layer_name: string | null, encoder_layer_var: string | null, $g: $sdk.GreyCat = globalThis.greycat.default): AutoEncoderNetwork {
      return new AutoEncoderNetwork($g.abi.libs_by_name.get(algebralib.name)!.mapped[132], inputs, inputs_gradients, outputs, fixed_batch_size, inputs_sequences, outputs_sequences, tensor_type, lossLayer, optimizer, seed, randomizeSeed, placeholders, preProcessType, postProcessType, preProcessObject, postProcessObject, layers, lastLayer, lastOutput, encoder_layer_idx, encoder_layer_name, encoder_layer_var);
    }
  }

  export class ComputeLayerTypes extends $sdk.GCEnum {
    static readonly _type = 'nn::ComputeLayerTypes';

    constructor(type: $sdk.AbiType, offset: number, public key: ComputeLayerTypes.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static linear($g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerTypes {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[133];
      return t.enum_values![t.generated_offsets[0]];
    }
    static dense($g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerTypes {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[133];
      return t.enum_values![t.generated_offsets[1]];
    }
    static activation($g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerTypes {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[133];
      return t.enum_values![t.generated_offsets[2]];
    }
    static lstm($g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerTypes {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[133];
      return t.enum_values![t.generated_offsets[3]];
    }
    static loss($g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerTypes {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[133];
      return t.enum_values![t.generated_offsets[4]];
    }
    static filter($g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerTypes {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[133];
      return t.enum_values![t.generated_offsets[5]];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): ComputeLayerTypes[] {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[133];
      return t.enum_values!;
    }
  }

  export namespace ComputeLayerTypes  {
    export type Field = 'linear'|'dense'|'activation'|'lstm'|'loss'|'filter';
  }
  export class ComputeInitializers extends $sdk.GCEnum {
    static readonly _type = 'nn::ComputeInitializers';

    constructor(type: $sdk.AbiType, offset: number, public key: ComputeInitializers.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static none($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[134];
      return t.enum_values![t.generated_offsets[0]];
    }
    static constant($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[134];
      return t.enum_values![t.generated_offsets[1]];
    }
    static sigmoid_uniform($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[134];
      return t.enum_values![t.generated_offsets[2]];
    }
    static lecun_uniform($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[134];
      return t.enum_values![t.generated_offsets[3]];
    }
    static xavier($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[134];
      return t.enum_values![t.generated_offsets[4]];
    }
    static xavier_uniform($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[134];
      return t.enum_values![t.generated_offsets[5]];
    }
    static relu($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[134];
      return t.enum_values![t.generated_offsets[6]];
    }
    static relu_uniform($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[134];
      return t.enum_values![t.generated_offsets[7]];
    }
    static normal($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[134];
      return t.enum_values![t.generated_offsets[8]];
    }
    static normal_in($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[134];
      return t.enum_values![t.generated_offsets[9]];
    }
    static normal_out($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[134];
      return t.enum_values![t.generated_offsets[10]];
    }
    static normal_avg($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[134];
      return t.enum_values![t.generated_offsets[11]];
    }
    static uniform($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[134];
      return t.enum_values![t.generated_offsets[12]];
    }
    static uniform_in($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[134];
      return t.enum_values![t.generated_offsets[13]];
    }
    static uniform_out($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[134];
      return t.enum_values![t.generated_offsets[14]];
    }
    static uniform_avg($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[134];
      return t.enum_values![t.generated_offsets[15]];
    }
    static identity($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[134];
      return t.enum_values![t.generated_offsets[16]];
    }
    static pytorch($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[134];
      return t.enum_values![t.generated_offsets[17]];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): ComputeInitializers[] {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[134];
      return t.enum_values!;
    }
  }

  export namespace ComputeInitializers  {
    export type Field = 'none'|'constant'|'sigmoid_uniform'|'lecun_uniform'|'xavier'|'xavier_uniform'|'relu'|'relu_uniform'|'normal'|'normal_in'|'normal_out'|'normal_avg'|'uniform'|'uniform_in'|'uniform_out'|'uniform_avg'|'identity'|'pytorch';
  }
  export class BindingsResult extends $sdk.GCObject {
    static readonly _type = 'nn::BindingsResult';

    previousLayerName: string;
    previousLayerOutput: string;
    expectedLayerName: string;
    expectedLayerOutput: string;
    postLayer: compute.ComputeLayer | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        previousLayerName: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        previousLayerOutput: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        expectedLayerName: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        expectedLayerOutput: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        postLayer: {
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

    static createFrom({previousLayerName, previousLayerOutput, expectedLayerName, expectedLayerOutput, postLayer}: {previousLayerName: string, previousLayerOutput: string, expectedLayerName: string, expectedLayerOutput: string, postLayer: compute.ComputeLayer | null}, $g: $sdk.GreyCat = globalThis.greycat.default): BindingsResult {
      return new BindingsResult($g.abi.libs_by_name.get(algebralib.name)!.mapped[135], previousLayerName, previousLayerOutput, expectedLayerName, expectedLayerOutput, postLayer);
    }
    static create(previousLayerName: string, previousLayerOutput: string, expectedLayerName: string, expectedLayerOutput: string, postLayer: compute.ComputeLayer | null, $g: $sdk.GreyCat = globalThis.greycat.default): BindingsResult {
      return new BindingsResult($g.abi.libs_by_name.get(algebralib.name)!.mapped[135], previousLayerName, previousLayerOutput, expectedLayerName, expectedLayerOutput, postLayer);
    }
  }

  export class ComputeOptimizers extends $sdk.GCEnum {
    static readonly _type = 'nn::ComputeOptimizers';

    constructor(type: $sdk.AbiType, offset: number, public key: ComputeOptimizers.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static ada_delta($g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[136];
      return t.enum_values![t.generated_offsets[0]];
    }
    static ada_grad($g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[136];
      return t.enum_values![t.generated_offsets[1]];
    }
    static adam($g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[136];
      return t.enum_values![t.generated_offsets[2]];
    }
    static ada_max($g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[136];
      return t.enum_values![t.generated_offsets[3]];
    }
    static nadam($g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[136];
      return t.enum_values![t.generated_offsets[4]];
    }
    static ftrl($g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[136];
      return t.enum_values![t.generated_offsets[5]];
    }
    static sgd($g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[136];
      return t.enum_values![t.generated_offsets[6]];
    }
    static rms_prop($g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[136];
      return t.enum_values![t.generated_offsets[7]];
    }
    static momentum($g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[136];
      return t.enum_values![t.generated_offsets[8]];
    }
    static nesterov($g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizers {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[136];
      return t.enum_values![t.generated_offsets[9]];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): ComputeOptimizers[] {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[136];
      return t.enum_values!;
    }
  }

  export namespace ComputeOptimizers  {
    export type Field = 'ada_delta'|'ada_grad'|'adam'|'ada_max'|'nadam'|'ftrl'|'sgd'|'rms_prop'|'momentum'|'nesterov';
  }
  export class PostProcessType extends $sdk.GCEnum {
    static readonly _type = 'nn::PostProcessType';

    constructor(type: $sdk.AbiType, offset: number, public key: PostProcessType.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static none($g: $sdk.GreyCat = globalThis.greycat.default): PostProcessType {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[137];
      return t.enum_values![t.generated_offsets[0]];
    }
    static min_max_scaling($g: $sdk.GreyCat = globalThis.greycat.default): PostProcessType {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[137];
      return t.enum_values![t.generated_offsets[1]];
    }
    static standard_scaling($g: $sdk.GreyCat = globalThis.greycat.default): PostProcessType {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[137];
      return t.enum_values![t.generated_offsets[2]];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): PostProcessType[] {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[137];
      return t.enum_values!;
    }
  }

  export namespace PostProcessType  {
    export type Field = 'none'|'min_max_scaling'|'standard_scaling';
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
    lossLayer: compute.ComputeLayerLoss | null;
    optimizer: compute.ComputeOptimizer;
    seed: bigint | number;
    randomizeSeed: boolean;
    placeholders: compute.ComputeLayerCustom | null;
    preProcessType: compute.ComputeLayer | null;
    postProcessType: compute.ComputeLayer | null;
    preProcessObject: any;
    postProcessObject: any;
    layers: globalThis.Array<compute.ComputeLayer> | null;
    lastLayer: string | null;
    lastOutput: string | null;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        inputs: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        inputs_gradients: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        outputs: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        fixed_batch_size: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        inputs_sequences: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[4]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[4]] = v;
          },
        },
        outputs_sequences: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[5]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[5]] = v;
          },
        },
        tensor_type: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[6]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[6]] = v;
          },
        },
        lossLayer: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[7]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[7]] = v;
          },
        },
        optimizer: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[8]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[8]] = v;
          },
        },
        seed: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[9]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[9]] = v;
          },
        },
        randomizeSeed: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[10]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[10]] = v;
          },
        },
        placeholders: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[11]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[11]] = v;
          },
        },
        preProcessType: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[12]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[12]] = v;
          },
        },
        postProcessType: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[13]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[13]] = v;
          },
        },
        preProcessObject: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[14]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[14]] = v;
          },
        },
        postProcessObject: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[15]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[15]] = v;
          },
        },
        layers: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[16]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[16]] = v;
          },
        },
        lastLayer: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[17]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[17]] = v;
          },
        },
        lastOutput: {
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

    static err_negative_in_out($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[138];
      return  t.static_values[0] as string;
    }
    static err_last_layer_wrong($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[138];
      return  t.static_values[1] as string;
    }
    static err_incompatible_loss($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[138];
      return  t.static_values[2] as string;
    }
    static err_layer_not_supported($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[138];
      return  t.static_values[3] as string;
    }
    static err_tensor_type_not_supported($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[138];
      return  t.static_values[4] as string;
    }
    static err_minimum_layers($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[138];
      return  t.static_values[5] as string;
    }
    static layer_placeholders_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[138];
      return  t.static_values[6] as string;
    }
    static layer_classification_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[138];
      return  t.static_values[7] as string;
    }
    static layer_loss_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[138];
      return  t.static_values[8] as string;
    }
    static var_inputs_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[138];
      return  t.static_values[9] as string;
    }
    static var_enc_inputs_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[138];
      return  t.static_values[10] as string;
    }
    static var_targets_name($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[138];
      return  t.static_values[11] as string;
    }
    static var_classifier_classes($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[138];
      return  t.static_values[12] as string;
    }
    static var_classifier_probabilities($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[138];
      return  t.static_values[13] as string;
    }
    static var_classifier_class_weights($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[138];
      return  t.static_values[14] as string;
    }
    static pre_process($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[138];
      return  t.static_values[15] as string;
    }
    static input_avg($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[138];
      return  t.static_values[16] as string;
    }
    static input_min($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[138];
      return  t.static_values[17] as string;
    }
    static input_max($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[138];
      return  t.static_values[18] as string;
    }
    static input_std($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[138];
      return  t.static_values[19] as string;
    }
    static input_space($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[138];
      return  t.static_values[20] as string;
    }
    static output_avg($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[138];
      return  t.static_values[21] as string;
    }
    static output_min($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[138];
      return  t.static_values[22] as string;
    }
    static output_max($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[138];
      return  t.static_values[23] as string;
    }
    static output_std($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[138];
      return  t.static_values[24] as string;
    }
    static post_process($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[138];
      return  t.static_values[25] as string;
    }
    static seq_predict($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[138];
      return  t.static_values[26] as string;
    }
    static seq_learn($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[138];
      return  t.static_values[27] as string;
    }
    static seq_encode($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[138];
      return  t.static_values[28] as string;
    }
    static seq_decode($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[138];
      return  t.static_values[29] as string;
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
    lossLayer: compute.ComputeLayerLoss | null;
    optimizer: compute.ComputeOptimizer;
    seed: bigint | number;
    randomizeSeed: boolean;
    placeholders: compute.ComputeLayerCustom | null;
    preProcessType: compute.ComputeLayer | null;
    postProcessType: compute.ComputeLayer | null;
    preProcessObject: any;
    postProcessObject: any;
    layers: globalThis.Array<compute.ComputeLayer> | null;
    lastLayer: string | null;
    lastOutput: string | null;
    calculate_probabilities: boolean;
    has_class_weights: boolean;
    from_logits: boolean;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        inputs: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        inputs_gradients: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        outputs: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        fixed_batch_size: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        inputs_sequences: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[4]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[4]] = v;
          },
        },
        outputs_sequences: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[5]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[5]] = v;
          },
        },
        tensor_type: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[6]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[6]] = v;
          },
        },
        lossLayer: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[7]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[7]] = v;
          },
        },
        optimizer: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[8]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[8]] = v;
          },
        },
        seed: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[9]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[9]] = v;
          },
        },
        randomizeSeed: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[10]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[10]] = v;
          },
        },
        placeholders: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[11]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[11]] = v;
          },
        },
        preProcessType: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[12]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[12]] = v;
          },
        },
        postProcessType: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[13]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[13]] = v;
          },
        },
        preProcessObject: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[14]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[14]] = v;
          },
        },
        postProcessObject: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[15]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[15]] = v;
          },
        },
        layers: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[16]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[16]] = v;
          },
        },
        lastLayer: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[17]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[17]] = v;
          },
        },
        lastOutput: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[18]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[18]] = v;
          },
        },
        calculate_probabilities: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[19]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[19]] = v;
          },
        },
        has_class_weights: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[20]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[20]] = v;
          },
        },
        from_logits: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[21]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[21]] = v;
          },
        },
      });
    }

    static createFrom({inputs, inputs_gradients, outputs, fixed_batch_size, inputs_sequences, outputs_sequences, tensor_type, lossLayer, optimizer, seed, randomizeSeed, placeholders, preProcessType, postProcessType, preProcessObject, postProcessObject, layers, lastLayer, lastOutput, calculate_probabilities, has_class_weights, from_logits}: {inputs: bigint | number, inputs_gradients: boolean, outputs: bigint | number, fixed_batch_size: bigint | number, inputs_sequences: bigint | number, outputs_sequences: bigint | number, tensor_type: $sdk.std.core.TensorType, lossLayer: compute.ComputeLayerLoss | null, optimizer: compute.ComputeOptimizer, seed: bigint | number, randomizeSeed: boolean, placeholders: compute.ComputeLayerCustom | null, preProcessType: compute.ComputeLayer | null, postProcessType: compute.ComputeLayer | null, preProcessObject: any | null, postProcessObject: any | null, layers: globalThis.Array<compute.ComputeLayer> | null, lastLayer: string | null, lastOutput: string | null, calculate_probabilities: boolean, has_class_weights: boolean, from_logits: boolean}, $g: $sdk.GreyCat = globalThis.greycat.default): ClassificationNetwork {
      return new ClassificationNetwork($g.abi.libs_by_name.get(algebralib.name)!.mapped[139], inputs, inputs_gradients, outputs, fixed_batch_size, inputs_sequences, outputs_sequences, tensor_type, lossLayer, optimizer, seed, randomizeSeed, placeholders, preProcessType, postProcessType, preProcessObject, postProcessObject, layers, lastLayer, lastOutput, calculate_probabilities, has_class_weights, from_logits);
    }
    static create(inputs: bigint | number, inputs_gradients: boolean, outputs: bigint | number, fixed_batch_size: bigint | number, inputs_sequences: bigint | number, outputs_sequences: bigint | number, tensor_type: $sdk.std.core.TensorType, lossLayer: compute.ComputeLayerLoss | null, optimizer: compute.ComputeOptimizer, seed: bigint | number, randomizeSeed: boolean, placeholders: compute.ComputeLayerCustom | null, preProcessType: compute.ComputeLayer | null, postProcessType: compute.ComputeLayer | null, preProcessObject: any | null, postProcessObject: any | null, layers: globalThis.Array<compute.ComputeLayer> | null, lastLayer: string | null, lastOutput: string | null, calculate_probabilities: boolean, has_class_weights: boolean, from_logits: boolean, $g: $sdk.GreyCat = globalThis.greycat.default): ClassificationNetwork {
      return new ClassificationNetwork($g.abi.libs_by_name.get(algebralib.name)!.mapped[139], inputs, inputs_gradients, outputs, fixed_batch_size, inputs_sequences, outputs_sequences, tensor_type, lossLayer, optimizer, seed, randomizeSeed, placeholders, preProcessType, postProcessType, preProcessObject, postProcessObject, layers, lastLayer, lastOutput, calculate_probabilities, has_class_weights, from_logits);
    }
  }

  export class PreProcessType extends $sdk.GCEnum {
    static readonly _type = 'nn::PreProcessType';

    constructor(type: $sdk.AbiType, offset: number, public key: PreProcessType.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static none($g: $sdk.GreyCat = globalThis.greycat.default): PreProcessType {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[140];
      return t.enum_values![t.generated_offsets[0]];
    }
    static min_max_scaling($g: $sdk.GreyCat = globalThis.greycat.default): PreProcessType {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[140];
      return t.enum_values![t.generated_offsets[1]];
    }
    static standard_scaling($g: $sdk.GreyCat = globalThis.greycat.default): PreProcessType {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[140];
      return t.enum_values![t.generated_offsets[2]];
    }
    static pca_scaling($g: $sdk.GreyCat = globalThis.greycat.default): PreProcessType {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[140];
      return t.enum_values![t.generated_offsets[3]];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): PreProcessType[] {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[140];
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

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

    static var_input($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
      return  t.static_values[0] as string;
    }
    static var_assignement($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
      return  t.static_values[1] as string;
    }
    static var_min_distance($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
      return  t.static_values[2] as string;
    }
    static varo_centroids($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
      return  t.static_values[3] as string;
    }
    static var_distance($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
      return  t.static_values[4] as string;
    }
    static var_sum_centroids($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
      return  t.static_values[5] as string;
    }
    static var_sum_min_distance($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
      return  t.static_values[6] as string;
    }
    static var_count_centroids($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
      return  t.static_values[7] as string;
    }
    static var_centroid_distances($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
      return  t.static_values[8] as string;
    }
    static var_sum_cluster_distances($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
      return  t.static_values[9] as string;
    }
    static var_avg_cluster_distances($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
      return  t.static_values[10] as string;
    }
    static var_count_cluster_distances($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
      return  t.static_values[11] as string;
    }
    static layer_placeholders($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
      return  t.static_values[12] as string;
    }
    static layer_forward($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
      return  t.static_values[13] as string;
    }
    static layer_backward($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
      return  t.static_values[14] as string;
    }
    static layer_init_round($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
      return  t.static_values[15] as string;
    }
    static layer_end_round($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
      return  t.static_values[16] as string;
    }
    static layer_stats($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
      return  t.static_values[17] as string;
    }
    static seq_init_round($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
      return  t.static_values[18] as string;
    }
    static seq_forward($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
      return  t.static_values[19] as string;
    }
    static seq_backward($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
      return  t.static_values[20] as string;
    }
    static seq_end_round($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
      return  t.static_values[21] as string;
    }
    static seq_stats($g: $sdk.GreyCat = globalThis.greycat.default): string {
      const t = $g.abi.libs_by_name.get(algebralib.name)!.mapped[141];
      return  t.static_values[22] as string;
    }
    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): Kmeans {
      return new Kmeans($g.abi.libs_by_name.get(algebralib.name)!.mapped[141]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): Kmeans {
      return new Kmeans($g.abi.libs_by_name.get(algebralib.name)!.mapped[141]);
    }
  }

}

export namespace ml {
  export class Polynomial extends algebra_n.ml.Polynomial {}

  export class PCA extends algebra_n.ml.PCA {}

  export class HeatMapProfile extends $sdk.GCObject {
    static readonly _type = 'ml::HeatMapProfile';

    counts: $sdk.std.core.Table<bigint | number>;
    x_labels: globalThis.Array<string>;
    y_labels: globalThis.Array<string>;
    counts_max: bigint | number;
    counts_sum: bigint | number;
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        counts: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        x_labels: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        y_labels: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        counts_max: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        counts_sum: {
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

    static createFrom({counts, x_labels, y_labels, counts_max, counts_sum}: {counts: $sdk.std.core.Table<bigint | number>, x_labels: globalThis.Array<string>, y_labels: globalThis.Array<string>, counts_max: bigint | number, counts_sum: bigint | number}, $g: $sdk.GreyCat = globalThis.greycat.default): HeatMapProfile {
      return new HeatMapProfile($g.abi.libs_by_name.get(algebralib.name)!.mapped[144], counts, x_labels, y_labels, counts_max, counts_sum);
    }
    static create(counts: $sdk.std.core.Table<bigint | number>, x_labels: globalThis.Array<string>, y_labels: globalThis.Array<string>, counts_max: bigint | number, counts_sum: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default): HeatMapProfile {
      return new HeatMapProfile($g.abi.libs_by_name.get(algebralib.name)!.mapped[144], counts, x_labels, y_labels, counts_max, counts_sum);
    }
  }

  export class GaussianND extends algebra_n.ml.GaussianND {}

  export class Solver extends $sdk.GCObject {
    static readonly _type = 'ml::Solver';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): Solver {
      return new Solver($g.abi.libs_by_name.get(algebralib.name)!.mapped[146]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): Solver {
      return new Solver($g.abi.libs_by_name.get(algebralib.name)!.mapped[146]);
    }
  }

  export class TimeSeriesDecomposition extends $sdk.GCObject {
    static readonly _type = 'ml::TimeSeriesDecomposition';

    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
    }

    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): TimeSeriesDecomposition {
      return new TimeSeriesDecomposition($g.abi.libs_by_name.get(algebralib.name)!.mapped[147]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): TimeSeriesDecomposition {
      return new TimeSeriesDecomposition($g.abi.libs_by_name.get(algebralib.name)!.mapped[147]);
    }
  }

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
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        p_from_mw: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        q_from_mvar: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        p_to_mw: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        q_to_mvar: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        pl_mw: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[4]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[4]] = v;
          },
        },
        ql_mvar: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[5]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[5]] = v;
          },
        },
        i_from_ka: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[6]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[6]] = v;
          },
        },
        i_to_ka: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[7]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[7]] = v;
          },
        },
        i_ka: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[8]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[8]] = v;
          },
        },
        vm_from_pu: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[9]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[9]] = v;
          },
        },
        vm_to_pu: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[10]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[10]] = v;
          },
        },
        va_from_radians: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[11]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[11]] = v;
          },
        },
        va_to_radians: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[12]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[12]] = v;
          },
        },
        loading_percent: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[13]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[13]] = v;
          },
        },
      });
    }

    static createFrom({p_from_mw, q_from_mvar, p_to_mw, q_to_mvar, pl_mw, ql_mvar, i_from_ka, i_to_ka, i_ka, vm_from_pu, vm_to_pu, va_from_radians, va_to_radians, loading_percent}: {p_from_mw: number, q_from_mvar: number, p_to_mw: number, q_to_mvar: number, pl_mw: number, ql_mvar: number, i_from_ka: number, i_to_ka: number, i_ka: number, vm_from_pu: number, vm_to_pu: number, va_from_radians: number, va_to_radians: number, loading_percent: number}, $g: $sdk.GreyCat = globalThis.greycat.default): PowerLineResult {
      return new PowerLineResult($g.abi.libs_by_name.get(algebralib.name)!.mapped[148], p_from_mw, q_from_mvar, p_to_mw, q_to_mvar, pl_mw, ql_mvar, i_from_ka, i_to_ka, i_ka, vm_from_pu, vm_to_pu, va_from_radians, va_to_radians, loading_percent);
    }
    static create(p_from_mw: number, q_from_mvar: number, p_to_mw: number, q_to_mvar: number, pl_mw: number, ql_mvar: number, i_from_ka: number, i_to_ka: number, i_ka: number, vm_from_pu: number, vm_to_pu: number, va_from_radians: number, va_to_radians: number, loading_percent: number, $g: $sdk.GreyCat = globalThis.greycat.default): PowerLineResult {
      return new PowerLineResult($g.abi.libs_by_name.get(algebralib.name)!.mapped[148], p_from_mw, q_from_mvar, p_to_mw, q_to_mvar, pl_mw, ql_mvar, i_from_ka, i_to_ka, i_ka, vm_from_pu, vm_to_pu, va_from_radians, va_to_radians, loading_percent);
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
    constructor(type: $sdk.AbiType, ...attributes: any[]) {
      super(type, ...attributes);
      Object.defineProperties(this, {
        abs: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[0]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[0]] = v;
          },
        },
        angle_radians: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[1]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[1]] = v;
          },
        },
        voltage: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[2]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[2]] = v;
          },
        },
        voltage_img: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[3]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[3]] = v;
          },
        },
        current: {
          enumerate: true,
          get() {
            return this.$attrs[this.$type.generated_offsets[4]];
          },
          set(v) {
            this.$attrs[this.$type.generated_offsets[4]] = v;
          },
        },
        current_img: {
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

    static createFrom({abs, angle_radians, voltage, voltage_img, current, current_img}: {abs: number, angle_radians: number, voltage: number, voltage_img: number, current: number, current_img: number}, $g: $sdk.GreyCat = globalThis.greycat.default): PowerBusResult {
      return new PowerBusResult($g.abi.libs_by_name.get(algebralib.name)!.mapped[149], abs, angle_radians, voltage, voltage_img, current, current_img);
    }
    static create(abs: number, angle_radians: number, voltage: number, voltage_img: number, current: number, current_img: number, $g: $sdk.GreyCat = globalThis.greycat.default): PowerBusResult {
      return new PowerBusResult($g.abi.libs_by_name.get(algebralib.name)!.mapped[149], abs, angle_radians, voltage, voltage_img, current, current_img);
    }
  }

}

export const algebralib: $sdk.Library = {
  name: 'algebra',
  mapped: [],
  configure(loaders, factories) {
    factories.set(compute.ComputeLayerMinMaxScaler._type, compute.ComputeLayerMinMaxScaler);
    factories.set(compute.ComputeOptimizerMomentum._type, compute.ComputeOptimizerMomentum);
    factories.set(compute.ComputeOperationMatMul._type, compute.ComputeOperationMatMul);
    factories.set(compute.ComputeOperationScale._type, compute.ComputeOperationScale);
    factories.set(compute.ComputeOperationFilter._type, compute.ComputeOperationFilter);
    factories.set(compute.ComputeVarProxy._type, compute.ComputeVarProxy);
    factories.set(compute.ComputeOperationEuclidean._type, compute.ComputeOperationEuclidean);
    factories.set(compute.ComputeRegularizer._type, compute.ComputeRegularizer);
    factories.set(compute.ComputeOperationAdd._type, compute.ComputeOperationAdd);
    factories.set(compute.ComputeOperationSoftmax._type, compute.ComputeOperationSoftmax);
    factories.set(compute.ComputeOptimizer._type, compute.ComputeOptimizer);
    factories.set(compute.ComputeInitializerXavier._type, compute.ComputeInitializerXavier);
    factories.set(compute.ComputeModel._type, compute.ComputeModel);
    factories.set(compute.ComputeLayerPCAScaler._type, compute.ComputeLayerPCAScaler);
    factories.set(compute.ComputeOperationHardSigmoid._type, compute.ComputeOperationHardSigmoid);
    factories.set(compute.ComputeInitializerSigmoidUniform._type, compute.ComputeInitializerSigmoidUniform);
    factories.set(compute.ComputeLayerLossClassification._type, compute.ComputeLayerLossClassification);
    factories.set(compute.ComputeOperationAcos._type, compute.ComputeOperationAcos);
    factories.set(compute.ComputeOperationNeg._type, compute.ComputeOperationNeg);
    factories.set(compute.ComputeInitializerUniformOut._type, compute.ComputeInitializerUniformOut);
    factories.set(compute.ComputeOptimizerNadam._type, compute.ComputeOptimizerNadam);
    factories.set(compute.ComputeOperationArgMax._type, compute.ComputeOperationArgMax);
    factories.set(compute.ComputeOptimizerAdaMax._type, compute.ComputeOptimizerAdaMax);
    factories.set(compute.ComputeRegressionLoss._type, compute.ComputeRegressionLoss);
    factories.set(compute.ComputeOperationExp._type, compute.ComputeOperationExp);
    factories.set(compute.ComputeOperationSigmoid._type, compute.ComputeOperationSigmoid);
    factories.set(compute.ComputeOperationArg._type, compute.ComputeOperationArg);
    factories.set(compute.ComputeOperationAtanh._type, compute.ComputeOperationAtanh);
    factories.set(compute.ComputeVarConst._type, compute.ComputeVarConst);
    factories.set(compute.ComputeLayerLoss._type, compute.ComputeLayerLoss);
    factories.set(compute.ComputeOperationSoftplus._type, compute.ComputeOperationSoftplus);
    factories.set(compute.ComputeVarInOut._type, compute.ComputeVarInOut);
    factories.set(compute.ComputeOperationLeCunTanh._type, compute.ComputeOperationLeCunTanh);
    factories.set(compute.ComputeLayerLossRegression._type, compute.ComputeLayerLossRegression);
    factories.set(compute.ComputeOperationAsin._type, compute.ComputeOperationAsin);
    factories.set(compute.ComputeLayerCustom._type, compute.ComputeLayerCustom);
    factories.set(compute.ComputeLayerFilter._type, compute.ComputeLayerFilter);
    factories.set(compute.ComputeCounter._type, compute.ComputeCounter);
    factories.set(compute.ComputeOperationSign._type, compute.ComputeOperationSign);
    factories.set(compute.ComputeInitializerNormalIn._type, compute.ComputeInitializerNormalIn);
    factories.set(compute.ComputeLayerSeq._type, compute.ComputeLayerSeq);
    factories.set(compute.ComputeOptimizerFtrl._type, compute.ComputeOptimizerFtrl);
    factories.set(compute.ComputeOperationSelu._type, compute.ComputeOperationSelu);
    factories.set(compute.ComputeOperationClip._type, compute.ComputeOperationClip);
    factories.set(compute.ComputeInitializer._type, compute.ComputeInitializer);
    factories.set(compute.ComputeOptimizerAdaGrad._type, compute.ComputeOptimizerAdaGrad);
    factories.set(compute.ComputeOperationSum._type, compute.ComputeOperationSum);
    factories.set(compute.ComputeOptimizerAdaDelta._type, compute.ComputeOptimizerAdaDelta);
    factories.set(compute.ComputeLayerLSTM._type, compute.ComputeLayerLSTM);
    factories.set(compute.ComputeActivationTanh._type, compute.ComputeActivationTanh);
    factories.set(compute.ComputeInitializerXavierUniform._type, compute.ComputeInitializerXavierUniform);
    factories.set(compute.ComputeOperationSqrt._type, compute.ComputeOperationSqrt);
    factories.set(compute.ComputeActivationExp._type, compute.ComputeActivationExp);
    factories.set(compute.ComputeInitializerLSTM._type, compute.ComputeInitializerLSTM);
    factories.set(compute.ComputeOperationRaiseToPower._type, compute.ComputeOperationRaiseToPower);
    factories.set(compute.ComputeOperationElu._type, compute.ComputeOperationElu);
    factories.set(compute.ComputeReduction._type, compute.ComputeReduction);
    factories.set(compute.ComputeOperationLogSoftmax._type, compute.ComputeOperationLogSoftmax);
    factories.set(compute.ComputeOperation1In1Out._type, compute.ComputeOperation1In1Out);
    factories.set(compute.ComputeOperationRelu._type, compute.ComputeOperationRelu);
    factories.set(compute.ComputeActivationElu._type, compute.ComputeActivationElu);
    factories.set(compute.ComputeBinding._type, compute.ComputeBinding);
    factories.set(compute.ComputeVariable._type, compute.ComputeVariable);
    factories.set(compute.ComputeLayerCall._type, compute.ComputeLayerCall);
    factories.set(compute.ComputeInitializerLeCunUniform._type, compute.ComputeInitializerLeCunUniform);
    factories.set(compute.ComputeLayer._type, compute.ComputeLayer);
    factories.set(compute.ComputeActivationSoftmax._type, compute.ComputeActivationSoftmax);
    factories.set(compute.ComputeInitializerUniform._type, compute.ComputeInitializerUniform);
    factories.set(compute.ComputeOperationDiv._type, compute.ComputeOperationDiv);
    factories.set(compute.ComputeActivationSoftplus._type, compute.ComputeActivationSoftplus);
    factories.set(compute.ComputeOperationArgMin._type, compute.ComputeOperationArgMin);
    factories.set(compute.ComputeOperationFill._type, compute.ComputeOperationFill);
    factories.set(compute.ComputeInitializerUniformAvg._type, compute.ComputeInitializerUniformAvg);
    factories.set(compute.ComputeLayerStandardScaler._type, compute.ComputeLayerStandardScaler);
    factories.set(compute.ComputeInitializerReluUniform._type, compute.ComputeInitializerReluUniform);
    factories.set(compute.ComputeInitializerNormalOut._type, compute.ComputeInitializerNormalOut);
    factories.set(compute.ComputeLayerDense._type, compute.ComputeLayerDense);
    factories.set(compute.ComputeOptimizerRmsProp._type, compute.ComputeOptimizerRmsProp);
    factories.set(compute.ComputeActivationLeakyRelu._type, compute.ComputeActivationLeakyRelu);
    factories.set(compute.ComputeOperationAbs._type, compute.ComputeOperationAbs);
    factories.set(compute.ComputeOperationCos._type, compute.ComputeOperationCos);
    factories.set(compute.ComputeOperation2In1Out._type, compute.ComputeOperation2In1Out);
    factories.set(compute.ComputeLayerActivation._type, compute.ComputeLayerActivation);
    factories.set(compute.ComputeLayerLinear._type, compute.ComputeLayerLinear);
    factories.set(compute.ComputeOperationAtan._type, compute.ComputeOperationAtan);
    factories.set(compute.ComputeOperationAvg._type, compute.ComputeOperationAvg);
    factories.set(compute.ComputeActivationCelu._type, compute.ComputeActivationCelu);
    factories.set(compute.ComputeActivationSigmoid._type, compute.ComputeActivationSigmoid);
    factories.set(compute.ComputeClassificationLoss._type, compute.ComputeClassificationLoss);
    factories.set(compute.ComputeOptimizerNesterov._type, compute.ComputeOptimizerNesterov);
    factories.set(compute.ComputeOptimizerSgd._type, compute.ComputeOptimizerSgd);
    factories.set(compute.ComputeActivation._type, compute.ComputeActivation);
    factories.set(compute.ComputeOperationSin._type, compute.ComputeOperationSin);
    factories.set(compute.ComputeInitializerGlorotUniform._type, compute.ComputeInitializerGlorotUniform);
    factories.set(compute.ComputeOperationAsinh._type, compute.ComputeOperationAsinh);
    factories.set(compute.ComputeOperationSub._type, compute.ComputeOperationSub);
    factories.set(compute.ComputeInitializerConstant._type, compute.ComputeInitializerConstant);
    factories.set(compute.ComputeInitializerIdentity._type, compute.ComputeInitializerIdentity);
    factories.set(compute.ComputeActivationSoftSign._type, compute.ComputeActivationSoftSign);
    factories.set(compute.ComputeActivationRelu._type, compute.ComputeActivationRelu);
    factories.set(compute.ComputeOperationTanh._type, compute.ComputeOperationTanh);
    factories.set(compute.ComputeInitializerPytorch._type, compute.ComputeInitializerPytorch);
    factories.set(compute.ComputeOperationCelu._type, compute.ComputeOperationCelu);
    factories.set(compute.ComputeInitializerNormalAvg._type, compute.ComputeInitializerNormalAvg);
    factories.set(compute.ComputeActivationSelu._type, compute.ComputeActivationSelu);
    factories.set(compute.ComputeEngine._type, compute.ComputeEngine);
    loaders.set(compute.ComputeEngine._type, algebra_n.compute.ComputeEngine.load);
    factories.set(compute.ComputeOperation._type, compute.ComputeOperation);
    factories.set(compute.ComputeInitializerRelu._type, compute.ComputeInitializerRelu);
    factories.set(compute.ComputeOperationLeakyRelu._type, compute.ComputeOperationLeakyRelu);
    factories.set(compute.ComputeOperationSoftSign._type, compute.ComputeOperationSoftSign);
    factories.set(compute.ComputeOperationTan._type, compute.ComputeOperationTan);
    factories.set(compute.ComputeVarOptimize._type, compute.ComputeVarOptimize);
    factories.set(compute.ComputeInitializerNone._type, compute.ComputeInitializerNone);
    factories.set(compute.ComputeOperationLog._type, compute.ComputeOperationLog);
    factories.set(compute.ComputeOperationMul._type, compute.ComputeOperationMul);
    factories.set(compute.ComputeOperationPow._type, compute.ComputeOperationPow);
    factories.set(compute.ComputeLayerClassification._type, compute.ComputeLayerClassification);
    factories.set(compute.ComputeOperationSumIf._type, compute.ComputeOperationSumIf);
    factories.set(compute.ComputeOperationCosh._type, compute.ComputeOperationCosh);
    factories.set(compute.ComputeOperationAddBias._type, compute.ComputeOperationAddBias);
    factories.set(compute.ComputeOperationSinh._type, compute.ComputeOperationSinh);
    factories.set(compute.ComputeOptimizerAdam._type, compute.ComputeOptimizerAdam);
    factories.set(compute.ComputeState._type, compute.ComputeState);
    loaders.set(compute.ComputeState._type, algebra_n.compute.ComputeState.load);
    factories.set(compute.ComputeInitializerUniformIn._type, compute.ComputeInitializerUniformIn);
    factories.set(compute.ComputeOperationAcosh._type, compute.ComputeOperationAcosh);
    factories.set(compute.ComputeActivationHardSigmoid._type, compute.ComputeActivationHardSigmoid);
    factories.set(compute.ComputeVar._type, compute.ComputeVar);
    factories.set(compute.ComputeInitializerNormal._type, compute.ComputeInitializerNormal);
    factories.set(nn_layers_names.NNLayersNames._type, nn_layers_names.NNLayersNames);
    factories.set(nn.RegressionNetwork._type, nn.RegressionNetwork);
    factories.set(nn.InitializerConfig._type, nn.InitializerConfig);
    factories.set(nn.ComputeActivations._type, nn.ComputeActivations);
    factories.set(nn.AutoEncoderNetwork._type, nn.AutoEncoderNetwork);
    factories.set(nn.ComputeLayerTypes._type, nn.ComputeLayerTypes);
    factories.set(nn.ComputeInitializers._type, nn.ComputeInitializers);
    factories.set(nn.BindingsResult._type, nn.BindingsResult);
    factories.set(nn.ComputeOptimizers._type, nn.ComputeOptimizers);
    factories.set(nn.PostProcessType._type, nn.PostProcessType);
    factories.set(nn.NeuralNetwork._type, nn.NeuralNetwork);
    factories.set(nn.ClassificationNetwork._type, nn.ClassificationNetwork);
    factories.set(nn.PreProcessType._type, nn.PreProcessType);
    factories.set(kmeans.Kmeans._type, kmeans.Kmeans);
    factories.set(ml.Polynomial._type, ml.Polynomial);
    loaders.set(ml.Polynomial._type, algebra_n.ml.Polynomial.load);
    factories.set(ml.PCA._type, ml.PCA);
    loaders.set(ml.PCA._type, algebra_n.ml.PCA.load);
    factories.set(ml.HeatMapProfile._type, ml.HeatMapProfile);
    factories.set(ml.GaussianND._type, ml.GaussianND);
    loaders.set(ml.GaussianND._type, algebra_n.ml.GaussianND.load);
    factories.set(ml.Solver._type, ml.Solver);
    factories.set(ml.TimeSeriesDecomposition._type, ml.TimeSeriesDecomposition);
    factories.set(powerflow.PowerLineResult._type, powerflow.PowerLineResult);
    factories.set(powerflow.PowerBusResult._type, powerflow.PowerBusResult);
  },
  init(abi) {
    this.mapped.length = 150;
    this.mapped[0] = abi.type_by_fqn.get(compute.ComputeLayerMinMaxScaler._type)!;
    this.mapped[0].resolveGeneratedOffsets('name','type','inverse_transform');
    this.mapped[0].static_values = ["input","output","min","max"];
    this.mapped[1] = abi.type_by_fqn.get(compute.ComputeOptimizerMomentum._type)!;
    this.mapped[1].resolveGeneratedOffsets('learning_rate','decay_rate');
    this.mapped[1].static_values = [0.001,0.9];
    this.mapped[2] = abi.type_by_fqn.get(compute.ComputeOperationMatMul._type)!;
    this.mapped[2].resolveGeneratedOffsets('input','input2','output','transposeA','transposeB','alpha','beta');
    this.mapped[2].static_values = [false,1.0,0.0];
    this.mapped[3] = abi.type_by_fqn.get(compute.ComputeOperationScale._type)!;
    this.mapped[3].resolveGeneratedOffsets('input','output','alpha');
    this.mapped[4] = abi.type_by_fqn.get(compute.ComputeOperationFilter._type)!;
    this.mapped[4].resolveGeneratedOffsets('input','output','mask','nbOutputs');
    this.mapped[5] = abi.type_by_fqn.get(compute.ComputeVarProxy._type)!;
    this.mapped[5].resolveGeneratedOffsets('name');
    this.mapped[6] = abi.type_by_fqn.get(compute.ComputeOperationEuclidean._type)!;
    this.mapped[6].resolveGeneratedOffsets('input','input2','output');
    this.mapped[7] = abi.type_by_fqn.get(compute.ComputeRegularizer._type)!;
    this.mapped[7].resolveGeneratedOffsets('l1','l2');
    this.mapped[8] = abi.type_by_fqn.get(compute.ComputeOperationAdd._type)!;
    this.mapped[8].resolveGeneratedOffsets('input','input2','output');
    this.mapped[9] = abi.type_by_fqn.get(compute.ComputeOperationSoftmax._type)!;
    this.mapped[9].resolveGeneratedOffsets('input','output');
    this.mapped[10] = abi.type_by_fqn.get(compute.ComputeOptimizer._type)!;
    this.mapped[10].resolveGeneratedOffsets('learning_rate');
    this.mapped[11] = abi.type_by_fqn.get(compute.ComputeInitializerXavier._type)!;
    this.mapped[12] = abi.type_by_fqn.get(compute.ComputeModel._type)!;
    this.mapped[12].resolveGeneratedOffsets('layers');
    this.mapped[13] = abi.type_by_fqn.get(compute.ComputeLayerPCAScaler._type)!;
    this.mapped[13].resolveGeneratedOffsets('name','type','inverse_transform');
    this.mapped[13].static_values = ["input","output","avg","std","space"];
    this.mapped[14] = abi.type_by_fqn.get(compute.ComputeOperationHardSigmoid._type)!;
    this.mapped[14].resolveGeneratedOffsets('input','output','slope','shift');
    this.mapped[14].static_values = [0.2,0.5];
    this.mapped[15] = abi.type_by_fqn.get(compute.ComputeInitializerSigmoidUniform._type)!;
    this.mapped[16] = abi.type_by_fqn.get(compute.ComputeLayerLossClassification._type)!;
    this.mapped[16].resolveGeneratedOffsets('name','reduction','loss_type','has_class_weights','calculate_probabilities','from_logits');
    this.mapped[16].static_values = ["class_weights","predicted_classes","probabilities","sum_reduce"];
    this.mapped[17] = abi.type_by_fqn.get(compute.ComputeOperationAcos._type)!;
    this.mapped[17].resolveGeneratedOffsets('input','output');
    this.mapped[18] = abi.type_by_fqn.get(compute.ComputeOperationNeg._type)!;
    this.mapped[18].resolveGeneratedOffsets('input','output');
    this.mapped[19] = abi.type_by_fqn.get(compute.ComputeInitializerUniformOut._type)!;
    this.mapped[20] = abi.type_by_fqn.get(compute.ComputeOptimizerNadam._type)!;
    this.mapped[20].resolveGeneratedOffsets('learning_rate','beta1','beta2','smooth_epsilon');
    this.mapped[20].static_values = [0.001,0.9,0.999,0.0000001];
    this.mapped[21] = abi.type_by_fqn.get(compute.ComputeOperationArgMax._type)!;
    this.mapped[21].resolveGeneratedOffsets('input','output','output2');
    this.mapped[22] = abi.type_by_fqn.get(compute.ComputeOptimizerAdaMax._type)!;
    this.mapped[22].resolveGeneratedOffsets('learning_rate','beta1','beta2','smooth_epsilon');
    this.mapped[22].static_values = [0.001,0.9,0.999,0.0000001];
    this.mapped[23] = abi.type_by_fqn.get(compute.ComputeRegressionLoss._type)!;
    this.mapped[23].resolveGeneratedOffsetWithValues('square', "Square",'abs', "Abs");
    this.mapped[24] = abi.type_by_fqn.get(compute.ComputeOperationExp._type)!;
    this.mapped[24].resolveGeneratedOffsets('input','output');
    this.mapped[25] = abi.type_by_fqn.get(compute.ComputeOperationSigmoid._type)!;
    this.mapped[25].resolveGeneratedOffsets('input','output');
    this.mapped[26] = abi.type_by_fqn.get(compute.ComputeOperationArg._type)!;
    this.mapped[26].resolveGeneratedOffsets('input','output','output2');
    this.mapped[27] = abi.type_by_fqn.get(compute.ComputeOperationAtanh._type)!;
    this.mapped[27].resolveGeneratedOffsets('input','output');
    this.mapped[28] = abi.type_by_fqn.get(compute.ComputeVarConst._type)!;
    this.mapped[28].resolveGeneratedOffsets('name','type','shape');
    this.mapped[29] = abi.type_by_fqn.get(compute.ComputeLayerLoss._type)!;
    this.mapped[29].resolveGeneratedOffsets('name','reduction');
    this.mapped[29].static_values = ["computed","expected","loss"];
    this.mapped[30] = abi.type_by_fqn.get(compute.ComputeOperationSoftplus._type)!;
    this.mapped[30].resolveGeneratedOffsets('input','output');
    this.mapped[31] = abi.type_by_fqn.get(compute.ComputeVarInOut._type)!;
    this.mapped[31].resolveGeneratedOffsets('name','type','shape','with_grad');
    this.mapped[32] = abi.type_by_fqn.get(compute.ComputeOperationLeCunTanh._type)!;
    this.mapped[32].resolveGeneratedOffsets('input','output');
    this.mapped[33] = abi.type_by_fqn.get(compute.ComputeLayerLossRegression._type)!;
    this.mapped[33].resolveGeneratedOffsets('name','reduction','loss_type');
    this.mapped[34] = abi.type_by_fqn.get(compute.ComputeOperationAsin._type)!;
    this.mapped[34].resolveGeneratedOffsets('input','output');
    this.mapped[35] = abi.type_by_fqn.get(compute.ComputeLayerCustom._type)!;
    this.mapped[35].resolveGeneratedOffsets('name','ops','vars');
    this.mapped[36] = abi.type_by_fqn.get(compute.ComputeLayerFilter._type)!;
    this.mapped[36].resolveGeneratedOffsets('name','type','inputs','outputs','maskValues');
    this.mapped[36].static_values = ["input","output","mask"];
    this.mapped[37] = abi.type_by_fqn.get(compute.ComputeCounter._type)!;
    this.mapped[37].resolveGeneratedOffsets('epoch','optimizationSteps','batchNotOptimized');
    this.mapped[38] = abi.type_by_fqn.get(compute.ComputeOperationSign._type)!;
    this.mapped[38].resolveGeneratedOffsets('input','output');
    this.mapped[39] = abi.type_by_fqn.get(compute.ComputeInitializerNormalIn._type)!;
    this.mapped[40] = abi.type_by_fqn.get(compute.ComputeLayerSeq._type)!;
    this.mapped[40].resolveGeneratedOffsets('name','calls','optimizer');
    this.mapped[41] = abi.type_by_fqn.get(compute.ComputeOptimizerFtrl._type)!;
    this.mapped[41].resolveGeneratedOffsets('learning_rate','lambda1','lambda2','beta');
    this.mapped[41].static_values = [0.001,0.0,0.0,0.0];
    this.mapped[42] = abi.type_by_fqn.get(compute.ComputeOperationSelu._type)!;
    this.mapped[42].resolveGeneratedOffsets('input','output');
    this.mapped[43] = abi.type_by_fqn.get(compute.ComputeOperationClip._type)!;
    this.mapped[43].resolveGeneratedOffsets('input','output','min','max');
    this.mapped[44] = abi.type_by_fqn.get(compute.ComputeInitializer._type)!;
    this.mapped[45] = abi.type_by_fqn.get(compute.ComputeOptimizerAdaGrad._type)!;
    this.mapped[45].resolveGeneratedOffsets('learning_rate','initial_accumulator','smooth_epsilon');
    this.mapped[45].static_values = [0.001,0.1,0.0000001];
    this.mapped[46] = abi.type_by_fqn.get(compute.ComputeOperationSum._type)!;
    this.mapped[46].resolveGeneratedOffsets('input','output','axis');
    this.mapped[47] = abi.type_by_fqn.get(compute.ComputeOptimizerAdaDelta._type)!;
    this.mapped[47].resolveGeneratedOffsets('learning_rate','decay_rate','smooth_epsilon');
    this.mapped[47].static_values = [0.001,0.95,0.0000001];
    this.mapped[48] = abi.type_by_fqn.get(compute.ComputeLayerLSTM._type)!;
    this.mapped[48].resolveGeneratedOffsets('name','bias_initializer','weight_regularizer','bias_regularizer','type','use_bias','return_sequences','bidirectional','auto_init_states','inputs','outputs','layers','sequences');
    this.mapped[48].static_values = ["input","output","hx","cx","hy","cy","weight","bias","internal_i","internal_f","internal_cp","internal_o","internal_h","internal_c","internal_mult","internal_output"];
    this.mapped[49] = abi.type_by_fqn.get(compute.ComputeActivationTanh._type)!;
    this.mapped[50] = abi.type_by_fqn.get(compute.ComputeInitializerXavierUniform._type)!;
    this.mapped[51] = abi.type_by_fqn.get(compute.ComputeOperationSqrt._type)!;
    this.mapped[51].resolveGeneratedOffsets('input','output');
    this.mapped[52] = abi.type_by_fqn.get(compute.ComputeActivationExp._type)!;
    this.mapped[53] = abi.type_by_fqn.get(compute.ComputeInitializerLSTM._type)!;
    this.mapped[54] = abi.type_by_fqn.get(compute.ComputeOperationRaiseToPower._type)!;
    this.mapped[54].resolveGeneratedOffsets('input','output','power');
    this.mapped[55] = abi.type_by_fqn.get(compute.ComputeOperationElu._type)!;
    this.mapped[55].resolveGeneratedOffsets('input','output','alpha');
    this.mapped[55].static_values = [1.0];
    this.mapped[56] = abi.type_by_fqn.get(compute.ComputeReduction._type)!;
    this.mapped[56].resolveGeneratedOffsetWithValues('auto', "auto",'none', "none",'sum', "sum",'mean', "mean",'disabled', "disabled");
    this.mapped[57] = abi.type_by_fqn.get(compute.ComputeOperationLogSoftmax._type)!;
    this.mapped[57].resolveGeneratedOffsets('input','output','axis');
    this.mapped[58] = abi.type_by_fqn.get(compute.ComputeOperation1In1Out._type)!;
    this.mapped[58].resolveGeneratedOffsets('input','output');
    this.mapped[59] = abi.type_by_fqn.get(compute.ComputeOperationRelu._type)!;
    this.mapped[59].resolveGeneratedOffsets('input','output','max_value','threshold');
    this.mapped[59].static_values = [0.0];
    this.mapped[60] = abi.type_by_fqn.get(compute.ComputeActivationElu._type)!;
    this.mapped[60].resolveGeneratedOffsets('alpha');
    this.mapped[60].static_values = [1.0];
    this.mapped[61] = abi.type_by_fqn.get(compute.ComputeBinding._type)!;
    this.mapped[61].resolveGeneratedOffsets('src_layer_name','src_var_name','target_var_name');
    this.mapped[62] = abi.type_by_fqn.get(compute.ComputeVariable._type)!;
    this.mapped[62].resolveGeneratedOffsets('name');
    this.mapped[63] = abi.type_by_fqn.get(compute.ComputeLayerCall._type)!;
    this.mapped[63].resolveGeneratedOffsets('layer_name','bindings');
    this.mapped[64] = abi.type_by_fqn.get(compute.ComputeInitializerLeCunUniform._type)!;
    this.mapped[65] = abi.type_by_fqn.get(compute.ComputeLayer._type)!;
    this.mapped[65].resolveGeneratedOffsets('name');
    this.mapped[66] = abi.type_by_fqn.get(compute.ComputeActivationSoftmax._type)!;
    this.mapped[66].resolveGeneratedOffsets('classes');
    this.mapped[67] = abi.type_by_fqn.get(compute.ComputeInitializerUniform._type)!;
    this.mapped[67].resolveGeneratedOffsets('min','max');
    this.mapped[68] = abi.type_by_fqn.get(compute.ComputeOperationDiv._type)!;
    this.mapped[68].resolveGeneratedOffsets('input','input2','output');
    this.mapped[69] = abi.type_by_fqn.get(compute.ComputeActivationSoftplus._type)!;
    this.mapped[70] = abi.type_by_fqn.get(compute.ComputeOperationArgMin._type)!;
    this.mapped[70].resolveGeneratedOffsets('input','output','output2');
    this.mapped[71] = abi.type_by_fqn.get(compute.ComputeOperationFill._type)!;
    this.mapped[71].resolveGeneratedOffsets('input','value');
    this.mapped[72] = abi.type_by_fqn.get(compute.ComputeInitializerUniformAvg._type)!;
    this.mapped[73] = abi.type_by_fqn.get(compute.ComputeLayerStandardScaler._type)!;
    this.mapped[73].resolveGeneratedOffsets('name','type','inverse_transform');
    this.mapped[73].static_values = ["input","output","avg","std"];
    this.mapped[74] = abi.type_by_fqn.get(compute.ComputeInitializerReluUniform._type)!;
    this.mapped[75] = abi.type_by_fqn.get(compute.ComputeInitializerNormalOut._type)!;
    this.mapped[76] = abi.type_by_fqn.get(compute.ComputeLayerDense._type)!;
    this.mapped[76].resolveGeneratedOffsets('name','type','inputs','outputs','use_bias','weight_initializer','weight_regularizer','bias_initializer','bias_regularizer','activation');
    this.mapped[76].static_values = ["input","output","weight","bias","mult","pre_activation"];
    this.mapped[77] = abi.type_by_fqn.get(compute.ComputeOptimizerRmsProp._type)!;
    this.mapped[77].resolveGeneratedOffsets('learning_rate','decay_rate','smooth_epsilon');
    this.mapped[77].static_values = [0.001,0.9,0.0000001];
    this.mapped[78] = abi.type_by_fqn.get(compute.ComputeActivationLeakyRelu._type)!;
    this.mapped[78].resolveGeneratedOffsets('alpha','max_value','threshold');
    this.mapped[78].static_values = [0.3,0.0];
    this.mapped[79] = abi.type_by_fqn.get(compute.ComputeOperationAbs._type)!;
    this.mapped[79].resolveGeneratedOffsets('input','output');
    this.mapped[80] = abi.type_by_fqn.get(compute.ComputeOperationCos._type)!;
    this.mapped[80].resolveGeneratedOffsets('input','output');
    this.mapped[81] = abi.type_by_fqn.get(compute.ComputeOperation2In1Out._type)!;
    this.mapped[81].resolveGeneratedOffsets('input','input2','output');
    this.mapped[82] = abi.type_by_fqn.get(compute.ComputeLayerActivation._type)!;
    this.mapped[82].resolveGeneratedOffsets('name','activation');
    this.mapped[82].static_values = ["input","output"];
    this.mapped[83] = abi.type_by_fqn.get(compute.ComputeLayerLinear._type)!;
    this.mapped[83].resolveGeneratedOffsets('name','type','inputs','outputs','use_bias','weight_initializer','weight_regularizer','bias_initializer','bias_regularizer');
    this.mapped[83].static_values = ["input","output","weight","bias","mult"];
    this.mapped[84] = abi.type_by_fqn.get(compute.ComputeOperationAtan._type)!;
    this.mapped[84].resolveGeneratedOffsets('input','output');
    this.mapped[85] = abi.type_by_fqn.get(compute.ComputeOperationAvg._type)!;
    this.mapped[85].resolveGeneratedOffsets('input','input2','output');
    this.mapped[86] = abi.type_by_fqn.get(compute.ComputeActivationCelu._type)!;
    this.mapped[86].resolveGeneratedOffsets('alpha');
    this.mapped[86].static_values = [1.0];
    this.mapped[87] = abi.type_by_fqn.get(compute.ComputeActivationSigmoid._type)!;
    this.mapped[88] = abi.type_by_fqn.get(compute.ComputeClassificationLoss._type)!;
    this.mapped[88].resolveGeneratedOffsetWithValues('categorical_cross_entropy', "Categorical Cross Entropy",'sparse_categorical_cross_entropy', "Sparse Categorical Cross Entropy");
    this.mapped[89] = abi.type_by_fqn.get(compute.ComputeOptimizerNesterov._type)!;
    this.mapped[89].resolveGeneratedOffsets('learning_rate','decay_rate');
    this.mapped[89].static_values = [0.001,0.9];
    this.mapped[90] = abi.type_by_fqn.get(compute.ComputeOptimizerSgd._type)!;
    this.mapped[90].resolveGeneratedOffsets('learning_rate');
    this.mapped[90].static_values = [0.01];
    this.mapped[91] = abi.type_by_fqn.get(compute.ComputeActivation._type)!;
    this.mapped[92] = abi.type_by_fqn.get(compute.ComputeOperationSin._type)!;
    this.mapped[92].resolveGeneratedOffsets('input','output');
    this.mapped[93] = abi.type_by_fqn.get(compute.ComputeInitializerGlorotUniform._type)!;
    this.mapped[94] = abi.type_by_fqn.get(compute.ComputeOperationAsinh._type)!;
    this.mapped[94].resolveGeneratedOffsets('input','output');
    this.mapped[95] = abi.type_by_fqn.get(compute.ComputeOperationSub._type)!;
    this.mapped[95].resolveGeneratedOffsets('input','input2','output');
    this.mapped[96] = abi.type_by_fqn.get(compute.ComputeInitializerConstant._type)!;
    this.mapped[96].resolveGeneratedOffsets('value');
    this.mapped[97] = abi.type_by_fqn.get(compute.ComputeInitializerIdentity._type)!;
    this.mapped[98] = abi.type_by_fqn.get(compute.ComputeActivationSoftSign._type)!;
    this.mapped[99] = abi.type_by_fqn.get(compute.ComputeActivationRelu._type)!;
    this.mapped[99].resolveGeneratedOffsets('max_value','threshold');
    this.mapped[99].static_values = [0.0];
    this.mapped[100] = abi.type_by_fqn.get(compute.ComputeOperationTanh._type)!;
    this.mapped[100].resolveGeneratedOffsets('input','output');
    this.mapped[101] = abi.type_by_fqn.get(compute.ComputeInitializerPytorch._type)!;
    this.mapped[102] = abi.type_by_fqn.get(compute.ComputeOperationCelu._type)!;
    this.mapped[102].resolveGeneratedOffsets('input','output','alpha');
    this.mapped[102].static_values = [1.0];
    this.mapped[103] = abi.type_by_fqn.get(compute.ComputeInitializerNormalAvg._type)!;
    this.mapped[104] = abi.type_by_fqn.get(compute.ComputeActivationSelu._type)!;
    this.mapped[105] = abi.type_by_fqn.get(compute.ComputeEngine._type)!;
    this.mapped[106] = abi.type_by_fqn.get(compute.ComputeOperation._type)!;
    this.mapped[107] = abi.type_by_fqn.get(compute.ComputeInitializerRelu._type)!;
    this.mapped[108] = abi.type_by_fqn.get(compute.ComputeOperationLeakyRelu._type)!;
    this.mapped[108].resolveGeneratedOffsets('input','output','alpha','max_value','threshold');
    this.mapped[108].static_values = [0.3,1.7976931349E308,0.0];
    this.mapped[109] = abi.type_by_fqn.get(compute.ComputeOperationSoftSign._type)!;
    this.mapped[109].resolveGeneratedOffsets('input','output');
    this.mapped[110] = abi.type_by_fqn.get(compute.ComputeOperationTan._type)!;
    this.mapped[110].resolveGeneratedOffsets('input','output');
    this.mapped[111] = abi.type_by_fqn.get(compute.ComputeVarOptimize._type)!;
    this.mapped[111].resolveGeneratedOffsets('name','type','shape','l1','l2','init');
    this.mapped[112] = abi.type_by_fqn.get(compute.ComputeInitializerNone._type)!;
    this.mapped[113] = abi.type_by_fqn.get(compute.ComputeOperationLog._type)!;
    this.mapped[113].resolveGeneratedOffsets('input','output');
    this.mapped[114] = abi.type_by_fqn.get(compute.ComputeOperationMul._type)!;
    this.mapped[114].resolveGeneratedOffsets('input','input2','output');
    this.mapped[115] = abi.type_by_fqn.get(compute.ComputeOperationPow._type)!;
    this.mapped[115].resolveGeneratedOffsets('input','input2','output');
    this.mapped[116] = abi.type_by_fqn.get(compute.ComputeLayerClassification._type)!;
    this.mapped[116].resolveGeneratedOffsets('name','calculate_probabilities','from_logits');
    this.mapped[116].static_values = ["input","predicted_classes","probabilities"];
    this.mapped[117] = abi.type_by_fqn.get(compute.ComputeOperationSumIf._type)!;
    this.mapped[117].resolveGeneratedOffsets('input','ifCondition','output','counts','classes');
    this.mapped[118] = abi.type_by_fqn.get(compute.ComputeOperationCosh._type)!;
    this.mapped[118].resolveGeneratedOffsets('input','output');
    this.mapped[119] = abi.type_by_fqn.get(compute.ComputeOperationAddBias._type)!;
    this.mapped[119].resolveGeneratedOffsets('input','input2','output');
    this.mapped[120] = abi.type_by_fqn.get(compute.ComputeOperationSinh._type)!;
    this.mapped[120].resolveGeneratedOffsets('input','output');
    this.mapped[121] = abi.type_by_fqn.get(compute.ComputeOptimizerAdam._type)!;
    this.mapped[121].resolveGeneratedOffsets('learning_rate','beta1','beta2','smooth_epsilon');
    this.mapped[121].static_values = [0.001,0.9,0.999,0.0000001];
    this.mapped[122] = abi.type_by_fqn.get(compute.ComputeState._type)!;
    this.mapped[123] = abi.type_by_fqn.get(compute.ComputeInitializerUniformIn._type)!;
    this.mapped[124] = abi.type_by_fqn.get(compute.ComputeOperationAcosh._type)!;
    this.mapped[124].resolveGeneratedOffsets('input','output');
    this.mapped[125] = abi.type_by_fqn.get(compute.ComputeActivationHardSigmoid._type)!;
    this.mapped[125].resolveGeneratedOffsets('slope','shift');
    this.mapped[125].static_values = [0.2,0.5];
    this.mapped[126] = abi.type_by_fqn.get(compute.ComputeVar._type)!;
    this.mapped[126].resolveGeneratedOffsets('name');
    this.mapped[127] = abi.type_by_fqn.get(compute.ComputeInitializerNormal._type)!;
    this.mapped[127].resolveGeneratedOffsets('avg','std');
    this.mapped[128] = abi.type_by_fqn.get(nn_layers_names.NNLayersNames._type)!;
    this.mapped[128].resolveGeneratedOffsetWithValues('layer_0', "layer_0",'layer_1', "layer_1",'layer_2', "layer_2",'layer_3', "layer_3",'layer_4', "layer_4",'layer_5', "layer_5",'layer_6', "layer_6",'layer_7', "layer_7",'layer_8', "layer_8",'layer_9', "layer_9",'layer_10', "layer_10",'layer_11', "layer_11",'layer_12', "layer_12",'layer_13', "layer_13",'layer_14', "layer_14",'layer_15', "layer_15",'layer_16', "layer_16",'layer_17', "layer_17",'layer_18', "layer_18",'layer_19', "layer_19",'layer_20', "layer_20",'layer_21', "layer_21",'layer_22', "layer_22",'layer_23', "layer_23",'layer_24', "layer_24",'layer_25', "layer_25",'layer_26', "layer_26",'layer_27', "layer_27",'layer_28', "layer_28",'layer_29', "layer_29",'layer_30', "layer_30",'layer_31', "layer_31",'layer_32', "layer_32",'layer_33', "layer_33",'layer_34', "layer_34",'layer_35', "layer_35",'layer_36', "layer_36",'layer_37', "layer_37",'layer_38', "layer_38",'layer_39', "layer_39",'layer_40', "layer_40",'layer_41', "layer_41",'layer_42', "layer_42",'layer_43', "layer_43",'layer_44', "layer_44",'layer_45', "layer_45",'layer_46', "layer_46",'layer_47', "layer_47",'layer_48', "layer_48",'layer_49', "layer_49",'layer_50', "layer_50",'layer_51', "layer_51",'layer_52', "layer_52",'layer_53', "layer_53",'layer_54', "layer_54",'layer_55', "layer_55",'layer_56', "layer_56",'layer_57', "layer_57",'layer_58', "layer_58",'layer_59', "layer_59",'layer_60', "layer_60",'layer_61', "layer_61",'layer_62', "layer_62",'layer_63', "layer_63",'layer_64', "layer_64",'layer_65', "layer_65",'layer_66', "layer_66",'layer_67', "layer_67",'layer_68', "layer_68",'layer_69', "layer_69",'layer_70', "layer_70",'layer_71', "layer_71",'layer_72', "layer_72",'layer_73', "layer_73",'layer_74', "layer_74",'layer_75', "layer_75",'layer_76', "layer_76",'layer_77', "layer_77",'layer_78', "layer_78",'layer_79', "layer_79",'layer_80', "layer_80",'layer_81', "layer_81",'layer_82', "layer_82",'layer_83', "layer_83",'layer_84', "layer_84",'layer_85', "layer_85",'layer_86', "layer_86",'layer_87', "layer_87",'layer_88', "layer_88",'layer_89', "layer_89",'layer_90', "layer_90",'layer_91', "layer_91",'layer_92', "layer_92",'layer_93', "layer_93",'layer_94', "layer_94",'layer_95', "layer_95",'layer_96', "layer_96",'layer_97', "layer_97",'layer_98', "layer_98",'layer_99', "layer_99",'layer_100', "layer_100",'layer_101', "layer_101",'layer_102', "layer_102",'layer_103', "layer_103",'layer_104', "layer_104",'layer_105', "layer_105",'layer_106', "layer_106",'layer_107', "layer_107",'layer_108', "layer_108",'layer_109', "layer_109",'layer_110', "layer_110",'layer_111', "layer_111",'layer_112', "layer_112",'layer_113', "layer_113",'layer_114', "layer_114",'layer_115', "layer_115",'layer_116', "layer_116",'layer_117', "layer_117",'layer_118', "layer_118",'layer_119', "layer_119",'layer_120', "layer_120",'layer_121', "layer_121",'layer_122', "layer_122",'layer_123', "layer_123",'layer_124', "layer_124",'layer_125', "layer_125",'layer_126', "layer_126",'layer_127', "layer_127",'layer_128', "layer_128",'layer_129', "layer_129",'layer_130', "layer_130",'layer_131', "layer_131",'layer_132', "layer_132",'layer_133', "layer_133",'layer_134', "layer_134",'layer_135', "layer_135",'layer_136', "layer_136",'layer_137', "layer_137",'layer_138', "layer_138",'layer_139', "layer_139",'layer_140', "layer_140",'layer_141', "layer_141",'layer_142', "layer_142",'layer_143', "layer_143",'layer_144', "layer_144",'layer_145', "layer_145",'layer_146', "layer_146",'layer_147', "layer_147",'layer_148', "layer_148",'layer_149', "layer_149",'layer_150', "layer_150",'layer_151', "layer_151",'layer_152', "layer_152",'layer_153', "layer_153",'layer_154', "layer_154",'layer_155', "layer_155",'layer_156', "layer_156",'layer_157', "layer_157",'layer_158', "layer_158",'layer_159', "layer_159",'layer_160', "layer_160",'layer_161', "layer_161",'layer_162', "layer_162",'layer_163', "layer_163",'layer_164', "layer_164",'layer_165', "layer_165",'layer_166', "layer_166",'layer_167', "layer_167",'layer_168', "layer_168",'layer_169', "layer_169",'layer_170', "layer_170",'layer_171', "layer_171",'layer_172', "layer_172",'layer_173', "layer_173",'layer_174', "layer_174",'layer_175', "layer_175",'layer_176', "layer_176",'layer_177', "layer_177",'layer_178', "layer_178",'layer_179', "layer_179",'layer_180', "layer_180",'layer_181', "layer_181",'layer_182', "layer_182",'layer_183', "layer_183",'layer_184', "layer_184",'layer_185', "layer_185",'layer_186', "layer_186",'layer_187', "layer_187",'layer_188', "layer_188",'layer_189', "layer_189",'layer_190', "layer_190",'layer_191', "layer_191",'layer_192', "layer_192",'layer_193', "layer_193",'layer_194', "layer_194",'layer_195', "layer_195",'layer_196', "layer_196",'layer_197', "layer_197",'layer_198', "layer_198",'layer_199', "layer_199");
    this.mapped[129] = abi.type_by_fqn.get(nn.RegressionNetwork._type)!;
    this.mapped[129].resolveGeneratedOffsets('inputs','inputs_gradients','outputs','fixed_batch_size','inputs_sequences','outputs_sequences','tensor_type','lossLayer','optimizer','seed','randomizeSeed','placeholders','preProcessType','postProcessType','preProcessObject','postProcessObject','layers','lastLayer','lastOutput');
    this.mapped[130] = abi.type_by_fqn.get(nn.InitializerConfig._type)!;
    this.mapped[130].resolveGeneratedOffsets('weight_initializer','weight_regularizer','bias_initializer','bias_regularizer');
    this.mapped[131] = abi.type_by_fqn.get(nn.ComputeActivations._type)!;
    this.mapped[131].resolveGeneratedOffsetWithValues('relu', "Relu",'leaky_relu', "Leaky Relu",'sigmoid', "Sigmoid",'hard_sigmoid', "Hard Sigmoid",'exp', "Exp",'soft_max', "Soft Max",'soft_plus', "Soft Plus",'soft_sign', "Soft Sign",'tanh', "Tanh",'selu', "Selu",'elu', "Elu",'celu', "Celu");
    this.mapped[132] = abi.type_by_fqn.get(nn.AutoEncoderNetwork._type)!;
    this.mapped[132].resolveGeneratedOffsets('inputs','inputs_gradients','outputs','fixed_batch_size','inputs_sequences','outputs_sequences','tensor_type','lossLayer','optimizer','seed','randomizeSeed','placeholders','preProcessType','postProcessType','preProcessObject','postProcessObject','layers','lastLayer','lastOutput','encoder_layer_idx','encoder_layer_name','encoder_layer_var');
    this.mapped[133] = abi.type_by_fqn.get(nn.ComputeLayerTypes._type)!;
    this.mapped[133].resolveGeneratedOffsetWithValues('linear', "Linear",'dense', "Dense",'activation', "Activation",'lstm', "LSTM",'loss', "Loss",'filter', "Filter");
    this.mapped[134] = abi.type_by_fqn.get(nn.ComputeInitializers._type)!;
    this.mapped[134].resolveGeneratedOffsetWithValues('none', "None",'constant', "Constant",'sigmoid_uniform', "SigmoidUniform",'lecun_uniform', "LeCunUniform",'xavier', "Xavier",'xavier_uniform', "XavierUniform",'relu', "Relu",'relu_uniform', "ReluUniform",'normal', "Normal",'normal_in', "NormalIn",'normal_out', "NormalOut",'normal_avg', "NormalAvg",'uniform', "Uniform",'uniform_in', "UniformIn",'uniform_out', "UniformOut",'uniform_avg', "UniformAvg",'identity', "Identity",'pytorch', "Pytorch");
    this.mapped[135] = abi.type_by_fqn.get(nn.BindingsResult._type)!;
    this.mapped[135].resolveGeneratedOffsets('previousLayerName','previousLayerOutput','expectedLayerName','expectedLayerOutput','postLayer');
    this.mapped[136] = abi.type_by_fqn.get(nn.ComputeOptimizers._type)!;
    this.mapped[136].resolveGeneratedOffsetWithValues('ada_delta', "Ada Delta",'ada_grad', "Ada Grad",'adam', "Adam",'ada_max', "Ada Max",'nadam', "NAdam",'ftrl', "Ftrl",'sgd', "Stochastic Gradient Descent",'rms_prop', "RMS Prop",'momentum', "Momentum",'nesterov', "Nesterov");
    this.mapped[137] = abi.type_by_fqn.get(nn.PostProcessType._type)!;
    this.mapped[137].resolveGeneratedOffsetWithValues('none', "None",'min_max_scaling', "Min/Max Scaling",'standard_scaling', "Standard Scaling");
    this.mapped[138] = abi.type_by_fqn.get(nn.NeuralNetwork._type)!;
    this.mapped[138].resolveGeneratedOffsets('inputs','inputs_gradients','outputs','fixed_batch_size','inputs_sequences','outputs_sequences','tensor_type','lossLayer','optimizer','seed','randomizeSeed','placeholders','preProcessType','postProcessType','preProcessObject','postProcessObject','layers','lastLayer','lastOutput');
    this.mapped[138].static_values = ["Inputs or outputs can't be negative","Last layer has different number of outputs than declared","Incompatible loss function","Some NN layers are not currently supported","Tensor Type not currently supported","NN should contain at least 1 layer","placeholders","classification layer","loss","input","enc_input","targets","Classifier classes","Classifier probabilities","Classifier class weights","pre_process","input_avg","input_min","input_max","input_std","input_space","output_avg","output_min","output_max","output_std","post_process","predict","learn","encode","decode"];
    this.mapped[139] = abi.type_by_fqn.get(nn.ClassificationNetwork._type)!;
    this.mapped[139].resolveGeneratedOffsets('inputs','inputs_gradients','outputs','fixed_batch_size','inputs_sequences','outputs_sequences','tensor_type','lossLayer','optimizer','seed','randomizeSeed','placeholders','preProcessType','postProcessType','preProcessObject','postProcessObject','layers','lastLayer','lastOutput','calculate_probabilities','has_class_weights','from_logits');
    this.mapped[140] = abi.type_by_fqn.get(nn.PreProcessType._type)!;
    this.mapped[140].resolveGeneratedOffsetWithValues('none', "None",'min_max_scaling', "Min/Max Scaling",'standard_scaling', "Standard Scaling",'pca_scaling', "PCA Scaling");
    this.mapped[141] = abi.type_by_fqn.get(kmeans.Kmeans._type)!;
    this.mapped[141].static_values = ["input","assignement","min_distance","centroids","distance","sum_centroids","sum_min_distance","count_centroids","centroid_distances","sum_cluster_distances","avg_cluster_distances","count_cluster_distances","placeholders","kmeans_forward","kmeans_backward","kmeans_init_round","kmeans_end_round","kmeans_stats_layer","kmeans_init_round_seq","kmeans_forward_seq","kmeans_backward_seq","kmeans_end_round_seq","kmeans_stats_seq"];
    this.mapped[142] = abi.type_by_fqn.get(ml.Polynomial._type)!;
    this.mapped[143] = abi.type_by_fqn.get(ml.PCA._type)!;
    this.mapped[143].static_values = [0.95];
    this.mapped[144] = abi.type_by_fqn.get(ml.HeatMapProfile._type)!;
    this.mapped[144].resolveGeneratedOffsets('counts','x_labels','y_labels','counts_max','counts_sum');
    this.mapped[145] = abi.type_by_fqn.get(ml.GaussianND._type)!;
    this.mapped[146] = abi.type_by_fqn.get(ml.Solver._type)!;
    this.mapped[147] = abi.type_by_fqn.get(ml.TimeSeriesDecomposition._type)!;
    this.mapped[148] = abi.type_by_fqn.get(powerflow.PowerLineResult._type)!;
    this.mapped[148].resolveGeneratedOffsets('p_from_mw','q_from_mvar','p_to_mw','q_to_mvar','pl_mw','ql_mvar','i_from_ka','i_to_ka','i_ka','vm_from_pu','vm_to_pu','va_from_radians','va_to_radians','loading_percent');
    this.mapped[149] = abi.type_by_fqn.get(powerflow.PowerBusResult._type)!;
    this.mapped[149].resolveGeneratedOffsets('abs','angle_radians','voltage','voltage_img','current','current_img');
  },
};
