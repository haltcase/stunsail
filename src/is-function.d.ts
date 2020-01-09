/**
 * @description
 * Check whether `value` is a function.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | value | `any` | Value to test |
 *
 * @returns `boolean`
 *
 * @example
 * // examples of `true` cases:
 * isFunction(Function)
 * isFunction(() => {})
 * isFunction(async () => {})
 * isFunction(function () {})
 * isFunction(function * () {})
 *
 * // examples of `false` cases:
 * isFunction(false)
 * isFunction('')
 * isFunction([])
 * isFunction({})
 * isFunction(new Map())
 * isFunction(new Set())
 * isFunction(new Date())
 * isFunction(null)
 * isFunction(undefined)
 * isFunction(1)
 */
interface IsFunction {
  (value: unknown): value is Function
}

declare const isFunction: IsFunction
export default isFunction
