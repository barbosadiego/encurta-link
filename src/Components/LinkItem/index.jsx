import React from 'react'
import './link-item.css'
import {FiX, FiClipboard} from 'react-icons/fi'

const LinkItem = ({closeModal}) => {
  return (
    <div className='modal-container'>

      <div className='modal-header'>
        <h2>Link Encurtado</h2>
        <button onClick={closeModal}>
          <FiX size={28} color='#000' />
        </button>
      </div>

      <span>
        https://www.google.com.br
      </span>

      <button className='modal-link'>
        https://bit.ly/328974328974
        <FiClipboard size={28} color='#fff' />
      </button>

    </div>
  )
}

export default LinkItem
