import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getCssVariable } from '../../utils/useful.js';
import styles from './styles.module.css';

const NavButton = (props) => {
  const {
    type = 'button',
    className = '',
    ariaLabel = '',
    to,
    isActive = false,
    onClick: clickHandler,
    children,
  } = props;
  const { navButton } = styles;
  const currentColor = isActive
    ? getCssVariable('--active-element-color')
    : getCssVariable('--confirm-background-color');

  if (typeof to !== 'undefined') {
    return (
      <Link className={`${navButton} ${className}`}
        aria-label={ariaLabel}
        onClick={clickHandler}
        to={to}
        style={{ backgroundColor: currentColor }}
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
      style={{ backgroundColor: currentColor }}
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
  isActive: PropTypes.bool,
};

export default NavButton;
