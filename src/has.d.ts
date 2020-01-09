import { PathLinks } from './types'

/**
 * @description
 * Alternative to the builtin `Object#hasOwnProperty` function with support
 * for deep-property access using both dot and bracket syntax.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | object | `object` | Object-like value to access |
 * | path | `string, string[]` | String using dot or bracket syntax, or an array of path segments |
 *
 * @returns `boolean`
 *
 * @example
 * const object = { attributes: { flammable: true } }
 * has('attributes.flammable', object)
 * // -> true
 *
 * const objectTwo = { array: [1, 2, 3] }
 * // these are equivalent
 * has(objectTwo, 'array[2]')
 * has(objectTwo, 'array.2')
 * // -> true
 *
 * has(objectTwo, 'array[3]')
 * // -> false
 *
 * @see get
 * @see getOr
 * @see set
 */
interface Has {
  <K extends string | number | symbol, V> (object: Record<K, V>, path: string | PathLinks): boolean
}

declare const has: Has
export default has
