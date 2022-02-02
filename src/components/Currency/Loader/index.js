import React from 'react';
import { Rings } from 'react-loader-spinner';
import { getCssVariable } from '../../../utils/variables.js';
import styles from './styles.module.css';

const Loader = () => {
  const spinnerColor = getCssVariable('--active-element-color');

  return (
    <Rings
      wrapperClass={styles['Currency-Loader']}
      heigth={90}
      width={90}
      color={spinnerColor}
      ariaLabel='loading...'
    />
  );
};

export default Loader;
