import React, { useEffect, useState } from 'react'
import MenuItems from './MenuItems'
import { useScrollDirection } from '../hooks'

const Navbar = () => {
  const scrollDirection = useScrollDirection()

  // to change burger classes
  const [burger_class, setBurgerClass] = useState('burger-bar unclicked')
  const [menu_class, setMenuClass] = useState('menu hidden')
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  // toggle burger menu change
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass('burger-bar clicked')
      setMenuClass('menu visible')
    } else {
      setBurgerClass('burger-bar unclicked')
      setMenuClass('menu hidden')
    }
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <>
      <nav className={`${scrollDirection === 'down' ? 'hide' : 'show'}`}>
        <div
          role="button"
          aria-label="burger toggle"
          className="burger-menu"
          onClick={updateMenu}
        >
          <div className={burger_class}></div>
          <div className={burger_class}></div>
          <div className={burger_class}></div>
        </div>
        <div className={menu_class}>
          <MenuItems />
        </div>
      </nav>
    </>
  )
}

export default Navbar
