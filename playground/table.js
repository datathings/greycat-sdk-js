// @ts-check
import { core, GreyCat } from '@greycat/sdk';
import { displayValue } from './_utils.js';

/**
 * @typedef {Object} Named
 * @property {string} name
 *
 * @typedef {Object} MyRow
 * @property {number | bigint} id
 * @property {number} temp
 * @property {Named} named
 */

try {
  const g = await GreyCat.init();

  /** @type {import('@greycat/sdk').core.Table<MyRow>} */
  const table = await g.call('project::some_table');
  for (const row of table) {
    displayValue(row);
  }

  /**
   * @type {import('@greycat/sdk').core.Table<[string, number]>}
   */
  const t2 = core.Table.fromRows([
    ['John', 42],
    ['Paul', 36],
    ['Maria', 27],
  ]);

  for (const row of t2) {
    displayValue(row);
  }
} catch (err) {
  console.error(err);
  process.exit(1);
}
