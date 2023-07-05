// AUTO-GENERATED FILE PLEASE DO NOT MODIFY MANUALLY
/* eslint-disable */
// @ts-nocheck

import type { Abi, AbiType, GreyCat } from '../../index.js';
import { GCObject, GCEnum, std_n } from '../../index.js';
import * as std from './index.js';

// module: core.gcl
export class GeoBox extends GCObject {
  static readonly _type = 'core::GeoBox';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_sw(): std_n.core.geo {
    return super.get(super.type.generated_offsets[0]) as std_n.core.geo;
  }
  public set_sw(v: std_n.core.geo) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_ne(): std_n.core.geo {
    return super.get(super.type.generated_offsets[1]) as std_n.core.geo;
  }
  public set_ne(v: std_n.core.geo) {
    super.set(super.type.generated_offsets[1], v);
  }
  create(abi: Abi, sw: std_n.core.geo, ne: std_n.core.geo): GeoBox {
    return new GeoBox(abi.libs_by_name.get(std.name)!.mapped[0], sw, ne);
  }
}

export class nodeList extends std_n.core.nodeList {
  static override readonly _type = 'core::nodeList';

  public static create(abi: Abi): nodeList {
    return new nodeList(abi.libs_by_name.get(std.name)!.mapped[1]);
  }
}

