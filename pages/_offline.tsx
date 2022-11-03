import PostCategories from 'comoponents/PostCategories'
import PostsList from 'comoponents/PostsList'
import type { GetStaticProps, NextPage } from 'next'
import Layout from '../comoponents/Layout'
import styles from '../styles/Home.module.scss'
import fs from 'fs'
import matter from 'gray-matter'
import { Posts } from 'type'
import Meta from 'comoponents/Meta'
import { NextSeo } from 'next-seo'

const Home: NextPage<Posts> = ({ posts }) => {
  return (
    <Layout>
      <NextSeo title="frontend web developper" description="next.jsなど流行のフロントエンド技術を中心に発信していきます" />
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
    new Date(
      a.frontMatter.modifiedDate
        ? a.frontMatter.modifiedDate
        : a.frontMatter.publishedDate
    ) >
    new Date(
      b.frontMatter.modifiedDate
        ? b.frontMatter.modifiedDate
        : b.frontMatter.publishedDate
    )
      ? -1
      : 1
  )

  posts = posts.filter((post) => post.frontMatter.public)

  return {
    props: {
      posts,
    },
  }
}

export default Home
