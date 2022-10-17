import Link from 'next/link'
import style from 'styles/PostCategories.module.scss'
import { Posts } from 'type'

const PostCategories = ({ posts }: Posts) => {
  // console.log(2, posts)
  const allCategories = posts.map((post) => post.frontMatter.category)
  const categories = [...new Set(allCategories)]

  return (
    <div className={style.container}>
      <ul className={style.list}>
        {categories.map((category) => (
          <li className={style.item} key={category}>
            <Link href={`/posts/category/${category}`}>
              <a className={style.itemLink}>{category}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostCategories
