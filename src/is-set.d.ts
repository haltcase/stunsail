/**
 * @description
 * Check whether `value` is a `Set` object.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | value | `any` | Value to test |
 *
 * @returns `boolean`
 *
 * @example
 * isSet(new Set())
 * // -> true
 *
 * isSet([])
 * // -> false
 *
 * @since v1.0.0
 * @tag types
 * @tag logic
 */
interface IsSet {
  (value: unknown): value is Set<unknown>
}

declare const isSet: IsSet
export default isSet
