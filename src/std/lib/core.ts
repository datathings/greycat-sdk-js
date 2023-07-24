// AUTO-GENERATED FILE PLEASE DO NOT MODIFY MANUALLY
/* eslint-disable */
// @ts-nocheck

import * as $sdk from '@greycat/sdk';
import * as $std from '../index.js';
import * as std_n from '../../std_n/index.js';

// module: core.gcl
export class String extends std_n.core.String {}

export class GeoBox extends $sdk.GCObject {
  static readonly _type = 'core::GeoBox';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_sw(): $sdk.std.core.geo {
    return super.get(super.type.generated_offsets[0]) as $sdk.std.core.geo;
  }
  public set_sw(v: $sdk.std.core.geo) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_ne(): $sdk.std.core.geo {
    return super.get(super.type.generated_offsets[1]) as $sdk.std.core.geo;
  }
  public set_ne(v: $sdk.std.core.geo) {
    super.set(super.type.generated_offsets[1], v);
  }
 static create($g: $sdk.GreyCat, sw: $sdk.std.core.geo, ne: $sdk.std.core.geo): GeoBox {
    return new GeoBox($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[1], sw, ne);
  }
}

export class nodeList extends std_n.core.nodeList {}

export class TimeZone extends $sdk.GCEnum {
  static readonly _type = 'core::TimeZone';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes[0], attributes[1], attributes[2]);
  }

  public static Africa_Accra($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[0]] as $std.core.TimeZone;
  }
  public static Africa_Bamako($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[1]] as $std.core.TimeZone;
  }
  public static Africa_Banjul($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[2]] as $std.core.TimeZone;
  }
  public static Africa_Conakry($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[3]] as $std.core.TimeZone;
  }
  public static Africa_Dakar($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[4]] as $std.core.TimeZone;
  }
  public static Africa_Freetown($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[5]] as $std.core.TimeZone;
  }
  public static Africa_Lome($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[6]] as $std.core.TimeZone;
  }
  public static Africa_Nouakchott($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[7]] as $std.core.TimeZone;
  }
  public static Africa_Ouagadougou($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[8]] as $std.core.TimeZone;
  }
  public static Africa_Timbuktu($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[9]] as $std.core.TimeZone;
  }
  public static Atlantic_Reykjavik($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[10]] as $std.core.TimeZone;
  }
  public static Atlantic_St_Helena($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[11]] as $std.core.TimeZone;
  }
  public static Iceland($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[12]] as $std.core.TimeZone;
  }
  public static Egypt($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[13]] as $std.core.TimeZone;
  }
  public static Africa_Maseru($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[14]] as $std.core.TimeZone;
  }
  public static Africa_Mbabane($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[15]] as $std.core.TimeZone;
  }
  public static Africa_Bangui($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[16]] as $std.core.TimeZone;
  }
  public static Africa_Brazzaville($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[17]] as $std.core.TimeZone;
  }
  public static Africa_Douala($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[18]] as $std.core.TimeZone;
  }
  public static Africa_Kinshasa($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[19]] as $std.core.TimeZone;
  }
  public static Africa_Libreville($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[20]] as $std.core.TimeZone;
  }
  public static Africa_Luanda($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[21]] as $std.core.TimeZone;
  }
  public static Africa_Malabo($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[22]] as $std.core.TimeZone;
  }
  public static Africa_Niamey($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[23]] as $std.core.TimeZone;
  }
  public static Africa_Porto_Novo($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[24]] as $std.core.TimeZone;
  }
  public static Africa_Blantyre($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[25]] as $std.core.TimeZone;
  }
  public static Africa_Bujumbura($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[26]] as $std.core.TimeZone;
  }
  public static Africa_Gaborone($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[27]] as $std.core.TimeZone;
  }
  public static Africa_Harare($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[28]] as $std.core.TimeZone;
  }
  public static Africa_Kigali($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[29]] as $std.core.TimeZone;
  }
  public static Africa_Lubumbashi($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[30]] as $std.core.TimeZone;
  }
  public static Africa_Lusaka($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[31]] as $std.core.TimeZone;
  }
  public static Africa_Addis_Ababa($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[32]] as $std.core.TimeZone;
  }
  public static Africa_Asmara($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[33]] as $std.core.TimeZone;
  }
  public static Africa_Asmera($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[34]] as $std.core.TimeZone;
  }
  public static Africa_Dar_es_Salaam($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[35]] as $std.core.TimeZone;
  }
  public static Africa_Djibouti($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[36]] as $std.core.TimeZone;
  }
  public static Africa_Kampala($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[37]] as $std.core.TimeZone;
  }
  public static Africa_Mogadishu($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[38]] as $std.core.TimeZone;
  }
  public static Indian_Antananarivo($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[39]] as $std.core.TimeZone;
  }
  public static Indian_Comoro($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[40]] as $std.core.TimeZone;
  }
  public static Indian_Mayotte($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[41]] as $std.core.TimeZone;
  }
  public static Libya($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[42]] as $std.core.TimeZone;
  }
  public static America_Atka($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[43]] as $std.core.TimeZone;
  }
  public static US_Aleutian($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[44]] as $std.core.TimeZone;
  }
  public static US_Alaska($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[45]] as $std.core.TimeZone;
  }
  public static America_Buenos_Aires($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[46]] as $std.core.TimeZone;
  }
  public static America_Argentina_ComodRivadavia($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[47]] as $std.core.TimeZone;
  }
  public static America_Catamarca($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[48]] as $std.core.TimeZone;
  }
  public static America_Cordoba($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[49]] as $std.core.TimeZone;
  }
  public static America_Rosario($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[50]] as $std.core.TimeZone;
  }
  public static America_Jujuy($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[51]] as $std.core.TimeZone;
  }
  public static America_Mendoza($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[52]] as $std.core.TimeZone;
  }
  public static US_Central($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[53]] as $std.core.TimeZone;
  }
  public static America_Shiprock($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[54]] as $std.core.TimeZone;
  }
  public static Navajo($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[55]] as $std.core.TimeZone;
  }
  public static US_Mountain($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[56]] as $std.core.TimeZone;
  }
  public static US_Michigan($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[57]] as $std.core.TimeZone;
  }
  public static America_Yellowknife($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[58]] as $std.core.TimeZone;
  }
  public static Canada_Mountain($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[59]] as $std.core.TimeZone;
  }
  public static Canada_Atlantic($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[60]] as $std.core.TimeZone;
  }
  public static Cuba($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[61]] as $std.core.TimeZone;
  }
  public static America_Fort_Wayne($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[62]] as $std.core.TimeZone;
  }
  public static America_Indianapolis($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[63]] as $std.core.TimeZone;
  }
  public static US_East_Indiana($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[64]] as $std.core.TimeZone;
  }
  public static America_Knox_IN($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[65]] as $std.core.TimeZone;
  }
  public static US_Indiana_Starke($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[66]] as $std.core.TimeZone;
  }
  public static America_Pangnirtung($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[67]] as $std.core.TimeZone;
  }
  public static Jamaica($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[68]] as $std.core.TimeZone;
  }
  public static America_Louisville($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[69]] as $std.core.TimeZone;
  }
  public static US_Pacific($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[70]] as $std.core.TimeZone;
  }
  public static Brazil_West($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[71]] as $std.core.TimeZone;
  }
  public static Mexico_BajaSur($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[72]] as $std.core.TimeZone;
  }
  public static Mexico_General($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[73]] as $std.core.TimeZone;
  }
  public static US_Eastern($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[74]] as $std.core.TimeZone;
  }
  public static Brazil_DeNoronha($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[75]] as $std.core.TimeZone;
  }
  public static America_Godthab($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[76]] as $std.core.TimeZone;
  }
  public static America_Atikokan($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[77]] as $std.core.TimeZone;
  }
  public static America_Cayman($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[78]] as $std.core.TimeZone;
  }
  public static America_Coral_Harbour($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[79]] as $std.core.TimeZone;
  }
  public static America_Creston($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[80]] as $std.core.TimeZone;
  }
  public static US_Arizona($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[81]] as $std.core.TimeZone;
  }
  public static America_Anguilla($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[82]] as $std.core.TimeZone;
  }
  public static America_Antigua($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[83]] as $std.core.TimeZone;
  }
  public static America_Aruba($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[84]] as $std.core.TimeZone;
  }
  public static America_Blanc_Sablon($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[85]] as $std.core.TimeZone;
  }
  public static America_Curacao($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[86]] as $std.core.TimeZone;
  }
  public static America_Dominica($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[87]] as $std.core.TimeZone;
  }
  public static America_Grenada($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[88]] as $std.core.TimeZone;
  }
  public static America_Guadeloupe($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[89]] as $std.core.TimeZone;
  }
  public static America_Kralendijk($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[90]] as $std.core.TimeZone;
  }
  public static America_Lower_Princes($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[91]] as $std.core.TimeZone;
  }
  public static America_Marigot($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[92]] as $std.core.TimeZone;
  }
  public static America_Montserrat($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[93]] as $std.core.TimeZone;
  }
  public static America_Port_of_Spain($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[94]] as $std.core.TimeZone;
  }
  public static America_St_Barthelemy($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[95]] as $std.core.TimeZone;
  }
  public static America_St_Kitts($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[96]] as $std.core.TimeZone;
  }
  public static America_St_Lucia($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[97]] as $std.core.TimeZone;
  }
  public static America_St_Thomas($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[98]] as $std.core.TimeZone;
  }
  public static America_St_Vincent($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[99]] as $std.core.TimeZone;
  }
  public static America_Tortola($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[100]] as $std.core.TimeZone;
  }
  public static America_Virgin($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[101]] as $std.core.TimeZone;
  }
  public static Canada_Saskatchewan($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[102]] as $std.core.TimeZone;
  }
  public static America_Porto_Acre($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[103]] as $std.core.TimeZone;
  }
  public static Brazil_Acre($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[104]] as $std.core.TimeZone;
  }
  public static Chile_Continental($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[105]] as $std.core.TimeZone;
  }
  public static Brazil_East($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[106]] as $std.core.TimeZone;
  }
  public static Canada_Newfoundland($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[107]] as $std.core.TimeZone;
  }
  public static America_Ensenada($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[108]] as $std.core.TimeZone;
  }
  public static America_Santa_Isabel($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[109]] as $std.core.TimeZone;
  }
  public static Mexico_BajaNorte($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[110]] as $std.core.TimeZone;
  }
  public static America_Montreal($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[111]] as $std.core.TimeZone;
  }
  public static America_Nassau($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[112]] as $std.core.TimeZone;
  }
  public static America_Nipigon($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[113]] as $std.core.TimeZone;
  }
  public static America_Thunder_Bay($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[114]] as $std.core.TimeZone;
  }
  public static Canada_Eastern($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[115]] as $std.core.TimeZone;
  }
  public static Canada_Pacific($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[116]] as $std.core.TimeZone;
  }
  public static Canada_Yukon($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[117]] as $std.core.TimeZone;
  }
  public static America_Rainy_River($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[118]] as $std.core.TimeZone;
  }
  public static Canada_Central($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[119]] as $std.core.TimeZone;
  }
  public static Asia_Ashkhabad($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[120]] as $std.core.TimeZone;
  }
  public static Asia_Phnom_Penh($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[121]] as $std.core.TimeZone;
  }
  public static Asia_Vientiane($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[122]] as $std.core.TimeZone;
  }
  public static Indian_Christmas($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[123]] as $std.core.TimeZone;
  }
  public static Asia_Dacca($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[124]] as $std.core.TimeZone;
  }
  public static Asia_Muscat($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[125]] as $std.core.TimeZone;
  }
  public static Indian_Mahe($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[126]] as $std.core.TimeZone;
  }
  public static Indian_Reunion($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[127]] as $std.core.TimeZone;
  }
  public static Asia_Saigon($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[128]] as $std.core.TimeZone;
  }
  public static Hongkong($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[129]] as $std.core.TimeZone;
  }
  public static Asia_Tel_Aviv($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[130]] as $std.core.TimeZone;
  }
  public static Israel($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[131]] as $std.core.TimeZone;
  }
  public static Asia_Katmandu($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[132]] as $std.core.TimeZone;
  }
  public static Asia_Calcutta($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[133]] as $std.core.TimeZone;
  }
  public static Asia_Brunei($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[134]] as $std.core.TimeZone;
  }
  public static Asia_Macao($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[135]] as $std.core.TimeZone;
  }
  public static Asia_Ujung_Pandang($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[136]] as $std.core.TimeZone;
  }
  public static Europe_Nicosia($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[137]] as $std.core.TimeZone;
  }
  public static Asia_Bahrain($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[138]] as $std.core.TimeZone;
  }
  public static Antarctica_Syowa($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[139]] as $std.core.TimeZone;
  }
  public static Asia_Aden($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[140]] as $std.core.TimeZone;
  }
  public static Asia_Kuwait($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[141]] as $std.core.TimeZone;
  }
  public static ROK($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[142]] as $std.core.TimeZone;
  }
  public static Asia_Chongqing($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[143]] as $std.core.TimeZone;
  }
  public static Asia_Chungking($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[144]] as $std.core.TimeZone;
  }
  public static Asia_Harbin($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[145]] as $std.core.TimeZone;
  }
  public static PRC($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[146]] as $std.core.TimeZone;
  }
  public static Asia_Kuala_Lumpur($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[147]] as $std.core.TimeZone;
  }
  public static Singapore($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[148]] as $std.core.TimeZone;
  }
  public static ROC($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[149]] as $std.core.TimeZone;
  }
  public static Iran($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[150]] as $std.core.TimeZone;
  }
  public static Asia_Thimbu($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[151]] as $std.core.TimeZone;
  }
  public static Japan($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[152]] as $std.core.TimeZone;
  }
  public static Asia_Ulan_Bator($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[153]] as $std.core.TimeZone;
  }
  public static Antarctica_Vostok($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[154]] as $std.core.TimeZone;
  }
  public static Asia_Kashgar($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[155]] as $std.core.TimeZone;
  }
  public static Asia_Rangoon($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[156]] as $std.core.TimeZone;
  }
  public static Indian_Cocos($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[157]] as $std.core.TimeZone;
  }
  public static Atlantic_Faeroe($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[158]] as $std.core.TimeZone;
  }
  public static Australia_South($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[159]] as $std.core.TimeZone;
  }
  public static Australia_Queensland($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[160]] as $std.core.TimeZone;
  }
  public static Australia_Yancowinna($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[161]] as $std.core.TimeZone;
  }
  public static Australia_North($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[162]] as $std.core.TimeZone;
  }
  public static Australia_Currie($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[163]] as $std.core.TimeZone;
  }
  public static Australia_Tasmania($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[164]] as $std.core.TimeZone;
  }
  public static Australia_LHI($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[165]] as $std.core.TimeZone;
  }
  public static Australia_Victoria($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[166]] as $std.core.TimeZone;
  }
  public static Australia_West($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[167]] as $std.core.TimeZone;
  }
  public static Australia_ACT($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[168]] as $std.core.TimeZone;
  }
  public static Australia_Canberra($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[169]] as $std.core.TimeZone;
  }
  public static Australia_NSW($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[170]] as $std.core.TimeZone;
  }
  public static GMT($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[171]] as $std.core.TimeZone;
  }
  public static GMTx0($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[172]] as $std.core.TimeZone;
  }
  public static GMT_0($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[173]] as $std.core.TimeZone;
  }
  public static GMT0($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[174]] as $std.core.TimeZone;
  }
  public static Greenwich($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[175]] as $std.core.TimeZone;
  }
  public static UCT($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[176]] as $std.core.TimeZone;
  }
  public static UTC($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[177]] as $std.core.TimeZone;
  }
  public static Universal($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[178]] as $std.core.TimeZone;
  }
  public static Zulu($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[179]] as $std.core.TimeZone;
  }
  public static Europe_Ljubljana($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[180]] as $std.core.TimeZone;
  }
  public static Europe_Podgorica($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[181]] as $std.core.TimeZone;
  }
  public static Europe_Sarajevo($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[182]] as $std.core.TimeZone;
  }
  public static Europe_Skopje($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[183]] as $std.core.TimeZone;
  }
  public static Europe_Zagreb($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[184]] as $std.core.TimeZone;
  }
  public static Arctic_Longyearbyen($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[185]] as $std.core.TimeZone;
  }
  public static Atlantic_Jan_Mayen($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[186]] as $std.core.TimeZone;
  }
  public static Europe_Copenhagen($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[187]] as $std.core.TimeZone;
  }
  public static Europe_Oslo($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[188]] as $std.core.TimeZone;
  }
  public static Europe_Stockholm($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[189]] as $std.core.TimeZone;
  }
  public static Europe_Amsterdam($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[190]] as $std.core.TimeZone;
  }
  public static Europe_Luxembourg($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[191]] as $std.core.TimeZone;
  }
  public static Europe_Tiraspol($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[192]] as $std.core.TimeZone;
  }
  public static Eire($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[193]] as $std.core.TimeZone;
  }
  public static Europe_Mariehamn($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[194]] as $std.core.TimeZone;
  }
  public static Asia_Istanbul($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[195]] as $std.core.TimeZone;
  }
  public static Turkey($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[196]] as $std.core.TimeZone;
  }
  public static Europe_Kiev($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[197]] as $std.core.TimeZone;
  }
  public static Europe_Uzhgorod($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[198]] as $std.core.TimeZone;
  }
  public static Europe_Zaporozhye($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[199]] as $std.core.TimeZone;
  }
  public static Portugal($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[200]] as $std.core.TimeZone;
  }
  public static Europe_Belfast($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[201]] as $std.core.TimeZone;
  }
  public static Europe_Guernsey($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[202]] as $std.core.TimeZone;
  }
  public static Europe_Isle_of_Man($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[203]] as $std.core.TimeZone;
  }
  public static Europe_Jersey($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[204]] as $std.core.TimeZone;
  }
  public static GB($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[205]] as $std.core.TimeZone;
  }
  public static GB_Eire($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[206]] as $std.core.TimeZone;
  }
  public static W_SU($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[207]] as $std.core.TimeZone;
  }
  public static Europe_Monaco($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[208]] as $std.core.TimeZone;
  }
  public static Europe_Bratislava($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[209]] as $std.core.TimeZone;
  }
  public static Europe_San_Marino($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[210]] as $std.core.TimeZone;
  }
  public static Europe_Vatican($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[211]] as $std.core.TimeZone;
  }
  public static Poland($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[212]] as $std.core.TimeZone;
  }
  public static Europe_Busingen($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[213]] as $std.core.TimeZone;
  }
  public static Europe_Vaduz($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[214]] as $std.core.TimeZone;
  }
  public static Indian_Kerguelen($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[215]] as $std.core.TimeZone;
  }
  public static Antarctica_McMurdo($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[216]] as $std.core.TimeZone;
  }
  public static Antarctica_South_Pole($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[217]] as $std.core.TimeZone;
  }
  public static NZ($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[218]] as $std.core.TimeZone;
  }
  public static NZ_CHAT($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[219]] as $std.core.TimeZone;
  }
  public static Chile_EasterIsland($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[220]] as $std.core.TimeZone;
  }
  public static Pacific_Pohnpei($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[221]] as $std.core.TimeZone;
  }
  public static Pacific_Ponape($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[222]] as $std.core.TimeZone;
  }
  public static Pacific_Saipan($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[223]] as $std.core.TimeZone;
  }
  public static Pacific_Johnston($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[224]] as $std.core.TimeZone;
  }
  public static US_Hawaii($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[225]] as $std.core.TimeZone;
  }
  public static Pacific_Enderbury($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[226]] as $std.core.TimeZone;
  }
  public static Kwajalein($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[227]] as $std.core.TimeZone;
  }
  public static Pacific_Midway($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[228]] as $std.core.TimeZone;
  }
  public static Pacific_Samoa($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[229]] as $std.core.TimeZone;
  }
  public static US_Samoa($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[230]] as $std.core.TimeZone;
  }
  public static Antarctica_DumontDUrville($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[231]] as $std.core.TimeZone;
  }
  public static Pacific_Chuuk($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[232]] as $std.core.TimeZone;
  }
  public static Pacific_Truk($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[233]] as $std.core.TimeZone;
  }
  public static Pacific_Yap($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[234]] as $std.core.TimeZone;
  }
  public static Pacific_Funafuti($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[235]] as $std.core.TimeZone;
  }
  public static Pacific_Majuro($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[236]] as $std.core.TimeZone;
  }
  public static Pacific_Wake($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[237]] as $std.core.TimeZone;
  }
  public static Pacific_Wallis($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[238]] as $std.core.TimeZone;
  }
  public static Africa_Abidjan($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[239]] as $std.core.TimeZone;
  }
  public static Africa_Algiers($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[240]] as $std.core.TimeZone;
  }
  public static Africa_Bissau($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[241]] as $std.core.TimeZone;
  }
  public static Africa_Cairo($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[242]] as $std.core.TimeZone;
  }
  public static Africa_Casablanca($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[243]] as $std.core.TimeZone;
  }
  public static Africa_Ceuta($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[244]] as $std.core.TimeZone;
  }
  public static Africa_El_Aaiun($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[245]] as $std.core.TimeZone;
  }
  public static Africa_Johannesburg($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[246]] as $std.core.TimeZone;
  }
  public static Africa_Juba($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[247]] as $std.core.TimeZone;
  }
  public static Africa_Khartoum($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[248]] as $std.core.TimeZone;
  }
  public static Africa_Lagos($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[249]] as $std.core.TimeZone;
  }
  public static Africa_Maputo($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[250]] as $std.core.TimeZone;
  }
  public static Africa_Monrovia($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[251]] as $std.core.TimeZone;
  }
  public static Africa_Nairobi($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[252]] as $std.core.TimeZone;
  }
  public static Africa_Ndjamena($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[253]] as $std.core.TimeZone;
  }
  public static Africa_Sao_Tome($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[254]] as $std.core.TimeZone;
  }
  public static Africa_Tripoli($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[255]] as $std.core.TimeZone;
  }
  public static Africa_Tunis($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[256]] as $std.core.TimeZone;
  }
  public static Africa_Windhoek($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[257]] as $std.core.TimeZone;
  }
  public static America_Adak($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[258]] as $std.core.TimeZone;
  }
  public static America_Anchorage($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[259]] as $std.core.TimeZone;
  }
  public static America_Araguaina($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[260]] as $std.core.TimeZone;
  }
  public static America_Argentina_Buenos_Aires($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[261]] as $std.core.TimeZone;
  }
  public static America_Argentina_Catamarca($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[262]] as $std.core.TimeZone;
  }
  public static America_Argentina_Cordoba($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[263]] as $std.core.TimeZone;
  }
  public static America_Argentina_Jujuy($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[264]] as $std.core.TimeZone;
  }
  public static America_Argentina_La_Rioja($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[265]] as $std.core.TimeZone;
  }
  public static America_Argentina_Mendoza($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[266]] as $std.core.TimeZone;
  }
  public static America_Argentina_Rio_Gallegos($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[267]] as $std.core.TimeZone;
  }
  public static America_Argentina_Salta($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[268]] as $std.core.TimeZone;
  }
  public static America_Argentina_San_Juan($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[269]] as $std.core.TimeZone;
  }
  public static America_Argentina_San_Luis($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[270]] as $std.core.TimeZone;
  }
  public static America_Argentina_Tucuman($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[271]] as $std.core.TimeZone;
  }
  public static America_Argentina_Ushuaia($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[272]] as $std.core.TimeZone;
  }
  public static America_Asuncion($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[273]] as $std.core.TimeZone;
  }
  public static America_Bahia($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[274]] as $std.core.TimeZone;
  }
  public static America_Bahia_Banderas($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[275]] as $std.core.TimeZone;
  }
  public static America_Barbados($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[276]] as $std.core.TimeZone;
  }
  public static America_Belem($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[277]] as $std.core.TimeZone;
  }
  public static America_Belize($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[278]] as $std.core.TimeZone;
  }
  public static America_Boa_Vista($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[279]] as $std.core.TimeZone;
  }
  public static America_Bogota($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[280]] as $std.core.TimeZone;
  }
  public static America_Boise($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[281]] as $std.core.TimeZone;
  }
  public static America_Cambridge_Bay($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[282]] as $std.core.TimeZone;
  }
  public static America_Campo_Grande($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[283]] as $std.core.TimeZone;
  }
  public static America_Cancun($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[284]] as $std.core.TimeZone;
  }
  public static America_Caracas($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[285]] as $std.core.TimeZone;
  }
  public static America_Cayenne($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[286]] as $std.core.TimeZone;
  }
  public static America_Chicago($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[287]] as $std.core.TimeZone;
  }
  public static America_Chihuahua($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[288]] as $std.core.TimeZone;
  }
  public static America_Ciudad_Juarez($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[289]] as $std.core.TimeZone;
  }
  public static America_Costa_Rica($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[290]] as $std.core.TimeZone;
  }
  public static America_Cuiaba($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[291]] as $std.core.TimeZone;
  }
  public static America_Danmarkshavn($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[292]] as $std.core.TimeZone;
  }
  public static America_Dawson($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[293]] as $std.core.TimeZone;
  }
  public static America_Dawson_Creek($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[294]] as $std.core.TimeZone;
  }
  public static America_Denver($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[295]] as $std.core.TimeZone;
  }
  public static America_Detroit($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[296]] as $std.core.TimeZone;
  }
  public static America_Edmonton($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[297]] as $std.core.TimeZone;
  }
  public static America_Eirunepe($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[298]] as $std.core.TimeZone;
  }
  public static America_El_Salvador($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[299]] as $std.core.TimeZone;
  }
  public static America_Fort_Nelson($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[300]] as $std.core.TimeZone;
  }
  public static America_Fortaleza($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[301]] as $std.core.TimeZone;
  }
  public static America_Glace_Bay($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[302]] as $std.core.TimeZone;
  }
  public static America_Goose_Bay($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[303]] as $std.core.TimeZone;
  }
  public static America_Grand_Turk($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[304]] as $std.core.TimeZone;
  }
  public static America_Guatemala($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[305]] as $std.core.TimeZone;
  }
  public static America_Guayaquil($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[306]] as $std.core.TimeZone;
  }
  public static America_Guyana($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[307]] as $std.core.TimeZone;
  }
  public static America_Halifax($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[308]] as $std.core.TimeZone;
  }
  public static America_Havana($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[309]] as $std.core.TimeZone;
  }
  public static America_Hermosillo($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[310]] as $std.core.TimeZone;
  }
  public static America_Indiana_Indianapolis($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[311]] as $std.core.TimeZone;
  }
  public static America_Indiana_Knox($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[312]] as $std.core.TimeZone;
  }
  public static America_Indiana_Marengo($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[313]] as $std.core.TimeZone;
  }
  public static America_Indiana_Petersburg($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[314]] as $std.core.TimeZone;
  }
  public static America_Indiana_Tell_City($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[315]] as $std.core.TimeZone;
  }
  public static America_Indiana_Vevay($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[316]] as $std.core.TimeZone;
  }
  public static America_Indiana_Vincennes($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[317]] as $std.core.TimeZone;
  }
  public static America_Indiana_Winamac($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[318]] as $std.core.TimeZone;
  }
  public static America_Inuvik($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[319]] as $std.core.TimeZone;
  }
  public static America_Iqaluit($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[320]] as $std.core.TimeZone;
  }
  public static America_Jamaica($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[321]] as $std.core.TimeZone;
  }
  public static America_Juneau($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[322]] as $std.core.TimeZone;
  }
  public static America_Kentucky_Louisville($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[323]] as $std.core.TimeZone;
  }
  public static America_Kentucky_Monticello($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[324]] as $std.core.TimeZone;
  }
  public static America_La_Paz($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[325]] as $std.core.TimeZone;
  }
  public static America_Lima($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[326]] as $std.core.TimeZone;
  }
  public static America_Los_Angeles($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[327]] as $std.core.TimeZone;
  }
  public static America_Maceio($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[328]] as $std.core.TimeZone;
  }
  public static America_Managua($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[329]] as $std.core.TimeZone;
  }
  public static America_Manaus($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[330]] as $std.core.TimeZone;
  }
  public static America_Martinique($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[331]] as $std.core.TimeZone;
  }
  public static America_Matamoros($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[332]] as $std.core.TimeZone;
  }
  public static America_Mazatlan($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[333]] as $std.core.TimeZone;
  }
  public static America_Menominee($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[334]] as $std.core.TimeZone;
  }
  public static America_Merida($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[335]] as $std.core.TimeZone;
  }
  public static America_Metlakatla($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[336]] as $std.core.TimeZone;
  }
  public static America_Mexico_City($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[337]] as $std.core.TimeZone;
  }
  public static America_Miquelon($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[338]] as $std.core.TimeZone;
  }
  public static America_Moncton($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[339]] as $std.core.TimeZone;
  }
  public static America_Monterrey($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[340]] as $std.core.TimeZone;
  }
  public static America_Montevideo($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[341]] as $std.core.TimeZone;
  }
  public static America_New_York($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[342]] as $std.core.TimeZone;
  }
  public static America_Nome($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[343]] as $std.core.TimeZone;
  }
  public static America_Noronha($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[344]] as $std.core.TimeZone;
  }
  public static America_North_Dakota_Beulah($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[345]] as $std.core.TimeZone;
  }
  public static America_North_Dakota_Center($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[346]] as $std.core.TimeZone;
  }
  public static America_North_Dakota_New_Salem($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[347]] as $std.core.TimeZone;
  }
  public static America_Nuuk($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[348]] as $std.core.TimeZone;
  }
  public static America_Ojinaga($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[349]] as $std.core.TimeZone;
  }
  public static America_Panama($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[350]] as $std.core.TimeZone;
  }
  public static America_Paramaribo($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[351]] as $std.core.TimeZone;
  }
  public static America_Phoenix($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[352]] as $std.core.TimeZone;
  }
  public static America_Port_au_Prince($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[353]] as $std.core.TimeZone;
  }
  public static America_Porto_Velho($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[354]] as $std.core.TimeZone;
  }
  public static America_Puerto_Rico($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[355]] as $std.core.TimeZone;
  }
  public static America_Punta_Arenas($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[356]] as $std.core.TimeZone;
  }
  public static America_Rankin_Inlet($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[357]] as $std.core.TimeZone;
  }
  public static America_Recife($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[358]] as $std.core.TimeZone;
  }
  public static America_Regina($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[359]] as $std.core.TimeZone;
  }
  public static America_Resolute($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[360]] as $std.core.TimeZone;
  }
  public static America_Rio_Branco($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[361]] as $std.core.TimeZone;
  }
  public static America_Santarem($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[362]] as $std.core.TimeZone;
  }
  public static America_Santiago($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[363]] as $std.core.TimeZone;
  }
  public static America_Santo_Domingo($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[364]] as $std.core.TimeZone;
  }
  public static America_Sao_Paulo($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[365]] as $std.core.TimeZone;
  }
  public static America_Scoresbysund($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[366]] as $std.core.TimeZone;
  }
  public static America_Sitka($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[367]] as $std.core.TimeZone;
  }
  public static America_St_Johns($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[368]] as $std.core.TimeZone;
  }
  public static America_Swift_Current($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[369]] as $std.core.TimeZone;
  }
  public static America_Tegucigalpa($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[370]] as $std.core.TimeZone;
  }
  public static America_Thule($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[371]] as $std.core.TimeZone;
  }
  public static America_Tijuana($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[372]] as $std.core.TimeZone;
  }
  public static America_Toronto($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[373]] as $std.core.TimeZone;
  }
  public static America_Vancouver($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[374]] as $std.core.TimeZone;
  }
  public static America_Whitehorse($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[375]] as $std.core.TimeZone;
  }
  public static America_Winnipeg($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[376]] as $std.core.TimeZone;
  }
  public static America_Yakutat($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[377]] as $std.core.TimeZone;
  }
  public static Antarctica_Casey($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[378]] as $std.core.TimeZone;
  }
  public static Antarctica_Davis($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[379]] as $std.core.TimeZone;
  }
  public static Antarctica_Macquarie($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[380]] as $std.core.TimeZone;
  }
  public static Antarctica_Mawson($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[381]] as $std.core.TimeZone;
  }
  public static Antarctica_Palmer($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[382]] as $std.core.TimeZone;
  }
  public static Antarctica_Rothera($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[383]] as $std.core.TimeZone;
  }
  public static Antarctica_Troll($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[384]] as $std.core.TimeZone;
  }
  public static Asia_Almaty($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[385]] as $std.core.TimeZone;
  }
  public static Asia_Amman($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[386]] as $std.core.TimeZone;
  }
  public static Asia_Anadyr($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[387]] as $std.core.TimeZone;
  }
  public static Asia_Aqtau($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[388]] as $std.core.TimeZone;
  }
  public static Asia_Aqtobe($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[389]] as $std.core.TimeZone;
  }
  public static Asia_Ashgabat($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[390]] as $std.core.TimeZone;
  }
  public static Asia_Atyrau($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[391]] as $std.core.TimeZone;
  }
  public static Asia_Baghdad($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[392]] as $std.core.TimeZone;
  }
  public static Asia_Baku($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[393]] as $std.core.TimeZone;
  }
  public static Asia_Bangkok($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[394]] as $std.core.TimeZone;
  }
  public static Asia_Barnaul($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[395]] as $std.core.TimeZone;
  }
  public static Asia_Beirut($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[396]] as $std.core.TimeZone;
  }
  public static Asia_Bishkek($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[397]] as $std.core.TimeZone;
  }
  public static Asia_Chita($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[398]] as $std.core.TimeZone;
  }
  public static Asia_Choibalsan($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[399]] as $std.core.TimeZone;
  }
  public static Asia_Colombo($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[400]] as $std.core.TimeZone;
  }
  public static Asia_Damascus($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[401]] as $std.core.TimeZone;
  }
  public static Asia_Dhaka($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[402]] as $std.core.TimeZone;
  }
  public static Asia_Dili($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[403]] as $std.core.TimeZone;
  }
  public static Asia_Dubai($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[404]] as $std.core.TimeZone;
  }
  public static Asia_Dushanbe($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[405]] as $std.core.TimeZone;
  }
  public static Asia_Famagusta($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[406]] as $std.core.TimeZone;
  }
  public static Asia_Gaza($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[407]] as $std.core.TimeZone;
  }
  public static Asia_Hebron($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[408]] as $std.core.TimeZone;
  }
  public static Asia_Ho_Chi_Minh($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[409]] as $std.core.TimeZone;
  }
  public static Asia_Hong_Kong($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[410]] as $std.core.TimeZone;
  }
  public static Asia_Hovd($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[411]] as $std.core.TimeZone;
  }
  public static Asia_Irkutsk($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[412]] as $std.core.TimeZone;
  }
  public static Asia_Jakarta($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[413]] as $std.core.TimeZone;
  }
  public static Asia_Jayapura($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[414]] as $std.core.TimeZone;
  }
  public static Asia_Jerusalem($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[415]] as $std.core.TimeZone;
  }
  public static Asia_Kabul($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[416]] as $std.core.TimeZone;
  }
  public static Asia_Kamchatka($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[417]] as $std.core.TimeZone;
  }
  public static Asia_Karachi($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[418]] as $std.core.TimeZone;
  }
  public static Asia_Kathmandu($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[419]] as $std.core.TimeZone;
  }
  public static Asia_Khandyga($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[420]] as $std.core.TimeZone;
  }
  public static Asia_Kolkata($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[421]] as $std.core.TimeZone;
  }
  public static Asia_Krasnoyarsk($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[422]] as $std.core.TimeZone;
  }
  public static Asia_Kuching($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[423]] as $std.core.TimeZone;
  }
  public static Asia_Macau($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[424]] as $std.core.TimeZone;
  }
  public static Asia_Magadan($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[425]] as $std.core.TimeZone;
  }
  public static Asia_Makassar($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[426]] as $std.core.TimeZone;
  }
  public static Asia_Manila($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[427]] as $std.core.TimeZone;
  }
  public static Asia_Nicosia($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[428]] as $std.core.TimeZone;
  }
  public static Asia_Novokuznetsk($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[429]] as $std.core.TimeZone;
  }
  public static Asia_Novosibirsk($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[430]] as $std.core.TimeZone;
  }
  public static Asia_Omsk($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[431]] as $std.core.TimeZone;
  }
  public static Asia_Oral($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[432]] as $std.core.TimeZone;
  }
  public static Asia_Pontianak($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[433]] as $std.core.TimeZone;
  }
  public static Asia_Pyongyang($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[434]] as $std.core.TimeZone;
  }
  public static Asia_Qatar($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[435]] as $std.core.TimeZone;
  }
  public static Asia_Qostanay($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[436]] as $std.core.TimeZone;
  }
  public static Asia_Qyzylorda($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[437]] as $std.core.TimeZone;
  }
  public static Asia_Riyadh($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[438]] as $std.core.TimeZone;
  }
  public static Asia_Sakhalin($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[439]] as $std.core.TimeZone;
  }
  public static Asia_Samarkand($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[440]] as $std.core.TimeZone;
  }
  public static Asia_Seoul($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[441]] as $std.core.TimeZone;
  }
  public static Asia_Shanghai($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[442]] as $std.core.TimeZone;
  }
  public static Asia_Singapore($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[443]] as $std.core.TimeZone;
  }
  public static Asia_Srednekolymsk($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[444]] as $std.core.TimeZone;
  }
  public static Asia_Taipei($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[445]] as $std.core.TimeZone;
  }
  public static Asia_Tashkent($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[446]] as $std.core.TimeZone;
  }
  public static Asia_Tbilisi($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[447]] as $std.core.TimeZone;
  }
  public static Asia_Tehran($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[448]] as $std.core.TimeZone;
  }
  public static Asia_Thimphu($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[449]] as $std.core.TimeZone;
  }
  public static Asia_Tokyo($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[450]] as $std.core.TimeZone;
  }
  public static Asia_Tomsk($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[451]] as $std.core.TimeZone;
  }
  public static Asia_Ulaanbaatar($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[452]] as $std.core.TimeZone;
  }
  public static Asia_Urumqi($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[453]] as $std.core.TimeZone;
  }
  public static Asia_Ust_Nera($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[454]] as $std.core.TimeZone;
  }
  public static Asia_Vladivostok($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[455]] as $std.core.TimeZone;
  }
  public static Asia_Yakutsk($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[456]] as $std.core.TimeZone;
  }
  public static Asia_Yangon($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[457]] as $std.core.TimeZone;
  }
  public static Asia_Yekaterinburg($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[458]] as $std.core.TimeZone;
  }
  public static Asia_Yerevan($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[459]] as $std.core.TimeZone;
  }
  public static Atlantic_Azores($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[460]] as $std.core.TimeZone;
  }
  public static Atlantic_Bermuda($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[461]] as $std.core.TimeZone;
  }
  public static Atlantic_Canary($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[462]] as $std.core.TimeZone;
  }
  public static Atlantic_Cape_Verde($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[463]] as $std.core.TimeZone;
  }
  public static Atlantic_Faroe($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[464]] as $std.core.TimeZone;
  }
  public static Atlantic_Madeira($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[465]] as $std.core.TimeZone;
  }
  public static Atlantic_South_Georgia($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[466]] as $std.core.TimeZone;
  }
  public static Atlantic_Stanley($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[467]] as $std.core.TimeZone;
  }
  public static Australia_Adelaide($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[468]] as $std.core.TimeZone;
  }
  public static Australia_Brisbane($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[469]] as $std.core.TimeZone;
  }
  public static Australia_Broken_Hill($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[470]] as $std.core.TimeZone;
  }
  public static Australia_Darwin($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[471]] as $std.core.TimeZone;
  }
  public static Australia_Eucla($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[472]] as $std.core.TimeZone;
  }
  public static Australia_Hobart($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[473]] as $std.core.TimeZone;
  }
  public static Australia_Lindeman($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[474]] as $std.core.TimeZone;
  }
  public static Australia_Lord_Howe($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[475]] as $std.core.TimeZone;
  }
  public static Australia_Melbourne($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[476]] as $std.core.TimeZone;
  }
  public static Australia_Perth($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[477]] as $std.core.TimeZone;
  }
  public static Australia_Sydney($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[478]] as $std.core.TimeZone;
  }
  public static CET($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[479]] as $std.core.TimeZone;
  }
  public static CST6CDT($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[480]] as $std.core.TimeZone;
  }
  public static EET($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[481]] as $std.core.TimeZone;
  }
  public static EST($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[482]] as $std.core.TimeZone;
  }
  public static EST5EDT($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[483]] as $std.core.TimeZone;
  }
  public static Europe_Andorra($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[484]] as $std.core.TimeZone;
  }
  public static Europe_Astrakhan($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[485]] as $std.core.TimeZone;
  }
  public static Europe_Athens($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[486]] as $std.core.TimeZone;
  }
  public static Europe_Belgrade($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[487]] as $std.core.TimeZone;
  }
  public static Europe_Berlin($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[488]] as $std.core.TimeZone;
  }
  public static Europe_Brussels($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[489]] as $std.core.TimeZone;
  }
  public static Europe_Bucharest($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[490]] as $std.core.TimeZone;
  }
  public static Europe_Budapest($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[491]] as $std.core.TimeZone;
  }
  public static Europe_Chisinau($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[492]] as $std.core.TimeZone;
  }
  public static Europe_Dublin($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[493]] as $std.core.TimeZone;
  }
  public static Europe_Gibraltar($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[494]] as $std.core.TimeZone;
  }
  public static Europe_Helsinki($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[495]] as $std.core.TimeZone;
  }
  public static Europe_Istanbul($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[496]] as $std.core.TimeZone;
  }
  public static Europe_Kaliningrad($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[497]] as $std.core.TimeZone;
  }
  public static Europe_Kirov($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[498]] as $std.core.TimeZone;
  }
  public static Europe_Kyiv($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[499]] as $std.core.TimeZone;
  }
  public static Europe_Lisbon($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[500]] as $std.core.TimeZone;
  }
  public static Europe_London($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[501]] as $std.core.TimeZone;
  }
  public static Europe_Madrid($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[502]] as $std.core.TimeZone;
  }
  public static Europe_Malta($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[503]] as $std.core.TimeZone;
  }
  public static Europe_Minsk($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[504]] as $std.core.TimeZone;
  }
  public static Europe_Moscow($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[505]] as $std.core.TimeZone;
  }
  public static Europe_Paris($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[506]] as $std.core.TimeZone;
  }
  public static Europe_Prague($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[507]] as $std.core.TimeZone;
  }
  public static Europe_Riga($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[508]] as $std.core.TimeZone;
  }
  public static Europe_Rome($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[509]] as $std.core.TimeZone;
  }
  public static Europe_Samara($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[510]] as $std.core.TimeZone;
  }
  public static Europe_Saratov($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[511]] as $std.core.TimeZone;
  }
  public static Europe_Simferopol($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[512]] as $std.core.TimeZone;
  }
  public static Europe_Sofia($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[513]] as $std.core.TimeZone;
  }
  public static Europe_Tallinn($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[514]] as $std.core.TimeZone;
  }
  public static Europe_Tirane($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[515]] as $std.core.TimeZone;
  }
  public static Europe_Ulyanovsk($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[516]] as $std.core.TimeZone;
  }
  public static Europe_Vienna($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[517]] as $std.core.TimeZone;
  }
  public static Europe_Vilnius($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[518]] as $std.core.TimeZone;
  }
  public static Europe_Volgograd($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[519]] as $std.core.TimeZone;
  }
  public static Europe_Warsaw($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[520]] as $std.core.TimeZone;
  }
  public static Europe_Zurich($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[521]] as $std.core.TimeZone;
  }
  public static Factory($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[522]] as $std.core.TimeZone;
  }
  public static HST($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[523]] as $std.core.TimeZone;
  }
  public static Indian_Chagos($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[524]] as $std.core.TimeZone;
  }
  public static Indian_Maldives($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[525]] as $std.core.TimeZone;
  }
  public static Indian_Mauritius($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[526]] as $std.core.TimeZone;
  }
  public static MET($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[527]] as $std.core.TimeZone;
  }
  public static MST($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[528]] as $std.core.TimeZone;
  }
  public static MST7MDT($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[529]] as $std.core.TimeZone;
  }
  public static PST8PDT($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[530]] as $std.core.TimeZone;
  }
  public static Pacific_Apia($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[531]] as $std.core.TimeZone;
  }
  public static Pacific_Auckland($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[532]] as $std.core.TimeZone;
  }
  public static Pacific_Bougainville($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[533]] as $std.core.TimeZone;
  }
  public static Pacific_Chatham($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[534]] as $std.core.TimeZone;
  }
  public static Pacific_Easter($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[535]] as $std.core.TimeZone;
  }
  public static Pacific_Efate($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[536]] as $std.core.TimeZone;
  }
  public static Pacific_Fakaofo($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[537]] as $std.core.TimeZone;
  }
  public static Pacific_Fiji($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[538]] as $std.core.TimeZone;
  }
  public static Pacific_Galapagos($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[539]] as $std.core.TimeZone;
  }
  public static Pacific_Gambier($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[540]] as $std.core.TimeZone;
  }
  public static Pacific_Guadalcanal($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[541]] as $std.core.TimeZone;
  }
  public static Pacific_Guam($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[542]] as $std.core.TimeZone;
  }
  public static Pacific_Honolulu($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[543]] as $std.core.TimeZone;
  }
  public static Pacific_Kanton($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[544]] as $std.core.TimeZone;
  }
  public static Pacific_Kiritimati($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[545]] as $std.core.TimeZone;
  }
  public static Pacific_Kosrae($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[546]] as $std.core.TimeZone;
  }
  public static Pacific_Kwajalein($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[547]] as $std.core.TimeZone;
  }
  public static Pacific_Marquesas($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[548]] as $std.core.TimeZone;
  }
  public static Pacific_Nauru($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[549]] as $std.core.TimeZone;
  }
  public static Pacific_Niue($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[550]] as $std.core.TimeZone;
  }
  public static Pacific_Norfolk($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[551]] as $std.core.TimeZone;
  }
  public static Pacific_Noumea($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[552]] as $std.core.TimeZone;
  }
  public static Pacific_Pago_Pago($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[553]] as $std.core.TimeZone;
  }
  public static Pacific_Palau($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[554]] as $std.core.TimeZone;
  }
  public static Pacific_Pitcairn($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[555]] as $std.core.TimeZone;
  }
  public static Pacific_Port_Moresby($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[556]] as $std.core.TimeZone;
  }
  public static Pacific_Rarotonga($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[557]] as $std.core.TimeZone;
  }
  public static Pacific_Tahiti($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[558]] as $std.core.TimeZone;
  }
  public static Pacific_Tarawa($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[559]] as $std.core.TimeZone;
  }
  public static Pacific_Tongatapu($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[560]] as $std.core.TimeZone;
  }
  public static WET($g: $sdk.GreyCat): $std.core.TimeZone {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3];
    return t.enum_values![t.generated_offsets[561]] as $std.core.TimeZone;
  }
 static create($g: $sdk.GreyCat): TimeZone {
    return new TimeZone($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[3]);
  }
}

