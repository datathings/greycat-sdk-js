// @ts-check
import { GreyCat } from '@greycat/sdk';

const g = await GreyCat.init();

const input = [42, true, 'hello', { _type: 'core::CalendarUnit', field: 'month' }];

const res = await g.call('project::identity', [input]);
console.log(JSON.parse(JSON.stringify(res)));

