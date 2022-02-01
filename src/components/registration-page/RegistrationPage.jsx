import React from 'react';
import Logo from './logo/Logo.jsx';
import RegistrationForm from './registration-form/RegistrationForm.jsx';
import styles from './RegistrationPage.module.scss';

const { page, registerSection, registerLogo, signIn } = styles;

const RegistrationPage = () => (
  <div className={page}>
    <section className={registerSection}>
      <Logo className={registerLogo}/>
      <RegistrationForm/>
      <span className={signIn}>
        or: <a href="/login">Sign in</a>
      </span>
    </section>
  </div>
);

export default RegistrationPage;
