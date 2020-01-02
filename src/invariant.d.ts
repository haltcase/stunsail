import { Falsy } from './types'

/**
 * Test that `condition` is truthy and return its value,
 * or throw an error with `message` when it is falsy.
 *
 * `message` defaults to 'Invariant Violation'.
 */
interface Invariant {
  (condition: Falsy, message?: string): never
  <T> (condition: T, message?: string): T | never
}

declare const invariant: Invariant
export default invariant
