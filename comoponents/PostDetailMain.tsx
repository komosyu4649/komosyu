import Image from 'next/image'
import React from 'react'
import { PostContext } from 'type'
import matter from 'gray-matter'
import { marked } from 'marked'
import style from 'styles/PostDetailMain.module.scss'
import styleImg from 'styles/CommonImg.module.scss'
import styleTag from 'styles/CommonTag.module.scss'
import styleLayout from 'styles/CommonLayout.module.scss'

const PostDetailMain = ({ props }: { props: PostContext }) => {
  //   console.log(props.frontMatter)
  const frontMatter = props.frontMatter
  const content = props.content
  //   console.log(frontMatter.title)
  return (
    <article className={style.container}>
      {/* header */}
      <div className={style.header}>
        <div className={styleLayout.sm}>
          <h1 className={style.headerTitle}>{frontMatter.title}</h1>
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
                    layout="fill"
                    objectFit="cover"
                  />
                </span>
                <span className={style.headerInformationDetailPersonName}>
                  komosyu
                </span>
              </div>
              {/* time */}
              <time className={style.headerInformationDetailTime}>
                {frontMatter.date}
              </time>
            </div>
            {/* category */}
            <a
              href=""
              className={`${styleTag.sm} ${style.headerInformationCategory}`}
              // className={`${styleTag.default} ${style.headerInformationCategory}`}
            >
              {frontMatter.category}
            </a>
          </div>
        </div>
      </div>
      {/* body */}
      <div
        className={`${styleLayout.sm} ${style.body}`}
        dangerouslySetInnerHTML={{ __html: marked(content) }}
      ></div>
    </article>
  )
}

export default PostDetailMain