import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Headline = ({ headlineText }) => {
  return (
    <div className="headline">
      <div className="headline-window">
        {/* Window */}
        <svg
          id="Capa_1"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d="m452 452c0-19.364 0-379.049 0-392-17.189 0-374.781 0-392 0v392zm-181-30v-151h36.134c14.458 51.9 59.786 91.061 114.866 96.363v54.637zm151-84.811c-38.424-4.806-70.304-30.967-83.356-66.189h83.356zm-59.815-247.189v95.5h30v-95.5h29.815v151h-89.555c-.289-5.402-.097 1.389-.152-151zm-91.185 0h31.293c.05 154.65-.111 145.306.123 151h-31.416zm-30 0v151h-31.416c.235-5.735.074 1.792.123-151zm-151 0h29.814v95.5h30v-95.5h29.893c-.056 152.717.133 145.671-.152 151h-89.555zm83.356 181c-13.053 35.222-44.933 61.383-83.356 66.189v-66.189zm-83.356 151v-54.637c55.08-5.302 100.408-44.463 114.866-96.363h36.134v151z" />
            <path d="m0 0v512h512v-512zm482 482h-452v-452h452z" />
          </g>
        </svg>
        {/* Gap */}
        <div className="gap" />
        {/* Window */}
        <svg
          id="Capa_1"
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d="m452 452c0-19.364 0-379.049 0-392-17.189 0-374.781 0-392 0v392zm-181-30v-151h36.134c14.458 51.9 59.786 91.061 114.866 96.363v54.637zm151-84.811c-38.424-4.806-70.304-30.967-83.356-66.189h83.356zm-59.815-247.189v95.5h30v-95.5h29.815v151h-89.555c-.289-5.402-.097 1.389-.152-151zm-91.185 0h31.293c.05 154.65-.111 145.306.123 151h-31.416zm-30 0v151h-31.416c.235-5.735.074 1.792.123-151zm-151 0h29.814v95.5h30v-95.5h29.893c-.056 152.717.133 145.671-.152 151h-89.555zm83.356 181c-13.053 35.222-44.933 61.383-83.356 66.189v-66.189zm-83.356 151v-54.637c55.08-5.302 100.408-44.463 114.866-96.363h36.134v151z" />
            <path d="m0 0v512h512v-512zm482 482h-452v-452h452z" />
          </g>
        </svg>
      </div>
      {/* Headline Text */}
      <h1 className="headline-text">{headlineText}</h1>

      {/* Call to action */}
      <Link
        to="/available-kittens"
        className="headline-button button button--primary button--shadow"
      >
        See Our Kittens
      </Link>
    </div>
  )
}

Headline.propTypes = {
  headlineText: PropTypes.string.isRequired,
}

export default Headline
