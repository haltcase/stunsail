/**
 * @description
 * If `value` is an array or object, return a random value. If it's a number
 * and `bound` is absent, return a random number between 0 and `value`. If
 * `bound` is provided, return a random value between `value` and `bound`.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | value | `array` `object` `number` | Collection to sample or a bounding number |
 * | bound | `number` | Used as the upper bound when `value` is a number |
 *
 * @returns `any`
 *
 * @example
 * random([1, 2, 3])
 * // -> randomly chosen element from the array
 *
 * random({ one: 1, two: 2, three: 3 })
 * // -> value from a randomly chosen key in the object
 *
 * random(10)
 * // -> randomly chosen number between 0 and 10
 *
 * random(-5, 5)
 * // -> randomly chosen number between -5 and 5
 */
interface Random {
  (value: number, bound?: number): number
  <T> (value: T[]): T
  <T> (value: ArrayLike<T>): T
  <T extends object> (value: T): T[keyof T]
}

declare const random: Random
export default random
