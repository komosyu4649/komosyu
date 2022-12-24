import { useState } from 'react'
import style from 'styles/SearchMain.module.scss'
import { Posts } from 'type'
import PostsList from './PostsList'

const SearchMain = ({ posts }: Posts) => {
  const [searchValue, setSearchValue] = useState('')
  let filteredPosts = posts.filter(
    (post) =>
      post.frontMatter.title
        .toLowerCase()
        .includes(searchValue.toLowerCase()) ||
      post.frontMatter.description
        .toLowerCase()
        .includes(searchValue.toLowerCase()) ||
      post.frontMatter.publishedDate
        .toLowerCase()
        .includes(searchValue.toLowerCase()) ||
      // post.frontMatter.modifiedDate
      //   .toLowerCase()
      //   .includes(searchValue.toLowerCase()) ||
      post.frontMatter.category
        .toLowerCase()
        .includes(searchValue.toLowerCase())
  )

  return (
    <div className={style.container}>
      <div className={style.form}>
        <input
          className={style.formInput}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="記事を検索する"
        />
        <svg
          className={style.formIcon}
          width="29"
          height="27"
          viewBox="0 0 29 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="10" cy="10" r="9" stroke="white" strokeWidth="2" />
          <line
            x1="17.6827"
            y1="16.2693"
            x2="27.9123"
            y2="25.8273"
            stroke="white"
            strokeWidth="2"
          />
        </svg>
      </div>
      {filteredPosts.length > 0 && <PostsList posts={filteredPosts} />}
    </div>
  )
}

export default SearchMain
