/**
 * Check whether `value` is a string.
 */
interface IsString {
  (value: unknown): value is string
}

declare const isString: IsString
export default isString
