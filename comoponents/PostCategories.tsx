import style from 'styles/PostCategories.module.scss'

const PostCategories = () => {
  const categories = [
    {
      item: '書籍',
    },
    {
      item: '技術',
    },
    {
      item: 'YouTube',
    },
    {
      item: 'Udemy',
    },
    {
      item: 'コラム',
    },
  ]
  return (
    <div className={style.container}>
      <ul className={style.list}>
        {categories.map((category) => (
          <li className={style.item}>
            <a href={category.item} className={style.itemLink}>
              {category.item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostCategories
