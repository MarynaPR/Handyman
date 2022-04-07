import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { AiFillInstagram } from 'react-icons/ai'

function HeaderSocials() {
    return (
        <div className='header_socials'>
            <a href="https:linkedin.com" targer="_blank"><BsLinkedin/></a>
            <a href="https:github.com" targer="_blank"><BsGithub/></a>
            <a href="https:instagram.com" targer="_blank"><AiFillInstagram/></a>
        </div>
    )
}

export default HeaderSocials