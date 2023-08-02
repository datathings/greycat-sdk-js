// AUTO-GENERATED FILE PLEASE DO NOT MODIFY MANUALLY
/* eslint-disable */
// @ts-nocheck

import * as $sdk from '@greycat/sdk';
import * as $std from '../index.js';
import * as std_n from '../../std_n/index.js';

// module: io.gcl
export class File extends $sdk.GCObject {
  static readonly _type = 'io::File';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get_path(): string {
    return super.get(super.$type.generated_offsets[0]) as string;
  }
  public set_path(v: string) {
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
  static create($g: $sdk.GreyCat, path: string, size: bigint | number | null, last_modification: $sdk.std.core.time | null): File {
    return new File($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[57], path, size, last_modification);
  }
}

export class JsonReader extends std_n.io.JsonReader {}

export class GcbWriter extends std_n.io.GcbWriter {}

export class CsvColumnInteger extends $sdk.GCObject {
  static readonly _type = 'io::CsvColumnInteger';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
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
    return new CsvColumnInteger($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[60], name, mandatory);
  }
}

export class Smtp extends $sdk.GCObject {
  static readonly _type = 'io::Smtp';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get_host(): string {
    return super.get(super.$type.generated_offsets[0]) as string;
  }
  public set_host(v: string) {
    super.set(super.$type.generated_offsets[0], v);
  }
  public get_port(): bigint | number {
    return super.get(super.$type.generated_offsets[1]) as bigint | number;
  }
  public set_port(v: bigint | number) {
    super.set(super.$type.generated_offsets[1], v);
  }
  public get_mode(): $std.io.SmtpMode | null {
    return super.get(super.$type.generated_offsets[2]) as $std.io.SmtpMode | null;
  }
  public set_mode(v: $std.io.SmtpMode | null) {
    super.set(super.$type.generated_offsets[2], v);
  }
  public get_authenticate(): $std.io.SmtpAuth | null {
    return super.get(super.$type.generated_offsets[3]) as $std.io.SmtpAuth | null;
  }
  public set_authenticate(v: $std.io.SmtpAuth | null) {
    super.set(super.$type.generated_offsets[3], v);
  }
  public get_user(): string | null {
    return super.get(super.$type.generated_offsets[4]) as string | null;
  }
  public set_user(v: string | null) {
    super.set(super.$type.generated_offsets[4], v);
  }
  public get_pass(): string | null {
    return super.get(super.$type.generated_offsets[5]) as string | null;
  }
  public set_pass(v: string | null) {
    super.set(super.$type.generated_offsets[5], v);
  }
  static create($g: $sdk.GreyCat, host: string, port: bigint | number, mode: $std.io.SmtpMode | null, authenticate: $std.io.SmtpAuth | null, user: string | null, pass: string | null): Smtp {
    return new Smtp($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[61], host, port, mode, authenticate, user, pass);
  }
}

export class Url extends $sdk.GCObject {
  static readonly _type = 'io::Url';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get_protocol(): string | null {
    return super.get(super.$type.generated_offsets[0]) as string | null;
  }
  public set_protocol(v: string | null) {
    super.set(super.$type.generated_offsets[0], v);
  }
  public get_host(): string | null {
    return super.get(super.$type.generated_offsets[1]) as string | null;
  }
  public set_host(v: string | null) {
    super.set(super.$type.generated_offsets[1], v);
  }
  public get_port(): bigint | number | null {
    return super.get(super.$type.generated_offsets[2]) as bigint | number | null;
  }
  public set_port(v: bigint | number | null) {
    super.set(super.$type.generated_offsets[2], v);
  }
  public get_path(): string | null {
    return super.get(super.$type.generated_offsets[3]) as string | null;
  }
  public set_path(v: string | null) {
    super.set(super.$type.generated_offsets[3], v);
  }
  public get_params(): Map<string, string> | null {
    return super.get(super.$type.generated_offsets[4]) as Map<string, string> | null;
  }
  public set_params(v: Map<string, string> | null) {
    super.set(super.$type.generated_offsets[4], v);
  }
  public get_hash(): string | null {
    return super.get(super.$type.generated_offsets[5]) as string | null;
  }
  public set_hash(v: string | null) {
    super.set(super.$type.generated_offsets[5], v);
  }
  static create($g: $sdk.GreyCat, protocol: string | null, host: string | null, port: bigint | number | null, path: string | null, params: Map<string, string> | null, hash: string | null): Url {
    return new Url($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[62], protocol, host, port, path, params, hash);
  }
}

