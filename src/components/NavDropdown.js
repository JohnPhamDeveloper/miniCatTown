import React from 'react'
import { Link } from 'gatsby'

/* Dropdown Nav Menu */

/* IMPLEMENT DROPDOWN NAV HERE */

/* https://www.bt.com/about/annual-reports/2020summary/#stories */

/*  */

const NavDropdown = ({ enable }) => {
  return (
    <div className="nav-dropdown">
      <ul className="nav-dropdown__list">
        <li>
          <Link to="/blog">Home</Link>
        </li>
        <li>
          <Link to="/blog">About Us</Link>
        </li>
        <li>
          <Link to="/blog">Adoption</Link>
        </li>
        <li>
          <Link to="/blog">Donate</Link>
        </li>
        <li>
          <Link to="/blog">Visit Us</Link>
        </li>
        <li>
          <Link to="/blog">Our Team</Link>
        </li>
        <li>
          <Link to="/blog">Our Community</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavDropdown
