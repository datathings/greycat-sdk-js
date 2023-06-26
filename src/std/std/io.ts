// AUTO-GENERATED FILE PLEASE DO NOT MODIFY MANUALLY
/* eslint-disable */
// @ts-nocheck

import type { Abi, AbiType, GreyCat } from '../../index.js';
import { GCObject, GCEnum, std_n } from '../../index.js';
import * as std from './index.js';

// module: io.gcl
export class File extends std_n.io.File {
  static override readonly _type = 'io::File';

  public static create(abi: Abi): File {
    return new File(abi.libs_by_name.get(std.name)!.mapped[49]);
  }
}

export class CSVColumnString extends GCObject {
  static readonly _type = 'io::CSVColumnString';

  constructor(type: AbiType, ...attributes: any[]) {
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
  public get_encoder(): std.io.TextEncoder | null {
    return super.get(super.type.generated_offsets[6]) as std.io.TextEncoder | null;
  }
  public set_encoder(v: std.io.TextEncoder | null) {
    super.set(super.type.generated_offsets[6], v);
  }
  create(abi: Abi, name: string | null, mandatory: boolean | null, trim: boolean | null, try_number: boolean | null, try_json: boolean | null, values: Array<string> | null, encoder: std.io.TextEncoder | null): CSVColumnString {
    return new CSVColumnString(abi.libs_by_name.get(std.name)!.mapped[50], name, mandatory, trim, try_number, try_json, values, encoder);
  }
}

export class CSVColumnTime extends GCObject {
  static readonly _type = 'io::CSVColumnTime';

  constructor(type: AbiType, ...attributes: any[]) {
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
  public get_unit(): std.core.DurationUnit | null {
    return super.get(super.type.generated_offsets[2]) as std.core.DurationUnit | null;
  }
  public set_unit(v: std.core.DurationUnit | null) {
    super.set(super.type.generated_offsets[2], v);
  }
  create(abi: Abi, name: string | null, mandatory: boolean | null, unit: std.core.DurationUnit | null): CSVColumnTime {
    return new CSVColumnTime(abi.libs_by_name.get(std.name)!.mapped[51], name, mandatory, unit);
  }
}

export class CSVColumnDate extends GCObject {
  static readonly _type = 'io::CSVColumnDate';

  constructor(type: AbiType, ...attributes: any[]) {
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
  public get_tz(): std.core.TimeZone | null {
    return super.get(super.type.generated_offsets[3]) as std.core.TimeZone | null;
  }
  public set_tz(v: std.core.TimeZone | null) {
    super.set(super.type.generated_offsets[3], v);
  }
  public get_as_time(): boolean | null {
    return super.get(super.type.generated_offsets[4]) as boolean | null;
  }
  public set_as_time(v: boolean | null) {
    super.set(super.type.generated_offsets[4], v);
  }
  create(abi: Abi, name: string | null, mandatory: boolean | null, format: string | null, tz: std.core.TimeZone | null, as_time: boolean | null): CSVColumnDate {
    return new CSVColumnDate(abi.libs_by_name.get(std.name)!.mapped[52], name, mandatory, format, tz, as_time);
  }
}

export class JsonFormat extends GCObject {
  static readonly _type = 'io::JsonFormat';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  create(abi: Abi): JsonFormat {
    return new JsonFormat(abi.libs_by_name.get(std.name)!.mapped[53]);
  }
}

export class Directory extends std_n.io.Directory {
  static override readonly _type = 'io::Directory';

  public static create(abi: Abi): Directory {
    return new Directory(abi.libs_by_name.get(std.name)!.mapped[54]);
  }
}

export class FileFormat extends GCObject {
  static readonly _type = 'io::FileFormat';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  create(abi: Abi): FileFormat {
    return new FileFormat(abi.libs_by_name.get(std.name)!.mapped[55]);
  }
}

export class CSVColumnFloat extends GCObject {
  static readonly _type = 'io::CSVColumnFloat';

  constructor(type: AbiType, ...attributes: any[]) {
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
  create(abi: Abi, name: string | null, mandatory: boolean | null): CSVColumnFloat {
    return new CSVColumnFloat(abi.libs_by_name.get(std.name)!.mapped[56], name, mandatory);
  }
}

export class FileDescriptor extends GCObject {
  static readonly _type = 'io::FileDescriptor';

  constructor(type: AbiType, ...attributes: any[]) {
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
  public get_last_modification(): std_n.core.time | null {
    return super.get(super.type.generated_offsets[2]) as std_n.core.time | null;
  }
  public set_last_modification(v: std_n.core.time | null) {
    super.set(super.type.generated_offsets[2], v);
  }
  create(abi: Abi, uri: string, size: bigint | number | null, last_modification: std_n.core.time | null): FileDescriptor {
    return new FileDescriptor(abi.libs_by_name.get(std.name)!.mapped[57], uri, size, last_modification);
  }
}

export class CSVColumn extends GCObject {
  static readonly _type = 'io::CSVColumn';