export class TimeZone extends GCEnum {
  static readonly _type = 'core::TimeZone';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public static Africa_Accra(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[0]] as std.core.TimeZone;
  }
  public static Africa_Bamako(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[1]] as std.core.TimeZone;
  }
  public static Africa_Banjul(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[2]] as std.core.TimeZone;
  }
  public static Africa_Conakry(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[3]] as std.core.TimeZone;
  }
  public static Africa_Dakar(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[4]] as std.core.TimeZone;
  }
  public static Africa_Freetown(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[5]] as std.core.TimeZone;
  }
  public static Africa_Lome(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[6]] as std.core.TimeZone;
  }
  public static Africa_Nouakchott(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[7]] as std.core.TimeZone;
  }
  public static Africa_Ouagadougou(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[8]] as std.core.TimeZone;
  }
  public static Africa_Timbuktu(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[9]] as std.core.TimeZone;
  }
  public static Atlantic_Reykjavik(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[10]] as std.core.TimeZone;
  }
  public static Atlantic_St_Helena(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[11]] as std.core.TimeZone;
  }
  public static Iceland(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[12]] as std.core.TimeZone;
  }
  public static Egypt(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[13]] as std.core.TimeZone;
  }
  public static Africa_Maseru(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[14]] as std.core.TimeZone;
  }
  public static Africa_Mbabane(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[15]] as std.core.TimeZone;
  }
  public static Africa_Bangui(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[16]] as std.core.TimeZone;
  }
  public static Africa_Brazzaville(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[17]] as std.core.TimeZone;
  }
  public static Africa_Douala(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[18]] as std.core.TimeZone;
  }
  public static Africa_Kinshasa(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[19]] as std.core.TimeZone;
  }
  public static Africa_Libreville(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[20]] as std.core.TimeZone;
  }
  public static Africa_Luanda(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[21]] as std.core.TimeZone;
  }
  public static Africa_Malabo(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[22]] as std.core.TimeZone;
  }
  public static Africa_Niamey(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[23]] as std.core.TimeZone;
  }
  public static Africa_Porto_Novo(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[24]] as std.core.TimeZone;
  }
  public static Africa_Blantyre(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[25]] as std.core.TimeZone;
  }
  public static Africa_Bujumbura(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[26]] as std.core.TimeZone;
  }
  public static Africa_Gaborone(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[27]] as std.core.TimeZone;
  }
  public static Africa_Harare(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[28]] as std.core.TimeZone;
  }
  public static Africa_Kigali(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[29]] as std.core.TimeZone;
  }
  public static Africa_Lubumbashi(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[30]] as std.core.TimeZone;
  }
  public static Africa_Lusaka(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[31]] as std.core.TimeZone;
  }
  public static Africa_Addis_Ababa(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[32]] as std.core.TimeZone;
  }
  public static Africa_Asmara(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[33]] as std.core.TimeZone;
  }
  public static Africa_Asmera(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[34]] as std.core.TimeZone;
  }
  public static Africa_Dar_es_Salaam(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[35]] as std.core.TimeZone;
  }
  public static Africa_Djibouti(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[36]] as std.core.TimeZone;
  }
  public static Africa_Kampala(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[37]] as std.core.TimeZone;
  }
  public static Africa_Mogadishu(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[38]] as std.core.TimeZone;
  }
  public static Indian_Antananarivo(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[39]] as std.core.TimeZone;
  }
  public static Indian_Comoro(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[40]] as std.core.TimeZone;
  }
  public static Indian_Mayotte(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[41]] as std.core.TimeZone;
  }
  public static Libya(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[42]] as std.core.TimeZone;
  }
  public static America_Atka(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[43]] as std.core.TimeZone;
  }
  public static US_Aleutian(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[44]] as std.core.TimeZone;
  }
  public static US_Alaska(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[45]] as std.core.TimeZone;
  }
  public static America_Buenos_Aires(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[46]] as std.core.TimeZone;
  }
  public static America_Argentina_ComodRivadavia(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[47]] as std.core.TimeZone;
  }
  public static America_Catamarca(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[48]] as std.core.TimeZone;
  }
  public static America_Cordoba(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[49]] as std.core.TimeZone;
  }
  public static America_Rosario(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[50]] as std.core.TimeZone;
  }
  public static America_Jujuy(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[51]] as std.core.TimeZone;
  }
  public static America_Mendoza(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[52]] as std.core.TimeZone;
  }
  public static US_Central(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[53]] as std.core.TimeZone;
  }
  public static America_Shiprock(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[54]] as std.core.TimeZone;
  }
  public static Navajo(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[55]] as std.core.TimeZone;
  }
  public static US_Mountain(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[56]] as std.core.TimeZone;
  }
  public static US_Michigan(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[57]] as std.core.TimeZone;
  }
  public static America_Yellowknife(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[58]] as std.core.TimeZone;
  }
  public static Canada_Mountain(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[59]] as std.core.TimeZone;
  }
  public static Canada_Atlantic(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[60]] as std.core.TimeZone;
  }
  public static Cuba(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[61]] as std.core.TimeZone;
  }
  public static America_Fort_Wayne(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[62]] as std.core.TimeZone;
  }
  public static America_Indianapolis(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[63]] as std.core.TimeZone;
  }
  public static US_East_Indiana(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[64]] as std.core.TimeZone;
  }
  public static America_Knox_IN(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[65]] as std.core.TimeZone;
  }
  public static US_Indiana_Starke(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[66]] as std.core.TimeZone;
  }
  public static America_Pangnirtung(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[67]] as std.core.TimeZone;
  }
  public static Jamaica(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[68]] as std.core.TimeZone;
  }
  public static America_Louisville(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[69]] as std.core.TimeZone;
  }
  public static US_Pacific(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[70]] as std.core.TimeZone;
  }
  public static Brazil_West(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[71]] as std.core.TimeZone;
  }
  public static Mexico_BajaSur(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[72]] as std.core.TimeZone;
  }
  public static Mexico_General(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[73]] as std.core.TimeZone;
  }
  public static US_Eastern(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[74]] as std.core.TimeZone;
  }
  public static Brazil_DeNoronha(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[75]] as std.core.TimeZone;
  }
  public static America_Godthab(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[76]] as std.core.TimeZone;
  }
  public static America_Atikokan(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[77]] as std.core.TimeZone;
  }
  public static America_Cayman(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[78]] as std.core.TimeZone;
  }
  public static America_Coral_Harbour(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[79]] as std.core.TimeZone;
  }
  public static America_Creston(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[80]] as std.core.TimeZone;
  }
  public static US_Arizona(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[81]] as std.core.TimeZone;
  }
  public static America_Anguilla(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[82]] as std.core.TimeZone;
  }
  public static America_Antigua(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[83]] as std.core.TimeZone;
  }
  public static America_Aruba(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[84]] as std.core.TimeZone;
  }
  public static America_Blanc_Sablon(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[85]] as std.core.TimeZone;
  }
  public static America_Curacao(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[86]] as std.core.TimeZone;
  }
  public static America_Dominica(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[87]] as std.core.TimeZone;
  }
  public static America_Grenada(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[88]] as std.core.TimeZone;
  }
  public static America_Guadeloupe(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[89]] as std.core.TimeZone;
  }
  public static America_Kralendijk(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[90]] as std.core.TimeZone;
  }
  public static America_Lower_Princes(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[91]] as std.core.TimeZone;
  }
  public static America_Marigot(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[92]] as std.core.TimeZone;
  }
  public static America_Montserrat(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[93]] as std.core.TimeZone;
  }
  public static America_Port_of_Spain(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[94]] as std.core.TimeZone;
  }
  public static America_St_Barthelemy(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[95]] as std.core.TimeZone;
  }
  public static America_St_Kitts(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[96]] as std.core.TimeZone;
  }
  public static America_St_Lucia(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[97]] as std.core.TimeZone;
  }
  public static America_St_Thomas(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[98]] as std.core.TimeZone;
  }
  public static America_St_Vincent(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[99]] as std.core.TimeZone;
  }
  public static America_Tortola(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[100]] as std.core.TimeZone;
  }
  public static America_Virgin(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[101]] as std.core.TimeZone;
  }
  public static Canada_Saskatchewan(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[102]] as std.core.TimeZone;
  }
  public static America_Porto_Acre(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[103]] as std.core.TimeZone;
  }
  public static Brazil_Acre(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[104]] as std.core.TimeZone;
  }
  public static Chile_Continental(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[105]] as std.core.TimeZone;
  }
  public static Brazil_East(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[106]] as std.core.TimeZone;
  }
  public static Canada_Newfoundland(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[107]] as std.core.TimeZone;
  }
  public static America_Ensenada(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[108]] as std.core.TimeZone;
  }
  public static America_Santa_Isabel(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[109]] as std.core.TimeZone;
  }
  public static Mexico_BajaNorte(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[110]] as std.core.TimeZone;
  }
  public static America_Montreal(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[111]] as std.core.TimeZone;
  }
  public static America_Nassau(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[112]] as std.core.TimeZone;
  }
  public static America_Nipigon(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[113]] as std.core.TimeZone;
  }
  public static America_Thunder_Bay(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[114]] as std.core.TimeZone;
  }
  public static Canada_Eastern(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[115]] as std.core.TimeZone;
  }
  public static Canada_Pacific(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[116]] as std.core.TimeZone;
  }
  public static Canada_Yukon(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[117]] as std.core.TimeZone;
  }
  public static America_Rainy_River(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[118]] as std.core.TimeZone;
  }
  public static Canada_Central(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[119]] as std.core.TimeZone;
  }
  public static Asia_Ashkhabad(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[120]] as std.core.TimeZone;
  }
  public static Asia_Phnom_Penh(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[121]] as std.core.TimeZone;
  }
  public static Asia_Vientiane(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[122]] as std.core.TimeZone;
  }
  public static Indian_Christmas(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[123]] as std.core.TimeZone;
  }
  public static Asia_Dacca(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[124]] as std.core.TimeZone;
  }
  public static Asia_Muscat(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[125]] as std.core.TimeZone;
  }
  public static Indian_Mahe(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[126]] as std.core.TimeZone;
  }
  public static Indian_Reunion(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[127]] as std.core.TimeZone;
  }
  public static Asia_Saigon(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[128]] as std.core.TimeZone;
  }
  public static Hongkong(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[129]] as std.core.TimeZone;
  }
  public static Asia_Tel_Aviv(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[130]] as std.core.TimeZone;
  }
  public static Israel(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[131]] as std.core.TimeZone;
  }
  public static Asia_Katmandu(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[132]] as std.core.TimeZone;
  }
  public static Asia_Calcutta(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[133]] as std.core.TimeZone;
  }
  public static Asia_Brunei(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[134]] as std.core.TimeZone;
  }
  public static Asia_Macao(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[135]] as std.core.TimeZone;
  }
  public static Asia_Ujung_Pandang(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[136]] as std.core.TimeZone;
  }
  public static Europe_Nicosia(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[137]] as std.core.TimeZone;
  }
  public static Asia_Bahrain(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[138]] as std.core.TimeZone;
  }
  public static Antarctica_Syowa(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[139]] as std.core.TimeZone;
  }
  public static Asia_Aden(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[140]] as std.core.TimeZone;
  }
  public static Asia_Kuwait(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[141]] as std.core.TimeZone;
  }
  public static ROK(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[142]] as std.core.TimeZone;
  }
  public static Asia_Chongqing(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[143]] as std.core.TimeZone;
  }
  public static Asia_Chungking(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[144]] as std.core.TimeZone;
  }
  public static Asia_Harbin(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[145]] as std.core.TimeZone;
  }
  public static PRC(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[146]] as std.core.TimeZone;
  }
  public static Asia_Kuala_Lumpur(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[147]] as std.core.TimeZone;
  }
  public static Singapore(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[148]] as std.core.TimeZone;
  }
  public static ROC(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[149]] as std.core.TimeZone;
  }
  public static Iran(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[150]] as std.core.TimeZone;
  }
  public static Asia_Thimbu(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[151]] as std.core.TimeZone;
  }
  public static Japan(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[152]] as std.core.TimeZone;
  }
  public static Asia_Ulan_Bator(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[153]] as std.core.TimeZone;
  }
  public static Antarctica_Vostok(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[154]] as std.core.TimeZone;
  }
  public static Asia_Kashgar(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[155]] as std.core.TimeZone;
  }
  public static Asia_Rangoon(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[156]] as std.core.TimeZone;
  }
  public static Indian_Cocos(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[157]] as std.core.TimeZone;
  }
  public static Atlantic_Faeroe(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[158]] as std.core.TimeZone;
  }
  public static Australia_South(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[159]] as std.core.TimeZone;
  }
  public static Australia_Queensland(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[160]] as std.core.TimeZone;
  }
  public static Australia_Yancowinna(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[161]] as std.core.TimeZone;
  }
  public static Australia_North(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[162]] as std.core.TimeZone;
  }
  public static Australia_Currie(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[163]] as std.core.TimeZone;
  }
  public static Australia_Tasmania(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[164]] as std.core.TimeZone;
  }
  public static Australia_LHI(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[165]] as std.core.TimeZone;
  }
  public static Australia_Victoria(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[166]] as std.core.TimeZone;
  }
  public static Australia_West(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[167]] as std.core.TimeZone;
  }
  public static Australia_ACT(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[168]] as std.core.TimeZone;
  }
  public static Australia_Canberra(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[169]] as std.core.TimeZone;
  }
  public static Australia_NSW(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[170]] as std.core.TimeZone;
  }
  public static GMT(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[171]] as std.core.TimeZone;
  }
  public static GMTx0(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[172]] as std.core.TimeZone;
  }
  public static GMT_0(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[173]] as std.core.TimeZone;
  }
  public static GMT0(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[174]] as std.core.TimeZone;
  }
  public static Greenwich(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[175]] as std.core.TimeZone;
  }
  public static UCT(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[176]] as std.core.TimeZone;
  }
  public static UTC(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[177]] as std.core.TimeZone;
  }
  public static Universal(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[178]] as std.core.TimeZone;
  }
  public static Zulu(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[179]] as std.core.TimeZone;
  }
  public static Europe_Ljubljana(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[180]] as std.core.TimeZone;
  }
  public static Europe_Podgorica(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[181]] as std.core.TimeZone;
  }
  public static Europe_Sarajevo(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[182]] as std.core.TimeZone;
  }
  public static Europe_Skopje(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[183]] as std.core.TimeZone;
  }
  public static Europe_Zagreb(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[184]] as std.core.TimeZone;
  }
  public static Arctic_Longyearbyen(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[185]] as std.core.TimeZone;
  }
  public static Atlantic_Jan_Mayen(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[186]] as std.core.TimeZone;
  }
  public static Europe_Copenhagen(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[187]] as std.core.TimeZone;
  }
  public static Europe_Oslo(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[188]] as std.core.TimeZone;
  }
  public static Europe_Stockholm(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[189]] as std.core.TimeZone;
  }
  public static Europe_Amsterdam(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[190]] as std.core.TimeZone;
  }
  public static Europe_Luxembourg(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[191]] as std.core.TimeZone;
  }
  public static Europe_Tiraspol(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[192]] as std.core.TimeZone;
  }
  public static Eire(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[193]] as std.core.TimeZone;
  }
  public static Europe_Mariehamn(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[194]] as std.core.TimeZone;
  }
  public static Asia_Istanbul(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[195]] as std.core.TimeZone;
  }
  public static Turkey(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[196]] as std.core.TimeZone;
  }
  public static Europe_Kiev(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[197]] as std.core.TimeZone;
  }
  public static Europe_Uzhgorod(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[198]] as std.core.TimeZone;
  }
  public static Europe_Zaporozhye(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[199]] as std.core.TimeZone;
  }
  public static Portugal(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[200]] as std.core.TimeZone;
  }
  public static Europe_Belfast(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[201]] as std.core.TimeZone;
  }
  public static Europe_Guernsey(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[202]] as std.core.TimeZone;
  }
  public static Europe_Isle_of_Man(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[203]] as std.core.TimeZone;
  }
  public static Europe_Jersey(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[204]] as std.core.TimeZone;
  }
  public static GB(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[205]] as std.core.TimeZone;
  }
  public static GB_Eire(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[206]] as std.core.TimeZone;
  }
  public static W_SU(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[207]] as std.core.TimeZone;
  }
  public static Europe_Monaco(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[208]] as std.core.TimeZone;
  }
  public static Europe_Bratislava(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[209]] as std.core.TimeZone;
  }
  public static Europe_San_Marino(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[210]] as std.core.TimeZone;
  }
  public static Europe_Vatican(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[211]] as std.core.TimeZone;
  }
  public static Poland(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[212]] as std.core.TimeZone;
  }
  public static Europe_Busingen(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[213]] as std.core.TimeZone;
  }
  public static Europe_Vaduz(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[214]] as std.core.TimeZone;
  }
  public static Indian_Kerguelen(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[215]] as std.core.TimeZone;
  }
  public static Antarctica_McMurdo(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[216]] as std.core.TimeZone;
  }
  public static Antarctica_South_Pole(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[217]] as std.core.TimeZone;
  }
  public static NZ(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[218]] as std.core.TimeZone;
  }
  public static NZ_CHAT(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[219]] as std.core.TimeZone;
  }
  public static Chile_EasterIsland(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[220]] as std.core.TimeZone;
  }
  public static Pacific_Pohnpei(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[221]] as std.core.TimeZone;
  }
  public static Pacific_Ponape(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[222]] as std.core.TimeZone;
  }
  public static Pacific_Saipan(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[223]] as std.core.TimeZone;
  }
  public static Pacific_Johnston(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[224]] as std.core.TimeZone;
  }
  public static US_Hawaii(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[225]] as std.core.TimeZone;
  }
  public static Pacific_Enderbury(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[226]] as std.core.TimeZone;
  }
  public static Kwajalein(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[227]] as std.core.TimeZone;
  }
  public static Pacific_Midway(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[228]] as std.core.TimeZone;
  }
  public static Pacific_Samoa(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[229]] as std.core.TimeZone;
  }
  public static US_Samoa(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[230]] as std.core.TimeZone;
  }
  public static Antarctica_DumontDUrville(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[231]] as std.core.TimeZone;
  }
  public static Pacific_Chuuk(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[232]] as std.core.TimeZone;
  }
  public static Pacific_Truk(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[233]] as std.core.TimeZone;
  }
  public static Pacific_Yap(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[234]] as std.core.TimeZone;
  }
  public static Pacific_Funafuti(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[235]] as std.core.TimeZone;
  }
  public static Pacific_Majuro(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[236]] as std.core.TimeZone;
  }
  public static Pacific_Wake(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[237]] as std.core.TimeZone;
  }
  public static Pacific_Wallis(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[238]] as std.core.TimeZone;
  }
  public static Africa_Abidjan(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[239]] as std.core.TimeZone;
  }
  public static Africa_Algiers(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[240]] as std.core.TimeZone;
  }
  public static Africa_Bissau(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[241]] as std.core.TimeZone;
  }
  public static Africa_Cairo(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[242]] as std.core.TimeZone;
  }
  public static Africa_Casablanca(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[243]] as std.core.TimeZone;
  }
  public static Africa_Ceuta(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[244]] as std.core.TimeZone;
  }
  public static Africa_El_Aaiun(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[245]] as std.core.TimeZone;
  }
  public static Africa_Johannesburg(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[246]] as std.core.TimeZone;
  }
  public static Africa_Juba(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[247]] as std.core.TimeZone;
  }
  public static Africa_Khartoum(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[248]] as std.core.TimeZone;
  }
  public static Africa_Lagos(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[249]] as std.core.TimeZone;
  }
  public static Africa_Maputo(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[250]] as std.core.TimeZone;
  }
  public static Africa_Monrovia(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[251]] as std.core.TimeZone;
  }
  public static Africa_Nairobi(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[252]] as std.core.TimeZone;
  }
  public static Africa_Ndjamena(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[253]] as std.core.TimeZone;
  }
  public static Africa_Sao_Tome(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[254]] as std.core.TimeZone;
  }
  public static Africa_Tripoli(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[255]] as std.core.TimeZone;
  }
  public static Africa_Tunis(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[256]] as std.core.TimeZone;
  }
  public static Africa_Windhoek(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[257]] as std.core.TimeZone;
  }
  public static America_Adak(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[258]] as std.core.TimeZone;
  }
  public static America_Anchorage(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[259]] as std.core.TimeZone;
  }
  public static America_Araguaina(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[260]] as std.core.TimeZone;
  }
  public static America_Argentina_Buenos_Aires(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[261]] as std.core.TimeZone;
  }
  public static America_Argentina_Catamarca(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[262]] as std.core.TimeZone;
  }
  public static America_Argentina_Cordoba(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[263]] as std.core.TimeZone;
  }
  public static America_Argentina_Jujuy(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[264]] as std.core.TimeZone;
  }
  public static America_Argentina_La_Rioja(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[265]] as std.core.TimeZone;
  }
  public static America_Argentina_Mendoza(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[266]] as std.core.TimeZone;
  }
  public static America_Argentina_Rio_Gallegos(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[267]] as std.core.TimeZone;
  }
  public static America_Argentina_Salta(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[268]] as std.core.TimeZone;
  }
  public static America_Argentina_San_Juan(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[269]] as std.core.TimeZone;
  }
  public static America_Argentina_San_Luis(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[270]] as std.core.TimeZone;
  }
  public static America_Argentina_Tucuman(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[271]] as std.core.TimeZone;
  }
  public static America_Argentina_Ushuaia(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[272]] as std.core.TimeZone;
  }
  public static America_Asuncion(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[273]] as std.core.TimeZone;
  }
  public static America_Bahia(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[274]] as std.core.TimeZone;
  }
  public static America_Bahia_Banderas(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[275]] as std.core.TimeZone;
  }
  public static America_Barbados(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[276]] as std.core.TimeZone;
  }
  public static America_Belem(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[277]] as std.core.TimeZone;
  }
  public static America_Belize(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[278]] as std.core.TimeZone;
  }
  public static America_Boa_Vista(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[279]] as std.core.TimeZone;
  }
  public static America_Bogota(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[280]] as std.core.TimeZone;
  }
  public static America_Boise(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[281]] as std.core.TimeZone;
  }
  public static America_Cambridge_Bay(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[282]] as std.core.TimeZone;
  }
  public static America_Campo_Grande(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[283]] as std.core.TimeZone;
  }
  public static America_Cancun(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[284]] as std.core.TimeZone;
  }
  public static America_Caracas(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[285]] as std.core.TimeZone;
  }
  public static America_Cayenne(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[286]] as std.core.TimeZone;
  }
  public static America_Chicago(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[287]] as std.core.TimeZone;
  }
  public static America_Chihuahua(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[288]] as std.core.TimeZone;
  }
  public static America_Ciudad_Juarez(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[289]] as std.core.TimeZone;
  }
  public static America_Costa_Rica(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[290]] as std.core.TimeZone;
  }
  public static America_Cuiaba(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[291]] as std.core.TimeZone;
  }
  public static America_Danmarkshavn(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[292]] as std.core.TimeZone;
  }
  public static America_Dawson(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[293]] as std.core.TimeZone;
  }
  public static America_Dawson_Creek(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[294]] as std.core.TimeZone;
  }
  public static America_Denver(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[295]] as std.core.TimeZone;
  }
  public static America_Detroit(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[296]] as std.core.TimeZone;
  }
  public static America_Edmonton(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[297]] as std.core.TimeZone;
  }
  public static America_Eirunepe(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[298]] as std.core.TimeZone;
  }
  public static America_El_Salvador(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[299]] as std.core.TimeZone;
  }
  public static America_Fort_Nelson(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[300]] as std.core.TimeZone;
  }
  public static America_Fortaleza(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[301]] as std.core.TimeZone;
  }
  public static America_Glace_Bay(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[302]] as std.core.TimeZone;
  }
  public static America_Goose_Bay(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[303]] as std.core.TimeZone;
  }
  public static America_Grand_Turk(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[304]] as std.core.TimeZone;
  }
  public static America_Guatemala(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[305]] as std.core.TimeZone;
  }
  public static America_Guayaquil(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[306]] as std.core.TimeZone;
  }
  public static America_Guyana(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[307]] as std.core.TimeZone;
  }
  public static America_Halifax(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[308]] as std.core.TimeZone;
  }
  public static America_Havana(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[309]] as std.core.TimeZone;
  }
  public static America_Hermosillo(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[310]] as std.core.TimeZone;
  }
  public static America_Indiana_Indianapolis(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[311]] as std.core.TimeZone;
  }
  public static America_Indiana_Knox(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[312]] as std.core.TimeZone;
  }
  public static America_Indiana_Marengo(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[313]] as std.core.TimeZone;
  }
  public static America_Indiana_Petersburg(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[314]] as std.core.TimeZone;
  }
  public static America_Indiana_Tell_City(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[315]] as std.core.TimeZone;
  }
  public static America_Indiana_Vevay(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[316]] as std.core.TimeZone;
  }
  public static America_Indiana_Vincennes(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[317]] as std.core.TimeZone;
  }
  public static America_Indiana_Winamac(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[318]] as std.core.TimeZone;
  }
  public static America_Inuvik(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[319]] as std.core.TimeZone;
  }
  public static America_Iqaluit(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[320]] as std.core.TimeZone;
  }
  public static America_Jamaica(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[321]] as std.core.TimeZone;
  }
  public static America_Juneau(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[322]] as std.core.TimeZone;
  }
  public static America_Kentucky_Louisville(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[323]] as std.core.TimeZone;
  }
  public static America_Kentucky_Monticello(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[324]] as std.core.TimeZone;
  }
  public static America_La_Paz(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[325]] as std.core.TimeZone;
  }
  public static America_Lima(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[326]] as std.core.TimeZone;
  }
  public static America_Los_Angeles(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[327]] as std.core.TimeZone;
  }
  public static America_Maceio(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[328]] as std.core.TimeZone;
  }
  public static America_Managua(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[329]] as std.core.TimeZone;
  }
  public static America_Manaus(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[330]] as std.core.TimeZone;
  }
  public static America_Martinique(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[331]] as std.core.TimeZone;
  }
  public static America_Matamoros(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[332]] as std.core.TimeZone;
  }
  public static America_Mazatlan(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[333]] as std.core.TimeZone;
  }
  public static America_Menominee(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[334]] as std.core.TimeZone;
  }
  public static America_Merida(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[335]] as std.core.TimeZone;
  }
  public static America_Metlakatla(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[336]] as std.core.TimeZone;
  }
  public static America_Mexico_City(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[337]] as std.core.TimeZone;
  }
  public static America_Miquelon(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[338]] as std.core.TimeZone;
  }
  public static America_Moncton(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[339]] as std.core.TimeZone;
  }
  public static America_Monterrey(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[340]] as std.core.TimeZone;
  }
  public static America_Montevideo(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[341]] as std.core.TimeZone;
  }
  public static America_New_York(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[342]] as std.core.TimeZone;
  }
  public static America_Nome(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[343]] as std.core.TimeZone;
  }
  public static America_Noronha(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[344]] as std.core.TimeZone;
  }
  public static America_North_Dakota_Beulah(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[345]] as std.core.TimeZone;
  }
  public static America_North_Dakota_Center(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[346]] as std.core.TimeZone;
  }
  public static America_North_Dakota_New_Salem(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[347]] as std.core.TimeZone;
  }
  public static America_Nuuk(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[348]] as std.core.TimeZone;
  }
  public static America_Ojinaga(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[349]] as std.core.TimeZone;
  }
  public static America_Panama(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[350]] as std.core.TimeZone;
  }
  public static America_Paramaribo(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[351]] as std.core.TimeZone;
  }
  public static America_Phoenix(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[352]] as std.core.TimeZone;
  }
  public static America_Port_au_Prince(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[353]] as std.core.TimeZone;
  }
  public static America_Porto_Velho(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[354]] as std.core.TimeZone;
  }
  public static America_Puerto_Rico(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[355]] as std.core.TimeZone;
  }
  public static America_Punta_Arenas(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[356]] as std.core.TimeZone;
  }
  public static America_Rankin_Inlet(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[357]] as std.core.TimeZone;
  }
  public static America_Recife(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[358]] as std.core.TimeZone;
  }
  public static America_Regina(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[359]] as std.core.TimeZone;
  }
  public static America_Resolute(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[360]] as std.core.TimeZone;
  }
  public static America_Rio_Branco(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[361]] as std.core.TimeZone;
  }
  public static America_Santarem(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[362]] as std.core.TimeZone;
  }
  public static America_Santiago(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[363]] as std.core.TimeZone;
  }
  public static America_Santo_Domingo(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[364]] as std.core.TimeZone;
  }
  public static America_Sao_Paulo(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[365]] as std.core.TimeZone;
  }
  public static America_Scoresbysund(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[366]] as std.core.TimeZone;
  }
  public static America_Sitka(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[367]] as std.core.TimeZone;
  }
  public static America_St_Johns(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[368]] as std.core.TimeZone;
  }
  public static America_Swift_Current(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[369]] as std.core.TimeZone;
  }
  public static America_Tegucigalpa(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[370]] as std.core.TimeZone;
  }
  public static America_Thule(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[371]] as std.core.TimeZone;
  }
  public static America_Tijuana(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[372]] as std.core.TimeZone;
  }
  public static America_Toronto(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[373]] as std.core.TimeZone;
  }
  public static America_Vancouver(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[374]] as std.core.TimeZone;
  }
  public static America_Whitehorse(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[375]] as std.core.TimeZone;
  }
  public static America_Winnipeg(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[376]] as std.core.TimeZone;
  }
  public static America_Yakutat(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[377]] as std.core.TimeZone;
  }
  public static Antarctica_Casey(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[378]] as std.core.TimeZone;
  }
  public static Antarctica_Davis(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[379]] as std.core.TimeZone;
  }
  public static Antarctica_Macquarie(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[380]] as std.core.TimeZone;
  }
  public static Antarctica_Mawson(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[381]] as std.core.TimeZone;
  }
  public static Antarctica_Palmer(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[382]] as std.core.TimeZone;
  }
  public static Antarctica_Rothera(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[383]] as std.core.TimeZone;
  }
  public static Antarctica_Troll(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[384]] as std.core.TimeZone;
  }
  public static Asia_Almaty(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[385]] as std.core.TimeZone;
  }
  public static Asia_Amman(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[386]] as std.core.TimeZone;
  }
  public static Asia_Anadyr(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[387]] as std.core.TimeZone;
  }
  public static Asia_Aqtau(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[388]] as std.core.TimeZone;
  }
  public static Asia_Aqtobe(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[389]] as std.core.TimeZone;
  }
  public static Asia_Ashgabat(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[390]] as std.core.TimeZone;
  }
  public static Asia_Atyrau(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[391]] as std.core.TimeZone;
  }
  public static Asia_Baghdad(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[392]] as std.core.TimeZone;
  }
  public static Asia_Baku(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[393]] as std.core.TimeZone;
  }
  public static Asia_Bangkok(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[394]] as std.core.TimeZone;
  }
  public static Asia_Barnaul(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[395]] as std.core.TimeZone;
  }
  public static Asia_Beirut(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[396]] as std.core.TimeZone;
  }
  public static Asia_Bishkek(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[397]] as std.core.TimeZone;
  }
  public static Asia_Chita(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[398]] as std.core.TimeZone;
  }
  public static Asia_Choibalsan(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[399]] as std.core.TimeZone;
  }
  public static Asia_Colombo(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[400]] as std.core.TimeZone;
  }
  public static Asia_Damascus(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[401]] as std.core.TimeZone;
  }
  public static Asia_Dhaka(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[402]] as std.core.TimeZone;
  }
  public static Asia_Dili(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[403]] as std.core.TimeZone;
  }
  public static Asia_Dubai(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[404]] as std.core.TimeZone;
  }
  public static Asia_Dushanbe(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[405]] as std.core.TimeZone;
  }
  public static Asia_Famagusta(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[406]] as std.core.TimeZone;
  }
  public static Asia_Gaza(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[407]] as std.core.TimeZone;
  }
  public static Asia_Hebron(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[408]] as std.core.TimeZone;
  }
  public static Asia_Ho_Chi_Minh(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[409]] as std.core.TimeZone;
  }
  public static Asia_Hong_Kong(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[410]] as std.core.TimeZone;
  }
  public static Asia_Hovd(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[411]] as std.core.TimeZone;
  }
  public static Asia_Irkutsk(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[412]] as std.core.TimeZone;
  }
  public static Asia_Jakarta(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[413]] as std.core.TimeZone;
  }
  public static Asia_Jayapura(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[414]] as std.core.TimeZone;
  }
  public static Asia_Jerusalem(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[415]] as std.core.TimeZone;
  }
  public static Asia_Kabul(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[416]] as std.core.TimeZone;
  }
  public static Asia_Kamchatka(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[417]] as std.core.TimeZone;
  }
  public static Asia_Karachi(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[418]] as std.core.TimeZone;
  }
  public static Asia_Kathmandu(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[419]] as std.core.TimeZone;
  }
  public static Asia_Khandyga(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[420]] as std.core.TimeZone;
  }
  public static Asia_Kolkata(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[421]] as std.core.TimeZone;
  }
  public static Asia_Krasnoyarsk(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[422]] as std.core.TimeZone;
  }
  public static Asia_Kuching(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[423]] as std.core.TimeZone;
  }
  public static Asia_Macau(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[424]] as std.core.TimeZone;
  }
  public static Asia_Magadan(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[425]] as std.core.TimeZone;
  }
  public static Asia_Makassar(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[426]] as std.core.TimeZone;
  }
  public static Asia_Manila(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[427]] as std.core.TimeZone;
  }
  public static Asia_Nicosia(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[428]] as std.core.TimeZone;
  }
  public static Asia_Novokuznetsk(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[429]] as std.core.TimeZone;
  }
  public static Asia_Novosibirsk(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[430]] as std.core.TimeZone;
  }
  public static Asia_Omsk(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[431]] as std.core.TimeZone;
  }
  public static Asia_Oral(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[432]] as std.core.TimeZone;
  }
  public static Asia_Pontianak(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[433]] as std.core.TimeZone;
  }
  public static Asia_Pyongyang(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[434]] as std.core.TimeZone;
  }
  public static Asia_Qatar(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[435]] as std.core.TimeZone;
  }
  public static Asia_Qostanay(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[436]] as std.core.TimeZone;
  }
  public static Asia_Qyzylorda(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[437]] as std.core.TimeZone;
  }
  public static Asia_Riyadh(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[438]] as std.core.TimeZone;
  }
  public static Asia_Sakhalin(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[439]] as std.core.TimeZone;
  }
  public static Asia_Samarkand(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[440]] as std.core.TimeZone;
  }
  public static Asia_Seoul(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[441]] as std.core.TimeZone;
  }
  public static Asia_Shanghai(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[442]] as std.core.TimeZone;
  }
  public static Asia_Singapore(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[443]] as std.core.TimeZone;
  }
  public static Asia_Srednekolymsk(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[444]] as std.core.TimeZone;
  }
  public static Asia_Taipei(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[445]] as std.core.TimeZone;
  }
  public static Asia_Tashkent(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[446]] as std.core.TimeZone;
  }
  public static Asia_Tbilisi(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[447]] as std.core.TimeZone;
  }
  public static Asia_Tehran(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[448]] as std.core.TimeZone;
  }
  public static Asia_Thimphu(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[449]] as std.core.TimeZone;
  }
  public static Asia_Tokyo(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[450]] as std.core.TimeZone;
  }
  public static Asia_Tomsk(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[451]] as std.core.TimeZone;
  }
  public static Asia_Ulaanbaatar(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[452]] as std.core.TimeZone;
  }
  public static Asia_Urumqi(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[453]] as std.core.TimeZone;
  }
  public static Asia_Ust_Nera(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[454]] as std.core.TimeZone;
  }
  public static Asia_Vladivostok(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[455]] as std.core.TimeZone;
  }
  public static Asia_Yakutsk(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[456]] as std.core.TimeZone;
  }
  public static Asia_Yangon(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[457]] as std.core.TimeZone;
  }
  public static Asia_Yekaterinburg(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[458]] as std.core.TimeZone;
  }
  public static Asia_Yerevan(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[459]] as std.core.TimeZone;
  }
  public static Atlantic_Azores(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[460]] as std.core.TimeZone;
  }
  public static Atlantic_Bermuda(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[461]] as std.core.TimeZone;
  }
  public static Atlantic_Canary(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[462]] as std.core.TimeZone;
  }
  public static Atlantic_Cape_Verde(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[463]] as std.core.TimeZone;
  }
  public static Atlantic_Faroe(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[464]] as std.core.TimeZone;
  }
  public static Atlantic_Madeira(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[465]] as std.core.TimeZone;
  }
  public static Atlantic_South_Georgia(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[466]] as std.core.TimeZone;
  }
  public static Atlantic_Stanley(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[467]] as std.core.TimeZone;
  }
  public static Australia_Adelaide(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[468]] as std.core.TimeZone;
  }
  public static Australia_Brisbane(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[469]] as std.core.TimeZone;
  }
  public static Australia_Broken_Hill(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[470]] as std.core.TimeZone;
  }
  public static Australia_Darwin(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[471]] as std.core.TimeZone;
  }
  public static Australia_Eucla(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[472]] as std.core.TimeZone;
  }
  public static Australia_Hobart(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[473]] as std.core.TimeZone;
  }
  public static Australia_Lindeman(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[474]] as std.core.TimeZone;
  }
  public static Australia_Lord_Howe(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[475]] as std.core.TimeZone;
  }
  public static Australia_Melbourne(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[476]] as std.core.TimeZone;
  }
  public static Australia_Perth(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[477]] as std.core.TimeZone;
  }
  public static Australia_Sydney(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[478]] as std.core.TimeZone;
  }
  public static CET(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[479]] as std.core.TimeZone;
  }
  public static CST6CDT(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[480]] as std.core.TimeZone;
  }
  public static EET(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[481]] as std.core.TimeZone;
  }
  public static EST(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[482]] as std.core.TimeZone;
  }
  public static EST5EDT(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[483]] as std.core.TimeZone;
  }
  public static Europe_Andorra(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[484]] as std.core.TimeZone;
  }
  public static Europe_Astrakhan(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[485]] as std.core.TimeZone;
  }
  public static Europe_Athens(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[486]] as std.core.TimeZone;
  }
  public static Europe_Belgrade(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[487]] as std.core.TimeZone;
  }
  public static Europe_Berlin(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[488]] as std.core.TimeZone;
  }
  public static Europe_Brussels(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[489]] as std.core.TimeZone;
  }
  public static Europe_Bucharest(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[490]] as std.core.TimeZone;
  }
  public static Europe_Budapest(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[491]] as std.core.TimeZone;
  }
  public static Europe_Chisinau(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[492]] as std.core.TimeZone;
  }
  public static Europe_Dublin(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[493]] as std.core.TimeZone;
  }
  public static Europe_Gibraltar(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[494]] as std.core.TimeZone;
  }
  public static Europe_Helsinki(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[495]] as std.core.TimeZone;
  }
  public static Europe_Istanbul(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[496]] as std.core.TimeZone;
  }
  public static Europe_Kaliningrad(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[497]] as std.core.TimeZone;
  }
  public static Europe_Kirov(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[498]] as std.core.TimeZone;
  }
  public static Europe_Kyiv(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[499]] as std.core.TimeZone;
  }
  public static Europe_Lisbon(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[500]] as std.core.TimeZone;
  }
  public static Europe_London(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[501]] as std.core.TimeZone;
  }
  public static Europe_Madrid(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[502]] as std.core.TimeZone;
  }
  public static Europe_Malta(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[503]] as std.core.TimeZone;
  }
  public static Europe_Minsk(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[504]] as std.core.TimeZone;
  }
  public static Europe_Moscow(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[505]] as std.core.TimeZone;
  }
  public static Europe_Paris(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[506]] as std.core.TimeZone;
  }
  public static Europe_Prague(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[507]] as std.core.TimeZone;
  }
  public static Europe_Riga(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[508]] as std.core.TimeZone;
  }
  public static Europe_Rome(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[509]] as std.core.TimeZone;
  }
  public static Europe_Samara(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[510]] as std.core.TimeZone;
  }
  public static Europe_Saratov(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[511]] as std.core.TimeZone;
  }
  public static Europe_Simferopol(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[512]] as std.core.TimeZone;
  }
  public static Europe_Sofia(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[513]] as std.core.TimeZone;
  }
  public static Europe_Tallinn(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[514]] as std.core.TimeZone;
  }
  public static Europe_Tirane(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[515]] as std.core.TimeZone;
  }
  public static Europe_Ulyanovsk(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[516]] as std.core.TimeZone;
  }
  public static Europe_Vienna(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[517]] as std.core.TimeZone;
  }
  public static Europe_Vilnius(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[518]] as std.core.TimeZone;
  }
  public static Europe_Volgograd(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[519]] as std.core.TimeZone;
  }
  public static Europe_Warsaw(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[520]] as std.core.TimeZone;
  }
  public static Europe_Zurich(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[521]] as std.core.TimeZone;
  }
  public static Factory(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[522]] as std.core.TimeZone;
  }
  public static HST(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[523]] as std.core.TimeZone;
  }
  public static Indian_Chagos(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[524]] as std.core.TimeZone;
  }
  public static Indian_Maldives(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[525]] as std.core.TimeZone;
  }
  public static Indian_Mauritius(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[526]] as std.core.TimeZone;
  }
  public static MET(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[527]] as std.core.TimeZone;
  }
  public static MST(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[528]] as std.core.TimeZone;
  }
  public static MST7MDT(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[529]] as std.core.TimeZone;
  }
  public static PST8PDT(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[530]] as std.core.TimeZone;
  }
  public static Pacific_Apia(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[531]] as std.core.TimeZone;
  }
  public static Pacific_Auckland(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[532]] as std.core.TimeZone;
  }
  public static Pacific_Bougainville(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[533]] as std.core.TimeZone;
  }
  public static Pacific_Chatham(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[534]] as std.core.TimeZone;
  }
  public static Pacific_Easter(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[535]] as std.core.TimeZone;
  }
  public static Pacific_Efate(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[536]] as std.core.TimeZone;
  }
  public static Pacific_Fakaofo(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[537]] as std.core.TimeZone;
  }
  public static Pacific_Fiji(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[538]] as std.core.TimeZone;
  }
  public static Pacific_Galapagos(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[539]] as std.core.TimeZone;
  }
  public static Pacific_Gambier(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[540]] as std.core.TimeZone;
  }
  public static Pacific_Guadalcanal(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[541]] as std.core.TimeZone;
  }
  public static Pacific_Guam(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[542]] as std.core.TimeZone;
  }
  public static Pacific_Honolulu(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[543]] as std.core.TimeZone;
  }
  public static Pacific_Kanton(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[544]] as std.core.TimeZone;
  }
  public static Pacific_Kiritimati(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[545]] as std.core.TimeZone;
  }
  public static Pacific_Kosrae(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[546]] as std.core.TimeZone;
  }
  public static Pacific_Kwajalein(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[547]] as std.core.TimeZone;
  }
  public static Pacific_Marquesas(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[548]] as std.core.TimeZone;
  }
  public static Pacific_Nauru(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[549]] as std.core.TimeZone;
  }
  public static Pacific_Niue(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[550]] as std.core.TimeZone;
  }
  public static Pacific_Norfolk(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[551]] as std.core.TimeZone;
  }
  public static Pacific_Noumea(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[552]] as std.core.TimeZone;
  }
  public static Pacific_Pago_Pago(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[553]] as std.core.TimeZone;
  }
  public static Pacific_Palau(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[554]] as std.core.TimeZone;
  }
  public static Pacific_Pitcairn(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[555]] as std.core.TimeZone;
  }
  public static Pacific_Port_Moresby(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[556]] as std.core.TimeZone;
  }
  public static Pacific_Rarotonga(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[557]] as std.core.TimeZone;
  }
  public static Pacific_Tahiti(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[558]] as std.core.TimeZone;
  }
  public static Pacific_Tarawa(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[559]] as std.core.TimeZone;
  }
  public static Pacific_Tongatapu(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[560]] as std.core.TimeZone;
  }
  public static WET(abi: Abi): std.core.TimeZone {
    const t = abi.libs_by_name.get(std.name)!.mapped[2];
    return t.enum_values![t.generated_offsets[561]] as std.core.TimeZone;
  }
  create(abi: Abi): TimeZone {
    return new TimeZone(abi.libs_by_name.get(std.name)!.mapped[2]);
  }
}

