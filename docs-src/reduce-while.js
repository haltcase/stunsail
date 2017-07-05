module.exports = ({ dedent: $ }) => {
  return {
    header: 'reduceWhile(collection, predicate, fn, initial)',
    description: $`
      Works just like [\`reduce\`](#reduce) but short-circuits when
      \`predicate\` returns a falsy value.
    `,
    parameters: [
      ['collection', 'Iterable', 'Iterable-like object to reduce from'],
      ['predicate', 'Function', 'Function that will stop iteration when returning a falsy value'],
      ['fn', 'Function', 'Function that builds the accumulator with each iteration'],
      ['initial', 'any', 'Value first passed to `fn`']
    ],
    returns: '`any`',
    usage: $`
      const predicate = accumulator => accumulator !== 3
      const reducer = (acc, cur) => acc + cur
      const object = { one: 1, two: 2, three: 3 }

      reduce(object, reducer, 0)
      // -> 6

      reduceWhile(object, predicate, reducer, 0)
      // -> 3
    `
  }
}
