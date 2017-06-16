module.exports = ({ dedent: $ }) => {
  return {
    header: 'isBuffer(value)',
    description: $`
      Check whether \`value\` is a Buffer.
    `,
    parameters: [
      ['value', 'any', 'Value to test']
    ],
    returns: '`boolean`',
    usage: $`
      isBuffer(Buffer.from('string'))
      // -> true

      isBuffer('string')
      // -> false
    `,
    curried: false
  }
}
