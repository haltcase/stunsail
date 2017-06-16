module.exports = ({ dedent: $ }) => {
  return {
    header: 'toBoolean(value, smart)',
    description: $`
      Return a boolean based on \`value\` - the usual falsy values
      and empty values will return \`false\`, while truthy values
      return \`true\`.

      When \`smart\` is \`true\` and \`value\` is a string, it will
      be checked for the strings 'true' and 'false' and coerced to
      a boolean accordingly.
    `,
    parameters: [
      ['value', 'any', 'Value to convert'],
      ['smart', 'boolean', 'Whether to coerce `value` based on strings \'true\' or \'false\'']
    ],
    returns: '`boolean`',
    usage: $`
      // examples of \`true\` cases:
      toBoolean(true)
      toBoolean(1)
      toBoolean('true')
      toBoolean('false')
      toBoolean(new Date())
      toBoolean({ one: 1 })
      toBoolean([1, 2, 3])

      // examples of \`false\` cases:
      toBoolean(false)
      toBoolean(null)
      toBoolean(undefined)
      toBoolean('')
      toBoolean(0)
      toBoolean({})
      toBoolean([])
    `,
    curried: false
  }
}
