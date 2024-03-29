import assert from 'node:assert';
import { describe, before, it } from 'node:test';
import { readFile } from 'node:fs/promises';

import {
  Abi,
  AbiReader,
  AbiWriter,
  GCEnum,
  algebralib,
  stdlib,
  core,
  GreyCat,
} from './dist/esm/index.js';

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
    42,
    'Hello world',
    'Hello world',
    { _type: 'core::duration', s: 0, us: 12 },
    { _type: 'core::time', iso: '1970-01-01T00:00:00.000Z' },
    [],
    [42, true, 'hello', { _type: 'core::DatePart', field: 'months' }],
    { _type: 'core::geo', lat: 49.596344732033856, lng: 6.128470371477306 },
    {},
    { _type: 'core::function', fqn: 'project::table' },
    {
      42: 42,
      true: true,
      hello: 'hello',
      'core::DatePart::months': { _type: 'core::DatePart', field: 'months' },
    },
    {
      _type: '::<string,int,float,bool,char,enum>',
      string: 'hello',
      int: 42,
      float: 3.14,
      bool: true,
      char: 'c',
      enum: { _type: 'core::TimeZone', field: 'Europe_Luxembourg' },
    },
    {
      _type: 'core::GeoBox',
      ne: {
        _type: 'core::geo',
        lat: 1.500000000617348,
        lng: -0.5000000121071935,
      },
      sw: {
        _type: 'core::geo',
        lat: 0.9999999938107322,
        lng: 2.000000006519258,
      },
    },
    { _type: 'core::nodeList', ref: '400000' },
    { _type: 'core::TimeZone', field: 'Europe_Luxembourg' },
    { _type: 'core::node', ref: '800000' },
    {
      _type: 'core::Error',
      code: 0,
      msg: 'an error',
      value: null,
      stack: [
        { module: 'project', fn: 'main', line: 12, column: 17 },
        { module: 'project', fn: 'write_std', line: 17, column: 22 },
        { module: 'project', fn: 'write_std_core', line: 95, column: 36 },
      ],
    },
    { _type: 'core::ErrorCode', field: 'none' },
    { _type: 'core::SamplingMode', field: 'adaptative' },
    { _type: 'core::DurationUnit', field: 'days' },
    { _type: 'core::TensorType', field: 'c128' },
    {
      _type: 'core::Table',
      cols: [
        [0, 0.5, 1, 1.5],
        [null, null, null, null],
      ],
      meta: [
        {
          _type: 'core::NativeTableColumnMeta',
          header: 'Column 0',
          index: false,
          typeName: 'core::float',
          min: 0,
          max: 1.5,
        },
        {
          _type: 'core::NativeTableColumnMeta',
          header: null,
          index: false,
          typeName: 'core::null',
          min: null,
          max: null,
        },
      ],
    },
    {
      _type: 'core::Tensor',
      dim: 0,
      shape: [],
      type: { _type: 'core::TensorType', field: 'i32' },
      data: null,
    },
    {
      _type: 'core::Tensor',
      dim: 1,
      shape: [1, 1],
      type: { _type: 'core::TensorType', field: 'f64' },
      data: [[3.14]],
    },
    {
      _type: 'core::GeoCircle',
      center: {
        _type: 'core::geo',
        lat: 49.596344732033856,
        lng: 6.128470371477306,
      },
      radius: 13.37,
    },
    {
      _type: 'core::Date',
      iso: '2012-12-12T12:12:12.120012+01:00',
      timeZone: { _type: 'core::TimeZone', field: 'Europe_Luxembourg' },
    }, // TODO this is not what we actually expect
    { _type: 'core::nodeTime', ref: 'c00000' },
    [],
    { _type: 'core::Tuple', x: [], y: {} },
    { _type: 'core::Tuple', x: 42, y: 'hello' },
    { _type: 'core::nodeIndex', ref: '1000000' },
    {
      _type: 'core::GeoPoly',
      points: [
        {
          _type: 'core::geo',
          lat: 0.9999999938107322,
          lng: 2.000000006519258,
        },
        {
          _type: 'core::geo',
          lat: 1.500000000617348,
          lng: 2.010000036098063,
        },
        {
          _type: 'core::geo',
          lat: 0.9999999938107322,
          lng: 2.000000006519258,
        },
      ],
    },
    { _type: 'core::DatePart', field: 'days' },
    { _type: 'core::nodeGeo', ref: '1400000' },
    { _type: 'core::ti2d', x0: 13, x1: 37 },
    { _type: 'core::ti3d', x0: 13, x1: 37, x2: 42 },
    { _type: 'core::ti4d', x0: 13, x1: 37, x2: 42, x3: 12 },
    { _type: 'core::ti5d', x0: -1, x1: 13, x2: 37, x3: 42, x4: 12 },
    { _type: 'core::ti6d', x0: -1, x1: 13, x2: 37, x3: 42, x4: 12, x5: -12 },
    {
      _type: 'core::ti10d',
      x0: -1,
      x1: 13,
      x2: 27,
      x3: 22,
      x4: 12,
      x5: 1,
      x6: -13,
      x7: -27,
      x8: -22,
      x9: -12,
    },
    { _type: 'core::tf2d', x0: 13.369999885559082, x1: 12.420000076293945 },
    { _type: 'core::tf3d', x0: 13.369140625, x1: 12.419921875, x2: -13.369140625 },
    { _type: 'core::tf4d', x0: 13.3125, x1: 12.375, x2: -13.3125, x3: -12.375 },
    // std::core::MathConstants
    2.718281828459045, // MathConstants::e
    1.4426950408889634, // MathConstants::log_2e
    0.4342944819032518, // MathConstants::log_10e
    0.6931471805599453, // MathConstants::ln2
    2.302585092994046, // MathConstants::ln10
    3.141592653589793, // MathConstants::pi
    1.5707963267948966, // MathConstants::pi_2
    0.7853981633974483, // MathConstants::pi_4
    0.3183098861837907, // MathConstants::m1_pi
    0.6366197723675814, // MathConstants::m2_pi
    1.1283791670955126, // MathConstants::m2_sqrt_pi
    1.4142135623730951, // MathConstants::sqrt2
    0.7071067811865476, // MathConstants::sqrt1_2

    // std::io
    { _type: 'io::TextEncoder', field: 'plain' },
    {
      _type: 'io::CsvColumnString',
      encoder: null,
      mandatory: null,
      name: null,
      trim: null,
      try_json: null,
      try_number: null,
      values: null,
      offset: null,
    },
    { _type: 'io::CsvColumnInteger', mandatory: null, name: null, offset: null },
    { _type: 'io::CsvColumnFloat', mandatory: null, name: null, offset: null },
    { _type: 'io::CsvColumnBoolean', mandatory: null, name: null, offset: null },
    { _type: 'io::CsvColumnTime', mandatory: null, name: null, unit: null, offset: null },
    {
      _type: 'io::CsvColumnDate',
      mandatory: null,
      name: null,
      as_time: null,
      format: null,
      tz: null,
      offset: null,
    },
    { _type: 'io::CsvColumnIgnored', mandatory: null, name: null, offset: null },
    {
      _type: 'io::CsvFormat',
      header_lines: 12,
      separator: ',',
      string_delimiter: '"',
      decimal_separator: '.',
      thousands_separator: '_',
      columns: [],
      columns_size: null,
    },

    // std::runtime
    {
      _type: 'runtime::Task',
      user_id: 13,
      task_id: 37,
      mod: '',
      type: '',
      fun: '',
      start: null,
      duration: null,
      creation: { _type: 'core::time', iso: '1970-01-01T00:00:00.000Z' },
      status: { _type: 'runtime::TaskStatus', field: 'empty' },
    },
    { _type: 'runtime::TaskStatus', field: 'cancelled' },
    { _type: 'runtime::Runtime' },
    {
      _type: 'runtime::RuntimeInfo',
      version: '',
      program_version: null,
      arch: '',
      timezone: { _type: 'core::TimeZone', field: 'Europe_Luxembourg' },
      license: {
        _type: 'runtime::License',
        start: { _type: 'core::time', iso: '1970-01-01T00:00:00.000Z' },
        end: { _type: 'core::time', iso: '1970-01-01T00:00:00.000Z' },
        max_memory: 12,
        company: null,
        name: null,
        extra_1: null,
        extra_2: null,
        type: null,
      },
      io_threads: 13,
      bg_threads: 37,
      fg_threads: 42,
      mem_total: 12,
      mem_worker: 0,
      nb_ctx: 1,
      store_stats: null,
    },
    {
      _type: 'runtime::SecurityFields',
      email: null,
      first_name: null,
      groups: null,
      last_name: null,
      name: null,
      roles: null,
    },
    { _type: 'runtime::UserGroup', id: 12, name: '', activated: false },
    { _type: 'runtime::OpenIDConnect', url: '', clientId: '' },
    { _type: 'runtime::UserRole', name: '', permissions: [] },
    {
      _type: 'runtime::PeriodicTask',
      function: { _type: 'core::function', fqn: 'project::float' },
      arguments: [3.14],
      user_id: 12,
      start: { _type: 'core::time', iso: '1970-01-01T00:00:00.000Z' },
      every: { _type: 'core::duration', s: 0, us: 37 },
    },
    {
      _type: 'runtime::User',
      id: 12,
      name: '',
      activated: false,
      external: true,
      groups: null,
      full_name: null,
      permissions_flags: null,
      role: null,
      groups_flags: null,
      email: null,
    },
    {
      _type: 'runtime::UserGroupPolicy',
      group_id: 12,
      type: { _type: 'runtime::UserGroupPolicyType', field: 'execute' },
    },
    { _type: 'runtime::UserGroupPolicyType', field: 'read' },
    {
      _type: 'runtime::License',
      start: { _type: 'core::time', iso: '1970-01-01T00:00:00.000Z' },
      end: { _type: 'core::time', iso: '1970-01-01T00:00:00.000Z' },
      max_memory: 12,
      company: null,
      extra_1: null,
      extra_2: null,
      name: null,
      type: null,
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
    {
      _type: 'runtime::SecurityPolicy',
      entities: [],
      credentials: {},
      roles: {},
      fields: null,
      keys: null,
      keys_last_refresh: null,
    },

    // std::util
    { _type: 'util::Random', seed: 42, v: 13.37 },
    { _type: 'util::Buffer' },
    { _type: 'util::Assert' },
    {
      _type: 'util::ProgressTracker',
      start: { _type: 'core::time', iso: '1970-01-01T00:00:00.000Z' },
      counter: null,
      duration: null,
      progress: null,
      remaining: null,
      speed: null,
      total: null,
    },
    { _type: 'util::Iban' },
    { _type: 'util::Gaussian', count: null, max: null, min: null, sum: null, sum_sq: null },
    { _type: 'util::GaussianProfile' },
    { _type: 'util::TimeWindow' },
    { _type: 'util::SlidingWindow' },
    { _type: 'util::Queue' },
    { _type: 'util::Crypto' },

    // algebra::ml
    { _type: 'ml::GaussianND' },
    { _type: 'ml::GaussianND' },

    // algebra::compute
    { _type: 'compute::ComputeActivationSigmoid' },
  ];

  before(async () => {
    const buffer = (await readFile('project.test.abi')).buffer;
    abi = new Abi(buffer, [stdlib, algebralib]);

    const data = (await readFile('project.test.gcb')).buffer;
    reader = new AbiReader(abi, data);

    reader.headers(); // read headers
  });

  // test ser/de
  for (const expected of expected_values) {
    let testName = `${expected} (${typeof expected})`;
    if (typeof expected === 'object') {
      if ('_type' in expected) {
        testName = expected._type;
      } else if (expected.constructor.name) {
        testName = expected.constructor.name;
      }
    }
    it(testName, () => {
      // deserialize value from actual 'out.gcb' bytes
      let actual = reader.deserialize();
      // create a temporary serializer
      const writer = new AbiWriter(abi);
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

describe('std', () => {
  before(async () => {
    const buffer = (await readFile('project.test.abi')).buffer;
    global.greycat.default = GreyCat.initWithAbi({
      abi: new Abi(buffer, [stdlib, algebralib]),
    });
  });

  it('time + duration => time', () => {
    assert.deepStrictEqual(core.time.create(40).add(core.duration.create(2)), core.time.create(42));
  });

  it('time - duration => time', () => {
    assert.deepStrictEqual(core.time.create(45).sub(core.duration.create(3)), core.time.create(42));
  });

  it('time - time => duration', () => {
    assert.deepStrictEqual(core.time.create(42).sub(core.time.create(40)), core.duration.create(2));
  });

  describe('duration', () => {
    it('0n => 0us', () => {
      assert.deepStrictEqual(core.duration.create(0n).toString(), '0us');
    });

    it('1_000_000_000n => 16min 40', () => {
      assert.deepStrictEqual(core.duration.create(1_000_000_000n).toString(), '16min 40s');
    });

    it('9_968_439_839_322_343n => 316year 1month 5day 30min 23s 322ms 343us', () => {
      assert.deepStrictEqual(
        core.duration.create(9_968_439_839_322_343n).toString(),
        '316year 1month 5day 30min 23s 322ms 343us',
      );
    });
  });
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
    } else if (value instanceof Map) {
      const json = {};
      value.forEach((value, key) => {
        if (key === null) {
          json['null'] = value;
        } else if (key === undefined) {
          json['undefined'] = value;
        } else if (key instanceof GCEnum) {
          json[`${key.$type.name}::${key.key}`] = value;
        } else {
          json[key.toString()] = value;
        }
      });
      return json;
    }
    return value;
  });
}
