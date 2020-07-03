import test from "ava"
import fn from "../es/is-boolean.js"

test("reports true only for boolean values", t => {
  t.true(fn(true))
  t.true(fn(false))
  t.false(fn(""))
  t.false(fn([]))
  t.false(fn({}))
  t.false(fn(new Map()))
  t.false(fn(new Set()))
  t.false(fn(new Date()))
  t.false(fn(null))
  t.false(fn(undefined))
  t.false(fn(1))
})
