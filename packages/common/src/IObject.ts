export interface IObject<T = any> {
  [prop: string]: any;
  [index: number]: T | undefined;

  toJSON(): any;
}
