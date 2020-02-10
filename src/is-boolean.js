import getType from "./get-type"

export default function isBoolean (value) {
  return getType(value) === "boolean"
}
