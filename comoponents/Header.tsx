import React from 'react'
import style from 'styles/Header.module.scss'

const Header = () => {
  const menus = [
    {
      item: 'search',
    },
    {
      item: 'works',
    },
    {
      item: 'about',
    },
  ]
  return (
    <header className={style.container}>
      <div className={style.inner}>
        <a href="" className={style.logo}>
          komosyu
        </a>
        <nav className={style.nav}>
          <ul className={style.navList}>
            {menus.map((menu) => (
              <li className={style.navItem} key={menu.item}>
                <a href="" className={style.navItemLink}>
                  {menu.item}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
