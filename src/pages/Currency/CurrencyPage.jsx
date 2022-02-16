import React from 'react';
import Media from 'react-media';
import { Navigate } from 'react-router-dom';

import Currency from '../../components/Currency';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';

import styles from './styles.module.scss';

const CurrencyPage = () => {
  const queries = {
    max: { maxWidth: 639 },
  };

  const { currencyPage } = styles;
  return (
    <Media queries={queries}>
      {(matches) => (matches.max ? (
        <section className={currencyPage}>
          <Header/>
          <Currency/>
          <Navigation/>
        </section>
      ) : (
        <Navigate to="/login"/>
      ))}
    </Media>
  );
};

export default CurrencyPage;
