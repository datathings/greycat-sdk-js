// AUTO-GENERATED FILE PLEASE DO NOT MODIFY MANUALLY
/* eslint-disable */
// @ts-nocheck

import * as $sdk from '@greycat/sdk';
import * as $std from '../index.js';
import * as std_n from '../../std_n/index.js';

// module: io.gcl
export class TextEncoder extends $sdk.GCEnum {
  static readonly _type = 'io::TextEncoder';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes[0], attributes[1], attributes[2]);
  }

  public static plain($g: $sdk.GreyCat): $std.io.TextEncoder {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[57];
    return t.enum_values![t.generated_offsets[0]] as $std.io.TextEncoder;
  }
  public static base64($g: $sdk.GreyCat): $std.io.TextEncoder {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[57];
    return t.enum_values![t.generated_offsets[1]] as $std.io.TextEncoder;
  }
  public static base64url($g: $sdk.GreyCat): $std.io.TextEncoder {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[57];
    return t.enum_values![t.generated_offsets[2]] as $std.io.TextEncoder;
  }
  public static hexadecimal($g: $sdk.GreyCat): $std.io.TextEncoder {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[57];
    return t.enum_values![t.generated_offsets[3]] as $std.io.TextEncoder;
  }
 static create($g: $sdk.GreyCat): TextEncoder {
    return new TextEncoder($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[57]);
  }
}

export class CsvColumnString extends $sdk.GCObject {
  static readonly _type = 'io::CsvColumnString';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_name(): string | null {
    return super.get(super.$type.generated_offsets[0]) as string | null;
  }
  public set_name(v: string | null) {
    super.set(super.$type.generated_offsets[0], v);
  }
  public get_mandatory(): boolean | null {
    return super.get(super.$type.generated_offsets[1]) as boolean | null;
  }
  public set_mandatory(v: boolean | null) {
    super.set(super.$type.generated_offsets[1], v);
  }
  public get_trim(): boolean | null {
    return super.get(super.$type.generated_offsets[2]) as boolean | null;
  }
  public set_trim(v: boolean | null) {
    super.set(super.$type.generated_offsets[2], v);
  }
  public get_try_number(): boolean | null {
    return super.get(super.$type.generated_offsets[3]) as boolean | null;
  }
  public set_try_number(v: boolean | null) {
    super.set(super.$type.generated_offsets[3], v);
  }
  public get_try_json(): boolean | null {
    return super.get(super.$type.generated_offsets[4]) as boolean | null;
  }
  public set_try_json(v: boolean | null) {
    super.set(super.$type.generated_offsets[4], v);
  }
  public get_values(): Array<string> | null {
    return super.get(super.$type.generated_offsets[5]) as Array<string> | null;
  }
  public set_values(v: Array<string> | null) {
    super.set(super.$type.generated_offsets[5], v);
  }
  public get_encoder(): $std.io.TextEncoder | null {
    return super.get(super.$type.generated_offsets[6]) as $std.io.TextEncoder | null;
  }
  public set_encoder(v: $std.io.TextEncoder | null) {
    super.set(super.$type.generated_offsets[6], v);
  }
 static create($g: $sdk.GreyCat, name: string | null, mandatory: boolean | null, trim: boolean | null, try_number: boolean | null, try_json: boolean | null, values: Array<string> | null, encoder: $std.io.TextEncoder | null): CsvColumnString {
    return new CsvColumnString($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[58], name, mandatory, trim, try_number, try_json, values, encoder);
  }
}

export class CsvColumnBoolean extends $sdk.GCObject {
  static readonly _type = 'io::CsvColumnBoolean';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_name(): string | null {
    return super.get(super.$type.generated_offsets[0]) as string | null;
  }
  public set_name(v: string | null) {
    super.set(super.$type.generated_offsets[0], v);
  }
  public get_mandatory(): boolean | null {
    return super.get(super.$type.generated_offsets[1]) as boolean | null;
  }
  public set_mandatory(v: boolean | null) {
    super.set(super.$type.generated_offsets[1], v);
  }
 static create($g: $sdk.GreyCat, name: string | null, mandatory: boolean | null): CsvColumnBoolean {
    return new CsvColumnBoolean($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[59], name, mandatory);
  }
}

export class GcbReader extends std_n.io.GcbReader {}

export class CsvColumn extends $sdk.GCObject {
  static readonly _type = 'io::CsvColumn';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_name(): string | null {
    return super.get(super.$type.generated_offsets[0]) as string | null;
  }
  public set_name(v: string | null) {
    super.set(super.$type.generated_offsets[0], v);
  }
  public get_mandatory(): boolean | null {
    return super.get(super.$type.generated_offsets[1]) as boolean | null;
  }
  public set_mandatory(v: boolean | null) {
    super.set(super.$type.generated_offsets[1], v);
  }
 static create($g: $sdk.GreyCat, name: string | null, mandatory: boolean | null): CsvColumn {
    return new CsvColumn($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[61], name, mandatory);
  }
}

