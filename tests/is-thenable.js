import test from "ava"
import fn from "../es/is-thenable.js"

test("reports true for Promises & other thenables", t => {
  t.true(fn(new Promise((resolve, reject) => {})))
  t.true(fn(Promise.resolve()))
  t.true(fn({ then: () => {} }))
})
