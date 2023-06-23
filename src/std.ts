// AUTO-GENERATED FILE PLEASE DO NOT MODIFY MANUALLY
/* eslint-disable */
// @ts-nocheck

import type { Abi, AbiType, Library, Value, AbiReader, GreyCat } from './index.js';
import { GCObject, GCEnum } from './index.js';
import * as std_n from './std/index.js';

export namespace core {
  export class GeoBox extends GCObject {
    static readonly _type = 'core::GeoBox';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public sw(): std_n.core.geo {
      return super.get(super.type.generated_offsets[0]) as std_n.core.geo;
    }
    public set_sw(v: std_n.core.geo) {
      super.set(super.type.generated_offsets[0], v);
    }
    public ne(): std_n.core.geo {
      return super.get(super.type.generated_offsets[1]) as std_n.core.geo;
    }
    public set_ne(v: std_n.core.geo) {
      super.set(super.type.generated_offsets[1], v);
    }
    create(abi: Abi, sw: std_n.core.geo, ne: std_n.core.geo): GeoBox {
      return new GeoBox(abi.libs_by_name.get(std.name)!.mapped[0], sw, ne);
    }
  }

  export class nodeList<T> extends std_n.core.nodeList {
    static override readonly _type = 'core::nodeList';

    public static create(abi: Abi): nodeList {
      return new nodeList(abi.libs_by_name.get(std.name)!.mapped[1]);
    }
  }

