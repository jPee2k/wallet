import React from 'react';
import { Rings } from  'react-loader-spinner';
import { getCssVariable } from '../../../helpers/variables';
import styles from './loader.module.css';

const Loader = () => {
  const spinnerColor = getCssVariable('--active-element-color');

  return (
    <Rings
      wrapperClass={styles['currency-loader']}
      heigth={90}
      width={90}
      color={spinnerColor}
      ariaLabel='loading...'
    />
  );
};

export default Loader;
