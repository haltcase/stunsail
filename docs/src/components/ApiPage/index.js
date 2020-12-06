import React from "react"
import TOC from "@theme/TOC"

import { interfaces } from "@site/src/common/types"
import { getName } from "@site/src/common/typedoc-renderer"
import Callout from "@site/src/components/Callout"
import ApiDocs from "@site/src/components/ApiDocs"

export default () =>
  <div className="row api">
    <div className="col">
      <h1>
        stunsail &middot; <a href="https://www.npmjs.com/package/stunsail">
          <img src="https://flat.badgen.net/npm/v/stunsail" alt="Version" />
        </a>
      </h1>

      <Callout type="success">
        stunsail pairs nicely with <a href="https://github.com/citycide/param.macro">param.macro</a>,
        a Babel plugin for compile-time partial application & lambda parameters
      </Callout>

      <ApiDocs />
    </div>
    <div className="col col--3 toc">
      <TOC headings={
        interfaces.map(v => {
          const name = getName(v)
          return {
            id: name,
            value: name,
            children: []
          }
        })
      } />
    </div>
  </div>
