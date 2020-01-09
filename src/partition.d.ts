import { ArrayIterator, MapIterator, ObjectIterator, SetIterator, StringIterator, Tuple } from './types'

/**
 * @description
 * Iterate over `collection` and apply `fn` to each item,
 * returning an array where the first element contains all items
 * for which `fn` returned a truthy value, and the second element
 * contains all items for which it returned a falsy value.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | collection | `object` | Object-like value to split |
 * | fn | `Function` | Predicate with which to split items |
 *
 * @returns `[truthy, falsy]`
 *
 * @example
 * partition([true, false, true, false], v => v === true)
 * // -> [[true, true], [false, false]]
 *
 * partition({ keyOne: true, keyTwo: false }, v => v === true)
 * // -> [{ keyOne: true }, { keyTwo: false }]
 *
 * partition('some arbitrary string', v => v === ' ')
 * // -> ['  ', 'somearbitrarystring']
 *
 * partition(new Map([['keyOne', true], ['keyTwo', false]]), v => v === true)
 * // -> [ Map {'keyOne' => true}, Map {'keyTwo' => false} ]
 *
 * partition(new Set(['Joe', 'Jerry', 'Rick', 'Bob']), v => v.startsWith('J'))
 * // -> [ Set {'Joe', 'Jerry'}, Set {'Rick', 'Bob'} ]
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
