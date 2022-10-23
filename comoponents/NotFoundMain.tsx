import style from 'styles/NotFoundMain.module.scss'
import styleButton from 'styles/CommonButton.module.scss'
import PostLoadMore from './PostLoadMore'

const NotFoundMain = () => {
  return (
    <section className={style.container}>
      <h1 className={style.title}>404</h1>
      <p className={style.text}>Page not found</p>
      <button className={`${styleButton.lg} ${style.button}`}>
        ホームに戻る
      </button>
    </section>
  )
}

export default NotFoundMain
