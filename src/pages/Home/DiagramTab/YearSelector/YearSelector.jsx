import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Field } from 'formik';

import styles from './styles.module.scss';

const YearSelector = ({ name = '', options = [] }) => {
  const [isFocus, setFocus] = useState(false);

  const clickHandler = () => {
    setFocus((preVal) => !preVal);
  };

  const { label, select, focus, errorMessage } = styles;
  return (
    <label className={label}>
      <Field component="select" name={name}
        className={`${select} ${isFocus ? focus : ''}`.trim()}
        onClick={clickHandler}
        onBlur={() => setFocus(false)}
      >
        <option value="">Year</option>
        {options.map((value) => (
          <option key={value} value={value}>{value}</option>
        ))}
      </Field>
      <ErrorMessage className={errorMessage} name={name} component="span"/>
    </label>
  );
};

YearSelector.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default YearSelector;
