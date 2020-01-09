/**
 * @description
 * Check whether `value` is an iterable object, ie. its `[Symbol.iterator]`
 * property is set as a function.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | value | `any` | Value to test |
 *
 * @returns `boolean`
 *
 * @example
 * isIterable([])
 * // -> true
 *
 * isIterable({})
 * // -> false
 *
 * isIterable(new Set())
 * // -> true
 *
 * isIterable(new Map())
 * // -> true
 *
 * isIterable({ [Symbol.iterator] () {} })
 * // -> true
 *
 * isIterable(null)
 * // -> false
 */
interface IsIterable {
  (value: unknown): value is Iterable<unknown>
}

declare const isIterable: IsIterable
export default isIterable
