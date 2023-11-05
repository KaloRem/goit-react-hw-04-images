import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Modal.module.css'

const modalRoot = document.querySelector('#modal-root'); // Added to index.html

const Modal = ({ largeImageURL, tags, onClose }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'visible';
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.target.nodeName !== 'IMG') {
      onClose();
    }
  };

    return createPortal(
      <div className={ styles.overlay } onClick={handleBackdropClick}>
        <section className={ styles.overlay }>
          <img src={largeImageURL} alt={tags} />
        </section>
      </div>,
      modalRoot // portal on [6];
    );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;