import React from "react"

import { interfaces } from "@site/src/common/types"
import DocBlock from "@site/src/components/DocBlock"

export default () =>
  <>{
    interfaces.map((v, i) => (<DocBlock element={v} key={i}></DocBlock>))
  }</>
