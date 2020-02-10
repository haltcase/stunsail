import test from "ava"
import fn from "../src/get"

const object = { key: "value", nested: { inner: { deep: "thing" } } }

test("returns the value at path if it is defined", t => {
  const res = fn(object, "key")
  t.is(res, "value")
})

test("returns deeply nested values", t => {
  const res = fn(object, "nested.inner.deep")
  t.is(res, "thing")
})
