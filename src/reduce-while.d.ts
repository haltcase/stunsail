import { ArrayAccumulator, MapAccumulator, ObjectAccumulator, SetAccumulator, StringAccumulator } from './types'

/**
 * Works just like [`reduce`](#reduce) but short-circuits when
 * `predicate` returns a falsy value.
 */
interface ReduceWhile {
  <T extends string, U = string> (collection: T, predicate: (accumulator: T, value: U) => boolean, fn: StringAccumulator<T, U>, initial?: U): U
  <T, U = T extends (infer A)[] ? A : never> (collection: T[], predicate: (accumulator: T, value: U) => boolean, fn: ArrayAccumulator<T, U>, initial?: U): U
  <K, V> (collection: Map<K, V>, predicate: (accumulator: T, value: U) => boolean, fn: MapAccumulator<K, V, any>): Map<K, V>
  <T, U = T> (collection: Set<T>, predicate: (accumulator: T, value: U) => boolean, fn: SetAccumulator<T, U>, initial?: U): U
  <T extends object> (collection: T, predicate: (accumulator: T, value: U) => boolean, fn: ObjectAccumulator<T, T[keyof T]>): T
  <T extends object, U> (collection: T, predicate: (accumulator: T, value: U) => boolean, fn: ObjectAccumulator<T, U>, initial: U): U
}

declare const reduceWhile: ReduceWhile
export default reduceWhile
