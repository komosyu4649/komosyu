import PostItem from './PostItem'
import style from 'styles/PostsList.module.scss'
import PostLoadMore from './PostLoadMore'
import { Posts, Post } from 'type'
import { useLoadMorePostsStore } from 'lib/store'
import { useEffect, useState } from 'react'

const PostsList = ({ posts }: { posts: Post[] }) => {
  // loadmore
  // zustand
  // const store = useLoadMorePostsStore((state) => state)
  // const loadNumberState = store.loadNumber
  // // useState でやる場合はカテゴリーごとに表示件数を管理できるようにしないといけない
  const loadPostNum = 3
  const [loadNumberState, setLoadNumberState] = useState(loadPostNum)
  const handleClickMore = () => {
    setLoadNumberState((loadNumberState) => loadNumberState + loadPostNum)
  }

  // postlayoutmode
  const [postsLayoutMode, setPostsLayoutMode] = useState(false)
  const handlePostLayoutMode = () => {
    setPostsLayoutMode(!postsLayoutMode)
    if (postsLayoutMode) {
      document.documentElement.classList.remove('is-layout__post')
      window.localStorage.setItem('postsLayout', 'row')
    } else {
      document.documentElement.classList.add('is-layout__post')
      window.localStorage.setItem('postsLayout', 'column')
    }
  }

  useEffect(() => {
    if (window.localStorage.getItem('postsLayout') === 'column') {
      document.documentElement.classList.add('is-layout__post')
      setPostsLayoutMode(true)
    } else {
      document.documentElement.classList.remove('is-layout__post')
    }
  }, [postsLayoutMode])

  return (
    <div className={style.container}>
      <button
        className={`${style.switch} postSwitch`}
        onClick={handlePostLayoutMode}
      >
        <span className={`${style.switchInside} postSwitchInside`}></span>
      </button>
      <ul className={`${style.list} postList`}>
        {posts.slice(0, loadNumberState).map((post) => (
          <PostItem key={post.slug} post={post} />
        ))}
      </ul>
      {posts.slice(0, loadNumberState).length !== posts.length && (
        // zustand
        // <PostLoadMore />
        // useState
        <button className={style.button} onClick={() => handleClickMore()}>
          もっとみる
        </button>
      )}
    </div>
  )
}

export default PostsList
