/**
 * Check whether `value` is a boolean.
 */
interface IsBoolean {
  (value: unknown): value is boolean
}

declare const isBoolean: IsBoolean
export default isBoolean
