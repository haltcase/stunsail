/**
 * If `type` is a string, check whether `value` has that type. Other kinds will
 * check that the types of `type` and `value` match.
 */
interface IsType {
  (value: unknown, type: string): boolean
}

declare const isType: IsType
export default isType
