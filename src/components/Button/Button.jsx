import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.scss';

const Button = ({ children, type = 'button', className = '', disabled = false, onClick: clickHandler }) => (
  <button className={`${styles.button} ${className}`.trim()} type={type} disabled={disabled} onClick={clickHandler}>
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.any,
  onClick: PropTypes.func,
};

export default Button;
