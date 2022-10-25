import Link from 'next/link'
import React from 'react'
import style from 'styles/Header.module.scss'
import styleFont from 'styles/CommonFont.module.scss'
import styleCurrent from 'styles/StateCurrent.module.scss'
import { useRouter } from 'next/router'
import useCurrent from 'hook/useCurrent'

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

  const { urlPath } = useCurrent()

  return (
    <header className={style.container}>
      <div className={style.inner}>
        <Link href="/">
          <a className={`${styleFont.enBold} ${style.logo}`}>komosyu</a>
        </Link>
        <nav className={style.nav}>
          <ul className={style.navList}>
            {menus.map((menu) => (
              <li className={style.navItem} key={menu.item}>
                <Link href={`/${menu.item}/`}>
                  <a
                    className={`${
                      urlPath.includes(menu.item) && styleCurrent.point
                    } ${styleFont.enBold} ${style.navItemLink}`}
                  >
                    {menu.item}
                  </a>
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
