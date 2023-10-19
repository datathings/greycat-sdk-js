import { GreyCat, runtime } from './dist/esm/index.js';

// var g = await sdk.GreyCat.init({url:new URL("http://localhost:8080")});
// // const newRole = sdk.std.runtime.UserRole.create(
// //     g,
// //     "role_1",
// //     ["p1", "p2"],
// //   );
// // console.log(newRole.permissions);

// var p = await sdk.std.runtime.SecurityPolicy.permissions(g);
// console.log(p);

const greycat = (global.greycat.default = await GreyCat.init({ url: new URL('http://localhost:8080') }));

//const t = await fetch('http://localhost:8080/project::whatever', { method: 'POST' });

// const run = await greycat.call('runtime::Task::running');
// console.log(run);

//const run = await fetch('http://localhost:8080/runtime::Task::running', { method: 'POST' });

const history = await greycat.call('runtime::Task::history', [0, 100]);
console.log(history);
const history2 = await runtime.Task.history(greycat, 0, 100);
console.log(history2);

//console.log(t);
//console.log((await t.json()) as sdk.std.runtime.Task);
//console.log(await run.json());
