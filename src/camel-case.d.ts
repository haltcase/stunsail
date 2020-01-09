/**
 * @description
 * Convert the given string to `camelCase`.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | string | `string` | Input string to convert to camel-case |
 *
 * @returns `string`
 *
 * @example
 * camelCase('A space separated string')
 * // -> 'aSpaceSeparatedString'
 *
 * camelCase('snake_cased_thing')
 * // -> 'snakeCasedThing'
 *
 * camelCase('alreadyCamelCased')
 * // -> 'alreadyCamelCased'
 *
 * @see kebabCase
 * @see snakeCase
 * @see textCase
 */
interface CamelCase {
  (string: string): string
}

declare const camelCase: CamelCase
export default camelCase
