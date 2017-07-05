module.exports = ({ dedent: $ }) => {
  return {
    header: 'isEmpty(value)',
    description: $`
      Check whether \`value\` is an empty version of its type,
      ie. \`{}\` for Objects, \`[]\` for Arrays, etc.
    `,
    parameters: [
      ['value', 'any', 'Value to test']
    ],
    returns: '`boolean`',
    usage: $`
      // examples of \`true\` cases:
      isEmpty({})
      isEmpty([])
      isEmpty(null)
      isEmpty('')

      // examples of \`false\` cases:
      isEmpty({ property: 'hello' })
      isEmpty([1, 2, 3])
      isEmpty(() => {})
      isEmpty('a value')
    `
  }
}
