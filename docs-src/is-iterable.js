module.exports = ({ dedent: $ }) => {
  return {
    header: 'isIterable(value)',
    description: $`
      Check whether \`value\` is an iterable object, ie. its
      \`[Symbol.iterator]\` property is set as a function.
    `,
    parameters: [
      ['value', 'any', 'Value to test']
    ],
    returns: '`boolean`',
    usage: $`
      isIterable([])
      // -> true

      isIterable({})
      // -> false

      isIterable(new Set())
      // -> true

      isIterable(new Map())
      // -> true

      isIterable({ [Symbol.iterator] () {} })
      // -> true

      isIterable(null)
      // -> false
    `
  }
}
