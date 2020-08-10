import { IGraph, IContext, IType, IFunction, GreycatStdLibs, stdLibs, hash } from './common';
import { addon } from './addon';
import { GType } from './GType';

export class Graph implements IGraph {

  constructor(cacheSize = 100000, bufferSize = 1000) {
    addon.graph__wrap(this, cacheSize, bufferSize);
  }

  declareType(name: string, isOpen?: boolean | undefined): IType {
    return new GType(this, name, isOpen);
  }

  declareMeta(name: string): number {
    return addon.graph__declare_meta(this, name);
  }

  getType(_name: string): IType {
    throw new Error('Method not implemented.');
  }

  newContext(): IContext {
    return addon.graph__create_context(this);
  }

  newFunction(): IFunction {
    return addon.graph__create_function(this);
  }

  exportTypes(): GreycatStdLibs {
    return stdLibs;
  }

  isMeta(name: string): boolean {
    return addon.graph__is_meta(this, hash(name));
  }

  destroy() {
    addon.graph__destroy(this);
  }
}
