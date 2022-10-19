import PostItem from './PostItem'
import style from 'styles/PostsList.module.scss'
import PostLoadMore from './PostLoadMore'
import { Posts, Post } from 'type'
import { useLoadMorePostsStore } from 'lib/store'

const PostsList = ({ posts }: { posts: Post[] }) => {
  const store = useLoadMorePostsStore((state) => state)
  const loadNumberState = store.loadNumber

  return (
    <div className={style.container}>
      <ul className={style.list}>
        {posts.slice(0, loadNumberState).map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </ul>
      {posts.slice(0, loadNumberState).length !== posts.length && (
        <PostLoadMore />
      )}
    </div>
  )
}

export default PostsList
