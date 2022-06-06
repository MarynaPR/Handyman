import React from 'react'
import './footer.css'
// import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
// import { IoLogoTwitter } from 'react-icons/io'

const footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>1 - 8 0 0 - A n a t o l i i</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer_socials">
        {/* <a href=" https://facebook.com"><FaFacebookF /></a> */}
        {/* <a href=" https://twitter.com"><IoLogoTwitter /></a> */}
        <a href="https://www.instagram.com/1800anatolii/"><FiInstagram /></a>
      </div>
      <div className="footer_copyright">
        <small>&copy; 1800anatolii. All rights reserved 2022</small>
      </div>
    </footer>
  )
}

export default footer