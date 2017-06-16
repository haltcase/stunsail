module.exports = ({ dedent: $ }) => {
  return {
    header: 'isNil(value)',
    description: $`
      Check whether \`value\` is \`null\` or \`undefined\`.
    `,
    parameters: [
      ['value', 'any', 'Value to test']
    ],
    returns: '`boolean`',
    usage: $`
      isNil(null)
      // -> true

      isNil(undefined)
      // -> true

      isNil(false)
      // -> false
    `,
    curried: false
  }
}
