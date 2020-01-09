import { Falsy } from './types'

/**
 * @description
 * Test that `condition` is truthy and return its value,
 * or throw an error with `message` when it is falsy.
 *
 * `message` defaults to 'Invariant Violation'.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | condition | `any` | Value to test |
 * | message | `string` | Message thrown with the error when `condition` is falsy |
 *
 * @returns `any`
 *
 * @example
 * const truthyCondition = () => {}
 * const result1 = invariant(truthyCondition, 'No function provided.')
 * // -> () => {}
 *
 * const falsyCondition = null
 * const result2 = invariant(truthyCondition, 'No function provided.')
 * // -> InvariantError: 'No function provided.'
 */
interface Invariant {
  (condition: Falsy, message?: string): never
  <T> (condition: T, message?: string): T | never
}

declare const invariant: Invariant
export default invariant
