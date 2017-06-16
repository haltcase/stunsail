module.exports = ({ dedent: $ }) => {
  return {
    header: 'match(compare, object)',
    description: $`
      Check that all properties of \`compare\` are deeply
      equal to those same properties of \`object\`.
    `,
    parameters: [
      ['compare', 'Object', 'Object containing properties to match'],
      ['object', 'Object', 'Object on which to check for properties of `match`']
    ],
    returns: '`boolean`',
    usage: $`
      const wishy = { name: 'wishy', color: 'green' }
      match({ color: 'green' }, wishy)
      // -> true

      const washy = { name: 'washy', color: 'red' }
      map({ color: 'blue' }, washy)
      // -> false

      const arr = [
        { name: 'willy', color: 'red' },
        { name: 'wally', color: 'red' },
        { name: 'dopey', color: 'brown' },
        { name: 'wishy', color: 'blue' },
        { name: 'washy', color: 'green' }
      ]

      arr.find(map({ color: 'green' })
      // -> { name: 'washy', color: 'green' }

      arr.find(map({ color: 'brown' })
      // -> { name: 'dopey', color: 'brown' }

      arr.find(map({ color: 'red' })
      // -> { name: 'willy', color: 'red' }
    `,
    curried: true
  }
}
