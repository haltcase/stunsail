import { IterableValue, Primitive, MapKey, MapValue, ValidPropertyKey } from './types'

/**
 * @description
 * Ensure an object is returned, by converting `value` if possible
 * or by returning an empty object otherwise. If `value` is already
 * an object it is simply returned. `null` & `undefined` will produce
 * an empty object.
 *
 * Works just like [`toObject`](#toObject), but receives a function
 * that allows for transforming the values of the resulting object.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | value | `any` | Value to convert |
 * | fn | `Function` | Function accepting incoming elements and returning values of the output object |
 *
 * @returns `object`
 *
 * @example
 * toObjectWith(['one', 'two', 'three'], value => value)
 * // -> { one: 'one', two: 'two', three: 'three' }
 *
 * toObjectWith(['one', 'two', 'three'], value => {
 *   switch (value) {
 *     case 'one': return [1]
 *     case 'two': return [2]
 *     case 'three': return [3]
 *   }
 * })
 * // -> { one: [1], two: [2], three: [3] }
 *
 * @see toObject
 */
interface ToObjectWith {
  (value: null | undefined, fn: (value: never) => any): {}
  <T extends Primitive, U extends any> (value: T, fn: (value: T) => U): Record<ValidPropertyKey<T>, U>
  <T extends Map<any, any>, U extends any> (value: T, fn: (value: MapValue<T>) => U): Record<MapKey<T>, U>
  <T extends Iterable<any>, U extends any> (value: T, fn: (value: IterableValue<T>) => U): Record<IterableValue<T>, U>
  <T extends Record<any, any>> (value: T, fn: (...args: any[]) => any): T
}

declare const toObjectWith: ToObjectWith
export default toObjectWith
