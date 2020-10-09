import React from 'react'

const CTAMultipleLayout = ({ children }) => {
  return (
    <div className="cta-multiple-layout">
      <div className="border-top"></div>
      <h1 className="cta-multiple-layout__title">How You Can Help</h1>
      <div className="cta-multiple-layout__wrapper">{children}</div>
      <div className="border-bottom"></div>
    </div>
  )
}

export default CTAMultipleLayout
