/**
 * Check whether `value` is between `start` and `end`, inclusively.
 */
interface IsInRange {
  (value: number, start: number, end?: number): boolean
}

declare const isInRange: IsInRange
export default isInRange
