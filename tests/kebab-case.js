import test from 'ava'
import fn from '../kebab-case'

test('converts input strings to kebab-case', t => {
  t.is(fn('already-kebab-case'), 'already-kebab-case')
  t.is(fn('Separated&By#$Characters'), 'separated-by-characters')
  t.is(fn('space separated string'), 'space-separated-string')
  t.is(fn('camelCasedString'), 'camel-cased-string')
  t.is(fn('PascalCasedString'), 'pascal-cased-string')
  t.is(fn('snake_cased_string'), 'snake-cased-string')
})
