import type { NextPage } from 'next'
import Layout from '../comoponents/Layout'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.container}>test</div>
    </Layout>
  )
}

export default Home
