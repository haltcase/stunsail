/**
 * @description
 * Check whether `value` is an array, like the built-in
 * `Array.isArray()` method.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | value | `any` | Value to test |
 *
 * @returns `boolean`
 *
 * @example
 * isArray([1, 2, 3])
 * // -> true
 *
 * isArray({ length: 2, 0: 'foo', 1: 'bar' })
 * // -> false
 *
 * @since v1.0.0
 * @tag types
 * @tag logic
 */
interface IsArray {
  (value: unknown): value is unknown[]
}

declare const isArray: IsArray
export default isArray
