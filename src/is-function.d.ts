/**
 * Check whether `value` is a function.
 */
interface IsFunction {
  (value: unknown): value is Function
}

declare const isFunction: IsFunction
export default isFunction
