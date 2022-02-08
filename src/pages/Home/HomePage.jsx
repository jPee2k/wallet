import React from 'react';
import Currency from '../../components/Currency';
import UserCard from '../../components/UserCard';
import LogOutButton from '../../components/LogOutButton';
import ButtonAddTransaction from '../../components/ButtonAddTransaction';
import ModalAddTransaction from '../../components/ModalAddTransaction';

const HomePage = () => (
  <React.Fragment>
    <Currency/>
    <UserCard/>
    <LogOutButton/>
    <ButtonAddTransaction/>

    <ModalAddTransaction/>
  </React.Fragment>
);

export default HomePage;
