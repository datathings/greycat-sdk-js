// AUTO-GENERATED FILE PLEASE DO NOT MODIFY MANUALLY
/* eslint-disable */
// @ts-nocheck

import * as $sdk from '@greycat/sdk';
import * as $std from '../index.js';
import * as std_n from '../../std_n/index.js';

// module: math.gcl
export class MathConstants extends $sdk.GCObject {
  static readonly _type = 'math::MathConstants';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public static e($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[91];
    return  t.static_values[0] as number;
  }
  public static log_2e($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[91];
    return  t.static_values[1] as number;
  }
  public static log_10e($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[91];
    return  t.static_values[2] as number;
  }
  public static ln2($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[91];
    return  t.static_values[3] as number;
  }
  public static ln10($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[91];
    return  t.static_values[4] as number;
  }
  public static pi($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[91];
    return  t.static_values[5] as number;
  }
  public static pi_2($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[91];
    return  t.static_values[6] as number;
  }
  public static pi_4($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[91];
    return  t.static_values[7] as number;
  }
  public static m1_pi($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[91];
    return  t.static_values[8] as number;
  }
  public static m2_pi($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[91];
    return  t.static_values[9] as number;
  }
  public static m2_sqrt_pi($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[91];
    return  t.static_values[10] as number;
  }
  public static sqrt2($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[91];
    return  t.static_values[11] as number;
  }
  public static sqrt1_2($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[91];
    return  t.static_values[12] as number;
  }
 static create($g: $sdk.GreyCat): MathConstants {
    return new MathConstants($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[91]);
  }
}

