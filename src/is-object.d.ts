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
 */
interface IsObject {
  (value: any): value is object
}

declare const isObject: IsObject
export default isObject
