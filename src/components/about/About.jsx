import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Información Adicional</h5>
      <h2>Sobre Mi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>

        </div>

          <div className="about__content">

          <p>¡Hola! Mi nombre es Facundo, soy Desarrollador de Software orientado al Desarrollo Web. Realicé múltiples cursos de programación y actualmente 
            me encuentro estudiando en la Universidad Argentina de la Empresa la Tecnicatura en Desarrollo de Software. <br></br> <br></br>

            Estoy en búsqueda de mi primer trabajo en el ámbito de la programación para continuar desarrollando mis habilidades
            dentro de un ambiente que promueva el trabajo en equipo, la innovación y desafíos constantes.<br></br> <br></br>

             Busco aportar soluciones y mejoras, junto a un gran equipo donde pueda brindar mi compromiso y dedicación al máximo.<br></br> <br></br>
          </p>

          <a href="#contact" className='btn btn-primary'>Contactame</a>
        </div>
      </div>
    </section>
  )
}

export default About