export class nodeIndexBucket extends std_n.core.nodeIndexBucket {
  static override readonly _type = 'core::nodeIndexBucket';

  public static create(abi: Abi): nodeIndexBucket {
    return new nodeIndexBucket(abi.libs_by_name.get(std.name)!.mapped[3]);
  }
}

export class node extends std_n.core.node {
  static override readonly _type = 'core::node';

  public static create(abi: Abi): node {
    return new node(abi.libs_by_name.get(std.name)!.mapped[4]);
  }
}

export class nodeTimeCursor extends std_n.core.nodeTimeCursor {
  static override readonly _type = 'core::nodeTimeCursor';

  public static create(abi: Abi): nodeTimeCursor {
    return new nodeTimeCursor(abi.libs_by_name.get(std.name)!.mapped[5]);
  }
}

export class TableColumnMeta extends GCObject {
  static readonly _type = 'core::TableColumnMeta';

  constructor(type: AbiType, ...attributes: any[]) {
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
  create(abi: Abi, type: string | null, size: bigint | number, index: boolean, min: any | null, max: any | null, avg: any | null, std: any | null): TableColumnMeta {
    return new TableColumnMeta(abi.libs_by_name.get(std.name)!.mapped[6], type, size, index, min, max, avg, std);
  }
}

export class Error extends std_n.core.Error {
  static override readonly _type = 'core::Error';

