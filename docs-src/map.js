module.exports = ({ dedent: $ }) => {
  return {
    header: 'map(fn, collection)',
    description: $`
      Universal version of native \`Array#map\` that
      works on pretty much any iterable - Arrays & Array-likes,
      Objects, Sets, Maps, strings, custom iterables, etc.

      The return value will be \`collection\` but each value will
      be the result of applying \`fn\` at each iteration to the
      arguments \`value\`, \`key\`, \`collection\`.
    `,
    parameters: [
      ['fn', 'Function', 'Callback applied to each item in `collection`'],
      ['collection', 'Object', 'Iterable-like object to map over, applying `fn` on each iteration']
    ],
    returns: '`any`: same type as `collection`',
    usage: $`
      map(v => v + 1, { one: 1, two: 2, three: 3 })
      // -> { one: 2, two: 3, three: 4 }

      map(v => v * -1, [1, 3, 5, 7])
      // -> [-1, -3, -5, -7]

      map(v => v + '-', 'foobar')
      // -> 'f-o-o-b-a-r-'
    `,
    curried: true
  }
}
