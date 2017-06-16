module.exports = ({ dedent: $ }) => {
  return {
    header: 'isOneOf(collection, value)',
    description: $`
      Check whether \`value\` is included in \`collection\`.
    `,
    parameters: [
      ['collection', 'Object', 'List to check `value` against'],
      ['value', 'any', 'Value to search for in `collection`']
    ],
    returns: '`boolean`',
    usage: $`
      isOneOf([1, 2, 3], 2)
      // -> true

      isOneOf({ key: 'value' }, 'value')
      // -> true
    `,
    curried: true
  }
}
