import test from "ava"
import fn from "../src/is-number"

test("reports true only for number values", t => {
  t.true(fn(1))
  t.true(fn(1.343))
  t.true(fn(Infinity))
  t.false(fn(false))
  t.false(fn(""))
  t.false(fn([]))
  t.false(fn({}))
  t.false(fn(new Map()))
  t.false(fn(new Set()))
  t.false(fn(new Date()))
  t.false(fn(NaN))
  t.false(fn(null))
  t.false(fn(undefined))
})