export class nodeIndexBucket extends std_n.core.nodeIndexBucket {}

export class node extends std_n.core.node {}

export class nodeTimeCursor extends std_n.core.nodeTimeCursor {}

export class TableColumnMeta extends $sdk.GCObject {
  static readonly _type = 'core::TableColumnMeta';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_type(): string | null {
    return super.get(super.type.generated_offsets[0]) as string | null;
  }
  public set_type(v: string | null) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_size(): bigint | number {
    return super.get(super.type.generated_offsets[1]) as bigint | number;
  }
  public set_size(v: bigint | number) {
    super.set(super.type.generated_offsets[1], v);
  }
  public get_index(): boolean {
    return super.get(super.type.generated_offsets[2]) as boolean;
  }
  public set_index(v: boolean) {
    super.set(super.type.generated_offsets[2], v);
  }
  public get_min(): any | null {
    return super.get(super.type.generated_offsets[3]);
  }
  public set_min(v: any | null) {
    super.set(super.type.generated_offsets[3], v);
  }
  public get_max(): any | null {
    return super.get(super.type.generated_offsets[4]);
  }
  public set_max(v: any | null) {
    super.set(super.type.generated_offsets[4], v);
  }
  public get_avg(): any | null {
    return super.get(super.type.generated_offsets[5]);
  }
  public set_avg(v: any | null) {
    super.set(super.type.generated_offsets[5], v);
  }
  public get_std(): any | null {
    return super.get(super.type.generated_offsets[6]);
  }
  public set_std(v: any | null) {
    super.set(super.type.generated_offsets[6], v);
  }
 static create($g: $sdk.GreyCat, type: string | null, size: bigint | number, index: boolean, min: any | null, max: any | null, avg: any | null, std: any | null): TableColumnMeta {
    return new TableColumnMeta($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[7], type, size, index, min, max, avg, std);
  }
}

