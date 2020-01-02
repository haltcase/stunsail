/**
 * Check whether `value` is a `Map` object.
 */
interface IsMap {
  (value: unknown): value is Map<unknown, unknown>
}

declare const isMap: IsMap
export default isMap
