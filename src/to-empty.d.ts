/**
 * Return an empty value matching the kind supplied by `type`,
 * which is either a string representing its kind or any object.
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
