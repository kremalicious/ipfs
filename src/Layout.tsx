import React, { ReactNode, ReactElement } from 'react'
import { NextSeo } from 'next-seo'
import Footer from './components/Footer'
import { title, description, url } from '../site.config'
import styles from './Layout.module.css'

export default function Layout({
  children,
  pageTitle = title
}: {
  children: ReactNode
  pageTitle?: string
}): ReactElement {
  return (
    <div className={styles.app}>
      <NextSeo
        title={pageTitle}
        description={description}
        canonical={url}
        openGraph={{
          url,
          title,
          description,
          site_name: title
        }}
        twitter={{
          handle: '@kremalicious',
          site: '@kremalicious'
        }}
      />

      <main className={styles.main}>{children}</main>

      <Footer />
    </div>
  )
}
