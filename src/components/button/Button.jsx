import React from 'react';
import PropTypes from 'prop-types';
import styles from './button.module.scss';

const Button = ({ children, type = 'button', classes = '', disabled = false }) => (
  <button className={`${classes} ${styles.button}`} type={type} disabled={disabled}>
    {children}
  </button>
);

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  classes: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.any,
};

export default Button;
