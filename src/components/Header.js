import React, { useState } from 'react'
import { Link } from 'gatsby'
import Navbar from './Navbar'

const Header = ({ logo, toggleHamburger, setToggleHamburger }) => {
  return (
    <header className={`header${toggleHamburger ? ' header--shadow' : ''}`}>
      <Link className="header__title" to="/">
        Mini Cat Town
      </Link>
      <Navbar
        setToggleHamburger={setToggleHamburger}
        toggleHamburger={toggleHamburger}
      />
    </header>
  )
}

export default Header
