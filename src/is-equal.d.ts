/**
 * @description
 * Check whether two values `a` and `b` are deeply equal. Works on almost any
 * object - including plain objects, arrays, Maps, Sets, and Dates.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | a | `any` |  |
 * | b | `any` |  |
 *
 * @returns `boolean`
 *
 * @example
 * isEqual({}, {})
 * // -> true
 *
 * isEqual(new Set([1, 2, 3]), new Set([1, 2, 3]))
 * // -> true
 *
 * isEqual(new Set([1, 2]), new Set([9, 10]))
 * // -> false
 *
 * @since v1.0.0
 * @tag types
 * @tag logic
 */
interface Is {
  <T> (a: T, b: T): boolean
}

declare const is: Is
export default is
