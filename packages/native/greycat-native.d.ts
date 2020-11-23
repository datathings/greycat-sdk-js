/**
 * THIS FILE MUST BE UPDATED TO REFLECT THE UNDERLYING C API
 *
 * TODO: use a generative approach to create this file
 */

import {
  ILogger,
  IGraph,
  IFunction,
  GreyCatError,
  IArray,
  IConsole,
  IContext,
  IFunctionBody,
  IMap,
  IObject,
  IResolver,
  IString,
  IType,
} from '@greycat/common';

export function register_gobject_constructor(ctr: new (...args: any[]) => IObject): void;
export function register_garray_constructor(ctr: new (...args: any[]) => IArray): void;
export function register_gfunction_constructor(ctr: new (...args: any[]) => IFunction): void;
export function register_gcontext_constructor(ctr: new (...args: any[]) => IContext): void;
export function register_gtype_constructor(ctr: new (...args: any[]) => IType): void;
export function register_gerror_constructor(ctr: new (...args: any[]) => GreyCatError): void;
export function register_gmap_constructor(ctr: new (...args: any[]) => IMap): void;
export function register_gstring_constructor(ctr: new (...args: any[]) => IString): void;
export function register_glogger(logger: ILogger): void;
export function register_gconsole(console: IConsole): void;
export function register_gresolver(resolver: IResolver): void;

export function wrap__instance(instance: IGraph | IFunction | IContext | IType, ptr: number): void;

export function graph__wrap(graph: IGraph, cacheSize: number, bufferSize: number, storePath?: string): void;
export function graph__create_context(graph: IGraph): IContext;
export function graph__create_function(graph: IGraph): IFunction;

export function graph__export_types(graph: IGraph): string;
export function graph__is_meta(graph: IGraph, key: number): boolean;
export function graph__declare_meta(graph: IGraph, name: string): number;
export function graph__destroy(graph: IGraph): void;

export function function__parse(func: IFunction, script: string, uri?: string): boolean;
export function function__create_context(func: IFunction): IContext;
export function function__pipe(self: IFunction, func: IFunction): void;
export function function__pipe_external(self: IFunction, body: IFunctionBody): void;
export function function__execute(ctx: IContext, func: IFunction, callback: IFunctionBody): void;
export function function__get_graph(func: IFunction): IGraph;
export function function__add_param(func: IFunction, name: number, hash_type: number, is_optional: boolean): void;
export function function__add_mparam(func: IFunction, name: number, hash_types: number[], is_optional: boolean): void;

export function context__get_key(ctx: IContext, key: number): any;
export function context__set_key(ctx: IContext, key: number, value: any): any;
export function context__set_result(ctx: IContext, value: any): any;
export function context__get_graph(ctx: IContext): IGraph;

export function object__get_element<T = any>(obj: IObject<T>, offset: number): any;
export function object__get_key<T = any>(obj: IObject<T>, key: number): any;
export function object__set_key<T = any>(obj: IObject<T>, name: string, value: any): any;
export function object__un_mark<T = any>(obj: IObject<T> | IContext | IFunction | IMap | IString): void;
export function object__to_json<T = any>(obj: IObject<T> | IContext | IFunction): string;

export function array__add_element<T = any>(obj: IArray<T>, value: any): void;
export function array__get_element<T = any>(obj: IArray<T>, offset: number): any;
export function array__set_element<T = any>(obj: IArray<T>, offset: number, value: any): void;
export function array__size<T = any>(obj: IArray<T>): number;
export function array__resize<T = any>(obj: IArray<T>, new_size: number): void;

export function type__wrap(graph: IGraph, type: IType, typeName: string, isOpen: boolean): void;
export function type__name(type: IType): string;
export function type__key(type: IType): number;
export function type__seal(type: IType): void;
export function type__graph(type: IType): IGraph;
export function type__is_open(type: IType): boolean;
export function type__declare_attribute(type: IType, name: string, typeKey: number): void;
export function type__declare_static_attribute(type: IType, name: string, value: any): void;
export function type__declare_function(type: IType, name: string, func: IFunction): void;
export function type__declare_static_function(type: IType, name: string, fn: IFunction): void;

export function map__get(map: IMap, key: string | number): any;
export function map__mget(map: IMap, key: string | number, it: (value: string | number) => void): void;
export function map__set(map: IMap, key: string | number, value: any): void;
export function map__put(map: IMap, key: string | number, value: any): void;
export function map__remove(map: IMap, key: string | number): boolean;
export function map__size(map: IMap): number;
export function map__foreach(map: IMap, it: (key: string | number, value: any) => void): void;

export function string__prepare(str: IString, needed: number): void;
export function string__value(str: IString): string;
export function string__close(str: IString): void;
export function string__reset(str: IString): void;
export function string__size(str: IString): number;
