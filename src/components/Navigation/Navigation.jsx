import React from 'react';
import Media from 'react-media';
import { useLocation } from 'react-router-dom';
import LogOutButton from '../LogOutButton';
import NavButton from '../NavButton';
import DateTime from '../DateTime';
import { ReactComponent as Chart } from '../../assets/images/icons/chart.svg';
import { ReactComponent as Card } from '../../assets/images/icons/card.svg';
import { ReactComponent as Currency } from '../../assets/images/icons/currency.svg';
import styles from './styles.module.scss';

const Navigation = () => {
  const location = useLocation();
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
          <NavButton ariaLabel="transactions page" to="/transactions"
            isActive={location?.pathname === '/transactions'}
          >
            <Card />
          </NavButton>
        </li>
        <li className={settingsItem}>
          <NavButton ariaLabel="statistics page" to="/statistics"
            isActive={location?.pathname === '/statistics'}
          >
            <Chart/>
          </NavButton>
        </li>
        <Media queries={{ max: { maxWidth: 639 } }}>
          {(matches) => (matches.max ? (
            <li className={settingsItem}>
              <NavButton ariaLabel="currency page" to="/currency"
                isActive={location?.pathname === '/currency'}
              >
                <Currency/>
              </NavButton>
            </li>
          ) : null)}
        </Media>
        <li className={settingsItem}>
          <LogOutButton/>
        </li>
      </ul>
      <DateTime className={currentData}/>
    </div>
  );
};

export default Navigation;
