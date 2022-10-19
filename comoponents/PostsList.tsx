import PostItem from './PostItem'
import style from 'styles/PostsList.module.scss'
import PostLoadMore from './PostLoadMore'
import { Posts, Post } from 'type'
import { useLoadMorePostsStore } from 'lib/store'
import { useState } from 'react'

const PostsList = ({ posts }: { posts: Post[] }) => {
  const loadPostNum = 3
  // const store = useLoadMorePostsStore((state) => state)
  // const loadNumberState = store.loadNumber
  // console.log(loadNumberState)
  const [loadNumberState, setLoadNumberState] = useState(loadPostNum)
  const handleClickMore = () => {
    setLoadNumberState((loadNumberState) => loadNumberState + loadPostNum)
  }
  // console.log(loadNumberState)

  return (
    <div className={style.container}>
      <ul className={style.list}>
        {posts.slice(0, loadNumberState).map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </ul>
      {posts.slice(0, loadNumberState).length !== posts.length && (
        // <PostLoadMore />
        <button className={style.button} onClick={() => handleClickMore()}>
          もっとみる
        </button>
      )}
    </div>
  )
}

export default PostsList
