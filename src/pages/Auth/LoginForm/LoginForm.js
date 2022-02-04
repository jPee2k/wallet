import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';

import schema from './validationSchema.js';
import { useAuthUserMutation } from '../../../services/authAPI.js';
import { addUserData, addError } from '../formSlice.js';
import { showSpinner, hideSpinner } from '../../../components/Spinner/spinnerSlice.js';

import Input from '../../../components/Input';
import InputPassword from '../../../components/InputPassword';
import Button from '../../../components/Button';

import styles from './styles.module.scss';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [authUser, { isLoading }] = useAuthUserMutation();

  useEffect(() => {
    isLoading && dispatch(showSpinner());
  }, [isLoading]);

  const initValues = {
    email: '',
    password: '',
  };

  const submitHandler = async (validatedData, actions) => {
    try {
      const response = await authUser(validatedData).unwrap();
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
          <Input type="email" name="email" placeholder="Email"/>
          <InputPassword name="password" value={values.password} placeholder="Password"/>
          <Button className={button} type="submit" disabled={false}>Sign up</Button>
        </Form>
      )}
    </Formik>
  );
};

LoginForm.propTypes = {
  hideLoader: PropTypes.func,
  showLoader: PropTypes.func,
};

export default LoginForm;
