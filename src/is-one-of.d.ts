import { GenericCollection } from './types'

/**
 * @description
 * Check whether `value` is included in `collection`. This is a version of
 * [`includes()`](#includes) with the arguments flipped.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | value | `any` | Value to search for in `collection` |
 * | collection | `object` | List to check `value` against |
 *
 * @returns `boolean`
 *
 * @example
 * isOneOf(2, [1, 2, 3])
 * // -> true
 *
 * isOneOf('value', { key: 'value' })
 * // -> true
 *
 * @see includes
 * @since v1.0.0
 * @tag collections
 */
interface IsOneOf {
  <T> (value: T, collection: GenericCollection<T>): boolean
}

declare const isOneOf: IsOneOf
export default isOneOf
