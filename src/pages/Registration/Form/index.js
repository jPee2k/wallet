import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';

import schema from './validationSchema.js';
import { useCreateUserMutation } from '../../../services/authAPI.js';
import { addUserData, addError } from './regFormSlice.js';
import { showSpinner, hideSpinner } from '../../../components/Spinner/spinnerSlice.js';

import Input from '../../../components/Input';
import InputPassword from '../../../components/InputPassword';
import Button from '../../../components/Button';

import styles from './styles.module.scss';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const [createUser, { isLoading }] = useCreateUserMutation();

  useEffect(() => {
    isLoading && dispatch(showSpinner());
  }, [isLoading]);

  const initValues = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  };

  const submitHandler = async (validatedData, actions) => {
    try {
      const response = await createUser(validatedData).unwrap();
      dispatch(addUserData(response));
      dispatch(hideSpinner());
      actions.resetForm();
    } catch (err) {
      dispatch(addError(err));
      dispatch(hideSpinner());
      alert(err.data.message); // TODO -> show modal
    }
    actions.setSubmitting(false);
  };

  const { form, button } = styles;

  return (
    <Formik
      initialValues={initValues}
      validateOnBlur={false}
      validationSchema={schema}
      onSubmit={submitHandler}
    >
      {({ values }) => (
        <Form className={form} noValidate={true}>
          <Input name="username" placeholder="Name"/>
          <Input type="email" name="email" placeholder="Email"/>
          <InputPassword name="password" value={values.password} placeholder="Password"/>
          <InputPassword name="passwordConfirmation" placeholder="Password confirmation"
            value={values.passwordConfirmation}/>
          <Button className={button} type="submit" disabled={isLoading}>Sign up</Button>
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
