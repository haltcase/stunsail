module.exports = ({ dedent: $ }) => {
  return {
    header: 'set(object, path, value)',
    description: $`
      Sets the key at \`path\` to \`value\` on \`object\` and returns
      the object. Deep property access is supported using both dot and
      bracket syntax or an Array of path segments.
    `,
    parameters: [
      ['object', 'Object', 'Object-like value to access'],
      ['path', 'string, string[]', 'String using dot or bracket syntax, or an Array of path segments'],
      ['value', 'any', 'Value to which `path` will be set']
    ],
    returns: '`Object`',
    usage: $`
      const object = { key: 'value', nested: { inner: { deep: 'thing' } } }
      set(object, 'nested.inner.deep', 40)
      // -> { key: 'value', nested: { inner: { deep: 40 } } }
    `
  }
}