  public static create(abi: Abi): Error {
    return new Error(abi.libs_by_name.get(std.name)!.mapped[7]);
  }
}

export class ErrorCode extends GCEnum {
  static readonly _type = 'core::ErrorCode';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public static none(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[0]] as std.core.ErrorCode;
  }
  public static file_not_found(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[1]] as std.core.ErrorCode;
  }
  public static file_read_error(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[2]] as std.core.ErrorCode;
  }
  public static file_write_error(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[3]] as std.core.ErrorCode;
  }
  public static unresolved_function(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[4]] as std.core.ErrorCode;
  }
  public static too_deep_workspace(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[5]] as std.core.ErrorCode;
  }
  public static too_deep_iterator(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[6]] as std.core.ErrorCode;
  }
  public static wrong_path(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[7]] as std.core.ErrorCode;
  }
  public static parse_error(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[8]] as std.core.ErrorCode;
  }
  public static out_of_bounds(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[9]] as std.core.ErrorCode;
  }
  public static division_by_zero(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[10]] as std.core.ErrorCode;
  }
  public static wrong_operand(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[11]] as std.core.ErrorCode;
  }
  public static wrong_entrypoint(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[12]] as std.core.ErrorCode;
  }
  public static wrong_params(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[13]] as std.core.ErrorCode;
  }
  public static wrong_param_type(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[14]] as std.core.ErrorCode;
  }
  public static wrong_assert(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[15]] as std.core.ErrorCode;
  }
  public static wrong_numeric(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[16]] as std.core.ErrorCode;
  }
  public static wrong_time(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[17]] as std.core.ErrorCode;
  }
  public static wrong_state(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[18]] as std.core.ErrorCode;
  }
  public static wrong_null(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[19]] as std.core.ErrorCode;
  }
  public static unresolved_ref(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[20]] as std.core.ErrorCode;
  }
  public static assign_error(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[21]] as std.core.ErrorCode;
  }
  public static read_field_requires_obj(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[22]] as std.core.ErrorCode;
  }
  public static read_offset_requires_array(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[23]] as std.core.ErrorCode;
  }
  public static write_offset_requires_array(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[24]] as std.core.ErrorCode;
  }
  public static write_field_requires_object(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[25]] as std.core.ErrorCode;
  }
  public static min_higher_max_error(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[26]] as std.core.ErrorCode;
  }
  public static negative_std(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[27]] as std.core.ErrorCode;
  }
  public static interrupted(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[28]] as std.core.ErrorCode;
  }
  public static throw_(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[29]] as std.core.ErrorCode;
  }
  public static wrong_type(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[30]] as std.core.ErrorCode;
  }
  public static wrong_dimension(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[31]] as std.core.ErrorCode;
  }
  public static unsupported_operation(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[32]] as std.core.ErrorCode;
  }
  public static unsupported_type(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[33]] as std.core.ErrorCode;
  }
  public static too_large(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[34]] as std.core.ErrorCode;
  }
  public static dimensions_mismatch(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[35]] as std.core.ErrorCode;
  }
  public static not_initialized(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[36]] as std.core.ErrorCode;
  }
  public static timeout(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[37]] as std.core.ErrorCode;
  }
  public static unauthorized(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[38]] as std.core.ErrorCode;
  }
  public static forbidden(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[39]] as std.core.ErrorCode;
  }
  public static runtime_error(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[40]] as std.core.ErrorCode;
  }
  public static compile_error(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[41]] as std.core.ErrorCode;
  }
  public static update_error(abi: Abi): std.core.ErrorCode {
    const t = abi.libs_by_name.get(std.name)!.mapped[8];
    return t.enum_values![t.generated_offsets[42]] as std.core.ErrorCode;
  }
  create(abi: Abi): ErrorCode {
    return new ErrorCode(abi.libs_by_name.get(std.name)!.mapped[8]);
  }
}

