/**
 * Check whether `value` is `NaN`.
 */
interface IsNan {
  (value: unknown): boolean
}

declare const isNan: IsNan
export default isNan
