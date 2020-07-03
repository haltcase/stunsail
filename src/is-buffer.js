import getType from "./get-type.js"

export default function isBuffer (value) {
  return getType(value) === "buffer"
}
