module.exports = ({ dedent: $ }) => {
  return {
    header: 'reduce(fn, initial, collection)',
    description: $`
      Universal version of native \`Array#reduce\` that
      works on pretty much any iterable - Arrays & Array-likes,
      Objects, Sets, Maps, strings, custom iterables, etc.
    `,
    parameters: [
      ['fn', 'Function', 'Function that builds the accumulator with each iteration'],
      ['initial', 'any', 'Value first passed to `fn`'],
      ['collection', 'Iterable', 'Iterable-like object to reduce from']
    ],
    returns: '`any`',
    usage: $`
      let collection = { one: 1, two: 2, three: 3 }
      reduce((acc, cur) => acc + cur, 0, collection)
      // -> 6

      collection = [1, 2, 3, 4, 5]
      reduce((acc, cur) => acc + cur, 0, collection)
      // -> 15

      collection = 'foobar'
      fn((acc, cur) => {
        acc.splice(0, 0, cur)
        return acc
      }, [], collection)
      // -> ['r', 'a', 'b', 'o', 'o', 'f']
    `,
    curried: true
  }
}
