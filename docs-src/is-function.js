module.exports = ({ dedent: $ }) => {
  return {
    header: 'isFunction(value)',
    description: $`
      Check whether \`value\` is a function.
    `,
    parameters: [
      ['value', 'any', 'Value to test']
    ],
    returns: '`boolean`',
    usage: $`
      // examples of \`true\` cases:
      isFunction(Function)
      isFunction(() => {})
      isFunction(async () => {})
      isFunction(function () {})
      isFunction(function * () {})

      // examples of \`false\` cases:
      isFunction(false)
      isFunction('')
      isFunction([])
      isFunction({})
      isFunction(new Map())
      isFunction(new Set())
      isFunction(new Date())
      isFunction(null)
      isFunction(undefined)
      isFunction(1)
    `,
    curried: false
  }
}
