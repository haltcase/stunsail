/**
 * @description
 * Alternative to the `[].slice.call()` method of converting
 * values to arrays. It will convert array-like objects and
 * wrap values in an array that don't coerce.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | value | `any` | Value to convert |
 * | begin | `Number` | Optional index at which to begin a slice |
 * | end | `Number` | Optional index at which to end a slice |
 *
 * @returns `any`
 *
 * @example
 * toArray(undefined)
 * // -> []
 *
 * toArray(null)
 * // -> [null]
 *
 * toArray((function () { return arguments })(1, 2, 3))
 * // -> [1]
 *
 * toArray(4)
 * // -> [4]
 *
 * toArray(true)
 * // -> [true]
 *
 * toArray(false)
 * // -> [false]
 *
 * toArray({})
 * // -> [{}]
 *
 * toArray([])
 * // -> []
 *
 * toArray([1, 2, 3, 4, 5], 2)
 * // -> [3, 4, 5]
 *
 * toArray([1, 2, 3, 4, 5], 2, -1)
 * // -> [3, 4]
 *
 * @since v1.0.0
 * @tag utilities
 * @tag collections
 */
interface ToArray {
  <T> (value: T[], begin?: number, end?: number): T[]
}

declare const toArray: ToArray
export default toArray
