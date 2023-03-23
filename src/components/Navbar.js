import React from 'react'
import logo from '../images/logo.svg'
import { pageLinks, socialLinks } from '../data'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />

          <Button />
          <div id="nav-toggle-button-item" className="nav-toggle-item">
            <div id="nav-toggle-ul" className="nav-toggle-ul-design">
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Services</li>
                <li>Tours</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- left this comment on purpose --> */}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((pageInfo) => {
            return (
              <li key={pageInfo.id}>
                <a href={pageInfo.href} className="nav-link">
                  {pageInfo.text}
                </a>
              </li>
            )
          })}
        </ul>
        <ul className="nav-icons">
          {socialLinks.map((socialinfo) => {
            const { id, href, icon } = socialinfo
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={icon}></i>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
