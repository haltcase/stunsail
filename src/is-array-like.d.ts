/**
 * Check whether `value` is an Array or an object with a `length`
 * property and that it also has a property at `length - 1`.
 */
interface IsArrayLike {
  (value: unknown): value is ArrayLike<unknown>
}

declare const isArrayLike: IsArrayLike
export default isArrayLike
