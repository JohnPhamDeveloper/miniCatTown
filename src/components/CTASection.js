import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const imageHeight = '500px'

const imageOption = {
  position: 'absolute',
  width: '100%',
  height: imageHeight,
  zIndex: -5,
}

const imageWrapperStyle = {
  width: '100%',
  height: imageHeight,
  overflow: 'hidden',
  position: 'relative',
}

// In CSS should have 3 categories
// Small which will be 500px
// Medium will be 700px?
// Attach a CSS class called image-small

const CTASection = ({
  fluidImg,
  title,
  description,
  ctaPrimary,
  ctaSecondary,
}) => {
  return (
    <div className="call-to-action-block" style={imageWrapperStyle}>
      <Img className="darken-image" style={imageOption} fluid={fluidImg} />
      <h1>{title}</h1>
      <p>{description}</p>
      <button></button>
    </div>
  )
}

CTASection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fluidImg: PropTypes.shape({
    src: PropTypes.string,
  }).isRequired,
}

export default CTASection
