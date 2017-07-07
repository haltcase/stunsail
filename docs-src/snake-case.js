module.exports = ({ dedent: $ }) => {
  return {
    header: 'snakeCase(string)',
    description: $``,
    parameters: [
      ['string', 'string', 'Input string to convert to snake-case']
    ],
    returns: '`any`',
    usage: $`
      snakeCase('A space separated string')
      // -> 'a_space_separated_string'

      snakeCase('camelCasedThing')
      // -> 'camel_cased_thing'

      snakeCase('already_snake_cased')
      // -> 'already_snake_cased'
    `
  }
}
