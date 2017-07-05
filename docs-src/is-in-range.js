module.exports = ({ dedent: $ }) => {
  return {
    header: 'isInRange(value, start, end)',
    description: $`
      Check whether \`value\` is between \`start\` and \`end\`, inclusively.
    `,
    parameters: [
      ['value', 'number', 'Value to test'],
      ['start', 'number', 'Lower boundary'],
      ['end', 'number', 'Upper boundary']
    ],
    returns: '`boolean`',
    usage: $`
      isInRange(20, 0, 40)
      // -> true

      isInRange(-10, 0, 40)
      // -> false

      isInRange(10, 0, 10)
      // -> true
    `
  }
}
