import React from 'react'
import {GiBrokenBottle} from 'react-icons/gi'
import { Link } from 'react-router-dom'
import './error.css'

const Error = (props) => {
  return (
    <div className='container-error'>
      <GiBrokenBottle size={250} />
      <h1>404 - Página não encontrada!</h1>
      <Link to='/'>
        Voltar para a Home
      </Link>
    </div>
  )
}

export default Error
