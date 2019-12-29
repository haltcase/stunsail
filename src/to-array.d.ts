/**
 * Alternative to the `[].slice.call()` method of converting
 * values to Arrays. It will convert array-like objects and
 * wrap values in an array that don't coerce.
 */
export default function toArray<T>(value: T[], begin?: number, end?: number): T[];
