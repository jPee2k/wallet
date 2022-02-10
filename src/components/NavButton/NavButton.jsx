import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const NavButton = ({ type = 'button', ariaLabel = '', className = '', onClick: clickHandler, to, children }) => {
  const { navButton } = styles;

  if (typeof to !== 'undefined') {
    return (
      <Link className={`${navButton} ${className}`}
        aria-label={ariaLabel}
        onClick={clickHandler}
        to={to}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={`${navButton} ${className}`}
      aria-label={ariaLabel}
      onClick={clickHandler}
      type={type}
    >
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
  to: PropTypes.string,
};

export default NavButton;
