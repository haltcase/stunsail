/**
 * @description
 * Check whether `value` is a `Map` object.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | value | `any` | Value to test |
 *
 * @returns `boolean`
 *
 * @example
 * isMap(new Map())
 * // -> true
 *
 * isMap({})
 * // -> false
 *
 * @since v1.0.0
 * @tag types
 * @tag logic
 */
interface IsMap {
  (value: unknown): value is Map<unknown, unknown>
}

declare const isMap: IsMap
export default isMap
