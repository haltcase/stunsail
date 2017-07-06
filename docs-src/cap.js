module.exports = ({ dedent: $ }) => {
  return {
    header: 'cap(fn, limit)',
    description: $`
      Adds a cap on the number of arguments passable to \`fn\`.
      Any arguments beyond \`limit\` will not be passed, which
      is useful for creating functions compatible with currying
      or as callbacks / parameters to higher order functions.
    `,
    parameters: [
      ['fn', 'Function', 'Function whose arguments to limit'],
      ['limit', 'Number', 'The number of arguments to allow']
    ],
    returns: '`Function`: new function accepting only `limit` arguments',
    usage: $`
      const log = cap(console.log)

      log(1, 2, 3)
      // -> 1

      ['1', '2.2', '2.54'].map(parseInt)
      // -> [ 1, NaN, NaN ]

      const toInt = cap(parseInt)
      ['1', '2.2', '2.54'].map(toInt)
      // -> [1, 2, 2]
    `
  }
}
