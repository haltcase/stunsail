module.exports = ({ dedent: $ }) => {
  return {
    header: 'partition(collection, fn)',
    description: $`
      Iterate over \`collection\` and apply \`fn\` to each item,
      returning an Array where the first element contains all items
      for which \`fn\` returned a truthy value, and the second element
      contains all items for which it returned a falsy value.
    `,
    parameters: [
      ['collection', 'Object', 'Object-like value to split'],
      ['fn', 'Function', 'Predicate with which to split items']
    ],
    returns: '`[truthy, falsy]`',
    usage: $`
      partition([true, false, true, false], v => v === true)
      // -> [[true, true], [false, false]]

      partition({ keyOne: true, keyTwo: false }, v => v === true)
      // -> [{ keyOne: true }, { keyTwo: false }]

      partition('some arbitrary string', v => v === ' ')
      // -> ['  ', 'somearbitrarystring']

      partition(new Map([['keyOne', true], ['keyTwo', false]]), v => v === true)
      // -> [ Map {'keyOne' => true}, Map {'keyTwo' => false} ]

      partition(new Set(['Joe', 'Jerry', 'Rick', 'Bob']), v => v.startsWith('J'))
      // -> [ Set {'Joe', 'Jerry'}, Set {'Rick', 'Bob'} ]
    `
  }
}
