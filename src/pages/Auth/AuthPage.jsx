import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Logo from '../../components/Logo';
import RegistrationForm from './RegistrationForm';
import LoginForm from './LoginForm';

import styles from './styles.module.scss';

const { page, section, logo, link } = styles;

const AuthPage = ({ action = 'register' }) => (
  <div className={page}>
    <section className={section}>
      <Logo className={logo}/>
      {action === 'register' ? <RegistrationForm/> : <LoginForm/>}
      <span className={link}>
        or: {action === 'register' ? <Link to="/login">Log in</Link> : <Link to="/register">Sign up</Link>}
      </span>
    </section>
  </div>
);

AuthPage.propTypes = {
  action: PropTypes.oneOf(['register', 'login']).isRequired,
};

export default AuthPage;
