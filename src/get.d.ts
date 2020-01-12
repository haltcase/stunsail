import { PathLinks } from './types'

/**
 * @description
 * Access a property of `object` at `path` safely & deeply, returning
 * `undefined` if it doesn't exist.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | object | `object` | Object-like value to access |
 * | path | `string` &#124; `string[]` | String using dot or bracket syntax, or an array of path segments |
 *
 * @returns `any`
 *
 * @example
 * const object = { attributes: { flammable: true } }
 * get(object, 'attributes.toxic')
 * // -> undefined
 *
 * get(object, 'attributes.flammable')
 * // -> true
 *
 * const objectTwo = { array: [1, 2, 3] }
 * // these are equivalent
 * get(objectTwo, 'array[2]')
 * get(objectTwo, 'array.2')
 * // -> 2
 *
 * get(objectTwo, 'array[3]')
 * // -> undefined
 *
 * @see get
 * @see getOr
 * @see has
 * @since v1.0.0
 * @tag objects
 */
interface Get {
  <K extends string | number | symbol, V> (object: Record<K, V>, path: string | PathLinks): V | undefined
}

declare const get: Get
export default get
