import React, { ReactElement } from 'react'
import ThemeSwitch from './ThemeSwitch'
import styles from './Footer.module.css'

export default function Footer(): ReactElement {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <ThemeSwitch />
      <div>
        © <span id="year">{year}</span>{' '}
        <a href="https://matthiaskretschmann.com">Matthias Kretschmann</a> — All
        Rights Reserved
      </div>
    </footer>
  )
}
