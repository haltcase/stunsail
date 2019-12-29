/**
 * Check whether `value` is an Array or an object with a `length`
 * property and that it also has a property at `length - 1`.
 */
export default function isArrayLike(value: unknown): value is ArrayLike<unknown>;
