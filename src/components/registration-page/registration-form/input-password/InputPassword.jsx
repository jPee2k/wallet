import React, { useState } from 'react';
import PropTypes from 'prop-types';
import sprite from '../../../../assets/images/icons/sprite.svg';
import styles from '../RegistrationForm.module.scss';

const InputPassword = ({ name, value: password, onChange, placeholder }) => {
  const [inputType, setInputType] = useState('password');
  const [eyeIconName, setEyeIconName] = useState('eye');

  const toggleVisibilityHandler = () => {
    if (inputType === 'password') {
      setInputType('text');
      setEyeIconName('eye-blocked');
    } else {
      setInputType('password');
      setEyeIconName('eye');
    }
  };

  const { label, input, eye } = styles;
  const button = (
    <button className={eye} type="button" onClick={toggleVisibilityHandler}>
      <svg width="32" height="32">
        <use xlinkHref={`${sprite}#${eyeIconName}`}/>
      </svg>
    </button>
  );

  return (
    <label className={label}>
      <input
        className={input}
        type={inputType}
        name={name}
        value={password}
        onChange={onChange}
        placeholder={placeholder}
      />
      {password.length ? button : null}
    </label>
  );
};

InputPassword.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default InputPassword;