export class ti2d extends std_n.core.ti2d {}

export class Error extends std_n.core.Error {}

export class tf2d extends std_n.core.tf2d {}

export class ErrorCode extends $sdk.GCEnum {
  static readonly _type = 'core::ErrorCode';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes[0], attributes[1], attributes[2]);
  }

  public static none($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[0]] as $std.core.ErrorCode;
  }
  public static file_not_found($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[1]] as $std.core.ErrorCode;
  }
  public static file_read_error($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[2]] as $std.core.ErrorCode;
  }
  public static file_write_error($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[3]] as $std.core.ErrorCode;
  }
  public static unresolved_function($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[4]] as $std.core.ErrorCode;
  }
  public static too_deep_workspace($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[5]] as $std.core.ErrorCode;
  }
  public static too_deep_iterator($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[6]] as $std.core.ErrorCode;
  }
  public static wrong_path($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[7]] as $std.core.ErrorCode;
  }
  public static parse_error($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[8]] as $std.core.ErrorCode;
  }
  public static out_of_bounds($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[9]] as $std.core.ErrorCode;
  }
  public static division_by_zero($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[10]] as $std.core.ErrorCode;
  }
  public static wrong_operand($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[11]] as $std.core.ErrorCode;
  }
  public static wrong_entrypoint($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[12]] as $std.core.ErrorCode;
  }
  public static wrong_params($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[13]] as $std.core.ErrorCode;
  }
  public static wrong_param_type($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[14]] as $std.core.ErrorCode;
  }
  public static wrong_assert($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[15]] as $std.core.ErrorCode;
  }
  public static wrong_numeric($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[16]] as $std.core.ErrorCode;
  }
  public static wrong_time($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[17]] as $std.core.ErrorCode;
  }
  public static wrong_state($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[18]] as $std.core.ErrorCode;
  }
  public static wrong_null($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[19]] as $std.core.ErrorCode;
  }
  public static unresolved_ref($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[20]] as $std.core.ErrorCode;
  }
  public static assign_error($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[21]] as $std.core.ErrorCode;
  }
  public static read_field_requires_obj($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[22]] as $std.core.ErrorCode;
  }
  public static read_offset_requires_array($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[23]] as $std.core.ErrorCode;
  }
  public static write_offset_requires_array($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[24]] as $std.core.ErrorCode;
  }
  public static write_field_requires_object($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[25]] as $std.core.ErrorCode;
  }
  public static min_higher_max_error($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[26]] as $std.core.ErrorCode;
  }
  public static negative_std($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[27]] as $std.core.ErrorCode;
  }
  public static interrupted($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[28]] as $std.core.ErrorCode;
  }
  public static throw_($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[29]] as $std.core.ErrorCode;
  }
  public static wrong_type($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[30]] as $std.core.ErrorCode;
  }
  public static wrong_dimension($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[31]] as $std.core.ErrorCode;
  }
  public static unsupported_operation($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[32]] as $std.core.ErrorCode;
  }
  public static unsupported_type($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[33]] as $std.core.ErrorCode;
  }
  public static too_large($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[34]] as $std.core.ErrorCode;
  }
  public static dimensions_mismatch($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[35]] as $std.core.ErrorCode;
  }
  public static not_initialized($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[36]] as $std.core.ErrorCode;
  }
  public static timeout($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[37]] as $std.core.ErrorCode;
  }
  public static unauthorized($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[38]] as $std.core.ErrorCode;
  }
  public static forbidden($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[39]] as $std.core.ErrorCode;
  }
  public static runtime_error($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[40]] as $std.core.ErrorCode;
  }
  public static compile_error($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[41]] as $std.core.ErrorCode;
  }
  public static update_error($g: $sdk.GreyCat): $std.core.ErrorCode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[42]] as $std.core.ErrorCode;
  }
 static create($g: $sdk.GreyCat): ErrorCode {
    return new ErrorCode($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[11]);
  }
}

