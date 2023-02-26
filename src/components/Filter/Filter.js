import PropTypes from 'prop-types';
import css from './Filter.module.css';
import React from 'react';
import { nanoid } from 'nanoid';
export const Filter = ({ onChange }) => {
  const filterId = nanoid();

  return (
    <div className={css.filter}>
      <label htmlFor={filterId}>Find Contact By Name</label>
      <input id={filterId} type="text" name="filter" onChange={onChange} />
    </div>
  );
};

Filter.propTypes = { onChange: PropTypes.func };
