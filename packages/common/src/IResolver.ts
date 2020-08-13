import { IGraph } from './IGraph';

export type IResolver = (graph: IGraph, target: string, current: string) => string | null;
