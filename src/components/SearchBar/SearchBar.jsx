import { useState } from 'react';
import { MdSearch } from 'react-icons/md';
import PropTypes from 'prop-types';
import styles from './Searchbar.module.css'

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(inputValue);
    setInputValue('');
  };

    return (
      <header>
        <form className={styles.form} onSubmit={handleSubmit}>
          <button className={styles.button}>
            <MdSearch style={{ width: 25, height: 25 }} />
          </button>
          <input className={styles.input}
            name="searchName"
            type="text"
            id="search"
            onChange={handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchBar;