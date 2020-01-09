/**
 * @description
 * Check whether `value` is a built-in Error type.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | value | `any` | Value to test |
 *
 * @returns `boolean`
 *
 * @example
 * isError(new Error('did a bad thing'))
 * // -> true
 *
 * isError(new TypeError('wrong kind of thing'))
 * // -> true
 *
 * isError({ code: 'ENOENT', message: 'wrong' })
 * // -> false
 */
interface IsError {
  (value: unknown): value is Error
}

declare const isError: IsError
export default isError
