import React, { useState } from 'react'

const Footer = () => {
  const [toggleOpenHours, setToggleOpenHours] = useState(false)

  return (
    <footer className="footer">
      <p className="footer__about">
        Mini Cat Town’s adoption lounge is OPEN as of Friday, September 4th,
        2020 following all state and county regulations for social distancing.
        We encourage visitors to fill out our waiver under the “Visit Us” page
        prior to visiting the kittens.
        <br />
        <br />
        If you are interested in adopting, please fill out an application and
        wait for approval to schedule an appointment with us. All unapproved
        applicants are subject to admission fees.
      </p>

      <nav className="footer__nav">
        <ul className="footer__nav__list">
          <li className="footer__nav__item">
            {/* Opening Hour Dropdown */}
            <button
              type="button"
              className="footer__nav__item__button"
              onClick={() => setToggleOpenHours(!toggleOpenHours)}
            >
              <p>Opening Hours</p>
              {/* Arrow SVG */}
              <svg
                className="footer__nav__item__arrow"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 451.846 451.847"
              >
                <g>
                  <path d="M345.441,248.292L151.154,442.573c-12.359,12.365-32.397,12.365-44.75,0c-12.354-12.354-12.354-32.391,0-44.744   L278.318,225.92L106.409,54.017c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.391-12.359,44.75,0l194.287,194.284   c6.177,6.18,9.262,14.271,9.262,22.366C354.708,234.018,351.617,242.115,345.441,248.292z" />
                </g>
              </svg>
            </button>
          </li>
          {/* Opening Hour List */}
          <div
            className={`open-time${
              toggleOpenHours ? ' open-time--is-active' : ''
            }`}
          >
            {/* <h1 className="open-time__title">Opening Hours</h1> */}
            <div className="open-time__block">
              <p className="open-time__day">Monday</p>
              <p className="open-time__hours">12:00am - 12:00pm</p>
            </div>
            <div className="open-time__block">
              <p className="open-time__day">Tuesday</p>
              <p className="open-time__hours">12:00am - 12:00pm</p>
            </div>
            <div className="open-time__block">
              <p className="open-time__day">Tuesday</p>
              <p className="open-time__hours">12:00am - 12:00pm</p>
            </div>
            <div className="open-time__block">
              <p className="open-time__day">Tuesday</p>
              <p className="open-time__hours">12:00am - 12:00pm</p>
            </div>
            <div className="open-time__block">
              <p className="open-time__day">Tuesday</p>
              <p className="open-time__hours">12:00am - 12:00pm</p>
            </div>
            <div className="open-time__block">
              <p className="open-time__day">Thursday</p>
              <p className="open-time__hours">12:00am - 12:00pm</p>
            </div>
          </div>
          <li className="footer__nav__item">
            <button className="footer__nav__item__button">
              Mini Cat Town Privacy Kit
            </button>
          </li>
          <li className="footer__nav__item">
            <button className="footer__nav__item__button">
              Terms of Service
            </button>
          </li>
          <li className="footer__nav__item">
            <button className="footer__nav__item__button">
              Privacy Policy
            </button>
          </li>
        </ul>
      </nav>
      {/* Icons made by
      <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
        Freepik
      </a>
      from
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>
      <div>
        Icons made by
        <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
          Freepik
        </a>
        from
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </div> */}
    </footer>
  )
}

export default Footer
