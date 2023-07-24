import { readFile } from 'node:fs/promises';
import { Abi, AbiReader, stdlib, GCObject } from './dist/esm/index.js';
import assert from 'node:assert';

const buffer = (await readFile('gcdata/store/abi')).buffer;
const abi = new Abi(buffer, [stdlib]);

const data = (await readFile('out.gcb')).buffer;
const reader = new AbiReader(abi, data);

reader.headers(); // read headers

const expected_values = [
  true,
  '*',
  0,
  1,
  -1,
  63,
  -64,
  64,
  -65,
  8191,
  -8192,
  8192,
  -8193,
  1048575,
  -1048576,
  1048576,
  -1048577,
  134217727,
  -134217728,
  134217728,
  -134217729,
  17179869183,
  -17179869184,
  17179869184,
  -17179869185,
  2199023255551,
  -2199023255552,
  2199023255552,
  -2199023255553,
  281474976710655,
  -281474976710656,
  281474976710656,
  -281474976710657,
  36028797018963967n,
  -36028797018963968n,
  36028797018963968n,
  -36028797018963969n,
  9223372036854775807n,
  -9223372036854775808n,
  13.37,
  'Hello world',
  'Hello world',
  {
    _type: 'core::GeoBox',
    sw: {
      _type: 'core::geo',
      lat: -85.05112864138243,
      lng: -179.99999979045242,
    },
    ne: {
      _type: 'core::geo',
      lat: -85.05112864138243,
      lng: -179.99999962281436,
    },
  },
  { _type: 'core::nodeList', ref: '0001000000000001' },
  { _type: 'core::TimeZone', field: 'Europe_Luxembourg' },
  { _type: 'core::node', ref: '0001000000000002' },
  {
    _type: 'core::Error',
    code: 0,
    msg: '',
    value: null,
    stack: [
      { module: 'project', fn: 'main', line: 14, column: 17 },
      { module: 'project', fn: 'write_std', line: 18, column: 18 },
      { module: 'project', fn: 'write_core', line: 82, column: 28 },
    ],
  },
  { _type: 'core::ErrorCode', field: 'none' },
  { _type: 'core::SamplingMode', field: 'adaptative' },
  { _type: 'core::DurationUnit', field: 'days' },
  { _type: 'core::TensorType', field: 'c128' },
  { _type: 'core::Table', cols: 0, rows: 0, data: [], meta: null },
  {
    _type: 'core::geo',
    lat: -85.05112876019749,
    lng: -179.99999937135726,
  },
  { _type: 'core::Tensor' },
  {
    _type: 'core::GeoCircle',
    center: {
      _type: 'core::geo',
      lat: -85.05112876019749,
      lng: -179.99999937135726,
    },
    radius: 13.37,
  },
  { _type: 'core::Date', iso: '<todo>', timeZone: 191 }, // TODO this is not what we actually expect
  new Map(),
  { _type: 'core::duration', s: 0.000012, us: 12 },
  { _type: 'core::nodeTime', ref: '0001000000000003' },
  [],
  { _type: 'core::Tuple', x: null, y: null },
  { _type: 'core::nodeIndex', ref: '0001000000000004' },
  {
    _type: 'core::GeoPoly',
    points: [
      {
        _type: 'core::geo',
        lat: -85.05112864138243,
        lng: -179.99999979045242,
      },
      {
        _type: 'core::geo',
        lat: -85.05112864138243,
        lng: -179.99999962281436,
      },
      {
        _type: 'core::geo',
        lat: -85.05112864138243,
        lng: -179.99999979045242,
      },
    ],
  },
  { _type: 'core::time', epoch: 0.000012, us: 12 },
  { _type: 'core::DatePart', field: 'days' },
  { _type: 'core::nodeGeo', ref: '0001000000000005' },
  { _type: 'core::ti2d', x0: 13, x1: 37 },
  { _type: 'core::ti3d', x0: 13, x1: 37, x2: 42 },
  { _type: 'core::ti4d', x0: 13, x1: 37, x2: 42, x3: 12 },
  { _type: 'core::ti5d', x0: -1, x1: 13, x2: 37, x3: 42, x4: 12 },
  { _type: 'core::ti6d', x0: -1, x1: 13, x2: 37, x3: 42, x4: 12, x5: -12 },
  { _type: 'core::ti10d', x0: -1, x1: 13, x2: 27, x3: 22, x4: 12, x5: 1, x6: -13, x7: -27, x8: -22, x9: -12 },
  { _type: 'core::tf2d', x0: 13.369999885559082, x1: 12.420000076293945 },
  { _type: 'core::tf3d', x0: 13.37, x1: 12.42, x2: -13.37 },
  { _type: 'core::tf4d', x0: 13.37, x1: 12.42, x2: -13.37, x3: -12.42 },
];
let i = 0;
let actual;
let expected;
try {
  for (;;) {
    actual = reader.deserialize();
    if (actual instanceof GCObject) {
      actual = JSON.parse(JSON.stringify(actual));
    }
    expected = expected_values[i];
    if (expected === undefined) {
      console.log('NOT TESTED>', actual);
    } else {
      assert.deepStrictEqual(actual, expected);
    }
    i++;
  }
} catch {
  console.log(`failed at item #${i}`, { actual, expected });
}
