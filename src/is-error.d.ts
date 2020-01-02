/**
 * Check whether `value` is a built-in Error type.
 */
interface IsError {
  (value: unknown): value is Error
}

declare const isError: IsError
export default isError
