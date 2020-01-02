import { IterableValue, Primitive, MapKey, MapValue } from './types'

/**
 * Ensure an object is returned, by converting `value` if possible
 * or by returning an empty object otherwise. If `value` is already
 * an object it is simply returned.
 */
interface ToObject {
  <T extends Map<any, any>> (value: T): Record<MapKey<T>, MapValue<T>>
  <T extends Iterable<any>> (value: T): Record<IterableValue<T>, IterableValue<T>>
  <T extends Primitive> (value: T): Record<Extract<T, PropertyKey>, T>
  <T extends Record<any, any>> (value: T): T
}

declare const toObject: ToObject
export default toObject
