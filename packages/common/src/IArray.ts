import { IObject } from './IObject';

/**
 * A Greycat array
 *
 * You can get/set values on this array by using the classic javascript syntax:
 * ```ts
 * const gArray: IArray;
 * // ...
 * gArray[0] = 42;
 * ```
 */
export interface IArray<T = any> extends IObject<T> {
  /**
   * @returns the size of the array
   */
  size(): number;

  /**
   * Adds a value at the end of the array
   * @param elem value to append to the array
   */
  add(elem: T): void;

  /**
   * Modify the size of the array in-memory
   * @param newSize number of elements
   */
  resize(newSize: number): void;
}