export class ti4d extends std_n.core.ti4d {}

export class SamplingMode extends $sdk.GCEnum {
  static readonly _type = 'core::SamplingMode';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes[0], attributes[1], attributes[2]);
  }

  public static fixed($g: $sdk.GreyCat): $std.core.SamplingMode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[13];
    return t.enum_values![t.generated_offsets[0]] as $std.core.SamplingMode;
  }
  public static fixed_reg($g: $sdk.GreyCat): $std.core.SamplingMode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[13];
    return t.enum_values![t.generated_offsets[1]] as $std.core.SamplingMode;
  }
  public static adaptative($g: $sdk.GreyCat): $std.core.SamplingMode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[13];
    return t.enum_values![t.generated_offsets[2]] as $std.core.SamplingMode;
  }
  public static dense($g: $sdk.GreyCat): $std.core.SamplingMode {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[13];
    return t.enum_values![t.generated_offsets[3]] as $std.core.SamplingMode;
  }
 static create($g: $sdk.GreyCat): SamplingMode {
    return new SamplingMode($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[13]);
  }
}

export class DurationUnit extends $sdk.GCEnum {
  static readonly _type = 'core::DurationUnit';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes[0], attributes[1], attributes[2]);
  }

  public static microseconds($g: $sdk.GreyCat): $std.core.DurationUnit {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[14];
    return t.enum_values![t.generated_offsets[0]] as $std.core.DurationUnit;
  }
  public static milliseconds($g: $sdk.GreyCat): $std.core.DurationUnit {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[14];
    return t.enum_values![t.generated_offsets[1]] as $std.core.DurationUnit;
  }
  public static seconds($g: $sdk.GreyCat): $std.core.DurationUnit {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[14];
    return t.enum_values![t.generated_offsets[2]] as $std.core.DurationUnit;
  }
  public static minutes($g: $sdk.GreyCat): $std.core.DurationUnit {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[14];
    return t.enum_values![t.generated_offsets[3]] as $std.core.DurationUnit;
  }
  public static hours($g: $sdk.GreyCat): $std.core.DurationUnit {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[14];
    return t.enum_values![t.generated_offsets[4]] as $std.core.DurationUnit;
  }
  public static days($g: $sdk.GreyCat): $std.core.DurationUnit {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[14];
    return t.enum_values![t.generated_offsets[5]] as $std.core.DurationUnit;
  }
  public static weeks($g: $sdk.GreyCat): $std.core.DurationUnit {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[14];
    return t.enum_values![t.generated_offsets[6]] as $std.core.DurationUnit;
  }
  public static months($g: $sdk.GreyCat): $std.core.DurationUnit {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[14];
    return t.enum_values![t.generated_offsets[7]] as $std.core.DurationUnit;
  }
  public static years($g: $sdk.GreyCat): $std.core.DurationUnit {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[14];
    return t.enum_values![t.generated_offsets[8]] as $std.core.DurationUnit;
  }
 static create($g: $sdk.GreyCat): DurationUnit {
    return new DurationUnit($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[14]);
  }
}

