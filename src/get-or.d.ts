import { PathLinks } from './types'

/**
 * @description
 * Access a property of `object` at `path` safely & deeply, returning
 * `defaultValue` if it doesn't exist.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | object | `object` | Object-like value to access |
 * | path | `string` &#124; `string[]` | String using dot or bracket syntax, or an array of path segments |
 * | defaultValue | `any` | Value to return if `path` resolves to nil |
 *
 * @returns `any`
 *
 * @example
 * const object = { attributes: { flammable: true } }
 * getOr(object, 'attributes.toxic', false)
 * // -> false
 *
 * getOr(object, 'attributes.flammable', false)
 * // -> true
 *
 * const objectTwo = { array: [1, 2, 3] }
 * // these are equivalent
 * getOr(objectTwo, 'array[2]', 'item three')
 * getOr(objectTwo, 'array.2', 'item three')
 * // -> 2
 *
 * getOr(objectTwo, 'array[3]', 'item four')
 * // -> 'item four'
 *
 * @see get
 * @see set
 * @see has
 * @since v1.0.0
 * @tag objects
 */
interface GetOr {
  <K extends string | number | symbol, V> (object: Record<K, V>, path: string | PathLinks, defaultValue: V): V
}

declare const getOr: GetOr
export default getOr
