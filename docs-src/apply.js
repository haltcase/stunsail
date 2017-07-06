module.exports = ({ dedent: $ }) => {
  return {
    header: 'apply(fn, args)',
    description: $`
      Call \`fn\` using the Array \`args\` as its arguments.
      Similar to native \`Function#apply()\` but does not
      set the function's \`this\` value.
    `,
    parameters: [
      ['fn', 'Function', 'Function to which `args` will be applied'],
      ['args', 'Array', 'Array of arguments to apply to `fn`']
    ],
    returns: '`any`: result of applying `args` to `fn`',
    usage: $`
      apply(Math.max, [99, 5, 302])
      // -> 302

      const max = apply(Math.max)

      max([1, 2, 100, 4])
      // -> 100
    `
  }
}
