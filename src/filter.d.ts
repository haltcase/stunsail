import { ArrayIterator, MapIterator, ObjectIterator, SetIterator, StringIterator } from './types'

/**
 * @description
 * Universal version of native `Array#filter` that works on pretty much any
 * iterable - arrays & array-likes, objects, Sets, Maps, strings, custom
 * iterables, etc.
 *
 * `fn` is called with arguments `value`, `key`, `collection`. If the result
 * is truthy, the element will be present in the resulting collection. If the
 * result is falsy, it will be _filtered_.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | collection | `Iterable` | Iterable-like object from which to filter items |
 * | fn | `Function` | Predicate that decides whether to remove the item |
 *
 * @returns `any` &ndash; same type as `collection`
 *
 * @example
 * const object = { one: 1, two: 2, three: 3 }
 * filter(object, value => value % 2)
 * // -> { one: 1, three: 3 }
 *
 * const array = [1, 2, 3, 4, 5]
 * filter(array, value => value % 2)
 * // -> [1, 3, 5]
 *
 * filter('foobar', value => value !== 'o')
 * // -> fbar
 *
 * @see each
 * @see map
 * @see reduce
 * @since v1.0.0
 * @tag collections
 */
interface Filter {
  <T extends string> (collection: string, fn: StringIterator<boolean>): string
  <T, R extends T> (collection: T[], fn: ArrayIterator<T, boolean>): R[]
  <K, V, R extends Map<K, V>> (collection: Map<K, V>, fn: MapIterator<K, V, boolean>): R
  <T, R extends T> (collection: Set<T>, fn: SetIterator<T, boolean>): Set<R>
  <T extends object, R extends T> (collection: T, fn: ObjectIterator<T, boolean>): Partial<R>
}

declare const filter: Filter
export default filter
