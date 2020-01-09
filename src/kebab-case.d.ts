/**
 * @description
 * Convert the given string to `kebab-case`.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | string | `string` | Input string to convert to kebab-case |
 *
 * @returns `string`
 *
 * @example
 * kebabCase('A space separated string')
 * // -> 'a-space-separated-string'
 *
 * kebabCase('camelCasedThing')
 * // -> 'camel-cased-thing'
 *
 * kebabCase('already-kebab-cased')
 * // -> 'already-kebab-cased'
 *
 * @see camelCase
 * @see snakeCase
 * @see textCase
 */
interface KebabCase {
  (string: string): string
}

declare const kebabCase: KebabCase
export default kebabCase
