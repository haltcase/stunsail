/**
 * Check that all properties of `compare` are deeply equal to those same
 * properties of `object`.
 */
interface Matches {
  <T extends object> (object: T, compare: object): boolean
}

declare const matches: Matches
export default matches
