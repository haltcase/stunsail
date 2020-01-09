import { PathLinks } from './types'

/**
 * @description
 * Sets the key at `path` to `value` on `object` and returns
 * the object. Deep property access is supported using both dot and
 * bracket syntax or an array of path segments.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | object | `object` | Object-like value to access |
 * | path | `string, string[]` | String using dot or bracket syntax, or an array of path segments |
 * | value | `any` | Value to which `path` will be set |
 *
 * @returns `object`
 *
 * @example
 * const object = { key: 'value', nested: { inner: { deep: 'thing' } } }
 * set(object, 'nested.inner.deep', 40)
 * // -> { key: 'value', nested: { inner: { deep: 40 } } }
 *
 * @see get
 * @see getOr
 * @see has
 */
interface StunsailSet {
  <K extends string | number | symbol, V> (object: Record<K, V>, path: string | PathLinks, value: V): Record<K, V>
}

declare const set: StunsailSet
export default set
