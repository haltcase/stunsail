module.exports = ({ dedent: $ }) => {
  return {
    header: 'once(fn)',
    description: $`
      Return a wrapped version of \`fn\` that is only able to execute
      a single time. Further calls to the wrapped function will return
      the value from the original call.
    `,
    parameters: [
      ['fn', 'Function', 'Function to wrap so that it only executes a single time']
    ],
    returns: '`Function`',
    usage: $`
      function expensive (someNumber) {
        return someNumber
      }

      const wrapped = once(expensive)

      wrapped(100)
      // -> 100

      wrapped(93247593475)
      // -> 100
    `,
    curried: false
  }
}
