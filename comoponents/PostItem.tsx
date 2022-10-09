import style from 'styles/PostItem.module.scss'
import { Post, Posts } from 'type'

const PostItem = ({ post }: { post: Post }) => {
  return (
    <>
      <li className={style.item}>
        <a href={`/post/${post.slug}`} className={style.itemLink}>
          <span className={style.itemLinkCategory}>
            {post.frontMatter.category}
          </span>
          <p className={style.itemLinkTitle}>{post.frontMatter.title}</p>
          <time className={style.itemLinkTime}>{post.frontMatter.date}</time>
        </a>
      </li>
    </>
  )
}

export default PostItem
