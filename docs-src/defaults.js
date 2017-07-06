module.exports = ({ dedent: $ }) => {
  return {
    header: 'defaults(object, extension)',
    description: $`
      Sets own properties from \`extension\` on
      \`object\` if any of them are not present
      on \`object\`.
    `,
    parameters: [
      ['object', 'Object', 'Base object to extend'],
      ['extension', 'Object', 'Object containing default properties']
    ],
    returns: '`Object`',
    usage: $`
      const base = { abc: '123', def: '456' }
      const ext = { abc: '999', ghi: '789' }
      const result = defaults(base, ext)
      // -> { abc: '123', def: '456', ghi: '789' }
    `
  }
}
