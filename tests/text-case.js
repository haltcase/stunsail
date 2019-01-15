import test from 'ava'
import fn from '../prod/text-case'

test('converts input strings to text-case', t => {
  t.is(fn('already text case'), 'already text case')
  t.is(fn('Separated&By#$Characters'), 'separated by characters')
  t.is(fn('snake-cased-string'), 'snake cased string')
  t.is(fn('camelCasedString'), 'camel cased string')
  t.is(fn('PascalCasedString'), 'pascal cased string')
  t.is(fn('kebab-cased-string'), 'kebab cased string')
})
