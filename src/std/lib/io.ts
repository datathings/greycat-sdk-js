// AUTO-GENERATED FILE PLEASE DO NOT MODIFY MANUALLY
/* eslint-disable */
// @ts-nocheck

import * as $sdk from '@greycat/sdk';
import * as $std from '../index.js';
import * as std_n from '../../std_n/index.js';

// module: io.gcl
export class FileEntry extends $sdk.GCObject {
  static readonly _type = 'io::FileEntry';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

 static create($g: $sdk.GreyCat): FileEntry {
    return new FileEntry($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[79]);
  }
}

export class AbiReader extends std_n.io.AbiReader {}

export class CSVColumnString extends $sdk.GCObject {
  static readonly _type = 'io::CSVColumnString';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_name(): string | null {
    return super.get(super.type.generated_offsets[0]) as string | null;
  }
  public set_name(v: string | null) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_mandatory(): boolean | null {
    return super.get(super.type.generated_offsets[1]) as boolean | null;
  }
  public set_mandatory(v: boolean | null) {
    super.set(super.type.generated_offsets[1], v);
  }
  public get_trim(): boolean | null {
    return super.get(super.type.generated_offsets[2]) as boolean | null;
  }
  public set_trim(v: boolean | null) {
    super.set(super.type.generated_offsets[2], v);
  }
  public get_try_number(): boolean | null {
    return super.get(super.type.generated_offsets[3]) as boolean | null;
  }
  public set_try_number(v: boolean | null) {
    super.set(super.type.generated_offsets[3], v);
  }
  public get_try_json(): boolean | null {
    return super.get(super.type.generated_offsets[4]) as boolean | null;
  }
  public set_try_json(v: boolean | null) {
    super.set(super.type.generated_offsets[4], v);
  }
  public get_values(): Array<string> | null {
    return super.get(super.type.generated_offsets[5]) as Array<string> | null;
  }
  public set_values(v: Array<string> | null) {
    super.set(super.type.generated_offsets[5], v);
  }
  public get_encoder(): $std.io.TextEncoder | null {
    return super.get(super.type.generated_offsets[6]) as $std.io.TextEncoder | null;
  }
  public set_encoder(v: $std.io.TextEncoder | null) {
    super.set(super.type.generated_offsets[6], v);
  }
 static create($g: $sdk.GreyCat, name: string | null, mandatory: boolean | null, trim: boolean | null, try_number: boolean | null, try_json: boolean | null, values: Array<string> | null, encoder: $std.io.TextEncoder | null): CSVColumnString {
    return new CSVColumnString($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[81], name, mandatory, trim, try_number, try_json, values, encoder);
  }
}

export class JsonFormat extends $sdk.GCObject {
  static readonly _type = 'io::JsonFormat';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

 static create($g: $sdk.GreyCat): JsonFormat {
    return new JsonFormat($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[82]);
  }
}

export class Env extends $sdk.GCObject {
  static readonly _type = 'io::Env';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

 static create($g: $sdk.GreyCat): Env {
    return new Env($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[83]);
  }
}

export class File extends std_n.io.File {}

export class CSVColumnTime extends $sdk.GCObject {
  static readonly _type = 'io::CSVColumnTime';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_name(): string | null {
    return super.get(super.type.generated_offsets[0]) as string | null;
  }
  public set_name(v: string | null) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_mandatory(): boolean | null {
    return super.get(super.type.generated_offsets[1]) as boolean | null;
  }
  public set_mandatory(v: boolean | null) {
    super.set(super.type.generated_offsets[1], v);
  }
  public get_unit(): $std.core.DurationUnit | null {
    return super.get(super.type.generated_offsets[2]) as $std.core.DurationUnit | null;
  }
  public set_unit(v: $std.core.DurationUnit | null) {
    super.set(super.type.generated_offsets[2], v);
  }
 static create($g: $sdk.GreyCat, name: string | null, mandatory: boolean | null, unit: $std.core.DurationUnit | null): CSVColumnTime {
    return new CSVColumnTime($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[85], name, mandatory, unit);
  }
}

export class CSVColumnFloat extends $sdk.GCObject {
  static readonly _type = 'io::CSVColumnFloat';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_name(): string | null {
    return super.get(super.type.generated_offsets[0]) as string | null;
  }
  public set_name(v: string | null) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_mandatory(): boolean | null {
    return super.get(super.type.generated_offsets[1]) as boolean | null;
  }
  public set_mandatory(v: boolean | null) {
    super.set(super.type.generated_offsets[1], v);
  }
 static create($g: $sdk.GreyCat, name: string | null, mandatory: boolean | null): CSVColumnFloat {
    return new CSVColumnFloat($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[86], name, mandatory);
  }
}

