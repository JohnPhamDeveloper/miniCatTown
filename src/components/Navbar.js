import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Navlinks */}
      <button className="hamburger hamburger--collapse is-active" type="button">
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </nav>
  )
}

export default Navbar
