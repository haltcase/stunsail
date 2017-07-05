module.exports = ({ dedent: $ }) => {
  return {
    header: 'has(path, object)',
    description: $`
      Alternative to the builtin \`Object#hasOwnProperty\` function
      with support for deep-property access using both dot and
      bracket syntax.
    `,
    parameters: [
      ['object', 'Object', 'Object-like value to access'],
      ['path', 'string, string[]', 'String using dot or bracket syntax, or an array of path segments']
    ],
    returns: '`boolean`',
    usage: $`
      const object = { attributes: { flammable: true } }
      has('attributes.flammable', object)
      // -> true

      const objectTwo = { array: [1, 2, 3] }
      // these are equivalent
      has(objectTwo, 'array[2]')
      has(objectTwo, 'array.2')
      // -> true

      has(objectTwo, 'array[3]')
      // -> false
    `
  }
}
