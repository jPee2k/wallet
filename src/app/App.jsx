import React, { useEffect } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner';
import MainPage from '../pages/Main';
import RegistrationPage from '../pages/Registration';
import LoginPage from '../pages/Login';

const auth = false;

const App = () => {
  const navigate = useNavigate();
  useEffect(() => (auth ? navigate('/') : navigate('/registration')), [auth]);

  return (
    <React.Fragment>
      <nav>
        <Link to="/">Main</Link><br/>
        <Link to="/registration">Registration</Link><br/>
        <Link to="/login">Login</Link><br/>
      </nav>

      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/registration" element={<RegistrationPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="*" element={<MainPage/>}/>
      </Routes>

      <Spinner/>
    </React.Fragment>
  );
};

export default App;
