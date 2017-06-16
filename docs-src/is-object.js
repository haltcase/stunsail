module.exports = ({ dedent: $ }) => {
  return {
    header: 'isObject(value)',
    description: $`
      Check whether \`value\` is a plain object.
    `,
    parameters: [
      ['value', 'any', 'Value to test']
    ],
    returns: '`boolean`',
    usage: $`
      isObject({})
      // -> true

      isObject(() => {})
      // -> false

      isObject(new Map())
      // -> false
    `,
    curried: false
  }
}
