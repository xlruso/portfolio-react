import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'
import {FaGithub} from 'react-icons/fa'
import {RiLiveLine} from 'react-icons/ri'



const data = [
  {
    id: 1,
    image: IMG1,
    title: 'E-Commerce estático',
    github: 'https://github.com/xlruso/ecommerce-estatico/tree/main/ecommerce',
    demo: 'Link del host cuando lo tenga',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Titulo Proyecto',
    github: 'https://github.com',
    demo: 'Link del host cuando lo tenga',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Titulo Proyecto',
    github: 'https://github.com',
    demo: 'Link del host cuando lo tenga',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Titulo Proyecto',
    github: 'https://github.com',
    demo: 'Link del host cuando lo tenga',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Titulo Proyecto',
    github: 'https://github.com',
    demo: 'Link del host cuando lo tenga',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Titulo Proyecto',
    github: 'https://github.com',
    demo: 'Link del host cuando lo tenga',
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mis proyectos personales</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
          <div className='portfolio_item-image'>
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
          <a href={github} className='btn' target='_blank'><FaGithub/> GitHub</a>
          <a href={demo} className='btn btn-primary' target='_blank'><RiLiveLine/> Live Demo</a>
          </div>
        </article>
            )
          }
          )
        }
      </div>
    </section>
  )
}

export default Portfolio