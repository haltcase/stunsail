const $ = require('dedent')

module.exports = {
  header: 'apply(fn, args)',
  description: $`
    Call \`fn\` using the Array \`args\` as its arguments.
    Similar to native \`Function#apply()\` but does not
    set the function's \`this\` value.
  `,
  returns: '`any`: result of applying `args` to `fn`',
  usage: $`
    const max = apply(Math.max)

    max([1, 2, 100, 4])
    // -> 100
  `
}
