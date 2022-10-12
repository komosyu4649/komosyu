import Image from 'next/image'
import Link from 'next/link'
import style from 'styles/AboutMain.module.scss'
import styleImg from 'styles/CommonImg.module.scss'
import styleText from 'styles/CommonText.module.scss'

const AboutMain = () => {
  const garellyImgs = [
    {
      src: '/asset/img/common/komosyu.jpg',
    },
    {
      src: '/asset/img/common/komosyu.jpg',
    },
    {
      src: '/asset/img/common/komosyu.jpg',
    },
    {
      src: '/asset/img/common/komosyu.jpg',
    },
  ]

  const links = [
    {
      name: '・github:',
      link: 'https://github.com',
    },
    {
      name: '・twitter:',
      link: 'https://twitter.com',
    },
    {
      name: '・website:',
      link: 'https://twitter.com',
    },
  ]

  return (
    <div className={style.container}>
      <h1 className={style.title}>About me</h1>
      <div className={style.main}>
        {/*  */}
        <div className={style.mainPart}>
          <h2 className={style.mainPartTitle}>Bio</h2>
          <div className={style.mainPartContent}>
            <p className={style.mainPartContentText}>
              わたしはこういう感じの仕事をしている人です。
              <br />
              こういうことに興味があって、こういうこともしてみたいなーなんて考えています。
            </p>
          </div>
        </div>
        {/*  */}
        <div className={style.mainPart}>
          <h2 className={style.mainPartTitle}>Hobby</h2>
          <div className={style.mainPartContent}>
            <p className={style.mainPartContentText}>
              趣味で写真を撮るのとか好きです。
              <br />
              あと、webメディアとかも運営していたりするからみてみてね。
            </p>
            <div className={style.mainPartContentGarelly}>
              <ul className={style.mainPartContentGarellyList}>
                {garellyImgs.map((garellyImg) => (
                  <li
                    className={`${styleImg.default}  ${style.mainPartContentGarellyItem}`}
                  >
                    <Image
                      src={garellyImg.src}
                      alt=""
                      layout="fill"
                      objectFit="cover"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/*  */}
        <div className={style.mainPart}>
          <h2 className={style.mainPartTitle}>Links</h2>
          <div className={style.mainPartContent}>
            <ul className={style.mainPartContentList}>
              {links.map((link) => (
                <li className={style.mainPartContentItem}>
                  <span className={style.mainPartContentItemName}>
                    {link.name} &nbsp;
                  </span>
                  <Link href="">
                    <a
                      className={`${styleText.link} ${style.mainPartContentItemLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.link}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  )
}

export default AboutMain
