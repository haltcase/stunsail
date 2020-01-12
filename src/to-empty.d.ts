/**
 * @description
 * Return an empty value matching the kind supplied by `type`,
 * which is either a string representing its kind or any object.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | type | `` |  |
 *
 * @returns `any`
 *
 * @example
 * toEmpty('array')
 * // -> []
 *
 * toEmpty('object')
 * // -> {}
 *
 * toEmpty('boolean')
 * // -> false
 *
 * toEmpty(null)
 * // -> null
 *
 * toEmpty([1, 2, 3, 4])
 * // -> []
 *
 * @since v1.0.0
 * @tag utilities
 */
interface ToEmpty {
  <T> (type: T[]): T[]
  <K extends string | number | symbol, V> (type: Record<K, V>): Record<K, V>
  <K, V> (type: Map<K, V>): Map<K, V>
  <T> (type: Set<T>): Set<T>
  <T = ''> (type: string): T
  (type: boolean): false
  (type: number): 0
  (type: null): null
  (type: undefined): undefined
}

declare const toEmpty: ToEmpty
export default toEmpty
