import Link from 'next/link'
import style from 'styles/PostItem.module.scss'
import { Post, Posts } from 'type'

const PostItem = ({ post }: { post: Post }) => {
  return (
    <>
      <li className={`${style.item} postItem`}>
        <Link href={`/posts/${post.slug}`}>
          <a className={`${style.itemLink} postItemLink`}>
            <span className={`${style.itemLinkCategory} postItemLinkCategory`}>
              {post.frontMatter.category}
            </span>
            <p className={`${style.itemLinkTitle} postItemLinkTitle`}>
              {post.frontMatter.title}
            </p>
            <time className={`${style.itemLinkTime} postItemLinkTime`}>
              {post.frontMatter.date}
            </time>
          </a>
        </Link>
      </li>
    </>
  )
}

export default PostItem
