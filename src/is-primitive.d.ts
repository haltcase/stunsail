import { Primitive } from './types'

/**
 * @description
 * Check whether `value` is a primitive, ie. one of:
 *
 * * `null`
 * * `string`
 * * `number`
 * * `boolean`
 * * `undefined`
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | value | `any` | Value to test |
 *
 * @returns `boolean`
 *
 * @example
 * // examples of `true` cases:
 * isPrimitive(null)
 * isPrimitive('string')
 * isPrimitive(4)
 * isPrimitive(true)
 * isPrimitive(undefined)
 *
 * // examples of `false` cases:
 * isPrimitive({})
 * isPrimitive([])
 * isPrimitive(new Date())
 */
interface IsPrimitive {
  (value: unknown): value is Primitive
}

declare const isPrimitive: IsPrimitive
export default isPrimitive
