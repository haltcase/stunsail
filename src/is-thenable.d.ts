/**
 * @description
 * Check whether `value` is an object with a `then` method.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | value | `any` | Value to test |
 *
 * @returns `boolean`
 *
 * @example
 * isThenable(Promise.resolve())
 * // -> true
 *
 * isThenable({ then () {} })
 */
interface IsThenable {
  (value: unknown): value is PromiseLike<unknown>
}

declare const isThenable: IsThenable
export default isThenable