export class SamplingMode extends GCEnum {
  static readonly _type = 'core::SamplingMode';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public static fixed(abi: Abi): std.core.SamplingMode {
    const t = abi.libs_by_name.get(std.name)!.mapped[9];
    return t.enum_values![t.generated_offsets[0]] as std.core.SamplingMode;
  }
  public static fixed_reg(abi: Abi): std.core.SamplingMode {
    const t = abi.libs_by_name.get(std.name)!.mapped[9];
    return t.enum_values![t.generated_offsets[1]] as std.core.SamplingMode;
  }
  public static adaptative(abi: Abi): std.core.SamplingMode {
    const t = abi.libs_by_name.get(std.name)!.mapped[9];
    return t.enum_values![t.generated_offsets[2]] as std.core.SamplingMode;
  }
  public static dense(abi: Abi): std.core.SamplingMode {
    const t = abi.libs_by_name.get(std.name)!.mapped[9];
    return t.enum_values![t.generated_offsets[3]] as std.core.SamplingMode;
  }
  create(abi: Abi): SamplingMode {
    return new SamplingMode(abi.libs_by_name.get(std.name)!.mapped[9]);
  }
}

export class DurationUnit extends GCEnum {
  static readonly _type = 'core::DurationUnit';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public static microseconds(abi: Abi): std.core.DurationUnit {
    const t = abi.libs_by_name.get(std.name)!.mapped[10];
    return t.enum_values![t.generated_offsets[0]] as std.core.DurationUnit;
  }
  public static milliseconds(abi: Abi): std.core.DurationUnit {
    const t = abi.libs_by_name.get(std.name)!.mapped[10];
    return t.enum_values![t.generated_offsets[1]] as std.core.DurationUnit;
  }
  public static seconds(abi: Abi): std.core.DurationUnit {
    const t = abi.libs_by_name.get(std.name)!.mapped[10];
    return t.enum_values![t.generated_offsets[2]] as std.core.DurationUnit;
  }
  public static minutes(abi: Abi): std.core.DurationUnit {
    const t = abi.libs_by_name.get(std.name)!.mapped[10];
    return t.enum_values![t.generated_offsets[3]] as std.core.DurationUnit;
  }
  public static hours(abi: Abi): std.core.DurationUnit {
    const t = abi.libs_by_name.get(std.name)!.mapped[10];
    return t.enum_values![t.generated_offsets[4]] as std.core.DurationUnit;
  }
  public static days(abi: Abi): std.core.DurationUnit {
    const t = abi.libs_by_name.get(std.name)!.mapped[10];
    return t.enum_values![t.generated_offsets[5]] as std.core.DurationUnit;
  }
  public static weeks(abi: Abi): std.core.DurationUnit {
    const t = abi.libs_by_name.get(std.name)!.mapped[10];
    return t.enum_values![t.generated_offsets[6]] as std.core.DurationUnit;
  }
  public static months(abi: Abi): std.core.DurationUnit {
    const t = abi.libs_by_name.get(std.name)!.mapped[10];
    return t.enum_values![t.generated_offsets[7]] as std.core.DurationUnit;
  }
  public static years(abi: Abi): std.core.DurationUnit {
    const t = abi.libs_by_name.get(std.name)!.mapped[10];
    return t.enum_values![t.generated_offsets[8]] as std.core.DurationUnit;
  }
  create(abi: Abi): DurationUnit {
    return new DurationUnit(abi.libs_by_name.get(std.name)!.mapped[10]);
  }
}

