import React from 'react';
import styles from './styles.module.scss';
import logo from '../../assets/images/wallet-logo.png';

const Header = () => {
  const {
    header,
    headerBlock,
    headerTitleBlock,
    title,
    titleDescription,
    logoImg,
  } = styles;

  return (
    <div className={header}>
      <div className={headerBlock}>
        <div className={headerTitleBlock}>
          <h1 className={title}>Cyber_WalleT</h1>
          <p className={titleDescription}>team react project</p>
        </div>
        <img src={logo} alt="logo" className={logoImg}/>
      </div>
    </div>
  );
};

export default Header;
