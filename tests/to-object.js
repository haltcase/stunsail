import test from "ava"
import fn from "../es/to-object.js"

test("array: creates an object using array values as its pairs", t => {
  const input = ["one", "two", "three"]
  const res = { one: "one", two: "two", three: "three" }
  t.deepEqual(fn(input), res)
})

test("null/undefined: returns an empty object", t => {
  t.deepEqual(fn(null), {})
  t.deepEqual(fn(undefined), {})
})

test("primitive: creates an object with the input as both key & value", t => {
  /* eslint-disable object-shorthand */
  t.deepEqual(fn(3), { 3: 3 })
  t.deepEqual(fn(true), { true: true })
  t.deepEqual(fn("fly"), { fly: "fly" })
  /* eslint-enable object-shorthand */
})

test("object: returns the input directly", t => {
  const input = { ultra: "cool" }
  t.is(fn(input), input)
})

test("array: converts key / value pair arrays", t => {
  const input = [["keyOne", 1], ["keyTwo", 2], ["keyThree", 3]]
  const expected = {
    keyOne: 1,
    keyTwo: 2,
    keyThree: 3
  }

  t.deepEqual(fn(input), expected)
})

test("map: creates a plain object from map entries", t => {
  const input = new Map([["keyOne", 1], ["keyTwo", 2], ["keyThree", 3]])
  const expected = {
    keyOne: 1,
    keyTwo: 2,
    keyThree: 3
  }

  t.deepEqual(fn(input), expected)
})

test("set: creates an object using set entries as its pairs", t => {
  const input = new Set(["one", "two", "three"])
  const res = { one: "one", two: "two", three: "three" }
  t.deepEqual(fn(input), res)
})

test("returns an empty object for unhandled types", t => {
  t.deepEqual(fn(new Date()), {})
})
