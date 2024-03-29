import Image from 'next/image'
import Link from 'next/link'
import style from 'styles/AboutMain.module.scss'
import styleImg from 'styles/CommonImg.module.scss'
import styleText from 'styles/CommonText.module.scss'
import styleFont from 'styles/CommonFont.module.scss'
import styleHover from 'styles/StateHover.module.scss'

const AboutMain = () => {
  const garellyImgs = [
    {
      src: '/asset/img/about/garelly_01.jpg',
    },
    {
      src: '/asset/img/about/garelly_02.jpg',
    },
    {
      src: '/asset/img/about/garelly_03.jpg',
    },
    {
      src: '/asset/img/about/garelly_04.jpg',
    },
  ]

  const links = [
    {
      name: '・github:',
      url: 'https://github.com/komosyu4649',
    },
    {
      name: '・twitter:',
      url: 'https://twitter.com/komosyu4649',
    },
    {
      name: '・website:',
      url: 'https://komosyu.dev',
    },
  ]

  return (
    <section className={style.container}>
      <h1 className={`${styleFont.enBold} ${style.title}`}>About me</h1>
      <div className={style.main}>
        {/*  */}
        <div className={style.mainPart}>
          <h2 className={`${styleFont.enBold} ${style.mainPartTitle}`}>Bio</h2>
          <div className={style.mainPartContent}>
            <p className={style.mainPartContentText}>
              都内の事業会社でエンジニアをしています。
              <br />
              主にフロントエンドを担当しています。
              <br />
              今はNext.js/Nestjs/AWSを使った開発をしています。
              <br />
              UI作りが好きで個人開発もしています。
            </p>
          </div>
        </div>
        {/*  */}
        <div className={style.mainPart}>
          <h2 className={`${styleFont.enBold} ${style.mainPartTitle}`}>
            Hobby
          </h2>
          <div className={style.mainPartContent}>
            <p className={style.mainPartContentText}>
              趣味で写真を撮るのとか好きです。
              <br />
              あと、webメディアとかも運営していたりするから見てみてください。
            </p>
            <div className={style.mainPartContentGarelly}>
              <ul className={style.mainPartContentGarellyList}>
                {garellyImgs.map((garellyImg) => (
                  <li
                    key={garellyImg.src}
                    className={`${styleImg.default}  ${style.mainPartContentGarellyItem}`}
                  >
                    <Image
                      src={garellyImg.src}
                      alt=""
                      quality="50"
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
          <h2 className={`${styleFont.enBold} ${style.mainPartTitle}`}>
            Links
          </h2>
          <div className={style.mainPartContent}>
            <ul className={style.mainPartContentList}>
              {links.map((link) => (
                <li key={link.name} className={style.mainPartContentItem}>
                  <span
                    className={`${styleFont.en} ${style.mainPartContentItemName}`}
                  >
                    {link.name} &nbsp;
                  </span>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styleFont.en} ${styleText.link} ${styleHover.textLine} ${style.mainPartContentItemLink}`}
                  >
                    {link.url}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/*  */}
      </div>
    </section>
  )
}

export default AboutMain
