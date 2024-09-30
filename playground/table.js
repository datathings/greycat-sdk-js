// @ts-check
import { GreyCat } from '@greycat/sdk';
import { displayValue } from './_utils.js';
import { core } from '../dist/std_n/index.js';

try {
  const g = await GreyCat.init();

  const contacts = core.Table.fromObjects([
    { firstname: 'John', lastname: 'Doe', age: 42 },
    { firstname: 'Jane', lastname: 'Doe', age: 36 },
  ]);
  const res = await g.call('project::contacts', [contacts]);
  displayValue(res);
} catch (err) {
  console.error(err);
  process.exit(1);
}
