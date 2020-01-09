/**
 * @description
 * Check that all properties of `compare` are deeply equal to those same
 * properties of `object`.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | object | `object` | Object on which to check for properties of `compare` |
 * | compare | `object` | Object containing properties to match |
 *
 * @returns `boolean`
 *
 * @example
 * const wishy = { name: 'wishy', color: 'green' }
 * matches(wishy, { color: 'green' })
 * // -> true
 *
 * const washy = { name: 'washy', color: 'red' }
 * matches(washy, { color: 'blue' })
 * // -> false
 *
 * const arr = [
 *   { name: 'willy', color: 'red' },
 *   { name: 'wally', color: 'red' },
 *   { name: 'dopey', color: 'brown' },
 *   { name: 'wishy', color: 'blue' },
 *   { name: 'washy', color: 'green' }
 * ]
 *
 * arr.find(o => matches(o, { color: 'green' })
 * // -> { name: 'washy', color: 'green' }
 *
 * arr.find(o => matches(o, { color: 'brown' })
 * // -> { name: 'dopey', color: 'brown' }
 *
 * arr.find(o => matches(o, { color: 'red' })
 * // -> { name: 'willy', color: 'red' }
 */
interface Matches {
  <T extends object> (object: T, compare: object): boolean
}

declare const matches: Matches
export default matches
