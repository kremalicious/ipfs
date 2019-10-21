import React from 'react'
import dynamic from 'next/dynamic'
import { title, description } from '../../site.config'
import Layout from '../Layout'
import styles from './index.module.css'

const Add = dynamic(() => import('../components/Add'))
const Info = dynamic(() => import('../components/Info'))

const Home = () => (
  <Layout>
    <header className={styles.header}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{description}</p>
    </header>

    <Add />
    <Info />
  </Layout>
)

export default Home
