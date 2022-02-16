import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Field } from 'formik';
import { ReactComponent as Eye } from '../../assets/images/icons/eye.svg';
import { ReactComponent as EyeBlocked } from '../../assets/images/icons/eye-blocked.svg';
import styles from './styles.module.css';

const InputPassword = ({ name, value, ...props }) => {
  const [inputType, setInputType] = useState('password');

  const toggleVisibilityHandler = () => {
    inputType === 'password' ? setInputType('text') : setInputType('password');
  };

  const { input, label, wrapper, errorMessage, eyeBtn } = styles;
  const button = (
    <button className={eyeBtn} type="button" onClick={toggleVisibilityHandler}>
      {inputType === 'password' ? <EyeBlocked/> : <Eye/>}
    </button>
  );

  return (
    <label className={label}>
      <span className={wrapper}>
        <Field className={input} {...props} type={inputType} name={name}/>
        {value.length ? button : null}
      </span>
      <ErrorMessage className={errorMessage} name={name} component="span"/>
    </label>
  );
};

InputPassword.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputPassword;
