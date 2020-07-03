import test from "ava"
import fn from "../es/is-primitive.js"

test("returns true for primitive values", t => {
  t.true(fn(1))
  t.true(fn(NaN))
  t.true(fn("string"))
  t.true(fn(true))
  t.true(fn(null))
  t.true(fn(undefined))
})

test("returns false for non-primitive values", t => {
  t.false(fn({}))
  t.false(fn([]))
  t.false(fn(new Map()))
  t.false(fn(new Set()))
  t.false(fn(new Date()))
  t.false(fn(() => {}))
})
