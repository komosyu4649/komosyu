import Image from 'next/image'
import style from 'styles/WorksMain.module.scss'
import styleImg from 'styles/CommonImg.module.scss'

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
      console.log(index)
      return '556'
    } else if (index % 11 === 7) {
      return '556'
    } else {
      return '270'
    }
  }

  function heightLayout(index: number) {
    if (index % 11 === 3) {
      return '473'
    } else if (index % 11 === 7) {
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
            <div className={`${styleImg.default} ${style.itemImg}`}>
              <Image
                src={worksItem.src}
                alt=""
                // layout="fill"
                layout="responsive"
                objectFit="cover"
                // objectFit="contain"
                // width={index % 6 === 3 ? '556' : '270'}
                width={widthLayout(index)}
                // height={index % 6 === 3 ? '473' : '200'}
                height={heightLayout(index)}
              />
              {/* <img src={worksItem.src} alt="" className="" /> */}
            </div>
            <div className={style.itemContent}>
              <span className={style.itemContentName}>{worksItem.name}</span>
              <span className={style.itemContentType}>{worksItem.type}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default WorksMain
