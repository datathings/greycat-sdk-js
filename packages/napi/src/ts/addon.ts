import * as os from 'os';
import {
  IGraph,
  IFunction,
  IObject,
  IArray,
  IContext,
  IType,
  ILogger,
  IConsole,
  IFunctionBody,
  IMap,
  GreyCatError,
  IString,
  IResolver,
} from '@greycat/common';
import { Context } from './Context';

const arch = os.arch();
const platform = os.platform();

export interface GreyCatAddon {
  register_gobject_constructor(ctr: new (...args: any[]) => IObject): void;
  register_garray_constructor(ctr: new (...args: any[]) => IArray): void;
  register_gfunction_constructor(ctr: new (...args: any[]) => IFunction): void;
  register_gcontext_constructor(ctr: new (...args: any[]) => IContext): void;
  register_gtype_constructor(ctr: new (...args: any[]) => IType): void;
  register_gerror_constructor(ctr: new (...args: any[]) => GreyCatError): void;
  register_gmap_constructor(ctr: new (...args: any[]) => IMap): void;
  register_gstring_constructor(ctr: new (...args: any[]) => IString): void;
  register_glogger(logger: ILogger): void;
  register_gconsole(console: IConsole): void;
  register_gresolver(resolver: IResolver): void;

  wrap__instance(instance: IGraph | IFunction | IContext | IType, ptr: number): void;

  graph__wrap(graph: IGraph, cacheSize: number, bufferSize: number): void;
  graph__create_context(graph: IGraph): IContext;
  graph__create_function(graph: IGraph): IFunction;

  graph__export_types(graph: IGraph): string;
  graph__is_meta(graph: IGraph, key: number): boolean;
  graph__declare_meta(graph: IGraph, name: string): number;
  graph__destroy(graph: IGraph): void;

  function__parse(func: IFunction, script: string, uri?: string): boolean;
  function__create_context(func: IFunction): Context;
  function__pipe(self: IFunction, func: IFunction): void;
  function__pipe_external(self: IFunction, body: IFunctionBody): void;
  function__execute(ctx: IContext, func: IFunction, callback: IFunctionBody): void;
  function__get_graph(func: IFunction): IGraph;
  function__add_param(func: IFunction, name: number, hash_type: number, is_optional: boolean): void;
  function__add_mparam(func: IFunction, name: number, hash_types: number[], is_optional: boolean): void;

  context__get_key(ctx: IContext, key: number): any;
  context__set_key(ctx: IContext, key: number, value: any): any;
  context__set_result(ctx: IContext, value: any): any;
  context__get_graph(ctx: IContext): IGraph;

  object__get_element<T = any>(obj: IObject<T>, offset: number): any;
  object__get_key<T = any>(obj: IObject<T>, key: number): any;
  object__set_key<T = any>(obj: IObject<T>, name: string, value: any): any;
  object__un_mark<T = any>(obj: IObject<T> | IContext | IFunction | IMap | IString): void;
  object__to_json<T = any>(obj: IObject<T> | IContext | IFunction): string;

  array__add_element<T = any>(obj: IArray<T>, value: any): void;
  array__get_element<T = any>(obj: IArray<T>, offset: number): any;
  array__set_element<T = any>(obj: IArray<T>, offset: number, value: any): void;
  array__size<T = any>(obj: IArray<T>): number;
  array__resize<T = any>(obj: IArray<T>, new_size: number): void;

  type__wrap(graph: IGraph, type: IType, typeName: string, isOpen: boolean): void;
  type__name(type: IType): string;
  type__key(type: IType): number;
  type__seal(type: IType): void;
  type__graph(type: IType): IGraph;
  type__is_open(type: IType): boolean;
  type__declare_attribute(type: IType, name: string, typeKey: number): void;
  type__declare_static_attribute(type: IType, name: string, value: any): void;
  type__declare_function(type: IType, name: string, func: IFunction): void;
  type__declare_static_function(type: IType, name: string, fn: IFunction): void;

  map__get(map: IMap, key: string | number): any;
  map__mget(map: IMap, key: string | number, it: (value: string | number) => void): void;
  map__set(map: IMap, key: string | number, value: any): void;
  map__put(map: IMap, key: string | number, value: any): void;
  map__remove(map: IMap, key: string | number): boolean;
  map__size(map: IMap): number;
  map__foreach(map: IMap, it: (key: string | number, value: any) => void): void;

  string__prepare(str: IString, needed: number): void;
  string__value(str: IString): string;
  string__close(str: IString): void;
  string__reset(str: IString): void;
  string__size(str: IString): number;
}

let _addon: GreyCatAddon | undefined;

switch (arch) {
  case 'x64':
    switch (platform) {
      case 'linux':
        try {
          _addon = require('@greycat/native-x64-cuda-11');
        } catch {
          /*noop*/
        }
        if (!_addon) {
          try {
            _addon = require('@greycat/native-x64-cuda-10-2');
          } catch {
            /*noop*/
          }
        }
        if (!_addon) {
          _addon = require('@greycat/native-x64-libc');
        }
        break;

      case 'darwin':
        // _addon = require('@greycat/native-x64-libc');
        break;
    }
    break;

  case 'arm64':
    switch (platform) {
      case 'linux':
        // _addon = require('@greycat/binding-linux-arm64');
        break;
    }
    break;

  case 'arm':
    switch (platform) {
      case 'linux':
        // _addon = require('@greycat/binding-linux-armv7');
        break;
    }
    break;
}

if (_addon === undefined) {
  throw new Error(`Invalid target '${platform}-${arch}' for Greycat N-API`);
}

export const addon = _addon;
