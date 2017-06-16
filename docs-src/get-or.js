module.exports = ({ dedent: $ }) => {
  return {
    header: 'getOr(defaultValue, path, object)',
    description: $`
      Access a property of \`object\` at \`path\` safely & deeply,
      returning \`defaultValue\` if it doesn't exist.
    `,
    parameters: [
      ['defaultValue', 'any', 'Value to return if `path` resolves to nil'],
      ['path', 'string, string[]', 'String using dot or bracket syntax, or an array of path segments'],
      ['object', 'Object', 'Object-like value to access']
    ],
    returns: '`any`',
    usage: $`
      const object = { attributes: { flammable: true } }
      getOr(false, 'attributes.toxic', object)
      // -> false

      getOr(false, 'attributes.flammable', object)
      // -> true

      const objectTwo = { array: [1, 2, 3] }
      // these are equivalent
      getOr('item three', 'array[2]', objectTwo)
      getOr('item three', 'array.2', objectTwo)
      // -> 2

      getOr('item four', array[3]', objectTwo)
      // -> 'item four'
    `,
    curried: true
  }
}