export class JsonReader extends std_n.io.JsonReader {}

export class JsonWriter extends std_n.io.JsonWriter {}

export class FileEntry extends $sdk.GCObject {
  static readonly _type = 'io::FileEntry';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

 static create($g: $sdk.GreyCat): FileEntry {
    return new FileEntry($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[64]);
  }
}

export class File extends std_n.io.File {}

export class Directory extends std_n.io.Directory {}

export class GcbWriter extends std_n.io.GcbWriter {}

export class FileDescriptor extends $sdk.GCObject {
  static readonly _type = 'io::FileDescriptor';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_uri(): string {
    return super.get(super.$type.generated_offsets[0]) as string;
  }
  public set_uri(v: string) {
    super.set(super.$type.generated_offsets[0], v);
  }
  public get_size(): bigint | number | null {
    return super.get(super.$type.generated_offsets[1]) as bigint | number | null;
  }
  public set_size(v: bigint | number | null) {
    super.set(super.$type.generated_offsets[1], v);
  }
  public get_last_modification(): $sdk.std.core.time | null {
    return super.get(super.$type.generated_offsets[2]) as $sdk.std.core.time | null;
  }
  public set_last_modification(v: $sdk.std.core.time | null) {
    super.set(super.$type.generated_offsets[2], v);
  }
 static create($g: $sdk.GreyCat, uri: string, size: bigint | number | null, last_modification: $sdk.std.core.time | null): FileDescriptor {
    return new FileDescriptor($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[68], uri, size, last_modification);
  }
}

export class CsvWriter extends std_n.io.CsvWriter {}

export class TextWriter extends std_n.io.TextWriter {}

export class CsvColumnInteger extends $sdk.GCObject {
  static readonly _type = 'io::CsvColumnInteger';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_name(): string | null {
    return super.get(super.$type.generated_offsets[0]) as string | null;
  }
  public set_name(v: string | null) {
    super.set(super.$type.generated_offsets[0], v);
  }
  public get_mandatory(): boolean | null {
    return super.get(super.$type.generated_offsets[1]) as boolean | null;
  }
  public set_mandatory(v: boolean | null) {
    super.set(super.$type.generated_offsets[1], v);
  }
 static create($g: $sdk.GreyCat, name: string | null, mandatory: boolean | null): CsvColumnInteger {
    return new CsvColumnInteger($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[71], name, mandatory);
  }
}

export class CsvColumnTime extends $sdk.GCObject {
  static readonly _type = 'io::CsvColumnTime';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_name(): string | null {
    return super.get(super.$type.generated_offsets[0]) as string | null;
  }
  public set_name(v: string | null) {
    super.set(super.$type.generated_offsets[0], v);
  }
  public get_mandatory(): boolean | null {
    return super.get(super.$type.generated_offsets[1]) as boolean | null;
  }
  public set_mandatory(v: boolean | null) {
    super.set(super.$type.generated_offsets[1], v);
  }
  public get_unit(): $std.core.DurationUnit | null {
    return super.get(super.$type.generated_offsets[2]) as $std.core.DurationUnit | null;
  }
  public set_unit(v: $std.core.DurationUnit | null) {
    super.set(super.$type.generated_offsets[2], v);
  }
 static create($g: $sdk.GreyCat, name: string | null, mandatory: boolean | null, unit: $std.core.DurationUnit | null): CsvColumnTime {
    return new CsvColumnTime($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[72], name, mandatory, unit);
  }
}

export class JSON extends $sdk.GCObject {
  static readonly _type = 'io::JSON';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

 static create($g: $sdk.GreyCat): JSON {
    return new JSON($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[73]);
  }
}

export class CsvReader extends std_n.io.CsvReader {}

export class TextReader extends std_n.io.TextReader {}

