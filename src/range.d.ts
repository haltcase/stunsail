/**
 * @description
 * Create an array of numbers beginning at and including `start`
 * through and including `end`.
 *
 * If `step` is provided, it is used as the increment between
 * each element of the resulting array. This can affect the number
 * of values in the result.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | start | `number` | Value at which to start the range |
 * | end | `number` | Value at which to end the range |
 * | step | `number` | Increment between each element |
 *
 * @returns `number[]`
 *
 * @example
 * range(0, 10)
 * // -> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 *
 * range(0, 10, 2)
 * // -> [0, 2, 4, 6, 8, 10]
 *
 * @see isInRange
 * @since v1.0.0
 * @tag numbers
 */
interface Range {
  (...args: [number, number?, number?]): number[]
}

declare const range: Range
export default range
