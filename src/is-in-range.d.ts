/**
 * @description
 * Check whether `value` is between `start` and `end`, inclusively.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | value | `number` | Value to test |
 * | start | `number` | Lower boundary |
 * | end | `number` | Upper boundary |
 *
 * @returns `boolean`
 *
 * @example
 * isInRange(20, 0, 40)
 * // -> true
 *
 * isInRange(-10, 0, 40)
 * // -> false
 *
 * isInRange(10, 0, 10)
 * // -> true
 *
 * @see range
 * @since v1.0.0
 * @tag types
 * @tag logic
 */
interface IsInRange {
  (value: number, start: number, end?: number): boolean
}

declare const isInRange: IsInRange
export default isInRange
