// AUTO-GENERATED FILE PLEASE DO NOT MODIFY MANUALLY
/* eslint-disable */
// @ts-nocheck

import * as $sdk from '@greycat/sdk';
import * as std_n from '../std_n/index.js';

export namespace core {
export class Array extends std_n.core.Array {}

export class NodeTimeInfo extends $sdk.GCObject {
  static readonly _type = 'core::NodeTimeInfo';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get size(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set size(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get from(): $sdk.std.core.time | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set from(v: $sdk.std.core.time | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get to(): $sdk.std.core.time | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set to(v: $sdk.std.core.time | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  static create($g: $sdk.GreyCat, size: bigint | number, from: $sdk.std.core.time | null, to: $sdk.std.core.time | null): NodeTimeInfo {
    return new NodeTimeInfo($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[1], size, from, to);
  }
}

export class nodeList extends std_n.core.nodeList {}

export class DatePart extends $sdk.GCEnum {
  static readonly _type = 'core::DatePart';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes[0], attributes[1], attributes[2]);
  }

  public static years($g: $sdk.GreyCat): core.DatePart {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[0]] as core.DatePart;
  }
  public static months($g: $sdk.GreyCat): core.DatePart {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[1]] as core.DatePart;
  }
  public static days($g: $sdk.GreyCat): core.DatePart {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[2]] as core.DatePart;
  }
  public static hours($g: $sdk.GreyCat): core.DatePart {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[3]] as core.DatePart;
  }
  public static minutes($g: $sdk.GreyCat): core.DatePart {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[4]] as core.DatePart;
  }
  public static seconds($g: $sdk.GreyCat): core.DatePart {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[5]] as core.DatePart;
  }
  public static microseconds($g: $sdk.GreyCat): core.DatePart {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[6]] as core.DatePart;
  }
}

export class nodeIndex extends std_n.core.nodeIndex {}

