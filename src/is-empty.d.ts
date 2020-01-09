/**
 * @description
 * Check whether `value` is an empty version of its type, ie. `{}` for objects,
 * `[]` for arrays, etc.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | value | `any` | Value to test |
 *
 * @returns `boolean`
 *
 * @example
 * // examples of `true` cases:
 * isEmpty({})
 * isEmpty([])
 * isEmpty(null)
 * isEmpty('')
 *
 * // examples of `false` cases:
 * isEmpty({ property: 'hello' })
 * isEmpty([1, 2, 3])
 * isEmpty(() => {})
 * isEmpty('a value')
 */
interface IsEmpty {
  (value: unknown): boolean
}

declare const isEmpty: IsEmpty
export default isEmpty
