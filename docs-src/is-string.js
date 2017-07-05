module.exports = ({ dedent: $ }) => {
  return {
    header: 'isString(value)',
    description: $`
      Check whether \`value\` is a string.
    `,
    parameters: [
      ['value', 'any', 'Value to test']
    ],
    returns: '`boolean`',
    usage: $`
      isString('something here')
      // -> true

      isString(400)
      // -> false
    `
  }
}
