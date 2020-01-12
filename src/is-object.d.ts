/**
 * @description
 * Check whether `value` is a plain object.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | value | `any` | Value to test |
 *
 * @returns `boolean`
 *
 * @example
 * isObject({})
 * // -> true
 *
 * isObject(() => {})
 * // -> false
 *
 * isObject(new Map())
 * // -> false
 *
 * @since v1.0.0
 * @tag types
 * @tag logic
 */
interface IsObject {
  (value: any): value is object
}

declare const isObject: IsObject
export default isObject
