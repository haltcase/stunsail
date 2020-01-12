import { GenericCollection } from './types'

/**
 * @description
 * Check whether `value` is included in `collection`. This is a version of
 * [`isOneOf()`](#isoneof) with the arguments flipped.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | collection | `object` | List to check `value` against |
 * | value | `any` | Value to search for in `collection` |
 *
 * @returns `boolean`
 *
 * @example
 * includes([1, 2, 3], 2)
 * // -> true
 *
 * includes({ key: 'value' }, 'value')
 * // -> true
 *
 * @see isOneOf
 * @since v1.0.0
 * @tag collections
 */
interface Includes {
  <T> (value: T, collection: GenericCollection<T>): boolean
}

declare const includes: Includes
export default includes
