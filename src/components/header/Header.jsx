import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const header = () => {
  return (
    <header>
      <section id='header' className="container header__container">
        <h5>Hola, Mi nombre es</h5>
        <h1>Facundo Barbeito</h1>
        <h5 className="text-light">Front End Developer</h5>
        <CTA />
        <HeaderSocials/>

        <div className="me">
          <img src={ME} alt="me"  className="me-img"/>
        </div>

        <a href="#contact" className='scroll__down'>Desplaza hacia abajo</a>
      </section>
    </header>
  )
}

export default header