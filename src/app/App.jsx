import React, { useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Spinner from '../components/Spinner';
import MainPage from '../pages/Main';
import RegistrationPage from '../pages/Registration';
import LoginPage from '../pages/Login';

const App = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(({ registration }) => registration.session.isAuth);

  useEffect(() => (isAuth ? navigate('/') : navigate('/registration')), [isAuth]);

  return (
    <React.Fragment>
      <nav style={{ position: 'absolute', right: 0 }}>
        <Link to="/">Main</Link>{' | '}
        <Link to="/registration">Registration</Link>{' | '}
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        {isAuth ? (
          <Route index element={<MainPage/>}/>
        ) : (
          <React.Fragment>
            <Route path="/registration" element={<RegistrationPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
          </React.Fragment>
        )}

        <Route path="*" element={<h2>404: This page is not found</h2>}/>
      </Routes>

      <Spinner/>
    </React.Fragment>
  );
};

export default App;
