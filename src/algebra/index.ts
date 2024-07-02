// AUTO-GENERATED FILE PLEASE DO NOT MODIFY MANUALLY
/* eslint-disable */
import * as $sdk from '../index.js';

export namespace project {
  export class Foo extends $sdk.GCObject {
    static readonly _type = 'project::Foo';

    a!: bigint | number | null;

    static createFrom(
      { a }: { a: bigint | number | null },
      $g: $sdk.GreyCat = globalThis.greycat.default,
    ): Foo {
      return new Foo($g.abi.libs_by_name.get(projectlib.name)!.mapped[0], a);
    }
    static create(a: bigint | number | null, $g: $sdk.GreyCat = globalThis.greycat.default): Foo {
      return new Foo($g.abi.libs_by_name.get(projectlib.name)!.mapped[0], a);
    }
  }

  export class Confidence extends $sdk.GCEnum {
    static readonly _type = 'project::Confidence';

    constructor(
      type: $sdk.AbiType,
      offset: number,
      public override key: Confidence.Field,
      value: $sdk.Value,
    ) {
      super(type, offset, key, value);
    }

    static High($g: $sdk.GreyCat = globalThis.greycat.default): Confidence {
      const t = $g.abi.libs_by_name.get(projectlib.name)!.mapped[1];
      return t.static_values['High'];
    }
    static Medium($g: $sdk.GreyCat = globalThis.greycat.default): Confidence {
      const t = $g.abi.libs_by_name.get(projectlib.name)!.mapped[1];
      return t.static_values['Medium'];
    }
    static Low($g: $sdk.GreyCat = globalThis.greycat.default): Confidence {
      const t = $g.abi.libs_by_name.get(projectlib.name)!.mapped[1];
      return t.static_values['Low'];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): Confidence[] {
      const t = $g.abi.libs_by_name.get(projectlib.name)!.mapped[1];
      return t.enum_values as Confidence[];
    }
  }

  export namespace Confidence {
    export type Field = 'High' | 'Medium' | 'Low';
  }
  export class FooBar extends $sdk.GCObject {
    static readonly _type = 'project::FooBar';

    tz!: $sdk.std.core.TimeZone;
    name!: string;
    int!: bigint | number;
    foo!: project.FooBar | null;
    values!: globalThis.Array<any>;

    static createFrom(
      {
        tz,
        name,
        int,
        foo,
        values,
      }: {
        tz: $sdk.std.core.TimeZone;
        name: string;
        int: bigint | number;
        foo: project.FooBar | null;
        values: globalThis.Array<any>;
      },
      $g: $sdk.GreyCat = globalThis.greycat.default,
    ): FooBar {
      return new FooBar(
        $g.abi.libs_by_name.get(projectlib.name)!.mapped[2],
        tz,
        name,
        int,
        foo,
        values,
      );
    }
    static create(
      tz: $sdk.std.core.TimeZone,
      name: string,
      int: bigint | number,
      foo: project.FooBar | null,
      values: globalThis.Array<any>,
      $g: $sdk.GreyCat = globalThis.greycat.default,
    ): FooBar {
      return new FooBar(
        $g.abi.libs_by_name.get(projectlib.name)!.mapped[2],
        tz,
        name,
        int,
        foo,
        values,
      );
    }
  }

  export class FloatPrecisionTest extends $sdk.GCObject {
    static readonly _type = 'project::FloatPrecisionTest';

    normal!: number;
    precision!: number;

    static createFrom(
      { normal, precision }: { normal: number; precision: number },
      $g: $sdk.GreyCat = globalThis.greycat.default,
    ): FloatPrecisionTest {
      return new FloatPrecisionTest(
        $g.abi.libs_by_name.get(projectlib.name)!.mapped[3],
        normal,
        precision,
      );
    }
    static create(
      normal: number,
      precision: number,
      $g: $sdk.GreyCat = globalThis.greycat.default,
    ): FloatPrecisionTest {
      return new FloatPrecisionTest(
        $g.abi.libs_by_name.get(projectlib.name)!.mapped[3],
        normal,
        precision,
      );
    }
  }

  export class Bar<T extends $sdk.Value = any> extends $sdk.GCObject {
    static readonly _type = 'project::Bar';

    attr!: T | null;

    static createFrom(
      { attr }: { attr: any | null },
      $g: $sdk.GreyCat = globalThis.greycat.default,
    ): Bar {
      return new Bar($g.abi.libs_by_name.get(projectlib.name)!.mapped[4], attr);
    }
    static create(attr: any | null, $g: $sdk.GreyCat = globalThis.greycat.default): Bar {
      return new Bar($g.abi.libs_by_name.get(projectlib.name)!.mapped[4], attr);
    }
  }

