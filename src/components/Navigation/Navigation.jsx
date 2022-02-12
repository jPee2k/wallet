import React from 'react';
import LogOutButton from '../LogOutButton';
import NavButton from '../NavButton';
import { ReactComponent as Chart } from '../../assets/images/icons/chart.svg';
import { ReactComponent as Card } from '../../assets/images/icons/card.svg';
import styles from './styles.module.scss';

const Navigation = () => {
  const today = new Date();
  // const timezoneOffset = today.().toString();
  const {
    settingsBlock,
    settingsList,
    settingsItem,
    currentData,
  } = styles;

  // TODO -> exchanged currency list
  return (
    <div className={settingsBlock}>
      <ul className={settingsList}>
        <li className={settingsItem}>
          <NavButton ariaLabel="transactions page" to="/transactions">
            <Card />
          </NavButton>
        </li>
        <li className={settingsItem}>
          <NavButton ariaLabel="statistics page" to="/statistics">
            <Chart />
          </NavButton>
        </li>
        <li className={settingsItem}>
          <LogOutButton />
        </li>
      </ul>
      <div className={currentData}>{today.getDay()} : {today.getMonth()} : {today.getYear()}</div>
    </div>
  );
};

export default Navigation;
