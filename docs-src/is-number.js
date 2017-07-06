module.exports = ({ dedent: $ }) => {
  return {
    header: 'isNumber(value)',
    description: $`
      Check whether \`value\` is a number.
    `,
    parameters: [
      ['value', 'any', 'Value to test']
    ],
    returns: '`boolean`',
    usage: $`
      isNumber(4)
      // -> true

      isNumber(NaN)
      // -> false
    `
  }
}
