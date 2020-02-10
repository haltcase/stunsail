import test from "ava"
import fn from "../src/invariant"

test("throws on falsy conditions", t => {
  const error = t.throws(() => fn(false))

  t.is(error.name, "InvariantError")
  t.is(error.message, "Invariant Violation")
})

test("uses provided custom error message", t => {
  const error = t.throws(() => fn(false, "Ya dun goofed"))

  t.is(error.name, "InvariantError")
  t.is(error.message, "Ya dun goofed")
})

test("does not throw on truthy conditions", t => {
  t.notThrows(() => fn(true))
})
