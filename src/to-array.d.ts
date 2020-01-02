/**
 * Alternative to the `[].slice.call()` method of converting
 * values to Arrays. It will convert array-like objects and
 * wrap values in an array that don't coerce.
 */
interface ToArray {
  <T> (value: T[], begin?: number, end?: number): T[]
}

declare const toArray: ToArray
export default toArray
