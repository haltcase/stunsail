module.exports = ({ dedent: $ }) => {
  return {
    header: 'getType(value)',
    description: $`
      Alternative to the builtin \`typeof\` operator that returns a
      more accurate type string.
    `,
    parameters: [
      ['value', 'any', '']
    ],
    returns: '`string`',
    usage: $`
      getType('hi!')
      // -> string

      getType({})
      // -> object

      getType([])
      // -> array

      getType(null)
      // -> null

      getType(new RangeError())
      // -> rangeerror
    `,
    curried: false
  }
}
