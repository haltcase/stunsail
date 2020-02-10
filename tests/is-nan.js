import test from "ava"
import fn from "../src/is-nan"

test("reports true only for NaN", t => {
  t.true(fn(NaN))
  t.true(fn(0 / 0))
  t.false(fn(false))
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
