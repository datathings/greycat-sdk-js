import { IType, IFunctionLike, hash } from './common';
import { addon, Graph, IGraph } from '.';
import { js_to_greycat, ISetValueHandler } from './types';
import { GString } from './GString';
import { GFunction } from './GFunction';

export class GType implements IType {

  readonly ptr: number;

  constructor(graph: Graph, name: string, isOpen: boolean = false) {
    if (!graph.isMeta(name)) {
      graph.declareMeta(name);
    }
    this.ptr = addon._type__create(graph.ptr, hash(name), isOpen);
  }

  declareAttribute(name: string, type: string | number): IType {
    const hashed_type = typeof type === 'number' ? type : hash(type);
    const name_ptr = addon.allocateUTF8(name);
    addon._type__declare_attribute(this.ptr, name_ptr, hashed_type);
    addon._free(name_ptr);
    return this;
  }

  declareStaticAttribute(name: string, value: any): IType {
    const name_ptr = addon.allocateUTF8(name);
    js_to_greycat(value, addon._type__graph(this.ptr), type_static_set_handler(this.ptr, name_ptr));
    addon._free(name_ptr);
    return this;
  }

  declareFunction(name: string, func: IFunctionLike): IType {
    const name_ptr = addon.allocateUTF8(name);
    const fn = this.graph().newFunction().then(func) as GFunction;
    addon._type__declare_function(this.ptr, name_ptr, fn.ptr, false);
    fn.unmark();
    addon._free(name_ptr);
    return this;
  }

  declareStaticFunction(name: string, func: IFunctionLike): IType {
    const name_ptr = addon.allocateUTF8(name);
    const fn = this.graph().newFunction().then(func) as GFunction;
    addon._type__declare_function(this.ptr, name_ptr, fn.ptr, true);
    fn.unmark();
    addon._free(name_ptr);
    return this;
  }

  setClass<T>(_clazz: new (...args: any[]) => T): IType {
    throw new Error('Method not implemented.');
  }

  seal(): IType {
    addon._type__seal(this.ptr);
    return this;
  }

  unmark() {
    addon._gobject__un_mark(this.ptr);
  }

  graph(): IGraph {
    return addon.__pointers[addon._type__graph(this.ptr)];
  }

  toJSON() {
    return JSON.parse(this.toString());
  }

  toString() {
    const str = new GString(addon._object__to_json(this.ptr));
    const json = str.value;
    str.unmark();
    return json;
  }

  get name(): string {
    const str = new GString(addon._type__name(this.ptr));
    const typeName = str.value;
    str.unmark();
    return typeName;
  }

  get key(): number {
    return addon._type__key(this.ptr);
  }

  get open(): boolean {
    return addon._type__is_open(this.ptr) === 1;
  }
}

function type_static_set_handler(ptr: number, name_ptr: number): ISetValueHandler {
  return {
    isInt32: (value) => {
      addon._type__declare_static_int(ptr, name_ptr, value);
    },
    isDouble: (value) => {
      addon._type__declare_static_double(ptr, name_ptr, value);
    },
    isBoolean: (value) => {
      addon._type__declare_static_bool(ptr, name_ptr, value);
    },
    isLong: (high, low) => {
      addon._type__declare_static_long(ptr, name_ptr, high, low);
    },
    isNull: () => {
      addon._type__declare_static_null(ptr, name_ptr);
    },
    isObject: (obj_ptr) => {
      addon._type__declare_static_object(ptr, name_ptr, obj_ptr);
    },
    isUndefined: () => {
      // noop
    },
    isNotHandled: (value: any) => {
      console.error(`GObject can't set value '${value}' of type '${typeof value}'`);
    },
  };
}