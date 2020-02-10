import types from "@generated/typedoc-provider/types.json"

export const interfaces =
  types.children.filter(it => it.kindString === "Interface")

export default types