  constructor(type: AbiType, ...attributes: any[]) {
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
  create(abi: Abi, name: string | null, mandatory: boolean | null): CSVColumn {
    return new CSVColumn(abi.libs_by_name.get(std.name)!.mapped[58], name, mandatory);
  }
}

export class JSON extends GCObject {
  static readonly _type = 'io::JSON';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  create(abi: Abi): JSON {
    return new JSON(abi.libs_by_name.get(std.name)!.mapped[59]);
  }
}

export class FileEntry extends GCObject {
  static readonly _type = 'io::FileEntry';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  create(abi: Abi): FileEntry {
    return new FileEntry(abi.libs_by_name.get(std.name)!.mapped[60]);
  }
}

export class TextEncoder extends GCEnum {
  static readonly _type = 'io::TextEncoder';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public static plain(abi: Abi): std.io.TextEncoder {
    const t = abi.libs_by_name.get(std.name)!.mapped[61];
    return t.enum_values![t.generated_offsets[0]] as std.io.TextEncoder;
  }
  public static base64(abi: Abi): std.io.TextEncoder {
    const t = abi.libs_by_name.get(std.name)!.mapped[61];
    return t.enum_values![t.generated_offsets[1]] as std.io.TextEncoder;
  }
  public static base64url(abi: Abi): std.io.TextEncoder {
    const t = abi.libs_by_name.get(std.name)!.mapped[61];
    return t.enum_values![t.generated_offsets[2]] as std.io.TextEncoder;
  }
  public static hexadecimal(abi: Abi): std.io.TextEncoder {
    const t = abi.libs_by_name.get(std.name)!.mapped[61];
    return t.enum_values![t.generated_offsets[3]] as std.io.TextEncoder;
  }
  create(abi: Abi): TextEncoder {
    return new TextEncoder(abi.libs_by_name.get(std.name)!.mapped[61]);
  }
}

export class Env extends GCObject {
  static readonly _type = 'io::Env';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  create(abi: Abi): Env {
    return new Env(abi.libs_by_name.get(std.name)!.mapped[62]);
  }
}

export class BinaryFormat extends GCObject {
  static readonly _type = 'io::BinaryFormat';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  create(abi: Abi): BinaryFormat {
    return new BinaryFormat(abi.libs_by_name.get(std.name)!.mapped[63]);
  }
}

export class AbiWriter extends std_n.io.AbiWriter {
  static override readonly _type = 'io::AbiWriter';

  public static create(abi: Abi): AbiWriter {
    return new AbiWriter(abi.libs_by_name.get(std.name)!.mapped[64]);
  }
}

export class CSVColumnBoolean extends GCObject {
  static readonly _type = 'io::CSVColumnBoolean';

  constructor(type: AbiType, ...attributes: any[]) {
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
  create(abi: Abi, name: string | null, mandatory: boolean | null): CSVColumnBoolean {
    return new CSVColumnBoolean(abi.libs_by_name.get(std.name)!.mapped[65], name, mandatory);
  }
}

export class FileWriter extends std_n.io.FileWriter {
  static override readonly _type = 'io::FileWriter';

  public static create(abi: Abi): FileWriter {
    return new FileWriter(abi.libs_by_name.get(std.name)!.mapped[66]);
  }
}

export class CSVFormat extends GCObject {
  static readonly _type = 'io::CSVFormat';

  constructor(type: AbiType, ...attributes: any[]) {
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
  public get_columns(): Array<std.io.CSVColumn> | null {
    return super.get(super.type.generated_offsets[6]) as Array<std.io.CSVColumn> | null;
  }
  public set_columns(v: Array<std.io.CSVColumn> | null) {
    super.set(super.type.generated_offsets[6], v);
  }
  create(abi: Abi, header_lines: bigint | number, infer: boolean, separator: string, string_delimiter: string, decimal_separator: string, thousands_separator: string, columns: Array<std.io.CSVColumn> | null): CSVFormat {
    return new CSVFormat(abi.libs_by_name.get(std.name)!.mapped[67], header_lines, infer, separator, string_delimiter, decimal_separator, thousands_separator, columns);
  }
}

export class AbiReader extends std_n.io.AbiReader {
  static override readonly _type = 'io::AbiReader';

  public static create(abi: Abi): AbiReader {
    return new AbiReader(abi.libs_by_name.get(std.name)!.mapped[68]);
  }
}

export class CSVColumnInteger extends GCObject {
  static readonly _type = 'io::CSVColumnInteger';

  constructor(type: AbiType, ...attributes: any[]) {
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
  create(abi: Abi, name: string | null, mandatory: boolean | null): CSVColumnInteger {
    return new CSVColumnInteger(abi.libs_by_name.get(std.name)!.mapped[69], name, mandatory);
  }
}

export class CSVColumnIgnored extends GCObject {
  static readonly _type = 'io::CSVColumnIgnored';

  constructor(type: AbiType, ...attributes: any[]) {
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
  create(abi: Abi, name: string | null, mandatory: boolean | null): CSVColumnIgnored {
    return new CSVColumnIgnored(abi.libs_by_name.get(std.name)!.mapped[70], name, mandatory);
  }
}

export class TextFormat extends GCObject {
  static readonly _type = 'io::TextFormat';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  create(abi: Abi): TextFormat {
    return new TextFormat(abi.libs_by_name.get(std.name)!.mapped[71]);
  }
}

