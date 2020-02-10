import test from "ava"
import fn from "../src/count"

test("returns the number of occurrences in collections", t => {
  t.is(fn([1, 6, 6, 3], 6), 2)
  t.is(fn("./directory/path", "/"), 2)

  t.is(fn(new Set([1, 6, 6, 3]), 6), 1)

  const map = new Map([
    ["a", 5],
    ["b", 5],
    ["c", 10]
  ])

  t.is(fn(map, 5), 2)
})

test("returns floored divisiblity for numbers", t => {
  t.is(fn(9, 4), 2)
  t.is(fn(9, 3), 3)
  t.is(fn(9, 6), 1)
})

test("returns 1 for primitive equality and 0 for primitive inequality", t => {
  t.is(fn(true, true), 1)
  t.is(fn(true, false), 0)

  t.is(fn(null, null), 1)
  t.is(fn(null, undefined), 0)

  t.is(fn(undefined, undefined), 1)
  t.is(fn(undefined, null), 0)
})
