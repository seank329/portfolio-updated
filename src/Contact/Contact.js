import React from 'react'
import './contact.css'

export default function Contact(){

    return(
        <section className='Contact'>
            <nav className='Email area'><h4><a href="mailto:seankamran@gmail.com">Email</a></h4></nav>
            <nav className='LinkedIn area'><h4><a href='https://www.linkedin.com/in/sean-cooper-20799a185/' target='_blank' rel="noopener noreferrer">LinkedIn</a></h4></nav>
            <nav className='Github area'><h4><a href='https://github.com/seank329/' target='_blank' rel="noopener noreferrer">Github</a></h4></nav>
        </section>
    )
}