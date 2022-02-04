import React, { useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Spinner from '../components/Spinner';
import MainPage from '../pages/Main';
import AuthPage from '../pages/Auth';

const App = () => {
  const navigate = useNavigate();
  const isAuth = useSelector(({ auth }) => auth.session.isAuth);

  useEffect(() => (isAuth ? navigate('/') : navigate('/register')), [isAuth]);

  return (
    <React.Fragment>
      <nav style={{ position: 'absolute', right: 0 }}>
        {isAuth ? (
          <Link to="/">Main</Link>
        ) : (
          <React.Fragment>
            <Link to="/register">Register</Link>{' | '}
            <Link to="/login">Login</Link>
          </React.Fragment>
        )}
      </nav>

      <Routes>
        {isAuth ? (
          <Route index element={<MainPage/>}/>
        ) : (
          <React.Fragment>
            <Route path="/register" element={<AuthPage action="register"/>}/>
            <Route path="/login" element={<AuthPage action="login"/>}/>
          </React.Fragment>
        )}

        <Route path="*" element={<h2>404: This page is not found</h2>}/>
      </Routes>

      <Spinner/>
    </React.Fragment>
  );
};

export default App;
