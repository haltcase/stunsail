/**
 * @description
 * Check whether `value` is a number.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | value | `any` | Value to test |
 *
 * @returns `boolean`
 *
 * @example
 * isNumber(4)
 * // -> true
 *
 * isNumber(NaN)
 * // -> false
 *
 * @since v1.0.0
 * @tag types
 * @tag logic
 */
interface IsNumber {
  (value: unknown): value is number
}

declare const isNumber: IsNumber
export default isNumber
