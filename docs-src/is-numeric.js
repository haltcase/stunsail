module.exports = ({ dedent: $ }) => {
  return {
    header: 'isNumeric(value)',
    description: $`
      Check whether \`value\` is a number or a string that appears
      to be a number, including integers & decimals in strings.
    `,
    parameters: [
      ['value', 'any', 'Value to test']
    ],
    returns: '`boolean`',
    usage: $`
      // examples of \`true\` cases:
      isNumeric(1)
      isNumeric(1.343)
      isNumeric(Infinity)
      isNumeric('1')
      isNumeric('1.6')
      isNumeric('943034.3923')

      // examples of \`false\` cases:
      isNumeric(false)
      isNumeric([])
      isNumeric({})
      isNumeric(new Map())
      isNumeric(new Set())
      isNumeric(new Date())
      isNumeric(NaN)
      isNumeric(null)
      isNumeric(undefined)
    `
  }
}
