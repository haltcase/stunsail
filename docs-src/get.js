module.exports = ({ dedent: $ }) => {
  return {
    header: 'get(path, object)',
    description: $`
      Access a property of \`object\` at \`path\` safely & deeply,
      returning \`undefined\` if it doesn't exist.
    `,
    parameters: [
      ['path', 'string, string[]', 'String using dot or bracket syntax, or an array of path segments'],
      ['object', 'Object', 'Object-like value to access']
    ],
    returns: '`any`',
    usage: $`
      const object = { attributes: { flammable: true } }
      get('attributes.toxic', object)
      // -> undefined

      get('attributes.flammable', object)
      // -> true

      const objectTwo = { array: [1, 2, 3] }
      // these are equivalent
      get(array[2]', objectTwo)
      get(array.2', objectTwo)
      // -> 2

      get(array[3]', objectTwo)
      // -> undefined
    `,
    curried: true
  }
}
