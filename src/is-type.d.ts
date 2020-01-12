/**
 * @description
 * If `type` is a string, check whether `value` has that type. Other kinds will
 * check that the types of `type` and `value` match.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | value | `any` | Value to test |
 * | type | `any` | Type string or a value whose type will be checked against that of `value` |
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
 * @since v1.0.0
 * @tag types
 * @tag logic
 */
interface IsType {
  (value: unknown, type: any): boolean
}

declare const isType: IsType
export default isType
