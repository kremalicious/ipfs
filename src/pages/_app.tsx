import '../styles/global.css'
import React from 'react'
import { AppProps } from 'next/app'
import Typekit from '../components/Typekit'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Typekit />
      <Component {...pageProps} />
    </>
  )
}
