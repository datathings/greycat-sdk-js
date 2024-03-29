// AUTO-GENERATED FILE PLEASE DO NOT MODIFY MANUALLY
/* eslint-disable */
// @ts-nocheck

import * as $sdk from '../index.js';
import * as std_n from '../std_n/index.js';

export namespace core {
  export class String extends std_n.core.String {
  }

  export class Error extends std_n.core.Error {
  }

  export class GeoCircle extends $sdk.GCObject {
    static readonly _type = 'core::GeoCircle';

    center: $sdk.std.core.geo;
    radius: number;

    static createFrom({center, radius}: {center: $sdk.std.core.geo, radius: number}, $g: $sdk.GreyCat = globalThis.greycat.default): GeoCircle {
      return new GeoCircle($g.abi.libs_by_name.get(stdlib.name)!.mapped[2], center, radius);
    }
    static create(center: $sdk.std.core.geo, radius: number, $g: $sdk.GreyCat = globalThis.greycat.default): GeoCircle {
      return new GeoCircle($g.abi.libs_by_name.get(stdlib.name)!.mapped[2], center, radius);
    }
  }

  export class Array<T extends $sdk.Value = any> extends std_n.core.Array<T> {
  }

  export class ErrorCode extends $sdk.GCEnum {
    static readonly _type = 'core::ErrorCode';

    constructor(type: $sdk.AbiType, offset: number, public key: ErrorCode.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static none($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[4];
      return t.static_values['none'];
    }
    static interrupted($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[4];
      return t.static_values['interrupted'];
    }
    static await_($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[4];
      return t.static_values['await_'];
    }
    static too_deep_iterator($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[4];
      return t.static_values['too_deep_iterator'];
    }
    static wrong_operand($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[4];
      return t.static_values['wrong_operand'];
    }
    static wrong_params($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[4];
      return t.static_values['wrong_params'];
    }
    static wrong_param_type($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[4];
      return t.static_values['wrong_param_type'];
    }
    static wrong_numeric($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[4];
      return t.static_values['wrong_numeric'];
    }
    static wrong_state($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[4];
      return t.static_values['wrong_state'];
    }
    static wrong_null($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[4];
      return t.static_values['wrong_null'];
    }
    static unresolved_ref($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[4];
      return t.static_values['unresolved_ref'];
    }
    static throw_($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[4];
      return t.static_values['throw_'];
    }
    static wrong_type($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[4];
      return t.static_values['wrong_type'];
    }
    static wrong_dimension($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[4];
      return t.static_values['wrong_dimension'];
    }
    static unsupported_operation($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[4];
      return t.static_values['unsupported_operation'];
    }
    static unsupported_type($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[4];
      return t.static_values['unsupported_type'];
    }
    static dimensions_mismatch($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[4];
      return t.static_values['dimensions_mismatch'];
    }
    static timeout($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[4];
      return t.static_values['timeout'];
    }
    static forbidden($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[4];
      return t.static_values['forbidden'];
    }
    static runtime_error($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[4];
      return t.static_values['runtime_error'];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): ErrorCode[] {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[4];
      return t.enum_values!;
    }
  }

  export namespace ErrorCode  {
    export type Field = 'none'|'interrupted'|'await'|'too_deep_iterator'|'wrong_operand'|'wrong_params'|'wrong_param_type'|'wrong_numeric'|'wrong_state'|'wrong_null'|'unresolved_ref'|'throw'|'wrong_type'|'wrong_dimension'|'unsupported_operation'|'unsupported_type'|'dimensions_mismatch'|'timeout'|'forbidden'|'runtime_error';
  }
  export class geo extends std_n.core.geo {
  }

  export class ti4d extends std_n.core.ti4d {
  }

