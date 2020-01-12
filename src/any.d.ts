import { ArrayIterator, MapIterator, ObjectIterator, SetIterator, StringIterator } from './types'

/**
 * @description
 * Universal version of native `Array#some` that works on pretty much any
 * iterable - arrays & array-likes, objects, Sets, Maps, strings, custom
 * iterables, etc.
 *
 * Returns `true` if the result of `fn` is truthy for any item in the
 * collection, or stops iteration early and returns `false` if some item
 * causes `fn` to return a falsy value.
 *
 * `fn` defaults to `val => !!val` so that `collection` can quickly be tested
 * for truthiness throughout.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | collection | `object` | Iterable-like object to map over, applying `fn` on each iteration |
 * | fn | `Function` | Callback applied to each item in `collection` |
 *
 * @returns `boolean` &ndash; whether any item satisifed the condition
 *
 * @example
 * any({ one: 1, two: 2, three: 3 }, v => v === 3)
 * // -> true
 *
 * any([1, 3, 5, 7], v => v > 10)
 * // -> false
 *
 * @see all
 * @since v1.0.0
 * @tag collections
 * @tag logic
 */
interface Any {
  <T extends string> (collection: T, fn?: StringIterator<boolean>): boolean
  <T> (collection: T[], fn?: ArrayIterator<T, boolean>): boolean
  <K, V> (collection: Map<K, V>, fn?: MapIterator<K, V, boolean>): boolean
  <T> (collection: Set<T>, fn?: SetIterator<T, boolean>): boolean
  <T extends object> (collection: T, fn?: ObjectIterator<T, boolean>): boolean
}

declare const any: Any
export default any
