module.exports = ({ dedent: $ }) => {
  return {
    header: 'isArray(value)',
    description: $`
      Check whether \`value\` is an Array, like the built-in
      \`Array.isArray()\` method.
    `,
    parameters: [
      ['value', 'any', 'Value to test']
    ],
    returns: '`boolean`',
    usage: $`
      isArray([1, 2, 3])
      // -> true

      isArray({ length: 2, 0: 'foo', 1: 'bar' })
      // -> false
    `
  }
}
