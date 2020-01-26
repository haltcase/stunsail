import { Primitive, GenericCollection } from './types'

/**
 * @description
 * Return the number of occurrences of `search` in `collection`, up to
 * `maxOccurrences` if provided.
 *
 * Numbers are checked for divisiblity, i.e. `4` can fit in `9` twice,
 * so it could be said that there are 2 occurrences of `4` in `9`.
 *
 * Strings are treated as collections. All other primitives are checked
 * for equality.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | collection | `any` | Collection in which to search |
 * | search | `any` | Value to search for |
 * | maxOccurrences | `number` | Max occurrences to search for (optional) |
 *
 * @returns `number` &ndash; occurrences found
 *
 * @example
 * count([1, 6, 6, 3], 6)
 * // -> 2
 *
 * count('hello world', 'l')
 * // -> 3
 *
 * count('hello world', 'l', 2)
 * // -> 2
 *
 * count(new Set([1, 6, 6, 3]), 6)
 * // -> 1
 *
 * count({ a: 'hello', b: 'hello' }, 'hello')
 * // -> 2
 *
 * const map = new Map()
 * map.set('a', 5)
 * map.set('b', 5)
 * map.set('c', 10)
 *
 * count(map, 5)
 * // -> 2
 *
 * @since v1.0.0
 * @tag collections
 * @tag strings
 */
interface Count {
  <T extends Primitive> (collection: T, search: T, maxOccurrences?: number): number
  <T> (collection: GenericCollection<T>, search: T): number
}

declare const count: Count
export default count
