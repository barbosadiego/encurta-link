import React from 'react';
import { FiLink } from 'react-icons/fi';
import './home.css';
import Menu from '../../Components/Menu';
import LinkItem from '../../Components/LinkItem';

const Home = () => {
  const [link, setLink] = React.useState('');
  const [showModal, setShowModal] = React.useState(false);

  function handleShortLink() {
    setShowModal(true);
  }

  return (
    <section className="container-home">
      <div className="logo">
        <FiLink size={180} />
        <h1>Encurta Link</h1>
        <span>Cole seu link para encurtar</span>
      </div>
      <div className="area-input">
        <div>
          <FiLink />
          <input
            type="text"
            placeholder="Cole seu link aqui"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
        </div>
        <button onClick={handleShortLink}>Encurtar Link</button>
      </div>
      <Menu />
      {showModal && <LinkItem closeModal={() => setShowModal(false)} />}
    </section>
  );
};

export default Home;
