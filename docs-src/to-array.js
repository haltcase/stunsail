module.exports = ({ dedent: $ }) => {
  return {
    header: 'toArray(value, begin, end)',
    description: $`
      Alternative to the \`[].slice.call()\` method of converting
      values to Arrays. It will convert Array-like Objects and
      wrap values in an Array that don't coerce.
    `,
    parameters: [
      ['value', 'any', 'Value to convert'],
      ['begin', '', ''],
      ['end', '', '']
    ],
    returns: '`any`',
    usage: $`
        toArray(undefined)
        // -> []

        toArray(null)
        // -> [null]

        toArray((function () { return arguments })(1, 2, 3))
        // -> [1]

        toArray(4)
        // -> [4]

        toArray(true)
        // -> [true]

        toArray(false)
        // -> [false]

        toArray({})
        // -> [{}]

        toArray([])
        // -> []

        toArray([1, 2, 3, 4, 5], 2)
        // -> [3, 4, 5]

        toArray([1, 2, 3, 4, 5], 2, -1)
        // -> [3, 4]
    `,
    curried: false
  }
}
