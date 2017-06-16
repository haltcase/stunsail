module.exports = ({ dedent: $ }) => {
  return {
    header: 'sleep(ms)',
    description: $`
      Similar to the built-in \`setTimeout\` but does not receive
      a function to run when the time expires. Simply returns a
      Promise that resolves after \`ms\`. Pairs well with \`await\`.
    `,
    parameters: [
      ['ms', 'number', 'Amount of time to wait']
    ],
    returns: '`any`',
    usage: $`
      async function foo () {
        console.log('start')
        await sleep(5000)
        console.log('done')
      }

      foo()
      // -> start
      // ... 5 seconds pass ...
      // -> done
    `,
    curried: false
  }
}
