import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../components/Logo';
import RegistrationForm from './Form';
import styles from './styles.module.scss';

const { page, registerSection, registerLogo, signIn } = styles;

const RegistrationPage = () => (
  <div className={page}>
    <section className={registerSection}>
      <Logo className={registerLogo}/>
      <RegistrationForm/>
      <span className={signIn}>
        or: <Link to="/login">Sign in</Link>
      </span>
    </section>
  </div>
);

export default RegistrationPage;
