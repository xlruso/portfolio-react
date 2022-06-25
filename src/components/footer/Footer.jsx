import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Facundo Barbeito</a>

      <ul className='permalinks'>
        <li><a href="#">Inicio</a></li>
        <li><a href="#about">Sobre Mi</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/facundo-barbeito/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/xlruso" target="_blank"><FaGithub/></a>
      </div>

      <div className="footer__copyright">
        <small>Copyright © Todos los derechos reservados</small>
      </div>
    </footer>
  )
}

export default Footer