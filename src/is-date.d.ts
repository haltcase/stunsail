/**
 * Check whether `value` is a `Date` instance.
 */
interface IsDate {
  (value: unknown): value is Date
}

declare const isDate: IsDate
export default isDate
