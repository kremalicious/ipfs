import React, { ReactNode } from 'react'
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
}) {
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
          // eslint-disable-next-line @typescript-eslint/camelcase
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
