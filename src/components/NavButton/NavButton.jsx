import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const NavButton = ({ type = 'button', ariaLabel, className = '', onClick: clickHandler, children }) => {
  const { navButton } = styles;
  return (
    <button className={`${navButton} ${className}`} type={type} aria-label={ariaLabel} onClick={clickHandler}>
      {children}
    </button>
  );
};

NavButton.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  ariaLabel: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default NavButton;
