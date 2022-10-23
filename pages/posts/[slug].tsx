import Layout from 'comoponents/Layout'
import PostDetailMain from 'comoponents/PostDetailMain'
import fs from 'fs'
import matter from 'gray-matter'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'
import { PostFrontMatter } from 'type'
import { unified } from 'unified'
import remarkToc from 'remark-toc'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeStringify from 'rehype-stringify'
import rehypeSlug from 'rehype-slug'
import remarkPrism from 'remark-prism'
import Meta from 'comoponents/Head'
// import { createElement } from 'react'
// import rehypeParse from 'rehype-parse'
// import rehypeReact from 'rehype-react'

type ContextProps = {
  frontMatter: { [key: string]: PostFrontMatter }
  content: string
}

interface Params extends ParsedUrlQuery {
  slug: string
}

const Posts: NextPage<{
  frontMatter: PostFrontMatter
  content: string
  allContent: JSX.Element
}> = ({ frontMatter, content, allContent }) => {
  const props = { frontMatter, content, allContent }
  // const toReactNode = (allContent) => {
  //   return unified()
  //     .use(rehypeParse)
  //     .use(rehypeReact, {
  //       createElement,
  //     })
  //     .processSync(allContent).result
  // }
  return (
    <Layout>
      <Meta title="" description="" />
      <PostDetailMain props={props} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<ContextProps, Params> = async (
  params
) => {
  const context = params.params!
  const file = fs.readFileSync(`posts/${context.slug}.md`, 'utf-8')
  // const { data, content } = matter(file)
  const { data, content } = matter(file)

  const result = await unified()
    .use(remarkParse)
    .use(remarkPrism, {
      plugins: ['line-numbers'],
    })
    .use(remarkToc, {
      heading: '目次',
      tight: true,
      ordered: true,
    })
    .use(remarkRehype)
    .use(rehypeStringify)
    .use(rehypeSlug)
    .process(content)
  // console.log(result.value)
  const allContent = result.value
  return {
    props: { frontMatter: data, content, allContent },
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

export default Posts
