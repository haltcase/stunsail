/**
 * @description
 * Convert the given string to `text case`.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | string | `string` | Input string to convert to text-case |
 *
 * @returns `string`
 *
 * @example
 * textCase('snake-cased-string')
 * // -> 'snake cased string'
 *
 * textCase('camelCasedThing')
 * // -> 'camel cased thing'
 *
 * textCase('already text cased')
 * // -> 'already text cased'
 *
 * @see camelCase
 * @see kebabCase
 * @see snakeCase
 * @since v1.0.0
 * @tag strings
 */
interface TextCase {
  (string: string): string
}

declare const textCase: TextCase
export default textCase
