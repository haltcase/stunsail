/**
 * @description
 * Retrieve the item at index zero of the given array-like or `Set` object.
 * For `Set`s this is based on insertion order, ie. the first inserted object.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | arrayLike | `array` | Array-like value to access |
 *
 * @returns `any` &ndash; first value of the given collection, ie. `array[0]`
 *
 * @example
 * first([1, 2, 3, 4])
 * // -> 1
 *
 * first(new Set([1, 2, 3, 4]))
 * // -> 1
 *
 * first((function () { return arguments }(1, 2, 3, 4)))
 * // -> 1
 *
 * @see last
 */
interface First {
  <T> (collection: ArrayLike<T> | Set<T>): T | undefined
}

declare const first: First
export default first
