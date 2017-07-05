module.exports = ({ dedent: $ }) => {
  return {
    header: 'each(collection, fn)',
    description: $`
      Universal version of native \`Array#forEach\` that
      works on pretty much any iterable - Arrays & Array-likes,
      Objects, Sets, Maps, strings, custom iterables, etc.
    `,
    parameters: [
      ['collection', 'Iterable', 'Iterable-like object to iterate over'],
      ['fn', 'Function', 'Called with each iteration']
    ],
    returns: '`undefined`',
    usage: $`
      each([1, 2, 3], v => console.log(v))
      // -> 1  2  3

      each('string', v => console.log(v))
      // -> s  t  r  i  n  g

      each({ key: 'value', keyTwo: 'valueTwo' }, v => console.log(v))
      // -> 'value'  'valueTwo'

      each(new Set([1, 2, 3]), v => console.log(v))
      // -> 1  2  3

      const map = new Map()
      map.set('keyOne', 'valueOne')
      map.set('keyTwo', 'valueTwo')

      each(map, v => console.log(v))
      // -> 'value'  'valueTwo'

      const obj = {
        * [Symbol.iterator] () {
          for (const n of [1, 2, 3]) {
            yield n
          }
        }
      }

      each(obj, v => console.log(v))
      // -> 1  2  3
    `
  }
}
