import getType from "./get-type"

export default function isSet (value) {
  return getType(value) === "set"
}
