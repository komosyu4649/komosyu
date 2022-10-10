import Link from 'next/link'
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
        <Link href="/">
          <a className={style.logo}>komosyu</a>
        </Link>
        <nav className={style.nav}>
          <ul className={style.navList}>
            {menus.map((menu) => (
              <li className={style.navItem} key={menu.item}>
                <Link href={`/${menu.item}/`}>
                  <a className={style.navItemLink}>{menu.item}</a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
