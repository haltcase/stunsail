import getType from "./get-type"
import isOneOf from "./is-one-of"

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
