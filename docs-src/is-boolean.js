module.exports = ({ dedent: $ }) => {
  return {
    header: 'isBoolean(value)',
    description: $`
      Check whether \`value\` is a boolean.
    `,
    parameters: [
      ['value', 'any', 'Value to test']
    ],
    returns: '`any`',
    usage: $`
      isBoolean(true)
      // -> true

      isBoolean(false)
      // -> true

      isBoolean(0)
      // -> false
    `,
    curried: false
  }
}
