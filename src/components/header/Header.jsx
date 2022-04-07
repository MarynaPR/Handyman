import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../images/c.c.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return (
        <header>
            <div className="container header_container">
                <h5>Hello and welcome</h5>
                <h1>I  am  1-800-ANATOLII</h1>
                <h5 className='text-light'>your home improvement professional</h5>
                <CTA></CTA>
                <HeaderSocials></HeaderSocials>
                <div className="me">
                    <img src={ME} alt="me" />
                </div>
                <a href="#contact" className='scroll_down'>scroll down</a>
            </div>
        </header>
    )
}

export default Header