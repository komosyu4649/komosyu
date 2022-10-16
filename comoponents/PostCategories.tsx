import style from 'styles/PostCategories.module.scss'
import { Posts } from 'type'

const PostCategories = ({ posts }: Posts) => {
  const allCategories = posts.map((post) => post.frontMatter.category)
  const categories = [...new Set(allCategories)]

  return (
    <div className={style.container}>
      <ul className={style.list}>
        {categories.map((category) => (
          <li className={style.item} key={category}>
            <a href={category} className={style.itemLink}>
              {category}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostCategories
