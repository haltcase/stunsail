module.exports = ({ dedent: $ }) => {
  return {
    header: 'set(value, path, object)',
    description: $`
      Sets the key at \`path\` to \`value\` on \`object\` and returns
      the object. Deep property access is supported using both dot and
      bracket syntax or an Array of path segments.
    `,
    parameters: [
      ['value', 'any', 'Value to which `path` will be set'],
      ['path', 'string, string[]', 'String using dot or bracket syntax, or an Array of path segments'],
      ['object', 'Object', 'Object-like value to access']
    ],
    returns: '`Object`',
    usage: $`
      const object = { key: 'value', nested: { inner: { deep: 'thing' } } }
      set(40, 'nested.inner.deep', object)
      // -> { key: 'value', nested: { inner: { deep: 40 } } }
    `,
    curried: true
  }
}
