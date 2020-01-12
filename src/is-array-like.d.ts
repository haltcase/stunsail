/**
 * @description
 * Check whether `value` is an array or an object with a `length`
 * property and that it also has a property at `length - 1`.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | value | `any` | Value to test |
 *
 * @returns `boolean`
 *
 * @example
 * isArrayLike([1, 2, 3])
 * // -> true
 *
 * isArrayLike(null)
 * // -> false
 *
 * isArrayLike('foobar')
 * // -> true
 *
 * isArrayLike({ length: 2 })
 * // -> false
 *
 * isArrayLike({ length: 2, 0: 'foo', 1: 'bar' })
 * // -> true
 *
 * @since v1.0.0
 * @tag types
 * @tag logic
 */
interface IsArrayLike {
  (value: unknown): value is ArrayLike<unknown>
}

declare const isArrayLike: IsArrayLike
export default isArrayLike
