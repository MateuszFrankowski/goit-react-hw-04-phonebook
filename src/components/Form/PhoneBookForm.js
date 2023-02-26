import PropTypes from 'prop-types';
import css from './PhoneBookForm.module.css';

import { nanoid } from 'nanoid';
import React, { useState } from 'react';
export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const nameInputId = nanoid();
  const telInputId = nanoid();

  const handleChange = evt => {
    const { name, value } = evt.target;
    if (name === 'name') setName(value);
    if (name === 'number') setNumber(value);
  };
  const handleSubmit = evt => {
    const phonebookID = nanoid();
    evt.preventDefault();

    onSubmit(phonebookID, name, number);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.form} style={{}}>
        <label htmlFor={nameInputId}>Name</label>
        <input
          id={nameInputId}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor={telInputId}>Number</label>
        <input
          id={telInputId}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />

        <button type="submit">Add contact</button>
      </form>
    </>
  );
};

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
