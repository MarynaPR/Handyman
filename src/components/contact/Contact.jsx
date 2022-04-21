import React from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
// import { RiMessengerLine } from 'react-icons/ri'
// import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react'
import * as emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            `${process.env.REACT_APP_YOUR_SERVICE_ID}`,
            `${process.env.REACT_APP_YOUR_TEMPLATE_ID}`,
            form.current,
            `${process.env.REACT_APP_YOUR_USER_ID}`)
            .then((result) => {

                alert('email sent!')
            },
                (error) => {
                    alert('error sending email')
                })
        console.log("text", process.env)
        e.target.reset()
    };


    return (
        <section id='contact'>

            <h5>Get in Touch</h5>
            <h2>Contact Me</h2>


            <div className='container contact_container'>
                <div className='contact_options'>
                    <article className="contact_option">
                        <MdOutlineEmail className='contact_option-icon' />
                        <h4>Email</h4>
                        <h5>1800Anatolii@gmail.com</h5>
                        <a href="mailto:1800anatolii@gmail.com" target='_blank'>Send a message</a>
                    </article>

                    {/* <article className="contact_option">
                        <RiMessengerLine className='contact_option-icon' />
                        <h4>Messanger</h4>
                        <h5>tutorials</h5>
                        <a href="https://m.me/yourfbnameID" target='_blank'>Send a message</a>
                    </article> */}

                    {/* <article className="contact_option">
                        <BsWhatsapp className='contact_option-icon' />
                        <h4>WhatApp</h4>
                        <h5>+1-800-Anatolii</h5>
                        <a href="https://api.whatsapp.com/send?phone=+10016081111111" target='_blank'>Send a message</a>
                    </article> */}

                </div>

                <form
                    ref={form}
                    onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type='email' name='email' placeholder='Your Email' required />
                    <textarea name='message' placeholder='Your Message' rows='7' required />
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>

        </section>
    )
}

export default Contact