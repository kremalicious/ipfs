import React from 'react'
import styles from './Loader.module.css'

const Loader = ({ message }: { message?: string }) => (
  <div className={styles.loader}>
    {message && (
      <div
        className={styles.loaderMessage}
        dangerouslySetInnerHTML={{ __html: message }}
      />
    )}
  </div>
)

export default Loader
