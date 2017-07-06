module.exports = ({ dedent: $ }) => {
  return {
    header: 'kebabCase(string)',
    description: $``,
    parameters: [
      ['string', 'string', 'Input string to convert to kebab-case']
    ],
    returns: '`any`',
    usage: $`
      kebabCase('A space separated string')
      // -> 'a-space-separated-string'

      kebabCase('camelCasedThing')
      // -> 'camel-cased-thing'

      kebabCase('already-kebab-cased')
      // -> 'already-kebab-cased'
    `
  }
}
