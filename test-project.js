import { GreyCat } from './dist/esm/index.js';

console.time('init');
const greycat = await GreyCat.init({
  url: new URL('http://localhost:8080'),
});
console.timeEnd('init');
console.log();

const fqns = [
  'project::foo',
  'project::int',
  'project::float',
  'project::bool',
  'project::string',
  'project::empty_array',
  'project::int_array',
  'project::float_array',
  'project::map',
  'project::throw',
  'project::inline_object',
  'project::person',
  'project::enum_value',
  'project::time',
  'project::duration',
  'project::geo',
  'project::node',
  'project::nodeTime',
  'project::nodeList',
  'project::nodeGeo',
  'project::nodeIndex',
  'project::me',
];

for (const fqn of fqns) {
  console.time(fqn);
  await call(fqn);
  console.timeEnd(fqn);
  console.log();
}

async function call(method) {
  try {
    const value = await greycat.call(method);
    if (Array.isArray(value)) {
      console.log({ array: value });
    } else if (value instanceof Map) {
      const o = {};
      value.forEach((value, key) => {
        o[key] = value;
      });
      console.log({ map: o });
    } else if (typeof value === 'object') {
      console.log(JSON.parse(JSON.stringify(value)));
    } else {
      console.log({ [typeof value]: value });
    }
  } catch (err) {
    console.log({ error: err });
  }
}
