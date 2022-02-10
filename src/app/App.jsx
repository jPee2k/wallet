import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ProtectedRoute from '../components/ProtectedRoute';
import AuthRoute from '../components/AuthRoute';
import Spinner from '../components/Spinner';
import TransactionTab from '../pages/Home/TransactionTab';
import DiagramTab from '../pages/Home/DiagramTab';
import HomePage from '../pages/Home';
import AuthPage from '../pages/Auth';

const App = () => (
  <React.Fragment>
    <Routes>
      <Route path="/register" element={<AuthRoute><AuthPage action="register"/></AuthRoute>}/>
      <Route path="/login" element={<AuthRoute><AuthPage action="login"/></AuthRoute>}/>
      <Route path="/" element={<ProtectedRoute><HomePage/></ProtectedRoute>}>
        <Route path="transactions" element={<TransactionTab/>}/>
        <Route path="statistics" element={<DiagramTab/>}/>
      </Route>

      <Route path="*" element={<h2>404: This page is not found</h2>}/>
    </Routes>

    <Spinner/>
    <ToastContainer/>
  </React.Fragment>
);

export default App;
