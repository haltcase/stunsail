import test from "ava"
import fn from "../src/once"

test("only runs the function once & returns the same value on subsequent calls", t => {
  const target = fn(x => x * 2)
  t.is(target(50), 100)

  t.is(target(1000), 100)
  t.is(target(Infinity), 100)
  t.is(target(null), 100)
  t.is(target({}), 100)
})
