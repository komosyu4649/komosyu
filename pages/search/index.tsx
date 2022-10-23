import type { GetStaticProps, NextPage } from 'next'
import Layout from '../../comoponents/Layout'
import { Posts } from 'type'
import SearchMain from 'comoponents/SearchMain'
import fs from 'fs'
import matter from 'gray-matter'
import Meta from 'comoponents/Head'

const Search: NextPage<Posts> = ({ posts }) => {
  return (
    <Layout>
      <Meta title="" description="" />
      <SearchMain posts={posts} />
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

export default Search
