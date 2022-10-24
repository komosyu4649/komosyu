import Link from 'next/link'
import style from 'styles/PostItem.module.scss'
import styleFont from 'styles/CommonFont.module.scss'
import { Post, Posts } from 'type'

const PostItem = ({ post }: { post: Post }) => {
  return (
    <>
      <li className={`${style.mainItem} postItem`}>
        <Link href={`/posts/${post.slug}`}>
          <a className={`${style.mainItemLink} postItemLink`}>
            <span
              className={`${styleFont.en} ${style.mainItemLinkCategory} postItemLinkCategory`}
            >
              {post.frontMatter.category}
            </span>
            <p className={`${style.mainItemLinkTitle} postItemLinkTitle`}>
              {post.frontMatter.title}
            </p>
            <time
              className={`${styleFont.en} ${style.mainItemLinkTime} postItemLinkTime`}
            >
              {post.frontMatter.modifiedDate
                ? post.frontMatter.modifiedDate
                : post.frontMatter.publishedDate}
            </time>
          </a>
        </Link>
      </li>
    </>
  )
}

export default PostItem
