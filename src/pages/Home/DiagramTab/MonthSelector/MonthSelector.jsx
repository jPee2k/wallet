import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Field } from 'formik';

import styles from './styles.module.scss';

const MonthSelector = ({ name = '', options = [] }) => {
  const [isFocus, setFocus] = useState(false);

  const clickHandler = () => {
    setFocus((preVal) => !preVal);
  };

  const { label, select, reset, focus, errorMessage } = styles;
  return (
    <label className={label}>
      <Field component="select" name={name}
        className={`${select} ${isFocus ? focus : ''}`.trim()}
        onClick={clickHandler}
        onBlur={() => setFocus(false)}
      >
        <option className={reset} value="">Month</option>
        {options.map(({ name: month, value }) => (
          <option key={`${month}-${value}`} value={value}>{month}</option>
        ))}
      </Field>
      <ErrorMessage className={errorMessage} name={name} component="span"/>
    </label>
  );
};

MonthSelector.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MonthSelector;
