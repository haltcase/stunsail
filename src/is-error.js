import getType from "./get-type.js"
import isOneOf from "./is-one-of.js"

export default function isError (value) {
  const type = getType(value)

  return isOneOf(type, [
    "error",
    "typeerror",
    "rangeerror",
    "referenceerror",
    "evalerror",
    "urierror",
    "syntaxerror"
  ])
}
