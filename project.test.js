import assert from 'node:assert';
import { describe, before, it } from 'node:test';
import { readFile } from 'node:fs/promises';

import { Abi, AbiReader, AbiWriter, stdlib } from './dist/esm/index.js';

describe('project', () => {
  let abi, reader;

  const expected_values = [
    // std::core
    true,
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
    { _type: 'core::duration', s: 0, us: 12 },
    { _type: 'core::time', epoch: 0, us: 12 },
    [],
    [42, true, 'hello', { _type: 'core::DatePart', field: 'months' }],
    { _type: 'core::geo', lat: -85.05112876019749, lng: -179.99999937135726 },
    {},
    { 42: 42, true: true, hello: 'hello', 'core::DatePart::months': { _type: 'core::DatePart', field: 'months' } },
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
    { _type: 'core::nodeList', ref: '0000000000001000' },
    { _type: 'core::TimeZone', field: 'Europe_Luxembourg' },
    { _type: 'core::node', ref: '0000000000002000' },
    {
      _type: 'core::Error',
      code: 0,
      msg: '',
      value: null,
      stack: [
        { module: 'project', fn: 'main', line: 8, column: 17 },
        { module: 'project', fn: 'write_std', line: 12, column: 18 },
        { module: 'project', fn: 'write_core', line: 86, column: 28 },
      ],
    },
    { _type: 'core::ErrorCode', field: 'none' },
    { _type: 'core::SamplingMode', field: 'adaptative' },
    { _type: 'core::DurationUnit', field: 'days' },
    { _type: 'core::TensorType', field: 'c128' },
    { _type: 'core::Table', cols: [[0,0.5,1,1.5]], meta: [{_type: 'core::NativeTableColumnMeta', index: false, typeName: 'core::float' }] },
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
    { _type: 'core::Date', iso: '<todo>', timeZone: { _type: 'core::TimeZone', field: 'Europe_Luxembourg' } }, // TODO this is not what we actually expect
    { _type: 'core::nodeTime', ref: '0000000000003000' },
    [],
    { _type: 'core::Tuple', x: [], y: {} },
    { _type: 'core::nodeIndex', ref: '0000000000004000' },
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
    { _type: 'core::DatePart', field: 'days' },
    { _type: 'core::nodeGeo', ref: '0000000000005000' },
    { _type: 'core::ti2d', x0: 13, x1: 37 },
    { _type: 'core::ti3d', x0: 13, x1: 37, x2: 42 },
    { _type: 'core::ti4d', x0: 13, x1: 37, x2: 42, x3: 12 },
    { _type: 'core::ti5d', x0: -1, x1: 13, x2: 37, x3: 42, x4: 12 },
    { _type: 'core::ti6d', x0: -1, x1: 13, x2: 37, x3: 42, x4: 12, x5: -12 },
    { _type: 'core::ti10d', x0: -1, x1: 13, x2: 27, x3: 22, x4: 12, x5: 1, x6: -13, x7: -27, x8: -22, x9: -12 },
    { _type: 'core::tf2d', x0: 13.369999885559082, x1: 12.420000076293945 },
    { _type: 'core::tf3d', x0: 13.369140625, x1: 12.419921875, x2: -13.369140625 },
    { _type: 'core::tf4d', x0: 13.3125, x1: 12.375, x2: -13.3125, x3: -12.375 },

    // std::io
    { _type: 'io::TextEncoder', field: 'plain' },
    { _type: 'io::CsvColumnString' },
    { _type: 'io::CsvColumnInteger' },
    { _type: 'io::CsvColumnFloat' },
    { _type: 'io::CsvColumnBoolean' },
    { _type: 'io::CsvColumnTime' },
    { _type: 'io::CsvColumnDate' },
    { _type: 'io::CsvColumnIgnored' },
    {
      _type: 'io::CsvFormat',
      header_lines: 12,
      infer: true,
      separator: ',',
      string_delimiter: '"',
      decimal_separator: '.',
      thousands_separator: '_',
      columns: [],
    },

    // std::math
    2.7182818284590455, // MathConstants::e
    1.4426950408889634, // MathConstants::log_2e
    0.43429448190325187, // MathConstants::log_10e
    0.6931471805599453, // MathConstants::ln2
    2.302585092994046, // MathConstants::ln10
    3.141592653589793, // MathConstants::pi
    1.5707963267948966, // MathConstants::pi_2
    0.7853981633974484, // MathConstants::pi_4
    0.31830988618379064, // MathConstants::m1_pi
    0.6366197723675813, // MathConstants::m2_pi
    1.1283791670955126, // MathConstants::m2_sqrt_pi
    1.414213562373095, // MathConstants::sqrt2
    0.7071067811865476, // MathConstants::sqrt1_2

    // std::runtime
    {
      _type: 'runtime::Task',
      user_id: 13,
      task_id: 37,
      mod: '',
      type: '',
      fun: '',
      creation: { _type: 'core::time', epoch: 0, us: 42 },
      status: { _type: 'runtime::TaskStatus', field: 'empty' },
    },
    { _type: 'runtime::TaskStatus', field: 'cancelled' },
    { _type: 'runtime::Runtime' },
    {
      _type: 'runtime::RuntimeInfo',
      version: '',
      arch: '',
      timezone: { _type: 'core::TimeZone', field: 'Europe_Luxembourg' },
      license: {
        _type: 'runtime::License',
        start: { _type: 'core::time', epoch: 0, us: 13 },
        end: { _type: 'core::time', epoch: 0, us: 37 },
        max_workers: 12,
        max_memory: 42,
      },
      io_threads: 13,
      bg_threads: 37,
      fg_threads: 42,
      mem_total: 12,
      mem_worker: 0,
      nb_ctx: 1,
    },
    { _type: 'runtime::SecurityFields' },
    { _type: 'runtime::UserGroup', id: 12, name: '', activated: false },
    { _type: 'runtime::OpenIDConnect', url: '', clientId: '' },
    { _type: 'runtime::UserRole', name: '', permissions: [] },
    {
      _type: 'runtime::PeriodicTask',
      name: '',
      user_id: 12,
      start: { _type: 'core::time', epoch: 0, us: 13 },
      every: { _type: 'core::duration', s: 0, us: 37 },
    },
    { _type: 'runtime::User', id: 12, name: '', activated: false, external: true },
    {
      _type: 'runtime::UserGroupPolicy',
      group_id: 12,
      type: { _type: 'runtime::UserGroupPolicyType', field: 'execute' },
    },
    { _type: 'runtime::UserGroupPolicyType', field: 'read' },
    {
      _type: 'runtime::License',
      start: { _type: 'core::time', epoch: 0, us: 13 },
      end: { _type: 'core::time', epoch: 0, us: 37 },
      max_workers: 12,
      max_memory: 42,
    },
    {
      _type: 'runtime::StoreStat',
      capacity_bytes: 13,
      allocated_bytes: 37,
      allocated_ratio: 13.37,
      remained_bytes: 12,
      remained_ratio: 4.2,
      used_bytes: 42,
      used_ratio: 0.1,
      available_bytes: 0,
      available_ratio: 0.2,
    },
    { _type: 'runtime::System' },
    { _type: 'runtime::SecurityPolicy', entities: [], credentials: {}, roles: {} },

    // std::util
    { _type: 'util::Random', seed: 42, v: 13.37 },
    { _type: 'util::Buffer' },
    { _type: 'util::Assert' },
    { _type: 'util::ProgressTracker', start: { _type: 'core::time', epoch: 0, us: 0 } },
    { _type: 'util::Iban' },
    { _type: 'util::Gaussian' },
    { _type: 'util::GaussianProfile' },
    { _type: 'util::TimeWindow' },
    { _type: 'util::SlidingWindow' },
    { _type: 'util::Queue' },
    { _type: 'util::Crypto' },
  ];

  before(async () => {
    const buffer = (await readFile('project.test.abi')).buffer;
    abi = new Abi(buffer, [stdlib]);

    const data = (await readFile('project.test.gcb')).buffer;
    reader = new AbiReader(abi, data);

    reader.headers(); // read headers
  });

  // test ser/de
  for (const expected of expected_values) {
    const testName =
      typeof expected === 'object' ? (expected._type ? expected._type : expected.constructor.name) : expected;
    it(`${testName}`, () => {
      // deserialize value from actual 'out.gcb' bytes
      let actual = reader.deserialize();
      // create a temporary serializer
      const writer = new AbiWriter(abi, 4);
      // serialize the value again
      writer.serialize(actual);
      // create a temporary deserializer
      const reader2 = new AbiReader(abi, writer.buffer.buffer);
      // deserialize the value again from what we serialize
      const roundtrip_value = reader2.deserialize();
      // ensure the actual deserialized value and our roundtrip are equals
      assert.deepStrictEqual(actual, roundtrip_value);
      // serialize to JSON
      actual = fromJson(toJson(actual));
      // validate that we were actually expecting this value
      assert.deepStrictEqual(actual, expected);
    });
  }
});

function fromJson(value) {
  return JSON.parse(value, (_, value) => {
    if (typeof value === 'string' && value.startsWith('$bigint:')) {
      // eslint-disable-next-line no-undef
      return BigInt(value.slice(8));
    }
    return value;
  });
}

function toJson(value) {
  return JSON.stringify(value, (_, value) => {
    if (typeof value === 'bigint') {
      if (value >= Number.MIN_SAFE_INTEGER && value <= Number.MAX_SAFE_INTEGER) {
        return Number(value);
      }
      return `$bigint:${value}`;
    }
    return value;
  });
}
