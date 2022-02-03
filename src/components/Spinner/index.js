import React from 'react';
import { Triangle } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { getCssVariable } from '../../utils/variables.js';
import styles from './styles.module.css';

export const Spinner = () => {
  const isLoading = useSelector((state) => state.loading.global.isLoading);
  const spinnerColor = getCssVariable('--active-element-color');

  return (
    <Triangle
      wrapperClass={styles.spinner}
      color={spinnerColor}
      visible={isLoading}
      ariaLabel="loading..."
    />
  );
};

export default Spinner;
