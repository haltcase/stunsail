module.exports = ({ dedent: $ }) => {
  return {
    header: 'isError(value)',
    description: $`
      Check whether \`value\` is a built-in Error type.
    `,
    parameters: [
      ['value', 'any', 'Value to test']
    ],
    returns: '`boolean`',
    usage: $`
      isError(new Error('did a bad thing'))
      // -> true

      isError(new TypeError('wrong kind of thing'))
      // -> true

      isError({ code: 'ENOENT', message: 'wrong' })
      // -> false
    `,
    curried: false
  }
}
