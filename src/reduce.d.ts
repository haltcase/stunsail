import { ArrayAccumulator, MapAccumulator, ObjectAccumulator, SetAccumulator, StringAccumulator } from './types'

/**
 * @description
 * Universal version of native `Array#reduce` that works on pretty much any
 * iterable - arrays & array-likes, objects, Sets, Maps, strings, custom
 * iterables, etc.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | collection | `Iterable` | Iterable-like object to reduce from |
 * | fn | `Function` | Function that builds the accumulator with each iteration |
 * | initial | `any` | Value first passed to `fn` |
 *
 * @returns `any`
 *
 * @example
 * let collection = { one: 1, two: 2, three: 3 }
 * reduce(collection, (acc, cur) => acc + cur, 0)
 * // -> 6
 *
 * collection = [1, 2, 3, 4, 5]
 * reduce(collection, (acc, cur) => acc + cur, 0)
 * // -> 15
 *
 * collection = 'foobar'
 * fn(collection, (acc, cur) => {
 *   acc.splice(0, 0, cur)
 *   return acc
 * }, [])
 * // -> ['r', 'a', 'b', 'o', 'o', 'f']
 *
 * @see reduceWhile
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
