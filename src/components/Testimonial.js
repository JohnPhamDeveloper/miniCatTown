import React from 'react'
import Img from 'gatsby-image'

const Testimonial = ({ quote, image, name }) => {
  return (
    <div className="testimonial">
      <div className="testimonial__image">
        <Img className="testimonial__image-fluid" fluid={image} />
      </div>
      <div className="testimonial__info">
        <h2>{name}</h2>
      </div>
      <div className="testimonial__quote">
        <p>{quote}</p>
      </div>
    </div>
  )
}

export default Testimonial
