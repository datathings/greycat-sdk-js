// AUTO-GENERATED FILE PLEASE DO NOT MODIFY MANUALLY
/* eslint-disable */
// @ts-nocheck

import * as $sdk from '@greycat/sdk';
import * as $std from '../index.js';
import * as std_n from '../../std_n/index.js';

// module: debug.gcl
export async function readModVar($g: $sdk.GreyCat, module: string, name: string, $signal?: AbortSignal): Promise<any | null> {
  return $g.call('debug::readModVar', [module, name], $signal);
}
export async function callFn($g: $sdk.GreyCat, module: string, name: string, params: Array<any>, $signal?: AbortSignal): Promise<any | null> {
  return $g.call('debug::callFn', [module, name, params], $signal);
}
export async function callMethod($g: $sdk.GreyCat, self: any, fnName: string, params: Array<any>, $signal?: AbortSignal): Promise<any | null> {
  return $g.call('debug::callMethod', [self, fnName, params], $signal);
}
export async function callMethodBatch($g: $sdk.GreyCat, self: any, fnName: string, batch_params: Array<Array<any>>, $signal?: AbortSignal): Promise<unknown> {
  return $g.call('debug::callMethodBatch', [self, fnName, batch_params], $signal);
}
