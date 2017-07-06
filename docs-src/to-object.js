module.exports = ({ dedent: $ }) => {
  return {
    header: 'toObject(value)',
    description: $`
      Ensure an Object is returned, by converting \`value\` if possible
      or by returning an empty Object otherwise. If \`value\` is already
      an Object it is simply returned.
    `,
    parameters: [
      ['value', 'any', 'Value to convert']
    ],
    returns: '`Object`',
    usage: $`
      toObject(['one', 'two', 'three'])
      // -> { one: 'one', two: 'two', three: 'three' }

      toObject(3)
      // -> { '3': 3 }

      toObject(new Map([['keyOne', 'valueOne'], ['keyTwo', 'valueTwo']]))
      // -> { keyOne: 'valueOne', keyTwo: 'valueTwo' }

      toObject(true)
      // -> { 'true': true }

      toObject('fly')
      // -> { 'fly': 'fly' }

      toObject(null)
      // -> { 'null': null }

      toObject(undefined)
      // -> { 'undefined': undefined }

      toObject(new Date)
      // -> {}
    `
  }
}
