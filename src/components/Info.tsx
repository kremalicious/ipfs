import React, { ReactElement } from 'react'
import Status from './Status'
import styles from './Info.module.css'

export default function Info(): ReactElement {
  return (
    <aside className={styles.info}>
      <h2>
        <Status type="gateway" />
        Gateway
      </h2>
      <h2>
        <Status type="api" /> HTTP API
      </h2>
    </aside>
  )
}
