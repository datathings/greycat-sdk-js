// @ts-check
import { GreyCat } from '@greycat/sdk';

const greycat = await GreyCat.init();
const root = await greycat.root();
console.log({ ...root });
