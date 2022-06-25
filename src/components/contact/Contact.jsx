import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'

const contact = () => {
  return (
    <section id='contact'>
      <h2>Contactame</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>facundo.barbeito17@gmail.com</h5>
            <a href="mailto:facundo.barbeito17@gmail.com" target="_blank">Enviame un Mail</a>
          </article>

        </div>
        <form action="">
          <input type="text" name='name' placeholder='Tu Nombre Completo' required />
          <input type="email" name='email' placeholder='Tu Email' required/>
          <textarea name="message" rows="7" placeholder='Tu Mensaje' required></textarea>
          <button type='submite' className='btn btn-primary'>Enviar Mensaje</button>
        </form>
      </div>
    </section>
  )
}

export default contact