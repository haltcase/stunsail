module.exports = ({ dedent: $ }) => {
  return {
    header: 'invariant(condition, message)',
    description: $`
      Test that \`condition\` is truthy and return its value,
      or throw an error with \`message\` when it is falsy.

      \`message\` defaults to 'Invariant Violation'.
    `,
    parameters: [
      ['condition', 'any', 'Value to test'],
      ['message', 'string', 'Message thrown with the error when `condition` is falsy']
    ],
    returns: '`any`',
    usage: $`
      const truthyCondition = () => {}
      const result1 = invariant(truthyCondition, 'No function provided.')
      // -> () => {}

      const falsyCondition = null
      const result2 = invariant(truthyCondition, 'No function provided.')
      // -> InvariantError: 'No function provided.'
    `
  }
}
