module.exports = ({ dedent: $ }) => {
  return {
    header: 'isNan(value)',
    description: $`
      Check whether \`value\` is \`NaN\`.
    `,
    parameters: [
      ['value', 'any', 'Value to test']
    ],
    returns: '`boolean`',
    usage: $`
      isNan(NaN)
      // -> true

      isNan(40)
      // -> false

      isNan('string')
      // -> false

      isNan({})
      // -> false
    `,
    curried: false
  }
}
