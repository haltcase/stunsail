module.exports = ({ dedent: $ }) => {
  return {
    header: 'isType(type, value)',
    description: $`
      If \`type\` is a string, check whether \`value\` has that type. Other
      kinds will check that the types of \`type\` and \`value\` match.

      Leaving \`value\` absent is useful to create an function to
      check for that specific type.
    `,
    parameters: [
      ['type', 'string, any', ''],
      ['value', 'any', 'Value to test']
    ],
    returns: '`boolean`',
    usage: $`
      isType('string', 'bar')
      // -> true

      isType('number', '3')
      // -> false

      isType(Date, new Date())
      // -> true

      const isArray = isType('array')

      isArray([])
      // -> true
    `,
    curried: true
  }
}
