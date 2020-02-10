import test from "ava"
import fn from "../src/is-subset"

test("returns true when specified properties match", t => {
  const obj = { name: "wishy", color: "green" }
  t.true(fn(obj, { color: "green" }))
})

test("returns false when specified properties do not match", t => {
  const obj = { name: "washy", color: "red" }
  t.false(fn(obj, { color: "blue" }))
})

test("effective as a recursive, partial equality comparison", t => {
  const path = {
    id: 100,
    label: "greeting",
    node: {
      kind: "string",
      value: "hello"
    }
  }

  t.true(fn(path, { label: "greeting" }))
  t.true(fn(path, { node: { value: "hello" } }))
  t.false(fn(path, { node: { kind: "number" } }))
})
