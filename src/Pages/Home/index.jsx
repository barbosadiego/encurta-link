import React from 'react';
import { FiLink } from 'react-icons/fi';
import './home.css';
import Menu from '../../Components/Menu';
import LinkItem from '../../Components/LinkItem';
import api from '../../Services/api';
import { saveLink } from '../../Services/storedLinks';

const Home = () => {
  const [link, setLink] = React.useState('');
  const [showModal, setShowModal] = React.useState(false);
  const [data, setData] = React.useState({});

  async function handleShortLink() {
    try {
      const response = await api.post('/shorten', {
        long_url: link,
      });
      setData(response.data);
      setShowModal(true);
      saveLink('@encurtaLink', response.data)
      setLink('');
    } catch (error) {
      alert('Insira um link válido.');
      setLink('');
    }
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
      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} content={data} />
      )}
    </section>
  );
};

export default Home;
