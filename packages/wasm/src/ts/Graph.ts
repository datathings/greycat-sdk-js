import { IGraph, IType, IFunction, IContext, GreycatStdLibs, stdLibs, hash } from './common';
import { addon } from '.';
import { GFunction } from './GFunction';
import { Context } from './Context';
import { GType } from './GType';

export class Graph implements IGraph {

  readonly ptr: number;

  constructor(cacheSize: number = 10, bufferSize: number = 10) {
    this.ptr = addon._graph__create(cacheSize, bufferSize);
    addon.__pointers[this.ptr] = this;
  }

  declareType(name: string, isOpen: boolean = false): IType {
    return new GType(this, name, isOpen);
  }

  declareMeta(name: string): number {
    const key = hash(name);
    const name_ptr = addon.allocateUTF8(name);
    addon._ggraph__declare_meta(this.ptr, key, name_ptr);
    addon._free(name_ptr);
    return key;
  }

  getType(_name: string): IType {
    throw new Error('Method not implemented.');
  }

  newContext(): IContext {
    return new Context(addon._ggraph__create_context(this.ptr));
  }

  newFunction(): IFunction {
    return new GFunction(addon._ggraph__create_function(this.ptr));
  }

  exportTypes(): GreycatStdLibs {
    return stdLibs;
  }

  isMeta(name: string): boolean {
    return addon._ggraph__is_meta(this.ptr, hash(name)) === 1;
  }

  destroy() {
    addon._ggraph__destroy(this.ptr);
    delete addon.__pointers[this.ptr];
  }
}
