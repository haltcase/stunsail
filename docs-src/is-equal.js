module.exports = ({ dedent: $ }) => {
  return {
    header: 'isEqual(a, b)',
    description: $`
      Check whether two values \`a\` and \`b\` are deeply equal.
      Works on almost any object - including plain Objects, Arrays,
      Maps, Sets, and Dates.
    `,
    parameters: [
      ['a', 'any', ''],
      ['b', 'any', '']
    ],
    returns: '`boolean`',
    usage: $`
      isEqual({}, {})
      // -> true

      isEqual(new Set([1, 2, 3]), new Set([1, 2, 3]))
      // -> true

      isEqual(new Set([1, 2]), new Set([9, 10]))
      // -> false
    `,
    curried: true
  }
}
