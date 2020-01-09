/**
 * @description
 * Convert the given `value` to a number. For example, this function applied to
 * a collection of almost any kind will return the number of elements in the
 * collection.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | value | `any` | Value to convert |
 * | round | `boolean` | Whether to round the output to an integer |
 *
 * @returns `number`
 *
 * @example
 * toNumber(1)
 * // -> 1
 *
 * toNumber(1.3345)
 * // -> 1.3345
 *
 * const now = new Date
 * toNumber(now) === now.valueOf()
 * // -> true
 *
 * toNumber({ one: 1, two: 2 })
 * // -> 2
 *
 * toNumber([1, 2, 3])
 * // -> 3
 *
 * toNumber('string')
 * // -> 6
 *
 * toNumber(39.354, true)
 * // -> 39
 */
interface ToNumber {
  (value: unknown, round?: boolean): number
}

declare const toNumber: ToNumber
export default toNumber
