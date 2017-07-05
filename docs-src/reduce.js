module.exports = ({ dedent: $ }) => {
  return {
    header: 'reduce(collection, fn, initial)',
    description: $`
      Universal version of native \`Array#reduce\` that
      works on pretty much any iterable - Arrays & Array-likes,
      Objects, Sets, Maps, strings, custom iterables, etc.
    `,
    parameters: [
      ['collection', 'Iterable', 'Iterable-like object to reduce from'],
      ['fn', 'Function', 'Function that builds the accumulator with each iteration'],
      ['initial', 'any', 'Value first passed to `fn`']
    ],
    returns: '`any`',
    usage: $`
      let collection = { one: 1, two: 2, three: 3 }
      reduce(collection, (acc, cur) => acc + cur, 0)
      // -> 6

      collection = [1, 2, 3, 4, 5]
      reduce(collection, (acc, cur) => acc + cur, 0)
      // -> 15

      collection = 'foobar'
      fn(collection, (acc, cur) => {
        acc.splice(0, 0, cur)
        return acc
      }, [])
      // -> ['r', 'a', 'b', 'o', 'o', 'f']
    `
  }
}
