import { GreycatStdLibs } from './types';
import * as STD_LIBS from './std.types.json';

export * from './types';
export { default as Keys } from './keys';
export { default as MetaKeys } from './metakeys';
export const stdLibs = STD_LIBS as GreycatStdLibs;
