/**
 * @description
 * Check whether `value` is a boolean.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | value | `any` | Value to test |
 *
 * @returns `any`
 *
 * @example
 * isBoolean(true)
 * // -> true
 *
 * isBoolean(false)
 * // -> true
 *
 * isBoolean(0)
 * // -> false
 */
interface IsBoolean {
  (value: unknown): value is boolean
}

declare const isBoolean: IsBoolean
export default isBoolean
