import test from 'ava'
import fn from '../prod/snake-case'

test('converts input strings to snake-case', t => {
  t.is(fn('already_snake_case'), 'already_snake_case')
  t.is(fn('Separated&By#$Characters'), 'separated_by_characters')
  t.is(fn('space separated string'), 'space_separated_string')
  t.is(fn('camelCasedString'), 'camel_cased_string')
  t.is(fn('PascalCasedString'), 'pascal_cased_string')
  t.is(fn('kebab-cased-string'), 'kebab_cased_string')
})
