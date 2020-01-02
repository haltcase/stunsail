/**
 * Check whether `value` is a plain object.
 */
interface IsObject {
  (value: any): value is object
}

declare const isObject: IsObject
export default isObject
