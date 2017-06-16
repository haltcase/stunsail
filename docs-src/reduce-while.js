module.exports = ({ dedent: $ }) => {
  return {
    header: 'reduceWhile(predicate, fn, initial, collection)',
    description: $`
      Works just like [\`reduce\`](#reduce) but short-circuits when
      \`predicate\` returns a falsy value.
    `,
    parameters: [
      ['fn', 'Function', 'Function that builds the accumulator with each iteration'],
      ['initial', 'any', 'Value first passed to `fn`'],
      ['collection', 'Iterable', 'Iterable-like object to reduce from']
    ],
    returns: '`any`',
    usage: $`
      const predicate = accumulator => accumulator !== 3
      const reducer = (acc, cur) => acc + cur
      const object = { one: 1, two: 2, three: 3 }

      reduce(reducer, 0, object)
      // -> 6

      reduceWhile(predicate, reducer, 0, object)
      // -> 3
    `,
    curried: true
  }
}
