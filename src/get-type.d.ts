/**
 * @description
 * Alternative to the builtin `typeof` operator that returns a more accurate
 * type string.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | value | `any` |  |
 *
 * @returns `string`
 *
 * @example
 * getType('hi!')
 * // -> string
 *
 * getType({})
 * // -> object
 *
 * getType([])
 * // -> array
 *
 * getType(null)
 * // -> null
 *
 * getType(new RangeError())
 * // -> rangeerror
 *
 * @see isType
 * @since v1.0.0
 * @tag types
 */
interface GetType {
  (value: unknown): string
}

declare const getType: GetType
export default getType
