import React from "react"

import DocBlock from "@site/src/components/DocBlock"
import { interfaces } from "@site/src/common/types"

export default () =>
  <>{
    interfaces.map(v => (<DocBlock element={v}></DocBlock>))
  }</>
