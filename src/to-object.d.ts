import { IterableValue, Primitive, MapKey, MapValue } from './types'

/**
 * @description
 * Ensure an object is returned, by converting `value` if possible
 * or by returning an empty object otherwise. If `value` is already
 * an object it is simply returned.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | value | `any` | Value to convert |
 *
 * @returns `object`
 *
 * @example
 * toObject(['one', 'two', 'three'])
 * // -> { one: 'one', two: 'two', three: 'three' }
 *
 * toObject(3)
 * // -> { '3': 3 }
 *
 * toObject(new Map([['keyOne', 'valueOne'], ['keyTwo', 'valueTwo']]))
 * // -> { keyOne: 'valueOne', keyTwo: 'valueTwo' }
 *
 * toObject(true)
 * // -> { 'true': true }
 *
 * toObject('fly')
 * // -> { 'fly': 'fly' }
 *
 * toObject(null)
 * // -> { 'null': null }
 *
 * toObject(undefined)
 * // -> { 'undefined': undefined }
 *
 * toObject(new Date)
 * // -> {}
 *
 * @see toObjectWith
 */
interface ToObject {
  <T extends Map<any, any>> (value: T): Record<MapKey<T>, MapValue<T>>
  <T extends Iterable<any>> (value: T): Record<IterableValue<T>, IterableValue<T>>
  <T extends Primitive> (value: T): Record<Extract<T, PropertyKey>, T>
  <T extends Record<any, any>> (value: T): T
}

declare const toObject: ToObject
export default toObject
