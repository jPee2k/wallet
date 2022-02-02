import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { showSpinner, hideSpinner } from '../../../components/Spinner/spinnerSlice.js';

// import { registerUser } from '../../../services/userAPI.js';
import schema from './validationSchema.js';

import Input from '../../../components/Input';
import InputPassword from '../../../components/InputPassword';
import Button from '../../../components/Button';

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initValues = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  const submitHandler = (userData, actions) => {
    console.log(userData, actions);
  };

  // dispatch(showSpinner());
  // dispatch(hideSpinner());

  return (
    <Formik
      initialValues={initValues}
      validationSchema={schema}
      onSubmit={submitHandler}
    >
      {({ values }) => (
        <Form>
          <Input name="username" placeholder="Name"/>
          <Input type="email" name="email" placeholder="Email"/>
          <InputPassword name="password" value={values.password} placeholder="Password"/>
          <InputPassword name="passwordConfirmation" placeholder="Password confirmation"
            value={values.passwordConfirmation}/>
          <Button type="submit" disabled={false}>Sign up</Button>
        </Form>
      )}
    </Formik>
  );
};

RegistrationForm.propTypes = {
  hideLoader: PropTypes.func,
  showLoader: PropTypes.func,
  addUserToken: PropTypes.func,
  addUserData: PropTypes.func,
  addError: PropTypes.func,
};

export default RegistrationForm;
