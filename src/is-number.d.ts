/**
 * Check whether `value` is a number.
 */
interface IsNumber {
  (value: unknown): value is number
}

declare const isNumber: IsNumber
export default isNumber
