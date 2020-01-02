import { Primitive } from './types'

/**
 * Sets own properties from `extension` on `object` if any of them are not
 * present on `object`.
 */
interface Defaults {
  <T extends Primitive> (object: T, extension: any): T
  <T extends object, U extends object> (object: T, extension: U): T & U
}

declare const defaults: Defaults
export default defaults
