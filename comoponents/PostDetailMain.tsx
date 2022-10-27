import Image from 'next/image'
// import React from 'react'
import { PostContext } from 'type'
import matter from 'gray-matter'
import { marked } from 'marked'
// import { unified } from 'unified'
// import remarkToc from 'remark-toc'
// import remarkParse from 'remark-parse'
// import remarkRehype from 'remark-rehype'
// import rehypeStringify from 'rehype-stringify'
import React, { createElement, Fragment, ReactNode } from 'react'
import rehypeParse from 'rehype-parse'
import rehypeReact from 'rehype-react'
import { unified } from 'unified'
import style from 'styles/PostDetailMain.module.scss'
import styleImg from 'styles/CommonImg.module.scss'
import styleTag from 'styles/CommonTag.module.scss'
import styleLayout from 'styles/CommonLayout.module.scss'
import styleFont from 'styles/CommonFont.module.scss'
import styleHover from "styles/StateHover.module.scss"
import Link from 'next/link'
import { ReactElement } from 'rehype-react/lib'
// import CustomLink from './CustomLink'

type CustomLinkProps = {
  href: string
  children: [string]
}

const PostDetailMain = ({ props }: { props: PostContext }) => {
  const frontMatter = props.frontMatter
  const content = props.content
  const allContent = props.allContent

  const customLink = ({
    children,
    href,
  }: {
    children: string
    href: string
  }) => {
    if (href.startsWith('#')) {
      return <a href={href}>{children}</a>
    } else {
      // return href.startsWith('/') || href.startsWith('#') ? (
      return href.startsWith('/') ? (
        <Link href={href}>
          <a>{children}</a>
        </Link>
      ) : (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    }
  }

  // const toReactNode = (allContent: { allContent: JSX.Element }) => {
  const toReactNode = (allContent: JSX.Element) => {
    return unified()
      .use(rehypeParse, {
        fragment: true,
      })
      .use(rehypeReact, {
        createElement,
        Fragment,
        components: {
          a: customLink,
        },
      })
      .processSync(allContent).result
  }

  return (
    <article className={style.container}>
      {/* header */}
      <div className={style.header}>
        <div className={styleLayout.sm}>
          <h1 className={`${style.headerTitle}`}>{frontMatter.title}</h1>
          <div className={style.headerInformation}>
            {/* detail */}
            <div className={style.headerInformationDetail}>
              {/* name */}
              <div className={style.headerInformationDetailPerson}>
                <span
                  className={`${styleImg.default} ${style.headerInformationDetailPersonIcon}`}
                >
                  <Image
                    src="/asset/img/common/komosyu.jpg"
                    alt=""
                    quality="50"
                    layout="fill"
                    objectFit="cover"
                  />
                </span>
                <span
                  className={`${styleFont.en} ${style.headerInformationDetailPersonName}`}
                >
                  komosyu
                </span>
              </div>
              {/* time */}
              <time
                className={`${styleFont.en} ${style.headerInformationDetailTime}`}
              >
                {frontMatter.modifiedDate
                  ? frontMatter.modifiedDate
                  : frontMatter.publishedDate}
              </time>
            </div>
            {/* category */}
            <Link href={`/posts/category/${frontMatter.category}`}>
              <a
                className={`${styleFont.en} ${styleTag.sm} ${styleHover.button} ${style.headerInformationCategory}`}
                // className={`${styleTag.default} ${style.headerInformationCategory}`}
              >
                {frontMatter.category}
              </a>
            </Link>
          </div>
        </div>
      </div>
      {/* body */}
      {/* <div
        className={`${styleLayout.sm} ${style.body}`}
        dangerouslySetInnerHTML={{ __html: marked(allContent) }}
      ></div> */}
      <div className={`${styleLayout.sm} ${style.body}`}>
        {toReactNode(allContent)}
      </div>
    </article>
  )
}

export default PostDetailMain