  export function table(
    $g: $sdk.GreyCat = globalThis.greycat.default,
    $signal?: AbortSignal,
  ): Promise<unknown> {
    return $g.call('project::table', undefined, $signal);
  }
  export function longTask(
    $g: $sdk.GreyCat = globalThis.greycat.default,
    $signal?: AbortSignal,
  ): Promise<unknown> {
    return $g.call('project::longTask', undefined, $signal);
  }
  export function slowTask(
    $g: $sdk.GreyCat = globalThis.greycat.default,
    $signal?: AbortSignal,
  ): Promise<unknown> {
    return $g.call('project::slowTask', undefined, $signal);
  }
  export function computeTask(
    $g: $sdk.GreyCat = globalThis.greycat.default,
    $signal?: AbortSignal,
  ): Promise<unknown> {
    return $g.call('project::computeTask', undefined, $signal);
  }
  export function testTensor(
    $g: $sdk.GreyCat = globalThis.greycat.default,
    $signal?: AbortSignal,
  ): Promise<$sdk.std.core.Tensor> {
    return $g.call('project::testTensor', undefined, $signal);
  }
  export function tensor(
    $g: $sdk.GreyCat = globalThis.greycat.default,
    $signal?: AbortSignal,
  ): Promise<unknown> {
    return $g.call('project::tensor', undefined, $signal);
  }
  export function tensor2(
    $g: $sdk.GreyCat = globalThis.greycat.default,
    $signal?: AbortSignal,
  ): Promise<unknown> {
    return $g.call('project::tensor2', undefined, $signal);
  }
  export function tensor3(
    $g: $sdk.GreyCat = globalThis.greycat.default,
    $signal?: AbortSignal,
  ): Promise<unknown> {
    return $g.call('project::tensor3', undefined, $signal);
  }
  export function foo(
    $g: $sdk.GreyCat = globalThis.greycat.default,
    $signal?: AbortSignal,
  ): Promise<project.Foo> {
    return $g.call('project::foo', undefined, $signal);
  }
  export function task_with_params(
    different: string,
    age: bigint | number,
    $g: $sdk.GreyCat = globalThis.greycat.default,
    $signal?: AbortSignal,
  ): Promise<string> {
    return $g.call('project::task_with_params', [different, age], $signal);
  }
  export function enum_(
    $g: $sdk.GreyCat = globalThis.greycat.default,
    $signal?: AbortSignal,
  ): Promise<unknown> {
    return $g.call('project::enum', undefined, $signal);
  }
  export function table2(
    $g: $sdk.GreyCat = globalThis.greycat.default,
    $signal?: AbortSignal,
  ): Promise<$sdk.std.core.Table<any>> {
    return $g.call('project::table2', undefined, $signal);
  }
  export function time(
    $g: $sdk.GreyCat = globalThis.greycat.default,
    $signal?: AbortSignal,
  ): Promise<unknown> {
    return $g.call('project::time', undefined, $signal);
  }
  export function errorTask(
    $g: $sdk.GreyCat = globalThis.greycat.default,
    $signal?: AbortSignal,
  ): Promise<unknown> {
    return $g.call('project::errorTask', undefined, $signal);
  }
  export function stringError(
    $g: $sdk.GreyCat = globalThis.greycat.default,
    $signal?: AbortSignal,
  ): Promise<unknown> {
    return $g.call('project::stringError', undefined, $signal);
  }
  export function errorError(
    $g: $sdk.GreyCat = globalThis.greycat.default,
    $signal?: AbortSignal,
  ): Promise<unknown> {
    return $g.call('project::errorError', undefined, $signal);
  }
  export function float(
    f: number | null,
    $g: $sdk.GreyCat = globalThis.greycat.default,
    $signal?: AbortSignal,
  ): Promise<unknown> {
    return $g.call('project::float', [f], $signal);
  }
  export function blockingFn(
    $g: $sdk.GreyCat = globalThis.greycat.default,
    $signal?: AbortSignal,
  ): Promise<unknown> {
    return $g.call('project::blockingFn', undefined, $signal);
  }
  export function enumValue(
    $g: $sdk.GreyCat = globalThis.greycat.default,
    $signal?: AbortSignal,
  ): Promise<unknown> {
    return $g.call('project::enumValue', undefined, $signal);
  }
  export function foobar(
    $g: $sdk.GreyCat = globalThis.greycat.default,
    $signal?: AbortSignal,
  ): Promise<unknown> {
    return $g.call('project::foobar', undefined, $signal);
  }
  export function vtable_test(
    $g: $sdk.GreyCat = globalThis.greycat.default,
    $signal?: AbortSignal,
  ): Promise<$sdk.std.core.Table> {
    return $g.call('project::vtable_test', undefined, $signal);
  }
  export function print_table(
    table: $sdk.std.core.Table,
    $g: $sdk.GreyCat = globalThis.greycat.default,
    $signal?: AbortSignal,
  ): Promise<unknown> {
    return $g.call('project::print_table', [table], $signal);
  }
  export function fn_pointer(
    $g: $sdk.GreyCat = globalThis.greycat.default,
    $signal?: AbortSignal,
  ): Promise<unknown> {
    return $g.call('project::fn_pointer', undefined, $signal);
  }
}