export class TensorType extends $sdk.GCEnum {
  static readonly _type = 'core::TensorType';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes[0], attributes[1], attributes[2]);
  }

  public static i32($g: $sdk.GreyCat): $std.core.TensorType {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[15];
    return t.enum_values![t.generated_offsets[0]] as $std.core.TensorType;
  }
  public static i64($g: $sdk.GreyCat): $std.core.TensorType {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[15];
    return t.enum_values![t.generated_offsets[1]] as $std.core.TensorType;
  }
  public static f32($g: $sdk.GreyCat): $std.core.TensorType {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[15];
    return t.enum_values![t.generated_offsets[2]] as $std.core.TensorType;
  }
  public static f64($g: $sdk.GreyCat): $std.core.TensorType {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[15];
    return t.enum_values![t.generated_offsets[3]] as $std.core.TensorType;
  }
  public static c64($g: $sdk.GreyCat): $std.core.TensorType {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[15];
    return t.enum_values![t.generated_offsets[4]] as $std.core.TensorType;
  }
  public static c128($g: $sdk.GreyCat): $std.core.TensorType {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[15];
    return t.enum_values![t.generated_offsets[5]] as $std.core.TensorType;
  }
 static create($g: $sdk.GreyCat): TensorType {
    return new TensorType($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[15]);
  }
}

