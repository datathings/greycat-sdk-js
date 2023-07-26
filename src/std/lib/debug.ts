// AUTO-GENERATED FILE PLEASE DO NOT MODIFY MANUALLY
/* eslint-disable */
// @ts-nocheck

import * as $sdk from '@greycat/sdk';
import * as $std from '../index.js';
import * as std_n from '../../std_n/index.js';

// module: debug.gcl
export class ModDesc extends $sdk.GCObject {
  static readonly _type = 'debug::ModDesc';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_name(): string {
    return super.get(super.type.generated_offsets[0]) as string;
  }
  public set_name(v: string) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_lib(): string {
    return super.get(super.type.generated_offsets[1]) as string;
  }
  public set_lib(v: string) {
    super.set(super.type.generated_offsets[1], v);
  }
  public get_functions(): Array<$std.debug.FnDesc> {
    return super.get(super.type.generated_offsets[2]) as Array<$std.debug.FnDesc>;
  }
  public set_functions(v: Array<$std.debug.FnDesc>) {
    super.set(super.type.generated_offsets[2], v);
  }
  public get_types(): Array<$std.debug.TypeDesc> {
    return super.get(super.type.generated_offsets[3]) as Array<$std.debug.TypeDesc>;
  }
  public set_types(v: Array<$std.debug.TypeDesc>) {
    super.set(super.type.generated_offsets[3], v);
  }
  public get_vars(): Array<$std.debug.ModVarDesc> {
    return super.get(super.type.generated_offsets[4]) as Array<$std.debug.ModVarDesc>;
  }
  public set_vars(v: Array<$std.debug.ModVarDesc>) {
    super.set(super.type.generated_offsets[4], v);
  }
 static create($g: $sdk.GreyCat, name: string, lib: string, functions: Array<$std.debug.FnDesc>, types: Array<$std.debug.TypeDesc>, vars: Array<$std.debug.ModVarDesc>): ModDesc {
    return new ModDesc($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[83], name, lib, functions, types, vars);
  }
}

export class TypeRef extends $sdk.GCObject {
  static readonly _type = 'debug::TypeRef';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_name(): string {
    return super.get(super.type.generated_offsets[0]) as string;
  }
  public set_name(v: string) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_module(): string {
    return super.get(super.type.generated_offsets[1]) as string;
  }
  public set_module(v: string) {
    super.set(super.type.generated_offsets[1], v);
  }
  public get_generics(): Array<$std.debug.TypeRef> | null {
    return super.get(super.type.generated_offsets[2]) as Array<$std.debug.TypeRef> | null;
  }
  public set_generics(v: Array<$std.debug.TypeRef> | null) {
    super.set(super.type.generated_offsets[2], v);
  }
  public get_nullable(): boolean {
    return super.get(super.type.generated_offsets[3]) as boolean;
  }
  public set_nullable(v: boolean) {
    super.set(super.type.generated_offsets[3], v);
  }
 static create($g: $sdk.GreyCat, name: string, module: string, generics: Array<$std.debug.TypeRef> | null, nullable: boolean): TypeRef {
    return new TypeRef($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[84], name, module, generics, nullable);
  }
}

export class FnMode extends $sdk.GCEnum {
  static readonly _type = 'debug::FnMode';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes[0], attributes[1], attributes[2]);
  }

  public static read_only($g: $sdk.GreyCat): $std.debug.FnMode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[85];
    return t.enum_values![t.generated_offsets[0]] as $std.debug.FnMode;
  }
  public static copy_on_write($g: $sdk.GreyCat): $std.debug.FnMode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[85];
    return t.enum_values![t.generated_offsets[1]] as $std.debug.FnMode;
  }
  public static volatile($g: $sdk.GreyCat): $std.debug.FnMode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[85];
    return t.enum_values![t.generated_offsets[2]] as $std.debug.FnMode;
  }
  public static write($g: $sdk.GreyCat): $std.debug.FnMode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[85];
    return t.enum_values![t.generated_offsets[3]] as $std.debug.FnMode;
  }
 static create($g: $sdk.GreyCat): FnMode {
    return new FnMode($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[85]);
  }
}

