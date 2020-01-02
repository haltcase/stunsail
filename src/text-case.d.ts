/**
 * Convert the given string to `text case`.
 */
interface TextCase {
  (string: string): string
}

declare const textCase: TextCase
export default textCase
