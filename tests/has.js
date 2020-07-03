import test from "ava"
import fn from "../es/has.js"

const object = { key: "value", nested: { inner: { deep: "thing" } } }

test("returns true/false based on path's existence in the object", t => {
  t.true(fn(object, "nested.inner.deep"))
  t.false(fn(object, "super.deep.ultra.nested.inner.path"))
})
