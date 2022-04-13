import React from 'react';
import { FiArrowLeft, FiLink, FiTrash } from 'react-icons/fi';
import './links.css';
import { Link } from 'react-router-dom';
import { getLinksSave, deleteLink } from '../../Services/storedLinks';
import LinkItem from '../../Components/LinkItem';

const Links = (props) => {
  const [myLinks, setMyLinks] = React.useState([]);
  const [data, setData] = React.useState({});
  const [showModal, setShowModal] = React.useState(false);
  const [emptyList, setEmptyList] = React.useState(false);

  React.useEffect(() => {
    function getLink() {
      const result = getLinksSave('@encurtaLink');

      if (result.length === 0) {
        setEmptyList(true);
      }

      setMyLinks(result);
    }

    getLink();
  }, []);

  function handleOpenLink(link) {
    setData(link);
    setShowModal(true);
  }

  function handleDelete(id) {
    const result = deleteLink(myLinks, id);

    if (result.length === 0) {
      setEmptyList(true);
    }

    setMyLinks(result);
  }

  return (
    <section className="links-container">
      <div className="links-header">
        <Link to="/">
          <FiArrowLeft size={38} color="#fff" />
        </Link>
        <h1>Meus links</h1>
      </div>

      {emptyList && (
        <div className='links-item'>
          <h2 className='empty-text'>Sua lista está vazia...</h2>
        </div>
      )}

      {myLinks.map((link) => (
        <div key={link.id} className="links-item">
          <button className="link" onClick={() => handleOpenLink(link)}>
            <FiLink size={18} color={18} />
            {link.long_url}
          </button>
          <button className="link-delete" onClick={() => handleDelete(link.id)}>
            <FiTrash size={24} color="#ff5454" />
          </button>
        </div>
      ))}

      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} content={data} />
      )}
    </section>
  );
};

export default Links;
