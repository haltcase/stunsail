/**
 * @description
 * Retreive the item at the highest index of the given array-like or `Set` object.
 * For `Set`s this is based on insertion order, ie. the last inserted object.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | arrayLike | `array` | Array-like value to access |
 *
 * @returns `any` &ndash; last value of the given collection, ie. `array[array.length - 1]`
 *
 * @example
 * last([1, 2, 3, 4])
 * // -> 4
 *
 * last(new Set([1, 2, 3, 4]))
 * // -> 4
 *
 * last((function () { return arguments }(1, 2, 3, 4)))
 * // -> 4
 *
 * @see first
 */
interface Last {
  <T> (collection: ArrayLike<T> | Set<T>): T | undefined
}

declare const last: Last
export default last
