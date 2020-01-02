/**
 * Check whether `value` is an empty version of its type, ie. `{}` for Objects,
 * `[]` for Arrays, etc.
 */
interface IsEmpty {
  (value: unknown): boolean
}

declare const isEmpty: IsEmpty
export default isEmpty
