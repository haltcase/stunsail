import test from "ava"
import fn from "../src/is-type"

test("returns true if value is the given type", t => {
  t.true(fn("hello, world!", "string"))
  t.true(fn(1, "number"))
  t.true(fn({}, "object"))
  t.true(fn([], "array"))
  t.true(fn(new Date(), "date"))
  t.true(fn(Function, "function"))
  t.true(fn(true, "boolean"))
  t.true(fn(null, "null"))
  t.true(fn(undefined, "undefined"))
  t.true(fn(NaN, "nan"))
})

test("returns false if value is not the given type", t => {
  t.false(fn(Infinity, "string"))
  t.false(fn("hello, world!", "number"))
  t.false(fn(new Date(), "object"))
  t.false(fn(Function, "array"))
  t.false(fn(4, "date"))
  t.false(fn([], "function"))
  t.false(fn({}, "boolean"))
  t.false(fn(undefined, "null"))
  t.false(fn(null, "undefined"))
  t.false(fn(4, "nan"))
})

test("matches types if second argument is not a string (or not a type string)", t => {
  t.true(fn([], []))
  t.true(fn(3, 1))
  t.false(fn([], {}))
  t.false(fn(934, "1"))
})
