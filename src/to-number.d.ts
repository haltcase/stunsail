/**
 * Convert the given `value` to a number. For example, this function applied to
 * a collection of almost any kind will return the number of elements in the
 * collection.
 */
interface ToNumber {
  (value: unknown, round?: boolean): number
}

declare const toNumber: ToNumber
export default toNumber