export class CsvColumnDate extends $sdk.GCObject {
  static readonly _type = 'io::CsvColumnDate';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_name(): string | null {
    return super.get(super.$type.generated_offsets[0]) as string | null;
  }
  public set_name(v: string | null) {
    super.set(super.$type.generated_offsets[0], v);
  }
  public get_mandatory(): boolean | null {
    return super.get(super.$type.generated_offsets[1]) as boolean | null;
  }
  public set_mandatory(v: boolean | null) {
    super.set(super.$type.generated_offsets[1], v);
  }
  public get_format(): string | null {
    return super.get(super.$type.generated_offsets[2]) as string | null;
  }
  public set_format(v: string | null) {
    super.set(super.$type.generated_offsets[2], v);
  }
  public get_tz(): $std.core.TimeZone | null {
    return super.get(super.$type.generated_offsets[3]) as $std.core.TimeZone | null;
  }
  public set_tz(v: $std.core.TimeZone | null) {
    super.set(super.$type.generated_offsets[3], v);
  }
  public get_as_time(): boolean | null {
    return super.get(super.$type.generated_offsets[4]) as boolean | null;
  }
  public set_as_time(v: boolean | null) {
    super.set(super.$type.generated_offsets[4], v);
  }
 static create($g: $sdk.GreyCat, name: string | null, mandatory: boolean | null, format: string | null, tz: $std.core.TimeZone | null, as_time: boolean | null): CsvColumnDate {
    return new CsvColumnDate($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[76], name, mandatory, format, tz, as_time);
  }
}

export class CsvFormat extends $sdk.GCObject {
  static readonly _type = 'io::CsvFormat';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_header_lines(): bigint | number | null {
    return super.get(super.$type.generated_offsets[0]) as bigint | number | null;
  }
  public set_header_lines(v: bigint | number | null) {
    super.set(super.$type.generated_offsets[0], v);
  }
  public get_infer(): boolean | null {
    return super.get(super.$type.generated_offsets[1]) as boolean | null;
  }
  public set_infer(v: boolean | null) {
    super.set(super.$type.generated_offsets[1], v);
  }
  public get_separator(): string | null {
    return super.get(super.$type.generated_offsets[2]) as string | null;
  }
  public set_separator(v: string | null) {
    super.set(super.$type.generated_offsets[2], v);
  }
  public get_string_delimiter(): string | null {
    return super.get(super.$type.generated_offsets[3]) as string | null;
  }
  public set_string_delimiter(v: string | null) {
    super.set(super.$type.generated_offsets[3], v);
  }
  public get_decimal_separator(): string | null {
    return super.get(super.$type.generated_offsets[4]) as string | null;
  }
  public set_decimal_separator(v: string | null) {
    super.set(super.$type.generated_offsets[4], v);
  }
  public get_thousands_separator(): string | null {
    return super.get(super.$type.generated_offsets[5]) as string | null;
  }
  public set_thousands_separator(v: string | null) {
    super.set(super.$type.generated_offsets[5], v);
  }
  public get_columns(): Array<$std.io.CsvColumn> | null {
    return super.get(super.$type.generated_offsets[6]) as Array<$std.io.CsvColumn> | null;
  }
  public set_columns(v: Array<$std.io.CsvColumn> | null) {
    super.set(super.$type.generated_offsets[6], v);
  }
 static create($g: $sdk.GreyCat, header_lines: bigint | number | null, infer: boolean | null, separator: string | null, string_delimiter: string | null, decimal_separator: string | null, thousands_separator: string | null, columns: Array<$std.io.CsvColumn> | null): CsvFormat {
    return new CsvFormat($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[77], header_lines, infer, separator, string_delimiter, decimal_separator, thousands_separator, columns);
  }
}

export class CsvColumnIgnored extends $sdk.GCObject {
  static readonly _type = 'io::CsvColumnIgnored';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_name(): string | null {
    return super.get(super.$type.generated_offsets[0]) as string | null;
  }
  public set_name(v: string | null) {
    super.set(super.$type.generated_offsets[0], v);
  }
  public get_mandatory(): boolean | null {
    return super.get(super.$type.generated_offsets[1]) as boolean | null;
  }
  public set_mandatory(v: boolean | null) {
    super.set(super.$type.generated_offsets[1], v);
  }
 static create($g: $sdk.GreyCat, name: string | null, mandatory: boolean | null): CsvColumnIgnored {
    return new CsvColumnIgnored($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[78], name, mandatory);
  }
}

export class CsvColumnFloat extends $sdk.GCObject {
  static readonly _type = 'io::CsvColumnFloat';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_name(): string | null {
    return super.get(super.$type.generated_offsets[0]) as string | null;
  }
  public set_name(v: string | null) {
    super.set(super.$type.generated_offsets[0], v);
  }
  public get_mandatory(): boolean | null {
    return super.get(super.$type.generated_offsets[1]) as boolean | null;
  }
  public set_mandatory(v: boolean | null) {
    super.set(super.$type.generated_offsets[1], v);
  }
 static create($g: $sdk.GreyCat, name: string | null, mandatory: boolean | null): CsvColumnFloat {
    return new CsvColumnFloat($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[79], name, mandatory);
  }
}

