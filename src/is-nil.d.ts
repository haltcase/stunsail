/**
 * @description
 * Check whether `value` is `null` or `undefined`.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | value | `any` | Value to test |
 *
 * @returns `boolean`
 *
 * @example
 * isNil(null)
 * // -> true
 *
 * isNil(undefined)
 * // -> true
 *
 * isNil(false)
 * // -> false
 *
 * @since v1.0.0
 * @tag types
 * @tag logic
 */
interface IsNil {
  (value: unknown): value is null | void
}

declare const isNil: IsNil
export default isNil
