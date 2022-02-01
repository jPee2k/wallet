import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Triangle } from 'react-loader-spinner';
import { getCssVariable } from '../../helpers/variables.js';

import styles from './spinner.module.css';

export const Spinner = ({ isLoading }) => {
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

Spinner.propTypes = {
  isLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isLoading: state.global.isLoading,
});

export default connect(mapStateToProps, null)(Spinner);
