module.exports = ({ dedent: $ }) => {
  return {
    header: 'clamp(value, lower, upper)',
    description: $`
      Ensures that a number \`value\` is between bounds
      \`lower\` and \`upper\`.

      If \`value\` is not a number it's assumed to be 0,
      while \`lower\` and \`upper\` are set to \`value\`
      when they aren't numbers (or aren't provided).
    `,
    parameters: [
      ['value', 'number', 'The number to operate on'],
      ['lower', 'number', 'Lower bound'],
      ['upper', 'number', 'Upper bound']
    ],
    returns: '`number`: between `lower` & `upper`',
    usage: $`
      clamp(20, -10, 10)
      // -> 10

      clamp(-15, -10, 10)
      // -> -10
    `
  }
}
