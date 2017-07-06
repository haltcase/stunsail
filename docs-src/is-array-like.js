module.exports = ({ dedent: $ }) => {
  return {
    header: 'isArrayLike(value)',
    description: $`
      Check whether \`value\` is an Array or an object with a \`length\`
      property and that it also has a property at \`length - 1\`.
    `,
    parameters: [
      ['value', 'any', 'Value to test']
    ],
    returns: '`boolean`',
    usage: $`
      isArrayLike([1, 2, 3])
      // -> true

      isArrayLike(null)
      // -> false

      isArrayLike('foobar')
      // -> true

      isArrayLike({ length: 2 })
      // -> false

      isArrayLike({ length: 2, 0: 'foo', 1: 'bar' })
      // -> true
    `
  }
}
