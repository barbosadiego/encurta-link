import React from 'react'
import {FiArrowLeft, FiLink, FiTrash} from 'react-icons/fi'
import './links.css'
import { Link } from 'react-router-dom'

const Links = (props) => {
  return (
    <section className='links-container'>

      <div className='links-header'>
        <Link to='/'>
          <FiArrowLeft size={38} color='#fff' />
        </Link>
        <h1>Meus links</h1>
      </div>

      <div className='links-item'>
        <button className='link'>
          <FiLink size={18} color={18} />
          https://google.com.br
        </button>
        <button className='link-delete'>
          <FiTrash size={24} color='#ff5454' />
        </button>
      </div>

      <div className='links-item'>
        <button className='link'>
          <FiLink size={18} color={18} />
          https://google.com.br
        </button>
        <button className='link-delete'>
          <FiTrash size={24} color='#ff5454' />
        </button>
      </div>

    </section>
  )
}

export default Links
