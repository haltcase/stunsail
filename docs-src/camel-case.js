module.exports = ({ dedent: $ }) => {
  return {
    header: 'camelCase(string)',
    description: $``,
    parameters: [
      ['string', 'string', 'Input string to convert to camel-case']
    ],
    returns: '`any`',
    usage: $`
      camelCase('A space separated string')
      // -> 'aSpaceSeparatedString'

      camelCase('snake_cased_thing')
      // -> 'snakeCasedThing'

      camelCase('alreadyCamelCased')
      // -> 'alreadyCamelCased'
    `
  }
}
