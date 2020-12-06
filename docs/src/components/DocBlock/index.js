import React from "react"
import Collapsible from "react-collapsible"
import classes from "clsx"
import CodeBlock from "@theme/CodeBlock"
import Heading from "@theme/Heading"

import * as t from "@site/src/common/typedoc-renderer"
import styles from "./styles.module.css"
import "./styles.css"

export const DocSection = ({ children, title }) =>
  <div className={styles.marginBottomLeading}>
    <p className={styles.borderBottomContents}>
      <strong>{title.toUpperCase()}</strong>
    </p>
    {children}
  </div>

export const Code = ({ children, language = "js" }) =>
  <div>
    <CodeBlock className={language}>{children}</CodeBlock>
  </div>

export const SignatureCollapsible = ({ name, element }) =>
  <div className={styles.marginBottomLeading}>
    <Collapsible
      trigger="expand signatures"
      triggerWhenOpen="collapse signatures"
      classParentString="card"
      triggerTagName="div"
      triggerClassName="card__header"
      triggerOpenedClassName="card__header"
      triggerStyle={{ cursor: "pointer", paddingBottom: "1rem" }}
      contentOuterClassName="card__footer">
      <Code language='typescript'>
        {element.signatures.map(sig =>
          t.getTypedSignature(sig, name)).join("\n")}
      </Code>
    </Collapsible>
  </div>

const FunctionHeader = Heading("h2")

export default ({ element }) => {
  const name = t.getName(element)
  const usage = t.getTag(element, "example").text
  const since = t.getTag(element, "since").text
  const refs = t.getTags(element, "see")
  const returns = t.getReturns(element)
  const params = t.getParams(element)
  const badges = t.getTags(element, "tag").map(it => it.text)

  return (
    <>
      <FunctionHeader id={name} className={styles.functionHeader}>
        <span className={styles.functionHeaderName}>{name}</span>
        <span className={styles.functionHeaderTags}>
          {t.isAsync(element) &&
            <span
              className={classes(styles.functionHeaderTag, "badge", "badge--primary")}
              title="This function returns a Promise.">
              async
            </span>}
          {Boolean(badges.length) && badges.map(text =>
            <span
              className={classes(styles.functionHeaderTag, "badge", "badge--info")}>
              {text}
            </span>)}
          {t.hasTag(element, "deprecated") &&
            <span
              className={classes(styles.functionHeaderTag, "badge", "badge--warning")}
              title={t.getTag(element, "deprecated").text}>
              deprecated
            </span>
          }
          {since &&
            <span
              className={classes(styles.functionHeaderTag, "badge", "badge--secondary")}
              title={`Added in ${since}`}>{since}</span>
          }
        </span>
      </FunctionHeader>
      <Code>{t.getSignature(element, name)}</Code>
      <SignatureCollapsible name={name} element={element} />

      <p dangerouslySetInnerHTML={{ __html: t.getDescription(element) }} />

      {params && <DocSection title="arguments">
        {<p dangerouslySetInnerHTML={{ __html: params }} />}
      </DocSection>}

      {returns && <DocSection title="returns">
        {<p dangerouslySetInnerHTML={{ __html: returns }} />}
      </DocSection>}

      {usage && <DocSection title="usage">
        <Code>{usage}</Code>
      </DocSection>}

      {Boolean(refs.length) && <DocSection title="see also">
        <ul>{refs.map((ref, i) =>
          <li><a href={"#" + ref.text} key={i}><code>{ref.text}</code></a></li>)
        }</ul>
      </DocSection>}
    </>
  )
}
