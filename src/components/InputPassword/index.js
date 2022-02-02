import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage, Field } from 'formik';
import { ReactComponent as Eye } from '../../assets/images/icons/eye.svg';
import { ReactComponent as EyeBlocked } from '../../assets/images/icons/eye-blocked.svg';

const InputPassword = ({ name, value, ...props }) => {
  const [inputType, setInputType] = useState('password');

  const toggleVisibilityHandler = () => {
    inputType === 'password' ? setInputType('text') : setInputType('password');
  };

  const button = (
    <button type="button" onClick={toggleVisibilityHandler}>
      {inputType === 'password' ? <Eye/> : <EyeBlocked/>}
    </button>
  );

  return (
    <label>
      <span>
        <Field {...props} type={inputType} name={name}/>
        {value.length ? button : null}
      </span>
      <ErrorMessage name={name} component="span"/>
    </label>
  );
};

InputPassword.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default InputPassword;
