import { std } from './std.js';
import { GreyCat } from './index.js';

describe('greycat/core', () => {
  let greycat: GreyCat;

  before(async () => {
    greycat = await GreyCat.init({ url: new URL('http://localhost:8080'), libraries: [std] });
  });

  it('runtime::Runtime::info', async () => {
    await greycat.call('runtime::Runtime::info');
  });

  it('project::table', async () => {
    await greycat.call('project::table');
    // console.log(JSON.parse(JSON.stringify(table)));
  });
});
