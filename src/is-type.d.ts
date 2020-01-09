/**
 * @description
 * If `type` is a string, check whether `value` has that type. Other kinds will
 * check that the types of `type` and `value` match.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | value | `any` | Value to test |
 * | type | `string, any` |  |
 *
 * @returns `boolean`
 *
 * @example
 * isType('bar', 'string')
 * // -> true
 *
 * isType('3', 'number')
 * // -> false
 *
 * isType(new Date(), Date)
 * // -> true
 *
 * @see getType
 */
interface IsType {
  (value: unknown, type: string): boolean
}

declare const isType: IsType
export default isType
