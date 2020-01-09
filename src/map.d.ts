import { ArrayIterator, MapIterator, ObjectIterator, SetIterator, StringIterator } from './types'

/**
 * @description
 * Universal version of native `Array#map` that works on pretty much any
 * iterable - arrays & array-likes, objects, Sets, Maps, strings, custom
 * iterables, etc.
 *
 * The return value will be `collection` but each value will be the result
 * of applying `fn` at each iteration to the arguments `value`, `key`,
 * `collection`.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | collection | `object` | Iterable-like object to map over, applying `fn` on each iteration |
 * | fn | `Function` | Callback applied to each item in `collection` |
 *
 * @returns `any` &ndash; same type as `collection`
 *
 * @example
 * map({ one: 1, two: 2, three: 3 }, v => v + 1)
 * // -> { one: 2, two: 3, three: 4 }
 *
 * map([1, 3, 5, 7], v => v * -1)
 * // -> [-1, -3, -5, -7]
 *
 * map('foobar', v => v + '-')
 * // -> 'f-o-o-b-a-r-'
 *
 * @see each
 * @see filter
 * @see reduce
 */
interface StunsailMap {
  <T extends string> (collection: T, fn: StringIterator<T>): T
  <T, R extends T> (collection: T[], fn: ArrayIterator<T, R>): R[]
  <K, V, R extends V> (collection: Map<K, V>, fn: MapIterator<K, V, R>): Map<K, R>
  <T, R extends T> (collection: Set<T>, fn: SetIterator<T, R>): Set<R>
  <T extends object, R extends T> (collection: T, fn: ObjectIterator<T, R[keyof R]>): R
}

declare const map: StunsailMap
export default map