export class TextEncoder extends $sdk.GCEnum {
  static readonly _type = 'io::TextEncoder';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes[0], attributes[1], attributes[2]);
  }

  public static plain($g: $sdk.GreyCat): $std.io.TextEncoder {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[87];
    return t.enum_values![t.generated_offsets[0]] as $std.io.TextEncoder;
  }
  public static base64($g: $sdk.GreyCat): $std.io.TextEncoder {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[87];
    return t.enum_values![t.generated_offsets[1]] as $std.io.TextEncoder;
  }
  public static base64url($g: $sdk.GreyCat): $std.io.TextEncoder {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[87];
    return t.enum_values![t.generated_offsets[2]] as $std.io.TextEncoder;
  }
  public static hexadecimal($g: $sdk.GreyCat): $std.io.TextEncoder {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[87];
    return t.enum_values![t.generated_offsets[3]] as $std.io.TextEncoder;
  }
 static create($g: $sdk.GreyCat): TextEncoder {
    return new TextEncoder($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[87]);
  }
}

export class TextFormat extends $sdk.GCObject {
  static readonly _type = 'io::TextFormat';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

 static create($g: $sdk.GreyCat): TextFormat {
    return new TextFormat($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[88]);
  }
}

export class JSON extends $sdk.GCObject {
  static readonly _type = 'io::JSON';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

 static create($g: $sdk.GreyCat): JSON {
    return new JSON($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[89]);
  }
}

export class CSVColumnDate extends $sdk.GCObject {
  static readonly _type = 'io::CSVColumnDate';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_name(): string | null {
    return super.get(super.type.generated_offsets[0]) as string | null;
  }
  public set_name(v: string | null) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_mandatory(): boolean | null {
    return super.get(super.type.generated_offsets[1]) as boolean | null;
  }
  public set_mandatory(v: boolean | null) {
    super.set(super.type.generated_offsets[1], v);
  }
  public get_format(): string | null {
    return super.get(super.type.generated_offsets[2]) as string | null;
  }
  public set_format(v: string | null) {
    super.set(super.type.generated_offsets[2], v);
  }
  public get_tz(): $std.core.TimeZone | null {
    return super.get(super.type.generated_offsets[3]) as $std.core.TimeZone | null;
  }
  public set_tz(v: $std.core.TimeZone | null) {
    super.set(super.type.generated_offsets[3], v);
  }
  public get_as_time(): boolean | null {
    return super.get(super.type.generated_offsets[4]) as boolean | null;
  }
  public set_as_time(v: boolean | null) {
    super.set(super.type.generated_offsets[4], v);
  }
 static create($g: $sdk.GreyCat, name: string | null, mandatory: boolean | null, format: string | null, tz: $std.core.TimeZone | null, as_time: boolean | null): CSVColumnDate {
    return new CSVColumnDate($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[90], name, mandatory, format, tz, as_time);
  }
}

export class CSVColumnIgnored extends $sdk.GCObject {
  static readonly _type = 'io::CSVColumnIgnored';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_name(): string | null {
    return super.get(super.type.generated_offsets[0]) as string | null;
  }
  public set_name(v: string | null) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_mandatory(): boolean | null {
    return super.get(super.type.generated_offsets[1]) as boolean | null;
  }
  public set_mandatory(v: boolean | null) {
    super.set(super.type.generated_offsets[1], v);
  }
 static create($g: $sdk.GreyCat, name: string | null, mandatory: boolean | null): CSVColumnIgnored {
    return new CSVColumnIgnored($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[91], name, mandatory);
  }
}

export class FileWriter extends std_n.io.FileWriter {}

export class FileDescriptor extends $sdk.GCObject {
  static readonly _type = 'io::FileDescriptor';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_uri(): string {
    return super.get(super.type.generated_offsets[0]) as string;
  }
  public set_uri(v: string) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_size(): bigint | number | null {
    return super.get(super.type.generated_offsets[1]) as bigint | number | null;
  }
  public set_size(v: bigint | number | null) {
    super.set(super.type.generated_offsets[1], v);
  }
  public get_last_modification(): $sdk.std.core.time | null {
    return super.get(super.type.generated_offsets[2]) as $sdk.std.core.time | null;
  }
  public set_last_modification(v: $sdk.std.core.time | null) {
    super.set(super.type.generated_offsets[2], v);
  }
 static create($g: $sdk.GreyCat, uri: string, size: bigint | number | null, last_modification: $sdk.std.core.time | null): FileDescriptor {
    return new FileDescriptor($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[93], uri, size, last_modification);
  }
}

