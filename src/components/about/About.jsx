
import React from 'react'
import './about.css'
import ME from '../../images/c.c.3.jpeg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>More about me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className="about_me-image">
            <img src={ME} alt="about img" />
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about-icon' />
              <h5>Experience</h5>
              <small>45+ years</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about-icon' />
              <h5>Clients</h5>
              <small>worldwide</small>
            </article>


            <article className='about_card'>
              <VscFolderLibrary className='about-icon' />
              <h5>Projects</h5>
              <small>completed</small>
            </article>
          </div>

          <p>I am your do-it-all friendly neighborhood handyman to help you with occasional repairs and renovations.  </p>
          <a href=""></a>
        </div>
      </div>
    </section>
  )
}

export default About