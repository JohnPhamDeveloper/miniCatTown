import React, { useState } from 'react'

const Navbar = ({ toggleHamburger, setToggleHamburger }) => {
  return (
    <nav className="navbar">
      {/* Navlinks */}
      <button
        className={`hamburger hamburger--collapse ${
          toggleHamburger ? 'is-active' : ''
        }`}
        type="button"
        onClick={() => setToggleHamburger(!toggleHamburger)}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </nav>
  )
}

export default Navbar
