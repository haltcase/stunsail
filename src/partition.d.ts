import { ArrayIterator, MapIterator, ObjectIterator, SetIterator, StringIterator, Tuple } from './types'

/**
 * Iterate over `collection` and apply `fn` to each item,
 * returning an Array where the first element contains all items
 * for which `fn` returned a truthy value, and the second element
 * contains all items for which it returned a falsy value.
 */
interface Partition {
  <T extends string> (collection: T, fn: StringIterator<boolean>): Tuple<string>
  <T> (collection: T[], fn: ArrayIterator<T, boolean>): Tuple<T[]>
  <K, V> (collection: Map<K, V>, fn: MapIterator<K, V, boolean>): Tuple<Map<K, V>>
  <T> (collection: Set<T>, fn: SetIterator<T, boolean>): Tuple<Set<T>>
  <T extends object> (collection: T, fn: ObjectIterator<T, boolean>): Tuple<Partial<T>>
}

declare const partition: Partition
export default partition
