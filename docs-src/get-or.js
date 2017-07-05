module.exports = ({ dedent: $ }) => {
  return {
    header: 'getOr(object, path, defaultValue)',
    description: $`
      Access a property of \`object\` at \`path\` safely & deeply,
      returning \`defaultValue\` if it doesn't exist.
    `,
    parameters: [
      ['object', 'Object', 'Object-like value to access'],
      ['path', 'string, string[]', 'String using dot or bracket syntax, or an array of path segments'],
      ['defaultValue', 'any', 'Value to return if `path` resolves to nil']
    ],
    returns: '`any`',
    usage: $`
      const object = { attributes: { flammable: true } }
      getOr(object, 'attributes.toxic', false)
      // -> false

      getOr(object, 'attributes.flammable', false)
      // -> true

      const objectTwo = { array: [1, 2, 3] }
      // these are equivalent
      getOr(objectTwo, 'array[2]', 'item three')
      getOr(objectTwo, 'array.2', 'item three')
      // -> 2

      getOr(objectTwo, 'array[3]', 'item four')
      // -> 'item four'
    `
  }
}
