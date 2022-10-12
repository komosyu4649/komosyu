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
  return (
    <div className={style.container}>
      <ul className={style.list}>
        {worksItems.map(
          (worksItem, index) => (
            console.log(index),
            (
              <li className={style.item} key={index}>
                <div className={`${styleImg.default} ${style.itemImg}`}>
                  <Image
                    src={worksItem.src}
                    alt=""
                    // layout="fill"
                    layout="responsive"
                    objectFit="cover"
                    // objectFit="contain"
                    width={index % 6 === 3 ? '556' : '270'}
                    height={index % 6 === 3 ? '473' : '200'}
                  />
                  {/* <img src={worksItem.src} alt="" className="" /> */}
                </div>
                <div className={style.itemContent}>
                  <span className={style.itemContentName}>
                    {worksItem.name}
                  </span>
                  <span className={style.itemContentType}>
                    {worksItem.type}
                  </span>
                </div>
              </li>
            )
          )
        )}
      </ul>
    </div>
  )
}

export default WorksMain