export class TimeZone extends $sdk.GCEnum {
  static readonly _type = 'core::TimeZone';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes[0], attributes[1], attributes[2]);
  }

  public static Africa_Accra($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[0]] as core.TimeZone;
  }
  public static Africa_Bamako($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[1]] as core.TimeZone;
  }
  public static Africa_Banjul($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[2]] as core.TimeZone;
  }
  public static Africa_Conakry($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[3]] as core.TimeZone;
  }
  public static Africa_Dakar($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[4]] as core.TimeZone;
  }
  public static Africa_Freetown($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[5]] as core.TimeZone;
  }
  public static Africa_Lome($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[6]] as core.TimeZone;
  }
  public static Africa_Nouakchott($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[7]] as core.TimeZone;
  }
  public static Africa_Ouagadougou($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[8]] as core.TimeZone;
  }
  public static Africa_Timbuktu($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[9]] as core.TimeZone;
  }
  public static Atlantic_Reykjavik($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[10]] as core.TimeZone;
  }
  public static Atlantic_St_Helena($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[11]] as core.TimeZone;
  }
  public static Iceland($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[12]] as core.TimeZone;
  }
  public static Egypt($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[13]] as core.TimeZone;
  }
  public static Africa_Maseru($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[14]] as core.TimeZone;
  }
  public static Africa_Mbabane($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[15]] as core.TimeZone;
  }
  public static Africa_Bangui($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[16]] as core.TimeZone;
  }
  public static Africa_Brazzaville($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[17]] as core.TimeZone;
  }
  public static Africa_Douala($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[18]] as core.TimeZone;
  }
  public static Africa_Kinshasa($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[19]] as core.TimeZone;
  }
  public static Africa_Libreville($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[20]] as core.TimeZone;
  }
  public static Africa_Luanda($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[21]] as core.TimeZone;
  }
  public static Africa_Malabo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[22]] as core.TimeZone;
  }
  public static Africa_Niamey($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[23]] as core.TimeZone;
  }
  public static Africa_Porto_Novo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[24]] as core.TimeZone;
  }
  public static Africa_Blantyre($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[25]] as core.TimeZone;
  }
  public static Africa_Bujumbura($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[26]] as core.TimeZone;
  }
  public static Africa_Gaborone($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[27]] as core.TimeZone;
  }
  public static Africa_Harare($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[28]] as core.TimeZone;
  }
  public static Africa_Kigali($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[29]] as core.TimeZone;
  }
  public static Africa_Lubumbashi($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[30]] as core.TimeZone;
  }
  public static Africa_Lusaka($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[31]] as core.TimeZone;
  }
  public static Africa_Addis_Ababa($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[32]] as core.TimeZone;
  }
  public static Africa_Asmara($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[33]] as core.TimeZone;
  }
  public static Africa_Asmera($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[34]] as core.TimeZone;
  }
  public static Africa_Dar_es_Salaam($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[35]] as core.TimeZone;
  }
  public static Africa_Djibouti($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[36]] as core.TimeZone;
  }
  public static Africa_Kampala($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[37]] as core.TimeZone;
  }
  public static Africa_Mogadishu($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[38]] as core.TimeZone;
  }
  public static Indian_Antananarivo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[39]] as core.TimeZone;
  }
  public static Indian_Comoro($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[40]] as core.TimeZone;
  }
  public static Indian_Mayotte($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[41]] as core.TimeZone;
  }
  public static Libya($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[42]] as core.TimeZone;
  }
  public static America_Atka($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[43]] as core.TimeZone;
  }
  public static US_Aleutian($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[44]] as core.TimeZone;
  }
  public static US_Alaska($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[45]] as core.TimeZone;
  }
  public static America_Buenos_Aires($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[46]] as core.TimeZone;
  }
  public static America_Argentina_ComodRivadavia($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[47]] as core.TimeZone;
  }
  public static America_Catamarca($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[48]] as core.TimeZone;
  }
  public static America_Cordoba($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[49]] as core.TimeZone;
  }
  public static America_Rosario($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[50]] as core.TimeZone;
  }
  public static America_Jujuy($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[51]] as core.TimeZone;
  }
  public static America_Mendoza($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[52]] as core.TimeZone;
  }
  public static US_Central($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[53]] as core.TimeZone;
  }
  public static America_Shiprock($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[54]] as core.TimeZone;
  }
  public static Navajo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[55]] as core.TimeZone;
  }
  public static US_Mountain($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[56]] as core.TimeZone;
  }
  public static US_Michigan($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[57]] as core.TimeZone;
  }
  public static America_Yellowknife($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[58]] as core.TimeZone;
  }
  public static Canada_Mountain($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[59]] as core.TimeZone;
  }
  public static Canada_Atlantic($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[60]] as core.TimeZone;
  }
  public static Cuba($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[61]] as core.TimeZone;
  }
  public static America_Fort_Wayne($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[62]] as core.TimeZone;
  }
  public static America_Indianapolis($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[63]] as core.TimeZone;
  }
  public static US_East_Indiana($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[64]] as core.TimeZone;
  }
  public static America_Knox_IN($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[65]] as core.TimeZone;
  }
  public static US_Indiana_Starke($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[66]] as core.TimeZone;
  }
  public static America_Pangnirtung($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[67]] as core.TimeZone;
  }
  public static Jamaica($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[68]] as core.TimeZone;
  }
  public static America_Louisville($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[69]] as core.TimeZone;
  }
  public static US_Pacific($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[70]] as core.TimeZone;
  }
  public static Brazil_West($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[71]] as core.TimeZone;
  }
  public static Mexico_BajaSur($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[72]] as core.TimeZone;
  }
  public static Mexico_General($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[73]] as core.TimeZone;
  }
  public static US_Eastern($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[74]] as core.TimeZone;
  }
  public static Brazil_DeNoronha($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[75]] as core.TimeZone;
  }
  public static America_Godthab($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[76]] as core.TimeZone;
  }
  public static America_Atikokan($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[77]] as core.TimeZone;
  }
  public static America_Cayman($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[78]] as core.TimeZone;
  }
  public static America_Coral_Harbour($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[79]] as core.TimeZone;
  }
  public static America_Creston($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[80]] as core.TimeZone;
  }
  public static US_Arizona($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[81]] as core.TimeZone;
  }
  public static America_Anguilla($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[82]] as core.TimeZone;
  }
  public static America_Antigua($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[83]] as core.TimeZone;
  }
  public static America_Aruba($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[84]] as core.TimeZone;
  }
  public static America_Blanc_Sablon($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[85]] as core.TimeZone;
  }
  public static America_Curacao($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[86]] as core.TimeZone;
  }
  public static America_Dominica($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[87]] as core.TimeZone;
  }
  public static America_Grenada($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[88]] as core.TimeZone;
  }
  public static America_Guadeloupe($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[89]] as core.TimeZone;
  }
  public static America_Kralendijk($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[90]] as core.TimeZone;
  }
  public static America_Lower_Princes($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[91]] as core.TimeZone;
  }
  public static America_Marigot($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[92]] as core.TimeZone;
  }
  public static America_Montserrat($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[93]] as core.TimeZone;
  }
  public static America_Port_of_Spain($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[94]] as core.TimeZone;
  }
  public static America_St_Barthelemy($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[95]] as core.TimeZone;
  }
  public static America_St_Kitts($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[96]] as core.TimeZone;
  }
  public static America_St_Lucia($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[97]] as core.TimeZone;
  }
  public static America_St_Thomas($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[98]] as core.TimeZone;
  }
  public static America_St_Vincent($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[99]] as core.TimeZone;
  }
  public static America_Tortola($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[100]] as core.TimeZone;
  }
  public static America_Virgin($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[101]] as core.TimeZone;
  }
  public static Canada_Saskatchewan($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[102]] as core.TimeZone;
  }
  public static America_Porto_Acre($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[103]] as core.TimeZone;
  }
  public static Brazil_Acre($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[104]] as core.TimeZone;
  }
  public static Chile_Continental($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[105]] as core.TimeZone;
  }
  public static Brazil_East($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[106]] as core.TimeZone;
  }
  public static Canada_Newfoundland($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[107]] as core.TimeZone;
  }
  public static America_Ensenada($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[108]] as core.TimeZone;
  }
  public static America_Santa_Isabel($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[109]] as core.TimeZone;
  }
  public static Mexico_BajaNorte($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[110]] as core.TimeZone;
  }
  public static America_Montreal($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[111]] as core.TimeZone;
  }
  public static America_Nassau($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[112]] as core.TimeZone;
  }
  public static America_Nipigon($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[113]] as core.TimeZone;
  }
  public static America_Thunder_Bay($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[114]] as core.TimeZone;
  }
  public static Canada_Eastern($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[115]] as core.TimeZone;
  }
  public static Canada_Pacific($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[116]] as core.TimeZone;
  }
  public static Canada_Yukon($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[117]] as core.TimeZone;
  }
  public static America_Rainy_River($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[118]] as core.TimeZone;
  }
  public static Canada_Central($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[119]] as core.TimeZone;
  }
  public static Asia_Ashkhabad($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[120]] as core.TimeZone;
  }
  public static Asia_Phnom_Penh($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[121]] as core.TimeZone;
  }
  public static Asia_Vientiane($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[122]] as core.TimeZone;
  }
  public static Indian_Christmas($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[123]] as core.TimeZone;
  }
  public static Asia_Dacca($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[124]] as core.TimeZone;
  }
  public static Asia_Muscat($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[125]] as core.TimeZone;
  }
  public static Indian_Mahe($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[126]] as core.TimeZone;
  }
  public static Indian_Reunion($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[127]] as core.TimeZone;
  }
  public static Asia_Saigon($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[128]] as core.TimeZone;
  }
  public static Hongkong($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[129]] as core.TimeZone;
  }
  public static Asia_Tel_Aviv($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[130]] as core.TimeZone;
  }
  public static Israel($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[131]] as core.TimeZone;
  }
  public static Asia_Katmandu($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[132]] as core.TimeZone;
  }
  public static Asia_Calcutta($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[133]] as core.TimeZone;
  }
  public static Asia_Brunei($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[134]] as core.TimeZone;
  }
  public static Asia_Macao($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[135]] as core.TimeZone;
  }
  public static Asia_Ujung_Pandang($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[136]] as core.TimeZone;
  }
  public static Europe_Nicosia($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[137]] as core.TimeZone;
  }
  public static Asia_Bahrain($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[138]] as core.TimeZone;
  }
  public static Antarctica_Syowa($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[139]] as core.TimeZone;
  }
  public static Asia_Aden($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[140]] as core.TimeZone;
  }
  public static Asia_Kuwait($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[141]] as core.TimeZone;
  }
  public static ROK($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[142]] as core.TimeZone;
  }
  public static Asia_Chongqing($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[143]] as core.TimeZone;
  }
  public static Asia_Chungking($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[144]] as core.TimeZone;
  }
  public static Asia_Harbin($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[145]] as core.TimeZone;
  }
  public static PRC($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[146]] as core.TimeZone;
  }
  public static Asia_Kuala_Lumpur($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[147]] as core.TimeZone;
  }
  public static Singapore($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[148]] as core.TimeZone;
  }
  public static ROC($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[149]] as core.TimeZone;
  }
  public static Iran($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[150]] as core.TimeZone;
  }
  public static Asia_Thimbu($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[151]] as core.TimeZone;
  }
  public static Japan($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[152]] as core.TimeZone;
  }
  public static Asia_Ulan_Bator($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[153]] as core.TimeZone;
  }
  public static Antarctica_Vostok($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[154]] as core.TimeZone;
  }
  public static Asia_Kashgar($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[155]] as core.TimeZone;
  }
  public static Asia_Rangoon($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[156]] as core.TimeZone;
  }
  public static Indian_Cocos($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[157]] as core.TimeZone;
  }
  public static Atlantic_Faeroe($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[158]] as core.TimeZone;
  }
  public static Australia_South($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[159]] as core.TimeZone;
  }
  public static Australia_Queensland($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[160]] as core.TimeZone;
  }
  public static Australia_Yancowinna($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[161]] as core.TimeZone;
  }
  public static Australia_North($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[162]] as core.TimeZone;
  }
  public static Australia_Currie($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[163]] as core.TimeZone;
  }
  public static Australia_Tasmania($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[164]] as core.TimeZone;
  }
  public static Australia_LHI($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[165]] as core.TimeZone;
  }
  public static Australia_Victoria($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[166]] as core.TimeZone;
  }
  public static Australia_West($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[167]] as core.TimeZone;
  }
  public static Australia_ACT($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[168]] as core.TimeZone;
  }
  public static Australia_Canberra($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[169]] as core.TimeZone;
  }
  public static Australia_NSW($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[170]] as core.TimeZone;
  }
  public static GMT($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[171]] as core.TimeZone;
  }
  public static GMTx0($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[172]] as core.TimeZone;
  }
  public static GMT_0($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[173]] as core.TimeZone;
  }
  public static GMT0($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[174]] as core.TimeZone;
  }
  public static Greenwich($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[175]] as core.TimeZone;
  }
  public static UCT($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[176]] as core.TimeZone;
  }
  public static UTC($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[177]] as core.TimeZone;
  }
  public static Universal($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[178]] as core.TimeZone;
  }
  public static Zulu($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[179]] as core.TimeZone;
  }
  public static Europe_Ljubljana($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[180]] as core.TimeZone;
  }
  public static Europe_Podgorica($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[181]] as core.TimeZone;
  }
  public static Europe_Sarajevo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[182]] as core.TimeZone;
  }
  public static Europe_Skopje($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[183]] as core.TimeZone;
  }
  public static Europe_Zagreb($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[184]] as core.TimeZone;
  }
  public static Arctic_Longyearbyen($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[185]] as core.TimeZone;
  }
  public static Atlantic_Jan_Mayen($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[186]] as core.TimeZone;
  }
  public static Europe_Copenhagen($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[187]] as core.TimeZone;
  }
  public static Europe_Oslo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[188]] as core.TimeZone;
  }
  public static Europe_Stockholm($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[189]] as core.TimeZone;
  }
  public static Europe_Amsterdam($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[190]] as core.TimeZone;
  }
  public static Europe_Luxembourg($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[191]] as core.TimeZone;
  }
  public static Europe_Tiraspol($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[192]] as core.TimeZone;
  }
  public static Eire($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[193]] as core.TimeZone;
  }
  public static Europe_Mariehamn($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[194]] as core.TimeZone;
  }
  public static Asia_Istanbul($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[195]] as core.TimeZone;
  }
  public static Turkey($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[196]] as core.TimeZone;
  }
  public static Europe_Kiev($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[197]] as core.TimeZone;
  }
  public static Europe_Uzhgorod($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[198]] as core.TimeZone;
  }
  public static Europe_Zaporozhye($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[199]] as core.TimeZone;
  }
  public static Portugal($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[200]] as core.TimeZone;
  }
  public static Europe_Belfast($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[201]] as core.TimeZone;
  }
  public static Europe_Guernsey($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[202]] as core.TimeZone;
  }
  public static Europe_Isle_of_Man($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[203]] as core.TimeZone;
  }
  public static Europe_Jersey($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[204]] as core.TimeZone;
  }
  public static GB($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[205]] as core.TimeZone;
  }
  public static GB_Eire($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[206]] as core.TimeZone;
  }
  public static W_SU($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[207]] as core.TimeZone;
  }
  public static Europe_Monaco($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[208]] as core.TimeZone;
  }
  public static Europe_Bratislava($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[209]] as core.TimeZone;
  }
  public static Europe_San_Marino($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[210]] as core.TimeZone;
  }
  public static Europe_Vatican($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[211]] as core.TimeZone;
  }
  public static Poland($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[212]] as core.TimeZone;
  }
  public static Europe_Busingen($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[213]] as core.TimeZone;
  }
  public static Europe_Vaduz($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[214]] as core.TimeZone;
  }
  public static Indian_Kerguelen($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[215]] as core.TimeZone;
  }
  public static Antarctica_McMurdo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[216]] as core.TimeZone;
  }
  public static Antarctica_South_Pole($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[217]] as core.TimeZone;
  }
  public static NZ($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[218]] as core.TimeZone;
  }
  public static NZ_CHAT($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[219]] as core.TimeZone;
  }
  public static Chile_EasterIsland($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[220]] as core.TimeZone;
  }
  public static Pacific_Pohnpei($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[221]] as core.TimeZone;
  }
  public static Pacific_Ponape($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[222]] as core.TimeZone;
  }
  public static Pacific_Saipan($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[223]] as core.TimeZone;
  }
  public static Pacific_Johnston($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[224]] as core.TimeZone;
  }
  public static US_Hawaii($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[225]] as core.TimeZone;
  }
  public static Pacific_Enderbury($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[226]] as core.TimeZone;
  }
  public static Kwajalein($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[227]] as core.TimeZone;
  }
  public static Pacific_Midway($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[228]] as core.TimeZone;
  }
  public static Pacific_Samoa($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[229]] as core.TimeZone;
  }
  public static US_Samoa($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[230]] as core.TimeZone;
  }
  public static Antarctica_DumontDUrville($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[231]] as core.TimeZone;
  }
  public static Pacific_Chuuk($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[232]] as core.TimeZone;
  }
  public static Pacific_Truk($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[233]] as core.TimeZone;
  }
  public static Pacific_Yap($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[234]] as core.TimeZone;
  }
  public static Pacific_Funafuti($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[235]] as core.TimeZone;
  }
  public static Pacific_Majuro($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[236]] as core.TimeZone;
  }
  public static Pacific_Wake($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[237]] as core.TimeZone;
  }
  public static Pacific_Wallis($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[238]] as core.TimeZone;
  }
  public static Africa_Abidjan($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[239]] as core.TimeZone;
  }
  public static Africa_Algiers($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[240]] as core.TimeZone;
  }
  public static Africa_Bissau($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[241]] as core.TimeZone;
  }
  public static Africa_Cairo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[242]] as core.TimeZone;
  }
  public static Africa_Casablanca($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[243]] as core.TimeZone;
  }
  public static Africa_Ceuta($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[244]] as core.TimeZone;
  }
  public static Africa_El_Aaiun($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[245]] as core.TimeZone;
  }
  public static Africa_Johannesburg($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[246]] as core.TimeZone;
  }
  public static Africa_Juba($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[247]] as core.TimeZone;
  }
  public static Africa_Khartoum($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[248]] as core.TimeZone;
  }
  public static Africa_Lagos($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[249]] as core.TimeZone;
  }
  public static Africa_Maputo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[250]] as core.TimeZone;
  }
  public static Africa_Monrovia($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[251]] as core.TimeZone;
  }
  public static Africa_Nairobi($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[252]] as core.TimeZone;
  }
  public static Africa_Ndjamena($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[253]] as core.TimeZone;
  }
  public static Africa_Sao_Tome($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[254]] as core.TimeZone;
  }
  public static Africa_Tripoli($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[255]] as core.TimeZone;
  }
  public static Africa_Tunis($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[256]] as core.TimeZone;
  }
  public static Africa_Windhoek($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[257]] as core.TimeZone;
  }
  public static America_Adak($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[258]] as core.TimeZone;
  }
  public static America_Anchorage($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[259]] as core.TimeZone;
  }
  public static America_Araguaina($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[260]] as core.TimeZone;
  }
  public static America_Argentina_Buenos_Aires($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[261]] as core.TimeZone;
  }
  public static America_Argentina_Catamarca($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[262]] as core.TimeZone;
  }
  public static America_Argentina_Cordoba($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[263]] as core.TimeZone;
  }
  public static America_Argentina_Jujuy($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[264]] as core.TimeZone;
  }
  public static America_Argentina_La_Rioja($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[265]] as core.TimeZone;
  }
  public static America_Argentina_Mendoza($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[266]] as core.TimeZone;
  }
  public static America_Argentina_Rio_Gallegos($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[267]] as core.TimeZone;
  }
  public static America_Argentina_Salta($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[268]] as core.TimeZone;
  }
  public static America_Argentina_San_Juan($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[269]] as core.TimeZone;
  }
  public static America_Argentina_San_Luis($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[270]] as core.TimeZone;
  }
  public static America_Argentina_Tucuman($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[271]] as core.TimeZone;
  }
  public static America_Argentina_Ushuaia($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[272]] as core.TimeZone;
  }
  public static America_Asuncion($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[273]] as core.TimeZone;
  }
  public static America_Bahia($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[274]] as core.TimeZone;
  }
  public static America_Bahia_Banderas($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[275]] as core.TimeZone;
  }
  public static America_Barbados($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[276]] as core.TimeZone;
  }
  public static America_Belem($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[277]] as core.TimeZone;
  }
  public static America_Belize($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[278]] as core.TimeZone;
  }
  public static America_Boa_Vista($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[279]] as core.TimeZone;
  }
  public static America_Bogota($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[280]] as core.TimeZone;
  }
  public static America_Boise($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[281]] as core.TimeZone;
  }
  public static America_Cambridge_Bay($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[282]] as core.TimeZone;
  }
  public static America_Campo_Grande($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[283]] as core.TimeZone;
  }
  public static America_Cancun($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[284]] as core.TimeZone;
  }
  public static America_Caracas($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[285]] as core.TimeZone;
  }
  public static America_Cayenne($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[286]] as core.TimeZone;
  }
  public static America_Chicago($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[287]] as core.TimeZone;
  }
  public static America_Chihuahua($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[288]] as core.TimeZone;
  }
  public static America_Ciudad_Juarez($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[289]] as core.TimeZone;
  }
  public static America_Costa_Rica($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[290]] as core.TimeZone;
  }
  public static America_Cuiaba($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[291]] as core.TimeZone;
  }
  public static America_Danmarkshavn($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[292]] as core.TimeZone;
  }
  public static America_Dawson($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[293]] as core.TimeZone;
  }
  public static America_Dawson_Creek($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[294]] as core.TimeZone;
  }
  public static America_Denver($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[295]] as core.TimeZone;
  }
  public static America_Detroit($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[296]] as core.TimeZone;
  }
  public static America_Edmonton($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[297]] as core.TimeZone;
  }
  public static America_Eirunepe($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[298]] as core.TimeZone;
  }
  public static America_El_Salvador($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[299]] as core.TimeZone;
  }
  public static America_Fort_Nelson($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[300]] as core.TimeZone;
  }
  public static America_Fortaleza($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[301]] as core.TimeZone;
  }
  public static America_Glace_Bay($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[302]] as core.TimeZone;
  }
  public static America_Goose_Bay($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[303]] as core.TimeZone;
  }
  public static America_Grand_Turk($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[304]] as core.TimeZone;
  }
  public static America_Guatemala($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[305]] as core.TimeZone;
  }
  public static America_Guayaquil($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[306]] as core.TimeZone;
  }
  public static America_Guyana($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[307]] as core.TimeZone;
  }
  public static America_Halifax($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[308]] as core.TimeZone;
  }
  public static America_Havana($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[309]] as core.TimeZone;
  }
  public static America_Hermosillo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[310]] as core.TimeZone;
  }
  public static America_Indiana_Indianapolis($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[311]] as core.TimeZone;
  }
  public static America_Indiana_Knox($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[312]] as core.TimeZone;
  }
  public static America_Indiana_Marengo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[313]] as core.TimeZone;
  }
  public static America_Indiana_Petersburg($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[314]] as core.TimeZone;
  }
  public static America_Indiana_Tell_City($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[315]] as core.TimeZone;
  }
  public static America_Indiana_Vevay($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[316]] as core.TimeZone;
  }
  public static America_Indiana_Vincennes($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[317]] as core.TimeZone;
  }
  public static America_Indiana_Winamac($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[318]] as core.TimeZone;
  }
  public static America_Inuvik($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[319]] as core.TimeZone;
  }
  public static America_Iqaluit($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[320]] as core.TimeZone;
  }
  public static America_Jamaica($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[321]] as core.TimeZone;
  }
  public static America_Juneau($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[322]] as core.TimeZone;
  }
  public static America_Kentucky_Louisville($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[323]] as core.TimeZone;
  }
  public static America_Kentucky_Monticello($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[324]] as core.TimeZone;
  }
  public static America_La_Paz($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[325]] as core.TimeZone;
  }
  public static America_Lima($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[326]] as core.TimeZone;
  }
  public static America_Los_Angeles($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[327]] as core.TimeZone;
  }
  public static America_Maceio($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[328]] as core.TimeZone;
  }
  public static America_Managua($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[329]] as core.TimeZone;
  }
  public static America_Manaus($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[330]] as core.TimeZone;
  }
  public static America_Martinique($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[331]] as core.TimeZone;
  }
  public static America_Matamoros($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[332]] as core.TimeZone;
  }
  public static America_Mazatlan($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[333]] as core.TimeZone;
  }
  public static America_Menominee($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[334]] as core.TimeZone;
  }
  public static America_Merida($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[335]] as core.TimeZone;
  }
  public static America_Metlakatla($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[336]] as core.TimeZone;
  }
  public static America_Mexico_City($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[337]] as core.TimeZone;
  }
  public static America_Miquelon($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[338]] as core.TimeZone;
  }
  public static America_Moncton($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[339]] as core.TimeZone;
  }
  public static America_Monterrey($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[340]] as core.TimeZone;
  }
  public static America_Montevideo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[341]] as core.TimeZone;
  }
  public static America_New_York($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[342]] as core.TimeZone;
  }
  public static America_Nome($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[343]] as core.TimeZone;
  }
  public static America_Noronha($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[344]] as core.TimeZone;
  }
  public static America_North_Dakota_Beulah($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[345]] as core.TimeZone;
  }
  public static America_North_Dakota_Center($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[346]] as core.TimeZone;
  }
  public static America_North_Dakota_New_Salem($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[347]] as core.TimeZone;
  }
  public static America_Nuuk($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[348]] as core.TimeZone;
  }
  public static America_Ojinaga($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[349]] as core.TimeZone;
  }
  public static America_Panama($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[350]] as core.TimeZone;
  }
  public static America_Paramaribo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[351]] as core.TimeZone;
  }
  public static America_Phoenix($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[352]] as core.TimeZone;
  }
  public static America_Port_au_Prince($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[353]] as core.TimeZone;
  }
  public static America_Porto_Velho($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[354]] as core.TimeZone;
  }
  public static America_Puerto_Rico($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[355]] as core.TimeZone;
  }
  public static America_Punta_Arenas($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[356]] as core.TimeZone;
  }
  public static America_Rankin_Inlet($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[357]] as core.TimeZone;
  }
  public static America_Recife($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[358]] as core.TimeZone;
  }
  public static America_Regina($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[359]] as core.TimeZone;
  }
  public static America_Resolute($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[360]] as core.TimeZone;
  }
  public static America_Rio_Branco($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[361]] as core.TimeZone;
  }
  public static America_Santarem($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[362]] as core.TimeZone;
  }
  public static America_Santiago($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[363]] as core.TimeZone;
  }
  public static America_Santo_Domingo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[364]] as core.TimeZone;
  }
  public static America_Sao_Paulo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[365]] as core.TimeZone;
  }
  public static America_Scoresbysund($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[366]] as core.TimeZone;
  }
  public static America_Sitka($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[367]] as core.TimeZone;
  }
  public static America_St_Johns($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[368]] as core.TimeZone;
  }
  public static America_Swift_Current($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[369]] as core.TimeZone;
  }
  public static America_Tegucigalpa($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[370]] as core.TimeZone;
  }
  public static America_Thule($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[371]] as core.TimeZone;
  }
  public static America_Tijuana($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[372]] as core.TimeZone;
  }
  public static America_Toronto($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[373]] as core.TimeZone;
  }
  public static America_Vancouver($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[374]] as core.TimeZone;
  }
  public static America_Whitehorse($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[375]] as core.TimeZone;
  }
  public static America_Winnipeg($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[376]] as core.TimeZone;
  }
  public static America_Yakutat($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[377]] as core.TimeZone;
  }
  public static Antarctica_Casey($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[378]] as core.TimeZone;
  }
  public static Antarctica_Davis($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[379]] as core.TimeZone;
  }
  public static Antarctica_Macquarie($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[380]] as core.TimeZone;
  }
  public static Antarctica_Mawson($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[381]] as core.TimeZone;
  }
  public static Antarctica_Palmer($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[382]] as core.TimeZone;
  }
  public static Antarctica_Rothera($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[383]] as core.TimeZone;
  }
  public static Antarctica_Troll($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[384]] as core.TimeZone;
  }
  public static Asia_Almaty($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[385]] as core.TimeZone;
  }
  public static Asia_Amman($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[386]] as core.TimeZone;
  }
  public static Asia_Anadyr($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[387]] as core.TimeZone;
  }
  public static Asia_Aqtau($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[388]] as core.TimeZone;
  }
  public static Asia_Aqtobe($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[389]] as core.TimeZone;
  }
  public static Asia_Ashgabat($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[390]] as core.TimeZone;
  }
  public static Asia_Atyrau($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[391]] as core.TimeZone;
  }
  public static Asia_Baghdad($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[392]] as core.TimeZone;
  }
  public static Asia_Baku($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[393]] as core.TimeZone;
  }
  public static Asia_Bangkok($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[394]] as core.TimeZone;
  }
  public static Asia_Barnaul($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[395]] as core.TimeZone;
  }
  public static Asia_Beirut($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[396]] as core.TimeZone;
  }
  public static Asia_Bishkek($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[397]] as core.TimeZone;
  }
  public static Asia_Chita($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[398]] as core.TimeZone;
  }
  public static Asia_Choibalsan($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[399]] as core.TimeZone;
  }
  public static Asia_Colombo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[400]] as core.TimeZone;
  }
  public static Asia_Damascus($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[401]] as core.TimeZone;
  }
  public static Asia_Dhaka($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[402]] as core.TimeZone;
  }
  public static Asia_Dili($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[403]] as core.TimeZone;
  }
  public static Asia_Dubai($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[404]] as core.TimeZone;
  }
  public static Asia_Dushanbe($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[405]] as core.TimeZone;
  }
  public static Asia_Famagusta($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[406]] as core.TimeZone;
  }
  public static Asia_Gaza($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[407]] as core.TimeZone;
  }
  public static Asia_Hebron($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[408]] as core.TimeZone;
  }
  public static Asia_Ho_Chi_Minh($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[409]] as core.TimeZone;
  }
  public static Asia_Hong_Kong($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[410]] as core.TimeZone;
  }
  public static Asia_Hovd($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[411]] as core.TimeZone;
  }
  public static Asia_Irkutsk($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[412]] as core.TimeZone;
  }
  public static Asia_Jakarta($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[413]] as core.TimeZone;
  }
  public static Asia_Jayapura($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[414]] as core.TimeZone;
  }
  public static Asia_Jerusalem($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[415]] as core.TimeZone;
  }
  public static Asia_Kabul($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[416]] as core.TimeZone;
  }
  public static Asia_Kamchatka($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[417]] as core.TimeZone;
  }
  public static Asia_Karachi($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[418]] as core.TimeZone;
  }
  public static Asia_Kathmandu($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[419]] as core.TimeZone;
  }
  public static Asia_Khandyga($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[420]] as core.TimeZone;
  }
  public static Asia_Kolkata($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[421]] as core.TimeZone;
  }
  public static Asia_Krasnoyarsk($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[422]] as core.TimeZone;
  }
  public static Asia_Kuching($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[423]] as core.TimeZone;
  }
  public static Asia_Macau($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[424]] as core.TimeZone;
  }
  public static Asia_Magadan($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[425]] as core.TimeZone;
  }
  public static Asia_Makassar($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[426]] as core.TimeZone;
  }
  public static Asia_Manila($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[427]] as core.TimeZone;
  }
  public static Asia_Nicosia($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[428]] as core.TimeZone;
  }
  public static Asia_Novokuznetsk($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[429]] as core.TimeZone;
  }
  public static Asia_Novosibirsk($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[430]] as core.TimeZone;
  }
  public static Asia_Omsk($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[431]] as core.TimeZone;
  }
  public static Asia_Oral($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[432]] as core.TimeZone;
  }
  public static Asia_Pontianak($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[433]] as core.TimeZone;
  }
  public static Asia_Pyongyang($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[434]] as core.TimeZone;
  }
  public static Asia_Qatar($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[435]] as core.TimeZone;
  }
  public static Asia_Qostanay($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[436]] as core.TimeZone;
  }
  public static Asia_Qyzylorda($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[437]] as core.TimeZone;
  }
  public static Asia_Riyadh($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[438]] as core.TimeZone;
  }
  public static Asia_Sakhalin($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[439]] as core.TimeZone;
  }
  public static Asia_Samarkand($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[440]] as core.TimeZone;
  }
  public static Asia_Seoul($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[441]] as core.TimeZone;
  }
  public static Asia_Shanghai($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[442]] as core.TimeZone;
  }
  public static Asia_Singapore($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[443]] as core.TimeZone;
  }
  public static Asia_Srednekolymsk($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[444]] as core.TimeZone;
  }
  public static Asia_Taipei($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[445]] as core.TimeZone;
  }
  public static Asia_Tashkent($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[446]] as core.TimeZone;
  }
  public static Asia_Tbilisi($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[447]] as core.TimeZone;
  }
  public static Asia_Tehran($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[448]] as core.TimeZone;
  }
  public static Asia_Thimphu($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[449]] as core.TimeZone;
  }
  public static Asia_Tokyo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[450]] as core.TimeZone;
  }
  public static Asia_Tomsk($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[451]] as core.TimeZone;
  }
  public static Asia_Ulaanbaatar($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[452]] as core.TimeZone;
  }
  public static Asia_Urumqi($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[453]] as core.TimeZone;
  }
  public static Asia_Ust_Nera($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[454]] as core.TimeZone;
  }
  public static Asia_Vladivostok($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[455]] as core.TimeZone;
  }
  public static Asia_Yakutsk($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[456]] as core.TimeZone;
  }
  public static Asia_Yangon($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[457]] as core.TimeZone;
  }
  public static Asia_Yekaterinburg($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[458]] as core.TimeZone;
  }
  public static Asia_Yerevan($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[459]] as core.TimeZone;
  }
  public static Atlantic_Azores($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[460]] as core.TimeZone;
  }
  public static Atlantic_Bermuda($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[461]] as core.TimeZone;
  }
  public static Atlantic_Canary($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[462]] as core.TimeZone;
  }
  public static Atlantic_Cape_Verde($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[463]] as core.TimeZone;
  }
  public static Atlantic_Faroe($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[464]] as core.TimeZone;
  }
  public static Atlantic_Madeira($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[465]] as core.TimeZone;
  }
  public static Atlantic_South_Georgia($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[466]] as core.TimeZone;
  }
  public static Atlantic_Stanley($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[467]] as core.TimeZone;
  }
  public static Australia_Adelaide($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[468]] as core.TimeZone;
  }
  public static Australia_Brisbane($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[469]] as core.TimeZone;
  }
  public static Australia_Broken_Hill($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[470]] as core.TimeZone;
  }
  public static Australia_Darwin($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[471]] as core.TimeZone;
  }
  public static Australia_Eucla($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[472]] as core.TimeZone;
  }
  public static Australia_Hobart($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[473]] as core.TimeZone;
  }
  public static Australia_Lindeman($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[474]] as core.TimeZone;
  }
  public static Australia_Lord_Howe($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[475]] as core.TimeZone;
  }
  public static Australia_Melbourne($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[476]] as core.TimeZone;
  }
  public static Australia_Perth($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[477]] as core.TimeZone;
  }
  public static Australia_Sydney($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[478]] as core.TimeZone;
  }
  public static CET($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[479]] as core.TimeZone;
  }
  public static CST6CDT($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[480]] as core.TimeZone;
  }
  public static EET($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[481]] as core.TimeZone;
  }
  public static EST($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[482]] as core.TimeZone;
  }
  public static EST5EDT($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[483]] as core.TimeZone;
  }
  public static Europe_Andorra($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[484]] as core.TimeZone;
  }
  public static Europe_Astrakhan($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[485]] as core.TimeZone;
  }
  public static Europe_Athens($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[486]] as core.TimeZone;
  }
  public static Europe_Belgrade($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[487]] as core.TimeZone;
  }
  public static Europe_Berlin($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[488]] as core.TimeZone;
  }
  public static Europe_Brussels($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[489]] as core.TimeZone;
  }
  public static Europe_Bucharest($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[490]] as core.TimeZone;
  }
  public static Europe_Budapest($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[491]] as core.TimeZone;
  }
  public static Europe_Chisinau($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[492]] as core.TimeZone;
  }
  public static Europe_Dublin($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[493]] as core.TimeZone;
  }
  public static Europe_Gibraltar($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[494]] as core.TimeZone;
  }
  public static Europe_Helsinki($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[495]] as core.TimeZone;
  }
  public static Europe_Istanbul($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[496]] as core.TimeZone;
  }
  public static Europe_Kaliningrad($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[497]] as core.TimeZone;
  }
  public static Europe_Kirov($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[498]] as core.TimeZone;
  }
  public static Europe_Kyiv($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[499]] as core.TimeZone;
  }
  public static Europe_Lisbon($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[500]] as core.TimeZone;
  }
  public static Europe_London($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[501]] as core.TimeZone;
  }
  public static Europe_Madrid($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[502]] as core.TimeZone;
  }
  public static Europe_Malta($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[503]] as core.TimeZone;
  }
  public static Europe_Minsk($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[504]] as core.TimeZone;
  }
  public static Europe_Moscow($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[505]] as core.TimeZone;
  }
  public static Europe_Paris($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[506]] as core.TimeZone;
  }
  public static Europe_Prague($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[507]] as core.TimeZone;
  }
  public static Europe_Riga($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[508]] as core.TimeZone;
  }
  public static Europe_Rome($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[509]] as core.TimeZone;
  }
  public static Europe_Samara($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[510]] as core.TimeZone;
  }
  public static Europe_Saratov($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[511]] as core.TimeZone;
  }
  public static Europe_Simferopol($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[512]] as core.TimeZone;
  }
  public static Europe_Sofia($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[513]] as core.TimeZone;
  }
  public static Europe_Tallinn($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[514]] as core.TimeZone;
  }
  public static Europe_Tirane($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[515]] as core.TimeZone;
  }
  public static Europe_Ulyanovsk($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[516]] as core.TimeZone;
  }
  public static Europe_Vienna($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[517]] as core.TimeZone;
  }
  public static Europe_Vilnius($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[518]] as core.TimeZone;
  }
  public static Europe_Volgograd($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[519]] as core.TimeZone;
  }
  public static Europe_Warsaw($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[520]] as core.TimeZone;
  }
  public static Europe_Zurich($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[521]] as core.TimeZone;
  }
  public static Factory($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[522]] as core.TimeZone;
  }
  public static HST($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[523]] as core.TimeZone;
  }
  public static Indian_Chagos($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[524]] as core.TimeZone;
  }
  public static Indian_Maldives($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[525]] as core.TimeZone;
  }
  public static Indian_Mauritius($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[526]] as core.TimeZone;
  }
  public static MET($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[527]] as core.TimeZone;
  }
  public static MST($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[528]] as core.TimeZone;
  }
  public static MST7MDT($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[529]] as core.TimeZone;
  }
  public static PST8PDT($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[530]] as core.TimeZone;
  }
  public static Pacific_Apia($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[531]] as core.TimeZone;
  }
  public static Pacific_Auckland($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[532]] as core.TimeZone;
  }
  public static Pacific_Bougainville($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[533]] as core.TimeZone;
  }
  public static Pacific_Chatham($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[534]] as core.TimeZone;
  }
  public static Pacific_Easter($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[535]] as core.TimeZone;
  }
  public static Pacific_Efate($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[536]] as core.TimeZone;
  }
  public static Pacific_Fakaofo($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[537]] as core.TimeZone;
  }
  public static Pacific_Fiji($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[538]] as core.TimeZone;
  }
  public static Pacific_Galapagos($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[539]] as core.TimeZone;
  }
  public static Pacific_Gambier($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[540]] as core.TimeZone;
  }
  public static Pacific_Guadalcanal($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[541]] as core.TimeZone;
  }
  public static Pacific_Guam($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[542]] as core.TimeZone;
  }
  public static Pacific_Honolulu($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[543]] as core.TimeZone;
  }
  public static Pacific_Kanton($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[544]] as core.TimeZone;
  }
  public static Pacific_Kiritimati($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[545]] as core.TimeZone;
  }
  public static Pacific_Kosrae($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[546]] as core.TimeZone;
  }
  public static Pacific_Kwajalein($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[547]] as core.TimeZone;
  }
  public static Pacific_Marquesas($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[548]] as core.TimeZone;
  }
  public static Pacific_Nauru($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[549]] as core.TimeZone;
  }
  public static Pacific_Niue($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[550]] as core.TimeZone;
  }
  public static Pacific_Norfolk($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[551]] as core.TimeZone;
  }
  public static Pacific_Noumea($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[552]] as core.TimeZone;
  }
  public static Pacific_Pago_Pago($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[553]] as core.TimeZone;
  }
  public static Pacific_Palau($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[554]] as core.TimeZone;
  }
  public static Pacific_Pitcairn($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[555]] as core.TimeZone;
  }
  public static Pacific_Port_Moresby($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[556]] as core.TimeZone;
  }
  public static Pacific_Rarotonga($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[557]] as core.TimeZone;
  }
  public static Pacific_Tahiti($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[558]] as core.TimeZone;
  }
  public static Pacific_Tarawa($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[559]] as core.TimeZone;
  }
  public static Pacific_Tongatapu($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[560]] as core.TimeZone;
  }
  public static WET($g: $sdk.GreyCat): core.TimeZone {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[5];
    return t.enum_values![t.generated_offsets[561]] as core.TimeZone;
  }
}

