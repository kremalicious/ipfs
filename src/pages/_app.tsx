import '../styles/global.css'
import App from 'next/app'
import React from 'react'
import Typekit from '../components/Typekit'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Typekit />
        <Component {...pageProps} />
      </>
    )
  }
}
