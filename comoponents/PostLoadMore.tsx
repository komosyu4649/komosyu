import { useLoadMorePostsStore } from 'lib/store'
import { useState } from 'react'
import style from 'styles/PostLoadMore.module.scss'

const PostLoadMore = () => {
  const loadPostNum = 3
  const store = useLoadMorePostsStore((state) => state)
  const handleClickMore = (loadNumber: number) => {
    store.setLoadNumber(loadNumber + loadPostNum)
  }

  return (
    <button
      className={style.button}
      onClick={() => handleClickMore(loadPostNum)}
    >
      もっとみる
    </button>
  )
}

export default PostLoadMore
