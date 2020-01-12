/**
 * @description
 * Convert the given string to `snake_case`.
 *
 * @parameters
 * | name | type | description |
 * | :--: | :--: | ----------- |
 * | string | `string` | Input string to convert to snake-case |
 *
 * @returns `string`
 *
 * @example
 * snakeCase('A space separated string')
 * // -> 'a_space_separated_string'
 *
 * snakeCase('camelCasedThing')
 * // -> 'camel_cased_thing'
 *
 * snakeCase('already_snake_cased')
 * // -> 'already_snake_cased'
 *
 * @see camelCase
 * @see kebabCase
 * @see textCase
 * @since v1.0.0
 * @tag strings
 */
interface SnakeCase {
  (string: string): string
}

declare const snakeCase: SnakeCase
export default snakeCase
