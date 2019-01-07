import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Button = ({ children, onClick, variant }) => (
  <button onClick={onClick} type="button" className={`button ${variant}`}>
    {children}
  </button>
);

Button.defaultProps = {
  variant: 'classic',
};

Button.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  variant: PropTypes.string,
};

export default Button;
