export interface IMap {
  get(key: string | number): any;
  // mget(key: string | number, it: (value: any) => void): void;
  set(key: string | number, value: any): void;
  put(key: string | number, value: any): void;
  remove(key: string | number): boolean;
  size(): number;
  foreach(it: (key: string | number, value: any) => void): void;
}