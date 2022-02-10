import React from 'react';
import { Outlet } from 'react-router-dom';

import Currency from '../../components/Currency';
import UserCard from '../../components/UserCard';
import LogOutButton from '../../components/LogOutButton';
import NavButton from '../../components/NavButton';

import { ReactComponent as Chart } from '../../assets/images/icons/chart.svg';
import { ReactComponent as Card } from '../../assets/images/icons/card.svg';
import styles from './TransactionTab/styles.module.scss';

const { mainSectionBlock, currencyInfoBlock } = styles;

const HomePage = () => (
  <React.Fragment>
    <div className={mainSectionBlock}>
      <div className={currencyInfoBlock}>
        <UserCard/>
        <Currency/>
      </div>
      <Outlet/>{/* content from router */}
    </div>

    <div style={{ display: 'flex', gap: '30px' }}>
      <NavButton ariaLabel="transactions page" to="/transactions"><Card/></NavButton>
      <NavButton ariaLabel="statistics page" to="/statistics"><Chart/></NavButton>
      <LogOutButton/>
    </div>
  </React.Fragment>
);

export default HomePage;
