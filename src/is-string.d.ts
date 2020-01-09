/**
 * @description
 * Check whether `value` is a string.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | value | `any` | Value to test |
 *
 * @returns `boolean`
 *
 * @example
 * isString('something here')
 * // -> true
 *
 * isString(400)
 * // -> false
 */
interface IsString {
  (value: unknown): value is string
}

declare const isString: IsString
export default isString
