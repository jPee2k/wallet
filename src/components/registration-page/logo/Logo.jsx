import React from 'react';
import PropTypes from 'prop-types';
import styles from './Logo.module.css';

const { wrapper, name, description } = styles;

const Logo = ({ className }) => (
  <div className={`${wrapper} ${className}`}>
    <p className={name}>cyber_wallet</p>
    <p className={description}>team react project</p>
  </div>
);

Logo.propTypes = {
  className: PropTypes.string,
};

export default Logo;
