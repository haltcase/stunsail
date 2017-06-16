module.exports = ({ dedent: $ }) => {
  return {
    header: 'toEmpty(type)',
    description: $`
      Return an empty value matching the kind supplied by \`type\`.
    `,
    parameters: [
      ['type', '', '']
    ],
    returns: '`any`',
    usage: $`
      toEmpty('array')
      // -> []

      toEmpty('object')
      // -> {}

      toEmpty('boolean')
      // -> false

      toEmpty(null)
      // -> null

      toEmpty([1, 2, 3, 4])
      // -> []
    `,
    curried: false
  }
}
