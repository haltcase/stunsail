/**
 * Check whether `value` is `null` or `undefined`.
 */
interface IsNil {
  (value: unknown): value is null | void
}

declare const isNil: IsNil
export default isNil
