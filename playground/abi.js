// @ts-check
import { GreyCat } from '@greycat/sdk';

const g = await GreyCat.init();

for (const symbol of g.abi.symbols) {
  console.log(symbol);
}