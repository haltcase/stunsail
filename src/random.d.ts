/**
 * If `value` is an Array or Object, return a random value. If it's a number
 * and `bound` is absent, return a random number between 0 and `value`. If
 * `bound` is provided, return a random value between `value` and `bound`.
 */
interface Random {
  (value: number, bound?: number): number
  <T> (value: T[]): T
  <T> (value: ArrayLike<T>): T
  <T extends object> (value: T): T[keyof T]
}

declare const random: Random
export default random