  export class nodeTime extends std_n.core.nodeTime {
    static sample(refs: globalThis.Array<$sdk.std.core.nodeTime>, from: $sdk.std.core.time | null, to: $sdk.std.core.time | null, maxRows: bigint | number, mode: core.SamplingMode, maxDephasing: $sdk.std.core.duration | null, tz: core.TimeZone | null, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<core.Table> {
      return $g.call('core::nodeTime::sample', [refs, from, to, maxRows, mode, maxDephasing, tz], $signal);
    }
    static info(nodes: globalThis.Array<$sdk.std.core.nodeTime>, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<globalThis.Array<core.NodeInfo<$sdk.std.core.time>>> {
      return $g.call('core::nodeTime::info', [nodes], $signal);
    }
  }

  export class Date extends std_n.core.Date {
  }

  export class TimeZone extends $sdk.GCEnum {
    static readonly _type = 'core::TimeZone';

    constructor(type: $sdk.AbiType, offset: number, public key: TimeZone.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static Africa_Accra($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Accra'];
    }
    static Africa_Bamako($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Bamako'];
    }
    static Africa_Banjul($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Banjul'];
    }
    static Africa_Conakry($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Conakry'];
    }
    static Africa_Dakar($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Dakar'];
    }
    static Africa_Freetown($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Freetown'];
    }
    static Africa_Lome($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Lome'];
    }
    static Africa_Nouakchott($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Nouakchott'];
    }
    static Africa_Ouagadougou($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Ouagadougou'];
    }
    static Africa_Timbuktu($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Timbuktu'];
    }
    static Atlantic_Reykjavik($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Atlantic_Reykjavik'];
    }
    static Atlantic_St_Helena($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Atlantic_St_Helena'];
    }
    static Iceland($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Iceland'];
    }
    static Egypt($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Egypt'];
    }
    static Africa_Maseru($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Maseru'];
    }
    static Africa_Mbabane($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Mbabane'];
    }
    static Africa_Bangui($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Bangui'];
    }
    static Africa_Brazzaville($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Brazzaville'];
    }
    static Africa_Douala($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Douala'];
    }
    static Africa_Kinshasa($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Kinshasa'];
    }
    static Africa_Libreville($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Libreville'];
    }
    static Africa_Luanda($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Luanda'];
    }
    static Africa_Malabo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Malabo'];
    }
    static Africa_Niamey($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Niamey'];
    }
    static Africa_Porto_Novo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Porto_Novo'];
    }
    static Africa_Blantyre($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Blantyre'];
    }
    static Africa_Bujumbura($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Bujumbura'];
    }
    static Africa_Gaborone($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Gaborone'];
    }
    static Africa_Harare($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Harare'];
    }
    static Africa_Kigali($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Kigali'];
    }
    static Africa_Lubumbashi($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Lubumbashi'];
    }
    static Africa_Lusaka($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Lusaka'];
    }
    static Africa_Addis_Ababa($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Addis_Ababa'];
    }
    static Africa_Asmara($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Asmara'];
    }
    static Africa_Asmera($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Asmera'];
    }
    static Africa_Dar_es_Salaam($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Dar_es_Salaam'];
    }
    static Africa_Djibouti($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Djibouti'];
    }
    static Africa_Kampala($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Kampala'];
    }
    static Africa_Mogadishu($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Mogadishu'];
    }
    static Indian_Antananarivo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Indian_Antananarivo'];
    }
    static Indian_Comoro($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Indian_Comoro'];
    }
    static Indian_Mayotte($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Indian_Mayotte'];
    }
    static Libya($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Libya'];
    }
    static America_Atka($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Atka'];
    }
    static US_Aleutian($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['US_Aleutian'];
    }
    static US_Alaska($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['US_Alaska'];
    }
    static America_Buenos_Aires($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Buenos_Aires'];
    }
    static America_Argentina_ComodRivadavia($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Argentina_ComodRivadavia'];
    }
    static America_Catamarca($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Catamarca'];
    }
    static America_Cordoba($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Cordoba'];
    }
    static America_Rosario($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Rosario'];
    }
    static America_Jujuy($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Jujuy'];
    }
    static America_Mendoza($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Mendoza'];
    }
    static US_Central($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['US_Central'];
    }
    static America_Shiprock($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Shiprock'];
    }
    static Navajo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Navajo'];
    }
    static US_Mountain($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['US_Mountain'];
    }
    static US_Michigan($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['US_Michigan'];
    }
    static America_Yellowknife($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Yellowknife'];
    }
    static Canada_Mountain($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Canada_Mountain'];
    }
    static Canada_Atlantic($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Canada_Atlantic'];
    }
    static Cuba($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Cuba'];
    }
    static America_Fort_Wayne($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Fort_Wayne'];
    }
    static America_Indianapolis($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Indianapolis'];
    }
    static US_East_Indiana($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['US_East_Indiana'];
    }
    static America_Knox_IN($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Knox_IN'];
    }
    static US_Indiana_Starke($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['US_Indiana_Starke'];
    }
    static America_Pangnirtung($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Pangnirtung'];
    }
    static Jamaica($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Jamaica'];
    }
    static America_Louisville($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Louisville'];
    }
    static US_Pacific($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['US_Pacific'];
    }
    static Brazil_West($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Brazil_West'];
    }
    static Mexico_BajaSur($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Mexico_BajaSur'];
    }
    static Mexico_General($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Mexico_General'];
    }
    static US_Eastern($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['US_Eastern'];
    }
    static Brazil_DeNoronha($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Brazil_DeNoronha'];
    }
    static America_Godthab($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Godthab'];
    }
    static America_Atikokan($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Atikokan'];
    }
    static America_Cayman($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Cayman'];
    }
    static America_Coral_Harbour($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Coral_Harbour'];
    }
    static America_Creston($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Creston'];
    }
    static US_Arizona($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['US_Arizona'];
    }
    static America_Anguilla($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Anguilla'];
    }
    static America_Antigua($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Antigua'];
    }
    static America_Aruba($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Aruba'];
    }
    static America_Blanc_Sablon($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Blanc_Sablon'];
    }
    static America_Curacao($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Curacao'];
    }
    static America_Dominica($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Dominica'];
    }
    static America_Grenada($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Grenada'];
    }
    static America_Guadeloupe($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Guadeloupe'];
    }
    static America_Kralendijk($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Kralendijk'];
    }
    static America_Lower_Princes($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Lower_Princes'];
    }
    static America_Marigot($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Marigot'];
    }
    static America_Montserrat($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Montserrat'];
    }
    static America_Port_of_Spain($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Port_of_Spain'];
    }
    static America_St_Barthelemy($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_St_Barthelemy'];
    }
    static America_St_Kitts($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_St_Kitts'];
    }
    static America_St_Lucia($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_St_Lucia'];
    }
    static America_St_Thomas($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_St_Thomas'];
    }
    static America_St_Vincent($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_St_Vincent'];
    }
    static America_Tortola($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Tortola'];
    }
    static America_Virgin($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Virgin'];
    }
    static Canada_Saskatchewan($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Canada_Saskatchewan'];
    }
    static America_Porto_Acre($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Porto_Acre'];
    }
    static Brazil_Acre($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Brazil_Acre'];
    }
    static Chile_Continental($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Chile_Continental'];
    }
    static Brazil_East($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Brazil_East'];
    }
    static Canada_Newfoundland($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Canada_Newfoundland'];
    }
    static America_Ensenada($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Ensenada'];
    }
    static America_Santa_Isabel($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Santa_Isabel'];
    }
    static Mexico_BajaNorte($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Mexico_BajaNorte'];
    }
    static America_Montreal($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Montreal'];
    }
    static America_Nassau($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Nassau'];
    }
    static America_Nipigon($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Nipigon'];
    }
    static America_Thunder_Bay($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Thunder_Bay'];
    }
    static Canada_Eastern($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Canada_Eastern'];
    }
    static Canada_Pacific($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Canada_Pacific'];
    }
    static Canada_Yukon($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Canada_Yukon'];
    }
    static America_Rainy_River($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Rainy_River'];
    }
    static Canada_Central($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Canada_Central'];
    }
    static Asia_Ashkhabad($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Ashkhabad'];
    }
    static Asia_Phnom_Penh($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Phnom_Penh'];
    }
    static Asia_Vientiane($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Vientiane'];
    }
    static Indian_Christmas($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Indian_Christmas'];
    }
    static Asia_Dacca($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Dacca'];
    }
    static Asia_Muscat($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Muscat'];
    }
    static Indian_Mahe($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Indian_Mahe'];
    }
    static Indian_Reunion($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Indian_Reunion'];
    }
    static Asia_Saigon($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Saigon'];
    }
    static Hongkong($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Hongkong'];
    }
    static Asia_Tel_Aviv($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Tel_Aviv'];
    }
    static Israel($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Israel'];
    }
    static Asia_Katmandu($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Katmandu'];
    }
    static Asia_Calcutta($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Calcutta'];
    }
    static Asia_Brunei($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Brunei'];
    }
    static Asia_Macao($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Macao'];
    }
    static Asia_Ujung_Pandang($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Ujung_Pandang'];
    }
    static Europe_Nicosia($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Nicosia'];
    }
    static Asia_Bahrain($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Bahrain'];
    }
    static Antarctica_Syowa($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Antarctica_Syowa'];
    }
    static Asia_Aden($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Aden'];
    }
    static Asia_Kuwait($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Kuwait'];
    }
    static ROK($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['ROK'];
    }
    static Asia_Chongqing($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Chongqing'];
    }
    static Asia_Chungking($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Chungking'];
    }
    static Asia_Harbin($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Harbin'];
    }
    static PRC($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['PRC'];
    }
    static Asia_Kuala_Lumpur($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Kuala_Lumpur'];
    }
    static Singapore($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Singapore'];
    }
    static ROC($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['ROC'];
    }
    static Iran($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Iran'];
    }
    static Asia_Thimbu($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Thimbu'];
    }
    static Japan($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Japan'];
    }
    static Asia_Ulan_Bator($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Ulan_Bator'];
    }
    static Antarctica_Vostok($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Antarctica_Vostok'];
    }
    static Asia_Kashgar($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Kashgar'];
    }
    static Asia_Rangoon($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Rangoon'];
    }
    static Indian_Cocos($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Indian_Cocos'];
    }
    static Atlantic_Faeroe($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Atlantic_Faeroe'];
    }
    static Australia_South($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Australia_South'];
    }
    static Australia_Queensland($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Australia_Queensland'];
    }
    static Australia_Yancowinna($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Australia_Yancowinna'];
    }
    static Australia_North($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Australia_North'];
    }
    static Australia_Currie($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Australia_Currie'];
    }
    static Australia_Tasmania($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Australia_Tasmania'];
    }
    static Australia_LHI($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Australia_LHI'];
    }
    static Australia_Victoria($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Australia_Victoria'];
    }
    static Australia_West($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Australia_West'];
    }
    static Australia_ACT($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Australia_ACT'];
    }
    static Australia_Canberra($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Australia_Canberra'];
    }
    static Australia_NSW($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Australia_NSW'];
    }
    static GMT($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['GMT'];
    }
    static GMTx0($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['GMTx0'];
    }
    static GMT_0($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['GMT_0'];
    }
    static GMT0($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['GMT0'];
    }
    static Greenwich($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Greenwich'];
    }
    static UCT($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['UCT'];
    }
    static UTC($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['UTC'];
    }
    static Universal($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Universal'];
    }
    static Zulu($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Zulu'];
    }
    static Europe_Ljubljana($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Ljubljana'];
    }
    static Europe_Podgorica($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Podgorica'];
    }
    static Europe_Sarajevo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Sarajevo'];
    }
    static Europe_Skopje($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Skopje'];
    }
    static Europe_Zagreb($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Zagreb'];
    }
    static Arctic_Longyearbyen($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Arctic_Longyearbyen'];
    }
    static Atlantic_Jan_Mayen($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Atlantic_Jan_Mayen'];
    }
    static Europe_Copenhagen($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Copenhagen'];
    }
    static Europe_Oslo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Oslo'];
    }
    static Europe_Stockholm($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Stockholm'];
    }
    static Europe_Amsterdam($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Amsterdam'];
    }
    static Europe_Luxembourg($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Luxembourg'];
    }
    static Europe_Tiraspol($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Tiraspol'];
    }
    static Eire($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Eire'];
    }
    static Europe_Mariehamn($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Mariehamn'];
    }
    static Asia_Istanbul($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Istanbul'];
    }
    static Turkey($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Turkey'];
    }
    static Europe_Kiev($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Kiev'];
    }
    static Europe_Uzhgorod($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Uzhgorod'];
    }
    static Europe_Zaporozhye($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Zaporozhye'];
    }
    static Portugal($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Portugal'];
    }
    static Europe_Belfast($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Belfast'];
    }
    static Europe_Guernsey($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Guernsey'];
    }
    static Europe_Isle_of_Man($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Isle_of_Man'];
    }
    static Europe_Jersey($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Jersey'];
    }
    static GB($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['GB'];
    }
    static GB_Eire($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['GB_Eire'];
    }
    static W_SU($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['W_SU'];
    }
    static Europe_Monaco($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Monaco'];
    }
    static Europe_Bratislava($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Bratislava'];
    }
    static Europe_San_Marino($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_San_Marino'];
    }
    static Europe_Vatican($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Vatican'];
    }
    static Poland($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Poland'];
    }
    static Europe_Busingen($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Busingen'];
    }
    static Europe_Vaduz($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Vaduz'];
    }
    static Indian_Kerguelen($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Indian_Kerguelen'];
    }
    static Antarctica_McMurdo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Antarctica_McMurdo'];
    }
    static Antarctica_South_Pole($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Antarctica_South_Pole'];
    }
    static NZ($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['NZ'];
    }
    static NZ_CHAT($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['NZ_CHAT'];
    }
    static Chile_EasterIsland($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Chile_EasterIsland'];
    }
    static Pacific_Pohnpei($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Pohnpei'];
    }
    static Pacific_Ponape($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Ponape'];
    }
    static Pacific_Saipan($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Saipan'];
    }
    static Pacific_Johnston($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Johnston'];
    }
    static US_Hawaii($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['US_Hawaii'];
    }
    static Pacific_Enderbury($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Enderbury'];
    }
    static Kwajalein($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Kwajalein'];
    }
    static Pacific_Midway($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Midway'];
    }
    static Pacific_Samoa($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Samoa'];
    }
    static US_Samoa($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['US_Samoa'];
    }
    static Antarctica_DumontDUrville($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Antarctica_DumontDUrville'];
    }
    static Pacific_Chuuk($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Chuuk'];
    }
    static Pacific_Truk($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Truk'];
    }
    static Pacific_Yap($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Yap'];
    }
    static Pacific_Funafuti($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Funafuti'];
    }
    static Pacific_Majuro($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Majuro'];
    }
    static Pacific_Wake($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Wake'];
    }
    static Pacific_Wallis($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Wallis'];
    }
    static Africa_Abidjan($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Abidjan'];
    }
    static Africa_Algiers($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Algiers'];
    }
    static Africa_Bissau($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Bissau'];
    }
    static Africa_Cairo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Cairo'];
    }
    static Africa_Casablanca($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Casablanca'];
    }
    static Africa_Ceuta($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Ceuta'];
    }
    static Africa_El_Aaiun($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_El_Aaiun'];
    }
    static Africa_Johannesburg($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Johannesburg'];
    }
    static Africa_Juba($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Juba'];
    }
    static Africa_Khartoum($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Khartoum'];
    }
    static Africa_Lagos($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Lagos'];
    }
    static Africa_Maputo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Maputo'];
    }
    static Africa_Monrovia($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Monrovia'];
    }
    static Africa_Nairobi($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Nairobi'];
    }
    static Africa_Ndjamena($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Ndjamena'];
    }
    static Africa_Sao_Tome($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Sao_Tome'];
    }
    static Africa_Tripoli($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Tripoli'];
    }
    static Africa_Tunis($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Tunis'];
    }
    static Africa_Windhoek($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Africa_Windhoek'];
    }
    static America_Adak($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Adak'];
    }
    static America_Anchorage($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Anchorage'];
    }
    static America_Araguaina($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Araguaina'];
    }
    static America_Argentina_Buenos_Aires($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Argentina_Buenos_Aires'];
    }
    static America_Argentina_Catamarca($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Argentina_Catamarca'];
    }
    static America_Argentina_Cordoba($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Argentina_Cordoba'];
    }
    static America_Argentina_Jujuy($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Argentina_Jujuy'];
    }
    static America_Argentina_La_Rioja($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Argentina_La_Rioja'];
    }
    static America_Argentina_Mendoza($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Argentina_Mendoza'];
    }
    static America_Argentina_Rio_Gallegos($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Argentina_Rio_Gallegos'];
    }
    static America_Argentina_Salta($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Argentina_Salta'];
    }
    static America_Argentina_San_Juan($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Argentina_San_Juan'];
    }
    static America_Argentina_San_Luis($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Argentina_San_Luis'];
    }
    static America_Argentina_Tucuman($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Argentina_Tucuman'];
    }
    static America_Argentina_Ushuaia($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Argentina_Ushuaia'];
    }
    static America_Asuncion($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Asuncion'];
    }
    static America_Bahia($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Bahia'];
    }
    static America_Bahia_Banderas($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Bahia_Banderas'];
    }
    static America_Barbados($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Barbados'];
    }
    static America_Belem($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Belem'];
    }
    static America_Belize($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Belize'];
    }
    static America_Boa_Vista($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Boa_Vista'];
    }
    static America_Bogota($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Bogota'];
    }
    static America_Boise($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Boise'];
    }
    static America_Cambridge_Bay($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Cambridge_Bay'];
    }
    static America_Campo_Grande($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Campo_Grande'];
    }
    static America_Cancun($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Cancun'];
    }
    static America_Caracas($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Caracas'];
    }
    static America_Cayenne($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Cayenne'];
    }
    static America_Chicago($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Chicago'];
    }
    static America_Chihuahua($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Chihuahua'];
    }
    static America_Ciudad_Juarez($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Ciudad_Juarez'];
    }
    static America_Costa_Rica($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Costa_Rica'];
    }
    static America_Cuiaba($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Cuiaba'];
    }
    static America_Danmarkshavn($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Danmarkshavn'];
    }
    static America_Dawson($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Dawson'];
    }
    static America_Dawson_Creek($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Dawson_Creek'];
    }
    static America_Denver($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Denver'];
    }
    static America_Detroit($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Detroit'];
    }
    static America_Edmonton($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Edmonton'];
    }
    static America_Eirunepe($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Eirunepe'];
    }
    static America_El_Salvador($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_El_Salvador'];
    }
    static America_Fort_Nelson($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Fort_Nelson'];
    }
    static America_Fortaleza($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Fortaleza'];
    }
    static America_Glace_Bay($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Glace_Bay'];
    }
    static America_Goose_Bay($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Goose_Bay'];
    }
    static America_Grand_Turk($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Grand_Turk'];
    }
    static America_Guatemala($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Guatemala'];
    }
    static America_Guayaquil($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Guayaquil'];
    }
    static America_Guyana($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Guyana'];
    }
    static America_Halifax($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Halifax'];
    }
    static America_Havana($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Havana'];
    }
    static America_Hermosillo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Hermosillo'];
    }
    static America_Indiana_Indianapolis($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Indiana_Indianapolis'];
    }
    static America_Indiana_Knox($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Indiana_Knox'];
    }
    static America_Indiana_Marengo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Indiana_Marengo'];
    }
    static America_Indiana_Petersburg($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Indiana_Petersburg'];
    }
    static America_Indiana_Tell_City($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Indiana_Tell_City'];
    }
    static America_Indiana_Vevay($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Indiana_Vevay'];
    }
    static America_Indiana_Vincennes($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Indiana_Vincennes'];
    }
    static America_Indiana_Winamac($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Indiana_Winamac'];
    }
    static America_Inuvik($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Inuvik'];
    }
    static America_Iqaluit($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Iqaluit'];
    }
    static America_Jamaica($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Jamaica'];
    }
    static America_Juneau($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Juneau'];
    }
    static America_Kentucky_Louisville($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Kentucky_Louisville'];
    }
    static America_Kentucky_Monticello($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Kentucky_Monticello'];
    }
    static America_La_Paz($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_La_Paz'];
    }
    static America_Lima($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Lima'];
    }
    static America_Los_Angeles($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Los_Angeles'];
    }
    static America_Maceio($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Maceio'];
    }
    static America_Managua($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Managua'];
    }
    static America_Manaus($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Manaus'];
    }
    static America_Martinique($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Martinique'];
    }
    static America_Matamoros($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Matamoros'];
    }
    static America_Mazatlan($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Mazatlan'];
    }
    static America_Menominee($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Menominee'];
    }
    static America_Merida($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Merida'];
    }
    static America_Metlakatla($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Metlakatla'];
    }
    static America_Mexico_City($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Mexico_City'];
    }
    static America_Miquelon($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Miquelon'];
    }
    static America_Moncton($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Moncton'];
    }
    static America_Monterrey($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Monterrey'];
    }
    static America_Montevideo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Montevideo'];
    }
    static America_New_York($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_New_York'];
    }
    static America_Nome($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Nome'];
    }
    static America_Noronha($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Noronha'];
    }
    static America_North_Dakota_Beulah($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_North_Dakota_Beulah'];
    }
    static America_North_Dakota_Center($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_North_Dakota_Center'];
    }
    static America_North_Dakota_New_Salem($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_North_Dakota_New_Salem'];
    }
    static America_Nuuk($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Nuuk'];
    }
    static America_Ojinaga($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Ojinaga'];
    }
    static America_Panama($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Panama'];
    }
    static America_Paramaribo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Paramaribo'];
    }
    static America_Phoenix($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Phoenix'];
    }
    static America_Port_au_Prince($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Port_au_Prince'];
    }
    static America_Porto_Velho($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Porto_Velho'];
    }
    static America_Puerto_Rico($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Puerto_Rico'];
    }
    static America_Punta_Arenas($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Punta_Arenas'];
    }
    static America_Rankin_Inlet($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Rankin_Inlet'];
    }
    static America_Recife($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Recife'];
    }
    static America_Regina($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Regina'];
    }
    static America_Resolute($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Resolute'];
    }
    static America_Rio_Branco($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Rio_Branco'];
    }
    static America_Santarem($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Santarem'];
    }
    static America_Santiago($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Santiago'];
    }
    static America_Santo_Domingo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Santo_Domingo'];
    }
    static America_Sao_Paulo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Sao_Paulo'];
    }
    static America_Scoresbysund($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Scoresbysund'];
    }
    static America_Sitka($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Sitka'];
    }
    static America_St_Johns($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_St_Johns'];
    }
    static America_Swift_Current($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Swift_Current'];
    }
    static America_Tegucigalpa($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Tegucigalpa'];
    }
    static America_Thule($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Thule'];
    }
    static America_Tijuana($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Tijuana'];
    }
    static America_Toronto($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Toronto'];
    }
    static America_Vancouver($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Vancouver'];
    }
    static America_Whitehorse($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Whitehorse'];
    }
    static America_Winnipeg($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Winnipeg'];
    }
    static America_Yakutat($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['America_Yakutat'];
    }
    static Antarctica_Casey($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Antarctica_Casey'];
    }
    static Antarctica_Davis($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Antarctica_Davis'];
    }
    static Antarctica_Macquarie($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Antarctica_Macquarie'];
    }
    static Antarctica_Mawson($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Antarctica_Mawson'];
    }
    static Antarctica_Palmer($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Antarctica_Palmer'];
    }
    static Antarctica_Rothera($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Antarctica_Rothera'];
    }
    static Antarctica_Troll($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Antarctica_Troll'];
    }
    static Asia_Almaty($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Almaty'];
    }
    static Asia_Amman($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Amman'];
    }
    static Asia_Anadyr($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Anadyr'];
    }
    static Asia_Aqtau($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Aqtau'];
    }
    static Asia_Aqtobe($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Aqtobe'];
    }
    static Asia_Ashgabat($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Ashgabat'];
    }
    static Asia_Atyrau($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Atyrau'];
    }
    static Asia_Baghdad($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Baghdad'];
    }
    static Asia_Baku($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Baku'];
    }
    static Asia_Bangkok($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Bangkok'];
    }
    static Asia_Barnaul($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Barnaul'];
    }
    static Asia_Beirut($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Beirut'];
    }
    static Asia_Bishkek($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Bishkek'];
    }
    static Asia_Chita($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Chita'];
    }
    static Asia_Choibalsan($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Choibalsan'];
    }
    static Asia_Colombo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Colombo'];
    }
    static Asia_Damascus($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Damascus'];
    }
    static Asia_Dhaka($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Dhaka'];
    }
    static Asia_Dili($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Dili'];
    }
    static Asia_Dubai($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Dubai'];
    }
    static Asia_Dushanbe($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Dushanbe'];
    }
    static Asia_Famagusta($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Famagusta'];
    }
    static Asia_Gaza($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Gaza'];
    }
    static Asia_Hebron($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Hebron'];
    }
    static Asia_Ho_Chi_Minh($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Ho_Chi_Minh'];
    }
    static Asia_Hong_Kong($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Hong_Kong'];
    }
    static Asia_Hovd($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Hovd'];
    }
    static Asia_Irkutsk($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Irkutsk'];
    }
    static Asia_Jakarta($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Jakarta'];
    }
    static Asia_Jayapura($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Jayapura'];
    }
    static Asia_Jerusalem($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Jerusalem'];
    }
    static Asia_Kabul($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Kabul'];
    }
    static Asia_Kamchatka($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Kamchatka'];
    }
    static Asia_Karachi($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Karachi'];
    }
    static Asia_Kathmandu($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Kathmandu'];
    }
    static Asia_Khandyga($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Khandyga'];
    }
    static Asia_Kolkata($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Kolkata'];
    }
    static Asia_Krasnoyarsk($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Krasnoyarsk'];
    }
    static Asia_Kuching($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Kuching'];
    }
    static Asia_Macau($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Macau'];
    }
    static Asia_Magadan($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Magadan'];
    }
    static Asia_Makassar($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Makassar'];
    }
    static Asia_Manila($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Manila'];
    }
    static Asia_Nicosia($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Nicosia'];
    }
    static Asia_Novokuznetsk($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Novokuznetsk'];
    }
    static Asia_Novosibirsk($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Novosibirsk'];
    }
    static Asia_Omsk($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Omsk'];
    }
    static Asia_Oral($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Oral'];
    }
    static Asia_Pontianak($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Pontianak'];
    }
    static Asia_Pyongyang($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Pyongyang'];
    }
    static Asia_Qatar($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Qatar'];
    }
    static Asia_Qostanay($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Qostanay'];
    }
    static Asia_Qyzylorda($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Qyzylorda'];
    }
    static Asia_Riyadh($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Riyadh'];
    }
    static Asia_Sakhalin($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Sakhalin'];
    }
    static Asia_Samarkand($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Samarkand'];
    }
    static Asia_Seoul($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Seoul'];
    }
    static Asia_Shanghai($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Shanghai'];
    }
    static Asia_Singapore($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Singapore'];
    }
    static Asia_Srednekolymsk($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Srednekolymsk'];
    }
    static Asia_Taipei($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Taipei'];
    }
    static Asia_Tashkent($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Tashkent'];
    }
    static Asia_Tbilisi($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Tbilisi'];
    }
    static Asia_Tehran($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Tehran'];
    }
    static Asia_Thimphu($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Thimphu'];
    }
    static Asia_Tokyo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Tokyo'];
    }
    static Asia_Tomsk($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Tomsk'];
    }
    static Asia_Ulaanbaatar($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Ulaanbaatar'];
    }
    static Asia_Urumqi($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Urumqi'];
    }
    static Asia_Ust_Nera($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Ust_Nera'];
    }
    static Asia_Vladivostok($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Vladivostok'];
    }
    static Asia_Yakutsk($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Yakutsk'];
    }
    static Asia_Yangon($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Yangon'];
    }
    static Asia_Yekaterinburg($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Yekaterinburg'];
    }
    static Asia_Yerevan($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Asia_Yerevan'];
    }
    static Atlantic_Azores($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Atlantic_Azores'];
    }
    static Atlantic_Bermuda($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Atlantic_Bermuda'];
    }
    static Atlantic_Canary($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Atlantic_Canary'];
    }
    static Atlantic_Cape_Verde($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Atlantic_Cape_Verde'];
    }
    static Atlantic_Faroe($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Atlantic_Faroe'];
    }
    static Atlantic_Madeira($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Atlantic_Madeira'];
    }
    static Atlantic_South_Georgia($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Atlantic_South_Georgia'];
    }
    static Atlantic_Stanley($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Atlantic_Stanley'];
    }
    static Australia_Adelaide($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Australia_Adelaide'];
    }
    static Australia_Brisbane($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Australia_Brisbane'];
    }
    static Australia_Broken_Hill($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Australia_Broken_Hill'];
    }
    static Australia_Darwin($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Australia_Darwin'];
    }
    static Australia_Eucla($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Australia_Eucla'];
    }
    static Australia_Hobart($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Australia_Hobart'];
    }
    static Australia_Lindeman($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Australia_Lindeman'];
    }
    static Australia_Lord_Howe($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Australia_Lord_Howe'];
    }
    static Australia_Melbourne($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Australia_Melbourne'];
    }
    static Australia_Perth($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Australia_Perth'];
    }
    static Australia_Sydney($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Australia_Sydney'];
    }
    static CET($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['CET'];
    }
    static CST6CDT($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['CST6CDT'];
    }
    static EET($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['EET'];
    }
    static EST($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['EST'];
    }
    static EST5EDT($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['EST5EDT'];
    }
    static Europe_Andorra($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Andorra'];
    }
    static Europe_Astrakhan($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Astrakhan'];
    }
    static Europe_Athens($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Athens'];
    }
    static Europe_Belgrade($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Belgrade'];
    }
    static Europe_Berlin($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Berlin'];
    }
    static Europe_Brussels($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Brussels'];
    }
    static Europe_Bucharest($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Bucharest'];
    }
    static Europe_Budapest($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Budapest'];
    }
    static Europe_Chisinau($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Chisinau'];
    }
    static Europe_Dublin($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Dublin'];
    }
    static Europe_Gibraltar($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Gibraltar'];
    }
    static Europe_Helsinki($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Helsinki'];
    }
    static Europe_Istanbul($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Istanbul'];
    }
    static Europe_Kaliningrad($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Kaliningrad'];
    }
    static Europe_Kirov($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Kirov'];
    }
    static Europe_Kyiv($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Kyiv'];
    }
    static Europe_Lisbon($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Lisbon'];
    }
    static Europe_London($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_London'];
    }
    static Europe_Madrid($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Madrid'];
    }
    static Europe_Malta($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Malta'];
    }
    static Europe_Minsk($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Minsk'];
    }
    static Europe_Moscow($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Moscow'];
    }
    static Europe_Paris($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Paris'];
    }
    static Europe_Prague($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Prague'];
    }
    static Europe_Riga($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Riga'];
    }
    static Europe_Rome($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Rome'];
    }
    static Europe_Samara($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Samara'];
    }
    static Europe_Saratov($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Saratov'];
    }
    static Europe_Simferopol($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Simferopol'];
    }
    static Europe_Sofia($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Sofia'];
    }
    static Europe_Tallinn($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Tallinn'];
    }
    static Europe_Tirane($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Tirane'];
    }
    static Europe_Ulyanovsk($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Ulyanovsk'];
    }
    static Europe_Vienna($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Vienna'];
    }
    static Europe_Vilnius($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Vilnius'];
    }
    static Europe_Volgograd($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Volgograd'];
    }
    static Europe_Warsaw($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Warsaw'];
    }
    static Europe_Zurich($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Europe_Zurich'];
    }
    static Factory($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Factory'];
    }
    static HST($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['HST'];
    }
    static Indian_Chagos($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Indian_Chagos'];
    }
    static Indian_Maldives($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Indian_Maldives'];
    }
    static Indian_Mauritius($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Indian_Mauritius'];
    }
    static MET($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['MET'];
    }
    static MST($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['MST'];
    }
    static MST7MDT($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['MST7MDT'];
    }
    static PST8PDT($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['PST8PDT'];
    }
    static Pacific_Apia($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Apia'];
    }
    static Pacific_Auckland($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Auckland'];
    }
    static Pacific_Bougainville($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Bougainville'];
    }
    static Pacific_Chatham($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Chatham'];
    }
    static Pacific_Easter($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Easter'];
    }
    static Pacific_Efate($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Efate'];
    }
    static Pacific_Fakaofo($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Fakaofo'];
    }
    static Pacific_Fiji($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Fiji'];
    }
    static Pacific_Galapagos($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Galapagos'];
    }
    static Pacific_Gambier($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Gambier'];
    }
    static Pacific_Guadalcanal($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Guadalcanal'];
    }
    static Pacific_Guam($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Guam'];
    }
    static Pacific_Honolulu($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Honolulu'];
    }
    static Pacific_Kanton($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Kanton'];
    }
    static Pacific_Kiritimati($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Kiritimati'];
    }
    static Pacific_Kosrae($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Kosrae'];
    }
    static Pacific_Kwajalein($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Kwajalein'];
    }
    static Pacific_Marquesas($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Marquesas'];
    }
    static Pacific_Nauru($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Nauru'];
    }
    static Pacific_Niue($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Niue'];
    }
    static Pacific_Norfolk($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Norfolk'];
    }
    static Pacific_Noumea($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Noumea'];
    }
    static Pacific_Pago_Pago($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Pago_Pago'];
    }
    static Pacific_Palau($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Palau'];
    }
    static Pacific_Pitcairn($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Pitcairn'];
    }
    static Pacific_Port_Moresby($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Port_Moresby'];
    }
    static Pacific_Rarotonga($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Rarotonga'];
    }
    static Pacific_Tahiti($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Tahiti'];
    }
    static Pacific_Tarawa($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Tarawa'];
    }
    static Pacific_Tongatapu($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['Pacific_Tongatapu'];
    }
    static WET($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.static_values['WET'];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): TimeZone[] {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[9];
      return t.enum_values!;
    }
  }

  export namespace TimeZone  {
    export type Field = 'Africa_Accra'|'Africa_Bamako'|'Africa_Banjul'|'Africa_Conakry'|'Africa_Dakar'|'Africa_Freetown'|'Africa_Lome'|'Africa_Nouakchott'|'Africa_Ouagadougou'|'Africa_Timbuktu'|'Atlantic_Reykjavik'|'Atlantic_St_Helena'|'Iceland'|'Egypt'|'Africa_Maseru'|'Africa_Mbabane'|'Africa_Bangui'|'Africa_Brazzaville'|'Africa_Douala'|'Africa_Kinshasa'|'Africa_Libreville'|'Africa_Luanda'|'Africa_Malabo'|'Africa_Niamey'|'Africa_Porto_Novo'|'Africa_Blantyre'|'Africa_Bujumbura'|'Africa_Gaborone'|'Africa_Harare'|'Africa_Kigali'|'Africa_Lubumbashi'|'Africa_Lusaka'|'Africa_Addis_Ababa'|'Africa_Asmara'|'Africa_Asmera'|'Africa_Dar_es_Salaam'|'Africa_Djibouti'|'Africa_Kampala'|'Africa_Mogadishu'|'Indian_Antananarivo'|'Indian_Comoro'|'Indian_Mayotte'|'Libya'|'America_Atka'|'US_Aleutian'|'US_Alaska'|'America_Buenos_Aires'|'America_Argentina_ComodRivadavia'|'America_Catamarca'|'America_Cordoba'|'America_Rosario'|'America_Jujuy'|'America_Mendoza'|'US_Central'|'America_Shiprock'|'Navajo'|'US_Mountain'|'US_Michigan'|'America_Yellowknife'|'Canada_Mountain'|'Canada_Atlantic'|'Cuba'|'America_Fort_Wayne'|'America_Indianapolis'|'US_East_Indiana'|'America_Knox_IN'|'US_Indiana_Starke'|'America_Pangnirtung'|'Jamaica'|'America_Louisville'|'US_Pacific'|'Brazil_West'|'Mexico_BajaSur'|'Mexico_General'|'US_Eastern'|'Brazil_DeNoronha'|'America_Godthab'|'America_Atikokan'|'America_Cayman'|'America_Coral_Harbour'|'America_Creston'|'US_Arizona'|'America_Anguilla'|'America_Antigua'|'America_Aruba'|'America_Blanc_Sablon'|'America_Curacao'|'America_Dominica'|'America_Grenada'|'America_Guadeloupe'|'America_Kralendijk'|'America_Lower_Princes'|'America_Marigot'|'America_Montserrat'|'America_Port_of_Spain'|'America_St_Barthelemy'|'America_St_Kitts'|'America_St_Lucia'|'America_St_Thomas'|'America_St_Vincent'|'America_Tortola'|'America_Virgin'|'Canada_Saskatchewan'|'America_Porto_Acre'|'Brazil_Acre'|'Chile_Continental'|'Brazil_East'|'Canada_Newfoundland'|'America_Ensenada'|'America_Santa_Isabel'|'Mexico_BajaNorte'|'America_Montreal'|'America_Nassau'|'America_Nipigon'|'America_Thunder_Bay'|'Canada_Eastern'|'Canada_Pacific'|'Canada_Yukon'|'America_Rainy_River'|'Canada_Central'|'Asia_Ashkhabad'|'Asia_Phnom_Penh'|'Asia_Vientiane'|'Indian_Christmas'|'Asia_Dacca'|'Asia_Muscat'|'Indian_Mahe'|'Indian_Reunion'|'Asia_Saigon'|'Hongkong'|'Asia_Tel_Aviv'|'Israel'|'Asia_Katmandu'|'Asia_Calcutta'|'Asia_Brunei'|'Asia_Macao'|'Asia_Ujung_Pandang'|'Europe_Nicosia'|'Asia_Bahrain'|'Antarctica_Syowa'|'Asia_Aden'|'Asia_Kuwait'|'ROK'|'Asia_Chongqing'|'Asia_Chungking'|'Asia_Harbin'|'PRC'|'Asia_Kuala_Lumpur'|'Singapore'|'ROC'|'Iran'|'Asia_Thimbu'|'Japan'|'Asia_Ulan_Bator'|'Antarctica_Vostok'|'Asia_Kashgar'|'Asia_Rangoon'|'Indian_Cocos'|'Atlantic_Faeroe'|'Australia_South'|'Australia_Queensland'|'Australia_Yancowinna'|'Australia_North'|'Australia_Currie'|'Australia_Tasmania'|'Australia_LHI'|'Australia_Victoria'|'Australia_West'|'Australia_ACT'|'Australia_Canberra'|'Australia_NSW'|'GMT'|'GMTx0'|'GMT_0'|'GMT0'|'Greenwich'|'UCT'|'UTC'|'Universal'|'Zulu'|'Europe_Ljubljana'|'Europe_Podgorica'|'Europe_Sarajevo'|'Europe_Skopje'|'Europe_Zagreb'|'Arctic_Longyearbyen'|'Atlantic_Jan_Mayen'|'Europe_Copenhagen'|'Europe_Oslo'|'Europe_Stockholm'|'Europe_Amsterdam'|'Europe_Luxembourg'|'Europe_Tiraspol'|'Eire'|'Europe_Mariehamn'|'Asia_Istanbul'|'Turkey'|'Europe_Kiev'|'Europe_Uzhgorod'|'Europe_Zaporozhye'|'Portugal'|'Europe_Belfast'|'Europe_Guernsey'|'Europe_Isle_of_Man'|'Europe_Jersey'|'GB'|'GB_Eire'|'W_SU'|'Europe_Monaco'|'Europe_Bratislava'|'Europe_San_Marino'|'Europe_Vatican'|'Poland'|'Europe_Busingen'|'Europe_Vaduz'|'Indian_Kerguelen'|'Antarctica_McMurdo'|'Antarctica_South_Pole'|'NZ'|'NZ_CHAT'|'Chile_EasterIsland'|'Pacific_Pohnpei'|'Pacific_Ponape'|'Pacific_Saipan'|'Pacific_Johnston'|'US_Hawaii'|'Pacific_Enderbury'|'Kwajalein'|'Pacific_Midway'|'Pacific_Samoa'|'US_Samoa'|'Antarctica_DumontDUrville'|'Pacific_Chuuk'|'Pacific_Truk'|'Pacific_Yap'|'Pacific_Funafuti'|'Pacific_Majuro'|'Pacific_Wake'|'Pacific_Wallis'|'Africa_Abidjan'|'Africa_Algiers'|'Africa_Bissau'|'Africa_Cairo'|'Africa_Casablanca'|'Africa_Ceuta'|'Africa_El_Aaiun'|'Africa_Johannesburg'|'Africa_Juba'|'Africa_Khartoum'|'Africa_Lagos'|'Africa_Maputo'|'Africa_Monrovia'|'Africa_Nairobi'|'Africa_Ndjamena'|'Africa_Sao_Tome'|'Africa_Tripoli'|'Africa_Tunis'|'Africa_Windhoek'|'America_Adak'|'America_Anchorage'|'America_Araguaina'|'America_Argentina_Buenos_Aires'|'America_Argentina_Catamarca'|'America_Argentina_Cordoba'|'America_Argentina_Jujuy'|'America_Argentina_La_Rioja'|'America_Argentina_Mendoza'|'America_Argentina_Rio_Gallegos'|'America_Argentina_Salta'|'America_Argentina_San_Juan'|'America_Argentina_San_Luis'|'America_Argentina_Tucuman'|'America_Argentina_Ushuaia'|'America_Asuncion'|'America_Bahia'|'America_Bahia_Banderas'|'America_Barbados'|'America_Belem'|'America_Belize'|'America_Boa_Vista'|'America_Bogota'|'America_Boise'|'America_Cambridge_Bay'|'America_Campo_Grande'|'America_Cancun'|'America_Caracas'|'America_Cayenne'|'America_Chicago'|'America_Chihuahua'|'America_Ciudad_Juarez'|'America_Costa_Rica'|'America_Cuiaba'|'America_Danmarkshavn'|'America_Dawson'|'America_Dawson_Creek'|'America_Denver'|'America_Detroit'|'America_Edmonton'|'America_Eirunepe'|'America_El_Salvador'|'America_Fort_Nelson'|'America_Fortaleza'|'America_Glace_Bay'|'America_Goose_Bay'|'America_Grand_Turk'|'America_Guatemala'|'America_Guayaquil'|'America_Guyana'|'America_Halifax'|'America_Havana'|'America_Hermosillo'|'America_Indiana_Indianapolis'|'America_Indiana_Knox'|'America_Indiana_Marengo'|'America_Indiana_Petersburg'|'America_Indiana_Tell_City'|'America_Indiana_Vevay'|'America_Indiana_Vincennes'|'America_Indiana_Winamac'|'America_Inuvik'|'America_Iqaluit'|'America_Jamaica'|'America_Juneau'|'America_Kentucky_Louisville'|'America_Kentucky_Monticello'|'America_La_Paz'|'America_Lima'|'America_Los_Angeles'|'America_Maceio'|'America_Managua'|'America_Manaus'|'America_Martinique'|'America_Matamoros'|'America_Mazatlan'|'America_Menominee'|'America_Merida'|'America_Metlakatla'|'America_Mexico_City'|'America_Miquelon'|'America_Moncton'|'America_Monterrey'|'America_Montevideo'|'America_New_York'|'America_Nome'|'America_Noronha'|'America_North_Dakota_Beulah'|'America_North_Dakota_Center'|'America_North_Dakota_New_Salem'|'America_Nuuk'|'America_Ojinaga'|'America_Panama'|'America_Paramaribo'|'America_Phoenix'|'America_Port_au_Prince'|'America_Porto_Velho'|'America_Puerto_Rico'|'America_Punta_Arenas'|'America_Rankin_Inlet'|'America_Recife'|'America_Regina'|'America_Resolute'|'America_Rio_Branco'|'America_Santarem'|'America_Santiago'|'America_Santo_Domingo'|'America_Sao_Paulo'|'America_Scoresbysund'|'America_Sitka'|'America_St_Johns'|'America_Swift_Current'|'America_Tegucigalpa'|'America_Thule'|'America_Tijuana'|'America_Toronto'|'America_Vancouver'|'America_Whitehorse'|'America_Winnipeg'|'America_Yakutat'|'Antarctica_Casey'|'Antarctica_Davis'|'Antarctica_Macquarie'|'Antarctica_Mawson'|'Antarctica_Palmer'|'Antarctica_Rothera'|'Antarctica_Troll'|'Asia_Almaty'|'Asia_Amman'|'Asia_Anadyr'|'Asia_Aqtau'|'Asia_Aqtobe'|'Asia_Ashgabat'|'Asia_Atyrau'|'Asia_Baghdad'|'Asia_Baku'|'Asia_Bangkok'|'Asia_Barnaul'|'Asia_Beirut'|'Asia_Bishkek'|'Asia_Chita'|'Asia_Choibalsan'|'Asia_Colombo'|'Asia_Damascus'|'Asia_Dhaka'|'Asia_Dili'|'Asia_Dubai'|'Asia_Dushanbe'|'Asia_Famagusta'|'Asia_Gaza'|'Asia_Hebron'|'Asia_Ho_Chi_Minh'|'Asia_Hong_Kong'|'Asia_Hovd'|'Asia_Irkutsk'|'Asia_Jakarta'|'Asia_Jayapura'|'Asia_Jerusalem'|'Asia_Kabul'|'Asia_Kamchatka'|'Asia_Karachi'|'Asia_Kathmandu'|'Asia_Khandyga'|'Asia_Kolkata'|'Asia_Krasnoyarsk'|'Asia_Kuching'|'Asia_Macau'|'Asia_Magadan'|'Asia_Makassar'|'Asia_Manila'|'Asia_Nicosia'|'Asia_Novokuznetsk'|'Asia_Novosibirsk'|'Asia_Omsk'|'Asia_Oral'|'Asia_Pontianak'|'Asia_Pyongyang'|'Asia_Qatar'|'Asia_Qostanay'|'Asia_Qyzylorda'|'Asia_Riyadh'|'Asia_Sakhalin'|'Asia_Samarkand'|'Asia_Seoul'|'Asia_Shanghai'|'Asia_Singapore'|'Asia_Srednekolymsk'|'Asia_Taipei'|'Asia_Tashkent'|'Asia_Tbilisi'|'Asia_Tehran'|'Asia_Thimphu'|'Asia_Tokyo'|'Asia_Tomsk'|'Asia_Ulaanbaatar'|'Asia_Urumqi'|'Asia_Ust_Nera'|'Asia_Vladivostok'|'Asia_Yakutsk'|'Asia_Yangon'|'Asia_Yekaterinburg'|'Asia_Yerevan'|'Atlantic_Azores'|'Atlantic_Bermuda'|'Atlantic_Canary'|'Atlantic_Cape_Verde'|'Atlantic_Faroe'|'Atlantic_Madeira'|'Atlantic_South_Georgia'|'Atlantic_Stanley'|'Australia_Adelaide'|'Australia_Brisbane'|'Australia_Broken_Hill'|'Australia_Darwin'|'Australia_Eucla'|'Australia_Hobart'|'Australia_Lindeman'|'Australia_Lord_Howe'|'Australia_Melbourne'|'Australia_Perth'|'Australia_Sydney'|'CET'|'CST6CDT'|'EET'|'EST'|'EST5EDT'|'Europe_Andorra'|'Europe_Astrakhan'|'Europe_Athens'|'Europe_Belgrade'|'Europe_Berlin'|'Europe_Brussels'|'Europe_Bucharest'|'Europe_Budapest'|'Europe_Chisinau'|'Europe_Dublin'|'Europe_Gibraltar'|'Europe_Helsinki'|'Europe_Istanbul'|'Europe_Kaliningrad'|'Europe_Kirov'|'Europe_Kyiv'|'Europe_Lisbon'|'Europe_London'|'Europe_Madrid'|'Europe_Malta'|'Europe_Minsk'|'Europe_Moscow'|'Europe_Paris'|'Europe_Prague'|'Europe_Riga'|'Europe_Rome'|'Europe_Samara'|'Europe_Saratov'|'Europe_Simferopol'|'Europe_Sofia'|'Europe_Tallinn'|'Europe_Tirane'|'Europe_Ulyanovsk'|'Europe_Vienna'|'Europe_Vilnius'|'Europe_Volgograd'|'Europe_Warsaw'|'Europe_Zurich'|'Factory'|'HST'|'Indian_Chagos'|'Indian_Maldives'|'Indian_Mauritius'|'MET'|'MST'|'MST7MDT'|'PST8PDT'|'Pacific_Apia'|'Pacific_Auckland'|'Pacific_Bougainville'|'Pacific_Chatham'|'Pacific_Easter'|'Pacific_Efate'|'Pacific_Fakaofo'|'Pacific_Fiji'|'Pacific_Galapagos'|'Pacific_Gambier'|'Pacific_Guadalcanal'|'Pacific_Guam'|'Pacific_Honolulu'|'Pacific_Kanton'|'Pacific_Kiritimati'|'Pacific_Kosrae'|'Pacific_Kwajalein'|'Pacific_Marquesas'|'Pacific_Nauru'|'Pacific_Niue'|'Pacific_Norfolk'|'Pacific_Noumea'|'Pacific_Pago_Pago'|'Pacific_Palau'|'Pacific_Pitcairn'|'Pacific_Port_Moresby'|'Pacific_Rarotonga'|'Pacific_Tahiti'|'Pacific_Tarawa'|'Pacific_Tongatapu'|'WET';
  }
  export class Table<T extends $sdk.Value = any> extends std_n.core.Table<T> {
    static applyMappings(table: core.Table, mappings: globalThis.Array<core.TableColumnMapping>, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<core.Table> {
      return $g.call('core::Table::applyMappings', [table, mappings], $signal);
    }
  }

  export class ti6d extends std_n.core.ti6d {
  }

  export class nodeGeo extends std_n.core.nodeGeo {
    static sample(refs: globalThis.Array<$sdk.std.core.nodeGeo>, from: $sdk.std.core.geo | null, to: $sdk.std.core.geo | null, maxRows: bigint | number, mode: core.SamplingMode, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<core.Table> {
      return $g.call('core::nodeGeo::sample', [refs, from, to, maxRows, mode], $signal);
    }
    static info(nodes: globalThis.Array<$sdk.std.core.nodeGeo>, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<globalThis.Array<core.NodeInfo<$sdk.std.core.geo>>> {
      return $g.call('core::nodeGeo::info', [nodes], $signal);
    }
  }

  export class duration extends std_n.core.duration {
  }

  export class Date2 extends $sdk.GCObject {
    static readonly _type = 'core::Date2';

    year: bigint | number;
    month: bigint | number;
    day: bigint | number;
    hour: bigint | number;
    minute: bigint | number;
    second: bigint | number;
    microsecond: bigint | number;

    static createFrom({year, month, day, hour, minute, second, microsecond}: {year: bigint | number, month: bigint | number, day: bigint | number, hour: bigint | number, minute: bigint | number, second: bigint | number, microsecond: bigint | number}, $g: $sdk.GreyCat = globalThis.greycat.default): Date2 {
      return new Date2($g.abi.libs_by_name.get(stdlib.name)!.mapped[14], year, month, day, hour, minute, second, microsecond);
    }
    static create(year: bigint | number, month: bigint | number, day: bigint | number, hour: bigint | number, minute: bigint | number, second: bigint | number, microsecond: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default): Date2 {
      return new Date2($g.abi.libs_by_name.get(stdlib.name)!.mapped[14], year, month, day, hour, minute, second, microsecond);
    }
  }

  export class DurationUnit extends $sdk.GCEnum {
    static readonly _type = 'core::DurationUnit';

    constructor(type: $sdk.AbiType, offset: number, public key: DurationUnit.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static microseconds($g: $sdk.GreyCat = globalThis.greycat.default): DurationUnit {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[15];
      return t.static_values['microseconds'];
    }
    static milliseconds($g: $sdk.GreyCat = globalThis.greycat.default): DurationUnit {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[15];
      return t.static_values['milliseconds'];
    }
    static seconds($g: $sdk.GreyCat = globalThis.greycat.default): DurationUnit {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[15];
      return t.static_values['seconds'];
    }
    static minutes($g: $sdk.GreyCat = globalThis.greycat.default): DurationUnit {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[15];
      return t.static_values['minutes'];
    }
    static hours($g: $sdk.GreyCat = globalThis.greycat.default): DurationUnit {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[15];
      return t.static_values['hours'];
    }
    static days($g: $sdk.GreyCat = globalThis.greycat.default): DurationUnit {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[15];
      return t.static_values['days'];
    }
    static weeks($g: $sdk.GreyCat = globalThis.greycat.default): DurationUnit {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[15];
      return t.static_values['weeks'];
    }
    static months($g: $sdk.GreyCat = globalThis.greycat.default): DurationUnit {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[15];
      return t.static_values['months'];
    }
    static years($g: $sdk.GreyCat = globalThis.greycat.default): DurationUnit {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[15];
      return t.static_values['years'];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): DurationUnit[] {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[15];
      return t.enum_values!;
    }
  }

  export namespace DurationUnit  {
    export type Field = 'microseconds'|'milliseconds'|'seconds'|'minutes'|'hours'|'days'|'weeks'|'months'|'years';
  }
  export class tf3d extends std_n.core.tf3d {
  }

  export class Tensor extends std_n.core.Tensor {
  }

  export class ti2d extends std_n.core.ti2d {
  }

  export class Map<K extends $sdk.Value = any, V extends $sdk.Value = any> extends std_n.core.Map<K, V> {
  }

  export class MathConstants extends $sdk.GCObject {
    static readonly _type = 'core::MathConstants';


    static e($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[20];
      return  t.static_values['e'] as number;
    }
    static log_2e($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[20];
      return  t.static_values['log_2e'] as number;
    }
    static log_10e($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[20];
      return  t.static_values['log_10e'] as number;
    }
    static ln2($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[20];
      return  t.static_values['ln2'] as number;
    }
    static ln10($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[20];
      return  t.static_values['ln10'] as number;
    }
    static pi($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[20];
      return  t.static_values['pi'] as number;
    }
    static pi_2($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[20];
      return  t.static_values['pi_2'] as number;
    }
    static pi_4($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[20];
      return  t.static_values['pi_4'] as number;
    }
    static m1_pi($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[20];
      return  t.static_values['m1_pi'] as number;
    }
    static m2_pi($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[20];
      return  t.static_values['m2_pi'] as number;
    }
    static m2_sqrt_pi($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[20];
      return  t.static_values['m2_sqrt_pi'] as number;
    }
    static sqrt2($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[20];
      return  t.static_values['sqrt2'] as number;
    }
    static sqrt1_2($g: $sdk.GreyCat = globalThis.greycat.default): number {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[20];
      return  t.static_values['sqrt1_2'] as number;
    }
    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): MathConstants {
      return new MathConstants($g.abi.libs_by_name.get(stdlib.name)!.mapped[20]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): MathConstants {
      return new MathConstants($g.abi.libs_by_name.get(stdlib.name)!.mapped[20]);
    }
  }

  export class nodeIndex extends std_n.core.nodeIndex {
    static sample(refs: globalThis.Array<$sdk.std.core.nodeIndex>, from: any | null, maxRows: bigint | number, mode: core.SamplingMode, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<core.Table> {
      return $g.call('core::nodeIndex::sample', [refs, from, maxRows, mode], $signal);
    }
    static info(nodes: globalThis.Array<$sdk.std.core.nodeIndex>, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<globalThis.Array<core.NodeInfo>> {
      return $g.call('core::nodeIndex::info', [nodes], $signal);
    }
  }

  export class tf4d extends std_n.core.tf4d {
  }

  export class TableColumnMapping extends $sdk.GCObject {
    static readonly _type = 'core::TableColumnMapping';

    column: bigint | number;
    extractors: globalThis.Array<any>;

    static createFrom({column, extractors}: {column: bigint | number, extractors: globalThis.Array<any>}, $g: $sdk.GreyCat = globalThis.greycat.default): TableColumnMapping {
      return new TableColumnMapping($g.abi.libs_by_name.get(stdlib.name)!.mapped[23], column, extractors);
    }
    static create(column: bigint | number, extractors: globalThis.Array<any>, $g: $sdk.GreyCat = globalThis.greycat.default): TableColumnMapping {
      return new TableColumnMapping($g.abi.libs_by_name.get(stdlib.name)!.mapped[23], column, extractors);
    }
  }

  export class nodeList extends std_n.core.nodeList {
    static sample(refs: globalThis.Array<$sdk.std.core.nodeList>, from: bigint | number | null, to: bigint | number | null, maxRows: bigint | number, mode: core.SamplingMode, maxDephasing: bigint | number | null, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<core.Table> {
      return $g.call('core::nodeList::sample', [refs, from, to, maxRows, mode, maxDephasing], $signal);
    }
    static info(nodes: globalThis.Array<$sdk.std.core.nodeList>, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<globalThis.Array<core.NodeInfo<bigint | number>>> {
      return $g.call('core::nodeList::info', [nodes], $signal);
    }
  }

  export class TensorType extends $sdk.GCEnum {
    static readonly _type = 'core::TensorType';

    constructor(type: $sdk.AbiType, offset: number, public key: TensorType.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static i32($g: $sdk.GreyCat = globalThis.greycat.default): TensorType {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[25];
      return t.static_values['i32'];
    }
    static i64($g: $sdk.GreyCat = globalThis.greycat.default): TensorType {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[25];
      return t.static_values['i64'];
    }
    static f32($g: $sdk.GreyCat = globalThis.greycat.default): TensorType {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[25];
      return t.static_values['f32'];
    }
    static f64($g: $sdk.GreyCat = globalThis.greycat.default): TensorType {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[25];
      return t.static_values['f64'];
    }
    static c64($g: $sdk.GreyCat = globalThis.greycat.default): TensorType {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[25];
      return t.static_values['c64'];
    }
    static c128($g: $sdk.GreyCat = globalThis.greycat.default): TensorType {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[25];
      return t.static_values['c128'];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): TensorType[] {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[25];
      return t.enum_values!;
    }
  }

  export namespace TensorType  {
    export type Field = 'i32'|'i64'|'f32'|'f64'|'c64'|'c128';
  }
  export class Tuple<T extends $sdk.Value = any, U extends $sdk.Value = any> extends $sdk.GCObject {
    static readonly _type = 'core::Tuple';

    x: T;
    y: U;

    static createFrom({x, y}: {x: any, y: any}, $g: $sdk.GreyCat = globalThis.greycat.default): Tuple {
      return new Tuple($g.abi.libs_by_name.get(stdlib.name)!.mapped[26], x, y);
    }
    static create(x: any, y: any, $g: $sdk.GreyCat = globalThis.greycat.default): Tuple {
      return new Tuple($g.abi.libs_by_name.get(stdlib.name)!.mapped[26], x, y);
    }
  }

  export class tf2d extends std_n.core.tf2d {
  }

  export class function_ extends std_n.core.function_ {
  }

  export class TableColumnMeta extends $sdk.GCObject {
    static readonly _type = 'core::TableColumnMeta';

    type: string | null;
    size: bigint | number;
    index: boolean;
    header: string | null;
    min: any;
    max: any;
    avg: any;
    std: any;

    static createFrom({type, size, index, header, min, max, avg, std}: {type: string | null, size: bigint | number, index: boolean, header: string | null, min: any | null, max: any | null, avg: any | null, std: any | null}, $g: $sdk.GreyCat = globalThis.greycat.default): TableColumnMeta {
      return new TableColumnMeta($g.abi.libs_by_name.get(stdlib.name)!.mapped[29], type, size, index, header, min, max, avg, std);
    }
    static create(type: string | null, size: bigint | number, index: boolean, header: string | null, min: any | null, max: any | null, avg: any | null, std: any | null, $g: $sdk.GreyCat = globalThis.greycat.default): TableColumnMeta {
      return new TableColumnMeta($g.abi.libs_by_name.get(stdlib.name)!.mapped[29], type, size, index, header, min, max, avg, std);
    }
  }

  export class GeoBox extends $sdk.GCObject {
    static readonly _type = 'core::GeoBox';

    sw: $sdk.std.core.geo;
    ne: $sdk.std.core.geo;

    static createFrom({sw, ne}: {sw: $sdk.std.core.geo, ne: $sdk.std.core.geo}, $g: $sdk.GreyCat = globalThis.greycat.default): GeoBox {
      return new GeoBox($g.abi.libs_by_name.get(stdlib.name)!.mapped[30], sw, ne);
    }
    static create(sw: $sdk.std.core.geo, ne: $sdk.std.core.geo, $g: $sdk.GreyCat = globalThis.greycat.default): GeoBox {
      return new GeoBox($g.abi.libs_by_name.get(stdlib.name)!.mapped[30], sw, ne);
    }
  }

  export class node extends std_n.core.node {
    static resolve_all(n: globalThis.Array<$sdk.std.core.node>, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<globalThis.Array<any>> {
      return $g.call('core::node::resolve_all', [n], $signal);
    }
  }

  export class GeoPoly extends $sdk.GCObject {
    static readonly _type = 'core::GeoPoly';

    points: globalThis.Array<$sdk.std.core.geo>;

    static createFrom({points}: {points: globalThis.Array<$sdk.std.core.geo>}, $g: $sdk.GreyCat = globalThis.greycat.default): GeoPoly {
      return new GeoPoly($g.abi.libs_by_name.get(stdlib.name)!.mapped[32], points);
    }
    static create(points: globalThis.Array<$sdk.std.core.geo>, $g: $sdk.GreyCat = globalThis.greycat.default): GeoPoly {
      return new GeoPoly($g.abi.libs_by_name.get(stdlib.name)!.mapped[32], points);
    }
  }

  export class nodeIndexBucket extends std_n.core.nodeIndexBucket {
  }

  export class time extends std_n.core.time {
  }

  export class ti10d extends std_n.core.ti10d {
  }

  export class SamplingMode extends $sdk.GCEnum {
    static readonly _type = 'core::SamplingMode';

    constructor(type: $sdk.AbiType, offset: number, public key: SamplingMode.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static fixed($g: $sdk.GreyCat = globalThis.greycat.default): SamplingMode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[36];
      return t.static_values['fixed'];
    }
    static fixed_reg($g: $sdk.GreyCat = globalThis.greycat.default): SamplingMode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[36];
      return t.static_values['fixed_reg'];
    }
    static adaptative($g: $sdk.GreyCat = globalThis.greycat.default): SamplingMode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[36];
      return t.static_values['adaptative'];
    }
    static dense($g: $sdk.GreyCat = globalThis.greycat.default): SamplingMode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[36];
      return t.static_values['dense'];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): SamplingMode[] {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[36];
      return t.enum_values!;
    }
  }

  export namespace SamplingMode  {
    export type Field = 'fixed'|'fixed_reg'|'adaptative'|'dense';
  }
  export class ti5d extends std_n.core.ti5d {
  }

  export class DatePart extends $sdk.GCEnum {
    static readonly _type = 'core::DatePart';

    constructor(type: $sdk.AbiType, offset: number, public key: DatePart.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static years($g: $sdk.GreyCat = globalThis.greycat.default): DatePart {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[38];
      return t.static_values['years'];
    }
    static months($g: $sdk.GreyCat = globalThis.greycat.default): DatePart {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[38];
      return t.static_values['months'];
    }
    static days($g: $sdk.GreyCat = globalThis.greycat.default): DatePart {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[38];
      return t.static_values['days'];
    }
    static hours($g: $sdk.GreyCat = globalThis.greycat.default): DatePart {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[38];
      return t.static_values['hours'];
    }
    static minutes($g: $sdk.GreyCat = globalThis.greycat.default): DatePart {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[38];
      return t.static_values['minutes'];
    }
    static seconds($g: $sdk.GreyCat = globalThis.greycat.default): DatePart {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[38];
      return t.static_values['seconds'];
    }
    static microseconds($g: $sdk.GreyCat = globalThis.greycat.default): DatePart {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[38];
      return t.static_values['microseconds'];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): DatePart[] {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[38];
      return t.enum_values!;
    }
  }

  export namespace DatePart  {
    export type Field = 'years'|'months'|'days'|'hours'|'minutes'|'seconds'|'microseconds';
  }
  export class ti3d extends std_n.core.ti3d {
  }

  export class nodeTimeSingleton extends $sdk.GCObject {
    static readonly _type = 'core::nodeTimeSingleton';

    t: $sdk.std.core.time;
    v: any;

    static createFrom({t, v}: {t: $sdk.std.core.time, v: any}, $g: $sdk.GreyCat = globalThis.greycat.default): nodeTimeSingleton {
      return new nodeTimeSingleton($g.abi.libs_by_name.get(stdlib.name)!.mapped[40], t, v);
    }
    static create(t: $sdk.std.core.time, v: any, $g: $sdk.GreyCat = globalThis.greycat.default): nodeTimeSingleton {
      return new nodeTimeSingleton($g.abi.libs_by_name.get(stdlib.name)!.mapped[40], t, v);
    }
  }

  export class NodeInfo<T extends $sdk.Value = any> extends $sdk.GCObject {
    static readonly _type = 'core::NodeInfo';

    size: bigint | number;
    from: T;
    to: T;

    static createFrom({size, from, to}: {size: bigint | number, from: any | null, to: any | null}, $g: $sdk.GreyCat = globalThis.greycat.default): NodeInfo {
      return new NodeInfo($g.abi.libs_by_name.get(stdlib.name)!.mapped[41], size, from, to);
    }
    static create(size: bigint | number, from: any | null, to: any | null, $g: $sdk.GreyCat = globalThis.greycat.default): NodeInfo {
      return new NodeInfo($g.abi.libs_by_name.get(stdlib.name)!.mapped[41], size, from, to);
    }
  }

}

export namespace runtime {
  export class RuntimeInfo extends $sdk.GCObject {
    static readonly _type = 'runtime::RuntimeInfo';

    version: string;
    program_version: string | null;
    arch: string;
    timezone: core.TimeZone;
    license: runtime.License;
    io_threads: bigint | number;
    bg_threads: bigint | number;
    fg_threads: bigint | number;
    mem_total: bigint | number;
    mem_worker: bigint | number;
    nb_ctx: bigint | number;
    store_stats: runtime.StoreStat | null;

    static createFrom({version, program_version, arch, timezone, license, io_threads, bg_threads, fg_threads, mem_total, mem_worker, nb_ctx, store_stats}: {version: string, program_version: string | null, arch: string, timezone: core.TimeZone, license: runtime.License, io_threads: bigint | number, bg_threads: bigint | number, fg_threads: bigint | number, mem_total: bigint | number, mem_worker: bigint | number, nb_ctx: bigint | number, store_stats: runtime.StoreStat | null}, $g: $sdk.GreyCat = globalThis.greycat.default): RuntimeInfo {
      return new RuntimeInfo($g.abi.libs_by_name.get(stdlib.name)!.mapped[42], version, program_version, arch, timezone, license, io_threads, bg_threads, fg_threads, mem_total, mem_worker, nb_ctx, store_stats);
    }
    static create(version: string, program_version: string | null, arch: string, timezone: core.TimeZone, license: runtime.License, io_threads: bigint | number, bg_threads: bigint | number, fg_threads: bigint | number, mem_total: bigint | number, mem_worker: bigint | number, nb_ctx: bigint | number, store_stats: runtime.StoreStat | null, $g: $sdk.GreyCat = globalThis.greycat.default): RuntimeInfo {
      return new RuntimeInfo($g.abi.libs_by_name.get(stdlib.name)!.mapped[42], version, program_version, arch, timezone, license, io_threads, bg_threads, fg_threads, mem_total, mem_worker, nb_ctx, store_stats);
    }
  }

  export class PeriodicTask extends $sdk.GCObject {
    static readonly _type = 'runtime::PeriodicTask';

    function: core.function_ | null;
    user_id: bigint | number;
    arguments: globalThis.Array<any> | null;
    start: $sdk.std.core.time;
    every: $sdk.std.core.duration;

    static all($g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<globalThis.Array<runtime.PeriodicTask>> {
      return $g.call('runtime::PeriodicTask::all', undefined, $signal);
    }
    static set(tasks: globalThis.Array<runtime.PeriodicTask>, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<unknown> {
      return $g.call('runtime::PeriodicTask::set', [tasks], $signal);
    }
    static createFrom({function_, user_id, arguments_, start, every}: {function_: core.function_ | null, user_id: bigint | number, arguments_: globalThis.Array<any> | null, start: $sdk.std.core.time, every: $sdk.std.core.duration}, $g: $sdk.GreyCat = globalThis.greycat.default): PeriodicTask {
      return new PeriodicTask($g.abi.libs_by_name.get(stdlib.name)!.mapped[43], function_, user_id, arguments_, start, every);
    }
    static create(function_: core.function_ | null, user_id: bigint | number, arguments_: globalThis.Array<any> | null, start: $sdk.std.core.time, every: $sdk.std.core.duration, $g: $sdk.GreyCat = globalThis.greycat.default): PeriodicTask {
      return new PeriodicTask($g.abi.libs_by_name.get(stdlib.name)!.mapped[43], function_, user_id, arguments_, start, every);
    }
  }

  export class UserGroupPolicy extends $sdk.GCObject {
    static readonly _type = 'runtime::UserGroupPolicy';

    group_id: bigint | number;
    type: runtime.UserGroupPolicyType;

    static createFrom({group_id, type}: {group_id: bigint | number, type: runtime.UserGroupPolicyType}, $g: $sdk.GreyCat = globalThis.greycat.default): UserGroupPolicy {
      return new UserGroupPolicy($g.abi.libs_by_name.get(stdlib.name)!.mapped[44], group_id, type);
    }
    static create(group_id: bigint | number, type: runtime.UserGroupPolicyType, $g: $sdk.GreyCat = globalThis.greycat.default): UserGroupPolicy {
      return new UserGroupPolicy($g.abi.libs_by_name.get(stdlib.name)!.mapped[44], group_id, type);
    }
  }

  export class User extends $sdk.GCObject {
    static readonly _type = 'runtime::User';

    id: bigint | number;
    name: string;
    activated: boolean;
    full_name: string | null;
    email: string | null;
    role: string | null;
    permissions_flags: bigint | number | null;
    groups: globalThis.Array<runtime.UserGroupPolicy> | null;
    groups_flags: bigint | number | null;
    external: boolean;

    static all($g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<globalThis.Array<runtime.SecurityEntity>> {
      return $g.call('runtime::SecurityEntity::all', undefined, $signal);
    }
    static set(entity: runtime.SecurityEntity, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<bigint | number | null> {
      return $g.call('runtime::SecurityEntity::set', [entity], $signal);
    }
    static login(credentials: string, use_cookie: boolean, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<string> {
      return $g.call('runtime::User::login', [credentials, use_cookie], $signal);
    }
    static tokenLogin(token: string, use_cookie: boolean, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<string> {
      return $g.call('runtime::User::tokenLogin', [token, use_cookie], $signal);
    }
    static logout($g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<unknown> {
      return $g.call('runtime::User::logout', undefined, $signal);
    }
    static renew(use_cookie: boolean, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<string> {
      return $g.call('runtime::User::renew', [use_cookie], $signal);
    }
    static current($g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<bigint | number> {
      return $g.call('runtime::User::current', undefined, $signal);
    }
    static me($g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<runtime.User> {
      return $g.call('runtime::User::me', undefined, $signal);
    }
    static permissions($g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<globalThis.Array<string>> {
      return $g.call('runtime::User::permissions', undefined, $signal);
    }
    static setPassword(name: string, pass: string, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<boolean> {
      return $g.call('runtime::User::setPassword', [name, pass], $signal);
    }
    static getToken(id: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<string> {
      return $g.call('runtime::User::getToken', [id], $signal);
    }
    static createFrom({id, name, activated, full_name, email, role, permissions_flags, groups, groups_flags, external}: {id: bigint | number, name: string, activated: boolean, full_name: string | null, email: string | null, role: string | null, permissions_flags: bigint | number | null, groups: globalThis.Array<runtime.UserGroupPolicy> | null, groups_flags: bigint | number | null, external: boolean}, $g: $sdk.GreyCat = globalThis.greycat.default): User {
      return new User($g.abi.libs_by_name.get(stdlib.name)!.mapped[45], id, name, activated, full_name, email, role, permissions_flags, groups, groups_flags, external);
    }
    static create(id: bigint | number, name: string, activated: boolean, full_name: string | null, email: string | null, role: string | null, permissions_flags: bigint | number | null, groups: globalThis.Array<runtime.UserGroupPolicy> | null, groups_flags: bigint | number | null, external: boolean, $g: $sdk.GreyCat = globalThis.greycat.default): User {
      return new User($g.abi.libs_by_name.get(stdlib.name)!.mapped[45], id, name, activated, full_name, email, role, permissions_flags, groups, groups_flags, external);
    }
  }

  export class TaskRequest extends $sdk.GCObject {
    static readonly _type = 'runtime::TaskRequest';

    function: core.function_;
    arguments: globalThis.Array<any> | null;
    mode: runtime.TaskMode | null;

    static createFrom({function_, arguments_, mode}: {function_: core.function_, arguments_: globalThis.Array<any> | null, mode: runtime.TaskMode | null}, $g: $sdk.GreyCat = globalThis.greycat.default): TaskRequest {
      return new TaskRequest($g.abi.libs_by_name.get(stdlib.name)!.mapped[46], function_, arguments_, mode);
    }
    static create(function_: core.function_, arguments_: globalThis.Array<any> | null, mode: runtime.TaskMode | null, $g: $sdk.GreyCat = globalThis.greycat.default): TaskRequest {
      return new TaskRequest($g.abi.libs_by_name.get(stdlib.name)!.mapped[46], function_, arguments_, mode);
    }
  }

  export class UserRole extends $sdk.GCObject {
    static readonly _type = 'runtime::UserRole';

    name: string;
    permissions: globalThis.Array<string>;

    static all($g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<globalThis.Array<runtime.UserRole>> {
      return $g.call('runtime::UserRole::all', undefined, $signal);
    }
    static remove(name: string, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<unknown> {
      return $g.call('runtime::UserRole::remove', [name], $signal);
    }
    static set(value: runtime.UserRole, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<unknown> {
      return $g.call('runtime::UserRole::set', [value], $signal);
    }
    static createFrom({name, permissions}: {name: string, permissions: globalThis.Array<string>}, $g: $sdk.GreyCat = globalThis.greycat.default): UserRole {
      return new UserRole($g.abi.libs_by_name.get(stdlib.name)!.mapped[47], name, permissions);
    }
    static create(name: string, permissions: globalThis.Array<string>, $g: $sdk.GreyCat = globalThis.greycat.default): UserRole {
      return new UserRole($g.abi.libs_by_name.get(stdlib.name)!.mapped[47], name, permissions);
    }
  }

  export class StoreStat extends $sdk.GCObject {
    static readonly _type = 'runtime::StoreStat';

    capacity_bytes: bigint | number;
    allocated_bytes: bigint | number;
    allocated_ratio: number;
    remained_bytes: bigint | number;
    remained_ratio: number;
    used_bytes: bigint | number;
    used_ratio: number;
    available_bytes: bigint | number;
    available_ratio: number;

    static createFrom({capacity_bytes, allocated_bytes, allocated_ratio, remained_bytes, remained_ratio, used_bytes, used_ratio, available_bytes, available_ratio}: {capacity_bytes: bigint | number, allocated_bytes: bigint | number, allocated_ratio: number, remained_bytes: bigint | number, remained_ratio: number, used_bytes: bigint | number, used_ratio: number, available_bytes: bigint | number, available_ratio: number}, $g: $sdk.GreyCat = globalThis.greycat.default): StoreStat {
      return new StoreStat($g.abi.libs_by_name.get(stdlib.name)!.mapped[48], capacity_bytes, allocated_bytes, allocated_ratio, remained_bytes, remained_ratio, used_bytes, used_ratio, available_bytes, available_ratio);
    }
    static create(capacity_bytes: bigint | number, allocated_bytes: bigint | number, allocated_ratio: number, remained_bytes: bigint | number, remained_ratio: number, used_bytes: bigint | number, used_ratio: number, available_bytes: bigint | number, available_ratio: number, $g: $sdk.GreyCat = globalThis.greycat.default): StoreStat {
      return new StoreStat($g.abi.libs_by_name.get(stdlib.name)!.mapped[48], capacity_bytes, allocated_bytes, allocated_ratio, remained_bytes, remained_ratio, used_bytes, used_ratio, available_bytes, available_ratio);
    }
  }

  export class System extends $sdk.GCObject {
    static readonly _type = 'runtime::System';


    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): System {
      return new System($g.abi.libs_by_name.get(stdlib.name)!.mapped[49]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): System {
      return new System($g.abi.libs_by_name.get(stdlib.name)!.mapped[49]);
    }
  }

  export class Runtime extends $sdk.GCObject {
    static readonly _type = 'runtime::Runtime';


    static info($g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<runtime.RuntimeInfo> {
      return $g.call('runtime::Runtime::info', undefined, $signal);
    }
    static abi($g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<unknown> {
      return $g.call('runtime::Runtime::abi', undefined, $signal);
    }
    static readModVar(mod_var: string, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<any | null> {
      return $g.call('runtime::Runtime::readModVar', [mod_var], $signal);
    }
    static root($g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<any | null> {
      return $g.call('runtime::Runtime::root', undefined, $signal);
    }
    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): Runtime {
      return new Runtime($g.abi.libs_by_name.get(stdlib.name)!.mapped[50]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): Runtime {
      return new Runtime($g.abi.libs_by_name.get(stdlib.name)!.mapped[50]);
    }
  }

  export class TaskInfo extends $sdk.GCObject {
    static readonly _type = 'runtime::TaskInfo';

    user_id: bigint | number;
    task_id: bigint | number;
    mod: string | null;
    type: string | null;
    fun: string | null;
    creation: $sdk.std.core.time;
    start: $sdk.std.core.time | null;
    duration: $sdk.std.core.duration | null;
    status: runtime.TaskStatus;
    progress: number | null;
    remaining: $sdk.std.core.duration | null;
    sub_waiting: bigint | number | null;
    sub_tasks_all: bigint | number | null;

    static createFrom({user_id, task_id, mod, type, fun, creation, start, duration, status, progress, remaining, sub_waiting, sub_tasks_all}: {user_id: bigint | number, task_id: bigint | number, mod: string | null, type: string | null, fun: string | null, creation: $sdk.std.core.time, start: $sdk.std.core.time | null, duration: $sdk.std.core.duration | null, status: runtime.TaskStatus, progress: number | null, remaining: $sdk.std.core.duration | null, sub_waiting: bigint | number | null, sub_tasks_all: bigint | number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): TaskInfo {
      return new TaskInfo($g.abi.libs_by_name.get(stdlib.name)!.mapped[51], user_id, task_id, mod, type, fun, creation, start, duration, status, progress, remaining, sub_waiting, sub_tasks_all);
    }
    static create(user_id: bigint | number, task_id: bigint | number, mod: string | null, type: string | null, fun: string | null, creation: $sdk.std.core.time, start: $sdk.std.core.time | null, duration: $sdk.std.core.duration | null, status: runtime.TaskStatus, progress: number | null, remaining: $sdk.std.core.duration | null, sub_waiting: bigint | number | null, sub_tasks_all: bigint | number | null, $g: $sdk.GreyCat = globalThis.greycat.default): TaskInfo {
      return new TaskInfo($g.abi.libs_by_name.get(stdlib.name)!.mapped[51], user_id, task_id, mod, type, fun, creation, start, duration, status, progress, remaining, sub_waiting, sub_tasks_all);
    }
  }

  export class TaskStatus extends $sdk.GCEnum {
    static readonly _type = 'runtime::TaskStatus';

    constructor(type: $sdk.AbiType, offset: number, public key: TaskStatus.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static empty($g: $sdk.GreyCat = globalThis.greycat.default): TaskStatus {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[52];
      return t.static_values['empty'];
    }
    static waiting($g: $sdk.GreyCat = globalThis.greycat.default): TaskStatus {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[52];
      return t.static_values['waiting'];
    }
    static running($g: $sdk.GreyCat = globalThis.greycat.default): TaskStatus {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[52];
      return t.static_values['running'];
    }
    static cancelled($g: $sdk.GreyCat = globalThis.greycat.default): TaskStatus {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[52];
      return t.static_values['cancelled'];
    }
    static error($g: $sdk.GreyCat = globalThis.greycat.default): TaskStatus {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[52];
      return t.static_values['error'];
    }
    static ended($g: $sdk.GreyCat = globalThis.greycat.default): TaskStatus {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[52];
      return t.static_values['ended'];
    }
    static ended_with_errors($g: $sdk.GreyCat = globalThis.greycat.default): TaskStatus {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[52];
      return t.static_values['ended_with_errors'];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): TaskStatus[] {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[52];
      return t.enum_values!;
    }
  }

  export namespace TaskStatus  {
    export type Field = 'empty'|'waiting'|'running'|'cancelled'|'error'|'ended'|'ended_with_errors';
  }
  export class Debug extends $sdk.GCObject {
    static readonly _type = 'runtime::Debug';


    static add(bps: globalThis.Array<runtime.DebugBreakpoint>, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<unknown> {
      return $g.call('runtime::Debug::add', [bps], $signal);
    }
    static remove(bps: globalThis.Array<runtime.DebugBreakpoint>, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<unknown> {
      return $g.call('runtime::Debug::remove', [bps], $signal);
    }
    static workers($g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<globalThis.Array<bigint | number>> {
      return $g.call('runtime::Debug::workers', undefined, $signal);
    }
    static pause(worker: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<unknown> {
      return $g.call('runtime::Debug::pause', [worker], $signal);
    }
    static resume(worker: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<unknown> {
      return $g.call('runtime::Debug::resume', [worker], $signal);
    }
    static info(worker: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<runtime.DebugInfo> {
      return $g.call('runtime::Debug::info', [worker], $signal);
    }
    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): Debug {
      return new Debug($g.abi.libs_by_name.get(stdlib.name)!.mapped[53]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): Debug {
      return new Debug($g.abi.libs_by_name.get(stdlib.name)!.mapped[53]);
    }
  }

  export class TaskResult extends $sdk.GCObject {
    static readonly _type = 'runtime::TaskResult';

    values: globalThis.Array;
    errors: bigint | number;

    static createFrom({values, errors}: {values: globalThis.Array, errors: bigint | number}, $g: $sdk.GreyCat = globalThis.greycat.default): TaskResult {
      return new TaskResult($g.abi.libs_by_name.get(stdlib.name)!.mapped[54], values, errors);
    }
    static create(values: globalThis.Array, errors: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default): TaskResult {
      return new TaskResult($g.abi.libs_by_name.get(stdlib.name)!.mapped[54], values, errors);
    }
  }

  export class SecurityPolicy extends $sdk.GCObject {
    static readonly _type = 'runtime::SecurityPolicy';

    entities: globalThis.Array<runtime.SecurityEntity>;
    credentials: globalThis.Map<string, runtime.UserCredential>;
    roles: globalThis.Map<string, runtime.UserRole>;
    fields: runtime.SecurityFields | null;
    keys: globalThis.Map<string, string> | null;
    keys_last_refresh: $sdk.std.core.time | null;

    static permissions($g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<globalThis.Array<string>> {
      return $g.call('runtime::SecurityPolicy::permissions', undefined, $signal);
    }
    static createFrom({entities, credentials, roles, fields, keys, keys_last_refresh}: {entities: globalThis.Array<runtime.SecurityEntity>, credentials: globalThis.Map<string, runtime.UserCredential>, roles: globalThis.Map<string, runtime.UserRole>, fields: runtime.SecurityFields | null, keys: globalThis.Map<string, string> | null, keys_last_refresh: $sdk.std.core.time | null}, $g: $sdk.GreyCat = globalThis.greycat.default): SecurityPolicy {
      return new SecurityPolicy($g.abi.libs_by_name.get(stdlib.name)!.mapped[55], entities, credentials, roles, fields, keys, keys_last_refresh);
    }
    static create(entities: globalThis.Array<runtime.SecurityEntity>, credentials: globalThis.Map<string, runtime.UserCredential>, roles: globalThis.Map<string, runtime.UserRole>, fields: runtime.SecurityFields | null, keys: globalThis.Map<string, string> | null, keys_last_refresh: $sdk.std.core.time | null, $g: $sdk.GreyCat = globalThis.greycat.default): SecurityPolicy {
      return new SecurityPolicy($g.abi.libs_by_name.get(stdlib.name)!.mapped[55], entities, credentials, roles, fields, keys, keys_last_refresh);
    }
  }

  export class DebugFrame extends $sdk.GCObject {
    static readonly _type = 'runtime::DebugFrame';

    module: string;
    line: bigint | number;
    column: bigint | number;
    scope: globalThis.Map<string, any>;

    static createFrom({module, line, column, scope}: {module: string, line: bigint | number, column: bigint | number, scope: globalThis.Map<string, any>}, $g: $sdk.GreyCat = globalThis.greycat.default): DebugFrame {
      return new DebugFrame($g.abi.libs_by_name.get(stdlib.name)!.mapped[56], module, line, column, scope);
    }
    static create(module: string, line: bigint | number, column: bigint | number, scope: globalThis.Map<string, any>, $g: $sdk.GreyCat = globalThis.greycat.default): DebugFrame {
      return new DebugFrame($g.abi.libs_by_name.get(stdlib.name)!.mapped[56], module, line, column, scope);
    }
  }

  export class TaskBase extends $sdk.GCObject {
    static readonly _type = 'runtime::TaskBase';

    user_id: bigint | number;
    task_id: bigint | number;
    mod: string | null;
    type: string | null;
    fun: string | null;
    creation: $sdk.std.core.time;
    start: $sdk.std.core.time | null;
    duration: $sdk.std.core.duration | null;
    status: runtime.TaskStatus;

  }

  export class OpenIDConnect extends $sdk.GCObject {
    static readonly _type = 'runtime::OpenIDConnect';

    url: string;
    clientId: string;

    static config($g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<runtime.OpenIDConnect | null> {
      return $g.call('runtime::OpenIDConnect::config', undefined, $signal);
    }
    static createFrom({url, clientId}: {url: string, clientId: string}, $g: $sdk.GreyCat = globalThis.greycat.default): OpenIDConnect {
      return new OpenIDConnect($g.abi.libs_by_name.get(stdlib.name)!.mapped[58], url, clientId);
    }
    static create(url: string, clientId: string, $g: $sdk.GreyCat = globalThis.greycat.default): OpenIDConnect {
      return new OpenIDConnect($g.abi.libs_by_name.get(stdlib.name)!.mapped[58], url, clientId);
    }
  }

  export class SecurityFields extends $sdk.GCObject {
    static readonly _type = 'runtime::SecurityFields';

    email: string | null;
    name: string | null;
    first_name: string | null;
    last_name: string | null;
    roles: globalThis.Map<string, string> | null;
    groups: globalThis.Map<string, string> | null;

    static set(f: runtime.SecurityFields, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<unknown> {
      return $g.call('runtime::SecurityFields::set', [f], $signal);
    }
    static get($g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<runtime.SecurityFields | null> {
      return $g.call('runtime::SecurityFields::get', undefined, $signal);
    }
    static createFrom({email, name, first_name, last_name, roles, groups}: {email: string | null, name: string | null, first_name: string | null, last_name: string | null, roles: globalThis.Map<string, string> | null, groups: globalThis.Map<string, string> | null}, $g: $sdk.GreyCat = globalThis.greycat.default): SecurityFields {
      return new SecurityFields($g.abi.libs_by_name.get(stdlib.name)!.mapped[59], email, name, first_name, last_name, roles, groups);
    }
    static create(email: string | null, name: string | null, first_name: string | null, last_name: string | null, roles: globalThis.Map<string, string> | null, groups: globalThis.Map<string, string> | null, $g: $sdk.GreyCat = globalThis.greycat.default): SecurityFields {
      return new SecurityFields($g.abi.libs_by_name.get(stdlib.name)!.mapped[59], email, name, first_name, last_name, roles, groups);
    }
  }

  export class UserCredential extends $sdk.GCObject {
    static readonly _type = 'runtime::UserCredential';

    offset: bigint | number;
    pass: string | null;

    static createFrom({offset, pass}: {offset: bigint | number, pass: string | null}, $g: $sdk.GreyCat = globalThis.greycat.default): UserCredential {
      return new UserCredential($g.abi.libs_by_name.get(stdlib.name)!.mapped[60], offset, pass);
    }
    static create(offset: bigint | number, pass: string | null, $g: $sdk.GreyCat = globalThis.greycat.default): UserCredential {
      return new UserCredential($g.abi.libs_by_name.get(stdlib.name)!.mapped[60], offset, pass);
    }
  }

  export class DebugInfo extends $sdk.GCObject {
    static readonly _type = 'runtime::DebugInfo';

    scopes: globalThis.Array<runtime.DebugFrame>;
    root: any;

    static createFrom({scopes, root}: {scopes: globalThis.Array<runtime.DebugFrame>, root: any}, $g: $sdk.GreyCat = globalThis.greycat.default): DebugInfo {
      return new DebugInfo($g.abi.libs_by_name.get(stdlib.name)!.mapped[61], scopes, root);
    }
    static create(scopes: globalThis.Array<runtime.DebugFrame>, root: any, $g: $sdk.GreyCat = globalThis.greycat.default): DebugInfo {
      return new DebugInfo($g.abi.libs_by_name.get(stdlib.name)!.mapped[61], scopes, root);
    }
  }

  export class TaskMode extends $sdk.GCEnum {
    static readonly _type = 'runtime::TaskMode';

    constructor(type: $sdk.AbiType, offset: number, public key: TaskMode.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static commit($g: $sdk.GreyCat = globalThis.greycat.default): TaskMode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[62];
      return t.static_values['commit'];
    }
    static volatile($g: $sdk.GreyCat = globalThis.greycat.default): TaskMode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[62];
      return t.static_values['volatile'];
    }
    static exclusive($g: $sdk.GreyCat = globalThis.greycat.default): TaskMode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[62];
      return t.static_values['exclusive'];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): TaskMode[] {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[62];
      return t.enum_values!;
    }
  }

  export namespace TaskMode  {
    export type Field = 'commit'|'volatile'|'exclusive';
  }
  export class SecurityEntity extends $sdk.GCObject {
    static readonly _type = 'runtime::SecurityEntity';

    id: bigint | number;
    name: string;
    activated: boolean;

    static all($g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<globalThis.Array<runtime.SecurityEntity>> {
      return $g.call('runtime::SecurityEntity::all', undefined, $signal);
    }
    static set(entity: runtime.SecurityEntity, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<bigint | number | null> {
      return $g.call('runtime::SecurityEntity::set', [entity], $signal);
    }
  }

  export class License extends $sdk.GCObject {
    static readonly _type = 'runtime::License';

    name: string | null;
    start: $sdk.std.core.time;
    end: $sdk.std.core.time;
    company: string | null;
    max_memory: bigint | number;
    extra_1: bigint | number | null;
    extra_2: bigint | number | null;
    type: runtime.LicenseType | null;

    static createFrom({name, start, end, company, max_memory, extra_1, extra_2, type}: {name: string | null, start: $sdk.std.core.time, end: $sdk.std.core.time, company: string | null, max_memory: bigint | number, extra_1: bigint | number | null, extra_2: bigint | number | null, type: runtime.LicenseType | null}, $g: $sdk.GreyCat = globalThis.greycat.default): License {
      return new License($g.abi.libs_by_name.get(stdlib.name)!.mapped[64], name, start, end, company, max_memory, extra_1, extra_2, type);
    }
    static create(name: string | null, start: $sdk.std.core.time, end: $sdk.std.core.time, company: string | null, max_memory: bigint | number, extra_1: bigint | number | null, extra_2: bigint | number | null, type: runtime.LicenseType | null, $g: $sdk.GreyCat = globalThis.greycat.default): License {
      return new License($g.abi.libs_by_name.get(stdlib.name)!.mapped[64], name, start, end, company, max_memory, extra_1, extra_2, type);
    }
  }

  export class DebugBreakpoint extends $sdk.GCObject {
    static readonly _type = 'runtime::DebugBreakpoint';

    module: string;
    line: bigint | number;
    column: bigint | number;

    static createFrom({module, line, column}: {module: string, line: bigint | number, column: bigint | number}, $g: $sdk.GreyCat = globalThis.greycat.default): DebugBreakpoint {
      return new DebugBreakpoint($g.abi.libs_by_name.get(stdlib.name)!.mapped[65], module, line, column);
    }
    static create(module: string, line: bigint | number, column: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default): DebugBreakpoint {
      return new DebugBreakpoint($g.abi.libs_by_name.get(stdlib.name)!.mapped[65], module, line, column);
    }
  }

  export class UserGroupPolicyType extends $sdk.GCEnum {
    static readonly _type = 'runtime::UserGroupPolicyType';

    constructor(type: $sdk.AbiType, offset: number, public key: UserGroupPolicyType.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static read($g: $sdk.GreyCat = globalThis.greycat.default): UserGroupPolicyType {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[66];
      return t.static_values['read'];
    }
    static write($g: $sdk.GreyCat = globalThis.greycat.default): UserGroupPolicyType {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[66];
      return t.static_values['write'];
    }
    static execute($g: $sdk.GreyCat = globalThis.greycat.default): UserGroupPolicyType {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[66];
      return t.static_values['execute'];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): UserGroupPolicyType[] {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[66];
      return t.enum_values!;
    }
  }

  export namespace UserGroupPolicyType  {
    export type Field = 'read'|'write'|'execute';
  }
  export class LicenseType extends $sdk.GCEnum {
    static readonly _type = 'runtime::LicenseType';

    constructor(type: $sdk.AbiType, offset: number, public key: LicenseType.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static community($g: $sdk.GreyCat = globalThis.greycat.default): LicenseType {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[67];
      return t.static_values['community'];
    }
    static enterprise($g: $sdk.GreyCat = globalThis.greycat.default): LicenseType {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[67];
      return t.static_values['enterprise'];
    }
    static testing($g: $sdk.GreyCat = globalThis.greycat.default): LicenseType {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[67];
      return t.static_values['testing'];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): LicenseType[] {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[67];
      return t.enum_values!;
    }
  }

  export namespace LicenseType  {
    export type Field = 'community'|'enterprise'|'testing';
  }
  export class Task extends $sdk.GCObject {
    static readonly _type = 'runtime::Task';

    user_id: bigint | number;
    task_id: bigint | number;
    mod: string | null;
    type: string | null;
    fun: string | null;
    creation: $sdk.std.core.time;
    start: $sdk.std.core.time | null;
    duration: $sdk.std.core.duration | null;
    status: runtime.TaskStatus;

    static running($g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<globalThis.Array<runtime.TaskInfo>> {
      return $g.call('runtime::Task::running', undefined, $signal);
    }
    static history(offset: bigint | number, max: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<globalThis.Array<runtime.Task>> {
      return $g.call('runtime::Task::history', [offset, max], $signal);
    }
    static cancel(task_id: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<boolean> {
      return $g.call('runtime::Task::cancel', [task_id], $signal);
    }
    static info(user_id: bigint | number, task_id: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<runtime.TaskInfo | null> {
      return $g.call('runtime::Task::info', [user_id, task_id], $signal);
    }
    static createFrom({user_id, task_id, mod, type, fun, creation, start, duration, status}: {user_id: bigint | number, task_id: bigint | number, mod: string | null, type: string | null, fun: string | null, creation: $sdk.std.core.time, start: $sdk.std.core.time | null, duration: $sdk.std.core.duration | null, status: runtime.TaskStatus}, $g: $sdk.GreyCat = globalThis.greycat.default): Task {
      return new Task($g.abi.libs_by_name.get(stdlib.name)!.mapped[68], user_id, task_id, mod, type, fun, creation, start, duration, status);
    }
    static create(user_id: bigint | number, task_id: bigint | number, mod: string | null, type: string | null, fun: string | null, creation: $sdk.std.core.time, start: $sdk.std.core.time | null, duration: $sdk.std.core.duration | null, status: runtime.TaskStatus, $g: $sdk.GreyCat = globalThis.greycat.default): Task {
      return new Task($g.abi.libs_by_name.get(stdlib.name)!.mapped[68], user_id, task_id, mod, type, fun, creation, start, duration, status);
    }
  }

  export class UserGroup extends $sdk.GCObject {
    static readonly _type = 'runtime::UserGroup';

    id: bigint | number;
    name: string;
    activated: boolean;

    static all($g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<globalThis.Array<runtime.SecurityEntity>> {
      return $g.call('runtime::SecurityEntity::all', undefined, $signal);
    }
    static set(entity: runtime.SecurityEntity, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<bigint | number | null> {
      return $g.call('runtime::SecurityEntity::set', [entity], $signal);
    }
    static createFrom({id, name, activated}: {id: bigint | number, name: string, activated: boolean}, $g: $sdk.GreyCat = globalThis.greycat.default): UserGroup {
      return new UserGroup($g.abi.libs_by_name.get(stdlib.name)!.mapped[69], id, name, activated);
    }
    static create(id: bigint | number, name: string, activated: boolean, $g: $sdk.GreyCat = globalThis.greycat.default): UserGroup {
      return new UserGroup($g.abi.libs_by_name.get(stdlib.name)!.mapped[69], id, name, activated);
    }
  }

}

export namespace io {
  export class CsvColumnDate extends $sdk.GCObject {
    static readonly _type = 'io::CsvColumnDate';

    name: string | null;
    mandatory: boolean | null;
    offset: bigint | number | null;
    format: string | null;
    tz: core.TimeZone | null;
    as_time: boolean | null;

    static createFrom({name, mandatory, offset, format, tz, as_time}: {name: string | null, mandatory: boolean | null, offset: bigint | number | null, format: string | null, tz: core.TimeZone | null, as_time: boolean | null}, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumnDate {
      return new CsvColumnDate($g.abi.libs_by_name.get(stdlib.name)!.mapped[70], name, mandatory, offset, format, tz, as_time);
    }
    static create(name: string | null, mandatory: boolean | null, offset: bigint | number | null, format: string | null, tz: core.TimeZone | null, as_time: boolean | null, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumnDate {
      return new CsvColumnDate($g.abi.libs_by_name.get(stdlib.name)!.mapped[70], name, mandatory, offset, format, tz, as_time);
    }
  }

  export class Email extends $sdk.GCObject {
    static readonly _type = 'io::Email';

    from: string;
    subject: string;
    body: string;
    body_is_html: boolean;
    to: globalThis.Array<string>;
    cc: globalThis.Array<string> | null;
    bcc: globalThis.Array<string> | null;

    static createFrom({from, subject, body, body_is_html, to, cc, bcc}: {from: string, subject: string, body: string, body_is_html: boolean, to: globalThis.Array<string>, cc: globalThis.Array<string> | null, bcc: globalThis.Array<string> | null}, $g: $sdk.GreyCat = globalThis.greycat.default): Email {
      return new Email($g.abi.libs_by_name.get(stdlib.name)!.mapped[71], from, subject, body, body_is_html, to, cc, bcc);
    }
    static create(from: string, subject: string, body: string, body_is_html: boolean, to: globalThis.Array<string>, cc: globalThis.Array<string> | null, bcc: globalThis.Array<string> | null, $g: $sdk.GreyCat = globalThis.greycat.default): Email {
      return new Email($g.abi.libs_by_name.get(stdlib.name)!.mapped[71], from, subject, body, body_is_html, to, cc, bcc);
    }
  }

  export class Mqtt extends $sdk.GCObject {
    static readonly _type = 'io::Mqtt';


    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): Mqtt {
      return new Mqtt($g.abi.libs_by_name.get(stdlib.name)!.mapped[72]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): Mqtt {
      return new Mqtt($g.abi.libs_by_name.get(stdlib.name)!.mapped[72]);
    }
  }

  export class CsvValidateResult extends $sdk.GCObject {
    static readonly _type = 'io::CsvValidateResult';

    line_count: bigint | number;
    fail_count: bigint | number;
    invalid_count: globalThis.Array<bigint | number>;

    static createFrom({line_count, fail_count, invalid_count}: {line_count: bigint | number, fail_count: bigint | number, invalid_count: globalThis.Array<bigint | number>}, $g: $sdk.GreyCat = globalThis.greycat.default): CsvValidateResult {
      return new CsvValidateResult($g.abi.libs_by_name.get(stdlib.name)!.mapped[73], line_count, fail_count, invalid_count);
    }
    static create(line_count: bigint | number, fail_count: bigint | number, invalid_count: globalThis.Array<bigint | number>, $g: $sdk.GreyCat = globalThis.greycat.default): CsvValidateResult {
      return new CsvValidateResult($g.abi.libs_by_name.get(stdlib.name)!.mapped[73], line_count, fail_count, invalid_count);
    }
  }

  export class File extends $sdk.GCObject {
    static readonly _type = 'io::File';

    path: string;
    size: bigint | number | null;
    last_modification: $sdk.std.core.time | null;

    static createFrom({path, size, last_modification}: {path: string, size: bigint | number | null, last_modification: $sdk.std.core.time | null}, $g: $sdk.GreyCat = globalThis.greycat.default): File {
      return new File($g.abi.libs_by_name.get(stdlib.name)!.mapped[74], path, size, last_modification);
    }
    static create(path: string, size: bigint | number | null, last_modification: $sdk.std.core.time | null, $g: $sdk.GreyCat = globalThis.greycat.default): File {
      return new File($g.abi.libs_by_name.get(stdlib.name)!.mapped[74], path, size, last_modification);
    }
  }

  export class TextEncoder extends $sdk.GCEnum {
    static readonly _type = 'io::TextEncoder';

    constructor(type: $sdk.AbiType, offset: number, public key: TextEncoder.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static plain($g: $sdk.GreyCat = globalThis.greycat.default): TextEncoder {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[75];
      return t.static_values['plain'];
    }
    static base64($g: $sdk.GreyCat = globalThis.greycat.default): TextEncoder {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[75];
      return t.static_values['base64'];
    }
    static base64url($g: $sdk.GreyCat = globalThis.greycat.default): TextEncoder {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[75];
      return t.static_values['base64url'];
    }
    static hexadecimal($g: $sdk.GreyCat = globalThis.greycat.default): TextEncoder {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[75];
      return t.static_values['hexadecimal'];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): TextEncoder[] {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[75];
      return t.enum_values!;
    }
  }

  export namespace TextEncoder  {
    export type Field = 'plain'|'base64'|'base64url'|'hexadecimal';
  }
  export class Url extends $sdk.GCObject {
    static readonly _type = 'io::Url';

    protocol: string | null;
    host: string | null;
    port: bigint | number | null;
    path: string | null;
    params: globalThis.Map<string, string> | null;
    hash: string | null;

    static createFrom({protocol, host, port, path, params, hash}: {protocol: string | null, host: string | null, port: bigint | number | null, path: string | null, params: globalThis.Map<string, string> | null, hash: string | null}, $g: $sdk.GreyCat = globalThis.greycat.default): Url {
      return new Url($g.abi.libs_by_name.get(stdlib.name)!.mapped[76], protocol, host, port, path, params, hash);
    }
    static create(protocol: string | null, host: string | null, port: bigint | number | null, path: string | null, params: globalThis.Map<string, string> | null, hash: string | null, $g: $sdk.GreyCat = globalThis.greycat.default): Url {
      return new Url($g.abi.libs_by_name.get(stdlib.name)!.mapped[76], protocol, host, port, path, params, hash);
    }
  }

  export class CsvColumnTime extends $sdk.GCObject {
    static readonly _type = 'io::CsvColumnTime';

    name: string | null;
    mandatory: boolean | null;
    offset: bigint | number | null;
    unit: core.DurationUnit | null;

    static createFrom({name, mandatory, offset, unit}: {name: string | null, mandatory: boolean | null, offset: bigint | number | null, unit: core.DurationUnit | null}, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumnTime {
      return new CsvColumnTime($g.abi.libs_by_name.get(stdlib.name)!.mapped[77], name, mandatory, offset, unit);
    }
    static create(name: string | null, mandatory: boolean | null, offset: bigint | number | null, unit: core.DurationUnit | null, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumnTime {
      return new CsvColumnTime($g.abi.libs_by_name.get(stdlib.name)!.mapped[77], name, mandatory, offset, unit);
    }
  }

  export class CsvAnalysisConfig extends $sdk.GCObject {
    static readonly _type = 'io::CsvAnalysisConfig';

    header_lines: bigint | number | null;
    separator: string | null;
    string_delimiter: string | null;
    decimal_separator: string | null;
    thousands_separator: string | null;
    row_limit: bigint | number | null;
    enumerable_limit: bigint | number | null;
    date_check_limit: bigint | number | null;
    date_formats: globalThis.Array<string> | null;

    static enumerable_limit_default($g: $sdk.GreyCat = globalThis.greycat.default): bigint {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[78];
      return  t.static_values['enumerable_limit_default'] as bigint;
    }
    static date_check_limit_default($g: $sdk.GreyCat = globalThis.greycat.default): bigint {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[78];
      return  t.static_values['date_check_limit_default'] as bigint;
    }
    static createFrom({header_lines, separator, string_delimiter, decimal_separator, thousands_separator, row_limit, enumerable_limit, date_check_limit, date_formats}: {header_lines: bigint | number | null, separator: string | null, string_delimiter: string | null, decimal_separator: string | null, thousands_separator: string | null, row_limit: bigint | number | null, enumerable_limit: bigint | number | null, date_check_limit: bigint | number | null, date_formats: globalThis.Array<string> | null}, $g: $sdk.GreyCat = globalThis.greycat.default): CsvAnalysisConfig {
      return new CsvAnalysisConfig($g.abi.libs_by_name.get(stdlib.name)!.mapped[78], header_lines, separator, string_delimiter, decimal_separator, thousands_separator, row_limit, enumerable_limit, date_check_limit, date_formats);
    }
    static create(header_lines: bigint | number | null, separator: string | null, string_delimiter: string | null, decimal_separator: string | null, thousands_separator: string | null, row_limit: bigint | number | null, enumerable_limit: bigint | number | null, date_check_limit: bigint | number | null, date_formats: globalThis.Array<string> | null, $g: $sdk.GreyCat = globalThis.greycat.default): CsvAnalysisConfig {
      return new CsvAnalysisConfig($g.abi.libs_by_name.get(stdlib.name)!.mapped[78], header_lines, separator, string_delimiter, decimal_separator, thousands_separator, row_limit, enumerable_limit, date_check_limit, date_formats);
    }
  }

  export class HttpHeader extends $sdk.GCObject {
    static readonly _type = 'io::HttpHeader';

    name: string;
    value: string;

    static createFrom({name, value}: {name: string, value: string}, $g: $sdk.GreyCat = globalThis.greycat.default): HttpHeader {
      return new HttpHeader($g.abi.libs_by_name.get(stdlib.name)!.mapped[79], name, value);
    }
    static create(name: string, value: string, $g: $sdk.GreyCat = globalThis.greycat.default): HttpHeader {
      return new HttpHeader($g.abi.libs_by_name.get(stdlib.name)!.mapped[79], name, value);
    }
  }

  export class CsvColumnBoolean extends $sdk.GCObject {
    static readonly _type = 'io::CsvColumnBoolean';

    name: string | null;
    mandatory: boolean | null;
    offset: bigint | number | null;

    static createFrom({name, mandatory, offset}: {name: string | null, mandatory: boolean | null, offset: bigint | number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumnBoolean {
      return new CsvColumnBoolean($g.abi.libs_by_name.get(stdlib.name)!.mapped[80], name, mandatory, offset);
    }
    static create(name: string | null, mandatory: boolean | null, offset: bigint | number | null, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumnBoolean {
      return new CsvColumnBoolean($g.abi.libs_by_name.get(stdlib.name)!.mapped[80], name, mandatory, offset);
    }
  }

  export class CsvColumnStatistics extends $sdk.GCObject {
    static readonly _type = 'io::CsvColumnStatistics';

    name: string | null;
    example: any;
    null_count: bigint | number;
    bool_count: bigint | number;
    int_count: bigint | number;
    float_count: bigint | number;
    string_count: bigint | number;
    date_count: bigint | number;
    date_format_count: globalThis.Map<string, bigint | number>;
    enumerable_count: globalThis.Map<any, bigint | number>;
    profile: util.Gaussian;

    static createFrom({name, example, null_count, bool_count, int_count, float_count, string_count, date_count, date_format_count, enumerable_count, profile}: {name: string | null, example: any | null, null_count: bigint | number, bool_count: bigint | number, int_count: bigint | number, float_count: bigint | number, string_count: bigint | number, date_count: bigint | number, date_format_count: globalThis.Map<string, bigint | number>, enumerable_count: globalThis.Map<any, bigint | number>, profile: util.Gaussian}, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumnStatistics {
      return new CsvColumnStatistics($g.abi.libs_by_name.get(stdlib.name)!.mapped[81], name, example, null_count, bool_count, int_count, float_count, string_count, date_count, date_format_count, enumerable_count, profile);
    }
    static create(name: string | null, example: any | null, null_count: bigint | number, bool_count: bigint | number, int_count: bigint | number, float_count: bigint | number, string_count: bigint | number, date_count: bigint | number, date_format_count: globalThis.Map<string, bigint | number>, enumerable_count: globalThis.Map<any, bigint | number>, profile: util.Gaussian, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumnStatistics {
      return new CsvColumnStatistics($g.abi.libs_by_name.get(stdlib.name)!.mapped[81], name, example, null_count, bool_count, int_count, float_count, string_count, date_count, date_format_count, enumerable_count, profile);
    }
  }

  export class Smtp extends $sdk.GCObject {
    static readonly _type = 'io::Smtp';

    host: string;
    port: bigint | number;
    mode: io.SmtpMode | null;
    authenticate: io.SmtpAuth | null;
    user: string | null;
    pass: string | null;

    static createFrom({host, port, mode, authenticate, user, pass}: {host: string, port: bigint | number, mode: io.SmtpMode | null, authenticate: io.SmtpAuth | null, user: string | null, pass: string | null}, $g: $sdk.GreyCat = globalThis.greycat.default): Smtp {
      return new Smtp($g.abi.libs_by_name.get(stdlib.name)!.mapped[82], host, port, mode, authenticate, user, pass);
    }
    static create(host: string, port: bigint | number, mode: io.SmtpMode | null, authenticate: io.SmtpAuth | null, user: string | null, pass: string | null, $g: $sdk.GreyCat = globalThis.greycat.default): Smtp {
      return new Smtp($g.abi.libs_by_name.get(stdlib.name)!.mapped[82], host, port, mode, authenticate, user, pass);
    }
  }

  export class CsvColumnInteger extends $sdk.GCObject {
    static readonly _type = 'io::CsvColumnInteger';

    name: string | null;
    mandatory: boolean | null;
    offset: bigint | number | null;

    static createFrom({name, mandatory, offset}: {name: string | null, mandatory: boolean | null, offset: bigint | number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumnInteger {
      return new CsvColumnInteger($g.abi.libs_by_name.get(stdlib.name)!.mapped[83], name, mandatory, offset);
    }
    static create(name: string | null, mandatory: boolean | null, offset: bigint | number | null, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumnInteger {
      return new CsvColumnInteger($g.abi.libs_by_name.get(stdlib.name)!.mapped[83], name, mandatory, offset);
    }
  }

  export class SmtpAuth extends $sdk.GCEnum {
    static readonly _type = 'io::SmtpAuth';

    constructor(type: $sdk.AbiType, offset: number, public key: SmtpAuth.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static none($g: $sdk.GreyCat = globalThis.greycat.default): SmtpAuth {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[84];
      return t.static_values['none'];
    }
    static plain($g: $sdk.GreyCat = globalThis.greycat.default): SmtpAuth {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[84];
      return t.static_values['plain'];
    }
    static login($g: $sdk.GreyCat = globalThis.greycat.default): SmtpAuth {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[84];
      return t.static_values['login'];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): SmtpAuth[] {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[84];
      return t.enum_values!;
    }
  }

  export namespace SmtpAuth  {
    export type Field = 'none'|'plain'|'login';
  }
  export class CsvColumnFloat extends $sdk.GCObject {
    static readonly _type = 'io::CsvColumnFloat';

    name: string | null;
    mandatory: boolean | null;
    offset: bigint | number | null;

    static createFrom({name, mandatory, offset}: {name: string | null, mandatory: boolean | null, offset: bigint | number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumnFloat {
      return new CsvColumnFloat($g.abi.libs_by_name.get(stdlib.name)!.mapped[85], name, mandatory, offset);
    }
    static create(name: string | null, mandatory: boolean | null, offset: bigint | number | null, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumnFloat {
      return new CsvColumnFloat($g.abi.libs_by_name.get(stdlib.name)!.mapped[85], name, mandatory, offset);
    }
  }

  export class CsvColumnString extends $sdk.GCObject {
    static readonly _type = 'io::CsvColumnString';

    name: string | null;
    mandatory: boolean | null;
    offset: bigint | number | null;
    trim: boolean | null;
    try_number: boolean | null;
    try_json: boolean | null;
    values: globalThis.Array<string> | null;
    encoder: io.TextEncoder | null;

    static createFrom({name, mandatory, offset, trim, try_number, try_json, values, encoder}: {name: string | null, mandatory: boolean | null, offset: bigint | number | null, trim: boolean | null, try_number: boolean | null, try_json: boolean | null, values: globalThis.Array<string> | null, encoder: io.TextEncoder | null}, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumnString {
      return new CsvColumnString($g.abi.libs_by_name.get(stdlib.name)!.mapped[86], name, mandatory, offset, trim, try_number, try_json, values, encoder);
    }
    static create(name: string | null, mandatory: boolean | null, offset: bigint | number | null, trim: boolean | null, try_number: boolean | null, try_json: boolean | null, values: globalThis.Array<string> | null, encoder: io.TextEncoder | null, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumnString {
      return new CsvColumnString($g.abi.libs_by_name.get(stdlib.name)!.mapped[86], name, mandatory, offset, trim, try_number, try_json, values, encoder);
    }
  }

  export class SmtpMode extends $sdk.GCEnum {
    static readonly _type = 'io::SmtpMode';

    constructor(type: $sdk.AbiType, offset: number, public key: SmtpMode.Field, value: $sdk.Value) {
      super(type, offset, key, value);
    }

    static plain($g: $sdk.GreyCat = globalThis.greycat.default): SmtpMode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[87];
      return t.static_values['plain'];
    }
    static ssl_tls($g: $sdk.GreyCat = globalThis.greycat.default): SmtpMode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[87];
      return t.static_values['ssl_tls'];
    }
    static starttls($g: $sdk.GreyCat = globalThis.greycat.default): SmtpMode {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[87];
      return t.static_values['starttls'];
    }
    static $fields($g: $sdk.GreyCat = globalThis.greycat.default): SmtpMode[] {
      const t = $g.abi.libs_by_name.get(stdlib.name)!.mapped[87];
      return t.enum_values!;
    }
  }

  export namespace SmtpMode  {
    export type Field = 'plain'|'ssl_tls'|'starttls';
  }
  export class CsvColumnDuration extends $sdk.GCObject {
    static readonly _type = 'io::CsvColumnDuration';

    name: string | null;
    mandatory: boolean | null;
    offset: bigint | number | null;
    unit: core.DurationUnit | null;

    static createFrom({name, mandatory, offset, unit}: {name: string | null, mandatory: boolean | null, offset: bigint | number | null, unit: core.DurationUnit | null}, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumnDuration {
      return new CsvColumnDuration($g.abi.libs_by_name.get(stdlib.name)!.mapped[88], name, mandatory, offset, unit);
    }
    static create(name: string | null, mandatory: boolean | null, offset: bigint | number | null, unit: core.DurationUnit | null, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumnDuration {
      return new CsvColumnDuration($g.abi.libs_by_name.get(stdlib.name)!.mapped[88], name, mandatory, offset, unit);
    }
  }

  export class Http extends $sdk.GCObject {
    static readonly _type = 'io::Http';


    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): Http {
      return new Http($g.abi.libs_by_name.get(stdlib.name)!.mapped[89]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): Http {
      return new Http($g.abi.libs_by_name.get(stdlib.name)!.mapped[89]);
    }
  }

  export class CsvAnalysis extends $sdk.GCObject {
    static readonly _type = 'io::CsvAnalysis';

    config: io.CsvAnalysisConfig | null;
    statistics: io.CsvStatistics | null;

    static analyze(file_path: string, config: io.CsvAnalysisConfig | null, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<io.CsvStatistics> {
      return $g.call('io::CsvAnalysis::analyze', [file_path, config], $signal);
    }
    static createFrom({config, statistics}: {config: io.CsvAnalysisConfig | null, statistics: io.CsvStatistics | null}, $g: $sdk.GreyCat = globalThis.greycat.default): CsvAnalysis {
      return new CsvAnalysis($g.abi.libs_by_name.get(stdlib.name)!.mapped[90], config, statistics);
    }
    static create(config: io.CsvAnalysisConfig | null, statistics: io.CsvStatistics | null, $g: $sdk.GreyCat = globalThis.greycat.default): CsvAnalysis {
      return new CsvAnalysis($g.abi.libs_by_name.get(stdlib.name)!.mapped[90], config, statistics);
    }
  }

  export class CsvFormat extends $sdk.GCObject {
    static readonly _type = 'io::CsvFormat';

    header_lines: bigint | number | null;
    separator: string | null;
    string_delimiter: string | null;
    decimal_separator: string | null;
    thousands_separator: string | null;
    columns_size: bigint | number | null;
    columns: globalThis.Array<io.CsvColumn> | null;

    static generate(format: io.CsvFormat, ident_col: bigint | number | null, time_col: bigint | number | null, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<string> {
      return $g.call('io::CsvFormat::generate', [format, ident_col, time_col], $signal);
    }
    static validate(path: string, format: io.CsvFormat, max_rows: bigint | number | null, max_invalid: bigint | number | null, invalid_path: string | null, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<io.CsvValidateResult> {
      return $g.call('io::CsvFormat::validate', [path, format, max_rows, max_invalid, invalid_path], $signal);
    }
    static sample(path: string, format: io.CsvFormat | null, offset: bigint | number | null, max: bigint | number | null, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<core.Table> {
      return $g.call('io::CsvFormat::sample', [path, format, offset, max], $signal);
    }
    static infer(analysis: io.CsvStatistics, $g: $sdk.GreyCat = globalThis.greycat.default, $signal?: AbortSignal): Promise<io.CsvFormat> {
      return $g.call('io::CsvFormat::infer', [analysis], $signal);
    }
    static createFrom({header_lines, separator, string_delimiter, decimal_separator, thousands_separator, columns_size, columns}: {header_lines: bigint | number | null, separator: string | null, string_delimiter: string | null, decimal_separator: string | null, thousands_separator: string | null, columns_size: bigint | number | null, columns: globalThis.Array<io.CsvColumn> | null}, $g: $sdk.GreyCat = globalThis.greycat.default): CsvFormat {
      return new CsvFormat($g.abi.libs_by_name.get(stdlib.name)!.mapped[91], header_lines, separator, string_delimiter, decimal_separator, thousands_separator, columns_size, columns);
    }
    static create(header_lines: bigint | number | null, separator: string | null, string_delimiter: string | null, decimal_separator: string | null, thousands_separator: string | null, columns_size: bigint | number | null, columns: globalThis.Array<io.CsvColumn> | null, $g: $sdk.GreyCat = globalThis.greycat.default): CsvFormat {
      return new CsvFormat($g.abi.libs_by_name.get(stdlib.name)!.mapped[91], header_lines, separator, string_delimiter, decimal_separator, thousands_separator, columns_size, columns);
    }
  }

  export class CsvColumnIgnored extends $sdk.GCObject {
    static readonly _type = 'io::CsvColumnIgnored';

    name: string | null;
    mandatory: boolean | null;
    offset: bigint | number | null;

    static createFrom({name, mandatory, offset}: {name: string | null, mandatory: boolean | null, offset: bigint | number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumnIgnored {
      return new CsvColumnIgnored($g.abi.libs_by_name.get(stdlib.name)!.mapped[92], name, mandatory, offset);
    }
    static create(name: string | null, mandatory: boolean | null, offset: bigint | number | null, $g: $sdk.GreyCat = globalThis.greycat.default): CsvColumnIgnored {
      return new CsvColumnIgnored($g.abi.libs_by_name.get(stdlib.name)!.mapped[92], name, mandatory, offset);
    }
  }

  export class CsvColumn extends $sdk.GCObject {
    static readonly _type = 'io::CsvColumn';

    name: string | null;
    mandatory: boolean | null;
    offset: bigint | number | null;

  }

  export class CsvStatistics extends $sdk.GCObject {
    static readonly _type = 'io::CsvStatistics';

    header_lines: bigint | number | null;
    separator: string | null;
    string_delimiter: string | null;
    decimal_separator: string | null;
    thousands_separator: string | null;
    columns: globalThis.Array<io.CsvColumnStatistics>;
    line_count: bigint | number;
    fail_count: bigint | number;
    file_count: bigint | number;

    static createFrom({header_lines, separator, string_delimiter, decimal_separator, thousands_separator, columns, line_count, fail_count, file_count}: {header_lines: bigint | number | null, separator: string | null, string_delimiter: string | null, decimal_separator: string | null, thousands_separator: string | null, columns: globalThis.Array<io.CsvColumnStatistics>, line_count: bigint | number, fail_count: bigint | number, file_count: bigint | number}, $g: $sdk.GreyCat = globalThis.greycat.default): CsvStatistics {
      return new CsvStatistics($g.abi.libs_by_name.get(stdlib.name)!.mapped[94], header_lines, separator, string_delimiter, decimal_separator, thousands_separator, columns, line_count, fail_count, file_count);
    }
    static create(header_lines: bigint | number | null, separator: string | null, string_delimiter: string | null, decimal_separator: string | null, thousands_separator: string | null, columns: globalThis.Array<io.CsvColumnStatistics>, line_count: bigint | number, fail_count: bigint | number, file_count: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default): CsvStatistics {
      return new CsvStatistics($g.abi.libs_by_name.get(stdlib.name)!.mapped[94], header_lines, separator, string_delimiter, decimal_separator, thousands_separator, columns, line_count, fail_count, file_count);
    }
  }

}

export namespace util {
  export class ProgressTracker extends $sdk.GCObject {
    static readonly _type = 'util::ProgressTracker';

    start: $sdk.std.core.time;
    total: bigint | number | null;
    counter: bigint | number | null;
    duration: $sdk.std.core.duration | null;
    progress: number | null;
    speed: number | null;
    remaining: $sdk.std.core.duration | null;

    static createFrom({start, total, counter, duration, progress, speed, remaining}: {start: $sdk.std.core.time, total: bigint | number | null, counter: bigint | number | null, duration: $sdk.std.core.duration | null, progress: number | null, speed: number | null, remaining: $sdk.std.core.duration | null}, $g: $sdk.GreyCat = globalThis.greycat.default): ProgressTracker {
      return new ProgressTracker($g.abi.libs_by_name.get(stdlib.name)!.mapped[95], start, total, counter, duration, progress, speed, remaining);
    }
    static create(start: $sdk.std.core.time, total: bigint | number | null, counter: bigint | number | null, duration: $sdk.std.core.duration | null, progress: number | null, speed: number | null, remaining: $sdk.std.core.duration | null, $g: $sdk.GreyCat = globalThis.greycat.default): ProgressTracker {
      return new ProgressTracker($g.abi.libs_by_name.get(stdlib.name)!.mapped[95], start, total, counter, duration, progress, speed, remaining);
    }
  }

  export class HistogramInt extends std_n.util.HistogramInt {
  }

  export class TimeWindow extends std_n.util.TimeWindow {
  }

  export class SlidingWindow extends std_n.util.SlidingWindow {
  }

  export class Assert extends $sdk.GCObject {
    static readonly _type = 'util::Assert';


    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): Assert {
      return new Assert($g.abi.libs_by_name.get(stdlib.name)!.mapped[99]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): Assert {
      return new Assert($g.abi.libs_by_name.get(stdlib.name)!.mapped[99]);
    }
  }

  export class Buffer extends std_n.util.Buffer {
  }

  export class GaussianProfile extends std_n.util.GaussianProfile {
  }

  export class Random extends $sdk.GCObject {
    static readonly _type = 'util::Random';

    seed: bigint | number;
    v: number;

    static createFrom({seed, v}: {seed: bigint | number, v: number}, $g: $sdk.GreyCat = globalThis.greycat.default): Random {
      return new Random($g.abi.libs_by_name.get(stdlib.name)!.mapped[102], seed, v);
    }
    static create(seed: bigint | number, v: number, $g: $sdk.GreyCat = globalThis.greycat.default): Random {
      return new Random($g.abi.libs_by_name.get(stdlib.name)!.mapped[102], seed, v);
    }
  }

  export class Gaussian extends $sdk.GCObject {
    static readonly _type = 'util::Gaussian';

    sum: number | null;
    sum_sq: number | null;
    count: bigint | number | null;
    min: number | null;
    max: number | null;

    static createFrom({sum, sum_sq, count, min, max}: {sum: number | null, sum_sq: number | null, count: bigint | number | null, min: number | null, max: number | null}, $g: $sdk.GreyCat = globalThis.greycat.default): Gaussian {
      return new Gaussian($g.abi.libs_by_name.get(stdlib.name)!.mapped[103], sum, sum_sq, count, min, max);
    }
    static create(sum: number | null, sum_sq: number | null, count: bigint | number | null, min: number | null, max: number | null, $g: $sdk.GreyCat = globalThis.greycat.default): Gaussian {
      return new Gaussian($g.abi.libs_by_name.get(stdlib.name)!.mapped[103], sum, sum_sq, count, min, max);
    }
  }

  export class Iban extends std_n.util.Iban {
  }

  export class Queue<T extends $sdk.Value = any> extends std_n.util.Queue<T> {
  }

  export class BoxPlotFloat extends $sdk.GCObject {
    static readonly _type = 'util::BoxPlotFloat';

    min: number;
    max: number;
    whiskerLow: number;
    whiskerHigh: number;
    percentile1: number;
    percentile5: number;
    percentile25: number;
    percentile50: number;
    percentile75: number;
    percentile95: number;
    percentile99: number;
    countOutliersLow: bigint | number;
    countOutliersHigh: bigint | number;
    percentageOutliersLow: number;
    percentageOutliersHigh: number;
    sum: number;
    avg: number;
    std: number;
    size: bigint | number;

    static createFrom({min, max, whiskerLow, whiskerHigh, percentile1, percentile5, percentile25, percentile50, percentile75, percentile95, percentile99, countOutliersLow, countOutliersHigh, percentageOutliersLow, percentageOutliersHigh, sum, avg, std, size}: {min: number, max: number, whiskerLow: number, whiskerHigh: number, percentile1: number, percentile5: number, percentile25: number, percentile50: number, percentile75: number, percentile95: number, percentile99: number, countOutliersLow: bigint | number, countOutliersHigh: bigint | number, percentageOutliersLow: number, percentageOutliersHigh: number, sum: number, avg: number, std: number, size: bigint | number}, $g: $sdk.GreyCat = globalThis.greycat.default): BoxPlotFloat {
      return new BoxPlotFloat($g.abi.libs_by_name.get(stdlib.name)!.mapped[106], min, max, whiskerLow, whiskerHigh, percentile1, percentile5, percentile25, percentile50, percentile75, percentile95, percentile99, countOutliersLow, countOutliersHigh, percentageOutliersLow, percentageOutliersHigh, sum, avg, std, size);
    }
    static create(min: number, max: number, whiskerLow: number, whiskerHigh: number, percentile1: number, percentile5: number, percentile25: number, percentile50: number, percentile75: number, percentile95: number, percentile99: number, countOutliersLow: bigint | number, countOutliersHigh: bigint | number, percentageOutliersLow: number, percentageOutliersHigh: number, sum: number, avg: number, std: number, size: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default): BoxPlotFloat {
      return new BoxPlotFloat($g.abi.libs_by_name.get(stdlib.name)!.mapped[106], min, max, whiskerLow, whiskerHigh, percentile1, percentile5, percentile25, percentile50, percentile75, percentile95, percentile99, countOutliersLow, countOutliersHigh, percentageOutliersLow, percentageOutliersHigh, sum, avg, std, size);
    }
  }

  export class HistogramFloat extends std_n.util.HistogramFloat {
  }

  export class DenseDim extends $sdk.GCObject {
    static readonly _type = 'util::DenseDim';

    min: bigint | number;
    max: bigint | number;
    step: bigint | number;

    static createFrom({min, max, step}: {min: bigint | number, max: bigint | number, step: bigint | number}, $g: $sdk.GreyCat = globalThis.greycat.default): DenseDim {
      return new DenseDim($g.abi.libs_by_name.get(stdlib.name)!.mapped[108], min, max, step);
    }
    static create(min: bigint | number, max: bigint | number, step: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default): DenseDim {
      return new DenseDim($g.abi.libs_by_name.get(stdlib.name)!.mapped[108], min, max, step);
    }
  }

  export class BoxPlotInt extends $sdk.GCObject {
    static readonly _type = 'util::BoxPlotInt';

    min: bigint | number;
    max: bigint | number;
    whiskerLow: bigint | number;
    whiskerHigh: bigint | number;
    percentile1: bigint | number;
    percentile5: bigint | number;
    percentile25: bigint | number;
    percentile50: bigint | number;
    percentile75: bigint | number;
    percentile95: bigint | number;
    percentile99: bigint | number;
    countOutliersLow: bigint | number;
    countOutliersHigh: bigint | number;
    percentageOutliersLow: number;
    percentageOutliersHigh: number;
    sum: number;
    avg: number;
    std: number;
    size: bigint | number;

    static createFrom({min, max, whiskerLow, whiskerHigh, percentile1, percentile5, percentile25, percentile50, percentile75, percentile95, percentile99, countOutliersLow, countOutliersHigh, percentageOutliersLow, percentageOutliersHigh, sum, avg, std, size}: {min: bigint | number, max: bigint | number, whiskerLow: bigint | number, whiskerHigh: bigint | number, percentile1: bigint | number, percentile5: bigint | number, percentile25: bigint | number, percentile50: bigint | number, percentile75: bigint | number, percentile95: bigint | number, percentile99: bigint | number, countOutliersLow: bigint | number, countOutliersHigh: bigint | number, percentageOutliersLow: number, percentageOutliersHigh: number, sum: number, avg: number, std: number, size: bigint | number}, $g: $sdk.GreyCat = globalThis.greycat.default): BoxPlotInt {
      return new BoxPlotInt($g.abi.libs_by_name.get(stdlib.name)!.mapped[109], min, max, whiskerLow, whiskerHigh, percentile1, percentile5, percentile25, percentile50, percentile75, percentile95, percentile99, countOutliersLow, countOutliersHigh, percentageOutliersLow, percentageOutliersHigh, sum, avg, std, size);
    }
    static create(min: bigint | number, max: bigint | number, whiskerLow: bigint | number, whiskerHigh: bigint | number, percentile1: bigint | number, percentile5: bigint | number, percentile25: bigint | number, percentile50: bigint | number, percentile75: bigint | number, percentile95: bigint | number, percentile99: bigint | number, countOutliersLow: bigint | number, countOutliersHigh: bigint | number, percentageOutliersLow: number, percentageOutliersHigh: number, sum: number, avg: number, std: number, size: bigint | number, $g: $sdk.GreyCat = globalThis.greycat.default): BoxPlotInt {
      return new BoxPlotInt($g.abi.libs_by_name.get(stdlib.name)!.mapped[109], min, max, whiskerLow, whiskerHigh, percentile1, percentile5, percentile25, percentile50, percentile75, percentile95, percentile99, countOutliersLow, countOutliersHigh, percentageOutliersLow, percentageOutliersHigh, sum, avg, std, size);
    }
  }

  export class Plot extends $sdk.GCObject {
    static readonly _type = 'util::Plot';


    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): Plot {
      return new Plot($g.abi.libs_by_name.get(stdlib.name)!.mapped[110]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): Plot {
      return new Plot($g.abi.libs_by_name.get(stdlib.name)!.mapped[110]);
    }
  }

  export class Crypto extends $sdk.GCObject {
    static readonly _type = 'util::Crypto';


    static createFrom($g: $sdk.GreyCat = globalThis.greycat.default): Crypto {
      return new Crypto($g.abi.libs_by_name.get(stdlib.name)!.mapped[111]);
    }
    static create($g: $sdk.GreyCat = globalThis.greycat.default): Crypto {
      return new Crypto($g.abi.libs_by_name.get(stdlib.name)!.mapped[111]);
    }
  }

}

export const stdlib: $sdk.Library = {
  name: 'std',
  mapped: new globalThis.Array(112),
  configure(loaders, factories) {
    factories.set(core.String._type, core.String);
    loaders.set(core.String._type, std_n.core.String.load);
    factories.set(core.Error._type, core.Error);
    loaders.set(core.Error._type, std_n.core.Error.load);
    factories.set(core.GeoCircle._type, core.GeoCircle);
    factories.set(core.Array._type, core.Array);
    loaders.set(core.Array._type, std_n.core.Array.load);
    factories.set(core.ErrorCode._type, core.ErrorCode);
    factories.set(core.geo._type, core.geo);
    loaders.set(core.geo._type, std_n.core.geo.load);
    factories.set(core.ti4d._type, core.ti4d);
    loaders.set(core.ti4d._type, std_n.core.ti4d.load);
    factories.set(core.nodeTime._type, core.nodeTime);
    loaders.set(core.nodeTime._type, std_n.core.nodeTime.load);
    factories.set(core.Date._type, core.Date);
    loaders.set(core.Date._type, std_n.core.Date.load);
    factories.set(core.TimeZone._type, core.TimeZone);
    factories.set(core.Table._type, core.Table);
    loaders.set(core.Table._type, std_n.core.Table.load);
    factories.set(core.ti6d._type, core.ti6d);
    loaders.set(core.ti6d._type, std_n.core.ti6d.load);
    factories.set(core.nodeGeo._type, core.nodeGeo);
    loaders.set(core.nodeGeo._type, std_n.core.nodeGeo.load);
    factories.set(core.duration._type, core.duration);
    loaders.set(core.duration._type, std_n.core.duration.load);
    factories.set(core.Date2._type, core.Date2);
    factories.set(core.DurationUnit._type, core.DurationUnit);
    factories.set(core.tf3d._type, core.tf3d);
    loaders.set(core.tf3d._type, std_n.core.tf3d.load);
    factories.set(core.Tensor._type, core.Tensor);
    loaders.set(core.Tensor._type, std_n.core.Tensor.load);
    factories.set(core.ti2d._type, core.ti2d);
    loaders.set(core.ti2d._type, std_n.core.ti2d.load);
    factories.set(core.Map._type, core.Map);
    loaders.set(core.Map._type, std_n.core.Map.load);
    factories.set(core.MathConstants._type, core.MathConstants);
    factories.set(core.nodeIndex._type, core.nodeIndex);
    loaders.set(core.nodeIndex._type, std_n.core.nodeIndex.load);
    factories.set(core.tf4d._type, core.tf4d);
    loaders.set(core.tf4d._type, std_n.core.tf4d.load);
    factories.set(core.TableColumnMapping._type, core.TableColumnMapping);
    factories.set(core.nodeList._type, core.nodeList);
    loaders.set(core.nodeList._type, std_n.core.nodeList.load);
    factories.set(core.TensorType._type, core.TensorType);
    factories.set(core.Tuple._type, core.Tuple);
    factories.set(core.tf2d._type, core.tf2d);
    loaders.set(core.tf2d._type, std_n.core.tf2d.load);
    factories.set(core.function_._type, core.function_);
    loaders.set(core.function_._type, std_n.core.function_.load);
    factories.set(core.TableColumnMeta._type, core.TableColumnMeta);
    factories.set(core.GeoBox._type, core.GeoBox);
    factories.set(core.node._type, core.node);
    loaders.set(core.node._type, std_n.core.node.load);
    factories.set(core.GeoPoly._type, core.GeoPoly);
    factories.set(core.nodeIndexBucket._type, core.nodeIndexBucket);
    loaders.set(core.nodeIndexBucket._type, std_n.core.nodeIndexBucket.load);
    factories.set(core.time._type, core.time);
    loaders.set(core.time._type, std_n.core.time.load);
    factories.set(core.ti10d._type, core.ti10d);
    loaders.set(core.ti10d._type, std_n.core.ti10d.load);
    factories.set(core.SamplingMode._type, core.SamplingMode);
    factories.set(core.ti5d._type, core.ti5d);
    loaders.set(core.ti5d._type, std_n.core.ti5d.load);
    factories.set(core.DatePart._type, core.DatePart);
    factories.set(core.ti3d._type, core.ti3d);
    loaders.set(core.ti3d._type, std_n.core.ti3d.load);
    factories.set(core.nodeTimeSingleton._type, core.nodeTimeSingleton);
    factories.set(core.NodeInfo._type, core.NodeInfo);
    factories.set(runtime.RuntimeInfo._type, runtime.RuntimeInfo);
    factories.set(runtime.PeriodicTask._type, runtime.PeriodicTask);
    factories.set(runtime.UserGroupPolicy._type, runtime.UserGroupPolicy);
    factories.set(runtime.User._type, runtime.User);
    factories.set(runtime.TaskRequest._type, runtime.TaskRequest);
    factories.set(runtime.UserRole._type, runtime.UserRole);
    factories.set(runtime.StoreStat._type, runtime.StoreStat);
    factories.set(runtime.System._type, runtime.System);
    factories.set(runtime.Runtime._type, runtime.Runtime);
    factories.set(runtime.TaskInfo._type, runtime.TaskInfo);
    factories.set(runtime.TaskStatus._type, runtime.TaskStatus);
    factories.set(runtime.Debug._type, runtime.Debug);
    factories.set(runtime.TaskResult._type, runtime.TaskResult);
    factories.set(runtime.SecurityPolicy._type, runtime.SecurityPolicy);
    factories.set(runtime.DebugFrame._type, runtime.DebugFrame);
    factories.set(runtime.TaskBase._type, runtime.TaskBase);
    factories.set(runtime.OpenIDConnect._type, runtime.OpenIDConnect);
    factories.set(runtime.SecurityFields._type, runtime.SecurityFields);
    factories.set(runtime.UserCredential._type, runtime.UserCredential);
    factories.set(runtime.DebugInfo._type, runtime.DebugInfo);
    factories.set(runtime.TaskMode._type, runtime.TaskMode);
    factories.set(runtime.SecurityEntity._type, runtime.SecurityEntity);
    factories.set(runtime.License._type, runtime.License);
    factories.set(runtime.DebugBreakpoint._type, runtime.DebugBreakpoint);
    factories.set(runtime.UserGroupPolicyType._type, runtime.UserGroupPolicyType);
    factories.set(runtime.LicenseType._type, runtime.LicenseType);
    factories.set(runtime.Task._type, runtime.Task);
    factories.set(runtime.UserGroup._type, runtime.UserGroup);
    factories.set(io.CsvColumnDate._type, io.CsvColumnDate);
    factories.set(io.Email._type, io.Email);
    factories.set(io.Mqtt._type, io.Mqtt);
    factories.set(io.CsvValidateResult._type, io.CsvValidateResult);
    factories.set(io.File._type, io.File);
    factories.set(io.TextEncoder._type, io.TextEncoder);
    factories.set(io.Url._type, io.Url);
    factories.set(io.CsvColumnTime._type, io.CsvColumnTime);
    factories.set(io.CsvAnalysisConfig._type, io.CsvAnalysisConfig);
    factories.set(io.HttpHeader._type, io.HttpHeader);
    factories.set(io.CsvColumnBoolean._type, io.CsvColumnBoolean);
    factories.set(io.CsvColumnStatistics._type, io.CsvColumnStatistics);
    factories.set(io.Smtp._type, io.Smtp);
    factories.set(io.CsvColumnInteger._type, io.CsvColumnInteger);
    factories.set(io.SmtpAuth._type, io.SmtpAuth);
    factories.set(io.CsvColumnFloat._type, io.CsvColumnFloat);
    factories.set(io.CsvColumnString._type, io.CsvColumnString);
    factories.set(io.SmtpMode._type, io.SmtpMode);
    factories.set(io.CsvColumnDuration._type, io.CsvColumnDuration);
    factories.set(io.Http._type, io.Http);
    factories.set(io.CsvAnalysis._type, io.CsvAnalysis);
    factories.set(io.CsvFormat._type, io.CsvFormat);
    factories.set(io.CsvColumnIgnored._type, io.CsvColumnIgnored);
    factories.set(io.CsvColumn._type, io.CsvColumn);
    factories.set(io.CsvStatistics._type, io.CsvStatistics);
    factories.set(util.ProgressTracker._type, util.ProgressTracker);
    factories.set(util.HistogramInt._type, util.HistogramInt);
    loaders.set(util.HistogramInt._type, std_n.util.HistogramInt.load);
    factories.set(util.TimeWindow._type, util.TimeWindow);
    loaders.set(util.TimeWindow._type, std_n.util.TimeWindow.load);
    factories.set(util.SlidingWindow._type, util.SlidingWindow);
    loaders.set(util.SlidingWindow._type, std_n.util.SlidingWindow.load);
    factories.set(util.Assert._type, util.Assert);
    factories.set(util.Buffer._type, util.Buffer);
    loaders.set(util.Buffer._type, std_n.util.Buffer.load);
    factories.set(util.GaussianProfile._type, util.GaussianProfile);
    loaders.set(util.GaussianProfile._type, std_n.util.GaussianProfile.load);
    factories.set(util.Random._type, util.Random);
    factories.set(util.Gaussian._type, util.Gaussian);
    factories.set(util.Iban._type, util.Iban);
    loaders.set(util.Iban._type, std_n.util.Iban.load);
    factories.set(util.Queue._type, util.Queue);
    loaders.set(util.Queue._type, std_n.util.Queue.load);
    factories.set(util.BoxPlotFloat._type, util.BoxPlotFloat);
    factories.set(util.HistogramFloat._type, util.HistogramFloat);
    loaders.set(util.HistogramFloat._type, std_n.util.HistogramFloat.load);
    factories.set(util.DenseDim._type, util.DenseDim);
    factories.set(util.BoxPlotInt._type, util.BoxPlotInt);
    factories.set(util.Plot._type, util.Plot);
    factories.set(util.Crypto._type, util.Crypto);
  },
  init(abi) {
    this.mapped[0] = abi.type_by_fqn.get(core.String._type);
    this.mapped[1] = abi.type_by_fqn.get(core.Error._type);
    this.mapped[2] = abi.type_by_fqn.get(core.GeoCircle._type);
    this.mapped[3] = abi.type_by_fqn.get(core.Array._type);
    this.mapped[4] = abi.type_by_fqn.get(core.ErrorCode._type);
    this.mapped[4]?.resolveGeneratedOffsetWithValues('none', 0,'interrupted', 1,'await', 2,'too_deep_iterator', 3,'wrong_operand', 4,'wrong_params', 5,'wrong_param_type', 6,'wrong_numeric', 7,'wrong_state', 8,'wrong_null', 9,'unresolved_ref', 10,'throw', 12,'wrong_type', 13,'wrong_dimension', 14,'unsupported_operation', 15,'unsupported_type', 16,'dimensions_mismatch', 17,'timeout', 18,'forbidden', 19,'runtime_error', 20);
    this.mapped[5] = abi.type_by_fqn.get(core.geo._type);
    if (this.mapped[5]) {
      this.mapped[5].static_values = {['min']: abi.createGeo(-85.0511287602,-179.9999999581),['max']: abi.createGeo(85.0511287602,179.9999999581),};
    }
    this.mapped[6] = abi.type_by_fqn.get(core.ti4d._type);
    this.mapped[7] = abi.type_by_fqn.get(core.nodeTime._type);
    this.mapped[8] = abi.type_by_fqn.get(core.Date._type);
    this.mapped[9] = abi.type_by_fqn.get(core.TimeZone._type);
    this.mapped[9]?.resolveGeneratedOffsetWithValues('Africa_Accra', "Africa/Accra",'Africa_Bamako', "Africa/Bamako",'Africa_Banjul', "Africa/Banjul",'Africa_Conakry', "Africa/Conakry",'Africa_Dakar', "Africa/Dakar",'Africa_Freetown', "Africa/Freetown",'Africa_Lome', "Africa/Lome",'Africa_Nouakchott', "Africa/Nouakchott",'Africa_Ouagadougou', "Africa/Ouagadougou",'Africa_Timbuktu', "Africa/Timbuktu",'Atlantic_Reykjavik', "Atlantic/Reykjavik",'Atlantic_St_Helena', "Atlantic/St_Helena",'Iceland', "Iceland",'Egypt', "Egypt",'Africa_Maseru', "Africa/Maseru",'Africa_Mbabane', "Africa/Mbabane",'Africa_Bangui', "Africa/Bangui",'Africa_Brazzaville', "Africa/Brazzaville",'Africa_Douala', "Africa/Douala",'Africa_Kinshasa', "Africa/Kinshasa",'Africa_Libreville', "Africa/Libreville",'Africa_Luanda', "Africa/Luanda",'Africa_Malabo', "Africa/Malabo",'Africa_Niamey', "Africa/Niamey",'Africa_Porto_Novo', "Africa/Porto-Novo",'Africa_Blantyre', "Africa/Blantyre",'Africa_Bujumbura', "Africa/Bujumbura",'Africa_Gaborone', "Africa/Gaborone",'Africa_Harare', "Africa/Harare",'Africa_Kigali', "Africa/Kigali",'Africa_Lubumbashi', "Africa/Lubumbashi",'Africa_Lusaka', "Africa/Lusaka",'Africa_Addis_Ababa', "Africa/Addis_Ababa",'Africa_Asmara', "Africa/Asmara",'Africa_Asmera', "Africa/Asmera",'Africa_Dar_es_Salaam', "Africa/Dar_es_Salaam",'Africa_Djibouti', "Africa/Djibouti",'Africa_Kampala', "Africa/Kampala",'Africa_Mogadishu', "Africa/Mogadishu",'Indian_Antananarivo', "Indian/Antananarivo",'Indian_Comoro', "Indian/Comoro",'Indian_Mayotte', "Indian/Mayotte",'Libya', "Libya",'America_Atka', "America/Atka",'US_Aleutian', "US/Aleutian",'US_Alaska', "US/Alaska",'America_Buenos_Aires', "America/Buenos_Aires",'America_Argentina_ComodRivadavia', "America/Argentina/ComodRivadavia",'America_Catamarca', "America/Catamarca",'America_Cordoba', "America/Cordoba",'America_Rosario', "America/Rosario",'America_Jujuy', "America/Jujuy",'America_Mendoza', "America/Mendoza",'US_Central', "US/Central",'America_Shiprock', "America/Shiprock",'Navajo', "Navajo",'US_Mountain', "US/Mountain",'US_Michigan', "US/Michigan",'America_Yellowknife', "America/Yellowknife",'Canada_Mountain', "Canada/Mountain",'Canada_Atlantic', "Canada/Atlantic",'Cuba', "Cuba",'America_Fort_Wayne', "America/Fort_Wayne",'America_Indianapolis', "America/Indianapolis",'US_East_Indiana', "US/East-Indiana",'America_Knox_IN', "America/Knox_IN",'US_Indiana_Starke', "US/Indiana-Starke",'America_Pangnirtung', "America/Pangnirtung",'Jamaica', "Jamaica",'America_Louisville', "America/Louisville",'US_Pacific', "US/Pacific",'Brazil_West', "Brazil/West",'Mexico_BajaSur', "Mexico/BajaSur",'Mexico_General', "Mexico/General",'US_Eastern', "US/Eastern",'Brazil_DeNoronha', "Brazil/DeNoronha",'America_Godthab', "America/Godthab",'America_Atikokan', "America/Atikokan",'America_Cayman', "America/Cayman",'America_Coral_Harbour', "America/Coral_Harbour",'America_Creston', "America/Creston",'US_Arizona', "US/Arizona",'America_Anguilla', "America/Anguilla",'America_Antigua', "America/Antigua",'America_Aruba', "America/Aruba",'America_Blanc_Sablon', "America/Blanc-Sablon",'America_Curacao', "America/Curacao",'America_Dominica', "America/Dominica",'America_Grenada', "America/Grenada",'America_Guadeloupe', "America/Guadeloupe",'America_Kralendijk', "America/Kralendijk",'America_Lower_Princes', "America/Lower_Princes",'America_Marigot', "America/Marigot",'America_Montserrat', "America/Montserrat",'America_Port_of_Spain', "America/Port_of_Spain",'America_St_Barthelemy', "America/St_Barthelemy",'America_St_Kitts', "America/St_Kitts",'America_St_Lucia', "America/St_Lucia",'America_St_Thomas', "America/St_Thomas",'America_St_Vincent', "America/St_Vincent",'America_Tortola', "America/Tortola",'America_Virgin', "America/Virgin",'Canada_Saskatchewan', "Canada/Saskatchewan",'America_Porto_Acre', "America/Porto_Acre",'Brazil_Acre', "Brazil/Acre",'Chile_Continental', "Chile/Continental",'Brazil_East', "Brazil/East",'Canada_Newfoundland', "Canada/Newfoundland",'America_Ensenada', "America/Ensenada",'America_Santa_Isabel', "America/Santa_Isabel",'Mexico_BajaNorte', "Mexico/BajaNorte",'America_Montreal', "America/Montreal",'America_Nassau', "America/Nassau",'America_Nipigon', "America/Nipigon",'America_Thunder_Bay', "America/Thunder_Bay",'Canada_Eastern', "Canada/Eastern",'Canada_Pacific', "Canada/Pacific",'Canada_Yukon', "Canada/Yukon",'America_Rainy_River', "America/Rainy_River",'Canada_Central', "Canada/Central",'Asia_Ashkhabad', "Asia/Ashkhabad",'Asia_Phnom_Penh', "Asia/Phnom_Penh",'Asia_Vientiane', "Asia/Vientiane",'Indian_Christmas', "Indian/Christmas",'Asia_Dacca', "Asia/Dacca",'Asia_Muscat', "Asia/Muscat",'Indian_Mahe', "Indian/Mahe",'Indian_Reunion', "Indian/Reunion",'Asia_Saigon', "Asia/Saigon",'Hongkong', "Hongkong",'Asia_Tel_Aviv', "Asia/Tel_Aviv",'Israel', "Israel",'Asia_Katmandu', "Asia/Katmandu",'Asia_Calcutta', "Asia/Calcutta",'Asia_Brunei', "Asia/Brunei",'Asia_Macao', "Asia/Macao",'Asia_Ujung_Pandang', "Asia/Ujung_Pandang",'Europe_Nicosia', "Europe/Nicosia",'Asia_Bahrain', "Asia/Bahrain",'Antarctica_Syowa', "Antarctica/Syowa",'Asia_Aden', "Asia/Aden",'Asia_Kuwait', "Asia/Kuwait",'ROK', "ROK",'Asia_Chongqing', "Asia/Chongqing",'Asia_Chungking', "Asia/Chungking",'Asia_Harbin', "Asia/Harbin",'PRC', "PRC",'Asia_Kuala_Lumpur', "Asia/Kuala_Lumpur",'Singapore', "Singapore",'ROC', "ROC",'Iran', "Iran",'Asia_Thimbu', "Asia/Thimbu",'Japan', "Japan",'Asia_Ulan_Bator', "Asia/Ulan_Bator",'Antarctica_Vostok', "Antarctica/Vostok",'Asia_Kashgar', "Asia/Kashgar",'Asia_Rangoon', "Asia/Rangoon",'Indian_Cocos', "Indian/Cocos",'Atlantic_Faeroe', "Atlantic/Faeroe",'Australia_South', "Australia/South",'Australia_Queensland', "Australia/Queensland",'Australia_Yancowinna', "Australia/Yancowinna",'Australia_North', "Australia/North",'Australia_Currie', "Australia/Currie",'Australia_Tasmania', "Australia/Tasmania",'Australia_LHI', "Australia/LHI",'Australia_Victoria', "Australia/Victoria",'Australia_West', "Australia/West",'Australia_ACT', "Australia/ACT",'Australia_Canberra', "Australia/Canberra",'Australia_NSW', "Australia/NSW",'GMT', "GMT",'GMTx0', "GMT+0",'GMT_0', "GMT-0",'GMT0', "GMT0",'Greenwich', "Greenwich",'UCT', "UCT",'UTC', "UTC",'Universal', "Universal",'Zulu', "Zulu",'Europe_Ljubljana', "Europe/Ljubljana",'Europe_Podgorica', "Europe/Podgorica",'Europe_Sarajevo', "Europe/Sarajevo",'Europe_Skopje', "Europe/Skopje",'Europe_Zagreb', "Europe/Zagreb",'Arctic_Longyearbyen', "Arctic/Longyearbyen",'Atlantic_Jan_Mayen', "Atlantic/Jan_Mayen",'Europe_Copenhagen', "Europe/Copenhagen",'Europe_Oslo', "Europe/Oslo",'Europe_Stockholm', "Europe/Stockholm",'Europe_Amsterdam', "Europe/Amsterdam",'Europe_Luxembourg', "Europe/Luxembourg",'Europe_Tiraspol', "Europe/Tiraspol",'Eire', "Eire",'Europe_Mariehamn', "Europe/Mariehamn",'Asia_Istanbul', "Asia/Istanbul",'Turkey', "Turkey",'Europe_Kiev', "Europe/Kiev",'Europe_Uzhgorod', "Europe/Uzhgorod",'Europe_Zaporozhye', "Europe/Zaporozhye",'Portugal', "Portugal",'Europe_Belfast', "Europe/Belfast",'Europe_Guernsey', "Europe/Guernsey",'Europe_Isle_of_Man', "Europe/Isle_of_Man",'Europe_Jersey', "Europe/Jersey",'GB', "GB",'GB_Eire', "GB-Eire",'W_SU', "W-SU",'Europe_Monaco', "Europe/Monaco",'Europe_Bratislava', "Europe/Bratislava",'Europe_San_Marino', "Europe/San_Marino",'Europe_Vatican', "Europe/Vatican",'Poland', "Poland",'Europe_Busingen', "Europe/Busingen",'Europe_Vaduz', "Europe/Vaduz",'Indian_Kerguelen', "Indian/Kerguelen",'Antarctica_McMurdo', "Antarctica/McMurdo",'Antarctica_South_Pole', "Antarctica/South_Pole",'NZ', "NZ",'NZ_CHAT', "NZ-CHAT",'Chile_EasterIsland', "Chile/EasterIsland",'Pacific_Pohnpei', "Pacific/Pohnpei",'Pacific_Ponape', "Pacific/Ponape",'Pacific_Saipan', "Pacific/Saipan",'Pacific_Johnston', "Pacific/Johnston",'US_Hawaii', "US/Hawaii",'Pacific_Enderbury', "Pacific/Enderbury",'Kwajalein', "Kwajalein",'Pacific_Midway', "Pacific/Midway",'Pacific_Samoa', "Pacific/Samoa",'US_Samoa', "US/Samoa",'Antarctica_DumontDUrville', "Antarctica/DumontDUrville",'Pacific_Chuuk', "Pacific/Chuuk",'Pacific_Truk', "Pacific/Truk",'Pacific_Yap', "Pacific/Yap",'Pacific_Funafuti', "Pacific/Funafuti",'Pacific_Majuro', "Pacific/Majuro",'Pacific_Wake', "Pacific/Wake",'Pacific_Wallis', "Pacific/Wallis",'Africa_Abidjan', "Africa/Abidjan",'Africa_Algiers', "Africa/Algiers",'Africa_Bissau', "Africa/Bissau",'Africa_Cairo', "Africa/Cairo",'Africa_Casablanca', "Africa/Casablanca",'Africa_Ceuta', "Africa/Ceuta",'Africa_El_Aaiun', "Africa/El_Aaiun",'Africa_Johannesburg', "Africa/Johannesburg",'Africa_Juba', "Africa/Juba",'Africa_Khartoum', "Africa/Khartoum",'Africa_Lagos', "Africa/Lagos",'Africa_Maputo', "Africa/Maputo",'Africa_Monrovia', "Africa/Monrovia",'Africa_Nairobi', "Africa/Nairobi",'Africa_Ndjamena', "Africa/Ndjamena",'Africa_Sao_Tome', "Africa/Sao_Tome",'Africa_Tripoli', "Africa/Tripoli",'Africa_Tunis', "Africa/Tunis",'Africa_Windhoek', "Africa/Windhoek",'America_Adak', "America/Adak",'America_Anchorage', "America/Anchorage",'America_Araguaina', "America/Araguaina",'America_Argentina_Buenos_Aires', "America/Argentina/Buenos_Aires",'America_Argentina_Catamarca', "America/Argentina/Catamarca",'America_Argentina_Cordoba', "America/Argentina/Cordoba",'America_Argentina_Jujuy', "America/Argentina/Jujuy",'America_Argentina_La_Rioja', "America/Argentina/La_Rioja",'America_Argentina_Mendoza', "America/Argentina/Mendoza",'America_Argentina_Rio_Gallegos', "America/Argentina/Rio_Gallegos",'America_Argentina_Salta', "America/Argentina/Salta",'America_Argentina_San_Juan', "America/Argentina/San_Juan",'America_Argentina_San_Luis', "America/Argentina/San_Luis",'America_Argentina_Tucuman', "America/Argentina/Tucuman",'America_Argentina_Ushuaia', "America/Argentina/Ushuaia",'America_Asuncion', "America/Asuncion",'America_Bahia', "America/Bahia",'America_Bahia_Banderas', "America/Bahia_Banderas",'America_Barbados', "America/Barbados",'America_Belem', "America/Belem",'America_Belize', "America/Belize",'America_Boa_Vista', "America/Boa_Vista",'America_Bogota', "America/Bogota",'America_Boise', "America/Boise",'America_Cambridge_Bay', "America/Cambridge_Bay",'America_Campo_Grande', "America/Campo_Grande",'America_Cancun', "America/Cancun",'America_Caracas', "America/Caracas",'America_Cayenne', "America/Cayenne",'America_Chicago', "America/Chicago",'America_Chihuahua', "America/Chihuahua",'America_Ciudad_Juarez', "America/Ciudad_Juarez",'America_Costa_Rica', "America/Costa_Rica",'America_Cuiaba', "America/Cuiaba",'America_Danmarkshavn', "America/Danmarkshavn",'America_Dawson', "America/Dawson",'America_Dawson_Creek', "America/Dawson_Creek",'America_Denver', "America/Denver",'America_Detroit', "America/Detroit",'America_Edmonton', "America/Edmonton",'America_Eirunepe', "America/Eirunepe",'America_El_Salvador', "America/El_Salvador",'America_Fort_Nelson', "America/Fort_Nelson",'America_Fortaleza', "America/Fortaleza",'America_Glace_Bay', "America/Glace_Bay",'America_Goose_Bay', "America/Goose_Bay",'America_Grand_Turk', "America/Grand_Turk",'America_Guatemala', "America/Guatemala",'America_Guayaquil', "America/Guayaquil",'America_Guyana', "America/Guyana",'America_Halifax', "America/Halifax",'America_Havana', "America/Havana",'America_Hermosillo', "America/Hermosillo",'America_Indiana_Indianapolis', "America/Indiana/Indianapolis",'America_Indiana_Knox', "America/Indiana/Knox",'America_Indiana_Marengo', "America/Indiana/Marengo",'America_Indiana_Petersburg', "America/Indiana/Petersburg",'America_Indiana_Tell_City', "America/Indiana/Tell_City",'America_Indiana_Vevay', "America/Indiana/Vevay",'America_Indiana_Vincennes', "America/Indiana/Vincennes",'America_Indiana_Winamac', "America/Indiana/Winamac",'America_Inuvik', "America/Inuvik",'America_Iqaluit', "America/Iqaluit",'America_Jamaica', "America/Jamaica",'America_Juneau', "America/Juneau",'America_Kentucky_Louisville', "America/Kentucky/Louisville",'America_Kentucky_Monticello', "America/Kentucky/Monticello",'America_La_Paz', "America/La_Paz",'America_Lima', "America/Lima",'America_Los_Angeles', "America/Los_Angeles",'America_Maceio', "America/Maceio",'America_Managua', "America/Managua",'America_Manaus', "America/Manaus",'America_Martinique', "America/Martinique",'America_Matamoros', "America/Matamoros",'America_Mazatlan', "America/Mazatlan",'America_Menominee', "America/Menominee",'America_Merida', "America/Merida",'America_Metlakatla', "America/Metlakatla",'America_Mexico_City', "America/Mexico_City",'America_Miquelon', "America/Miquelon",'America_Moncton', "America/Moncton",'America_Monterrey', "America/Monterrey",'America_Montevideo', "America/Montevideo",'America_New_York', "America/New_York",'America_Nome', "America/Nome",'America_Noronha', "America/Noronha",'America_North_Dakota_Beulah', "America/North_Dakota/Beulah",'America_North_Dakota_Center', "America/North_Dakota/Center",'America_North_Dakota_New_Salem', "America/North_Dakota/New_Salem",'America_Nuuk', "America/Nuuk",'America_Ojinaga', "America/Ojinaga",'America_Panama', "America/Panama",'America_Paramaribo', "America/Paramaribo",'America_Phoenix', "America/Phoenix",'America_Port_au_Prince', "America/Port-au-Prince",'America_Porto_Velho', "America/Porto_Velho",'America_Puerto_Rico', "America/Puerto_Rico",'America_Punta_Arenas', "America/Punta_Arenas",'America_Rankin_Inlet', "America/Rankin_Inlet",'America_Recife', "America/Recife",'America_Regina', "America/Regina",'America_Resolute', "America/Resolute",'America_Rio_Branco', "America/Rio_Branco",'America_Santarem', "America/Santarem",'America_Santiago', "America/Santiago",'America_Santo_Domingo', "America/Santo_Domingo",'America_Sao_Paulo', "America/Sao_Paulo",'America_Scoresbysund', "America/Scoresbysund",'America_Sitka', "America/Sitka",'America_St_Johns', "America/St_Johns",'America_Swift_Current', "America/Swift_Current",'America_Tegucigalpa', "America/Tegucigalpa",'America_Thule', "America/Thule",'America_Tijuana', "America/Tijuana",'America_Toronto', "America/Toronto",'America_Vancouver', "America/Vancouver",'America_Whitehorse', "America/Whitehorse",'America_Winnipeg', "America/Winnipeg",'America_Yakutat', "America/Yakutat",'Antarctica_Casey', "Antarctica/Casey",'Antarctica_Davis', "Antarctica/Davis",'Antarctica_Macquarie', "Antarctica/Macquarie",'Antarctica_Mawson', "Antarctica/Mawson",'Antarctica_Palmer', "Antarctica/Palmer",'Antarctica_Rothera', "Antarctica/Rothera",'Antarctica_Troll', "Antarctica/Troll",'Asia_Almaty', "Asia/Almaty",'Asia_Amman', "Asia/Amman",'Asia_Anadyr', "Asia/Anadyr",'Asia_Aqtau', "Asia/Aqtau",'Asia_Aqtobe', "Asia/Aqtobe",'Asia_Ashgabat', "Asia/Ashgabat",'Asia_Atyrau', "Asia/Atyrau",'Asia_Baghdad', "Asia/Baghdad",'Asia_Baku', "Asia/Baku",'Asia_Bangkok', "Asia/Bangkok",'Asia_Barnaul', "Asia/Barnaul",'Asia_Beirut', "Asia/Beirut",'Asia_Bishkek', "Asia/Bishkek",'Asia_Chita', "Asia/Chita",'Asia_Choibalsan', "Asia/Choibalsan",'Asia_Colombo', "Asia/Colombo",'Asia_Damascus', "Asia/Damascus",'Asia_Dhaka', "Asia/Dhaka",'Asia_Dili', "Asia/Dili",'Asia_Dubai', "Asia/Dubai",'Asia_Dushanbe', "Asia/Dushanbe",'Asia_Famagusta', "Asia/Famagusta",'Asia_Gaza', "Asia/Gaza",'Asia_Hebron', "Asia/Hebron",'Asia_Ho_Chi_Minh', "Asia/Ho_Chi_Minh",'Asia_Hong_Kong', "Asia/Hong_Kong",'Asia_Hovd', "Asia/Hovd",'Asia_Irkutsk', "Asia/Irkutsk",'Asia_Jakarta', "Asia/Jakarta",'Asia_Jayapura', "Asia/Jayapura",'Asia_Jerusalem', "Asia/Jerusalem",'Asia_Kabul', "Asia/Kabul",'Asia_Kamchatka', "Asia/Kamchatka",'Asia_Karachi', "Asia/Karachi",'Asia_Kathmandu', "Asia/Kathmandu",'Asia_Khandyga', "Asia/Khandyga",'Asia_Kolkata', "Asia/Kolkata",'Asia_Krasnoyarsk', "Asia/Krasnoyarsk",'Asia_Kuching', "Asia/Kuching",'Asia_Macau', "Asia/Macau",'Asia_Magadan', "Asia/Magadan",'Asia_Makassar', "Asia/Makassar",'Asia_Manila', "Asia/Manila",'Asia_Nicosia', "Asia/Nicosia",'Asia_Novokuznetsk', "Asia/Novokuznetsk",'Asia_Novosibirsk', "Asia/Novosibirsk",'Asia_Omsk', "Asia/Omsk",'Asia_Oral', "Asia/Oral",'Asia_Pontianak', "Asia/Pontianak",'Asia_Pyongyang', "Asia/Pyongyang",'Asia_Qatar', "Asia/Qatar",'Asia_Qostanay', "Asia/Qostanay",'Asia_Qyzylorda', "Asia/Qyzylorda",'Asia_Riyadh', "Asia/Riyadh",'Asia_Sakhalin', "Asia/Sakhalin",'Asia_Samarkand', "Asia/Samarkand",'Asia_Seoul', "Asia/Seoul",'Asia_Shanghai', "Asia/Shanghai",'Asia_Singapore', "Asia/Singapore",'Asia_Srednekolymsk', "Asia/Srednekolymsk",'Asia_Taipei', "Asia/Taipei",'Asia_Tashkent', "Asia/Tashkent",'Asia_Tbilisi', "Asia/Tbilisi",'Asia_Tehran', "Asia/Tehran",'Asia_Thimphu', "Asia/Thimphu",'Asia_Tokyo', "Asia/Tokyo",'Asia_Tomsk', "Asia/Tomsk",'Asia_Ulaanbaatar', "Asia/Ulaanbaatar",'Asia_Urumqi', "Asia/Urumqi",'Asia_Ust_Nera', "Asia/Ust-Nera",'Asia_Vladivostok', "Asia/Vladivostok",'Asia_Yakutsk', "Asia/Yakutsk",'Asia_Yangon', "Asia/Yangon",'Asia_Yekaterinburg', "Asia/Yekaterinburg",'Asia_Yerevan', "Asia/Yerevan",'Atlantic_Azores', "Atlantic/Azores",'Atlantic_Bermuda', "Atlantic/Bermuda",'Atlantic_Canary', "Atlantic/Canary",'Atlantic_Cape_Verde', "Atlantic/Cape_Verde",'Atlantic_Faroe', "Atlantic/Faroe",'Atlantic_Madeira', "Atlantic/Madeira",'Atlantic_South_Georgia', "Atlantic/South_Georgia",'Atlantic_Stanley', "Atlantic/Stanley",'Australia_Adelaide', "Australia/Adelaide",'Australia_Brisbane', "Australia/Brisbane",'Australia_Broken_Hill', "Australia/Broken_Hill",'Australia_Darwin', "Australia/Darwin",'Australia_Eucla', "Australia/Eucla",'Australia_Hobart', "Australia/Hobart",'Australia_Lindeman', "Australia/Lindeman",'Australia_Lord_Howe', "Australia/Lord_Howe",'Australia_Melbourne', "Australia/Melbourne",'Australia_Perth', "Australia/Perth",'Australia_Sydney', "Australia/Sydney",'CET', "CET",'CST6CDT', "CST6CDT",'EET', "EET",'EST', "EST",'EST5EDT', "EST5EDT",'Europe_Andorra', "Europe/Andorra",'Europe_Astrakhan', "Europe/Astrakhan",'Europe_Athens', "Europe/Athens",'Europe_Belgrade', "Europe/Belgrade",'Europe_Berlin', "Europe/Berlin",'Europe_Brussels', "Europe/Brussels",'Europe_Bucharest', "Europe/Bucharest",'Europe_Budapest', "Europe/Budapest",'Europe_Chisinau', "Europe/Chisinau",'Europe_Dublin', "Europe/Dublin",'Europe_Gibraltar', "Europe/Gibraltar",'Europe_Helsinki', "Europe/Helsinki",'Europe_Istanbul', "Europe/Istanbul",'Europe_Kaliningrad', "Europe/Kaliningrad",'Europe_Kirov', "Europe/Kirov",'Europe_Kyiv', "Europe/Kyiv",'Europe_Lisbon', "Europe/Lisbon",'Europe_London', "Europe/London",'Europe_Madrid', "Europe/Madrid",'Europe_Malta', "Europe/Malta",'Europe_Minsk', "Europe/Minsk",'Europe_Moscow', "Europe/Moscow",'Europe_Paris', "Europe/Paris",'Europe_Prague', "Europe/Prague",'Europe_Riga', "Europe/Riga",'Europe_Rome', "Europe/Rome",'Europe_Samara', "Europe/Samara",'Europe_Saratov', "Europe/Saratov",'Europe_Simferopol', "Europe/Simferopol",'Europe_Sofia', "Europe/Sofia",'Europe_Tallinn', "Europe/Tallinn",'Europe_Tirane', "Europe/Tirane",'Europe_Ulyanovsk', "Europe/Ulyanovsk",'Europe_Vienna', "Europe/Vienna",'Europe_Vilnius', "Europe/Vilnius",'Europe_Volgograd', "Europe/Volgograd",'Europe_Warsaw', "Europe/Warsaw",'Europe_Zurich', "Europe/Zurich",'Factory', "Factory",'HST', "HST",'Indian_Chagos', "Indian/Chagos",'Indian_Maldives', "Indian/Maldives",'Indian_Mauritius', "Indian/Mauritius",'MET', "MET",'MST', "MST",'MST7MDT', "MST7MDT",'PST8PDT', "PST8PDT",'Pacific_Apia', "Pacific/Apia",'Pacific_Auckland', "Pacific/Auckland",'Pacific_Bougainville', "Pacific/Bougainville",'Pacific_Chatham', "Pacific/Chatham",'Pacific_Easter', "Pacific/Easter",'Pacific_Efate', "Pacific/Efate",'Pacific_Fakaofo', "Pacific/Fakaofo",'Pacific_Fiji', "Pacific/Fiji",'Pacific_Galapagos', "Pacific/Galapagos",'Pacific_Gambier', "Pacific/Gambier",'Pacific_Guadalcanal', "Pacific/Guadalcanal",'Pacific_Guam', "Pacific/Guam",'Pacific_Honolulu', "Pacific/Honolulu",'Pacific_Kanton', "Pacific/Kanton",'Pacific_Kiritimati', "Pacific/Kiritimati",'Pacific_Kosrae', "Pacific/Kosrae",'Pacific_Kwajalein', "Pacific/Kwajalein",'Pacific_Marquesas', "Pacific/Marquesas",'Pacific_Nauru', "Pacific/Nauru",'Pacific_Niue', "Pacific/Niue",'Pacific_Norfolk', "Pacific/Norfolk",'Pacific_Noumea', "Pacific/Noumea",'Pacific_Pago_Pago', "Pacific/Pago_Pago",'Pacific_Palau', "Pacific/Palau",'Pacific_Pitcairn', "Pacific/Pitcairn",'Pacific_Port_Moresby', "Pacific/Port_Moresby",'Pacific_Rarotonga', "Pacific/Rarotonga",'Pacific_Tahiti', "Pacific/Tahiti",'Pacific_Tarawa', "Pacific/Tarawa",'Pacific_Tongatapu', "Pacific/Tongatapu",'WET', "WET");
    this.mapped[10] = abi.type_by_fqn.get(core.Table._type);
    this.mapped[11] = abi.type_by_fqn.get(core.ti6d._type);
    this.mapped[12] = abi.type_by_fqn.get(core.nodeGeo._type);
    this.mapped[13] = abi.type_by_fqn.get(core.duration._type);
    this.mapped[14] = abi.type_by_fqn.get(core.Date2._type);
    this.mapped[15] = abi.type_by_fqn.get(core.DurationUnit._type);
    this.mapped[15]?.resolveGeneratedOffsetWithValues('microseconds', 1,'milliseconds', 1000,'seconds', 1000000,'minutes', 60000000,'hours', 3600000000,'days', 86400000000,'weeks', 604800000000,'months', 2628000000000,'years', 31536000000000);
    this.mapped[16] = abi.type_by_fqn.get(core.tf3d._type);
    this.mapped[17] = abi.type_by_fqn.get(core.Tensor._type);
    this.mapped[18] = abi.type_by_fqn.get(core.ti2d._type);
    this.mapped[19] = abi.type_by_fqn.get(core.Map._type);
    this.mapped[20] = abi.type_by_fqn.get(core.MathConstants._type);
    if (this.mapped[20]) {
      this.mapped[20].static_values = {['e']: 2.7182818285,['log_2e']: 1.4426950409,['log_10e']: 0.4342944819,['ln2']: 0.6931471806,['ln10']: 2.302585093,['pi']: 3.1415926536,['pi_2']: 1.5707963268,['pi_4']: 0.7853981634,['m1_pi']: 0.3183098862,['m2_pi']: 0.6366197724,['m2_sqrt_pi']: 1.1283791671,['sqrt2']: 1.4142135624,['sqrt1_2']: 0.7071067812,};
    }
    this.mapped[21] = abi.type_by_fqn.get(core.nodeIndex._type);
    this.mapped[22] = abi.type_by_fqn.get(core.tf4d._type);
    this.mapped[23] = abi.type_by_fqn.get(core.TableColumnMapping._type);
    this.mapped[24] = abi.type_by_fqn.get(core.nodeList._type);
    this.mapped[25] = abi.type_by_fqn.get(core.TensorType._type);
    this.mapped[25]?.resolveGeneratedOffsetWithValues('i32', 4,'i64', 8,'f32', 4,'f64', 8,'c64', 8,'c128', 16);
    this.mapped[26] = abi.type_by_fqn.get(core.Tuple._type);
    this.mapped[27] = abi.type_by_fqn.get(core.tf2d._type);
    this.mapped[28] = abi.type_by_fqn.get(core.function_._type);
    this.mapped[29] = abi.type_by_fqn.get(core.TableColumnMeta._type);
    this.mapped[30] = abi.type_by_fqn.get(core.GeoBox._type);
    this.mapped[31] = abi.type_by_fqn.get(core.node._type);
    this.mapped[32] = abi.type_by_fqn.get(core.GeoPoly._type);
    this.mapped[33] = abi.type_by_fqn.get(core.nodeIndexBucket._type);
    this.mapped[34] = abi.type_by_fqn.get(core.time._type);
    if (this.mapped[34]) {
      this.mapped[34].static_values = {['min']: abi.createTime(-9223372036854775808n),['max']: abi.createTime(9223372036854775807n),};
    }
    this.mapped[35] = abi.type_by_fqn.get(core.ti10d._type);
    this.mapped[36] = abi.type_by_fqn.get(core.SamplingMode._type);
    this.mapped[36]?.resolveGeneratedOffsetWithValues('fixed', 0,'fixed_reg', 1,'adaptative', 2,'dense', 3);
    this.mapped[37] = abi.type_by_fqn.get(core.ti5d._type);
    this.mapped[38] = abi.type_by_fqn.get(core.DatePart._type);
    this.mapped[38]?.resolveGeneratedOffsetWithValues('years', 0,'months', 1,'days', 2,'hours', 3,'minutes', 4,'seconds', 5,'microseconds', 6);
    this.mapped[39] = abi.type_by_fqn.get(core.ti3d._type);
    this.mapped[40] = abi.type_by_fqn.get(core.nodeTimeSingleton._type);
    this.mapped[41] = abi.type_by_fqn.get(core.NodeInfo._type);
    this.mapped[42] = abi.type_by_fqn.get(runtime.RuntimeInfo._type);
    this.mapped[43] = abi.type_by_fqn.get(runtime.PeriodicTask._type);
    this.mapped[44] = abi.type_by_fqn.get(runtime.UserGroupPolicy._type);
    this.mapped[45] = abi.type_by_fqn.get(runtime.User._type);
    this.mapped[46] = abi.type_by_fqn.get(runtime.TaskRequest._type);
    this.mapped[47] = abi.type_by_fqn.get(runtime.UserRole._type);
    this.mapped[48] = abi.type_by_fqn.get(runtime.StoreStat._type);
    this.mapped[49] = abi.type_by_fqn.get(runtime.System._type);
    this.mapped[50] = abi.type_by_fqn.get(runtime.Runtime._type);
    this.mapped[51] = abi.type_by_fqn.get(runtime.TaskInfo._type);
    this.mapped[52] = abi.type_by_fqn.get(runtime.TaskStatus._type);
    this.mapped[52]?.resolveGeneratedOffsetWithValues('empty', 0,'waiting', 1,'running', 2,'cancelled', 3,'error', 4,'ended', 5,'ended_with_errors', 6);
    this.mapped[53] = abi.type_by_fqn.get(runtime.Debug._type);
    this.mapped[54] = abi.type_by_fqn.get(runtime.TaskResult._type);
    this.mapped[55] = abi.type_by_fqn.get(runtime.SecurityPolicy._type);
    this.mapped[56] = abi.type_by_fqn.get(runtime.DebugFrame._type);
    this.mapped[57] = abi.type_by_fqn.get(runtime.TaskBase._type);
    this.mapped[58] = abi.type_by_fqn.get(runtime.OpenIDConnect._type);
    this.mapped[59] = abi.type_by_fqn.get(runtime.SecurityFields._type);
    this.mapped[60] = abi.type_by_fqn.get(runtime.UserCredential._type);
    this.mapped[61] = abi.type_by_fqn.get(runtime.DebugInfo._type);
    this.mapped[62] = abi.type_by_fqn.get(runtime.TaskMode._type);
    this.mapped[62]?.resolveGeneratedOffsetWithValues('commit', null,'volatile', null,'exclusive', null);
    this.mapped[63] = abi.type_by_fqn.get(runtime.SecurityEntity._type);
    this.mapped[64] = abi.type_by_fqn.get(runtime.License._type);
    this.mapped[65] = abi.type_by_fqn.get(runtime.DebugBreakpoint._type);
    this.mapped[66] = abi.type_by_fqn.get(runtime.UserGroupPolicyType._type);
    this.mapped[66]?.resolveGeneratedOffsetWithValues('read', 0,'write', 1,'execute', 2);
    this.mapped[67] = abi.type_by_fqn.get(runtime.LicenseType._type);
    this.mapped[67]?.resolveGeneratedOffsetWithValues('community', 0,'enterprise', 1,'testing', 2);
    this.mapped[68] = abi.type_by_fqn.get(runtime.Task._type);
    this.mapped[69] = abi.type_by_fqn.get(runtime.UserGroup._type);
    this.mapped[70] = abi.type_by_fqn.get(io.CsvColumnDate._type);
    this.mapped[71] = abi.type_by_fqn.get(io.Email._type);
    this.mapped[72] = abi.type_by_fqn.get(io.Mqtt._type);
    this.mapped[73] = abi.type_by_fqn.get(io.CsvValidateResult._type);
    this.mapped[74] = abi.type_by_fqn.get(io.File._type);
    this.mapped[75] = abi.type_by_fqn.get(io.TextEncoder._type);
    this.mapped[75]?.resolveGeneratedOffsetWithValues('plain', null,'base64', null,'base64url', null,'hexadecimal', null);
    this.mapped[76] = abi.type_by_fqn.get(io.Url._type);
    this.mapped[77] = abi.type_by_fqn.get(io.CsvColumnTime._type);
    this.mapped[78] = abi.type_by_fqn.get(io.CsvAnalysisConfig._type);
    if (this.mapped[78]) {
      this.mapped[78].static_values = {['enumerable_limit_default']: 100,['date_check_limit_default']: 100,};
    }
    this.mapped[79] = abi.type_by_fqn.get(io.HttpHeader._type);
    this.mapped[80] = abi.type_by_fqn.get(io.CsvColumnBoolean._type);
    this.mapped[81] = abi.type_by_fqn.get(io.CsvColumnStatistics._type);
    this.mapped[82] = abi.type_by_fqn.get(io.Smtp._type);
    this.mapped[83] = abi.type_by_fqn.get(io.CsvColumnInteger._type);
    this.mapped[84] = abi.type_by_fqn.get(io.SmtpAuth._type);
    this.mapped[84]?.resolveGeneratedOffsetWithValues('none', 0,'plain', 1,'login', 2);
    this.mapped[85] = abi.type_by_fqn.get(io.CsvColumnFloat._type);
    this.mapped[86] = abi.type_by_fqn.get(io.CsvColumnString._type);
    this.mapped[87] = abi.type_by_fqn.get(io.SmtpMode._type);
    this.mapped[87]?.resolveGeneratedOffsetWithValues('plain', 0,'ssl_tls', 1,'starttls', 2);
    this.mapped[88] = abi.type_by_fqn.get(io.CsvColumnDuration._type);
    this.mapped[89] = abi.type_by_fqn.get(io.Http._type);
    this.mapped[90] = abi.type_by_fqn.get(io.CsvAnalysis._type);
    this.mapped[91] = abi.type_by_fqn.get(io.CsvFormat._type);
    this.mapped[92] = abi.type_by_fqn.get(io.CsvColumnIgnored._type);
    this.mapped[93] = abi.type_by_fqn.get(io.CsvColumn._type);
    this.mapped[94] = abi.type_by_fqn.get(io.CsvStatistics._type);
    this.mapped[95] = abi.type_by_fqn.get(util.ProgressTracker._type);
    this.mapped[96] = abi.type_by_fqn.get(util.HistogramInt._type);
    if (this.mapped[96]) {
      this.mapped[96].static_values = {['table_off_from']: 0,['table_off_to']: 1,['table_off_count']: 2,['table_off_percentage']: 3,};
    }
    this.mapped[97] = abi.type_by_fqn.get(util.TimeWindow._type);
    this.mapped[98] = abi.type_by_fqn.get(util.SlidingWindow._type);
    this.mapped[99] = abi.type_by_fqn.get(util.Assert._type);
    this.mapped[100] = abi.type_by_fqn.get(util.Buffer._type);
    this.mapped[101] = abi.type_by_fqn.get(util.GaussianProfile._type);
    if (this.mapped[101]) {
      this.mapped[101].static_values = {['table_off_size']: 0,['table_off_min']: 1,['table_off_max']: 2,['table_off_avg']: 3,['table_off_std']: 4,['table_off_sum']: 5,['table_off_columns']: 6,};
    }
    this.mapped[102] = abi.type_by_fqn.get(util.Random._type);
    this.mapped[103] = abi.type_by_fqn.get(util.Gaussian._type);
    this.mapped[104] = abi.type_by_fqn.get(util.Iban._type);
    this.mapped[105] = abi.type_by_fqn.get(util.Queue._type);
    this.mapped[106] = abi.type_by_fqn.get(util.BoxPlotFloat._type);
    this.mapped[107] = abi.type_by_fqn.get(util.HistogramFloat._type);
    if (this.mapped[107]) {
      this.mapped[107].static_values = {['table_off_from']: 0,['table_off_to']: 1,['table_off_count']: 2,['table_off_percentage']: 3,};
    }
    this.mapped[108] = abi.type_by_fqn.get(util.DenseDim._type);
    this.mapped[109] = abi.type_by_fqn.get(util.BoxPlotInt._type);
    this.mapped[110] = abi.type_by_fqn.get(util.Plot._type);
    this.mapped[111] = abi.type_by_fqn.get(util.Crypto._type);
  },
};
