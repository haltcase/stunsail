import { ArrayIterator, MapIterator, ObjectIterator, SetIterator, StringIterator } from './types'

/**
 * @description
 * Universal version of native `Array#forEach` that works on pretty much any
 * iterable - arrays & array-likes, objects, Sets, Maps, strings, custom
 * iterables, etc.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | collection | `Iterable` | Iterable-like object to iterate over |
 * | fn | `Function` | Called with each iteration |
 *
 * @returns `undefined`
 *
 * @example
 * each([1, 2, 3], v => console.log(v))
 * // -> 1  2  3
 *
 * each('string', v => console.log(v))
 * // -> s  t  r  i  n  g
 *
 * each({ key: 'value', keyTwo: 'valueTwo' }, v => console.log(v))
 * // -> 'value'  'valueTwo'
 *
 * each(new Set([1, 2, 3]), v => console.log(v))
 * // -> 1  2  3
 *
 * const map = new Map()
 * map.set('keyOne', 'valueOne')
 * map.set('keyTwo', 'valueTwo')
 *
 * each(map, v => console.log(v))
 * // -> 'value'  'valueTwo'
 *
 * const obj = {
 *   * [Symbol.iterator] () {
 *     for (const n of [1, 2, 3]) {
 *       yield n
 *     }
 *   }
 * }
 *
 * each(obj, v => console.log(v))
 * // -> 1  2  3
 *
 * @see filter
 * @see map
 * @see reduce
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
