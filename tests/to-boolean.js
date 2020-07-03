import test from "ava"
import fn from "../es/to-boolean.js"

test("converts the input to a boolean value", t => {
  // truthy values
  t.is(fn(true), true)
  t.is(fn(1), true)
  t.is(fn("true"), true)
  t.is(fn("false"), true)
  t.is(fn(new Date()), true)
  t.is(fn({ one: 1 }), true)
  t.is(fn([1, 2, 3]), true)

  // falsy values
  t.is(fn(false), false)
  t.is(fn(null), false)
  t.is(fn(undefined), false)
  t.is(fn(""), false)
  t.is(fn(0), false)
  t.is(fn({}), false)
  t.is(fn([]), false)
})

test("smart mode converts based on a string's value", t => {
  t.is(fn("true", true), true)
  t.is(fn("false", true), false)
})
