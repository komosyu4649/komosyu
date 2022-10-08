import React from 'react'

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
    <header className="">
      <div className="">
        <a href="" className="">
          komosyu
        </a>
        <nav className="">
          <ul className="">
            {menus.map((menu) => (
              <li className="" key={menu.item}>
                <a href="" className="">
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
