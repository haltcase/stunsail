module.exports = ({ dedent: $ }) => {
  return {
    header: 'isPrimitive(value)',
    description: $`
      Check whether \`value\` is a primitive, ie. one of:

      - \`null\`
      - \`string\`
      - \`number\`
      - \`boolean\`
      - \`undefined\`
    `,
    parameters: [
      ['value', 'any', 'Value to test']
    ],
    returns: '`boolean`',
    usage: $`
      // examples of \`true\` cases:
      isPrimitive(null)
      isPrimitive('string')
      isPrimitive(4)
      isPrimitive(true)
      isPrimitive(undefined)

      // examples of \`false\` cases:
      isPrimitive({})
      isPrimitive([])
      isPrimitive(new Date())
    `
  }
}
