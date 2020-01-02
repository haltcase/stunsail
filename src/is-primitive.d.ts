import { Primitive } from './types'

/**
 * Check whether `value` is a primitive, ie. one of:
 *
 * * `null`
 * * `string`
 * * `number`
 * * `boolean`
 * * `undefined`
 */
interface IsPrimitive {
  (value: unknown): value is Primitive
}

declare const isPrimitive: IsPrimitive
export default isPrimitive
