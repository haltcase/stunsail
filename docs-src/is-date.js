module.exports = ({ dedent: $ }) => {
  return {
    header: 'isDate(value)',
    description: $`
      Check whether \`value\` is a \`Date\` instance.
    `,
    parameters: [
      ['value', 'any', 'Value to test']
    ],
    returns: '`boolean`',
    usage: $`
      isDate(new Date())
      // -> true

      isDate(Date.now())
      // -> false
    `
  }
}