export class GcbReader extends std_n.io.GcbReader {}

export class CsvColumnString extends $sdk.GCObject {
  static readonly _type = 'io::CsvColumnString';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
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
    return new CsvColumnString($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[64], name, mandatory, trim, try_number, try_json, values, encoder);
  }
}

export class CsvReader extends std_n.io.CsvReader {}

export class HttpHeader extends $sdk.GCObject {
  static readonly _type = 'io::HttpHeader';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get_name(): string {
    return super.get(super.$type.generated_offsets[0]) as string;
  }
  public set_name(v: string) {
    super.set(super.$type.generated_offsets[0], v);
  }
  public get_value(): string {
    return super.get(super.$type.generated_offsets[1]) as string;
  }
  public set_value(v: string) {
    super.set(super.$type.generated_offsets[1], v);
  }
  static create($g: $sdk.GreyCat, name: string, value: string): HttpHeader {
    return new HttpHeader($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[66], name, value);
  }
}

export class CsvWriter extends std_n.io.CsvWriter {}

export class TextWriter extends std_n.io.TextWriter {}

export class SmtpAuth extends $sdk.GCEnum {
  static readonly _type = 'io::SmtpAuth';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes[0], attributes[1], attributes[2]);
  }

  public static none($g: $sdk.GreyCat): $std.io.SmtpAuth {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[69];
    return t.enum_values![t.generated_offsets[0]] as $std.io.SmtpAuth;
  }
  public static plain($g: $sdk.GreyCat): $std.io.SmtpAuth {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[69];
    return t.enum_values![t.generated_offsets[1]] as $std.io.SmtpAuth;
  }
  public static login($g: $sdk.GreyCat): $std.io.SmtpAuth {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[69];
    return t.enum_values![t.generated_offsets[2]] as $std.io.SmtpAuth;
  }
  static create($g: $sdk.GreyCat): SmtpAuth {
    return new SmtpAuth($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[69]);
  }
}

export class JsonWriter extends std_n.io.JsonWriter {}

export class TextReader extends std_n.io.TextReader {}

export class CsvFormat extends $sdk.GCObject {
  static readonly _type = 'io::CsvFormat';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
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
    return new CsvFormat($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[72], header_lines, infer, separator, string_delimiter, decimal_separator, thousands_separator, columns);
  }
}

export class CsvColumn extends $sdk.GCObject {
  static readonly _type = 'io::CsvColumn';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
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
    return new CsvColumn($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[73], name, mandatory);
  }
}

export class Email extends $sdk.GCObject {
  static readonly _type = 'io::Email';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  public get_from(): string {
    return super.get(super.$type.generated_offsets[0]) as string;
  }
  public set_from(v: string) {
    super.set(super.$type.generated_offsets[0], v);
  }
  public get_subject(): string {
    return super.get(super.$type.generated_offsets[1]) as string;
  }
  public set_subject(v: string) {
    super.set(super.$type.generated_offsets[1], v);
  }
  public get_body(): string {
    return super.get(super.$type.generated_offsets[2]) as string;
  }
  public set_body(v: string) {
    super.set(super.$type.generated_offsets[2], v);
  }
  public get_body_is_html(): boolean {
    return super.get(super.$type.generated_offsets[3]) as boolean;
  }
  public set_body_is_html(v: boolean) {
    super.set(super.$type.generated_offsets[3], v);
  }
  public get_to(): Array<string> {
    return super.get(super.$type.generated_offsets[4]) as Array<string>;
  }
  public set_to(v: Array<string>) {
    super.set(super.$type.generated_offsets[4], v);
  }
  public get_cc(): Array<string> | null {
    return super.get(super.$type.generated_offsets[5]) as Array<string> | null;
  }
  public set_cc(v: Array<string> | null) {
    super.set(super.$type.generated_offsets[5], v);
  }
  public get_bcc(): Array<string> | null {
    return super.get(super.$type.generated_offsets[6]) as Array<string> | null;
  }
  public set_bcc(v: Array<string> | null) {
    super.set(super.$type.generated_offsets[6], v);
  }
  static create($g: $sdk.GreyCat, from: string, subject: string, body: string, body_is_html: boolean, to: Array<string>, cc: Array<string> | null, bcc: Array<string> | null): Email {
    return new Email($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[74], from, subject, body, body_is_html, to, cc, bcc);
  }
}

