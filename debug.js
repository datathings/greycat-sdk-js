//
// use this file to debug quickly a problem
//
//
// run with: `node --inspect-brk debug.js`
// then in VSCode: `ctrl+shift+p` > `Debug: Attach to Node Process`
//
import { GreyCat, algebralib, core } from './dist/esm/index.js';

const g = await GreyCat.init({
  libraries: [algebralib],
});

g.abi.factories.set('')

const res = await g.call('core::node::resolve_all', [[core.node.fromRef('2000', g)]]);
console.log({ ...res[0] });