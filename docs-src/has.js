module.exports = ({ dedent: $ }) => {
  return {
    header: 'has(path, object)',
    description: $`
      Alternative to the builtin \`Object#hasOwnProperty\` function
      with support for deep-property access using both dot and
      bracket syntax.
    `,
    parameters: [
      ['path', 'string, string[]', 'String using dot or bracket syntax, or an array of path segments'],
      ['object', 'Object', 'Object-like value to access']
    ],
    returns: '`boolean`',
    usage: $`
      const object = { attributes: { flammable: true } }
      has('attributes.flammable', object)
      // -> true

      const objectTwo = { array: [1, 2, 3] }
      // these are equivalent
      has('array[2]', objectTwo)
      has('array.2', objectTwo)
      // -> true

      has('array[3]', objectTwo)
      // -> false
    `,
    curried: true
  }
}
