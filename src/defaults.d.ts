import { Primitive } from './types'

/**
 * @description
 * Sets own properties from `extension` on `object` if any of them are not
 * present on `object`.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | object | `object` | Base object to extend |
 * | extension | `object` | Object containing default properties |
 *
 * @returns `object`
 *
 * @example
 * const base = { abc: '123', def: '456' }
 * const ext = { abc: '999', ghi: '789' }
 * const result = defaults(base, ext)
 * // -> { abc: '123', def: '456', ghi: '789' }
 *
 * @since v1.0.0
 * @tag objects
 */
interface Defaults {
  <T extends Primitive> (object: T, extension: any): T
  <T extends object, U extends object> (object: T, extension: U): T & U
}

declare const defaults: Defaults
export default defaults
