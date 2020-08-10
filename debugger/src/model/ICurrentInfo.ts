// export type IExtendedJSONValue = number | string | boolean | Object | any[] | null | IExtendedJSON;

export interface IExtendedJSONValue {
  type: string;
  value: any;
}

export interface IExtendedJSON {
  // TODO improve 'value' typing
  [key: string]: IExtendedJSONValue;
}

export interface ICurrentInfo {
  source?: string;
  location?: [number, number];
  data?: IExtendedJSON;
}
