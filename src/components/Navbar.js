import React, { useState } from 'react'
import NavDropdown from '../components/NavDropdown'
import { useMediaQuery } from 'react-responsive'

const Navbar = ({ toggleHamburger, setToggleHamburger }) => {
  const isBigScreen = useMediaQuery({ query: '(min-device-width: 1024px)' })

  return (
    <>
      <nav className="navbar">
        {/* LARGE SCREEN NAV */}
        {isBigScreen ? (
          <NavDropdown></NavDropdown>
        ) : (
          // SMALL SCREEN NAV
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
        )}
      </nav>
    </>
  )
}

export default Navbar
