import React from 'react'
import { Link } from 'gatsby'
import Navbar from './Navbar'

const Header = ({ logo }) => {
  return (
    <header className="header">
      <Link className="header__title" to="/">
        Mini Cat Town
      </Link>
      <div className="header__fill"></div>
      <Navbar />
    </header>
  )
}

export default Header
