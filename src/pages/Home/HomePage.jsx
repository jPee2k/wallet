import React from 'react';
import Currency from '../../components/Currency';
import UserCard from '../../components/UserCard';
import LogOutButton from '../../components/LogOutButton';

const HomePage = () => (
  <React.Fragment>
    <Currency/>
    <UserCard/>
    <LogOutButton/>
  </React.Fragment>
);

export default HomePage;
