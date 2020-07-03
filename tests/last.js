import test from "ava"
import fn from "../es/last.js"

function getArguments () { return arguments }

test("retrieves the last value of the given array-like", t => {
  let result = fn([1, 2, 3, 4, 5])
  t.is(result, 5)

  result = fn(getArguments("hi", "world"))
  t.is(result, "world")
})

test("works for `Set`", t => {
  const result = fn(new Set([1, 2, 3, 4, 5]))
  t.is(result, 5)
})