export class TensorType extends GCEnum {
  static readonly _type = 'core::TensorType';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public static i32(abi: Abi): std.core.TensorType {
    const t = abi.libs_by_name.get(std.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[0]] as std.core.TensorType;
  }
  public static i64(abi: Abi): std.core.TensorType {
    const t = abi.libs_by_name.get(std.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[1]] as std.core.TensorType;
  }
  public static f32(abi: Abi): std.core.TensorType {
    const t = abi.libs_by_name.get(std.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[2]] as std.core.TensorType;
  }
  public static f64(abi: Abi): std.core.TensorType {
    const t = abi.libs_by_name.get(std.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[3]] as std.core.TensorType;
  }
  public static c64(abi: Abi): std.core.TensorType {
    const t = abi.libs_by_name.get(std.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[4]] as std.core.TensorType;
  }
  public static c128(abi: Abi): std.core.TensorType {
    const t = abi.libs_by_name.get(std.name)!.mapped[11];
    return t.enum_values![t.generated_offsets[5]] as std.core.TensorType;
  }
  create(abi: Abi): TensorType {
    return new TensorType(abi.libs_by_name.get(std.name)!.mapped[11]);
  }
}

export class Table<T> extends std_n.core.Table {
  static override readonly _type = 'core::Table';

  public static create(abi: Abi): Table {
    return new Table(abi.libs_by_name.get(std.name)!.mapped[12]);
  }
}

