/**
 * Create an Array of numbers beginning at and including `start`
 * through and including `end`.
 *
 * If `step` is provided, it is used as the increment between
 * each element of the resulting Array. This can affect the number
 * of values in the result.
 */
interface Range {
  (...args: [number, number?, number?]): number[]
}

declare const range: Range
export default range
