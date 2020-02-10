/**
 * @description
 * Check if a given object is a subset of another, recursively.
 *
 * This differs from [`matches`](#matches), which will check that
 * the given properties of one object are _deeply equal_ to those same
 * properties in another &mdash; without the recursive partial behavior.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | superset | `object` | Object to compare with `subset` |
 * | subset | `object` | Object containing properties to match |
 *
 * @returns `boolean`
 *
 * @example
 * const path = {
 *   id: 100,
 *   label: "greeting",
 *   node: {
 *     kind: "string",
 *     value: "hello"
 *   }
 * }
 *
 * isSubset(path, { label: "greeting" })
 * // -> true
 *
 * isSubset(path, { node: { value: "hello" } })
 * // -> true
 *
 * isSubset(path, { node: { kind: "number" } })
 * // -> false
 *
 * @see matches
 * @since v1.0.0
 * @tag objects
 * @tag logic
 */
interface IsSubset {
  <T extends object> (superset: T, subset: object): boolean
}

declare const isSubset: IsSubset
export default isSubset
