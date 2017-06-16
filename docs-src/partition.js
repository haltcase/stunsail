module.exports = ({ dedent: $ }) => {
  return {
    header: 'partition(fn, collection)',
    description: $`
      Iterate over \`collection\` and apply \`fn\` to each item,
      returning an Array where the first element contains all items
      for which \`fn\` returned a truthy value, and the second element
      contains all items for which it returned a falsy value.
    `,
    parameters: [
      ['fn', 'Function', 'Predicate with which to split items'],
      ['collection', 'Object', 'Object-like value to split']
    ],
    returns: '`[truthy, falsy]`',
    usage: $`
      partition(v => v === true, [true, false, true, false])
      // -> [[true, true], [false, false]]

      partition(v => v === true, { keyOne: true, keyTwo: false })
      // -> [{ keyOne: true }, { keyTwo: false }]

      partition(v => v === ' ', 'some arbitrary string')
      // -> ['  ', 'somearbitrarystring']

      partition(v => v === true, new Map([['keyOne', true], ['keyTwo', false]]))
      // -> [ Map {'keyOne' => true}, Map {'keyTwo' => false} ]

      partition(v => v.startsWith('J'), new Set(['Joe', 'Jerry', 'Rick', 'Bob']))
      // -> [ Set {'Joe', 'Jerry'}, Set {'Rick', 'Bob'} ]
  ]
    `,
    curried: true
  }
}
