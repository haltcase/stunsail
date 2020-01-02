/**
 * Convert the given string to `snake_case`.
 */
interface SnakeCase {
  (string: string): string
}

declare const snakeCase: SnakeCase
export default snakeCase
