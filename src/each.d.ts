import { ArrayIterator, MapIterator, ObjectIterator, SetIterator, StringIterator } from './types'

/**
 * Universal version of native `Array#forEach` that works on pretty much any
 * iterable - Arrays & Array-likes, Objects, Sets, Maps, strings, custom
 * iterables, etc.
 */
interface Each {
  <T extends string> (collection: T, fn: StringIterator<any>): void
  <T> (collection: T[], fn: ArrayIterator<T, any>): void
  <K, V> (collection: Map<K, V>, fn: MapIterator<K, V, any>): void
  <T> (collection: Set<T>, fn: SetIterator<T, any>): void
  <T extends object> (collection: T, fn: ObjectIterator<T, any>): void
}

declare const each: Each
export default each
