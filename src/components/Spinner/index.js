import React from 'react';
import PropTypes from 'prop-types';
import { Triangle } from 'react-loader-spinner';
import { getCssVariable } from '../../helpers/variables.js';
import styles from './styles.module.css';

export const Spinner = () => {
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

Spinner.propTypes = {
  isLoading: PropTypes.bool,
};

export default Spinner;
