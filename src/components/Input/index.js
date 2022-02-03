import React from 'react';
import { ErrorMessage, Field } from 'formik';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const { label, input, errorMessage } = styles;

const Input = ({ name, ...props }) => (
  <label className={label}>
    <Field className={input} {...props} name={name}/>
    <ErrorMessage className={errorMessage} name={name} component="span"/>
  </label>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Input;
