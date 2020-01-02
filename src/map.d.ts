import { ArrayIterator, MapIterator, ObjectIterator, SetIterator, StringIterator } from './types'

/**
 * Universal version of native `Array#map` that works on pretty much any
 * iterable - Arrays & Array-likes, Objects, Sets, Maps, strings, custom
 * iterables, etc.
 *
 * The return value will be `collection` but each value will be the result
 * of applying `fn` at each iteration to the arguments `value`, `key`,
 * `collection`.
 */
interface StunsailMap {
  <T extends string> (collection: T, fn: StringIterator<T>): T
  <T, R extends T> (collection: T[], fn: ArrayIterator<T, R>): R[]
  <K, V, R extends V> (collection: Map<K, V>, fn: MapIterator<K, V, R>): Map<K, R>
  <T, R extends T> (collection: Set<T>, fn: SetIterator<T, R>): Set<R>
  <T extends object, R extends T> (collection: T, fn: ObjectIterator<T, R[keyof R]>): R
}

declare const stunsailMap: StunsailMap
export default stunsailMap
