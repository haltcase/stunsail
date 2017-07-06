module.exports = ({ dedent: $ }) => {
  return {
    header: 'includes(collection, value)',
    description: $`
      Check whether \`value\` is included in \`collection\`.
      This is a version of [\`isOneOf()\`](#isoneof) with the
      arguments flipped.
    `,
    parameters: [
      ['collection', 'Object', 'List to check `value` against'],
      ['value', 'any', 'Value to search for in `collection`']
    ],
    returns: '`boolean`',
    usage: $`
      includes([1, 2, 3], 2)
      // -> true

      includes({ key: 'value' }, 'value')
      // -> true
    `
  }
}
