module.exports = ({ dedent: $ }) => {
  return {
    header: 'random(value, bound)',
    description: $`
      If \`value\` is an Array or Object, return a random value.
      If it's a number and \`bound\` is absent, return a random
      number between 0 and \`value\`. If \`bound\` is provided,
      return a random value between \`value\` and \`bound\`.
    `,
    parameters: [
      ['value', 'Array, Object, number', 'Collection to sample or a bounding number'],
      ['bound', 'number', 'Used as the upper bound when `value` is a number']
    ],
    returns: '`any`',
    usage: $`
      random([1, 2, 3])
      // -> randomly chosen element from the Array

      random({ one: 1, two: 2, three: 3 })
      // -> value from a randomly chosen key in the Object

      random(10)
      // -> randomly chosen number between 0 and 10

      random(-5, 5)
      // -> randomly chosen number between -5 and 5
    `,
    curried: false
  }
}
