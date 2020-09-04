import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const CTASection = ({
  fluidImg,
  title,
  description,
  ctaPrimary,
  ctaSecondary,
  icons,
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

      {/* Question */}
      <div className="question">
        <p className="question-text">Want to help our kittens?</p>
      </div>

      <div className="call-to-action__content">
        {/* Section title */}
        <h1 className="call-to-action__title">{title}</h1>

        {/* Section description */}
        <p className="call-to-action__description">{description}</p>

        {/* Optional primary call to action */}
        {ctaPrimary.text !== 'UNDEFINED' ? (
          <a className="button button--important" href={ctaPrimary.link}>
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

        {/* Cat Icons */}
        <div className="icon-container">
          {typeof icons !== 'undefined'
            ? icons.map((icon) => (
                <Img className="icon" fluid={icon.fluid}></Img>
              ))
            : null}
        </div>
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
  ctaPrimary: {
    text: 'UNDEFINED',
    link: 'UNDEFINED',
  },
  ctaSecondary: {
    text: 'UNDEFINED',
    link: 'UNDEFINED',
  },
}

export default CTASection
