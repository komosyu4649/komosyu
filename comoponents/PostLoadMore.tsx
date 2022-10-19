import { useState } from 'react'
import style from 'styles/PostLoadMore.module.scss'

const PostLoadMore = () => {
  const loadNum = 3
  const [postNum, setPostNum] = useState(loadNum)
  const handleClickMore = () => {
    setPostNum((postNum) => postNum + loadNum)
    console.log(postNum)
  }
  return (
    <button className={style.button} onClick={() => handleClickMore()}>
      もっとみる
    </button>
  )
}

export default PostLoadMore
