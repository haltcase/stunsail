/**
 * @description
 * Ensures that a number `value` is between bounds `lower` and `upper`.
 *
 * If `value` is not a number it's assumed to be 0, while `lower` and
 * `upper` are set to `value` when they aren't numbers (or aren't provided).
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | value | `number` | The number to operate on |
 * | lower | `number` | Lower bound |
 * | upper | `number` | Upper bound |
 *
 * @returns `number` &ndash; between `lower` & `upper`
 *
 * @example
 * clamp(20, -10, 10)
 * // -> 10
 *
 * clamp(-15, -10, 10)
 * // -> -10
 *
 * @since v1.0.0
 * @tag numbers
 */
interface Clamp {
  (value: number, lower?: number, upper?: number): number
}

declare const clamp: Clamp
export default clamp
