import { Keys } from '../greycat-core';

export interface ITypedef {
  name: string;
  attributes?: { [k: string]: ITypedefAttribute };
  functions?: { [k: string]: ITypedefFunction };
}

export interface ITypedefAttribute {
  type: string | Keys;
  value?: any;
  static?: boolean;
}

export interface ITypedefFunction {
  handle: (data: any) => void;
  params?: ITypedefFunctionParam[];
  static?: boolean;
}

export interface ITypedefFunctionParam {
  name: string;
  type?: Keys | Keys[];
  optional?: boolean;
}

export interface IServerTypedef {
  name: string;
  attributes: IServerTypedefAttribute[];
  functions: IServerTypedefFunction[];
}

export interface IServerTypedefAttribute {
  name: string;
  type: string | Keys;
  value?: any;
  static?: boolean;
}

export interface IServerTypedefFunction {
  name: string;
  handleId: string;
  params: IServerTypedefParam[];
  static?: boolean;
}

export interface IServerTypedefParam {
  name: string;
  type: Keys | Keys[];
  optional?: boolean;
}