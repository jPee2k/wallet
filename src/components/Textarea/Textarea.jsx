import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Field } from 'formik';
import styles from './styles.module.css';

const Textarea = ({ name, className = '', ...props }) => {
  const { label, textarea, errorMessage } = styles;

  return (
    <label className={label}>
      <Field className={`${textarea} ${className}`} component="textarea" name={name} {...props}/>
      <ErrorMessage className={errorMessage} name={name} component="span"/>
    </label>
  );
};

Textarea.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Textarea;
