import { GetStaticPaths, GetStaticProps } from 'next'
import fs from 'fs'
import matter from 'gray-matter'

const Category = ({ category, posts }) => {
  // const Category = ({ category }) => {
  console.log(category, posts)
  return <div></div>
}

export const getStaticProps: GetStaticProps = async (params) => {
  const category = params.params!
  const files = fs.readdirSync('posts')
  /**
   * TODO: flatMapで綺麗に書き直したい
   */
  let posts = files.map((fileName) => {
    const fileContent = fs.readFileSync(`posts/${fileName}`, 'utf-8')
    let { data } = matter(fileContent)
    return {
      frontMatter: data,
    }
  })
  const filteredPosts = posts.filter(
    (post) => post.frontMatter.category === category.slug
  )
  return {
    props: { category: category, posts: filteredPosts },
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
