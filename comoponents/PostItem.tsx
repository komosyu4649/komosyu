import style from 'styles/PostItem.module.scss'

const PostItem = () => {
  const items = [
    {
      category: 'コラム',
      title: '技術ブログをはじめてみました',
      time: '2022/09/24',
    },
    {
      category: 'コラム',
      title: '技術ブログをはじめてみました',
      time: '2022/09/24',
    },
    {
      category: 'コラム',
      title: '技術ブログをはじめてみました',
      time: '2022/09/24',
    },
    {
      category: 'コラム',
      title: '技術ブログをはじめてみました',
      time: '2022/09/24',
    },
    {
      category: 'コラム',
      title: '技術ブログをはじめてみました',
      time: '2022/09/24',
    },
    {
      category: 'コラム',
      title: '技術ブログをはじめてみました',
      time: '2022/09/24',
    },
  ]
  return (
    <>
      {items.map((item) => (
        <li className={style.item}>
          <a href="" className={style.itemLink}>
            <span className={style.itemLinkCategory}>{item.category}</span>
            <p className={style.itemLinkTitle}>{item.title}</p>
            <time className={style.itemLinkTime}>{item.time}</time>
          </a>
        </li>
      ))}
    </>
  )
}

export default PostItem
