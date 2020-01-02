/**
 * Convert the given string to `camelCase`.
 */
interface CamelCase {
  (string: string): string
}

declare const camelCase: CamelCase
export default camelCase
