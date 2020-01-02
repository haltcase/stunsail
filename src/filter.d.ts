import { ArrayIterator, MapIterator, ObjectIterator, SetIterator, StringIterator } from './types'

/**
 * Universal version of native `Array#filter` that works on pretty much any
 * iterable - Arrays & Array-likes, Objects, Sets, Maps, strings, custom
 * iterables, etc.
 *
 * `fn` is called with arguments `value`, `key`, `collection`. If the result
 * is truthy, the element will be present in the resulting collection. If the
 * result is falsy, it will be _filtered_.
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
