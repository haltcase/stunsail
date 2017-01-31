import test from 'ava'
import isError from '../../is/error'

test('correctly identifies errors', t => {
  t.true(isError(new TypeError()))
  t.true(isError(new Error()))
  t.true(isError(new RangeError()))
  t.true(isError(new ReferenceError()))
  t.true(isError(new URIError()))
  t.true(isError(new SyntaxError()))
  t.true(isError(new EvalError()))
})
