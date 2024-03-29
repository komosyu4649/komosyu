import Link from 'next/link'
import { useRouter } from 'next/router'
import style from 'styles/PostCategories.module.scss'
import styleTag from 'styles/CommonTag.module.scss'
import styleCurrent from 'styles/StateCurrent.module.scss'
import styleHover from 'styles/StateHover.module.scss'
import styleFont from 'styles/CommonFont.module.scss'
import { Posts } from 'type'
import useCurrent from 'hook/useCurrent'

const PostCategories = ({ posts }: Posts) => {
  const { urlPath } = useCurrent()

  const allCategories = posts.map((post) => post.frontMatter.category)
  const categories = [...new Set(allCategories)]

  return (
    <div className={style.container}>
      <ul className={style.list}>
        {categories.map((category) => (
          <li className={style.item} key={category}>
            <Link href={`/posts/category/${category}`}>
              <a
                className={`${
                  urlPath.includes(category) && styleCurrent.category
                } ${styleFont.enBold} ${styleTag.default} ${styleHover.button}`}
              >
                {category}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default PostCategories
