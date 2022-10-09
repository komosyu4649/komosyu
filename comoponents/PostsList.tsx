import PostItem from './PostItem'
import style from 'styles/PostsList.module.scss'
import PostLoadMore from './PostLoadMore'
import { Posts, Post } from 'type'

const PostsList = ({ posts }: Posts) => {
  return (
    <div className={style.container}>
      <ul className={style.list}>
        {posts.map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </ul>
      <PostLoadMore />
    </div>
  )
}

export default PostsList
