/**
 * Check whether `value` is an Array, like the built-in
 * `Array.isArray()` method.
 */
interface IsArray {
  (value: unknown): value is unknown[]
}

declare const isArray: IsArray
export default isArray