export class Table extends std_n.core.Table {}

export class geo extends std_n.core.geo {}

export class ti6d extends std_n.core.ti6d {}

export class Tensor extends std_n.core.Tensor {}

export class GeoCircle extends $sdk.GCObject {
  static readonly _type = 'core::GeoCircle';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_center(): $sdk.std.core.geo {
    return super.get(super.type.generated_offsets[0]) as $sdk.std.core.geo;
  }
  public set_center(v: $sdk.std.core.geo) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_radius(): number {
    return super.get(super.type.generated_offsets[1]) as number;
  }
  public set_radius(v: number) {
    super.set(super.type.generated_offsets[1], v);
  }
 static create($g: $sdk.GreyCat, center: $sdk.std.core.geo, radius: number): GeoCircle {
    return new GeoCircle($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[20], center, radius);
  }
}

export class Date extends std_n.core.Date {}

export class Map<K = any, V = any> extends std_n.core.Map {}

export class duration extends std_n.core.duration {}

export class ti3d extends std_n.core.ti3d {}

export class nodeTime extends std_n.core.nodeTime {}

export class Array<T = any> extends std_n.core.Array {}

export class ti10d extends std_n.core.ti10d {}

export class function_ extends $sdk.GCObject {
  static readonly _type = 'core::function';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

