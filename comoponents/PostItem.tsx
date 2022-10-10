import Link from 'next/link'
import style from 'styles/PostItem.module.scss'
import { Post, Posts } from 'type'

const PostItem = ({ post }: { post: Post }) => {
  return (
    <>
      <li className={style.item}>
        <Link href={`/posts/${post.slug}`}>
          <a className={style.itemLink}>
            <span className={style.itemLinkCategory}>
              {post.frontMatter.category}
            </span>
            <p className={style.itemLinkTitle}>{post.frontMatter.title}</p>
            <time className={style.itemLinkTime}>{post.frontMatter.date}</time>
          </a>
        </Link>
      </li>
    </>
  )
}

export default PostItem
