import React from "react"
import classes from "clsx"

import styles from "./styles.module.css"

const calloutNames = {
  primary: "NOTE",
  secondary: "NOTE",
  success: "TIP",
  info: "NOTE",
  warning: "WARNING",
  danger: "DANGER"
}

export default ({ children, type = "success", icon = "!", title }) => {
  return (
    <p className={classes(styles[`callout-${type}`], { "no-title": title === "" })}>
      <span className={styles.title}>
        {title === undefined ? calloutNames[type] : title}
      </span>
      <span className={styles[`callout-icon-${type}`]}>
        {icon}
      </span>
      {children}
    </p>
  )
}
