/**
 * @description
 * Check that all properties of `compare` are deeply equal to those same
 * properties of `object`.
 *
 * This differs from [isSubset](#isSubset), which will recurse into an
 * object's properties to check whether they are _subsets_ of those same
 * paths in another object.
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
 *
 * @see isSubset
 * @since v1.0.0
 * @tag objects
 * @tag logic
 */
interface Matches {
  <T extends object> (object: T, compare: object): boolean
}

declare const matches: Matches
export default matches
