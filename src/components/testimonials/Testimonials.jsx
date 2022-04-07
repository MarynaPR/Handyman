import React from 'react'
import './testimonials.css'
import AVTR1 from '../../images/me4.png'
import {FcBusinesswoman} from 'react-icons/fc'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: "Susan",
    review: "Extremely professional and personable. Anatolii fixed all of my items and took the initiative to complete a repair that I hadn’t thought of. Would definitely hire Anatolii again. Great experience and very satisfied!"
  },
  {
    avatar: AVTR1,
    name: "Laura",
    review: "Very happy with my new kitchen backsplash!"
  },
  {
    avatar: AVTR1,
    name: "Emmy",
    review: "My fence looks fantastic! Very happy and will call Anatolii again"
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials_container'
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
                <div className='client_avatar'>
                  <img src={avatar} alt=""/>
                    
                </div>
                <h5 className='client_name'>{name}</h5>
                <small className='client_review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>

  )
}

export default Testimonials