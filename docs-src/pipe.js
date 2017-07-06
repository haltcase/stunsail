module.exports = ({ dedent: $ }) => {
  return {
    header: 'pipe(input)',
    description: $`
      Run a set of functions in series using the output of each
      as the input to the next. The first value is allowed to be
      of any kind - if it is not a function it is simply passed
      as the argument to the second item. Subsequent non-function
      items are ignored.

      Because \`pipe\` handles Promise-returning functions, it will
      always return a Promise in order to maintain a consistent API
      even if all given functions & values are synchronous.
    `,
    parameters: [
      ['input', 'Function[]', 'List of functions to pipe through']
    ],
    returns: '`Promise<any>`',
    usage: $`
      pipe(
        'hello',
        str => str.toUpperCase(),
        str => str.split('').join('-')
      ).then(result => {
        console.log(result)
        // -> 'H-E-L-L-O'
      })

      async function getUserData (name) {
        return { name, favoriteColor: 'blue' }
      }

      pipe(
        name => getUserData(name),
        user => user.favoriteColor === 'blue'
      ).then(result => {
        console.log(result)
        // -> true
      })
    `
  }
}
