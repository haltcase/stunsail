module.exports = ({ dedent: $ }) => {
  return {
    header: 'isOneOf(value, collection)',
    description: $`
      Check whether \`value\` is included in \`collection\`.
      This is a version of [\`includes()\`](#includes) with the
      arguments flipped.
    `,
    parameters: [
      ['value', 'any', 'Value to search for in `collection`'],
      ['collection', 'Object', 'List to check `value` against']
    ],
    returns: '`boolean`',
    usage: $`
      isOneOf(2, [1, 2, 3])
      // -> true

      isOneOf('value', { key: 'value' })
      // -> true
    `
  }
}
