/**
 * Check whether `value` is a `Set` object.
 */
interface IsSet {
  (value: unknown): value is Set<unknown>
}

declare const isSet: IsSet
export default isSet
