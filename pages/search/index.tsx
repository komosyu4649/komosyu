import type { GetStaticProps, NextPage } from 'next'
import Layout from '../../comoponents/Layout'
import { Posts } from 'type'
import SearchMain from 'comoponents/SearchMain'
import fs from 'fs'
import matter from 'gray-matter'
import Meta from 'comoponents/Meta'
import { NextSeo } from 'next-seo'

const Search: NextPage<Posts> = ({ posts }) => {
  return (
    <Layout>
      <NextSeo title="search" description="キーワードを入力することで、全ての記事の中から該当する記事を検索することができます" />
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

export default Search