export class TypeAttr extends $sdk.GCObject {
  static readonly _type = 'debug::TypeAttr';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_name(): string {
    return super.get(super.type.generated_offsets[0]) as string;
  }
  public set_name(v: string) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_type(): $std.debug.TypeRef | null {
    return super.get(super.type.generated_offsets[1]) as $std.debug.TypeRef | null;
  }
  public set_type(v: $std.debug.TypeRef | null) {
    super.set(super.type.generated_offsets[1], v);
  }
  public get_is_static(): boolean {
    return super.get(super.type.generated_offsets[2]) as boolean;
  }
  public set_is_static(v: boolean) {
    super.set(super.type.generated_offsets[2], v);
  }
 static create($g: $sdk.GreyCat, name: string, type: $std.debug.TypeRef | null, is_static: boolean): TypeAttr {
    return new TypeAttr($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[86], name, type, is_static);
  }
}

export class TypeDesc extends $sdk.GCObject {
  static readonly _type = 'debug::TypeDesc';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_module(): string {
    return super.get(super.type.generated_offsets[0]) as string;
  }
  public set_module(v: string) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_name(): string {
    return super.get(super.type.generated_offsets[1]) as string;
  }
  public set_name(v: string) {
    super.set(super.type.generated_offsets[1], v);
  }
  public get_methods(): Array<$std.debug.FnDesc> {
    return super.get(super.type.generated_offsets[2]) as Array<$std.debug.FnDesc>;
  }
  public set_methods(v: Array<$std.debug.FnDesc>) {
    super.set(super.type.generated_offsets[2], v);
  }
  public get_attrs(): Array<$std.debug.TypeAttr> {
    return super.get(super.type.generated_offsets[3]) as Array<$std.debug.TypeAttr>;
  }
  public set_attrs(v: Array<$std.debug.TypeAttr>) {
    super.set(super.type.generated_offsets[3], v);
  }
  public get_is_abstract(): boolean {
    return super.get(super.type.generated_offsets[4]) as boolean;
  }
  public set_is_abstract(v: boolean) {
    super.set(super.type.generated_offsets[4], v);
  }
  public get_is_enum(): boolean {
    return super.get(super.type.generated_offsets[5]) as boolean;
  }
  public set_is_enum(v: boolean) {
    super.set(super.type.generated_offsets[5], v);
  }
 static create($g: $sdk.GreyCat, module: string, name: string, methods: Array<$std.debug.FnDesc>, attrs: Array<$std.debug.TypeAttr>, is_abstract: boolean, is_enum: boolean): TypeDesc {
    return new TypeDesc($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[87], module, name, methods, attrs, is_abstract, is_enum);
  }
}

