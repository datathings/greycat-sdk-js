import { IFunction, IContext, IType, GreycatStdLibs } from '.';

export interface IGraph {

  declareType(name: string, isOpen?: boolean): IType;

  declareMeta(name: string): number;

  getType(name: string): IType;

  newContext(): IContext;

  newFunction(): IFunction;

  isMeta(name: string): boolean;

  exportTypes(): GreycatStdLibs;

  destroy(): void;
}
