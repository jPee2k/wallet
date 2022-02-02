import React from 'react';
import { ErrorMessage, Field } from 'formik';
import PropTypes from 'prop-types';

const Input = ({ name, ...props }) => (
  <label>
    <Field {...props} name={name}/>
    <ErrorMessage name={name} component="span"/>
  </label>
);

Input.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Input;
