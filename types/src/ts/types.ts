export interface GreycatStdLibs {
  [k: string]: GreycatType;
}

export interface GreycatTypeProp {
  is_static: boolean;
  is_private: boolean;
}

export interface GreycatTypeAttr extends GreycatTypeProp {
  nature: 'attribute';
  type: string;
  value?: any;
}

export interface GreycatTypeRef extends GreycatTypeProp {
  nature: 'reference';
}

export interface GreycatTypeFunc extends GreycatTypeProp {
  nature: 'function';
  value: GreycatFunction;
  is_derived: boolean;
}

export interface GreycatType {
  is_primitive: boolean;
  is_open: boolean;
  is_abstract: boolean;
  is_enum: boolean;
  properties: { [p: string]: GreycatTypeAttr | GreycatTypeRef | GreycatTypeFunc };
}

export interface GreycatFunction {
  params: GreycatParam[];
  returnType: string[];
  doc?: string;
}

export interface GreycatParam {
  name: string;
  type: string[];
  is_optional: boolean;
}
