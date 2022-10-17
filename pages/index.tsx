import PostCategories from 'comoponents/PostCategories'
import PostsList from 'comoponents/PostsList'
import type { GetStaticProps, NextPage } from 'next'
import Layout from '../comoponents/Layout'
import styles from '../styles/Home.module.scss'
import fs from 'fs'
import matter from 'gray-matter'
import { Posts } from 'type'

const Home: NextPage<Posts> = ({ posts }) => {
  console.log(9, posts)
  return (
    <Layout>
      <PostCategories posts={posts} />
      <PostsList posts={posts} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync('posts')
  let posts = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fileContent = fs.readFileSync(`posts/${fileName}`, 'utf-8')
    const { data } = matter(fileContent)
    return {
      frontMatter: data,
      slug,
    }
  })

  posts = posts.sort((a, b) =>
    new Date(a.frontMatter.date) > new Date(b.frontMatter.date) ? -1 : 1
  )

  return {
    props: {
      posts,
    },
  }
}

export default Home
