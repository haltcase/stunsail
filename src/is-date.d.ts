/**
 * @description
 * Check whether `value` is a `Date` instance.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | value | `any` | Value to test |
 *
 * @returns `boolean`
 *
 * @example
 * isDate(new Date())
 * // -> true
 *
 * isDate(Date.now())
 * // -> false
 *
 * @since v1.0.0
 * @tag types
 * @tag logic
 */
interface IsDate {
  (value: unknown): value is Date
}

declare const isDate: IsDate
export default isDate
