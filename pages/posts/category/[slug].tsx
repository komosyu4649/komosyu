import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import fs from 'fs'
import matter from 'gray-matter'
import { Posts, Post, PostContext } from 'type'
import Layout from 'comoponents/Layout'
import PostsList from 'comoponents/PostsList'
import PostCategories from 'comoponents/PostCategories'
import Meta from 'comoponents/Head'
import { ArticleJsonLd, NextSeo } from 'next-seo'

type CategoryProps = {
  posts: [
    {
      frontMatter: {
        title: string
        publishedDate: string
        modifiedDate: string
        description: string
        category: string
      }
      slug: string
    }
  ]
  category: string
}

const Category: NextPage<CategoryProps> = ({ posts, category }) => {
  const filteredPosts = posts.flatMap((post) =>
    post.frontMatter.category === category ? post : []
  )

  console.log(filteredPosts)

  return (
    <Layout>
      {/* <Meta title="" description="" /> */}
      <NextSeo title="" description="" />
      <PostCategories posts={posts} />
      <PostsList posts={filteredPosts} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (params) => {
  const category = params.params!.slug
  const files = fs.readdirSync('posts')
  /**
   * TODO: flatMapで綺麗に書き直したい
   */
  let posts = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fileContent = fs.readFileSync(`posts/${fileName}`, 'utf-8')
    let { data } = matter(fileContent)
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

  return {
    props: {
      category,
      posts,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync('posts')
  let posts = files.map((fileName) => {
    const fileContent = fs.readFileSync(`posts/${fileName}`, 'utf-8')
    const { data } = matter(fileContent)
    return {
      frontMatter: data,
    }
  })
  const allCategories = posts.map((post) => post.frontMatter.category)
  const categories = [...new Set(allCategories)]
  const paths = categories.map((category) => ({
    params: {
      slug: category,
    },
  }))
  return {
    paths,
    fallback: 'blocking',
    // fallback: false,
  }
}

export default Category
