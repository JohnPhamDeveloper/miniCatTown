import React, { useRef, useEffect } from 'react'
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock'
import { Link } from 'gatsby'
import ExpandableButton from './ExpandableButton'

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
      className={`nav-dropdown-mobile ${
        isEnabled ? 'nav-dropdown-mobile--active' : ''
      }`}
      ref={parentRef}
    >
      <ul className="nav-dropdown-mobile__list">
        <li style={{ ['--animation-order']: 1 }}>
          <Link to="/blog">Adoption</Link>
        </li>
        <li style={{ ['--animation-order']: 2 }}>
          <Link to="/blog">Donate</Link>
        </li>
        <li style={{ ['--animation-order']: 3 }}>
          <Link to="/blog">Visit Us</Link>
        </li>
        <li
          className="nav-dropdown-mobile__item"
          style={{ ['--animation-order']: 4 }}
        >
          <ExpandableButton isBigScreen={true} />
        </li>
      </ul>
    </div>
  )
}

export default NavDropdown
