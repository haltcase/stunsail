module.exports = ({ dedent: $ }) => {
  return {
    header: 'pathLinks(value)',
    description: $`
      Convert \`value\` (a dot or bracket notated string) to an
      Array of object path segments. If it's already an Array it
      will just be returned.
    `,
    parameters: [
      ['value', 'string, string[]', 'String using dot or bracket syntax, or an array of path segments']
    ],
    returns: '`boolean`',
    usage: $`
      pathLinks('a[1].b.c[0]')
      // -> ['a', '1', 'b', 'c', '0']

      pathLinks(['a', 'b', 'c', '0'])
      // -> ['a', 'b', 'c', '0']
    `
  }
}
