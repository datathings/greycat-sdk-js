export interface IStackFrame {
  name: string;
  source?: string;
  location: [number, number];
}
