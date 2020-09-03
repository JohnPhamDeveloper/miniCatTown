import React from 'react'
// import './CTASection.scss'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

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
    <div className="call-to-action">
      {/* Section background image */}
      <div className="call-to-action__background-image-wrapper">
        <Img
          className="call-to-action__background-image darken-image"
          fluid={fluidImg}
        />
      </div>

      <div className="call-to-action__content">
        {/* Section title */}
        <h2 className="call-to-action__title">{title}</h2>

        {/* Section description */}
        <p className="call-to-action__description">{description}</p>

        {/* Optional primary call to action */}
        {ctaPrimary.text !== 'UNDEFINED' ? (
          <a className="button" href={ctaPrimary.link}>
            {ctaPrimary.text}
          </a>
        ) : null}

        {/* optional secondary call to action */}
        {ctaSecondary.text !== 'UNDEFINED' ? (
          <a
            className="button"
            href={ctaSecondary.link}
            target="_blank"
            rel="noreferrer"
          >
            {ctaSecondary.text}
          </a>
        ) : null}
      </div>
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
