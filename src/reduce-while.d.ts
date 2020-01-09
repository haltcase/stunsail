import { ArrayAccumulator, MapAccumulator, ObjectAccumulator, SetAccumulator, StringAccumulator } from './types'

/**
 * @description
 * Works just like [`reduce`](#reduce) but short-circuits when
 * `predicate` returns a falsy value.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | collection | `Iterable` | Iterable-like object to reduce from |
 * | predicate | `Function` | Function that will stop iteration when returning a falsy value |
 * | fn | `Function` | Function that builds the accumulator with each iteration |
 * | initial | `any` | Value first passed to `fn` |
 *
 * @returns `any`
 *
 * @example
 * const predicate = accumulator => accumulator !== 3
 * const reducer = (acc, cur) => acc + cur
 * const object = { one: 1, two: 2, three: 3 }
 *
 * reduce(object, reducer, 0)
 * // -> 6
 *
 * reduceWhile(object, predicate, reducer, 0)
 * // -> 3
 *
 * @see reduce
 */
interface ReduceWhile {
  <T extends string, U = string> (collection: T, predicate: (accumulator: T, value: U) => boolean, fn: StringAccumulator<T, U>, initial?: U): U
  <T, U = T extends (infer A)[] ? A : never> (collection: T[], predicate: (accumulator: T[], value: U) => boolean, fn: ArrayAccumulator<T, U>, initial?: U): U
  <K, V> (collection: Map<K, V>, predicate: (accumulator: Map<K, V>, value: V) => boolean, fn: MapAccumulator<K, V, any>): Map<K, V>
  <T, U = T> (collection: Set<T>, predicate: (accumulator: Set<T>, value: U) => boolean, fn: SetAccumulator<T, U>, initial?: U): U
  <T extends object> (collection: T, predicate: (accumulator: T, value: T[keyof T]) => boolean, fn: ObjectAccumulator<T, T[keyof T]>): T
  <T extends object, U> (collection: T, predicate: (accumulator: T, value: U) => boolean, fn: ObjectAccumulator<T, U>, initial: U): U
}

declare const reduceWhile: ReduceWhile
export default reduceWhile
