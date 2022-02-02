import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';

// import { registerUser } from '../../../services/userAPI.js';
import schema from './validationSchema.js';

import Input from '../../../components/Input';
import InputPassword from '../../../components/InputPassword';
import Button from '../../../components/Button';

const RegistrationForm = () => {
  const initValues = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  const submitHandler = (userData, actions) => {
    console.log(userData, actions);
  };

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
