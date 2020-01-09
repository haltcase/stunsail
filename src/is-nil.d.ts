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
 */
interface IsNil {
  (value: unknown): value is null | void
}

declare const isNil: IsNil
export default isNil