export namespace $anon$ {
  export class Anon0 extends $sdk.GCObject {
    static readonly _type = '::<string,int,float,bool,char,enum>';

    string!: any;
    int!: any;
    float!: any;
    bool!: any;
    char!: any;
    enum!: any;
  }
  export class Anon1 extends $sdk.GCObject {
    static readonly _type = '::<hello,took>';

    hello!: any;
    took!: any;
  }
  export class Anon2 extends $sdk.GCObject {
    static readonly _type = '::<value>';

    value!: any;
  }
  export class Anon3 extends $sdk.GCObject {
    static readonly _type = '::<enum>';

    enum!: any;
  }
}

export const projectlib: $sdk.Library = {
  name: 'project',
  mapped: new globalThis.Array(9),
  configure(_loaders, factories) {
    factories.set(project.Foo._type, project.Foo);
    factories.set(project.Confidence._type, project.Confidence);
    factories.set(project.FooBar._type, project.FooBar);
    factories.set(project.FloatPrecisionTest._type, project.FloatPrecisionTest);
    factories.set(project.Bar._type, project.Bar);
    factories.set($anon$.Anon0._type, $anon$.Anon0);
    factories.set($anon$.Anon1._type, $anon$.Anon1);
    factories.set($anon$.Anon2._type, $anon$.Anon2);
    factories.set($anon$.Anon3._type, $anon$.Anon3);
  },
  init(abi) {
    this.mapped[0] = abi.type_by_fqn.get(project.Foo._type)!;
    this.mapped[1] = abi.type_by_fqn.get(project.Confidence._type)!;
    this.mapped[1]?.resolveGeneratedOffsetWithValues('High', null, 'Medium', null, 'Low', null);
    this.mapped[2] = abi.type_by_fqn.get(project.FooBar._type)!;
    this.mapped[3] = abi.type_by_fqn.get(project.FloatPrecisionTest._type)!;
    this.mapped[4] = abi.type_by_fqn.get(project.Bar._type)!;
    this.mapped[5] = abi.type_by_fqn.get($anon$.Anon0._type)!;
    this.mapped[6] = abi.type_by_fqn.get($anon$.Anon1._type)!;
    this.mapped[7] = abi.type_by_fqn.get($anon$.Anon2._type)!;
    this.mapped[8] = abi.type_by_fqn.get($anon$.Anon3._type)!;
  },
};

