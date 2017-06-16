module.exports = ({ dedent: $ }) => {
  return {
    header: 'toNumber(value, round)',
    description: $``,
    parameters: [
      ['value', 'any', 'Value to convert'],
      ['round', 'boolean', 'Whether to round the output to an integer']
    ],
    returns: '`number`',
    usage: $`
      toNumber(1)
      // -> 1

      toNumber(1.3345)
      // -> 1.3345

      const now = new Date
      toNumber(now) === now.valueOf()
      // -> true

      toNumber({ one: 1, two: 2 })
      // -> 2

      toNumber([1, 2, 3])
      // -> 3

      toNumber('string')
      // -> 6

      toNumber(39.354, true)
      // -> 39
    `,
    curried: false
  }
}
