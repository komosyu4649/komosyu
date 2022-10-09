import PostItem from './PostItem'
import style from 'styles/PostsList.module.scss'
import PostLoadMore from './PostLoadMore'

const PostsList = () => {
  return (
    <div className={style.container}>
      <ul className={style.list}>
        <PostItem />
      </ul>
      <PostLoadMore />
    </div>
  )
}

export default PostsList
