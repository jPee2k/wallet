import React from 'react';
import LogOutButton from '../LogOutButton';
import NavButton from '../NavButton';
import DateTime from '../DateTime';
import { ReactComponent as Chart } from '../../assets/images/icons/chart.svg';
import { ReactComponent as Card } from '../../assets/images/icons/card.svg';
import styles from './styles.module.scss';

const Navigation = () => {
  const {
    settingsBlock,
    settingsList,
    settingsItem,
    currentData,
  } = styles;

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
      <DateTime className={currentData}/>
    </div>
  );
};

export default Navigation;
