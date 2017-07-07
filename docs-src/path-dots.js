module.exports = ({ dedent: $ }) => {
  return {
    header: 'pathDots(value)',
    description: $`
      Converts Arrays of object path segments into dot-notated paths.
      If \`value\` is a string, brackets will be normalized to dots.
    `,
    parameters: [
      ['value', 'string, string[]', 'String using dot or bracket syntax, or an array of path segments']
    ],
    returns: '`boolean`',
    usage: $`
      pathDots(['a', 'b', 'c', '0'])
      // -> 'a.b.c.0'

      pathDots('a[1].b.c[0]')
      // -> 'a.1.b.c.0'
    `
  }
}
