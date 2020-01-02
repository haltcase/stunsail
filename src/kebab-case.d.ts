/**
 * Convert the given string to `kebab-case`.
 */
interface KebabCase {
  (string: string): string
}

declare const kebabCase: KebabCase
export default kebabCase
