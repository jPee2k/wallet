import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Field } from 'formik';

const YearSelector = ({ name = '', options = [] }) => {
  return (
    <label>
      <Field component="select" name={name}>
        <option value="">Year</option>
        {options.map((value) => (
          <option key={value} value={value}>{value}</option>
        ))}
      </Field>
      <ErrorMessage name={name} component="span"/>
    </label>
  );
};

YearSelector.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default YearSelector;
