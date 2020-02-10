import test from "ava"
import fn from "../src/get-or"

const object = { key: "value", nested: { inner: { deep: "thing" } } }

test("returns the value at path if it is defined", t => {
  const res = fn(object, "key", "string")
  t.is(res, "value")
})

test("returns deeply nested values", t => {
  const res = fn(object, "nested.inner.deep", "nope")
  t.is(res, "thing")
})

test("returns given default value if path is undefined", t => {
  const res = fn(object, "key.inside.value", "string")
  t.is(res, "string")
})