 static create($g: $sdk.GreyCat): function_ {
    return new function_($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[28]);
  }
}

export class NodeTimeInfo extends $sdk.GCObject {
  static readonly _type = 'core::NodeTimeInfo';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_size(): bigint | number {
    return super.get(super.type.generated_offsets[0]) as bigint | number;
  }
  public set_size(v: bigint | number) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_from(): $sdk.std.core.time | null {
    return super.get(super.type.generated_offsets[1]) as $sdk.std.core.time | null;
  }
  public set_from(v: $sdk.std.core.time | null) {
    super.set(super.type.generated_offsets[1], v);
  }
  public get_to(): $sdk.std.core.time | null {
    return super.get(super.type.generated_offsets[2]) as $sdk.std.core.time | null;
  }
  public set_to(v: $sdk.std.core.time | null) {
    super.set(super.type.generated_offsets[2], v);
  }
 static create($g: $sdk.GreyCat, size: bigint | number, from: $sdk.std.core.time | null, to: $sdk.std.core.time | null): NodeTimeInfo {
    return new NodeTimeInfo($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[29], size, from, to);
  }
}

export class Tuple extends $sdk.GCObject {
  static readonly _type = 'core::Tuple';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_x(): any {
    return super.get(super.type.generated_offsets[0]);
  }
  public set_x(v: any) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_y(): any {
    return super.get(super.type.generated_offsets[1]);
  }
  public set_y(v: any) {
    super.set(super.type.generated_offsets[1], v);
  }
 static create($g: $sdk.GreyCat, x: any, y: any): Tuple {
    return new Tuple($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[30], x, y);
  }
}

