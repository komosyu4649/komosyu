import { useLoadMorePostsStore } from 'lib/store'
import { useState } from 'react'
import style from 'styles/PostLoadMore.module.scss'

const PostLoadMore = () => {
  const loadPostNum = 3
  const store = useLoadMorePostsStore((state) => state)
  const handleClickMore = () => {
    store.setLoadNumber(store.loadNumber + loadPostNum)
  }

  return (
    <button className={style.button} onClick={() => handleClickMore()}>
      もっとみる
    </button>
  )
}

export default PostLoadMore
