import React from 'react';
import PropTypes from 'prop-types';
import getInputDetails from './utils';
import './styles.scss';

const Input = ({ variant, handleTyping, value }) => {
  const input = getInputDetails(variant);
  return (
    <div className={`input-container ${input.type}`}>
      <label htmlFor={input.id} className="input-labels">
        {input.label}
      </label>
      <input
        type={input.type}
        placeholder={input.placeholder}
        id={input.id}
        value={value}
        onChange={e => handleTyping(e, variant)}
      />
    </div>
  );
};

Input.propTypes = {
  handleTyping: PropTypes.func.isRequired,
  variant: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Input;
