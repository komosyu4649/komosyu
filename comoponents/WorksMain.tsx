import Image from 'next/image'
import style from 'styles/WorksMain.module.scss'
import styleImg from 'styles/CommonImg.module.scss'
import Link from 'next/link'
import { WorkDetail, Works } from 'type'

const WorksMain = ({ works }: Works) => {
  function widthLayout(index: number) {
    if (index % 11 === 3) {
      return '555'
    } else if (index % 11 === 9) {
      return '270'
    } else if (index % 11 === 10) {
      return '555'
    } else {
      return '270'
    }
  }

  function heightLayout(index: number) {
    if (index % 11 === 3) {
      return '473'
    } else if (index % 11 === 9) {
      // return '473'
      return '473'
    } else if (index % 11 === 10) {
      return '473'
    } else {
      return '200'
    }
  }

  type Test = {
    slug: string | null
    workData: {
      thumbnail: string | null
      name: string | null
      type: string | null
      url: string | null
      description: string | null
      responsible: string | null
      technology: string | null
      about: string | null
    }
  }

  return (
    <div className={style.container}>
      <ul className={style.list}>
        {works.map((work, index) =>
          work.workData.thumbnail !== '' ? (
            <li className={style.item} key={index}>
              <Link href={`/works/detail/${work.slug}`}>
                <a className={style.itemLink}>
                  <div className={`${styleImg.default} ${style.itemLinkImg}`}>
                    <Image
                      src={work.workData.thumbnail}
                      alt=""
                      layout="responsive"
                      objectFit="cover"
                      width={widthLayout(index)}
                      height={heightLayout(index)}
                    />
                  </div>
                  <div className={style.itemLinkContent}>
                    <span className={style.itemLinkContentName}>
                      {work.workData.name}
                    </span>
                    <span className={style.itemLinkContentType}>
                      {work.workData.type}
                    </span>
                  </div>
                </a>
              </Link>
            </li>
          ) : null
        )}
      </ul>
    </div>
  )
}

export default WorksMain
