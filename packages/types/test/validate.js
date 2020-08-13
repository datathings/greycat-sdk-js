const path = require('path');

const DATA_PATH = path.join(__dirname, '../src/std.types.json');
const SCHEMA_PATH = path.join(__dirname, 'std.types.schema.json');

const project = path.resolve(__dirname, '..');
console.log(`Validating std libs: '${path.relative(project, DATA_PATH)}'`);

// @ts-check
const Ajv = require('ajv');
// @ts-ignore
const schema = require(SCHEMA_PATH);
// @ts-ignore
const data = require(DATA_PATH);

var ajv = new Ajv({ schemaId: 'auto' });
const isValid = ajv.validate(schema, data);

if (!isValid) {
  console.error(`Invalid against '${SCHEMA_PATH}':`);
  ajv.errorsText().split(', ').forEach((e) => {
    console.error(` - ${e}`);
  });
  process.exit(1);
} else {
  console.log('Valid');
}
