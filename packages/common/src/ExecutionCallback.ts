import { GreyCatError } from './GreycatError';
import { IContext } from './IContext';

export type ExecutionCallback = (ex: GreyCatError | undefined, ctx: IContext) => void;