import { GetServerSideProps, GetStaticPaths, GetStaticProps } from 'next'
import fs from 'fs'
import matter from 'gray-matter'
// import * as fs from 'fs'

// const files = fs.readdirSync('data')

const Detail = ({ posts }) => {
  console.log(posts)
  return <div>test</div>
}

export const getStaticProps: GetStaticProps = async (params) => {
  const context = params.params!
  const file = fs.readFileSync(`posts/${context.slug}.md`, 'utf-8')
  const { data, content } = matter(file)
  return {
    props: {
      frontMatter: data,
      content,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = fs.readdirSync('posts')
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(/\.md/, ''),
    },
  }))
  return {
    paths,
    fallback: 'blocking',
  }
}

export default Detail
