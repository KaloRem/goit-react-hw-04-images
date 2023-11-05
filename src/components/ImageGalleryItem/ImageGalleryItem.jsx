import { useState } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';
import styles from './ImageGalleryItem.module.css'

const ImageItem = ({ image }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(prevModal => !prevModal);
  };

  return (
    <>
      <div className={styles.item}>
        <img className={styles.img}
          src={image.webformatURL}
          alt={image.tags}
          onClick={toggleModal}
        />
        {showModal && (
          <Modal
            largeImageURL={image.largeImageURL}
            tags={image.tags}
            onClose={toggleModal}
          />
        )}
      </div>
    </>
  );
}

ImageItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageItem;