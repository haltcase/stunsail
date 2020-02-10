import getType from "./get-type"

export default function isBuffer (value) {
  return getType(value) === "buffer"
}
