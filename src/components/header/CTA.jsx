import React from 'react'
import CV from '../../assets/CV-Facundo-Barbeito.pdf'
import {BsDownload} from 'react-icons/bs'
import {BiMessageSquareDetail} from 'react-icons/bi'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'><BsDownload/> Descargar CV</a>
        <a href="#contact" className='btn btn-primary'><BiMessageSquareDetail/> Contacto</a>
    </div>
  )
}

export default CTA