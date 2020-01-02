/**
 * Alternative to the builtin `typeof` operator that returns a more accurate
 * type string.
 */
interface GetType {
  (value: unknown): string
}

declare const getType: GetType
export default getType
