import test from "ava"
import fn from "../src/camel-case"

test("converts input strings to camel-case", t => {
  t.is(fn("alreadyCamelCase"), "alreadyCamelCase")
  t.is(fn("Separated&By#$Characters"), "separatedByCharacters")
  t.is(fn("space separated string"), "spaceSeparatedString")
  t.is(fn("kebab-cased-string"), "kebabCasedString")
  t.is(fn("PascalCasedString"), "pascalCasedString")
  t.is(fn("snake_cased_string"), "snakeCasedString")
})
