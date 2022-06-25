import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>Mi Experiencia</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Front End</h3>
          <div className="experience__content">
            <article className="experience_details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Avanzado</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>CSS</h4>
              <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Bootstrap</h4>
              <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Next JS</h4>
              <small className='text-light'>Aprendiendo</small>
              </div>
            </article>
          </div>
        </div>


        <div className="experience__backend">
        <h3>Back End</h3>
          <div className="experience__content">
            <article className="experience_details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Node JS</h4>
              <small className='text-light'>Aprendiendo</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Firebase</h4>
              <small className='text-light'>Intermedio</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Aprendiendo</small>
              </div>
            </article>
            <article className="experience_details">
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>GraphQL</h4>
              <small className='text-light'>Aprendiendo</small>
              </div>
            </article>
          </div>

        </div>
      </div>
    </section>
  )
}

export default experience