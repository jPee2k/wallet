import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Spinner from '../components/Spinner';
import ProtectedRoute from '../components/ProtectedRoute';
import AuthRoute from '../components/AuthRoute';
import MainPage from '../pages/Home';
import AuthPage from '../pages/Auth';

const App = () => (
  <React.Fragment>
    <Routes>
      <Route path="/register" element={<AuthRoute><AuthPage action="register"/></AuthRoute>}/>
      <Route path="/login" element={<AuthRoute><AuthPage action="login"/></AuthRoute>}/>
      <Route index element={<ProtectedRoute><MainPage/></ProtectedRoute>}/>

      <Route path="*" element={<h2>404: This page is not found</h2>}/>
    </Routes>

    <Spinner/>
  </React.Fragment>
);

export default App;