export class TensorType extends $sdk.GCEnum {
  static readonly _type = 'core::TensorType';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes[0], attributes[1], attributes[2]);
  }

  public static i32($g: $sdk.GreyCat): core.TensorType {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[6];
    return t.enum_values![t.generated_offsets[0]] as core.TensorType;
  }
  public static i64($g: $sdk.GreyCat): core.TensorType {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[6];
    return t.enum_values![t.generated_offsets[1]] as core.TensorType;
  }
  public static f32($g: $sdk.GreyCat): core.TensorType {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[6];
    return t.enum_values![t.generated_offsets[2]] as core.TensorType;
  }
  public static f64($g: $sdk.GreyCat): core.TensorType {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[6];
    return t.enum_values![t.generated_offsets[3]] as core.TensorType;
  }
  public static c64($g: $sdk.GreyCat): core.TensorType {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[6];
    return t.enum_values![t.generated_offsets[4]] as core.TensorType;
  }
  public static c128($g: $sdk.GreyCat): core.TensorType {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[6];
    return t.enum_values![t.generated_offsets[5]] as core.TensorType;
  }
}

export class SamplingMode extends $sdk.GCEnum {
  static readonly _type = 'core::SamplingMode';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes[0], attributes[1], attributes[2]);
  }

  public static fixed($g: $sdk.GreyCat): core.SamplingMode {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[7];
    return t.enum_values![t.generated_offsets[0]] as core.SamplingMode;
  }
  public static fixed_reg($g: $sdk.GreyCat): core.SamplingMode {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[7];
    return t.enum_values![t.generated_offsets[1]] as core.SamplingMode;
  }
  public static adaptative($g: $sdk.GreyCat): core.SamplingMode {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[7];
    return t.enum_values![t.generated_offsets[2]] as core.SamplingMode;
  }
  public static dense($g: $sdk.GreyCat): core.SamplingMode {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[7];
    return t.enum_values![t.generated_offsets[3]] as core.SamplingMode;
  }
}

export class Error extends std_n.core.Error {}

export class duration extends std_n.core.duration {}

export class Date extends std_n.core.Date {}

export class ti2d extends std_n.core.ti2d {}

export class tf3d extends std_n.core.tf3d {}

export class geo extends std_n.core.geo {}

