import { GreycatStdLibs } from './types';

export * from './types';
export { default as Keys } from './keys';
export { default as MetaKeys } from './metakeys';
export const stdLibs = require('./std.types.json') as GreycatStdLibs;
