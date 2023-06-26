// AUTO-GENERATED FILE PLEASE DO NOT MODIFY MANUALLY
/* eslint-disable */
// @ts-nocheck

import type { Abi, AbiType, GreyCat } from '../../index.js';
import { GCObject, GCEnum, std_n } from '../../index.js';
import * as std from './index.js';

// module: math.gcl
export class MathConstants extends GCObject {
  static readonly _type = 'math::MathConstants';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public static e(abi: Abi): number {
    const t = abi.libs_by_name.get(std.name)!.mapped[80];
    return  t.static_values[0] as number;
  }
  public static log_2e(abi: Abi): number {
    const t = abi.libs_by_name.get(std.name)!.mapped[80];
    return  t.static_values[1] as number;
  }
  public static log_10e(abi: Abi): number {
    const t = abi.libs_by_name.get(std.name)!.mapped[80];
    return  t.static_values[2] as number;
  }
  public static ln2(abi: Abi): number {
    const t = abi.libs_by_name.get(std.name)!.mapped[80];
    return  t.static_values[3] as number;
  }
  public static ln10(abi: Abi): number {
    const t = abi.libs_by_name.get(std.name)!.mapped[80];
    return  t.static_values[4] as number;
  }
  public static pi(abi: Abi): number {
    const t = abi.libs_by_name.get(std.name)!.mapped[80];
    return  t.static_values[5] as number;
  }
  public static pi_2(abi: Abi): number {
    const t = abi.libs_by_name.get(std.name)!.mapped[80];
    return  t.static_values[6] as number;
  }
  public static pi_4(abi: Abi): number {
    const t = abi.libs_by_name.get(std.name)!.mapped[80];
    return  t.static_values[7] as number;
  }
  public static m1_pi(abi: Abi): number {
    const t = abi.libs_by_name.get(std.name)!.mapped[80];
    return  t.static_values[8] as number;
  }
  public static m2_pi(abi: Abi): number {
    const t = abi.libs_by_name.get(std.name)!.mapped[80];
    return  t.static_values[9] as number;
  }
  public static m2_sqrt_pi(abi: Abi): number {
    const t = abi.libs_by_name.get(std.name)!.mapped[80];
    return  t.static_values[10] as number;
  }
  public static sqrt2(abi: Abi): number {
    const t = abi.libs_by_name.get(std.name)!.mapped[80];
    return  t.static_values[11] as number;
  }
  public static sqrt1_2(abi: Abi): number {
    const t = abi.libs_by_name.get(std.name)!.mapped[80];
    return  t.static_values[12] as number;
  }
  create(abi: Abi): MathConstants {
    return new MathConstants(abi.libs_by_name.get(std.name)!.mapped[80]);
  }
}

