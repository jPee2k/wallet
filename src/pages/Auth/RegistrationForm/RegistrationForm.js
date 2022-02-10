import React from 'react';
import { Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import schema from './validationSchema.js';
import { useCreateUserMutation } from '../../../services/authAPI.js';
import { addUserData, addError } from '../../../app/slices/sessionSlice.js';

import Input from '../../../components/Input';
import InputPassword from '../../../components/InputPassword';
import Button from '../../../components/Button';

import styles from './styles.module.scss';
import { useLoader } from '../../../hooks/useLoader.js';

const RegistrationForm = () => {
  const [createUser, { isLoading, isError, isSuccess }] = useCreateUserMutation();
  const dispatch = useDispatch();

  useLoader({ dispatch, isLoading, isError, isSuccess });

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
      actions.resetForm();
    } catch (err) {
      const errMessage = err?.data?.message || 'Oops, something went wrong =(';
      dispatch(addError(err));
      toast.error(errMessage);
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
        <Form className={form} noValidate={true} autoComplete={'off'}>
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

export default RegistrationForm;
