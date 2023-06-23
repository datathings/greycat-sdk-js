// @ts-check
import { GreyCat } from './dist/esm/index.js';

const greycat = await GreyCat.init({
  url: new URL('http://localhost:8080'),
});

const functions = ['int', 'float', 'bool', 'string', 'empty_array', 'int_array', 'float_array'];

for (const fn of functions) {
  const fqn = `project::${fn}`;
  console.log(`${fqn}()`, await greycat.call(fqn));
}
