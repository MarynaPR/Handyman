import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>My Skills</h5>
      <h2>Experience</h2>
      <div className='container experience_container'>
        {/* ----------frontend--------- */}
        <div className='experience_frontend'>
          <h3>What I provide</h3>
          <div className='experience_content'>
            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>A one-stop place</h4>
                <small className='text-light'>for home repairs</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Reliable</h4>
                <small className='text-light'>work</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Always </h4>
                <small className='text-light'>at your service</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Dedicated</h4>
                <small className='text-light'>quality repairs</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Satisfaction</h4>
                <small className='text-light'>guaranteed</small>
              </div>
            </article>


            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Exceptional </h4>
                <small className='text-light'>service</small>
              </div>
            </article>

          </div>
        </div>
        {/* ----------------------Backend--------- */}
        <div className='experience_backend'>
          <h3>What you get</h3>
          <div className='experience_content'>
          

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Quality</h4>
                <small className='text-light'>you deserve</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Worry free</h4>
                <small className='text-light'>remodel</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Repairs</h4>
                <small className='text-light'>handled with care</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Experience</h4>
                <small className='text-light'>beyond expectations</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>Services</h4>
                <small className='text-light'>you can trust</small>
              </div>
            </article>

            <article className='experience_details'>
              <BsPatchCheckFill className='experience_details-icon' />
              <div>
                <h4>A day off</h4>
                <small className='text-light'>I've got this</small>
              </div>
            </article>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience