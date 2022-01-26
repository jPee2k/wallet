import React from 'react';
import { Triangle } from 'react-loader-spinner';
import { getCssVariable } from '../../helpers/variables.js';
import styles from './Spinner.module.css';

const Spinner = () => {
  const spinnerColor = getCssVariable('--active-element-color');

  return (
    <Triangle
      wrapperClass={styles.spinner}
      color={spinnerColor}
      visible={false}
      ariaLabel="loading..."
    />
  );
};

export default Spinner;
