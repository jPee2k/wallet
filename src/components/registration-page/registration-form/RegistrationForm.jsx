import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { useMutation } from 'react-query';
import { connect } from 'react-redux';

import validationSchema from './validation-schema.js';
import { registerUser } from '../../../services/user.js';
import { actionCreators } from '../../../reduxStore/actionCreators.js';

import InputPassword from './input-password/InputPassword.jsx';
import Button from '../../button/Button.jsx';

import styles from './RegistrationForm.module.scss';

const RegistrationForm = ({ hideLoader, showLoader, addUserToken, addUserData, addError }) => {
  const { isLoading, isSuccess, isError, error, data, mutate } = useMutation(
    'UserRegistration',
    registerUser,
    {
      enabled: false,
      retry: false,
      retryDelay: 0,
      refetchOnWindowFocus: false,
    },
  );
  const { handleSubmit, handleChange, values, errors, touched } = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema,
    onSubmit: (userData, actions) => {
      mutate(userData);
      isSuccess && actions.resetForm();
    },
  });

  if (isLoading) {
    showLoader();
  }

  if (isError) {
    addError(error);
    hideLoader();
    console.log('error');
    // TODO -> show modal
  }

  if (isSuccess) {
    const { user, token } = data;
    addUserToken(token);
    addUserData(user);
    hideLoader();
    console.log('success');
    // TODO -> redirect
  }

  const { form, wrapper, label, input, errorMessage } = styles;
  return (
    <form className={form} autoComplete="off" onSubmit={handleSubmit} noValidate={true}>
      <div className={wrapper}>
        <label className={label}>
          <input className={input}
            type="text"
            name="username"
            value={values.username}
            onChange={handleChange}
            placeholder="Name"
          />
        </label>
        {
          touched.username && errors.username
            ? (<span className={errorMessage}>{errors.username}</span>)
            : null
        }
      </div>

      <div className={wrapper}>
        <label className={label}>
          <input className={input}
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
          />
        </label>
        {
          touched.email && errors.email
            ? (<span className={errorMessage}>{errors.email}</span>)
            : null
        }
      </div>

      <div className={wrapper}>
        <InputPassword
          name="password"
          value={values.password}
          onChange={handleChange}
          placeholder="Password"
        />
        {
          touched.password && errors.password
            ? (<span className={errorMessage}>{errors.password}</span>)
            : null
        }
      </div>

      <div className={wrapper}>
        <InputPassword
          name="passwordConfirmation"
          value={values.passwordConfirmation}
          onChange={handleChange}
          placeholder="Password confirmation"
        />
        {
          touched.passwordConfirmation && errors.passwordConfirmation
            ? (<span className={errorMessage}>{errors.passwordConfirmation}</span>)
            : null
        }
      </div>

      <Button type="submit" disabled={isLoading}>Sign up</Button>
    </form>
  );
};

RegistrationForm.propTypes = {
  hideLoader: PropTypes.func,
  showLoader: PropTypes.func,
  addUserToken: PropTypes.func,
  addUserData: PropTypes.func,
  addError: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({
  showLoader: () => dispatch(actionCreators.showSpinner()),
  hideLoader: () => dispatch(actionCreators.hideSpinner()),
  addUserToken: (token) => dispatch(actionCreators.addUserToken(token)),
  addUserData: (data) => dispatch(actionCreators.addUserData(data)),
  addError: (error) => dispatch(actionCreators.addError(error)),
});

export default connect(null, mapDispatchToProps)(RegistrationForm);
