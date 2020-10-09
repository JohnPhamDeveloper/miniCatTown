import React, { useState } from 'react'
import { Link } from 'gatsby'

const ExpandableButton = () => {
  const [isExpanded, setExpanded] = useState(false)

  const toggleExpanded = () => setExpanded(!isExpanded)

  const getToggledItemName = () => {
    return isExpanded
      ? 'btn__expansion__item--enabled'
      : 'btn__expansion__item--disabled'
  }

  return (
    <>
      <button
        type="button"
        onClick={toggleExpanded}
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

export default ExpandableButton