export class geo extends std_n.core.geo {
  static override readonly _type = 'core::geo';

  public static create(abi: Abi): geo {
    return new geo(abi.libs_by_name.get(std.name)!.mapped[13]);
  }
}

export class Tensor extends std_n.core.Tensor {
  static override readonly _type = 'core::Tensor';

  public static create(abi: Abi): Tensor {
    return new Tensor(abi.libs_by_name.get(std.name)!.mapped[14]);
  }
}

export class GeoCircle extends GCObject {
  static readonly _type = 'core::GeoCircle';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_center(): std_n.core.geo {
    return super.get(super.type.generated_offsets[0]) as std_n.core.geo;
  }
  public set_center(v: std_n.core.geo) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_radius(): number {
    return super.get(super.type.generated_offsets[1]) as number;
  }
  public set_radius(v: number) {
    super.set(super.type.generated_offsets[1], v);
  }
  create(abi: Abi, center: std_n.core.geo, radius: number): GeoCircle {
    return new GeoCircle(abi.libs_by_name.get(std.name)!.mapped[15], center, radius);
  }
}

export class Date extends std_n.core.Date {
  static override readonly _type = 'core::Date';

  public static create(abi: Abi): Date {
    return new Date(abi.libs_by_name.get(std.name)!.mapped[16]);
  }
}