export class nodeIndex extends std_n.core.nodeIndex {}

export class tf3d extends std_n.core.tf3d {}

export class GeoPoly extends std_n.core.GeoPoly {}

export class time extends std_n.core.time {}

export class DatePart extends $sdk.GCEnum {
  static readonly _type = 'core::DatePart';

  constructor(type: $sdk.AbiType, ...attributes: any[]) {
    super(type, attributes[0], attributes[1], attributes[2]);
  }

  public static years($g: $sdk.GreyCat): $std.core.DatePart {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[35];
    return t.enum_values![t.generated_offsets[0]] as $std.core.DatePart;
  }
  public static months($g: $sdk.GreyCat): $std.core.DatePart {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[35];
    return t.enum_values![t.generated_offsets[1]] as $std.core.DatePart;
  }
  public static days($g: $sdk.GreyCat): $std.core.DatePart {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[35];
    return t.enum_values![t.generated_offsets[2]] as $std.core.DatePart;
  }
  public static hours($g: $sdk.GreyCat): $std.core.DatePart {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[35];
    return t.enum_values![t.generated_offsets[3]] as $std.core.DatePart;
  }
  public static minutes($g: $sdk.GreyCat): $std.core.DatePart {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[35];
    return t.enum_values![t.generated_offsets[4]] as $std.core.DatePart;
  }
  public static seconds($g: $sdk.GreyCat): $std.core.DatePart {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[35];
    return t.enum_values![t.generated_offsets[5]] as $std.core.DatePart;
  }
  public static microseconds($g: $sdk.GreyCat): $std.core.DatePart {
    const t = $g.abi.libs_by_name.get($std.stdlib.name)!.mapped[35];
    return t.enum_values![t.generated_offsets[6]] as $std.core.DatePart;
  }
 static create($g: $sdk.GreyCat): DatePart {
    return new DatePart($g.abi.libs_by_name.get($std.stdlib.name)!.mapped[35]);
  }
}

export class nodeGeo extends std_n.core.nodeGeo {}

export class ti5d extends std_n.core.ti5d {}

export class tf4d extends std_n.core.tf4d {}

