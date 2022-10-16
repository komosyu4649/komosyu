import { GetStaticPaths, GetStaticProps } from 'next'
import fs from 'fs'
import matter from 'gray-matter'

const Category = ({ category, posts }) => {
  //   console.log(category, posts)
  return <div></div>
}

export const getStaticProps: GetStaticProps = async (params) => {
  const category = params.params!
  const files = fs.readdirSync('posts')

  let posts = files.map((fileName) => {
    const fileContent = fs.readFileSync(`posts/${fileName}`, 'utf-8')
    let data = matter(fileContent)
    console.log(data)
    // const test = data
    // if (data.category === category.slug) {
    //   data
    // }

    // console.log(matter(fileContent).data.category)
    // if (data.category === category.slug) {
    //   data
    // }
    // if (data.category === category.slug) {
    return {
      //   frontMatter: data.category === category.slug ? data : null,
      frontMatter: data,
    }
    // }
  })
  //   console.log(posts)
  return {
    props: { category: category, posts: posts },
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
