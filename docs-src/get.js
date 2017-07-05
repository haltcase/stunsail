module.exports = ({ dedent: $ }) => {
  return {
    header: 'get(object, path)',
    description: $`
      Access a property of \`object\` at \`path\` safely & deeply,
      returning \`undefined\` if it doesn't exist.
    `,
    parameters: [
      ['object', 'Object', 'Object-like value to access'],
      ['path', 'string, string[]', 'String using dot or bracket syntax, or an array of path segments']
    ],
    returns: '`any`',
    usage: $`
      const object = { attributes: { flammable: true } }
      get(object, 'attributes.toxic')
      // -> undefined

      get(object, 'attributes.flammable')
      // -> true

      const objectTwo = { array: [1, 2, 3] }
      // these are equivalent
      get(objectTwo, 'array[2]')
      get(objectTwo, 'array.2')
      // -> 2

      get(objectTwo, 'array[3]')
      // -> undefined
    `
  }
}
