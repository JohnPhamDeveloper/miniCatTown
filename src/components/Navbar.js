import React from 'react'
import { Link } from 'gatsby'
// import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link className="navbar__title" to="/">
        Mini Cat Town
      </Link>
      {/* Mini cat town text */}
      {/* Navlinks */}
      <button class="hamburger hamburger--collapse is-active" type="button">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
    </nav>
  )
}

export default Navbar