export class SmtpMode extends $sdk.GCEnum {
  static readonly _type = 'io::SmtpMode';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes[0], attributes[1], attributes[2]);
  }

  public static plain($g: $sdk.GreyCat): $std.io.SmtpMode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[75];
    return t.enum_values![t.generated_offsets[0]] as $std.io.SmtpMode;
  }
  public static ssl_tls($g: $sdk.GreyCat): $std.io.SmtpMode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[75];
    return t.enum_values![t.generated_offsets[1]] as $std.io.SmtpMode;
  }
  public static starttls($g: $sdk.GreyCat): $std.io.SmtpMode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[75];
    return t.enum_values![t.generated_offsets[2]] as $std.io.SmtpMode;
  }
  static create($g: $sdk.GreyCat): SmtpMode {
    return new SmtpMode($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[75]);
  }
}

export class CsvColumnFloat extends $sdk.GCObject {
  static readonly _type = 'io::CsvColumnFloat';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
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
    return new CsvColumnFloat($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[76], name, mandatory);
  }
}

export class CsvColumnIgnored extends $sdk.GCObject {
  static readonly _type = 'io::CsvColumnIgnored';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
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
    return new CsvColumnIgnored($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[77], name, mandatory);
  }
}

export class CsvColumnDate extends $sdk.GCObject {
  static readonly _type = 'io::CsvColumnDate';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
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
    return new CsvColumnDate($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[78], name, mandatory, format, tz, as_time);
  }
}

export class CsvColumnTime extends $sdk.GCObject {
  static readonly _type = 'io::CsvColumnTime';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
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
    return new CsvColumnTime($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[79], name, mandatory, unit);
  }
}

export class Http extends $sdk.GCObject {
  static readonly _type = 'io::Http';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
  }

  static create($g: $sdk.GreyCat): Http {
    return new Http($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[80]);
  }
}

export class FileWalker extends std_n.io.FileWalker {}

export class TextEncoder extends $sdk.GCEnum {
  static readonly _type = 'io::TextEncoder';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes[0], attributes[1], attributes[2]);
  }

  public static plain($g: $sdk.GreyCat): $std.io.TextEncoder {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[82];
    return t.enum_values![t.generated_offsets[0]] as $std.io.TextEncoder;
  }
  public static base64($g: $sdk.GreyCat): $std.io.TextEncoder {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[82];
    return t.enum_values![t.generated_offsets[1]] as $std.io.TextEncoder;
  }
  public static base64url($g: $sdk.GreyCat): $std.io.TextEncoder {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[82];
    return t.enum_values![t.generated_offsets[2]] as $std.io.TextEncoder;
  }
  public static hexadecimal($g: $sdk.GreyCat): $std.io.TextEncoder {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[82];
    return t.enum_values![t.generated_offsets[3]] as $std.io.TextEncoder;
  }
  static create($g: $sdk.GreyCat): TextEncoder {
    return new TextEncoder($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[82]);
  }
}

export class CsvColumnBoolean extends $sdk.GCObject {
  static readonly _type = 'io::CsvColumnBoolean';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes);
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
    return new CsvColumnBoolean($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[83], name, mandatory);
  }
}