export class GeoBox extends $sdk.GCObject {
  static readonly _type = 'core::GeoBox';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get sw(): $sdk.std.core.geo {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set sw(v: $sdk.std.core.geo) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get ne(): $sdk.std.core.geo {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set ne(v: $sdk.std.core.geo) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, sw: $sdk.std.core.geo, ne: $sdk.std.core.geo): GeoBox {
    return new GeoBox($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[14], sw, ne);
  }
}

export class GeoPoly extends $sdk.GCObject {
  static readonly _type = 'core::GeoPoly';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get points(): Array<$sdk.std.core.geo> {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set points(v: Array<$sdk.std.core.geo>) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  static create($g: $sdk.GreyCat, points: Array<$sdk.std.core.geo>): GeoPoly {
    return new GeoPoly($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[15], points);
  }
}

export class nodeIndexBucket extends std_n.core.nodeIndexBucket {}

export class TableColumnMeta extends $sdk.GCObject {
  static readonly _type = 'core::TableColumnMeta';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get type(): string | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set type(v: string | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get size(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set size(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get index(): boolean {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set index(v: boolean) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get min(): any | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set min(v: any | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get max(): any | null {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set max(v: any | null) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get avg(): any | null {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set avg(v: any | null) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public get std(): any | null {
    return this.$attrs[this.$type.generated_offsets[6]];
  }
  public set std(v: any | null) {
    this.$attrs[this.$type.generated_offsets[6]] = v;
  }
  static create($g: $sdk.GreyCat, type: string | null, size: bigint | number, index: boolean, min: any | null, max: any | null, avg: any | null, std: any | null): TableColumnMeta {
    return new TableColumnMeta($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[17], type, size, index, min, max, avg, std);
  }
}

export class GeoCircle extends $sdk.GCObject {
  static readonly _type = 'core::GeoCircle';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get center(): $sdk.std.core.geo {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set center(v: $sdk.std.core.geo) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get radius(): number {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set radius(v: number) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, center: $sdk.std.core.geo, radius: number): GeoCircle {
    return new GeoCircle($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[18], center, radius);
  }
}

export class tf4d extends std_n.core.tf4d {}

export class ErrorCode extends $sdk.GCEnum {
  static readonly _type = 'core::ErrorCode';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes[0], attributes[1], attributes[2]);
  }

  public static none($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[20];
    return t.enum_values![t.generated_offsets[0]] as core.ErrorCode;
  }
  public static too_deep_workspace($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[20];
    return t.enum_values![t.generated_offsets[1]] as core.ErrorCode;
  }
  public static too_deep_iterator($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[20];
    return t.enum_values![t.generated_offsets[2]] as core.ErrorCode;
  }
  public static wrong_operand($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[20];
    return t.enum_values![t.generated_offsets[3]] as core.ErrorCode;
  }
  public static wrong_params($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[20];
    return t.enum_values![t.generated_offsets[4]] as core.ErrorCode;
  }
  public static wrong_param_type($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[20];
    return t.enum_values![t.generated_offsets[5]] as core.ErrorCode;
  }
  public static wrong_numeric($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[20];
    return t.enum_values![t.generated_offsets[6]] as core.ErrorCode;
  }
  public static wrong_state($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[20];
    return t.enum_values![t.generated_offsets[7]] as core.ErrorCode;
  }
  public static wrong_null($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[20];
    return t.enum_values![t.generated_offsets[8]] as core.ErrorCode;
  }
  public static unresolved_ref($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[20];
    return t.enum_values![t.generated_offsets[9]] as core.ErrorCode;
  }
  public static assign_error($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[20];
    return t.enum_values![t.generated_offsets[10]] as core.ErrorCode;
  }
  public static interrupted($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[20];
    return t.enum_values![t.generated_offsets[11]] as core.ErrorCode;
  }
  public static throw_($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[20];
    return t.enum_values![t.generated_offsets[12]] as core.ErrorCode;
  }
  public static wrong_type($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[20];
    return t.enum_values![t.generated_offsets[13]] as core.ErrorCode;
  }
  public static wrong_dimension($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[20];
    return t.enum_values![t.generated_offsets[14]] as core.ErrorCode;
  }
  public static unsupported_operation($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[20];
    return t.enum_values![t.generated_offsets[15]] as core.ErrorCode;
  }
  public static unsupported_type($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[20];
    return t.enum_values![t.generated_offsets[16]] as core.ErrorCode;
  }
  public static dimensions_mismatch($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[20];
    return t.enum_values![t.generated_offsets[17]] as core.ErrorCode;
  }
  public static timeout($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[20];
    return t.enum_values![t.generated_offsets[18]] as core.ErrorCode;
  }
  public static forbidden($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[20];
    return t.enum_values![t.generated_offsets[19]] as core.ErrorCode;
  }
  public static runtime_error($g: $sdk.GreyCat): core.ErrorCode {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[20];
    return t.enum_values![t.generated_offsets[20]] as core.ErrorCode;
  }
}

export class Tuple extends $sdk.GCObject {
  static readonly _type = 'core::Tuple';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get x(): any {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set x(v: any) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get y(): any {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set y(v: any) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, x: any, y: any): Tuple {
    return new Tuple($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[21], x, y);
  }
}

export class ti6d extends std_n.core.ti6d {}

export class ti4d extends std_n.core.ti4d {}

export class time extends std_n.core.time {}

export class ti10d extends std_n.core.ti10d {}

export class DurationUnit extends $sdk.GCEnum {
  static readonly _type = 'core::DurationUnit';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes[0], attributes[1], attributes[2]);
  }

  public static microseconds($g: $sdk.GreyCat): core.DurationUnit {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[26];
    return t.enum_values![t.generated_offsets[0]] as core.DurationUnit;
  }
  public static milliseconds($g: $sdk.GreyCat): core.DurationUnit {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[26];
    return t.enum_values![t.generated_offsets[1]] as core.DurationUnit;
  }
  public static seconds($g: $sdk.GreyCat): core.DurationUnit {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[26];
    return t.enum_values![t.generated_offsets[2]] as core.DurationUnit;
  }
  public static minutes($g: $sdk.GreyCat): core.DurationUnit {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[26];
    return t.enum_values![t.generated_offsets[3]] as core.DurationUnit;
  }
  public static hours($g: $sdk.GreyCat): core.DurationUnit {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[26];
    return t.enum_values![t.generated_offsets[4]] as core.DurationUnit;
  }
  public static days($g: $sdk.GreyCat): core.DurationUnit {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[26];
    return t.enum_values![t.generated_offsets[5]] as core.DurationUnit;
  }
  public static weeks($g: $sdk.GreyCat): core.DurationUnit {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[26];
    return t.enum_values![t.generated_offsets[6]] as core.DurationUnit;
  }
  public static months($g: $sdk.GreyCat): core.DurationUnit {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[26];
    return t.enum_values![t.generated_offsets[7]] as core.DurationUnit;
  }
  public static years($g: $sdk.GreyCat): core.DurationUnit {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[26];
    return t.enum_values![t.generated_offsets[8]] as core.DurationUnit;
  }
}

export class String extends std_n.core.String {}

export class function_ extends $sdk.GCObject {
  static readonly _type = 'core::function';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  static create($g: $sdk.GreyCat): function_ {
    return new function_($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[28]);
  }
}

export class Table extends std_n.core.Table {}

export class ti3d extends std_n.core.ti3d {}

export class Tensor extends std_n.core.Tensor {}

export class node extends std_n.core.node {}

export class Map extends std_n.core.Map {}

export class tf2d extends std_n.core.tf2d {}

export class nodeGeo extends std_n.core.nodeGeo {}

export class nodeTime extends std_n.core.nodeTime {}

export class ti5d extends std_n.core.ti5d {}

}

export namespace runtime {
export class UserGroupPolicyType extends $sdk.GCEnum {
  static readonly _type = 'runtime::UserGroupPolicyType';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes[0], attributes[1], attributes[2]);
  }

  public static read($g: $sdk.GreyCat): runtime.UserGroupPolicyType {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[38];
    return t.enum_values![t.generated_offsets[0]] as runtime.UserGroupPolicyType;
  }
  public static write($g: $sdk.GreyCat): runtime.UserGroupPolicyType {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[38];
    return t.enum_values![t.generated_offsets[1]] as runtime.UserGroupPolicyType;
  }
  public static execute($g: $sdk.GreyCat): runtime.UserGroupPolicyType {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[38];
    return t.enum_values![t.generated_offsets[2]] as runtime.UserGroupPolicyType;
  }
}

export class UserRole extends $sdk.GCObject {
  static readonly _type = 'runtime::UserRole';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get name(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get permissions(): Array<string> {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set permissions(v: Array<string>) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  async all($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<Array<runtime.UserRole>> {
    return $g.call('runtime::UserRole::all', undefined, $signal);
  }
  async remove($g: $sdk.GreyCat, name: string, $signal?: AbortSignal): Promise<unknown> {
    return $g.call('runtime::UserRole::remove', [name], $signal);
  }
  async set_($g: $sdk.GreyCat, value: runtime.UserRole, $signal?: AbortSignal): Promise<unknown> {
    return $g.call('runtime::UserRole::set_', [value], $signal);
  }
  static create($g: $sdk.GreyCat, name: string, permissions: Array<string>): UserRole {
    return new UserRole($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[39], name, permissions);
  }
}

export class TaskStatus extends $sdk.GCEnum {
  static readonly _type = 'runtime::TaskStatus';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes[0], attributes[1], attributes[2]);
  }

  public static empty($g: $sdk.GreyCat): runtime.TaskStatus {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[40];
    return t.enum_values![t.generated_offsets[0]] as runtime.TaskStatus;
  }
  public static waiting($g: $sdk.GreyCat): runtime.TaskStatus {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[40];
    return t.enum_values![t.generated_offsets[1]] as runtime.TaskStatus;
  }
  public static running($g: $sdk.GreyCat): runtime.TaskStatus {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[40];
    return t.enum_values![t.generated_offsets[2]] as runtime.TaskStatus;
  }
  public static cancelled($g: $sdk.GreyCat): runtime.TaskStatus {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[40];
    return t.enum_values![t.generated_offsets[3]] as runtime.TaskStatus;
  }
  public static error($g: $sdk.GreyCat): runtime.TaskStatus {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[40];
    return t.enum_values![t.generated_offsets[4]] as runtime.TaskStatus;
  }
  public static ended($g: $sdk.GreyCat): runtime.TaskStatus {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[40];
    return t.enum_values![t.generated_offsets[5]] as runtime.TaskStatus;
  }
}

export class Runtime extends $sdk.GCObject {
  static readonly _type = 'runtime::Runtime';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  async info($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<runtime.RuntimeInfo> {
    return $g.call('runtime::Runtime::info', undefined, $signal);
  }
  async abi($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<unknown> {
    return $g.call('runtime::Runtime::abi', undefined, $signal);
  }
  async readModVar($g: $sdk.GreyCat, module: string, name: string, $signal?: AbortSignal): Promise<any | null> {
    return $g.call('runtime::Runtime::readModVar', [module, name], $signal);
  }
  static create($g: $sdk.GreyCat): Runtime {
    return new Runtime($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[41]);
  }
}

export class User extends $sdk.GCObject {
  static readonly _type = 'runtime::User';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get id(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set id(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get name(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set name(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get activated(): boolean {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set activated(v: boolean) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get full_name(): string | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set full_name(v: string | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get email(): string | null {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set email(v: string | null) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get role(): string | null {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set role(v: string | null) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public get permissions_flags(): bigint | number | null {
    return this.$attrs[this.$type.generated_offsets[6]];
  }
  public set permissions_flags(v: bigint | number | null) {
    this.$attrs[this.$type.generated_offsets[6]] = v;
  }
  public get groups(): Array<runtime.UserGroupPolicy> | null {
    return this.$attrs[this.$type.generated_offsets[7]];
  }
  public set groups(v: Array<runtime.UserGroupPolicy> | null) {
    this.$attrs[this.$type.generated_offsets[7]] = v;
  }
  public get groups_flags(): bigint | number | null {
    return this.$attrs[this.$type.generated_offsets[8]];
  }
  public set groups_flags(v: bigint | number | null) {
    this.$attrs[this.$type.generated_offsets[8]] = v;
  }
  public get external(): boolean {
    return this.$attrs[this.$type.generated_offsets[9]];
  }
  public set external(v: boolean) {
    this.$attrs[this.$type.generated_offsets[9]] = v;
  }
  async all($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<Array<runtime.SecurityEntity>> {
    return $g.call('runtime::SecurityEntity::all', undefined, $signal);
  }
  async set_($g: $sdk.GreyCat, entity: runtime.SecurityEntity, $signal?: AbortSignal): Promise<bigint | number | null> {
    return $g.call('runtime::SecurityEntity::set_', [entity], $signal);
  }
  async login($g: $sdk.GreyCat, credentials: string, use_cookie: boolean, $signal?: AbortSignal): Promise<string> {
    return $g.call('runtime::User::login', [credentials, use_cookie], $signal);
  }
  async tokenLogin($g: $sdk.GreyCat, token: string, use_cookie: boolean, $signal?: AbortSignal): Promise<string> {
    return $g.call('runtime::User::tokenLogin', [token, use_cookie], $signal);
  }
  async renew($g: $sdk.GreyCat, use_cookie: boolean, $signal?: AbortSignal): Promise<string> {
    return $g.call('runtime::User::renew', [use_cookie], $signal);
  }
  async logout($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<unknown> {
    return $g.call('runtime::User::logout', undefined, $signal);
  }
  async current($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<bigint | number> {
    return $g.call('runtime::User::current', undefined, $signal);
  }
  async me($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<runtime.User> {
    return $g.call('runtime::User::me', undefined, $signal);
  }
  async permissions($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<Array<string>> {
    return $g.call('runtime::User::permissions', undefined, $signal);
  }
  async setPassword($g: $sdk.GreyCat, name: string, pass: string, $signal?: AbortSignal): Promise<boolean> {
    return $g.call('runtime::User::setPassword', [name, pass], $signal);
  }
  async getToken($g: $sdk.GreyCat, id: bigint | number, $signal?: AbortSignal): Promise<string> {
    return $g.call('runtime::User::getToken', [id], $signal);
  }
  static create($g: $sdk.GreyCat, id: bigint | number, name: string, activated: boolean, full_name: string | null, email: string | null, role: string | null, permissions_flags: bigint | number | null, groups: Array<runtime.UserGroupPolicy> | null, groups_flags: bigint | number | null, external: boolean): User {
    return new User($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[42], id, name, activated, full_name, email, role, permissions_flags, groups, groups_flags, external);
  }
}

export class SecurityFields extends $sdk.GCObject {
  static readonly _type = 'runtime::SecurityFields';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get email(): string | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set email(v: string | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get name(): string | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set name(v: string | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get first_name(): string | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set first_name(v: string | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get last_name(): string | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set last_name(v: string | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get roles(): Map<string, string> | null {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set roles(v: Map<string, string> | null) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get groups(): Map<string, string> | null {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set groups(v: Map<string, string> | null) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  async set_($g: $sdk.GreyCat, f: runtime.SecurityFields, $signal?: AbortSignal): Promise<unknown> {
    return $g.call('runtime::SecurityFields::set_', [f], $signal);
  }
  async get_($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<runtime.SecurityFields | null> {
    return $g.call('runtime::SecurityFields::get_', undefined, $signal);
  }
  static create($g: $sdk.GreyCat, email: string | null, name: string | null, first_name: string | null, last_name: string | null, roles: Map<string, string> | null, groups: Map<string, string> | null): SecurityFields {
    return new SecurityFields($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[43], email, name, first_name, last_name, roles, groups);
  }
}

export class UserGroupPolicy extends $sdk.GCObject {
  static readonly _type = 'runtime::UserGroupPolicy';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get group_id(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set group_id(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get type(): runtime.UserGroupPolicyType {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set type(v: runtime.UserGroupPolicyType) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, group_id: bigint | number, type: runtime.UserGroupPolicyType): UserGroupPolicy {
    return new UserGroupPolicy($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[44], group_id, type);
  }
}

export class TaskInfo extends $sdk.GCObject {
  static readonly _type = 'runtime::TaskInfo';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get user_id(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set user_id(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get task_id(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set task_id(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get mod(): string | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set mod(v: string | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get type(): string | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set type(v: string | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get fun(): string | null {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set fun(v: string | null) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get creation(): $sdk.std.core.time {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set creation(v: $sdk.std.core.time) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public get status(): runtime.TaskStatus {
    return this.$attrs[this.$type.generated_offsets[6]];
  }
  public set status(v: runtime.TaskStatus) {
    this.$attrs[this.$type.generated_offsets[6]] = v;
  }
  public get start(): $sdk.std.core.time | null {
    return this.$attrs[this.$type.generated_offsets[7]];
  }
  public set start(v: $sdk.std.core.time | null) {
    this.$attrs[this.$type.generated_offsets[7]] = v;
  }
  public get progress(): number | null {
    return this.$attrs[this.$type.generated_offsets[8]];
  }
  public set progress(v: number | null) {
    this.$attrs[this.$type.generated_offsets[8]] = v;
  }
  public get remaining(): $sdk.std.core.duration | null {
    return this.$attrs[this.$type.generated_offsets[9]];
  }
  public set remaining(v: $sdk.std.core.duration | null) {
    this.$attrs[this.$type.generated_offsets[9]] = v;
  }
  public get duration(): $sdk.std.core.duration | null {
    return this.$attrs[this.$type.generated_offsets[10]];
  }
  public set duration(v: $sdk.std.core.duration | null) {
    this.$attrs[this.$type.generated_offsets[10]] = v;
  }
  public get sub_waiting(): bigint | number | null {
    return this.$attrs[this.$type.generated_offsets[11]];
  }
  public set sub_waiting(v: bigint | number | null) {
    this.$attrs[this.$type.generated_offsets[11]] = v;
  }
  public get sub_tasks_all(): bigint | number | null {
    return this.$attrs[this.$type.generated_offsets[12]];
  }
  public set sub_tasks_all(v: bigint | number | null) {
    this.$attrs[this.$type.generated_offsets[12]] = v;
  }
  static create($g: $sdk.GreyCat, user_id: bigint | number, task_id: bigint | number, mod: string | null, type: string | null, fun: string | null, creation: $sdk.std.core.time, status: runtime.TaskStatus, start: $sdk.std.core.time | null, progress: number | null, remaining: $sdk.std.core.duration | null, duration: $sdk.std.core.duration | null, sub_waiting: bigint | number | null, sub_tasks_all: bigint | number | null): TaskInfo {
    return new TaskInfo($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[45], user_id, task_id, mod, type, fun, creation, status, start, progress, remaining, duration, sub_waiting, sub_tasks_all);
  }
}

export class PeriodicTask extends $sdk.GCObject {
  static readonly _type = 'runtime::PeriodicTask';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get name(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get user_id(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set user_id(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get args(): string | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set args(v: string | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get start(): $sdk.std.core.time {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set start(v: $sdk.std.core.time) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get every(): $sdk.std.core.duration {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set every(v: $sdk.std.core.duration) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  async all($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<Array<runtime.PeriodicTask>> {
    return $g.call('runtime::PeriodicTask::all', undefined, $signal);
  }
  async set_($g: $sdk.GreyCat, tasks: Array<runtime.PeriodicTask>, $signal?: AbortSignal): Promise<unknown> {
    return $g.call('runtime::PeriodicTask::set_', [tasks], $signal);
  }
  static create($g: $sdk.GreyCat, name: string, user_id: bigint | number, args: string | null, start: $sdk.std.core.time, every: $sdk.std.core.duration): PeriodicTask {
    return new PeriodicTask($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[46], name, user_id, args, start, every);
  }
}

export class RuntimeInfo extends $sdk.GCObject {
  static readonly _type = 'runtime::RuntimeInfo';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get version(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set version(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get arch(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set arch(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get timezone(): core.TimeZone {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set timezone(v: core.TimeZone) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get license(): runtime.License {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set license(v: runtime.License) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get io_threads(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set io_threads(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get bg_threads(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set bg_threads(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public get fg_threads(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[6]];
  }
  public set fg_threads(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[6]] = v;
  }
  public get mem_total(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[7]];
  }
  public set mem_total(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[7]] = v;
  }
  public get mem_worker(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[8]];
  }
  public set mem_worker(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[8]] = v;
  }
  public get nb_ctx(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[9]];
  }
  public set nb_ctx(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[9]] = v;
  }
  public get store_stats(): runtime.StoreStat | null {
    return this.$attrs[this.$type.generated_offsets[10]];
  }
  public set store_stats(v: runtime.StoreStat | null) {
    this.$attrs[this.$type.generated_offsets[10]] = v;
  }
  static create($g: $sdk.GreyCat, version: string, arch: string, timezone: core.TimeZone, license: runtime.License, io_threads: bigint | number, bg_threads: bigint | number, fg_threads: bigint | number, mem_total: bigint | number, mem_worker: bigint | number, nb_ctx: bigint | number, store_stats: runtime.StoreStat | null): RuntimeInfo {
    return new RuntimeInfo($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[47], version, arch, timezone, license, io_threads, bg_threads, fg_threads, mem_total, mem_worker, nb_ctx, store_stats);
  }
}

export class System extends $sdk.GCObject {
  static readonly _type = 'runtime::System';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  static create($g: $sdk.GreyCat): System {
    return new System($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[48]);
  }
}

export class SecurityPolicy extends $sdk.GCObject {
  static readonly _type = 'runtime::SecurityPolicy';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get entities(): Array<runtime.SecurityEntity> {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set entities(v: Array<runtime.SecurityEntity>) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get credentials(): Map<string, runtime.UserCredential> {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set credentials(v: Map<string, runtime.UserCredential>) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get roles(): Map<string, runtime.UserRole> {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set roles(v: Map<string, runtime.UserRole>) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get fields(): runtime.SecurityFields | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set fields(v: runtime.SecurityFields | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  async permissions($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<Array<string>> {
    return $g.call('runtime::SecurityPolicy::permissions', undefined, $signal);
  }
  static create($g: $sdk.GreyCat, entities: Array<runtime.SecurityEntity>, credentials: Map<string, runtime.UserCredential>, roles: Map<string, runtime.UserRole>, fields: runtime.SecurityFields | null): SecurityPolicy {
    return new SecurityPolicy($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[49], entities, credentials, roles, fields);
  }
}

export class License extends $sdk.GCObject {
  static readonly _type = 'runtime::License';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get name(): string | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get start(): $sdk.std.core.time {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set start(v: $sdk.std.core.time) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get end(): $sdk.std.core.time {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set end(v: $sdk.std.core.time) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get company(): string | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set company(v: string | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get max_workers(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set max_workers(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get max_memory(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set max_memory(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public get extra_1(): bigint | number | null {
    return this.$attrs[this.$type.generated_offsets[6]];
  }
  public set extra_1(v: bigint | number | null) {
    this.$attrs[this.$type.generated_offsets[6]] = v;
  }
  public get extra_2(): bigint | number | null {
    return this.$attrs[this.$type.generated_offsets[7]];
  }
  public set extra_2(v: bigint | number | null) {
    this.$attrs[this.$type.generated_offsets[7]] = v;
  }
  public get extra_3(): bigint | number | null {
    return this.$attrs[this.$type.generated_offsets[8]];
  }
  public set extra_3(v: bigint | number | null) {
    this.$attrs[this.$type.generated_offsets[8]] = v;
  }
  public get extra_4(): bigint | number | null {
    return this.$attrs[this.$type.generated_offsets[9]];
  }
  public set extra_4(v: bigint | number | null) {
    this.$attrs[this.$type.generated_offsets[9]] = v;
  }
  static create($g: $sdk.GreyCat, name: string | null, start: $sdk.std.core.time, end: $sdk.std.core.time, company: string | null, max_workers: bigint | number, max_memory: bigint | number, extra_1: bigint | number | null, extra_2: bigint | number | null, extra_3: bigint | number | null, extra_4: bigint | number | null): License {
    return new License($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[50], name, start, end, company, max_workers, max_memory, extra_1, extra_2, extra_3, extra_4);
  }
}

export class Task extends $sdk.GCObject {
  static readonly _type = 'runtime::Task';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get user_id(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set user_id(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get task_id(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set task_id(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get mod(): string | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set mod(v: string | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get type(): string | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set type(v: string | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get fun(): string | null {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set fun(v: string | null) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get creation(): $sdk.std.core.time {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set creation(v: $sdk.std.core.time) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public get status(): runtime.TaskStatus {
    return this.$attrs[this.$type.generated_offsets[6]];
  }
  public set status(v: runtime.TaskStatus) {
    this.$attrs[this.$type.generated_offsets[6]] = v;
  }
  async running($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<Array<runtime.TaskInfo>> {
    return $g.call('runtime::Task::running', undefined, $signal);
  }
  async history($g: $sdk.GreyCat, offset: bigint | number, max: bigint | number, $signal?: AbortSignal): Promise<Array<runtime.Task>> {
    return $g.call('runtime::Task::history', [offset, max], $signal);
  }
  async cancel($g: $sdk.GreyCat, task_id: bigint | number, $signal?: AbortSignal): Promise<boolean> {
    return $g.call('runtime::Task::cancel', [task_id], $signal);
  }
  async info($g: $sdk.GreyCat, user_id: bigint | number, task_id: bigint | number, $signal?: AbortSignal): Promise<runtime.TaskInfo | null> {
    return $g.call('runtime::Task::info', [user_id, task_id], $signal);
  }
  static create($g: $sdk.GreyCat, user_id: bigint | number, task_id: bigint | number, mod: string | null, type: string | null, fun: string | null, creation: $sdk.std.core.time, status: runtime.TaskStatus): Task {
    return new Task($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[51], user_id, task_id, mod, type, fun, creation, status);
  }
}

export class UserCredential extends $sdk.GCObject {
  static readonly _type = 'runtime::UserCredential';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get offset(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set offset(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get pass(): string | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set pass(v: string | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, offset: bigint | number, pass: string | null): UserCredential {
    return new UserCredential($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[52], offset, pass);
  }
}

export class StoreStat extends $sdk.GCObject {
  static readonly _type = 'runtime::StoreStat';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get capacity_bytes(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set capacity_bytes(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get allocated_bytes(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set allocated_bytes(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get allocated_ratio(): number {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set allocated_ratio(v: number) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get remained_bytes(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set remained_bytes(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get remained_ratio(): number {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set remained_ratio(v: number) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get used_bytes(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set used_bytes(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public get used_ratio(): number {
    return this.$attrs[this.$type.generated_offsets[6]];
  }
  public set used_ratio(v: number) {
    this.$attrs[this.$type.generated_offsets[6]] = v;
  }
  public get available_bytes(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[7]];
  }
  public set available_bytes(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[7]] = v;
  }
  public get available_ratio(): number {
    return this.$attrs[this.$type.generated_offsets[8]];
  }
  public set available_ratio(v: number) {
    this.$attrs[this.$type.generated_offsets[8]] = v;
  }
  static create($g: $sdk.GreyCat, capacity_bytes: bigint | number, allocated_bytes: bigint | number, allocated_ratio: number, remained_bytes: bigint | number, remained_ratio: number, used_bytes: bigint | number, used_ratio: number, available_bytes: bigint | number, available_ratio: number): StoreStat {
    return new StoreStat($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[53], capacity_bytes, allocated_bytes, allocated_ratio, remained_bytes, remained_ratio, used_bytes, used_ratio, available_bytes, available_ratio);
  }
}

export class UserGroup extends $sdk.GCObject {
  static readonly _type = 'runtime::UserGroup';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get id(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set id(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get name(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set name(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get activated(): boolean {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set activated(v: boolean) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  async all($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<Array<runtime.SecurityEntity>> {
    return $g.call('runtime::SecurityEntity::all', undefined, $signal);
  }
  async set_($g: $sdk.GreyCat, entity: runtime.SecurityEntity, $signal?: AbortSignal): Promise<bigint | number | null> {
    return $g.call('runtime::SecurityEntity::set_', [entity], $signal);
  }
  static create($g: $sdk.GreyCat, id: bigint | number, name: string, activated: boolean): UserGroup {
    return new UserGroup($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[54], id, name, activated);
  }
}

export class OpenIDConnect extends $sdk.GCObject {
  static readonly _type = 'runtime::OpenIDConnect';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get url(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set url(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get clientId(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set clientId(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  async config($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<runtime.OpenIDConnect | null> {
    return $g.call('runtime::OpenIDConnect::config', undefined, $signal);
  }
  static create($g: $sdk.GreyCat, url: string, clientId: string): OpenIDConnect {
    return new OpenIDConnect($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[55], url, clientId);
  }
}

export class SecurityEntity extends $sdk.GCObject {
  static readonly _type = 'runtime::SecurityEntity';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get id(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set id(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get name(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set name(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get activated(): boolean {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set activated(v: boolean) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  async all($g: $sdk.GreyCat, $signal?: AbortSignal): Promise<Array<runtime.SecurityEntity>> {
    return $g.call('runtime::SecurityEntity::all', undefined, $signal);
  }
  async set_($g: $sdk.GreyCat, entity: runtime.SecurityEntity, $signal?: AbortSignal): Promise<bigint | number | null> {
    return $g.call('runtime::SecurityEntity::set_', [entity], $signal);
  }
  static create($g: $sdk.GreyCat, id: bigint | number, name: string, activated: boolean): SecurityEntity {
    return new SecurityEntity($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[56], id, name, activated);
  }
}

}

export namespace io {
export class TextEncoder extends $sdk.GCEnum {
  static readonly _type = 'io::TextEncoder';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes[0], attributes[1], attributes[2]);
  }

  public static plain($g: $sdk.GreyCat): io.TextEncoder {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[57];
    return t.enum_values![t.generated_offsets[0]] as io.TextEncoder;
  }
  public static base64($g: $sdk.GreyCat): io.TextEncoder {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[57];
    return t.enum_values![t.generated_offsets[1]] as io.TextEncoder;
  }
  public static base64url($g: $sdk.GreyCat): io.TextEncoder {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[57];
    return t.enum_values![t.generated_offsets[2]] as io.TextEncoder;
  }
  public static hexadecimal($g: $sdk.GreyCat): io.TextEncoder {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[57];
    return t.enum_values![t.generated_offsets[3]] as io.TextEncoder;
  }
}

export class CsvColumnFloat extends $sdk.GCObject {
  static readonly _type = 'io::CsvColumnFloat';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get name(): string | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get mandatory(): boolean | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set mandatory(v: boolean | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, name: string | null, mandatory: boolean | null): CsvColumnFloat {
    return new CsvColumnFloat($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[58], name, mandatory);
  }
}

export class Http extends $sdk.GCObject {
  static readonly _type = 'io::Http';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  static create($g: $sdk.GreyCat): Http {
    return new Http($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[59]);
  }
}

export class CsvColumnIgnored extends $sdk.GCObject {
  static readonly _type = 'io::CsvColumnIgnored';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get name(): string | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get mandatory(): boolean | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set mandatory(v: boolean | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, name: string | null, mandatory: boolean | null): CsvColumnIgnored {
    return new CsvColumnIgnored($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[60], name, mandatory);
  }
}

export class File extends $sdk.GCObject {
  static readonly _type = 'io::File';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get path(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set path(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get size(): bigint | number | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set size(v: bigint | number | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get last_modification(): $sdk.std.core.time | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set last_modification(v: $sdk.std.core.time | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  static create($g: $sdk.GreyCat, path: string, size: bigint | number | null, last_modification: $sdk.std.core.time | null): File {
    return new File($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[61], path, size, last_modification);
  }
}

export class HttpHeader extends $sdk.GCObject {
  static readonly _type = 'io::HttpHeader';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get name(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get value(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set value(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, name: string, value: string): HttpHeader {
    return new HttpHeader($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[62], name, value);
  }
}

export class CsvColumn extends $sdk.GCObject {
  static readonly _type = 'io::CsvColumn';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get name(): string | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get mandatory(): boolean | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set mandatory(v: boolean | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, name: string | null, mandatory: boolean | null): CsvColumn {
    return new CsvColumn($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[63], name, mandatory);
  }
}

export class Email extends $sdk.GCObject {
  static readonly _type = 'io::Email';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get from(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set from(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get subject(): string {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set subject(v: string) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get body(): string {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set body(v: string) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get body_is_html(): boolean {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set body_is_html(v: boolean) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get to(): Array<string> {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set to(v: Array<string>) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get cc(): Array<string> | null {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set cc(v: Array<string> | null) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public get bcc(): Array<string> | null {
    return this.$attrs[this.$type.generated_offsets[6]];
  }
  public set bcc(v: Array<string> | null) {
    this.$attrs[this.$type.generated_offsets[6]] = v;
  }
  static create($g: $sdk.GreyCat, from: string, subject: string, body: string, body_is_html: boolean, to: Array<string>, cc: Array<string> | null, bcc: Array<string> | null): Email {
    return new Email($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[64], from, subject, body, body_is_html, to, cc, bcc);
  }
}

export class CsvColumnTime extends $sdk.GCObject {
  static readonly _type = 'io::CsvColumnTime';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get name(): string | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get mandatory(): boolean | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set mandatory(v: boolean | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get unit(): core.DurationUnit | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set unit(v: core.DurationUnit | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  static create($g: $sdk.GreyCat, name: string | null, mandatory: boolean | null, unit: core.DurationUnit | null): CsvColumnTime {
    return new CsvColumnTime($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[65], name, mandatory, unit);
  }
}

export class CsvFormat extends $sdk.GCObject {
  static readonly _type = 'io::CsvFormat';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get header_lines(): bigint | number | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set header_lines(v: bigint | number | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get infer(): boolean | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set infer(v: boolean | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get separator(): string | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set separator(v: string | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get string_delimiter(): string | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set string_delimiter(v: string | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get decimal_separator(): string | null {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set decimal_separator(v: string | null) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get thousands_separator(): string | null {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set thousands_separator(v: string | null) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public get columns(): Array<io.CsvColumn> | null {
    return this.$attrs[this.$type.generated_offsets[6]];
  }
  public set columns(v: Array<io.CsvColumn> | null) {
    this.$attrs[this.$type.generated_offsets[6]] = v;
  }
  static create($g: $sdk.GreyCat, header_lines: bigint | number | null, infer: boolean | null, separator: string | null, string_delimiter: string | null, decimal_separator: string | null, thousands_separator: string | null, columns: Array<io.CsvColumn> | null): CsvFormat {
    return new CsvFormat($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[66], header_lines, infer, separator, string_delimiter, decimal_separator, thousands_separator, columns);
  }
}

export class CsvColumnString extends $sdk.GCObject {
  static readonly _type = 'io::CsvColumnString';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get name(): string | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get mandatory(): boolean | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set mandatory(v: boolean | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get trim(): boolean | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set trim(v: boolean | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get try_number(): boolean | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set try_number(v: boolean | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get try_json(): boolean | null {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set try_json(v: boolean | null) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get values(): Array<string> | null {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set values(v: Array<string> | null) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public get encoder(): io.TextEncoder | null {
    return this.$attrs[this.$type.generated_offsets[6]];
  }
  public set encoder(v: io.TextEncoder | null) {
    this.$attrs[this.$type.generated_offsets[6]] = v;
  }
  static create($g: $sdk.GreyCat, name: string | null, mandatory: boolean | null, trim: boolean | null, try_number: boolean | null, try_json: boolean | null, values: Array<string> | null, encoder: io.TextEncoder | null): CsvColumnString {
    return new CsvColumnString($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[67], name, mandatory, trim, try_number, try_json, values, encoder);
  }
}

export class Url extends $sdk.GCObject {
  static readonly _type = 'io::Url';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get protocol(): string | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set protocol(v: string | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get host(): string | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set host(v: string | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get port(): bigint | number | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set port(v: bigint | number | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get path(): string | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set path(v: string | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get params(): Map<string, string> | null {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set params(v: Map<string, string> | null) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get hash(): string | null {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set hash(v: string | null) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  static create($g: $sdk.GreyCat, protocol: string | null, host: string | null, port: bigint | number | null, path: string | null, params: Map<string, string> | null, hash: string | null): Url {
    return new Url($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[68], protocol, host, port, path, params, hash);
  }
}

export class SmtpMode extends $sdk.GCEnum {
  static readonly _type = 'io::SmtpMode';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes[0], attributes[1], attributes[2]);
  }

  public static plain($g: $sdk.GreyCat): io.SmtpMode {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[69];
    return t.enum_values![t.generated_offsets[0]] as io.SmtpMode;
  }
  public static ssl_tls($g: $sdk.GreyCat): io.SmtpMode {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[69];
    return t.enum_values![t.generated_offsets[1]] as io.SmtpMode;
  }
  public static starttls($g: $sdk.GreyCat): io.SmtpMode {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[69];
    return t.enum_values![t.generated_offsets[2]] as io.SmtpMode;
  }
}

export class CsvColumnInteger extends $sdk.GCObject {
  static readonly _type = 'io::CsvColumnInteger';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get name(): string | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get mandatory(): boolean | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set mandatory(v: boolean | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, name: string | null, mandatory: boolean | null): CsvColumnInteger {
    return new CsvColumnInteger($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[70], name, mandatory);
  }
}

export class CsvColumnDate extends $sdk.GCObject {
  static readonly _type = 'io::CsvColumnDate';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get name(): string | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get mandatory(): boolean | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set mandatory(v: boolean | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get format(): string | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set format(v: string | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get tz(): core.TimeZone | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set tz(v: core.TimeZone | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get as_time(): boolean | null {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set as_time(v: boolean | null) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  static create($g: $sdk.GreyCat, name: string | null, mandatory: boolean | null, format: string | null, tz: core.TimeZone | null, as_time: boolean | null): CsvColumnDate {
    return new CsvColumnDate($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[71], name, mandatory, format, tz, as_time);
  }
}

export class Smtp extends $sdk.GCObject {
  static readonly _type = 'io::Smtp';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get host(): string {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set host(v: string) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get port(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set port(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get mode(): io.SmtpMode | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set mode(v: io.SmtpMode | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get authenticate(): io.SmtpAuth | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set authenticate(v: io.SmtpAuth | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get user(): string | null {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set user(v: string | null) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get pass(): string | null {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set pass(v: string | null) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  static create($g: $sdk.GreyCat, host: string, port: bigint | number, mode: io.SmtpMode | null, authenticate: io.SmtpAuth | null, user: string | null, pass: string | null): Smtp {
    return new Smtp($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[72], host, port, mode, authenticate, user, pass);
  }
}

export class SmtpAuth extends $sdk.GCEnum {
  static readonly _type = 'io::SmtpAuth';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes[0], attributes[1], attributes[2]);
  }

  public static none($g: $sdk.GreyCat): io.SmtpAuth {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[73];
    return t.enum_values![t.generated_offsets[0]] as io.SmtpAuth;
  }
  public static plain($g: $sdk.GreyCat): io.SmtpAuth {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[73];
    return t.enum_values![t.generated_offsets[1]] as io.SmtpAuth;
  }
  public static login($g: $sdk.GreyCat): io.SmtpAuth {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[73];
    return t.enum_values![t.generated_offsets[2]] as io.SmtpAuth;
  }
}

export class CsvColumnBoolean extends $sdk.GCObject {
  static readonly _type = 'io::CsvColumnBoolean';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get name(): string | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set name(v: string | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get mandatory(): boolean | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set mandatory(v: boolean | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, name: string | null, mandatory: boolean | null): CsvColumnBoolean {
    return new CsvColumnBoolean($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[74], name, mandatory);
  }
}

}

export namespace math {
export class MathConstants extends $sdk.GCObject {
  static readonly _type = 'math::MathConstants';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public static e($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[75];
    return  t.static_values[0] as number;
  }
  public static log_2e($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[75];
    return  t.static_values[1] as number;
  }
  public static log_10e($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[75];
    return  t.static_values[2] as number;
  }
  public static ln2($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[75];
    return  t.static_values[3] as number;
  }
  public static ln10($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[75];
    return  t.static_values[4] as number;
  }
  public static pi($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[75];
    return  t.static_values[5] as number;
  }
  public static pi_2($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[75];
    return  t.static_values[6] as number;
  }
  public static pi_4($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[75];
    return  t.static_values[7] as number;
  }
  public static m1_pi($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[75];
    return  t.static_values[8] as number;
  }
  public static m2_pi($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[75];
    return  t.static_values[9] as number;
  }
  public static m2_sqrt_pi($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[75];
    return  t.static_values[10] as number;
  }
  public static sqrt2($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[75];
    return  t.static_values[11] as number;
  }
  public static sqrt1_2($g: $sdk.GreyCat): number {
    const t = $g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[75];
    return  t.static_values[12] as number;
  }
  static create($g: $sdk.GreyCat): MathConstants {
    return new MathConstants($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[75]);
  }
}

}

export namespace util {
export class Assert extends $sdk.GCObject {
  static readonly _type = 'util::Assert';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  static create($g: $sdk.GreyCat): Assert {
    return new Assert($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[76]);
  }
}

export class ProgressTracker extends $sdk.GCObject {
  static readonly _type = 'util::ProgressTracker';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get start(): $sdk.std.core.time {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set start(v: $sdk.std.core.time) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get total(): bigint | number | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set total(v: bigint | number | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get counter(): bigint | number | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set counter(v: bigint | number | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get duration(): $sdk.std.core.duration | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set duration(v: $sdk.std.core.duration | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get progress(): number | null {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set progress(v: number | null) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get speed(): number | null {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set speed(v: number | null) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public get remaining(): $sdk.std.core.duration | null {
    return this.$attrs[this.$type.generated_offsets[6]];
  }
  public set remaining(v: $sdk.std.core.duration | null) {
    this.$attrs[this.$type.generated_offsets[6]] = v;
  }
  static create($g: $sdk.GreyCat, start: $sdk.std.core.time, total: bigint | number | null, counter: bigint | number | null, duration: $sdk.std.core.duration | null, progress: number | null, speed: number | null, remaining: $sdk.std.core.duration | null): ProgressTracker {
    return new ProgressTracker($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[77], start, total, counter, duration, progress, speed, remaining);
  }
}

export class Crypto extends $sdk.GCObject {
  static readonly _type = 'util::Crypto';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  static create($g: $sdk.GreyCat): Crypto {
    return new Crypto($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[78]);
  }
}

export class BoxPlotInt extends $sdk.GCObject {
  static readonly _type = 'util::BoxPlotInt';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get min(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set min(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get max(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set max(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get whiskerLow(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set whiskerLow(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get whiskerHigh(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set whiskerHigh(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get percentile1(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set percentile1(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get percentile5(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set percentile5(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public get percentile25(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[6]];
  }
  public set percentile25(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[6]] = v;
  }
  public get percentile50(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[7]];
  }
  public set percentile50(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[7]] = v;
  }
  public get percentile75(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[8]];
  }
  public set percentile75(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[8]] = v;
  }
  public get percentile95(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[9]];
  }
  public set percentile95(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[9]] = v;
  }
  public get percentile99(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[10]];
  }
  public set percentile99(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[10]] = v;
  }
  public get countOutliersLow(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[11]];
  }
  public set countOutliersLow(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[11]] = v;
  }
  public get countOutliersHigh(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[12]];
  }
  public set countOutliersHigh(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[12]] = v;
  }
  public get percentageOutliersLow(): number {
    return this.$attrs[this.$type.generated_offsets[13]];
  }
  public set percentageOutliersLow(v: number) {
    this.$attrs[this.$type.generated_offsets[13]] = v;
  }
  public get percentageOutliersHigh(): number {
    return this.$attrs[this.$type.generated_offsets[14]];
  }
  public set percentageOutliersHigh(v: number) {
    this.$attrs[this.$type.generated_offsets[14]] = v;
  }
  public get sum(): number {
    return this.$attrs[this.$type.generated_offsets[15]];
  }
  public set sum(v: number) {
    this.$attrs[this.$type.generated_offsets[15]] = v;
  }
  public get avg(): number {
    return this.$attrs[this.$type.generated_offsets[16]];
  }
  public set avg(v: number) {
    this.$attrs[this.$type.generated_offsets[16]] = v;
  }
  public get std(): number {
    return this.$attrs[this.$type.generated_offsets[17]];
  }
  public set std(v: number) {
    this.$attrs[this.$type.generated_offsets[17]] = v;
  }
  public get size(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[18]];
  }
  public set size(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[18]] = v;
  }
  static create($g: $sdk.GreyCat, min: bigint | number, max: bigint | number, whiskerLow: bigint | number, whiskerHigh: bigint | number, percentile1: bigint | number, percentile5: bigint | number, percentile25: bigint | number, percentile50: bigint | number, percentile75: bigint | number, percentile95: bigint | number, percentile99: bigint | number, countOutliersLow: bigint | number, countOutliersHigh: bigint | number, percentageOutliersLow: number, percentageOutliersHigh: number, sum: number, avg: number, std: number, size: bigint | number): BoxPlotInt {
    return new BoxPlotInt($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[79], min, max, whiskerLow, whiskerHigh, percentile1, percentile5, percentile25, percentile50, percentile75, percentile95, percentile99, countOutliersLow, countOutliersHigh, percentageOutliersLow, percentageOutliersHigh, sum, avg, std, size);
  }
}

export class Queue extends std_n.util.Queue {}

export class TimeWindow extends std_n.util.TimeWindow {}

export class Gaussian extends $sdk.GCObject {
  static readonly _type = 'util::Gaussian';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get sum(): number | null {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set sum(v: number | null) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get sum_sq(): number | null {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set sum_sq(v: number | null) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get count(): bigint | number | null {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set count(v: bigint | number | null) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get min(): number | null {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set min(v: number | null) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get max(): number | null {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set max(v: number | null) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  static create($g: $sdk.GreyCat, sum: number | null, sum_sq: number | null, count: bigint | number | null, min: number | null, max: number | null): Gaussian {
    return new Gaussian($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[82], sum, sum_sq, count, min, max);
  }
}

export class GaussianProfile extends std_n.util.GaussianProfile {}

export class Buffer extends std_n.util.Buffer {}

export class Quantizer extends std_n.util.Quantizer {}

export class HistogramFloat extends std_n.util.HistogramFloat {}

export class Random extends $sdk.GCObject {
  static readonly _type = 'util::Random';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get seed(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set seed(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get v(): number {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set v(v: number) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  static create($g: $sdk.GreyCat, seed: bigint | number, v: number): Random {
    return new Random($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[87], seed, v);
  }
}

export class Iban extends std_n.util.Iban {}

export class BoxPlotFloat extends $sdk.GCObject {
  static readonly _type = 'util::BoxPlotFloat';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get min(): number {
    return this.$attrs[this.$type.generated_offsets[0]];
  }
  public set min(v: number) {
    this.$attrs[this.$type.generated_offsets[0]] = v;
  }
  public get max(): number {
    return this.$attrs[this.$type.generated_offsets[1]];
  }
  public set max(v: number) {
    this.$attrs[this.$type.generated_offsets[1]] = v;
  }
  public get whiskerLow(): number {
    return this.$attrs[this.$type.generated_offsets[2]];
  }
  public set whiskerLow(v: number) {
    this.$attrs[this.$type.generated_offsets[2]] = v;
  }
  public get whiskerHigh(): number {
    return this.$attrs[this.$type.generated_offsets[3]];
  }
  public set whiskerHigh(v: number) {
    this.$attrs[this.$type.generated_offsets[3]] = v;
  }
  public get percentile1(): number {
    return this.$attrs[this.$type.generated_offsets[4]];
  }
  public set percentile1(v: number) {
    this.$attrs[this.$type.generated_offsets[4]] = v;
  }
  public get percentile5(): number {
    return this.$attrs[this.$type.generated_offsets[5]];
  }
  public set percentile5(v: number) {
    this.$attrs[this.$type.generated_offsets[5]] = v;
  }
  public get percentile25(): number {
    return this.$attrs[this.$type.generated_offsets[6]];
  }
  public set percentile25(v: number) {
    this.$attrs[this.$type.generated_offsets[6]] = v;
  }
  public get percentile50(): number {
    return this.$attrs[this.$type.generated_offsets[7]];
  }
  public set percentile50(v: number) {
    this.$attrs[this.$type.generated_offsets[7]] = v;
  }
  public get percentile75(): number {
    return this.$attrs[this.$type.generated_offsets[8]];
  }
  public set percentile75(v: number) {
    this.$attrs[this.$type.generated_offsets[8]] = v;
  }
  public get percentile95(): number {
    return this.$attrs[this.$type.generated_offsets[9]];
  }
  public set percentile95(v: number) {
    this.$attrs[this.$type.generated_offsets[9]] = v;
  }
  public get percentile99(): number {
    return this.$attrs[this.$type.generated_offsets[10]];
  }
  public set percentile99(v: number) {
    this.$attrs[this.$type.generated_offsets[10]] = v;
  }
  public get countOutliersLow(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[11]];
  }
  public set countOutliersLow(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[11]] = v;
  }
  public get countOutliersHigh(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[12]];
  }
  public set countOutliersHigh(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[12]] = v;
  }
  public get percentageOutliersLow(): number {
    return this.$attrs[this.$type.generated_offsets[13]];
  }
  public set percentageOutliersLow(v: number) {
    this.$attrs[this.$type.generated_offsets[13]] = v;
  }
  public get percentageOutliersHigh(): number {
    return this.$attrs[this.$type.generated_offsets[14]];
  }
  public set percentageOutliersHigh(v: number) {
    this.$attrs[this.$type.generated_offsets[14]] = v;
  }
  public get sum(): number {
    return this.$attrs[this.$type.generated_offsets[15]];
  }
  public set sum(v: number) {
    this.$attrs[this.$type.generated_offsets[15]] = v;
  }
  public get avg(): number {
    return this.$attrs[this.$type.generated_offsets[16]];
  }
  public set avg(v: number) {
    this.$attrs[this.$type.generated_offsets[16]] = v;
  }
  public get std(): number {
    return this.$attrs[this.$type.generated_offsets[17]];
  }
  public set std(v: number) {
    this.$attrs[this.$type.generated_offsets[17]] = v;
  }
  public get size(): bigint | number {
    return this.$attrs[this.$type.generated_offsets[18]];
  }
  public set size(v: bigint | number) {
    this.$attrs[this.$type.generated_offsets[18]] = v;
  }
  static create($g: $sdk.GreyCat, min: number, max: number, whiskerLow: number, whiskerHigh: number, percentile1: number, percentile5: number, percentile25: number, percentile50: number, percentile75: number, percentile95: number, percentile99: number, countOutliersLow: bigint | number, countOutliersHigh: bigint | number, percentageOutliersLow: number, percentageOutliersHigh: number, sum: number, avg: number, std: number, size: bigint | number): BoxPlotFloat {
    return new BoxPlotFloat($g.abi.libs_by_name.get($sdk.std.stdlib.name)!.mapped[89], min, max, whiskerLow, whiskerHigh, percentile1, percentile5, percentile25, percentile50, percentile75, percentile95, percentile99, countOutliersLow, countOutliersHigh, percentageOutliersLow, percentageOutliersHigh, sum, avg, std, size);
  }
}

export class HistogramInt extends std_n.util.HistogramInt {}

export class SlidingWindow extends std_n.util.SlidingWindow {}

}

export const stdlib: $sdk.Library = {
  name: 'std',
  mapped: [],
  configure(loaders, factories) {
    factories.set(core.Array._type, core.Array);
    loaders.set(core.Array._type, std_n.core.Array.load);
    factories.set(core.NodeTimeInfo._type, core.NodeTimeInfo);
    factories.set(core.nodeList._type, core.nodeList);
    loaders.set(core.nodeList._type, std_n.core.nodeList.load);
    factories.set(core.DatePart._type, core.DatePart);
    factories.set(core.nodeIndex._type, core.nodeIndex);
    loaders.set(core.nodeIndex._type, std_n.core.nodeIndex.load);
    factories.set(core.TimeZone._type, core.TimeZone);
    factories.set(core.TensorType._type, core.TensorType);
    factories.set(core.SamplingMode._type, core.SamplingMode);
    factories.set(core.Error._type, core.Error);
    loaders.set(core.Error._type, std_n.core.Error.load);
    factories.set(core.duration._type, core.duration);
    loaders.set(core.duration._type, std_n.core.duration.load);
    factories.set(core.Date._type, core.Date);
    loaders.set(core.Date._type, std_n.core.Date.load);
    factories.set(core.ti2d._type, core.ti2d);
    loaders.set(core.ti2d._type, std_n.core.ti2d.load);
    factories.set(core.tf3d._type, core.tf3d);
    loaders.set(core.tf3d._type, std_n.core.tf3d.load);
    factories.set(core.geo._type, core.geo);
    loaders.set(core.geo._type, std_n.core.geo.load);
    factories.set(core.GeoBox._type, core.GeoBox);
    factories.set(core.GeoPoly._type, core.GeoPoly);
    factories.set(core.nodeIndexBucket._type, core.nodeIndexBucket);
    loaders.set(core.nodeIndexBucket._type, std_n.core.nodeIndexBucket.load);
    factories.set(core.TableColumnMeta._type, core.TableColumnMeta);
    factories.set(core.GeoCircle._type, core.GeoCircle);
    factories.set(core.tf4d._type, core.tf4d);
    loaders.set(core.tf4d._type, std_n.core.tf4d.load);
    factories.set(core.ErrorCode._type, core.ErrorCode);
    factories.set(core.Tuple._type, core.Tuple);
    factories.set(core.ti6d._type, core.ti6d);
    loaders.set(core.ti6d._type, std_n.core.ti6d.load);
    factories.set(core.ti4d._type, core.ti4d);
    loaders.set(core.ti4d._type, std_n.core.ti4d.load);
    factories.set(core.time._type, core.time);
    loaders.set(core.time._type, std_n.core.time.load);
    factories.set(core.ti10d._type, core.ti10d);
    loaders.set(core.ti10d._type, std_n.core.ti10d.load);
    factories.set(core.DurationUnit._type, core.DurationUnit);
    factories.set(core.String._type, core.String);
    loaders.set(core.String._type, std_n.core.String.load);
    factories.set(core.function_._type, core.function_);
    factories.set(core.Table._type, core.Table);
    loaders.set(core.Table._type, std_n.core.Table.load);
    factories.set(core.ti3d._type, core.ti3d);
    loaders.set(core.ti3d._type, std_n.core.ti3d.load);
    factories.set(core.Tensor._type, core.Tensor);
    loaders.set(core.Tensor._type, std_n.core.Tensor.load);
    factories.set(core.node._type, core.node);
    loaders.set(core.node._type, std_n.core.node.load);
    factories.set(core.Map._type, core.Map);
    loaders.set(core.Map._type, std_n.core.Map.load);
    factories.set(core.tf2d._type, core.tf2d);
    loaders.set(core.tf2d._type, std_n.core.tf2d.load);
    factories.set(core.nodeGeo._type, core.nodeGeo);
    loaders.set(core.nodeGeo._type, std_n.core.nodeGeo.load);
    factories.set(core.nodeTime._type, core.nodeTime);
    loaders.set(core.nodeTime._type, std_n.core.nodeTime.load);
    factories.set(core.ti5d._type, core.ti5d);
    loaders.set(core.ti5d._type, std_n.core.ti5d.load);
    factories.set(runtime.UserGroupPolicyType._type, runtime.UserGroupPolicyType);
    factories.set(runtime.UserRole._type, runtime.UserRole);
    factories.set(runtime.TaskStatus._type, runtime.TaskStatus);
    factories.set(runtime.Runtime._type, runtime.Runtime);
    factories.set(runtime.User._type, runtime.User);
    factories.set(runtime.SecurityFields._type, runtime.SecurityFields);
    factories.set(runtime.UserGroupPolicy._type, runtime.UserGroupPolicy);
    factories.set(runtime.TaskInfo._type, runtime.TaskInfo);
    factories.set(runtime.PeriodicTask._type, runtime.PeriodicTask);
    factories.set(runtime.RuntimeInfo._type, runtime.RuntimeInfo);
    factories.set(runtime.System._type, runtime.System);
    factories.set(runtime.SecurityPolicy._type, runtime.SecurityPolicy);
    factories.set(runtime.License._type, runtime.License);
    factories.set(runtime.Task._type, runtime.Task);
    factories.set(runtime.UserCredential._type, runtime.UserCredential);
    factories.set(runtime.StoreStat._type, runtime.StoreStat);
    factories.set(runtime.UserGroup._type, runtime.UserGroup);
    factories.set(runtime.OpenIDConnect._type, runtime.OpenIDConnect);
    factories.set(runtime.SecurityEntity._type, runtime.SecurityEntity);
    factories.set(io.TextEncoder._type, io.TextEncoder);
    factories.set(io.CsvColumnFloat._type, io.CsvColumnFloat);
    factories.set(io.Http._type, io.Http);
    factories.set(io.CsvColumnIgnored._type, io.CsvColumnIgnored);
    factories.set(io.File._type, io.File);
    factories.set(io.HttpHeader._type, io.HttpHeader);
    factories.set(io.CsvColumn._type, io.CsvColumn);
    factories.set(io.Email._type, io.Email);
    factories.set(io.CsvColumnTime._type, io.CsvColumnTime);
    factories.set(io.CsvFormat._type, io.CsvFormat);
    factories.set(io.CsvColumnString._type, io.CsvColumnString);
    factories.set(io.Url._type, io.Url);
    factories.set(io.SmtpMode._type, io.SmtpMode);
    factories.set(io.CsvColumnInteger._type, io.CsvColumnInteger);
    factories.set(io.CsvColumnDate._type, io.CsvColumnDate);
    factories.set(io.Smtp._type, io.Smtp);
    factories.set(io.SmtpAuth._type, io.SmtpAuth);
    factories.set(io.CsvColumnBoolean._type, io.CsvColumnBoolean);
    factories.set(math.MathConstants._type, math.MathConstants);
    factories.set(util.Assert._type, util.Assert);
    factories.set(util.ProgressTracker._type, util.ProgressTracker);
    factories.set(util.Crypto._type, util.Crypto);
    factories.set(util.BoxPlotInt._type, util.BoxPlotInt);
    factories.set(util.Queue._type, util.Queue);
    loaders.set(util.Queue._type, std_n.util.Queue.load);
    factories.set(util.TimeWindow._type, util.TimeWindow);
    loaders.set(util.TimeWindow._type, std_n.util.TimeWindow.load);
    factories.set(util.Gaussian._type, util.Gaussian);
    factories.set(util.GaussianProfile._type, util.GaussianProfile);
    loaders.set(util.GaussianProfile._type, std_n.util.GaussianProfile.load);
    factories.set(util.Buffer._type, util.Buffer);
    loaders.set(util.Buffer._type, std_n.util.Buffer.load);
    factories.set(util.Quantizer._type, util.Quantizer);
    loaders.set(util.Quantizer._type, std_n.util.Quantizer.load);
    factories.set(util.HistogramFloat._type, util.HistogramFloat);
    loaders.set(util.HistogramFloat._type, std_n.util.HistogramFloat.load);
    factories.set(util.Random._type, util.Random);
    factories.set(util.Iban._type, util.Iban);
    loaders.set(util.Iban._type, std_n.util.Iban.load);
    factories.set(util.BoxPlotFloat._type, util.BoxPlotFloat);
    factories.set(util.HistogramInt._type, util.HistogramInt);
    loaders.set(util.HistogramInt._type, std_n.util.HistogramInt.load);
    factories.set(util.SlidingWindow._type, util.SlidingWindow);
    loaders.set(util.SlidingWindow._type, std_n.util.SlidingWindow.load);
  },
  init(abi) {
    this.mapped.length = 92;
    this.mapped[0] = abi.type_by_fqn.get(core.Array._type)!;
    this.mapped[1] = abi.type_by_fqn.get(core.NodeTimeInfo._type)!;
    this.mapped[1].resolveGeneratedOffsets('size','from','to');
    this.mapped[2] = abi.type_by_fqn.get(core.nodeList._type)!;
    this.mapped[3] = abi.type_by_fqn.get(core.DatePart._type)!;
    this.mapped[3].resolveGeneratedOffsetWithValues('years', 0,'months', 1,'days', 2,'hours', 3,'minutes', 4,'seconds', 5,'microseconds', 6);
    this.mapped[4] = abi.type_by_fqn.get(core.nodeIndex._type)!;
    this.mapped[5] = abi.type_by_fqn.get(core.TimeZone._type)!;
    this.mapped[5].resolveGeneratedOffsetWithValues('Africa_Accra', "AfricaAccra",'Africa_Bamako', "AfricaBamako",'Africa_Banjul', "AfricaBanjul",'Africa_Conakry', "AfricaConakry",'Africa_Dakar', "AfricaDakar",'Africa_Freetown', "AfricaFreetown",'Africa_Lome', "AfricaLome",'Africa_Nouakchott', "AfricaNouakchott",'Africa_Ouagadougou', "AfricaOuagadougou",'Africa_Timbuktu', "AfricaTimbuktu",'Atlantic_Reykjavik', "AtlanticReykjavik",'Atlantic_St_Helena', "AtlanticSt_Helena",'Iceland', "Iceland",'Egypt', "Egypt",'Africa_Maseru', "AfricaMaseru",'Africa_Mbabane', "AfricaMbabane",'Africa_Bangui', "AfricaBangui",'Africa_Brazzaville', "AfricaBrazzaville",'Africa_Douala', "AfricaDouala",'Africa_Kinshasa', "AfricaKinshasa",'Africa_Libreville', "AfricaLibreville",'Africa_Luanda', "AfricaLuanda",'Africa_Malabo', "AfricaMalabo",'Africa_Niamey', "AfricaNiamey",'Africa_Porto_Novo', "AfricaPorto-Novo",'Africa_Blantyre', "AfricaBlantyre",'Africa_Bujumbura', "AfricaBujumbura",'Africa_Gaborone', "AfricaGaborone",'Africa_Harare', "AfricaHarare",'Africa_Kigali', "AfricaKigali",'Africa_Lubumbashi', "AfricaLubumbashi",'Africa_Lusaka', "AfricaLusaka",'Africa_Addis_Ababa', "AfricaAddis_Ababa",'Africa_Asmara', "AfricaAsmara",'Africa_Asmera', "AfricaAsmera",'Africa_Dar_es_Salaam', "AfricaDar_es_Salaam",'Africa_Djibouti', "AfricaDjibouti",'Africa_Kampala', "AfricaKampala",'Africa_Mogadishu', "AfricaMogadishu",'Indian_Antananarivo', "IndianAntananarivo",'Indian_Comoro', "IndianComoro",'Indian_Mayotte', "IndianMayotte",'Libya', "Libya",'America_Atka', "AmericaAtka",'US_Aleutian', "USAleutian",'US_Alaska', "USAlaska",'America_Buenos_Aires', "AmericaBuenos_Aires",'America_Argentina_ComodRivadavia', "AmericaArgentinaComodRivadavia",'America_Catamarca', "AmericaCatamarca",'America_Cordoba', "AmericaCordoba",'America_Rosario', "AmericaRosario",'America_Jujuy', "AmericaJujuy",'America_Mendoza', "AmericaMendoza",'US_Central', "USCentral",'America_Shiprock', "AmericaShiprock",'Navajo', "Navajo",'US_Mountain', "USMountain",'US_Michigan', "USMichigan",'America_Yellowknife', "AmericaYellowknife",'Canada_Mountain', "CanadaMountain",'Canada_Atlantic', "CanadaAtlantic",'Cuba', "Cuba",'America_Fort_Wayne', "AmericaFort_Wayne",'America_Indianapolis', "AmericaIndianapolis",'US_East_Indiana', "USEast-Indiana",'America_Knox_IN', "AmericaKnox_IN",'US_Indiana_Starke', "USIndiana-Starke",'America_Pangnirtung', "AmericaPangnirtung",'Jamaica', "Jamaica",'America_Louisville', "AmericaLouisville",'US_Pacific', "USPacific",'Brazil_West', "BrazilWest",'Mexico_BajaSur', "MexicoBajaSur",'Mexico_General', "MexicoGeneral",'US_Eastern', "USEastern",'Brazil_DeNoronha', "BrazilDeNoronha",'America_Godthab', "AmericaGodthab",'America_Atikokan', "AmericaAtikokan",'America_Cayman', "AmericaCayman",'America_Coral_Harbour', "AmericaCoral_Harbour",'America_Creston', "AmericaCreston",'US_Arizona', "USArizona",'America_Anguilla', "AmericaAnguilla",'America_Antigua', "AmericaAntigua",'America_Aruba', "AmericaAruba",'America_Blanc_Sablon', "AmericaBlanc-Sablon",'America_Curacao', "AmericaCuracao",'America_Dominica', "AmericaDominica",'America_Grenada', "AmericaGrenada",'America_Guadeloupe', "AmericaGuadeloupe",'America_Kralendijk', "AmericaKralendijk",'America_Lower_Princes', "AmericaLower_Princes",'America_Marigot', "AmericaMarigot",'America_Montserrat', "AmericaMontserrat",'America_Port_of_Spain', "AmericaPort_of_Spain",'America_St_Barthelemy', "AmericaSt_Barthelemy",'America_St_Kitts', "AmericaSt_Kitts",'America_St_Lucia', "AmericaSt_Lucia",'America_St_Thomas', "AmericaSt_Thomas",'America_St_Vincent', "AmericaSt_Vincent",'America_Tortola', "AmericaTortola",'America_Virgin', "AmericaVirgin",'Canada_Saskatchewan', "CanadaSaskatchewan",'America_Porto_Acre', "AmericaPorto_Acre",'Brazil_Acre', "BrazilAcre",'Chile_Continental', "ChileContinental",'Brazil_East', "BrazilEast",'Canada_Newfoundland', "CanadaNewfoundland",'America_Ensenada', "AmericaEnsenada",'America_Santa_Isabel', "AmericaSanta_Isabel",'Mexico_BajaNorte', "MexicoBajaNorte",'America_Montreal', "AmericaMontreal",'America_Nassau', "AmericaNassau",'America_Nipigon', "AmericaNipigon",'America_Thunder_Bay', "AmericaThunder_Bay",'Canada_Eastern', "CanadaEastern",'Canada_Pacific', "CanadaPacific",'Canada_Yukon', "CanadaYukon",'America_Rainy_River', "AmericaRainy_River",'Canada_Central', "CanadaCentral",'Asia_Ashkhabad', "AsiaAshkhabad",'Asia_Phnom_Penh', "AsiaPhnom_Penh",'Asia_Vientiane', "AsiaVientiane",'Indian_Christmas', "IndianChristmas",'Asia_Dacca', "AsiaDacca",'Asia_Muscat', "AsiaMuscat",'Indian_Mahe', "IndianMahe",'Indian_Reunion', "IndianReunion",'Asia_Saigon', "AsiaSaigon",'Hongkong', "Hongkong",'Asia_Tel_Aviv', "AsiaTel_Aviv",'Israel', "Israel",'Asia_Katmandu', "AsiaKatmandu",'Asia_Calcutta', "AsiaCalcutta",'Asia_Brunei', "AsiaBrunei",'Asia_Macao', "AsiaMacao",'Asia_Ujung_Pandang', "AsiaUjung_Pandang",'Europe_Nicosia', "EuropeNicosia",'Asia_Bahrain', "AsiaBahrain",'Antarctica_Syowa', "AntarcticaSyowa",'Asia_Aden', "AsiaAden",'Asia_Kuwait', "AsiaKuwait",'ROK', "ROK",'Asia_Chongqing', "AsiaChongqing",'Asia_Chungking', "AsiaChungking",'Asia_Harbin', "AsiaHarbin",'PRC', "PRC",'Asia_Kuala_Lumpur', "AsiaKuala_Lumpur",'Singapore', "Singapore",'ROC', "ROC",'Iran', "Iran",'Asia_Thimbu', "AsiaThimbu",'Japan', "Japan",'Asia_Ulan_Bator', "AsiaUlan_Bator",'Antarctica_Vostok', "AntarcticaVostok",'Asia_Kashgar', "AsiaKashgar",'Asia_Rangoon', "AsiaRangoon",'Indian_Cocos', "IndianCocos",'Atlantic_Faeroe', "AtlanticFaeroe",'Australia_South', "AustraliaSouth",'Australia_Queensland', "AustraliaQueensland",'Australia_Yancowinna', "AustraliaYancowinna",'Australia_North', "AustraliaNorth",'Australia_Currie', "AustraliaCurrie",'Australia_Tasmania', "AustraliaTasmania",'Australia_LHI', "AustraliaLHI",'Australia_Victoria', "AustraliaVictoria",'Australia_West', "AustraliaWest",'Australia_ACT', "AustraliaACT",'Australia_Canberra', "AustraliaCanberra",'Australia_NSW', "AustraliaNSW",'GMT', "GMT",'GMTx0', "GMT+0",'GMT_0', "GMT-0",'GMT0', "GMT0",'Greenwich', "Greenwich",'UCT', "UCT",'UTC', "UTC",'Universal', "Universal",'Zulu', "Zulu",'Europe_Ljubljana', "EuropeLjubljana",'Europe_Podgorica', "EuropePodgorica",'Europe_Sarajevo', "EuropeSarajevo",'Europe_Skopje', "EuropeSkopje",'Europe_Zagreb', "EuropeZagreb",'Arctic_Longyearbyen', "ArcticLongyearbyen",'Atlantic_Jan_Mayen', "AtlanticJan_Mayen",'Europe_Copenhagen', "EuropeCopenhagen",'Europe_Oslo', "EuropeOslo",'Europe_Stockholm', "EuropeStockholm",'Europe_Amsterdam', "EuropeAmsterdam",'Europe_Luxembourg', "EuropeLuxembourg",'Europe_Tiraspol', "EuropeTiraspol",'Eire', "Eire",'Europe_Mariehamn', "EuropeMariehamn",'Asia_Istanbul', "AsiaIstanbul",'Turkey', "Turkey",'Europe_Kiev', "EuropeKiev",'Europe_Uzhgorod', "EuropeUzhgorod",'Europe_Zaporozhye', "EuropeZaporozhye",'Portugal', "Portugal",'Europe_Belfast', "EuropeBelfast",'Europe_Guernsey', "EuropeGuernsey",'Europe_Isle_of_Man', "EuropeIsle_of_Man",'Europe_Jersey', "EuropeJersey",'GB', "GB",'GB_Eire', "GB-Eire",'W_SU', "W-SU",'Europe_Monaco', "EuropeMonaco",'Europe_Bratislava', "EuropeBratislava",'Europe_San_Marino', "EuropeSan_Marino",'Europe_Vatican', "EuropeVatican",'Poland', "Poland",'Europe_Busingen', "EuropeBusingen",'Europe_Vaduz', "EuropeVaduz",'Indian_Kerguelen', "IndianKerguelen",'Antarctica_McMurdo', "AntarcticaMcMurdo",'Antarctica_South_Pole', "AntarcticaSouth_Pole",'NZ', "NZ",'NZ_CHAT', "NZ-CHAT",'Chile_EasterIsland', "ChileEasterIsland",'Pacific_Pohnpei', "PacificPohnpei",'Pacific_Ponape', "PacificPonape",'Pacific_Saipan', "PacificSaipan",'Pacific_Johnston', "PacificJohnston",'US_Hawaii', "USHawaii",'Pacific_Enderbury', "PacificEnderbury",'Kwajalein', "Kwajalein",'Pacific_Midway', "PacificMidway",'Pacific_Samoa', "PacificSamoa",'US_Samoa', "USSamoa",'Antarctica_DumontDUrville', "AntarcticaDumontDUrville",'Pacific_Chuuk', "PacificChuuk",'Pacific_Truk', "PacificTruk",'Pacific_Yap', "PacificYap",'Pacific_Funafuti', "PacificFunafuti",'Pacific_Majuro', "PacificMajuro",'Pacific_Wake', "PacificWake",'Pacific_Wallis', "PacificWallis",'Africa_Abidjan', "AfricaAbidjan",'Africa_Algiers', "AfricaAlgiers",'Africa_Bissau', "AfricaBissau",'Africa_Cairo', "AfricaCairo",'Africa_Casablanca', "AfricaCasablanca",'Africa_Ceuta', "AfricaCeuta",'Africa_El_Aaiun', "AfricaEl_Aaiun",'Africa_Johannesburg', "AfricaJohannesburg",'Africa_Juba', "AfricaJuba",'Africa_Khartoum', "AfricaKhartoum",'Africa_Lagos', "AfricaLagos",'Africa_Maputo', "AfricaMaputo",'Africa_Monrovia', "AfricaMonrovia",'Africa_Nairobi', "AfricaNairobi",'Africa_Ndjamena', "AfricaNdjamena",'Africa_Sao_Tome', "AfricaSao_Tome",'Africa_Tripoli', "AfricaTripoli",'Africa_Tunis', "AfricaTunis",'Africa_Windhoek', "AfricaWindhoek",'America_Adak', "AmericaAdak",'America_Anchorage', "AmericaAnchorage",'America_Araguaina', "AmericaAraguaina",'America_Argentina_Buenos_Aires', "AmericaArgentinaBuenos_Aires",'America_Argentina_Catamarca', "AmericaArgentinaCatamarca",'America_Argentina_Cordoba', "AmericaArgentinaCordoba",'America_Argentina_Jujuy', "AmericaArgentinaJujuy",'America_Argentina_La_Rioja', "AmericaArgentinaLa_Rioja",'America_Argentina_Mendoza', "AmericaArgentinaMendoza",'America_Argentina_Rio_Gallegos', "AmericaArgentinaRio_Gallegos",'America_Argentina_Salta', "AmericaArgentinaSalta",'America_Argentina_San_Juan', "AmericaArgentinaSan_Juan",'America_Argentina_San_Luis', "AmericaArgentinaSan_Luis",'America_Argentina_Tucuman', "AmericaArgentinaTucuman",'America_Argentina_Ushuaia', "AmericaArgentinaUshuaia",'America_Asuncion', "AmericaAsuncion",'America_Bahia', "AmericaBahia",'America_Bahia_Banderas', "AmericaBahia_Banderas",'America_Barbados', "AmericaBarbados",'America_Belem', "AmericaBelem",'America_Belize', "AmericaBelize",'America_Boa_Vista', "AmericaBoa_Vista",'America_Bogota', "AmericaBogota",'America_Boise', "AmericaBoise",'America_Cambridge_Bay', "AmericaCambridge_Bay",'America_Campo_Grande', "AmericaCampo_Grande",'America_Cancun', "AmericaCancun",'America_Caracas', "AmericaCaracas",'America_Cayenne', "AmericaCayenne",'America_Chicago', "AmericaChicago",'America_Chihuahua', "AmericaChihuahua",'America_Ciudad_Juarez', "AmericaCiudad_Juarez",'America_Costa_Rica', "AmericaCosta_Rica",'America_Cuiaba', "AmericaCuiaba",'America_Danmarkshavn', "AmericaDanmarkshavn",'America_Dawson', "AmericaDawson",'America_Dawson_Creek', "AmericaDawson_Creek",'America_Denver', "AmericaDenver",'America_Detroit', "AmericaDetroit",'America_Edmonton', "AmericaEdmonton",'America_Eirunepe', "AmericaEirunepe",'America_El_Salvador', "AmericaEl_Salvador",'America_Fort_Nelson', "AmericaFort_Nelson",'America_Fortaleza', "AmericaFortaleza",'America_Glace_Bay', "AmericaGlace_Bay",'America_Goose_Bay', "AmericaGoose_Bay",'America_Grand_Turk', "AmericaGrand_Turk",'America_Guatemala', "AmericaGuatemala",'America_Guayaquil', "AmericaGuayaquil",'America_Guyana', "AmericaGuyana",'America_Halifax', "AmericaHalifax",'America_Havana', "AmericaHavana",'America_Hermosillo', "AmericaHermosillo",'America_Indiana_Indianapolis', "AmericaIndianaIndianapolis",'America_Indiana_Knox', "AmericaIndianaKnox",'America_Indiana_Marengo', "AmericaIndianaMarengo",'America_Indiana_Petersburg', "AmericaIndianaPetersburg",'America_Indiana_Tell_City', "AmericaIndianaTell_City",'America_Indiana_Vevay', "AmericaIndianaVevay",'America_Indiana_Vincennes', "AmericaIndianaVincennes",'America_Indiana_Winamac', "AmericaIndianaWinamac",'America_Inuvik', "AmericaInuvik",'America_Iqaluit', "AmericaIqaluit",'America_Jamaica', "AmericaJamaica",'America_Juneau', "AmericaJuneau",'America_Kentucky_Louisville', "AmericaKentuckyLouisville",'America_Kentucky_Monticello', "AmericaKentuckyMonticello",'America_La_Paz', "AmericaLa_Paz",'America_Lima', "AmericaLima",'America_Los_Angeles', "AmericaLos_Angeles",'America_Maceio', "AmericaMaceio",'America_Managua', "AmericaManagua",'America_Manaus', "AmericaManaus",'America_Martinique', "AmericaMartinique",'America_Matamoros', "AmericaMatamoros",'America_Mazatlan', "AmericaMazatlan",'America_Menominee', "AmericaMenominee",'America_Merida', "AmericaMerida",'America_Metlakatla', "AmericaMetlakatla",'America_Mexico_City', "AmericaMexico_City",'America_Miquelon', "AmericaMiquelon",'America_Moncton', "AmericaMoncton",'America_Monterrey', "AmericaMonterrey",'America_Montevideo', "AmericaMontevideo",'America_New_York', "AmericaNew_York",'America_Nome', "AmericaNome",'America_Noronha', "AmericaNoronha",'America_North_Dakota_Beulah', "AmericaNorth_DakotaBeulah",'America_North_Dakota_Center', "AmericaNorth_DakotaCenter",'America_North_Dakota_New_Salem', "AmericaNorth_DakotaNew_Salem",'America_Nuuk', "AmericaNuuk",'America_Ojinaga', "AmericaOjinaga",'America_Panama', "AmericaPanama",'America_Paramaribo', "AmericaParamaribo",'America_Phoenix', "AmericaPhoenix",'America_Port_au_Prince', "AmericaPort-au-Prince",'America_Porto_Velho', "AmericaPorto_Velho",'America_Puerto_Rico', "AmericaPuerto_Rico",'America_Punta_Arenas', "AmericaPunta_Arenas",'America_Rankin_Inlet', "AmericaRankin_Inlet",'America_Recife', "AmericaRecife",'America_Regina', "AmericaRegina",'America_Resolute', "AmericaResolute",'America_Rio_Branco', "AmericaRio_Branco",'America_Santarem', "AmericaSantarem",'America_Santiago', "AmericaSantiago",'America_Santo_Domingo', "AmericaSanto_Domingo",'America_Sao_Paulo', "AmericaSao_Paulo",'America_Scoresbysund', "AmericaScoresbysund",'America_Sitka', "AmericaSitka",'America_St_Johns', "AmericaSt_Johns",'America_Swift_Current', "AmericaSwift_Current",'America_Tegucigalpa', "AmericaTegucigalpa",'America_Thule', "AmericaThule",'America_Tijuana', "AmericaTijuana",'America_Toronto', "AmericaToronto",'America_Vancouver', "AmericaVancouver",'America_Whitehorse', "AmericaWhitehorse",'America_Winnipeg', "AmericaWinnipeg",'America_Yakutat', "AmericaYakutat",'Antarctica_Casey', "AntarcticaCasey",'Antarctica_Davis', "AntarcticaDavis",'Antarctica_Macquarie', "AntarcticaMacquarie",'Antarctica_Mawson', "AntarcticaMawson",'Antarctica_Palmer', "AntarcticaPalmer",'Antarctica_Rothera', "AntarcticaRothera",'Antarctica_Troll', "AntarcticaTroll",'Asia_Almaty', "AsiaAlmaty",'Asia_Amman', "AsiaAmman",'Asia_Anadyr', "AsiaAnadyr",'Asia_Aqtau', "AsiaAqtau",'Asia_Aqtobe', "AsiaAqtobe",'Asia_Ashgabat', "AsiaAshgabat",'Asia_Atyrau', "AsiaAtyrau",'Asia_Baghdad', "AsiaBaghdad",'Asia_Baku', "AsiaBaku",'Asia_Bangkok', "AsiaBangkok",'Asia_Barnaul', "AsiaBarnaul",'Asia_Beirut', "AsiaBeirut",'Asia_Bishkek', "AsiaBishkek",'Asia_Chita', "AsiaChita",'Asia_Choibalsan', "AsiaChoibalsan",'Asia_Colombo', "AsiaColombo",'Asia_Damascus', "AsiaDamascus",'Asia_Dhaka', "AsiaDhaka",'Asia_Dili', "AsiaDili",'Asia_Dubai', "AsiaDubai",'Asia_Dushanbe', "AsiaDushanbe",'Asia_Famagusta', "AsiaFamagusta",'Asia_Gaza', "AsiaGaza",'Asia_Hebron', "AsiaHebron",'Asia_Ho_Chi_Minh', "AsiaHo_Chi_Minh",'Asia_Hong_Kong', "AsiaHong_Kong",'Asia_Hovd', "AsiaHovd",'Asia_Irkutsk', "AsiaIrkutsk",'Asia_Jakarta', "AsiaJakarta",'Asia_Jayapura', "AsiaJayapura",'Asia_Jerusalem', "AsiaJerusalem",'Asia_Kabul', "AsiaKabul",'Asia_Kamchatka', "AsiaKamchatka",'Asia_Karachi', "AsiaKarachi",'Asia_Kathmandu', "AsiaKathmandu",'Asia_Khandyga', "AsiaKhandyga",'Asia_Kolkata', "AsiaKolkata",'Asia_Krasnoyarsk', "AsiaKrasnoyarsk",'Asia_Kuching', "AsiaKuching",'Asia_Macau', "AsiaMacau",'Asia_Magadan', "AsiaMagadan",'Asia_Makassar', "AsiaMakassar",'Asia_Manila', "AsiaManila",'Asia_Nicosia', "AsiaNicosia",'Asia_Novokuznetsk', "AsiaNovokuznetsk",'Asia_Novosibirsk', "AsiaNovosibirsk",'Asia_Omsk', "AsiaOmsk",'Asia_Oral', "AsiaOral",'Asia_Pontianak', "AsiaPontianak",'Asia_Pyongyang', "AsiaPyongyang",'Asia_Qatar', "AsiaQatar",'Asia_Qostanay', "AsiaQostanay",'Asia_Qyzylorda', "AsiaQyzylorda",'Asia_Riyadh', "AsiaRiyadh",'Asia_Sakhalin', "AsiaSakhalin",'Asia_Samarkand', "AsiaSamarkand",'Asia_Seoul', "AsiaSeoul",'Asia_Shanghai', "AsiaShanghai",'Asia_Singapore', "AsiaSingapore",'Asia_Srednekolymsk', "AsiaSrednekolymsk",'Asia_Taipei', "AsiaTaipei",'Asia_Tashkent', "AsiaTashkent",'Asia_Tbilisi', "AsiaTbilisi",'Asia_Tehran', "AsiaTehran",'Asia_Thimphu', "AsiaThimphu",'Asia_Tokyo', "AsiaTokyo",'Asia_Tomsk', "AsiaTomsk",'Asia_Ulaanbaatar', "AsiaUlaanbaatar",'Asia_Urumqi', "AsiaUrumqi",'Asia_Ust_Nera', "AsiaUst-Nera",'Asia_Vladivostok', "AsiaVladivostok",'Asia_Yakutsk', "AsiaYakutsk",'Asia_Yangon', "AsiaYangon",'Asia_Yekaterinburg', "AsiaYekaterinburg",'Asia_Yerevan', "AsiaYerevan",'Atlantic_Azores', "AtlanticAzores",'Atlantic_Bermuda', "AtlanticBermuda",'Atlantic_Canary', "AtlanticCanary",'Atlantic_Cape_Verde', "AtlanticCape_Verde",'Atlantic_Faroe', "AtlanticFaroe",'Atlantic_Madeira', "AtlanticMadeira",'Atlantic_South_Georgia', "AtlanticSouth_Georgia",'Atlantic_Stanley', "AtlanticStanley",'Australia_Adelaide', "AustraliaAdelaide",'Australia_Brisbane', "AustraliaBrisbane",'Australia_Broken_Hill', "AustraliaBroken_Hill",'Australia_Darwin', "AustraliaDarwin",'Australia_Eucla', "AustraliaEucla",'Australia_Hobart', "AustraliaHobart",'Australia_Lindeman', "AustraliaLindeman",'Australia_Lord_Howe', "AustraliaLord_Howe",'Australia_Melbourne', "AustraliaMelbourne",'Australia_Perth', "AustraliaPerth",'Australia_Sydney', "AustraliaSydney",'CET', "CET",'CST6CDT', "CST6CDT",'EET', "EET",'EST', "EST",'EST5EDT', "EST5EDT",'Europe_Andorra', "EuropeAndorra",'Europe_Astrakhan', "EuropeAstrakhan",'Europe_Athens', "EuropeAthens",'Europe_Belgrade', "EuropeBelgrade",'Europe_Berlin', "EuropeBerlin",'Europe_Brussels', "EuropeBrussels",'Europe_Bucharest', "EuropeBucharest",'Europe_Budapest', "EuropeBudapest",'Europe_Chisinau', "EuropeChisinau",'Europe_Dublin', "EuropeDublin",'Europe_Gibraltar', "EuropeGibraltar",'Europe_Helsinki', "EuropeHelsinki",'Europe_Istanbul', "EuropeIstanbul",'Europe_Kaliningrad', "EuropeKaliningrad",'Europe_Kirov', "EuropeKirov",'Europe_Kyiv', "EuropeKyiv",'Europe_Lisbon', "EuropeLisbon",'Europe_London', "EuropeLondon",'Europe_Madrid', "EuropeMadrid",'Europe_Malta', "EuropeMalta",'Europe_Minsk', "EuropeMinsk",'Europe_Moscow', "EuropeMoscow",'Europe_Paris', "EuropeParis",'Europe_Prague', "EuropePrague",'Europe_Riga', "EuropeRiga",'Europe_Rome', "EuropeRome",'Europe_Samara', "EuropeSamara",'Europe_Saratov', "EuropeSaratov",'Europe_Simferopol', "EuropeSimferopol",'Europe_Sofia', "EuropeSofia",'Europe_Tallinn', "EuropeTallinn",'Europe_Tirane', "EuropeTirane",'Europe_Ulyanovsk', "EuropeUlyanovsk",'Europe_Vienna', "EuropeVienna",'Europe_Vilnius', "EuropeVilnius",'Europe_Volgograd', "EuropeVolgograd",'Europe_Warsaw', "EuropeWarsaw",'Europe_Zurich', "EuropeZurich",'Factory', "Factory",'HST', "HST",'Indian_Chagos', "IndianChagos",'Indian_Maldives', "IndianMaldives",'Indian_Mauritius', "IndianMauritius",'MET', "MET",'MST', "MST",'MST7MDT', "MST7MDT",'PST8PDT', "PST8PDT",'Pacific_Apia', "PacificApia",'Pacific_Auckland', "PacificAuckland",'Pacific_Bougainville', "PacificBougainville",'Pacific_Chatham', "PacificChatham",'Pacific_Easter', "PacificEaster",'Pacific_Efate', "PacificEfate",'Pacific_Fakaofo', "PacificFakaofo",'Pacific_Fiji', "PacificFiji",'Pacific_Galapagos', "PacificGalapagos",'Pacific_Gambier', "PacificGambier",'Pacific_Guadalcanal', "PacificGuadalcanal",'Pacific_Guam', "PacificGuam",'Pacific_Honolulu', "PacificHonolulu",'Pacific_Kanton', "PacificKanton",'Pacific_Kiritimati', "PacificKiritimati",'Pacific_Kosrae', "PacificKosrae",'Pacific_Kwajalein', "PacificKwajalein",'Pacific_Marquesas', "PacificMarquesas",'Pacific_Nauru', "PacificNauru",'Pacific_Niue', "PacificNiue",'Pacific_Norfolk', "PacificNorfolk",'Pacific_Noumea', "PacificNoumea",'Pacific_Pago_Pago', "PacificPago_Pago",'Pacific_Palau', "PacificPalau",'Pacific_Pitcairn', "PacificPitcairn",'Pacific_Port_Moresby', "PacificPort_Moresby",'Pacific_Rarotonga', "PacificRarotonga",'Pacific_Tahiti', "PacificTahiti",'Pacific_Tarawa', "PacificTarawa",'Pacific_Tongatapu', "PacificTongatapu",'WET', "WET");
    this.mapped[6] = abi.type_by_fqn.get(core.TensorType._type)!;
    this.mapped[6].resolveGeneratedOffsetWithValues('i32', 4,'i64', 8,'f32', 4,'f64', 8,'c64', 8,'c128', 16);
    this.mapped[7] = abi.type_by_fqn.get(core.SamplingMode._type)!;
    this.mapped[7].resolveGeneratedOffsetWithValues('fixed', 0,'fixed_reg', 1,'adaptative', 2,'dense', 3);
    this.mapped[8] = abi.type_by_fqn.get(core.Error._type)!;
    this.mapped[9] = abi.type_by_fqn.get(core.duration._type)!;
    this.mapped[10] = abi.type_by_fqn.get(core.Date._type)!;
    this.mapped[11] = abi.type_by_fqn.get(core.ti2d._type)!;
    this.mapped[12] = abi.type_by_fqn.get(core.tf3d._type)!;
    this.mapped[13] = abi.type_by_fqn.get(core.geo._type)!;
    this.mapped[13].static_values = [abi.createGeo(-85.0511287602,-179.9999999581),abi.createGeo(85.0511287602,179.9999999581)];
    this.mapped[14] = abi.type_by_fqn.get(core.GeoBox._type)!;
    this.mapped[14].resolveGeneratedOffsets('sw','ne');
    this.mapped[15] = abi.type_by_fqn.get(core.GeoPoly._type)!;
    this.mapped[15].resolveGeneratedOffsets('points');
    this.mapped[16] = abi.type_by_fqn.get(core.nodeIndexBucket._type)!;
    this.mapped[17] = abi.type_by_fqn.get(core.TableColumnMeta._type)!;
    this.mapped[17].resolveGeneratedOffsets('type','size','index','min','max','avg','std');
    this.mapped[18] = abi.type_by_fqn.get(core.GeoCircle._type)!;
    this.mapped[18].resolveGeneratedOffsets('center','radius');
    this.mapped[19] = abi.type_by_fqn.get(core.tf4d._type)!;
    this.mapped[20] = abi.type_by_fqn.get(core.ErrorCode._type)!;
    this.mapped[20].resolveGeneratedOffsetWithValues('none', 0,'too_deep_workspace', 1,'too_deep_iterator', 2,'wrong_operand', 3,'wrong_params', 4,'wrong_param_type', 5,'wrong_numeric', 6,'wrong_state', 7,'wrong_null', 8,'unresolved_ref', 9,'assign_error', 10,'interrupted', 11,'throw', 12,'wrong_type', 13,'wrong_dimension', 14,'unsupported_operation', 15,'unsupported_type', 16,'dimensions_mismatch', 17,'timeout', 18,'forbidden', 19,'runtime_error', 20);
    this.mapped[21] = abi.type_by_fqn.get(core.Tuple._type)!;
    this.mapped[21].resolveGeneratedOffsets('x','y');
    this.mapped[22] = abi.type_by_fqn.get(core.ti6d._type)!;
    this.mapped[23] = abi.type_by_fqn.get(core.ti4d._type)!;
    this.mapped[24] = abi.type_by_fqn.get(core.time._type)!;
    this.mapped[24].static_values = [abi.createTime(-9223372036854775808n),abi.createTime(9223372036854775807n)];
    this.mapped[25] = abi.type_by_fqn.get(core.ti10d._type)!;
    this.mapped[26] = abi.type_by_fqn.get(core.DurationUnit._type)!;
    this.mapped[26].resolveGeneratedOffsetWithValues('microseconds', 1,'milliseconds', 1000,'seconds', 1000000,'minutes', 60000000,'hours', 3600000000,'days', 86400000000,'weeks', 604800000000,'months', 2628000000000,'years', 31536000000000);
    this.mapped[27] = abi.type_by_fqn.get(core.String._type)!;
    this.mapped[28] = abi.type_by_fqn.get(core.function_._type)!;
    this.mapped[29] = abi.type_by_fqn.get(core.Table._type)!;
    this.mapped[30] = abi.type_by_fqn.get(core.ti3d._type)!;
    this.mapped[31] = abi.type_by_fqn.get(core.Tensor._type)!;
    this.mapped[32] = abi.type_by_fqn.get(core.node._type)!;
    this.mapped[33] = abi.type_by_fqn.get(core.Map._type)!;
    this.mapped[34] = abi.type_by_fqn.get(core.tf2d._type)!;
    this.mapped[35] = abi.type_by_fqn.get(core.nodeGeo._type)!;
    this.mapped[36] = abi.type_by_fqn.get(core.nodeTime._type)!;
    this.mapped[37] = abi.type_by_fqn.get(core.ti5d._type)!;
    this.mapped[38] = abi.type_by_fqn.get(runtime.UserGroupPolicyType._type)!;
    this.mapped[38].resolveGeneratedOffsetWithValues('read', 0,'write', 1,'execute', 2);
    this.mapped[39] = abi.type_by_fqn.get(runtime.UserRole._type)!;
    this.mapped[39].resolveGeneratedOffsets('name','permissions');
    this.mapped[40] = abi.type_by_fqn.get(runtime.TaskStatus._type)!;
    this.mapped[40].resolveGeneratedOffsetWithValues('empty', 0,'waiting', 1,'running', 2,'cancelled', 3,'error', 4,'ended', 5);
    this.mapped[41] = abi.type_by_fqn.get(runtime.Runtime._type)!;
    this.mapped[42] = abi.type_by_fqn.get(runtime.User._type)!;
    this.mapped[42].resolveGeneratedOffsets('id','name','activated','full_name','email','role','permissions_flags','groups','groups_flags','external');
    this.mapped[43] = abi.type_by_fqn.get(runtime.SecurityFields._type)!;
    this.mapped[43].resolveGeneratedOffsets('email','name','first_name','last_name','roles','groups');
    this.mapped[44] = abi.type_by_fqn.get(runtime.UserGroupPolicy._type)!;
    this.mapped[44].resolveGeneratedOffsets('group_id','type');
    this.mapped[45] = abi.type_by_fqn.get(runtime.TaskInfo._type)!;
    this.mapped[45].resolveGeneratedOffsets('user_id','task_id','mod','type','fun','creation','status','start','progress','remaining','duration','sub_waiting','sub_tasks_all');
    this.mapped[46] = abi.type_by_fqn.get(runtime.PeriodicTask._type)!;
    this.mapped[46].resolveGeneratedOffsets('name','user_id','args','start','every');
    this.mapped[47] = abi.type_by_fqn.get(runtime.RuntimeInfo._type)!;
    this.mapped[47].resolveGeneratedOffsets('version','arch','timezone','license','io_threads','bg_threads','fg_threads','mem_total','mem_worker','nb_ctx','store_stats');
    this.mapped[48] = abi.type_by_fqn.get(runtime.System._type)!;
    this.mapped[49] = abi.type_by_fqn.get(runtime.SecurityPolicy._type)!;
    this.mapped[49].resolveGeneratedOffsets('entities','credentials','roles','fields');
    this.mapped[50] = abi.type_by_fqn.get(runtime.License._type)!;
    this.mapped[50].resolveGeneratedOffsets('name','start','end','company','max_workers','max_memory','extra_1','extra_2','extra_3','extra_4');
    this.mapped[51] = abi.type_by_fqn.get(runtime.Task._type)!;
    this.mapped[51].resolveGeneratedOffsets('user_id','task_id','mod','type','fun','creation','status');
    this.mapped[52] = abi.type_by_fqn.get(runtime.UserCredential._type)!;
    this.mapped[52].resolveGeneratedOffsets('offset','pass');
    this.mapped[53] = abi.type_by_fqn.get(runtime.StoreStat._type)!;
    this.mapped[53].resolveGeneratedOffsets('capacity_bytes','allocated_bytes','allocated_ratio','remained_bytes','remained_ratio','used_bytes','used_ratio','available_bytes','available_ratio');
    this.mapped[54] = abi.type_by_fqn.get(runtime.UserGroup._type)!;
    this.mapped[54].resolveGeneratedOffsets('id','name','activated');
    this.mapped[55] = abi.type_by_fqn.get(runtime.OpenIDConnect._type)!;
    this.mapped[55].resolveGeneratedOffsets('url','clientId');
    this.mapped[56] = abi.type_by_fqn.get(runtime.SecurityEntity._type)!;
    this.mapped[56].resolveGeneratedOffsets('id','name','activated');
    this.mapped[57] = abi.type_by_fqn.get(io.TextEncoder._type)!;
    this.mapped[57].resolveGeneratedOffsetWithValues('plain', null,'base64', null,'base64url', null,'hexadecimal', null);
    this.mapped[58] = abi.type_by_fqn.get(io.CsvColumnFloat._type)!;
    this.mapped[58].resolveGeneratedOffsets('name','mandatory');
    this.mapped[59] = abi.type_by_fqn.get(io.Http._type)!;
    this.mapped[60] = abi.type_by_fqn.get(io.CsvColumnIgnored._type)!;
    this.mapped[60].resolveGeneratedOffsets('name','mandatory');
    this.mapped[61] = abi.type_by_fqn.get(io.File._type)!;
    this.mapped[61].resolveGeneratedOffsets('path','size','last_modification');
    this.mapped[62] = abi.type_by_fqn.get(io.HttpHeader._type)!;
    this.mapped[62].resolveGeneratedOffsets('name','value');
    this.mapped[63] = abi.type_by_fqn.get(io.CsvColumn._type)!;
    this.mapped[63].resolveGeneratedOffsets('name','mandatory');
    this.mapped[64] = abi.type_by_fqn.get(io.Email._type)!;
    this.mapped[64].resolveGeneratedOffsets('from','subject','body','body_is_html','to','cc','bcc');
    this.mapped[65] = abi.type_by_fqn.get(io.CsvColumnTime._type)!;
    this.mapped[65].resolveGeneratedOffsets('name','mandatory','unit');
    this.mapped[66] = abi.type_by_fqn.get(io.CsvFormat._type)!;
    this.mapped[66].resolveGeneratedOffsets('header_lines','infer','separator','string_delimiter','decimal_separator','thousands_separator','columns');
    this.mapped[67] = abi.type_by_fqn.get(io.CsvColumnString._type)!;
    this.mapped[67].resolveGeneratedOffsets('name','mandatory','trim','try_number','try_json','values','encoder');
    this.mapped[68] = abi.type_by_fqn.get(io.Url._type)!;
    this.mapped[68].resolveGeneratedOffsets('protocol','host','port','path','params','hash');
    this.mapped[69] = abi.type_by_fqn.get(io.SmtpMode._type)!;
    this.mapped[69].resolveGeneratedOffsetWithValues('plain', 0,'ssl_tls', 1,'starttls', 2);
    this.mapped[70] = abi.type_by_fqn.get(io.CsvColumnInteger._type)!;
    this.mapped[70].resolveGeneratedOffsets('name','mandatory');
    this.mapped[71] = abi.type_by_fqn.get(io.CsvColumnDate._type)!;
    this.mapped[71].resolveGeneratedOffsets('name','mandatory','format','tz','as_time');
    this.mapped[72] = abi.type_by_fqn.get(io.Smtp._type)!;
    this.mapped[72].resolveGeneratedOffsets('host','port','mode','authenticate','user','pass');
    this.mapped[73] = abi.type_by_fqn.get(io.SmtpAuth._type)!;
    this.mapped[73].resolveGeneratedOffsetWithValues('none', 0,'plain', 1,'login', 2);
    this.mapped[74] = abi.type_by_fqn.get(io.CsvColumnBoolean._type)!;
    this.mapped[74].resolveGeneratedOffsets('name','mandatory');
    this.mapped[75] = abi.type_by_fqn.get(math.MathConstants._type)!;
    this.mapped[75].static_values = [2.7182818285,1.4426950409,0.4342944819,0.6931471806,2.302585093,3.1415926536,1.5707963268,0.7853981634,0.3183098862,0.6366197724,1.1283791671,1.4142135624,0.7071067812];
    this.mapped[76] = abi.type_by_fqn.get(util.Assert._type)!;
    this.mapped[77] = abi.type_by_fqn.get(util.ProgressTracker._type)!;
    this.mapped[77].resolveGeneratedOffsets('start','total','counter','duration','progress','speed','remaining');
    this.mapped[78] = abi.type_by_fqn.get(util.Crypto._type)!;
    this.mapped[79] = abi.type_by_fqn.get(util.BoxPlotInt._type)!;
    this.mapped[79].resolveGeneratedOffsets('min','max','whiskerLow','whiskerHigh','percentile1','percentile5','percentile25','percentile50','percentile75','percentile95','percentile99','countOutliersLow','countOutliersHigh','percentageOutliersLow','percentageOutliersHigh','sum','avg','std','size');
    this.mapped[80] = abi.type_by_fqn.get(util.Queue._type)!;
    this.mapped[81] = abi.type_by_fqn.get(util.TimeWindow._type)!;
    this.mapped[82] = abi.type_by_fqn.get(util.Gaussian._type)!;
    this.mapped[82].resolveGeneratedOffsets('sum','sum_sq','count','min','max');
    this.mapped[83] = abi.type_by_fqn.get(util.GaussianProfile._type)!;
    this.mapped[83].static_values = [0,1,2,3,4,5,6];
    this.mapped[84] = abi.type_by_fqn.get(util.Buffer._type)!;
    this.mapped[85] = abi.type_by_fqn.get(util.Quantizer._type)!;
    this.mapped[86] = abi.type_by_fqn.get(util.HistogramFloat._type)!;
    this.mapped[86].static_values = [0,1,2,3];
    this.mapped[87] = abi.type_by_fqn.get(util.Random._type)!;
    this.mapped[87].resolveGeneratedOffsets('seed','v');
    this.mapped[88] = abi.type_by_fqn.get(util.Iban._type)!;
    this.mapped[89] = abi.type_by_fqn.get(util.BoxPlotFloat._type)!;
    this.mapped[89].resolveGeneratedOffsets('min','max','whiskerLow','whiskerHigh','percentile1','percentile5','percentile25','percentile50','percentile75','percentile95','percentile99','countOutliersLow','countOutliersHigh','percentageOutliersLow','percentageOutliersHigh','sum','avg','std','size');
    this.mapped[90] = abi.type_by_fqn.get(util.HistogramInt._type)!;
    this.mapped[90].static_values = [0,1,2,3];
    this.mapped[91] = abi.type_by_fqn.get(util.SlidingWindow._type)!;
  },
};
