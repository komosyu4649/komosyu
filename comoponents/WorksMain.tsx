import Image from 'next/image'
import style from 'styles/WorksMain.module.scss'
import styleImg from 'styles/CommonImg.module.scss'
import Link from 'next/link'

const WorksMain = () => {
  const worksItems = [
    {
      src: '/asset/img/common/komosyu.jpg',
      name: 'ryoshiro tsuji',
      type: 'webサイト',
    },
    {
      src: '/asset/img/common/komosyu.jpg',
      name: 'ryoshiro tsuji',
      type: 'webサイト',
    },
    {
      src: '/asset/img/common/komosyu.jpg',
      name: 'ryoshiro tsuji',
      type: 'webサイト',
    },
    {
      src: '/asset/img/common/komosyu.jpg',
      name: 'ryoshiro tsuji',
      type: 'webサイト',
    },
    {
      src: '/asset/img/common/komosyu.jpg',
      name: 'ryoshiro tsuji',
      type: 'webサイト',
    },
    {
      src: '/asset/img/common/komosyu.jpg',
      name: 'ryoshiro tsuji',
      type: 'webサイト',
    },
    {
      src: '/asset/img/common/komosyu.jpg',
      name: 'ryoshiro tsuji',
      type: 'webサイト',
    },
    {
      src: '/asset/img/common/komosyu.jpg',
      name: 'ryoshiro tsuji',
      type: 'webサイト',
    },
    {
      src: '/asset/img/common/komosyu.jpg',
      name: 'ryoshiro tsuji',
      type: 'webサイト',
    },
    {
      src: '/asset/img/common/komosyu.jpg',
      name: 'ryoshiro tsuji',
      type: 'webサイト',
    },
    {
      src: '/asset/img/common/komosyu.jpg',
      name: 'ryoshiro tsuji',
      type: 'webサイト',
    },
    {
      src: '/asset/img/common/komosyu.jpg',
      name: 'ryoshiro tsuji',
      type: 'webサイト',
    },
    {
      src: '/asset/img/common/komosyu.jpg',
      name: 'ryoshiro tsuji',
      type: 'webサイト',
    },
    {
      src: '/asset/img/common/komosyu.jpg',
      name: 'ryoshiro tsuji',
      type: 'webサイト',
    },
    {
      src: '/asset/img/common/komosyu.jpg',
      name: 'ryoshiro tsuji',
      type: 'webサイト',
    },
    {
      src: '/asset/img/common/komosyu.jpg',
      name: 'ryoshiro tsuji',
      type: 'webサイト',
    },
  ]

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

  return (
    <div className={style.container}>
      <ul className={style.list}>
        {worksItems.map((worksItem, index) => (
          <li className={style.item} key={index}>
            <Link href="">
              <a className={style.itemLink}>
                <div className={`${styleImg.default} ${style.itemLinkImg}`}>
                  <Image
                    src={worksItem.src}
                    alt=""
                    layout="responsive"
                    objectFit="cover"
                    width={widthLayout(index)}
                    height={heightLayout(index)}
                  />
                </div>
                <div className={style.itemLinkContent}>
                  <span className={style.itemLinkContentName}>
                    {worksItem.name}
                  </span>
                  <span className={style.itemLinkContentType}>
                    {worksItem.type}
                  </span>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WorksMain
