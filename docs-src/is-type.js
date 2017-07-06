module.exports = ({ dedent: $ }) => {
  return {
    header: 'isType(value, type)',
    description: $`
      If \`type\` is a string, check whether \`value\` has that type. Other
      kinds will check that the types of \`type\` and \`value\` match.
    `,
    parameters: [
      ['value', 'any', 'Value to test'],
      ['type', 'string, any', '']
    ],
    returns: '`boolean`',
    usage: $`
      isType('bar', 'string')
      // -> true

      isType('3', 'number')
      // -> false

      isType(new Date(), Date)
      // -> true
    `
  }
}
