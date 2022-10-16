import React from 'react'
import Image from 'next/image'
import { WorkDetail } from 'type'
import style from 'styles/WorkDetailMain.module.scss'
import styleImg from 'styles/CommonImg.module.scss'
import styleText from 'styles/CommonText.module.scss'
import styleLayout from 'styles/CommonLayout.module.scss'

const WorkDetailMain = ({ workData }: { workData: WorkDetail }) => {
  //   console.log(workData)
  return (
    <article className={style.container}>
      <div className={style.inner}>
        {/* main */}
        <div className={style.header}>
          {/* <div className={styleLayout.sm}> */}
          {/* img */}
          <div className={`${style.headerImg} ${styleImg.default}`}>
            <Image
              src={workData.thumbnail}
              alt={workData.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* content */}
          <div className={`${styleLayout.sm} ${style.headerContent}`}>
            <h1 className={style.headerContentTitle}>
              <span className={style.headerContentTitleName}>
                {workData.name}
              </span>
              <span className={style.headerContentTitleType}>
                {workData.type}
              </span>
            </h1>
            <a
              href={workData.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styleText.link} ${style.headerContentUrl}`}
            >
              {workData.url}
            </a>
            <p className={style.headerContentDescription}>
              {workData.description}
            </p>
          </div>
          {/* </div> */}
        </div>
        {/* detail */}
        <div className={`${styleLayout.sm} ${style.body}`}>
          <dl className={style.bodyDl}>
            <dt className={style.bodyDt}>担当</dt>
            <dd className={style.bodyDd}>{workData.responsible}</dd>
          </dl>
          <dl className={style.bodyDl}>
            <dt className={style.bodyDt}>技術スタック</dt>
            <dd className={style.bodyDd}>{workData.technology}</dd>
          </dl>
          <dl className={style.bodyDl}>
            <dt className={style.bodyDt}>開発について</dt>
            <dd className={style.bodyDd}>{workData.about}</dd>
          </dl>
        </div>
      </div>
    </article>
  )
}

export default WorkDetailMain