export class FnDesc extends $sdk.GCObject {
  static readonly _type = 'debug::FnDesc';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_module(): string {
    return super.get(super.type.generated_offsets[0]) as string;
  }
  public set_module(v: string) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_name(): string {
    return super.get(super.type.generated_offsets[1]) as string;
  }
  public set_name(v: string) {
    super.set(super.type.generated_offsets[1], v);
  }
  public get_parent_type(): string | null {
    return super.get(super.type.generated_offsets[2]) as string | null;
  }
  public set_parent_type(v: string | null) {
    super.set(super.type.generated_offsets[2], v);
  }
  public get_params(): Array<$std.debug.FnParam> {
    return super.get(super.type.generated_offsets[3]) as Array<$std.debug.FnParam>;
  }
  public set_params(v: Array<$std.debug.FnParam>) {
    super.set(super.type.generated_offsets[3], v);
  }
  public get_return_type(): $std.debug.TypeRef | null {
    return super.get(super.type.generated_offsets[4]) as $std.debug.TypeRef | null;
  }
  public set_return_type(v: $std.debug.TypeRef | null) {
    super.set(super.type.generated_offsets[4], v);
  }
  public get_is_static(): boolean {
    return super.get(super.type.generated_offsets[5]) as boolean;
  }
  public set_is_static(v: boolean) {
    super.set(super.type.generated_offsets[5], v);
  }
  public get_is_task(): boolean {
    return super.get(super.type.generated_offsets[6]) as boolean;
  }
  public set_is_task(v: boolean) {
    super.set(super.type.generated_offsets[6], v);
  }
  public get_is_exclusive(): boolean {
    return super.get(super.type.generated_offsets[7]) as boolean;
  }
  public set_is_exclusive(v: boolean) {
    super.set(super.type.generated_offsets[7], v);
  }
  public get_is_reserved(): boolean {
    return super.get(super.type.generated_offsets[8]) as boolean;
  }
  public set_is_reserved(v: boolean) {
    super.set(super.type.generated_offsets[8], v);
  }
  public get_is_exposed(): boolean {
    return super.get(super.type.generated_offsets[9]) as boolean;
  }
  public set_is_exposed(v: boolean) {
    super.set(super.type.generated_offsets[9], v);
  }
  public get_mode(): $std.debug.FnMode {
    return super.get(super.type.generated_offsets[10]) as $std.debug.FnMode;
  }
  public set_mode(v: $std.debug.FnMode) {
    super.set(super.type.generated_offsets[10], v);
  }
  public get_permissions(): Array<string> {
    return super.get(super.type.generated_offsets[11]) as Array<string>;
  }
  public set_permissions(v: Array<string>) {
    super.set(super.type.generated_offsets[11], v);
  }
 static create($g: $sdk.GreyCat, module: string, name: string, parent_type: string | null, params: Array<$std.debug.FnParam>, return_type: $std.debug.TypeRef | null, is_static: boolean, is_task: boolean, is_exclusive: boolean, is_reserved: boolean, is_exposed: boolean, mode: $std.debug.FnMode, permissions: Array<string>): FnDesc {
    return new FnDesc($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[88], module, name, parent_type, params, return_type, is_static, is_task, is_exclusive, is_reserved, is_exposed, mode, permissions);
  }
}

export class ModVarDesc extends $sdk.GCObject {
  static readonly _type = 'debug::ModVarDesc';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_module(): string {
    return super.get(super.type.generated_offsets[0]) as string;
  }
  public set_module(v: string) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_name(): string {
    return super.get(super.type.generated_offsets[1]) as string;
  }
  public set_name(v: string) {
    super.set(super.type.generated_offsets[1], v);
  }
  public get_type(): $std.debug.TypeRef {
    return super.get(super.type.generated_offsets[2]) as $std.debug.TypeRef;
  }
  public set_type(v: $std.debug.TypeRef) {
    super.set(super.type.generated_offsets[2], v);
  }
 static create($g: $sdk.GreyCat, module: string, name: string, type: $std.debug.TypeRef): ModVarDesc {
    return new ModVarDesc($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[89], module, name, type);
  }
}

export class FnParam extends $sdk.GCObject {
  static readonly _type = 'debug::FnParam';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_name(): string {
    return super.get(super.type.generated_offsets[0]) as string;
  }
  public set_name(v: string) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_type(): $std.debug.TypeRef {
    return super.get(super.type.generated_offsets[1]) as $std.debug.TypeRef;
  }
  public set_type(v: $std.debug.TypeRef) {
    super.set(super.type.generated_offsets[1], v);
  }
 static create($g: $sdk.GreyCat, name: string, type: $std.debug.TypeRef): FnParam {
    return new FnParam($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[90], name, type);
  }
}

export async function modules($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<Array<$std.debug.ModDesc>> {
  return $g.call('debug::modules', undefined, $signal);
}
export async function readModVar($g: $sdk.GreyCat, module: string, name: string, $signal?: AbortSignal): Promise<any | null> {
  return $g.call('debug::readModVar', [module, name], $signal);
}
export async function callFn($g: $sdk.GreyCat, module: string, name: string, params: Array<any>, $signal?: AbortSignal): Promise<any | null> {
  return $g.call('debug::callFn', [module, name, params], $signal);
}
export async function callMethod($g: $sdk.GreyCat, self: any, fnName: string, params: Array<any>, $signal?: AbortSignal): Promise<any | null> {
  return $g.call('debug::callMethod', [self, fnName, params], $signal);
}
export async function callMethodBatch($g: $sdk.GreyCat, self: any, fnName: string, batch_params: Array<Array<any>>, $signal?: AbortSignal): Promise<unknown> {
  return $g.call('debug::callMethodBatch', [self, fnName, batch_params], $signal);
}
