/**
 * @description
 * Check whether `value` is an empty version of its type, i.e. `{}` for objects,
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
 *
 * @since v1.0.0
 * @tag types
 * @tag logic
 */
interface IsEmpty {
  (value: unknown): boolean
}

declare const isEmpty: IsEmpty
export default isEmpty
