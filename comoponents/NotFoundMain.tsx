import style from 'styles/NotFoundMain.module.scss'
import styleButton from 'styles/CommonButton.module.scss'
import styleFont from 'styles/CommonFont.module.scss'
import PostLoadMore from './PostLoadMore'
import Link from 'next/link'

const NotFoundMain = () => {
  return (
    <section className={style.container}>
      <h1 className={`${styleFont.enBold} ${style.title}`}>404</h1>
      <p className={`${styleFont.enBold} ${style.text}`}>Page not found</p>
      <Link href="/">
        <a className={`${styleButton.lg} ${style.button}`}>ホームに戻る</a>
      </Link>
    </section>
  )
}

export default NotFoundMain
