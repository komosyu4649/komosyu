import PostItem from './PostItem'
import style from 'styles/PostsList.module.scss'
import PostLoadMore from './PostLoadMore'
import { Posts, Post } from 'type'

const PostsList = ({ posts }: { posts: Post[] }) => {
  const postNum = 3

  return (
    <div className={style.container}>
      <ul className={style.list}>
        {posts.slice(0, postNum).map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </ul>
      {posts.slice(0, postNum).length !== posts.length && <PostLoadMore />}
    </div>
  )
}

export default PostsList
