import React from 'react'
import './services.css'
import { GoCheck } from 'react-icons/go'

const services = () => {
  return (
    <section id='services'>
      <h5>What I offer</h5>
      <h2>Services</h2>

      <div className='container services_container'>
        {/* _____________UI_________________ */}
        <article className='service'>
          <div className='service_head'>
            <h3>Indoor</h3>
          </div>
          <ul className='service_list'>
            <li>
              <GoCheck className='service_list-icon' />
              <p>Tile installation</p>
            </li>
            <li>
              <GoCheck className='service_list-icon' />
              <p>Drywall and plaster repairs</p>
            </li>
            <li>
              <GoCheck className='service_list-icon' />
              <p>Small bathroom and kitchen repairs</p>
            </li>
            <li>
              <GoCheck className='service_list-icon' />
              <p>Bath fans, range hoods, venting</p>
            </li>
            <li>
              <GoCheck className='service_list-icon' />
              <p>Paint</p>
            </li>
          </ul>
        </article>
        {/* _____________Web Dev_________________ */}
        <article className='service'>
          <div className='service_head'>
            <h3>Outdoor</h3>
          </div>
          <ul className='service_list'>
            <li>
              <GoCheck className='service_list-icon' />
              <p>Garden Shed</p>
            </li>
            <li>
              <GoCheck className='service_list-icon' />
              <p>Storm and screen replacements</p>
            </li>
            <li>
              <GoCheck className='service_list-icon' />
              <p>Deck repairs</p>
            </li>
            <li>
              <GoCheck className='service_list-icon' />
              <p>Fence repairs</p>
            </li>
            <li>
              <GoCheck className='service_list-icon' />
              <p>Siding repairs</p>
            </li>
          </ul>
        </article>
        {/*    {/* _____________Content_________________ */}
        <article className='service'>
          <div className='service_head'>
            <h3>Miscellaneous</h3>
          </div>
          <ul className='service_list'>
            <li>
              <GoCheck className='service_list-icon' />
              <p>Door replacement and repair</p>
            </li>
            <li>
              <GoCheck className='service_list-icon' />
              <p>Custom birdhouse or doghouse</p>
            </li>
            <li>
              <GoCheck className='service_list-icon' />
              <p>Minor repairs and tune up</p>
            </li>
            <li>
              <GoCheck className='service_list-icon' />
              <p>Fixture replacement</p>
            </li>
            <li>
              <GoCheck className='service_list-icon' />
              <p>New mailbox or number installation</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services