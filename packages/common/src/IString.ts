export interface IString {
  value: string;

  /**
   * Reallocs memory to fit 'needed' size (if needed)
   * @param {number} needed new capacity of the gstring
   */
  prepare(needed: number): void;

  /**
   * Resets the gstring.
   * Allocated memory is not freed, just the size is set to 0.
   */
  reset(): void;

  /**
   * Closes a gstring, i.e. sets the end of the string to the closing character '\0'.
   */
  close(): void;

  /**
   * Returns the size of the gstring.
   * @return      size of the gstring
   */
  size(): number;

  unmark(): void;
}
