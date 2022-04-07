import React from 'react'
import './portfolio.css'
import {AiFillInstagram} from 'react-icons/ai'
import fence from '../../images/fence.jpg'
import birdhouse1 from '../../images/birdhouse1.jpg'
import birdhouse2 from '../../images/birdhouse2.jpg'
import deck from '../../images/deck.jpg'
import tile from '../../images/tile.jpg'
import paint from '../../images/paint.jpg'

const data = [
  {
    id: 1,
    image: fence,
    title: "Fence installation and paint",
    instagram: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: birdhouse1,
    title: "Birdhouse",
    instagram: 'https://instagram.com',
    demo: 'https://instagram.com'
  },
  {
    id: 3,
    image: birdhouse2,
    title: "Birdhouse",
    instagram: 'https://instagram.com',
    demo: 'https://instagram.com'
  },
  {
    id: 4,
    image: deck,
    title: "Deck repair, paint, and tile",
    instagram: 'https://instagram.com',
    demo: 'https://instagram.com'
  },
  {
    id: 5,
    image: paint,
    title: "Indoor painting project",
    instagram: 'https://instagram.com',
    demo: 'https://instagram.com'
  },
  {
    id: 6,
    image: tile,
    title: "Kitchen tile and shelving",
    instagram: 'https://instagram.com',
    demo: 'https://instagram.com'
  }
]

const portfolio = () => {

  return (
    <section id='portfolio'>
      <h5>My recent work</h5>
      <h2>Projects</h2>
      <div className='container portfolio_container'>
        {
          data.map(({ id, image, title, instagram, demo }) => {
            return (

              <article key={id} className='portfolio_item'>
                <div className='portfolio_item-image'>
                  <img src={image} alt={title}></img>
                </div>
                <h3>{title}</h3>
                <div className='portfolio_item-cta'>
                  <a href={instagram} className='btn'>Live Demo</a>
                  {/* <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'> Demo</a> */}
                  <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'><AiFillInstagram /></a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default portfolio