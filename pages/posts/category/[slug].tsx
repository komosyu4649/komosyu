import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import fs from 'fs'
import matter from 'gray-matter'
import { Posts, Post, PostContext } from 'type'
import Layout from 'comoponents/Layout'
import PostsList from 'comoponents/PostsList'
import PostCategories from 'comoponents/PostCategories'

// const Category: NextPage<{ category: string; posts: Post[] }> = ({
//   category,
//   posts,
type Test = {
  posts: [
    {
      frontMatter: {
        title: string
        date: string
        description: string
        category: string
      }
      slug: string
    }
  ]
  category: string
}
const Category: NextPage<Test> = ({ posts, category }) => {
  // console.log(8, posts)
  const filteredPosts: FilteredPosts = posts.filter(
    (post) => post.frontMatter.category === category
  )
  console.log(filteredPosts, posts)

  return (
    <Layout>
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
  const posts = files.map((fileName) => {
    const slug = fileName.replace(/\.md$/, '')
    const fileContent = fs.readFileSync(`posts/${fileName}`, 'utf-8')
    let { data } = matter(fileContent)
    return {
      frontMatter: data,
      slug,
    }
  })
  // console.log(posts)
  return {
    // props: { category: category, posts: posts },
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
    // fallback: 'blocking',
    fallback: false,
  }
}

export default Category
