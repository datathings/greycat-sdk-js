import { IType, IFunctionLike, IGraph, hash } from './common';
import { addon } from './addon';
import { Graph } from './Graph';

export class GType implements IType {

  constructor(graph: Graph, name: string, isOpen: boolean = false) {
    addon.type__wrap(graph, this, name, isOpen);
  }

  declareAttribute(name: string, type: string | number): IType {
    const hashed_type = typeof type === 'number' ? type : hash(type);
    addon.type__declare_attribute(this, name, hashed_type);
    return this;
  }

  declareStaticAttribute(name: string, value: any): IType {
    addon.type__declare_static_attribute(this, name, value);
    return this;
  }

  declareFunction(name: string, func: IFunctionLike): IType {
    const fn = this.graph().newFunction().then(func);
    addon.type__declare_function(this, name, fn);
    fn.unmark();
    return this;
  }

  declareStaticFunction(name: string, func: IFunctionLike): IType {
    const fn = this.graph().newFunction().then(func);
    addon.type__declare_static_function(this, name, fn);
    fn.unmark();
    return this;
  }

  setClass<T>(_clazz: new (...args: any[]) => T): IType {
    throw new Error('Method not implemented.');
  }

  graph(): IGraph {
    return addon.type__graph(this);
  }

  seal(): IType {
    addon.type__seal(this);
    return this;
  }

  unmark() {
    addon.object__un_mark(this);
  }

  toJSON(): any {
    return JSON.parse(this.toString());
  }

  toString() {
    return addon.object__to_json(this);
  }

  get name(): string {
    return addon.type__name(this);
  }

  get key(): number {
    return addon.type__key(this);
  }

  get open(): boolean {
    return addon.type__is_open(this);
  }
}
