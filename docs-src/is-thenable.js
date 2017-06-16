module.exports = ({ dedent: $ }) => {
  return {
    header: 'isThenable(value)',
    description: $`
      Check whether \`value\` is an object with a \`then\` method.
    `,
    parameters: [
      ['value', 'any', 'Value to test']
    ],
    returns: '`boolean`',
    usage: $`
      isThenable(Promise.resolve())
      // -> true

      isThenable({ then () {} })
    `,
    curried: false
  }
}
