import React from 'react'
import './menu.css'
import { BsYoutube, BsInstagram } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const index = () => {
  return (
    <div className='menu'>
      <a className='social' href="https://youtube.com.br" target='_blank'>
        <BsYoutube color='#fff' size={24} />
      </a>
      <a className='social' href="http://instagram.com.br" target='_blank'>
        <BsInstagram color='#fff' size={24} />
      </a>
      <Link className='menu-item' to='/links'>
        Meus links
      </Link>
    </div>
  )
}

export default index
