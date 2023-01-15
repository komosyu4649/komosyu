import style from 'styles/Footer.module.scss'
import styleFont from 'styles/CommonFont.module.scss'

const Footer = () => {
  return (
    <footer className={style.container}>
      <small className={`${styleFont.en} ${style.small}`}>
        @{new Date().getFullYear()} komosyu
      </small>
    </footer>
  )
}

export default Footer
