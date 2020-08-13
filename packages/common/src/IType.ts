import { IFunctionLike } from './IFunction';
import { IGraph } from './IGraph';

export interface IType {
  name: string;
  key: number;
  open: boolean;
  setClass<T>(clazz: new (...args: any[]) => T): IType;
  declareAttribute(name: string, type: string | number): IType;
  declareFunction(name: string, func: IFunctionLike): IType;
  declareStaticAttribute(name: string, value: any): IType;
  declareStaticFunction(name: string, func: IFunctionLike): IType;
  seal(): IType;
  graph(): IGraph;
  unmark(): void;
  toJSON(): any;
}