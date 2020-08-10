const path = require('path');

const DATA_PATH = path.join(__dirname, '../lib/std.types.json');
const SCHEMA_PATH = path.join(__dirname, 'std.types.schema.json');

// @ts-check
const Ajv = require('ajv');
// @ts-ignore
const schema = require(SCHEMA_PATH);
// @ts-ignore
const data = require(DATA_PATH);

var ajv = new Ajv({ schemaId: 'auto' });
const isValid = ajv.validate(schema, data);

if (!isValid) {
  console.error(`Unable to validate '${DATA_PATH}' against '${SCHEMA_PATH}':`);
  ajv.errorsText().split(', ').forEach((e) => {
    console.error(` - ${e}`);
  });
  process.exit(1);
}