  export class TimeZone extends GCEnum {
    static readonly _type = 'core::TimeZone';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public static Africa_Accra(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[0]] as core.TimeZone;
    }
    public static Africa_Bamako(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[1]] as core.TimeZone;
    }
    public static Africa_Banjul(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[2]] as core.TimeZone;
    }
    public static Africa_Conakry(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[3]] as core.TimeZone;
    }
    public static Africa_Dakar(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[4]] as core.TimeZone;
    }
    public static Africa_Freetown(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[5]] as core.TimeZone;
    }
    public static Africa_Lome(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[6]] as core.TimeZone;
    }
    public static Africa_Nouakchott(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[7]] as core.TimeZone;
    }
    public static Africa_Ouagadougou(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[8]] as core.TimeZone;
    }
    public static Africa_Timbuktu(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[9]] as core.TimeZone;
    }
    public static Atlantic_Reykjavik(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[10]] as core.TimeZone;
    }
    public static Atlantic_St_Helena(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[11]] as core.TimeZone;
    }
    public static Iceland(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[12]] as core.TimeZone;
    }
    public static Egypt(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[13]] as core.TimeZone;
    }
    public static Africa_Maseru(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[14]] as core.TimeZone;
    }
    public static Africa_Mbabane(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[15]] as core.TimeZone;
    }
    public static Africa_Bangui(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[16]] as core.TimeZone;
    }
    public static Africa_Brazzaville(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[17]] as core.TimeZone;
    }
    public static Africa_Douala(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[18]] as core.TimeZone;
    }
    public static Africa_Kinshasa(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[19]] as core.TimeZone;
    }
    public static Africa_Libreville(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[20]] as core.TimeZone;
    }
    public static Africa_Luanda(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[21]] as core.TimeZone;
    }
    public static Africa_Malabo(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[22]] as core.TimeZone;
    }
    public static Africa_Niamey(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[23]] as core.TimeZone;
    }
    public static Africa_Porto_Novo(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[24]] as core.TimeZone;
    }
    public static Africa_Blantyre(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[25]] as core.TimeZone;
    }
    public static Africa_Bujumbura(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[26]] as core.TimeZone;
    }
    public static Africa_Gaborone(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[27]] as core.TimeZone;
    }
    public static Africa_Harare(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[28]] as core.TimeZone;
    }
    public static Africa_Kigali(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[29]] as core.TimeZone;
    }
    public static Africa_Lubumbashi(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[30]] as core.TimeZone;
    }
    public static Africa_Lusaka(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[31]] as core.TimeZone;
    }
    public static Africa_Addis_Ababa(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[32]] as core.TimeZone;
    }
    public static Africa_Asmara(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[33]] as core.TimeZone;
    }
    public static Africa_Asmera(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[34]] as core.TimeZone;
    }
    public static Africa_Dar_es_Salaam(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[35]] as core.TimeZone;
    }
    public static Africa_Djibouti(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[36]] as core.TimeZone;
    }
    public static Africa_Kampala(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[37]] as core.TimeZone;
    }
    public static Africa_Mogadishu(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[38]] as core.TimeZone;
    }
    public static Indian_Antananarivo(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[39]] as core.TimeZone;
    }
    public static Indian_Comoro(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[40]] as core.TimeZone;
    }
    public static Indian_Mayotte(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[41]] as core.TimeZone;
    }
    public static Libya(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[42]] as core.TimeZone;
    }
    public static America_Atka(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[43]] as core.TimeZone;
    }
    public static US_Aleutian(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[44]] as core.TimeZone;
    }
    public static US_Alaska(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[45]] as core.TimeZone;
    }
    public static America_Buenos_Aires(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[46]] as core.TimeZone;
    }
    public static America_Argentina_ComodRivadavia(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[47]] as core.TimeZone;
    }
    public static America_Catamarca(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[48]] as core.TimeZone;
    }
    public static America_Cordoba(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[49]] as core.TimeZone;
    }
    public static America_Rosario(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[50]] as core.TimeZone;
    }
    public static America_Jujuy(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[51]] as core.TimeZone;
    }
    public static America_Mendoza(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[52]] as core.TimeZone;
    }
    public static US_Central(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[53]] as core.TimeZone;
    }
    public static America_Shiprock(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[54]] as core.TimeZone;
    }
    public static Navajo(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[55]] as core.TimeZone;
    }
    public static US_Mountain(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[56]] as core.TimeZone;
    }
    public static US_Michigan(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[57]] as core.TimeZone;
    }
    public static America_Yellowknife(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[58]] as core.TimeZone;
    }
    public static Canada_Mountain(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[59]] as core.TimeZone;
    }
    public static Canada_Atlantic(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[60]] as core.TimeZone;
    }
    public static Cuba(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[61]] as core.TimeZone;
    }
    public static America_Fort_Wayne(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[62]] as core.TimeZone;
    }
    public static America_Indianapolis(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[63]] as core.TimeZone;
    }
    public static US_East_Indiana(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[64]] as core.TimeZone;
    }
    public static America_Knox_IN(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[65]] as core.TimeZone;
    }
    public static US_Indiana_Starke(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[66]] as core.TimeZone;
    }
    public static America_Pangnirtung(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[67]] as core.TimeZone;
    }
    public static Jamaica(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[68]] as core.TimeZone;
    }
    public static America_Louisville(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[69]] as core.TimeZone;
    }
    public static US_Pacific(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[70]] as core.TimeZone;
    }
    public static Brazil_West(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[71]] as core.TimeZone;
    }
    public static Mexico_BajaSur(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[72]] as core.TimeZone;
    }
    public static Mexico_General(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[73]] as core.TimeZone;
    }
    public static US_Eastern(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[74]] as core.TimeZone;
    }
    public static Brazil_DeNoronha(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[75]] as core.TimeZone;
    }
    public static America_Godthab(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[76]] as core.TimeZone;
    }
    public static America_Atikokan(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[77]] as core.TimeZone;
    }
    public static America_Cayman(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[78]] as core.TimeZone;
    }
    public static America_Coral_Harbour(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[79]] as core.TimeZone;
    }
    public static America_Creston(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[80]] as core.TimeZone;
    }
    public static US_Arizona(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[81]] as core.TimeZone;
    }
    public static America_Anguilla(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[82]] as core.TimeZone;
    }
    public static America_Antigua(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[83]] as core.TimeZone;
    }
    public static America_Aruba(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[84]] as core.TimeZone;
    }
    public static America_Blanc_Sablon(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[85]] as core.TimeZone;
    }
    public static America_Curacao(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[86]] as core.TimeZone;
    }
    public static America_Dominica(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[87]] as core.TimeZone;
    }
    public static America_Grenada(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[88]] as core.TimeZone;
    }
    public static America_Guadeloupe(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[89]] as core.TimeZone;
    }
    public static America_Kralendijk(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[90]] as core.TimeZone;
    }
    public static America_Lower_Princes(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[91]] as core.TimeZone;
    }
    public static America_Marigot(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[92]] as core.TimeZone;
    }
    public static America_Montserrat(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[93]] as core.TimeZone;
    }
    public static America_Port_of_Spain(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[94]] as core.TimeZone;
    }
    public static America_St_Barthelemy(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[95]] as core.TimeZone;
    }
    public static America_St_Kitts(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[96]] as core.TimeZone;
    }
    public static America_St_Lucia(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[97]] as core.TimeZone;
    }
    public static America_St_Thomas(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[98]] as core.TimeZone;
    }
    public static America_St_Vincent(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[99]] as core.TimeZone;
    }
    public static America_Tortola(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[100]] as core.TimeZone;
    }
    public static America_Virgin(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[101]] as core.TimeZone;
    }
    public static Canada_Saskatchewan(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[102]] as core.TimeZone;
    }
    public static America_Porto_Acre(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[103]] as core.TimeZone;
    }
    public static Brazil_Acre(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[104]] as core.TimeZone;
    }
    public static Chile_Continental(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[105]] as core.TimeZone;
    }
    public static Brazil_East(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[106]] as core.TimeZone;
    }
    public static Canada_Newfoundland(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[107]] as core.TimeZone;
    }
    public static America_Ensenada(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[108]] as core.TimeZone;
    }
    public static America_Santa_Isabel(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[109]] as core.TimeZone;
    }
    public static Mexico_BajaNorte(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[110]] as core.TimeZone;
    }
    public static America_Montreal(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[111]] as core.TimeZone;
    }
    public static America_Nassau(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[112]] as core.TimeZone;
    }
    public static America_Nipigon(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[113]] as core.TimeZone;
    }
    public static America_Thunder_Bay(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[114]] as core.TimeZone;
    }
    public static Canada_Eastern(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[115]] as core.TimeZone;
    }
    public static Canada_Pacific(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[116]] as core.TimeZone;
    }
    public static Canada_Yukon(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[117]] as core.TimeZone;
    }
    public static America_Rainy_River(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[118]] as core.TimeZone;
    }
    public static Canada_Central(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[119]] as core.TimeZone;
    }
    public static Asia_Ashkhabad(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[120]] as core.TimeZone;
    }
    public static Asia_Phnom_Penh(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[121]] as core.TimeZone;
    }
    public static Asia_Vientiane(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[122]] as core.TimeZone;
    }
    public static Indian_Christmas(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[123]] as core.TimeZone;
    }
    public static Asia_Dacca(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[124]] as core.TimeZone;
    }
    public static Asia_Muscat(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[125]] as core.TimeZone;
    }
    public static Indian_Mahe(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[126]] as core.TimeZone;
    }
    public static Indian_Reunion(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[127]] as core.TimeZone;
    }
    public static Asia_Saigon(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[128]] as core.TimeZone;
    }
    public static Hongkong(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[129]] as core.TimeZone;
    }
    public static Asia_Tel_Aviv(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[130]] as core.TimeZone;
    }
    public static Israel(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[131]] as core.TimeZone;
    }
    public static Asia_Katmandu(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[132]] as core.TimeZone;
    }
    public static Asia_Calcutta(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[133]] as core.TimeZone;
    }
    public static Asia_Brunei(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[134]] as core.TimeZone;
    }
    public static Asia_Macao(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[135]] as core.TimeZone;
    }
    public static Asia_Ujung_Pandang(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[136]] as core.TimeZone;
    }
    public static Europe_Nicosia(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[137]] as core.TimeZone;
    }
    public static Asia_Bahrain(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[138]] as core.TimeZone;
    }
    public static Antarctica_Syowa(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[139]] as core.TimeZone;
    }
    public static Asia_Aden(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[140]] as core.TimeZone;
    }
    public static Asia_Kuwait(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[141]] as core.TimeZone;
    }
    public static ROK(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[142]] as core.TimeZone;
    }
    public static Asia_Chongqing(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[143]] as core.TimeZone;
    }
    public static Asia_Chungking(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[144]] as core.TimeZone;
    }
    public static Asia_Harbin(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[145]] as core.TimeZone;
    }
    public static PRC(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[146]] as core.TimeZone;
    }
    public static Asia_Kuala_Lumpur(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[147]] as core.TimeZone;
    }
    public static Singapore(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[148]] as core.TimeZone;
    }
    public static ROC(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[149]] as core.TimeZone;
    }
    public static Iran(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[150]] as core.TimeZone;
    }
    public static Asia_Thimbu(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[151]] as core.TimeZone;
    }
    public static Japan(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[152]] as core.TimeZone;
    }
    public static Asia_Ulan_Bator(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[153]] as core.TimeZone;
    }
    public static Antarctica_Vostok(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[154]] as core.TimeZone;
    }
    public static Asia_Kashgar(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[155]] as core.TimeZone;
    }
    public static Asia_Rangoon(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[156]] as core.TimeZone;
    }
    public static Indian_Cocos(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[157]] as core.TimeZone;
    }
    public static Atlantic_Faeroe(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[158]] as core.TimeZone;
    }
    public static Australia_South(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[159]] as core.TimeZone;
    }
    public static Australia_Queensland(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[160]] as core.TimeZone;
    }
    public static Australia_Yancowinna(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[161]] as core.TimeZone;
    }
    public static Australia_North(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[162]] as core.TimeZone;
    }
    public static Australia_Currie(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[163]] as core.TimeZone;
    }
    public static Australia_Tasmania(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[164]] as core.TimeZone;
    }
    public static Australia_LHI(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[165]] as core.TimeZone;
    }
    public static Australia_Victoria(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[166]] as core.TimeZone;
    }
    public static Australia_West(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[167]] as core.TimeZone;
    }
    public static Australia_ACT(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[168]] as core.TimeZone;
    }
    public static Australia_Canberra(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[169]] as core.TimeZone;
    }
    public static Australia_NSW(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[170]] as core.TimeZone;
    }
    public static GMT(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[171]] as core.TimeZone;
    }
    public static GMTx0(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[172]] as core.TimeZone;
    }
    public static GMT_0(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[173]] as core.TimeZone;
    }
    public static GMT0(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[174]] as core.TimeZone;
    }
    public static Greenwich(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[175]] as core.TimeZone;
    }
    public static UCT(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[176]] as core.TimeZone;
    }
    public static UTC(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[177]] as core.TimeZone;
    }
    public static Universal(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[178]] as core.TimeZone;
    }
    public static Zulu(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[179]] as core.TimeZone;
    }
    public static Europe_Ljubljana(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[180]] as core.TimeZone;
    }
    public static Europe_Podgorica(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[181]] as core.TimeZone;
    }
    public static Europe_Sarajevo(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[182]] as core.TimeZone;
    }
    public static Europe_Skopje(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[183]] as core.TimeZone;
    }
    public static Europe_Zagreb(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[184]] as core.TimeZone;
    }
    public static Arctic_Longyearbyen(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[185]] as core.TimeZone;
    }
    public static Atlantic_Jan_Mayen(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[186]] as core.TimeZone;
    }
    public static Europe_Copenhagen(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[187]] as core.TimeZone;
    }
    public static Europe_Oslo(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[188]] as core.TimeZone;
    }
    public static Europe_Stockholm(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[189]] as core.TimeZone;
    }
    public static Europe_Amsterdam(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[190]] as core.TimeZone;
    }
    public static Europe_Luxembourg(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[191]] as core.TimeZone;
    }
    public static Europe_Tiraspol(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[192]] as core.TimeZone;
    }
    public static Eire(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[193]] as core.TimeZone;
    }
    public static Europe_Mariehamn(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[194]] as core.TimeZone;
    }
    public static Asia_Istanbul(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[195]] as core.TimeZone;
    }
    public static Turkey(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[196]] as core.TimeZone;
    }
    public static Europe_Kiev(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[197]] as core.TimeZone;
    }
    public static Europe_Uzhgorod(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[198]] as core.TimeZone;
    }
    public static Europe_Zaporozhye(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[199]] as core.TimeZone;
    }
    public static Portugal(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[200]] as core.TimeZone;
    }
    public static Europe_Belfast(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[201]] as core.TimeZone;
    }
    public static Europe_Guernsey(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[202]] as core.TimeZone;
    }
    public static Europe_Isle_of_Man(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[203]] as core.TimeZone;
    }
    public static Europe_Jersey(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[204]] as core.TimeZone;
    }
    public static GB(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[205]] as core.TimeZone;
    }
    public static GB_Eire(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[206]] as core.TimeZone;
    }
    public static W_SU(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[207]] as core.TimeZone;
    }
    public static Europe_Monaco(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[208]] as core.TimeZone;
    }
    public static Europe_Bratislava(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[209]] as core.TimeZone;
    }
    public static Europe_San_Marino(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[210]] as core.TimeZone;
    }
    public static Europe_Vatican(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[211]] as core.TimeZone;
    }
    public static Poland(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[212]] as core.TimeZone;
    }
    public static Europe_Busingen(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[213]] as core.TimeZone;
    }
    public static Europe_Vaduz(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[214]] as core.TimeZone;
    }
    public static Indian_Kerguelen(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[215]] as core.TimeZone;
    }
    public static Antarctica_McMurdo(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[216]] as core.TimeZone;
    }
    public static Antarctica_South_Pole(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[217]] as core.TimeZone;
    }
    public static NZ(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[218]] as core.TimeZone;
    }
    public static NZ_CHAT(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[219]] as core.TimeZone;
    }
    public static Chile_EasterIsland(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[220]] as core.TimeZone;
    }
    public static Pacific_Pohnpei(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[221]] as core.TimeZone;
    }
    public static Pacific_Ponape(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[222]] as core.TimeZone;
    }
    public static Pacific_Saipan(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[223]] as core.TimeZone;
    }
    public static Pacific_Johnston(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[224]] as core.TimeZone;
    }
    public static US_Hawaii(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[225]] as core.TimeZone;
    }
    public static Pacific_Enderbury(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[226]] as core.TimeZone;
    }
    public static Kwajalein(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[227]] as core.TimeZone;
    }
    public static Pacific_Midway(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[228]] as core.TimeZone;
    }
    public static Pacific_Samoa(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[229]] as core.TimeZone;
    }
    public static US_Samoa(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[230]] as core.TimeZone;
    }
    public static Antarctica_DumontDUrville(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[231]] as core.TimeZone;
    }
    public static Pacific_Chuuk(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[232]] as core.TimeZone;
    }
    public static Pacific_Truk(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[233]] as core.TimeZone;
    }
    public static Pacific_Yap(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[234]] as core.TimeZone;
    }
    public static Pacific_Funafuti(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[235]] as core.TimeZone;
    }
    public static Pacific_Majuro(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[236]] as core.TimeZone;
    }
    public static Pacific_Wake(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[237]] as core.TimeZone;
    }
    public static Pacific_Wallis(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[238]] as core.TimeZone;
    }
    public static Africa_Abidjan(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[239]] as core.TimeZone;
    }
    public static Africa_Algiers(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[240]] as core.TimeZone;
    }
    public static Africa_Bissau(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[241]] as core.TimeZone;
    }
    public static Africa_Cairo(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[242]] as core.TimeZone;
    }
    public static Africa_Casablanca(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[243]] as core.TimeZone;
    }
    public static Africa_Ceuta(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[244]] as core.TimeZone;
    }
    public static Africa_El_Aaiun(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[245]] as core.TimeZone;
    }
    public static Africa_Johannesburg(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[246]] as core.TimeZone;
    }
    public static Africa_Juba(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[247]] as core.TimeZone;
    }
    public static Africa_Khartoum(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[248]] as core.TimeZone;
    }
    public static Africa_Lagos(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[249]] as core.TimeZone;
    }
    public static Africa_Maputo(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[250]] as core.TimeZone;
    }
    public static Africa_Monrovia(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[251]] as core.TimeZone;
    }
    public static Africa_Nairobi(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[252]] as core.TimeZone;
    }
    public static Africa_Ndjamena(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[253]] as core.TimeZone;
    }
    public static Africa_Sao_Tome(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[254]] as core.TimeZone;
    }
    public static Africa_Tripoli(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[255]] as core.TimeZone;
    }
    public static Africa_Tunis(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[256]] as core.TimeZone;
    }
    public static Africa_Windhoek(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[257]] as core.TimeZone;
    }
    public static America_Adak(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[258]] as core.TimeZone;
    }
    public static America_Anchorage(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[259]] as core.TimeZone;
    }
    public static America_Araguaina(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[260]] as core.TimeZone;
    }
    public static America_Argentina_Buenos_Aires(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[261]] as core.TimeZone;
    }
    public static America_Argentina_Catamarca(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[262]] as core.TimeZone;
    }
    public static America_Argentina_Cordoba(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[263]] as core.TimeZone;
    }
    public static America_Argentina_Jujuy(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[264]] as core.TimeZone;
    }
    public static America_Argentina_La_Rioja(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[265]] as core.TimeZone;
    }
    public static America_Argentina_Mendoza(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[266]] as core.TimeZone;
    }
    public static America_Argentina_Rio_Gallegos(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[267]] as core.TimeZone;
    }
    public static America_Argentina_Salta(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[268]] as core.TimeZone;
    }
    public static America_Argentina_San_Juan(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[269]] as core.TimeZone;
    }
    public static America_Argentina_San_Luis(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[270]] as core.TimeZone;
    }
    public static America_Argentina_Tucuman(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[271]] as core.TimeZone;
    }
    public static America_Argentina_Ushuaia(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[272]] as core.TimeZone;
    }
    public static America_Asuncion(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[273]] as core.TimeZone;
    }
    public static America_Bahia(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[274]] as core.TimeZone;
    }
    public static America_Bahia_Banderas(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[275]] as core.TimeZone;
    }
    public static America_Barbados(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[276]] as core.TimeZone;
    }
    public static America_Belem(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[277]] as core.TimeZone;
    }
    public static America_Belize(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[278]] as core.TimeZone;
    }
    public static America_Boa_Vista(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[279]] as core.TimeZone;
    }
    public static America_Bogota(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[280]] as core.TimeZone;
    }
    public static America_Boise(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[281]] as core.TimeZone;
    }
    public static America_Cambridge_Bay(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[282]] as core.TimeZone;
    }
    public static America_Campo_Grande(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[283]] as core.TimeZone;
    }
    public static America_Cancun(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[284]] as core.TimeZone;
    }
    public static America_Caracas(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[285]] as core.TimeZone;
    }
    public static America_Cayenne(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[286]] as core.TimeZone;
    }
    public static America_Chicago(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[287]] as core.TimeZone;
    }
    public static America_Chihuahua(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[288]] as core.TimeZone;
    }
    public static America_Ciudad_Juarez(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[289]] as core.TimeZone;
    }
    public static America_Costa_Rica(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[290]] as core.TimeZone;
    }
    public static America_Cuiaba(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[291]] as core.TimeZone;
    }
    public static America_Danmarkshavn(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[292]] as core.TimeZone;
    }
    public static America_Dawson(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[293]] as core.TimeZone;
    }
    public static America_Dawson_Creek(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[294]] as core.TimeZone;
    }
    public static America_Denver(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[295]] as core.TimeZone;
    }
    public static America_Detroit(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[296]] as core.TimeZone;
    }
    public static America_Edmonton(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[297]] as core.TimeZone;
    }
    public static America_Eirunepe(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[298]] as core.TimeZone;
    }
    public static America_El_Salvador(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[299]] as core.TimeZone;
    }
    public static America_Fort_Nelson(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[300]] as core.TimeZone;
    }
    public static America_Fortaleza(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[301]] as core.TimeZone;
    }
    public static America_Glace_Bay(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[302]] as core.TimeZone;
    }
    public static America_Goose_Bay(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[303]] as core.TimeZone;
    }
    public static America_Grand_Turk(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[304]] as core.TimeZone;
    }
    public static America_Guatemala(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[305]] as core.TimeZone;
    }
    public static America_Guayaquil(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[306]] as core.TimeZone;
    }
    public static America_Guyana(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[307]] as core.TimeZone;
    }
    public static America_Halifax(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[308]] as core.TimeZone;
    }
    public static America_Havana(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[309]] as core.TimeZone;
    }
    public static America_Hermosillo(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[310]] as core.TimeZone;
    }
    public static America_Indiana_Indianapolis(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[311]] as core.TimeZone;
    }
    public static America_Indiana_Knox(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[312]] as core.TimeZone;
    }
    public static America_Indiana_Marengo(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[313]] as core.TimeZone;
    }
    public static America_Indiana_Petersburg(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[314]] as core.TimeZone;
    }
    public static America_Indiana_Tell_City(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[315]] as core.TimeZone;
    }
    public static America_Indiana_Vevay(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[316]] as core.TimeZone;
    }
    public static America_Indiana_Vincennes(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[317]] as core.TimeZone;
    }
    public static America_Indiana_Winamac(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[318]] as core.TimeZone;
    }
    public static America_Inuvik(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[319]] as core.TimeZone;
    }
    public static America_Iqaluit(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[320]] as core.TimeZone;
    }
    public static America_Jamaica(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[321]] as core.TimeZone;
    }
    public static America_Juneau(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[322]] as core.TimeZone;
    }
    public static America_Kentucky_Louisville(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[323]] as core.TimeZone;
    }
    public static America_Kentucky_Monticello(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[324]] as core.TimeZone;
    }
    public static America_La_Paz(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[325]] as core.TimeZone;
    }
    public static America_Lima(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[326]] as core.TimeZone;
    }
    public static America_Los_Angeles(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[327]] as core.TimeZone;
    }
    public static America_Maceio(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[328]] as core.TimeZone;
    }
    public static America_Managua(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[329]] as core.TimeZone;
    }
    public static America_Manaus(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[330]] as core.TimeZone;
    }
    public static America_Martinique(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[331]] as core.TimeZone;
    }
    public static America_Matamoros(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[332]] as core.TimeZone;
    }
    public static America_Mazatlan(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[333]] as core.TimeZone;
    }
    public static America_Menominee(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[334]] as core.TimeZone;
    }
    public static America_Merida(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[335]] as core.TimeZone;
    }
    public static America_Metlakatla(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[336]] as core.TimeZone;
    }
    public static America_Mexico_City(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[337]] as core.TimeZone;
    }
    public static America_Miquelon(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[338]] as core.TimeZone;
    }
    public static America_Moncton(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[339]] as core.TimeZone;
    }
    public static America_Monterrey(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[340]] as core.TimeZone;
    }
    public static America_Montevideo(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[341]] as core.TimeZone;
    }
    public static America_New_York(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[342]] as core.TimeZone;
    }
    public static America_Nome(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[343]] as core.TimeZone;
    }
    public static America_Noronha(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[344]] as core.TimeZone;
    }
    public static America_North_Dakota_Beulah(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[345]] as core.TimeZone;
    }
    public static America_North_Dakota_Center(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[346]] as core.TimeZone;
    }
    public static America_North_Dakota_New_Salem(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[347]] as core.TimeZone;
    }
    public static America_Nuuk(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[348]] as core.TimeZone;
    }
    public static America_Ojinaga(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[349]] as core.TimeZone;
    }
    public static America_Panama(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[350]] as core.TimeZone;
    }
    public static America_Paramaribo(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[351]] as core.TimeZone;
    }
    public static America_Phoenix(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[352]] as core.TimeZone;
    }
    public static America_Port_au_Prince(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[353]] as core.TimeZone;
    }
    public static America_Porto_Velho(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[354]] as core.TimeZone;
    }
    public static America_Puerto_Rico(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[355]] as core.TimeZone;
    }
    public static America_Punta_Arenas(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[356]] as core.TimeZone;
    }
    public static America_Rankin_Inlet(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[357]] as core.TimeZone;
    }
    public static America_Recife(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[358]] as core.TimeZone;
    }
    public static America_Regina(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[359]] as core.TimeZone;
    }
    public static America_Resolute(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[360]] as core.TimeZone;
    }
    public static America_Rio_Branco(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[361]] as core.TimeZone;
    }
    public static America_Santarem(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[362]] as core.TimeZone;
    }
    public static America_Santiago(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[363]] as core.TimeZone;
    }
    public static America_Santo_Domingo(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[364]] as core.TimeZone;
    }
    public static America_Sao_Paulo(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[365]] as core.TimeZone;
    }
    public static America_Scoresbysund(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[366]] as core.TimeZone;
    }
    public static America_Sitka(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[367]] as core.TimeZone;
    }
    public static America_St_Johns(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[368]] as core.TimeZone;
    }
    public static America_Swift_Current(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[369]] as core.TimeZone;
    }
    public static America_Tegucigalpa(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[370]] as core.TimeZone;
    }
    public static America_Thule(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[371]] as core.TimeZone;
    }
    public static America_Tijuana(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[372]] as core.TimeZone;
    }
    public static America_Toronto(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[373]] as core.TimeZone;
    }
    public static America_Vancouver(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[374]] as core.TimeZone;
    }
    public static America_Whitehorse(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[375]] as core.TimeZone;
    }
    public static America_Winnipeg(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[376]] as core.TimeZone;
    }
    public static America_Yakutat(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[377]] as core.TimeZone;
    }
    public static Antarctica_Casey(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[378]] as core.TimeZone;
    }
    public static Antarctica_Davis(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[379]] as core.TimeZone;
    }
    public static Antarctica_Macquarie(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[380]] as core.TimeZone;
    }
    public static Antarctica_Mawson(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[381]] as core.TimeZone;
    }
    public static Antarctica_Palmer(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[382]] as core.TimeZone;
    }
    public static Antarctica_Rothera(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[383]] as core.TimeZone;
    }
    public static Antarctica_Troll(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[384]] as core.TimeZone;
    }
    public static Asia_Almaty(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[385]] as core.TimeZone;
    }
    public static Asia_Amman(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[386]] as core.TimeZone;
    }
    public static Asia_Anadyr(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[387]] as core.TimeZone;
    }
    public static Asia_Aqtau(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[388]] as core.TimeZone;
    }
    public static Asia_Aqtobe(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[389]] as core.TimeZone;
    }
    public static Asia_Ashgabat(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[390]] as core.TimeZone;
    }
    public static Asia_Atyrau(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[391]] as core.TimeZone;
    }
    public static Asia_Baghdad(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[392]] as core.TimeZone;
    }
    public static Asia_Baku(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[393]] as core.TimeZone;
    }
    public static Asia_Bangkok(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[394]] as core.TimeZone;
    }
    public static Asia_Barnaul(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[395]] as core.TimeZone;
    }
    public static Asia_Beirut(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[396]] as core.TimeZone;
    }
    public static Asia_Bishkek(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[397]] as core.TimeZone;
    }
    public static Asia_Chita(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[398]] as core.TimeZone;
    }
    public static Asia_Choibalsan(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[399]] as core.TimeZone;
    }
    public static Asia_Colombo(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[400]] as core.TimeZone;
    }
    public static Asia_Damascus(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[401]] as core.TimeZone;
    }
    public static Asia_Dhaka(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[402]] as core.TimeZone;
    }
    public static Asia_Dili(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[403]] as core.TimeZone;
    }
    public static Asia_Dubai(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[404]] as core.TimeZone;
    }
    public static Asia_Dushanbe(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[405]] as core.TimeZone;
    }
    public static Asia_Famagusta(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[406]] as core.TimeZone;
    }
    public static Asia_Gaza(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[407]] as core.TimeZone;
    }
    public static Asia_Hebron(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[408]] as core.TimeZone;
    }
    public static Asia_Ho_Chi_Minh(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[409]] as core.TimeZone;
    }
    public static Asia_Hong_Kong(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[410]] as core.TimeZone;
    }
    public static Asia_Hovd(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[411]] as core.TimeZone;
    }
    public static Asia_Irkutsk(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[412]] as core.TimeZone;
    }
    public static Asia_Jakarta(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[413]] as core.TimeZone;
    }
    public static Asia_Jayapura(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[414]] as core.TimeZone;
    }
    public static Asia_Jerusalem(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[415]] as core.TimeZone;
    }
    public static Asia_Kabul(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[416]] as core.TimeZone;
    }
    public static Asia_Kamchatka(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[417]] as core.TimeZone;
    }
    public static Asia_Karachi(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[418]] as core.TimeZone;
    }
    public static Asia_Kathmandu(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[419]] as core.TimeZone;
    }
    public static Asia_Khandyga(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[420]] as core.TimeZone;
    }
    public static Asia_Kolkata(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[421]] as core.TimeZone;
    }
    public static Asia_Krasnoyarsk(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[422]] as core.TimeZone;
    }
    public static Asia_Kuching(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[423]] as core.TimeZone;
    }
    public static Asia_Macau(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[424]] as core.TimeZone;
    }
    public static Asia_Magadan(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[425]] as core.TimeZone;
    }
    public static Asia_Makassar(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[426]] as core.TimeZone;
    }
    public static Asia_Manila(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[427]] as core.TimeZone;
    }
    public static Asia_Nicosia(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[428]] as core.TimeZone;
    }
    public static Asia_Novokuznetsk(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[429]] as core.TimeZone;
    }
    public static Asia_Novosibirsk(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[430]] as core.TimeZone;
    }
    public static Asia_Omsk(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[431]] as core.TimeZone;
    }
    public static Asia_Oral(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[432]] as core.TimeZone;
    }
    public static Asia_Pontianak(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[433]] as core.TimeZone;
    }
    public static Asia_Pyongyang(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[434]] as core.TimeZone;
    }
    public static Asia_Qatar(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[435]] as core.TimeZone;
    }
    public static Asia_Qostanay(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[436]] as core.TimeZone;
    }
    public static Asia_Qyzylorda(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[437]] as core.TimeZone;
    }
    public static Asia_Riyadh(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[438]] as core.TimeZone;
    }
    public static Asia_Sakhalin(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[439]] as core.TimeZone;
    }
    public static Asia_Samarkand(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[440]] as core.TimeZone;
    }
    public static Asia_Seoul(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[441]] as core.TimeZone;
    }
    public static Asia_Shanghai(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[442]] as core.TimeZone;
    }
    public static Asia_Singapore(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[443]] as core.TimeZone;
    }
    public static Asia_Srednekolymsk(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[444]] as core.TimeZone;
    }
    public static Asia_Taipei(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[445]] as core.TimeZone;
    }
    public static Asia_Tashkent(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[446]] as core.TimeZone;
    }
    public static Asia_Tbilisi(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[447]] as core.TimeZone;
    }
    public static Asia_Tehran(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[448]] as core.TimeZone;
    }
    public static Asia_Thimphu(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[449]] as core.TimeZone;
    }
    public static Asia_Tokyo(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[450]] as core.TimeZone;
    }
    public static Asia_Tomsk(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[451]] as core.TimeZone;
    }
    public static Asia_Ulaanbaatar(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[452]] as core.TimeZone;
    }
    public static Asia_Urumqi(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[453]] as core.TimeZone;
    }
    public static Asia_Ust_Nera(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[454]] as core.TimeZone;
    }
    public static Asia_Vladivostok(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[455]] as core.TimeZone;
    }
    public static Asia_Yakutsk(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[456]] as core.TimeZone;
    }
    public static Asia_Yangon(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[457]] as core.TimeZone;
    }
    public static Asia_Yekaterinburg(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[458]] as core.TimeZone;
    }
    public static Asia_Yerevan(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[459]] as core.TimeZone;
    }
    public static Atlantic_Azores(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[460]] as core.TimeZone;
    }
    public static Atlantic_Bermuda(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[461]] as core.TimeZone;
    }
    public static Atlantic_Canary(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[462]] as core.TimeZone;
    }
    public static Atlantic_Cape_Verde(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[463]] as core.TimeZone;
    }
    public static Atlantic_Faroe(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[464]] as core.TimeZone;
    }
    public static Atlantic_Madeira(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[465]] as core.TimeZone;
    }
    public static Atlantic_South_Georgia(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[466]] as core.TimeZone;
    }
    public static Atlantic_Stanley(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[467]] as core.TimeZone;
    }
    public static Australia_Adelaide(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[468]] as core.TimeZone;
    }
    public static Australia_Brisbane(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[469]] as core.TimeZone;
    }
    public static Australia_Broken_Hill(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[470]] as core.TimeZone;
    }
    public static Australia_Darwin(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[471]] as core.TimeZone;
    }
    public static Australia_Eucla(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[472]] as core.TimeZone;
    }
    public static Australia_Hobart(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[473]] as core.TimeZone;
    }
    public static Australia_Lindeman(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[474]] as core.TimeZone;
    }
    public static Australia_Lord_Howe(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[475]] as core.TimeZone;
    }
    public static Australia_Melbourne(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[476]] as core.TimeZone;
    }
    public static Australia_Perth(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[477]] as core.TimeZone;
    }
    public static Australia_Sydney(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[478]] as core.TimeZone;
    }
    public static CET(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[479]] as core.TimeZone;
    }
    public static CST6CDT(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[480]] as core.TimeZone;
    }
    public static EET(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[481]] as core.TimeZone;
    }
    public static EST(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[482]] as core.TimeZone;
    }
    public static EST5EDT(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[483]] as core.TimeZone;
    }
    public static Europe_Andorra(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[484]] as core.TimeZone;
    }
    public static Europe_Astrakhan(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[485]] as core.TimeZone;
    }
    public static Europe_Athens(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[486]] as core.TimeZone;
    }
    public static Europe_Belgrade(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[487]] as core.TimeZone;
    }
    public static Europe_Berlin(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[488]] as core.TimeZone;
    }
    public static Europe_Brussels(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[489]] as core.TimeZone;
    }
    public static Europe_Bucharest(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[490]] as core.TimeZone;
    }
    public static Europe_Budapest(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[491]] as core.TimeZone;
    }
    public static Europe_Chisinau(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[492]] as core.TimeZone;
    }
    public static Europe_Dublin(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[493]] as core.TimeZone;
    }
    public static Europe_Gibraltar(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[494]] as core.TimeZone;
    }
    public static Europe_Helsinki(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[495]] as core.TimeZone;
    }
    public static Europe_Istanbul(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[496]] as core.TimeZone;
    }
    public static Europe_Kaliningrad(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[497]] as core.TimeZone;
    }
    public static Europe_Kirov(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[498]] as core.TimeZone;
    }
    public static Europe_Kyiv(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[499]] as core.TimeZone;
    }
    public static Europe_Lisbon(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[500]] as core.TimeZone;
    }
    public static Europe_London(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[501]] as core.TimeZone;
    }
    public static Europe_Madrid(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[502]] as core.TimeZone;
    }
    public static Europe_Malta(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[503]] as core.TimeZone;
    }
    public static Europe_Minsk(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[504]] as core.TimeZone;
    }
    public static Europe_Moscow(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[505]] as core.TimeZone;
    }
    public static Europe_Paris(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[506]] as core.TimeZone;
    }
    public static Europe_Prague(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[507]] as core.TimeZone;
    }
    public static Europe_Riga(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[508]] as core.TimeZone;
    }
    public static Europe_Rome(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[509]] as core.TimeZone;
    }
    public static Europe_Samara(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[510]] as core.TimeZone;
    }
    public static Europe_Saratov(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[511]] as core.TimeZone;
    }
    public static Europe_Simferopol(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[512]] as core.TimeZone;
    }
    public static Europe_Sofia(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[513]] as core.TimeZone;
    }
    public static Europe_Tallinn(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[514]] as core.TimeZone;
    }
    public static Europe_Tirane(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[515]] as core.TimeZone;
    }
    public static Europe_Ulyanovsk(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[516]] as core.TimeZone;
    }
    public static Europe_Vienna(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[517]] as core.TimeZone;
    }
    public static Europe_Vilnius(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[518]] as core.TimeZone;
    }
    public static Europe_Volgograd(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[519]] as core.TimeZone;
    }
    public static Europe_Warsaw(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[520]] as core.TimeZone;
    }
    public static Europe_Zurich(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[521]] as core.TimeZone;
    }
    public static Factory(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[522]] as core.TimeZone;
    }
    public static HST(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[523]] as core.TimeZone;
    }
    public static Indian_Chagos(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[524]] as core.TimeZone;
    }
    public static Indian_Maldives(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[525]] as core.TimeZone;
    }
    public static Indian_Mauritius(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[526]] as core.TimeZone;
    }
    public static MET(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[527]] as core.TimeZone;
    }
    public static MST(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[528]] as core.TimeZone;
    }
    public static MST7MDT(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[529]] as core.TimeZone;
    }
    public static PST8PDT(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[530]] as core.TimeZone;
    }
    public static Pacific_Apia(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[531]] as core.TimeZone;
    }
    public static Pacific_Auckland(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[532]] as core.TimeZone;
    }
    public static Pacific_Bougainville(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[533]] as core.TimeZone;
    }
    public static Pacific_Chatham(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[534]] as core.TimeZone;
    }
    public static Pacific_Easter(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[535]] as core.TimeZone;
    }
    public static Pacific_Efate(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[536]] as core.TimeZone;
    }
    public static Pacific_Fakaofo(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[537]] as core.TimeZone;
    }
    public static Pacific_Fiji(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[538]] as core.TimeZone;
    }
    public static Pacific_Galapagos(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[539]] as core.TimeZone;
    }
    public static Pacific_Gambier(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[540]] as core.TimeZone;
    }
    public static Pacific_Guadalcanal(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[541]] as core.TimeZone;
    }
    public static Pacific_Guam(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[542]] as core.TimeZone;
    }
    public static Pacific_Honolulu(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[543]] as core.TimeZone;
    }
    public static Pacific_Kanton(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[544]] as core.TimeZone;
    }
    public static Pacific_Kiritimati(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[545]] as core.TimeZone;
    }
    public static Pacific_Kosrae(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[546]] as core.TimeZone;
    }
    public static Pacific_Kwajalein(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[547]] as core.TimeZone;
    }
    public static Pacific_Marquesas(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[548]] as core.TimeZone;
    }
    public static Pacific_Nauru(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[549]] as core.TimeZone;
    }
    public static Pacific_Niue(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[550]] as core.TimeZone;
    }
    public static Pacific_Norfolk(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[551]] as core.TimeZone;
    }
    public static Pacific_Noumea(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[552]] as core.TimeZone;
    }
    public static Pacific_Pago_Pago(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[553]] as core.TimeZone;
    }
    public static Pacific_Palau(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[554]] as core.TimeZone;
    }
    public static Pacific_Pitcairn(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[555]] as core.TimeZone;
    }
    public static Pacific_Port_Moresby(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[556]] as core.TimeZone;
    }
    public static Pacific_Rarotonga(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[557]] as core.TimeZone;
    }
    public static Pacific_Tahiti(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[558]] as core.TimeZone;
    }
    public static Pacific_Tarawa(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[559]] as core.TimeZone;
    }
    public static Pacific_Tongatapu(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[560]] as core.TimeZone;
    }
    public static WET(abi: Abi): core.TimeZone {
      const t = abi.libs_by_name.get(std.name)!.mapped[2];
      return t.enum_values![t.generated_offsets[561]] as core.TimeZone;
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

  export class node<T> extends std_n.core.node {
    static override readonly _type = 'core::node';

    public static create(abi: Abi): node {
      return new node(abi.libs_by_name.get(std.name)!.mapped[4]);
    }
  }

  export class nodeTimeCursor<T> extends std_n.core.nodeTimeCursor {
    static override readonly _type = 'core::nodeTimeCursor';

    public static create(abi: Abi): nodeTimeCursor {
      return new nodeTimeCursor(abi.libs_by_name.get(std.name)!.mapped[5]);
    }
  }

  export class TableColumnMeta extends GCObject {
    static readonly _type = 'core::TableColumnMeta';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public type(): string | null {
      return super.get(super.type.generated_offsets[0]) as string | null;
    }
    public set_type(v: string | null) {
      super.set(super.type.generated_offsets[0], v);
    }
    public size(): bigint | number {
      return super.get(super.type.generated_offsets[1]) as bigint | number;
    }
    public set_size(v: bigint | number) {
      super.set(super.type.generated_offsets[1], v);
    }
    public index(): boolean {
      return super.get(super.type.generated_offsets[2]) as boolean;
    }
    public set_index(v: boolean) {
      super.set(super.type.generated_offsets[2], v);
    }
    public min(): any | null {
      return super.get(super.type.generated_offsets[3]);
    }
    public set_min(v: any | null) {
      super.set(super.type.generated_offsets[3], v);
    }
    public max(): any | null {
      return super.get(super.type.generated_offsets[4]);
    }
    public set_max(v: any | null) {
      super.set(super.type.generated_offsets[4], v);
    }
    public avg(): any | null {
      return super.get(super.type.generated_offsets[5]);
    }
    public set_avg(v: any | null) {
      super.set(super.type.generated_offsets[5], v);
    }
    public std(): any | null {
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

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public static none(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[0]] as core.ErrorCode;
    }
    public static file_not_found(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[1]] as core.ErrorCode;
    }
    public static file_read_error(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[2]] as core.ErrorCode;
    }
    public static file_write_error(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[3]] as core.ErrorCode;
    }
    public static unresolved_function(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[4]] as core.ErrorCode;
    }
    public static too_deep_workspace(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[5]] as core.ErrorCode;
    }
    public static too_deep_iterator(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[6]] as core.ErrorCode;
    }
    public static wrong_path(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[7]] as core.ErrorCode;
    }
    public static parse_error(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[8]] as core.ErrorCode;
    }
    public static out_of_bounds(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[9]] as core.ErrorCode;
    }
    public static division_by_zero(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[10]] as core.ErrorCode;
    }
    public static wrong_operand(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[11]] as core.ErrorCode;
    }
    public static wrong_entrypoint(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[12]] as core.ErrorCode;
    }
    public static wrong_params(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[13]] as core.ErrorCode;
    }
    public static wrong_param_type(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[14]] as core.ErrorCode;
    }
    public static wrong_assert(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[15]] as core.ErrorCode;
    }
    public static wrong_numeric(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[16]] as core.ErrorCode;
    }
    public static wrong_time(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[17]] as core.ErrorCode;
    }
    public static wrong_state(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[18]] as core.ErrorCode;
    }
    public static wrong_null(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[19]] as core.ErrorCode;
    }
    public static unresolved_ref(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[20]] as core.ErrorCode;
    }
    public static assign_error(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[21]] as core.ErrorCode;
    }
    public static read_field_requires_obj(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[22]] as core.ErrorCode;
    }
    public static read_offset_requires_array(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[23]] as core.ErrorCode;
    }
    public static write_offset_requires_array(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[24]] as core.ErrorCode;
    }
    public static write_field_requires_object(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[25]] as core.ErrorCode;
    }
    public static min_higher_max_error(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[26]] as core.ErrorCode;
    }
    public static negative_std(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[27]] as core.ErrorCode;
    }
    public static interrupted(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[28]] as core.ErrorCode;
    }
    public static throw_(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[29]] as core.ErrorCode;
    }
    public static wrong_type(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[30]] as core.ErrorCode;
    }
    public static wrong_dimension(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[31]] as core.ErrorCode;
    }
    public static unsupported_operation(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[32]] as core.ErrorCode;
    }
    public static unsupported_type(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[33]] as core.ErrorCode;
    }
    public static too_large(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[34]] as core.ErrorCode;
    }
    public static dimensions_mismatch(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[35]] as core.ErrorCode;
    }
    public static not_initialized(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[36]] as core.ErrorCode;
    }
    public static timeout(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[37]] as core.ErrorCode;
    }
    public static unauthorized(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[38]] as core.ErrorCode;
    }
    public static forbidden(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[39]] as core.ErrorCode;
    }
    public static runtime_error(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[40]] as core.ErrorCode;
    }
    public static compile_error(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[41]] as core.ErrorCode;
    }
    public static update_error(abi: Abi): core.ErrorCode {
      const t = abi.libs_by_name.get(std.name)!.mapped[8];
      return t.enum_values![t.generated_offsets[42]] as core.ErrorCode;
    }
    create(abi: Abi): ErrorCode {
      return new ErrorCode(abi.libs_by_name.get(std.name)!.mapped[8]);
    }
  }

  export class SamplingMode extends GCEnum {
    static readonly _type = 'core::SamplingMode';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public static fixed(abi: Abi): core.SamplingMode {
      const t = abi.libs_by_name.get(std.name)!.mapped[9];
      return t.enum_values![t.generated_offsets[0]] as core.SamplingMode;
    }
    public static fixed_reg(abi: Abi): core.SamplingMode {
      const t = abi.libs_by_name.get(std.name)!.mapped[9];
      return t.enum_values![t.generated_offsets[1]] as core.SamplingMode;
    }
    public static adaptative(abi: Abi): core.SamplingMode {
      const t = abi.libs_by_name.get(std.name)!.mapped[9];
      return t.enum_values![t.generated_offsets[2]] as core.SamplingMode;
    }
    public static dense(abi: Abi): core.SamplingMode {
      const t = abi.libs_by_name.get(std.name)!.mapped[9];
      return t.enum_values![t.generated_offsets[3]] as core.SamplingMode;
    }
    create(abi: Abi): SamplingMode {
      return new SamplingMode(abi.libs_by_name.get(std.name)!.mapped[9]);
    }
  }

  export class DurationUnit extends GCEnum {
    static readonly _type = 'core::DurationUnit';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public static microseconds(abi: Abi): core.DurationUnit {
      const t = abi.libs_by_name.get(std.name)!.mapped[10];
      return t.enum_values![t.generated_offsets[0]] as core.DurationUnit;
    }
    public static milliseconds(abi: Abi): core.DurationUnit {
      const t = abi.libs_by_name.get(std.name)!.mapped[10];
      return t.enum_values![t.generated_offsets[1]] as core.DurationUnit;
    }
    public static seconds(abi: Abi): core.DurationUnit {
      const t = abi.libs_by_name.get(std.name)!.mapped[10];
      return t.enum_values![t.generated_offsets[2]] as core.DurationUnit;
    }
    public static minutes(abi: Abi): core.DurationUnit {
      const t = abi.libs_by_name.get(std.name)!.mapped[10];
      return t.enum_values![t.generated_offsets[3]] as core.DurationUnit;
    }
    public static hours(abi: Abi): core.DurationUnit {
      const t = abi.libs_by_name.get(std.name)!.mapped[10];
      return t.enum_values![t.generated_offsets[4]] as core.DurationUnit;
    }
    public static days(abi: Abi): core.DurationUnit {
      const t = abi.libs_by_name.get(std.name)!.mapped[10];
      return t.enum_values![t.generated_offsets[5]] as core.DurationUnit;
    }
    public static weeks(abi: Abi): core.DurationUnit {
      const t = abi.libs_by_name.get(std.name)!.mapped[10];
      return t.enum_values![t.generated_offsets[6]] as core.DurationUnit;
    }
    public static months(abi: Abi): core.DurationUnit {
      const t = abi.libs_by_name.get(std.name)!.mapped[10];
      return t.enum_values![t.generated_offsets[7]] as core.DurationUnit;
    }
    public static years(abi: Abi): core.DurationUnit {
      const t = abi.libs_by_name.get(std.name)!.mapped[10];
      return t.enum_values![t.generated_offsets[8]] as core.DurationUnit;
    }
    create(abi: Abi): DurationUnit {
      return new DurationUnit(abi.libs_by_name.get(std.name)!.mapped[10]);
    }
  }

  export class TensorType extends GCEnum {
    static readonly _type = 'core::TensorType';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public static i32(abi: Abi): core.TensorType {
      const t = abi.libs_by_name.get(std.name)!.mapped[11];
      return t.enum_values![t.generated_offsets[0]] as core.TensorType;
    }
    public static i64(abi: Abi): core.TensorType {
      const t = abi.libs_by_name.get(std.name)!.mapped[11];
      return t.enum_values![t.generated_offsets[1]] as core.TensorType;
    }
    public static f32(abi: Abi): core.TensorType {
      const t = abi.libs_by_name.get(std.name)!.mapped[11];
      return t.enum_values![t.generated_offsets[2]] as core.TensorType;
    }
    public static f64(abi: Abi): core.TensorType {
      const t = abi.libs_by_name.get(std.name)!.mapped[11];
      return t.enum_values![t.generated_offsets[3]] as core.TensorType;
    }
    public static c64(abi: Abi): core.TensorType {
      const t = abi.libs_by_name.get(std.name)!.mapped[11];
      return t.enum_values![t.generated_offsets[4]] as core.TensorType;
    }
    public static c128(abi: Abi): core.TensorType {
      const t = abi.libs_by_name.get(std.name)!.mapped[11];
      return t.enum_values![t.generated_offsets[5]] as core.TensorType;
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

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public center(): std_n.core.geo {
      return super.get(super.type.generated_offsets[0]) as std_n.core.geo;
    }
    public set_center(v: std_n.core.geo) {
      super.set(super.type.generated_offsets[0], v);
    }
    public radius(): number {
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

  export class nodeTime<T> extends std_n.core.nodeTime {
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

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    create(abi: Abi): function_ {
      return new function_(abi.libs_by_name.get(std.name)!.mapped[21]);
    }
  }

  export class NodeTimeInfo extends GCObject {
    static readonly _type = 'core::NodeTimeInfo';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public size(): bigint | number {
      return super.get(super.type.generated_offsets[0]) as bigint | number;
    }
    public set_size(v: bigint | number) {
      super.set(super.type.generated_offsets[0], v);
    }
    public from(): std_n.core.time | null {
      return super.get(super.type.generated_offsets[1]) as std_n.core.time | null;
    }
    public set_from(v: std_n.core.time | null) {
      super.set(super.type.generated_offsets[1], v);
    }
    public to(): std_n.core.time | null {
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

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public x(): any {
      return super.get(super.type.generated_offsets[0]);
    }
    public set_x(v: any) {
      super.set(super.type.generated_offsets[0], v);
    }
    public y(): any {
      return super.get(super.type.generated_offsets[1]);
    }
    public set_y(v: any) {
      super.set(super.type.generated_offsets[1], v);
    }
    create(abi: Abi, x: any, y: any): Tuple {
      return new Tuple(abi.libs_by_name.get(std.name)!.mapped[23], x, y);
    }
  }

  export class nodeIndex<K,V> extends std_n.core.nodeIndex {
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

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public static years(abi: Abi): core.DatePart {
      const t = abi.libs_by_name.get(std.name)!.mapped[27];
      return t.enum_values![t.generated_offsets[0]] as core.DatePart;
    }
    public static months(abi: Abi): core.DatePart {
      const t = abi.libs_by_name.get(std.name)!.mapped[27];
      return t.enum_values![t.generated_offsets[1]] as core.DatePart;
    }
    public static days(abi: Abi): core.DatePart {
      const t = abi.libs_by_name.get(std.name)!.mapped[27];
      return t.enum_values![t.generated_offsets[2]] as core.DatePart;
    }
    public static hours(abi: Abi): core.DatePart {
      const t = abi.libs_by_name.get(std.name)!.mapped[27];
      return t.enum_values![t.generated_offsets[3]] as core.DatePart;
    }
    public static minutes(abi: Abi): core.DatePart {
      const t = abi.libs_by_name.get(std.name)!.mapped[27];
      return t.enum_values![t.generated_offsets[4]] as core.DatePart;
    }
    public static seconds(abi: Abi): core.DatePart {
      const t = abi.libs_by_name.get(std.name)!.mapped[27];
      return t.enum_values![t.generated_offsets[5]] as core.DatePart;
    }
    public static microseconds(abi: Abi): core.DatePart {
      const t = abi.libs_by_name.get(std.name)!.mapped[27];
      return t.enum_values![t.generated_offsets[6]] as core.DatePart;
    }
    create(abi: Abi): DatePart {
      return new DatePart(abi.libs_by_name.get(std.name)!.mapped[27]);
    }
  }

  export class nodeGeo<T> extends std_n.core.nodeGeo {
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

}

export namespace runtime {
  export class SecurityEntity extends GCObject {
    static readonly _type = 'runtime::SecurityEntity';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public id(): bigint | number {
      return super.get(super.type.generated_offsets[0]) as bigint | number;
    }
    public set_id(v: bigint | number) {
      super.set(super.type.generated_offsets[0], v);
    }
    public name(): string {
      return super.get(super.type.generated_offsets[1]) as string;
    }
    public set_name(v: string) {
      super.set(super.type.generated_offsets[1], v);
    }
    public activated(): boolean {
      return super.get(super.type.generated_offsets[2]) as boolean;
    }
    public set_activated(v: boolean) {
      super.set(super.type.generated_offsets[2], v);
    }
    async all(greycat: GreyCat, signal?: AbortSignal): Promise<Array<runtime.SecurityEntity>> {
      return greycat.call('runtime::SecurityEntity::all', undefined, signal);
    }
    async set_(greycat: GreyCat, entity: runtime.SecurityEntity, signal?: AbortSignal): Promise<bigint | number | null> {
      return greycat.call('runtime::SecurityEntity::set_', [entity], signal);
    }
    create(abi: Abi, id: bigint | number, name: string, activated: boolean): SecurityEntity {
      return new SecurityEntity(abi.libs_by_name.get(std.name)!.mapped[30], id, name, activated);
    }
  }

  export class UserRole extends GCObject {
    static readonly _type = 'runtime::UserRole';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public name(): string {
      return super.get(super.type.generated_offsets[0]) as string;
    }
    public set_name(v: string) {
      super.set(super.type.generated_offsets[0], v);
    }
    public permissions(): Array<string> {
      return super.get(super.type.generated_offsets[1]) as Array<string>;
    }
    public set_permissions(v: Array<string>) {
      super.set(super.type.generated_offsets[1], v);
    }
    async all(greycat: GreyCat, signal?: AbortSignal): Promise<Array<runtime.UserRole>> {
      return greycat.call('runtime::UserRole::all', undefined, signal);
    }
    async remove(greycat: GreyCat, name: string, signal?: AbortSignal): Promise<unknown> {
      return greycat.call('runtime::UserRole::remove', [name], signal);
    }
    async set_(greycat: GreyCat, value: runtime.UserRole, signal?: AbortSignal): Promise<unknown> {
      return greycat.call('runtime::UserRole::set_', [value], signal);
    }
    create(abi: Abi, name: string, permissions: Array<string>): UserRole {
      return new UserRole(abi.libs_by_name.get(std.name)!.mapped[31], name, permissions);
    }
  }

  export class RuntimeInfo extends GCObject {
    static readonly _type = 'runtime::RuntimeInfo';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public version(): string {
      return super.get(super.type.generated_offsets[0]) as string;
    }
    public set_version(v: string) {
      super.set(super.type.generated_offsets[0], v);
    }
    public arch(): string {
      return super.get(super.type.generated_offsets[1]) as string;
    }
    public set_arch(v: string) {
      super.set(super.type.generated_offsets[1], v);
    }
    public timezone(): core.TimeZone {
      return super.get(super.type.generated_offsets[2]) as core.TimeZone;
    }
    public set_timezone(v: core.TimeZone) {
      super.set(super.type.generated_offsets[2], v);
    }
    public licence(): runtime.Licence {
      return super.get(super.type.generated_offsets[3]) as runtime.Licence;
    }
    public set_licence(v: runtime.Licence) {
      super.set(super.type.generated_offsets[3], v);
    }
    public io_threads(): bigint | number {
      return super.get(super.type.generated_offsets[4]) as bigint | number;
    }
    public set_io_threads(v: bigint | number) {
      super.set(super.type.generated_offsets[4], v);
    }
    public bg_threads(): bigint | number {
      return super.get(super.type.generated_offsets[5]) as bigint | number;
    }
    public set_bg_threads(v: bigint | number) {
      super.set(super.type.generated_offsets[5], v);
    }
    public fg_threads(): bigint | number {
      return super.get(super.type.generated_offsets[6]) as bigint | number;
    }
    public set_fg_threads(v: bigint | number) {
      super.set(super.type.generated_offsets[6], v);
    }
    public mem_total(): bigint | number {
      return super.get(super.type.generated_offsets[7]) as bigint | number;
    }
    public set_mem_total(v: bigint | number) {
      super.set(super.type.generated_offsets[7], v);
    }
    public mem_worker(): bigint | number {
      return super.get(super.type.generated_offsets[8]) as bigint | number;
    }
    public set_mem_worker(v: bigint | number) {
      super.set(super.type.generated_offsets[8], v);
    }
    public nb_ctx(): bigint | number {
      return super.get(super.type.generated_offsets[9]) as bigint | number;
    }
    public set_nb_ctx(v: bigint | number) {
      super.set(super.type.generated_offsets[9], v);
    }
    public store_stats(): runtime.StoreStat | null {
      return super.get(super.type.generated_offsets[10]) as runtime.StoreStat | null;
    }
    public set_store_stats(v: runtime.StoreStat | null) {
      super.set(super.type.generated_offsets[10], v);
    }
    create(abi: Abi, version: string, arch: string, timezone: core.TimeZone, licence: runtime.Licence, io_threads: bigint | number, bg_threads: bigint | number, fg_threads: bigint | number, mem_total: bigint | number, mem_worker: bigint | number, nb_ctx: bigint | number, store_stats: runtime.StoreStat | null): RuntimeInfo {
      return new RuntimeInfo(abi.libs_by_name.get(std.name)!.mapped[32], version, arch, timezone, licence, io_threads, bg_threads, fg_threads, mem_total, mem_worker, nb_ctx, store_stats);
    }
  }

  export class StoreStat extends GCObject {
    static readonly _type = 'runtime::StoreStat';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public capacity_bytes(): bigint | number {
      return super.get(super.type.generated_offsets[0]) as bigint | number;
    }
    public set_capacity_bytes(v: bigint | number) {
      super.set(super.type.generated_offsets[0], v);
    }
    public allocated_bytes(): bigint | number {
      return super.get(super.type.generated_offsets[1]) as bigint | number;
    }
    public set_allocated_bytes(v: bigint | number) {
      super.set(super.type.generated_offsets[1], v);
    }
    public allocated_ratio(): number {
      return super.get(super.type.generated_offsets[2]) as number;
    }
    public set_allocated_ratio(v: number) {
      super.set(super.type.generated_offsets[2], v);
    }
    public remained_bytes(): bigint | number {
      return super.get(super.type.generated_offsets[3]) as bigint | number;
    }
    public set_remained_bytes(v: bigint | number) {
      super.set(super.type.generated_offsets[3], v);
    }
    public remained_ratio(): number {
      return super.get(super.type.generated_offsets[4]) as number;
    }
    public set_remained_ratio(v: number) {
      super.set(super.type.generated_offsets[4], v);
    }
    public used_bytes(): bigint | number {
      return super.get(super.type.generated_offsets[5]) as bigint | number;
    }
    public set_used_bytes(v: bigint | number) {
      super.set(super.type.generated_offsets[5], v);
    }
    public used_ratio(): number {
      return super.get(super.type.generated_offsets[6]) as number;
    }
    public set_used_ratio(v: number) {
      super.set(super.type.generated_offsets[6], v);
    }
    public available_bytes(): bigint | number {
      return super.get(super.type.generated_offsets[7]) as bigint | number;
    }
    public set_available_bytes(v: bigint | number) {
      super.set(super.type.generated_offsets[7], v);
    }
    public available_ratio(): number {
      return super.get(super.type.generated_offsets[8]) as number;
    }
    public set_available_ratio(v: number) {
      super.set(super.type.generated_offsets[8], v);
    }
    create(abi: Abi, capacity_bytes: bigint | number, allocated_bytes: bigint | number, allocated_ratio: number, remained_bytes: bigint | number, remained_ratio: number, used_bytes: bigint | number, used_ratio: number, available_bytes: bigint | number, available_ratio: number): StoreStat {
      return new StoreStat(abi.libs_by_name.get(std.name)!.mapped[33], capacity_bytes, allocated_bytes, allocated_ratio, remained_bytes, remained_ratio, used_bytes, used_ratio, available_bytes, available_ratio);
    }
  }

  export class TaskInfo extends GCObject {
    static readonly _type = 'runtime::TaskInfo';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public id(): bigint | number {
      return super.get(super.type.generated_offsets[0]) as bigint | number;
    }
    public set_id(v: bigint | number) {
      super.set(super.type.generated_offsets[0], v);
    }
    public parent(): bigint | number | null {
      return super.get(super.type.generated_offsets[1]) as bigint | number | null;
    }
    public set_parent(v: bigint | number | null) {
      super.set(super.type.generated_offsets[1], v);
    }
    public mod(): string {
      return super.get(super.type.generated_offsets[2]) as string;
    }
    public set_mod(v: string) {
      super.set(super.type.generated_offsets[2], v);
    }
    public fun(): string {
      return super.get(super.type.generated_offsets[3]) as string;
    }
    public set_fun(v: string) {
      super.set(super.type.generated_offsets[3], v);
    }
    public params(): string {
      return super.get(super.type.generated_offsets[4]) as string;
    }
    public set_params(v: string) {
      super.set(super.type.generated_offsets[4], v);
    }
    public progress(): number {
      return super.get(super.type.generated_offsets[5]) as number;
    }
    public set_progress(v: number) {
      super.set(super.type.generated_offsets[5], v);
    }
    public remaining(): std_n.core.duration | null {
      return super.get(super.type.generated_offsets[6]) as std_n.core.duration | null;
    }
    public set_remaining(v: std_n.core.duration | null) {
      super.set(super.type.generated_offsets[6], v);
    }
    public creation(): std_n.core.time {
      return super.get(super.type.generated_offsets[7]) as std_n.core.time;
    }
    public set_creation(v: std_n.core.time) {
      super.set(super.type.generated_offsets[7], v);
    }
    public start(): std_n.core.time | null {
      return super.get(super.type.generated_offsets[8]) as std_n.core.time | null;
    }
    public set_start(v: std_n.core.time | null) {
      super.set(super.type.generated_offsets[8], v);
    }
    public duration(): std_n.core.duration | null {
      return super.get(super.type.generated_offsets[9]) as std_n.core.duration | null;
    }
    public set_duration(v: std_n.core.duration | null) {
      super.set(super.type.generated_offsets[9], v);
    }
    public status(): runtime.TaskStatus {
      return super.get(super.type.generated_offsets[10]) as runtime.TaskStatus;
    }
    public set_status(v: runtime.TaskStatus) {
      super.set(super.type.generated_offsets[10], v);
    }
    public result_size(): bigint | number {
      return super.get(super.type.generated_offsets[11]) as bigint | number;
    }
    public set_result_size(v: bigint | number) {
      super.set(super.type.generated_offsets[11], v);
    }
    public log_size(): bigint | number {
      return super.get(super.type.generated_offsets[12]) as bigint | number;
    }
    public set_log_size(v: bigint | number) {
      super.set(super.type.generated_offsets[12], v);
    }
    public sub_waiting(): bigint | number {
      return super.get(super.type.generated_offsets[13]) as bigint | number;
    }
    public set_sub_waiting(v: bigint | number) {
      super.set(super.type.generated_offsets[13], v);
    }
    public sub_tasks_all(): bigint | number {
      return super.get(super.type.generated_offsets[14]) as bigint | number;
    }
    public set_sub_tasks_all(v: bigint | number) {
      super.set(super.type.generated_offsets[14], v);
    }
    public user(): bigint | number {
      return super.get(super.type.generated_offsets[15]) as bigint | number;
    }
    public set_user(v: bigint | number) {
      super.set(super.type.generated_offsets[15], v);
    }
    create(abi: Abi, id: bigint | number, parent: bigint | number | null, mod: string, fun: string, params: string, progress: number, remaining: std_n.core.duration | null, creation: std_n.core.time, start: std_n.core.time | null, duration: std_n.core.duration | null, status: runtime.TaskStatus, result_size: bigint | number, log_size: bigint | number, sub_waiting: bigint | number, sub_tasks_all: bigint | number, user: bigint | number): TaskInfo {
      return new TaskInfo(abi.libs_by_name.get(std.name)!.mapped[34], id, parent, mod, fun, params, progress, remaining, creation, start, duration, status, result_size, log_size, sub_waiting, sub_tasks_all, user);
    }
  }

  export class UserGroupPolicy extends GCObject {
    static readonly _type = 'runtime::UserGroupPolicy';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public group_id(): bigint | number {
      return super.get(super.type.generated_offsets[0]) as bigint | number;
    }
    public set_group_id(v: bigint | number) {
      super.set(super.type.generated_offsets[0], v);
    }
    public type(): runtime.UserGroupPolicyType {
      return super.get(super.type.generated_offsets[1]) as runtime.UserGroupPolicyType;
    }
    public set_type(v: runtime.UserGroupPolicyType) {
      super.set(super.type.generated_offsets[1], v);
    }
    create(abi: Abi, group_id: bigint | number, type: runtime.UserGroupPolicyType): UserGroupPolicy {
      return new UserGroupPolicy(abi.libs_by_name.get(std.name)!.mapped[35], group_id, type);
    }
  }

  export class UserGroupPolicyType extends GCEnum {
    static readonly _type = 'runtime::UserGroupPolicyType';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public static read(abi: Abi): runtime.UserGroupPolicyType {
      const t = abi.libs_by_name.get(std.name)!.mapped[36];
      return t.enum_values![t.generated_offsets[0]] as runtime.UserGroupPolicyType;
    }
    public static write(abi: Abi): runtime.UserGroupPolicyType {
      const t = abi.libs_by_name.get(std.name)!.mapped[36];
      return t.enum_values![t.generated_offsets[1]] as runtime.UserGroupPolicyType;
    }
    public static execute(abi: Abi): runtime.UserGroupPolicyType {
      const t = abi.libs_by_name.get(std.name)!.mapped[36];
      return t.enum_values![t.generated_offsets[2]] as runtime.UserGroupPolicyType;
    }
    create(abi: Abi): UserGroupPolicyType {
      return new UserGroupPolicyType(abi.libs_by_name.get(std.name)!.mapped[36]);
    }
  }

  export class UserGroup extends GCObject {
    static readonly _type = 'runtime::UserGroup';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public id(): bigint | number {
      return super.get(super.type.generated_offsets[0]) as bigint | number;
    }
    public set_id(v: bigint | number) {
      super.set(super.type.generated_offsets[0], v);
    }
    public name(): string {
      return super.get(super.type.generated_offsets[1]) as string;
    }
    public set_name(v: string) {
      super.set(super.type.generated_offsets[1], v);
    }
    public activated(): boolean {
      return super.get(super.type.generated_offsets[2]) as boolean;
    }
    public set_activated(v: boolean) {
      super.set(super.type.generated_offsets[2], v);
    }
    async all(greycat: GreyCat, signal?: AbortSignal): Promise<Array<runtime.SecurityEntity>> {
      return greycat.call('runtime::SecurityEntity::all', undefined, signal);
    }
    async set_(greycat: GreyCat, entity: runtime.SecurityEntity, signal?: AbortSignal): Promise<bigint | number | null> {
      return greycat.call('runtime::SecurityEntity::set_', [entity], signal);
    }
    create(abi: Abi, id: bigint | number, name: string, activated: boolean): UserGroup {
      return new UserGroup(abi.libs_by_name.get(std.name)!.mapped[37], id, name, activated);
    }
  }

  export class PeriodicTask extends GCObject {
    static readonly _type = 'runtime::PeriodicTask';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public name(): string {
      return super.get(super.type.generated_offsets[0]) as string;
    }
    public set_name(v: string) {
      super.set(super.type.generated_offsets[0], v);
    }
    public user_id(): bigint | number {
      return super.get(super.type.generated_offsets[1]) as bigint | number;
    }
    public set_user_id(v: bigint | number) {
      super.set(super.type.generated_offsets[1], v);
    }
    public args(): string | null {
      return super.get(super.type.generated_offsets[2]) as string | null;
    }
    public set_args(v: string | null) {
      super.set(super.type.generated_offsets[2], v);
    }
    public start(): std_n.core.time {
      return super.get(super.type.generated_offsets[3]) as std_n.core.time;
    }
    public set_start(v: std_n.core.time) {
      super.set(super.type.generated_offsets[3], v);
    }
    public every(): std_n.core.duration {
      return super.get(super.type.generated_offsets[4]) as std_n.core.duration;
    }
    public set_every(v: std_n.core.duration) {
      super.set(super.type.generated_offsets[4], v);
    }
    async all(greycat: GreyCat, signal?: AbortSignal): Promise<Array<runtime.PeriodicTask>> {
      return greycat.call('runtime::PeriodicTask::all', undefined, signal);
    }
    async set_(greycat: GreyCat, tasks: Array<runtime.PeriodicTask>, signal?: AbortSignal): Promise<unknown> {
      return greycat.call('runtime::PeriodicTask::set_', [tasks], signal);
    }
    create(abi: Abi, name: string, user_id: bigint | number, args: string | null, start: std_n.core.time, every: std_n.core.duration): PeriodicTask {
      return new PeriodicTask(abi.libs_by_name.get(std.name)!.mapped[38], name, user_id, args, start, every);
    }
  }

  export class User extends GCObject {
    static readonly _type = 'runtime::User';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public id(): bigint | number {
      return super.get(super.type.generated_offsets[0]) as bigint | number;
    }
    public set_id(v: bigint | number) {
      super.set(super.type.generated_offsets[0], v);
    }
    public name(): string {
      return super.get(super.type.generated_offsets[1]) as string;
    }
    public set_name(v: string) {
      super.set(super.type.generated_offsets[1], v);
    }
    public activated(): boolean {
      return super.get(super.type.generated_offsets[2]) as boolean;
    }
    public set_activated(v: boolean) {
      super.set(super.type.generated_offsets[2], v);
    }
    public full_name(): string | null {
      return super.get(super.type.generated_offsets[3]) as string | null;
    }
    public set_full_name(v: string | null) {
      super.set(super.type.generated_offsets[3], v);
    }
    public email(): string | null {
      return super.get(super.type.generated_offsets[4]) as string | null;
    }
    public set_email(v: string | null) {
      super.set(super.type.generated_offsets[4], v);
    }
    public role(): string | null {
      return super.get(super.type.generated_offsets[5]) as string | null;
    }
    public set_role(v: string | null) {
      super.set(super.type.generated_offsets[5], v);
    }
    public permissions_flags(): bigint | number | null {
      return super.get(super.type.generated_offsets[6]) as bigint | number | null;
    }
    public set_permissions_flags(v: bigint | number | null) {
      super.set(super.type.generated_offsets[6], v);
    }
    public groups(): Array<runtime.UserGroupPolicy> | null {
      return super.get(super.type.generated_offsets[7]) as Array<runtime.UserGroupPolicy> | null;
    }
    public set_groups(v: Array<runtime.UserGroupPolicy> | null) {
      super.set(super.type.generated_offsets[7], v);
    }
    public groups_flags(): bigint | number | null {
      return super.get(super.type.generated_offsets[8]) as bigint | number | null;
    }
    public set_groups_flags(v: bigint | number | null) {
      super.set(super.type.generated_offsets[8], v);
    }
    public external(): boolean {
      return super.get(super.type.generated_offsets[9]) as boolean;
    }
    public set_external(v: boolean) {
      super.set(super.type.generated_offsets[9], v);
    }
    async all(greycat: GreyCat, signal?: AbortSignal): Promise<Array<runtime.SecurityEntity>> {
      return greycat.call('runtime::SecurityEntity::all', undefined, signal);
    }
    async set_(greycat: GreyCat, entity: runtime.SecurityEntity, signal?: AbortSignal): Promise<bigint | number | null> {
      return greycat.call('runtime::SecurityEntity::set_', [entity], signal);
    }
    async login(greycat: GreyCat, credentials: string, use_cookie: boolean, signal?: AbortSignal): Promise<string> {
      return greycat.call('runtime::User::login', [credentials, use_cookie], signal);
    }
    async tokenLogin(greycat: GreyCat, token: string, use_cookie: boolean, signal?: AbortSignal): Promise<string> {
      return greycat.call('runtime::User::tokenLogin', [token, use_cookie], signal);
    }
    async renew(greycat: GreyCat, use_cookie: boolean, signal?: AbortSignal): Promise<string> {
      return greycat.call('runtime::User::renew', [use_cookie], signal);
    }
    async logout(greycat: GreyCat, signal?: AbortSignal): Promise<unknown> {
      return greycat.call('runtime::User::logout', undefined, signal);
    }
    async current(greycat: GreyCat, signal?: AbortSignal): Promise<bigint | number> {
      return greycat.call('runtime::User::current', undefined, signal);
    }
    async me(greycat: GreyCat, signal?: AbortSignal): Promise<runtime.User> {
      return greycat.call('runtime::User::me', undefined, signal);
    }
    async permissions(greycat: GreyCat, signal?: AbortSignal): Promise<Array<string>> {
      return greycat.call('runtime::User::permissions', undefined, signal);
    }
    async setPassword(greycat: GreyCat, name: string, pass: string, signal?: AbortSignal): Promise<boolean> {
      return greycat.call('runtime::User::setPassword', [name, pass], signal);
    }
    async getToken(greycat: GreyCat, id: bigint | number, signal?: AbortSignal): Promise<string> {
      return greycat.call('runtime::User::getToken', [id], signal);
    }
    create(abi: Abi, id: bigint | number, name: string, activated: boolean, full_name: string | null, email: string | null, role: string | null, permissions_flags: bigint | number | null, groups: Array<runtime.UserGroupPolicy> | null, groups_flags: bigint | number | null, external: boolean): User {
      return new User(abi.libs_by_name.get(std.name)!.mapped[39], id, name, activated, full_name, email, role, permissions_flags, groups, groups_flags, external);
    }
  }

  export class UserCredential extends GCObject {
    static readonly _type = 'runtime::UserCredential';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public offset(): bigint | number {
      return super.get(super.type.generated_offsets[0]) as bigint | number;
    }
    public set_offset(v: bigint | number) {
      super.set(super.type.generated_offsets[0], v);
    }
    public pass(): string | null {
      return super.get(super.type.generated_offsets[1]) as string | null;
    }
    public set_pass(v: string | null) {
      super.set(super.type.generated_offsets[1], v);
    }
    create(abi: Abi, offset: bigint | number, pass: string | null): UserCredential {
      return new UserCredential(abi.libs_by_name.get(std.name)!.mapped[40], offset, pass);
    }
  }

  export class System extends GCObject {
    static readonly _type = 'runtime::System';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    create(abi: Abi): System {
      return new System(abi.libs_by_name.get(std.name)!.mapped[41]);
    }
  }

  export class Task extends GCObject {
    static readonly _type = 'runtime::Task';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    async running(greycat: GreyCat, signal?: AbortSignal): Promise<Array<runtime.TaskInfo>> {
      return greycat.call('runtime::Task::running', undefined, signal);
    }
    async history(greycat: GreyCat, offset: bigint | number, max: bigint | number, signal?: AbortSignal): Promise<Array<runtime.TaskInfo>> {
      return greycat.call('runtime::Task::history', [offset, max], signal);
    }
    async cancel(greycat: GreyCat, task_id: bigint | number, signal?: AbortSignal): Promise<boolean> {
      return greycat.call('runtime::Task::cancel', [task_id], signal);
    }
    async info(greycat: GreyCat, user_id: bigint | number, task_id: bigint | number, signal?: AbortSignal): Promise<runtime.TaskInfo | null> {
      return greycat.call('runtime::Task::info', [user_id, task_id], signal);
    }
    create(abi: Abi): Task {
      return new Task(abi.libs_by_name.get(std.name)!.mapped[42]);
    }
  }

  export class SecurityFields extends GCObject {
    static readonly _type = 'runtime::SecurityFields';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public email(): string | null {
      return super.get(super.type.generated_offsets[0]) as string | null;
    }
    public set_email(v: string | null) {
      super.set(super.type.generated_offsets[0], v);
    }
    public name(): string | null {
      return super.get(super.type.generated_offsets[1]) as string | null;
    }
    public set_name(v: string | null) {
      super.set(super.type.generated_offsets[1], v);
    }
    public first_name(): string | null {
      return super.get(super.type.generated_offsets[2]) as string | null;
    }
    public set_first_name(v: string | null) {
      super.set(super.type.generated_offsets[2], v);
    }
    public last_name(): string | null {
      return super.get(super.type.generated_offsets[3]) as string | null;
    }
    public set_last_name(v: string | null) {
      super.set(super.type.generated_offsets[3], v);
    }
    public roles(): Map<string, string> | null {
      return super.get(super.type.generated_offsets[4]) as Map<string, string> | null;
    }
    public set_roles(v: Map<string, string> | null) {
      super.set(super.type.generated_offsets[4], v);
    }
    public groups(): Map<string, string> | null {
      return super.get(super.type.generated_offsets[5]) as Map<string, string> | null;
    }
    public set_groups(v: Map<string, string> | null) {
      super.set(super.type.generated_offsets[5], v);
    }
    async set_(greycat: GreyCat, f: runtime.SecurityFields, signal?: AbortSignal): Promise<unknown> {
      return greycat.call('runtime::SecurityFields::set_', [f], signal);
    }
    async get_(greycat: GreyCat, signal?: AbortSignal): Promise<runtime.SecurityFields | null> {
      return greycat.call('runtime::SecurityFields::get_', undefined, signal);
    }
    create(abi: Abi, email: string | null, name: string | null, first_name: string | null, last_name: string | null, roles: Map<string, string> | null, groups: Map<string, string> | null): SecurityFields {
      return new SecurityFields(abi.libs_by_name.get(std.name)!.mapped[43], email, name, first_name, last_name, roles, groups);
    }
  }

  export class TaskStatus extends GCEnum {
    static readonly _type = 'runtime::TaskStatus';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public static empty(abi: Abi): runtime.TaskStatus {
      const t = abi.libs_by_name.get(std.name)!.mapped[44];
      return t.enum_values![t.generated_offsets[0]] as runtime.TaskStatus;
    }
    public static waiting(abi: Abi): runtime.TaskStatus {
      const t = abi.libs_by_name.get(std.name)!.mapped[44];
      return t.enum_values![t.generated_offsets[1]] as runtime.TaskStatus;
    }
    public static running(abi: Abi): runtime.TaskStatus {
      const t = abi.libs_by_name.get(std.name)!.mapped[44];
      return t.enum_values![t.generated_offsets[2]] as runtime.TaskStatus;
    }
    public static cancelled(abi: Abi): runtime.TaskStatus {
      const t = abi.libs_by_name.get(std.name)!.mapped[44];
      return t.enum_values![t.generated_offsets[3]] as runtime.TaskStatus;
    }
    public static error(abi: Abi): runtime.TaskStatus {
      const t = abi.libs_by_name.get(std.name)!.mapped[44];
      return t.enum_values![t.generated_offsets[4]] as runtime.TaskStatus;
    }
    public static ended(abi: Abi): runtime.TaskStatus {
      const t = abi.libs_by_name.get(std.name)!.mapped[44];
      return t.enum_values![t.generated_offsets[5]] as runtime.TaskStatus;
    }
    create(abi: Abi): TaskStatus {
      return new TaskStatus(abi.libs_by_name.get(std.name)!.mapped[44]);
    }
  }

  export class Runtime extends GCObject {
    static readonly _type = 'runtime::Runtime';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    async info(greycat: GreyCat, signal?: AbortSignal): Promise<runtime.RuntimeInfo> {
      return greycat.call('runtime::Runtime::info', undefined, signal);
    }
    async abi(greycat: GreyCat, signal?: AbortSignal): Promise<unknown> {
      return greycat.call('runtime::Runtime::abi', undefined, signal);
    }
    create(abi: Abi): Runtime {
      return new Runtime(abi.libs_by_name.get(std.name)!.mapped[45]);
    }
  }

  export class SecurityPolicy extends GCObject {
    static readonly _type = 'runtime::SecurityPolicy';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public entities(): Array<runtime.SecurityEntity> {
      return super.get(super.type.generated_offsets[0]) as Array<runtime.SecurityEntity>;
    }
    public set_entities(v: Array<runtime.SecurityEntity>) {
      super.set(super.type.generated_offsets[0], v);
    }
    public credentials(): Map<string, runtime.UserCredential> {
      return super.get(super.type.generated_offsets[1]) as Map<string, runtime.UserCredential>;
    }
    public set_credentials(v: Map<string, runtime.UserCredential>) {
      super.set(super.type.generated_offsets[1], v);
    }
    public roles(): Map<string, runtime.UserRole> {
      return super.get(super.type.generated_offsets[2]) as Map<string, runtime.UserRole>;
    }
    public set_roles(v: Map<string, runtime.UserRole>) {
      super.set(super.type.generated_offsets[2], v);
    }
    public fields(): runtime.SecurityFields | null {
      return super.get(super.type.generated_offsets[3]) as runtime.SecurityFields | null;
    }
    public set_fields(v: runtime.SecurityFields | null) {
      super.set(super.type.generated_offsets[3], v);
    }
    async permissions(greycat: GreyCat, signal?: AbortSignal): Promise<Array<string>> {
      return greycat.call('runtime::SecurityPolicy::permissions', undefined, signal);
    }
    create(abi: Abi, entities: Array<runtime.SecurityEntity>, credentials: Map<string, runtime.UserCredential>, roles: Map<string, runtime.UserRole>, fields: runtime.SecurityFields | null): SecurityPolicy {
      return new SecurityPolicy(abi.libs_by_name.get(std.name)!.mapped[46], entities, credentials, roles, fields);
    }
  }

  export class OpenIDConnect extends GCObject {
    static readonly _type = 'runtime::OpenIDConnect';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public url(): string {
      return super.get(super.type.generated_offsets[0]) as string;
    }
    public set_url(v: string) {
      super.set(super.type.generated_offsets[0], v);
    }
    public clientId(): string {
      return super.get(super.type.generated_offsets[1]) as string;
    }
    public set_clientId(v: string) {
      super.set(super.type.generated_offsets[1], v);
    }
    async config(greycat: GreyCat, signal?: AbortSignal): Promise<runtime.OpenIDConnect | null> {
      return greycat.call('runtime::OpenIDConnect::config', undefined, signal);
    }
    create(abi: Abi, url: string, clientId: string): OpenIDConnect {
      return new OpenIDConnect(abi.libs_by_name.get(std.name)!.mapped[47], url, clientId);
    }
  }

  export class Licence extends GCObject {
    static readonly _type = 'runtime::Licence';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public name(): string | null {
      return super.get(super.type.generated_offsets[0]) as string | null;
    }
    public set_name(v: string | null) {
      super.set(super.type.generated_offsets[0], v);
    }
    public start(): std_n.core.time {
      return super.get(super.type.generated_offsets[1]) as std_n.core.time;
    }
    public set_start(v: std_n.core.time) {
      super.set(super.type.generated_offsets[1], v);
    }
    public end(): std_n.core.time {
      return super.get(super.type.generated_offsets[2]) as std_n.core.time;
    }
    public set_end(v: std_n.core.time) {
      super.set(super.type.generated_offsets[2], v);
    }
    public company(): string | null {
      return super.get(super.type.generated_offsets[3]) as string | null;
    }
    public set_company(v: string | null) {
      super.set(super.type.generated_offsets[3], v);
    }
    public max_workers(): bigint | number {
      return super.get(super.type.generated_offsets[4]) as bigint | number;
    }
    public set_max_workers(v: bigint | number) {
      super.set(super.type.generated_offsets[4], v);
    }
    public max_memory(): bigint | number {
      return super.get(super.type.generated_offsets[5]) as bigint | number;
    }
    public set_max_memory(v: bigint | number) {
      super.set(super.type.generated_offsets[5], v);
    }
    public max_store(): bigint | number {
      return super.get(super.type.generated_offsets[6]) as bigint | number;
    }
    public set_max_store(v: bigint | number) {
      super.set(super.type.generated_offsets[6], v);
    }
    public extra_1(): bigint | number | null {
      return super.get(super.type.generated_offsets[7]) as bigint | number | null;
    }
    public set_extra_1(v: bigint | number | null) {
      super.set(super.type.generated_offsets[7], v);
    }
    public extra_2(): bigint | number | null {
      return super.get(super.type.generated_offsets[8]) as bigint | number | null;
    }
    public set_extra_2(v: bigint | number | null) {
      super.set(super.type.generated_offsets[8], v);
    }
    public extra_3(): bigint | number | null {
      return super.get(super.type.generated_offsets[9]) as bigint | number | null;
    }
    public set_extra_3(v: bigint | number | null) {
      super.set(super.type.generated_offsets[9], v);
    }
    public extra_4(): bigint | number | null {
      return super.get(super.type.generated_offsets[10]) as bigint | number | null;
    }
    public set_extra_4(v: bigint | number | null) {
      super.set(super.type.generated_offsets[10], v);
    }
    create(abi: Abi, name: string | null, start: std_n.core.time, end: std_n.core.time, company: string | null, max_workers: bigint | number, max_memory: bigint | number, max_store: bigint | number, extra_1: bigint | number | null, extra_2: bigint | number | null, extra_3: bigint | number | null, extra_4: bigint | number | null): Licence {
      return new Licence(abi.libs_by_name.get(std.name)!.mapped[48], name, start, end, company, max_workers, max_memory, max_store, extra_1, extra_2, extra_3, extra_4);
    }
  }

}

export namespace io {
  export class File extends std_n.io.File {
    static override readonly _type = 'io::File';

    public static create(abi: Abi): File {
      return new File(abi.libs_by_name.get(std.name)!.mapped[49]);
    }
  }

  export class CSVColumnString extends GCObject {
    static readonly _type = 'io::CSVColumnString';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public name(): string | null {
      return super.get(super.type.generated_offsets[0]) as string | null;
    }
    public set_name(v: string | null) {
      super.set(super.type.generated_offsets[0], v);
    }
    public mandatory(): boolean | null {
      return super.get(super.type.generated_offsets[1]) as boolean | null;
    }
    public set_mandatory(v: boolean | null) {
      super.set(super.type.generated_offsets[1], v);
    }
    public trim(): boolean | null {
      return super.get(super.type.generated_offsets[2]) as boolean | null;
    }
    public set_trim(v: boolean | null) {
      super.set(super.type.generated_offsets[2], v);
    }
    public try_number(): boolean | null {
      return super.get(super.type.generated_offsets[3]) as boolean | null;
    }
    public set_try_number(v: boolean | null) {
      super.set(super.type.generated_offsets[3], v);
    }
    public try_json(): boolean | null {
      return super.get(super.type.generated_offsets[4]) as boolean | null;
    }
    public set_try_json(v: boolean | null) {
      super.set(super.type.generated_offsets[4], v);
    }
    public values(): Array<string> | null {
      return super.get(super.type.generated_offsets[5]) as Array<string> | null;
    }
    public set_values(v: Array<string> | null) {
      super.set(super.type.generated_offsets[5], v);
    }
    public encoder(): io.TextEncoder | null {
      return super.get(super.type.generated_offsets[6]) as io.TextEncoder | null;
    }
    public set_encoder(v: io.TextEncoder | null) {
      super.set(super.type.generated_offsets[6], v);
    }
    create(abi: Abi, name: string | null, mandatory: boolean | null, trim: boolean | null, try_number: boolean | null, try_json: boolean | null, values: Array<string> | null, encoder: io.TextEncoder | null): CSVColumnString {
      return new CSVColumnString(abi.libs_by_name.get(std.name)!.mapped[50], name, mandatory, trim, try_number, try_json, values, encoder);
    }
  }

  export class CSVColumnTime extends GCObject {
    static readonly _type = 'io::CSVColumnTime';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public name(): string | null {
      return super.get(super.type.generated_offsets[0]) as string | null;
    }
    public set_name(v: string | null) {
      super.set(super.type.generated_offsets[0], v);
    }
    public mandatory(): boolean | null {
      return super.get(super.type.generated_offsets[1]) as boolean | null;
    }
    public set_mandatory(v: boolean | null) {
      super.set(super.type.generated_offsets[1], v);
    }
    public unit(): core.DurationUnit | null {
      return super.get(super.type.generated_offsets[2]) as core.DurationUnit | null;
    }
    public set_unit(v: core.DurationUnit | null) {
      super.set(super.type.generated_offsets[2], v);
    }
    create(abi: Abi, name: string | null, mandatory: boolean | null, unit: core.DurationUnit | null): CSVColumnTime {
      return new CSVColumnTime(abi.libs_by_name.get(std.name)!.mapped[51], name, mandatory, unit);
    }
  }

  export class CSVColumnDate extends GCObject {
    static readonly _type = 'io::CSVColumnDate';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public name(): string | null {
      return super.get(super.type.generated_offsets[0]) as string | null;
    }
    public set_name(v: string | null) {
      super.set(super.type.generated_offsets[0], v);
    }
    public mandatory(): boolean | null {
      return super.get(super.type.generated_offsets[1]) as boolean | null;
    }
    public set_mandatory(v: boolean | null) {
      super.set(super.type.generated_offsets[1], v);
    }
    public format(): string | null {
      return super.get(super.type.generated_offsets[2]) as string | null;
    }
    public set_format(v: string | null) {
      super.set(super.type.generated_offsets[2], v);
    }
    public tz(): core.TimeZone | null {
      return super.get(super.type.generated_offsets[3]) as core.TimeZone | null;
    }
    public set_tz(v: core.TimeZone | null) {
      super.set(super.type.generated_offsets[3], v);
    }
    public as_time(): boolean | null {
      return super.get(super.type.generated_offsets[4]) as boolean | null;
    }
    public set_as_time(v: boolean | null) {
      super.set(super.type.generated_offsets[4], v);
    }
    create(abi: Abi, name: string | null, mandatory: boolean | null, format: string | null, tz: core.TimeZone | null, as_time: boolean | null): CSVColumnDate {
      return new CSVColumnDate(abi.libs_by_name.get(std.name)!.mapped[52], name, mandatory, format, tz, as_time);
    }
  }

  export class JsonFormat extends GCObject {
    static readonly _type = 'io::JsonFormat';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
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

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    create(abi: Abi): FileFormat {
      return new FileFormat(abi.libs_by_name.get(std.name)!.mapped[55]);
    }
  }

  export class CSVColumnFloat extends GCObject {
    static readonly _type = 'io::CSVColumnFloat';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public name(): string | null {
      return super.get(super.type.generated_offsets[0]) as string | null;
    }
    public set_name(v: string | null) {
      super.set(super.type.generated_offsets[0], v);
    }
    public mandatory(): boolean | null {
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

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public uri(): string {
      return super.get(super.type.generated_offsets[0]) as string;
    }
    public set_uri(v: string) {
      super.set(super.type.generated_offsets[0], v);
    }
    public size(): bigint | number | null {
      return super.get(super.type.generated_offsets[1]) as bigint | number | null;
    }
    public set_size(v: bigint | number | null) {
      super.set(super.type.generated_offsets[1], v);
    }
    public last_modification(): std_n.core.time | null {
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

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public name(): string | null {
      return super.get(super.type.generated_offsets[0]) as string | null;
    }
    public set_name(v: string | null) {
      super.set(super.type.generated_offsets[0], v);
    }
    public mandatory(): boolean | null {
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

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    create(abi: Abi): JSON {
      return new JSON(abi.libs_by_name.get(std.name)!.mapped[59]);
    }
  }

  export class FileEntry extends GCObject {
    static readonly _type = 'io::FileEntry';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    create(abi: Abi): FileEntry {
      return new FileEntry(abi.libs_by_name.get(std.name)!.mapped[60]);
    }
  }

  export class TextEncoder extends GCEnum {
    static readonly _type = 'io::TextEncoder';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public static plain(abi: Abi): io.TextEncoder {
      const t = abi.libs_by_name.get(std.name)!.mapped[61];
      return t.enum_values![t.generated_offsets[0]] as io.TextEncoder;
    }
    public static base64(abi: Abi): io.TextEncoder {
      const t = abi.libs_by_name.get(std.name)!.mapped[61];
      return t.enum_values![t.generated_offsets[1]] as io.TextEncoder;
    }
    public static base64url(abi: Abi): io.TextEncoder {
      const t = abi.libs_by_name.get(std.name)!.mapped[61];
      return t.enum_values![t.generated_offsets[2]] as io.TextEncoder;
    }
    public static hexadecimal(abi: Abi): io.TextEncoder {
      const t = abi.libs_by_name.get(std.name)!.mapped[61];
      return t.enum_values![t.generated_offsets[3]] as io.TextEncoder;
    }
    create(abi: Abi): TextEncoder {
      return new TextEncoder(abi.libs_by_name.get(std.name)!.mapped[61]);
    }
  }

  export class Env extends GCObject {
    static readonly _type = 'io::Env';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    create(abi: Abi): Env {
      return new Env(abi.libs_by_name.get(std.name)!.mapped[62]);
    }
  }

  export class BinaryFormat extends GCObject {
    static readonly _type = 'io::BinaryFormat';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
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

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public name(): string | null {
      return super.get(super.type.generated_offsets[0]) as string | null;
    }
    public set_name(v: string | null) {
      super.set(super.type.generated_offsets[0], v);
    }
    public mandatory(): boolean | null {
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

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public header_lines(): bigint | number {
      return super.get(super.type.generated_offsets[0]) as bigint | number;
    }
    public set_header_lines(v: bigint | number) {
      super.set(super.type.generated_offsets[0], v);
    }
    public infer(): boolean {
      return super.get(super.type.generated_offsets[1]) as boolean;
    }
    public set_infer(v: boolean) {
      super.set(super.type.generated_offsets[1], v);
    }
    public separator(): string {
      return super.get(super.type.generated_offsets[2]) as string;
    }
    public set_separator(v: string) {
      super.set(super.type.generated_offsets[2], v);
    }
    public string_delimiter(): string {
      return super.get(super.type.generated_offsets[3]) as string;
    }
    public set_string_delimiter(v: string) {
      super.set(super.type.generated_offsets[3], v);
    }
    public decimal_separator(): string {
      return super.get(super.type.generated_offsets[4]) as string;
    }
    public set_decimal_separator(v: string) {
      super.set(super.type.generated_offsets[4], v);
    }
    public thousands_separator(): string {
      return super.get(super.type.generated_offsets[5]) as string;
    }
    public set_thousands_separator(v: string) {
      super.set(super.type.generated_offsets[5], v);
    }
    public columns(): Array<io.CSVColumn> | null {
      return super.get(super.type.generated_offsets[6]) as Array<io.CSVColumn> | null;
    }
    public set_columns(v: Array<io.CSVColumn> | null) {
      super.set(super.type.generated_offsets[6], v);
    }
    create(abi: Abi, header_lines: bigint | number, infer: boolean, separator: string, string_delimiter: string, decimal_separator: string, thousands_separator: string, columns: Array<io.CSVColumn> | null): CSVFormat {
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

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public name(): string | null {
      return super.get(super.type.generated_offsets[0]) as string | null;
    }
    public set_name(v: string | null) {
      super.set(super.type.generated_offsets[0], v);
    }
    public mandatory(): boolean | null {
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

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public name(): string | null {
      return super.get(super.type.generated_offsets[0]) as string | null;
    }
    public set_name(v: string | null) {
      super.set(super.type.generated_offsets[0], v);
    }
    public mandatory(): boolean | null {
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

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    create(abi: Abi): TextFormat {
      return new TextFormat(abi.libs_by_name.get(std.name)!.mapped[71]);
    }
  }

}

export namespace debug {
  export class FnParam extends GCObject {
    static readonly _type = 'debug::FnParam';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public name(): string {
      return super.get(super.type.generated_offsets[0]) as string;
    }
    public set_name(v: string) {
      super.set(super.type.generated_offsets[0], v);
    }
    public type(): debug.TypeRef {
      return super.get(super.type.generated_offsets[1]) as debug.TypeRef;
    }
    public set_type(v: debug.TypeRef) {
      super.set(super.type.generated_offsets[1], v);
    }
    create(abi: Abi, name: string, type: debug.TypeRef): FnParam {
      return new FnParam(abi.libs_by_name.get(std.name)!.mapped[72], name, type);
    }
  }

  export class TypeRef extends GCObject {
    static readonly _type = 'debug::TypeRef';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public name(): string {
      return super.get(super.type.generated_offsets[0]) as string;
    }
    public set_name(v: string) {
      super.set(super.type.generated_offsets[0], v);
    }
    public module(): string {
      return super.get(super.type.generated_offsets[1]) as string;
    }
    public set_module(v: string) {
      super.set(super.type.generated_offsets[1], v);
    }
    public generics(): Array<debug.TypeRef> | null {
      return super.get(super.type.generated_offsets[2]) as Array<debug.TypeRef> | null;
    }
    public set_generics(v: Array<debug.TypeRef> | null) {
      super.set(super.type.generated_offsets[2], v);
    }
    public nullable(): boolean {
      return super.get(super.type.generated_offsets[3]) as boolean;
    }
    public set_nullable(v: boolean) {
      super.set(super.type.generated_offsets[3], v);
    }
    create(abi: Abi, name: string, module: string, generics: Array<debug.TypeRef> | null, nullable: boolean): TypeRef {
      return new TypeRef(abi.libs_by_name.get(std.name)!.mapped[73], name, module, generics, nullable);
    }
  }

  export class TypeDesc extends GCObject {
    static readonly _type = 'debug::TypeDesc';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public module(): string {
      return super.get(super.type.generated_offsets[0]) as string;
    }
    public set_module(v: string) {
      super.set(super.type.generated_offsets[0], v);
    }
    public name(): string {
      return super.get(super.type.generated_offsets[1]) as string;
    }
    public set_name(v: string) {
      super.set(super.type.generated_offsets[1], v);
    }
    public methods(): Array<debug.FnDesc> {
      return super.get(super.type.generated_offsets[2]) as Array<debug.FnDesc>;
    }
    public set_methods(v: Array<debug.FnDesc>) {
      super.set(super.type.generated_offsets[2], v);
    }
    public attrs(): Array<debug.TypeAttr> {
      return super.get(super.type.generated_offsets[3]) as Array<debug.TypeAttr>;
    }
    public set_attrs(v: Array<debug.TypeAttr>) {
      super.set(super.type.generated_offsets[3], v);
    }
    public is_abstract(): boolean {
      return super.get(super.type.generated_offsets[4]) as boolean;
    }
    public set_is_abstract(v: boolean) {
      super.set(super.type.generated_offsets[4], v);
    }
    public is_enum(): boolean {
      return super.get(super.type.generated_offsets[5]) as boolean;
    }
    public set_is_enum(v: boolean) {
      super.set(super.type.generated_offsets[5], v);
    }
    create(abi: Abi, module: string, name: string, methods: Array<debug.FnDesc>, attrs: Array<debug.TypeAttr>, is_abstract: boolean, is_enum: boolean): TypeDesc {
      return new TypeDesc(abi.libs_by_name.get(std.name)!.mapped[74], module, name, methods, attrs, is_abstract, is_enum);
    }
  }

  export class ModDesc extends GCObject {
    static readonly _type = 'debug::ModDesc';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public name(): string {
      return super.get(super.type.generated_offsets[0]) as string;
    }
    public set_name(v: string) {
      super.set(super.type.generated_offsets[0], v);
    }
    public lib(): string {
      return super.get(super.type.generated_offsets[1]) as string;
    }
    public set_lib(v: string) {
      super.set(super.type.generated_offsets[1], v);
    }
    public functions(): Array<debug.FnDesc> {
      return super.get(super.type.generated_offsets[2]) as Array<debug.FnDesc>;
    }
    public set_functions(v: Array<debug.FnDesc>) {
      super.set(super.type.generated_offsets[2], v);
    }
    public types(): Array<debug.TypeDesc> {
      return super.get(super.type.generated_offsets[3]) as Array<debug.TypeDesc>;
    }
    public set_types(v: Array<debug.TypeDesc>) {
      super.set(super.type.generated_offsets[3], v);
    }
    public vars(): Array<debug.ModVarDesc> {
      return super.get(super.type.generated_offsets[4]) as Array<debug.ModVarDesc>;
    }
    public set_vars(v: Array<debug.ModVarDesc>) {
      super.set(super.type.generated_offsets[4], v);
    }
    create(abi: Abi, name: string, lib: string, functions: Array<debug.FnDesc>, types: Array<debug.TypeDesc>, vars: Array<debug.ModVarDesc>): ModDesc {
      return new ModDesc(abi.libs_by_name.get(std.name)!.mapped[75], name, lib, functions, types, vars);
    }
  }

  export class ModVarDesc extends GCObject {
    static readonly _type = 'debug::ModVarDesc';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public module(): string {
      return super.get(super.type.generated_offsets[0]) as string;
    }
    public set_module(v: string) {
      super.set(super.type.generated_offsets[0], v);
    }
    public name(): string {
      return super.get(super.type.generated_offsets[1]) as string;
    }
    public set_name(v: string) {
      super.set(super.type.generated_offsets[1], v);
    }
    public type(): debug.TypeRef {
      return super.get(super.type.generated_offsets[2]) as debug.TypeRef;
    }
    public set_type(v: debug.TypeRef) {
      super.set(super.type.generated_offsets[2], v);
    }
    create(abi: Abi, module: string, name: string, type: debug.TypeRef): ModVarDesc {
      return new ModVarDesc(abi.libs_by_name.get(std.name)!.mapped[76], module, name, type);
    }
  }

  export class TypeAttr extends GCObject {
    static readonly _type = 'debug::TypeAttr';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public name(): string {
      return super.get(super.type.generated_offsets[0]) as string;
    }
    public set_name(v: string) {
      super.set(super.type.generated_offsets[0], v);
    }
    public type(): debug.TypeRef | null {
      return super.get(super.type.generated_offsets[1]) as debug.TypeRef | null;
    }
    public set_type(v: debug.TypeRef | null) {
      super.set(super.type.generated_offsets[1], v);
    }
    public is_static(): boolean {
      return super.get(super.type.generated_offsets[2]) as boolean;
    }
    public set_is_static(v: boolean) {
      super.set(super.type.generated_offsets[2], v);
    }
    create(abi: Abi, name: string, type: debug.TypeRef | null, is_static: boolean): TypeAttr {
      return new TypeAttr(abi.libs_by_name.get(std.name)!.mapped[77], name, type, is_static);
    }
  }

  export class FnMode extends GCEnum {
    static readonly _type = 'debug::FnMode';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public static read_only(abi: Abi): debug.FnMode {
      const t = abi.libs_by_name.get(std.name)!.mapped[78];
      return t.enum_values![t.generated_offsets[0]] as debug.FnMode;
    }
    public static copy_on_write(abi: Abi): debug.FnMode {
      const t = abi.libs_by_name.get(std.name)!.mapped[78];
      return t.enum_values![t.generated_offsets[1]] as debug.FnMode;
    }
    public static volatile(abi: Abi): debug.FnMode {
      const t = abi.libs_by_name.get(std.name)!.mapped[78];
      return t.enum_values![t.generated_offsets[2]] as debug.FnMode;
    }
    public static write(abi: Abi): debug.FnMode {
      const t = abi.libs_by_name.get(std.name)!.mapped[78];
      return t.enum_values![t.generated_offsets[3]] as debug.FnMode;
    }
    create(abi: Abi): FnMode {
      return new FnMode(abi.libs_by_name.get(std.name)!.mapped[78]);
    }
  }

  export class FnDesc extends GCObject {
    static readonly _type = 'debug::FnDesc';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public module(): string {
      return super.get(super.type.generated_offsets[0]) as string;
    }
    public set_module(v: string) {
      super.set(super.type.generated_offsets[0], v);
    }
    public name(): string {
      return super.get(super.type.generated_offsets[1]) as string;
    }
    public set_name(v: string) {
      super.set(super.type.generated_offsets[1], v);
    }
    public parent_type(): string | null {
      return super.get(super.type.generated_offsets[2]) as string | null;
    }
    public set_parent_type(v: string | null) {
      super.set(super.type.generated_offsets[2], v);
    }
    public params(): Array<debug.FnParam> {
      return super.get(super.type.generated_offsets[3]) as Array<debug.FnParam>;
    }
    public set_params(v: Array<debug.FnParam>) {
      super.set(super.type.generated_offsets[3], v);
    }
    public return_type(): debug.TypeRef | null {
      return super.get(super.type.generated_offsets[4]) as debug.TypeRef | null;
    }
    public set_return_type(v: debug.TypeRef | null) {
      super.set(super.type.generated_offsets[4], v);
    }
    public is_static(): boolean {
      return super.get(super.type.generated_offsets[5]) as boolean;
    }
    public set_is_static(v: boolean) {
      super.set(super.type.generated_offsets[5], v);
    }
    public is_task(): boolean {
      return super.get(super.type.generated_offsets[6]) as boolean;
    }
    public set_is_task(v: boolean) {
      super.set(super.type.generated_offsets[6], v);
    }
    public is_exclusive(): boolean {
      return super.get(super.type.generated_offsets[7]) as boolean;
    }
    public set_is_exclusive(v: boolean) {
      super.set(super.type.generated_offsets[7], v);
    }
    public is_reserved(): boolean {
      return super.get(super.type.generated_offsets[8]) as boolean;
    }
    public set_is_reserved(v: boolean) {
      super.set(super.type.generated_offsets[8], v);
    }
    public is_exposed(): boolean {
      return super.get(super.type.generated_offsets[9]) as boolean;
    }
    public set_is_exposed(v: boolean) {
      super.set(super.type.generated_offsets[9], v);
    }
    public mode(): debug.FnMode {
      return super.get(super.type.generated_offsets[10]) as debug.FnMode;
    }
    public set_mode(v: debug.FnMode) {
      super.set(super.type.generated_offsets[10], v);
    }
    public permissions(): Array<string> {
      return super.get(super.type.generated_offsets[11]) as Array<string>;
    }
    public set_permissions(v: Array<string>) {
      super.set(super.type.generated_offsets[11], v);
    }
    create(abi: Abi, module: string, name: string, parent_type: string | null, params: Array<debug.FnParam>, return_type: debug.TypeRef | null, is_static: boolean, is_task: boolean, is_exclusive: boolean, is_reserved: boolean, is_exposed: boolean, mode: debug.FnMode, permissions: Array<string>): FnDesc {
      return new FnDesc(abi.libs_by_name.get(std.name)!.mapped[79], module, name, parent_type, params, return_type, is_static, is_task, is_exclusive, is_reserved, is_exposed, mode, permissions);
    }
  }

  export async function modules(greycat: GreyCat, signal?: AbortSignal): Promise<Array<debug.ModDesc>> {
    return greycat.call('debug::modules', undefined, signal);
  }
  export async function readModVar(greycat: GreyCat, module: string, name: string, signal?: AbortSignal): Promise<any | null> {
    return greycat.call('debug::readModVar', [module, name], signal);
  }
  export async function callFn(greycat: GreyCat, module: string, name: string, params: Array<any>, signal?: AbortSignal): Promise<any | null> {
    return greycat.call('debug::callFn', [module, name, params], signal);
  }
  export async function callMethod(greycat: GreyCat, self: any, fnName: string, params: Array<any>, signal?: AbortSignal): Promise<any | null> {
    return greycat.call('debug::callMethod', [self, fnName, params], signal);
  }
  export async function callMethodBatch(greycat: GreyCat, self: any, fnName: string, batch_params: Array<Array<any>>, signal?: AbortSignal): Promise<unknown> {
    return greycat.call('debug::callMethodBatch', [self, fnName, batch_params], signal);
  }
}

export namespace math {
  export class MathConstants extends GCObject {
    static readonly _type = 'math::MathConstants';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public static e(abi: Abi): number {
      const t = abi.libs_by_name.get(std.name)!.mapped[80];
      return  t.static_values[0] as number;
    }
    public static log_2e(abi: Abi): number {
      const t = abi.libs_by_name.get(std.name)!.mapped[80];
      return  t.static_values[1] as number;
    }
    public static log_10e(abi: Abi): number {
      const t = abi.libs_by_name.get(std.name)!.mapped[80];
      return  t.static_values[2] as number;
    }
    public static ln2(abi: Abi): number {
      const t = abi.libs_by_name.get(std.name)!.mapped[80];
      return  t.static_values[3] as number;
    }
    public static ln10(abi: Abi): number {
      const t = abi.libs_by_name.get(std.name)!.mapped[80];
      return  t.static_values[4] as number;
    }
    public static pi(abi: Abi): number {
      const t = abi.libs_by_name.get(std.name)!.mapped[80];
      return  t.static_values[5] as number;
    }
    public static pi_2(abi: Abi): number {
      const t = abi.libs_by_name.get(std.name)!.mapped[80];
      return  t.static_values[6] as number;
    }
    public static pi_4(abi: Abi): number {
      const t = abi.libs_by_name.get(std.name)!.mapped[80];
      return  t.static_values[7] as number;
    }
    public static m1_pi(abi: Abi): number {
      const t = abi.libs_by_name.get(std.name)!.mapped[80];
      return  t.static_values[8] as number;
    }
    public static m2_pi(abi: Abi): number {
      const t = abi.libs_by_name.get(std.name)!.mapped[80];
      return  t.static_values[9] as number;
    }
    public static m2_sqrt_pi(abi: Abi): number {
      const t = abi.libs_by_name.get(std.name)!.mapped[80];
      return  t.static_values[10] as number;
    }
    public static sqrt2(abi: Abi): number {
      const t = abi.libs_by_name.get(std.name)!.mapped[80];
      return  t.static_values[11] as number;
    }
    public static sqrt1_2(abi: Abi): number {
      const t = abi.libs_by_name.get(std.name)!.mapped[80];
      return  t.static_values[12] as number;
    }
    create(abi: Abi): MathConstants {
      return new MathConstants(abi.libs_by_name.get(std.name)!.mapped[80]);
    }
  }

}

export namespace util {
  export class Iban extends std_n.util.Iban {
    static override readonly _type = 'util::Iban';

    public static create(abi: Abi): Iban {
      return new Iban(abi.libs_by_name.get(std.name)!.mapped[81]);
    }
  }

  export class TimeWindow extends std_n.util.TimeWindow {
    static override readonly _type = 'util::TimeWindow';

    public static create(abi: Abi): TimeWindow {
      return new TimeWindow(abi.libs_by_name.get(std.name)!.mapped[82]);
    }
  }

  export class ProgressTracker extends std_n.util.ProgressTracker {
    static override readonly _type = 'util::ProgressTracker';

    public static create(abi: Abi): ProgressTracker {
      return new ProgressTracker(abi.libs_by_name.get(std.name)!.mapped[83]);
    }
  }

  export class GaussianProfile extends std_n.util.GaussianProfile {
    static override readonly _type = 'util::GaussianProfile';

    public static create(abi: Abi): GaussianProfile {
      return new GaussianProfile(abi.libs_by_name.get(std.name)!.mapped[84]);
    }
  }

  export class HistogramF64 extends std_n.util.HistogramF64 {
    static override readonly _type = 'util::HistogramF64';

    public static create(abi: Abi): HistogramF64 {
      return new HistogramF64(abi.libs_by_name.get(std.name)!.mapped[85]);
    }
  }

  export class NdEncoding extends GCObject {
    static readonly _type = 'util::NdEncoding';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    create(abi: Abi): NdEncoding {
      return new NdEncoding(abi.libs_by_name.get(std.name)!.mapped[86]);
    }
  }

  export class HistogramBucket extends GCEnum {
    static readonly _type = 'util::HistogramBucket';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public static from(abi: Abi): util.HistogramBucket {
      const t = abi.libs_by_name.get(std.name)!.mapped[87];
      return t.enum_values![t.generated_offsets[0]] as util.HistogramBucket;
    }
    public static to(abi: Abi): util.HistogramBucket {
      const t = abi.libs_by_name.get(std.name)!.mapped[87];
      return t.enum_values![t.generated_offsets[1]] as util.HistogramBucket;
    }
    public static count(abi: Abi): util.HistogramBucket {
      const t = abi.libs_by_name.get(std.name)!.mapped[87];
      return t.enum_values![t.generated_offsets[2]] as util.HistogramBucket;
    }
    public static percentage(abi: Abi): util.HistogramBucket {
      const t = abi.libs_by_name.get(std.name)!.mapped[87];
      return t.enum_values![t.generated_offsets[3]] as util.HistogramBucket;
    }
    create(abi: Abi): HistogramBucket {
      return new HistogramBucket(abi.libs_by_name.get(std.name)!.mapped[87]);
    }
  }

  export class HistogramI64 extends std_n.util.HistogramI64 {
    static override readonly _type = 'util::HistogramI64';

    public static create(abi: Abi): HistogramI64 {
      return new HistogramI64(abi.libs_by_name.get(std.name)!.mapped[88]);
    }
  }

  export class Assert extends GCObject {
    static readonly _type = 'util::Assert';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    create(abi: Abi): Assert {
      return new Assert(abi.libs_by_name.get(std.name)!.mapped[89]);
    }
  }

  export class BoxPlot<T> extends GCObject {
    static readonly _type = 'util::BoxPlot';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public min(): any {
      return super.get(super.type.generated_offsets[0]);
    }
    public set_min(v: any) {
      super.set(super.type.generated_offsets[0], v);
    }
    public max(): any {
      return super.get(super.type.generated_offsets[1]);
    }
    public set_max(v: any) {
      super.set(super.type.generated_offsets[1], v);
    }
    public whiskerLow(): any {
      return super.get(super.type.generated_offsets[2]);
    }
    public set_whiskerLow(v: any) {
      super.set(super.type.generated_offsets[2], v);
    }
    public whiskerHigh(): any {
      return super.get(super.type.generated_offsets[3]);
    }
    public set_whiskerHigh(v: any) {
      super.set(super.type.generated_offsets[3], v);
    }
    public percentile1(): any {
      return super.get(super.type.generated_offsets[4]);
    }
    public set_percentile1(v: any) {
      super.set(super.type.generated_offsets[4], v);
    }
    public percentile5(): any {
      return super.get(super.type.generated_offsets[5]);
    }
    public set_percentile5(v: any) {
      super.set(super.type.generated_offsets[5], v);
    }
    public percentile25(): any {
      return super.get(super.type.generated_offsets[6]);
    }
    public set_percentile25(v: any) {
      super.set(super.type.generated_offsets[6], v);
    }
    public percentile50(): any {
      return super.get(super.type.generated_offsets[7]);
    }
    public set_percentile50(v: any) {
      super.set(super.type.generated_offsets[7], v);
    }
    public percentile75(): any {
      return super.get(super.type.generated_offsets[8]);
    }
    public set_percentile75(v: any) {
      super.set(super.type.generated_offsets[8], v);
    }
    public percentile95(): any {
      return super.get(super.type.generated_offsets[9]);
    }
    public set_percentile95(v: any) {
      super.set(super.type.generated_offsets[9], v);
    }
    public percentile99(): any {
      return super.get(super.type.generated_offsets[10]);
    }
    public set_percentile99(v: any) {
      super.set(super.type.generated_offsets[10], v);
    }
    public countOutliersLow(): bigint | number {
      return super.get(super.type.generated_offsets[11]) as bigint | number;
    }
    public set_countOutliersLow(v: bigint | number) {
      super.set(super.type.generated_offsets[11], v);
    }
    public countOutliersHigh(): bigint | number {
      return super.get(super.type.generated_offsets[12]) as bigint | number;
    }
    public set_countOutliersHigh(v: bigint | number) {
      super.set(super.type.generated_offsets[12], v);
    }
    public percentageOutliersLow(): number {
      return super.get(super.type.generated_offsets[13]) as number;
    }
    public set_percentageOutliersLow(v: number) {
      super.set(super.type.generated_offsets[13], v);
    }
    public percentageOutliersHigh(): number {
      return super.get(super.type.generated_offsets[14]) as number;
    }
    public set_percentageOutliersHigh(v: number) {
      super.set(super.type.generated_offsets[14], v);
    }
    public sum(): number {
      return super.get(super.type.generated_offsets[15]) as number;
    }
    public set_sum(v: number) {
      super.set(super.type.generated_offsets[15], v);
    }
    public avg(): number {
      return super.get(super.type.generated_offsets[16]) as number;
    }
    public set_avg(v: number) {
      super.set(super.type.generated_offsets[16], v);
    }
    public std(): number {
      return super.get(super.type.generated_offsets[17]) as number;
    }
    public set_std(v: number) {
      super.set(super.type.generated_offsets[17], v);
    }
    public size(): bigint | number {
      return super.get(super.type.generated_offsets[18]) as bigint | number;
    }
    public set_size(v: bigint | number) {
      super.set(super.type.generated_offsets[18], v);
    }
    create(abi: Abi, min: any, max: any, whiskerLow: any, whiskerHigh: any, percentile1: any, percentile5: any, percentile25: any, percentile50: any, percentile75: any, percentile95: any, percentile99: any, countOutliersLow: bigint | number, countOutliersHigh: bigint | number, percentageOutliersLow: number, percentageOutliersHigh: number, sum: number, avg: number, std: number, size: bigint | number): BoxPlot {
      return new BoxPlot(abi.libs_by_name.get(std.name)!.mapped[90], min, max, whiskerLow, whiskerHigh, percentile1, percentile5, percentile25, percentile50, percentile75, percentile95, percentile99, countOutliersLow, countOutliersHigh, percentageOutliersLow, percentageOutliersHigh, sum, avg, std, size);
    }
  }

  export class Quantizer extends std_n.util.Quantizer {
    static override readonly _type = 'util::Quantizer';

    public static create(abi: Abi): Quantizer {
      return new Quantizer(abi.libs_by_name.get(std.name)!.mapped[91]);
    }
  }

  export class Gaussian extends std_n.util.Gaussian {
    static override readonly _type = 'util::Gaussian';

    public static create(abi: Abi): Gaussian {
      return new Gaussian(abi.libs_by_name.get(std.name)!.mapped[92]);
    }
  }

  export class Histogram<T> extends GCObject {
    static readonly _type = 'util::Histogram';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    create(abi: Abi): Histogram {
      return new Histogram(abi.libs_by_name.get(std.name)!.mapped[93]);
    }
  }

  export class Queue<T> extends std_n.util.Queue {
    static override readonly _type = 'util::Queue';

    public static create(abi: Abi): Queue {
      return new Queue(abi.libs_by_name.get(std.name)!.mapped[94]);
    }
  }

  export class BoxPlotI64 extends GCObject {
    static readonly _type = 'util::BoxPlotI64';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public min(): any {
      return super.get(super.type.generated_offsets[0]);
    }
    public set_min(v: any) {
      super.set(super.type.generated_offsets[0], v);
    }
    public max(): any {
      return super.get(super.type.generated_offsets[1]);
    }
    public set_max(v: any) {
      super.set(super.type.generated_offsets[1], v);
    }
    public whiskerLow(): any {
      return super.get(super.type.generated_offsets[2]);
    }
    public set_whiskerLow(v: any) {
      super.set(super.type.generated_offsets[2], v);
    }
    public whiskerHigh(): any {
      return super.get(super.type.generated_offsets[3]);
    }
    public set_whiskerHigh(v: any) {
      super.set(super.type.generated_offsets[3], v);
    }
    public percentile1(): any {
      return super.get(super.type.generated_offsets[4]);
    }
    public set_percentile1(v: any) {
      super.set(super.type.generated_offsets[4], v);
    }
    public percentile5(): any {
      return super.get(super.type.generated_offsets[5]);
    }
    public set_percentile5(v: any) {
      super.set(super.type.generated_offsets[5], v);
    }
    public percentile25(): any {
      return super.get(super.type.generated_offsets[6]);
    }
    public set_percentile25(v: any) {
      super.set(super.type.generated_offsets[6], v);
    }
    public percentile50(): any {
      return super.get(super.type.generated_offsets[7]);
    }
    public set_percentile50(v: any) {
      super.set(super.type.generated_offsets[7], v);
    }
    public percentile75(): any {
      return super.get(super.type.generated_offsets[8]);
    }
    public set_percentile75(v: any) {
      super.set(super.type.generated_offsets[8], v);
    }
    public percentile95(): any {
      return super.get(super.type.generated_offsets[9]);
    }
    public set_percentile95(v: any) {
      super.set(super.type.generated_offsets[9], v);
    }
    public percentile99(): any {
      return super.get(super.type.generated_offsets[10]);
    }
    public set_percentile99(v: any) {
      super.set(super.type.generated_offsets[10], v);
    }
    public countOutliersLow(): bigint | number {
      return super.get(super.type.generated_offsets[11]) as bigint | number;
    }
    public set_countOutliersLow(v: bigint | number) {
      super.set(super.type.generated_offsets[11], v);
    }
    public countOutliersHigh(): bigint | number {
      return super.get(super.type.generated_offsets[12]) as bigint | number;
    }
    public set_countOutliersHigh(v: bigint | number) {
      super.set(super.type.generated_offsets[12], v);
    }
    public percentageOutliersLow(): number {
      return super.get(super.type.generated_offsets[13]) as number;
    }
    public set_percentageOutliersLow(v: number) {
      super.set(super.type.generated_offsets[13], v);
    }
    public percentageOutliersHigh(): number {
      return super.get(super.type.generated_offsets[14]) as number;
    }
    public set_percentageOutliersHigh(v: number) {
      super.set(super.type.generated_offsets[14], v);
    }
    public sum(): number {
      return super.get(super.type.generated_offsets[15]) as number;
    }
    public set_sum(v: number) {
      super.set(super.type.generated_offsets[15], v);
    }
    public avg(): number {
      return super.get(super.type.generated_offsets[16]) as number;
    }
    public set_avg(v: number) {
      super.set(super.type.generated_offsets[16], v);
    }
    public std(): number {
      return super.get(super.type.generated_offsets[17]) as number;
    }
    public set_std(v: number) {
      super.set(super.type.generated_offsets[17], v);
    }
    public size(): bigint | number {
      return super.get(super.type.generated_offsets[18]) as bigint | number;
    }
    public set_size(v: bigint | number) {
      super.set(super.type.generated_offsets[18], v);
    }
    create(abi: Abi, min: any, max: any, whiskerLow: any, whiskerHigh: any, percentile1: any, percentile5: any, percentile25: any, percentile50: any, percentile75: any, percentile95: any, percentile99: any, countOutliersLow: bigint | number, countOutliersHigh: bigint | number, percentageOutliersLow: number, percentageOutliersHigh: number, sum: number, avg: number, std: number, size: bigint | number): BoxPlotI64 {
      return new BoxPlotI64(abi.libs_by_name.get(std.name)!.mapped[95], min, max, whiskerLow, whiskerHigh, percentile1, percentile5, percentile25, percentile50, percentile75, percentile95, percentile99, countOutliersLow, countOutliersHigh, percentageOutliersLow, percentageOutliersHigh, sum, avg, std, size);
    }
  }

  export class Random extends GCObject {
    static readonly _type = 'util::Random';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public seed(): bigint | number {
      return super.get(super.type.generated_offsets[0]) as bigint | number;
    }
    public set_seed(v: bigint | number) {
      super.set(super.type.generated_offsets[0], v);
    }
    public v(): number {
      return super.get(super.type.generated_offsets[1]) as number;
    }
    public set_v(v: number) {
      super.set(super.type.generated_offsets[1], v);
    }
    create(abi: Abi, seed: bigint | number, v: number): Random {
      return new Random(abi.libs_by_name.get(std.name)!.mapped[96], seed, v);
    }
  }

  export class ByteArray extends std_n.util.ByteArray {
    static override readonly _type = 'util::ByteArray';

    public static create(abi: Abi): ByteArray {
      return new ByteArray(abi.libs_by_name.get(std.name)!.mapped[97]);
    }
  }

  export class BoxPlotF64 extends GCObject {
    static readonly _type = 'util::BoxPlotF64';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    public min(): any {
      return super.get(super.type.generated_offsets[0]);
    }
    public set_min(v: any) {
      super.set(super.type.generated_offsets[0], v);
    }
    public max(): any {
      return super.get(super.type.generated_offsets[1]);
    }
    public set_max(v: any) {
      super.set(super.type.generated_offsets[1], v);
    }
    public whiskerLow(): any {
      return super.get(super.type.generated_offsets[2]);
    }
    public set_whiskerLow(v: any) {
      super.set(super.type.generated_offsets[2], v);
    }
    public whiskerHigh(): any {
      return super.get(super.type.generated_offsets[3]);
    }
    public set_whiskerHigh(v: any) {
      super.set(super.type.generated_offsets[3], v);
    }
    public percentile1(): any {
      return super.get(super.type.generated_offsets[4]);
    }
    public set_percentile1(v: any) {
      super.set(super.type.generated_offsets[4], v);
    }
    public percentile5(): any {
      return super.get(super.type.generated_offsets[5]);
    }
    public set_percentile5(v: any) {
      super.set(super.type.generated_offsets[5], v);
    }
    public percentile25(): any {
      return super.get(super.type.generated_offsets[6]);
    }
    public set_percentile25(v: any) {
      super.set(super.type.generated_offsets[6], v);
    }
    public percentile50(): any {
      return super.get(super.type.generated_offsets[7]);
    }
    public set_percentile50(v: any) {
      super.set(super.type.generated_offsets[7], v);
    }
    public percentile75(): any {
      return super.get(super.type.generated_offsets[8]);
    }
    public set_percentile75(v: any) {
      super.set(super.type.generated_offsets[8], v);
    }
    public percentile95(): any {
      return super.get(super.type.generated_offsets[9]);
    }
    public set_percentile95(v: any) {
      super.set(super.type.generated_offsets[9], v);
    }
    public percentile99(): any {
      return super.get(super.type.generated_offsets[10]);
    }
    public set_percentile99(v: any) {
      super.set(super.type.generated_offsets[10], v);
    }
    public countOutliersLow(): bigint | number {
      return super.get(super.type.generated_offsets[11]) as bigint | number;
    }
    public set_countOutliersLow(v: bigint | number) {
      super.set(super.type.generated_offsets[11], v);
    }
    public countOutliersHigh(): bigint | number {
      return super.get(super.type.generated_offsets[12]) as bigint | number;
    }
    public set_countOutliersHigh(v: bigint | number) {
      super.set(super.type.generated_offsets[12], v);
    }
    public percentageOutliersLow(): number {
      return super.get(super.type.generated_offsets[13]) as number;
    }
    public set_percentageOutliersLow(v: number) {
      super.set(super.type.generated_offsets[13], v);
    }
    public percentageOutliersHigh(): number {
      return super.get(super.type.generated_offsets[14]) as number;
    }
    public set_percentageOutliersHigh(v: number) {
      super.set(super.type.generated_offsets[14], v);
    }
    public sum(): number {
      return super.get(super.type.generated_offsets[15]) as number;
    }
    public set_sum(v: number) {
      super.set(super.type.generated_offsets[15], v);
    }
    public avg(): number {
      return super.get(super.type.generated_offsets[16]) as number;
    }
    public set_avg(v: number) {
      super.set(super.type.generated_offsets[16], v);
    }
    public std(): number {
      return super.get(super.type.generated_offsets[17]) as number;
    }
    public set_std(v: number) {
      super.set(super.type.generated_offsets[17], v);
    }
    public size(): bigint | number {
      return super.get(super.type.generated_offsets[18]) as bigint | number;
    }
    public set_size(v: bigint | number) {
      super.set(super.type.generated_offsets[18], v);
    }
    create(abi: Abi, min: any, max: any, whiskerLow: any, whiskerHigh: any, percentile1: any, percentile5: any, percentile25: any, percentile50: any, percentile75: any, percentile95: any, percentile99: any, countOutliersLow: bigint | number, countOutliersHigh: bigint | number, percentageOutliersLow: number, percentageOutliersHigh: number, sum: number, avg: number, std: number, size: bigint | number): BoxPlotF64 {
      return new BoxPlotF64(abi.libs_by_name.get(std.name)!.mapped[98], min, max, whiskerLow, whiskerHigh, percentile1, percentile5, percentile25, percentile50, percentile75, percentile95, percentile99, countOutliersLow, countOutliersHigh, percentageOutliersLow, percentageOutliersHigh, sum, avg, std, size);
    }
  }

  export class Crypto extends GCObject {
    static readonly _type = 'util::Crypto';

    private constructor(type: AbiType, ...attributes: any[]) {
      super(type, attributes);
    }

    create(abi: Abi): Crypto {
      return new Crypto(abi.libs_by_name.get(std.name)!.mapped[99]);
    }
  }

  export class Buffer extends std_n.util.Buffer {
    static override readonly _type = 'util::Buffer';

    public static create(abi: Abi): Buffer {
      return new Buffer(abi.libs_by_name.get(std.name)!.mapped[100]);
    }
  }

  export class SlidingWindow extends std_n.util.SlidingWindow {
    static override readonly _type = 'util::SlidingWindow';

    public static create(abi: Abi): SlidingWindow {
      return new SlidingWindow(abi.libs_by_name.get(std.name)!.mapped[101]);
    }
  }

  export async function resolveAll(greycat: GreyCat, nodes: Array<core.node>, signal?: AbortSignal): Promise<Array<any>> {
    return greycat.call('util::resolveAll', [nodes], signal);
  }
}

export const std: Library = {
  name: 'std',
  mapped: [],
  configure(loaders, factories) {
    factories.set(core.GeoBox._type, core.GeoBox);
    factories.set(core.nodeList._type, core.nodeList);
    loaders.set(core.nodeList._type, std_n.core.nodeList.load);
    factories.set(core.TimeZone._type, core.TimeZone);
    factories.set(core.nodeIndexBucket._type, core.nodeIndexBucket);
    loaders.set(core.nodeIndexBucket._type, std_n.core.nodeIndexBucket.load);
    factories.set(core.node._type, core.node);
    loaders.set(core.node._type, std_n.core.node.load);
    factories.set(core.nodeTimeCursor._type, core.nodeTimeCursor);
    loaders.set(core.nodeTimeCursor._type, std_n.core.nodeTimeCursor.load);
    factories.set(core.TableColumnMeta._type, core.TableColumnMeta);
    factories.set(core.Error._type, core.Error);
    loaders.set(core.Error._type, std_n.core.Error.load);
    factories.set(core.ErrorCode._type, core.ErrorCode);
    factories.set(core.SamplingMode._type, core.SamplingMode);
    factories.set(core.DurationUnit._type, core.DurationUnit);
    factories.set(core.TensorType._type, core.TensorType);
    factories.set(core.Table._type, core.Table);
    loaders.set(core.Table._type, std_n.core.Table.load);
    factories.set(core.geo._type, core.geo);
    loaders.set(core.geo._type, std_n.core.geo.load);
    factories.set(core.Tensor._type, core.Tensor);
    loaders.set(core.Tensor._type, std_n.core.Tensor.load);
    factories.set(core.GeoCircle._type, core.GeoCircle);
    factories.set(core.Date._type, core.Date);
    loaders.set(core.Date._type, std_n.core.Date.load);
    factories.set(core.Map._type, core.Map);
    loaders.set(core.Map._type, std_n.core.Map.load);
    factories.set(core.duration._type, core.duration);
    loaders.set(core.duration._type, std_n.core.duration.load);
    factories.set(core.nodeTime._type, core.nodeTime);
    loaders.set(core.nodeTime._type, std_n.core.nodeTime.load);
    factories.set(core.Array._type, core.Array);
    loaders.set(core.Array._type, std_n.core.Array.load);
    factories.set(core.function_._type, core.function_);
    factories.set(core.NodeTimeInfo._type, core.NodeTimeInfo);
    factories.set(core.Tuple._type, core.Tuple);
    factories.set(core.nodeIndex._type, core.nodeIndex);
    loaders.set(core.nodeIndex._type, std_n.core.nodeIndex.load);
    factories.set(core.GeoPoly._type, core.GeoPoly);
    loaders.set(core.GeoPoly._type, std_n.core.GeoPoly.load);
    factories.set(core.time._type, core.time);
    loaders.set(core.time._type, std_n.core.time.load);
    factories.set(core.DatePart._type, core.DatePart);
    factories.set(core.nodeGeo._type, core.nodeGeo);
    loaders.set(core.nodeGeo._type, std_n.core.nodeGeo.load);
    factories.set(core.String._type, core.String);
    loaders.set(core.String._type, std_n.core.String.load);
    factories.set(runtime.SecurityEntity._type, runtime.SecurityEntity);
    factories.set(runtime.UserRole._type, runtime.UserRole);
    factories.set(runtime.RuntimeInfo._type, runtime.RuntimeInfo);
    factories.set(runtime.StoreStat._type, runtime.StoreStat);
    factories.set(runtime.TaskInfo._type, runtime.TaskInfo);
    factories.set(runtime.UserGroupPolicy._type, runtime.UserGroupPolicy);
    factories.set(runtime.UserGroupPolicyType._type, runtime.UserGroupPolicyType);
    factories.set(runtime.UserGroup._type, runtime.UserGroup);
    factories.set(runtime.PeriodicTask._type, runtime.PeriodicTask);
    factories.set(runtime.User._type, runtime.User);
    factories.set(runtime.UserCredential._type, runtime.UserCredential);
    factories.set(runtime.System._type, runtime.System);
    factories.set(runtime.Task._type, runtime.Task);
    factories.set(runtime.SecurityFields._type, runtime.SecurityFields);
    factories.set(runtime.TaskStatus._type, runtime.TaskStatus);
    factories.set(runtime.Runtime._type, runtime.Runtime);
    factories.set(runtime.SecurityPolicy._type, runtime.SecurityPolicy);
    factories.set(runtime.OpenIDConnect._type, runtime.OpenIDConnect);
    factories.set(runtime.Licence._type, runtime.Licence);
    factories.set(io.File._type, io.File);
    loaders.set(io.File._type, std_n.io.File.load);
    factories.set(io.CSVColumnString._type, io.CSVColumnString);
    factories.set(io.CSVColumnTime._type, io.CSVColumnTime);
    factories.set(io.CSVColumnDate._type, io.CSVColumnDate);
    factories.set(io.JsonFormat._type, io.JsonFormat);
    factories.set(io.Directory._type, io.Directory);
    loaders.set(io.Directory._type, std_n.io.Directory.load);
    factories.set(io.FileFormat._type, io.FileFormat);
    factories.set(io.CSVColumnFloat._type, io.CSVColumnFloat);
    factories.set(io.FileDescriptor._type, io.FileDescriptor);
    factories.set(io.CSVColumn._type, io.CSVColumn);
    factories.set(io.JSON._type, io.JSON);
    factories.set(io.FileEntry._type, io.FileEntry);
    factories.set(io.TextEncoder._type, io.TextEncoder);
    factories.set(io.Env._type, io.Env);
    factories.set(io.BinaryFormat._type, io.BinaryFormat);
    factories.set(io.AbiWriter._type, io.AbiWriter);
    loaders.set(io.AbiWriter._type, std_n.io.AbiWriter.load);
    factories.set(io.CSVColumnBoolean._type, io.CSVColumnBoolean);
    factories.set(io.FileWriter._type, io.FileWriter);
    loaders.set(io.FileWriter._type, std_n.io.FileWriter.load);
    factories.set(io.CSVFormat._type, io.CSVFormat);
    factories.set(io.AbiReader._type, io.AbiReader);
    loaders.set(io.AbiReader._type, std_n.io.AbiReader.load);
    factories.set(io.CSVColumnInteger._type, io.CSVColumnInteger);
    factories.set(io.CSVColumnIgnored._type, io.CSVColumnIgnored);
    factories.set(io.TextFormat._type, io.TextFormat);
    factories.set(debug.FnParam._type, debug.FnParam);
    factories.set(debug.TypeRef._type, debug.TypeRef);
    factories.set(debug.TypeDesc._type, debug.TypeDesc);
    factories.set(debug.ModDesc._type, debug.ModDesc);
    factories.set(debug.ModVarDesc._type, debug.ModVarDesc);
    factories.set(debug.TypeAttr._type, debug.TypeAttr);
    factories.set(debug.FnMode._type, debug.FnMode);
    factories.set(debug.FnDesc._type, debug.FnDesc);
    factories.set(math.MathConstants._type, math.MathConstants);
    factories.set(util.Iban._type, util.Iban);
    loaders.set(util.Iban._type, std_n.util.Iban.load);
    factories.set(util.TimeWindow._type, util.TimeWindow);
    loaders.set(util.TimeWindow._type, std_n.util.TimeWindow.load);
    factories.set(util.ProgressTracker._type, util.ProgressTracker);
    loaders.set(util.ProgressTracker._type, std_n.util.ProgressTracker.load);
    factories.set(util.GaussianProfile._type, util.GaussianProfile);
    loaders.set(util.GaussianProfile._type, std_n.util.GaussianProfile.load);
    factories.set(util.HistogramF64._type, util.HistogramF64);
    loaders.set(util.HistogramF64._type, std_n.util.HistogramF64.load);
    factories.set(util.NdEncoding._type, util.NdEncoding);
    factories.set(util.HistogramBucket._type, util.HistogramBucket);
    factories.set(util.HistogramI64._type, util.HistogramI64);
    loaders.set(util.HistogramI64._type, std_n.util.HistogramI64.load);
    factories.set(util.Assert._type, util.Assert);
    factories.set(util.BoxPlot._type, util.BoxPlot);
    factories.set(util.Quantizer._type, util.Quantizer);
    loaders.set(util.Quantizer._type, std_n.util.Quantizer.load);
    factories.set(util.Gaussian._type, util.Gaussian);
    loaders.set(util.Gaussian._type, std_n.util.Gaussian.load);
    factories.set(util.Histogram._type, util.Histogram);
    factories.set(util.Queue._type, util.Queue);
    loaders.set(util.Queue._type, std_n.util.Queue.load);
    factories.set(util.BoxPlotI64._type, util.BoxPlotI64);
    factories.set(util.Random._type, util.Random);
    factories.set(util.ByteArray._type, util.ByteArray);
    loaders.set(util.ByteArray._type, std_n.util.ByteArray.load);
    factories.set(util.BoxPlotF64._type, util.BoxPlotF64);
    factories.set(util.Crypto._type, util.Crypto);
    factories.set(util.Buffer._type, util.Buffer);
    loaders.set(util.Buffer._type, std_n.util.Buffer.load);
    factories.set(util.SlidingWindow._type, util.SlidingWindow);
    loaders.set(util.SlidingWindow._type, std_n.util.SlidingWindow.load);
  },
  init(abi) {
    this.mapped.length = 102;
    this.mapped[0] = abi.type_by_fqn.get(core.GeoBox._type);
    this.mapped[0].resolveGeneratedOffsets('sw','ne');
    this.mapped[1] = abi.type_by_fqn.get(core.nodeList._type);
    this.mapped[2] = abi.type_by_fqn.get(core.TimeZone._type);
    this.mapped[2].resolveGeneratedOffsetWithValues('Africa_Accra', "AfricaAccra",'Africa_Bamako', "AfricaBamako",'Africa_Banjul', "AfricaBanjul",'Africa_Conakry', "AfricaConakry",'Africa_Dakar', "AfricaDakar",'Africa_Freetown', "AfricaFreetown",'Africa_Lome', "AfricaLome",'Africa_Nouakchott', "AfricaNouakchott",'Africa_Ouagadougou', "AfricaOuagadougou",'Africa_Timbuktu', "AfricaTimbuktu",'Atlantic_Reykjavik', "AtlanticReykjavik",'Atlantic_St_Helena', "AtlanticSt_Helena",'Iceland', "Iceland",'Egypt', "Egypt",'Africa_Maseru', "AfricaMaseru",'Africa_Mbabane', "AfricaMbabane",'Africa_Bangui', "AfricaBangui",'Africa_Brazzaville', "AfricaBrazzaville",'Africa_Douala', "AfricaDouala",'Africa_Kinshasa', "AfricaKinshasa",'Africa_Libreville', "AfricaLibreville",'Africa_Luanda', "AfricaLuanda",'Africa_Malabo', "AfricaMalabo",'Africa_Niamey', "AfricaNiamey",'Africa_Porto_Novo', "AfricaPorto-Novo",'Africa_Blantyre', "AfricaBlantyre",'Africa_Bujumbura', "AfricaBujumbura",'Africa_Gaborone', "AfricaGaborone",'Africa_Harare', "AfricaHarare",'Africa_Kigali', "AfricaKigali",'Africa_Lubumbashi', "AfricaLubumbashi",'Africa_Lusaka', "AfricaLusaka",'Africa_Addis_Ababa', "AfricaAddis_Ababa",'Africa_Asmara', "AfricaAsmara",'Africa_Asmera', "AfricaAsmera",'Africa_Dar_es_Salaam', "AfricaDar_es_Salaam",'Africa_Djibouti', "AfricaDjibouti",'Africa_Kampala', "AfricaKampala",'Africa_Mogadishu', "AfricaMogadishu",'Indian_Antananarivo', "IndianAntananarivo",'Indian_Comoro', "IndianComoro",'Indian_Mayotte', "IndianMayotte",'Libya', "Libya",'America_Atka', "AmericaAtka",'US_Aleutian', "USAleutian",'US_Alaska', "USAlaska",'America_Buenos_Aires', "AmericaBuenos_Aires",'America_Argentina_ComodRivadavia', "AmericaArgentinaComodRivadavia",'America_Catamarca', "AmericaCatamarca",'America_Cordoba', "AmericaCordoba",'America_Rosario', "AmericaRosario",'America_Jujuy', "AmericaJujuy",'America_Mendoza', "AmericaMendoza",'US_Central', "USCentral",'America_Shiprock', "AmericaShiprock",'Navajo', "Navajo",'US_Mountain', "USMountain",'US_Michigan', "USMichigan",'America_Yellowknife', "AmericaYellowknife",'Canada_Mountain', "CanadaMountain",'Canada_Atlantic', "CanadaAtlantic",'Cuba', "Cuba",'America_Fort_Wayne', "AmericaFort_Wayne",'America_Indianapolis', "AmericaIndianapolis",'US_East_Indiana', "USEast-Indiana",'America_Knox_IN', "AmericaKnox_IN",'US_Indiana_Starke', "USIndiana-Starke",'America_Pangnirtung', "AmericaPangnirtung",'Jamaica', "Jamaica",'America_Louisville', "AmericaLouisville",'US_Pacific', "USPacific",'Brazil_West', "BrazilWest",'Mexico_BajaSur', "MexicoBajaSur",'Mexico_General', "MexicoGeneral",'US_Eastern', "USEastern",'Brazil_DeNoronha', "BrazilDeNoronha",'America_Godthab', "AmericaGodthab",'America_Atikokan', "AmericaAtikokan",'America_Cayman', "AmericaCayman",'America_Coral_Harbour', "AmericaCoral_Harbour",'America_Creston', "AmericaCreston",'US_Arizona', "USArizona",'America_Anguilla', "AmericaAnguilla",'America_Antigua', "AmericaAntigua",'America_Aruba', "AmericaAruba",'America_Blanc_Sablon', "AmericaBlanc-Sablon",'America_Curacao', "AmericaCuracao",'America_Dominica', "AmericaDominica",'America_Grenada', "AmericaGrenada",'America_Guadeloupe', "AmericaGuadeloupe",'America_Kralendijk', "AmericaKralendijk",'America_Lower_Princes', "AmericaLower_Princes",'America_Marigot', "AmericaMarigot",'America_Montserrat', "AmericaMontserrat",'America_Port_of_Spain', "AmericaPort_of_Spain",'America_St_Barthelemy', "AmericaSt_Barthelemy",'America_St_Kitts', "AmericaSt_Kitts",'America_St_Lucia', "AmericaSt_Lucia",'America_St_Thomas', "AmericaSt_Thomas",'America_St_Vincent', "AmericaSt_Vincent",'America_Tortola', "AmericaTortola",'America_Virgin', "AmericaVirgin",'Canada_Saskatchewan', "CanadaSaskatchewan",'America_Porto_Acre', "AmericaPorto_Acre",'Brazil_Acre', "BrazilAcre",'Chile_Continental', "ChileContinental",'Brazil_East', "BrazilEast",'Canada_Newfoundland', "CanadaNewfoundland",'America_Ensenada', "AmericaEnsenada",'America_Santa_Isabel', "AmericaSanta_Isabel",'Mexico_BajaNorte', "MexicoBajaNorte",'America_Montreal', "AmericaMontreal",'America_Nassau', "AmericaNassau",'America_Nipigon', "AmericaNipigon",'America_Thunder_Bay', "AmericaThunder_Bay",'Canada_Eastern', "CanadaEastern",'Canada_Pacific', "CanadaPacific",'Canada_Yukon', "CanadaYukon",'America_Rainy_River', "AmericaRainy_River",'Canada_Central', "CanadaCentral",'Asia_Ashkhabad', "AsiaAshkhabad",'Asia_Phnom_Penh', "AsiaPhnom_Penh",'Asia_Vientiane', "AsiaVientiane",'Indian_Christmas', "IndianChristmas",'Asia_Dacca', "AsiaDacca",'Asia_Muscat', "AsiaMuscat",'Indian_Mahe', "IndianMahe",'Indian_Reunion', "IndianReunion",'Asia_Saigon', "AsiaSaigon",'Hongkong', "Hongkong",'Asia_Tel_Aviv', "AsiaTel_Aviv",'Israel', "Israel",'Asia_Katmandu', "AsiaKatmandu",'Asia_Calcutta', "AsiaCalcutta",'Asia_Brunei', "AsiaBrunei",'Asia_Macao', "AsiaMacao",'Asia_Ujung_Pandang', "AsiaUjung_Pandang",'Europe_Nicosia', "EuropeNicosia",'Asia_Bahrain', "AsiaBahrain",'Antarctica_Syowa', "AntarcticaSyowa",'Asia_Aden', "AsiaAden",'Asia_Kuwait', "AsiaKuwait",'ROK', "ROK",'Asia_Chongqing', "AsiaChongqing",'Asia_Chungking', "AsiaChungking",'Asia_Harbin', "AsiaHarbin",'PRC', "PRC",'Asia_Kuala_Lumpur', "AsiaKuala_Lumpur",'Singapore', "Singapore",'ROC', "ROC",'Iran', "Iran",'Asia_Thimbu', "AsiaThimbu",'Japan', "Japan",'Asia_Ulan_Bator', "AsiaUlan_Bator",'Antarctica_Vostok', "AntarcticaVostok",'Asia_Kashgar', "AsiaKashgar",'Asia_Rangoon', "AsiaRangoon",'Indian_Cocos', "IndianCocos",'Atlantic_Faeroe', "AtlanticFaeroe",'Australia_South', "AustraliaSouth",'Australia_Queensland', "AustraliaQueensland",'Australia_Yancowinna', "AustraliaYancowinna",'Australia_North', "AustraliaNorth",'Australia_Currie', "AustraliaCurrie",'Australia_Tasmania', "AustraliaTasmania",'Australia_LHI', "AustraliaLHI",'Australia_Victoria', "AustraliaVictoria",'Australia_West', "AustraliaWest",'Australia_ACT', "AustraliaACT",'Australia_Canberra', "AustraliaCanberra",'Australia_NSW', "AustraliaNSW",'GMT', "GMT",'GMTx0', "GMT+0",'GMT_0', "GMT-0",'GMT0', "GMT0",'Greenwich', "Greenwich",'UCT', "UCT",'UTC', "UTC",'Universal', "Universal",'Zulu', "Zulu",'Europe_Ljubljana', "EuropeLjubljana",'Europe_Podgorica', "EuropePodgorica",'Europe_Sarajevo', "EuropeSarajevo",'Europe_Skopje', "EuropeSkopje",'Europe_Zagreb', "EuropeZagreb",'Arctic_Longyearbyen', "ArcticLongyearbyen",'Atlantic_Jan_Mayen', "AtlanticJan_Mayen",'Europe_Copenhagen', "EuropeCopenhagen",'Europe_Oslo', "EuropeOslo",'Europe_Stockholm', "EuropeStockholm",'Europe_Amsterdam', "EuropeAmsterdam",'Europe_Luxembourg', "EuropeLuxembourg",'Europe_Tiraspol', "EuropeTiraspol",'Eire', "Eire",'Europe_Mariehamn', "EuropeMariehamn",'Asia_Istanbul', "AsiaIstanbul",'Turkey', "Turkey",'Europe_Kiev', "EuropeKiev",'Europe_Uzhgorod', "EuropeUzhgorod",'Europe_Zaporozhye', "EuropeZaporozhye",'Portugal', "Portugal",'Europe_Belfast', "EuropeBelfast",'Europe_Guernsey', "EuropeGuernsey",'Europe_Isle_of_Man', "EuropeIsle_of_Man",'Europe_Jersey', "EuropeJersey",'GB', "GB",'GB_Eire', "GB-Eire",'W_SU', "W-SU",'Europe_Monaco', "EuropeMonaco",'Europe_Bratislava', "EuropeBratislava",'Europe_San_Marino', "EuropeSan_Marino",'Europe_Vatican', "EuropeVatican",'Poland', "Poland",'Europe_Busingen', "EuropeBusingen",'Europe_Vaduz', "EuropeVaduz",'Indian_Kerguelen', "IndianKerguelen",'Antarctica_McMurdo', "AntarcticaMcMurdo",'Antarctica_South_Pole', "AntarcticaSouth_Pole",'NZ', "NZ",'NZ_CHAT', "NZ-CHAT",'Chile_EasterIsland', "ChileEasterIsland",'Pacific_Pohnpei', "PacificPohnpei",'Pacific_Ponape', "PacificPonape",'Pacific_Saipan', "PacificSaipan",'Pacific_Johnston', "PacificJohnston",'US_Hawaii', "USHawaii",'Pacific_Enderbury', "PacificEnderbury",'Kwajalein', "Kwajalein",'Pacific_Midway', "PacificMidway",'Pacific_Samoa', "PacificSamoa",'US_Samoa', "USSamoa",'Antarctica_DumontDUrville', "AntarcticaDumontDUrville",'Pacific_Chuuk', "PacificChuuk",'Pacific_Truk', "PacificTruk",'Pacific_Yap', "PacificYap",'Pacific_Funafuti', "PacificFunafuti",'Pacific_Majuro', "PacificMajuro",'Pacific_Wake', "PacificWake",'Pacific_Wallis', "PacificWallis",'Africa_Abidjan', "AfricaAbidjan",'Africa_Algiers', "AfricaAlgiers",'Africa_Bissau', "AfricaBissau",'Africa_Cairo', "AfricaCairo",'Africa_Casablanca', "AfricaCasablanca",'Africa_Ceuta', "AfricaCeuta",'Africa_El_Aaiun', "AfricaEl_Aaiun",'Africa_Johannesburg', "AfricaJohannesburg",'Africa_Juba', "AfricaJuba",'Africa_Khartoum', "AfricaKhartoum",'Africa_Lagos', "AfricaLagos",'Africa_Maputo', "AfricaMaputo",'Africa_Monrovia', "AfricaMonrovia",'Africa_Nairobi', "AfricaNairobi",'Africa_Ndjamena', "AfricaNdjamena",'Africa_Sao_Tome', "AfricaSao_Tome",'Africa_Tripoli', "AfricaTripoli",'Africa_Tunis', "AfricaTunis",'Africa_Windhoek', "AfricaWindhoek",'America_Adak', "AmericaAdak",'America_Anchorage', "AmericaAnchorage",'America_Araguaina', "AmericaAraguaina",'America_Argentina_Buenos_Aires', "AmericaArgentinaBuenos_Aires",'America_Argentina_Catamarca', "AmericaArgentinaCatamarca",'America_Argentina_Cordoba', "AmericaArgentinaCordoba",'America_Argentina_Jujuy', "AmericaArgentinaJujuy",'America_Argentina_La_Rioja', "AmericaArgentinaLa_Rioja",'America_Argentina_Mendoza', "AmericaArgentinaMendoza",'America_Argentina_Rio_Gallegos', "AmericaArgentinaRio_Gallegos",'America_Argentina_Salta', "AmericaArgentinaSalta",'America_Argentina_San_Juan', "AmericaArgentinaSan_Juan",'America_Argentina_San_Luis', "AmericaArgentinaSan_Luis",'America_Argentina_Tucuman', "AmericaArgentinaTucuman",'America_Argentina_Ushuaia', "AmericaArgentinaUshuaia",'America_Asuncion', "AmericaAsuncion",'America_Bahia', "AmericaBahia",'America_Bahia_Banderas', "AmericaBahia_Banderas",'America_Barbados', "AmericaBarbados",'America_Belem', "AmericaBelem",'America_Belize', "AmericaBelize",'America_Boa_Vista', "AmericaBoa_Vista",'America_Bogota', "AmericaBogota",'America_Boise', "AmericaBoise",'America_Cambridge_Bay', "AmericaCambridge_Bay",'America_Campo_Grande', "AmericaCampo_Grande",'America_Cancun', "AmericaCancun",'America_Caracas', "AmericaCaracas",'America_Cayenne', "AmericaCayenne",'America_Chicago', "AmericaChicago",'America_Chihuahua', "AmericaChihuahua",'America_Ciudad_Juarez', "AmericaCiudad_Juarez",'America_Costa_Rica', "AmericaCosta_Rica",'America_Cuiaba', "AmericaCuiaba",'America_Danmarkshavn', "AmericaDanmarkshavn",'America_Dawson', "AmericaDawson",'America_Dawson_Creek', "AmericaDawson_Creek",'America_Denver', "AmericaDenver",'America_Detroit', "AmericaDetroit",'America_Edmonton', "AmericaEdmonton",'America_Eirunepe', "AmericaEirunepe",'America_El_Salvador', "AmericaEl_Salvador",'America_Fort_Nelson', "AmericaFort_Nelson",'America_Fortaleza', "AmericaFortaleza",'America_Glace_Bay', "AmericaGlace_Bay",'America_Goose_Bay', "AmericaGoose_Bay",'America_Grand_Turk', "AmericaGrand_Turk",'America_Guatemala', "AmericaGuatemala",'America_Guayaquil', "AmericaGuayaquil",'America_Guyana', "AmericaGuyana",'America_Halifax', "AmericaHalifax",'America_Havana', "AmericaHavana",'America_Hermosillo', "AmericaHermosillo",'America_Indiana_Indianapolis', "AmericaIndianaIndianapolis",'America_Indiana_Knox', "AmericaIndianaKnox",'America_Indiana_Marengo', "AmericaIndianaMarengo",'America_Indiana_Petersburg', "AmericaIndianaPetersburg",'America_Indiana_Tell_City', "AmericaIndianaTell_City",'America_Indiana_Vevay', "AmericaIndianaVevay",'America_Indiana_Vincennes', "AmericaIndianaVincennes",'America_Indiana_Winamac', "AmericaIndianaWinamac",'America_Inuvik', "AmericaInuvik",'America_Iqaluit', "AmericaIqaluit",'America_Jamaica', "AmericaJamaica",'America_Juneau', "AmericaJuneau",'America_Kentucky_Louisville', "AmericaKentuckyLouisville",'America_Kentucky_Monticello', "AmericaKentuckyMonticello",'America_La_Paz', "AmericaLa_Paz",'America_Lima', "AmericaLima",'America_Los_Angeles', "AmericaLos_Angeles",'America_Maceio', "AmericaMaceio",'America_Managua', "AmericaManagua",'America_Manaus', "AmericaManaus",'America_Martinique', "AmericaMartinique",'America_Matamoros', "AmericaMatamoros",'America_Mazatlan', "AmericaMazatlan",'America_Menominee', "AmericaMenominee",'America_Merida', "AmericaMerida",'America_Metlakatla', "AmericaMetlakatla",'America_Mexico_City', "AmericaMexico_City",'America_Miquelon', "AmericaMiquelon",'America_Moncton', "AmericaMoncton",'America_Monterrey', "AmericaMonterrey",'America_Montevideo', "AmericaMontevideo",'America_New_York', "AmericaNew_York",'America_Nome', "AmericaNome",'America_Noronha', "AmericaNoronha",'America_North_Dakota_Beulah', "AmericaNorth_DakotaBeulah",'America_North_Dakota_Center', "AmericaNorth_DakotaCenter",'America_North_Dakota_New_Salem', "AmericaNorth_DakotaNew_Salem",'America_Nuuk', "AmericaNuuk",'America_Ojinaga', "AmericaOjinaga",'America_Panama', "AmericaPanama",'America_Paramaribo', "AmericaParamaribo",'America_Phoenix', "AmericaPhoenix",'America_Port_au_Prince', "AmericaPort-au-Prince",'America_Porto_Velho', "AmericaPorto_Velho",'America_Puerto_Rico', "AmericaPuerto_Rico",'America_Punta_Arenas', "AmericaPunta_Arenas",'America_Rankin_Inlet', "AmericaRankin_Inlet",'America_Recife', "AmericaRecife",'America_Regina', "AmericaRegina",'America_Resolute', "AmericaResolute",'America_Rio_Branco', "AmericaRio_Branco",'America_Santarem', "AmericaSantarem",'America_Santiago', "AmericaSantiago",'America_Santo_Domingo', "AmericaSanto_Domingo",'America_Sao_Paulo', "AmericaSao_Paulo",'America_Scoresbysund', "AmericaScoresbysund",'America_Sitka', "AmericaSitka",'America_St_Johns', "AmericaSt_Johns",'America_Swift_Current', "AmericaSwift_Current",'America_Tegucigalpa', "AmericaTegucigalpa",'America_Thule', "AmericaThule",'America_Tijuana', "AmericaTijuana",'America_Toronto', "AmericaToronto",'America_Vancouver', "AmericaVancouver",'America_Whitehorse', "AmericaWhitehorse",'America_Winnipeg', "AmericaWinnipeg",'America_Yakutat', "AmericaYakutat",'Antarctica_Casey', "AntarcticaCasey",'Antarctica_Davis', "AntarcticaDavis",'Antarctica_Macquarie', "AntarcticaMacquarie",'Antarctica_Mawson', "AntarcticaMawson",'Antarctica_Palmer', "AntarcticaPalmer",'Antarctica_Rothera', "AntarcticaRothera",'Antarctica_Troll', "AntarcticaTroll",'Asia_Almaty', "AsiaAlmaty",'Asia_Amman', "AsiaAmman",'Asia_Anadyr', "AsiaAnadyr",'Asia_Aqtau', "AsiaAqtau",'Asia_Aqtobe', "AsiaAqtobe",'Asia_Ashgabat', "AsiaAshgabat",'Asia_Atyrau', "AsiaAtyrau",'Asia_Baghdad', "AsiaBaghdad",'Asia_Baku', "AsiaBaku",'Asia_Bangkok', "AsiaBangkok",'Asia_Barnaul', "AsiaBarnaul",'Asia_Beirut', "AsiaBeirut",'Asia_Bishkek', "AsiaBishkek",'Asia_Chita', "AsiaChita",'Asia_Choibalsan', "AsiaChoibalsan",'Asia_Colombo', "AsiaColombo",'Asia_Damascus', "AsiaDamascus",'Asia_Dhaka', "AsiaDhaka",'Asia_Dili', "AsiaDili",'Asia_Dubai', "AsiaDubai",'Asia_Dushanbe', "AsiaDushanbe",'Asia_Famagusta', "AsiaFamagusta",'Asia_Gaza', "AsiaGaza",'Asia_Hebron', "AsiaHebron",'Asia_Ho_Chi_Minh', "AsiaHo_Chi_Minh",'Asia_Hong_Kong', "AsiaHong_Kong",'Asia_Hovd', "AsiaHovd",'Asia_Irkutsk', "AsiaIrkutsk",'Asia_Jakarta', "AsiaJakarta",'Asia_Jayapura', "AsiaJayapura",'Asia_Jerusalem', "AsiaJerusalem",'Asia_Kabul', "AsiaKabul",'Asia_Kamchatka', "AsiaKamchatka",'Asia_Karachi', "AsiaKarachi",'Asia_Kathmandu', "AsiaKathmandu",'Asia_Khandyga', "AsiaKhandyga",'Asia_Kolkata', "AsiaKolkata",'Asia_Krasnoyarsk', "AsiaKrasnoyarsk",'Asia_Kuching', "AsiaKuching",'Asia_Macau', "AsiaMacau",'Asia_Magadan', "AsiaMagadan",'Asia_Makassar', "AsiaMakassar",'Asia_Manila', "AsiaManila",'Asia_Nicosia', "AsiaNicosia",'Asia_Novokuznetsk', "AsiaNovokuznetsk",'Asia_Novosibirsk', "AsiaNovosibirsk",'Asia_Omsk', "AsiaOmsk",'Asia_Oral', "AsiaOral",'Asia_Pontianak', "AsiaPontianak",'Asia_Pyongyang', "AsiaPyongyang",'Asia_Qatar', "AsiaQatar",'Asia_Qostanay', "AsiaQostanay",'Asia_Qyzylorda', "AsiaQyzylorda",'Asia_Riyadh', "AsiaRiyadh",'Asia_Sakhalin', "AsiaSakhalin",'Asia_Samarkand', "AsiaSamarkand",'Asia_Seoul', "AsiaSeoul",'Asia_Shanghai', "AsiaShanghai",'Asia_Singapore', "AsiaSingapore",'Asia_Srednekolymsk', "AsiaSrednekolymsk",'Asia_Taipei', "AsiaTaipei",'Asia_Tashkent', "AsiaTashkent",'Asia_Tbilisi', "AsiaTbilisi",'Asia_Tehran', "AsiaTehran",'Asia_Thimphu', "AsiaThimphu",'Asia_Tokyo', "AsiaTokyo",'Asia_Tomsk', "AsiaTomsk",'Asia_Ulaanbaatar', "AsiaUlaanbaatar",'Asia_Urumqi', "AsiaUrumqi",'Asia_Ust_Nera', "AsiaUst-Nera",'Asia_Vladivostok', "AsiaVladivostok",'Asia_Yakutsk', "AsiaYakutsk",'Asia_Yangon', "AsiaYangon",'Asia_Yekaterinburg', "AsiaYekaterinburg",'Asia_Yerevan', "AsiaYerevan",'Atlantic_Azores', "AtlanticAzores",'Atlantic_Bermuda', "AtlanticBermuda",'Atlantic_Canary', "AtlanticCanary",'Atlantic_Cape_Verde', "AtlanticCape_Verde",'Atlantic_Faroe', "AtlanticFaroe",'Atlantic_Madeira', "AtlanticMadeira",'Atlantic_South_Georgia', "AtlanticSouth_Georgia",'Atlantic_Stanley', "AtlanticStanley",'Australia_Adelaide', "AustraliaAdelaide",'Australia_Brisbane', "AustraliaBrisbane",'Australia_Broken_Hill', "AustraliaBroken_Hill",'Australia_Darwin', "AustraliaDarwin",'Australia_Eucla', "AustraliaEucla",'Australia_Hobart', "AustraliaHobart",'Australia_Lindeman', "AustraliaLindeman",'Australia_Lord_Howe', "AustraliaLord_Howe",'Australia_Melbourne', "AustraliaMelbourne",'Australia_Perth', "AustraliaPerth",'Australia_Sydney', "AustraliaSydney",'CET', "CET",'CST6CDT', "CST6CDT",'EET', "EET",'EST', "EST",'EST5EDT', "EST5EDT",'Europe_Andorra', "EuropeAndorra",'Europe_Astrakhan', "EuropeAstrakhan",'Europe_Athens', "EuropeAthens",'Europe_Belgrade', "EuropeBelgrade",'Europe_Berlin', "EuropeBerlin",'Europe_Brussels', "EuropeBrussels",'Europe_Bucharest', "EuropeBucharest",'Europe_Budapest', "EuropeBudapest",'Europe_Chisinau', "EuropeChisinau",'Europe_Dublin', "EuropeDublin",'Europe_Gibraltar', "EuropeGibraltar",'Europe_Helsinki', "EuropeHelsinki",'Europe_Istanbul', "EuropeIstanbul",'Europe_Kaliningrad', "EuropeKaliningrad",'Europe_Kirov', "EuropeKirov",'Europe_Kyiv', "EuropeKyiv",'Europe_Lisbon', "EuropeLisbon",'Europe_London', "EuropeLondon",'Europe_Madrid', "EuropeMadrid",'Europe_Malta', "EuropeMalta",'Europe_Minsk', "EuropeMinsk",'Europe_Moscow', "EuropeMoscow",'Europe_Paris', "EuropeParis",'Europe_Prague', "EuropePrague",'Europe_Riga', "EuropeRiga",'Europe_Rome', "EuropeRome",'Europe_Samara', "EuropeSamara",'Europe_Saratov', "EuropeSaratov",'Europe_Simferopol', "EuropeSimferopol",'Europe_Sofia', "EuropeSofia",'Europe_Tallinn', "EuropeTallinn",'Europe_Tirane', "EuropeTirane",'Europe_Ulyanovsk', "EuropeUlyanovsk",'Europe_Vienna', "EuropeVienna",'Europe_Vilnius', "EuropeVilnius",'Europe_Volgograd', "EuropeVolgograd",'Europe_Warsaw', "EuropeWarsaw",'Europe_Zurich', "EuropeZurich",'Factory', "Factory",'HST', "HST",'Indian_Chagos', "IndianChagos",'Indian_Maldives', "IndianMaldives",'Indian_Mauritius', "IndianMauritius",'MET', "MET",'MST', "MST",'MST7MDT', "MST7MDT",'PST8PDT', "PST8PDT",'Pacific_Apia', "PacificApia",'Pacific_Auckland', "PacificAuckland",'Pacific_Bougainville', "PacificBougainville",'Pacific_Chatham', "PacificChatham",'Pacific_Easter', "PacificEaster",'Pacific_Efate', "PacificEfate",'Pacific_Fakaofo', "PacificFakaofo",'Pacific_Fiji', "PacificFiji",'Pacific_Galapagos', "PacificGalapagos",'Pacific_Gambier', "PacificGambier",'Pacific_Guadalcanal', "PacificGuadalcanal",'Pacific_Guam', "PacificGuam",'Pacific_Honolulu', "PacificHonolulu",'Pacific_Kanton', "PacificKanton",'Pacific_Kiritimati', "PacificKiritimati",'Pacific_Kosrae', "PacificKosrae",'Pacific_Kwajalein', "PacificKwajalein",'Pacific_Marquesas', "PacificMarquesas",'Pacific_Nauru', "PacificNauru",'Pacific_Niue', "PacificNiue",'Pacific_Norfolk', "PacificNorfolk",'Pacific_Noumea', "PacificNoumea",'Pacific_Pago_Pago', "PacificPago_Pago",'Pacific_Palau', "PacificPalau",'Pacific_Pitcairn', "PacificPitcairn",'Pacific_Port_Moresby', "PacificPort_Moresby",'Pacific_Rarotonga', "PacificRarotonga",'Pacific_Tahiti', "PacificTahiti",'Pacific_Tarawa', "PacificTarawa",'Pacific_Tongatapu', "PacificTongatapu",'WET', "WET");
    this.mapped[3] = abi.type_by_fqn.get(core.nodeIndexBucket._type);
    this.mapped[4] = abi.type_by_fqn.get(core.node._type);
    this.mapped[5] = abi.type_by_fqn.get(core.nodeTimeCursor._type);
    this.mapped[6] = abi.type_by_fqn.get(core.TableColumnMeta._type);
    this.mapped[6].resolveGeneratedOffsets('type','size','index','min','max','avg','std');
    this.mapped[7] = abi.type_by_fqn.get(core.Error._type);
    this.mapped[8] = abi.type_by_fqn.get(core.ErrorCode._type);
    this.mapped[8].resolveGeneratedOffsetWithValues('none', 0,'file_not_found', 1,'file_read_error', 2,'file_write_error', 3,'unresolved_function', 4,'too_deep_workspace', 5,'too_deep_iterator', 6,'wrong_path', 7,'parse_error', 8,'out_of_bounds', 9,'division_by_zero', 10,'wrong_operand', 11,'wrong_entrypoint', 12,'wrong_params', 13,'wrong_param_type', 14,'wrong_assert', 15,'wrong_numeric', 16,'wrong_time', 17,'wrong_state', 18,'wrong_null', 19,'unresolved_ref', 20,'assign_error', 21,'read_field_requires_obj', 22,'read_offset_requires_array', 23,'write_offset_requires_array', 24,'write_field_requires_object', 25,'min_higher_max_error', 26,'negative_std', 27,'interrupted', 28,'throw', 29,'wrong_type', 30,'wrong_dimension', 31,'unsupported_operation', 32,'unsupported_type', 33,'too_large', 34,'dimensions_mismatch', 35,'not_initialized', 36,'timeout', 37,'unauthorized', 38,'forbidden', 39,'runtime_error', 40,'compile_error', 41,'update_error', 42);
    this.mapped[9] = abi.type_by_fqn.get(core.SamplingMode._type);
    this.mapped[9].resolveGeneratedOffsetWithValues('fixed', 0,'fixed_reg', 1,'adaptative', 2,'dense', 3);
    this.mapped[10] = abi.type_by_fqn.get(core.DurationUnit._type);
    this.mapped[10].resolveGeneratedOffsetWithValues('microseconds', 1,'milliseconds', 1000,'seconds', 1000000,'minutes', 60000000,'hours', 3600000000,'days', 86400000000,'weeks', 604800000000,'months', 2628000000000,'years', 31536000000000);
    this.mapped[11] = abi.type_by_fqn.get(core.TensorType._type);
    this.mapped[11].resolveGeneratedOffsetWithValues('i32', 4,'i64', 8,'f32', 4,'f64', 8,'c64', 8,'c128', 16);
    this.mapped[12] = abi.type_by_fqn.get(core.Table._type);
    this.mapped[13] = abi.type_by_fqn.get(core.geo._type);
    this.mapped[13].static_values = [abi.createGeo(-85.05112876,-179.999999958),abi.createGeo(85.05112876,179.999999958)];
    this.mapped[14] = abi.type_by_fqn.get(core.Tensor._type);
    this.mapped[15] = abi.type_by_fqn.get(core.GeoCircle._type);
    this.mapped[15].resolveGeneratedOffsets('center','radius');
    this.mapped[16] = abi.type_by_fqn.get(core.Date._type);
    this.mapped[17] = abi.type_by_fqn.get(core.Map._type);
    this.mapped[18] = abi.type_by_fqn.get(core.duration._type);
    this.mapped[19] = abi.type_by_fqn.get(core.nodeTime._type);
    this.mapped[20] = abi.type_by_fqn.get(core.Array._type);
    this.mapped[21] = abi.type_by_fqn.get(core.function_._type);
    this.mapped[22] = abi.type_by_fqn.get(core.NodeTimeInfo._type);
    this.mapped[22].resolveGeneratedOffsets('size','from','to');
    this.mapped[23] = abi.type_by_fqn.get(core.Tuple._type);
    this.mapped[23].resolveGeneratedOffsets('x','y');
    this.mapped[24] = abi.type_by_fqn.get(core.nodeIndex._type);
    this.mapped[25] = abi.type_by_fqn.get(core.GeoPoly._type);
    this.mapped[26] = abi.type_by_fqn.get(core.time._type);
    this.mapped[26].static_values = [abi.createTime(-9223372036854775808n),abi.createTime(9223372036854775807n)];
    this.mapped[27] = abi.type_by_fqn.get(core.DatePart._type);
    this.mapped[27].resolveGeneratedOffsetWithValues('years', 0,'months', 1,'days', 2,'hours', 3,'minutes', 4,'seconds', 5,'microseconds', 6);
    this.mapped[28] = abi.type_by_fqn.get(core.nodeGeo._type);
    this.mapped[29] = abi.type_by_fqn.get(core.String._type);
    this.mapped[30] = abi.type_by_fqn.get(runtime.SecurityEntity._type);
    this.mapped[30].resolveGeneratedOffsets('id','name','activated');
    this.mapped[31] = abi.type_by_fqn.get(runtime.UserRole._type);
    this.mapped[31].resolveGeneratedOffsets('name','permissions');
    this.mapped[32] = abi.type_by_fqn.get(runtime.RuntimeInfo._type);
    this.mapped[32].resolveGeneratedOffsets('version','arch','timezone','licence','io_threads','bg_threads','fg_threads','mem_total','mem_worker','nb_ctx','store_stats');
    this.mapped[33] = abi.type_by_fqn.get(runtime.StoreStat._type);
    this.mapped[33].resolveGeneratedOffsets('capacity_bytes','allocated_bytes','allocated_ratio','remained_bytes','remained_ratio','used_bytes','used_ratio','available_bytes','available_ratio');
    this.mapped[34] = abi.type_by_fqn.get(runtime.TaskInfo._type);
    this.mapped[34].resolveGeneratedOffsets('id','parent','mod','fun','params','progress','remaining','creation','start','duration','status','result_size','log_size','sub_waiting','sub_tasks_all','user');
    this.mapped[35] = abi.type_by_fqn.get(runtime.UserGroupPolicy._type);
    this.mapped[35].resolveGeneratedOffsets('group_id','type');
    this.mapped[36] = abi.type_by_fqn.get(runtime.UserGroupPolicyType._type);
    this.mapped[36].resolveGeneratedOffsetWithValues('read', 0,'write', 1,'execute', 2);
    this.mapped[37] = abi.type_by_fqn.get(runtime.UserGroup._type);
    this.mapped[37].resolveGeneratedOffsets('id','name','activated');
    this.mapped[38] = abi.type_by_fqn.get(runtime.PeriodicTask._type);
    this.mapped[38].resolveGeneratedOffsets('name','user_id','args','start','every');
    this.mapped[39] = abi.type_by_fqn.get(runtime.User._type);
    this.mapped[39].resolveGeneratedOffsets('id','name','activated','full_name','email','role','permissions_flags','groups','groups_flags','external');
    this.mapped[40] = abi.type_by_fqn.get(runtime.UserCredential._type);
    this.mapped[40].resolveGeneratedOffsets('offset','pass');
    this.mapped[41] = abi.type_by_fqn.get(runtime.System._type);
    this.mapped[42] = abi.type_by_fqn.get(runtime.Task._type);
    this.mapped[43] = abi.type_by_fqn.get(runtime.SecurityFields._type);
    this.mapped[43].resolveGeneratedOffsets('email','name','first_name','last_name','roles','groups');
    this.mapped[44] = abi.type_by_fqn.get(runtime.TaskStatus._type);
    this.mapped[44].resolveGeneratedOffsetWithValues('empty', 0,'waiting', 1,'running', 2,'cancelled', 3,'error', 4,'ended', 5);
    this.mapped[45] = abi.type_by_fqn.get(runtime.Runtime._type);
    this.mapped[46] = abi.type_by_fqn.get(runtime.SecurityPolicy._type);
    this.mapped[46].resolveGeneratedOffsets('entities','credentials','roles','fields');
    this.mapped[47] = abi.type_by_fqn.get(runtime.OpenIDConnect._type);
    this.mapped[47].resolveGeneratedOffsets('url','clientId');
    this.mapped[48] = abi.type_by_fqn.get(runtime.Licence._type);
    this.mapped[48].resolveGeneratedOffsets('name','start','end','company','max_workers','max_memory','max_store','extra_1','extra_2','extra_3','extra_4');
    this.mapped[49] = abi.type_by_fqn.get(io.File._type);
    this.mapped[50] = abi.type_by_fqn.get(io.CSVColumnString._type);
    this.mapped[50].resolveGeneratedOffsets('name','mandatory','trim','try_number','try_json','values','encoder');
    this.mapped[51] = abi.type_by_fqn.get(io.CSVColumnTime._type);
    this.mapped[51].resolveGeneratedOffsets('name','mandatory','unit');
    this.mapped[52] = abi.type_by_fqn.get(io.CSVColumnDate._type);
    this.mapped[52].resolveGeneratedOffsets('name','mandatory','format','tz','as_time');
    this.mapped[53] = abi.type_by_fqn.get(io.JsonFormat._type);
    this.mapped[54] = abi.type_by_fqn.get(io.Directory._type);
    this.mapped[55] = abi.type_by_fqn.get(io.FileFormat._type);
    this.mapped[56] = abi.type_by_fqn.get(io.CSVColumnFloat._type);
    this.mapped[56].resolveGeneratedOffsets('name','mandatory');
    this.mapped[57] = abi.type_by_fqn.get(io.FileDescriptor._type);
    this.mapped[57].resolveGeneratedOffsets('uri','size','last_modification');
    this.mapped[58] = abi.type_by_fqn.get(io.CSVColumn._type);
    this.mapped[58].resolveGeneratedOffsets('name','mandatory');
    this.mapped[59] = abi.type_by_fqn.get(io.JSON._type);
    this.mapped[60] = abi.type_by_fqn.get(io.FileEntry._type);
    this.mapped[61] = abi.type_by_fqn.get(io.TextEncoder._type);
    this.mapped[61].resolveGeneratedOffsetWithValues('plain', null,'base64', null,'base64url', null,'hexadecimal', null);
    this.mapped[62] = abi.type_by_fqn.get(io.Env._type);
    this.mapped[63] = abi.type_by_fqn.get(io.BinaryFormat._type);
    this.mapped[64] = abi.type_by_fqn.get(io.AbiWriter._type);
    this.mapped[65] = abi.type_by_fqn.get(io.CSVColumnBoolean._type);
    this.mapped[65].resolveGeneratedOffsets('name','mandatory');
    this.mapped[66] = abi.type_by_fqn.get(io.FileWriter._type);
    this.mapped[67] = abi.type_by_fqn.get(io.CSVFormat._type);
    this.mapped[67].resolveGeneratedOffsets('header_lines','infer','separator','string_delimiter','decimal_separator','thousands_separator','columns');
    this.mapped[68] = abi.type_by_fqn.get(io.AbiReader._type);
    this.mapped[69] = abi.type_by_fqn.get(io.CSVColumnInteger._type);
    this.mapped[69].resolveGeneratedOffsets('name','mandatory');
    this.mapped[70] = abi.type_by_fqn.get(io.CSVColumnIgnored._type);
    this.mapped[70].resolveGeneratedOffsets('name','mandatory');
    this.mapped[71] = abi.type_by_fqn.get(io.TextFormat._type);
    this.mapped[72] = abi.type_by_fqn.get(debug.FnParam._type);
    this.mapped[72].resolveGeneratedOffsets('name','type');
    this.mapped[73] = abi.type_by_fqn.get(debug.TypeRef._type);
    this.mapped[73].resolveGeneratedOffsets('name','module','generics','nullable');
    this.mapped[74] = abi.type_by_fqn.get(debug.TypeDesc._type);
    this.mapped[74].resolveGeneratedOffsets('module','name','methods','attrs','is_abstract','is_enum');
    this.mapped[75] = abi.type_by_fqn.get(debug.ModDesc._type);
    this.mapped[75].resolveGeneratedOffsets('name','lib','functions','types','vars');
    this.mapped[76] = abi.type_by_fqn.get(debug.ModVarDesc._type);
    this.mapped[76].resolveGeneratedOffsets('module','name','type');
    this.mapped[77] = abi.type_by_fqn.get(debug.TypeAttr._type);
    this.mapped[77].resolveGeneratedOffsets('name','type','is_static');
    this.mapped[78] = abi.type_by_fqn.get(debug.FnMode._type);
    this.mapped[78].resolveGeneratedOffsetWithValues('read_only', null,'copy_on_write', null,'volatile', null,'write', null);
    this.mapped[79] = abi.type_by_fqn.get(debug.FnDesc._type);
    this.mapped[79].resolveGeneratedOffsets('module','name','parent_type','params','return_type','is_static','is_task','is_exclusive','is_reserved','is_exposed','mode','permissions');
    this.mapped[80] = abi.type_by_fqn.get(math.MathConstants._type);
    this.mapped[80].static_values = [2.718281828,1.442695041,0.434294482,0.693147181,2.302585093,3.141592654,1.570796327,0.785398163,0.318309886,0.636619772,1.128379167,1.414213562,0.707106781];
    this.mapped[81] = abi.type_by_fqn.get(util.Iban._type);
    this.mapped[82] = abi.type_by_fqn.get(util.TimeWindow._type);
    this.mapped[83] = abi.type_by_fqn.get(util.ProgressTracker._type);
    this.mapped[84] = abi.type_by_fqn.get(util.GaussianProfile._type);
    this.mapped[85] = abi.type_by_fqn.get(util.HistogramF64._type);
    this.mapped[86] = abi.type_by_fqn.get(util.NdEncoding._type);
    this.mapped[87] = abi.type_by_fqn.get(util.HistogramBucket._type);
    this.mapped[87].resolveGeneratedOffsetWithValues('from', 0,'to', 1,'count', 2,'percentage', 3);
    this.mapped[88] = abi.type_by_fqn.get(util.HistogramI64._type);
    this.mapped[89] = abi.type_by_fqn.get(util.Assert._type);
    this.mapped[90] = abi.type_by_fqn.get(util.BoxPlot._type);
    this.mapped[90].resolveGeneratedOffsets('min','max','whiskerLow','whiskerHigh','percentile1','percentile5','percentile25','percentile50','percentile75','percentile95','percentile99','countOutliersLow','countOutliersHigh','percentageOutliersLow','percentageOutliersHigh','sum','avg','std','size');
    this.mapped[91] = abi.type_by_fqn.get(util.Quantizer._type);
    this.mapped[92] = abi.type_by_fqn.get(util.Gaussian._type);
    this.mapped[93] = abi.type_by_fqn.get(util.Histogram._type);
    this.mapped[94] = abi.type_by_fqn.get(util.Queue._type);
    this.mapped[95] = abi.type_by_fqn.get(util.BoxPlotI64._type);
    this.mapped[95].resolveGeneratedOffsets('min','max','whiskerLow','whiskerHigh','percentile1','percentile5','percentile25','percentile50','percentile75','percentile95','percentile99','countOutliersLow','countOutliersHigh','percentageOutliersLow','percentageOutliersHigh','sum','avg','std','size');
    this.mapped[96] = abi.type_by_fqn.get(util.Random._type);
    this.mapped[96].resolveGeneratedOffsets('seed','v');
    this.mapped[97] = abi.type_by_fqn.get(util.ByteArray._type);
    this.mapped[98] = abi.type_by_fqn.get(util.BoxPlotF64._type);
    this.mapped[98].resolveGeneratedOffsets('min','max','whiskerLow','whiskerHigh','percentile1','percentile5','percentile25','percentile50','percentile75','percentile95','percentile99','countOutliersLow','countOutliersHigh','percentageOutliersLow','percentageOutliersHigh','sum','avg','std','size');
    this.mapped[99] = abi.type_by_fqn.get(util.Crypto._type);
    this.mapped[100] = abi.type_by_fqn.get(util.Buffer._type);
    this.mapped[101] = abi.type_by_fqn.get(util.SlidingWindow._type);
  },
};
