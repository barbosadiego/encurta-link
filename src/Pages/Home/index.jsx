import React from 'react'
import {FiLink} from 'react-icons/fi'
import './home.css'
import Menu from '../../Components/Menu'

const Home = (props) => {
  return (
    <section className='container-home'>
      <div className='logo'>
        <FiLink size={180}/>
        <h1>Encurta Link</h1>
        <span>Cole seu link para encurtar</span>
      </div>
      <div className='area-input'>
        <div>
          <FiLink />
          <input type="text" placeholder='Cole seu link aqui'/>
        </div>
        <button>Encurtar Link</button>
      </div>
      <Menu />
    </section>
  )
}

export default Home
