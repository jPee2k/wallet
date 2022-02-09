import React from 'react';
import Datetime from 'react-datetime';
import { ErrorMessage, useField } from 'formik';
import PropTypes from 'prop-types';
import 'react-datetime/css/react-datetime.css';
import styles from '../Input/styles.module.css';

const { label, input, errorMessage } = styles;

const DatePicker = ({ name, ...props }) => {
  const [, meta, helpers] = useField(name);
  const { value } = meta;
  const { setValue } = helpers;

  const inputProps = {
    className: input,
    name,
  };

  const changeHandler = (momentDate) => {
    const isoDateFormat = momentDate.toISOString();
    const date = new Date(isoDateFormat);
    setValue(date);
  };

  return (
    <label className={label}>
      <Datetime initialValue={value} inputProps={inputProps} onChange={changeHandler}
        dateFormat="DD-MM-YYYY"
        timeFormat="HH:mm:ss"
        {...props}
      />
      <ErrorMessage className={errorMessage} name={name} component="span"/>
    </label>
  );
};

DatePicker.propTypes = {
  name: PropTypes.string.isRequired,
};

export default DatePicker;
