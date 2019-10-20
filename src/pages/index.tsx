import React from 'react'
import Add from '../components/Add'
import { title, description } from '../../site.config'
import styles from './index.module.css'

import Layout from '../Layout'
import Info from '../components/Info'

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
