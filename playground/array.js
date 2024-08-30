// @ts-check
import { GreyCat } from '@greycat/sdk';

const g = await GreyCat.init();

const expected = [null, null, 42];

const bytes = g.serializeWithHeaders(expected);
const actual = g.deserializeWithHeader(bytes);

console.log({ expected, actual });

// const res = await g.call('project::identity', [expected]);
// console.log(JSON.parse(JSON.stringify(res)));
