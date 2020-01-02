import test from 'ava'
import fn from '../prod/pipe'

test('runs the given synchronous functions in series', async t => {
  const result = await fn(
    'hello',
    str => str.toUpperCase(),
    str => str.split('').join('-')
  )

  t.is(result, 'H-E-L-L-O')
})

test('runs the given asynchronous functions in series', async t => {
  async function getUserData (name) {
    return { name, favoriteColor: 'blue' }
  }

  const result = await fn(
    name => getUserData(name),
    user => user.favoriteColor === 'blue'
  )

  t.true(result)
})
