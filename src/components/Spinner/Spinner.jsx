import React from 'react';
import { Triangle } from 'react-loader-spinner';
import { useSelector } from 'react-redux';

import { getLoadingState } from '../../redux/slices/selectors.js';
import { getCssVariable } from '../../utils/useful.js';

import styles from './styles.module.css';

export const Spinner = () => {
  const isLoading = useSelector(getLoadingState);
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
