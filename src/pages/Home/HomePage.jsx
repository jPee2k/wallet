import React from 'react';
import { Outlet } from 'react-router-dom';
import Media from 'react-media';

import useTransactionsCategoriesQuery from '../../hooks/useTransactionsCategoriesQuery.js';
import useTransactionsQuery from '../../hooks/useTransactionsQuery.js';

import Currency from '../../components/Currency';
import UserCard from '../../components/UserCard';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';

import styles from './TransactionTab/styles.module.scss';

const HomePage = () => {
  useTransactionsQuery();
  useTransactionsCategoriesQuery();

  const { mainSectionBlock, currencyInfoBlock } = styles;
  return (
    <React.Fragment>
      <Header/>
      <div className={mainSectionBlock}>
        <div className={currencyInfoBlock}>
          <UserCard/>
          <Media queries={{ min: { minWidth: 640 } }}>
            {(matches) => (matches.min ? <Currency/> : null)}
          </Media>
        </div>

        <Outlet/>
      </div>

      <Navigation/>
    </React.Fragment>
  );
};

export default HomePage;
