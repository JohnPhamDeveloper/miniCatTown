import React, { useState } from 'react'
import { Link } from 'gatsby'

const ExpandableButton = ({ isBigScreen }) => {
  const [isExpanded, setExpanded] = useState(false)

  const toggleExpanded = (val) => {
    console.log(val)
    setExpanded(val)
  }

  const getToggledItemName = () => {
    return isExpanded
      ? 'btn__expansion__item--enabled'
      : 'btn__expansion__item--disabled'
  }

  const renderBasedOnScreen = () => {
    if (isBigScreen) {
      return (
        <>
          <button
            type="button"
            onMouseEnter={() => toggleExpanded(true)}
            onMouseLeave={() => toggleExpanded(false)}
            onClick={() => toggleExpanded(!isExpanded)}
            className={`btn__expansion`}
          >
            About Us
          </button>
          <div className={`btn__expansion__item ${getToggledItemName()}`}>
            <Link to="/blog">Our Background</Link>
            <Link to="/blog">Our Team</Link>
            <Link to="/blog">Our Community</Link>
          </div>
        </>
      )
    }

    return (
      <>
        <button
          type="button"
          onClick={() => toggleExpanded(!isExpanded)}
          className={`btn__expansion`}
        >
          About Us
        </button>
        <div className={`btn__expansion__item ${getToggledItemName()}`}>
          <Link to="/blog">Our Background</Link>
          <Link to="/blog">Our team</Link>
          <Link to="/blog">Our Community</Link>
        </div>
      </>
    )
  }

  return <>{renderBasedOnScreen()}</>
}

export default ExpandableButton
