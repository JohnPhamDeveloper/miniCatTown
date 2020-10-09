import React, { useRef, useEffect } from 'react'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'
import { Link } from 'gatsby'

/* Dropdown Nav Menu */

/* IMPLEMENT DROPDOWN NAV HERE */

/* https://www.bt.com/about/annual-reports/2020summary/#stories */

/*  */

const NavDropdown = ({ isEnabled }) => {
  const parentRef = useRef(null)

  useEffect(() => {
    if (parentRef) {
      if (isEnabled) {
        disableBodyScroll(parentRef.current)
      } else {
        enableBodyScroll(parentRef.current)
      }
    }
  }, [isEnabled])

  return (
    <div
      className={`nav-dropdown ${isEnabled ? 'nav-dropdown--active' : ''}`}
      ref={parentRef}
    >
      <ul className="nav-dropdown__list">
        {/* <li style={{ ['--animation-order']: 1 }}>
          <Link to="/blog">Home</Link>
        </li> */}
        <li style={{ ['--animation-order']: 2 }}>
          <Link to="/blog">About Us</Link>
        </li>
        <li style={{ ['--animation-order']: 3 }}>
          <Link to="/blog">Adoption</Link>
        </li>
        <li style={{ ['--animation-order']: 4 }}>
          <Link to="/blog">Donate</Link>
        </li>
        <li style={{ ['--animation-order']: 5 }}>
          <Link to="/blog">Visit Us</Link>
        </li>
        {/* <li style={{ ['--animation-order']: 6 }}>
          <Link to="/blog">Our Team</Link>
        </li>
        <li style={{ ['--animation-order']: 7 }}>
          <Link to="/blog">Our Community</Link>
        </li> */}
        {/* <li style={{ ['--animation-order']: 8 }}>
          <Link to="/blog">Blog</Link>
        </li> */}
      </ul>
    </div>
  )
}

export default NavDropdown
