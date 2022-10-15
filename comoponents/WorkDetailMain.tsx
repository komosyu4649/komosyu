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
        <div className={style.main}>
          {/* <div className={styleLayout.sm}> */}
          {/* img */}
          <div className={`${style.mainImg} ${styleImg.default}`}>
            <Image
              src={workData.thumbnail}
              alt={workData.name}
              layout="fill"
              objectFit="cover"
            />
          </div>
          {/* content */}
          <div className={`${styleLayout.sm} ${style.mainContent}`}>
            <h1 className={style.mainContentTitle}>
              <span className={style.mainContentTitleName}>
                {workData.name}
              </span>
              <span className={style.mainContentTitleType}>
                {workData.type}
              </span>
            </h1>
            <a
              href={workData.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styleText.link} ${style.mainContentUrl}`}
            >
              {workData.url}
            </a>
            <p className={style.mainContentDescription}>
              {workData.description}
            </p>
          </div>
          {/* </div> */}
        </div>
        {/* detail */}
        <div className={`${styleLayout.sm} ${style.detail}`}>
          <dl className={style.detailDl}>
            <dt className={style.detailDt}>担当</dt>
            <dd className={style.detailDd}>{workData.responsible}</dd>
          </dl>
          <dl className={style.detailDl}>
            <dt className={style.detailDt}>技術スタック</dt>
            <dd className={style.detailDd}>{workData.technology}</dd>
          </dl>
          <dl className={style.detailDl}>
            <dt className={style.detailDt}>開発について</dt>
            <dd className={style.detailDd}>{workData.about}</dd>
          </dl>
        </div>
      </div>
    </article>
  )
}

export default WorkDetailMain
