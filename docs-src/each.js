module.exports = ({ dedent: $ }) => {
  return {
    header: 'each(fn, collection)',
    description: $`
      Universal version of native \`Array#forEach\` that
      works on pretty much any iterable - Arrays & Array-likes,
      Objects, Sets, Maps, strings, custom iterables, etc.
    `,
    parameters: [
      ['fn', 'Function', 'Called with each iteration'],
      ['collection', 'Iterable', 'Iterable-like object to iterate over']
    ],
    returns: '`undefined`',
    usage: $`
      const iterator = each(v => console.log(v))

      iterator([1, 2, 3])
      // -> 1  2  3

      iterator('string')
      // -> s  t  r  i  n  g

      iterator({ key: 'value', keyTwo: 'valueTwo' })
      // -> 'value'  'valueTwo'

      iterator(new Set([1, 2, 3]))
      // -> 1  2  3

      const map = new Map()
      map.set('keyOne', 'valueOne')
      map.set('keyTwo', 'valueTwo')

      iterator(map)
      // -> 'value'  'valueTwo'

      const obj = {
        * [Symbol.iterator] () {
          for (const n of [1, 2, 3]) {
            yield n
          }
        }
      }

      iterator(obj)
      // -> 1  2  3
    `,
    curried: true
  }
}
