module.exports = ({ dedent: $ }) => {
  return {
    header: 'curry(fn)',
    description: $`
      Creates an auto-curried version of \`fn\` that can
      accept any number of arguments at a time until the
      full arity of \`fn\` has been met, at which point
      the result of calling \`fn\`  with those arguments
      is returned.
    `,
    parameters: [
      ['fn', 'Function', 'Function to curry']
    ],
    returns: '`Function`: curried version of `fn`',
    usage: $`
      const curriedAdd = curry((x, y) => x + y)
      const addOne = curriedAdd(1)
      addOne(2)
      // -> 3
    `,
    curried: false
  }
}
