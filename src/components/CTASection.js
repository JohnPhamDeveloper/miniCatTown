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
      {/* Section background image */}
      <Img className="darken-image" style={imageOption} fluid={fluidImg} />

      {/* Section title */}
      <h1>{title}</h1>

      {/* Section description */}
      <p>{description}</p>

      {/* Optional primary call to action */}
      {ctaPrimary.text !== 'UNDEFINED' ? (
        <a href={ctaPrimary.link}>{ctaPrimary.text}</a>
      ) : null}

      {/* optional secondary call to action */}
      {ctaSecondary.text !== 'UNDEFINED' ? (
        <a href={ctaSecondary.link} target="_blank">
          {ctaSecondary.text}
        </a>
      ) : null}
    </div>
  )
}

CTASection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  fluidImg: PropTypes.shape({
    src: PropTypes.string,
  }).isRequired,
  ctaPrimary: PropTypes.shape({
    text: PropTypes.string,
    link: PropTypes.string,
  }),
  ctaSecondary: PropTypes.shape({
    text: PropTypes.string,
    link: PropTypes.string,
  }),
}

CTASection.defaultProps = {
  ctaPrimary: PropTypes.shape({
    text: 'UNDEFINED',
    link: 'UNDEFINED',
  }),
  ctaSecondary: PropTypes.shape({
    text: 'UNDEFINED',
    link: 'UNDEFINED',
  }),
}

export default CTASection
