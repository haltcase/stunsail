import { ArrayAccumulator, MapAccumulator, ObjectAccumulator, SetAccumulator, StringAccumulator } from './types'

/**
 * Universal version of native `Array#reduce` that works on pretty much any
 * iterable - Arrays & Array-likes, Objects, Sets, Maps, strings, custom
 * iterables, etc.
 */
interface Reduce {
  <T extends string, U = string> (collection: T, fn: StringAccumulator<T, U>, initial?: U): U
  <T, U = T extends (infer A)[] ? A : never> (collection: T[], fn: ArrayAccumulator<T, U>, initial?: U): U
  <K, V> (collection: Map<K, V>, fn: MapAccumulator<K, V, any>): Map<K, V>
  <T, U = T> (collection: Set<T>, fn: SetAccumulator<T, U>, initial?: U): U
  <T extends object> (collection: T, fn: ObjectAccumulator<T, T[keyof T]>): T
  <T extends object, U> (collection: T, fn: ObjectAccumulator<T, U>, initial: U): U
}

declare const reduce: Reduce
export default reduce
