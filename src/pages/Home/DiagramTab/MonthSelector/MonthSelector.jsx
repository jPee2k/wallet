import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Field } from 'formik';

const MonthSelector = ({ name = '', options = [] }) => {
  return (
    <label>
      <Field component="select" name={name}>
        <option value="">Month</option>
        {options.map(({ name: month, value }) => (
          <option key={`${month}-${value}`} value={value}>{month}</option>
        ))}
      </Field>
      <ErrorMessage name={name} component="span"/>
    </label>
  );
};

MonthSelector.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MonthSelector;