declare module '../index.js' {
  interface GreyCat {
    call(method: 'project::table', args?: undefined, signal?: AbortSignal): Promise<unknown>;
    spawn(
      method: 'project::table',
      args?: undefined,
      signal?: AbortSignal,
    ): Promise<$sdk.std.runtime.Task>;
    spawnAwait(
      method: 'project::table',
      args?: undefined,
      pollEvery?: number,
      signal?: AbortSignal,
    ): Promise<unknown>;
    call(method: 'project::longTask', args?: undefined, signal?: AbortSignal): Promise<unknown>;
    spawn(
      method: 'project::longTask',
      args?: undefined,
      signal?: AbortSignal,
    ): Promise<$sdk.std.runtime.Task>;
    spawnAwait(
      method: 'project::longTask',
      args?: undefined,
      pollEvery?: number,
      signal?: AbortSignal,
    ): Promise<unknown>;
    call(method: 'project::slowTask', args?: undefined, signal?: AbortSignal): Promise<unknown>;
    spawn(
      method: 'project::slowTask',
      args?: undefined,
      signal?: AbortSignal,
    ): Promise<$sdk.std.runtime.Task>;
    spawnAwait(
      method: 'project::slowTask',
      args?: undefined,
      pollEvery?: number,
      signal?: AbortSignal,
    ): Promise<unknown>;
    call(method: 'project::computeTask', args?: undefined, signal?: AbortSignal): Promise<unknown>;
    spawn(
      method: 'project::computeTask',
      args?: undefined,
      signal?: AbortSignal,
    ): Promise<$sdk.std.runtime.Task>;
    spawnAwait(
      method: 'project::computeTask',
      args?: undefined,
      pollEvery?: number,
      signal?: AbortSignal,
    ): Promise<unknown>;
    call(
      method: 'project::testTensor',
      args?: undefined,
      signal?: AbortSignal,
    ): Promise<$sdk.std.core.Tensor>;
    spawn(
      method: 'project::testTensor',
      args?: undefined,
      signal?: AbortSignal,
    ): Promise<$sdk.std.runtime.Task>;
    spawnAwait(
      method: 'project::testTensor',
      args?: undefined,
      pollEvery?: number,
      signal?: AbortSignal,
    ): Promise<$sdk.std.core.Tensor>;
    call(method: 'project::tensor', args?: undefined, signal?: AbortSignal): Promise<unknown>;
    spawn(
      method: 'project::tensor',
      args?: undefined,
      signal?: AbortSignal,
    ): Promise<$sdk.std.runtime.Task>;
    spawnAwait(
      method: 'project::tensor',
      args?: undefined,
      pollEvery?: number,
      signal?: AbortSignal,
    ): Promise<unknown>;
    call(method: 'project::tensor2', args?: undefined, signal?: AbortSignal): Promise<unknown>;
    spawn(
      method: 'project::tensor2',
      args?: undefined,
      signal?: AbortSignal,
    ): Promise<$sdk.std.runtime.Task>;
    spawnAwait(
      method: 'project::tensor2',
      args?: undefined,
      pollEvery?: number,
      signal?: AbortSignal,
    ): Promise<unknown>;
    call(method: 'project::tensor3', args?: undefined, signal?: AbortSignal): Promise<unknown>;
    spawn(
      method: 'project::tensor3',
      args?: undefined,
      signal?: AbortSignal,
    ): Promise<$sdk.std.runtime.Task>;
    spawnAwait(
      method: 'project::tensor3',
      args?: undefined,
      pollEvery?: number,
      signal?: AbortSignal,
    ): Promise<unknown>;
    call(method: 'project::foo', args?: undefined, signal?: AbortSignal): Promise<project.Foo>;
    spawn(
      method: 'project::foo',
      args?: undefined,
      signal?: AbortSignal,
    ): Promise<$sdk.std.runtime.Task>;
    spawnAwait(
      method: 'project::foo',
      args?: undefined,
      pollEvery?: number,
      signal?: AbortSignal,
    ): Promise<project.Foo>;
    call(
      method: 'project::task_with_params',
      args: [string, bigint | number],
      signal?: AbortSignal,
    ): Promise<string>;
    spawn(
      method: 'project::task_with_params',
      args: [string, bigint | number],
      signal?: AbortSignal,
    ): Promise<$sdk.std.runtime.Task>;
    spawnAwait(
      method: 'project::task_with_params',
      args: [string, bigint | number],
      pollEvery?: number,
      signal?: AbortSignal,
    ): Promise<string>;
    call(method: 'project::enum', args?: undefined, signal?: AbortSignal): Promise<unknown>;
    spawn(
      method: 'project::enum',
      args?: undefined,
      signal?: AbortSignal,
    ): Promise<$sdk.std.runtime.Task>;
    spawnAwait(
      method: 'project::enum',
      args?: undefined,
      pollEvery?: number,
      signal?: AbortSignal,
    ): Promise<unknown>;
    call(
      method: 'project::table2',
      args?: undefined,
      signal?: AbortSignal,
    ): Promise<$sdk.std.core.Table<any>>;
    spawn(
      method: 'project::table2',
      args?: undefined,
      signal?: AbortSignal,
    ): Promise<$sdk.std.runtime.Task>;
    spawnAwait(
      method: 'project::table2',
      args?: undefined,
      pollEvery?: number,
      signal?: AbortSignal,
    ): Promise<$sdk.std.core.Table<any>>;
    call(method: 'project::time', args?: undefined, signal?: AbortSignal): Promise<unknown>;
    spawn(
      method: 'project::time',
      args?: undefined,
      signal?: AbortSignal,
    ): Promise<$sdk.std.runtime.Task>;
    spawnAwait(
      method: 'project::time',
      args?: undefined,
      pollEvery?: number,
      signal?: AbortSignal,
    ): Promise<unknown>;
    call(method: 'project::errorTask', args?: undefined, signal?: AbortSignal): Promise<unknown>;
    spawn(
      method: 'project::errorTask',
      args?: undefined,
      signal?: AbortSignal,
    ): Promise<$sdk.std.runtime.Task>;
    spawnAwait(
      method: 'project::errorTask',
      args?: undefined,
      pollEvery?: number,
      signal?: AbortSignal,
    ): Promise<unknown>;
    call(method: 'project::stringError', args?: undefined, signal?: AbortSignal): Promise<unknown>;
    spawn(
      method: 'project::stringError',
      args?: undefined,
      signal?: AbortSignal,
    ): Promise<$sdk.std.runtime.Task>;
    spawnAwait(
      method: 'project::stringError',
      args?: undefined,
      pollEvery?: number,
      signal?: AbortSignal,
    ): Promise<unknown>;
    call(method: 'project::errorError', args?: undefined, signal?: AbortSignal): Promise<unknown>;
    spawn(
      method: 'project::errorError',
      args?: undefined,
      signal?: AbortSignal,
    ): Promise<$sdk.std.runtime.Task>;
    spawnAwait(
      method: 'project::errorError',
      args?: undefined,
      pollEvery?: number,
      signal?: AbortSignal,
    ): Promise<unknown>;
    call(method: 'project::float', args: [number | null], signal?: AbortSignal): Promise<unknown>;
    spawn(
      method: 'project::float',
      args: [number | null],
      signal?: AbortSignal,
    ): Promise<$sdk.std.runtime.Task>;
    spawnAwait(
      method: 'project::float',
      args: [number | null],
      pollEvery?: number,
      signal?: AbortSignal,
    ): Promise<unknown>;
    call(method: 'project::blockingFn', args?: undefined, signal?: AbortSignal): Promise<unknown>;
    spawn(
      method: 'project::blockingFn',
      args?: undefined,
      signal?: AbortSignal,
    ): Promise<$sdk.std.runtime.Task>;
    spawnAwait(
      method: 'project::blockingFn',
      args?: undefined,
      pollEvery?: number,
      signal?: AbortSignal,
    ): Promise<unknown>;
    call(method: 'project::enumValue', args?: undefined, signal?: AbortSignal): Promise<unknown>;
    spawn(
      method: 'project::enumValue',
      args?: undefined,
      signal?: AbortSignal,
    ): Promise<$sdk.std.runtime.Task>;
    spawnAwait(
      method: 'project::enumValue',
      args?: undefined,
      pollEvery?: number,
      signal?: AbortSignal,
    ): Promise<unknown>;
    call(method: 'project::foobar', args?: undefined, signal?: AbortSignal): Promise<unknown>;
    spawn(
      method: 'project::foobar',
      args?: undefined,
      signal?: AbortSignal,
    ): Promise<$sdk.std.runtime.Task>;
    spawnAwait(
      method: 'project::foobar',
      args?: undefined,
      pollEvery?: number,
      signal?: AbortSignal,
    ): Promise<unknown>;
    call(
      method: 'project::vtable_test',
      args?: undefined,
      signal?: AbortSignal,
    ): Promise<$sdk.std.core.Table>;
    spawn(
      method: 'project::vtable_test',
      args?: undefined,
      signal?: AbortSignal,
    ): Promise<$sdk.std.runtime.Task>;
    spawnAwait(
      method: 'project::vtable_test',
      args?: undefined,
      pollEvery?: number,
      signal?: AbortSignal,
    ): Promise<$sdk.std.core.Table>;
    call(
      method: 'project::print_table',
      args: [$sdk.std.core.Table],
      signal?: AbortSignal,
    ): Promise<unknown>;
    spawn(
      method: 'project::print_table',
      args: [$sdk.std.core.Table],
      signal?: AbortSignal,
    ): Promise<$sdk.std.runtime.Task>;
    spawnAwait(
      method: 'project::print_table',
      args: [$sdk.std.core.Table],
      pollEvery?: number,
      signal?: AbortSignal,
    ): Promise<unknown>;
    call(method: 'project::fn_pointer', args?: undefined, signal?: AbortSignal): Promise<unknown>;
    spawn(
      method: 'project::fn_pointer',
      args?: undefined,
      signal?: AbortSignal,
    ): Promise<$sdk.std.runtime.Task>;
    spawnAwait(
      method: 'project::fn_pointer',
      args?: undefined,
      pollEvery?: number,
      signal?: AbortSignal,
    ): Promise<unknown>;
  }
}
