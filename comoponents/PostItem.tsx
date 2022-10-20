import Link from 'next/link'
import style from 'styles/PostItem.module.scss'
import { Post, Posts } from 'type'

const PostItem = ({ post }: { post: Post }) => {
  return (
    <>
      <li className={`${style.mainItem} postItem`}>
        <Link href={`/posts/${post.slug}`}>
          <a className={`${style.mainItemLink} postItemLink`}>
            <span
              className={`${style.mainItemLinkCategory} postItemLinkCategory`}
            >
              {post.frontMatter.category}
            </span>
            <p className={`${style.mainItemLinkTitle} postItemLinkTitle`}>
              {post.frontMatter.title}
            </p>
            <time className={`${style.mainItemLinkTime} postItemLinkTime`}>
              {post.frontMatter.date}
            </time>
          </a>
        </Link>
      </li>
    </>
  )
}

export default PostItem