export class BinaryFormat extends $sdk.GCObject {
  static readonly _type = 'io::BinaryFormat';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

 static create($g: $sdk.GreyCat): BinaryFormat {
    return new BinaryFormat($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[94]);
  }
}

export class CSVColumn extends $sdk.GCObject {
  static readonly _type = 'io::CSVColumn';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_name(): string | null {
    return super.get(super.type.generated_offsets[0]) as string | null;
  }
  public set_name(v: string | null) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_mandatory(): boolean | null {
    return super.get(super.type.generated_offsets[1]) as boolean | null;
  }
  public set_mandatory(v: boolean | null) {
    super.set(super.type.generated_offsets[1], v);
  }
 static create($g: $sdk.GreyCat, name: string | null, mandatory: boolean | null): CSVColumn {
    return new CSVColumn($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[95], name, mandatory);
  }
}

export class CSVFormat extends $sdk.GCObject {
  static readonly _type = 'io::CSVFormat';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_header_lines(): bigint | number {
    return super.get(super.type.generated_offsets[0]) as bigint | number;
  }
  public set_header_lines(v: bigint | number) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_infer(): boolean {
    return super.get(super.type.generated_offsets[1]) as boolean;
  }
  public set_infer(v: boolean) {
    super.set(super.type.generated_offsets[1], v);
  }
  public get_separator(): string {
    return super.get(super.type.generated_offsets[2]) as string;
  }
  public set_separator(v: string) {
    super.set(super.type.generated_offsets[2], v);
  }
  public get_string_delimiter(): string {
    return super.get(super.type.generated_offsets[3]) as string;
  }
  public set_string_delimiter(v: string) {
    super.set(super.type.generated_offsets[3], v);
  }
  public get_decimal_separator(): string {
    return super.get(super.type.generated_offsets[4]) as string;
  }
  public set_decimal_separator(v: string) {
    super.set(super.type.generated_offsets[4], v);
  }
  public get_thousands_separator(): string {
    return super.get(super.type.generated_offsets[5]) as string;
  }
  public set_thousands_separator(v: string) {
    super.set(super.type.generated_offsets[5], v);
  }
  public get_columns(): Array<$std.io.CSVColumn> | null {
    return super.get(super.type.generated_offsets[6]) as Array<$std.io.CSVColumn> | null;
  }
  public set_columns(v: Array<$std.io.CSVColumn> | null) {
    super.set(super.type.generated_offsets[6], v);
  }
 static create($g: $sdk.GreyCat, header_lines: bigint | number, infer: boolean, separator: string, string_delimiter: string, decimal_separator: string, thousands_separator: string, columns: Array<$std.io.CSVColumn> | null): CSVFormat {
    return new CSVFormat($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[96], header_lines, infer, separator, string_delimiter, decimal_separator, thousands_separator, columns);
  }
}

export class CSVColumnBoolean extends $sdk.GCObject {
  static readonly _type = 'io::CSVColumnBoolean';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_name(): string | null {
    return super.get(super.type.generated_offsets[0]) as string | null;
  }
  public set_name(v: string | null) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_mandatory(): boolean | null {
    return super.get(super.type.generated_offsets[1]) as boolean | null;
  }
  public set_mandatory(v: boolean | null) {
    super.set(super.type.generated_offsets[1], v);
  }
 static create($g: $sdk.GreyCat, name: string | null, mandatory: boolean | null): CSVColumnBoolean {
    return new CSVColumnBoolean($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[97], name, mandatory);
  }
}

export class AbiWriter extends std_n.io.AbiWriter {}

export class FileFormat extends $sdk.GCObject {
  static readonly _type = 'io::FileFormat';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

 static create($g: $sdk.GreyCat): FileFormat {
    return new FileFormat($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[99]);
  }
}

export class Directory extends std_n.io.Directory {}

export class CSVColumnInteger extends $sdk.GCObject {
  static readonly _type = 'io::CSVColumnInteger';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_name(): string | null {
    return super.get(super.type.generated_offsets[0]) as string | null;
  }
  public set_name(v: string | null) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_mandatory(): boolean | null {
    return super.get(super.type.generated_offsets[1]) as boolean | null;
  }
  public set_mandatory(v: boolean | null) {
    super.set(super.type.generated_offsets[1], v);
  }
 static create($g: $sdk.GreyCat, name: string | null, mandatory: boolean | null): CSVColumnInteger {
    return new CSVColumnInteger($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[101], name, mandatory);
  }
}

