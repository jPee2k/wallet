import React from 'react';
import { Outlet } from 'react-router-dom';
import Currency from '../../components/Currency';
import UserCard from '../../components/UserCard';
import Header from '../../components/Header';
import Navigation from '../../components/Navigation';
import styles from './TransactionTab/styles.module.scss';

const { mainSectionBlock, currencyInfoBlock } = styles;

const HomePage = () => (
  <React.Fragment>
    <Header/>
    <div className={mainSectionBlock}>
      <div className={currencyInfoBlock}>
        <UserCard/>
        <Currency/>
      </div>
      <Outlet/>{/* content from router */}
    </div>
    <Navigation/>
  </React.Fragment>
);

export default HomePage;
