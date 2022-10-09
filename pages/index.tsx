import PostCategories from 'comoponents/PostCategories'
import PostsList from 'comoponents/PostsList'
import type { NextPage } from 'next'
import Layout from '../comoponents/Layout'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <Layout>
      <PostCategories />
      <PostsList />
    </Layout>
  )
}

export default Home