export class Map<K,V> extends std_n.core.Map {
  static override readonly _type = 'core::Map';

  public static create(abi: Abi): Map {
    return new Map(abi.libs_by_name.get(std.name)!.mapped[17]);
  }
}

export class duration extends std_n.core.duration {
  static override readonly _type = 'core::duration';

  public static create(abi: Abi): duration {
    return new duration(abi.libs_by_name.get(std.name)!.mapped[18]);
  }
}

export class nodeTime extends std_n.core.nodeTime {
  static override readonly _type = 'core::nodeTime';

  public static create(abi: Abi): nodeTime {
    return new nodeTime(abi.libs_by_name.get(std.name)!.mapped[19]);
  }
}

export class Array<T> extends std_n.core.Array {
  static override readonly _type = 'core::Array';

  public static create(abi: Abi): Array {
    return new Array(abi.libs_by_name.get(std.name)!.mapped[20]);
  }
}

export class function_ extends GCObject {
  static readonly _type = 'core::function';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  create(abi: Abi): function_ {
    return new function_(abi.libs_by_name.get(std.name)!.mapped[21]);
  }
}

export class NodeTimeInfo extends GCObject {
  static readonly _type = 'core::NodeTimeInfo';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public get_size(): bigint | number {
    return super.get(super.type.generated_offsets[0]) as bigint | number;
  }
  public set_size(v: bigint | number) {
    super.set(super.type.generated_offsets[0], v);
  }
  public get_from(): std_n.core.time | null {
    return super.get(super.type.generated_offsets[1]) as std_n.core.time | null;
  }
  public set_from(v: std_n.core.time | null) {
    super.set(super.type.generated_offsets[1], v);
  }
  public get_to(): std_n.core.time | null {
    return super.get(super.type.generated_offsets[2]) as std_n.core.time | null;
  }
  public set_to(v: std_n.core.time | null) {
    super.set(super.type.generated_offsets[2], v);
  }
  create(abi: Abi, size: bigint | number, from: std_n.core.time | null, to: std_n.core.time | null): NodeTimeInfo {
    return new NodeTimeInfo(abi.libs_by_name.get(std.name)!.mapped[22], size, from, to);
  }
}

export class Tuple<T,U> extends GCObject {
  static readonly _type = 'core::Tuple';

  constructor(type: AbiType, ...attributes: any[]) {
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
  create(abi: Abi, x: any, y: any): Tuple {
    return new Tuple(abi.libs_by_name.get(std.name)!.mapped[23], x, y);
  }
}

export class nodeIndex extends std_n.core.nodeIndex {
  static override readonly _type = 'core::nodeIndex';

  public static create(abi: Abi): nodeIndex {
    return new nodeIndex(abi.libs_by_name.get(std.name)!.mapped[24]);
  }
}

export class GeoPoly extends std_n.core.GeoPoly {
  static override readonly _type = 'core::GeoPoly';

  public static create(abi: Abi): GeoPoly {
    return new GeoPoly(abi.libs_by_name.get(std.name)!.mapped[25]);
  }
}

export class time extends std_n.core.time {
  static override readonly _type = 'core::time';

  public static create(abi: Abi): time {
    return new time(abi.libs_by_name.get(std.name)!.mapped[26]);
  }
}

export class DatePart extends GCEnum {
  static readonly _type = 'core::DatePart';

  constructor(type: AbiType, ...attributes: any[]) {
    super(type, ...attributes);
  }

  public static years(abi: Abi): std.core.DatePart {
    const t = abi.libs_by_name.get(std.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[0]] as std.core.DatePart;
  }
  public static months(abi: Abi): std.core.DatePart {
    const t = abi.libs_by_name.get(std.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[1]] as std.core.DatePart;
  }
  public static days(abi: Abi): std.core.DatePart {
    const t = abi.libs_by_name.get(std.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[2]] as std.core.DatePart;
  }
  public static hours(abi: Abi): std.core.DatePart {
    const t = abi.libs_by_name.get(std.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[3]] as std.core.DatePart;
  }
  public static minutes(abi: Abi): std.core.DatePart {
    const t = abi.libs_by_name.get(std.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[4]] as std.core.DatePart;
  }
  public static seconds(abi: Abi): std.core.DatePart {
    const t = abi.libs_by_name.get(std.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[5]] as std.core.DatePart;
  }
  public static microseconds(abi: Abi): std.core.DatePart {
    const t = abi.libs_by_name.get(std.name)!.mapped[27];
    return t.enum_values![t.generated_offsets[6]] as std.core.DatePart;
  }
  create(abi: Abi): DatePart {
    return new DatePart(abi.libs_by_name.get(std.name)!.mapped[27]);
  }
}

export class nodeGeo extends std_n.core.nodeGeo {
  static override readonly _type = 'core::nodeGeo';

  public static create(abi: Abi): nodeGeo {
    return new nodeGeo(abi.libs_by_name.get(std.name)!.mapped[28]);
  }
}

export class String extends std_n.core.String {
  static override readonly _type = 'core::String';

  public static create(abi: Abi): String {
    return new String(abi.libs_by_name.get(std.name)!.mapped[29]);
  }
}

