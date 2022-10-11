import style from 'styles/SearchForm.module.scss'

const SearchForm = () => {
  return (
    <div className={style.container}>
      <input className={style.input} type="text" placeholder="記事を検索する" />
      <svg
        className={style.icon}
        width="29"
        height="27"
        viewBox="0 0 29 27"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10" cy="10" r="9" stroke="white" stroke-width="2" />
        <line
          x1="17.6827"
          y1="16.2693"
          x2="27.9123"
          y2="25.8273"
          stroke="white"
          stroke-width="2"
        />
      </svg>
    </div>
  )
}

export default SearchForm
