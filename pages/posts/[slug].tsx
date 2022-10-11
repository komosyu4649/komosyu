import Layout from 'comoponents/Layout'
import PostDetailMain from 'comoponents/PostDetailMain'
import fs from 'fs'
import matter from 'gray-matter'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { PostFrontMatter } from 'type'

type ContextProps = {
  frontMatter: { [key: string]: PostFrontMatter }
  content: string
}

interface Params extends ParsedUrlQuery {
  slug: string
}

const Post: NextPage<{
  frontMatter: PostFrontMatter
  content: string
}> = ({ frontMatter, content }) => {
  const props = { frontMatter, content }
  return (
    <Layout>
      <PostDetailMain props={props} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<ContextProps, Params> = async (
  params
) => {
  const context = params.params!
  const file = fs.readFileSync(`posts/${context.slug}.md`, 'utf-8')
  const { data, content } = matter(file)
  return {
    props: { frontMatter: data, content },
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
    // fallback: false,
  }
}

export default Post
