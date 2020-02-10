import test from "ava"
import fn from "../src/to-number"

test("converts the input to a number value", t => {
  const now = new Date()

  t.is(fn(1), 1)
  t.is(fn(1.3345), 1.3345)
  t.is(fn(now), now.valueOf())
  t.is(fn({ one: 1, two: 2 }), 2)
  t.is(fn([1, 2, 3]), 3)
  t.is(fn("true"), 4)
  t.is(fn("false"), 5)
})

test("round argument makes the output an integer", t => {
  t.is(fn(1.4, true), 1)
  t.is(fn(1.5, true), 2)
  t.is(fn(-1.5, true), -1)
  t.is(fn(-1.51, true), -2)
})
